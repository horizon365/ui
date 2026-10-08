---
description: '날짜, 제목, 아이콘 또는 아바타가 포함된 이벤트 시퀀스를 표시하는 구성 요소입니다.'
category: data
keywords:
  - activity feed
  - history
links:
  - label: Github (GitHub)
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Timeline.vue
---

##  사용

타임라인 구성 요소를 사용하여 타임라인의 항목 목록을 표시할 수 있습니다.

::component-code
---
축소: true
숨기기 (Hide):
  -  클래스
  -  defaultValue
무시하기:
  -  items
  -  클래스
  - defaultValue - defaultValue
외부:
  -  items
externalTypes:
  -  TimelineItem []
소품 :
  defaultValue : 2
  프로젝트:
    - 날짜: '2025년 3월 15일'
      프로젝트 킥오프 (Project Kickoff)
      설명: '팀 정렬과 함께 프로젝트를 시작했습니다. 프로젝트 이정표를 설정하고 리소스를 할당합니다.'
      아이콘 : i-lucide-rocket
    - 날짜: 'Mar 22 2025'
      제목: Design Phase
      Description: '사용자 연구 및 디자인 워크샵. 사용자 테스트를위한 와이어 프레임 및 프로토 타입을 만들었습니다.'
      아이콘: i-lucide-palette
    - 날짜: 'Mar 29 2025'
      제목: Development Sprint
      description: 'Frontend and backend development. 핵심 기능을 구현하고 API와 통합했습니다.'
      아이콘: 'i-lucide-code'
    - 날짜: 'Apr 5 2025'
      제목 : Testing & Deployment
      설명: 'QA 테스트 및 성능 최적화. 응용 프로그램을 프로덕션에 배포했습니다.'
      아이콘: 'i-lucide-check-circle'
  클래스: 'w-96'
---
::

###  프로젝트

`items`prop을 다음과 같은 속성을 가진 객체의 배열로 사용합니다.

