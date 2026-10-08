---
title: ProgressGroup 진행 그룹
description: 진행률 막대는 합계가 되는 여러 세그먼트로 분할됩니다.
category: element
navigation.badge: New
keywords:
  - meter
  - meter group
  - segmented progress
  - stacked bar
  - breakdown
links:
  - label: Github (GitHub)
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/ProgressGroup.vue
---

##  사용

ProgressGroup 구성 요소를 사용하여 여러 값을 단일 진행률 막대의 세그먼트로 표시합니다.

::component-code
---
축소: true
무시하기:
  -  items
  -  max
  -  클래스
외부:
  - items 항목
externalTypes:
  -  ProgressGroupItem []
소품 :
  최대 : 128
  항목:
    - label: '시스템'
      값: 24
      색상: Neutral
      아이콘: i-lucide-cog
    - label: '앱'
      값 : 8
      색상 : "error"
      아이콘: 'i-lucide-app-window'
    - label: '문서'
      값 : 12
      색상 : "warning"
      아이콘: 'i-lucide-file'
    - label: '멀티미디어'
      값: 42
      색상: "성공"
      아이콘: i-lucide-film
  클래스: 'w-96'
---
::

###  프로젝트

`items`prop을 다음과 같은 속성을 가진 객체의 배열로 사용합니다.

- `label?: string`{lang="ts-type"}
-  @ `icon?: string` @ @ {lang="ts-type"}
- `value?: number`{lang="ts-type"} @
-  @ [ @ @ `color?: "primary" | "secondary" | "success" | "info" | "warning" | "error" | "neutral" | (string & {})` @ {lang="ts-type"} @ ]( @ #with-custom-colors @ )
-  @ `slot?: string` @ {lang="ts-type"}
- `class?: any`{lang="ts-type"}
- `ui?: { segment?: ClassNameValue, indicator?: ClassNameValue, item?: ClassNameValue, itemLeadingIcon?: ClassNameValue, itemLeadingDot?: ClassNameValue, itemLabel?: ClassNameValue, itemTrailing?: ClassNameValue }`{lang="ts-type"}

::component-code
---
축소: true
무시하기:
  -  items
  -  클래스
외부:
  -  items
externalTypes:
  -  ProgressGroupItem []
소품 :
  프로젝트:
    - label: '계산'
      값: 42
      색상 : primary
    - label: '스토리지'
      값: 18
      색상 : "info"
    - label: '대역폭'
      값: 9
      색상 : "warning"
  클래스: 'W-96'
---
::

::note
`icon`가 없는 항목은 대신 목록에 색상 점을 가져옵니다.
::

###  Max

`max`prop을 사용하여 모든 항목의 합계를 설정합니다. 기본값은 `100`입니다.

::component-code
---
축소: true
무시하기:
  -  items
  -  클래스
외부:
  - items 프로젝트
externalTypes:
  -  ProgressGroupItem []
소품 :
  최대 : 512
  프로젝트:
    - label: '사용됨'
      값 : 128
      색상 : primary
    - label: '예약됨'
      값: 64
      색상: Neutral
  클래스: 'W-96'
---
::

::note
값은 `0`와 `max` 사이에서 클램프되며, `max` 이상의 세그먼트는 비례적으로 트랙을 공유합니다.
::

###  상태

`status`prop을 사용하여 막대 위에 합계 값을 표시합니다.

::component-code
---
축소: true
무시하기:
  -  items
  -  클래스
외부:
  -  items
externalTypes:
  -  ProgressGroupItem []
소품 :
  상태 : true
  최대 : 128
  항목:
    - label: '시스템'
      값: 24
      색상 : Neutral
    - label: '앱'
      값 : 8
      색상 : "error"
    - label: '멀티미디어'
      값: 42
      색상: "성공"
  클래스: 'w-96'
---
::

::tip
상태는 막대의 끝을 추적하며, 대신 전체 너비를 가로 질러 `:ui="{ status: 'w-full' }"`를 사용합니다.
::

###  색상

`color`prop 을 사용하여 자체 설정되지 않은 모든 세그먼트의 색상을 변경합니다.

::component-code
---
축소: true
무시하기:
  -  items
  -  클래스
외부:
  -  items
externalTypes:
  -  ProgressGroupItem []
소품 :
  색상: 중립
  항목:
    - label: '읽기'
      값: 42
    - label: '쓰기'
      값: 18
  클래스: 'w-96'
---
::

::tip
이 소품과 각 아이템의 `color` 모두 CSS 색상 값을 허용하며, 이는 테마 외부의 팔레트에 유용합니다.
::

###  크기

`size`prop을 사용하여 ProgressGroup의 크기를 변경합니다.

::component-code
---
축소: true
무시하기:
  -  items
  -  클래스
외부:
  -  items
externalTypes:
  -  ProgressGroupItem []
소품 :
  크기: xl
  프로젝트:
    - label: '읽기'
      값 : 42
      색상 : primary
    - label: '쓰기'
      값: 18
      색상 : "info"
  클래스: 'W-96'
---
::

###  방향

`orientation`prop을 사용하여 ProgressGroup.Default의 방향을 `horizontal`로 변경합니다.

::component-code
---
축소: true
무시하기:
  - items @ 항목
  -  클래스
외부:
  -  items
externalTypes:
  -  ProgressGroupItem []
소품 :
  방향: 세로
  항목:
    - label: '읽기'
      값: 42
      색상 : primary
    - label: '쓰기'
      값: 18
      색상 : "info"
  클래스: H-48
---
::

##  예제

###  상태 슬롯 포함

`#status` 슬롯을 사용하여 합계 백분율을 자신의 콘텐츠로 바꿉니다.

::component-example
---
축소: true
name: progress-group-status-example 진행 그룹-상태-예제
---
::

###  아이템 슬롯 포함

`#item-label` 및 `#item-trailing` 슬롯을 사용하여 각 항목이 표시하는 내용을 변경합니다. 둘 다 `item`, 해당 `index` 및 `percent`를 받습니다.

::component-example
---
축소: true
이름: progress-group-item-example
---
::

### 사용자 정의 색상

각 항목에 CSS 색상을 지정하여 테마 팔레트 외부에서 분석을 작성합니다.

::component-example
---
축소: true
이름: progress-group-custom-color-example
---
::

##  API

###  Props

:컴포넌트 - 소품

###  슬롯

:컴포넌트 - 슬롯

##  테마

:구성요소 주제

##  Changelog

:component-changelog 구성요소 변경 로그
