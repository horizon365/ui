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

## Usage

타임라인 구성 요소를 사용하여 타임라인의 항목 목록을 표시할 수 있습니다.

::component-code
---
collapse: true
hide:
  - class
  - defaultValue
ignore:
  - items
  - class
  - defaultValue
external:
  - items
externalTypes:
  - TimelineItem[]
props:
  defaultValue: 2
  items:
    - date: 'Mar 15, 2025'
      title: 'Project Kickoff'
      description: 'Kicked off the project with team alignment. Set up project milestones and allocated resources.'
      icon: 'i-lucide-rocket'
    - date: 'Mar 22 2025'
      title: 'Design Phase'
      description: 'User research and design workshops. Created wireframes and prototypes for user testing.'
      icon: 'i-lucide-palette'
    - date: 'Mar 29 2025'
      title: 'Development Sprint'
      description: 'Frontend and backend development. Implemented core features and integrated with APIs.'
      icon: 'i-lucide-code'
    - date: 'Apr 5 2025'
      title: 'Testing & Deployment'
      description: 'QA testing and performance optimization. Deployed the application to production.'
      icon: 'i-lucide-check-circle'
  class: 'w-96'
---
::

### Items 항목

`items` prop을 다음 속성을 가진 오브젝트 배열로 사용합니다.

