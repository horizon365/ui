---
description: 링크 역할을 하거나 액션을 트리거할 수 있는 단추 요소입니다.
category: element
keywords:
  - cta
  - action
  - btn
links:
  - label: Github (GitHub)
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Button.vue
---

##  사용

기본 슬롯을 사용하여 버튼의 레이블을 설정합니다.

::component-code
---
슬롯 :
  기본값: 단추
---
::

### Label 태그

`label`prop을 사용하여 Button의 레이블을 설정합니다.

::component-code
---
소품 :
  레이블: Button
---
::

###  색상

`color`prop을 사용하여 버튼의 색상을 변경합니다.

::component-code
---
소품 :
  색상: 중립
슬롯 :
  기본값: 단추
---
::

###  변형

`variant`prop을 사용하여 Button의 변형을 변경합니다.

::component-code
---
소품 :
  색상: 중립
  변형: 윤곽선
슬롯 :
  기본값: 단추
---
::

###  크기

`size`prop을 사용하여 Button의 크기를 변경합니다.

::component-code
---
소품 :
  크기: xl
슬롯 :
  기본값: 단추
---
::

###  아이콘

`icon`prop을 사용하여 버튼 내부에 [Icon](/docs/components/icon)를 표시합니다.

::component-code
---
소품 :
  아이콘 : i-lucide-rocket
  크기: MD
  색상: 기본
  변형: 솔리드
슬롯 :
  기본값: 단추
---
::

`leading` 및 `trailing`props를 사용하여 아이콘 위치를 설정하거나 `leading-icon` 및 `trailing-icon`props를 사용하여 각 위치에 대해 다른 아이콘을 설정합니다.

::component-code
---
소품 :
  trailingIcon: i-lucide-arrow-right 이미지
  크기: MD
슬롯 :
  기본값: 단추
---
::

Prop 또는 슬롯으로 `label`는 선택 사항이므로 Button을 아이콘 전용 버튼으로 사용할 수 있습니다.

::component-code
---
소품 :
  아이콘 : i-lucide-search
  크기: md
  색상: 기본
  변형: 본체
---
::

###  Avatar

`avatar`prop을 사용하여 버튼 내부에 [Avatar](/docs/components/avatar)를 표시합니다.

::component-code
---
상품명 : True
무시하기:
  - avatar.loading - avatar.loading
소품 :
  아바타 (Avatar):
    src: 'https://github.com/nuxt.png'
    로드: Lazy
  크기: md
  색상: 중립
  변형: 외곽 선
슬롯 :
  기본 값:|

    단추
---
::

prop 또는 slot로서의 `label`는 선택 사항이므로 Button을 아바타 전용 버튼으로 사용할 수 있습니다.

::component-code
---
상품명 : True
무시하기:
  - avatar.loading - avatar.loading
소품 :
  아바타 (Avatar):
    src: 'https://github.com/nuxt.png'
    로드: Lazy
  크기: MD
  색상: 중립
  변형: 외곽 선
---
::

###  링크

당신 은  [Link](/docs/components/link#props)  구성   요소 에서   모든   속성 을   전달   할   수   있 습니다  `to`,  `target`  등 .

::component-code
---
무시 하 기 :
  - target
소품   :
  대상   :https://github.com/nuxt/ui
  target :   _ blank   대상
슬롯   :
  기본 값 :   단추
---
::

버튼 이   링크 일   때 나  `active`prop 을   사용 할   때 는  `active-color`  및  `active-variant`props 를   사용 하 여   활성   상태 를   사용자   정의 할   수   있 습니다 .

::component-code
---
상품명   :   True
무시 하 기 :
  - color
  - variant
프로젝트 :
  activeColor   :
    - 기본
    - secondary
    - 성공
    - info
    - 경고
    - 오류
    - neutral
  activeVariant :
    - solid
    - outline   개요
    -  soft
    - subtle @ 미묘한
    -  ghost
    -  link
소품 :
  활성: true
  색상: 중립
  변형: 윤곽선
  activeColor: 기본
  activeVariant: 솔리드
슬롯 :
  기본값 :|

    단추
---

단추
::

또한 `active-class` 및 `inactive-class`props를 사용하여 활성 상태를 사용자 정의할 수 있습니다.

::component-code
---
소품 :
  활성: true
  activeClass: 'font-bold'
  inactiveClass : 'font-light' (font-light)
슬롯 :
  기본값: 단추
---

단추
::

::tip
이러한 스타일은 `app.config.ts` 파일에서 `ui.button.variants.active` 키 아래에 전역적으로 구성할 수 있습니다.

```ts
export default defineAppConfig({
  ui: {
    button: {
      variants: {
        active: {
          true: {
            base: 'font-bold'
          }
        }
      }
    }
  }
})
```
::

### 로드 중

`loading`prop을 사용하여 로딩 아이콘을 표시하고 Button을 비활성화합니다.

::component-code
---
소품 :
  로드: true
  후행: false
슬롯 :
  기본값: 단추
---
버튼 (Button)
::

`loading-auto`prop을 사용하여 `@click`promise가 보류 중일 때 로드 아이콘을 자동으로 표시합니다.

: component-example {name="button-loading-auto-example"}

이것은 또한 [Form](/docs/components/form) 구성 요소와 함께 작동합니다.

: component-example {name="button-loading-auto-form-example"}

### Loading Icon 이미지

`loading-icon`prop을 사용하여 로드 아이콘을 사용자 정의합니다. 기본값은 `i-lucide-loader-circle`입니다.

::component-code
---
소품 :
  로드: true
  loadingIcon: 'i-lucide-loader'
슬롯 :
  기본값: 단추
---
버튼 (Button)
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

###  비활성 화

`disabled`prop을 사용하여 Button을 비활성화합니다.

::component-code
---
소품 :
  사용 안 함:true
슬롯 :
  기본값: 단추
---

버튼 (Button)
::

##  예제

### `class` prop

`class`prop을 사용하여 Button의 기본 스타일을 재정의합니다.

::component-code
---
소품 :
  class: 'font-bold rounded-full' (글꼴 굵게 둥근 모양)
슬롯 :
  기본값: 단추
---
::

### `ui` prop

`ui`prop을 사용하여 Button의 슬롯 스타일을 재정의합니다.

::component-code
---
상품명 : True
무시하기:
  -  ui
  -  color
  -  variant
  -  icon
소품 :
  아이콘 : i-lucide-rocket
  색상: 중립
  변형: 윤곽선
  ui:
    leadingIcon: 'text-primary' 이미지
슬롯 :
  기본 값:|

    단추
---
::

##  API

###  Props

:컴포넌트 - 소품

::callout{icon="i-simple-icons-mdnwebdocs" to="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attributes" target="_blank"}
이 컴포넌트는 또한 모든 네이티브 `<button>`HTML 속성을 지원합니다.
::

::callout{icon="i-simple-icons-github" to="https://github.com/nuxt/ui/blob/v4/src/runtime/components/Link.vue#L13"}
`Button` 구성 요소는 `Link` 구성 요소를 확장합니다. GitHub에서 소스 코드를 확인하십시오.
::

###  슬롯

:컴포넌트 - 슬롯

##  테마

:구성요소 - 주제

##  Changelog

:component-changelog 구성요소 변경 로그
