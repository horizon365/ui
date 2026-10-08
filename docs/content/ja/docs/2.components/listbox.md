---
description: 検索、仮想化、リッチアイテムレンダリングを備えたアイテムの選択可能なリスト。
category: form
keywords:
  - option list
  - picker
  - selection
links:
  - label: Listbox
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/listbox
  - label: サイトマップ
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Listbox.vue
---

## 使用法

Listboxの値を制御するには`v-model`ディレクティブを使用し、状態を制御する必要がない場合には`default-value` propを使用して初期値を設定します。

::component-code
---
崩壊真
隠す
  - クラス
無視
  -  modelValue.label
  -  modelValue.icon
  -  modelValue.value
  - アイテム
外部
  - アイテム
  -  modelValue
externalTypes
  -  ListboxItem []
小道具
  modelValue
    ラベル'フランス'
    アイコン'i—lucide—map—pin'
    値'FR'
  アイテム
    -  label 'France'
      アイコン'i—lucide—map—pin'
      値'FR'
    -  label 'ドイツ'
      アイコン'i—lucide—map—pin'
      値'DE'
    -  label 'Italy'
      アイコン'i—lucide—map—pin'
      値'IT'
    -  label 'スペイン'
      アイコン'i—lucide—map—pin'
      値'ES'
    -  label 'オランダ'
      アイコン'i—lucide—map—pin'
      値'NL'
    -  label 'ポーランド'
      アイコン'i—lucide—map—pin'
      値'PL'
    -  label 'ベルギー'
      アイコン'i—lucide—map—pin'
      値'BE'
    -  label 'ポルトガル'
      アイコン'i—lucide—map—pin'
      値'PT'
    -  label 'オーストリア'
      アイコン'i—lucide—map—pin'
      値'AT'
    -  label 'スウェーデン'
      アイコン'i—lucide—map—pin'
      値'SE'
  クラス'w—full'
---
::

### アイテム

`items` propを、次のプロパティを持つオブジェクトの配列として使用します。

