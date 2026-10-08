---
title: defineショートカット
description: 'アプリでキーボードショートカットを定義するためのコンポーザブル。'
---

## 使用法

自動インポートされた`defineShortcuts`コンポーザブルを使用して、キーボードショートカットを定義します。

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

- ショートカットはmacOS以外のプラットフォーム用に自動的に調整され、`meta`から`ctrl`に変換されます。
- コンポーザブルは、VueUseの[`useEventListener`](https://vueuse.org/core/useEventListener/)を使用してキーダウンイベントを処理します。
- 利用可能なショートカットキーの完全なリストについては、[`KeyboardEvent.key`](https://developer.mozilla.org/en-US/docs/Web/API/UI_Events/Keyboard_event_key_values) APIドキュメントを参照してください。設定内のキーは大文字小文字を区別しないため、`meta_k`と`meta_K`は等価です。

::tip{to="/docs/components/kbd"}
コンポーネント内でショートカットを表示する方法については、** Kbd **コンポーネントのドキュメントを参照してください。
::

##  API

`defineShortcuts(config: MaybeRef<ShortcutsConfig>, options?: ShortcutsOptions): () => void`{lang="ts-type"}

アプリケーションのキーボードショートカットを定義します。コンポーネントのアンマウント前にショートカットを停止する必要がある場合に備えて、リスナーを削除する関数を返します。

### パラメータ

::field-group

  ::field{name="config" type="MaybeRef<ShortcutsConfig>" required}
  ショートカット定義と値がキーとなるオブジェクトは、ハンドラ関数またはショートカット設定オブジェクトのいずれかです。ショートカットをリアクティブに更新するには、`ref`を渡します。`false`、`null`または`undefined`の値は、ショートカットをスキップします。これにより、条件付きで有効にします。
  ::

  ::field{name="options" type="ShortcutsOptions"}
  ショートカット動作のオプション設定。

    ::collapsible

      ::field-group
        ::field{name="chainDelay" type="number"}
        ショートカットをチェーンとみなすためのキー押下間の遅延。デフォルトは`800`です。
        ::

        ::field{name="layoutIndependent" type="boolean"}
        有効にすると、ショートカットは文字値ではなく物理的なキー位置に一致することで、さまざまなキーボードレイアウト（アラビア語、ヘブライ語）で一貫して動作します。
        - `false`デフォルト文字ベースのマッチングに`e.key`を使用レイアウト固有
        - `true`物理キーマッチングに`e.code`を使用レイアウトに依存
        ::
      ::
    ::
  ::
::

### ショートカット定義

ショートカットは以下の形式で定義されます。

- シングルキー：`'a'`、`'b'`、`'1'`、`'?'`など。
- キーの組み合わせ`_`を使用してキーを分離します。例：`'meta_k'`、`'ctrl_shift_f'`
- キーシーケンス`-`を使用してシーケンスを定義します。例：`'g-d'`

### 修飾子

- `meta`/`command` macOSでは`⌘ Command`、その他のプラットフォームでは`Ctrl`を表します。
- `ctrl`すべてのプラットフォームで`Ctrl`を表します。
- `shift`：Shiftが必要な場合のアルファベットキーに使用されます。
- `alt`/`option` macOSでは`⌥ Option`、その他のプラットフォームでは`Alt`を表します。物理的なキーの位置で一致します。OptionはmacOSで文字を書き換えます。

### 特殊キー

特殊キーにマッチする名前を使用します。

- `escape` Escキーのトリガー
- `enter`：Enterキーでトリガー
- `arrowleft``arrowright``arrowup``arrowdown`それぞれの矢印キーでトリガー
- `tab`タブキーのトリガー
- `backspace` Backspaceキーのトリガー
- `delete` Deleteキーのトリガー
- `space`スペースバーのトリガー。`alt`と組み合わせない限り、`layoutIndependent`が必要です。

### ショートカット設定

各ショートカットは、次のプロパティを持つ関数またはオブジェクトとして定義できます。

`interface ShortcutConfig { handler: (e?: KeyboardEvent) => void; usingInput?: boolean | string }`{lang="ts-type"}

#### パラメータ

::field-group
  ::field{name="handler" type="(e?: KeyboardEvent) => void" required}
  ショートカットがトリガーされたときに実行される関数です。発信元の`KeyboardEvent`を受け取ります。
  ::

  ::field{name="usingInput" type="boolean | string"}
  入力フォーカスに基づいてショートカットがトリガーされるタイミングを制御します。
  - `false`デフォルトショートカットは入力がフォーカスされていない場合にのみトリガーされます。
  - `true`：入力にフォーカスがあってもショートカットがトリガーされます
  - `string`：指定した入力（名前）がフォーカスされた場合にのみショートカットがトリガーされます
  ::
::

## 例

### 基本的な使い方

```vue
<script setup lang="ts">
defineShortcuts({
  '?': () => openHelpModal(),
  'meta_k': () => openCommandPalette(),
  'g-d': () => navigateToDashboard()
})
</script>
```

### 入力フォーカス処理付き

`usingInput`を使用して、特定の入力がフォーカスされている場合にのみショートカットをトリガーします。

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

### メニュー項目からショートカットを抽出する

`extractShortcuts`ユーティリティを使用して、メニュー項目からショートカットを自動的に定義します。

::tip{to="/docs/composables/extract-shortcuts"}
** extractShortcuts **ユーティリティの詳細をご覧ください。
::
