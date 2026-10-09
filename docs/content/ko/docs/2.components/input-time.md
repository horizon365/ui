---
title: InputTime
description: '시간을 선택하기 위한 입력.'
category: form
keywords:
  - time picker
  - clock
  - hour
links:
  - label: 타임필드 (TimeField)
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/time-field
  - label: TimeRangeField (TimeRangeField)
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/time-range-field
  - label: Github (GitHub)
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/InputTime.vue
---

## Usage

`v-model` 지시문을 사용하여 선택한 시간을 제어합니다.

::component-code
---
cast:
  modelValue: TimeValue
ignore:
  - modelValue
external:
  - modelValue
props:
  modelValue: [12, 30, 0]
---
::

상태를 제어할 필요가 없을 때 `default-value` Prop을 사용하여 초기 값을 설정합니다.

::component-code
---
cast:
  defaultValue: TimeValue
ignore:
  - defaultValue
external:
  - defaultValue
props:
  defaultValue: [9, 45, 0]
---
::

::framework-only
#nuxt
:::note{to="/docs/getting-started/integrations/i18n/nuxt#locale"}
이 구성 요소는 `@internationalized/date` 패키지를 로케일 인식 서식에 사용합니다. 시간 형식은 App 구성 요소의 `locale` prop에 의해 결정됩니다.
:::

#vue
:::note{to="/docs/getting-started/integrations/i18n/vue#locale"}
이 구성 요소는 `@internationalized/date` 패키지를 사용하여 로케일 인식 서식을 지정합니다. 시간 형식은 App 구성 요소의 `locale` prop에 의해 결정됩니다.
:::
::

### 범위

`range` Prop을 사용하여 시작 시간과 종료 시간을 사용하여 시간 범위를 선택할 수 있습니다.

::component-code
---
prettier: true
cast:
  modelValue: TimeRangeValue
ignore:
  - range
  - modelValue.start
  - modelValue.end
external:
  - modelValue
props:
  range: true
  modelValue:
    start: [9, 0, 0]
    end: [17, 30, 0]
---
::

### Hour 사이클

`hour-cycle` prop을 사용하여 InputTime. 기본값은 `12`입니다.

::component-code
---
cast:
  defaultValue: TimeValue
ignore:
  - hourCycle
  - defaultValue
external:
  - defaultValue
props:
  hourCycle: 24
  defaultValue: [16, 30, 0]
---
::

### Color 이미지

`color` prop 을 사용하여 InputTime 의 색상을 변경합니다.

::component-code
---
props:
  color: neutral
  highlight: true
---
::

::note
`highlight` prop은 초점 상태를 표시하기 위해 사용되며, 유효성 검사 오류가 발생할 때 내부적으로 사용됩니다.
::

### Variant

`variant` prop 를 사용하여 InputTime 의 변형을 변경합니다.

::component-code
---
props:
  variant: subtle
---
::

### Size

`size` prop 를 사용하여 InputTime 의 크기를 변경합니다.

::component-code
---
props:
  size: xl
---
::

### Icon

`icon` prop을 사용하여 InputTime 내부에 [Icon](/docs/components/icon)를 표시합니다.

::component-code
---
props:
  icon: 'i-lucide-clock'
---
::

::note
`leading` 및 `trailing` 소품을 사용하여 아이콘의 위치를 설정하거나 `leading-icon` 및 `trailing-icon` 소품을 사용하여 각 위치에 대해 다른 아이콘을 설정합니다.
::

### 분리 기호 아이콘

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
`ui.icons.minus` 키 아래의 `app.config.ts`에서 이 아이콘을 전역적으로 사용자 정의할 수 있습니다.
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
`ui.icons.minus` 키 아래의 `vite.config.ts`에서 이 아이콘을 전역적으로 사용자 정의할 수 있습니다.
:::
::

### Avatar 공식

`avatar` prop을 사용하여 InputTime 내부에 [Avatar](xph16x)를 표시합니다.

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

`disabled` prop 을 사용하여 InputTime 을 비활성화합니다.

::component-code
---
props:
  disabled: true
---
::

## 예제

### within a FormField 형식 내에서

[FormField](/docs/components/form-field) 구성 요소 내에서 InputTime을 사용하여 레이블, 도움말 텍스트, 필수 표시기 등을 표시할 수 있습니다.

::component-example
---
name: 'input-time-form-field-example'
---
::

## API

### Props (### Props)

:component-props

### Slots 슬롯

:component-slots

### Emits

:component-emits

## Theme (## 테마)

:component-theme

## 변경 로그

:component-changelog
