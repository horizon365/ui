---
title: Navigationsmenü
description: Eine Liste von Links, die horizontal oder vertikal angezeigt werden können.
category: navigation
keywords:
  - navbar
  - menubar
  - sidebar navigation
links:
  - label: Navigationsmenu
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/navigation-menu
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/NavigationMenu.vue
---

## Bearbeiten

Verwenden Sie die NavigationMenu-Komponente, um eine Liste von Links horizontal oder vertikal anzuzeigen.

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

### Items Bearbeiten

Verwenden Sie die `items`-prop als Array von Objekten mit den folgenden Eigenschaften:

- `label?: string`{lang="ts-type"} (nicht vorhanden)
- `icon?: string`{lang="ts-type"} (nicht vorhanden)
- `avatar?: AvatarProps`{lang="ts-type"} (nicht vorhanden)
- `badge?: string | number | BadgeProps`{lang="ts-type"} (nicht)
- [`chip?: boolean | ChipProps`{lang="ts-type"}](#with-chip-in-items)
108x[`tooltip?: TooltipProps`{lang="ts-type"}](](#with-tooltip-in-items)
- [`popover?: PopoverProps`{lang="ts-type"}](#with-popover-in-items) )
- `trailingIcon?: string`{lang="ts-type"} (nicht)
- `type?: 'label' | 'trigger' | 'link'`{lang="ts-type"} (nicht)
- `defaultOpen?: boolean`{lang="ts-type"} (nicht)
- `open?: boolean`{lang="ts-type"} (englisch)
- `value?: string`{lang="ts-type"} (nicht)
- `disabled?: boolean`{lang="ts-type"} (nicht)
- [`slot?: string`{lang="ts-type"}](#with-custom-slot) )x145x145x146{lang="ts-type"}ph145x145x140xxx145x140x140x140x140x140x140x140x145x
- `onSelect?: (e: Event) => void`{lang="ts-type"} (nicht)
- `children?: NavigationMenuChildItem[]`{lang="ts-type"} (englisch)
- `class?: any`{lang="ts-type"} | mehr
- `ui?: { linkLeadingAvatarSize?: ClassNameValue, linkLeadingAvatar?: ClassNameValue, linkLeadingIcon?: ClassNameValue, linkLeadingChipSize?: ClassNameValue, linkLabel?: ClassNameValue, linkLabelExternalIcon?: ClassNameValue, linkTrailing?: ClassNameValue, linkTrailingBadgeSize?: ClassNameValue, linkTrailingBadge?: ClassNameValue, linkTrailingIcon?: ClassNameValue, label?: ClassNameValue, link?: ClassNameValue, content?: ClassNameValue, childList?: ClassNameValue, childLabel?: ClassNameValue, childItem?: ClassNameValue, childLink?: ClassNameValue, childLinkIcon?: ClassNameValue, childLinkWrapper?: ClassNameValue, childLinkLabel?: ClassNameValue, childLinkLabelExternalIcon?: ClassNameValue, childLinkDescription?: ClassNameValue }`{lang="ts-type"} (englisch)

Sie können jede Eigenschaft der Komponente [Link](/docs/components/link#props) übergeben, z. B. `to`, `target` usw.

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
Sie können auch ein Array von Arrays an die `items`-Prop übergeben, um Gruppen von Elementen anzuzeigen.
::

::tip
Jedes Element kann ein `children`-Array von Objekten mit den folgenden Eigenschaften zum Erstellen von Untermenüs verwenden:

- `label: string` nicht
- `description?: string` Übersetzung
- `icon?: string` (englisch)
- `onSelect?: (e: Event) => void` (nicht)
- `class?: any` (englisch)

::

### Orientierung.

Verwenden Sie die `orientation`-prop, um die Ausrichtung des NavigationMenüs zu ändern.

::note
Wenn die Ausrichtung `vertical` ist, wird eine [Accordion](/docs/components/accordion)-Komponente verwendet, um jede Gruppe anzuzeigen. Sie können den offenen Zustand jedes Elements mit den Eigenschaften `open` und `defaultOpen` steuern und das Verhalten mit den Props [`collapsible`](/docs/components/accordion#collapsible) und [`type`](/docs/components/accordion#multiple) ändern.
::

::note
Wenn die Orientierung `vertical` ist und das Menü nicht `collapsed` ist, werden Kinder rekursiv als Elemente gerendert, so dass `ui.link` sie formatiert. `ui.childLink` gilt nur für die `content`, die in `horizontal` Orientierung angezeigt werden, und für die [popover](#with-popover-in-items), wenn `collapsed`.
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
Gruppen werden beabstandet, wenn die Orientierung `horizontal` ist und getrennt, wenn die Orientierung `vertical` ist.
::

### Collapsed (nicht verfügbar)

Verwenden Sie in der `vertical`-Ausrichtung die `collapsed`-Stütze, um das NavigationMenu zu reduzieren, dies kann beispielsweise in einer Seitenleiste nützlich sein.

::note
Sie können die Requisiten [`tooltip`](#with-tooltip-in-items) und [`popover`]() verwenden, um weitere Informationen zu den zusammengebrochenen Elementen anzuzeigen.
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

### Highlight (Englisch)

Verwenden Sie die `highlight`-Stütze, um einen markierten Rahmen für das aktive Element anzuzeigen.

Verwenden Sie die `highlight-color`-prop, um die Farbe des Rahmens zu ändern.

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
In diesem Beispiel wird die `border-b`-Klasse angewendet, um einen Rahmen in der `horizontal`-Ausrichtung anzuzeigen, dies wird nicht standardmäßig ausgeführt, damit Sie eine saubere Schiefertafel haben, mit der Sie arbeiten können.
::

::caution
In der `vertical`-Ausrichtung hebt die `highlight`-Prop nur den Rand aktiver Kinder hervor.
::

### Color Bearbeiten

Verwenden Sie die `color`-Prop, um die Farbe des NavigationMenüs zu ändern.

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

### Variant Bearbeiten

Verwenden Sie die `variant`-prop, um die Variante des NavigationMenüs zu ändern.

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
Die `highlight`-prop ändert die `pill`-Variante active item style. Try es aus, um den Unterschied zu sehen.
::

### Trailing Icon (Deutsche Übersetzung)

Verwenden Sie die `trailing-icon`-Prop, um die nachlaufende [Icon](/docs/components/icon) jedes Elements anzupassen. Standardmäßig `i-lucide-chevron-down`. Dieses Symbol wird nur angezeigt, wenn ein Element untergeordnete Elemente hat.

::tip
Sie können auch ein Symbol für ein bestimmtes Element festlegen, indem Sie die `trailingIcon`-Eigenschaft im item-Objekt verwenden.
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
Sie können dieses Symbol global in Ihrem `app.config.ts` unter `ui.icons.chevronDown` Schlüssel anpassen.
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
Sie können dieses Symbol global in Ihrem `vite.config.ts` unter `ui.icons.chevronDown` Schlüssel anpassen.
:::
::

### Pfeil

Verwenden Sie die `arrow`-Prop, um einen Pfeil auf dem NavigationMenu-Inhalt anzuzeigen, wenn Elemente untergeordnete Elemente haben.

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
Der Pfeil ist animiert, um dem aktiven Element zu folgen.
::

### Inhaltsausrichtung

Verwenden Sie die `content-orientation`-Prop, um die Ausrichtung des Inhalts zu ändern.

::warning
Diese Prop funktioniert nur, wenn `orientation` `horizontal` ist.
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

### Unmount (englisch)

Verwenden Sie die `unmount-on-hide`-Prop, um das Verhalten des Aushängens von Inhalten zu steuern. Standardmäßig ist `true`.

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
Sie können das DOM inspizieren, um zu sehen, wie der Inhalt jedes Elements gerendert wird.
::

## Examples (Deutsche Ausgabe)

### Control Aktiver Eintrag

Sie können die aktiven Elemente steuern, indem Sie die `default-value` prop oder die `v-model`-Direktive mit dem `value` des Elements verwenden. Wenn kein `value` angegeben ist, wird standardmäßig `item-${index}` für Elemente der obersten Ebene oder `item-${level}-${index}` für verschachtelte Elemente verwendet.

::component-example
---
collapse: true
name: 'navigation-menu-model-value-example'
---
::

::tip
Verwenden Sie die `value-key`-Stütze, um den Schlüssel zu ändern, der für die Übereinstimmung mit Elementen verwendet wird, wenn ein `v-model` oder `default-value` bereitgestellt wird.
::

::note
In diesem Beispiel können Sie unter Verwendung von [`defineShortcuts`](/docs/composables/define-shortcuts) das aktive Element wechseln, indem Sie: kbd{value="1"},: kbd{value="2"} oder: kbd{value="3"}.
::

### With Tooltip in items (Deutsche Übersetzung)

Wenn die Ausrichtung `vertical` ist und das Menü `collapsed` ist, können Sie die `tooltip`-Prop auf `true` setzen, um eine [Tooltip](/docs/components/tooltipxph10x um Elemente mit ihrer Beschriftung anzuzeigen, aber Sie können auch die `tooltip`-Eigenschaft für jedes Element verwenden, um den Standard-Tooltip zu überschreiben. Sie können die `tooltip`-Eigenschaft für jedes Element verwenden, um ein [Tooltip](/docs/components/tooltip) um Elemente anzuzeigen.

::note
Die `tooltip`-Eigenschaft eines Elements zeigt immer einen Tooltip an, unabhängig von der globalen `tooltip`-Props.
::

Sie können jede Eigenschaft der [Tooltip](/docs/components/tooltip)-Komponente global oder für jedes Element übergeben.

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

### With popover in items (Mit Popover in Artikeln)

Wenn die Ausrichtung `vertical` ist und das Menü `collapsed` lautet, können Sie die `popover`-Prop auf `true` setzen, um eine [Popover](/docs/components/popover-  um Elemente mit ihren Kindern anzuzeigen, aber Sie können auch die `popover`-Eigenschaft für jedes Element verwenden, um den Standard-Popover zu überschreiben.

::note
Die `popover`-Eigenschaft eines Elements zeigt immer einen Popover an, unabhängig von der globalen `popover`-Props.
::

Sie können jede Eigenschaft der Komponente [Popover](/docs/components/popover) global oder für jedes Element übergeben.

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
Sie können den `#content`-Steckplatz verwenden, um den Inhalt des Popovers in der `vertical`-Ausrichtung anzupassen.
::

### With chip in items: badge{label="4.5+" class="align-text-top"} (mit Chip im Artikel)

Verwenden Sie die `chip`-Eigenschaft, um ein [Chip](/docs/components/chip) um das Symbol der Elemente anzuzeigen, Sie können jede seiner Requisiten übergeben.

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

### Mit unterer Tab-Leiste

Verwenden Sie die `ui`-Prop, um das NavigationMenu in eine untere Tab-Leiste im mobilen Stil mit Symbolen und kleinen Labels zu verwandeln, ähnlich wie YouTube oder Instagram.

::component-example
---
collapse: true
name: 'navigation-menu-bottom-tab-bar-example'
---
::

### Mit zusammengebrochenen Etiketten

Verwenden Sie die `ui`-Stütze, um unter jedem Symbol eine Beschriftung anzuzeigen, wenn sie zusammengeklappt ist.

::component-example
---
collapse: true
name: 'navigation-menu-collapsed-label-example'
---
::

::tip
Sie können dies auch global über die `app.config.ts` mit [`compoundVariants`](/docs/getting-started/theme/components#compound-variants) tun:

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

### Mit Custom Slot

Verwenden Sie die `slot`-Eigenschaft, um ein bestimmtes Element anzupassen.

Sie haben Zugriff auf folgende Slots:

- `#{{ item.slot }}`{lang="ts-type"} (englisch)
- `#{{ item.slot }}-leading`{lang="ts-type"} (englisch)
- `#{{ item.slot }}-label`{lang="ts-type"} (englisch)
- `#{{ item.slot }}-trailing`{lang="ts-type"} (englisch)
- `#{{ item.slot }}-content`{lang="ts-type"} (englisch)

::component-example
---
collapse: true
name: 'navigation-menu-custom-slot-example'
---
::

::tip{to="#slots"}
Sie können auch die `#item`, `#item-leading`, `#item-label`, `#item-trailing` und `#item-content` Steckplätze verwenden, um alle Elemente anzupassen.
::

### Mit Trailing Slot

Verwenden Sie den `#item-trailing`-Steckplatz oder die `slot`-Eigenschaft (`#{{ item.slot }}-trailing`), um ein [DropdownMenu](/docs/components/dropdown-menu) hinzuzufügen, das ähnlich wie Notion oder Linear im Hover-Modus angezeigt wird.

::component-example
---
collapse: true
name: 'navigation-menu-trailing-slot-example'
---
::

### With Inhalts-Slot

Verwenden Sie den `#item-content`-Steckplatz oder die Eigenschaft `slot` (`#{{ item.slot }}-content`), um den Inhalt eines bestimmten Elements anzupassen.

::component-example
---
collapse: true
name: 'navigation-menu-content-slot-example'
---
::

::note
In diesem Beispiel fügen wir die Klasse `sm:w-(--reka-navigation-menu-viewport-width)` auf der `viewport` hinzu, um eine dynamische Breite zu erhalten.
::

## API ist

### Props für

:component-props

### Slots (englisch)

:component-slots

### Emits (nicht)

:component-emits

## Theme Bearbeiten

:component-theme

## Changelog (englisch)

:component-changelog
