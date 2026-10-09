---
title: NavigationMenu 탐색 메뉴
description: 가로 또는 세로로 표시할 수 있는 링크 리스트입니다.
category: navigation
keywords:
  - navbar
  - menubar
  - sidebar navigation
links:
  - label: NavigationMenu 탐색 메뉴
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/navigation-menu
  - label: Github (GitHub)
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/NavigationMenu.vue
---

## Usage

NavigationMenu 구성 요소를 사용하여 링크 목록을 가로 또는 세로로 표시합니다.

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

### Items 파일

`items` prop을 다음과 같은 속성을 가진 오브젝트 배열로 사용합니다.

- `label?: string`{lang="ts-type"}
- `icon?: string`{lang="ts-type"}
- `avatar?: AvatarProps`{lang="ts-type"}
- `badge?: string | number | BadgeProps`{lang="ts-type"}의 최상위 리뷰
- [`chip?: boolean | ChipProps`{lang="ts-type"}](#with-chip-in-items)
- [`tooltip?: TooltipProps`{lang="ts-type"}](xph 12 x)
- [`popover?: PopoverProps`{lang="ts-type"}](xph19x)의 발음을 - xph17x`popover?: PopoverProps`)
- `trailingIcon?: string`{lang="ts-type"} (- `trailingIcon?: string`{lang="ts-type"})
- `type?: 'label' | 'trigger' | 'link'`{lang="ts-type"}
- `defaultOpen?: boolean`{lang="ts-type"}
- `open?: boolean`{lang="ts-type"}
- `value?: string`{lang="ts-type"}
- `disabled?: boolean`{lang="ts-type"} Xph137x{lang="ts-type"}
- [`slot?: string`{lang="ts-type"}](#with-custom-slot)
- `onSelect?: (e: Event) => void`{lang="ts-type"} (- `onSelect?: (e: Event) => void`{lang="ts-type"})
- `children?: NavigationMenuChildItem[]`{lang="ts-type"}
- `class?: any`{lang="ts-type"}
- `ui?: { linkLeadingAvatarSize?: ClassNameValue, linkLeadingAvatar?: ClassNameValue, linkLeadingIcon?: ClassNameValue, linkLeadingChipSize?: ClassNameValue, linkLabel?: ClassNameValue, linkLabelExternalIcon?: ClassNameValue, linkTrailing?: ClassNameValue, linkTrailingBadgeSize?: ClassNameValue, linkTrailingBadge?: ClassNameValue, linkTrailingIcon?: ClassNameValue, label?: ClassNameValue, link?: ClassNameValue, content?: ClassNameValue, childList?: ClassNameValue, childLabel?: ClassNameValue, childItem?: ClassNameValue, childLink?: ClassNameValue, childLinkIcon?: ClassNameValue, childLinkWrapper?: ClassNameValue, childLinkLabel?: ClassNameValue, childLinkLabelExternalIcon?: ClassNameValue, childLinkDescription?: ClassNameValue }`{lang="ts-type"} (- `ui?: { linkLeadingAvatarSize?: ClassNameValue, linkLeadingAvatar?: ClassNameValue, linkLeadingIcon?: ClassNameValue, linkLeadingChipSize?: ClassNameValue, linkLabel?: ClassNameValue, linkLabelExternalIcon?: ClassNameValue, linkTrailing?: ClassNameValue, linkTrailingBadgeSize?: ClassNameValue, linkTrailingBadge?: ClassNameValue, linkTrailingIcon?: ClassNameValue, label?: ClassNameValue, link?: ClassNameValue, content?: ClassNameValue, childList?: ClassNameValue, childLabel?: ClassNameValue, childItem?: ClassNameValue, childLink?: ClassNameValue, childLinkIcon?: ClassNameValue, childLinkWrapper?: ClassNameValue, childLinkLabel?: ClassNameValue, childLinkLabelExternalIcon?: ClassNameValue, childLinkDescription?: ClassNameValue }`{lang="ts-type"})

[Link](/docs/components/link#props) 구성 요소에서 `to`, `target` 등의 속성을 전달할 수 있습니다.

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
또한 배열 배열을 `items` prop에 전달하여 항목 그룹을 표시할 수 있습니다.
::

::tip
각 항목은 다음 속성을 가진 객체의 `children` 배열을 사용하여 하위 메뉴를 작성할 수 있습니다.

- `label: string`
- `description?: string`
- `icon?: string`
- `onSelect?: (e: Event) => void`
- `class?: any`

::

### 방향

`orientation` prop을 사용하여 NavigationMenu의 방향을 변경합니다.

::note
orientation이 `vertical`인 경우 [Accordion](/docs/components/accordion) 구성 요소를 사용하여 각 그룹을 표시합니다. `open` 및 `defaultOpen` 등록 정보를 사용하여 각 항목의 열린 상태를 제어하고 [](/docs/components/accordion#collapsible/docs/components/accordion#collapsible/docs/components/accordion#collapsiblexph278272827282272x 및 xxph27282272x 소품을 사용하여 동작을 변경할 수 있습니다
::

::note
방향이 `vertical`이고 메뉴가 `collapsed`가 아닌 경우 자식은 항목으로 재귀적으로 렌더링되므로 `ui.link`는 스타일을 지정합니다. `ui.childLink`는 `horizontal` 방향으로 표시되는 `content`에만 적용되고 ](#with-popover-in-items)에만 적용됩니다.
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
방향이 `horizontal`일 때는 그룹이 간격이 지정되고 방향이 `vertical`일 때는 그룹이 분리됩니다.
::

### 축소 됨

`vertical` 방향에서는 navigationMenu를 축소하기 위해 `collapsed` prop을 사용하여 예를 들어 사이드바에서 유용 할 수 있습니다.

::note
[`tooltip`](#with-tooltip-in-items) 및 [`popover`](#with-popover-in-items) 소품을 사용하여 축소된 항목에 대한 자세한 정보를 표시할 수 있습니다.
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

### Highlight 이미지

`highlight` 소품을 사용하여 활성 항목의 강조 표시된 테두리를 표시합니다.

`highlight-color` prop을 사용하여 테두리 색상을 변경합니다. 기본적으로 `color` prop이 사용됩니다.

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
이 예제에서는 `border-b` 클래스가 `horizontal` 방향으로 테두리를 표시하기 위해 적용되며, 기본적으로 깨끗한 슬레이트를 사용할 수 있도록 수행되지 않습니다.
::

::caution
`vertical` 방향에서는 `highlight` prop이 활성 자식의 테두리만 강조 표시합니다.
::

### Color

`color` Prop을 사용하여 NavigationMenu의 색상을 변경합니다.

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

`variant` prop 를 사용하여 NavigationMenu 의 변형을 변경합니다.

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
`highlight` prop은 `pill` variant active item style을 변경했습니다. 차이점을 확인해 보십시오.
::

### 트레일 아이콘

`trailing-icon` 소품을 사용하여 각 항목의 후행 [Icon](/docs/components/icon)를 사용자 정의합니다. 기본값은 `i-lucide-chevron-down`입니다. 이 아이콘은 항목에 하위 항목이 있는 경우에만 표시됩니다.

::tip
또한 item 객체에서 `trailingIcon` 속성을 사용하여 특정 항목에 대한 아이콘을 설정할 수 있습니다.
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
`ui.icons.chevronDown` 키 아래의 `app.config.ts`에서 이 아이콘을 전역적으로 사용자 정의할 수 있습니다.
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
`ui.icons.chevronDown` 키 아래의 `vite.config.ts`에서 이 아이콘을 전역적으로 사용자 정의할 수 있습니다.
:::
::

### Arrow 키

항목에 자식이 있을 때 `arrow` Prop을 사용하여 NavigationMenu 내용에 화살표를 표시합니다.

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
화살표가 활성 항목을 따르도록 애니메이션됩니다.
::

### 내용 방향

`content-orientation` prop을 사용하여 내용의 방향을 변경합니다.

::warning
이 소품은 `orientation`가 `horizontal`일 때만 작동합니다.
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

### Unmount 마운트 해제

`unmount-on-hide` 소품을 사용하여 내용 마운트 해제 동작을 제어합니다. 기본값은 `true`입니다.

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
DOM을 검사하여 각 항목의 콘텐츠가 렌더링되는 것을 볼 수 있습니다.
::

## 예

### Control 활성화된 프로젝트

`default-value` prop 또는 `v-model` 지시문을 항목의 `value`와 함께 사용하여 활성 항목을 제어할 수 있습니다. `value`가 제공되지 않으면 최상위 항목의 경우 `item-${index}`, 중첩된 항목의 경우 `item-${level}-${index}`가 기본적으로 사용됩니다.

::component-example
---
collapse: true
name: 'navigation-menu-model-value-example'
---
::

::tip
`value-key` Prop을 사용하여 `v-model` 또는 `default-value`가 제공될 때 항목을 일치시키는 키를 변경합니다.
::

::note
이 예제에서는 [`defineShortcuts`](/docs/composables/define-shortcuts)를 사용하여 kbdxph96x, :kbd{value="2"} 또는 :kbd{value="3"}를 눌러 활성 항목을 전환할 수 있습니다.
::

### 항목에 도구 설명 포함

orientation이 `vertical`이고 메뉴가 `collapsed`인 경우 `tooltip` prop을 `true`로 설정하여 레이블이 있는 항목 주위에 [Tooltip](xph10x를 표시할 수 있지만 각 항목에 `tooltip` 속성을 사용하여 기본 도구 설명을 재정의할 수도 있습니다. 각 항목에서 `tooltip` 속성을 사용하여 항목 주위에 [Tooltip](/docs/components/tooltip)를 표시할 수 있습니다.

::note
항목의 `tooltip` 속성은 전역 `tooltip` prop에 관계없이 항상 도구 설명을 표시합니다.
::

[Tooltip](/docs/components/tooltip) 구성 요소의 속성을 전역 또는 각 항목에 전달할 수 있습니다.

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

`popover?: PopoverProps`항목에 popover 포함

방향이 [이고 메뉴가 ](인 경우, #with-popover-in-items prop을 `true`로 설정하여 자식과 함께 항목 주위에 [Popover](/docs/components/popover- 를 표시할 수 있지만 각 항목에 `popover` 속성을 사용하여 기본 포버를 재정의할 수도 있습니다.

::note
항목의 `popover` 속성은 전역 `popover` prop에 관계없이 항상 Popover를 표시합니다.
::

[Popover](/docs/components/popover) 구성 요소의 모든 속성을 전 세계로 전달하거나 각 항목에 전달할 수 있습니다.

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
`#content` 슬롯을 사용하여 `vertical` 방향으로 Popover 내용을 사용자 정의할 수 있습니다.
::

### 품목에 칩 포함: badge{label="4.5+" class="align-text-top"}

`chip` 속성을 사용하여 항목의 아이콘 주위에 [Chip](/docs/components/chip)를 표시하면 props 중 하나를 전달할 수 있습니다.

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

### 아래쪽 탭 모음 포함

`ui` Prop을 사용하여 NavigationMenu를 YouTube 또는 Instagram과 유사한 아이콘과 작은 레이블이있는 모바일 스타일의 하단 탭 표시줄로 변환합니다.

::component-example
---
collapse: true
name: 'navigation-menu-bottom-tab-bar-example'
---
::

### 축소된 레이블 사용

`ui` 소품을 사용하여 축소 시 각 아이콘 아래에 레이블을 표시합니다.

::component-example
---
collapse: true
name: 'navigation-menu-collapsed-label-example'
---
::

::tip
또한 [`compoundVariants`](/docs/getting-started/theme/components#compound-variants)를 사용하여 `app.config.ts`를 통해이 작업을 전 세계적으로 수행 할 수 있습니다.

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

### 사용자 지정 슬롯 포함

`slot` 속성을 사용하여 특정 항목을 사용자화합니다.

다음과 같은 슬롯에 액세스할 수 있습니다.

- `#{{ item.slot }}`{lang="ts-type"}
- `#{{ item.slot }}-leading`{lang="ts-type"}
- `#{{ item.slot }}-label`{lang="ts-type"} - {lang="ts-type"}
- `#{{ item.slot }}-trailing`{lang="ts-type"}
- `#{{ item.slot }}-content`{lang="ts-type"} {lang="ts-type"}

::component-example
---
collapse: true
name: 'navigation-menu-custom-slot-example'
---
::

::tip{to="#slots"}
또한 `#item`, `#item-leading`, `#item-label`, `#item-trailing` 및 `#item-content` 슬롯을 사용하여 모든 항목을 사용자 정의 할 수 있습니다.
::

### 트레일링 슬롯 포함

`#item-trailing` 슬롯 또는 `slot` 속성 (`#{{ item.slot }}-trailing`)을 사용하여 노트 또는 선형과 유사하게 마우스 위에 나타나는 [DropdownMenu](/docs/components/dropdown-menu)를 추가합니다.

::component-example
---
collapse: true
name: 'navigation-menu-trailing-slot-example'
---
::

### 콘텐츠 슬롯 포함

`#item-content` 슬롯 또는 `slot` 속성(`#{{ item.slot }}-content`)을 사용하여 특정 항목의 내용을 사용자 정의합니다.

::component-example
---
collapse: true
name: 'navigation-menu-content-slot-example'
---
::

::note
이 예제에서는 `viewport`에 `sm:w-(--reka-navigation-menu-viewport-width)` 클래스를 추가하여 동적 너비를 갖도록 합니다. 이렇게 하려면 콘텐츠의 첫 번째 자식에 너비를 설정해야 합니다.
::

## API

### Props 코드

:component-props

### Slots 슬롯

:component-slots

### Emits

:component-emits

## Theme 테마

:component-theme

## 변경 로그

:component-changelog
