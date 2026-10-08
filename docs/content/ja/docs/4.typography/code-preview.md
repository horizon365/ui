---
title: ProseCode Preview
description: 'コード例をプレビューとソースとともに表示し、より明確なドキュメントを作成します。'
category: components
navigation.title: CodePreview
links:
  - label: サイトマップ
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/prose/CodePreview.vue
---

## 使用法

任意のコンテンツを`code-preview`コンポーネントでラップして、`code`スロットを使用してソースコードと一緒にライブプレビューを表示します。

::code-preview{class="[&>div]:*:my-0 [&>div]:*:w-full" label="プレビュー"}

::code-preview{class="[&>div]:*:my-0"}
`inline code`

#コード

```mdc
`inline code`
```

::

#コード

````mdc
::code-preview
`inline code`

#code
```mdc
`inline code`
```
::
````

::

##  API

###  Props

component—props {prose}

### スロット

component—slots {prose}

## テーマ

component—theme {prose}

##  Changelog

component—changelog {prefix="prose"}
