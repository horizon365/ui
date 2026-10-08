---
title: 定义快捷方式
description: '一个可组合的应用程序中定义键盘快捷键。'
---

## 使用情况

使用自动导入的`defineShortcuts`组合工具定义键盘快捷键。

```vue
<script setup lang="ts">
const open = ref(false)

defineShortcuts({
  meta_k: () => {
    open.value = !open.value
  }
})
</script>
```

- 快捷方式会针对非macOS平台自动调整，将`meta`转换为`ctrl`。
- Composable使用VueUse的[`useEventListener`](https://vueuse.org/core/useEventListener/)来处理keydown事件。
- 有关可用快捷键的完整列表，请参阅API文档。配置中的键不区分大小写，因此`meta_k`和`meta_K`是等效的。

::tip{to="/docs/components/kbd"}
了解如何在**Kbd**组件文档中显示组件中的快捷方式。
::

## API

`defineShortcuts(config: MaybeRef<ShortcutsConfig>, options?: ShortcutsOptions): () => void`{lang="ts-type"}

为应用程序定义键盘快捷键。返回一个删除侦听器的函数，以防您需要在卸载组件之前停止快捷键。

### Parameters

::field-group

  ::field{name="config" type="MaybeRef<ShortcutsConfig>" required}
  一个对象，其中键是快捷方式定义，值是处理程序函数或快捷方式配置对象。传递一个`ref`以被动地更新快捷方式。值为`false`、`null`或`undefined`将跳过该快捷方式，这就是您有条件地启用快捷方式的方式。
  ::

  ::field{name="options" type="ShortcutsOptions"}
  快捷方式行为的可选配置。

    ::collapsible

      ::field-group
        ::field{name="chainDelay" type="number"}
        将快捷方式视为链接的两次按键之间的延迟时间。请将此延迟时间设置为`800`。
        ::

        ::field{name="layoutIndependent" type="boolean"}
        启用后，快捷键通过匹配物理键位置而不是字符值，在不同的键盘布局（阿拉伯语、希伯来语）中一致地工作。
        - `false`（默认）：使用`e.key`进行基于字符的匹配（布局特定）
        - `true`：使用`e.code`进行物理键匹配（布局不可知）
        ::
      ::
    ::
  ::
::

### php定义

快捷方式使用以下格式定义：

- 单键：`'a'`、`'b'`、`'1'`、`'?'`等
- key组合：使用`_`来分隔键，例如`'meta_k'`、`'ctrl_shift_f'`
- 关键序列：使用`-`定义序列，例如：`'g-d'`

### Modifiers

- `meta` / `command`：在macOS上代表`⌘ Command`，在其他平台上代表`Ctrl`
- `ctrl`：在所有平台上代表`Ctrl`
- `shift`：当需要Shift时用于字母键
- `alt` / `option`：在macOS上代表`⌥ Option`，在其他平台上代表`Alt`。根据物理键位置匹配，因为Option在macOS上重写字符

### 特殊钥匙

使用这些名称匹配特殊键。

- `escape`：按ESC键触发
- `enter`：按Enter键触发
- `arrowleft`、`arrowright`、`arrowup`、`arrowdown`：按相应箭头键触发
- `tab`：Tab键触发
- `backspace`：按退格键触发
- `delete`：按Delete键触发
- `space`：在空格键上触发。需要`layoutIndependent`，除非与`alt`结合使用

### ### 配置

每个快捷键都可以定义为具有以下属性的函数或对象：

`interface ShortcutConfig { handler: (e?: KeyboardEvent) => void; usingInput?: boolean | string }`{lang="ts-type"}

#### Parameters

::field-group
  ::field{name="handler" type="(e?: KeyboardEvent) => void" required}
  触发快捷方式时要执行的函数。它接收起始的`KeyboardEvent`。
  ::

  ::field{name="usingInput" type="boolean | string"}
  根据输入焦点控制快捷方式何时触发：
  - `false`（默认值）：仅当没有输入时才触发
  - `true`：即使聚焦了任何输入，也会触发
  - `string`：仅当指定的输入（按名称）被聚焦时才触发
  ::
::

## 示例

### 基本用法

```vue
<script setup lang="ts">
defineShortcuts({
  '?': () => openHelpModal(),
  'meta_k': () => openCommandPalette(),
  'g-d': () => navigateToDashboard()
})
</script>
```

### 带输入焦点处理

使用`usingInput`仅在聚焦特定输入时触发快捷方式。

```vue
<template>
  <UInput v-model="query" name="queryInput" />
</template>

<script setup lang="ts">
const query = ref('')

defineShortcuts({
  enter: {
    usingInput: 'queryInput',
    handler: () => performSearch()
  },
  escape: {
    usingInput: true,
    handler: () => clearSearch()
  }
})
</script>
```

### 正在从菜单项中提取快捷方式

使用`extractShortcuts`实用程序自动定义菜单项的快捷方式。

::tip{to="/docs/composables/extract-shortcuts"}
了解有关**extractShortcuts**实用程序的详细信息。
::
