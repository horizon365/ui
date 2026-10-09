---
title: ファイルアップロード
description: 'ファイルをアップロードするinput要素。'
category: form
keywords:
  - dropzone
  - drag and drop
  - file input
links:
  - label: サイトマップ
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/FileUpload.vue
---

## 使用法

FileUploadの値を制御するには、`v-model`ディレクティブを使用します。

::component-code
---
ignore:
  - modelValue
  - class
external:
  - modelValue
props:
  modelValue: null
  class: 'w-96 min-h-48'
---
::

### 複数

`multiple`プロパティを使用して、複数のファイルを選択できます。

::component-code
---
ignore:
  - class
props:
  multiple: true
  class: 'w-96 min-h-48'
---
::

### Dropzone

`dropzone`プロパティを使用して、ドロップ可能な領域を有効/無効にします。デフォルトは`true`です。

::component-code
---
ignore:
  - class
props:
  dropzone: false
  class: 'w-96 min-h-48'
---
::

### インタラクティブ

`interactive`プロパティを使用して、クリック可能な領域を有効/無効にします。デフォルトは`true`です。

::tip{to="#with-files-bottom-slot"}
これは`#actions`スロットに`Button`コンポーネントを追加するときに便利です。
::

::component-code
---
ignore:
  - class
props:
  interactive: false
  class: 'w-96 min-h-48'
---
::

### Accept

`accept`プロパティを使用して、入力に許可されるファイルタイプを指定します。[MIME types](https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/MIME_types)またはファイル拡張子例`image/png,application/pdf,.jpg`のカンマ区切りリストを指定します。デフォルトは`*`すべてのファイルタイプです。

::component-code
---
ignore:
  - accept
  - class
props:
  accept: 'image/*'
  class: 'w-96 min-h-48'
---
::

### Label

`label`プロパティを使用してFileUploadのラベルを設定します。

::component-code
---
prettier: true
ignore:
  - class
props:
  label: 'Drop your image here'
  class: 'w-96 min-h-48'
---
::

### Description

`description`プロパティを使用してFileUploadの説明を設定します。

::component-code
---
prettier: true
ignore:
  - label
  - class
props:
  label: 'Drop your image here'
  description: 'SVG, PNG, JPG or GIF (max. 2MB)'
  class: 'w-96 min-h-48'
---
::

### Icon

`icon`プロパティを使用してFileUploadのアイコンを設定します。デフォルトは`i-lucide-upload`です。

::component-code
---
prettier: true
ignore:
  - label
  - description
  - class
props:
  icon: 'i-lucide-image'
  label: 'Drop your image here'
  description: 'SVG, PNG, JPG or GIF (max. 2MB)'
  class: 'w-96 min-h-48'
---
::

::framework-only
#nuxt
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
このアイコンは`app.config.ts`の`ui.icons.upload`キーでグローバルにカスタマイズできます。
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
このアイコンは`vite.config.ts`の`ui.icons.upload`キーでグローバルにカスタマイズできます。
:::
::

### Color

`color`プロパティを使用してFileUploadの色を変更します。

::component-code
---
prettier: true
ignore:
  - label
  - description
  - class
props:
  color: neutral
  highlight: true
  label: 'Drop your image here'
  description: 'SVG, PNG, JPG or GIF (max. 2MB)'
  class: 'w-96 min-h-48'
---
::

::note
`highlight`プロパティはフォーカスの状態を表示するために使用されます。バリデーションエラーが発生したときに内部で使用されます。
::

### Variant

`variant`プロパティを使用してFileUploadのバリアントを変更します。

::component-code
---
ignore:
  - class
props:
  variant: button
---
::

### Size

`size`プロパティを使用してFileUploadのサイズを変更します。

::component-code
---
prettier: true
ignore:
  - label
  - description
  - class
props:
  size: xl
  variant: area
  label: 'Drop your image here'
  description: 'SVG, PNG, JPG or GIF (max. 2MB)'
---
::

### Layout

`layout`プロパティを使用して、FileUploadでのファイルの表示方法を変更します。デフォルトは`grid`です。

::warning
このプロパティは`variant`が`area`の場合のみ動作する。
::

::component-code
---
prettier: true
ignore:
  - label
  - description
  - multiple
  - class
  - ui.base
props:
  layout: list
  multiple: true
  label: 'Drop your images here'
  description: 'SVG, PNG, JPG or GIF (max. 2MB)'
  class: 'w-96'
  ui:
    base: 'min-h-48'
---
::

### Position

`position`プロパティを使用して、FileUpload内のファイルの位置を変更します。デフォルトは`outside`です。

::warning
このプロパティは`variant`が`area`、`layout`が`list`の場合にのみ動作します。
::

::component-code
---
prettier: true
ignore:
  - label
  - description
  - multiple
  - layout
  - class
  - ui.base
props:
  position: inside
  layout: list
  multiple: true
  label: 'Drop your images here'
  description: 'SVG, PNG, JPG or GIF (max. 2MB)'
  class: 'w-96'
  ui:
    base: 'min-h-48'
---
::

## 例

### フォーム検証付き

FileUploadは、[Form](/docs/components/form)および[FormField](/docs/components/form-field)コンポーネント内で使用して、検証とエラー処理を処理できます。

::component-example
---
prettier: true
collapse: true
name: 'file-upload-form-validation-example'
---
::

### デフォルトスロット付き

デフォルトスロットを使用して、独自のFileUploadコンポーネントを作成できます。

::component-example
---
prettier: true
collapse: true
name: 'file-upload-default-slot-example'
---
::

### With files—bottomスロット

`files-bottom`スロットを使用して、ファイルリストの下に[Button](/docs/components/button)を追加し、たとえばすべてのファイルを削除できます。

::component-example
---
prettier: true
collapse: true
name: 'file-upload-files-bottom-slot-example'
---
::

::note{to="#interactive"}
この例では、`interactive`プロパティを`false`に設定しています。
::

### Withファイルトップスロット

`files-top`スロットを使用して、例えば新しいファイルを追加するために、ファイルリストの上に[Button](/docs/components/button)を追加できます。

::component-example
---
prettier: true
collapse: true
name: 'file-upload-files-top-slot-example'
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
| `dropzoneRef`{lang="ts-type"}| `Ref<HTMLDivElement \| null>`{lang="ts-type"}|

## Theme

:component-theme

## Changelog

:component-changelog
