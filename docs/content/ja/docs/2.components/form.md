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

フォームコンポーネントを使用して、[ Standard Schema ](https://github.com/standard-schema/standard-schema)[ Valibot ](https://github.com/fabian-hiller/valibot)[ Zod ](https://github.com/colinhacks/zod)をサポートする任意の検証ライブラリを使用してフォームデータを検証します。[ Regle ](https://github.com/victorgarciaesgi/regle)[ Yup ](https://github.com/jquense/yup)[ Joi ](https://github.com/hapijs/joi)または[ Superstruct ](https://github.com/ianstormtaylor/superstruct)または独自の検証ロジック

[ FormField ](/docs/components/form-field)コンポーネントと連携して、フォーム要素に関するエラーメッセージを自動的に表示します。

### スキーマ検証

小道具は2つ必要です。

- `state`—フォームの状態を保持するリアクティブオブジェクト。
- `schema`—any [ Standard Schema ](https://github.com/standard-schema/standard-schema)または[ Superstruct ](https://github.com/ianstormtaylor/superstruct)。

::warning
**デフォルトではバリデーションライブラリが含まれていません。**必要なライブラリを@@@インストールしてください。
::

::tabs{class="gap-0"}
  ::component-example{label="Valibot"}
  ---
  名前'form—example—valibot'
  小道具
    クラス'w—60'
  ---
  ::

  ::component-example{label="ゾッド"}
  ---
  名前'form—example—zod'
  小道具
    クラス'w—60'
  ---
  ::

  ::component-example{label="リーグル"}
  ---
  名前'form—example—regle'
  小道具
    クラス'w—60'
  ---
  ::

  ::component-example{label="うん。"}
  ---
  名前'form—example—yup'
  小道具
    クラス'w—60'
  ---
  ::

  ::component-example{label="Joi"}
  ---
  名前'form—example—joi'
  小道具
    クラス'w—60'
  ---
  ::

  ::component-example{label="Superstruct"}
  ---
  名前'form—example—superstruct'
  小道具
    クラス'w—60'
  ---
  ::
::

### カスタム検証

`validate`プロパティを使用して、独自の検証ロジックを適用します。

バリデーション関数は、以下の属性を持つエラーのリストを返す必要があります。

- `message`—表示するエラーメッセージ。
- `name`—エラーを送信する`FormField`の`name`。

::tip
`schema` propと一緒に使用して、複雑なユースケースを処理できます。
::

::component-example
---
名前'form—example—basic'
小道具
  クラス'w—60'
---
::

### エラー報告

エラーは対応する[ FormField ](/docs/components/form-field)`name` propを使用してマッチします。`email`フィールドのエラーは`<FormField name="email">`{lang="vue"}で表示されます。

ネストされたフィールドはドット表記でマッチングされます。`<FormField name="user.email">`{lang="vue"}には`{ user: z.object({ email: z.string() }) }`{lang="ts"}のようなスキーマが適用されます。

::warning
配列項目のエラーは名前にインデックスを含む例`tags.1`と、`name`だけでは`<FormField name="tags">`{lang="vue"}にマッチしません。`/^tags\..+/`{lang="ts"}のような正規表現で`error-pattern` propを使用してキャプチャします。これは[ InputTags @のようなコンポーネントで特に便利です。](/docs/components/input-tags)。
::

::component-example
---
名前'form—example—error—pattern'
小道具
  クラス'w—60'
---
::

### 入力イベント

フォームコンポーネントは、入力が`input`、`change`、または`blur`イベントを出力すると自動的に検証をトリガします。

- `input`の検証は、**と入力すると**が発生します。
- `change`のバリデーションは、**が値**にコミットした場合に発生します。
- `blur`の検証は、入力**がフォーカス**を失ったときに行われます。

`validate-on` propを使用してバリデーションが行われるタイミングを制御できます。

::tip
フォームは常に送信時に検証します。
::

::component-example{label="デフォルト"}
---
ソース：false
name 'form—example—elements'
オプション
  -  name 'validate—on'
    ラベル'validate—on'
    アイテム
    - '入力'
    - 'change'
    - 'blur'
    デフォルト
    - '入力'
    - 'change'
    - 'blur'
    複数true
---
::

::tip
`useFormField`コンポーザブルを使用して、独自のコンポーネント内でこれを実装できます。
::

### エラーイベント

`@error`イベントをリッスンしてエラーを処理できます。このイベントはフォームが送信されたときにトリガーされ、以下のフィールドを持つ`FormError`オブジェクトの配列が含まれています。

- `id`—入力は`id`です。
- `name`—`FormField`の`name`
- `message`—表示するエラーメッセージ。

フォームが送信された後にエラーのある最初のinput要素に焦点を当てる例を以下に示します：

::component-example
---
名前'form—example—on—error'
崩壊真
小道具
  クラス'w—60'
---
::

###  HTML5検証badge {label="4.5+" class="align-text-top"}

`form.submit()`をプログラムで呼び出すと、フォームコンポーネントは送信前にネイティブHTML5検証を自動的にトリガーします。

::note
これは、モーダルフッターなど、送信ボタンがフォーム要素の外側にある場合に特に便利です。
::

::component-example
---
名前'form—example—html5—validation'
小道具
  クラス'w—60'
---
::

### ネスティングフォーム

`nested`プロパティを使用して、複数のフォームコンポーネントをネストし、それらのバリデーション関数をリンクします。この場合、親フォームをバリデーションすると、その中の他のすべてのフォームが自動的にバリデーションされます。

ネストされたフォームは親のstateを直接継承するので、別々のstateを定義する必要はありません。`name`プロパティを使用して、親のstate内のネストされた属性をターゲットにできます。

ユーザーの入力に基づいて動的にフィールドを追加するために使用できます。

::component-example
---
崩壊真
名前'form—example—nested'
---
::

リスト入力を検証するには：

::component-example
---
崩壊真
名前'form—example—nested—list'
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

### エミッツ

component—emits

###  Expose

型付きコンポーネントインスタンスには、[`useTemplateRef`](https://vuejs.org/api/composition-api-helpers.html#usetemplateref)を使用してアクセスできます。

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
| `submit()`{lang="ts-type"}| `Promise<void>`{lang="ts-type"}<br><div class="text-toned mt-1"><p> HTML5検証でフォーム送信をトリガーします。</p></div>|
| `validate(opts: { name?: keyof T \| (keyof T)[], silent?: boolean, nested?: boolean, transform?: boolean })`{lang="ts-type"}| `Promise<T>`{lang="ts-type"}<br><div class="text-toned mt-1"><p>フォーム検証をトリガーします。`opts.silent`がtrueに設定されていない限り、エラーが発生します。</p></div>|
| `clear(path?: keyof T \| RegExp)`{lang="ts-type"}| `void`<br><div class="text-toned mt-1"><p>特定のパスに関連付けられたフォームエラーをクリアします。パスが指定されていない場合は、すべてのフォームエラーをクリアします。</p></div>|
| `getErrors(path?: keyof T \| RegExp)`{lang="ts-type"}| `FormErrorWithId[]`{lang="ts-type"}<br><div class="text-toned mt-1"><p>特定のパスに関連付けられたフォームエラーを取得します。パスが指定されていない場合は、すべてのフォームエラーを返します。</p></div>|
| `setErrors(errors: FormError[], name?: keyof T \| RegExp)`{lang="ts-type"}| `void`<br><div class="text-toned mt-1"><p>指定されたパスのフォームエラーを設定します。パスが指定されていない場合、すべてのエラーを上書きします。</p></div>|
| `errors`{lang="ts-type"}| `Ref<FormErrorWithId[]>`{lang="ts-type"}<br><div class="text-toned mt-1"><p>バリデーションエラーを含む配列への参照。エラー情報にアクセスしたり操作したりするときに使用します。</p></div>|
| `disabled`{lang="ts-type"}| `Ref<boolean>`{lang="ts-type"}|
| `dirty`{lang="ts-type"}| `Ref<boolean>`{lang="ts-type"}`true`は、ユーザーによって少なくとも1つのフォームフィールドが更新された場合。|
| `dirtyFields`{lang="ts-type"}| `ReadonlySet<DeepReadonly<keyof T>>`{lang="ts-type"}ユーザーが変更したフィールドを追跡します。|
| `touchedFields`{lang="ts-type"}| `ReadonlySet<DeepReadonly<keyof T>>`{lang="ts-type"}ユーザが操作したフィールドを追跡します。|
| `blurredFields`{lang="ts-type"}| `ReadonlySet<DeepReadonly<keyof T>>`{lang="ts-type"}ユーザーがぼかしたフィールドを追跡します。|

## テーマ

コンポーネントテーマ

##  Changelog

component—changelog
