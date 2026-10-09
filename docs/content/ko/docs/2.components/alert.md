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

## Usage

### Title 파일

`title` prop을 사용하여 Alert 제목을 설정합니다.

::component-code
---
props:
  title: 'Heads up!'
---
::

### Description

`description` prop을 사용하여 Alert에 대한 설명을 설정합니다.

::component-code
---
prettier: true
props:
  title: 'Heads up!'
  description: 'You can change the primary color in your app config.'
---
::

### Icon

`icon` prop을 사용하여 [Icon](/docs/components/icon)를 표시합니다.

::component-code
---
prettier: true
ignore:
  - title
  - description
props:
  title: 'Heads up!'
  description: 'You can change the primary color in your app config.'
  icon: 'i-lucide-terminal'
---
::

### avatar 이미지

`avatar` prop을 사용하여 [Avatar](/docs/components/avatar)를 표시합니다.

::component-code
---
prettier: true
ignore:
  - title
  - description
props:
  title: 'Heads up!'
  description: 'You can change the primary color in your app config.'
  avatar.src: 'https://github.com/nuxt.png'
---
::

### Color 색상

`color` prop을 사용하여 Alert의 색상을 변경합니다.

::component-code
---
prettier: true
ignore:
  - title
  - description
  - icon
props:
  color: neutral
  title: 'Heads up!'
  description: 'You can change the primary color in your app config.'
  icon: 'i-lucide-terminal'
---
::

### Variant (### Variant)

`variant` prop을 사용하여 Alert의 변형을 변경합니다.

::component-code
---
prettier: true
ignore:
  - title
  - description
  - icon
props:
  color: neutral
  variant: subtle
  title: 'Heads up!'
  description: 'You can change the primary color in your app config.'
  icon: 'i-lucide-terminal'
---
::

### Close 닫기

`close` Prop을 사용하여 [Button](/docs/components/button)를 표시하여 Alert를 해제합니다.

::tip
닫기 버튼을 클릭하면 `update:open` 이벤트가 발생합니다.
::

::component-code
---
prettier: true
ignore:
  - title
  - description
  - close
  - color
  - variant
props:
  title: 'Heads up!'
  description: 'You can change the primary color in your app config.'
  color: neutral
  variant: outline
  close: true
---
::

[Button](/docs/components/button) 구성 요소의 모든 속성을 전달하여 사용자 정의할 수 있습니다.

::component-code
---
prettier: true
ignore:
  - title
  - description
  - close.color
  - close.variant
  - color
  - variant
props:
  title: 'Heads up!'
  description: 'You can change the primary color in your app config.'
  color: neutral
  variant: outline
  close:
    color: primary
    variant: outline
    class: 'rounded-full'
---
::

### Close 아이콘

`close-icon` 소품을 사용하여 닫기 단추 [Icon](/docs/components/icon)를 사용자 정의합니다. 기본값은 `i-lucide-x`입니다.

::component-code
---
prettier: true
ignore:
  - title
  - description
  - close
  - color
  - variant
props:
  title: 'Heads up!'
  description: 'You can change the primary color in your app config.'
  color: neutral
  variant: outline
  close: true
  closeIcon: 'i-lucide-arrow-right'
---
::

::framework-only
#nuxt
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
`ui.icons.close` 키 아래의 `app.config.ts`에서 이 아이콘을 전역적으로 사용자 지정할 수 있습니다.
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
`ui.icons.close` 키 아래의 `vite.config.ts`에서 이 아이콘을 전역적으로 사용자 정의할 수 있습니다.
:::
::

### Actions (### 액션)

`actions` prop을 사용하여 일부 [Button](/docs/components/button) 액션을 Alert에 추가합니다.

::component-code
---
prettier: true
ignore:
  - title
  - actions
  - color
  - variant
props:
  title: 'Heads up!'
  description: 'You can change the primary color in your app config.'
  color: neutral
  variant: outline
  actions:
    - label: Action 1
    - label: Action 2
      color: neutral
      variant: subtle
---
::

### 방향 성

`orientation` prop을 사용하여 Alert의 방향을 변경합니다.

::component-code
---
prettier: true
ignore:
  - title
  - actions
  - color
  - variant
props:
  title: 'Heads up!'
  description: 'You can change the primary color in your app config.'
  color: neutral
  variant: outline
  orientation: horizontal
  actions:
    - label: Action 1
    - label: Action 2
      color: neutral
      variant: subtle
---
::

## examples 예제

### `class` 소품

`class` prop을 사용하여 Alert의 기본 스타일을 재정의합니다.

::component-code
---
prettier: true
ignore:
  - title
  - description
props:
  title: 'Heads up!'
  description: 'You can change the primary color in your app config.'
  class: 'rounded-none'
---
::

### `ui` 소품

`ui` prop을 사용하여 Alert의 슬롯 스타일을 덮어씁니다.

::component-code
---
prettier: true
ignore:
  - ui
  - title
  - description
  - icon
props:
  title: 'Heads up!'
  description: 'You can change the primary color in your app config.'
  icon: i-lucide-rocket
  ui:
    icon: 'size-11'
---
::

## API 사용

### Props (### Props)

:component-props

### 슬롯

:component-slots

### Emits

:component-emits

## Theme 테마

:component-theme

## Changelog 파일

:component-changelog
