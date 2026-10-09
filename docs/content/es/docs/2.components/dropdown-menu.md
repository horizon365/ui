---
title: DropdownMenú
description: Un menú para mostrar acciones al hacer clic en un elemento.
category: overlay
keywords:
  - menu
  - context menu
  - actions
links:
  - label: DropdownMenú
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/dropdown-menu
  - label: GitHub también
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/DropdownMenu.vue
---

xph0000xUso

Utilice un [Button](/docs/components/button) o cualquier otro componente en la ranura predeterminada del menú desplegable.

::component-code
---
prettier: true
collapse: true
ignore:
  - items
  - ui.content
external:
  - items
externalTypes:
  - DropdownMenuItem[][]
props:
  items:
    - - label: Benjamin
        avatar:
          src: 'https://github.com/benjamincanac.png'
          loading: lazy
        type: label
    - - label: Profile
        icon: i-lucide-user
      - label: Billing
        icon: i-lucide-credit-card
      - label: Settings
        icon: i-lucide-cog
        kbds:
          - ','
      - label: Keyboard shortcuts
        icon: i-lucide-monitor
    - - label: Team
        icon: i-lucide-users
        filter:
          placeholder: 'Search members...'
        children:
          - - label: benjamincanac
              avatar:
                src: 'https://github.com/benjamincanac.png'
                loading: lazy
            - label: HugoRCD
              avatar:
                src: 'https://github.com/HugoRCD.png'
                loading: lazy
            - label: atinux
              avatar:
                src: 'https://github.com/atinux.png'
                loading: lazy
            - label: romhml
              avatar:
                src: 'https://github.com/romhml.png'
                loading: lazy
            - label: sandros94
              avatar:
                src: 'https://github.com/sandros94.png'
                loading: lazy
            - label: J-Michalek
              avatar:
                src: 'https://github.com/J-Michalek.png'
                loading: lazy
            - label: hywax
              avatar:
                src: 'https://github.com/hywax.png'
                loading: lazy
      - label: Invite users
        icon: i-lucide-user-plus
        children:
          - - label: Email
              icon: i-lucide-mail
            - label: Message
              icon: i-lucide-message-square
          - - label: More
              icon: i-lucide-circle-plus
              children:
                - label: Import from Slack
                  icon: i-simple-icons-slack
                  to: 'https://slack.com'
                  target: _blank
                - label: Import from Trello
                  icon: i-simple-icons-trello
                - label: Import from Asana
                  icon: i-simple-icons-asana
      - label: New team
        icon: i-lucide-plus
        kbds:
          - meta
          - n
    - - label: GitHub
        icon: i-simple-icons-github
        to: 'https://github.com/nuxt/ui'
        target: _blank
      - label: Support
        icon: i-lucide-life-buoy
        to: '/docs/components/dropdown-menu'
      - label: API
        icon: i-lucide-cloud
        disabled: true
    - - label: Logout
        icon: i-lucide-log-out
        color: error
        kbds:
          - shift
          - meta
          - q
slots:
  default: |

    <UButton icon="i-lucide-menu" color="neutral" variant="outline" />
---

:u-button{icon="i-lucide-menu" color="neutral" variant="outline"}
::

### Artículos

Utilice el prop `items` como una matriz de objetos con las siguientes propiedades:

