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
collapse: true
hide:
  - class
ignore:
  - items
external:
  - items
externalTypes:
  - TreeItem[]
props:
  items:
    - label: 'app/'
      defaultExpanded: true
      children:
        - label: 'composables/'
          children:
            - label: 'useAuth.ts'
              icon: 'i-vscode-icons-file-type-typescript'
            - label: 'useUser.ts'
              icon: 'i-vscode-icons-file-type-typescript'
        - label: 'components/'
          defaultExpanded: true
          children:
            - label: 'Card.vue'
              icon: 'i-vscode-icons-file-type-vue'
            - label: 'Button.vue'
              icon: 'i-vscode-icons-file-type-vue'
    - label: 'app.vue'
      icon: 'i-vscode-icons-file-type-vue'
    - label: 'nuxt.config.ts'
      icon: 'i-vscode-icons-file-type-nuxt'
  class: 'w-60'
---
::

### アイテム

`items`プロパティを次のプロパティを持つオブジェクトの配列として使用します。

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
各アイテムには一意の識別子が必要です。`get-key`が指定されていない場合、コンポーネントは`label`プロパティを識別子として使用します。理想的には、一意の識別子を返すために`get-key`関数プロパティを提供するべきです。あるいは、`labelKey`プロパティを使用して、一意の識別子として使用するプロパティを指定することもできます。
::

::component-code
---
collapse: true
hide:
  - class
ignore:
  - items
external:
  - items
externalTypes:
  - TreeItem[]
props:
  items:
    - label: 'app/'
      defaultExpanded: true
      children:
        - label: 'composables/'
          children:
            - label: 'useAuth.ts'
              icon: 'i-vscode-icons-file-type-typescript'
            - label: 'useUser.ts'
              icon: 'i-vscode-icons-file-type-typescript'
        - label: 'components/'
          defaultExpanded: true
          children:
            - label: 'Card.vue'
              icon: 'i-vscode-icons-file-type-vue'
            - label: 'Button.vue'
              icon: 'i-vscode-icons-file-type-vue'
    - label: 'app.vue'
      icon: 'i-vscode-icons-file-type-vue'
    - label: 'nuxt.config.ts'
      icon: 'i-vscode-icons-file-type-nuxt'
  class: 'w-60'
---
::

### 複数

`multiple`プロパティを使用して複数の項目を選択できます。

::component-code
---
collapse: true
hide:
  - class
ignore:
  - items
external:
  - items
externalTypes:
  - TreeItem[]
props:
  multiple: true
  items:
    - label: 'app/'
      defaultExpanded: true
      children:
        - label: 'composables/'
          children:
            - label: 'useAuth.ts'
              icon: 'i-vscode-icons-file-type-typescript'
            - label: 'useUser.ts'
              icon: 'i-vscode-icons-file-type-typescript'
        - label: 'components/'
          defaultExpanded: true
          children:
            - label: 'Card.vue'
              icon: 'i-vscode-icons-file-type-vue'
            - label: 'Button.vue'
              icon: 'i-vscode-icons-file-type-vue'
    - label: 'app.vue'
      icon: 'i-vscode-icons-file-type-vue'
    - label: 'nuxt.config.ts'
      icon: 'i-vscode-icons-file-type-nuxt'
  class: 'w-60'
---
::

### ネストbadge{label="4.1+" class="align-text-top"}

`nested`プロパティを使用して、ツリーをネスト構造でレンダリングするか、フラットリストとしてレンダリングするかを制御します。デフォルトは`true`です。

::component-code
---
collapse: true
hide:
  - class
ignore:
  - items
external:
  - items
externalTypes:
  - TreeItem[]
props:
  nested: false
  items:
    - label: 'app/'
      defaultExpanded: true
      children:
        - label: 'composables/'
          children:
            - label: 'useAuth.ts'
              icon: 'i-vscode-icons-file-type-typescript'
            - label: 'useUser.ts'
              icon: 'i-vscode-icons-file-type-typescript'
        - label: 'components/'
          defaultExpanded: true
          children:
            - label: 'Card.vue'
              icon: 'i-vscode-icons-file-type-vue'
            - label: 'Button.vue'
              icon: 'i-vscode-icons-file-type-vue'
    - label: 'app.vue'
      icon: 'i-vscode-icons-file-type-vue'
    - label: 'nuxt.config.ts'
      icon: 'i-vscode-icons-file-type-nuxt'
  class: 'w-60'
---
::

::note{to="#with-virtualization"}
`nested`が`false`の場合、すべてのアイテムは階層を示すインデント付きで同じレベルでレンダリングされます。これは仮想化やドラッグアンドドロップ機能に便利です。
::

### Color

`color`プロパティを使用してツリーの色を変更します。

::component-code
---
collapse: true
hide:
  - class
ignore:
  - items
external:
  - items
externalTypes:
  - TreeItem[]
