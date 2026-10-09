---
description: 一组叠起来的可折叠的嵌板。
category: data
keywords:
  - disclosure
  - collapse
  - faq
  - expansion panel
links:
  - label: 手风琴
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/accordion
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Accordion.vue
---

## 用法

使用Accordion组件可显示可折叠项的列表。

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

### 项目

使用`items` prop作为具有以下属性的对象数组：

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

### 多个

将`type`属性设置为`multiple`，以允许多个项目同时处于活动状态。将其设置为`single`。

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

### 可折叠

当`type`为`single`时，可以将`collapsible`属性设置为`false`，以防止活动项折叠。

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

### 卸载

使用`unmount-on-hide`属性来防止折叠手风琴时内容被卸载。将其转换为`true`。

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
您可以检查DOM以查看呈现的每个项的内容。
::

### 禁用

使用`disabled`属性禁用折叠器。

您还可以使用item对象中的`disabled`属性禁用特定项。

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

### 拖尾图标

使用`trailing-icon`属性将每个项目的尾随[Icon](/docs/components/icon)自定义为`i-lucide-chevron-down`。

::tip
还可以使用item对象中的`trailingIcon`属性为特定项设置图标。
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
你可以在你的`app.config.ts`下的`ui.icons.chevronDown`键全局自定义这个图标。
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
你可以在你的`vite.config.ts`中的`ui.icons.chevronDown`键下全局自定义这个图标。
:::
::

## 示例

active item（s）

您可以通过使用`default-value` prop或`v-model`指令与项目的`value`来控制活动项目。如果没有提供`value`，则默认为索引**作为字符串**。

::component-example
---
name: 'accordion-model-value-example'
props:
  class: 'px-4'
---
::

::tip
当提供`v-model`或`default-value`时，使用`value-key`属性更改用于匹配项的键。
::

::caution
当`type="multiple"`时，确保将数组传递给`default-value` prop或`v-model`指令。
::

### 使用拖放

使用[`@vueuse/integrations`](https://vueuse.org/integrations/README.html)中的[`useSortable`](https://vueuse.org/integrations/useSortable/)组合可在Accordion上启用拖放功能。此集成包装[Sortable.js](https://sortablejs.github.io/Sortable/)以提供无缝拖放体验。

::component-example
---
name: 'accordion-drag-and-drop-example'
---
::

### 带机身插槽

使用`#body`插槽自定义每个项目的主体。

::component-example
---
name: 'accordion-body-slot-example'
props:
  class: 'px-4'
---
::

::tip
`#body`插槽包括一些预定义的样式，如果您想从头开始，请使用[`#content`插槽](#with-content-slot)。
::

### 带内容插槽

使用`#content`插槽自定义每个项目的内容。

::component-example
---
name: 'accordion-content-slot-example'
props:
  class: 'px-4'
---
::

### 带自定义插槽

使用`slot`属性可自定义特定项。

您将可以访问以下插槽：

- `#{{ item.slot }}`{lang="ts-type"}
- `#{{ item.slot }}-body`{lang="ts-type"}

::component-example
---
name: 'accordion-custom-slot-example'
props:
  class: 'px-4'
---
::

### 带有markdown内容

您可以使用`@comark/vue`中的[Markdown](https://comark.dev/rendering/vue)组件来呈现可折叠项中的markdown。

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

### Slots

:component-slots

### 发射

:component-emits

## Theme

:component-theme

## Changelog

:component-changelog