- `date?: string`{lang="ts-type"}
- `title?: string`{lang="ts-type"} (- `title?: string`{lang="ts-type"})
- `description?: AvatarProps`{lang="ts-type"}
- `icon?: string`{lang="ts-type"}
- `avatar?: AvatarProps`{lang="ts-type"}
- `value?: string | number`{lang="ts-type"}
- [`slot?: string`{lang="ts-type"}](#with-custom-slot)
- `class?: any`{lang="ts-type"}
- `ui?: { item?: ClassNameValue, container?: ClassNameValue, indicator?: ClassNameValue, separator?: ClassNameValue, wrapper?: ClassNameValue, date?: ClassNameValue, title?: ClassNameValue, description?: ClassNameValue }`{lang="ts-type"}

::component-code
---
ignore:
  - items
  - class
  - defaultValue
external:
  - items
externalTypes:
  - TimelineItem[]
props:
  defaultValue: 2
  items:
    - date: 'Mar 15, 2025'
      title: 'Project Kickoff'
      description: 'Kicked off the project with team alignment. Set up project milestones and allocated resources.'
      icon: 'i-lucide-rocket'
    - date: 'Mar 22 2025'
      title: 'Design Phase'
      description: 'User research and design workshops. Created wireframes and prototypes for user testing.'
      icon: 'i-lucide-palette'
    - date: 'Mar 29 2025'
      title: 'Development Sprint'
      description: 'Frontend and backend development. Implemented core features and integrated with APIs.'
      icon: 'i-lucide-code'
    - date: 'Apr 5 2025'
      title: 'Testing & Deployment'
      description: 'QA testing and performance optimization. Deployed the application to production.'
      icon: 'i-lucide-check-circle'
  class: 'w-96'
---
::

### Color 색상

`color` 소품을 사용하여 타임라인에서 활성 항목의 색상을 변경합니다.

::component-code
---
ignore:
  - items
  - class
  - defaultValue
external:
  - items
externalTypes:
  - TimelineItem[]
props:
  color: neutral
  defaultValue: 2
  items:
    - date: 'Mar 15, 2025'
      title: 'Project Kickoff'
      description: 'Kicked off the project with team alignment. Set up project milestones and allocated resources.'
      icon: 'i-lucide-rocket'
    - date: 'Mar 22 2025'
      title: 'Design Phase'
      description: 'User research and design workshops. Created wireframes and prototypes for user testing.'
      icon: 'i-lucide-palette'
    - date: 'Mar 29 2025'
      title: 'Development Sprint'
      description: 'Frontend and backend development. Implemented core features and integrated with APIs.'
      icon: 'i-lucide-code'
    - date: 'Apr 5 2025'
      title: 'Testing & Deployment'
      description: 'QA testing and performance optimization. Deployed the application to production.'
      icon: 'i-lucide-check-circle'
  class: 'w-96'
---
::

### Size

`size` prop을 사용하여 타임라인의 크기를 변경합니다.

::component-code
---
ignore:
  - items
  - class
  - defaultValue
external:
  - items
externalTypes:
  - TimelineItem[]
props:
  size: xs
  defaultValue: 2
  items:
    - date: 'Mar 15, 2025'
      title: 'Project Kickoff'
      description: 'Kicked off the project with team alignment. Set up project milestones and allocated resources.'
      icon: 'i-lucide-rocket'
    - date: 'Mar 22 2025'
      title: 'Design Phase'
      description: 'User research and design workshops. Created wireframes and prototypes for user testing.'
      icon: 'i-lucide-palette'
    - date: 'Mar 29 2025'
      title: 'Development Sprint'
      description: 'Frontend and backend development. Implemented core features and integrated with APIs.'
      icon: 'i-lucide-code'
    - date: 'Apr 5 2025'
      title: 'Testing & Deployment'
      description: 'QA testing and performance optimization. Deployed the application to production.'
      icon: 'i-lucide-check-circle'
  class: 'w-96'
---
::

### 방향

`orientation` 소품을 사용하여 타임라인의 방향을 변경합니다. 기본값은 `vertical`입니다.

::component-code
---
ignore:
  - items
  - class
  - defaultValue
external:
  - items
externalTypes:
  - TimelineItem[]
props:
  orientation: 'horizontal'
  defaultValue: 2
  items:
    - date: 'Mar 15, 2025'
      title: 'Project Kickoff'
      description: 'Kicked off the project with team alignment.'
      icon: 'i-lucide-rocket'
    - date: 'Mar 22 2025'
      title: 'Design Phase'
      description: 'User research and design workshops.'
      icon: 'i-lucide-palette'
    - date: 'Mar 29 2025'
      title: 'Development Sprint'
      description: 'Frontend and backend development.'
      icon: 'i-lucide-code'
    - date: 'Apr 5 2025'
      title: 'Testing & Deployment'
      description: 'QA testing and performance optimization.'
      icon: 'i-lucide-check-circle'
  class: 'w-full'
class: 'overflow-x-auto'
---
::

### 반전

반전 소품을 사용하여 타임라인의 방향을 반대로 합니다.

::component-code
---
ignore:
  - items
  - class
  - defaultValue
external:
  - items
externalTypes:
  - TimelineItem[]
props:
  reverse: true
  modelValue: 2
  orientation: 'vertical'
  items:
    - date: 'Mar 15, 2025'
      title: 'Project Kickoff'
      description: 'Kicked off the project with team alignment.'
      icon: 'i-lucide-rocket'
    - date: 'Mar 22 2025'
      title: 'Design Phase'
      description: 'User research and design workshops.'
      icon: 'i-lucide-palette'
    - date: 'Mar 29 2025'
      title: 'Development Sprint'
      description: 'Frontend and backend development.'
      icon: 'i-lucide-code'
    - date: 'Apr 5 2025'
      title: 'Testing & Deployment'
      description: 'QA testing and performance optimization.'
      icon: 'i-lucide-check-circle'
  class: 'w-full'
class: 'overflow-x-auto'
---
::

## examples 예제

### Control 활성화된 항목

`default-value` prop 또는 `v-model` 지시어를 사용하여 활성 항목을 제어할 수 있습니다. `value`가 제공되지 않으면 기본적으로 인덱스로 설정됩니다.

:component-example{name="timeline-model-value-example" prettier}

::tip
`value-key` Prop을 사용하여 `v-model` 또는 `default-value`가 제공될 때 항목을 일치시키는 키를 변경합니다.
::

### Select 이벤트 포함

`@select` 리스너를 추가하여 항목을 클릭할 수 있도록 할 수 있습니다.

::note
핸들러 함수는 `Event` 및 `TimelineItem`를 첫 번째 및 두 번째 인수로 수신합니다.
::

::component-example
---
prettier: true
name: 'timeline-select-example'
---
::

### 대체 레이아웃 포함

`ui` prop을 사용하여 대체 레이아웃이 있는 타임라인을 만듭니다.

:component-example{name="timeline-alternating-layout-example" prettier}

### 사용자 지정 슬롯 포함

`slot` 속성을 사용하여 특정 항목을 사용자 정의합니다.

다음과 같은 슬롯에 액세스할 수 있습니다.

- `#{{ item.slot }}-indicator`{lang="ts-type"}
- `#{{ item.slot }}-date`{lang="ts-type"}의 발음을 - {lang="ts-type"}
- `#{{ item.slot }}-title`{lang="ts-type"}
- `#{{ item.slot }}-description`{lang="ts-type"}

:component-example{name="timeline-custom-slot-example" prettier}

### With 슬롯

사용 가능한 슬롯을 사용하여 보다 복잡한 타임라인을 만듭니다.

:component-example{name="timeline-slots-example" prettier}

## API

### Props 파일

:component-props

### 슬롯

:component-slots

### Emits 파일

:component-emits

## Theme (## 테마)

:component-theme

## 변경 로그

:component-changelog
