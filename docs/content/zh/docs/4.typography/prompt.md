---
title: ProsePrompt
description: '通过一键复制和IDE集成显示预构建的AI提示。'
category: components
navigation.title: Prompt
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/prose/Prompt.vue
---

## 用法

使用`prompt`组件显示一个预构建的AI提示，用户可以将其复制到剪贴板或直接在IDE中打开。`description`道具显示为可见标签，而默认插槽包含复制的提示文本。

::component-code{slug="prompt" prose}
---
props:
  description: Build a dashboard layout with Nuxt UI.
  class: 'w-full my-0'
hide:
  - class
slots:
  default: |
    You are a Nuxt UI expert. Help me build a dashboard layout with a collapsible sidebar and a sticky top navbar.

    Requirements:
    - Use `UDashboardPanel`, `UDashboardSidebar`, and `UDashboardNavbar`
    - Use semantic color tokens like `bg-elevated` and `text-muted` for theming
    - The sidebar should include navigation links with icons using `UNavigationMenu`
    - The navbar should display a breadcrumb, a search button, and a user dropdown menu
    - The layout must be fully responsive and collapse the sidebar on mobile
---
::

### Icon

使用`icon`道具在描述旁边显示一个图标。

::component-code{slug="prompt" prose}
---
ignore:
  - description
hide:
  - class
props:
  description: Create a form with validation.
  icon: i-lucide-file-pen-line
  class: 'w-full my-0'
slots:
  default: |
    Create a registration form using Nuxt UI with Zod schema validation.

    Requirements:
    - Use `UForm` with a Zod schema for validation
    - Add `UFormField` wrapping each input: name (`UInput`), email (`UInput` type email), role (`USelect` with options Admin, Editor, Viewer)
    - Include a submit `UButton` with loading state
    - Display inline error messages below each field
    - On successful submit, show a `UToast` notification
---
::

### Actions

使用`actions`属性显示其他按钮。`copy`按钮始终显示。可用操作为`cursor`、`windsurf`和`claude`。

::component-code{slug="prompt" prose}
---
ignore:
  - description
  - icon
hide:
  - class
props:
  description: Add a color mode toggle.
  icon: i-lucide-sun-moon
  actions:
    - cursor
    - claude
  class: 'w-full my-0'
slots:
  default: |
    Add a color mode toggle to my Nuxt app.

    Requirements:
    - Use `useColorMode` from `@nuxtjs/color-mode` to manage the current mode
    - Render a `UButton` with `variant="ghost"` that cycles between `light`, `dark`, and `system` on click
    - Update the button icon dynamically: `i-lucide-sun` for light, `i-lucide-moon` for dark, `i-lucide-monitor` for system
    - Add a tooltip using `UTooltip` that shows the current active mode
---
::

## API

### Props

:component-props{prose}

### Slots

:component-slots{prose}

## Theme

:component-theme{prose}

## Changelog

:component-changelog{prefix="prose"}
