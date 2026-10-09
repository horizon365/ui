---
description: 한 번에 하나씩 표시되는 탭 패널 세트입니다.
category: navigation
keywords:
  - tabbed
  - panels
  - sections
links:
  - label: 탭 탭
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/tabs
  - label: Github (GitHub)
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Tabs.vue
---

## Usage

탭 구성 요소를 사용하여 탭에 항목 목록을 표시합니다.

::component-example
---
collapse: true
prettier: true
name: 'tabs-example'
props:
  class: 'w-full'
---
::

### Items 이미지

`items` prop을 다음 속성을 가진 오브젝트 배열로 사용합니다.

- `label?: string`{lang="ts-type"} (- `label?: string`{lang="ts-type"})
- `icon?: string`{lang="ts-type"} - `icon?: string`{lang="ts-type"}
- `avatar?: AvatarProps`{lang="ts-type"}
- `badge?: string | number | BadgeProps`{lang="ts-type"} (- `badge?: string | number | BadgeProps`{lang="ts-type"})
- `content?: string`{lang="ts-type"}
- `value?: string | number`{lang="ts-type"} - {lang="ts-type"}
- `disabled?: boolean`{lang="ts-type"}
- [`slot?: string`{lang="ts-type"}](#with-custom-slot)
- `class?: any`{lang="ts-type"}
- `ui?: { trigger?: ClassNameValue, leadingIcon?: ClassNameValue, leadingAvatar?: ClassNameValue, leadingAvatarSize?: ClassNameValue, label?: ClassNameValue, trailingBadge?: ClassNameValue, trailingBadgeSize?: ClassNameValue, content?: ClassNameValue }`{lang="ts-type"} (- `ui?: { trigger?: ClassNameValue, leadingIcon?: ClassNameValue, leadingAvatar?: ClassNameValue, leadingAvatarSize?: ClassNameValue, label?: ClassNameValue, trailingBadge?: ClassNameValue, trailingBadgeSize?: ClassNameValue, content?: ClassNameValue }`{lang="ts-type"})

::component-code
---
ignore:
  - items
  - class
external:
  - items
externalTypes:
  - TabsItem[]
props:
  items:
    - label: Account
      icon: 'i-lucide-user'
      content: 'This is the account content.'
    - label: Password
      icon: 'i-lucide-lock'
      content: 'This is the password content.'
  class: 'w-full'
---
::

### Content

패널 없이 트리거를 렌더링하려면 `content` 소품을 `false`로 설정합니다. 기본값은 `true`입니다.

::component-code
---
ignore:
  - content
  - items
  - class
external:
  - items
externalTypes:
  - TabsItem[]
props:
  content: false
  items:
    - label: Account
      icon: 'i-lucide-user'
      content: 'This is the account content.'
    - label: Password
      icon: 'i-lucide-lock'
      content: 'This is the password content.'
  class: 'w-full'
---
::

### Unmount 마운트 해제

탭이 축소될 때 내용이 마운트 해제되지 않도록 `unmount-on-hide` 소품을 사용합니다. 기본값은 `true`입니다.

::component-code
---
ignore:
  - content
  - items
  - class
external:
  - items
externalTypes:
  - TabsItem[]
props:
  unmountOnHide: false
  items:
    - label: Account
      icon: 'i-lucide-user'
      content: 'This is the account content.'
    - label: Password
      icon: 'i-lucide-lock'
      content: 'This is the password content.'
  class: 'w-full'
---
::

::note
DOM을 검사하여 각 항목의 콘텐츠가 렌더링되는 것을 볼 수 있습니다.
::

### color

`color` prop을 사용하여 탭의 색상을 변경합니다.

::component-code
---
ignore:
  - content
  - items
  - class
external:
  - items
externalTypes:
  - TabsItem[]
props:
  color: neutral
  content: false
  items:
    - label: Account
    - label: Password
  class: 'w-full'
---
::

### Variant (### Variant)

`variant` prop을 사용하여 탭의 변형을 변경합니다.

::component-code
---
ignore:
  - content
  - items
  - class
external:
  - items
externalTypes:
  - TabsItem[]
props:
  color: neutral
  variant: link
  content: false
  items:
    - label: Account
    - label: Password
  class: 'w-full'
---
::

### Size 크기

`size` prop를 사용하여 탭의 크기를 변경합니다.

::component-code
---
ignore:
  - content
  - items
  - class
external:
  - items
externalTypes:
  - TabsItem[]
props:
  size: md
  variant: pill
  content: false
  items:
    - label: Account
    - label: Password
  class: 'w-full'
---
::

### 방향 성

`orientation` prop을 사용하여 탭의 방향을 변경합니다. 기본값은 `horizontal`입니다.

::component-code
---
ignore:
  - content
  - items
  - class
external:
  - items
externalTypes:
  - TabsItem[]
props:
  orientation: vertical
  variant: pill
  content: false
  items:
    - label: Account
    - label: Password
  class: 'w-full'
---
::

## examples 예제

### Control 활성화된 항목

`default-value` prop 또는 `v-model` 지시어를 항목의 `value`와 함께 사용하여 활성 항목을 제어할 수 있습니다. `value`가 제공되지 않으면 기본적으로 **x** 인덱스가 string**로 지정됩니다.

:component-example{name="tabs-model-value-example"}

::tip
`value-key` Prop을 사용하여 `v-model` 또는 `default-value`가 제공될 때 항목을 일치시키는 키를 변경합니다.
::

### route query 경로 쿼리

`route.query.tab`를 항목의 `value`로 사용하여 URL 쿼리 매개 변수를 사용하여 활성 항목을 제어할 수 있습니다.

:component-example{name="tabs-route-query-example"}

### With 컨텐츠 슬롯

`#content` 슬롯을 사용하여 각 항목의 컨텐츠를 사용자 정의합니다.

:component-example{name="tabs-content-slot-example"}

### 아래쪽 탭 모음 포함

`ui` prop을 사용하여 탭을 YouTube 또는 Instagram과 유사한 아이콘과 작은 레이블이있는 모바일 스타일의 하단 탭 막대로 변환합니다.

::component-example
---
collapse: true
name: 'tabs-bottom-tab-bar-example'
---
::

### 사용자 지정 슬롯 포함

`slot` 속성을 사용하여 특정 항목을 사용자 정의합니다.

다음과 같은 슬롯에 액세스할 수 있습니다.

- `#{{ item.slot }}`{lang="ts-type"}

::component-example
---
collapse: true
name: 'tabs-custom-slot-example'
---
::

## API

### Props (### Props)

:component-props

### Slots

:component-slots

### Emits

:component-emits

### exposes 소개

템플릿 참조를 통해 컴포넌트에 액세스하는 경우 다음을 사용할 수 있습니다.

| 이름 Name| 유형 (Type)|
| ---- | ---- |
| `triggersRef`{lang="ts-type"}| `Ref<ComponentPublicInstance[]>`{lang="ts-type"} 파일|

## Theme 테마

:component-theme

## 변경 로그

:component-changelog
