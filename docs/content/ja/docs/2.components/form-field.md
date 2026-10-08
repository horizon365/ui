---
title: FormField
description: バリデーションとエラー処理を提供するフォーム要素のラッパー。
category: form
keywords:
  - field wrapper
  - form label
links:
  - label: サイトマップ
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/FormField.vue
---

## 使用法

フォームコンポーネントをFormFieldでラップします。[ Form ](/docs/components/form)で使用され、バリデーションとエラー処理を提供します。

### ラベル

`label`プロパティを使用して、フォームコントロールのラベルを設定します。

::component-code
---
きれい真
小道具
  ラベルEmail
スロット
  デフォルト|

    <UInput placeholder="Enter your email" />
---

u—input {placeholder="Enter your email"}
::

::note
ラベル`for`属性とフォームコントロールは、指定されていない場合、一意の`id`に関連付けられます。
::

`required` propを使用する場合、ラベルの横にアスタリスクが追加されます。

::component-code
---
きれい真
無視
  -  label
小道具
  ラベルEmail
  必須true
スロット
  デフォルト|

    <UInput placeholder="Enter your email" />
---

u—input {placeholder="Enter your email"}
::

### 説明

`description`プロパティを使用して、ラベルの下に追加情報を入力します。

::component-code
---
きれい真
無視
  -  label
小道具
  ラベルEmail
  説明：メールアドレスを他人と共有することはありません。
スロット
  デフォルト|

    <UInput placeholder="Enter your email" class="w-full" />
---

u—input {placeholder="Enter your email" class="w-full"}
::

### ヒント

`hint`プロパティを使用して、ラベルの横にヒントメッセージを表示します。

::component-code
---
きれい真
無視
  - ラベル
小道具
  ラベルEmail
  ヒントオプション
スロット
  デフォルト|

    <UInput placeholder="Enter your email" />
---

u—input {placeholder="Enter your email"}
::

### ヘルプ

`help`プロパティを使用して、フォームコントロールの下にヘルプメッセージを表示します。`error`プロパティと一緒に使用すると、`error`プロパティが優先されます。

::component-code
---
きれい真
無視
  -  label
小道具
  labelメール
  help：有効なメールアドレスを入力してください。
スロット
  デフォルト|

    <UInput placeholder="Enter your email" class="w-full" />
---

u—input {placeholder="Enter your email" class="w-full"}
::

### エラー

フォームコントロールの下にエラーメッセージを表示するには、`error` propを使用します。`help` propと一緒に使用すると、`error` propが優先されます。

[ Form ](/docs/components/form)内で使用した場合、バリデーションエラー発生時に自動的に設定されます。

::component-code
---
きれい真
無視
  -  label
小道具
  ラベルEmail
  error：有効なメールアドレスを入力してください。
スロット
  デフォルト|

    <UInput placeholder="Enter your email" class="w-full" />
---

u—input {placeholder="Enter your email" class="w-full"}
::

::tip{to="/docs/getting-started/theme/design-system#color-system"}
これにより、フォームコントロールの`color`を`error`に設定します。`app.config.ts`でグローバルに変更できます。
::

### エラーパターン

`error-pattern`プロパティを使用して、フォームエラーを正規表現でマッチさせます。これは、[ InputTags ](/docs/components/input-tags)のような配列値を持つコンポーネントに特に関連します。ここでは、エラーは名前に配列インデックスを含みます例`tags.0`。

::tip{to="/docs/components/form#error-reporting"}
フォーム内で`error-pattern`を使用する例を参照してください。
::

### サイズ

`size`プロパティを使用してFormFieldのサイズを変更します。`size`はフォームコントロールにプロキシされます。

::component-code
---
きれい真
無視
  - ラベル
  - 説明
  - ヒント
  - ヘルプ
小道具
  ラベルEmail
  説明：メールアドレスを他人と共有することはありません。
  ヒントオプション
  help：有効なメールアドレスを入力してください。
  サイズXL
スロット
  デフォルト|

    <UInput placeholder="Enter your email" class="w-full" />
---

u—input {placeholder="Enter your email" class="w-full"}
::

### オリエンテーションbadge {label="4.3+" class="align-text-top"}

`orientation`プロパティを使用してFormFieldのレイアウトを変更します。デフォルトは`vertical`です。

::component-code
---
きれい真
無視
  -  label
  - クラス
小道具
  オリエンテーション水平
  ラベルEmail
  help：有効なメールアドレスを入力してください。
  クラスw—72
スロット
  デフォルト|

    <UInput placeholder="Enter your email" class="w-full" />
---

u—input {placeholder="Enter your email" class="w-full"}
::

##  API

###  Props

component—props

### スロット

コンポーネントスロット

## テーマ

コンポーネントテーマ

##  Changelog

component—changelog
