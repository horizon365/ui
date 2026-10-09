---
title: proselitismo
description: 'Muestra indicaciones de IA preconstruidas con copia de un solo clic e integración IDE.'
category: components
navigation.title: Prompt
links:
  - label: GitHub también
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/prose/Prompt.vue
---

xph0000xUso

Utilice el componente `prompt` para mostrar un indicador de IA preconstruido que los usuarios pueden copiar en su portapapeles o abrir directamente en su IDE. El prop `description` se muestra como la etiqueta visible, mientras que la ranura predeterminada contiene el texto del indicador que se copia.

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

Utilice el prop `icon` para mostrar un icono al lado de la descripción.

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

### Acciones

Utilice el soporte `actions` para mostrar botones adicionales. El botón `copy` siempre se muestra. Las acciones disponibles son `cursor`, `windsurf` y `claude`.

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

## API (Edición española)

### Props (Edición española)

:component-props{prose}

### Slots

:component-slots{prose}

## Temas

:component-theme{prose}

xph05xChangelog (Edición española)

:component-changelog{prefix="prose"}
