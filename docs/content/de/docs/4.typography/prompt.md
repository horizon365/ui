---
title: ProsePrompt
description: 'Zeigen Sie vorgefertigte AI-Eingabeaufforderungen mit One-Click-Kopie und IDE-Integration an.'
category: components
navigation.title: Prompt
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/prose/Prompt.vue
---

## Bearbeiten

Verwenden Sie die `prompt`-Komponente, um eine vorgefertigte KI-Eingabeaufforderung anzuzeigen, die Benutzer in ihre Zwischenablage kopieren oder direkt in ihrer IDE öffnen können. Die `description`-Prop wird als sichtbare Beschriftung angezeigt, während der Standard-Slot den Eingabeaufforderungstext enthält, der kopiert wird.

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

### Icon Bearbeiten

Verwenden Sie die `icon` prop, um ein Symbol neben der Beschreibung anzuzeigen.

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

### Actions Bearbeiten

Verwenden Sie die `actions`-Prop, um zusätzliche Tasten anzuzeigen. Die `copy`-Schaltfläche wird immer angezeigt. Die verfügbaren Aktionen sind `cursor`, `windsurf` und `claude`.

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

## API (englisch)

### Props (englisch)

:component-props{prose}

### Slots Bearbeiten

:component-slots{prose}

## Theme Bearbeiten

:component-theme{prose}

## Changelog (englisch)

:component-changelog{prefix="prose"}
