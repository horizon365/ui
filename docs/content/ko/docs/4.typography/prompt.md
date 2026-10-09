---
title: ProsePrompt
description: '한 번의 클릭 복사 및 IDE 통합을 통해 미리 구축된 AI 프롬프트를 표시합니다.'
category: components
navigation.title: Prompt
links:
  - label: Github (GitHub)
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/prose/Prompt.vue
---

## Usage

`prompt` 구성 요소를 사용하여 사용자가 클립보드에 복사하거나 IDE에서 직접 열 수 있는 미리 빌드된 AI 프롬프트를 표시합니다. `description` 소품은 보이는 레이블로 표시되고 기본 슬롯에는 복사되는 프롬프트 텍스트가 포함됩니다.

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

`icon` Prop을 사용하여 설명 옆에 아이콘을 표시합니다.

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

### Actions 작업

`actions` 소품을 사용하여 추가 단추를 표시합니다. `copy` 단추는 항상 표시됩니다. 사용 가능한 작업은 `cursor`, `windsurf` 및 `claude`입니다.

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

### Props 코드

:component-props{prose}

### Slots

:component-slots{prose}

## Theme 주제

:component-theme{prose}

## Changelog 파일

:component-changelog{prefix="prose"}
