---
description: 선택된 상태와 선택되지 않은 상태 사이를 전환하는 입력 요소입니다.
category: form
keywords:
  - tickbox
  - check
  - boolean
links:
  - label: 확인 란
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/checkbox
  - label: Github (GitHub)
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Checkbox.vue
---

##  사용

`v-model` 지시문을 사용하여 체크 박스의 체크 상태를 제어합니다.

::component-code
---
무시하기:
  - modelValue - modelValue 이미지
외부:
  - modelValue - modelValue 이미지
소품 :
  modelValue: true 모델
---
::

상태를 제어할 필요가 없을 때는 `default-value`prop을 사용하여 초기값을 설정합니다.

::component-code
---
무시하기:
  - defaultValue - defaultValue
소품 :
  defaultValue : true : true
---
::

### 확실하지 않음

`v-model` 지시어 또는 `default-value`prop의 `indeterminate` 값을 사용하여 체크 상자를 [indeterminate state](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox#indeterminate_state_checkboxes)로 설정합니다.

::component-code
---
무시하기:
  -  defaultValue
소품 :
  defaultValue : 'indeterminate'
---
::

###  불확실한 아이콘

`indeterminate-icon`prop을 사용하여 불확실한 아이콘을 사용자 정의합니다. 기본값은 `i-lucide-minus`입니다.

::component-code
---
무시하기:
  -  defaultValue
소품 :
  defaultValue: 'indeterminate' 오류
  indeterminateIcon: 'i-lucide-plus'에 대한 의견
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

###  레이블

`label`prop을 사용하여 체크 상자의 레이블을 설정합니다.

::component-code
---
소품 :
  레이블 : Check Me
---
::

`required`prop을 사용할 때 레이블 옆에 별표가 추가됩니다.

::component-code
---
무시하기:
  -  label
소품 :
  required: true
  레이블 : Check Me
---
::

###  설명

`description`prop을 사용하여 확인란에 대한 설명을 설정합니다.

::component-code
---
무시하기:
  -  label
소품 :
  레이블 : Check Me
  사진: "This is a checkbox"
---
::

###  아이콘

체크 상자 아이콘을 설정하려면 `icon`prop을 사용합니다. 기본값은 `i-lucide-check`입니다.

::component-code
---
무시하기:
  -  label
  - defaultValue - defaultValue
소품 :
  아이콘 : i-lucide-heart
  defaultValue : true : true
  레이블 : Check Me
---
::

::framework-only
#nuxt #nuxt
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
이 아이콘은 `app.config.ts` 아래 `ui.icons.check` 키에서 전역적으로 사용자 지정할 수 있습니다.
:::

#vue #vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
이 아이콘은 `vite.config.ts` 아래 `ui.icons.check` 키에서 전역적으로 사용자 지정할 수 있습니다.
:::
::

###  색상

`color`prop을 사용하여 체크 상자의 색상을 변경합니다.

::component-code
---
무시하기:
  -  label
  - defaultValue - defaultValue
소품 :
  색상: 중립
  defaultValue : true : true
  레이블 : Check Me
---
::

###  변형

`variant`prop 을 사용하여 체크박스의 변형을 변경합니다.

::component-code
---
무시하기:
  -  label
  - defaultValue - defaultValue
소품 :
  색상 : primary
  variant: '카드'
  defaultValue : true : true
  레이블 : Check Me
---
::

###  크기

`size`prop을 사용하여 체크 상자의 크기를 변경합니다.

::component-code
---
무시하기:
  -  label
  - defaultValue - defaultValue
소품 :
  크기: xl
  변형: 리스트
  defaultValue : true : true
  레이블 : Check Me
---
::

###  지표

위치를 변경하거나 표시기를 숨기려면 `indicator`prop을 사용합니다. 기본값은 `start`입니다.

::note
`indicator`가 `hidden`일 때 아이콘이 레이블 위에 표시됩니다.
::

::component-code
---
상품명 : True
무시하기:
  -  label
  -  아이콘
  - defaultValue - defaultValue
소품 :
  사진: "hidden"
  variant: '카드'
  아이콘 : i-lucide-heart
  defaultValue : true : true
  레이블 : Check Me
---
::

###  비활성 화

`disabled`prop을 사용하여 확인란을 비활성화합니다.

::component-code
---
무시하기:
  -  label
소품 :
  사용 안 함:true
  레이블 : Check Me
---
::

##  API

###  Props

:컴포넌트 - 소품

::callout{icon="i-simple-icons-mdnwebdocs" to="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attributes" target="_blank"}
이 컴포넌트는 모든 네이티브 `<button>`HTML 속성을 지원합니다.
::

###  슬롯

:구성요소 - 슬롯

###  Emits

:구성요소 - 방사

##  테마

:구성요소 - 주제

##  Changelog

:component-changelog 구성요소 변경 로그