- x`label?: string`x{lang="ts-type"}
- x`icon?: string`x{lang="ts-type"}
- x`avatar?: AvatarProps`x{lang="ts-type"}xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
- x`kbds?: string[] | KbdProps[]`x{lang="ts-type"} (Edición española)
- x[x`type?: "link" | "label" | "separator" | "checkbox"`x{lang="ts-type"}x](x#with-checkbox-itemsx)
- x[`color?: "error" | "primary" | "secondary" | "success" | "info" | "warning" | "neutral"`x{lang="ts-type"}x](x#with-color-itemsx)
xxx[x`checked?: boolean`x{lang="ts-type"}](x#with-checkbox-itemsx)
- x`disabled?: boolean`x{lang="ts-type"} (Edición española)
- x[x`slot?: string`x{lang="ts-type"}x](x#with-custom-slotx)
- x`onSelect?: (e: Event) => void`x{lang="ts-type"}
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
- x`children?: DropdownMenuItem[] | DropdownMenuItem[][]`x{lang="ts-type"}
- x[x`filter?: boolean | InputProps`x{lang="ts-type"}](x#with-filter-itemsx)
- x`filterFields?: string[]`x{lang="ts-type"} (Edición española)
- x`ignoreFilter?: boolean`xx{lang="ts-type"}
- x`class?: any`x{lang="ts-type"}
- x`ui?: { item?: ClassNameValue, label?: ClassNameValue, separator?: ClassNameValue, itemLeadingIcon?: ClassNameValue, itemLeadingAvatarSize?: ClassNameValue, itemLeadingAvatar?: ClassNameValue, itemLabel?: ClassNameValue, itemLabelExternalIcon?: ClassNameValue, itemTrailing?: ClassNameValue, itemTrailingIcon?: ClassNameValue, itemTrailingKbds?: ClassNameValue, itemTrailingKbdsSize?: ClassNameValue }`x{lang="ts-type"}

Puede pasar cualquier propiedad desde el componente [Link](/docs/components/link#props) como `to`, `target`, etc.

::component-code
---
prettier: true
collapse: true
ignore:
  - items
  - ui.content
external:
  - items
externalTypes:
  - DropdownMenuItem[][]
props:
  items:
    - - label: Benjamin
        avatar:
          src: 'https://github.com/benjamincanac.png'
          loading: lazy
        type: label
    - - label: Profile
        icon: i-lucide-user
      - label: Billing
        icon: i-lucide-credit-card
      - label: Settings
        icon: i-lucide-cog
        kbds:
          - ','
      - label: Keyboard shortcuts
        icon: i-lucide-monitor
    - - label: Team
        icon: i-lucide-users
      - label: Invite users
        icon: i-lucide-user-plus
        children:
          - - label: Email
              icon: i-lucide-mail
            - label: Message
              icon: i-lucide-message-square
          - - label: More
              icon: i-lucide-circle-plus
              children:
                - label: Import from Slack
                  icon: i-simple-icons-slack
                  to: 'https://slack.com'
                  target: _blank
                - label: Import from Trello
                  icon: i-simple-icons-trello
                - label: Import from Asana
                  icon: i-simple-icons-asana
      - label: New team
        icon: i-lucide-plus
        kbds:
          - meta
          - n
    - - label: GitHub
        icon: i-simple-icons-github
        to: 'https://github.com/nuxt/ui'
        target: _blank
      - label: Support
        icon: i-lucide-life-buoy
        to: '/docs/components/dropdown-menu'
      - label: API
        icon: i-lucide-cloud
        disabled: true
    - - label: Logout
        icon: i-lucide-log-out
        kbds:
          - shift
          - meta
          - q
  ui:
    content: 'w-48'
slots:
  default: |

    <UButton icon="i-lucide-menu" color="neutral" variant="outline" />
---

:u-button{icon="i-lucide-menu" color="neutral" variant="outline"}
::

::note
También puede pasar una matriz de matrices al soporte `items` para crear grupos separados de elementos.
::

::tip
Cada elemento puede tomar una matriz `children` de objetos con las mismas propiedades que el prop `items` para crear un menú anidado que se puede controlar utilizando las propiedades `open`, `defaultOpen` y `content`.
::

### Contenido

Utilice el prop `content` para controlar cómo se representa el contenido del menú desplegable, como su `align` o `side`, por ejemplo.

::component-code
---
prettier: true
collapse: true
ignore:
  - items
  - ui.content
external:
  - items
externalTypes:
  - DropdownMenuItem[]
items:
  content.align:
    - start
    - center
    - end
  content.side:
    - right
    - left
    - top
    - bottom
props:
  items:
    - label: Profile
      icon: i-lucide-user
    - label: Billing
      icon: i-lucide-credit-card
    - label: Settings
      icon: i-lucide-cog
  content:
    align: start
    side: bottom
    sideOffset: 8
  ui:
    content: 'w-48'
slots:
  default: |

    <UButton label="Open" icon="i-lucide-menu" color="neutral" variant="outline" />
---

:u-button{label="Abiertos" icon="i-lucide-menu" color="neutral" variant="outline"}
::

Archivo de la etiqueta: badge{label="4.6+" class="align-text-top"}

Utilice el prop `filter` para mostrar una entrada de filtro dentro del menú desplegable.

::note{to="#with-ignore-filter"}
Utilice el accesorio `ignore-filter` para desactivar la búsqueda interna y utilice su propia lógica de búsqueda.
::

::note{to="#with-filter-fields"}
Utilice el prop `filter-fields` para especificar por qué campos filtrar. De forma predeterminada, utiliza el prop `labelKey`.
::

Puede pasar cualquier propiedad del componente [Input](/docs/components/input) para personalizarlo.

::component-code
---
prettier: true
collapse: true
ignore:
  - items
  - filter.icon
  - content.align
  - ui.content
external:
  - items
externalTypes:
  - DropdownMenuItem[]
props:
  filter:
    icon: i-lucide-search
  items:
    - label: Profile
      icon: i-lucide-user
    - label: Billing
      icon: i-lucide-credit-card
    - label: Settings
      icon: i-lucide-cog
    - label: Team
      icon: i-lucide-users
    - label: Invite users
      icon: i-lucide-user-plus
    - label: New team
      icon: i-lucide-plus
  content:
    align: start
  ui:
    content: 'w-48'
slots:
  default: |

    <UButton label="Open" icon="i-lucide-menu" color="neutral" variant="outline" />
---

:u-button{label="Abiertos" icon="i-lucide-menu" color="neutral" variant="outline"}
::

::tip{to="#with-filter-items"}
También puede habilitar el filtro en submenús específicos utilizando el campo `filter` en elementos con `children`.
::

Xph369xFlecha

Utilice el accesorio `arrow` para mostrar una flecha en el menú desplegable.

::component-code
---
prettier: true
collapse: true
ignore:
  - arrow
  - items
  - ui.content
external:
  - items
externalTypes:
  - DropdownMenuItem[]
props:
  arrow: true
  items:
    - label: Profile
      icon: i-lucide-user
    - label: Billing
      icon: i-lucide-credit-card
    - label: Settings
      icon: i-lucide-cog
  ui:
    content: 'w-48'
slots:
  default: |

    <UButton label="Open" icon="i-lucide-menu" color="neutral" variant="outline" />
---

:u-button{label="Abiertos" icon="i-lucide-menu" color="neutral" variant="outline"}
::

### Tamaño

Utilice el prop `size` para controlar el tamaño del menú desplegable.

::component-code
---
prettier: true
collapse: true
ignore:
  - items
  - content.align
  - ui.content
external:
  - items
externalTypes:
  - DropdownMenuItem[]
props:
  size: xl
  items:
    - label: Profile
      icon: i-lucide-user
    - label: Billing
      icon: i-lucide-credit-card
    - label: Settings
      icon: i-lucide-cog
  content:
    align: start
  ui:
    content: 'w-48'
slots:
  default: |

    <UButton size="xl" label="Open" icon="i-lucide-menu" color="neutral" variant="outline" />
---

:u-button{size="xl" label="Abiertos" icon="i-lucide-menu" color="neutral" variant="outline"}
::

::warning
El accesorio `size` no se asignará al botón, debe configurarlo usted mismo.
::

::note
Cuando se utiliza el mismo tamaño, los elementos del menú desplegable estarán perfectamente alineados con el botón.
::

### Modal is

Utilice el prop `modal` para controlar si el menú desplegable bloquea la interacción con el contenido externo.

::component-code
---
prettier: true
collapse: true
ignore:
  - items
  - ui.content
external:
  - items
externalTypes:
  - DropdownMenuItem[]
props:
  modal: false
  items:
    - label: Profile
      icon: i-lucide-user
    - label: Billing
      icon: i-lucide-credit-card
    - label: Settings
      icon: i-lucide-cog
  ui:
    content: 'w-48'
slots:
  default: |

    <UButton label="Open" icon="i-lucide-menu" color="neutral" variant="outline" />
---

:u-button{label="Abiertos" icon="i-lucide-menu" color="neutral" variant="outline"}
::

### Disabled

Utilice el prop `disabled` para desactivar el menú desplegable.

::component-code
---
prettier: true
collapse: true
ignore:
  - items
  - ui.content
external:
  - items
externalTypes:
  - DropdownMenuItem[]
props:
  disabled: true
  items:
    - label: Profile
      icon: i-lucide-user
    - label: Billing
      icon: i-lucide-credit-card
    - label: Settings
      icon: i-lucide-cog
  ui:
    content: 'w-48'
slots:
  default: |

    <UButton label="Open" icon="i-lucide-menu" color="neutral" variant="outline" />
---

:u-button{label="Abiertos" icon="i-lucide-menu" color="neutral" variant="outline"}
::

## ejemplos

### Con elementos de casilla

Puede utilizar la propiedad `type` con `checkbox` y utilizar las propiedades `checked`/`onUpdateChecked` para controlar el estado comprobado del elemento.

::component-example
---
collapse: true
name: 'dropdown-menu-checkbox-items-example'
---
::

::note
Para garantizar la reactividad para el estado de los elementos `checked`, se recomienda envolver su matriz `items` dentro de un `computed`.
::

### Con artículos de color

Puede utilizar la propiedad `color` para resaltar ciertos elementos con un color.

::component-example
---
collapse: true
name: 'dropdown-menu-color-items-example'
---
::

### Con los elementos de filtro: badge{label="4.6+" class="align-text-top"}

Puede utilizar la propiedad `filter` en elementos con `children` para mostrar una entrada de filtro dentro del submenú.

::component-example
---
collapse: true
name: 'dropdown-menu-filter-items-example'
---
::

### Control estado abierto

Puede controlar el estado abierto utilizando la directiva `default-open` o la directiva `v-model:open`.

::component-example
---
collapse: true
name: 'dropdown-menu-open-example'
---
::

::note
En este ejemplo, aprovechando [`defineShortcuts`](/docs/composables/define-shortcuts), puede alternar el menú desplegable presionando: kbd{value="O"}.
::

### Con slot personalizado

Utilice la propiedad `slot` para personalizar un elemento específico.

Tendrás acceso a los siguientes slots:

- x`#{{ item.slot }}`xx{lang="ts-type"}
- xx`#{{ item.slot }}-leading`x{lang="ts-type"}
- xx`#{{ item.slot }}-label`x{lang="ts-type"}
- xx`#{{ item.slot }}-trailing`x{lang="ts-type"}

::component-example
---
collapse: true
name: 'dropdown-menu-custom-slot-example'
---
::

::tip{to="#slots"}
También puede usar las ranuras `#item`, `#item-leading`, `#item-label` y `#item-trailing` para personalizar todos los artículos.
::

### With switch en los elementos

Puede utilizar la propiedad `slot` con una ranura `#{{ slot }}-trailing` para representar un [Switch](/docs/components/switch) dentro de un elemento.

::component-example
---
collapse: true
name: 'dropdown-menu-switch-items-example'
---
::

### Con ignorar filtro: badge{label="4.6+" class="align-text-top"}

Cuando se utiliza el prop `filter` o el campo `filter` en elementos con `children`, puede establecer el prop `ignore-filter` en `true` para desactivar la búsqueda interna y utilizar su propia lógica de búsqueda.

::component-example
---
collapse: true
name: 'dropdown-menu-ignore-filter-example'
---
::

::note
Este ejemplo utiliza [`refDebounced`](https://vueuse.org/shared/refDebounced/#refdebounced) para refutar las llamadas de la API. La búsqueda se difiere con `immediate: false`, por lo que no se realiza ninguna solicitud hasta que se abra el menú.
::

### Con campos de filtro: badge{label="4.6+" class="align-text-top"}

Cuando se utiliza el prop `filter` o el campo `filter` en elementos con `children`, se puede configurar el prop `filter-fields` con una matriz de campos para filtrar.

::component-example
---
collapse: true
name: 'dropdown-menu-filter-fields-example'
---
::

### With trigger content width (Edición española)

Puede ampliar el contenido a todo el ancho de su botón añadiendo la clase `w-(--reka-dropdown-menu-trigger-width)` en la ranura `ui.content`.

::component-example
---
collapse: true
name: 'dropdown-menu-content-width-example'
---
::

::tip
También puede cambiar el ancho del contenido de forma global en su `app.config.ts`:

```
export default defineAppConfig({
  ui: {
    dropdownMenu: {
      slots: {
        content: 'w-(--reka-dropdown-menu-trigger-width)'
      }
    }
  }
})
```
::

### Extract atajos

Utilice la utilidad [extractShortcuts](/docs/composables/extract-shortcuts) para definir automáticamente los accesos directos de los elementos de menú con una propiedad `kbds`. Extrae recursivamente los accesos directos y devuelve un objeto compatible con [defineShortcuts](xph619).

```vue
<script setup lang="ts">
import type { DropdownMenuItem } from '@nuxt/ui'

const items: DropdownMenuItem[] = [{
  label: 'Invite users',
  icon: 'i-lucide-user-plus',
  children: [{
    label: 'Invite by email',
    icon: 'i-lucide-send-horizontal',
    kbds: ['meta', 'e'],
    onSelect() {
      console.log('Invite by email clicked')
    }
  }, {
    label: 'Invite by link',
    icon: 'i-lucide-link',
    kbds: ['meta', 'i'],
    onSelect() {
      console.log('Invite by link clicked')
    }
  }]
}, {
  label: 'New team',
  icon: 'i-lucide-plus',
  kbds: ['meta', 'n'],
  onSelect() {
    console.log('New team clicked')
  }
}]

defineShortcuts(extractShortcuts(items))
</script>
```

::note
En este ejemplo,: kbd{value="meta"}: kbd{value="E" class="ms-px"},: kbd{value="meta"}: kbd{value="I" class="ms-px"} y: kbd{value="meta"}: kbd{value="N" class="ms-px"} activarían la función `select` del elemento correspondiente.
::

## API (Edición española)

### Propciones

:component-props

### Slots en línea

:component-slots

### Emisiones

:component-emits

## Temas

:component-theme

## Changelog (Edición española)

:component-changelog
