---
description: 접을 수 있는 패널의 스택 세트입니다.
category: data
keywords:
  - disclosure
  - collapse
  - faq
  - expansion panel
links:
  - label: 아코디온
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/accordion
  - label: Github (GitHub)
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Accordion.vue
---

## Usage

아코디언 구성 요소를 사용하여 축소 가능한 항목 목록을 표시합니다.

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

### Items 파일

`items` prop을 다음과 같은 속성을 가진 오브젝트 배열로 사용합니다.

- `label?: string`{lang="ts-type"} (- `label?: string`{lang="ts-type"})
- `icon?: string`{lang="ts-type"} - {lang="ts-type"}
- `trailingIcon?: string`{lang="ts-type"} - {lang="ts-type"}
- `content?: string`{lang="ts-type"}의 발음을 - `content?: string`{lang="ts-type"}
- `value?: string`{lang="ts-type"} (- `value?: string`{lang="ts-type"})
- `disabled?: boolean`{lang="ts-type"} - `disabled?: boolean`{lang="ts-type"}
- [`slot?: string`xxx 053 x](#with-custom-slot)
- `class?: any`{lang="ts-type"}
- `ui?: { item?: ClassNameValue, header?: ClassNameValue, trigger?: ClassNameValue, leadingIcon?: ClassNameValue, label?: ClassNameValue, trailingIcon?: ClassNameValue, content?: ClassNameValue, body?: ClassNameValue }`{lang="ts-type"} (- `ui?: { item?: ClassNameValue, header?: ClassNameValue, trigger?: ClassNameValue, leadingIcon?: ClassNameValue, label?: ClassNameValue, trailingIcon?: ClassNameValue, content?: ClassNameValue, body?: ClassNameValue }`{lang="ts-type"})

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

### 다중

여러 항목이 동시에 활성화되도록 `type` Prop을 `multiple`로 설정합니다. 기본값은 `single`입니다.

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

### Collapable 압축

`type`가 `single`일 때 `collapsible` prop을 `false`로 설정하여 활성 항목이 축소되지 않도록 할 수 있습니다.

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

### Unmount (### 마운트 해제)

아코디언이 축소될 때 내용이 마운트 해제되지 않도록 하려면 `unmount-on-hide` 소품을 사용합니다. 기본값은 `true`입니다.

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
DOM을 검사하여 각 항목의 콘텐츠가 렌더링되는 것을 볼 수 있습니다.
::

### 비활성 화

`disabled` 속성을 사용하여 아코디언을 비활성화합니다.

item 객체에서 `disabled` 속성을 사용하여 특정 항목을 비활성화할 수도 있습니다.

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

### 트레일 아이콘

`trailing-icon` 소품을 사용하여 각 항목의 후행 [Icon](/docs/components/icon)를 사용자 정의합니다. 기본값은 `i-lucide-chevron-down`입니다.

::tip
item 객체에서 `trailingIcon` 속성을 사용하여 특정 항목에 대한 아이콘을 설정할 수도 있습니다.
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
`ui.icons.chevronDown` 키 아래의 `app.config.ts`에서 이 아이콘을 전역적으로 사용자 정의할 수 있습니다.
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
`ui.icons.chevronDown` 키 아래의 `vite.config.ts`에서 이 아이콘을 전역적으로 사용자 정의할 수 있습니다.
:::
::

## examples 예제

### Control 활성화된 항목

`default-value` prop 또는 `v-model` 지시어를 사용하여 활성 항목을 제어할 수 있습니다. `value`가 제공되지 않으면 기본적으로 **x** 인덱스가 string**로 지정됩니다.

::component-example
---
name: 'accordion-model-value-example'
props:
  class: 'px-4'
---
::

::tip
`value-key` Prop을 사용하여 `v-model` 또는 `default-value`가 제공될 때 항목을 일치시키는 키를 변경합니다.
::

::caution
`type="multiple"`에서는 배열을 `default-value` prop 또는 `v-model` 지시문으로 전달해야 합니다.
::

###  드래그 앤 드롭 사용

아코디언에서 드래그 앤 드롭 기능을 활성화하려면 [](https://vueuse.org/integrations/useSortable/)의 [`useSortable`](https://vueuse.org/integrations/useSortable/) 컴포지션을 사용합니다. 이 통합은 [Sortable.js](https://sortablejs.github.io/Sortable/)를 래핑하여 원활한 드래그 및 드롭 환경을 제공합니다.

::component-example
---
name: 'accordion-drag-and-drop-example'
---
::

### with body slot 본체 슬롯

`#body` 슬롯을 사용하여 각 항목의 본문을 사용자 지정합니다.

::component-example
---
name: 'accordion-body-slot-example'
props:
  class: 'px-4'
---
::

::tip
`#body` 슬롯에는 처음부터 시작하려면 [`#content` slot](#with-content-slot)를 사용하여 미리 정의 된 스타일이 포함되어 있습니다.
::

### Content Slot 포함

`#content` 슬롯을 사용하여 각 항목의 컨텐츠를 사용자 정의합니다.

::component-example
---
name: 'accordion-content-slot-example'
props:
  class: 'px-4'
---
::

### 사용자 정의 슬롯 포함

`slot` 속성을 사용하여 특정 항목을 사용자 정의합니다.

다음과 같은 슬롯에 액세스할 수 있습니다.

- `#{{ item.slot }}`{lang="ts-type"}의 발음을 - {lang="ts-type"}
- `#{{ item.slot }}-body`{lang="ts-type"}

::component-example
---
name: 'accordion-custom-slot-example'
props:
  class: 'px-4'
---
::

### Markdown 콘텐츠 포함

`@comark/vue`의 [Markdown](https://comark.dev/rendering/vue) 구성 요소를 사용하여 아코디언 항목에서 Markdown을 렌더링할 수 있습니다.

::component-example
---
collapse: true
name: 'accordion-markdown-example'
class: 'px-8'
---
::

## API 파일

### Props (### Props)

:component-props

### Slots

:component-slots

### Emits

:component-emits

## Theme 테마

:component-theme

## 변경 로그

:component-changelog
