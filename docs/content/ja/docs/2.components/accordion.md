---
description: 折りたたみ式パネルの積み重ねセット。
category: data
keywords:
  - disclosure
  - collapse
  - faq
  - expansion panel
links:
  - label: アコーディオン
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/accordion
  - label: サイトマップ
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Accordion.vue
---

## 使用法

アコーディオンコンポーネントを使用して、折りたたみ可能なアイテムのリストを表示します。

::component-code
---
collapse: true
ignore:
  - items
  - ui.content
external:
  - items
externalTypes:
  - AccordionItem[]
hide:
  - class
  - ui
  - defaultValue
props:
  defaultValue: '0'
  class: 'px-4 max-w-lg'
  ui:
    content: 'text-muted'
  items:
    - label: 'Is Nuxt UI free to use?'
      content: 'Yes! Nuxt UI is completely free and open source under the MIT license. All 125+ components are available to everyone.'
    - label: 'Can I use Nuxt UI with Vue without Nuxt?'
      content: 'Yes! While optimized for Nuxt, Nuxt UI works perfectly with standalone Vue projects via our Vite plugin. You can follow the [installation guide](/docs/getting-started/installation/vue) to get started.'
    - label: 'Is Nuxt UI production-ready?'
      content: 'Yes! Nuxt UI is used in production by thousands of applications with extensive tests, regular updates, and active maintenance.'
---
::

### アイテム

`items`プロパティを次のプロパティを持つオブジェクトの配列として使用します。

