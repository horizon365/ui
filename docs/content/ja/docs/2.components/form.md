---
description: 検証と送信処理を内蔵したフォームコンポーネント。
category: form
keywords:
  - validation
  - schema
  - submit
links:
  - label: サイトマップ
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Form.vue
---

## 使用法

フォームコンポーネントを使用して、[標準Schema](https://github.com/standard-schema/standard-schema)をサポートする検証ライブラリ（[ Valibot](https://github.com/fabian-hiller/valibot)、[Zod](https://github.com/colinhacks/zod)、[ Regle](https://github.com/victorgarciaesgi/regle)、[Yup](https://github.com/jquense/yup)など）を使用してフォームデータを検証します。[Joi](https://github.com/hapijs/joi)または[Superstruct](https://github.com/ianstormtaylor/superstruct)または独自の検証ロジック。

[FormField](/docs/components/form-field)コンポーネントと連携して、フォーム要素に関するエラーメッセージを自動的に表示します。

### Schema検証

小道具は2つ必要です。

- `state`—フォームの状態を保持するリアクティブオブジェクト。
- `schema`—任意の[標準Schema](https://github.com/standard-schema/standard-schema)または[Superstruct](https://github.com/ianstormtaylor/superstruct)。

::warning
**x**はデフォルトでは含まれていません。**xxx**をインストールしてください。
::

::tabs{class="gap-0"}
  ::component-example{label="Valibot"}
  ---
  name: 'form-example-valibot'
  props:
    class: 'w-60'
  ---
  ::

  ::component-example{label="ゾッド"}
  ---
  name: 'form-example-zod'
  props:
    class: 'w-60'
  ---
  ::

  ::component-example{label="リーグル"}
  ---
  name: 'form-example-regle'
  props:
    class: 'w-60'
  ---
  ::

  ::component-example{label="うん。"}
  ---
  name: 'form-example-yup'
  props:
    class: 'w-60'
  ---
  ::

  ::component-example{label="Joi"}
  ---
  name: 'form-example-joi'
  props:
    class: 'w-60'
  ---
  ::

  ::component-example{label="Superstruct"}
  ---
  name: 'form-example-superstruct'
  props:
    class: 'w-60'
  ---
  ::
::

### カスタム検証

`validate`プロパティを使用して、独自の検証ロジックを適用します。

バリデーション関数は、以下の属性を持つエラーのリストを返す必要があります。

- `message`—表示するエラーメッセージ。
- `name`—エラーを送信する`FormField`の`name`。

::tip
`schema`プロパティと一緒に使用して、複雑なユースケースを処理できます。
::

::component-example
---
name: 'form-example-basic'
props:
  class: 'w-60'
---
::

### Errorレポート

エラーは、対応する[FormField](/docs/components/form-field)の`name`プロパティを使用してマッチングされます。`email`フィールドのエラーは`<FormField name="email">`{lang="vue"}で表示されます。

ネストされたフィールドはドット表記でマッチングされます。`<FormField name="user.email">`{lang="vue"}には`{ user: z.object({ email: z.string() }) }`{lang="ts"}のようなスキーマが適用されます。

::warning
配列アイテムのエラーは名前にインデックスを含み例`tags.0` `tags.1`、`name`だけでは`<FormField name="tags">`{lang="vue"}にはマッチしません。`error-pattern`プロパティに`/^tags\..+/`{lang="ts"}のような正規表現を加えて使用してください。これは特に[InputTags](/docs/components/input-tags)のようなコンポーネントに便利です。
::

::component-example
---
name: 'form-example-error-pattern'
props:
  class: 'w-60'
---
::

### Inputイベント

フォームコンポーネントは、入力が`input`、`change`、または`blur`イベントを出力すると自動的に検証をトリガします。

- `input`の検証は、e**をタイプすると**が行われます。
- `change`のバリデーションは、**xvalue**にコミットすると発生します。
- `blur`の検証は、入力**focus**を失うと行われます。

`validate-on` propを使ってバリデーションのタイミングを制御できます。

::tip
フォームは常に送信時に検証します。
::

::component-example{label="デフォルト"}
---
source: false
name: 'form-example-elements'
options:
  - name: 'validate-on'
    label: 'validate-on'
    items:
    - 'input'
    - 'change'
    - 'blur'
    default:
    - 'input'
    - 'change'
    - 'blur'
    multiple: true
---
::

::tip
`useFormField`コンポーザブルを使用して、独自のコンポーネント内でこれを実装できます。
::

### Errorイベント

エラーを処理するために`@error`イベントをリッスンできます。このイベントはフォームが送信されたときにトリガーされ、次のフィールドを持つ`FormError`オブジェクトの配列が含まれています。

- `id`—入力の`id`。
- `name`—`FormField`の`name`
- `message`—表示するエラーメッセージ。

フォームが送信された後にエラーのある最初のinput要素に焦点を当てる例を以下に示します：

::component-example
---
name: 'form-example-on-error'
collapse: true
props:
  class: 'w-60'
---
::

### HTML5検証badge{label="4.5+" class="align-text-top"}

`form.submit()`をプログラムで呼び出すと、フォームコンポーネントは送信前にネイティブHTML 5検証を自動的にトリガーします。

::note
これはモーダルフッターなど、送信ボタンがフォーム要素の外側にある場合に特に便利です。
::

::component-example
---
name: 'form-example-html5-validation'
props:
  class: 'w-60'
---
::

### ネスティングフォーム

`nested`プロパティを使用して、複数のフォームコンポーネントをネストし、それらのバリデーション関数をリンクします。この場合、親フォームをバリデーションすると、その中の他のすべてのフォームが自動的にバリデーションされます。

ネストされたフォームは親のstateを直接継承するので、別々のstateを定義する必要はありません。`name`プロパティを使用して、親のstate内のネストされた属性をターゲットにできます。

ユーザーの入力に基づいて動的にフィールドを追加するために使用できます。

::component-example
---
collapse: true
name: 'form-example-nested'
---
::

リスト入力を検証するには：

::component-example
---
collapse: true
name: 'form-example-nested-list'
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

[`useTemplateRef`](https://vuejs.org/api/composition-api-helpers.html#usetemplateref)を使用して型付きコンポーネントインスタンスにアクセスできます。

```vue
<script setup lang="ts">
const form = useTemplateRef('form')
</script>

<template>
  <UForm ref="form" />
</template>
```

これにより、以下にアクセスできます：

| 名前|タイプ|
| ---- | ---- |
| `submit()`{lang="ts-type"}| `Promise<void>`{lang="ts-type"} <br> <div class="text-toned mt-1"><p> HTML5検証でフォーム送信をトリガーします。</p></div>|
| `validate(opts: { name?: keyof T \| (keyof T)[], silent?: boolean, nested?: boolean, transform?: boolean })`{lang="ts-type"}| `Promise<T>`{lang="ts-type"} <br> <div class="text-toned mt-1"><p>フォーム検証をトリガーします。`opts.silent`がtrueに設定されていない限り、エラーが発生します。</p></div>|
| `clear(path?: keyof T \| RegExp)`{lang="ts-type"}| `void` <br> <div class="text-toned mt-1"><p>特定のパスに関連付けられたフォームエラーをクリアします。パスが指定されていない場合、すべてのフォームエラーをクリアします。</p></div>|
| `getErrors(path?: keyof T \| RegExp)`{lang="ts-type"}| `FormErrorWithId[]`{lang="ts-type"} <br> <div class="text-toned mt-1"><p>特定のパスに関連するフォームエラーを取得します。パスが指定されていない場合、すべてのフォームエラーを返します。</p></div>|
| `setErrors(errors: FormError[], name?: keyof T \| RegExp)`{lang="ts-type"}| `void` <br> <div class="text-toned mt-1"><p>指定したパスのエラーを設定します。パスが指定されていない場合、すべてのエラーを上書きします。</p></div>|
| `errors`{lang="ts-type"}| `Ref<FormErrorWithId[]>`{lang="ts-type"} <br> <div class="text-toned mt-1"><p>A検証エラーを含む配列への参照。これを使用してエラー情報にアクセスしたり操作したりします。</p></div>|
| `disabled`{lang="ts-type"}| `Ref<boolean>`{lang="ts-type"}|
| `dirty`{lang="ts-type"}| `Ref<boolean>`{lang="ts-type"} `true`少なくとも1つのフォームフィールドがユーザによって更新された場合。|
| `dirtyFields`{lang="ts-type"}| `ReadonlySet<DeepReadonly<keyof T>>`{lang="ts-type"}ユーザが変更したフィールドを追跡します。|
| `touchedFields`{lang="ts-type"}| `ReadonlySet<DeepReadonly<keyof T>>`{lang="ts-type"}ユーザが操作したフィールドを追跡します。|
| `blurredFields`{lang="ts-type"}| `ReadonlySet<DeepReadonly<keyof T>>`{lang="ts-type"}ユーザーがぼかしたフィールドを追跡します。|

## Theme

:component-theme

## Changelog

:component-changelog
