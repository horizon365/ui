---
description: '빈 상태를 표시하는 구성요소입니다.'
category: data
keywords:
  - no data
  - placeholder
  - zero state
links:
  - label: Github (GitHub)
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Empty.vue
---

## Usage

표시할 내용이 없을 때 빈 구성 요소를 사용하여 자리 표시자 상태를 표시합니다.

::code-preview

:::u-empty
---
icon: i-lucide-file
title: No projects found
description: It looks like you haven't added any projects. Create one to get started.
actions:
  - icon: i-lucide-plus
    label: Create new
  - icon: i-lucide-refresh-cw
    label: Refresh
    color: neutral
    variant: subtle
---
:::

::

### Title 파일

`title` prop 을 사용하여 빈 상태의 제목을 설정합니다.

::component-code
---
props:
  title: No projects found
---
::

### 설명

`description` prop을 사용하여 빈 상태에 대한 설명을 설정합니다.

::component-code
---
prettier: true
ignore:
  - title
props:
  title: No projects found
  description: It looks like you haven't added any projects. Create one to get started.
---
::

### Icon

`icon` prop 을 사용하여 빈 상태의 아이콘을 설정합니다.

::component-code
---
prettier: true
ignore:
  - title
  - description
props:
  icon: i-lucide-file
  title: No projects found
  description: It looks like you haven't added any projects. Create one to get started.
---
::

### Avatar 이미지

`avatar` prop을 사용하여 빈 상태의 아바타를 설정합니다.

::component-code
---
prettier: true
ignore:
  - icon
  - title
  - description
props:
  avatar.src: 'https://github.com/nuxt.png'
  title: No projects found
  description: It looks like you haven't added any projects. Create one to get started.
---
::

### loading: badge{label="4.10+" class="align-text-top"} 로드 중

`loading` 소품을 사용하여 아이콘 대신 로드 아이콘을 표시합니다. 레이아웃은 동일하게 유지되므로 레이아웃을 이동하지 않고도 로드 상태와 빈 상태 사이를 전환할 수 있습니다.

::component-code
---
prettier: true
ignore:
  - icon
  - title
  - description
props:
  icon: i-lucide-file
  loading: true
  title: Loading projects
  description: Please wait while we fetch your projects.
---
::

### Loading 아이콘: badge{label="4.10+" class="align-text-top"}

`loading-icon` 소품을 사용하여 로드 아이콘을 사용자 정의합니다. 기본값은 `i-lucide-loader-circle`입니다.

::component-code
---
prettier: true
ignore:
  - icon
  - title
  - description
  - loading
props:
  icon: i-lucide-file
  loading: true
  loadingIcon: 'i-lucide-loader'
  title: Loading projects
  description: Please wait while we fetch your projects.
---
::

::framework-only
#nuxt
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
`ui.icons.loading` 키 아래의 `app.config.ts`에서 이 아이콘을 전역적으로 사용자 정의할 수 있습니다.
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
`ui.icons.loading` 키 아래의 `vite.config.ts`에서 이 아이콘을 전역적으로 사용자 정의할 수 있습니다.
:::
::

### Actions 작업

`actions` prop를 사용하여 일부 [Button](/docs/components/button) 액션을 빈 상태에 추가합니다.

::component-code
---
prettier: true
ignore:
  - icon
  - title
  - description
  - actions
props:
  icon: i-lucide-file
  title: No projects found
  description: It looks like you haven't added any projects. Create one to get started.
  actions:
    - icon: i-lucide-plus
      label: Create new
    - icon: i-lucide-refresh-cw
      label: Refresh
      color: neutral
      variant: subtle
---
::

### Variant

`variant` prop을 사용하여 빈 상태의 변형을 변경합니다.

::component-code
---
prettier: true
ignore:
  - icon
  - title
  - description
  - actions
props:
  variant: naked
  icon: i-lucide-bell
  title: No notifications
  description: You're all caught up. New notifications will appear here.
  actions:
    - icon: i-lucide-refresh-cw
      label: Refresh
      color: neutral
      variant: subtle
---
::

### Size 크기

`size` prop을 사용하여 빈 상태의 크기를 변경합니다.

::component-code
---
prettier: true
ignore:
  - icon
  - title
  - description
  - actions
props:
  size: xl
  icon: i-lucide-bell
  title: No notifications
  description: You're all caught up. New notifications will appear here.
  actions:
    - icon: i-lucide-refresh-cw
      label: Refresh
      color: neutral
      variant: subtle
---
::

## examples 예제

### With 슬롯 사용

사용 가능한 슬롯을 사용하여 보다 복잡한 빈 상태를 만듭니다.

::component-example
---
collapse: true
name: 'empty-slots-example'
---
::

## API

### Props (### Props)

:component-props

### 슬롯

:component-slots

## Theme 테마

:component-theme

## 변경 로그

:component-changelog