- `label?: string`{lang="ts-type"}
- [`description?: string`{lang="ts-type"}](#with-description-in-items)
- [`type?: "label" | "separator" | "item"`{lang="ts-type"}](#with-items-type)
- [`icon?: string`{lang="ts-type"}](#with-icon-in-items)
- [`avatar?: AvatarProps`{lang="ts-type"}](#with-avatar-in-items)
- [`chip?: ChipProps`{lang="ts-type"}](#with-chip-in-items)
- `disabled?: boolean`{lang="ts-type"}
- `onSelect?: (e: Event) => void`{lang="ts-type"}
- `class?: any`{lang="ts-type"}
- `ui?: { label?: ClassNameValue, separator?: ClassNameValue, item?: ClassNameValue, itemLeadingIcon?: ClassNameValue, ... }`{lang="ts-type"}

::component-code
---
崩壊真
隠す
  - クラス
無視
  - アイテム
外部
  - アイテム
externalTypes
  -  ListboxItem []
小道具
  アイテム
    -  label 'France'
      解説：「ヘキサゴン」
      アイコン'i—lucide—map—pin'
      値'FR'
    -  label 'ドイツ'
      説明：「連邦共和国」
      アイコン'i—lucide—map—pin'
      値'DE'
    -  label 'Italy'
      タイトル：THE BOOT
      アイコン'i—lucide—map—pin'
      値'IT'
    -  label 'スペイン'
      説明：「牛の皮」
      アイコン'i—lucide—map—pin'
      値'ES'
  クラス'w—full'
---
::

`items`プロパティに配列の配列を渡して、項目のグループを分離して表示することもできます。

::component-code
---
崩壊真
隠す
  - クラス
無視
  - アイテム
外部
  - アイテム
externalTypes
  -  ListboxItem [][]
小道具
  アイテム
    - —ラベル'フランス'
        アイコン'i—lucide—map—pin'
        値'FR'
      -  label 'ドイツ'
        アイコン'i—lucide—map—pin'
        値'DE'
      -  label 'イタリア'
        アイコン'i—lucide—map—pin'
        値'IT'
    - —ラベル'ブラジル'
        アイコン'i—lucide—map—pin'
        値'BR'
      -  label 'アルゼンチン'
        アイコン'i—lucide—map—pin'
        値'AR'
  クラス'w—full'
---
::

### 複数

複数の項目を選択できるようにするには`multiple`プロパティを使用します。有効にすると、`v-model`は配列になります。

::component-code
---
崩壊真
隠す
  - クラス
無視
  - アイテム
  - 複数
外部
  - アイテム
externalTypes
  -  ListboxItem []
小道具
  複数true
  アイテム
    -  label 'France'
      アイコン'i—lucide—map—pin'
      値'FR'
    -  label 'ドイツ'
      アイコン'i—lucide—map—pin'
      値'DE'
    -  label 'イタリア'
      アイコン'i—lucide—map—pin'
      値'IT'
    -  label 'スペイン'
      アイコン'i—lucide—map—pin'
      値'ES'
  クラス'w—full'
---
::

### 値キー

`value-key` propを使用して、オブジェクト全体ではなく、オブジェクトの単一のプロパティをバインドすることができます。デフォルトは`undefined`です。

::component-code
---
崩壊真
無視
  -  modelValue
  -  valueKey
  - アイテム
  - クラス
外部
  - アイテム
  -  modelValue
externalTypes
  -  ListboxItem []
小道具
  modelValue 'FR'
  valueKey '値'
  アイテム
    -  label 'France'
      アイコン'i—lucide—map—pin'
      値'FR'
    -  label 'ドイツ'
      アイコン'i—lucide—map—pin'
      値'DE'
    -  label 'イタリア'
      アイコン'i—lucide—map—pin'
      値'IT'
    -  label 'スペイン'
      アイコン'i—lucide—map—pin'
      値'ES'
  クラス'w—full'
---
::

### フィルター

`filter`プロパティを使用してフィルター入力を表示するか、オブジェクトを渡して[ Input ](/docs/components/input)コンポーネントをカスタマイズします。デフォルトは`false`です。

::component-code
---
崩壊真
隠す
  - クラス
無視
  - アイテム
外部
  - アイテム
externalTypes
  -  ListboxItem []
小道具
  フィルター
    プレースホルダー 'フィルター...'
    アイコン'i—lucide'
  アイテム
    -  label 'France'
      アイコン'i—lucide—map—pin'
      値'FR'
    -  label 'ドイツ'
      アイコン'i—lucide—map—pin'
      値'DE'
    -  label 'イタリア'
      アイコン'i—lucide—map—pin'
      値'IT'
    -  label 'スペイン'
      アイコン'i—lucide—map—pin'
      値'ES'
    -  label 'オランダ'
      アイコン'i—lucide—map—pin'
      値'NL'
    -  label 'ポーランド'
      アイコン'i—lucide—map—pin'
      値'PL'
  クラス'w—full'
---
::

### 選択したアイコン

アイテムが選択されたときにアイコンをカスタマイズするには、`selected-icon`プロパティを使用します。デフォルトは`i-lucide-check`です。

::component-code
---
崩壊真
無視
  - アイテム
  -  modelValue
  -  valueKey
  - クラス
外部
  - アイテム
  -  modelValue
externalTypes
  -  ListboxItem []
小道具
  modelValue 'FR'
  selectedIcon 'i—lucide—flame'
  valueKey '値'
  アイテム
    -  label 'France'
      アイコン'i—lucide—map—pin'
      値'FR'
    -  label 'ドイツ'
      アイコン'i—lucide—map—pin'
      値'DE'
    -  label 'イタリア'
      アイコン'i—lucide—map—pin'
      値'IT'
    -  label 'スペイン'
      アイコン'i—lucide—map—pin'
      値'ES'
  クラス'w—full'
---
::

### サイズ

リストボックスのサイズを変更するには、`size`プロパティを使用します。

::component-code
---
崩壊真
隠す
  - クラス
無視
  - アイテム
外部
  - アイテム
externalTypes
  -  ListboxItem []
小道具
  サイズXL
  アイテム
    -  label 'France'
      アイコン'i—lucide—map—pin'
      値'FR'
    -  label 'ドイツ'
      アイコン'i—lucide—map—pin'
      値'DE'
    -  label 'イタリア'
      アイコン'i—lucide—map—pin'
      値'IT'
    -  label 'スペイン'
      アイコン'i—lucide—map—pin'
      値'ES'
  クラス'w—full'
---
::

### ローディング

`loading`プロップを使用して読み込みインジケータを表示します。`loading-icon`プロップを使用してアイコンをカスタマイズします。

::component-code
---
崩壊真
隠す
  - クラス
無視
  - アイテム
外部
  - アイテム
externalTypes
  -  ListboxItem []
小道具
  読み込み真
  アイテム
    -  label 'France'
      アイコン'i—lucide—map—pin'
      値'FR'
    -  label 'ドイツ'
      アイコン'i—lucide—map—pin'
      値'DE'
  クラス'w—full'
---
::

### 無効

`disabled`プロパティを使用して、Listboxとのユーザーのやり取りを防止します。

::component-code
---
崩壊真
隠す
  - クラス
無視
  - アイテム
外部
  - アイテム
externalTypes
  -  ListboxItem []
小道具
  無効true
  アイテム
    -  label 'France'
      アイコン'i—lucide—map—pin'
      値'FR'
    -  label 'ドイツ'
      アイコン'i—lucide—map—pin'
      値'DE'
    -  label 'イタリア'
      アイコン'i—lucide—map—pin'
      値'IT'
    -  label 'スペイン'
      アイコン'i—lucide—map—pin'
      値'ES'
  クラス'w—full'
---
::

## 例

### アイテムタイプ付き

`type`プロパティを`separator`とともに使用してアイテム間の区切り文字を表示したり、`label`を使用してラベルを表示したりできます。

::component-code
---
崩壊真
隠す
  - クラス
無視
  - アイテム
外部
  - アイテム
externalTypes
  -  ListboxItem [][]
小道具
  アイテム
    - —タイプ'label'
        ラベル'フルーツ'
      -  label 'Apple'
      -  label 'Banana'
      -  label 'ブルーベリー'
      -  label 'ブドウ'
      -  label 'パイナップル'
    - —タイプ'label'
        ラベル'野菜'
      -  label 'Aubergine'
      -  label 'ブロッコリー'
      -  label 'Carrot'
      -  label 'Courgette'
      -  label 'Leek'
  クラス'w—full'
---
::

::note
`label`アイテムをグループ見出しとして使用する場合、検索時にラベルがグループとともにフィルタリングされるように配列の配列を渡します。
::

### アイテムにアイコン付き

`icon`プロパティを使用して、アイテム内に[ Icon ](/docs/components/icon)を表示できます。

::component-code
---
崩壊真
隠す
  - クラス
無視
  - アイテム
外部
  - アイテム
externalTypes
  -  ListboxItem []
小道具
  アイテム
    -  label Backlog
      アイコン'i—lucide—circle—help'
      値'backlog'
    -  label 'Todo'
      アイコン'i—lucide Circle—plus'
      値'todo'
    -  label 'In Progress'
      アイコン'i—lucide—circle—arrow—up'
      値'in_progress'
    - ラベル'完了'
      アイコン'i—lucide—circle—check'
      値'完了'
  クラス'w—full'
---
::

### アイテム内のアバター付き

`avatar`プロパティを使用して、アイテム内に[ Avatar ](/docs/components/avatar)を表示できます。

::component-code
---
崩壊真
隠す
  - クラス
無視
  - アイテム
外部
  - アイテム
externalTypes
  -  ListboxItem []
小道具
  アイテム
    -  label 'benjamincanac'
      アバター
        https//github.com/benjamincanac.png
    -  label 'HugoRCD'
      アバター
        https//github.com/HugoRCD.png
    -  label 'atinux'
      アバター
        https//github.com/atinux.png
    -  label 'romhml'
      アバター
        https//github.com/romhml.png
  クラス'w—full'
---
::

### アイテムのチップ付き

`chip`プロパティを使用して、アイテム内に[ Chip ](/docs/components/chip)を表示できます。

::component-code
---
崩壊真
隠す
  - クラス
無視
  - アイテム
外部
  - アイテム
externalTypes
  -  ListboxItem []
小道具
  アイテム
    -  label 'bug'
      チップ
        色'エラー'
    -  label 'feature'
      チップ
        色'成功'
    -  label 'enhancement'
      チップ
        色'情報'
  クラス'w—full'
---
::

### 項目の説明付き

`description`プロパティを使用して、ラベルの下に追加のテキストを表示できます。

::component-code
---
崩壊真
隠す
  - クラス
無視
  - アイテム
外部
  - アイテム
externalTypes
  -  ListboxItem []
小道具
  アイテム
    -  label 'France'
      解説：「ヘキサゴン」
      アイコン'i—lucide—map—pin'
      値'FR'
    -  label 'ドイツ'
      説明：「連邦共和国」
      アイコン'i—lucide—map—pin'
      値'DE'
    -  label 'イタリア'
      タイトル：THE BOOT
      アイコン'i—lucide—map—pin'
      値'IT'
    -  label 'スペイン'
      説明：「牛の皮」
      アイコン'i—lucide—map—pin'
      値'ES'
  クラス'w—full'
---
::

### 制御選択項目

`default-value` propまたは`v-model`ディレクティブを使用して、選択した項目を制御できます。

::component-example
---
名前'listbox—model—value—example'
崩壊真
---
::

###  Control検索語

`v-model:search-term`ディレクティブを使用して検索語を制御します。

::component-example
---
名前'listbox—search—term—example'
---
::

### 無視フィルタ付き

`ignore-filter` propを`true`に設定して、内部検索を無効にして独自の検索ロジックを使用します。

::component-example
---
崩壊真
name 'listbox—ignore—filter—example'
---
::

::note
この例では、[`refDebounced`](https://vueuse.org/shared/refDebounced/#refdebounced)を使用してAPI呼び出しをデバウンスします。
::

### フィルターフィールド付き

`filter-fields`プロパティにフィルターをかけるフィールドの配列を使用します。デフォルトは`[labelKey]`です。

::component-example
---
崩壊真
名前'listbox—filter—fields—example'
---
::

### 仮想化

`virtualize`プロパティを使用して、大きなリストの仮想化をブール値または`{ estimateSize: 32, overscan: 12 }`のようなオプションを持つオブジェクトとして有効にします。

::component-example
---
name 'listbox—virtualize—example'
崩壊真
---
::

### 転送リストとして

[ Button ](/docs/components/button)コントロールで2つのListboxコンポーネントを構成して、転送リストパターンを構築できます。

::component-example
---
名前'listbox—transfer—list—example'
崩壊真
---
::

##  API

###  Props

component—props

### スロット

コンポーネントスロット

### エミッツ

component—emits

## テーマ

コンポーネントテーマ

##  Changelog

component—changelog
