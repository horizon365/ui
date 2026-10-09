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

フォームコンポーネントをFormFieldでラップします。[Form](/docs/components/form)で使用され、バリデーションとエラー処理を提供します。

### Label

`label`プロパティを使用して、フォームコントロールのラベルを設定します。

::component-code
---
prettier: true
props:
  label: Email
slots:
  default: |

    <UInput placeholder="Enter your email" />
---

:u-input{placeholder="Enter your email"}
::

::note
ラベル`for`属性とフォームコントロールは、指定されていない場合、一意の`id`に関連付けられます。
::

`required`プロパティを使用する場合、ラベルの横にアスタリスクが追加されます。

::component-code
---
prettier: true
ignore:
  - label
props:
  label: Email
  required: true
slots:
  default: |

    <UInput placeholder="Enter your email" />
---

:u-input{placeholder="Enter your email"}
::

### Description

`description`プロパティを使用して、ラベルの下に追加情報を入力します。

::component-code
---
prettier: true
ignore:
  - label
props:
  label: Email
  description: We'll never share your email with anyone else.
slots:
  default: |

    <UInput placeholder="Enter your email" class="w-full" />
---

:u-input{placeholder="Enter your email" class="w-full"}
::

### ヒント

`hint`プロパティを使用して、ラベルの横にヒントメッセージを表示します。

::component-code
---
prettier: true
ignore:
  - label
props:
  label: Email
  hint: Optional
slots:
  default: |

    <UInput placeholder="Enter your email" />
---

:u-input{placeholder="Enter your email"}
::

### ヘルプ

`help`プロパティを使用して、フォームコントロールの下にヘルプメッセージを表示します。`error`プロパティと一緒に使用すると、`error`プロパティが優先されます。

::component-code
---
prettier: true
ignore:
  - label
props:
  label: Email
  help: Please enter a valid email address.
slots:
  default: |

    <UInput placeholder="Enter your email" class="w-full" />
---

:u-input{placeholder="Enter your email" class="w-full"}
::

### Error

フォームコントロールの下にエラーメッセージを表示するには、`error`プロパティを使用します。`help`プロパティと一緒に使用すると、`error`プロパティが優先されます。

[Form](/docs/components/form)内で使用すると、バリデーションエラー発生時に自動的に設定されます。

::component-code
---
prettier: true
ignore:
  - label
props:
  label: Email
  error: Please enter a valid email address.
slots:
  default: |

    <UInput placeholder="Enter your email" class="w-full" />
---

:u-input{placeholder="Enter your email" class="w-full"}
::

::tip{to="/docs/getting-started/theme/design-system#color-system"}
これはフォームコントロールの`color`を`error`に設定します。`app.config.ts`でグローバルに変更できます。
::

### Errorパターン

`error-pattern`プロパティを使用して、フォームエラーを正規表現でマッチさせます。これは、[InputTags](/docs/components/input-tags)のような配列値を持つコンポーネントに特に関連しています。エラーは名前に配列インデックスを含みます例`tags.0`。

::tip{to="/docs/components/form#error-reporting"}
フォーム内で`error-pattern`を使用する例を参照してください。
::

### サイズ

`size`プロパティを使用してFormFieldのサイズを変更します。`size`はフォームコントロールにプロキシされます。

::component-code
---
prettier: true
ignore:
  - label
  - description
  - hint
  - help
props:
  label: Email
  description: We'll never share your email with anyone else.
  hint: Optional
  help: Please enter a valid email address.
  size: xl
slots:
  default: |

    <UInput placeholder="Enter your email" class="w-full" />
---

:u-input{placeholder="Enter your email" class="w-full"}
::

### Orientation badge{label="4.3+" class="align-text-top"}

`orientation`プロパティを使用してFormFieldのレイアウトを変更します。デフォルトは`vertical`です。

::component-code
---
prettier: true
ignore:
  - label
  - class
props:
  orientation: horizontal
  label: Email
  help: Please enter a valid email address.
  class: w-72
slots:
  default: |

    <UInput placeholder="Enter your email" class="w-full" />
---

:u-input{placeholder="Enter your email" class="w-full"}
::

## API

### Props

:component-props

### スロット

:component-slots

## Theme

:component-theme

## Changelog

:component-changelog
