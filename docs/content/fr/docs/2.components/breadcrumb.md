---
description: Une hiérarchie de liens pour naviguer à travers un site Web.
category: navigation
keywords:
  - breadcrumbs
links:
  - label: GitHub à
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Breadcrumb.vue
---

## Utilisation

Utilisez le composant Breadcrumb pour afficher l'emplacement de la page actuelle dans la hiérarchie de votre site.

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

### Éléments

Utilisez le prop `items` comme un tableau d'objets avec les propriétés suivantes:

- x`label?: string`x{lang="ts-type"}
- x`icon?: string`x{lang="ts-type"}
- x`avatar?: AvatarProps`x{lang="ts-type"}
Xph032xx[x`slot?: string`x{lang="ts-type"}](x#with-custom-slotx)
- x`class?: any`x{lang="ts-type"}
- x`ui?: { item?: ClassNameValue, link?: ClassNameValue, linkLeadingIcon?: ClassNameValue, linkLeadingAvatar?: ClassNameValue, linkLabel?: ClassNameValue, separator?: ClassNameValue, separatorIcon?: ClassNameValue }`x{lang="ts-type"}

Vous pouvez passer n'importe quelle propriété du composant [Link](/docs/components/link#props) telle que `to`, `target`, etc.

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
Un `span` est rendu à la place d'un lien lorsque la propriété `to` n'est pas définie.
::

### Separateur Icône

Utilisez la prop `separator-icon` pour personnaliser le [Icon](xph077) entre chaque élément.

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
Vous pouvez personnaliser cette icône globalement dans votre `app.config.ts` sous la touche `ui.icons.chevronRight`.
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
Vous pouvez personnaliser cette icône globalement dans votre `vite.config.ts` sous la touche `ui.icons.chevronRight`.
:::
::

Couleur: badge{label="4.8+" class="align-text-top"}

Utilisez le prop `color` pour changer la couleur du fil de pain actif.

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

## exemples

### Avec fente de séparation

Utilisez le slot `#separator` pour personnaliser le séparateur entre chaque élément.

:component-example{name="breadcrumb-separator-slot-example"}

### With slot personnalisé

Utilisez la propriété `slot` pour personnaliser un élément spécifique.

Vous aurez accès aux slots suivants:

- `#{{ item.slot }}`x{lang="ts-type"}
- x`#{{ item.slot }}-leading`x{lang="ts-type"}
- x`#{{ item.slot }}-label`x{lang="ts-type"}
- x`#{{ item.slot }}-trailing`x{lang="ts-type"}

:component-example{name="breadcrumb-custom-slot-example"}

::tip{to="#slots"}
Vous pouvez également utiliser les emplacements `#item`, `#item-leading`, `#item-label` et `#item-trailing` pour personnaliser tous les éléments.
::

## API équipement

### Props équipement

:component-props

### Slots

:component-slots

## Thème

:component-theme

## Changelog

:component-changelog
