---
title: ProsePrompt
description: 'Geef vooraf gebouwde AI-prompts weer met kopiëren met één klik en IDE-integratie.'
category: components
navigation.title: Prompt
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/prose/Prompt.vue
---

## Gebruik

Gebruik de `prompt`-component om een vooraf gebouwde AI-prompt weer te geven die gebruikers naar hun klembord kunnen kopiëren of rechtstreeks in hun IDE kunnen openen. De `description`-prop wordt weergegeven als de zichtbare
 label, terwijl de standaardsleuf de prompttekst bevat die wordt gekopieerd.

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

### Icoon

Gebruik de `icon` prop om een pictogram naast de beschrijving weer te geven.

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

### Acties

Gebruik de `actions` prop om extra knoppen weer te geven. De `copy` knop wordt altijd weergegeven. De beschikbare acties zijn `cursor`, `windsurf` en `claude`.

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

## Thema

:component-theme{prose}

## Wijzigingsgelog

:component-changelog{prefix="prose"}
