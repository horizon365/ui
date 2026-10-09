---
title: Navigatiemenu
description: Een lijst met links die horizontaal of verticaal kunnen worden weergegeven.
category: navigation
keywords:
  - navbar
  - menubar
  - sidebar navigation
links:
  - label: Navigatiemenu
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/navigation-menu
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/NavigationMenu.vue
---

## Gebruik

Gebruik het onderdeel NavigationMenu om een lijst met links horizontaal of verticaal weer te geven.

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

### Items

Gebruik de `items` prop als een array van objecten met de volgende eigenschappen:

- `label?: string`{lang="ts-type"}
- `icon?: string`{lang="ts-type"}
- `avatar?: AvatarProps`{lang="ts-type"}
- `badge?: string | number | BadgeProps`{lang="ts-type"}
- [`chip?: boolean | ChipProps`{lang="ts-type"}](#with-chip-in-items)
- [`tooltip?: TooltipProps`{lang="ts-type"}](#with-tooltip-in-items)
- [`popover?: PopoverProps`{lang="ts-type"}](#with-popover-in-items)
- `trailingIcon?: string`{lang="ts-type"}
- `type?: 'label' | 'trigger' | 'link'`{lang="ts-type"}
- `defaultOpen?: boolean`{lang="ts-type"}
- `open?: boolean`{lang="ts-type"}
- `value?: string`{lang="ts-type"}
- `disabled?: boolean`{lang="ts-type"}
- [`slot?: string`{lang="ts-type"}](#with-custom-slot)
- `onSelect?: (e: Event) => void`{lang="ts-type"}
- `children?: NavigationMenuChildItem[]`{lang="ts-type"}
- `class?: any`{lang="ts-type"}
- `ui?: { linkLeadingAvatarSize?: ClassNameValue, linkLeadingAvatar?: ClassNameValue, linkLeadingIcon?: ClassNameValue, linkLeadingChipSize?: ClassNameValue, linkLabel?: ClassNameValue, linkLabelExternalIcon?: ClassNameValue, linkTrailing?: ClassNameValue, linkTrailingBadgeSize?: ClassNameValue, linkTrailingBadge?: ClassNameValue, linkTrailingIcon?: ClassNameValue, label?: ClassNameValue, link?: ClassNameValue, content?: ClassNameValue, childList?: ClassNameValue, childLabel?: ClassNameValue, childItem?: ClassNameValue, childLink?: ClassNameValue, childLinkIcon?: ClassNameValue, childLinkWrapper?: ClassNameValue, childLinkLabel?: ClassNameValue, childLinkLabelExternalIcon?: ClassNameValue, childLinkDescription?: ClassNameValue }`{lang="ts-type"}

U kunt elke eigenschap van de [Link](/docs/components/link#props) component doorgeven, zoals `to`, `target`, enz.

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
U kunt ook een reeks arrays doorgeven aan de `items` prop om groepen items weer te geven.
::

::tip
Elk item kan een `children`-reeks objecten met de volgende eigenschappen gebruiken om submenu 's te maken:

- `label: string`
- `description?: string`
- `icon?: string`
- `onSelect?: (e: Event) => void`
- `class?: any`

::

### Oriëntatie

Gebruik de `orientation` prop om de oriëntatie van het navigatiemenu te wijzigen.

::note
Als de oriëntatie `vertical` is, wordt een [Accordion](/docs/components/accordion) gebruikt om elke groep weer te geven.
U kunt de open status van elk item regelen met de eigenschappen `open` en `defaultOpen` en het gedrag wijzigen met behulp van de [`collapsible`](/docs/components/accordion#collapsible) en [`type`](/docs/components/accordion#multiple) rekwisieten.
::

::note
Wanneer orientatie `vertical` is en het menu niet `collapsed` is, worden kinderen recursief weergegeven als items, dus `ui.link` stijlen ze. `ui.childLink` geldt alleen voor de `content` weergegeven in `horizontal` orientatie en
 naar de [popover](#with-popover-in-items) wanneer `collapsed`.
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
Groepen worden uit elkaar geplaatst wanneer de oriëntatie `horizontal` is en gescheiden wanneer de oriëntatie `vertical` is.
::

### Ingeklapt

Gebruik in `vertical` oriëntatie de `collapsed` prop om het NavigationMenu samen te vouwen, dit kan bijvoorbeeld handig zijn in een zijbalk.

::note
U kunt de [`tooltip`](#with-tooltip-in-items) en [`popover`](#with-popover-in-items) rekwisieten gebruiken om meer informatie over de samengevouwen items weer te geven.
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

### Hoogtepunt

Gebruik de `highlight` prop om een gemarkeerde rand voor het actieve item weer te geven.

Gebruik de `highlight-color` prop om de kleur van de rand te veranderen. Standaard wordt de `color` prop gebruikt.

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
In dit voorbeeld wordt de klasse `border-b` toegepast om een rand in `horizontal`-oriëntatie weer te geven, dit wordt niet standaard gedaan om u een schone lei te geven om mee te werken.
::

::caution
In `vertical`-oriëntatie benadrukt de `highlight`-prop alleen de grens van actieve kinderen.
::

### Kleur

Gebruik de `color` prop om de kleur van het Navigatiemenu te wijzigen.

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

### Variant

Gebruik de `variant` prop om de variant van het Navigatiemenu te wijzigen.

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
De `highlight` prop verandert de actieve itemstijl van de `pill`-variant. Probeer het uit om het verschil te zien.
::

### Achterliggende pictogram

Gebruik de `trailing-icon` prop om de [Icon](/docs/components/icon) van elk item aan te passen. Standaard `i-lucide-chevron-down`. Dit pictogram wordt alleen weergegeven als een item kinderen heeft.

::tip
U kunt ook een pictogram voor een specifiek item instellen met de eigenschap `trailingIcon` in het itemobject.
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
U kunt dit pictogram globaal aanpassen in uw `app.config.ts` onder `ui.icons.chevronDown`-sleutel.
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
U kunt dit pictogram globaal aanpassen in uw `vite.config.ts` onder `ui.icons.chevronDown`-toets.
:::
::

### Pijl

Gebruik de `arrow`-prop om een pijl op de NavigationMenu-inhoud weer te geven wanneer items kinderen hebben.

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
De pijl is geanimeerd om het actieve item te volgen.
::

### Inhoud Oriëntatie

Gebruik de `content-orientation` prop om de oriëntatie van de inhoud te wijzigen.

::warning
Deze prop werkt alleen als `orientation` `horizontal` is.
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

### Ontkoppelen

Gebruik de `unmount-on-hide`-prop om het gedrag bij het verwijderen van inhoud te regelen. Standaard `true`.

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
U kunt de DOM inspecteren om te zien dat de inhoud van elk item wordt weergegeven.
::

## Voorbeelden

### Controle actief item

U kunt de actieve item (s) besturen met behulp van de `default-value` prop of de `v-model` richtlijn met de `value` van het item.
Als er geen `value` wordt geleverd, wordt standaard `item-${index}` gebruikt voor items op het hoogste niveau of `item-${level}-${index}` voor geneste items.

::component-example
---
collapse: true
name: 'navigation-menu-model-value-example'
---
::

::tip
Gebruik de `value-key` prop om de sleutel te wijzigen die wordt gebruikt om items te matchen wanneer een `v-model` of `default-value` wordt geleverd.
::

::note
In dit voorbeeld, met [`defineShortcuts`](/docs/composables/define-shortcuts), kunt u het actieve item omschakelen door op: kbd{value="1"},: kbd{value="2"} of: kbd{value="3"} te drukken.
::

### Met tooltip in items

Wanneer de oriëntatie `vertical` is en het menu `collapsed` is, kunt u de `tooltip` prop instellen op `true` om een [Tooltip](/docs/components/tooltip) rond items met hun label weer te geven, maar u kunt ook de
 `tooltip` eigenschap op elk item om de standaard tooltip te overschrijven. In `horizontal`-oriëntatie kunt u de `tooltip`-eigenschap op elk item gebruiken om een [Tooltip](/docs/components/tooltip) rond items weer te geven.

::note
De eigenschap `tooltip` op een item zal altijd een tooltip weergeven, ongeacht de globale `tooltip` prop.
::

U kunt elke eigenschap van de [Tooltip](/docs/components/tooltip) component wereldwijd of op elk item doorgeven.

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

### Met popover in items

Wanneer de oriëntatie `vertical` is en het menu `collapsed` is, kunt u de `popover` prop instellen op `true` om een [Popover](/docs/components/popover) weer te geven rond items met hun kinderen, maar u kunt ook de
 `popover` eigenschap op elk item om de standaard popover te overschrijven.

::note
De eigenschap `popover` op een item zal altijd een popover weergeven, ongeacht de globale `popover` prop.
::

U kunt elke eigenschap van de [Popover](/docs/components/popover) component wereldwijd of op elk item doorgeven.

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
U kunt de `#content`-sleuf gebruiken om de inhoud van de popover in de `vertical`-oriëntatie aan te passen.
::

### Met chip in artikelen: badge{label="4.5+" class="align-text-top"}

Gebruik de eigenschap `chip` om een [Chip](/docs/components/chip) rond het pictogram van de items weer te geven, u kunt een van de rekwisieten doorgeven.

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

### Met onderste tabbalk

Gebruik de `ui`-prop om het NavigationMenu om te vormen tot een mobiele tabbalk met pictogrammen en kleine labels, vergelijkbaar met YouTube of Instagram.

::component-example
---
collapse: true
name: 'navigation-menu-bottom-tab-bar-example'
---
::

### Met samengevouwen labels

Gebruik de `ui` prop om een label onder elk pictogram weer te geven wanneer het is samengevouwen.

::component-example
---
collapse: true
name: 'navigation-menu-collapsed-label-example'
---
::

::tip
U kunt dit ook globaal doen via de `app.config.ts` met [`compoundVariants`](/docs/getting-started/theme/components#compound-variants):

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

### Met aangepaste sleuf

Gebruik de eigenschap `slot` om een specifiek item aan te passen.

U krijgt toegang tot de volgende slots:

- `#{{ item.slot }}`{lang="ts-type"}
- `#{{ item.slot }}-leading`{lang="ts-type"}
- `#{{ item.slot }}-label`{lang="ts-type"}
- `#{{ item.slot }}-trailing`{lang="ts-type"}
- `#{{ item.slot }}-content`{lang="ts-type"}

::component-example
---
collapse: true
name: 'navigation-menu-custom-slot-example'
---
::

::tip{to="#slots"}
U kunt ook de `#item`, `#item-leading`, `#item-label`, `#item-trailing` en `#item-content` slots gebruiken om alle items aan te passen.
::

### Met achterliggende sleuf

Gebruik de `#item-trailing`-sleuf of de `slot`-eigenschap (`#{{ item.slot }}-trailing`) om een [DropdownMenu](/docs/components/dropdown-menu) toe te voegen die verschijnt bij hover, vergelijkbaar met Notion of Linear.

::component-example
---
collapse: true
name: 'navigation-menu-trailing-slot-example'
---
::

### Met inhoud slot

Gebruik de `#item-content`-sleuf of de `slot`-eigenschap (`#{{ item.slot }}-content`) om de inhoud van een specifiek item aan te passen.

::component-example
---
collapse: true
name: 'navigation-menu-content-slot-example'
---
::

::note
In dit voorbeeld voegen we de klasse `sm:w-(--reka-navigation-menu-viewport-width)` toe aan de `viewport` om een dynamische breedte te hebben. Dit vereist een breedte instellen op het eerste kind van de inhoud.
::

## API

### Props

:component-props

### Slots

:component-slots

### Uitzendt

:component-emits

## Thema

:component-theme

## Changelog

:component-changelog
