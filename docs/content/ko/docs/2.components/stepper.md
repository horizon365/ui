---
description: 다중 단계 프로세스를 통해 진행 상황을 나타내는 데 사용되는 단계 세트입니다.
category: navigation
keywords:
  - wizard
links:
  - label: 스텝퍼 (Stepper)
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/stepper
  - label: Github (GitHub)
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Stepper.vue
---

##  사용

Stepper 구성 요소를 사용하여 스테퍼의 항목 목록을 표시합니다.

::component-code
---
축소: true
숨기기 (Hide):
  -  클래스
무시하기:
  -  items
  -  클래스
외부:
  - items 항목
externalTypes:
  -  StepperItem []
소품 :
  프로젝트:
    - title: '주소'
      사진: "Add your address here"
      사진: "i-lucide-house"
    - title: '배송'
      사진: "Set your preferred shipping method"
      아이콘 : i-lucide-truck
    - title: '체크 아웃'
      사진: "confirm your order"
  클래스 : 'w-full'
---
::

###  프로젝트

`items`prop을 다음과 같은 속성을 가진 객체의 배열로 사용합니다.

- `title?: string` {lang="ts-type"}
-  @ `description?: AvatarProps` @ @ {lang="ts-type"} @
-  @ `content?: string` @ @ {lang="ts-type"} @
- `icon?: string`{lang="ts-type"}
-  @ `value?: string | number` @ @ {lang="ts-type"} @
-  @ `disabled?: boolean` @ @ {lang="ts-type"} @
- [`slot?: string`{lang="ts-type"}](#with-custom-slot)
-  @ `class?: any` @ @ {lang="ts-type"} @
- `ui?: { item?: ClassNameValue, container?: ClassNameValue, trigger?: ClassNameValue, indicator?: ClassNameValue, icon?: ClassNameValue, separator?: ClassNameValue, wrapper?: ClassNameValue, title?: ClassNameValue, description?: ClassNameValue }` {lang="ts-type"}

::component-code
---
무시하기:
  -  items
  -  클래스
외부:
  -  items
externalTypes:
  -  StepperItem []
소품 :
  프로젝트:
    - title: '주소'
      사진: "Add your address here "
      아이콘: i-lucide-house
    - title: '배송'
      사진: "Set your preferred shipping method"
      아이콘 : i-lucide-truck
    - title: '체크 아웃'
      사진: "confirm your order"
  클래스 : 'w-full'
---
::

::note
항목을 클릭하여 단계를 탐색합니다.
::

###  색상

`color`prop 을 사용하여 스텝퍼의 색상을 변경합니다.

::component-code
---
무시하기:
  -  content
  -  items
  -  클래스
외부:
  -  items
externalTypes:
  -  StepperItem []
소품 :
  색상: 중립
  항목:
    - title: '주소'
      사진: "Add your address here "
      아이콘: i-lucide-house
    - title: '배송'
      사진: "Set your preferred shipping method"
      아이콘 : i-lucide-truck
    - title: '체크 아웃'
      사진: "confirm your order"
  클래스: 'w-full'
---
::

###  크기

`size`prop을 사용하여 스텝퍼의 크기를 변경합니다.

::component-code
---
무시하기:
  -  content
  -  items
  -  클래스
외부:
  -  items
externalTypes:
  -  StepperItem []
소품 :
  크기: xl
  항목:
    - title: '주소'
      사진: "Add your address here "
      사진: "i-lucide-house"
    - title: '배송'
      사진: "Set your preferred shipping method"
      아이콘 : i-lucide-truck
    - title: '체크 아웃'
      사진: "confirm your order"
  클래스: 'w-full'
---
::

###  방향

`orientation`prop 을 사용하여 Stepper.기본값을 `horizontal`로 변경합니다.

::component-code
---
무시하기:
  -  content
  -  items
  -  클래스
외부:
  -  items
externalTypes:
  -  StepperItem []
소품 :
  방향: 세로
  프로젝트:
    - title: '주소'
      사진: "Add your address here "
      사진: "i-lucide-house"
    - title: '배송'
      사진: "Set your preferred shipping method"
      아이콘 : i-lucide-truck
    - title: '체크 아웃'
      사진: "confirm your order"
  클래스 : 'w-full'
---
::

###  비활성 화

`disabled`prop을 사용하여 단계 탐색을 비활성화합니다.

::component-code
---
무시하기:
  -  content
  -  items
  -  클래스
외부:
  -  items
externalTypes:
  -  StepperItem []
소품 :
  사용 안 함:true
  프로젝트:
    - title: '주소'
      사진: "Add your address here "
      아이콘: i-lucide-house
    - title: '배송'
      사진: "Set your preferred shipping method"
      아이콘 : i-lucide-truck
    - title: '체크 아웃'
      사진: "confirm your order"
---
::

::note{to="#with-controls"}
이 기능은 컨트롤을 사용하여 탐색을 강제로 수행하려는 경우에 유용합니다.
::

##  예제

###  컨트롤

버튼을 사용하여 스텝퍼에 대한 추가 컨트롤을 추가할 수 있습니다.

:component-example {name="stepper-with-controls-example"}

###  활성 항목 제어

`default-value`prop 또는 `v-model` 지시문을 사용하여 활성 항목을 제어할 수 있습니다. `value` 가 제공되지 않은 경우 기본값은 인덱스입니다.

: component-example {name="stepper-model-value-example"}

::tip
`value-key`prop을 사용하여 `v-model` 또는 `default-value` 가 제공될 때 항목을 일치시키는 키를 변경합니다.
::

### 콘텐츠 슬롯 포함

`#content`슬롯을 사용하여 각 항목의 콘텐츠를 사용자 정의합니다.

: component-example {name="stepper-content-slot-example"}

### 사용자 지정 슬롯 포함

`slot` 속성을 사용하여 특정 항목을 사용자 정의합니다.

다음과 같은 슬롯에 액세스할 수 있습니다.

- `#{{ item.slot }}`{lang="ts-type"}

:component-example {name="stepper-custom-slot-example"}

##  API

###  Props

:컴포넌트 - 소품

###  슬롯

:컴포넌트 - 슬롯

###  에미츠

:구성요소 - 방사

###  노출

[`useTemplateRef`](https://vuejs.org/api/composition-api-helpers.html#usetemplateref)를 사용하여 유형 구성요소 인스턴스에 액세스할 수 있습니다.

```vue
<script setup lang="ts">
const stepper = useTemplateRef('stepper')
</script>

<template>
  <UStepper ref="stepper" />
</template>
```

이렇게 하면 다음 항목에 액세스할 수 있습니다.

| 이름 (Name)| 유형 (Type)|
| ---- | ---- |
| `next`{lang="ts-type"}| `() => void`{lang="ts-type"}|
| `prev`{lang="ts-type"}| `() => void`{lang="ts-type"}|
| `hasNext`{lang="ts-type"}| `Ref<boolean>`{lang="ts-type"}|
| `hasPrev`{lang="ts-type"}| `Ref<boolean>`{lang="ts-type"}|

##  테마

:구성요소 주제

##  Changelog

:component-changelog 구성요소 변경 로그