props:
  color: neutral
  items:
    - label: 'app/'
      defaultExpanded: true
      children:
        - label: 'composables/'
          children:
            - label: 'useAuth.ts'
              icon: 'i-vscode-icons-file-type-typescript'
            - label: 'useUser.ts'
              icon: 'i-vscode-icons-file-type-typescript'
        - label: 'components/'
          defaultExpanded: true
          children:
            - label: 'Card.vue'
              icon: 'i-vscode-icons-file-type-vue'
            - label: 'Button.vue'
              icon: 'i-vscode-icons-file-type-vue'
    - label: 'app.vue'
      icon: 'i-vscode-icons-file-type-vue'
    - label: 'nuxt.config.ts'
      icon: 'i-vscode-icons-file-type-nuxt'
  class: 'w-60'
---
::

### サイズ

`size`プロパティを使用してツリーのサイズを変更します。

::component-code
---
collapse: true
hide:
  - class
ignore:
  - items
external:
  - items
externalTypes:
  - TreeItem[]
props:
  size: xl
  items:
    - label: 'app/'
      defaultExpanded: true
      children:
        - label: 'composables/'
          children:
            - label: 'useAuth.ts'
              icon: 'i-vscode-icons-file-type-typescript'
            - label: 'useUser.ts'
              icon: 'i-vscode-icons-file-type-typescript'
        - label: 'components/'
          defaultExpanded: true
          children:
            - label: 'Card.vue'
              icon: 'i-vscode-icons-file-type-vue'
            - label: 'Button.vue'
              icon: 'i-vscode-icons-file-type-vue'
    - label: 'app.vue'
      icon: 'i-vscode-icons-file-type-vue'
    - label: 'nuxt.config.ts'
      icon: 'i-vscode-icons-file-type-nuxt'
  class: 'w-60'
---
::

### Trailingアイコン

`trailing-icon`プロパティを使用して、親ノードの末尾の[Icon](/docs/components/icon)をカスタマイズします。デフォルトは`i-lucide-chevron-down`です。

::note
アイテムにアイコンが指定されている場合、常にこれらの小道具よりも優先されます。
::

::component-code
---
collapse: true
hide:
  - class
ignore:
  - items
external:
  - items
externalTypes:
  - TreeItem[]
props:
  trailingIcon: 'i-lucide-arrow-down'
  items:
    - label: 'app/'
      defaultExpanded: true
      children:
        - label: 'composables/'
          trailingIcon: 'i-lucide-chevron-down'
          children:
            - label: 'useAuth.ts'
              icon: 'i-vscode-icons-file-type-typescript'
            - label: 'useUser.ts'
              icon: 'i-vscode-icons-file-type-typescript'
        - label: 'components/'
          defaultExpanded: true
          children:
            - label: 'Card.vue'
              icon: 'i-vscode-icons-file-type-vue'
            - label: 'Button.vue'
              icon: 'i-vscode-icons-file-type-vue'
    - label: 'app.vue'
      icon: 'i-vscode-icons-file-type-vue'
    - label: 'nuxt.config.ts'
      icon: 'i-vscode-icons-file-type-nuxt'
  class: 'w-60'
---
::

::framework-only
#nuxt
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
このアイコンは`app.config.ts`の`ui.icons.chevronDown`キーでグローバルにカスタマイズできます。
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
このアイコンは`vite.config.ts`の`ui.icons.chevronDown`キーでグローバルにカスタマイズできます。
:::
::

### 拡張アイコン

`expanded-icon`と`collapsed-icon`のプロップを使用して、親ノードが展開または折りたたまれたときのアイコンをカスタマイズします。デフォルトはそれぞれ`i-lucide-folder-open`と`i-lucide-folder`です。

::component-code
---
collapse: true
hide:
  - class
ignore:
  - items
external:
  - items
externalTypes:
  - TreeItem[]
props:
  expandedIcon: 'i-lucide-book-open'
  collapsedIcon: 'i-lucide-book'
  items:
    - label: 'app/'
      defaultExpanded: true
      children:
        - label: 'composables/'
          children:
            - label: 'useAuth.ts'
              icon: 'i-vscode-icons-file-type-typescript'
            - label: 'useUser.ts'
              icon: 'i-vscode-icons-file-type-typescript'
        - label: 'components/'
          defaultExpanded: true
          children:
            - label: 'Card.vue'
              icon: 'i-vscode-icons-file-type-vue'
            - label: 'Button.vue'
              icon: 'i-vscode-icons-file-type-vue'
    - label: 'app.vue'
      icon: 'i-vscode-icons-file-type-vue'
    - label: 'nuxt.config.ts'
      icon: 'i-vscode-icons-file-type-nuxt'
  class: 'w-60'
---
::

::framework-only
#nuxt
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
これらのアイコンは`app.config.ts`の`ui.icons.folder`および`ui.icons.folderOpen`キーでグローバルにカスタマイズできます。
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
これらのアイコンは`vite.config.ts`の`ui.icons.folder`および`ui.icons.folderOpen`キーでグローバルにカスタマイズできます。
:::
::

### 無効

`disabled`プロパティを使用して、ツリーとのユーザーインタラクションを防止します。

::component-code
---
collapse: true
hide:
  - class
ignore:
  - items
external:
  - items
