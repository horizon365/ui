---
description: 사용자의 주의를 끌기 위한 콜아웃입니다.
category: element
keywords:
  - notice
  - inline notification
links:
  - label: Github (GitHub)
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Alert.vue
---

##  사용

###  제목

`title`prop을 사용하여 경고 제목을 설정합니다.

::component-code
---
소품 :
  사진: "Heads Up!"
---
::

###  설명

`description`prop을 사용하여 경고에 대한 설명을 설정합니다.

::component-code
---
상품명 : True
소품 :
  사진: "Heads Up!"
  설명: '앱 구성에서 기본 색상을 변경할 수 있습니다.'
---
::

###  아이콘

`icon`prop을 사용하여 [Icon](/docs/components/icon)를 표시합니다.

::component-code
---
상품명 : True
무시하기:
  -  title
  -  설명
소품 :
  사진: "Heads Up!"
  설명: "앱 구성에서 기본 색상을 변경할 수 있습니다."
  아이콘: 'i-lucide-terminal'
---
::

###  Avatar

`avatar`prop을 사용하여 [Avatar](/docs/components/avatar)를 표시합니다.

::component-code
---
상품명 : True
무시하기:
  -  title
  -  설명
소품 :
  사진: "Heads Up!"
  설명: '앱 구성에서 기본 색상을 변경할 수 있습니다.'
  avatar.src: 'https://github.com/nuxt.png'
---
::

###  색상

`color`prop을 사용하여 Alert 색상을 변경합니다.

::component-code
---
상품명 : True
무시하기:
  -  title
  -  설명
  -  icon
소품 :
  색상: 중립
  사진: "Heads Up!"
  설명: '앱 구성에서 기본 색상을 변경할 수 있습니다.'
  아이콘: 'i-lucide-terminal'
---
::

###  변형

`variant`prop을 사용하여 Alert의 변형을 변경합니다.

::component-code
---
상품명 : True
무시하기:
  -  title
  -  설명
  -  icon
소품 :
  색상: 중립
  변형: 미묘한
  사진: "Heads Up!"
  설명: '앱 구성에서 기본 색상을 변경할 수 있습니다.'
  아이콘: 'i-lucide-terminal'
---
::

###  닫기

`close`prop을 사용하여 [Button](/docs/components/button)를 표시하여 경고를 무시합니다.

::tip
닫기 버튼을 클릭하면 `update:open` 이벤트가 발생합니다.
::

::component-code
---
상품명 : True
무시하기:
  -  title
  -  설명
  -  닫기
  -  color
  -  variant
소품 :
  사진: "Heads Up!"
  설명: '앱 구성에서 기본 색상을 변경할 수 있습니다.'
  색상: 중립
  변형: 윤곽선
  닫기: True
---
::

[Button](/docs/components/button) 구성 요소에서 임의의 속성을 전달하여 사용자 지정할 수 있습니다.

::component-code
---
상품명 : True
무시하기:
  -  title
  -  설명
  -  close. color
  - close.variant - close.variant
  -  color
  -  variant
소품 :
  사진: "Heads Up!"
  설명: "앱 구성에서 기본 색상을 변경할 수 있습니다."
  색상: 중립
  변형: 윤곽선
  닫기:
    색상: 기본
    변형: 윤곽선
    클래스: rounded-full
---
::

### 아이콘 닫기

`close-icon`prop을 사용하여 닫기 버튼 [Icon](/docs/components/icon)를 사용자 정의합니다. 기본값은 `i-lucide-x`입니다.

::component-code
---
상품명 : True
무시하기:
  -  title
  -  설명
  -  닫기
  -  color
  -  variant
소품 :
  사진: "Heads Up!"
  설명: '앱 구성에서 기본 색상을 변경할 수 있습니다.'
  색상: 중립
  변형: 외곽 선
  닫기: True
  closeIcon: 'i-lucide-arrow-right'
---
::

::framework-only
#nuxt 코드
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
이 아이콘은 `app.config.ts` 아래 `ui.icons.close` 키에서 전역적으로 사용자 지정할 수 있습니다.
:::

#vue #vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
이 아이콘은 `vite.config.ts` 아래 `ui.icons.close` 키에서 전역적으로 사용자 지정할 수 있습니다.
:::
::

###  작업

`actions`prop을 사용하여 일부 [Button](/docs/components/button)액션을 경고에 추가합니다.

::component-code
---
상품명 : True
무시하기:
  -  title
  -  actions
  -  color
  -  variant
소품 :
  사진: "Heads Up!"
  설명: '앱 구성에서 기본 색상을 변경할 수 있습니다.'
  색상: 중립
  변형: 외곽 선
  동작:
    - label: 작업 1
    - label: 액션 2
      색상: 중립
      변형: 미묘함
---
::

###  방향

`orientation`prop을 사용하여 경고 방향을 변경합니다.

::component-code
---
상품명 : True
무시하기:
  -  title
  -  actions
  -  color
  -  variant
소품 :
  사진: "Heads Up!"
  설명: "앱 구성에서 기본 색상을 변경할 수 있습니다."
  색상: 중립
  변형: 외곽 선
  방향: 수평
  작업:
    - label: 작업 1
    - label: 작업 2
      색상: 중립
      변형: 미묘한
---
::

##  예제

### `class` prop

`class`prop을 사용하여 Alert의 기본 스타일을 재정의합니다.

::component-code
---
상품명 : True
무시하기:
  -  title
  -  설명
소품 :
  사진: "Heads Up!"
  설명: '앱 구성에서 기본 색상을 변경할 수 있습니다.'
  클래스: "rounded-none"
---
::

### `ui` prop

`ui`prop을 사용하여 Alert의 슬롯 스타일을 재정의합니다.

::component-code
---
상품명 : True
무시하기:
  -  ui
  -  title
  -  설명
  -  icon
소품 :
  사진: "Heads Up!"
  설명: "앱 구성에서 기본 색상을 변경할 수 있습니다."
  아이콘 : i-lucide-rocket
  ui:
    아이콘: 'size-11'
---
::

##  API

###  Props

:컴포넌트 - 소품

###  슬롯

:구성요소 - 슬롯

###  Emits

:구성요소 - 방사

##  테마

:구성요소 주제

##  Changelog

:component-changelog 구성요소 변경 로그
