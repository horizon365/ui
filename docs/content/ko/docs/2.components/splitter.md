---
description: 드래그 가능한 핸들로 구분된 크기 조절 가능한 패널 세트입니다.
category: layout
links:
  - label: 분할 장치(Splitter)
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/splitter
  - label: Github (GitHub)
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Splitter.vue
navigation.badge: New
---

##  사용

[분할] 구성 요소를 사용하여 드래그 가능한 핸들로 구분된 크기 조정 가능한 패널 리스트를 표시합니다.

::component-example
---
축소: true
이름: "splitter-example"
---
::

::note
Splitter는 컨테이너의 높이를 채우므로 부모 요소가 하나를 정의하는지 확인합니다.The Splitter fills the height of its container, so make sure a parent element defines one.
::

###  프로젝트

`items`prop을 다음과 같은 속성을 가진 객체의 배열로 사용합니다.

- `defaultSize?: number`{lang="ts-type"}
- `minSize?: number`{lang="ts-type"}
- `maxSize?: number` {lang="ts-type"}
- `collapsible?: boolean`{lang="ts-type"}
-  @ `collapsedSize?: number` @ @ {lang="ts-type"}
- `sizeUnit?: '%' | 'px'`{lang="ts-type"} @
-  @ `order?: number` @ @ {lang="ts-type"} @
-  @ `id?: string` @ @ {lang="ts-type"} @
-  @ `slot?: string` @ {lang="ts-type"} @
- `class?: any`{lang="ts-type"}
-  @ `ui?: { panel?: ClassNameValue }` @ @ {lang="ts-type"} @

패널의 내용을 채우려면 `slot` 키를 사용하고, 스타일을 지정하려면 `class` 키를 사용하십시오. `slot` 키가 없는 항목은 `panel-{index}` 슬롯으로 돌아갑니다. 크기는 기본적으로 백분율이며, 픽셀 값으로 항목에 `sizeUnit: 'px'`를 설정합니다.

::caution
서버에서 렌더링할 때 `id`prop을 설정하고 `defaultSize`를 모든 항목에 또는 없음으로 설정합니다. ID는 자동으로 생성되며 서버와 클라이언트가 동의하지 않을 수 있으며 이는 수화 작업의 레이아웃을 방해합니다. `defaultSize`가 없는 항목은 서버의 동일한 공유로 돌아갑니다. 따라서 이 두 가지를 혼합하면 패널이 수분을 공급받으면 점프하게 됩니다. 픽셀 크기는 클라이언트에서 측정되며 항상 약간의 이동을 합니다.
::

::component-code
---
축소: true
클래스: H-96
상품명 : True
무시하기:
  -  items
  -  id
외부:
  -  items
externalTypes:
  -  SplitterItem []
소품 :
  id: 'Splitter-items' (분할 항목)
  항목:
    - slot: '사이드바'
      minSize : 15
      maxSize : 40
      defaultSize: 25
      class: 'bg-elevated/50 border border-default rounded-xl items-center justify-center text-muted font-medium' 에러 발생
    - slot: 'main'
      defaultSize : 75
      class: 'bg-elevated/50 border border-default rounded-xl items-center justify-center text-muted font-medium' 에러 발생
슬롯 :
  사이드바: 사이드바
  주: Main
---

#사이드바
사이드바 Sidebar

#메인
주 (Main)
::

###  방향

`orientation`prop을 사용하여 Splitter의 방향을 변경합니다. 기본값은 `horizontal`입니다.

::component-code
---
축소: true
클래스: H-96
상품명 : True
무시하기:
  -  items
  -  id
외부:
  -  items
externalTypes:
  -  SplitterItem []
소품 :
  id: 'splitter-orientation' (분할 방향)
  방향: 수직
  프로젝트:
    - slot: '첫 번째'
      class: 'bg-elevated/50 border border-default rounded-xl items-center justify-center text-muted font-medium' 에러 발생
    - 슬롯: '두 번째'
      class: 'bg-elevated/50 border border-default rounded-xl items-center justify-center text-muted font-medium' 에러 발생
슬롯 :
  첫번째: 첫번째
  두번째: 두번째
---

#첫 번 째
첫 번째

#초
두 번째
::

##  예

###  축소 가능한 패널 포함

항목에 `collapsible: true`를 설정하여 `minSize` 이전에 축소하도록 하고 `collapsedSize` 을 사용하여 패널의 일부를 볼 수 있도록 합니다. 패널 슬롯은 `collapsed`, `collapse` 및 `expand` 노출되므로 프로그래밍 방식으로 제어할 수 있습니다.`expand` 및 `resize` 이벤트가 패널 인덱스와 함께 발생합니다.

::component-example
---
축소: true
이름: 'split-collapable-example'
---
::

###  중첩된 분할 요소 포함

패널 내부에 `Splitter`를 중첩하여 2차원 IDE 스타일의 레이아웃을 만듭니다.

::component-example
---
축소: true
name: 'splitter-nested-example' (분할 중첩 예제)
---
::

### 사용자 지정 핸들 사용

기본적으로 핸들은 보이지 않습니다. `ui`prop을 사용하여 스타일을 변경합니다. 예를 들어 플러쉬 레이아웃에 표시되는 구분자로, `resize-handle` 슬롯을 사용하여 핸들 안에 있는 내용을 그립처럼 렌더링합니다.

::component-example
---
축소: true
이름: 'splitter-custom-handle-example'
---
::

###  지속적인

`auto-save-id`를 제공하여 레이아웃을 `localStorage`로 유지하고 다시 로드할 때 복원합니다.

```vue
<template>
  <USplitter id="my-layout" auto-save-id="my-layout" :items="items">
    <!-- ... -->
  </USplitter>
</template>
```

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
