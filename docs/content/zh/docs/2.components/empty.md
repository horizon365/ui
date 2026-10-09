---
description: '显示空状态的组件。'
category: data
keywords:
  - no data
  - placeholder
  - zero state
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Empty.vue
---

## 用法

使用Empty组件可以在没有要显示的内容时显示占位符状态。

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

### 标题

使用`title`属性设置空状态的标题。

::component-code
---
props:
  title: No projects found
---
::

### 说明

使用`description`属性设置空状态的描述。

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

使用`icon` prop设置空状态的图标。

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

### Avatar

使用`avatar`道具设置头像为空状态。

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

### 加载中：badge{label="4.10+" class="align-text-top"}

使用`loading`道具显示一个加载图标来代替图标。布局保持不变，所以你可以在加载和清空状态之间切换而不会改变布局。

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

### 加载图标：badge{label="4.10+" class="align-text-top"}

使用`loading-icon`道具自定义加载图标. `i-lucide-loader-circle`。

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
您可以在`ui.icons.loading`键下的`app.config.ts`中全局自定义此图标。
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
你可以在你的`vite.config.ts`中的`ui.icons.loading`键下全局自定义这个图标。
:::
::

### Actions

使用`actions`属性向空状态添加一些[Button](/docs/components/button)操作。

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

使用`variant` prop更改空状态的变量。

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

### Size

使用`size`属性来更改空状态的大小。

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

## 示例

### 带插槽

使用可用插槽创建更复杂的空状态。

::component-example
---
collapse: true
name: 'empty-slots-example'
---
::

## API

### Props

:component-props

### Slots

:component-slots

## Theme

:component-theme

## Changelog

:component-changelog
