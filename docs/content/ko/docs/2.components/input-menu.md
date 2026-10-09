---
title: InputMenu
description: 실시간 제안이 포함된 자동 완성 입력입니다.
category: form
keywords:
  - combobox
  - typeahead
  - autosuggest
links:
  - label: 콤 보박스 (Combobox)
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/combobox
  - label: 자동 완성
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/autocomplete
  - label: Github (GitHub)
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/InputMenu.vue
---

## Usage

`v-model` 지시문을 사용하여 InputMenu의 값을 제어하거나 `default-value` prop의 상태를 제어할 필요가 없을 때 초기 값을 설정합니다.

::component-code
---
prettier: true
ignore:
  - modelValue
  - items
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
---
::

::tip
자동 완성 기능을 제공하는 Reka UI의 [`Combobox`](https://reka-ui.com/docs/components/combobox) 구성 요소를 활용하려면 [`Input`](/docs/components/input)에서 이 기능을 사용합니다.
::

::note
이 구성 요소는 [`SelectMenu`](/docs/components/select-menu)와 비슷하지만 Select 대신 Input을 사용합니다.
::

### Items 항목

`items` prop을 문자열, 숫자 또는 부울 배열로 사용합니다.

::component-code
---
prettier: true
ignore:
  - modelValue
  - items
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
---
::

또한 다음 속성을 사용하여 객체 배열을 전달할 수 있습니다.

- `label?: string`{lang="ts-type"}
- [`type?: "label" | "separator" | "item"`{lang="ts-type"}](#with-items-type)
- [`icon?: string`{lang="ts-type"}](#with-icons-in-items)
- [`avatar?: AvatarProps`{lang="ts-type"}](#with-avatar-in-items)
- [`chip?: ChipProps`{lang="ts-type"}](#with-chip-in-items)
- `disabled?: boolean`{lang="ts-type"} - {lang="ts-type"}
- `onSelect?: (e: Event) => void`{lang="ts-type"} (- `onSelect?: (e: Event) => void`{lang="ts-type"})
- `class?: any`{lang="ts-type"}
- `ui?: { tagsItem?: ClassNameValue, tagsItemText?: ClassNameValue, tagsItemDelete?: ClassNameValue, tagsItemDeleteIcon?: ClassNameValue, label?: ClassNameValue, separator?: ClassNameValue, item?: ClassNameValue, itemLeadingIcon?: ClassNameValue, itemLeadingAvatarSize?: ClassNameValue, itemLeadingAvatar?: ClassNameValue, itemLeadingChip?: ClassNameValue, itemLeadingChipSize?: ClassNameValue, itemLabel?: ClassNameValue, itemTrailing?: ClassNameValue, itemTrailingIcon?: ClassNameValue }`{lang="ts-type"} (- `ui?: { tagsItem?: ClassNameValue, tagsItemText?: ClassNameValue, tagsItemDelete?: ClassNameValue, tagsItemDeleteIcon?: ClassNameValue, label?: ClassNameValue, separator?: ClassNameValue, item?: ClassNameValue, itemLeadingIcon?: ClassNameValue, itemLeadingAvatarSize?: ClassNameValue, itemLeadingAvatar?: ClassNameValue, itemLeadingChip?: ClassNameValue, itemLeadingChipSize?: ClassNameValue, itemLabel?: ClassNameValue, itemTrailing?: ClassNameValue, itemTrailingIcon?: ClassNameValue }`{lang="ts-type"})

::component-code
---
ignore:
  - modelValue.label
  - items
external:
  - items
  - modelValue
externalTypes:
  - InputMenuItem[]
props:
  modelValue:
    label: 'Todo'
  items:
    - label: 'Backlog'
    - label: 'Todo'
    - label: 'In Progress'
    - label: 'Done'
---
::

배열 배열을 `items` prop에 전달하여 개별 항목 그룹을 표시할 수도 있습니다.

::component-code
---
prettier: true
ignore:
  - modelValue
  - items
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
---
::

### 값 키

`value-key` prop. 기본값은 `undefined`로 설정하여 전체 오브젝트가 아닌 오브젝트의 단일 속성을 바인딩하도록 선택할 수 있습니다.

::component-code
---
collapse: true
ignore:
  - modelValue
  - valueKey
  - items
external:
  - items
  - modelValue
externalTypes:
  - InputMenuItem[]
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
---
::

::tip
`model-value`가 객체인 경우 참조 대신 필드로 객체를 비교하려면 `by` prop을 사용합니다.
::

### 다중 입력

`multiple` 소품을 사용하여 여러 선택을 허용하면 선택한 항목이 태그로 표시됩니다.

::component-code
---
prettier: true
ignore:
  - modelValue
  - items
  - multiple
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
---
::

::caution
배열을 `default-value` prop 또는 `v-model` 지시문으로 전달해야 합니다.
::

### 아이콘 삭제

`multiple`를 사용하면 `delete-icon` prop을 사용하여 태그에서 [Icon](/docs/components/icon) 삭제를 사용자 정의합니다. 기본값은 `i-lucide-x`입니다.

::component-code
---
prettier: true
ignore:
  - modelValue
  - items
  - multiple
external:
  - items
  - modelValue
props:
  modelValue:
    - Backlog
    - Todo
  multiple: true
  deleteIcon: 'i-lucide-trash'
  items:
    - Backlog
    - Todo
    - In Progress
    - Done
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

### placeholder 자리 표시자

`placeholder` prop을 사용하여 자리 표시자 텍스트를 설정합니다.

::component-code
---
prettier: true
ignore:
  - items
external:
  - items
props:
  placeholder: 'Select status'
  items:
    - Backlog
    - Todo
    - In Progress
    - Done
---
::

### Mode: badge{label="4.8+" class="align-text-top"} 모드

`mode` prop을 `autocomplete`로 설정하면 InputMenu를 제안이 포함된 자유 형식 텍스트 입력으로 변경합니다. `modelValue`는 선택된 항목이 아닌 입력 텍스트(`string`)가 됩니다.

::component-example
---
name: 'input-menu-mode-example'
---
::

::caution
`mode`가 `autocomplete`인 경우 `multiple`, `by`, `resetSearchTermOnSelect` 및 `resetModelValueOnClear`는 적용되지 않습니다.
::

::tip
`content.hideWhenEmpty` prop를 사용하여 일치하는 제안이 없을 때 메뉴를 숨깁니다.
::

### Content 파일

`content` prop을 사용하여 InputMenu 내용이 렌더링되는 방식을 제어합니다. 예를 들어 `align` 또는 `side`와 같습니다.

::component-code
---
prettier: true
ignore:
  - items
  - modelValue
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
---
::

### Arrow 화살표

`arrow` prop를 사용하여 InputMenu에 화살표를 표시합니다.

::component-code
---
prettier: true
ignore:
  - items
  - modelValue
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
---
::

### color

InputMenu에 초점을 맞출 때 `color` Prop을 사용하여 링 색상을 변경합니다.

::component-code
---
prettier: true
ignore:
  - items
  - modelValue
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
---
::

::note
`highlight` prop은 초점 상태를 표시하기 위해 사용되며, 유효성 검사 오류가 발생할 때 내부적으로 사용됩니다.
::

### 변형

`variant` prop 을 사용하여 InputMenu 의 변형을 변경합니다.

::component-code
---
prettier: true
ignore:
  - items
  - modelValue
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
---
::

### Size

`size` prop을 사용하여 InputMenu 크기를 변경합니다.

::component-code
---
prettier: true
ignore:
  - items
  - modelValue
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
---
::

### Icon 이미지

`icon` prop을 사용하여 InputMenu 내부에 [Icon](/docs/components/icon)를 표시합니다.

::component-code
---
prettier: true
ignore:
  - items
  - modelValue
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

### 선택한 아이콘

`selected-icon` 소품을 사용하여 항목을 선택할 때 아이콘을 사용자 정의합니다. 기본값은 `i-lucide-check`입니다.

::component-code
---
prettier: true
ignore:
  - items
  - modelValue
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
---
::

::framework-only
#nuxt
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
`ui.icons.check` 키 아래의 `app.config.ts`에서 이 아이콘을 전역적으로 사용자 정의할 수 있습니다.
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
`ui.icons.check` 키 아래의 `vite.config.ts`에서 이 아이콘을 전역적으로 사용자 정의할 수 있습니다.
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
---
::

### 지우기 아이콘: badge{label="4.4+" class="align-text-top"}

`clear-icon` 소품을 사용하여 지우기 단추 [Icon](/docs/components/icon)를 사용자 정의합니다. 기본값은 `i-lucide-x`입니다.

::component-code
---
prettier: true
ignore:
  - items
  - modelValue
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
---
::

::framework-only
#nuxt
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
`ui.icons.close` 키 아래의 `app.config.ts`에서 이 아이콘을 전역적으로 사용자 지정할 수 있습니다.
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
`ui.icons.close` 키 아래의 `vite.config.ts` 내에서 이 아이콘을 전역적으로 사용자 정의할 수 있습니다.
:::
::

### Avatar (### 아바타)

`avatar` prop을 사용하여 InputMenu 내부에 [Avatar](/docs/components/avatar)를 표시합니다.

::component-code
---
prettier: true
ignore:
  - items
  - modelValue
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
---
::

### Loading 중

`loading` prop을 사용하여 InputMenu에 로드 아이콘을 표시합니다.

::component-code
---
prettier: true
ignore:
  - items
  - modelValue
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
---
::

### Loading 아이콘

`loading-icon` 소품을 사용하여 로드 아이콘을 사용자 정의합니다. 기본값은 `i-lucide-loader-circle`입니다.

::component-code
---
prettier: true
ignore:
  - items
  - modelValue
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

`disabled` prop을 사용하여 InputMenu를 비활성화합니다.

::component-code
---
prettier: true
ignore:
  - items
  - placeholder
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
external:
  - items
  - modelValue
externalTypes:
  - InputMenuItem[]
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
---
::

::note
`label` 항목을 그룹 제목으로 사용할 때 배열 배열을 전달하여 레이블이 그룹과 함께 필터링되도록 합니다.
::

### With 항목의 아이콘

`icon` 속성을 사용하여 항목 내부에 [Icon](/docs/components/icon)를 표시할 수 있습니다.

::component-example
---
collapse: true
name: 'input-menu-items-icon-example'
---
::

::tip
`#leading` 슬롯을 사용하여 선택된 아이콘을 표시할 수도 있습니다.
::

###  항목에 아바타 포함

`avatar` 속성을 사용하여 [Avatar](/docs/components/avatar)를 항목 내부에 표시할 수 있습니다.

::component-example
---
collapse: true
name: 'input-menu-items-avatar-example'
---
::

::tip
또한 `#leading` 슬롯을 사용하여 선택한 아바타를 표시할 수 있습니다.
::

### With 칩 in items

`chip` 속성을 사용하여 [Chip](/docs/components/chip)를 항목 안에 표시할 수 있습니다.

::component-example
---
collapse: true
name: 'input-menu-items-chip-example'
---
::

::note
이 예제에서는 `#leading` 슬롯이 선택한 칩을 표시하는 데 사용됩니다.
::

### Control 오픈 상태

`default-open` prop 또는 `v-model:open` 지시문을 사용하여 개방 상태를 제어할 수 있습니다.

::component-example
---
name: 'input-menu-open-example'
---
::

::note
이 예제에서는 [`defineShortcuts`](/docs/composables/define-shortcuts)를 사용하여 입력 메뉴를 토글할 수 있습니다. kbd{value="O"}를 누르면 됩니다.
::

### Control 포커스 시 열기 상태

입력에 초점을 맞추거나 클릭할 때 `open-on-focus` 또는 `open-on-click` 소품을 사용하여 메뉴를 열 수 있습니다.

::component-example
---
name: 'input-menu-open-focus-example'
---
::

### Control 검색 항목

`v-model:search-term` 지시문을 사용하여 검색 용어를 제어합니다.

::component-example
---
name: 'input-menu-search-term-example'
---
::

### 회전 아이콘 포함

다음은 InputMenu의 열린 상태를 나타내는 회전 아이콘이 있는 예입니다.

::component-example
---
name: 'input-menu-icon-example'
---
::

###  프로젝트 만들기

`create-item` prop을 사용하여 사용자가 미리 정의된 옵션에 없는 사용자 정의 값을 추가할 수 있도록 합니다.

::component-example
---
collapse: true
name: 'input-menu-create-item-example'
---
::

::note
생성 옵션은 기본적으로 일치하는 항목이 없을 때 표시됩니다. 유사한 값이 있는 경우에도 표시하려면 `always`로 설정하십시오.
::

::tip{to="#emits"}
`@create` 이벤트를 사용하여 항목 생성을 처리합니다. 이벤트 및 항목을 인수로 받습니다.
::

### 가져온 항목과 함께

API에서 항목을 가져와서 InputMenu에서 사용할 수 있습니다.You can fetch items from an API and use them in the InputMenu.

::component-example
---
collapse: true
name: 'input-menu-fetch-example'
---
::

::note
이 예제에서는 `useLazyFetch`와 `immediate: false`를 사용하여 메뉴가 열릴 때만 데이터를 가져오므로 페이지 로드 시 불필요한 API 호출을 피할 수 있습니다.
::

### 무시 필터 사용

`ignore-filter` prop을 `true`로 설정하여 내부 검색을 비활성화하고 자체 검색 논리를 사용합니다.

::component-example
---
collapse: true
name: 'input-menu-ignore-filter-example'
---
::

::note
이 예에서는 [`refDebounced`](https://vueuse.org/shared/refDebounced/#refdebounced)를 사용하여 API 호출을 토론합니다. 검색은 `immediate: false`를 사용하여 지연되므로 메뉴가 열릴 때까지 요청이 수행되지 않습니다.
::

### With 필터 필드

`filter-fields` Prop을 필드 배열과 함께 사용하여 필터링합니다. 기본값은 `[labelKey]`입니다.

::component-example
---
collapse: true
name: 'input-menu-filter-fields-example'
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
name: 'input-menu-virtualize-example'
---
::

### 무한 스크롤 사용: badge{label="4.4+" class="align-text-top"}

[`useInfiniteScroll`](https://vueuse.org/core/useInfiniteScroll/) 컴포지블을 사용하여 사용자가 스크롤할 때 더 많은 데이터를 로드할 수 있습니다.

::component-example
---
prettier: true
collapse: true
highlights:
  - 41
  - 51
overflowHidden: true
name: 'input-menu-infinite-scroll-example'
---
::

::note
이 예제에서는 `useLazyFetch`를 `immediate: false`와 함께 사용하므로 사용자가 스크롤할 때만 데이터가 로드됩니다.
::

### With full content width 전체 콘텐츠 너비

`ui.content` 슬롯에 `min-w-fit` 클래스를 추가하여 내용을 항목의 전체 너비로 확장할 수 있습니다.

::component-example
---
name: 'input-menu-content-width-example'
collapse: true
---
::

::tip
또한 `app.config.ts`에서 전체적으로 콘텐츠 너비를 변경할 수 있습니다.

```
export default defineAppConfig({
  ui: {
    inputMenu: {
      slots: {
        content: 'min-w-fit'
      }
    }
  }
})
```
::

### As a country 선택기

입력 메뉴를 로드가 느린 국가 선택기로 사용할 수 있습니다. 국가는 메뉴를 처음 열었을 때만 가져오기됩니다.

::component-example
---
collapse: true
name: 'input-menu-countries-example'
---
::

::note
이 예제에서는 `useLazyFetch`와 `immediate: false`를 사용하여 메뉴를 처음 열었을 때 국가만 로드합니다.
::

## API

### Props (### Props)

:component-props

::callout{icon="i-simple-icons-mdnwebdocs" to="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attributes" target="_blank"}
이 구성 요소는 모든 기본 `<input>` HTML 속성을 지원합니다.
::

### Slots

:component-slots

### Emits 이미지

:component-emits

### 노출

템플릿 참조를 통해 컴포넌트에 액세스하는 경우 다음을 사용할 수 있습니다.

| 이름 (Name)| 유형 (Type)|
| ---- | ---- |
| `inputRef`{lang="ts-type"}의 발음을 {lang="ts-type"}| `Ref<HTMLInputElement \| null>`{lang="ts-type"}의 발음을 `Ref<HTMLInputElement \| null>`xph787|
| `viewportRef`{lang="ts-type"}의 발음을 `viewportRef`xph790| `Ref<HTMLDivElement \| null>`{lang="ts-type"} (`Ref<HTMLDivElement \| null>`{lang="ts-type"})|

## Theme (## 테마)

:component-theme

## Changelog 변경

:component-changelog
