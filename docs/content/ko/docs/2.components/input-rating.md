---
title: InputRating (입력 등급)
description: 사용자로부터 등급을 표시하고 수집하는 구성 요소입니다.
category: form
keywords:
  - star rating
  - stars
links:
  - label: 등급 (Rating)
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/rating
  - label: Github (GitHub)
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/InputRating.vue
---

##  사용

`v-model` 지시문을 사용하여 InputRating 구성 요소의 등급 값을 제어합니다.

::component-code
---
외부:
  - modelValue - modelValue 이미지
소품 :
  ModelValue: 3 모델
---
::

상태를 제어할 필요가 없을 때는 `default-value`prop을 사용하여 초기값을 설정합니다.

::component-code
---
무시하기:
  - defaultValue - 
소품 :
  defaultValue: 3
---
::

###  스텝

`step`prop을 사용하여 각 별의 세분성을 제어합니다. 절반 별 등급을 허용하려면 `0.5`로 설정합니다.

::component-code
---
무시하기:
  - defaultValue - 
소품 :
  단계: 0.5
  defaultValue: 3.5
---
::

###  길이

`length`prop을 사용하여 별 수를 설정합니다. 기본값은 `5`입니다.

::component-code
---
무시하기:
  - defaultValue - defaultValue
소품 :
  길이 : 10
  단계: 0.5
  defaultValue : 7.5
---
::

###  삭제 가능

`clearable`prop을 사용하여 사용자가 현재 선택한 값을 눌러 등급을 지울 수 있도록 합니다. 기본값은 `false`입니다.

::component-code
---
무시하기:
  - defaultValue - defaultValue
소품 :
  클리어 가능: true
  defaultValue: 3
---
::

### Hoverable @ 호버러블

`hoverable`prop을 사용하여 별 위에 마우스를 놓을 때 등급이 값을 미리 볼 수 있는지 여부를 제어합니다. 기본값은 `false`입니다.

::component-code
---
무시하기:
  - defaultValue - defaultValue
소품 :
  hoverable : true : ~
  defaultValue: 3
---
::

###  아이콘

`icon`prop을 사용하여 별에 사용할 아이콘을 사용자 정의합니다. 기본값은 `i-lucide-star`입니다.

::component-code
---
무시하기:
  -  defaultValue
소품 :
  아이콘 : i-lucide-heart
  defaultValue: 4 개
---
::

::framework-only
#nuxt #nuxt
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
기본 별 아이콘을 전체적으로 사용자 지정할 수 있습니다 `app.config.ts`under`ui.icons.star`key.
:::

#vue #vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
기본 별 아이콘을 전체적으로 사용자 정의할 수 있습니다 `vite.config.ts`under`ui.icons.star`key.
:::
::

### 빈 아이콘

`empty-icon`prop 을 사용하여 빈 별에 사용할 아이콘을 사용자 정의합니다. 제공되지 않은 경우에는 `icon`와 같은 아이콘을 사용합니다.

::component-code
---
무시하기:
  - defaultValue - defaultValue
소품 :
  emptyIcon: 'i-lucide-circle'
  아이콘: 'i-lucide-circle-check'
  defaultValue: 3
---
::

###  색상

`color`prop을 사용하여 채워진 별의 색상을 변경합니다.

::component-code
---
무시하기:
  - defaultValue - defaultValue
소품 :
  색상: 중립
  defaultValue: 4 개
---
::

###  크기

`size`prop 을 사용하여 별의 크기를 변경합니다.

::component-code
---
무시하기:
  - defaultValue - defaultValue
프로젝트:
  크기 (Size):
    -  xs
    -  sm
    -  md
    -  lg
    -  xl
소품 :
  크기: xl
  defaultValue : 4
---
::

###  방향

`orientation`prop을 사용하여 등급 방향을 변경합니다. 기본값은 `horizontal`입니다.

::component-code
---
무시하기:
  - defaultValue - defaultValue
소품 :
  방향: 수직
  defaultValue : 4
---
::

###  비활성 화

`disabled`prop을 사용하여 InputRating 구성 요소를 비활성화합니다. 비활성화하면 구성 요소의 불투명도(75%)가 감소하고 `not-allowed` 커서가 나타나 대화형이 아니라는 것을 나타냅니다.

::component-code
---
무시하기:
  - defaultValue - defaultValue
소품 :
  사용 안 함:true
  defaultValue: 3
---
::

### 읽기 전용

사용자 상호 작용을 허용하지 않고 등급을 표시하려면 `readonly`prop을 사용합니다. `disabled`와는 달리 정상적인 모양(전체 불투명도, 기본 커서)을 유지합니다. 변경할 수 없지만 정상적으로 보이는 등급을 표시하려면 사용합니다.

::component-code
---
무시하기:
  - defaultValue - defaultValue
소품 :
  읽기 전용: true
  defaultValue : 4.5
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

:구성요소 - 주제

##  Changelog

:component-changelog 구성요소 변경 로그
