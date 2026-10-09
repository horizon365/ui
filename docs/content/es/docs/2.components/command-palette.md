---
title: Comandancia
description: Una paleta de comandos con búsqueda de texto completo impulsada por Fuse.js para una coincidencia difusa eficiente.
category: navigation
keywords:
  - command menu
  - cmdk
  - spotlight
  - global search
links:
  - label: Fuse.js
    icon: i-custom-fuse-js
    to: https://fusejs.io/
    target: _blank
  - label: Listado de box
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/listbox
  - label: GitHub también
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/CommandPalette.vue
---

xph0000xUso

Utilice la directiva `v-model` para controlar el valor de la CommandPalette o la prop `default-value` para establecer el valor inicial cuando no necesite controlar su estado.

::component-code
---
collapse: true
hide:
  - autofocus
ignore:
  - groups
  - modelValue
  - class
external:
  - groups
  - modelValue
externalTypes:
  - CommandPaletteGroup[]
class: '!p-0'
props:
  modelValue: {}
  autofocus: false
  groups:
    - id: 'users'
      label: 'Users'
      items:
        - label: 'Benjamin Canac'
          suffix: 'benjamincanac'
          avatar:
            src: 'https://github.com/benjamincanac.png'
            loading: lazy
        - label: 'Hugo Richard'
          suffix: 'HugoRCD'
          avatar:
            src: 'https://github.com/HugoRCD.png'
            loading: lazy
        - label: 'Sébastien Chopin'
          suffix: 'atinux'
          avatar:
            src: 'https://github.com/atinux.png'
            loading: lazy
        - label: 'Romain Hamel'
          suffix: 'romhml'
          avatar:
            src: 'https://github.com/romhml.png'
            loading: lazy
        - label: 'Sandro Circi'
          suffix: 'sandros94'
          avatar:
            src: 'https://github.com/sandros94.png'
            loading: lazy
        - label: 'Jakub Michálek'
          suffix: 'J-Michalek'
          avatar:
            src: 'https://github.com/J-Michalek.png'
            loading: lazy
        - label: 'Alex'
          suffix: 'hywax'
          avatar:
            src: 'https://github.com/hywax.png'
            loading: lazy
        - label: 'Maxime Pauvert'
          suffix: 'maximepvrt'
          avatar:
            src: 'https://github.com/maximepvrt.png'
            loading: lazy
  class: 'flex-1 h-80'
---
::

::tip{to="#control-selected-items"}
También puede utilizar el evento `@update:model-value` para escuchar el elemento seleccionado.
::

Xph067xGrupos

El componente CommandPalette filtra los grupos y clasifica los comandos coincidentes por relevancia a medida que los usuarios escriben. Proporciona resultados de búsqueda dinámicos e instantáneos para un descubrimiento eficiente de comandos. Use el prop `groups` como una matriz de objetos con las siguientes propiedades:

- xx`id: string`xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
- xx`label?: string`xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
- xx`slot?: string`xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

::caution
Debe proporcionar un `id` para cada grupo de lo contrario el grupo será ignorado.
::

Cada grupo contiene una matriz `items` de objetos que definen los comandos. Cada elemento puede tener las siguientes propiedades:

