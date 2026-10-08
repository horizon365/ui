---
title: ProseField
description: 'APIパラメータ、props、設定オプションを明確に文書化します。'
category: components
navigation.title: Field
links:
  - label: サイトマップ
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/prose/Field.vue
---

## 使用法

コンテンツに表示するフィールド、小道具、またはパラメータ。

::code-preview
::field{name="name" type="string" required class="w-full"}
`description`はプロップとして設定することも、** markdown **を完全にサポートするデフォルトスロットに設定することもできます。
::

#コード

```mdc
::field{name="name" type="string" required}
The `description` can be set as prop or in the default slot with full **markdown** support.
::
```

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
