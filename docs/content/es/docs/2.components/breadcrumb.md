---
description: Una jerarquía de enlaces para navegar a través de un sitio web.
category: navigation
keywords:
  - breadcrumbs
links:
  - label: GitHub también
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Breadcrumb.vue
---

xph0000xUso

Utilice el componente Breadcrumb para mostrar la ubicación de la página actual en la jerarquía de su sitio.

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

### Artículos

Utilice el prop `items` como una matriz de objetos con las siguientes propiedades:

- x`label?: string`xx{lang="ts-type"}
- xx`icon?: string`xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
- xx`avatar?: AvatarProps`xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
- xxx`ui?: { item?: ClassNameValue, link?: ClassNameValue, linkLeadingIcon?: ClassNameValue, linkLeadingAvatar?: ClassNameValue, linkLabel?: ClassNameValue, separator?: ClassNameValue, separatorIcon?: ClassNameValue }`xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

Puede pasar cualquier propiedad del componente [Link](/docs/components/link#props) como `to`, `target`, etc.

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
Un `span` se representa en lugar de un enlace cuando la propiedad `to` no está definida.
::

### Separador Icono

Utilice el prop `separator-icon` para personalizar el [Icon](xph077) entre cada elemento.

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
Puede personalizar este icono globalmente en su `app.config.ts` bajo la tecla `ui.icons.chevronRight`.
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
Puede personalizar este icono globalmente en su `vite.config.ts` bajo la tecla `ui.icons.chevronRight`.
:::
::

### Color: badge{label="4.8+" class="align-text-top"} (Edición española)

Utilice el prop `color` para cambiar el color de la migaja de pan activa.

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

##  Ejemplos

### Con ranura separadora

Utilice la ranura `#separator` para personalizar el separador entre cada elemento.

:component-example{name="breadcrumb-separator-slot-example"}

### Con ranura personalizada

Utilice la propiedad `slot` para personalizar un elemento específico.

Tendrás acceso a los siguientes slots:

- x`#{{ item.slot }}`x{lang="ts-type"}
- x`#{{ item.slot }}-leading`x{lang="ts-type"}
- x`#{{ item.slot }}-label`x{lang="ts-type"}
- x`#{{ item.slot }}-trailing`x{lang="ts-type"} (Edición española)

:component-example{name="breadcrumb-custom-slot-example"}

::tip{to="#slots"}
También puede usar las ranuras `#item`, `#item-leading`, `#item-label` y `#item-trailing` para personalizar todos los artículos.
::

## API (Versión)

### Props (accesorios)

:component-props

### Slots

:component-slots

## Temas

:component-theme

## Changelog (Edición española)

:component-changelog
