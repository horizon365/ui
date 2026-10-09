---
title: AuthForm
description: 'ログイン、登録、パスワードリセットフォームを作成するカスタマイズ可能なフォーム。'
category: page
links:
  - label: フォーム
    to: /docs/components/form
    icon: i-simple-icons-nuxtdotjs
  - label: サイトマップ
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/AuthForm.vue
---

## 使用法

[Form](/docs/components/form)コンポーネントの上に構築された`AuthForm`コンポーネントは、ページで使用することも、[ PageCard](/docs/components/page-cardxph 09 xにラップすることもできます。

::component-example
---
name: 'auth-form-example'
collapse: true
---
::

### フィールド

フォームは`fields`プロパティに基づいて構築され、状態は内部で処理されます。

`fields`プロパティを次のプロパティを持つオブジェクトの配列として使用します。

- `name: string`{lang="ts-type"}
- `type: 'checkbox' | 'select' | 'otp' | 'InputHTMLAttributes['type']'`{lang="ts-type"}

各フィールドには、入力コンポーネントと適用される追加のプロップを決定する`type`プロパティが必要です。`checkbox`フィールドは[Checkbox](/docs/components/checkbox#props) propsを使用します。`select`フィールドは[SelectMenu](/docs/components/select-menu#props) propsを使用します。`otp`フィールドは[PinInput](/docs/components/pin-input#props) propsを使用します。他の型は[Input](/docs/components/input#props) propsを使用する。

[FormField](/docs/components/form-field#props)コンポーネントの任意のプロパティを各フィールドに渡すこともできます。

::component-code
---
prettier: true
ignore:
  - fields
  - class
external:
  - fields
externalTypes:
  - AuthFormField[]
props:
  fields:
    - name: 'email'
      type: 'email'
      label: 'Email'
      placeholder: 'Enter your email'
      required: true
    - name: 'password'
      type: 'password'
      label: 'Password'
      placeholder: 'Enter your password'
      required: true
    - name: 'country'
      type: 'select'
      label: 'Country'
      placeholder: 'Select country'
      items:
        - label: 'United States'
          value: 'us'
        - label: 'France'
          value: 'fr'
        - label: 'United Kingdom'
          value: 'uk'
        - label: 'Australia'
          value: 'au'
    - name: 'otp'
      type: 'otp'
      label: 'OTP'
      length: 6
      placeholder: '○'
    - name: 'remember'
      type: 'checkbox'
      label: 'Remember me'
      description: 'You will be logged in for 30 days.'
  class: 'max-w-sm'
---
::

### Title

`title`プロパティを使用してフォームのタイトルを設定します。

::component-code
---
prettier: true
ignore:
  - fields
  - class
external:
  - fields
externalTypes:
  - AuthFormField[]
props:
  title: 'Login'
  fields:
    - name: 'email'
      type: text
      label: 'Email'
    - name: 'password'
      type: 'password'
      label: 'Password'
  class: 'max-w-md'
---
::

### Description

`description`プロパティを使用してフォームの説明を設定します。

::component-code
---
prettier: true
ignore:
  - fields
  - title
  - class
external:
  - fields
externalTypes:
  - AuthFormField[]
props:
  title: 'Login'
  description: 'Enter your credentials to access your account.'
  fields:
    - name: 'email'
      type: text
      label: 'Email'
    - name: 'password'
      type: 'password'
      label: 'Password'
  class: 'max-w-md'
---
::

### Icon

`icon`プロパティを使用してフォームのアイコンを設定します。

::component-code
---
prettier: true
ignore:
  - fields
  - title
  - description
  - class
external:
  - fields
externalTypes:
  - AuthFormField[]
props:
  title: 'Login'
  description: 'Enter your credentials to access your account.'
  icon: 'i-lucide-user'
  fields:
    - name: 'email'
      type: text
      label: 'Email'
    - name: 'password'
      type: 'password'
      label: 'Password'
  class: 'max-w-md'
---
::

### プロバイダー

`providers`プロパティを使用して、フォームにプロバイダを追加します。

[Button](/docs/components/button)コンポーネントから、`variant`、`color`、`to`などの任意のプロパティを渡すことができます。

::component-code
---
prettier: true
ignore:
  - fields
  - title
  - description
  - icon
  - providers
  - headerAlign
  - class
external:
  - providers
  - fields
externalTypes:
  - ButtonProps[]
  - AuthFormField[]
props:
  title: 'Login'
  description: 'Enter your credentials to access your account.'
  icon: 'i-lucide-user'
  providers:
    - label: 'Google'
      icon: 'i-simple-icons-google'
      color: 'neutral'
      variant: 'subtle'
    - label: 'GitHub'
      icon: 'i-simple-icons-github'
      color: 'neutral'
      variant: 'subtle'
  fields:
    - name: 'email'
      type: text
      label: 'Email'
    - name: 'password'
      type: 'password'
      label: 'Password'
  class: 'max-w-md'
---
::

### Separator

`separator`プロパティを使用して、[Separator](/docs/components/separator)をプロバイダとフィールド間でカスタマイズします。デフォルトは`or`です。

::component-code
---
prettier: true
ignore:
  - fields
  - title
  - description
  - icon
  - providers
  - class
external:
  - providers
  - fields
externalTypes:
  - ButtonProps[]
  - AuthFormField[]
props:
  title: 'Login'
  description: 'Enter your credentials to access your account.'
  icon: 'i-lucide-user'
  providers:
    - label: 'Google'
      icon: 'i-simple-icons-google'
      color: 'neutral'
      variant: 'subtle'
    - label: 'GitHub'
      icon: 'i-simple-icons-github'
      color: 'neutral'
      variant: 'subtle'
  fields:
    - name: 'email'
      type: text
      label: 'Email'
    - name: 'password'
      type: 'password'
      label: 'Password'
  separator: 'Providers'
  class: 'max-w-md'
---
::

[ Separator](/docs/components/separator#props)コンポーネントの任意のプロパティを渡してカスタマイズできます。

::component-code
---
prettier: true
ignore:
  - fields
  - title
  - description
  - icon
  - providers
  - class
external:
  - providers
  - fields
externalTypes:
  - ButtonProps[]
  - AuthFormField[]
props:
  title: 'Login'
  description: 'Enter your credentials to access your account.'
  icon: 'i-lucide-user'
  providers:
    - label: 'Google'
      icon: 'i-simple-icons-google'
      color: 'neutral'
      variant: 'subtle'
    - label: 'GitHub'
      icon: 'i-simple-icons-github'
      color: 'neutral'
      variant: 'subtle'
  fields:
    - name: 'email'
      type: text
      label: 'Email'
    - name: 'password'
      type: 'password'
      label: 'Password'
  separator:
    icon: 'i-lucide-user'
  class: 'max-w-md'
---
::

### 送信

`submit`プロパティを使用してフォームの送信ボタンを変更します。

[Button](/docs/components/button)コンポーネントから、`variant`、`color`、`to`などの任意のプロパティを渡すことができます。

::component-code
---
prettier: true
ignore:
  - fields
  - title
  - description
  - icon
  - providers
  - submit.label
  - submit.color
  - submit.variant
  - class
external:
  - fields
externalTypes:
  - AuthFormField[]
props:
  title: 'Login'
  description: 'Enter your credentials to access your account.'
  icon: 'i-lucide-user'
  fields:
    - name: 'email'
      type: text
      label: 'Email'
    - name: 'password'
      type: 'password'
      label: 'Password'
  submit:
    label: 'Submit'
    color: 'error'
    variant: 'subtle'
  class: 'max-w-md'
---
::

## サンプル

### ページ内

`AuthForm`コンポーネントを[ PageCard](/docs/components/page-card)コンポーネントでラップして、`login.vue`ページ内などに表示できます。

::component-example
---
name: 'auth-form-page-example'
collapse: true
---
::

## API

### Props

:component-props

::callout{icon="i-simple-icons-mdnwebdocs" to="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form#attributes" target="_blank"}
このコンポーネントはすべてのネイティブ`<form>` HTML属性もサポートします。
::

### スロット

:component-slots

### Emits

:component-emits

### Expose

[`useTemplateRef`](https://vuejs.org/api/composition-api-helpers.html#usetemplateref)を使用して型付きコンポーネントインスタンスにアクセスすることができます。例えば、別のフォーム例えば"reset"フォームで次のようにできます。

```vue
<script setup lang="ts">
const authForm = useTemplateRef('authForm')
</script>

<template>
  <UAuthForm ref="authForm" />
</template>
```

これにより、以下の（公開された）プロパティにアクセスできます。

| 名前|タイプ|
| ---- | ---- |
| `formRef`{lang="ts-type"}| `Ref<HTMLFormElement \| null>`{lang="ts-type"}|
| `state`{lang="ts-type"}| `Reactive<FormStateType>`{lang="ts-type"}|

## Theme

:component-theme

## Changelog

:component-changelog
