---
title: Navegación Menú
description: Una lista de enlaces que se pueden mostrar horizontal o verticalmente.
category: navigation
keywords:
  - navbar
  - menubar
  - sidebar navigation
links:
  - label: Navegación Menú
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/navigation-menu
  - label: GitHub también
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/NavigationMenu.vue
---

xph0000xUso

Utilice el componente NavigationMenu para mostrar una lista de enlaces horizontal o verticalmente.

::component-code
---
collapse: true
hide:
  - class
ignore:
  - items
external:
  - items
externalTypes:
  - NavigationMenuItem[]
props:
  items:
    - label: Guide
      icon: i-lucide-book-open
      to: /docs/getting-started
      children:
        - label: Introduction
          description: Fully styled and customizable components for Nuxt.
          icon: i-lucide-house
        - label: Installation
          description: Learn how to install and configure Nuxt UI in your application.
          icon: i-lucide-cloud-download
        - label: 'Icons'
          icon: 'i-lucide-smile'
          description: 'You have nothing to do, @nuxt/icon will handle it automatically.'
        - label: 'Colors'
          icon: 'i-lucide-swatch-book'
          description: 'Choose a primary and a neutral color from your Tailwind CSS theme.'
        - label: 'Theme'
          icon: 'i-lucide-cog'
          description: 'You can customize components by using the `class` / `ui` props or in your app.config.ts.'
    - label: Composables
      icon: i-lucide-database
      to: /docs/composables
      children:
        - label: defineShortcuts
          icon: i-lucide-file-text
          description: Define shortcuts for your application.
          to: /docs/composables/define-shortcuts
        - label: useOverlay
          icon: i-lucide-file-text
          description: Display a modal/slideover within your application.
          to: /docs/composables/use-overlay
        - label: useToast
          icon: i-lucide-file-text
          description: Display a toast within your application.
          to: /docs/composables/use-toast
    - label: Components
      icon: i-lucide-box
      to: /docs/components
      active: true
      children:
        - label: Link
          icon: i-lucide-file-text
          description: Use NuxtLink with superpowers.
          to: /docs/components/link
        - label: Modal
          icon: i-lucide-file-text
          description: Display a modal within your application.
          to: /docs/components/modal
        - label: NavigationMenu
          icon: i-lucide-file-text
          description: Display a list of links.
          to: /docs/components/navigation-menu
        - label: Pagination
          icon: i-lucide-file-text
          description: Display a list of pages.
          to: /docs/components/pagination
        - label: Popover
          icon: i-lucide-file-text
          description: Display a non-modal dialog that floats around a trigger element.
          to: /docs/components/popover
        - label: Progress
          icon: i-lucide-file-text
          description: Show a horizontal bar to indicate task progression.
          to: /docs/components/progress
    - label: GitHub
      icon: i-simple-icons-github
      badge: 6k
      to: https://github.com/nuxt/ui
      target: _blank
    - label: Help
      icon: i-lucide-circle-help
      disabled: true
  class: 'w-full justify-center'
---
::

### Artículos

Utilice el prop `items` como una matriz de objetos con las siguientes propiedades:

xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
- xx`badge?: string | number | BadgeProps`xx{lang="ts-type"}
- x[x`chip?: boolean | ChipProps`x{lang="ts-type"}x](x#with-chip-in-itemsx)
- x[x`tooltip?: TooltipProps`x{lang="ts-type"}x](x#with-tooltip-in-itemsx)
- x[x`popover?: PopoverProps`x{lang="ts-type"}](x#with-popover-in-itemsx)
- x`trailingIcon?: string`x{lang="ts-type"}
- x`type?: 'label' | 'trigger' | 'link'`x{lang="ts-type"}
- x`defaultOpen?: boolean`x{lang="ts-type"} (Edición española)
- x`open?: boolean`x{lang="ts-type"}
- x`value?: string`x{lang="ts-type"}
- x`disabled?: boolean`x{lang="ts-type"}
- x[x`slot?: string`x{lang="ts-type"}x](#with-custom-slotx)
- x`onSelect?: (e: Event) => void`x{lang="ts-type"} (Edición española)
- x`children?: NavigationMenuChildItem[]`x{lang="ts-type"} (Edición española)
- x`class?: any`x{lang="ts-type"}
- x`ui?: { linkLeadingAvatarSize?: ClassNameValue, linkLeadingAvatar?: ClassNameValue, linkLeadingIcon?: ClassNameValue, linkLeadingChipSize?: ClassNameValue, linkLabel?: ClassNameValue, linkLabelExternalIcon?: ClassNameValue, linkTrailing?: ClassNameValue, linkTrailingBadgeSize?: ClassNameValue, linkTrailingBadge?: ClassNameValue, linkTrailingIcon?: ClassNameValue, label?: ClassNameValue, link?: ClassNameValue, content?: ClassNameValue, childList?: ClassNameValue, childLabel?: ClassNameValue, childItem?: ClassNameValue, childLink?: ClassNameValue, childLinkIcon?: ClassNameValue, childLinkWrapper?: ClassNameValue, childLinkLabel?: ClassNameValue, childLinkLabelExternalIcon?: ClassNameValue, childLinkDescription?: ClassNameValue }`x{lang="ts-type"}

Puede pasar cualquier propiedad del componente [Link](/docs/components/link#props) como `to`, `target`, etc.

::component-code
---
collapse: true
ignore:
  - items
  - class
external:
  - items
externalTypes:
  - NavigationMenuItem[]
props:
  items:
    - label: Guide
      icon: i-lucide-book-open
      to: /docs/getting-started
      children:
        - label: Introduction
          description: Fully styled and customizable components for Nuxt.
          icon: i-lucide-house
        - label: Installation
          description: Learn how to install and configure Nuxt UI in your application.
          icon: i-lucide-cloud-download
        - label: 'Icons'
          icon: 'i-lucide-smile'
          description: 'You have nothing to do, @nuxt/icon will handle it automatically.'
        - label: 'Colors'
          icon: 'i-lucide-swatch-book'
          description: 'Choose a primary and a neutral color from your Tailwind CSS theme.'
        - label: 'Theme'
          icon: 'i-lucide-cog'
          description: 'You can customize components by using the `class` / `ui` props or in your app.config.ts.'
    - label: Composables
      icon: i-lucide-database
      to: /docs/composables
      children:
        - label: defineShortcuts
          icon: i-lucide-file-text
          description: Define shortcuts for your application.
          to: /docs/composables/define-shortcuts
        - label: useOverlay
          icon: i-lucide-file-text
          description: Display a modal/slideover within your application.
          to: /docs/composables/use-overlay
        - label: useToast
          icon: i-lucide-file-text
          description: Display a toast within your application.
          to: /docs/composables/use-toast
    - label: Components
      icon: i-lucide-box
      to: /docs/components
      active: true
      children:
        - label: Link
          icon: i-lucide-file-text
          description: Use NuxtLink with superpowers.
          to: /docs/components/link
        - label: Modal
          icon: i-lucide-file-text
          description: Display a modal within your application.
          to: /docs/components/modal
        - label: NavigationMenu
          icon: i-lucide-file-text
          description: Display a list of links.
          to: /docs/components/navigation-menu
        - label: Pagination
          icon: i-lucide-file-text
          description: Display a list of pages.
          to: /docs/components/pagination
        - label: Popover
          icon: i-lucide-file-text
          description: Display a non-modal dialog that floats around a trigger element.
          to: /docs/components/popover
        - label: Progress
          icon: i-lucide-file-text
          description: Show a horizontal bar to indicate task progression.
          to: /docs/components/progress
    - label: GitHub
      icon: i-simple-icons-github
      badge: 6k
      to: https://github.com/nuxt/ui
      target: _blank
    - label: Help
      icon: i-lucide-circle-help
      disabled: true
  class: 'w-full justify-center'
---
::

::note
También puede pasar una matriz de matrices al soporte `items` para mostrar grupos de elementos.
::

::tip
Cada elemento puede tomar una matriz `children` de objetos con las siguientes propiedades para crear submenús:

- x`label: string` (Edición española)
- x`description?: string` (Edición española)
- x`icon?: string` (Edición española)
- x`onSelect?: (e: Event) => void`
- x`class?: any`

::

### Orientación

Utilice el prop `orientation` para cambiar la orientación del menú de navegación.

::note
Cuando la orientación es `vertical`, se utiliza un componente [Accordion](/docs/components/accordion) para mostrar cada grupo. Puede controlar el estado abierto de cada elemento mediante las propiedades `open` y `defaultOpen` y cambiar el comportamiento mediante los accesorios [`collapsible`ph274/docs/components/accordion#collapsible) y xph2777x`type`](](/docs/components/accordion#multiple).
::

::note
Cuando la orientación es `vertical` y el menú no es `collapsed`, los elementos secundarios se representan recursivamente como elementos, por lo que `ui.link` los estiliza. `ui.childLink` solo se aplica al `content` mostrado en la orientación `horizontal` y al [popover](#with-popover-in-items) cuando `collapsed`.
::

::component-code
---
collapse: true
ignore:
  - items
  - class
external:
  - items
externalTypes:
  - NavigationMenuItem[][]
props:
  orientation: 'vertical'
  items:
    - - label: Links
        type: 'label'
      - label: Guide
        icon: i-lucide-book-open
        children:
          - label: Introduction
            description: Fully styled and customizable components for Nuxt.
            icon: i-lucide-house
          - label: Installation
            description: Learn how to install and configure Nuxt UI in your application.
            icon: i-lucide-cloud-download
          - label: 'Icons'
            icon: 'i-lucide-smile'
            description: 'You have nothing to do, @nuxt/icon will handle it automatically.'
          - label: 'Colors'
            icon: 'i-lucide-swatch-book'
            description: 'Choose a primary and a neutral color from your Tailwind CSS theme.'
          - label: 'Theme'
            icon: 'i-lucide-cog'
            description: 'You can customize components by using the `class` / `ui` props or in your app.config.ts.'
      - label: Composables
        icon: i-lucide-database
        children:
          - label: defineShortcuts
            icon: i-lucide-file-text
            description: Define shortcuts for your application.
            to: /docs/composables/define-shortcuts
          - label: useOverlay
            icon: i-lucide-file-text
            description: Display a modal/slideover within your application.
            to: /docs/composables/use-overlay
          - label: useToast
            icon: i-lucide-file-text
            description: Display a toast within your application.
            to: /docs/composables/use-toast
      - label: Components
        icon: i-lucide-box
        to: /docs/components
        type: 'trigger'
        active: true
        defaultOpen: true
        children:
          - label: Link
            icon: i-lucide-file-text
            description: Use NuxtLink with superpowers.
            to: /docs/components/link
          - label: Modal
            icon: i-lucide-file-text
            description: Display a modal within your application.
            to: /docs/components/modal
          - label: NavigationMenu
            icon: i-lucide-file-text
            description: Display a list of links.
            to: /docs/components/navigation-menu
          - label: Pagination
            icon: i-lucide-file-text
            description: Display a list of pages.
            to: /docs/components/pagination
          - label: Popover
            icon: i-lucide-file-text
            description: Display a non-modal dialog that floats around a trigger element.
            to: /docs/components/popover
          - label: Progress
            icon: i-lucide-file-text
            description: Show a horizontal bar to indicate task progression.
            to: /docs/components/progress
    - - label: GitHub
        icon: i-simple-icons-github
        badge: 6k
        to: https://github.com/nuxt/ui
        target: _blank
      - label: Help
        icon: i-lucide-circle-help
        disabled: true
  class: 'data-[orientation=vertical]:w-48'
---
::

::note
Los grupos estarán espaciados cuando la orientación sea `horizontal` y separados cuando la orientación sea `vertical`.
::

### Colapsado

En la orientación `vertical`, utilice el prop `collapsed` para contraer el menú de navegación, esto puede ser útil en una barra lateral, por ejemplo.

::note
Puede utilizar los accesorios [`tooltip`](#with-tooltip-in-items) y [`popover`](#with-popover-in-items) para mostrar más información sobre los elementos colapsados.
::

::component-code
---
collapse: true
ignore:
  - items
  - orientation
  - class
external:
  - items
externalTypes:
  - NavigationMenuItem[][]
items:
  tooltip:
    - true
    - false
  popover:
    - true
    - false
props:
  collapsed: true
  tooltip: false
  popover: false
  orientation: 'vertical'
  items:
    - - label: Links
        type: 'label'
      - label: Guide
        icon: i-lucide-book-open
        children:
          - label: Introduction
            description: Fully styled and customizable components for Nuxt.
            icon: i-lucide-house
          - label: Installation
            description: Learn how to install and configure Nuxt UI in your application.
            icon: i-lucide-cloud-download
          - label: 'Icons'
            icon: 'i-lucide-smile'
            description: 'You have nothing to do, @nuxt/icon will handle it automatically.'
          - label: 'Colors'
            icon: 'i-lucide-swatch-book'
            description: 'Choose a primary and a neutral color from your Tailwind CSS theme.'
          - label: 'Theme'
            icon: 'i-lucide-cog'
            description: 'You can customize components by using the `class` / `ui` props or in your app.config.ts.'
      - label: Composables
        icon: i-lucide-database
        children:
          - label: defineShortcuts
            icon: i-lucide-file-text
            description: Define shortcuts for your application.
            to: /docs/composables/define-shortcuts
          - label: useOverlay
            icon: i-lucide-file-text
            description: Display a modal/slideover within your application.
            to: /docs/composables/use-overlay
          - label: useToast
            icon: i-lucide-file-text
            description: Display a toast within your application.
            to: /docs/composables/use-toast
      - label: Components
        icon: i-lucide-box
        to: /docs/components
        active: true
        children:
          - label: Link
            icon: i-lucide-file-text
            description: Use NuxtLink with superpowers.
            to: /docs/components/link
          - label: Modal
            icon: i-lucide-file-text
            description: Display a modal within your application.
            to: /docs/components/modal
          - label: NavigationMenu
            icon: i-lucide-file-text
            description: Display a list of links.
            to: /docs/components/navigation-menu
          - label: Pagination
            icon: i-lucide-file-text
            description: Display a list of pages.
            to: /docs/components/pagination
          - label: Popover
            icon: i-lucide-file-text
            description: Display a non-modal dialog that floats around a trigger element.
            to: /docs/components/popover
          - label: Progress
            icon: i-lucide-file-text
            description: Show a horizontal bar to indicate task progression.
            to: /docs/components/progress
    - - label: GitHub
        icon: i-simple-icons-github
        badge: 6k
        to: https://github.com/nuxt/ui
        target: _blank
      - label: Help
        icon: i-lucide-circle-help
        disabled: true
---
::

### Destacado

Utilice el accesorio `highlight` para mostrar un borde resaltado para el elemento activo.

Utilice el prop `highlight-color` para cambiar el color del borde. Por defecto es el prop `color`.

::component-code
---
collapse: true
prettier: true
ignore:
  - items
  - class
external:
  - items
externalTypes:
  - NavigationMenuItem[][]
props:
  highlight: true
  highlightColor: 'primary'
  orientation: 'horizontal'
  items:
    - - label: Guide
        icon: i-lucide-book-open
        children:
          - label: Introduction
            description: Fully styled and customizable components for Nuxt.
            icon: i-lucide-house
          - label: Installation
            description: Learn how to install and configure Nuxt UI in your application.
            icon: i-lucide-cloud-download
          - label: 'Icons'
            icon: 'i-lucide-smile'
            description: 'You have nothing to do, @nuxt/icon will handle it automatically.'
          - label: 'Colors'
            icon: 'i-lucide-swatch-book'
            description: 'Choose a primary and a neutral color from your Tailwind CSS theme.'
          - label: 'Theme'
            icon: 'i-lucide-cog'
            description: 'You can customize components by using the `class` / `ui` props or in your app.config.ts.'
      - label: Composables
        icon: i-lucide-database
        children:
          - label: defineShortcuts
            icon: i-lucide-file-text
            description: Define shortcuts for your application.
            to: /docs/composables/define-shortcuts
          - label: useOverlay
            icon: i-lucide-file-text
            description: Display a modal/slideover within your application.
            to: /docs/composables/use-overlay
          - label: useToast
            icon: i-lucide-file-text
            description: Display a toast within your application.
            to: /docs/composables/use-toast
      - label: Components
        icon: i-lucide-box
        to: /docs/components
        active: true
        defaultOpen: true
        children:
          - label: Link
            icon: i-lucide-file-text
            description: Use NuxtLink with superpowers.
            to: /docs/components/link
          - label: Modal
            icon: i-lucide-file-text
            description: Display a modal within your application.
            to: /docs/components/modal
          - label: NavigationMenu
            icon: i-lucide-file-text
            description: Display a list of links.
            to: /docs/components/navigation-menu
          - label: Pagination
            icon: i-lucide-file-text
            description: Display a list of pages.
            to: /docs/components/pagination
          - label: Popover
            icon: i-lucide-file-text
            description: Display a non-modal dialog that floats around a trigger element.
            to: /docs/components/popover
          - label: Progress
            icon: i-lucide-file-text
            description: Show a horizontal bar to indicate task progression.
            to: /docs/components/progress
    - - label: GitHub
        icon: i-simple-icons-github
        badge: 6k
        to: https://github.com/nuxt/ui
        target: _blank
      - label: Help
        icon: i-lucide-circle-help
        disabled: true
  class: 'data-[orientation=horizontal]:border-b border-default data-[orientation=horizontal]:w-full data-[orientation=vertical]:w-48'
---
::

::note
En este ejemplo, la clase `border-b` se aplica para mostrar un borde en la orientación `horizontal`, esto no se hace de forma predeterminada para que pueda tener una pizarra limpia para trabajar.
::

::caution
En la orientación `vertical`, el soporte `highlight` solo resalta el borde de los niños activos.
::

### Color (Edición)

Utilice el prop `color` para cambiar el color del menú de navegación.

::component-code
---
collapse: true
ignore:
  - items
  - class
external:
  - items
externalTypes:
  - NavigationMenuItem[][]
props:
  color: neutral
  items:
    - - label: Guide
        icon: i-lucide-book-open
        to: /docs/getting-started
      - label: Composables
        icon: i-lucide-database
        to: /docs/composables
      - label: Components
        icon: i-lucide-box
        to: /docs/components
        active: true
    - - label: GitHub
        icon: i-simple-icons-github
        badge: 6k
        to: https://github.com/nuxt/ui
        target: _blank
  class: 'w-full'
---
::

### Variant (Edición española)

Utilice el prop `variant` para cambiar la variante del menú de navegación.

::component-code
---
collapse: true
ignore:
  - items
  - class
external:
  - items
externalTypes:
  - NavigationMenuItem[][]
props:
  color: neutral
  variant: link
  highlight: false
  items:
    - - label: Guide
        icon: i-lucide-book-open
        to: /docs/getting-started
      - label: Composables
        icon: i-lucide-database
        to: /docs/composables
      - label: Components
        icon: i-lucide-box
        to: /docs/components
        active: true
    - - label: GitHub
        icon: i-simple-icons-github
        badge: 6k
        to: https://github.com/nuxt/ui
        target: _blank
  class: 'w-full'
---
::

::note
El prop `highlight` cambia el estilo de elemento activo variante `pill`. Pruébalo para ver la diferencia.
::

XPH653xTrailing Icono de diseño

Utilice el prop `trailing-icon` para personalizar el final [Icon](/docs/components/icon) de cada elemento. Por defecto `i-lucide-chevron-down`. Este icono sólo se muestra cuando un elemento tiene hijos.

::tip
También puede establecer un icono para un elemento específico mediante la propiedad `trailingIcon` en el objeto elemento.
::

::component-code
---
collapse: true
ignore:
  - items
  - class
external:
  - items
externalTypes:
  - NavigationMenuItem[]
props:
  trailingIcon: 'i-lucide-arrow-down'
  items:
    - label: Guide
      icon: i-lucide-book-open
      to: /docs/getting-started
      children:
        - label: Introduction
          description: Fully styled and customizable components for Nuxt.
          icon: i-lucide-house
        - label: Installation
          description: Learn how to install and configure Nuxt UI in your application.
          icon: i-lucide-cloud-download
        - label: 'Icons'
          icon: 'i-lucide-smile'
          description: 'You have nothing to do, @nuxt/icon will handle it automatically.'
        - label: 'Colors'
          icon: 'i-lucide-swatch-book'
          description: 'Choose a primary and a neutral color from your Tailwind CSS theme.'
        - label: 'Theme'
          icon: 'i-lucide-cog'
          description: 'You can customize components by using the `class` / `ui` props or in your app.config.ts.'
    - label: Composables
      icon: i-lucide-database
      to: /docs/composables
      children:
        - label: defineShortcuts
          icon: i-lucide-file-text
          description: Define shortcuts for your application.
          to: /docs/composables/define-shortcuts
        - label: useOverlay
          icon: i-lucide-file-text
          description: Display a modal/slideover within your application.
          to: /docs/composables/use-overlay
        - label: useToast
          icon: i-lucide-file-text
          description: Display a toast within your application.
          to: /docs/composables/use-toast
    - label: Components
      icon: i-lucide-box
      to: /docs/components
      active: true
      children:
        - label: Link
          icon: i-lucide-file-text
          description: Use NuxtLink with superpowers.
          to: /docs/components/link
        - label: Modal
          icon: i-lucide-file-text
          description: Display a modal within your application.
          to: /docs/components/modal
        - label: NavigationMenu
          icon: i-lucide-file-text
          description: Display a list of links.
          to: /docs/components/navigation-menu
        - label: Pagination
          icon: i-lucide-file-text
          description: Display a list of pages.
          to: /docs/components/pagination
        - label: Popover
          icon: i-lucide-file-text
          description: Display a non-modal dialog that floats around a trigger element.
          to: /docs/components/popover
        - label: Progress
          icon: i-lucide-file-text
          description: Show a horizontal bar to indicate task progression.
          to: /docs/components/progress
  class: 'w-full justify-center'
---
::

::framework-only
#nuxt
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
Puede personalizar este icono globalmente en su `app.config.ts` bajo la tecla `ui.icons.chevronDown`.
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
Puede personalizar este icono globalmente en su `vite.config.ts` bajo la tecla `ui.icons.chevronDown`.
:::
::

### Flecha

Utilice el accesorio `arrow` para mostrar una flecha en el contenido del menú de navegación cuando los elementos tienen hijos.

::component-code
---
collapse: true
ignore:
  - items
  - arrow
  - class
external:
  - items
externalTypes:
  - NavigationMenuItem[]
props:
  arrow: true
  items:
    - label: Guide
      icon: i-lucide-book-open
      to: /docs/getting-started
      children:
        - label: Introduction
          description: Fully styled and customizable components for Nuxt.
          icon: i-lucide-house
        - label: Installation
          description: Learn how to install and configure Nuxt UI in your application.
          icon: i-lucide-cloud-download
        - label: 'Icons'
          icon: 'i-lucide-smile'
          description: 'You have nothing to do, @nuxt/icon will handle it automatically.'
        - label: 'Colors'
          icon: 'i-lucide-swatch-book'
          description: 'Choose a primary and a neutral color from your Tailwind CSS theme.'
        - label: 'Theme'
          icon: 'i-lucide-cog'
          description: 'You can customize components by using the `class` / `ui` props or in your app.config.ts.'
    - label: Composables
      icon: i-lucide-database
      to: /docs/composables
      children:
        - label: defineShortcuts
          icon: i-lucide-file-text
          description: Define shortcuts for your application.
          to: /docs/composables/define-shortcuts
        - label: useOverlay
          icon: i-lucide-file-text
          description: Display a modal/slideover within your application.
          to: /docs/composables/use-overlay
        - label: useToast
          icon: i-lucide-file-text
          description: Display a toast within your application.
          to: /docs/composables/use-toast
    - label: Components
      icon: i-lucide-box
      to: /docs/components
      active: true
      children:
        - label: Link
          icon: i-lucide-file-text
          description: Use NuxtLink with superpowers.
          to: /docs/components/link
        - label: Modal
          icon: i-lucide-file-text
          description: Display a modal within your application.
          to: /docs/components/modal
        - label: NavigationMenu
          icon: i-lucide-file-text
          description: Display a list of links.
          to: /docs/components/navigation-menu
        - label: Pagination
          icon: i-lucide-file-text
          description: Display a list of pages.
          to: /docs/components/pagination
        - label: Popover
          icon: i-lucide-file-text
          description: Display a non-modal dialog that floats around a trigger element.
          to: /docs/components/popover
        - label: Progress
          icon: i-lucide-file-text
          description: Show a horizontal bar to indicate task progression.
          to: /docs/components/progress
  class: 'w-full justify-center'
---
::

::note
La flecha está animada para seguir el elemento activo.
::

### Orientación de contenido

Utilice el accesorio `content-orientation` para cambiar la orientación del contenido.

::warning
Este accesorio solo funciona cuando `orientation` es `horizontal`.
::

::component-code
---
collapse: true
ignore:
  - items
  - arrow
  - class
external:
  - items
externalTypes:
  - NavigationMenuItem[]
props:
  arrow: true
  contentOrientation: 'vertical'
  items:
    - label: Guide
      icon: i-lucide-book-open
      to: /docs/getting-started
      children:
        - label: Introduction
          description: Fully styled and customizable components for Nuxt.
          icon: i-lucide-house
        - label: Installation
          description: Learn how to install and configure Nuxt UI in your application.
          icon: i-lucide-cloud-download
        - label: 'Icons'
          icon: 'i-lucide-smile'
          description: 'You have nothing to do, @nuxt/icon will handle it automatically.'
    - label: Composables
      icon: i-lucide-database
      to: /docs/composables
      children:
        - label: defineShortcuts
          icon: i-lucide-file-text
          description: Define shortcuts for your application.
          to: /docs/composables/define-shortcuts
        - label: useOverlay
          icon: i-lucide-file-text
          description: Display a modal/slideover within your application.
          to: /docs/composables/use-overlay
        - label: useToast
          icon: i-lucide-file-text
          description: Display a toast within your application.
          to: /docs/composables/use-toast
    - label: Components
      icon: i-lucide-box
      to: /docs/components
      active: true
      children:
        - label: Link
          icon: i-lucide-file-text
          description: Use NuxtLink with superpowers.
          to: /docs/components/link
        - label: Modal
          icon: i-lucide-file-text
          description: Display a modal within your application.
          to: /docs/components/modal
        - label: NavigationMenu
          icon: i-lucide-file-text
          description: Display a list of links.
          to: /docs/components/navigation-menu
        - label: Pagination
          icon: i-lucide-file-text
          description: Display a list of pages.
          to: /docs/components/pagination
  class: 'w-full justify-center'
---
::

### Unmount (Edición española)

Utilice el accesorio `unmount-on-hide` para controlar el comportamiento de desmontaje del contenido.

::component-code
---
collapse: true
ignore:
  - items
  - arrow
  - class
external:
  - items
externalTypes:
  - NavigationMenuItem[]
props:
  unmountOnHide: false
  items:
    - label: Guide
      icon: i-lucide-book-open
      to: /docs/getting-started
      children:
        - label: Introduction
          description: Fully styled and customizable components for Nuxt.
          icon: i-lucide-house
        - label: Installation
          description: Learn how to install and configure Nuxt UI in your application.
          icon: i-lucide-cloud-download
        - label: 'Icons'
          icon: 'i-lucide-smile'
          description: 'You have nothing to do, @nuxt/icon will handle it automatically.'
        - label: 'Colors'
          icon: 'i-lucide-swatch-book'
          description: 'Choose a primary and a neutral color from your Tailwind CSS theme.'
        - label: 'Theme'
          icon: 'i-lucide-cog'
          description: 'You can customize components by using the `class` / `ui` props or in your app.config.ts.'
    - label: Composables
      icon: i-lucide-database
      to: /docs/composables
      children:
        - label: defineShortcuts
          icon: i-lucide-file-text
          description: Define shortcuts for your application.
          to: /docs/composables/define-shortcuts
        - label: useOverlay
          icon: i-lucide-file-text
          description: Display a modal/slideover within your application.
          to: /docs/composables/use-overlay
        - label: useToast
          icon: i-lucide-file-text
          description: Display a toast within your application.
          to: /docs/composables/use-toast
    - label: Components
      icon: i-lucide-box
      to: /docs/components
      active: true
      children:
        - label: Link
          icon: i-lucide-file-text
          description: Use NuxtLink with superpowers.
          to: /docs/components/link
        - label: Modal
          icon: i-lucide-file-text
          description: Display a modal within your application.
          to: /docs/components/modal
        - label: NavigationMenu
          icon: i-lucide-file-text
          description: Display a list of links.
          to: /docs/components/navigation-menu
        - label: Pagination
          icon: i-lucide-file-text
          description: Display a list of pages.
          to: /docs/components/pagination
        - label: Popover
          icon: i-lucide-file-text
          description: Display a non-modal dialog that floats around a trigger element.
          to: /docs/components/popover
        - label: Progress
          icon: i-lucide-file-text
          description: Show a horizontal bar to indicate task progression.
          to: /docs/components/progress
  class: 'w-full justify-center'
---
::

::note
Puede inspeccionar el DOM para ver el contenido de cada elemento que se representa.
::

## Ejemplos

### Control elemento activo

Puede controlar los elementos activos utilizando la directiva `default-value` o la directiva `v-model` con la directiva `value` del elemento. Si no se proporciona `value`, el valor predeterminado es `item-${index}` para elementos de nivel superior o `item-${level}-${index}` para elementos anidados.

::component-example
---
collapse: true
name: 'navigation-menu-model-value-example'
---
::

::tip
Utilice el accesorio `value-key` para cambiar la clave utilizada para hacer coincidir los elementos cuando se proporciona un `v-model` o `default-value`.
::

::note
En este ejemplo, aprovechando [`defineShortcuts`](/docs/composables/define-shortcuts), puede cambiar el elemento activo pulsando: kbd{value="1"},: kbd{value="2"} o: kbd{value="3"}.
::

### With tooltip en los elementos

Cuando la orientación es `vertical` y el menú es `collapsed`, puede configurar el prop `tooltip` en `true` para mostrar un [Tooltip](/docs/components/tooltip) alrededor de los elementos con su etiqueta, pero también puede usar la propiedad `tooltip` en cada elemento para anular la información sobre herramientas predeterminada. Puede utilizar la propiedad `tooltip` en cada elemento para mostrar un [Tooltip](/docs/components/tooltip) alrededor de los elementos.

::note
La propiedad `tooltip` de un elemento siempre mostrará una información sobre herramientas, independientemente de la prop.
::

Puede pasar cualquier propiedad del componente [Tooltip](/docs/components/tooltip) de forma global o en cada elemento.

::component-code
---
collapse: true
ignore:
  - items
  - class
external:
  - items
externalTypes:
  - NavigationMenuItem[][]
items:
  tooltip:
    - true
    - false
props:
  tooltip: true
  collapsed: true
  orientation: 'vertical'
  items:
    - - label: Links
        type: 'label'
      - label: Guide
        icon: i-lucide-book-open
        children:
          - label: Introduction
            description: Fully styled and customizable components for Nuxt.
            icon: i-lucide-house
          - label: Installation
            description: Learn how to install and configure Nuxt UI in your application.
            icon: i-lucide-cloud-download
          - label: 'Icons'
            icon: 'i-lucide-smile'
            description: 'You have nothing to do, @nuxt/icon will handle it automatically.'
          - label: 'Colors'
            icon: 'i-lucide-swatch-book'
            description: 'Choose a primary and a neutral color from your Tailwind CSS theme.'
          - label: 'Theme'
            icon: 'i-lucide-cog'
            description: 'You can customize components by using the `class` / `ui` props or in your app.config.ts.'
      - label: Composables
        icon: i-lucide-database
        children:
          - label: defineShortcuts
            icon: i-lucide-file-text
            description: Define shortcuts for your application.
            to: /docs/composables/define-shortcuts
          - label: useOverlay
            icon: i-lucide-file-text
            description: Display a modal/slideover within your application.
            to: /docs/composables/use-overlay
          - label: useToast
            icon: i-lucide-file-text
            description: Display a toast within your application.
            to: /docs/composables/use-toast
      - label: Components
        icon: i-lucide-box
        to: /docs/components
        active: true
        children:
          - label: Link
            icon: i-lucide-file-text
            description: Use NuxtLink with superpowers.
            to: /docs/components/link
          - label: Modal
            icon: i-lucide-file-text
            description: Display a modal within your application.
            to: /docs/components/modal
          - label: NavigationMenu
            icon: i-lucide-file-text
            description: Display a list of links.
            to: /docs/components/navigation-menu
          - label: Pagination
            icon: i-lucide-file-text
            description: Display a list of pages.
            to: /docs/components/pagination
          - label: Popover
            icon: i-lucide-file-text
            description: Display a non-modal dialog that floats around a trigger element.
            to: /docs/components/popover
          - label: Progress
            icon: i-lucide-file-text
            description: Show a horizontal bar to indicate task progression.
            to: /docs/components/progress
    - - label: GitHub
        icon: i-simple-icons-github
        badge: 6k
        to: https://github.com/nuxt/ui
        target: _blank
        tooltip:
          text: 'Open on GitHub'
          kbds:
            - 6k
      - label: Help
        icon: i-lucide-circle-help
        disabled: true
---
::

### Con popover en artículos

Cuando la orientación es `vertical` y el menú es `collapsed`, puede configurar el prop `popover` en `true` para mostrar un [Popover](x/docs/components/popover) alrededor de los elementos con sus hijos, pero también puede usar la propiedad `popover` en cada elemento para anular el popover predeterminado.

::note
La propiedad `popover` de un elemento siempre mostrará un popover independientemente del prop global `popover`.
::

Puede pasar cualquier propiedad del componente [Popover](/docs/components/popover) globalmente o en cada elemento.

::component-code
---
collapse: true
ignore:
  - items
  - orientation
  - class
external:
  - items
externalTypes:
  - NavigationMenuItem[][]
items:
  popover:
    - true
    - false
props:
  popover: true
  collapsed: true
  orientation: 'vertical'
  items:
    - - label: Links
        type: 'label'
      - label: Guide
        icon: i-lucide-book-open
        children:
          - label: Introduction
            description: Fully styled and customizable components for Nuxt.
            icon: i-lucide-house
          - label: Installation
            description: Learn how to install and configure Nuxt UI in your application.
            icon: i-lucide-cloud-download
          - label: 'Icons'
            icon: 'i-lucide-smile'
            description: 'You have nothing to do, @nuxt/icon will handle it automatically.'
          - label: 'Colors'
            icon: 'i-lucide-swatch-book'
            description: 'Choose a primary and a neutral color from your Tailwind CSS theme.'
          - label: 'Theme'
            icon: 'i-lucide-cog'
            description: 'You can customize components by using the `class` / `ui` props or in your app.config.ts.'
      - label: Composables
        icon: i-lucide-database
        popover:
          mode: 'click'
        children:
          - label: defineShortcuts
            icon: i-lucide-file-text
            description: Define shortcuts for your application.
            to: /docs/composables/define-shortcuts
          - label: useOverlay
            icon: i-lucide-file-text
            description: Display a modal/slideover within your application.
            to: /docs/composables/use-overlay
          - label: useToast
            icon: i-lucide-file-text
            description: Display a toast within your application.
            to: /docs/composables/use-toast
      - label: Components
        icon: i-lucide-box
        to: /docs/components
        active: true
        children:
          - label: Link
            icon: i-lucide-file-text
            description: Use NuxtLink with superpowers.
            to: /docs/components/link
          - label: Modal
            icon: i-lucide-file-text
            description: Display a modal within your application.
            to: /docs/components/modal
          - label: NavigationMenu
            icon: i-lucide-file-text
            description: Display a list of links.
            to: /docs/components/navigation-menu
          - label: Pagination
            icon: i-lucide-file-text
            description: Display a list of pages.
            to: /docs/components/pagination
          - label: Popover
            icon: i-lucide-file-text
            description: Display a non-modal dialog that floats around a trigger element.
            to: /docs/components/popover
          - label: Progress
            icon: i-lucide-file-text
            description: Show a horizontal bar to indicate task progression.
            to: /docs/components/progress
    - - label: GitHub
        icon: i-simple-icons-github
        badge: 6k
        to: https://github.com/nuxt/ui
        target: _blank
        tooltip:
          text: 'Open on GitHub'
          kbds:
            - 6k
      - label: Help
        icon: i-lucide-circle-help
        disabled: true
---
::

::tip{to="#with-content-slot"}
Puede utilizar la ranura `#content` para personalizar el contenido del popover en la orientación `vertical`.
::

### Con chip en los artículos: badge{label="4.5+" class="align-text-top"}

Utilice la propiedad `chip` para mostrar un [Chip](/docs/components/chip) alrededor del icono de los elementos, puede pasar cualquiera de sus accesorios.

::component-code
---
collapse: true
ignore:
  - items
  - class
external:
  - items
externalTypes:
  - NavigationMenuItem[][]
props:
  collapsed: true
  orientation: 'vertical'
  items:
    - - label: Guide
        icon: i-lucide-book-open
        chip:
          color: error
      - label: Composables
        icon: i-lucide-database
        chip:
          color: info
          text: 3
      - label: Components
        icon: i-lucide-box
        to: /docs/components
        active: true
        chip: true
    - - label: GitHub
        icon: i-simple-icons-github
        to: https://github.com/nuxt/ui
        target: _blank
      - label: Help
        icon: i-lucide-circle-help
        disabled: true
---
::

### Con barra de pestañas inferior

Utilice el accesorio `ui` para transformar el menú de navegación en una barra de pestañas inferior de estilo móvil con iconos y etiquetas pequeñas, similar a YouTube o Instagram.

::component-example
---
collapse: true
name: 'navigation-menu-bottom-tab-bar-example'
---
::

### Con etiquetas colapsadas

Utilice el soporte `ui` para mostrar una etiqueta debajo de cada icono cuando se colapsa.

::component-example
---
collapse: true
name: 'navigation-menu-collapsed-label-example'
---
::

::tip
También puede hacer esto globalmente a través del `app.config.ts` usando [`compoundVariants`](/docs/getting-started/theme/components#compound-variants):

```ts [app/app.config.ts]
export default defineAppConfig({
  ui: {
    navigationMenu: {
      compoundVariants: [{
        orientation: 'vertical',
        collapsed: true,
        class: {
          link: 'flex-col',
          linkLabel: 'block text-[10px]/3 text-center'
        }
      }]
    }
  }
})
```

::

### Con ranura personalizada

Utilice la propiedad `slot` para personalizar un elemento específico.

Tendrás acceso a los siguientes slots:

- x`#{{ item.slot }}`x{lang="ts-type"}
- x`#{{ item.slot }}-leading`x{lang="ts-type"}
- x`#{{ item.slot }}-label`x{lang="ts-type"}
- x`#{{ item.slot }}-trailing`x{lang="ts-type"}
- x`#{{ item.slot }}-content`x{lang="ts-type"}

::component-example
---
collapse: true
name: 'navigation-menu-custom-slot-example'
---
::

::tip{to="#slots"}
También puede utilizar las ranuras `#item`, `#item-leading`, `#item-label`, `#item-trailing` y `#item-content` para personalizar todos los artículos.
::

### Con ranura trasera

Utilice la ranura `#item-trailing` o la propiedad `slot` (`#{{ item.slot }}-trailing`) para agregar un Menuxx](/docs/components/dropdown-menu) que aparece en el hover, similar a Notion o Linear.

::component-example
---
collapse: true
name: 'navigation-menu-trailing-slot-example'
---
::

### Con ranura de contenido

Utilice la ranura `#item-content` o la propiedad `slot` (`#{{ item.slot }}-content`) para personalizar el contenido de un elemento específico.

::component-example
---
collapse: true
name: 'navigation-menu-content-slot-example'
---
::

::note
En este ejemplo, añadimos la clase `sm:w-(--reka-navigation-menu-viewport-width)` en el `viewport` para tener un ancho dinámico.
::

## API

### Accesorios

:component-props

### Slots

:component-slots

### Emisiones

:component-emits

## Theme

:component-theme

## Changelog (Edición española)

:component-changelog
