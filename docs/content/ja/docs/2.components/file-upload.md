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
無視
  -  modelValue
  - クラス
外部
  -  modelValue
小道具
  modelValue null
  クラス'w—96 min—h—48'
---
::

### 複数

`multiple`プロパティを使用して、複数のファイルを選択できるようにします。

::component-code
---
無視
  - クラス
小道具
  複数true
  クラス'w—96 min—h—48'
---
::

### ドロップゾーン

ドロップ可能領域を有効/無効にするには、`dropzone`プロパティを使用します。デフォルトは`true`です。

::component-code
---
無視
  - クラス
小道具
  ドロップゾーンfalse
  クラス'w—96 min—h—48'
---
::

### インタラクティブ

`interactive`プロパティを使用して、クリック可能な領域を有効/無効にします。デフォルトは`true`です。

::tip{to="#with-files-bottom-slot"}
これは`#actions`スロットに`Button`コンポーネントを追加する場合に便利です。
::

::component-code
---
無視
  - クラス
小道具
  インタラクティブfalse
  クラス'w—96 min—h—48'
---
::

### 同意する

`accept`プロパティを使用して、入力に許可されるファイルタイプを指定します。[ MIME types ](https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/MIME_types)またはファイル拡張子（例：`image/png,application/pdf,.jpg`）のカンマ区切りリストを指定します。デフォルトは`*`すべてのファイルタイプです。

::component-code
---
無視
  - 受け入れる
  - クラス
小道具
  accept 'image/*'
  クラス'w—96 min—h—48'
---
::

### ラベル

FileUploadのラベルを設定するには、`label`プロパティを使用します。

::component-code
---
きれい真
無視
  - クラス
小道具
  ラベル：'ここに画像をドロップ'
  クラス'w—96 min—h—48'
---
::

### 説明

`description`プロパティを使用して、FileUploadの説明を設定します。

::component-code
---
きれい真
無視
  - ラベル
  - クラス
小道具
  ラベル：'ここに画像をドロップ'
  説明'SVG PNG JPGまたはGIF最大2MB'
  クラス'w—96 min—h—48'
---
::

### アイコン

FileUploadのアイコンを設定するには、`icon`プロパティを使用します。デフォルトは`i-lucide-upload`です。

::component-code
---
きれい真
無視
  - ラベル
  - 説明
  - クラス
小道具
  アイコン'i—lucide'
  ラベル：'ここに画像をドロップ'
  説明'SVG PNG JPGまたはGIF最大2MB'
  クラス'w—96 min—h—48'
---
::

::framework-only
#nuxt
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
このアイコンは、`ui.icons.upload`キーの下の`app.config.ts`でグローバルにカスタマイズできます。
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
このアイコンは、`ui.icons.upload`キーの下の`vite.config.ts`でグローバルにカスタマイズできます。
:::
::

### カラー

`color`プロパティを使用してFileUploadの色を変更します。

::component-code
---
きれい真
無視
  - ラベル
  - 説明
  - クラス
小道具
  色ニュートラル
  ハイライト真
  ラベル：'ここに画像をドロップ'
  説明'SVG PNG JPGまたはGIF最大2MB'
  クラス'w—96 min—h—48'
---
::

::note
`highlight` propはフォーカス状態を表示するために使用されます。これは、バリデーションエラーが発生したときに内部で使用されます。
::

### バリアント

FileUploadのバリアントを変更するには、`variant`プロパティを使用します。

::component-code
---
無視
  - クラス
小道具
  バリアントボタン
---
::

### サイズ

FileUploadのサイズを変更するには、`size`プロパティを使用します。

::component-code
---
きれい真
無視
  - ラベル
  - 説明
  - クラス
小道具
  サイズXL
  バリアント：面積
  ラベル：'ここに画像をドロップ'
  説明'SVG PNG JPGまたはGIF最大2MB'
---
::

### レイアウト

`layout`プロパティを使用して、FileUploadでのファイルの表示方法を変更します。デフォルトは`grid`です。

::warning
このプロパティは`variant`が`area`の場合にのみ機能します。
::

::component-code
---
きれい真
無視
  - ラベル
  - 説明
  - 複数
  - クラス
  メール：info @ ui.base
小道具
  レイアウトリスト
  複数true
  ラベル：'ここに画像をドロップ'
  説明'SVG PNG JPGまたはGIF最大2MB'
  クラス'w—96'
  UI
    ベース'min—h—48'
---
::

### ポジション

`position`プロパティを使用して、FileUpload内のファイルの位置を変更します。デフォルトは`outside`です。

::warning
このプロパティは、`variant`が`area`で、`layout`が`list`のときにのみ機能します。
::

::component-code
---
きれい真
無視
  - ラベル
  - 説明
  - 複数
  -  layout
  - クラス
  メール：info @ ui.base
小道具
  位置内部
  レイアウトリスト
  複数true
  ラベル：'ここに画像をドロップ'
  説明'SVG PNG JPGまたはGIF最大2MB'
  クラス'w—96'
  UI
    ベース'min—h—48'
---
::

## 例

### フォーム検証付き

FileUploadは、[ Form ](/docs/components/form)および[ FormField ](/docs/components/form-field)コンポーネント内で使用して、検証とエラー処理を処理できます。

::component-example
---
きれい真
崩壊真
名前'file—upload—form—validation—example'
---
::

### デフォルトスロット付き

デフォルトスロットを使用して、独自のFileUploadコンポーネントを作成できます。

::component-example
---
きれい真
崩壊真
名前'file—upload—default—slot—example'
---
::

### ファイル底スロット付き

`files-bottom`スロットを使用して、ファイルリストの下に[ Button ](/docs/components/button)を追加して、たとえばすべてのファイルを削除できます。

::component-example
---
きれい真
崩壊真
名前'file—upload—files—bottom slot—example'
---
::

::note{to="#interactive"}
この例では、`interactive` propは`false`に設定されています。
::

###  with files—top slot

`files-top`スロットを使用して、ファイルリストの上に[ Button ](/docs/components/button)を追加して、たとえば新しいファイルを追加できます。

::component-example
---
きれい真
崩壊真
名前'file—upload—files—top—slot—example'
---
::

##  API

###  Props

component—props

::callout{icon="i-simple-icons-mdnwebdocs" to="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attributes" target="_blank"}
このコンポーネントは、すべてのネイティブ`<input>` HTML属性もサポートします。
::

### スロット

コンポーネントスロット

### エミッツ

component—emits

###  Expose

テンプレート参照を介してコンポーネントにアクセスする場合、以下を使用できます：

| 名前|タイプ|
| ---- | ---- |
| `inputRef`{lang="ts-type"}| `Ref<HTMLInputElement \| null>`{lang="ts-type"}|
| `dropzoneRef`{lang="ts-type"}| `Ref<HTMLDivElement \| null>`{lang="ts-type"}|

## テーマ

コンポーネントテーマ

##  Changelog

component—changelog