- x`prefix?: string`x{lang="ts-type"}
- x`label?: string`x{lang="ts-type"}
- x`suffix?: string`x{lang="ts-type"}
- x`icon?: string`x{lang="ts-type"}
- x`avatar?: AvatarProps`x{lang="ts-type"}
- x`chip?: ChipProps`x{lang="ts-type"}
- x`kbds?: string[] | KbdProps[]`x{lang="ts-type"}xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
- x`active?: boolean`x{lang="ts-type"}
- x`loading?: boolean`x{lang="ts-type"}
- x`disabled?: boolean`x{lang="ts-type"}
- x[x`slot?: string`x{lang="ts-type"}x](x#with-custom-slotx)
- x`placeholder?: string`x{lang="ts-type"}
- x`children?: CommandPaletteItem[]`x{lang="ts-type"} (Edición española)
- x`onSelect?: (e: Event) => void`x{lang="ts-type"}
- x`class?: any`x{lang="ts-type"} (Edición española)
- x`ui?: { item?: ClassNameValue, itemLeadingIcon?: ClassNameValue, itemLeadingAvatarSize?: ClassNameValue, itemLeadingAvatar?: ClassNameValue, itemLeadingChipSize?: ClassNameValue, itemLeadingChip?: ClassNameValue, itemLabel?: ClassNameValue, itemLabelPrefix?: ClassNameValue, itemLabelBase?: ClassNameValue, itemLabelSuffix?: ClassNameValue, itemTrailing?: ClassNameValue, itemTrailingKbds?: ClassNameValue, itemTrailingKbdsSize?: ClassNameValue, itemTrailingHighlightedIcon?: ClassNameValue, itemTrailingIcon?: ClassNameValue }`x{lang="ts-type"}

Puede pasar cualquier propiedad desde el componente [Link](/docs/components/link#props) como `to`, `target`, etc.

::component-code
---
collapse: true
hide:
  - autofocus
ignore:
  - groups
  - modelValue
  - class
external:
  - groups
  - modelValue
externalTypes:
  - CommandPaletteGroup[]
class: '!p-0'
props:
  modelValue: {}
  autofocus: false
  groups:
    - id: 'users'
      label: 'Users'
      items:
        - label: 'Benjamin Canac'
          suffix: 'benjamincanac'
          avatar:
            src: 'https://github.com/benjamincanac.png'
            loading: lazy
        - label: 'Hugo Richard'
          suffix: 'HugoRCD'
          avatar:
            src: 'https://github.com/HugoRCD.png'
            loading: lazy
        - label: 'Sébastien Chopin'
          suffix: 'atinux'
          avatar:
            src: 'https://github.com/atinux.png'
            loading: lazy
        - label: 'Romain Hamel'
          suffix: 'romhml'
          avatar:
            src: 'https://github.com/romhml.png'
            loading: lazy
        - label: 'Sandro Circi'
          suffix: 'sandros94'
          avatar:
            src: 'https://github.com/sandros94.png'
            loading: lazy
        - label: 'Jakub Michálek'
          suffix: 'J-Michalek'
          avatar:
            src: 'https://github.com/J-Michalek.png'
            loading: lazy
        - label: 'Alex'
          suffix: 'hywax'
          avatar:
            src: 'https://github.com/hywax.png'
            loading: lazy
        - label: 'Maxime Pauvert'
          suffix: 'maximepvrt'
          avatar:
            src: 'https://github.com/maximepvrt.png'
            loading: lazy
  class: 'flex-1'
---
::

::tip{to="#with-children-in-items"}
Cada elemento puede tomar una matriz `children` de objetos con las siguientes propiedades para crear submenús:
::

### Multiplicación

Utilice el prop `multiple` para permitir múltiples selecciones.

::component-code
---
collapse: true
hide:
  - autofocus
ignore:
  - groups
  - modelValue
  - multiple
  - class
external:
  - groups
  - modelValue
externalTypes:
  - CommandPaletteGroup[]
class: '!p-0'
props:
  multiple: true
  autofocus: false
  modelValue: []
  groups:
    - id: 'users'
      label: 'Users'
      items:
        - label: 'Benjamin Canac'
          suffix: 'benjamincanac'
          avatar:
            src: 'https://github.com/benjamincanac.png'
            loading: lazy
        - label: 'Hugo Richard'
          suffix: 'HugoRCD'
          avatar:
            src: 'https://github.com/HugoRCD.png'
            loading: lazy
        - label: 'Sébastien Chopin'
          suffix: 'atinux'
          avatar:
            src: 'https://github.com/atinux.png'
            loading: lazy
        - label: 'Romain Hamel'
          suffix: 'romhml'
          avatar:
            src: 'https://github.com/romhml.png'
            loading: lazy
        - label: 'Sandro Circi'
          suffix: 'sandros94'
          avatar:
            src: 'https://github.com/sandros94.png'
            loading: lazy
        - label: 'Jakub Michálek'
          suffix: 'J-Michalek'
          avatar:
            src: 'https://github.com/J-Michalek.png'
            loading: lazy
        - label: 'Alex'
          suffix: 'hywax'
          avatar:
            src: 'https://github.com/hywax.png'
            loading: lazy
        - label: 'Maxime Pauvert'
          suffix: 'maximepvrt'
          avatar:
            src: 'https://github.com/maximepvrt.png'
            loading: lazy
  class: 'flex-1'
---
::

::caution
Asegúrese de pasar una matriz a la prop `default-value` o a la directiva `v-model`.
::

### Placeholder (Edición española)

Utilice el prop `placeholder` para cambiar el texto del marcador de posición.

::component-code
---
collapse: true
hide:
  - autofocus
ignore:
  - class
  - groups
external:
  - groups
externalTypes:
  - CommandPaletteGroup[]
class: '!p-0'
props:
  autofocus: false
  placeholder: 'Search an app...'
  groups:
    - id: 'apps'
      items:
        - label: 'Calendar'
          icon: 'i-lucide-calendar'
        - label: 'Music'
          icon: 'i-lucide-music'
        - label: 'Maps'
          icon: 'i-lucide-map'
  class: 'flex-1'
---
::

Tamaño: badge{label="4.4+" class="align-text-top"}

Utilice el prop `size` para cambiar el tamaño de la CommandPalette.

::component-code
---
collapse: true
hide:
  - autofocus
ignore:
  - class
  - groups
external:
  - groups
externalTypes:
  - CommandPaletteGroup[]
class: '!p-0'
props:
  autofocus: false
  size: 'xl'
  groups:
    - id: 'apps'
      items:
        - label: 'Calendar'
          icon: 'i-lucide-calendar'
        - label: 'Music'
          icon: 'i-lucide-music'
        - label: 'Maps'
          icon: 'i-lucide-map'
  class: 'flex-1'
---
::

### Icon

Utilice el prop `icon` para personalizar la entrada [Icon](/docs/components/icon).

::component-code
---
collapse: true
hide:
  - autofocus
ignore:
  - class
  - groups
external:
  - groups
externalTypes:
  - CommandPaletteGroup[]
class: '!p-0'
props:
  autofocus: false
  icon: 'i-lucide-box'
  groups:
    - id: 'apps'
      items:
        - label: 'Calendar'
          icon: 'i-lucide-calendar'
        - label: 'Music'
          icon: 'i-lucide-music'
        - label: 'Maps'
          icon: 'i-lucide-map'
  class: 'flex-1'
---
::

::framework-only
#nuxt
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
Puede personalizar este icono globalmente en su `app.config.ts` bajo la tecla `ui.icons.search`.
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
Puede personalizar este icono globalmente en su `vite.config.ts` bajo la tecla `ui.icons.search`.
:::
::

### Icono seleccionado

Utilice el prop `selected-icon` para personalizar el elemento seleccionado [Icon](/docs/components/icon).

::component-code
---
collapse: true
hide:
  - autofocus
ignore:
  - groups
  - modelValue
  - multiple
  - class
external:
  - groups
  - modelValue
externalTypes:
  - CommandPaletteGroup[]
class: '!p-0'
props:
  multiple: true
  autofocus: false
  modelValue:
    - label: 'Benjamin Canac'
      suffix: 'benjamincanac'
      avatar:
        src: 'https://github.com/benjamincanac.png'
        loading: lazy
  selectedIcon: 'i-lucide-circle-check'
  groups:
    - id: 'users'
      label: 'Users'
      items:
        - label: 'Benjamin Canac'
          suffix: 'benjamincanac'
          avatar:
            src: 'https://github.com/benjamincanac.png'
            loading: lazy
        - label: 'Hugo Richard'
          suffix: 'HugoRCD'
          avatar:
            src: 'https://github.com/HugoRCD.png'
            loading: lazy
        - label: 'Sébastien Chopin'
          suffix: 'atinux'
          avatar:
            src: 'https://github.com/atinux.png'
            loading: lazy
        - label: 'Romain Hamel'
          suffix: 'romhml'
          avatar:
            src: 'https://github.com/romhml.png'
            loading: lazy
        - label: 'Sandro Circi'
          suffix: 'sandros94'
          avatar:
            src: 'https://github.com/sandros94.png'
            loading: lazy
        - label: 'Jakub Michálek'
          suffix: 'J-Michalek'
          avatar:
            src: 'https://github.com/J-Michalek.png'
            loading: lazy
        - label: 'Alex'
          suffix: 'hywax'
          avatar:
            src: 'https://github.com/hywax.png'
            loading: lazy
        - label: 'Maxime Pauvert'
          suffix: 'maximepvrt'
          avatar:
            src: 'https://github.com/maximepvrt.png'
            loading: lazy
  class: 'flex-1'
---
::

::framework-only
#nuxt
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
Puede personalizar este icono globalmente en su `app.config.ts` bajo la tecla `ui.icons.check`.
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
Puede personalizar este icono globalmente en su `vite.config.ts` bajo la tecla `ui.icons.check`.
:::
::

XPH467XTrailing Icon de seguridad

Utilice el prop `trailing-icon` para personalizar el elemento final [Icon](/docs/components/icon) cuando un elemento tiene hijos.

::component-code
---
collapse: true
prettier: true
hide:
  - autofocus
ignore:
  - groups
  - class
external:
  - groups
externalTypes:
  - CommandPaletteGroup[]
class: '!p-0'
props:
  autofocus: false
  trailingIcon: 'i-lucide-arrow-right'
  groups:
    - id: 'actions'
      items:
        - label: 'Share'
          icon: 'i-lucide-share'
          children:
            - label: 'Email'
              icon: 'i-lucide-mail'
            - label: 'Copy'
              icon: 'i-lucide-copy'
            - label: 'Link'
              icon: 'i-lucide-link'
  class: 'flex-1'
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

### Carga

Utilice el accesorio `loading` para mostrar un icono de carga en la paleta de comandos.

::component-code
---
collapse: true
hide:
  - autofocus
ignore:
  - class
  - groups
external:
  - groups
externalTypes:
  - CommandPaletteGroup[]
class: '!p-0'
props:
  autofocus: false
  loading: true
  groups:
    - id: 'apps'
      items:
        - label: 'Calendar'
          icon: 'i-lucide-calendar'
        - label: 'Music'
          icon: 'i-lucide-music'
        - label: 'Maps'
          icon: 'i-lucide-map'
  class: 'flex-1'
---
::

### Loading Icon (en inglés)

Utilice el prop `loading-icon` para personalizar el icono de carga.

::component-code
---
collapse: true
hide:
  - autofocus
ignore:
  - class
  - groups
external:
  - groups
externalTypes:
  - CommandPaletteGroup[]
class: '!p-0'
props:
  autofocus: false
  loading: true
  loadingIcon: 'i-lucide-loader'
  groups:
    - id: 'apps'
      items:
        - label: 'Calendar'
          icon: 'i-lucide-calendar'
        - label: 'Music'
          icon: 'i-lucide-music'
        - label: 'Maps'
          icon: 'i-lucide-map'
  class: 'flex-1'
---
::

::framework-only
#nuxt
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
Puede personalizar este icono globalmente en su `app.config.ts` bajo la tecla `ui.icons.loading`.
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
Puede personalizar este icono globalmente en su `vite.config.ts` bajo la tecla `ui.icons.loading`.
:::
::

### Cerrar

Utilice el prop `close` para mostrar un [Button](/docs/components/button) para descartar el CommandPalette.

::tip
Se emitirá un evento `update:open` cuando se haga clic en el botón Cerrar.
::

::component-code
---
collapse: true
hide:
  - autofocus
ignore:
  - class
  - groups
  - close
external:
  - groups
externalTypes:
  - CommandPaletteGroup[]
class: '!p-0'
props:
  autofocus: false
  close: true
  groups:
    - id: 'apps'
      items:
        - label: 'Calendar'
          icon: 'i-lucide-calendar'
        - label: 'Music'
          icon: 'i-lucide-music'
        - label: 'Maps'
          icon: 'i-lucide-map'
  class: 'flex-1'
---
::

Puede pasar cualquier propiedad del componente [Button](/docs/components/button) para personalizarlo.

::component-code
---
collapse: true
prettier: true
hide:
  - autofocus
ignore:
  - close.color
  - close.variant
  - groups
  - class
external:
  - groups
externalTypes:
  - CommandPaletteGroup[]
class: '!p-0'
props:
  autofocus: false
  close:
    color: primary
    variant: outline
    class: 'rounded-full'
  groups:
    - id: 'apps'
      items:
        - label: 'Calendar'
          icon: 'i-lucide-calendar'
        - label: 'Music'
          icon: 'i-lucide-music'
        - label: 'Maps'
          icon: 'i-lucide-map'
  class: 'flex-1'
---
::

### Cerrar Icono

Utilice el prop `close-icon` para personalizar el botón de cierre [Icon](/docs/components/icon).

::component-code
---
collapse: true
hide:
  - autofocus
ignore:
  - class
  - groups
  - close
external:
  - groups
externalTypes:
  - CommandPaletteGroup[]
class: '!p-0'
props:
  autofocus: false
  close: true
  closeIcon: 'i-lucide-arrow-right'
  groups:
    - id: 'apps'
      items:
        - label: 'Calendar'
          icon: 'i-lucide-calendar'
        - label: 'Music'
          icon: 'i-lucide-music'
        - label: 'Maps'
          icon: 'i-lucide-map'
  class: 'flex-1'
---
::

::framework-only
#nuxt
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
Puede personalizar este icono globalmente en su `app.config.ts` bajo la tecla `ui.icons.close`.
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
Puede personalizar este icono globalmente en su `vite.config.ts` bajo la tecla `ui.icons.close`.
:::
::

### Atrás

Utilice el accesorio `back` para personalizar u ocultar el botón Atrás (con el valor `false`) que se muestra al navegar por un submenú.

Puede pasar cualquier propiedad del componente [Button](/docs/components/button) para personalizarlo.

::component-code
---
collapse: true
prettier: true
hide:
  - autofocus
ignore:
  - back.color
  - groups
  - class
external:
  - groups
externalTypes:
  - CommandPaletteGroup[]
class: '!p-0'
props:
  autofocus: false
  back:
    color: primary
  groups:
    - id: 'actions'
      items:
        - label: 'Share'
          icon: 'i-lucide-share'
          children:
            - label: 'Email'
              icon: 'i-lucide-mail'
            - label: 'Copy'
              icon: 'i-lucide-copy'
            - label: 'Link'
              icon: 'i-lucide-link'
  class: 'flex-1'
---
::

### Back Icono de

Utilice el accesorio `back-icon` para personalizar el botón de retroceso [Icon](/docs/components/icon).

::component-code
---
collapse: true
hide:
  - autofocus
ignore:
  - class
  - groups
  - back
external:
  - groups
externalTypes:
  - CommandPaletteGroup[]
class: '!p-0'
props:
  autofocus: false
  back: true
  backIcon: 'i-lucide-house'
  groups:
    - id: 'actions'
      items:
        - label: 'Share'
          icon: 'i-lucide-share'
          children:
            - label: 'Email'
              icon: 'i-lucide-mail'
            - label: 'Copy'
              icon: 'i-lucide-copy'
            - label: 'Link'
              icon: 'i-lucide-link'
  class: 'flex-1'
---
::

::framework-only
#nuxt
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
Puede personalizar este icono globalmente en su `app.config.ts` bajo la tecla `ui.icons.arrowLeft`.
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
Puede personalizar este icono globalmente en su `vite.config.ts` bajo la tecla `ui.icons.arrowLeft`.
:::
::

### Desactivado

Utilice el prop `disabled` para desactivar el CommandPalette.

::component-code
---
collapse: true
hide:
  - autofocus
ignore:
  - groups
  - class
external:
  - groups
externalTypes:
  - CommandPaletteGroup[]
class: '!p-0'
props:
  autofocus: false
  disabled: true
  groups:
    - id: 'apps'
      items:
        - label: 'Calendar'
          icon: 'i-lucide-calendar'
        - label: 'Music'
          icon: 'i-lucide-music'
        - label: 'Maps'
          icon: 'i-lucide-map'
  class: 'flex-1'
---
::

## Ejemplos

### Control artículo (s) seleccionado (s)

Puede controlar los elementos seleccionados mediante la prop `default-value` o la directiva `v-model`, mediante el campo `onSelect` en cada elemento o mediante el evento `@update:model-value`.

::component-example
---
collapse: true
name: 'command-palette-select-example'
class: '!p-0'
props:
  autofocus: false
---
::

::tip
Utilice la prop `value-key` para seleccionar un campo de un elemento que se utilizará como valor en lugar del objeto en sí. Use la prop `by` para comparar objetos por un campo en lugar de por referencia.
::

### Control términos de búsqueda

Utiliza la directiva `v-model:search-term` para controlar el término de búsqueda.

::component-example
---
collapse: true
name: 'command-palette-search-term-example'
class: '!p-0'
props:
  autofocus: false
---
::

::note
Este ejemplo utiliza el evento `@update:model-value` para restablecer el término de búsqueda cuando se selecciona un elemento.
::

### Con niños en artículos

Puede crear menús jerárquicos mediante la propiedad `children` en items. Cuando un elemento tiene hijos, mostrará automáticamente un icono de chevron y habilitará la navegación en un submenú.

::component-example
---
collapse: true
prettier: true
name: 'command-palette-items-children-example'
class: '!p-0'
props:
  autofocus: false
---
::

::note
Al navegar en un submenú:
- El término de búsqueda se restablece
- A botón de retroceso aparece en la entrada
- Puede volver al grupo anterior pulsando la tecla: kbd{value="backspace"}
::

### Con elementos recuperados

Puede obtener elementos de una API y usarlos en el CommandPalette.

::component-example
---
collapse: true
name: 'command-palette-fetch-example'
class: '!p-0'
props:
  autofocus: false
---
::

::note
Este ejemplo utiliza `useLazyFetch` con `server: false` para obtener datos en el cliente sin bloquear el renderizado inicial. El estado de carga comprueba el estado de `pending` y `idle` para mostrar un indicador de carga antes y durante la extracción.
::

### Con el filtro ignorar

Puede establecer el campo `ignoreFilter` en `true` en un grupo para desactivar la búsqueda interna y usar su propia lógica de búsqueda.

::component-example
---
collapse: true
name: 'command-palette-ignore-filter-example'
class: '!p-0'
props:
  autofocus: false
---
::

::note
Este ejemplo utiliza [`refDebounced`](https://vueuse.org/shared/refDebounced/#refdebounced) para desacreditar las llamadas de la API. El estado de carga comprueba el estado de `pending` y `idle` para mostrar un indicador de carga antes y durante la búsqueda.
::

### Con elementos post-filtrados

Puede utilizar el campo `postFilter` en un grupo para filtrar elementos después de que se haya realizado la búsqueda.

::component-example
---
collapse: true
name: 'command-palette-post-filter-example'
class: '!p-0'
props:
  autofocus: false
---
::

::note
Comience a escribir para ver los elementos con mayor nivel aparecen.
::

### With búsqueda personalizada de fusibles

Puede utilizar el prop `fuse` para anular las opciones de [useFuse](https://vueuse.org/integrations/useFuse) que por defecto es:

```ts
{
  fuseOptions: {
    ignoreLocation: true,
    threshold: 0.1,
    keys: ['label', 'description', 'suffix']
  },
  resultLimit: 12,
  matchAllWhenSearchEmpty: true
}
```

::tip
El `fuseOptions` son las opciones de [Fuse.js](https://www.fusejs.io/), el `resultLimit` es el número máximo de resultados a devolver y el `matchAllWhenSearchEmpty` es un booleano para que coincida con todos los elementos cuando el término de búsqueda está vacío.
::

Por ejemplo, puede configurar `{ fuseOptions: { includeMatches: true } }`{lang="ts-type"} para resaltar el término de búsqueda en los elementos.

::component-example
---
collapse: true
name: 'command-palette-fuse-example'
class: '!p-0'
props:
  autofocus: false
---
::

###  Con virtualización: badge{label="4.1+" class="align-text-top"}

Utilice el prop `virtualize` para habilitar la virtualización de listas grandes como un booleano o un objeto con opciones como `{ estimateSize: 32, overscan: 12 }`.

::warning{to="https://github.com/unovue/reka-ui/issues/1885" target="_blank"}
Cuando está habilitado, todos los grupos se aplanan en una sola lista debido a una limitación de Reka UI.
::

::component-example
---
collapse: true
name: 'command-palette-virtualize-example'
class: '!p-0'
props:
  autofocus: false
---
::

### Dentro de un Popover

Puede utilizar el componente CommandPalette dentro del contenido de un [Popover](/docs/components/popover).

::component-example
---
collapse: true
name: 'popover-command-palette-example'
props:
  autofocus: false
---
::

### Dentro de un modal

Puede utilizar el componente CommandPalette dentro del contenido de un [Modal](/docs/components/modal).

::component-example
---
collapse: true
name: 'modal-command-palette-example'
props:
  autofocus: false
---
::

::note
Este ejemplo usa `useLazyFetch` con `immediate: false` para obtener datos solo cuando se abre el Modal.
::

### Dentro de un cajón

Puede usar el componente CommandPalette dentro del contenido de un [Drawer](/docs/components/drawer).

::component-example
---
collapse: true
name: 'drawer-command-palette-example'
props:
  autofocus: false
---
::

::note
Este ejemplo utiliza `useLazyFetch` con `immediate: false` para obtener datos solo cuando se abre el cajón.
::

### Listen en estado abierto

Cuando se utiliza el accesorio `close`, puede escuchar el evento `update:open` cuando se hace clic en el botón.

::component-example
---
collapse: true
name: 'command-palette-open-example'
props:
  autofocus: false
---
::

::note
Esto puede ser útil cuando se utiliza el CommandPalette dentro de un [`Modal`](/docs/components/modal) por ejemplo.
::

### Con ranura de pie de página

Utilice la ranura `#footer` para agregar contenido personalizado en la parte inferior de la paleta de comandos, como la ayuda de atajos de teclado o acciones adicionales.

::component-example
---
collapse: true
name: 'command-palette-footer-slot-example'
class: '!p-0'
props:
  autofocus: false
---
::

### Con slot personalizado

Utilice la propiedad `slot` para personalizar un elemento o grupo específico.

Tendrás acceso a las siguientes slots:

- x`#{{ item.slot }}`xx{lang="ts-type"} (Edición española)
- x`#{{ item.slot }}-leading`xx{lang="ts-type"} (Edición española)
- x`#{{ item.slot }}-label`xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
- x`#{{ item.slot }}-trailing`x{lang="ts-type"} (Edición española)

- x`#{{ group.slot }}`xxx{lang="ts-type"}
- xx`#{{ group.slot }}-leading`xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
- x`#{{ group.slot }}-label`xx{lang="ts-type"} (Edición española)
- x`#{{ group.slot }}-trailing`xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

::component-example
---
collapse: true
name: 'command-palette-custom-slot-example'
class: '!p-0'
props:
  autofocus: false
---
::

::tip{to="#slots"}
También puede usar las ranuras `#item`, `#item-leading`, `#item-label` y `#item-trailing` para personalizar todos los artículos.
::

## API (Versión)

### Props

:component-props

### Slots (Edición española)

:component-slots

### Emisiones

:component-emits

## Theme

:component-theme

## Changelog (Edición española)

:component-changelog
