---
title: 提取快捷方式
description: '从菜单项中提取键盘快捷键的实用程序。'
---

## 使用情况

使用自动导入的`extractShortcuts`实用程序可以从菜单项中定义键盘快捷键。它可以从以下组件中提取快捷键：[DropdownMenu](/docs/components/dropdown-menu)，[ContextMenu](/docs/components/context-menu)或[CommandPalette](/docs/components/command-palette)其中项目已定义。

```vue
<script setup lang="ts">
const items = [{
  label: 'Save',
  icon: 'i-lucide-file-down',
  kbds: ['meta', 'S'],
  onSelect() {
    save()
  }
}, {
  label: 'Copy',
  icon: 'i-lucide-copy',
  kbds: ['meta', 'C'],
  onSelect() {
    copy()
  }
}]

defineShortcuts(extractShortcuts(items))
</script>
```

::tip{to="/docs/composables/define-shortcuts"}
在**defineShortcuts**composable文档中了解有关键盘快捷键的详细信息。
::

## API

`extractShortcuts(items: any[] | any[][], separator?: '_' | '-'): ShortcutsConfig`{lang="ts-type"}

从菜单项数组中提取键盘快捷键并返回与`defineShortcuts`兼容的配置对象。

#### Parameters

::field-group

  ::field{name="items" type="any[] | any[][]" required}
  包含快捷方式定义的菜单项数组（或嵌套数组）。每个项可以具有以下属性：

    ::collapsible

      ::field-group

        ::field{name="kbds" type="string[]"}
        构成快捷键的键盘键数组（例如`['meta', 'S']`）。
        ::

        ::field{name="onSelect" type="() => void"}
        当快捷方式被触发时执行的回调函数。
        ::

        ::field{name="onClick" type="() => void"}
        另一个回调函数（在未定义`onSelect`时使用）。
        ::

        ::field{name="children" type="any[]"}
        递归提取快捷方式的嵌套菜单项。
        ::

        ::field{name="items" type="any[]"}
        嵌套菜单项的替代属性。
        ::
      ::
    ::
  ::

  ::field{name="separator" type="'_' | '-'"}
  用于连接键盘键的分隔符。使用`'_'`表示键组合（例如`meta_k`），或使用`'-'`表示键序列（例如`g-d`）。分隔符为`'_'`。
  ::
::

**返回：**一个可以直接传递给`defineShortcuts`的`ShortcutsConfig`对象。

示例

### With nested items

该实用程序递归遍历`children`和`items`属性，从嵌套菜单结构中提取快捷方式。

```vue
<script setup lang="ts">
import type { DropdownMenuItem } from '@nuxt/ui'

const items: DropdownMenuItem[][] = [[{
  label: 'Edit',
  icon: 'i-lucide-pencil',
  kbds: ['E'],
  onSelect() {
    edit()
  }
}, {
  label: 'Duplicate',
  icon: 'i-lucide-copy',
  kbds: ['D'],
  onSelect() {
    duplicate()
  }
}], [{
  label: 'Invite users',
  icon: 'i-lucide-user-plus',
  children: [[{
    label: 'Invite by email',
    icon: 'i-lucide-send-horizontal',
    kbds: ['meta', 'E'],
    onSelect() {
      inviteByEmail()
    }
  }, {
    label: 'Invite by link',
    icon: 'i-lucide-link',
    kbds: ['meta', 'I'],
    onSelect() {
      inviteByLink()
    }
  }]]
}], [{
  label: 'Delete',
  icon: 'i-lucide-trash',
  kbds: ['meta', 'backspace'],
  onSelect() {
    remove()
  }
}]]

defineShortcuts(extractShortcuts(items))
</script>

<template>
  <UDropdownMenu :items="items">
    <UButton label="Actions" />
  </UDropdownMenu>
</template>
```

### With key sequences

使用`separator`参数创建键序列而不是组合键。

```vue
<script setup lang="ts">
const items = [{
  label: 'Go to Dashboard',
  kbds: ['G', 'D'],
  onSelect() {
    navigateTo('/dashboard')
  }
}, {
  label: 'Go to Settings',
  kbds: ['G', 'S'],
  onSelect() {
    navigateTo('/settings')
  }
}]

// Using '-' creates key sequences: 'g-d', 'g-s'
defineShortcuts(extractShortcuts(items, '-'))
</script>
```