-  @ `date?: string` @ @ {lang="ts-type"} @
-  @ `title?: string` @ @ {lang="ts-type"} @
- `description?: AvatarProps`{lang="ts-type"}
-  @ `icon?: string` @ {lang="ts-type"} @
-  @ `avatar?: AvatarProps` @ @ {lang="ts-type"} @
- `value?: string | number`{lang="ts-type"}
- [ `slot?: string` @ {lang="ts-type"} @ ]( @ #with-custom-slot @ )
- `class?: any` {lang="ts-type"}
- `ui?: { item?: ClassNameValue, container?: ClassNameValue, indicator?: ClassNameValue, separator?: ClassNameValue, wrapper?: ClassNameValue, date?: ClassNameValue, title?: ClassNameValue, description?: ClassNameValue }`{lang="ts-type"}

::component-code
---
무시하기:
  -  items
  -  클래스
  - defaultValue - defaultValue
외부:
  -  items
externalTypes:
  -  TimelineItem []
소품 :
  defaultValue : 2
  항목:
    - 날짜: '2025년 3월 15일'
      프로젝트 킥오프 (Project Kickoff)
      설명: '팀 정렬과 함께 프로젝트를 시작했습니다. 프로젝트 이정표를 설정하고 리소스를 할당합니다.'
      아이콘 : i-lucide-rocket
    - 날짜: 'Mar 22 2025'
      제목: Design Phase
      Description: '사용자 연구 및 디자인 워크샵. 사용자 테스트를위한 와이어 프레임 및 프로토 타입을 만들었습니다.'
      아이콘 : i-lucide-palette
    -  날짜: 'Mar 29 2025'
      제목 : Development Sprint
      description: 'Frontend and backend development. 핵심 기능을 구현하고 API와 통합했습니다.'
      아이콘: 'i-lucide-code'
    - 날짜: 'Apr 5 2025'
      제목 : Testing & Deployment
      설명: 'QA 테스트 및 성능 최적화. 응용 프로그램을 프로덕션에 배포했습니다.'
      아이콘: 'i-lucide-check-circle'
  클래스: 'w-96'
---
::

###  색상

`color`prop 을 사용하여 타임라인에서 활성 항목의 색상을 변경합니다.

::component-code
---
무시하기:
  -  items
  -  클래스
  - defaultValue - defaultValue
외부:
  -  items
externalTypes:
  -  TimelineItem []
소품 :
  색상: 중립
  defaultValue : 2
  프로젝트:
    - 날짜: '2025년 3월 15일'
      프로젝트 킥오프 (Project Kickoff)
      설명: '팀 정렬과 함께 프로젝트를 시작했습니다. 프로젝트 이정표를 설정하고 리소스를 할당합니다.'
      아이콘 : i-lucide-rocket
    - 날짜: 'Mar 22 2025'
      제목 : Design Phase
      Description: '사용자 연구 및 디자인 워크샵. 사용자 테스트를위한 와이어 프레임 및 프로토 타입을 만들었습니다.'
      아이콘 : i-lucide-palette
    - 날짜: 'Mar 29 2025'
      제목: Development Sprint
      description: 'Frontend and backend development. 핵심 기능을 구현하고 API와 통합했습니다.'
      아이콘: 'i-lucide-code'
    - 날짜: 'Apr 5 2025'
      제목 : Testing & Deployment
      설명: 'QA 테스트 및 성능 최적화. 응용 프로그램을 프로덕션에 배포했습니다.'
      아이콘: 'i-lucide-check-circle'
  클래스: 'W-96'
---
::

###  크기

`size`prop을 사용하여 타임라인의 크기를 변경합니다.

::component-code
---
무시하기:
  -  items
  -  클래스
  - defaultValue - defaultValue
외부:
  -  items
externalTypes:
  -  TimelineItem []
소품 :
  크기: xs
  defaultValue : 2
  항목:
    -  날짜: '2025년 3월 15일'
      프로젝트 킥오프 (Project Kickoff)
      설명: '팀 정렬과 함께 프로젝트를 시작했습니다. 프로젝트 이정표를 설정하고 리소스를 할당합니다.'
      아이콘 : i-lucide-rocket
    - 날짜: 'Mar 22 2025'
      제목 : Design Phase
      Description: '사용자 연구 및 디자인 워크샵. 사용자 테스트를위한 와이어 프레임 및 프로토 타입을 만들었습니다.'
      아이콘 : i-lucide-palette
    -  날짜: 'Mar 29 2025'
      제목 : Development Sprint
      description: 'Frontend and backend development. 핵심 기능을 구현하고 API와 통합했습니다.'
      아이콘: 'i-lucide-code'
    - 날짜: 'Apr 5 2025'
      제목 : Testing & Deployment
      설명: 'QA 테스트 및 성능 최적화. 응용 프로그램을 프로덕션에 배포했습니다.'
      아이콘: 'i-lucide-check-circle'
  클래스: 'w-96'
---
::

###  방향

`orientation`prop을 사용하여 타임라인의 방향을 변경합니다. 기본값은 `vertical`입니다.

::component-code
---
무시하기:
  -  items
  -  클래스
  - defaultValue - defaultValue
외부:
  -  items
externalTypes:
  -  TimelineItem []
소품 :
  방향: 수평
  defaultValue : 2
  프로젝트:
    -  날짜: '2025년 3월 15일'
      프로젝트 킥오프 (Project Kickoff)
      설명: '팀 정렬과 함께 프로젝트를 시작했습니다.'
      아이콘 : i-lucide-rocket
    - 날짜: 'Mar 22 2025'
      제목 : Design Phase
      사진: "User Research and Design Workshop"
      아이콘 : i-lucide-palette
    - 날짜: 'Mar 29 2025'
      제목 : Development Sprint
      Frontend and backend development (프론트엔드 및 백엔드 개발)
      아이콘: 'i-lucide-code'
    - 날짜: 'Apr 5 2025'
      제목 : Testing & Deployment
      설명: "QA 테스트 및 성능 최적화"
      아이콘: 'i-lucide-check-circle'
  클래스 : 'w-full'
클래스: 'overflow-x-auto'
---
::

###  반전

반전 소품을 사용하여 타임라인의 방향을 반대로 합니다.

::component-code
---
무시하기:
  -  items
  -  클래스
  -  defaultValue
외부:
  -  items
externalTypes:
  -  TimelineItem []
소품 :
  반전: true
  ModelValue: 2 개
  방향: 수직
  프로젝트:
    - 날짜: '2025년 3월 15일'
      프로젝트 킥오프 (Project Kickoff)
      설명: '팀 정렬과 함께 프로젝트를 시작했습니다.'
      아이콘 : i-lucide-rocket
    - 날짜: 'Mar 22 2025'
      제목 : Design Phase
      설명: "사용자 연구 및 디자인 워크샵"
      아이콘 : i-lucide-palette
    - 날짜: 'Mar 29 2025'
      제목 : Development Sprint
      Frontend and backend development (프론트엔드 및 백엔드 개발)
      아이콘: 'i-lucide-code'
    - 날짜: 'Apr 5 2025'
      제목 : Testing & Deployment
      설명: "QA 테스트 및 성능 최적화"
      아이콘: 'i-lucide-check-circle'
  클래스 : 'w-full'
클래스: 'overflow-x-auto'
---
::

##  예

###  활성 항목 제어

`default-value`prop 또는 `v-model` 지시문을 사용하여 활성 항목을 제어할 수 있습니다. `value`가 제공되지 않으면 기본값이 인덱스로 설정됩니다.

: component-example {name="timeline-model-value-example" prettier}

::tip
`value-key`prop을 사용하여 `v-model` 또는 `default-value` 가 제공될 때 항목을 일치시키는 키를 변경합니다.
::

###  이벤트 선택

`@select`listener를 추가하여 항목을 클릭할 수 있도록 할 수 있습니다.

::note
처리기 함수는 `Event` 및 `TimelineItem`를 첫 번째와 두 번째 인수로 수신합니다.
::

::component-example
---
상품명 : True
이름: 'timeline-select-example'
---
::

###  대체 레이아웃 사용

`ui`prop을 사용하여 대체 레이아웃이 있는 타임라인을 만듭니다.

:component-example {name="timeline-alternating-layout-example" prettier}

### 사용자 지정 슬롯 포함

`slot` 속성을 사용하여 특정 항목을 사용자 정의합니다.

다음과 같은 슬롯에 액세스할 수 있습니다.

- `#{{ item.slot }}-indicator` {lang="ts-type"}
- `#{{ item.slot }}-date`{lang="ts-type"}
- `#{{ item.slot }}-title`{lang="ts-type"}
- `#{{ item.slot }}-description`{lang="ts-type"}

:component-example {name="timeline-custom-slot-example" prettier}

###  슬롯 포함

사용 가능한 슬롯을 사용하여 보다 복잡한 타임라인을 만듭니다.

:component-example {name="timeline-slots-example" prettier}

##  API

###  Props

:컴포넌트 - 소품

###  슬롯

:컴포넌트 - 슬롯

###  에미츠

:구성요소 - 방출

##  테마

:구성요소 주제

##  Changelog

:component-changelog 구성요소 변경 로그
