---
title: ProseCode Group
description: 'タブ付きインターフェイスで複数のコード例をグループ化します。'
category: components
navigation.title: CodeGroup
links:
  - label: サイトマップ
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/prose/CodeGroup.vue
---

## 使用法

コードブロックを`code-group`コンポーネントにラップして、タブでグループ化します。

::code-preview{class="[&>div]:*:my-0 [&>div]:*:w-full"}

:::code-group

```bash [pnpm]
pnpm add @nuxt/ui
```

```bash [yarn]
yarn add @nuxt/ui
```

```bash [npm]
npm install @nuxt/ui
```

```bash [bun]
bun add @nuxt/ui
```

:::

#code

````mdc
::code-group

```bash [pnpm]
pnpm add @ nuxt/ui
```

```bash [yarn]
yarn add @ nuxt/ui
```

```bash [npm]
npm install @ nuxt/ui
```

```bash [bun]
bun add @ nuxt/ui
```

::
````

::

::note{to="/docs/typography/code#code-blocks"}
`ProsePre`コンポーネントと同様に、`CodeGroup`はファイル名、アイコン、コピーボタンを処理します。
::

## API

### Props

:component-props{prose}

### スロット

:component-slots{prose}

## Theme

:component-theme{prose}

## Changelog

:component-changelog{prefix="prose"}
