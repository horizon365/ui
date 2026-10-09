---
description: テキストを入力するinput要素。
category: form
keywords:
  - text field
links:
  - label: サイトマップ
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Input.vue
---

## 使用法

Inputの値を制御するには`v-model`ディレクティブを使用します。

::component-code
---
ignore:
  - modelValue
external:
  - modelValue
props:
  modelValue: ''
---
::

### Type

`type`プロパティを使用して入力タイプを変更します。デフォルトは`text`です。

[Check box](/docs/components/checkbox)，[Radio](/docs/components/radio-group)，[InputNumber](/docs/components/input-number)などの型もあります。

::component-code
---
items:
  type:
    - text
    - number
    - password
    - search
    - file
props:
  type: 'file'
---
::

::callout{icon="i-simple-icons-mdnwebdocs" to="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#input_types" target="_blank"}
利用可能なすべての型はMDN Web Docsで確認できます。
::

### Placeholder

`placeholder`プロパティを使用してプレースホルダーテキストを設定します。

::component-code
---
props:
  placeholder: 'Search...'
---
::

### Color

`color`プロパティを使用して、Inputがフォーカスされたときにリングの色を変更します。

::component-code
---
ignore:
  - placeholder
props:
  color: neutral
  highlight: true
  placeholder: 'Search...'
---
::

::note
`highlight`プロパティはフォーカスの状態を示すために使用されます。バリデーションエラーが発生したときに内部で使用されます。
::

### Variant

`variant`プロパティを使用して、Inputのバリアントを変更します。

::component-code
---
ignore:
  - placeholder
props:
  color: neutral
  variant: subtle
  highlight: false
  placeholder: 'Search...'
---
::

### サイズ

`size`プロパティを使用してInputのサイズを変更します。

::component-code
---
ignore:
  - placeholder
props:
  size: xl
  placeholder: 'Search...'
---
::

### Icon

`icon`プロパティを使用して、Input内に[Icon](/docs/components/icon)を表示します。

::component-code
---
prettier: true
ignore:
  - placeholder
props:
  icon: 'i-lucide-search'
  size: md
  variant: outline
  placeholder: 'Search...'
---
::

アイコンの位置を設定するには`leading`と`trailing`のプロップを使用し、位置ごとに異なるアイコンを設定するには`leading-icon`と`trailing-icon`のプロップを使用します。

::component-code
---
prettier: true
ignore:
  - placeholder
props:
  trailingIcon: i-lucide-at-sign
  placeholder: 'Enter your email'
  size: md
---
::

### アバター

`avatar`プロパティを使用して、Input内に[Avatar](/docs/components/avatar)を表示します。

::component-code
---
prettier: true
ignore:
  - placeholder
  - avatar.loading
props:
  avatar:
    src: 'https://github.com/nuxt.png'
    loading: lazy
  size: md
  variant: outline
  placeholder: 'Search...'
---
::

### Loading

`loading`プロパティを使用して、Inputにロードアイコンを表示します。

::component-code
---
ignore:
  - placeholder
props:
  loading: true
  trailing: false
  placeholder: 'Search...'
---
::

### Loading Icon

`loading-icon`プロパティを使用してロードアイコンをカスタマイズします。デフォルトは`i-lucide-loader-circle`です。

::component-code
---
ignore:
  - placeholder
props:
  loading: true
  loadingIcon: 'i-lucide-loader'
  placeholder: 'Search...'
---
::

::framework-only
#nuxt
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
このアイコンは`app.config.ts`の`ui.icons.loading`キーでグローバルにカスタマイズできます。
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
このアイコンは`vite.config.ts`の`ui.icons.loading`キーでグローバルにカスタマイズできます。
:::
::

### 無効

`disabled`プロパティを使用してInputを無効にします。

::component-code
---
ignore:
  - placeholder
props:
  disabled: true
  placeholder: 'Search...'
---
::

## 例

### クリアボタン付き

入力をクリアするには、[Button](/docs/components/button)を`#trailing`スロット内に入れます。

::component-example
---
name: 'input-clear-button-example'
---
::

### コピーボタン付き

[Button](/docs/components/button)を`#trailing`スロット内に配置して、値をクリップボードにコピーできます。

::component-example
---
name: 'input-copy-button-example'
---
::

### Withパスワードトグル

パスワードの表示を切り替えるには、[Button](/docs/components/button)を`#trailing`スロット内に置くことができます。

::component-example
---
name: 'input-password-toggle-example'
---
::

### パスワード強度インジケータ付き

[Progress](/docs/components/progress)コンポーネントを使用して、パスワード強度インジケータを表示できます。

::component-example
---
collapse: true
name: 'input-password-strength-indicator-example'
---
::

### 文字制限付き

`#trailing`スロットを使用して、Inputに文字数制限を追加できます。

::component-example
---
name: 'input-character-limit-example'
---
::

### キーボードショートカット付き

`#trailing`スロット内の[Kbd](/docs/components/kbd)コンポーネントを使用して、入力にキーボードショートカットを追加できます。

::component-example
---
name: 'input-kbd-example'
---
::

::note{to="/docs/composables/define-shortcuts"}
この例では、kbd{value="/"}キーが押されたときに入力にフォーカスするために`defineShortcuts`コンポーザブルを使用します。
::

### マスク付き

マスクの組み込みサポートはありませんが、[maska](https://github.com/beholdr/maska)のようなライブラリを使用してInputをマスクできます。

::component-example
---
name: 'input-mask-example'
---
::

### フローティングラベル付き

`#default`スロットを使用して、Inputにフローティングラベルを追加できます。

::component-example
---
name: 'input-floating-label-example'
---
::

### FormField内

[FormField](/docs/components/form-field)コンポーネント内のInputを使用して、ラベル、ヘルプテキスト、必要なインジケータなどを表示できます。

::component-example
---
name: 'input-form-field-example'
---
::

::tip{to="/docs/components/form"}
また、**Form**コンポーネント内で使用すると、検証とエラー処理も提供します。
::

### フィールドグループ内

[ FieldGroup](/docs/components/field-group)コンポーネント内のInputを使用して、複数の要素をグループ化できます。

::component-example
---
name: 'input-field-group-example'
---
::

### 電話番号入力として

[ FieldGroup](/docs/components/field-group)コンポーネント内のInputを[ SelectMenu](/docs/components/select-menu)とともに使用して、国コードを選択した電話番号入力を作成できます。

::component-example
---
collapse: true
name: 'input-phone-number-example'
---
::

## API

### Props

:component-props

::callout{icon="i-simple-icons-mdnwebdocs" to="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attributes" target="_blank"}
このコンポーネントはすべてのネイティブ`<input>` HTML属性もサポートします。
::

### スロット

:component-slots

### Emits

:component-emits

### Expose

テンプレート参照を介してコンポーネントにアクセスする場合、以下を使用できます：

| 名前|タイプ|
| ---- | ---- |
| `inputRef`{lang="ts-type"}| `Ref<HTMLInputElement \| null>`{lang="ts-type"}|

## Theme

:component-theme

## Changelog

:component-changelog
