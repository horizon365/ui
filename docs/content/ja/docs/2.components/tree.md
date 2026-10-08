---
description: 階層データ構造を表示して操作するツリービューコンポーネント。
category: data
keywords:
  - file tree
  - hierarchy
  - folder tree
links:
  - label: ツリー
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/tree
  - label: サイトマップ
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Tree.vue
---

## 使用法

ツリーコンポーネントを使用して、アイテムの階層構造を表示します。

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
  -  TreeItem []
小道具
  アイテム
    -  label 'app/'
      defaultExpanded true
      子供：
        -  label 'composables/'
          子供：
            -  label 'useAuth.ts'
              アイコン'i—vscode—icons—file—typescript'
            -  label 'useUser.ts'
              アイコン'i—vscode—icons—file—typescript'
        -  label 'components/'
          defaultExpanded true
          子供：
            -  label 'Card.vue'
              アイコン'i—vscode—icons—file—type—vue'
            -  label 'Button.vue'
              アイコン'i—vscode—icons—file—type—vue'
    -  label 'app.vue'
      アイコン'i—vscode—icons—file—type—vue'
    -  label 'nuxt.config.ts'
      アイコン'i—vscode—icons—file—type—nuxt'
  クラス'w—60'
---
::

### アイテム

`items`プロパティを、次のプロパティを持つオブジェクトの配列として使用します。

- `icon?: string`{lang="ts-type"}
- `label?: string`{lang="ts-type"}
- `trailingIcon?: string`{lang="ts-type"}
- `defaultExpanded?: boolean`{lang="ts-type"}
- `disabled?: boolean`{lang="ts-type"}
- `slot?: string`{lang="ts-type"}
- `children?: TreeItem[]`{lang="ts-type"}
- `onToggle?: (e: TreeItemToggleEvent<TreeItem>) => void`{lang="ts-type"}
- `onSelect?: (e: TreeItemSelectEvent<TreeItem>) => void`{lang="ts-type"}
- `class?: any`{lang="ts-type"}
- `ui?: { item?: ClassNameValue, itemWithChildren?: ClassNameValue, link?: ClassNameValue, linkLeadingIcon?: ClassNameValue, linkLabel?: ClassNameValue, linkTrailing?: ClassNameValue, linkTrailingIcon?: ClassNameValue, listWithChildren?: ClassNameValue }`{lang="ts-type"}

::note
各項目には一意の識別子が必要です。`get-key`が指定されていない場合、コンポーネントは`label` propを識別子として使用します。理想的には、一意の識別子を返すために`get-key` function propを提供する必要があります。あるいは、一意の識別子として使用するプロパティを指定するには、`labelKey` propを使用することもできます。
::

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
  -  TreeItem []
小道具
  アイテム
    -  label 'app/'
      defaultExpanded true
      子供：
        -  label 'composables/'
          子供：
            -  label 'useAuth.ts'
              アイコン'i—vscode—icons—file—typescript'
            -  label 'useUser.ts'
              アイコン'i—vscode—icons—file—typescript'
        -  label 'components/'
          defaultExpanded true
          子供：
            -  label 'Card.vue'
              アイコン'i—vscode—icons—file—type—vue'
            -  label 'Button.vue'
              アイコン'i—vscode—icons—file—type—vue'
    -  label 'app.vue'
      アイコン'i—vscode—icons—file—type—vue'
    -  label 'nuxt.config.ts'
      アイコン'i—vscode—icons—file—type—nuxt'
  クラス'w—60'
---
::

### 複数

`multiple`プロパティを使用して、複数の項目を選択できます。

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
  -  TreeItem []
