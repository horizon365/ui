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

##  사용

`v-model` 지시문을 사용하여 선택한 날짜를 제어합니다.

::component-code
---
캐스트 :
  모델 번호:DateValue
무시하기:
  - modelValue - modelValue 이미지
외부:
  - modelValue - modelValue 이미지
소품 :
  모델 가치 [2022, 2, 3]
---
::

상태를 제어할 필요가 없을 때는 `default-value`prop을 사용하여 초기값을 설정합니다.

::component-code
---
캐스트 :
  defaultValue : DateValue
무시하기:
  - defaultValue - defaultValue
외부:
  - defaultValue - defaultValue
소품 :
  defaultValue : [2022, 2, 6] [2022, 2, 6]
---
::

::framework-only
#nuxt 코드
:::note{to="/docs/getting-started/integrations/i18n/nuxt#locale"}
이 구성 요소는 `@internationalized/date` 패키지를 사용하여 로케일 인식 형식을 지정합니다. 날짜 형식은 App 구성 요소의 `locale`prop에 의해 결정됩니다.
:::

#vue #vue
:::note{to="/docs/getting-started/integrations/i18n/vue#locale"}
이 구성 요소는 `@internationalized/date` 패키지를 사용하여 로케일 인식 서식을 지정합니다. 날짜 형식은 App 구성 요소의 `locale`prop에 의해 결정됩니다.
:::
::

###  범위

`range`prop을 사용하여 날짜 범위를 선택합니다.

::component-code
---
상품명 : True
캐스트 :
  modelValue: DateRange (날짜 범위)
무시하기:
  -  range
  -  modelValue. start
  -  modelValue. end
외부:
  - modelValue - modelValue 이미지
소품 :
  범위: true
  modelValue:
    [2022, 2, 3]
    [2022, 2, 20]
---
::

###  색상

`color`prop을 사용하여 InputDate의 색상을 변경합니다.

::component-code
---
소품 :
  색상: 중립
  강조 표시: True
---
::

###  변형

`variant`prop 을 사용하여 InputDate 의 변형을 변경합니다.

::component-code
---
소품 :
  변형: 미묘한
---
::

###  크기

`size`prop 을 사용하여 InputDate 의 크기를 변경합니다.

::component-code
---
소품 :
  크기: xl
---
::

###  아이콘

`icon`prop을 사용하여 InputDate 내부에 [Icon](/docs/components/icon)를 표시합니다.

::component-code
---
소품 :
  아이콘: 'i-lucide-calendar'
---
::

::note
`leading` 및 `trailing`props를 사용하여 아이콘 위치를 설정하거나 `leading-icon` 및 `trailing-icon`props를 사용하여 각 위치에 다른 아이콘을 설정합니다.
::

###  구분자 아이콘

`separator-icon`prop을 사용하여 범위 구분자의 [Icon](/docs/components/icon)를 변경합니다. 기본값은 `i-lucide-minus`입니다.

::component-code
---
무시하기:
  -  range
소품 :
  범위: true
  separatorIcon: 'i-lucide-arrow-right'
---
::

::framework-only
#nuxt 코드
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
이 아이콘은 `app.config.ts` 아래 `ui.icons.minus` 키에서 전역적으로 사용자 지정할 수 있습니다.
:::

#vue #vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
이 아이콘은 `vite.config.ts` 아래 `ui.icons.minus` 키에서 전역적으로 사용자 지정할 수 있습니다.
:::
::

### Avatar 이미지

`avatar`prop을 사용하여 InputDate 내부에 [Avatar](/docs/components/avatar) 를 표시합니다.

::component-code
---
상품명 : True
무시하기:
  - avatar.loading - avatar.loading
소품 :
  아바타 (Avatar):
    src: 'https://github.com/vuejs.png'
    로드: Lazy
  크기: MD
  변형: 외곽 선
---
::

###  비활성 화

`disabled`prop 을 사용하여 InputDate 를 비활성화합니다.

::component-code
---
소품 :
  사용 안 함:true
---
::

##  예제

###  사용할 수 없는 날짜

`is-date-unavailable`prop을 함수와 함께 사용하여 특정 날짜를 사용할 수 없음으로 표시합니다.

::component-example
---
이름: 'input-date-unavailable-dates-example'
---
::

###  최소/최대 날짜 포함

`min-value` 및 `max-value`props를 사용하여 날짜를 제한합니다.

::component-example
---
name: 'input-date-min-max-dates-example' 입력날짜-min-max-dates-example'
---
::

###  날짜 선택기로

[Calendar](/docs/components/calendar) 및 [Popher](/docs/components/popover) 구성 요소를 사용하여 날짜 선택기를 만듭니다.

::component-example
---
name: 'input-date-picker-example' 입력날짜-선택기-예제
---
::

###  날짜 범위 선택기로

[Calendar](/docs/components/calendar) 및 [Popher](/docs/components/popover) 구성 요소를 사용하여 날짜 범위 선택기를 만듭니다.

::component-example
---
이름: 'input-date-range-picker-example'
---
::

##  API

###  Props

:컴포넌트 - 소품

###  슬롯

:컴포넌트 - 슬롯

### Emits @ 에미츠

:구성요소 - 방사

##  테마

:구성요소 주제

##  Changelog

:component-changelog 구성요소 변경 로그
