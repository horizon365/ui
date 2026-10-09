---
title: SeleccionesMenú
description: Un elemento de selección de búsqueda avanzada.
category: form
keywords:
  - combobox
  - multi select
  - filterable select
links:
  - label: El combobox
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/combobox
  - label: GitHub también
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/SelectMenu.vue
---

xph0000xUso

Utilice la directiva `v-model` para controlar el valor del SelectMenu o la prop `default-value` para establecer el valor inicial cuando no necesite controlar su estado.

::component-code
---
prettier: true
hide:
  - class
ignore:
  - modelValue
  - items
  - class
external:
  - items
  - modelValue
props:
  modelValue: 'Backlog'
  items:
    - Backlog
    - Todo
    - In Progress
    - Done
  class: 'w-48'
---
::

::tip
Utilice esto en un [`Select`](/docs/components/select) para aprovechar el componente [`Combobox`](https://reka-ui.com/docs/components/combobox) de Reka UI que ofrece capacidades de búsqueda y selección múltiple.
::

::note
Este componente es similar al [`InputMenu`](/docs/components/input-menu), pero está utilizando una selección en lugar de una entrada con la búsqueda dentro del menú.
::

### Artículos

Utilice el prop `items` como un array de cadenas, números o booleanos:

::component-code
---
prettier: true
ignore:
  - modelValue
  - items
  - class
external:
  - items
  - modelValue
props:
  modelValue: 'Backlog'
  items:
    - Backlog
    - Todo
    - In Progress
    - Done
  class: 'w-48'
---
::

También puede pasar una matriz de objetos con las siguientes propiedades:

- xx`label?: string`xxx{lang="ts-type"}
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
- xx`ui?: { label?: ClassNameValue, separator?: ClassNameValue, item?: ClassNameValue, itemLeadingIcon?: ClassNameValue, itemLeadingAvatarSize?: ClassNameValue, itemLeadingAvatar?: ClassNameValue, itemLeadingChipSize?: ClassNameValue, itemLeadingChip?: ClassNameValue, itemLabel?: ClassNameValue, itemTrailing?: ClassNameValue, itemTrailingIcon?: ClassNameValue }`xx{lang="ts-type"}

::component-code
---
ignore:
  - modelValue.label
  - items
  - class
external:
  - items
  - modelValue
externalTypes:
  - SelectMenuItem[]
props:
  modelValue:
    label: 'Todo'
  items:
    - label: 'Backlog'
    - label: 'Todo'
    - label: 'In Progress'
    - label: 'Done'
  class: 'w-48'
---
::

::caution
A diferencia del componente [`Select`](/docs/components/select), el SelectMenu espera que todo el objeto se pase a la directiva `v-model` o al prop `default-value` por defecto.
::

También puede pasar una matriz de matrices a la hélice `items` para mostrar grupos separados de elementos.

::component-code
---
prettier: true
ignore:
  - modelValue
  - items
  - class
external:
  - items
  - modelValue
props:
  modelValue: 'Apple'
  items:
    - - Apple
      - Banana
      - Blueberry
      - Grapes
      - Pineapple
    - - Aubergine
      - Broccoli
      - Carrot
      - Courgette
      - Leek
  class: 'w-48'
---
::

### Value Clave de seguridad

Puede optar por vincular una sola propiedad del objeto en lugar de todo el objeto utilizando la prop. `value-key`.

::component-code
---
collapse: true
ignore:
  - modelValue
  - valueKey
  - items
  - class
external:
  - items
  - modelValue
externalTypes:
  - SelectMenuItem[]
props:
  modelValue: 'todo'
  valueKey: 'id'
  items:
    - label: 'Backlog'
      id: 'backlog'
    - label: 'Todo'
      id: 'todo'
    - label: 'In Progress'
      id: 'in_progress'
    - label: 'Done'
      id: 'done'
  class: 'w-48'
---
::

::tip
Utilice el prop `by` para comparar objetos por un campo en lugar de referencia cuando el `model-value` es un objeto.
::

### Multiplicación.

Utilice el prop `multiple` para permitir selecciones múltiples, los elementos seleccionados estarán separados por una coma en el disparador.

::component-code
---
prettier: true
ignore:
  - modelValue
  - items
  - multiple
  - class
external:
  - items
  - modelValue
props:
  modelValue:
    - Backlog
    - Todo
  multiple: true
  items:
    - Backlog
    - Todo
    - In Progress
    - Done
  class: 'w-48'
---
::

::caution
Asegúrese de pasar una matriz a la prop `default-value` o a la directiva `v-model`.
::

### Placeholder (Edición española)

Utilice el prop `placeholder` para establecer un texto de marcador de posición.

::component-code
---
prettier: true
ignore:
  - items
  - class
external:
  - items
props:
  placeholder: 'Select status'
  items:
    - Backlog
    - Todo
    - In Progress
    - Done
  class: 'w-48'
---
::

### Search de entrada

Utilice el prop `search-input` para personalizar u ocultar la entrada de búsqueda (con valor `false`).

Puede pasar cualquier propiedad del componente [Input](/docs/components/input) para personalizarlo.

::component-code
---
prettier: true
ignore:
  - modelValue.label
  - modelValue.icon
  - items
  - class
external:
  - items
  - modelValue
externalTypes:
  - SelectMenuItem[]
props:
  modelValue:
    label: 'Backlog'
    icon: 'i-lucide-circle-help'
  searchInput:
    placeholder: 'Filter...'
    icon: 'i-lucide-search'
  items:
    - label: Backlog
      icon: 'i-lucide-circle-help'
    - label: Todo
      icon: 'i-lucide-circle-plus'
    - label: In Progress
      icon: 'i-lucide-circle-arrow-up'
    - label: Done
      icon: 'i-lucide-circle-check'
  class: 'w-48'
---
::

::tip
Puede configurar el prop `search-input` en `false` para ocultar la entrada de búsqueda.
::

::note
Utilice `:search-input="{ autofocus: false }"` para evitar que la entrada de búsqueda se enfoque cuando se abre el menú, por ejemplo, para evitar abrir el teclado virtual en dispositivos táctiles.
::

### Contenido

Utilice el prop `content` para controlar cómo se representa el contenido de SelectMenu, como su `align` o `side`, por ejemplo.

::component-code
---
prettier: true
ignore:
  - items
  - modelValue
  - class
external:
  - items
  - modelValue
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
  modelValue: 'Backlog'
  content:
    align: center
    side: bottom
    sideOffset: 8
  items:
    - Backlog
    - Todo
    - In Progress
    - Done
  class: 'w-48'
---
::

### Flecha

Utilice el accesorio `arrow` para mostrar una flecha en el SelectMenu.

::component-code
---
prettier: true
ignore:
  - items
  - modelValue
  - class
  - arrow
external:
  - items
  - modelValue
props:
  modelValue: 'Backlog'
  arrow: true
  items:
    - Backlog
    - Todo
    - In Progress
    - Done
  class: 'w-48'
---
::

Xph326xColor en línea

Utilice el accesorio `color` para cambiar el color del anillo cuando el SelectMenu está enfocado.

::component-code
---
prettier: true
ignore:
  - items
  - modelValue
  - class
external:
  - items
  - modelValue
props:
  modelValue: 'Backlog'
  color: neutral
  highlight: true
  items:
    - Backlog
    - Todo
    - In Progress
    - Done
  class: 'w-48'
---
::

::note
El prop `highlight` se utiliza aquí para mostrar el estado de enfoque. Se utiliza internamente cuando se produce un error de validación.
::

### Variante

Utilice el prop `variant` para cambiar la variante del SelectMenu.

::component-code
---
prettier: true
ignore:
  - items
  - modelValue
  - class
external:
  - items
  - modelValue
props:
  modelValue: 'Backlog'
  color: neutral
  variant: subtle
  highlight: false
  items:
    - Backlog
    - Todo
    - In Progress
    - Done
  class: 'w-48'
---
::

### Tamaño

Utilice el prop `size` para cambiar el tamaño del SelectMenu.

::component-code
---
prettier: true
ignore:
  - items
  - modelValue
  - class
external:
  - items
  - modelValue
props:
  modelValue: 'Backlog'
  size: xl
  items:
    - Backlog
    - Todo
    - In Progress
    - Done
  class: 'w-48'
---
::

### Icon

Utilice el prop `icon` para mostrar un [Icon](/docs/components/icon) dentro del SelectMenu.

::component-code
---
prettier: true
ignore:
  - items
  - modelValue
  - class
external:
  - items
  - modelValue
props:
  modelValue: 'Backlog'
  icon: 'i-lucide-search'
  size: md
  items:
    - Backlog
    - Todo
    - In Progress
    - Done
  class: 'w-48'
---
::

### Trailing Icono de instalación

Utilice el prop `trailing-icon` para personalizar el final [Icon](/docs/components/icon).

::component-code
---
prettier: true
ignore:
  - items
  - modelValue
  - class
external:
  - items
  - modelValue
props:
  modelValue: 'Backlog'
  trailingIcon: 'i-lucide-arrow-down'
  size: md
  items:
    - Backlog
    - Todo
    - In Progress
    - Done
  class: 'w-48'
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

### Icono seleccionado

Utilice el prop `selected-icon` para personalizar el icono cuando se selecciona un elemento.

::component-code
---
prettier: true
ignore:
  - items
  - modelValue
  - class
external:
  - items
  - modelValue
props:
  modelValue: 'Backlog'
  selectedIcon: 'i-lucide-flame'
  size: md
  items:
    - Backlog
    - Todo
    - In Progress
    - Done
  class: 'w-48'
---
::

::framework-only
#nuxt
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
Puede personalizar este icono globalmente en su `app.config.ts` bajo la tecla `ui.icons.check`.
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
Puede personalizar este icono de forma global en su XPH475X bajo la tecla XPH476X.
:::
::

### Clear: badge{label="4.4+" class="align-text-top"} (en inglés)

Utilice el accesorio `clear` para mostrar un botón claro cuando se selecciona un valor.

::component-code
---
prettier: true
ignore:
  - items
  - modelValue
  - class
external:
  - items
  - modelValue
items:
  clear:
    - true
    - false
props:
  modelValue: 'Backlog'
  clear: true
  items:
    - Backlog
    - Todo
    - In Progress
    - Done
  class: 'w-48'
---
::

### Clear Icono: badge{label="4.4+" class="align-text-top"} (en español)

Utilisez l'accessoire `clear-icon` pour personnaliser le bouton de nettoyage [Icon](/docs/components/icon).

::component-code
---
prettier: true
ignore:
  - items
  - modelValue
  - class
external:
  - items
  - modelValue
items:
  clear:
    - true
    - false
props:
  modelValue: 'Backlog'
  clear: true
  clearIcon: 'i-lucide-trash'
  items:
    - Backlog
    - Todo
    - In Progress
    - Done
  class: 'w-48'
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

### Avatar en Español

Utilice el accesorio `avatar` para mostrar un [Avatar](/docs/components/avatar) dentro del SelectMenu.

::component-code
---
prettier: true
ignore:
  - items
  - modelValue
  - class
  - avatar.loading
external:
  - items
  - modelValue
props:
  modelValue: 'Nuxt'
  avatar:
    src: 'https://github.com/nuxt.png'
    loading: lazy
  items:
    - Nuxt
    - NuxtHub
    - NuxtLabs
    - Nuxt Modules
    - Nuxt Community
  class: 'w-48'
---
::

### Cargando

Utilice el accesorio `loading` para mostrar un icono de carga en el SelectMenu.

::component-code
---
prettier: true
ignore:
  - items
  - modelValue
  - class
external:
  - items
  - modelValue
props:
  modelValue: 'Backlog'
  loading: true
  trailing: false
  items:
    - Backlog
    - Todo
    - In Progress
    - Done
  class: 'w-48'
---
::

### Loading Icon (en inglés)

Utilice el accesorio `loading-icon` para personalizar el icono de carga.

::component-code
---
prettier: true
ignore:
  - items
  - modelValue
  - class
external:
  - items
  - modelValue
props:
  modelValue: 'Backlog'
  loading: true
  loadingIcon: 'i-lucide-loader'
  items:
    - Backlog
    - Todo
    - In Progress
    - Done
  class: 'w-48'
---
::

::framework-only
#nuxt
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
Puede personalizar este icono de forma global en su `app.config.ts` bajo la tecla `ui.icons.loading`.
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
Puede personalizar este icono de forma global en su `vite.config.ts` bajo la tecla `ui.icons.loading`.
:::
::

### Desactivado

Utilice el prop `disabled` para desactivar el SelectMenu.

::component-code
---
prettier: true
ignore:
  - items
  - placeholder
  - class
external:
  - items
props:
  disabled: true
  placeholder: 'Select status'
  items:
    - Backlog
    - Todo
    - In Progress
    - Done
  class: 'w-48'
---
::

##  Ejemplos

### Con tipo de elementos

Puede utilizar la propiedad `type` con `separator` para mostrar un separador entre elementos o `label` para mostrar una etiqueta.

::component-code
---
collapse: true
ignore:
  - modelValue
  - items
  - class
external:
  - items
  - modelValue
externalTypes:
  - SelectMenuItem[]
props:
  modelValue: 'Apple'
  items:
    - - type: 'label'
        label: 'Fruits'
      - Apple
      - Banana
      - Blueberry
      - Grapes
      - Pineapple
    - - type: 'label'
        label: 'Vegetables'
      - Aubergine
      - Broccoli
      - Carrot
      - Courgette
      - Leek
  class: 'w-48'
---
::

::note
Al usar elementos `label` como encabezados de grupo, pase una matriz de matrices para que una etiqueta se filtre junto con su grupo al realizar una búsqueda.
::

### Con icono en los elementos

Puede utilizar la propiedad `icon` para mostrar un [Icon](/docs/components/icon) dentro de los elementos.

::component-example
---
collapse: true
name: 'select-menu-items-icon-example'
---
::

::tip
También puede utilizar la ranura `#leading` para mostrar el icono seleccionado.
::

### Con avatar en los artículos

Puede usar la propiedad `avatar` para mostrar un [Avatar](/docs/components/avatar) dentro de los elementos.

::component-example
---
collapse: true
name: 'select-menu-items-avatar-example'
---
::

::tip
También puede usar la ranura `#leading` para mostrar el avatar seleccionado.
::

### Con chip en artículos

Puede utilizar la propiedad `chip` para mostrar un [Chip](/docs/components/chip) dentro de los elementos.

::component-example
---
collapse: true
name: 'select-menu-items-chip-example'
---
::

::note
En este ejemplo, la ranura `#leading` se utiliza para mostrar el chip seleccionado.
::

### Control estado abierto

Puede controlar el estado abierto mediante el prop `default-open` o la directiva `v-model:open`.

::component-example
---
name: 'select-menu-open-example'
---
::

::note
En este ejemplo, aprovechando [`defineShortcuts`](/docs/composables/define-shortcuts), puede alternar el SelectMenu presionando: kbd{value="O"}.
::

### Control términos de búsqueda

Utilice la directiva `v-model:search-term` para controlar el término de búsqueda.

::component-example
---
name: 'select-menu-search-term-example'
---
::

### Con icono giratorio

Aquí hay un ejemplo con un icono giratorio que indica el estado abierto del SelectMenu.

::component-example
---
name: 'select-menu-icon-example'
---
::

### With crear artículo

Utilice el prop `create-item` para permitir a los usuarios agregar valores personalizados que no están en las opciones predefinidas.

::component-example
---
collapse: true
name: 'select-menu-create-item-example'
---
::

::note
La opción create se muestra cuando no se encuentra ninguna coincidencia de forma predeterminada. Establezca `always` para mostrarla incluso cuando existen valores similares.
::

::tip{to="#emits"}
Utilice el evento `@create` para gestionar la creación del elemento. Recibirá el evento y el elemento como argumentos.
::

### Con artículos recuperados

Puede obtener elementos de una API y usarlos en el SelectMenu.

::component-example
---
collapse: true
name: 'select-menu-fetch-example'
---
::

::note
Este ejemplo utiliza `useLazyFetch` con `immediate: false` para obtener datos solo cuando se abre el menú, evitando llamadas innecesarias a la API al cargar la página.
::

### Con filtro de ignorar

Configure el prop `ignore-filter` en `true` para desactivar la búsqueda interna y utilizar su propia lógica de búsqueda.

::component-example
---
collapse: true
name: 'select-menu-ignore-filter-example'
---
::

::note
Este ejemplo utiliza [`refDebounced`](https://vueuse.org/shared/refDebounced/#refdebounced) para rechazar las llamadas de la API. La búsqueda se difiere con `immediate: false`, por lo que no se realiza ninguna solicitud hasta que se abra el menú.
::

### Con campos de filtro

Utilice el prop `filter-fields` con una matriz de campos para filtrar.

::component-example
---
collapse: true
name: 'select-menu-filter-fields-example'
---
::

::note
Este ejemplo utiliza `useLazyFetch` con `immediate: false` para obtener datos solo cuando se abre el menú, evitando llamadas innecesarias a la API al cargar la página.
::

### Con la virtualización: badge{label="4.1+" class="align-text-top"}

Utilice el prop `virtualize` para habilitar la virtualización de listas grandes como un booleano o un objeto con opciones como `{ estimateSize: 32, overscan: 12 }`.

::warning{to="https://github.com/unovue/reka-ui/issues/1885" target="_blank"}
Cuando está habilitado, todos los grupos se aplanan en una sola lista debido a una limitación de Reka UI.
::

::component-example
---
prettier: true
name: 'select-menu-virtualize-example'
---
::

### Con desplazamiento infinito: badge{label="4.4+" class="align-text-top"}

Puede utilizar el composable [`useInfiniteScroll`](https://vueuse.org/core/useInfiniteScroll/) para cargar más datos a medida que el usuario se desplaza.

::component-example
---
prettier: true
collapse: true
highlights:
  - 41
  - 51
overflowHidden: true
name: 'select-menu-infinite-scroll-example'
---
::

::note
Este ejemplo utiliza `useLazyFetch` con `immediate: false`, por lo que los datos solo se cargan a medida que el usuario se desplaza.
::

### Con ancho de contenido completo

Puede ampliar el contenido a todo el ancho de sus elementos añadiendo la clase `min-w-fit` en la ranura `ui.content`.

::component-example
---
name: 'select-menu-content-width-example'
collapse: true
---
::

::tip
También puede cambiar el ancho del contenido de forma global en su `app.config.ts`:

```
export default defineAppConfig({
  ui: {
    selectMenu: {
      slots: {
        content: 'min-w-fit'
      }
    }
  }
})
```
::

### As un selector de país

Puede utilizar el SelectMenu como selector de país con carga lenta. Los países solo se recuperan cuando se abre el menú por primera vez.

::component-example
---
collapse: true
name: 'select-menu-countries-example'
---
::

::note
Este ejemplo utiliza `useLazyFetch` con `immediate: false` para cargar solo los países cuando se abre el menú por primera vez.
::

## API (Edición española)

### Props (accesorios)

:component-props

::callout{icon="i-simple-icons-mdnwebdocs" to="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attributes" target="_blank"}
Este componente también admite todos los atributos HTML nativos de `<button>`.
::

### Slots (en inglés)

:component-slots

### Emisiones

:component-emits

### Exposición

Al acceder al componente a través de una referencia de plantilla, puede utilizar lo siguiente:

| Nombre| Tipo|
| ---- | ---- |
| `triggerRef`x{lang="ts-type"} (Edición española)| `Ref<HTMLButtonElement \| null>`x{lang="ts-type"}|
| `viewportRef`x{lang="ts-type"} (Edición española)| `Ref<HTMLDivElement \| null>`x{lang="ts-type"}|

## Temas

:component-theme

## Changelog (Edición española)

:component-changelog
