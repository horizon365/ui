---
title: InputDate 입력
description: '날짜 선택을 위한 입력 구성 요소입니다.'
category: form
keywords:
  - date picker
  - datepicker
  - calendar input
links:
  - label: DateField (날짜필드)
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/date-field
  - label: Github (GitHub)
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/InputDate.vue
---

## Usage

`v-model` 지시어를 사용하여 선택한 날짜를 제어합니다.

::component-code
---
cast:
  modelValue: DateValue
ignore:
  - modelValue
external:
  - modelValue
props:
  modelValue: [2022, 2, 3]
---
::

상태를 제어할 필요가 없을 때 `default-value` Prop을 사용하여 초기 값을 설정합니다.

::component-code
---
cast:
  defaultValue: DateValue
ignore:
  - defaultValue
external:
  - defaultValue
props:
  defaultValue: [2022, 2, 6]
---
::

::framework-only
#nuxt
:::note{to="/docs/getting-started/integrations/i18n/nuxt#locale"}
이 구성 요소는 `@internationalized/date` 패키지를 로케일 인식 서식에 사용합니다. 날짜 형식은 App 구성 요소의 `locale` 소품에 의해 결정됩니다.
:::

#vue
:::note{to="/docs/getting-started/integrations/i18n/vue#locale"}
이 구성 요소는 `@internationalized/date` 패키지를 로케일 인식 서식에 사용합니다. 날짜 형식은 App 구성 요소의 `locale` 소품에 의해 결정됩니다.
:::
::

### 범위

`range` prop을 사용하여 날짜 범위를 선택합니다.

::component-code
---
prettier: true
cast:
  modelValue: DateRange
ignore:
  - range
  - modelValue.start
  - modelValue.end
external:
  - modelValue
props:
  range: true
  modelValue:
    start: [2022, 2, 3]
    end: [2022, 2, 20]
---
::

### Color 색상

`color` prop 을 사용하여 InputDate 의 색상을 변경합니다.

::component-code
---
props:
  color: neutral
  highlight: true
---
::

### Variant (### Variant)

`variant` prop 를 사용하여 InputDate 의 변형을 변경합니다.

::component-code
---
props:
  variant: subtle
---
::

### Size

`size` prop 를 사용하여 InputDate 의 크기를 변경합니다.

::component-code
---
props:
  size: xl
---
::

### Icon 이미지

`icon` prop을 사용하여 InputDate 내부에 [Icon](/docs/components/icon)를 표시합니다.

::component-code
---
props:
  icon: 'i-lucide-calendar'
---
::

::note
`leading` 및 `trailing` props를 사용하여 아이콘 위치를 설정하거나 `leading-icon` 및 `trailing-icon` props를 사용하여 각 위치에 대해 다른 아이콘을 설정합니다.
::

### Separator 아이콘

`separator-icon` 소품을 사용하여 범위 구분 기호의 [Icon](/docs/components/icon)를 변경합니다. 기본값은 `i-lucide-minus`입니다.

::component-code
---
ignore:
  - range
props:
  range: true
  separatorIcon: 'i-lucide-arrow-right'
---
::

::framework-only
#nuxt
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
`ui.icons.minus` 키 아래의 `app.config.ts` 내에서 이 아이콘을 전역적으로 사용자 정의할 수 있습니다.
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
`ui.icons.minus` 키 아래의 `vite.config.ts` 내에서 이 아이콘을 전역적으로 사용자 정의할 수 있습니다.
:::
::

### 아바타

`avatar` prop을 사용하여 InputDate 내부에 [Avatar](/docs/components/avatar)를 표시합니다.

::component-code
---
prettier: true
ignore:
  - avatar.loading
props:
  avatar:
    src: 'https://github.com/vuejs.png'
    loading: lazy
  size: md
  variant: outline
---
::

### 비활성 화

`disabled` prop 를 사용하여 InputDate 를 비활성화합니다.

::component-code
---
props:
  disabled: true
---
::

## 예제

### Unavailable 날짜 포함

`is-date-unavailable` prop을 함수와 함께 사용하여 특정 날짜를 사용할 수 없음으로 표시합니다.

::component-example
---
name: 'input-date-unavailable-dates-example'
---
::

### 최소/최대 날짜 포함

`min-value` 및 `max-value` 소품을 사용하여 날짜를 제한합니다.

::component-example
---
name: 'input-date-min-max-dates-example'
---
::

### As 날짜 선택기

[Calendar](/docs/components/calendar) 및 [Popover](/docs/components/popover) 구성 요소를 사용하여 날짜 선택기를 만듭니다.

::component-example
---
name: 'input-date-date-picker-example'
---
::

### 날짜 범위 선택기로

[Calendar](/docs/components/calendar) 및 [Popover](/docs/components/popover) 구성 요소를 사용하여 날짜 범위 선택기를 만듭니다.

::component-example
---
name: 'input-date-date-range-picker-example'
---
::

## API 파일

### Props (### Props)

:component-props

### Slots

:component-slots

### Emits 파일

:component-emits

## Theme (## 테마)

:component-theme

## 변경 로그

:component-changelog