- `label?: string`{lang="ts-type"}
- `icon?: string`{lang="ts-type"}
- `trailingIcon?: string`{lang="ts-type"}
- `content?: string`{lang="ts-type"}
- `value?: string`{lang="ts-type"}
- `disabled?: boolean`{lang="ts-type"}
- [`slot?: string`{lang="ts-type"}](#with-custom-slot)
- `class?: any`{lang="ts-type"}
- `ui?: { item?: ClassNameValue, header?: ClassNameValue, trigger?: ClassNameValue, leadingIcon?: ClassNameValue, label?: ClassNameValue, trailingIcon?: ClassNameValue, content?: ClassNameValue, body?: ClassNameValue }`{lang="ts-type"}

::component-code
---
ignore:
  - items
external:
  - items
externalTypes:
  - AccordionItem[]
hide:
  - class
props:
  class: 'px-4'
  items:
    - label: 'Icons'
      icon: 'i-lucide-smile'
      content: 'You have nothing to do, @nuxt/icon will handle it automatically.'
    - label: 'Colors'
      icon: 'i-lucide-swatch-book'
      content: 'Choose a primary and a neutral color from your Tailwind CSS theme.'
    - label: 'Components'
      icon: 'i-lucide-box'
      content: 'You can customize components by using the `class` / `ui` props or in your app.config.ts.'
---
::

### 複数

`type`プロパティを`multiple`に設定して、複数のアイテムを同時にアクティブにできるようにします。デフォルトは`single`です。

::component-code
---
ignore:
  - type
  - items
external:
  - items
externalTypes:
  - AccordionItem[]
hide:
  - class
props:
  class: 'px-4'
  type: 'multiple'
  items:
    - label: 'Icons'
      icon: 'i-lucide-smile'
      content: 'You have nothing to do, @nuxt/icon will handle it automatically.'
    - label: 'Colors'
      icon: 'i-lucide-swatch-book'
      content: 'Choose a primary and a neutral color from your Tailwind CSS theme.'
    - label: 'Components'
      icon: 'i-lucide-box'
      content: 'You can customize components by using the `class` / `ui` props or in your app.config.ts.'
---
::

### Collapsible

`type`が`single`の場合、`collapsible`プロパティを`false`に設定して、アクティブなアイテムが折りたたまれないようにできます。

::component-code
---
ignore:
  - collapsible
  - items
external:
  - items
externalTypes:
  - AccordionItem[]
hide:
  - class
props:
  class: 'px-4'
  collapsible: false
  items:
    - label: 'Icons'
      icon: 'i-lucide-smile'
      content: 'You have nothing to do, @nuxt/icon will handle it automatically.'
    - label: 'Colors'
      icon: 'i-lucide-swatch-book'
      content: 'Choose a primary and a neutral color from your Tailwind CSS theme.'
    - label: 'Components'
      icon: 'i-lucide-box'
      content: 'You can customize components by using the `class` / `ui` props or in your app.config.ts.'
---
::

### アンマウント

`unmount-on-hide`プロパティを使用して、アコーディオンが折りたたまれたときにコンテンツがアンマウントされないようにします。デフォルトは`true`です。

::component-code
---
ignore:
  - items
external:
  - items
externalTypes:
  - AccordionItem[]
hide:
  - class
props:
  class: 'px-4'
  unmountOnHide: false
  items:
    - label: 'Icons'
      icon: 'i-lucide-smile'
      content: 'You have nothing to do, @nuxt/icon will handle it automatically.'
    - label: 'Colors'
      icon: 'i-lucide-swatch-book'
      content: 'Choose a primary and a neutral color from your Tailwind CSS theme.'
    - label: 'Components'
      icon: 'i-lucide-box'
      content: 'You can customize components by using the `class` / `ui` props or in your app.config.ts.'
---
::

::note
DOMを検査して、各項目のコンテンツがレンダリングされていることを確認できます。
::

### 無効

`disabled`プロパティを使用してアコーディオンを無効にします。

itemオブジェクトの`disabled`プロパティを使用して、特定のアイテムを無効にすることもできます。

::component-code
---
ignore:
  - items
external:
  - items
externalTypes:
  - AccordionItem[]
hide:
  - class
props:
  class: 'px-4'
  disabled: true
  items:
    - label: 'Icons'
      icon: 'i-lucide-smile'
      content: 'You have nothing to do, @nuxt/icon will handle it automatically.'
    - label: 'Colors'
      icon: 'i-lucide-swatch-book'
      content: 'Choose a primary and a neutral color from your Tailwind CSS theme.'
      disabled: true
    - label: 'Components'
      icon: 'i-lucide-box'
      content: 'You can customize components by using the `class` / `ui` props or in your app.config.ts.'
---
::

### Trailingアイコン

`trailing-icon`プロパティを使用して、各アイテムの末尾の[Icon](/docs/components/icon)をカスタマイズします。デフォルトは`i-lucide-chevron-down`です。

::tip
itemオブジェクトの`trailingIcon`プロパティを使用して、特定のアイテムのアイコンを設定することもできます。
::

::component-code
---
ignore:
  - items
external:
  - items
externalTypes:
  - AccordionItem[]
hide:
  - class
props:
  class: 'px-4'
  trailingIcon: 'i-lucide-arrow-down'
  items:
    - label: 'Icons'
      icon: 'i-lucide-smile'
      content: 'You have nothing to do, @nuxt/icon will handle it automatically.'
      trailingIcon: 'i-lucide-plus'
    - label: 'Colors'
      icon: 'i-lucide-swatch-book'
      content: 'Choose a primary and a neutral color from your Tailwind CSS theme.'
    - label: 'Components'
      icon: 'i-lucide-box'
      content: 'You can customize components by using the `class` / `ui` props or in your app.config.ts.'
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

## サンプル

### Controlアクティブなアイテム

`default-value`プロパティを使用するか、`v-model`ディレクティブを使用してアイテムの`value`を指定してアクティブなアイテムを制御できます。`value`が指定されない場合、デフォルトではインデックス**が文字列**として指定されます。

::component-example
---
name: 'accordion-model-value-example'
props:
  class: 'px-4'
---
::

::tip
`v-model`または`default-value`が指定されたときにアイテムにマッチするキーを変更するには、`value-key`プロパティを使用します。
::

::caution
`type="multiple"`の場合は、`default-value`プロパティまたは`v-model`ディレクティブに配列を渡してください。
::

### ドラッグアンドドロップで

[`@vueuse/integrations`](https://vueuse.org/integrations/README.html)から構成可能な[](https://vueuse.org/integrations/useSortable/)を使用して、アコーディオン上でドラッグ&ドロップ機能を有効にします。この統合は[Sortable.js](https://sortablejs.github.io/Sortable/)をラップし、シームレスなドラッグ&ドロップ体験を提供します。

::component-example
---
name: 'accordion-drag-and-drop-example'
---
::

### ボディスロット付

`#body`スロットを使用して、各アイテムの本体をカスタマイズします。

::component-example
---
name: 'accordion-body-slot-example'
props:
  class: 'px-4'
---
::

::tip
`#body`スロットにはいくつかの定義済みのスタイルが含まれています。ゼロから始めたい場合は[`#content` slot](#with-content-slot)を使用してください。
::

### コンテンツスロット付き

`#content`スロットを使用して、各アイテムのコンテンツをカスタマイズします。

::component-example
---
name: 'accordion-content-slot-example'
props:
  class: 'px-4'
---
::

### カスタムスロット付き

特定の項目をカスタマイズするには、`slot`プロパティを使用します。

以下のスロットにアクセスできます：

- `#{{ item.slot }}`{lang="ts-type"}
- `#{{ item.slot }}-body`{lang="ts-type"}

::component-example
---
name: 'accordion-custom-slot-example'
props:
  class: 'px-4'
---
::

###  with markdown content

`@comark/vue`の[Markdown](https://comark.dev/rendering/vue)コンポーネントを使用して、アコーディオンアイテムのマークダウンをレンダリングできます。

::component-example
---
collapse: true
name: 'accordion-markdown-example'
class: 'px-8'
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