小道具
  複数true
  アイテム
    -  label 'app/'
      defaultExpanded true
      子供：
        -  label 'composables/'
          子供：
            -  label 'useAuth.ts'
              アイコン'i—vscode—icons—file—typescript'
            -  label 'useUser.ts'
              アイコン'i—vscode—icons—file—typescript'
        -  label 'components/'
          defaultExpanded true
          子供：
            -  label 'Card.vue'
              アイコン'i—vscode—icons—file—type—vue'
            -  label 'Button.vue'
              アイコン'i—vscode—icons—file—type—vue'
    -  label 'app.vue'
      アイコン'i—vscode—icons—file—type—vue'
    -  label 'nuxt.config.ts'
      アイコン'i—vscode—icons—file—type—nuxt'
  クラス'w—60'
---
::

### ネストbadge {label="4.1+" class="align-text-top"}

ツリーをネスト構造でレンダリングするか、フラットリストでレンダリングするかを制御するには、`nested`プロパティを使用します。デフォルトは`true`です。

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
  -  TreeItem []
小道具
  ネストfalse
  アイテム
    -  label 'app/'
      defaultExpanded true
      子供：
        -  label 'composables/'
          子供：
            -  label 'useAuth.ts'
              アイコン'i—vscode—icons—file—typescript'
            -  label 'useUser.ts'
              アイコン'i—vscode—icons—file—typescript'
        -  label 'components/'
          defaultExpanded true
          子供：
            -  label 'Card.vue'
              アイコン'i—vscode—icons—file—type—vue'
            -  label 'Button.vue'
              アイコン'i—vscode—icons—file—type—vue'
    -  label 'app.vue'
      アイコン'i—vscode—icons—file—type—vue'
    -  label 'nuxt.config.ts'
      アイコン'i—vscode—icons—file—type—nuxt'
  クラス'w—60'
---
::

::note{to="#with-virtualization"}
`nested`が`false`の場合、すべての項目が同じレベルで表示され、階層を示すためにインデントされます。これは仮想化やドラッグアンドドロップ機能に便利です。
::

### カラー

`color`プロパティを使用してツリーの色を変更します。

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
  -  TreeItem []
小道具
  色ニュートラル
  アイテム
    -  label 'app/'
      defaultExpanded true
      子供：
        -  label 'composables/'
          子供：
            -  label 'useAuth.ts'
              アイコン'i—vscode—icons—file—typescript'
            -  label 'useUser.ts'
              アイコン'i—vscode—icons—file—typescript'
        -  label 'components/'
          defaultExpanded true
          子供：
            -  label 'Card.vue'
              アイコン'i—vscode—icons—file—type—vue'
            -  label 'Button.vue'
              アイコン'i—vscode—icons—file—type—vue'
    -  label 'app.vue'
      アイコン'i—vscode—icons—file—type—vue'
    -  label 'nuxt.config.ts'
      アイコン'i—vscode—icons—file—type—nuxt'
  クラス'w—60'
---
::

### サイズ

`size`プロパティを使用してツリーのサイズを変更します。

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
  -  TreeItem []
小道具
  サイズXL
  アイテム
    -  label 'app/'
      defaultExpanded true
      子供：
        -  label 'composables/'
          子供：
            -  label 'useAuth.ts'
              アイコン'i—vscode—icons—file—typescript'
            -  label 'useUser.ts'
              アイコン'i—vscode—icons—file—typescript'
        -  label 'components/'
          defaultExpanded true
          子供：
            -  label 'Card.vue'
              アイコン'i—vscode—icons—file—type—vue'
            -  label 'Button.vue'
              アイコン'i—vscode—icons—file—type—vue'
    -  label 'app.vue'
      アイコン'i—vscode—icons—file—type—vue'
    -  label 'nuxt.config.ts'
      アイコン'i—vscode—icons—file—type—nuxt'
  クラス'w—60'
---
::

### トレーリングアイコン

`trailing-icon`プロパティを使用して、親ノードの末尾の[ Icon ](/docs/components/icon)をカスタマイズします。デフォルトは`i-lucide-chevron-down`です。

::note
アイテムにアイコンが指定されている場合、常にこれらの小道具よりも優先されます。
::

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
  -  TreeItem []
