---
description: 두 상태 사이를 전환하는 컨트롤입니다.
category: form
keywords:
  - toggle
  - toggle switch
links:
  - label: 스위치 (Switch)
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/switch
  - label: Github (GitHub)
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Switch.vue
---

##  사용

`v-model` 디렉티브를 사용하여 스위치의 확인 상태를 제어합니다.

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

###  레이블

`label`prop 을 사용하여 스위치의 레이블을 설정합니다.

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

`description`prop을 사용하여 스위치에 대한 설명을 설정합니다.

::component-code
---
무시하기:
  -  label
소품 :
  레이블 : Check Me
  사진: "This is a checkbox."
---
::

###  아이콘

`checked-icon` 및 `unchecked-icon`props를 사용하여 선택 및 선택 취소 시 스위치 아이콘을 설정합니다.

::component-code
---
상품명 : True
무시하기:
  -  label
  -  defaultValue
소품 :
  uncheckedIcon: 'i-lucide-x'
  checkedIcon : 'i-lucide-check'
  defaultValue : true : true
  레이블 : Check Me
---
::

### 로드 중

`loading`prop 을 사용하여 스위치에 로드 아이콘을 표시합니다.

::component-code
---
무시하기:
  -  label
  - defaultValue - defaultValue
소품 :
  로드: true
  defaultValue : true : true
  레이블 : Check Me
---
::

### Loading Icon 이미지

`loading-icon`prop을 사용하여 로드 아이콘을 사용자 정의합니다. 기본값은 `i-lucide-loader-circle`입니다.

::component-code
---
무시하기:
  -  label
  - defaultValue - defaultValue
소품 :
  로드: true
  loadingIcon: 'i-lucide-loader'
  defaultValue : true : true
  레이블 : Check Me
---
::

::framework-only
#nuxt 코드
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
이 아이콘은 `app.config.ts` 아래 `ui.icons.loading` 키에서 전역적으로 사용자 지정할 수 있습니다.
:::

#vue #vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
이 아이콘은 `vite.config.ts` 아래 `ui.icons.loading` 키에서 전역적으로 사용자 지정할 수 있습니다.
:::
::

###  색상

`color`prop을 사용하여 스위치의 색상을 변경합니다.

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

###  크기

`size`prop을 사용하여 스위치 크기를 변경합니다.

::component-code
---
무시하기:
  -  label
  - defaultValue - defaultValue
소품 :
  크기: xl
  defaultValue : true : true
  레이블 : Check Me
---
::

###  비활성 화

`disabled`prop을 사용하여 스위치를 비활성화합니다.

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

### Props ### Props

:컴포넌트 - 소품

::callout{icon="i-simple-icons-mdnwebdocs" to="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attributes" target="_blank"}
이 컴포넌트는 모든 네이티브 `<button>`HTML 속성을 지원합니다.
::

###  슬롯

:구성요소 - 슬롯

### Emits @ 에미츠

:구성요소 - 방사

##  테마

:구성요소 주제

##  Changelog

:component-changelog 구성요소 변경 로그
