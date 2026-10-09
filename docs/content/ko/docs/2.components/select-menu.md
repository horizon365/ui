---
title: SelectMenu 선택
description: 고급 검색 가능한 선택 요소입니다.
category: form
keywords:
  - combobox
  - multi select
  - filterable select
links:
  - label: 콤 보박스 (Combobox)
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/combobox
  - label: Github (GitHub)
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/SelectMenu.vue
---

## Usage

`v-model` 지시문을 사용하여 SelectMenu의 값을 제어하거나 `default-value` prop의 상태를 제어할 필요가 없을 때 초기 값을 설정합니다.

::component-code
---
prettier: true
hide:
  - class
ignore:
  - modelValue
  - items
  - class
external:
  - items
  - modelValue
props:
  modelValue: 'Backlog'
  items:
    - Backlog
    - Todo
    - In Progress
    - Done
  class: 'w-48'
---
::

::tip
이 기능을 [`Select`](/docs/components/select)에서 사용하면 검색 기능과 다중 선택을 제공하는 Reka UI의 [`Combobox`](https://reka-ui.com/docs/components/combobox) 구성 요소를 활용할 수 있습니다.
::

::note
이 구성 요소는 [`InputMenu`](/docs/components/input-menu)와 비슷하지만 메뉴 내부에서 검색하는 입력 대신 Select를 사용합니다.
::

### Items 파일

`items` prop을 문자열, 숫자 또는 부울 배열로 사용합니다.

::component-code
---
prettier: true
ignore:
  - modelValue
  - items
  - class
external:
  - items
  - modelValue
props:
  modelValue: 'Backlog'
  items:
    - Backlog
    - Todo
    - In Progress
    - Done
  class: 'w-48'
---
::

또한 다음 속성을 사용하여 객체 배열을 전달할 수 있습니다.

- `label?: string`{lang="ts-type"}의 발음을 - `label?: string`{lang="ts-type"}
- [`type?: "label" | "separator" | "item"`{lang="ts-type"}](#with-items-type)
- [`icon?: string`{lang="ts-type"}](#with-icons-in-items)
- [`avatar?: AvatarProps`{lang="ts-type"}](#with-avatar-in-items)
- [`chip?: ChipProps`{lang="ts-type"}](#with-chip-in-items)
- `disabled?: boolean`{lang="ts-type"}
- `onSelect?: (e: Event) => void`{lang="ts-type"} (- `onSelect?: (e: Event) => void`{lang="ts-type"})
- `class?: any`{lang="ts-type"}
- `ui?: { label?: ClassNameValue, separator?: ClassNameValue, item?: ClassNameValue, itemLeadingIcon?: ClassNameValue, itemLeadingAvatarSize?: ClassNameValue, itemLeadingAvatar?: ClassNameValue, itemLeadingChipSize?: ClassNameValue, itemLeadingChip?: ClassNameValue, itemLabel?: ClassNameValue, itemTrailing?: ClassNameValue, itemTrailingIcon?: ClassNameValue }`{lang="ts-type"}

::component-code
---
ignore:
  - modelValue.label
  - items
  - class
external:
  - items
  - modelValue
externalTypes:
  - SelectMenuItem[]
props:
  modelValue:
    label: 'Todo'
  items:
    - label: 'Backlog'
    - label: 'Todo'
    - label: 'In Progress'
    - label: 'Done'
  class: 'w-48'
---
::

::caution
[`Select`](/docs/components/select) 컴포넌트와는 달리 SelectMenu는 전체 객체가 `v-model` 디렉티브 또는 `default-value` prop에 전달되기를 기대합니다.
::

배열 배열을 `items` prop에 전달하여 개별 항목 그룹을 표시할 수도 있습니다.

::component-code
---
prettier: true
ignore:
  - modelValue
  - items
  - class
external:
  - items
  - modelValue
props:
  modelValue: 'Apple'
  items:
    - - Apple
      - Banana
      - Blueberry
      - Grapes
      - Pineapple
    - - Aubergine
      - Broccoli
      - Carrot
      - Courgette
      - Leek
  class: 'w-48'
---
::

### 값 키

`value-key` prop.기본값은 `undefined`로 설정하여 전체 오브젝트가 아닌 오브젝트의 단일 속성을 바인딩하도록 선택할 수 있습니다.

::component-code
---
collapse: true
ignore:
  - modelValue
  - valueKey
  - items
  - class
external:
  - items
  - modelValue
externalTypes:
  - SelectMenuItem[]
props:
  modelValue: 'todo'
  valueKey: 'id'
  items:
    - label: 'Backlog'
      id: 'backlog'
    - label: 'Todo'
      id: 'todo'
    - label: 'In Progress'
      id: 'in_progress'
    - label: 'Done'
      id: 'done'
  class: 'w-48'
---
::

::tip
`model-value`가 객체일 때 참조 대신 필드로 객체를 비교하려면 `by` prop을 사용합니다.
::

### 다중

`multiple` prop을 사용하여 여러 개의 선택을 허용하면 선택된 항목은 트리거에서 쉼표로 구분됩니다.

::component-code
---
prettier: true
ignore:
  - modelValue
  - items
  - multiple
  - class
external:
  - items
  - modelValue
props:
  modelValue:
    - Backlog
    - Todo
  multiple: true
  items:
    - Backlog
    - Todo
    - In Progress
    - Done
  class: 'w-48'
---
::

::caution
배열을 `default-value` prop 또는 `v-model` 디렉티브로 전달해야 합니다.
::

### placeholder 위치 표시자

`placeholder` prop을 사용하여 자리 표시자 텍스트를 설정합니다.

::component-code
---
prettier: true
ignore:
  - items
  - class
external:
  - items
props:
  placeholder: 'Select status'
  items:
    - Backlog
    - Todo
    - In Progress
    - Done
  class: 'w-48'
---
::

### Search 입력

`search-input` prop을 사용하여 검색 입력을 사용자 정의하거나 숨깁니다 (`false` 값 포함).

[Input](/docs/components/input) 구성 요소의 모든 속성을 전달하여 사용자 정의할 수 있습니다.

::component-code
---
prettier: true
ignore:
  - modelValue.label
  - modelValue.icon
  - items
  - class
external:
  - items
  - modelValue
externalTypes:
  - SelectMenuItem[]
props:
  modelValue:
    label: 'Backlog'
    icon: 'i-lucide-circle-help'
  searchInput:
    placeholder: 'Filter...'
    icon: 'i-lucide-search'
  items:
    - label: Backlog
      icon: 'i-lucide-circle-help'
    - label: Todo
      icon: 'i-lucide-circle-plus'
    - label: In Progress
      icon: 'i-lucide-circle-arrow-up'
    - label: Done
      icon: 'i-lucide-circle-check'
  class: 'w-48'
---
::

::tip
`search-input` prop 을 `false` 로 설정하여 검색 입력을 숨길 수 있습니다.
::

::note
`:search-input="{ autofocus: false }"`를 사용하여 메뉴가 열릴 때 검색 입력이 집중되지 않도록 하고, 예를 들어, 터치 장치에서 가상 키보드를 열지 않도록 한다.
::

### Content 파일

`content` prop을 사용하여 SelectMenu 내용이 어떻게 렌더링되는지 제어합니다(예를 들어 `align` 또는 `side`).

::component-code
---
prettier: true
ignore:
  - items
  - modelValue
  - class
external:
  - items
  - modelValue
items:
  content.align:
    - start
    - center
    - end
  content.side:
    - right
    - left
    - top
    - bottom
props:
  modelValue: 'Backlog'
  content:
    align: center
    side: bottom
    sideOffset: 8
  items:
    - Backlog
    - Todo
    - In Progress
    - Done
  class: 'w-48'
---
::

### Arrow 화살표

`arrow` prop을 사용하여 SelectMenu에 화살표를 표시합니다.

::component-code
---
prettier: true
ignore:
  - items
  - modelValue
  - class
  - arrow
external:
  - items
  - modelValue
props:
  modelValue: 'Backlog'
  arrow: true
  items:
    - Backlog
    - Todo
    - In Progress
    - Done
  class: 'w-48'
---
::

### Color 색상

SelectMenu에 초점이 맞춰질 때 `color` Prop을 사용하여 링 색상을 변경합니다.

::component-code
---
prettier: true
ignore:
  - items
  - modelValue
  - class
external:
  - items
  - modelValue
props:
  modelValue: 'Backlog'
  color: neutral
  highlight: true
  items:
    - Backlog
    - Todo
    - In Progress
    - Done
  class: 'w-48'
---
::

::note
`highlight` prop은 초점 상태를 표시하기 위해 사용되며, 유효성 검사 오류가 발생할 때 내부적으로 사용됩니다.
::

### 변형

`variant` prop 을 사용하여 SelectMenu 의 변형을 변경합니다.

::component-code
---
prettier: true
ignore:
  - items
  - modelValue
  - class
external:
  - items
  - modelValue
props:
  modelValue: 'Backlog'
  color: neutral
  variant: subtle
  highlight: false
  items:
    - Backlog
    - Todo
    - In Progress
    - Done
  class: 'w-48'
---
::

### Size

`size` prop을 사용하여 SelectMenu의 크기를 변경합니다.

::component-code
---
prettier: true
ignore:
  - items
  - modelValue
  - class
external:
  - items
  - modelValue
props:
  modelValue: 'Backlog'
  size: xl
  items:
    - Backlog
    - Todo
    - In Progress
    - Done
  class: 'w-48'
---
::

### Icon

`icon` prop을 사용하여 SelectMenu 내부에 [Icon](/docs/components/icon)를 표시합니다.

::component-code
---
prettier: true
ignore:
  - items
  - modelValue
  - class
external:
  - items
  - modelValue
props:
  modelValue: 'Backlog'
  icon: 'i-lucide-search'
  size: md
  items:
    - Backlog
    - Todo
    - In Progress
    - Done
  class: 'w-48'
---
::

### 트레일 아이콘

`trailing-icon` 소품을 사용하여 후행 [Icon](/docs/components/icon)를 사용자 정의합니다. 기본값은 `i-lucide-chevron-down`입니다.

::component-code
---
prettier: true
ignore:
  - items
  - modelValue
  - class
external:
  - items
  - modelValue
props:
  modelValue: 'Backlog'
  trailingIcon: 'i-lucide-arrow-down'
  size: md
  items:
    - Backlog
    - Todo
    - In Progress
    - Done
  class: 'w-48'
---
::

::framework-only
#nuxt
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
`ui.icons.chevronDown` 키 아래의 `app.config.ts`에서 이 아이콘을 전역적으로 사용자 정의할 수 있습니다.
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
`vite.config.ts`에서 `ui.icons.chevronDown` 키 아래에 이 아이콘을 전역적으로 사용자 정의할 수 있습니다.
:::
::

### 선택한 아이콘

`selected-icon` 소품을 사용하여 항목을 선택할 때 아이콘을 사용자 정의합니다. 기본값은 `i-lucide-check`입니다.

::component-code
---
prettier: true
ignore:
  - items
  - modelValue
  - class
external:
  - items
  - modelValue
props:
  modelValue: 'Backlog'
  selectedIcon: 'i-lucide-flame'
  size: md
  items:
    - Backlog
    - Todo
    - In Progress
    - Done
  class: 'w-48'
---
::

::framework-only
#nuxt
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
`ui.icons.check` 키 아래의 `app.config.ts`에서 이 아이콘을 전역적으로 사용자 정의할 수 있습니다.
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
`ui.icons.check` 키 아래의 `vite.config.ts`에서 이 아이콘을 전역적으로 사용자 지정할 수 있습니다.
:::
::

### Clear : badge{label="4.4+" class="align-text-top"}

값을 선택할 때 `clear` Prop을 사용하여 지우기 버튼을 표시합니다.

::component-code
---
prettier: true
ignore:
  - items
  - modelValue
  - class
external:
  - items
  - modelValue
items:
  clear:
    - true
    - false
props:
  modelValue: 'Backlog'
  clear: true
  items:
    - Backlog
    - Todo
    - In Progress
    - Done
  class: 'w-48'
---
::

### 지우기 아이콘:badge{label="4.4+" class="align-text-top"}

`clear-icon` 소품을 사용하여 지우기 단추 [Icon](/docs/components/icon)를 사용자 정의합니다. 기본값은 `i-lucide-x`입니다.

::component-code
---
prettier: true
ignore:
  - items
  - modelValue
  - class
external:
  - items
  - modelValue
items:
  clear:
    - true
    - false
props:
  modelValue: 'Backlog'
  clear: true
  clearIcon: 'i-lucide-trash'
  items:
    - Backlog
    - Todo
    - In Progress
    - Done
  class: 'w-48'
---
::

::framework-only
#nuxt
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
`ui.icons.close` 키 아래의 `app.config.ts`에서 이 아이콘을 전역적으로 사용자 정의할 수 있습니다.
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
`ui.icons.close` 키 아래의 `vite.config.ts`에서 이 아이콘을 전역적으로 사용자 정의할 수 있습니다.
:::
::

### 아바타

`avatar` prop를 사용하여 SelectMenu 내부에 [Avatar](/docs/components/avatar)를 표시합니다.

::component-code
---
prettier: true
ignore:
  - items
  - modelValue
  - class
  - avatar.loading
external:
  - items
  - modelValue
props:
  modelValue: 'Nuxt'
  avatar:
    src: 'https://github.com/nuxt.png'
    loading: lazy
  items:
    - Nuxt
    - NuxtHub
    - NuxtLabs
    - Nuxt Modules
    - Nuxt Community
  class: 'w-48'
---
::

### Loading 중

`loading` prop을 사용하여 SelectMenu에 로딩 아이콘을 표시합니다.

::component-code
---
prettier: true
ignore:
  - items
  - modelValue
  - class
external:
  - items
  - modelValue
props:
  modelValue: 'Backlog'
  loading: true
  trailing: false
  items:
    - Backlog
    - Todo
    - In Progress
    - Done
  class: 'w-48'
---
::

### loading 아이콘

`loading-icon` prop을 사용하여 로드 아이콘을 사용자 정의합니다. 기본값은 `i-lucide-loader-circle`입니다.

::component-code
---
prettier: true
ignore:
  - items
  - modelValue
  - class
external:
  - items
  - modelValue
props:
  modelValue: 'Backlog'
  loading: true
  loadingIcon: 'i-lucide-loader'
  items:
    - Backlog
    - Todo
    - In Progress
    - Done
  class: 'w-48'
---
::

::framework-only
#nuxt
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
`ui.icons.loading` 키 아래의 `app.config.ts`에서 이 아이콘을 전역적으로 사용자 정의할 수 있습니다.
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
`ui.icons.loading` 키 아래의 `vite.config.ts`에서 이 아이콘을 전역적으로 사용자 정의할 수 있습니다.
:::
::

### 비활성 화

`disabled` prop을 사용하여 SelectMenu를 비활성화합니다.

::component-code
---
prettier: true
ignore:
  - items
  - placeholder
  - class
external:
  - items
props:
  disabled: true
  placeholder: 'Select status'
  items:
    - Backlog
    - Todo
    - In Progress
    - Done
  class: 'w-48'
---
::

## examples 예제

### With 아이템 타입

`type` 속성을 `separator`와 함께 사용하여 항목 사이의 구분 기호를 표시하거나 `label`를 사용하여 레이블을 표시할 수 있습니다.

::component-code
---
collapse: true
ignore:
  - modelValue
  - items
  - class
external:
  - items
  - modelValue
externalTypes:
  - SelectMenuItem[]
props:
  modelValue: 'Apple'
  items:
    - - type: 'label'
        label: 'Fruits'
      - Apple
      - Banana
      - Blueberry
      - Grapes
      - Pineapple
    - - type: 'label'
        label: 'Vegetables'
      - Aubergine
      - Broccoli
      - Carrot
      - Courgette
      - Leek
  class: 'w-48'
---
::

::note
`label` 항목을 그룹 제목으로 사용할 때 배열 배열을 전달하여 레이블이 그룹과 함께 필터링되도록 합니다.
::

### With 아이콘 in items

`icon` 속성을 사용하여 [Icon](/docs/components/icon)를 항목 내부에 표시할 수 있습니다.

::component-example
---
collapse: true
name: 'select-menu-items-icon-example'
---
::

::tip
`#leading` 슬롯을 사용하여 선택된 아이콘을 표시할 수도 있습니다.
::

###  항목에 아바타 포함

`avatar` 속성을 사용하여 [Avatar](/docs/components/avatar)를 항목 안에 표시할 수 있습니다.

::component-example
---
collapse: true
name: 'select-menu-items-avatar-example'
---
::

::tip
`#leading` 슬롯을 사용하여 선택된 아바타를 표시할 수도 있습니다.
::

### With chip in items 항목 포함

`chip` 속성을 사용하여 [Chip](/docs/components/chip)를 항목 안에 표시할 수 있습니다.

::component-example
---
collapse: true
name: 'select-menu-items-chip-example'
---
::

::note
이 예에서는 `#leading` 슬롯이 선택한 칩을 표시하는 데 사용됩니다.
::

### Control 오픈 상태

`default-open` prop 또는 `v-model:open` 지시문을 사용하여 오픈 상태를 제어할 수 있습니다.

::component-example
---
name: 'select-menu-open-example'
---
::

::note
이 예제에서는 [`defineShortcuts`](/docs/composables/define-shortcuts)를 사용하여 다음 키를 눌러 SelectMenu를 토글할 수 있습니다.
::

### Control 검색 용어

`v-model:search-term` 지시문을 사용하여 검색 용어를 제어합니다.

::component-example
---
name: 'select-menu-search-term-example'
---
::

### 회전 아이콘 포함

다음은 SelectMenu의 열린 상태를 나타내는 회전 아이콘이 있는 예입니다.

::component-example
---
name: 'select-menu-icon-example'
---
::

### Create 항목 만들기

`create-item` prop을 사용하여 사용자가 미리 정의된 옵션에 없는 사용자 정의 값을 추가할 수 있습니다.

::component-example
---
collapse: true
name: 'select-menu-create-item-example'
---
::

::note
생성 옵션은 기본적으로 일치하는 항목이 없을 때 표시됩니다. 유사한 값이 있는 경우에도 표시하려면 `always`로 설정하십시오.
::

::tip{to="#emits"}
`@create` 이벤트를 사용하여 항목 생성을 처리합니다. 이벤트 및 항목을 인수로 받습니다.
::

### 가져온 항목 포함

API에서 항목을 가져오고 SelectMenu에서 사용할 수 있습니다.

::component-example
---
collapse: true
name: 'select-menu-fetch-example'
---
::

::note
이 예제에서는 `useLazyFetch`와 `immediate: false`를 사용하여 메뉴가 열릴 때만 데이터를 가져오므로 페이지 로드 시 불필요한 API 호출을 방지합니다.
::

### ignore 필터 포함

`ignore-filter` prop을 `true`로 설정하여 내부 검색을 비활성화하고 자신의 검색 논리를 사용합니다.

::component-example
---
collapse: true
name: 'select-menu-ignore-filter-example'
---
::

::note
이 예에서는 [`refDebounced`](https://vueuse.org/shared/refDebounced/#refdebounced)를 사용하여 API 호출을 토론합니다. 검색은 `immediate: false`를 사용하여 지연되므로 메뉴가 열릴 때까지 요청이 수행되지 않습니다.
::

### With 필터 필드 포함

`filter-fields` Prop을 필드 배열과 함께 사용하여 필터링합니다. 기본값은 `[labelKey]`입니다.

::component-example
---
collapse: true
name: 'select-menu-filter-fields-example'
---
::

::note
이 예제에서는 `useLazyFetch`와 `immediate: false`를 사용하여 메뉴가 열릴 때만 데이터를 가져오므로 페이지 로드 시 불필요한 API 호출을 피할 수 있습니다.
::

### 가상화 지원: badge{label="4.1+" class="align-text-top"}

`virtualize` prop을 사용하여 큰 목록에 대해 부울 또는 `{ estimateSize: 32, overscan: 12 }`와 같은 옵션이있는 개체로 가상화를 활성화합니다.

::warning{to="https://github.com/unovue/reka-ui/issues/1885" target="_blank"}
설정하면 Reka UI의 제한으로 인해 모든 그룹이 단일 리스트로 병합됩니다.
::

::component-example
---
prettier: true
name: 'select-menu-virtualize-example'
---
::

### 무한 스크롤 사용: badge{label="4.4+" class="align-text-top"}

[`useInfiniteScroll`](https://vueuse.org/core/useInfiniteScroll/) 컴포지블을 사용하여 스크롤할 때 더 많은 데이터를 로드할 수 있습니다.

::component-example
---
prettier: true
collapse: true
highlights:
  - 41
  - 51
overflowHidden: true
name: 'select-menu-infinite-scroll-example'
---
::

::note
이 예제에서는 `useLazyFetch`와 `immediate: false`를 사용하여 사용자가 스크롤할 때만 데이터가 로드됩니다.
::

### With full content width 전체 내용 너비

`ui.content` 슬롯에 `min-w-fit` 클래스를 추가하여 내용을 항목의 전체 너비로 확장할 수 있습니다.

::component-example
---
name: 'select-menu-content-width-example'
collapse: true
---
::

::tip
또한 `app.config.ts`에서 전체적으로 콘텐츠 너비를 변경할 수 있습니다.

```
export default defineAppConfig({
  ui: {
    selectMenu: {
      slots: {
        content: 'min-w-fit'
      }
    }
  }
})
```
::

### As a country 선택기

SelectMenu를 로드가 느린 국가 선택기로 사용할 수 있습니다. 국가는 메뉴를 처음 열었을 때만 가져옵니다.

::component-example
---
collapse: true
name: 'select-menu-countries-example'
---
::

::note
이 예제에서는 `useLazyFetch`와 `immediate: false`를 사용하여 메뉴를 처음 열었을 때 국가만 로드합니다.
::

## API 사용

### Props 파일

:component-props

::callout{icon="i-simple-icons-mdnwebdocs" to="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attributes" target="_blank"}
이 구성 요소는 모든 기본 `<button>` HTML 속성을 지원합니다.
::

### 슬롯

:component-slots

### Emits

:component-emits

### Exposure (### 노출)

템플릿 참조를 통해 컴포넌트에 액세스하는 경우 다음을 사용할 수 있습니다.

| 이름 (Name)| 유형 (Type)|
| ---- | ---- |
| `triggerRef`{lang="ts-type"}| `Ref<HTMLButtonElement \| null>`{lang="ts-type"}|
| `viewportRef`{lang="ts-type"}| `Ref<HTMLDivElement \| null>`{lang="ts-type"}|

## Theme (## 테마)

:component-theme

## 변경 로그

:component-changelog