externalTypes:
  - TreeItem[]
props:
  disabled: true
  items:
    - label: 'app'
      icon: 'i-lucide-folder'
      defaultExpanded: true
      children:
        - label: 'composables'
          icon: 'i-lucide-folder'
          children:
            - label: 'useAuth.ts'
              icon: 'i-vscode-icons-file-type-typescript'
            - label: 'useUser.ts'
              icon: 'i-vscode-icons-file-type-typescript'
        - label: 'components'
          icon: 'i-lucide-folder'
          children:
            - label: 'Home'
              icon: 'i-lucide-folder'
              children:
                - label: 'Card.vue'
                  icon: 'i-vscode-icons-file-type-vue'
                - label: 'Button.vue'
                  icon: 'i-vscode-icons-file-type-vue'
    - label: 'app.vue'
      icon: 'i-vscode-icons-file-type-vue'
    - label: 'nuxt.config.ts'
      icon: 'i-vscode-icons-file-type-nuxt'
  class: 'w-60'
---
::

::note
`item.disabled`を使用して個々の項目を無効にできます。
::

## 例

### 選択項目の制御

`default-value`プロパティまたは`v-model`ディレクティブを使用して、選択されたアイテムを制御できます。

::component-example
---
name: 'tree-model-value-example'
collapse: true
props:
  class: 'w-60'
---
::

::tip
`get-key`プロパティを使用して、`v-model`または`default-value`が指定されたときに各アイテムから一意のキーを取得する関数を変更します。
::

項目が選択されないようにしたい場合は、`item.onSelect()`{lang="ts-type"}プロパティまたはグローバル`select`イベントを使用できます。

::component-example
---
name: 'tree-on-select-example'
collapse: true
props:
  class: 'w-60'
---
::

::note
これにより、親項目を選択せずに展開または折りたたむことができます。
::

###  Control展開項目

展開された項目は、`default-expanded`プロパティまたは`v-model`ディレクティブを使用して制御できます。

::component-example
---
name: 'tree-expanded-example'
collapse: true
props:
  class: 'w-60'
---
::

アイテムが展開されないようにしたい場合は、`item.onToggle()`{lang="ts-type"}プロパティまたはグローバル`toggle`イベントを使用できます。

::component-example
---
name: 'tree-on-toggle-example'
collapse: true
props:
  class: 'w-60'
---
::

::note
これにより、子アイテムを展開または折りたたみせずに親アイテムを選択できます。
::

### 項目にチェックボックスをつけてください：badge{label="4.1+" class="align-text-top"}

`item-leading`スロットを使用して、[Checkbox](/docs/components/checkbox)をアイテムに追加できます。`multiple`、`propagate-select`、`bubble-select`プロパティを使用して、親子関係を持つ複数選択を有効にし、`select`と`toggle`イベントを使用してアイテムの選択状態と展開状態を制御します。

::component-example
---
name: 'tree-checkbox-items-example'
collapse: true
props:
  class: 'w-60'
---
::

::note
この例では、`as`プロパティを使用してアイテムを`button`から`div`に変更します。[`Checkbox`](/docs/components/checkbox)も`button`としてレンダリングされます。
::

### ドラッグアンドドロップでbadge{label="4.1+" class="align-text-top"}

[`@vueuse/integrations`https://vueuse.org/integrations/README.html)から構成可能な[](https://vueuse.org/integrations/useSortable/)を使用して、ツリー上でドラッグ&ドロップ機能を有効にします。この統合は[Sortable.js](https://sortablejs.github.io/Sortable/)をラップし、シームレスなドラッグ&ドロップ体験を提供します。

::component-example
---
prettier: true
collapse: true
name: 'tree-drag-and-drop-example'
---
::

::note
この例では、`nested`プロパティを`false`に設定し、アイテムをドラッグ&ドロップできるようにします。
::

### 仮想化badge{label="4.1+" class="align-text-top"}

`virtualize`プロパティを使用して、大きなリストをブール値または`{ estimateSize: 32, overscan: 12 }`のようなオプションを持つオブジェクトとして仮想化できます。

::warning
仮想化が有効な場合、`nested`プロパティを`false`に設定するのと同様に、ツリー構造はフラット化されます。
::

::component-example
---
prettier: true
name: 'tree-virtualize-example'
props:
  class: 'w-60'
---
::

### カスタムスロット付き

`slot`プロパティを使用して、特定のアイテムをカスタマイズします。

以下のスロットにアクセスできます：

- `#{{ item.slot }}-wrapper`{lang="ts-type"}
- `#{{ item.slot }}`{lang="ts-type"}
- `#{{ item.slot }}-leading`{lang="ts-type"}
- `#{{ item.slot }}-label`{lang="ts-type"}
- `#{{ item.slot }}-trailing`{lang="ts-type"}

::component-example
---
name: 'tree-custom-slot-example'
collapse: true
props:
  class: 'w-60'
---
::

## API

### Props

:component-props

### スロット

:component-slots

### Emits

:component-emits

## Theme

:component-theme

## Changelog

:component-changelog
