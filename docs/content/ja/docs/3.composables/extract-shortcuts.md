---
title: extractショートカット
description: 'メニュー項目からキーボードショートカットを抽出するユーティリティ。'
---

## 使用法

自動インポートされた`extractShortcuts`ユーティリティを使用して、メニュー項目からキーボードショートカットを定義します。[ DropdownMenu ](/docs/components/dropdown-menu)のようなコンポーネントからショートカットを抽出します。[ ContextMenu ](/docs/components/context-menu)または[ CommandPalette ](/docs/components/command-palette)ここで、項目は`kbds`が定義されています。

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
キーボードショートカットの詳細については、** defineShortcuts ** composableドキュメントを参照してください。
::

##  API

`extractShortcuts(items: any[] | any[][], separator?: '_' | '-'): ShortcutsConfig`{lang="ts-type"}

メニュー項目の配列からキーボードショートカットを抽出し、`defineShortcuts`と互換性のある構成オブジェクトを返します。

#### パラメータ

::field-group

  ::field{name="items" type="any[] | any[][]" required}
  ショートカット定義を含むメニューアイテムの配列（またはネストされた配列）。各アイテムは以下のプロパティを持つことができます。

    ::collapsible

      ::field-group

        ::field{name="kbds" type="string[]"}
        ショートカットを構成するキーボードキーの配列例：`['meta', 'S']`。
        ::

        ::field{name="onSelect" type="() => void"}
        ショートカットがトリガーされたときに実行するコールバック関数。
        ::

        ::field{name="onClick" type="() => void"}
        代替コールバック関数`onSelect`が定義されていない場合に使用。
        ::

        ::field{name="children" type="any[]"}
        ショートカットを再帰的に抽出するネストされたメニュー項目。
        ::

        ::field{name="items" type="any[]"}
        ネストされたメニュー項目の代替プロパティ。
        ::
      ::
    ::
  ::

  ::field{name="separator" type="'_' | '-'"}
  キーボードキーを結合するために使用されるセパレーター。キーの組み合わせには`'_'`を、キーシーケンスには`'-'`を使用します。デフォルトは`'_'`です。
  ::
::

**戻り値** A `ShortcutsConfig`オブジェクトで、`defineShortcuts`に直接渡すことができます。

## 例

### ネストされたアイテム

このユーティリティは、`children`および`items`のプロパティを再帰的にトラバースし、ネストされたメニュー構造からショートカットを抽出します。

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

### キーシーケンス付き

`separator`パラメータを使用して、キーの組み合わせの代わりにキーシーケンスを作成します。

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