小道具
  trailingIcon 'i—lucide—arrow—down'
  アイテム
    -  label 'app/'
      defaultExpanded true
      子供：
        -  label 'composables/'
          trailingIcon 'i—lucide—chevron—down'
          子供：
            -  label 'useAuth.ts'
              アイコン'i—vscode—icons—file—typescript'
            -  label 'useUser.ts'
              アイコン'i—vscode—icons—file—typescript'
        -  label 'components/'
          defaultExpanded true
          子供：
            -  label 'Card.vue'
              アイコン'i—vscode—icons—file—type—vue'
            -  label 'Button.vue'
              アイコン'i—vscode—icons—file—type—vue'
    -  label 'app.vue'
      アイコン'i—vscode—icons—file—type—vue'
    -  label 'nuxt.config.ts'
      アイコン'i—vscode—icons—file—type—nuxt'
  クラス'w—60'
---
::

::framework-only
#nuxt
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
このアイコンは、`ui.icons.chevronDown`キーの下の`app.config.ts`でグローバルにカスタマイズできます。
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
このアイコンは、`ui.icons.chevronDown`キーの下の`vite.config.ts`でグローバルにカスタマイズできます。
:::
::

### 拡張アイコン

`expanded-icon`および`collapsed-icon` propsを使用して、親ノードが展開または折りたたまれたときのアイコンをカスタマイズします。デフォルトはそれぞれ`i-lucide-folder-open`および`i-lucide-folder`です。

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
  -  TreeItem []
小道具
  expandedIcon 'i—lucide—book—open'
  collapsedIcon 'i—lucide'
  アイテム
    -  label 'app/'
      defaultExpanded true
      子供：
        -  label 'composables/'
          子供：
            -  label 'useAuth.ts'
              アイコン'i—vscode—icons—file—typescript'
            -  label 'useUser.ts'
              アイコン'i—vscode—icons—file—typescript'
        -  label 'components/'
          defaultExpanded true
          子供：
            -  label 'Card.vue'
              アイコン'i—vscode—icons—file—type—vue'
            -  label 'Button.vue'
              アイコン'i—vscode—icons—file—type—vue'
    -  label 'app.vue'
      アイコン'i—vscode—icons—file—type—vue'
    -  label 'nuxt.config.ts'
      アイコン'i—vscode—icons—file—type—nuxt'
  クラス'w—60'
---
::

::framework-only
#nuxt
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
これらのアイコンは、`ui.icons.folder`および`ui.icons.folderOpen`キーの`app.config.ts`でグローバルにカスタマイズできます。
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
これらのアイコンは、`ui.icons.folder`および`ui.icons.folderOpen`キーの`vite.config.ts`でグローバルにカスタマイズできます。
:::
::

### 無効

`disabled`プロパティを使用して、ツリーとのユーザーのやりとりを防止します。

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
  -  TreeItem []
小道具
  無効true
  アイテム
    -  label 'app'
      アイコン'i—lucide—folder'
      defaultExpanded true
      子供：
        -  label 'composables'
          アイコン'i—lucide—folder'
          子供：
            -  label 'useAuth.ts'
              アイコン'i—vscode—icons—file—typescript'
            -  label 'useUser.ts'
              アイコン'i—vscode—icons—file—typescript'
        -  label 'コンポーネント'
          アイコン'i—lucide—folder'
          子供：
            -  label 'ホーム'
              アイコン'i—lucide—folder'
              子供：
                -  label 'Card.vue'
                  アイコン'i—vscode—icons—file—type—vue'
                -  label 'Button.vue'
                  アイコン'i—vscode—icons—file—type—vue'
    -  label 'app.vue'
      アイコン'i—vscode—icons—file—type—vue'
    -  label 'nuxt.config.ts'
      アイコン'i—vscode—icons—file—type—nuxt'
  クラス'w—60'
---
::

