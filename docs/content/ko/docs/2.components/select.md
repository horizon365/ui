---
description: 옵션 리스트에서 선택할 요소입니다.
category: form
keywords:
  - dropdown
  - picker
links:
  - label: 선택
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/select
  - label: Github (GitHub)
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Select.vue
---

## Usage

`v-model` 지시어를 사용하여 Select 값을 제어하거나 `default-value` prop의 상태를 제어할 필요가 없을 때 초기 값을 설정합니다.

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

- `label?: string`{lang="ts-type"}
- [`value?: string`{lang="ts-type"}](#value-key)
- [`type?: "label" | "separator" | "item"`{lang="ts-type"}](#with-items-type)
- [`icon?: string`{lang="ts-type"}](#with-icons-in-items) 사용자
- [`avatar?: AvatarProps`{lang="ts-type"}](#with-avatar-in-items)
- [`chip?: ChipProps`{lang="ts-type"}](#with-chip-in-items)
- `disabled?: boolean`{lang="ts-type"} - {lang="ts-type"}
- `class?: any`{lang="ts-type"}
- `ui?: { label?: ClassNameValue, separator?: ClassNameValue, item?: ClassNameValue, itemLeadingIcon?: ClassNameValue, itemLeadingAvatarSize?: ClassNameValue, itemLeadingAvatar?: ClassNameValue, itemLeadingChipSize?: ClassNameValue, itemLeadingChip?: ClassNameValue, itemLabel?: ClassNameValue, itemTrailing?: ClassNameValue, itemTrailingIcon?: ClassNameValue }`{lang="ts-type"} (- `ui?: { label?: ClassNameValue, separator?: ClassNameValue, item?: ClassNameValue, itemLeadingIcon?: ClassNameValue, itemLeadingAvatarSize?: ClassNameValue, itemLeadingAvatar?: ClassNameValue, itemLeadingChipSize?: ClassNameValue, itemLeadingChip?: ClassNameValue, itemLabel?: ClassNameValue, itemTrailing?: ClassNameValue, itemTrailingIcon?: ClassNameValue }`{lang="ts-type"})

::component-code
---
ignore:
  - modelValue
  - items
  - class
external:
  - items
  - modelValue
externalTypes:
  - SelectItem[]
props:
  modelValue: 'backlog'
  items:
    - label: 'Backlog'
      value: 'backlog'
    - label: 'Todo'
      value: 'todo'
    - label: 'In Progress'
      value: 'in_progress'
    - label: 'Done'
      value: 'done'
  class: 'w-48'
---
::

::caution
객체를 사용할 때는 `v-model` 지시문이나 `default-value` prop에서 객체의 `value` 속성을 참조해야합니다.
::

배열의 배열을 `items` prop에 전달하여 분리된 항목 그룹을 표시할 수도 있습니다.

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

### value 키

`value-key` prop.Defaults를 `value`로 사용하여 값을 설정하는 데 사용되는 속성을 변경할 수 있습니다.

::component-code
---
ignore:
  - modelValue
  - valueKey
  - items
  - class
external:
  - items
  - modelValue
externalTypes:
  - SelectItem[]
props:
  modelValue: 'backlog'
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

### 다중

`multiple` prop을 사용하여 여러 개의 선택을 허용하면 선택한 항목은 트리거에서 쉼표로 구분됩니다.

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
배열을 `default-value` prop 또는 `v-model` 지시문으로 전달해야 합니다.
::

### placeholder 위치 표시자

`placeholder` Prop을 사용하여 자리 표시자 텍스트를 설정합니다.

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

### Content 파일

`content` prop을 사용하여 `align` 또는 `side`와 같은 Select 콘텐츠가 렌더링되는 방법을 제어합니다.

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

::note
이러한 옵션은 `content.position`가 `popper`(기본값)일 때만 적용됩니다.
::

### Position : badge{label="4.7+" class="align-text-top"}

`content.position` 소품을 사용하여 Select 콘텐츠가 트리거에 상대적으로 배치되는 방법을 제어합니다. 기본값은 `popper`이며 다른 Popover와 마찬가지로 내용이 배치됩니다. `item-aligned`로 설정하면 내용이 선택된 항목에 정렬됩니다(기본 macOS 메뉴와 유사).

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
  content.position:
    - item-aligned
    - popper
props:
  modelValue: 'Todo'
  content:
    position: item-aligned
  items:
    - Backlog
    - Todo
    - In Progress
    - Done
  class: 'w-48'
---
::

### Arrow 이미지

`arrow` Prop을 사용하여 선택 영역에 화살표를 표시합니다.

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

`color` Prop을 사용하여 Select에 초점을 맞추면 링 색상을 변경할 수 있습니다.

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

### Variant (### 변형)

`variant` prop을 사용하여 Select의 변형을 변경합니다.

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

### Size 크기

`size` prop을 사용하여 Select의 크기를 변경합니다.

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

`icon` Prop을 사용하여 Select 안에 [Icon](/docs/components/icon)를 표시합니다.

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
`ui.icons.chevronDown` 키 아래의 `app.config.ts`에서 이 아이콘을 전역적으로 사용자 지정할 수 있습니다.
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
`ui.icons.chevronDown` 키 아래의 `vite.config.ts`에서 이 아이콘을 전역적으로 사용자 지정할 수 있습니다.
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
`ui.icons.check` 키 아래의 `app.config.ts`에서 이 아이콘을 전역적으로 사용자 지정할 수 있습니다.
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
`ui.icons.check` 키 아래의 `vite.config.ts`에서 이 아이콘을 전역적으로 사용자 지정할 수 있습니다.
:::
::

### Avatar (### 아바타)

`avatar` Prop을 사용하여 Select 내부에 [Avatar](/docs/components/avatar)를 표시합니다.

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

### loading 중

`loading` prop을 사용하여 선택에 로드 아이콘을 표시합니다.

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

`loading-icon` 소품을 사용하여 로드 아이콘을 사용자 정의합니다. 기본값은 `i-lucide-loader-circle`입니다.

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
`ui.icons.loading` 키 아래의 `vite.config.ts`에서 이 아이콘을 전역적으로 사용자 지정할 수 있습니다.
:::
::

### 비활성 화 됨

`disabled` Prop을 사용하여 Select를 비활성화합니다.

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

### With 항목 유형

`type` 속성을 `separator`와 함께 사용하여 항목 간의 구분 기호를 표시하거나 `label`를 사용하여 레이블을 표시할 수 있습니다.

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
  - SelectItem[]
props:
  modelValue: 'Apple'
  items:
    - type: 'label'
      label: 'Fruits'
    - Apple
    - Banana
    - Blueberry
    - Grapes
    - Pineapple
    - type: 'separator'
    - type: 'label'
      label: 'Vegetables'
    - Aubergine
    - Broccoli
    - Carrot
    - Courgette
    - Leek
  class: 'w-48'
---
::

### 항목에 아이콘 포함

`icon` 속성을 사용하여 [Icon](/docs/components/icon)를 항목 내부에 표시할 수 있습니다.

::component-example
---
collapse: true
name: 'select-items-icon-example'
---
::

::note
이 예제에서는 선택한 항목의 `value` 속성에서 아이콘을 계산합니다.
::

::tip
`#leading` 슬롯을 사용하여 선택한 아이콘을 표시할 수도 있습니다.
::

### 항목에 아바타 포함

`avatar` 속성을 사용하여 항목 내부에 [Avatar](/docs/components/avatar)를 표시할 수 있습니다.

::component-example
---
collapse: true
name: 'select-items-avatar-example'
---
::

::note
이 예에서는 선택한 항목의 `value` 속성에서 아바타를 계산합니다.
::

::tip
`#leading` 슬롯을 사용하여 선택한 아바타를 표시할 수도 있습니다.
::

### With chip in items 항목 포함

`chip` 속성을 사용하여 [Chip](/docs/components/chip)를 항목 안에 표시할 수 있습니다.

::component-example
---
collapse: true
name: 'select-items-chip-example'
---
::

::note
이 예제에서는 `#leading` 슬롯이 선택한 칩을 표시하는 데 사용됩니다.
::

### Control 오픈 상태

`default-open` prop 또는 `v-model:open` 지시문을 사용하여 개방 상태를 제어할 수 있습니다.

::component-example
---
name: 'select-open-example'
---
::

::note
이 예제에서는 [`defineShortcuts`](/docs/composables/define-shortcuts)를 사용하여 :kbd{value="O"}를 눌러 선택을 토글할 수 있습니다.
::

### 회전 아이콘 포함

다음은 선택의 열린 상태를 나타내는 회전 아이콘이 있는 예입니다.

::component-example
---
name: 'select-icon-example'
---
::

### 가져온 항목 포함

API에서 항목을 가져오고 선택에서 사용할 수 있습니다.

::component-example
---
name: 'select-fetch-example'
collapse: true
---
::

::note
이 예제에서는 `useLazyFetch`와 `immediate: false`를 사용하여 메뉴가 열릴 때만 데이터를 가져오므로 페이지 로드 시 불필요한 API 호출을 방지합니다.
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
name: 'select-infinite-scroll-example'
---
::

::note
이 예제에서는 `useLazyFetch`를 `immediate: false`와 함께 사용하여 사용자가 스크롤할 때만 데이터가 로드됩니다.
::

### With full content width 전체 콘텐츠 너비

`ui.content` 슬롯에 `min-w-fit` 클래스를 추가하여 내용을 항목의 전체 너비로 확장할 수 있습니다.

::component-example
---
name: 'select-content-width-example'
collapse: true
---
::

::tip
또한 `app.config.ts`에서 전체적으로 콘텐츠 너비를 변경할 수 있습니다.

```
export default defineAppConfig({
  ui: {
    select: {
      slots: {
        content: 'min-w-fit'
      }
    }
  }
})
```
::

## API

### Props 코드

:component-props

::callout{icon="i-simple-icons-mdnwebdocs" to="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attributes" target="_blank"}
이 구성 요소는 모든 기본 `<button>` HTML 속성을 지원합니다.
::

### 슬롯

:component-slots

### Emits

:component-emits

### 노출

템플릿 참조를 통해 컴포넌트에 액세스하는 경우 다음을 사용할 수 있습니다.

| 이름 Name| 유형 (Type)|
| ---- | ---- |
| `triggerRef`{lang="ts-type"}| `Ref<HTMLButtonElement \| null>`{lang="ts-type"}|
| `viewportRef`{lang="ts-type"}| `Ref<HTMLDivElement \| null>`{lang="ts-type"}|

## Theme 테마

:component-theme

## 변경 로그

:component-changelog
