---
title: InputTime
description: '시간을 선택하기 위한 입력.'
category: form
keywords:
  - time picker
  - clock
  - hour
links:
  - label: 타임 필드 (TimeField)
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/time-field
  - label: TimeRangeField (TimeRangeField)
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/time-range-field
  - label: Github (GitHub)
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/InputTime.vue
---

##  사용

`v-model` 지시문을 사용하여 선택한 시간을 제어합니다.

::component-code
---
캐스트 :
  modelValue: TimeValue
무시하기:
  - modelValue - modelValue 이미지
외부:
  - modelValue - modelValue 이미지
소품 :
  modelValue: [12, 30, 0]
---
::

상태를 제어할 필요가 없을 때는 `default-value`prop을 사용하여 초기값을 설정합니다.

::component-code
---
캐스트 :
  defaultValue: TimeValue
무시하기:
  - defaultValue - defaultValue
외부:
  - defaultValue - defaultValue
소품 :
  defaultValue: [9, 45, 0]
---
::

::framework-only
#nuxt #nuxt
:::note{to="/docs/getting-started/integrations/i18n/nuxt#locale"}
이 구성 요소는 `@internationalized/date` 패키지를 사용하여 로케일 인식 서식을 지정합니다. 시간 형식은 App 구성 요소의 `locale`prop에 의해 결정됩니다.
:::

#vue #vue
:::note{to="/docs/getting-started/integrations/i18n/vue#locale"}
이 구성 요소는 `@internationalized/date` 패키지를 사용하여 로케일 인식 서식을 지정합니다. 시간 형식은 App 구성 요소의 `locale`prop에 의해 결정됩니다.
:::
::

###  범위

`range`prop을 사용하여 시작 시간과 종료 시간을 사용하여 시간 범위를 선택할 수 있습니다.

::component-code
---
상품명 : True
캐스트 :
  modelValue: TimeRangeValue
무시하기:
  -  range
  -  modelValue. start
  -  modelValue. end
외부:
  - modelValue - modelValue 이미지
소품 :
  범위: true
  modelValue:
    시작: [9, 0, 0]
    끝: [17, 30, 0]
---
::

### 시간 주기

`hour-cycle`prop을 사용하여 InputTime.기본값을 `12`로 변경합니다.

::component-code
---
캐스트 :
  defaultValue:TimeValue 값
무시하기:
  -  hourCycle
  - defaultValue - defaultValue
외부:
  -  defaultValue
소품 :
  시간 주기: 24
  defaultValue: [16, 30, 0]
---
::

###  색상

`color`prop을 사용하여 InputTime의 색상을 변경합니다.

::component-code
---
소품 :
  색상: 중립
  강조 표시:true
---
::

::note
`highlight`prop은 초점 상태를 보여주기 위해 사용되며, 검증 오류가 발생할 때 내부적으로 사용됩니다.
::

###  변형

`variant`prop 을 사용하여 InputTime 의 변형을 변경합니다.

::component-code
---
소품 :
  변형: 미묘함
---
::

###  크기

`size`prop을 사용하여 InputTime의 크기를 변경합니다.

::component-code
---
소품 :
  크기: xl
---
::

###  아이콘

`icon`prop을 사용하여 InputTime 내에 [Icon](/docs/components/icon)를 표시합니다.

::component-code
---
소품 :
  아이콘: i-lucide-clock
---
::

::note
`leading` 및 `trailing`props를 사용하여 아이콘 위치를 설정하거나 `leading-icon` 및 `trailing-icon`props를 사용하여 각 위치에 대해 다른 아이콘을 설정합니다.
::

###  구분자 아이콘

`separator-icon`prop을 사용하여 범위 구분자의 [Icon](/docs/components/icon)을 변경합니다. 기본값은 `i-lucide-minus`입니다.

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
#nuxt #nuxt
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
이 아이콘은 `app.config.ts` 아래 `ui.icons.minus` 키에서 전역적으로 사용자 지정할 수 있습니다.
:::

#vue #vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
이 아이콘은 `vite.config.ts` 아래 `ui.icons.minus` 키에서 전역적으로 사용자 지정할 수 있습니다.
:::
::

###  Avatar

`avatar`prop을 사용하여 InputTime 내에 [Avatar](/docs/components/avatar) 를 표시합니다.

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

`disabled`prop 을 사용하여 InputTime 을 비활성화합니다.

::component-code
---
소품 :
  사용 안 함:true
---
::

##  예제

###  내에서 FormField

[FormField](/docs/components/form-field) 구성 요소 내에서 InputTime을 사용하여 레이블, 도움말 텍스트, 필수 표시기 등을 표시할 수 있습니다.

::component-example
---
이름: 'input-time-form-field-example'
---
::

##  API

###  Props

:컴포넌트 - 소품

###  슬롯

:구성요소 - 슬롯

###  Emits

:구성요소 - 방출

##  테마

:구성요소 - 주제

##  Changelog

:component-changelog 구성요소 변경 로그
