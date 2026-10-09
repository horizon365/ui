---
description: Eine Hierarchie von Links zum Navigieren durch eine Website.
category: navigation
keywords:
  - breadcrumbs
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Breadcrumb.vue
---

## Bearbeiten

Verwenden Sie die Breadcrumb-Komponente, um den Speicherort der aktuellen Seite in der Hierarchie Ihrer Website anzuzeigen.

::component-code
---
collapse: true
ignore:
  - items
external:
  - items
externalTypes:
  - BreadcrumbItem[]
props:
  items:
    - label: 'Docs'
      icon: 'i-lucide-book-open'
      to: '/docs'
    - label: 'Components'
      icon: 'i-lucide-box'
      to: '/docs/components'
    - label: 'Breadcrumb'
      icon: 'i-lucide-link'
      to: '/docs/components/breadcrumb'
---
::

### Items Bearbeiten

Verwenden Sie die `items`-prop als Array von Objekten mit den folgenden Eigenschaften:

- `label?: string`{lang="ts-type"} (englisch)
- `icon?: string`{lang="ts-type"} (nicht)
- `avatar?: AvatarProps`{lang="ts-type"} (nicht vorhanden)
- [`slot?: string`{lang="ts-type"}](#with-custom-slot) ) ) {lang="ts-type"}ph038{lang="ts-type"}ph038{lang="ts-type"}ph038{lang="ts-type"}ph038xph036)
- `class?: any`{lang="ts-type"} (nicht)
- `ui?: { item?: ClassNameValue, link?: ClassNameValue, linkLeadingIcon?: ClassNameValue, linkLeadingAvatar?: ClassNameValue, linkLabel?: ClassNameValue, separator?: ClassNameValue, separatorIcon?: ClassNameValue }`{lang="ts-type"}04x04x04x04x04x04x04x04x04x04x04x04x04x04x04x04x04x04x04xx04x04x04x04x0x04x04x04x0x04x04x0x04x04x0x04x0x04x04x0x04x04x0x04x0x04x0x04x0x04x04x0x0x0x04x0x0x0x04x0x04x04x0x0x0x0x04x0x0x04x0x0x0x0x0x0x0x0x0x0x0x0x0x04x0x0x0x0x0x0x0x0x0x04

Sie können jede Eigenschaft der Komponente [Link](/docs/components/link#props) übergeben, z. B. `to`, `target` usw.

::component-code
---
ignore:
  - items
external:
  - items
externalTypes:
  - BreadcrumbItem[]
props:
  items:
    - label: 'Docs'
      icon: 'i-lucide-book-open'
      to: '/docs'
    - label: 'Components'
      icon: 'i-lucide-box'
      to: '/docs/components'
    - label: 'Breadcrumb'
      icon: 'i-lucide-link'
      to: '/docs/components/breadcrumb'
---
::

::note
Ein `span` wird anstelle eines Links gerendert, wenn die `to`-Eigenschaft nicht definiert ist.
::

### Separator-Symbol für

Verwenden Sie die `separator-icon`-Prop, um die [Icon](/docs/components/icon) zwischen den einzelnen Elementen anzupassen.

::component-code
---
ignore:
  - items
external:
  - items
externalTypes:
  - BreadcrumbItem[]
props:
  separatorIcon: 'i-lucide-arrow-right'
  items:
    - label: 'Docs'
      icon: 'i-lucide-book-open'
      to: '/docs'
    - label: 'Components'
      icon: 'i-lucide-box'
      to: '/docs/components'
    - label: 'Breadcrumb'
      icon: 'i-lucide-link'
      to: '/docs/components/breadcrumb'
---
::

::framework-only
#nuxt
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
Sie können dieses Symbol global in Ihrem `app.config.ts` unter der `ui.icons.chevronRight`-Taste.
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
Sie können dieses Symbol global in Ihrem `vite.config.ts` unter `ui.icons.chevronRight` Schlüssel anpassen.
:::
::

Farbe: badge{label="4.8+" class="align-text-top"}

Verwenden Sie die `color` prop, um die Farbe des aktiven Breadcrumb zu ändern.

::component-code
---
ignore:
  - items
external:
  - items
externalTypes:
  - BreadcrumbItem[]
props:
  color: 'secondary'
  items:
    - label: 'Docs'
      icon: 'i-lucide-book-open'
      to: '/docs'
    - label: 'Components'
      icon: 'i-lucide-box'
      to: '/docs/components'
    - label: 'Breadcrumb'
      icon: 'i-lucide-link'
      to: '/docs/components/breadcrumb'
---
::

## Beispiele

### Mit Separator-Slot

Verwenden Sie den `#separator`-Steckplatz, um den Trenner zwischen den einzelnen Elementen anzupassen.

:component-example{name="breadcrumb-separator-slot-example"}

### Mit benutzerdefiniertem Slot

Verwenden Sie die `slot`-Eigenschaft, um ein bestimmtes Element anzupassen.

Sie haben Zugriff auf folgende Slots:

- `#{{ item.slot }}`{lang="ts-type"} (englisch)
- `#{{ item.slot }}-leading`{lang="ts-type"} (nicht)
- `#{{ item.slot }}-label`{lang="ts-type"} (nicht)
- `#{{ item.slot }}-trailing`{lang="ts-type"} (englisch)

:component-example{name="breadcrumb-custom-slot-example"}

::tip{to="#slots"}
Sie können auch die `#item`, `#item-leading`, `#item-label` und `#item-trailing` Steckplätze verwenden, um alle Elemente anzupassen.
::

## API (Englisch)

### Props Bearbeiten

:component-props

### Slots (englisch)

:component-slots

## Theme Bearbeiten

:component-theme

## Changelog Bearbeiten

:component-changelog
