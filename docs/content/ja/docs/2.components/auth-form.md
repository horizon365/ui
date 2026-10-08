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

[ Form ](/docs/components/form)コンポーネントの上に構築されている`AuthForm`コンポーネントは、ページ内で使用することも、[ PageCard ](/docs/components/page-card)にラップすることもできます。

::component-example
---
名前'auth—form—example'
崩壊真
---
::

### フィールズ

フォームは`fields`プロパティに基づいて構築され、状態は内部で処理されます。

`fields` propを、次のプロパティを持つオブジェクトの配列として使用します。

- `name: string`{lang="ts-type"}
- `type: 'checkbox' | 'select' | 'otp' | 'InputHTMLAttributes['type']'`{lang="ts-type"}

各フィールドには`type`プロパティが含まれていなければなりません。`checkbox`フィールド使用[ Checkbox ](/docs/components/checkbox#props) props `select`フィールド使用[ SelectMenu ](/docs/components/select-menu#props) props `otp`フィールドは[ PinInput ](/docs/components/pin-input#props) propsを使用し、他のすべてのタイプは[ Input ](/docs/components/input#props) propsを使用します。

また、[ FormField ](/docs/components/form-field#props)コンポーネントのプロパティを各フィールドに渡すこともできます。

::component-code
---
きれい真
無視
  - フィールド
  - クラス
外部
  - フィールド
externalTypes
  -  AuthFormField []
小道具
  フィールド
    -  name 'email'
      タイプ'メール'
      ラベル'メール'
      プレースホルダー 'メールアドレスを入力'
      必須true
    -  name 'パスワード'
      タイプ'パスワード'
      ラベル'パスワード'
      プレースホルダー 'パスワードを入力'
      必須true
    -  name '国'
      タイプ'選択'
      ラベル'国'
      プレースホルダー '国を選択'
      アイテム
        -  label 'United States'
          値'us'
        -  label 'France'
          値'fr'
        -  label 'イギリス'
          値'uk'
        -  label 'オーストラリア'
          値'au'
    -  name 'otp'
      タイプ'otp'
      ラベル'OTP'
      長さ6
      プレースホルダー '○'
    -  name '覚えています'
      タイプ'チェックボックス'
      label 'Remember me'
      説明：「30日間ログインされます。
  クラス'max—w—sm'
---
::

### タイトル

`title`プロパティを使用してフォームのタイトルを設定します。

::component-code
---
きれい真
無視
  - フィールド
  - クラス
外部
  - フィールド
externalTypes
  -  AuthFormField []
小道具
  title 'ログイン'
  フィールド
    -  name 'email'
      タイプテキスト
      ラベル'メール'
    -  name 'パスワード'
      タイプ'パスワード'
      ラベル'パスワード'
  クラス'max—w—md'
---
::

### 説明

`description`プロパティを使用して、フォームの説明を設定します。

::component-code
---
きれい真
無視
  - フィールド
  -  title
  - クラス
外部
  - フィールド
externalTypes
  -  AuthFormField []
小道具
  title 'ログイン'
  説明：'アカウントにアクセスするための資格情報を入力してください。
  フィールド
    -  name 'email'
      タイプテキスト
      ラベル'メール'
    -  name 'パスワード'
      タイプ'パスワード'
      ラベル'パスワード'
  クラス'max—w—md'
---
::

### アイコン

`icon`プロパティを使用してフォームのアイコンを設定します。

::component-code
---
きれい真
無視
  - フィールド
  -  title
  - 説明
  - クラス
外部
  - フィールド
externalTypes
  -  AuthFormField []
小道具
  title 'ログイン'
  説明：'アカウントにアクセスするための資格情報を入力してください。
  アイコン'i—lucide—user'
  フィールド
    -  name 'email'
      タイプテキスト
      ラベル'メール'
    -  name 'パスワード'
      タイプ'パスワード'
      ラベル'パスワード'
  クラス'max—w—md'
---
::

### プロバイダー

`providers`プロパティを使用して、フォームにプロバイダを追加します。

[ Button ](/docs/components/button)コンポーネントから、`variant`、`color`、`to`などの任意のプロパティを渡すことができます。

::component-code
---
きれい真
無視
  - フィールド
  -  title
  - 説明
  - アイコン
  - プロバイダー
  -  headerAlign
  - クラス
外部
  - プロバイダー
  - フィールド
externalTypes
  -  ButtonProps []
  -  AuthFormField []
小道具
  title 'ログイン'
  説明：'アカウントにアクセスするための資格情報を入力してください。
  アイコン'i—lucide—user'
  プロバイダー：
    -  label 'Google'
      アイコン'i—simple—icons—google'
      色'中立'
      バリアント：'微妙'
    -  label 'GitHub'
      アイコン'i—simple—icons'
      色'ニュートラル'
      バリアント：'微妙'
  フィールド
    -  name 'email'
      タイプテキスト
      ラベル'メール'
    -  name 'パスワード'
      タイプ'パスワード'
      ラベル'パスワード'
  クラス'max—w—md'
---
::

### セパレータ

`separator`プロパティを使用して、プロバイダとフィールドの間で[ Separator ](/docs/components/separator)をカスタマイズします。デフォルトは`or`です。

::component-code
---
きれい真
無視
  - フィールド
  -  title
  - 説明
  - アイコン
  - プロバイダー
  - クラス
外部
  - プロバイダー
  - フィールド
externalTypes
  -  ButtonProps []
  -  AuthFormField []
小道具
  title 'ログイン'
  説明：'アカウントにアクセスするための資格情報を入力してください。
  アイコン'i—lucide—user'
  プロバイダー：
    -  label 'Google'
      アイコン'i—simple—icons—google'
      色'ニュートラル'
      バリアント：'微妙'
    -  label 'GitHub'
      アイコン'i—simple—icons'
      色'中立'
      バリアント：'微妙'
  フィールド
    -  name 'email'
      タイプテキスト
      ラベル'メール'
    -  name 'パスワード'
      タイプ'パスワード'
      ラベル'パスワード'
  区切り文字'プロバイダー'
  クラス'max—w—md'
---
::

[ Separator ](/docs/components/separator#props)コンポーネントから任意のプロパティを渡してカスタマイズできます。

::component-code
---
きれい真
無視
  - フィールド
  -  title
  - 説明
  - アイコン
  - プロバイダー
  - クラス
外部
  - プロバイダー
  - フィールド
externalTypes
  -  ButtonProps []
  -  AuthFormField []
小道具
  title 'ログイン'
  説明：'アカウントにアクセスするための資格情報を入力してください。
  アイコン'i—lucide—user'
  プロバイダー：
    -  label 'Google'
      アイコン'i—simple—icons—google'
      色'中立'
      バリアント：'微妙'
    -  label 'GitHub'
      アイコン'i—simple—icons'
      色'中立'
      バリアント：'微妙'
  フィールド
    -  name 'email'
      タイプテキスト
      ラベル'メール'
    -  name 'パスワード'
      タイプ'パスワード'
      ラベル'パスワード'
  セパレータ
    アイコン'i—lucide—user'
  クラス'max—w—md'
---
::

### 送信

`submit`プロパティを使用して、フォームの送信ボタンを変更します。

[ Button ](/docs/components/button)コンポーネントから、`variant`、`color`、`to`などの任意のプロパティを渡すことができます。

::component-code
---
きれい真
無視
  - フィールド
  -  title
  - 説明
  - アイコン
  - プロバイダー
  -  submit.label
  -  submit.color
  -  submit.variant
  - クラス
外部
  - フィールド
externalTypes
  -  AuthFormField []
小道具
  title 'ログイン'
  説明：'アカウントにアクセスするための資格情報を入力してください。
  アイコン'i—lucide—user'
  フィールド
    -  name 'email'
      タイプテキスト
      ラベル'メール'
    -  name 'パスワード'
      タイプ'パスワード'
      ラベル'パスワード'
  投稿
    ラベル'送信'
    色'エラー'
    バリアント：'微妙'
  クラス'max—w—md'
---
::

## 例

### ページ内

`AuthForm`コンポーネントを[ PageCard ](/docs/components/page-card)コンポーネントでラップして、たとえば`login.vue`ページ内に表示することができます。

::component-example
---
名前'auth—form—page—example'
崩壊真
---
::

##  API

###  Props

component—props

::callout{icon="i-simple-icons-mdnwebdocs" to="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form#attributes" target="_blank"}
このコンポーネントは、すべてのネイティブ`<form>` HTML属性もサポートします。
::

### スロット

コンポーネントスロット

###  Emits

component—emits

###  Expose

[`useTemplateRef`](https://vuejs.org/api/composition-api-helpers.html#usetemplateref)を使って型付けされたコンポーネントインスタンスにアクセスできます。例えば、別のフォーム例えば"reset"フォームで次のようにできます。

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

## テーマ

コンポーネントテーマ

##  Changelog

component—changelog