::note
`item.disabled`を使用して個々の項目を無効にすることもできます。
::

## 例

### 制御選択項目

`default-value` propまたは`v-model`ディレクティブを使用して、選択した項目を制御できます。

::component-example
---
名前'ツリーモデル値の例'
崩壊真
小道具
  クラス'w—60'
---
::

::tip
`get-key` propを使用して、`v-model`または`default-value`が指定された場合に各項目から一意のキーを取得するために使用される関数を変更します。
::

項目が選択されないようにするには、`item.onSelect()`{lang="ts-type"}プロパティまたはグローバルな`select`イベントを使用できます。

::component-example
---
名前'ツリー·オン·セレクトサンプル'
崩壊真
小道具
  クラス'w—60'
---
::

::note
これにより、親項目を選択せずに展開または折りたたむことができます。
::

### 制御展開項目

展開された項目は、`default-expanded` propまたは`v-model`ディレクティブを使用して制御できます。

::component-example
---
name 'ツリー展開例'
崩壊真
小道具
  クラス'w—60'
---
::

アイテムが展開されないようにしたい場合は、`item.onToggle()`{lang="ts-type"}プロパティまたはグローバルな`toggle`イベントを使用できます。

::component-example
---
名前'ツリー·オン·トグル·サンプル'
崩壊真
小道具
  クラス'w—60'
---
::

::note
これにより、子アイテムを展開または折りたたみせずに親アイテムを選択できます。
::

### 項目にチェックボックスがある場合：バッジ{label="4.1+" class="align-text-top"}

`item-leading`スロットを使用して、項目に[ Checkbox ](/docs/components/checkbox)を追加できます。`multiple`を使用して、`propagate-select`と`bubble-select` propsは、親子関係と`select`と`toggle`で複数選択を可能にしますアイテムの選択状態と展開状態を制御するイベントです

::component-example
---
名前'ツリー—チェックボックス—アイテム—例'
崩壊真
小道具
  クラス'w—60'
---
::

::note
この例では、`as` propを使用して、[`Checkbox`](/docs/components/checkbox)も`button`としてレンダリングされます。
::

### ドラッグアンドドロップで：badge {label="4.1+" class="align-text-top"}

[`useSortable`](https://vueuse.org/integrations/useSortable/)[`@vueuse/integrations`](https://vueuse.org/integrations/README.html)から構成可能な[を使用して、ツリー上でドラッグ&ドロップ機能を有効にします。この統合は[ Sortable.js ](https://sortablejs.github.io/Sortable/)シームレスなドラッグアンドドロップ体験を提供します

::component-example
---
きれい真
崩壊真
名前'ツリードラッグアンドドロップの例'
---
::

::note
この例では、`nested` propを`false`に設定して、アイテムをドラッグ&ドロップできるようにします。
::

### 仮想化の場合：badge {label="4.1+" class="align-text-top"}

`virtualize`プロパティを使用して、ブール値または`{ estimateSize: 32, overscan: 12 }`のようなオプションを持つオブジェクトとして大きなリストの仮想化を有効にします。

::warning
仮想化が有効な場合、ツリー構造はフラット化され、`nested` propを`false`に設定するのと同様です。
::

::component-example
---
きれい真
名前'ツリー仮想化—example'
小道具
  クラス'w—60'
---
::

### カスタムスロット付き

特定の項目をカスタマイズするには、`slot`プロパティを使用します。

以下のスロットにアクセスできます：

- `#{{ item.slot }}-wrapper`{lang="ts-type"}
- `#{{ item.slot }}`{lang="ts-type"}
- `#{{ item.slot }}-leading`{lang="ts-type"}
- `#{{ item.slot }}-label`{lang="ts-type"}
- `#{{ item.slot }}-trailing`{lang="ts-type"}

::component-example
---
名前'ツリーカスタムスロットサンプル'
崩壊真
小道具
  クラス'w—60'
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
