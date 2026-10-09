---
title: Inputación
description: Autocompletar con sugerencias en tiempo real.
category: form
keywords:
  - combobox
  - typeahead
  - autosuggest
links:
  - label: El combobox
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/combobox
  - label: Autocompletado
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/autocomplete
  - label: GitHub también
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/InputMenu.vue
---

xph0000xUso

Utilice la directiva `v-model` para controlar el valor del InputMenu o la prop `default-value` para establecer el valor inicial cuando no necesite controlar su estado.

::component-code
---
prettier: true
ignore:
  - modelValue
  - items
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
---
::

::tip
Utilice esto sobre un [`Input`](/docs/components/input) para aprovechar el componente [`Combobox`](https://reka-ui.com/docs/components/combobox) de Reka UI que ofrece capacidades de autocompletado.
::

::note
Este componente es similar al [`SelectMenu`](/docs/components/select-menu), pero utiliza una entrada en lugar de una selección.
::

### Artículos

Utilice el prop `items` como una matriz de cadenas, números o booleanos:

::component-code
---
prettier: true
ignore:
  - modelValue
  - items
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
---
::

También puede pasar una matriz de objetos con las siguientes propiedades:

- xxx`label?: string`xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
- x`disabled?: boolean`xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

::component-code
---
ignore:
  - modelValue.label
  - items
external:
  - items
  - modelValue
externalTypes:
  - InputMenuItem[]
props:
  modelValue:
    label: 'Todo'
  items:
    - label: 'Backlog'
    - label: 'Todo'
    - label: 'In Progress'
    - label: 'Done'
---
::

También puede pasar una matriz de matrices al soporte `items` para mostrar grupos separados de elementos.

::component-code
---
prettier: true
ignore:
  - modelValue
  - items
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
---
::

### Value Clave de seguridad

Puede optar por vincular una sola propiedad del objeto en lugar de todo el objeto mediante el uso de la prop. `value-key`.

::component-code
---
collapse: true
ignore:
  - modelValue
  - valueKey
  - items
external:
  - items
  - modelValue
externalTypes:
  - InputMenuItem[]
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
---
::

::tip
Utilice la prop `by` para comparar objetos por un campo en lugar de referencia cuando el `model-value` es un objeto.
::

### Multiple (Edición española)

Utilice el prop `multiple` para permitir selecciones múltiples, los elementos seleccionados se mostrarán como etiquetas.

::component-code
---
prettier: true
ignore:
  - modelValue
  - items
  - multiple
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
---
::

::caution
Asegúrese de pasar una matriz a la prop `default-value` o a la directiva `v-model`.
::

### Delete Icono

Con `multiple`, utilice el prop `delete-icon` para personalizar la eliminación [Icon](/docs/components/icon) en las etiquetas.

::component-code
---
prettier: true
ignore:
  - modelValue
  - items
  - multiple
external:
  - items
  - modelValue
props:
  modelValue:
    - Backlog
    - Todo
  multiple: true
  deleteIcon: 'i-lucide-trash'
  items:
    - Backlog
    - Todo
    - In Progress
    - Done
---
::

::framework-only
#nuxt
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
Puede personalizar este icono globalmente en su `app.config.ts` bajo la tecla `ui.icons.close`.
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
Puede personalizar este icono de forma global en su Xph220x bajo la tecla Xph221x.
:::
::

### Placeholder (Edición española)

Utilice el prop `placeholder` para establecer un texto de marcador de posición.

::component-code
---
prettier: true
ignore:
  - items
external:
  - items
props:
  placeholder: 'Select status'
  items:
    - Backlog
    - Todo
    - In Progress
    - Done
---
::

Xph238xMode: badge{label="4.8+" class="align-text-top"} (Edición española)

Configure la prop `mode` en `autocomplete` para convertir el InputMenu en una entrada de texto de forma libre con sugerencias. El `modelValue` se convierte en el texto de entrada (`string`) en lugar de un elemento seleccionado.

::component-example
---
name: 'input-menu-mode-example'
---
::

::caution
Cuando `mode` es `autocomplete`, `multiple`, `by`, `resetSearchTermOnSelect` y `resetModelValueOnClear` no son aplicables.
::

::tip
Utilice el accesorio `content.hideWhenEmpty` para ocultar el menú cuando no haya sugerencias coincidentes.
::

### Contenido

Utilice el prop `content` para controlar cómo se representa el contenido de InputMenu, como su `align` o `side`, por ejemplo.

::component-code
---
prettier: true
ignore:
  - items
  - modelValue
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
---
::

### Flecha

Utilice el accesorio `arrow` para mostrar una flecha en el menú de entrada.

::component-code
---
prettier: true
ignore:
  - items
  - modelValue
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
---
::

### Color (Edición)

Utilice el accesorio `color` para cambiar el color del anillo cuando el InputMenu está enfocado.

::component-code
---
prettier: true
ignore:
  - items
  - modelValue
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
---
::

::note
El prop `highlight` se utiliza aquí para mostrar el estado de enfoque. Se utiliza internamente cuando se produce un error de validación.
::

### Variante

Utilice el accesorio `variant` para cambiar la variante del InputMenu.

::component-code
---
prettier: true
ignore:
  - items
  - modelValue
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
---
::

### Tamaño

Utilice el prop `size` para cambiar el tamaño del menú de entrada.

::component-code
---
prettier: true
ignore:
  - items
  - modelValue
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
---
::

### Icon en

Utilice el prop `icon` para mostrar un [Icon](/docs/components/icon) dentro del InputMenu.

::component-code
---
prettier: true
ignore:
  - items
  - modelValue
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
---
::

XPH393XTrailing Icon de diseño

Utilice el prop `trailing-icon` para personalizar el final [Icon](/docs/components/icon).

::component-code
---
prettier: true
ignore:
  - items
  - modelValue
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
---
::

::framework-only
#nuxt
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
Puede personalizar este icono globalmente en su `app.config.ts` bajo la tecla `ui.icons.chevronDown`.
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
Puede personalizar este icono de forma global en su Xph420x bajo la tecla Xph421x.
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
---
::

::framework-only
#nuxt
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
Puede personalizar este icono globalmente en su `app.config.ts` en la tecla `ui.icons.check`.
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
Puede personalizar este icono de forma global en su XPH445X bajo la tecla XPH446X.
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
---
::

### Clear Icono: badge{label="4.4+" class="align-text-top"}

Utilice el accesorio `clear-icon` para personalizar el botón de borrado [Icon](xph477).

::component-code
---
prettier: true
ignore:
  - items
  - modelValue
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
---
::

::framework-only
#nuxt
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
Puede personalizar este icono globalmente en su `app.config.ts` bajo la tecla `ui.icons.close`.
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
Puede personalizar este icono globalmente en su `vite.config.ts` en la tecla `ui.icons.close`.
:::
::

### Avatar en Español

Utilice el prop `avatar` para mostrar un [Avatar](/docs/components/avatar) dentro del InputMenu.

::component-code
---
prettier: true
ignore:
  - items
  - modelValue
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
---
::

### Cargando

Utilice el accesorio `loading` para mostrar un icono de carga en el menú de entrada.

::component-code
---
prettier: true
ignore:
  - items
  - modelValue
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
---
::

### Loading Icon

Utilice el prop `loading-icon` para personalizar el icono de carga.

::component-code
---
prettier: true
ignore:
  - items
  - modelValue
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

### Desactivado

Utilice el prop `disabled` para desactivar el InputMenu.

::component-code
---
prettier: true
ignore:
  - items
  - placeholder
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
---
::

## Ejemplos

### Con el tipo de elementos

Puede utilizar la propiedad `type` con `separator` para mostrar un separador entre elementos o `label` para mostrar una etiqueta.

::component-code
---
collapse: true
ignore:
  - modelValue
  - items
external:
  - items
  - modelValue
externalTypes:
  - InputMenuItem[]
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
---
::

::note
Al usar elementos `label` como encabezados de grupo, pase una matriz de matrices para que una etiqueta se filtre junto con su grupo al realizar una búsqueda.
::

### Con icono en los elementos

Puede usar la propiedad `icon` para mostrar un [Icon](xph633) dentro de los elementos.

::component-example
---
collapse: true
name: 'input-menu-items-icon-example'
---
::

::tip
También puede usar la ranura `#leading` para mostrar el icono seleccionado.
::

### Con avatar en los artículos

Puede usar la propiedad `avatar` para mostrar un [Avatar](/docs/components/avatar) dentro de los elementos.

::component-example
---
collapse: true
name: 'input-menu-items-avatar-example'
---
::

::tip
También puede utilizar la ranura `#leading` para mostrar el avatar seleccionado.
::

### Con chip en artículos

Puede usar la propiedad `chip` para mostrar un [Chip](/docs/components/chip) dentro de los elementos.

::component-example
---
collapse: true
name: 'input-menu-items-chip-example'
---
::

::note
En este ejemplo, la ranura `#leading` se utiliza para mostrar el chip seleccionado.
::

### Control estado abierto

Puede controlar el estado abierto usando la prop `default-open` o la directiva `v-model:open`.

::component-example
---
name: 'input-menu-open-example'
---
::

::note
En este ejemplo, aprovechando [`defineShortcuts`](/docs/composables/define-shortcuts), puede alternar el menú de entrada presionando: kbd{value="O"}.
::

### Control estado abierto en el enfoque

Puede utilizar los accesorios `open-on-focus` o `open-on-click` para abrir el menú cuando se enfoca o se hace clic en la entrada.

::component-example
---
name: 'input-menu-open-focus-example'
---
::

### Control términos de búsqueda

Utilice la directiva `v-model:search-term` para controlar el término de búsqueda.

::component-example
---
name: 'input-menu-search-term-example'
---
::

### Con icono giratorio

Aquí hay un ejemplo con un icono giratorio que indica el estado abierto del InputMenu.

::component-example
---
name: 'input-menu-icon-example'
---
::

### With crear artículo

Utilice el accesorio `create-item` para permitir a los usuarios agregar valores personalizados que no están en las opciones predefinidas.

::component-example
---
collapse: true
name: 'input-menu-create-item-example'
---
::

::note
La opción create se muestra cuando no se encuentra ninguna coincidencia de forma predeterminada. Establezca `always` para mostrarla incluso cuando existen valores similares.
::

::tip{to="#emits"}
Utilice el evento `@create` para manejar la creación del elemento. Recibirá el evento y el elemento como argumentos.
::

### Con elementos recuperados

Puede obtener elementos de una API y usarlos en el InputMenu.

::component-example
---
collapse: true
name: 'input-menu-fetch-example'
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
name: 'input-menu-ignore-filter-example'
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
name: 'input-menu-filter-fields-example'
---
::

::note
Este ejemplo utiliza `useLazyFetch` con `immediate: false` para obtener datos solo cuando se abre el menú, evitando llamadas innecesarias a la API al cargar la página.
::

### Con virtualización: badge{label="4.1+" class="align-text-top"}

Utilice el prop `virtualize` para habilitar la virtualización de listas grandes como un booleano o un objeto con opciones como `{ estimateSize: 32, overscan: 12 }`.

::warning{to="https://github.com/unovue/reka-ui/issues/1885" target="_blank"}
Cuando está habilitado, todos los grupos se aplanan en una sola lista debido a una limitación de Reka UI.
::

::component-example
---
prettier: true
name: 'input-menu-virtualize-example'
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
name: 'input-menu-infinite-scroll-example'
---
::

::note
Este ejemplo utiliza `useLazyFetch` con `immediate: false` para que los datos solo se carguen a medida que el usuario se desplaza.
::

### Con ancho de contenido completo

Puede ampliar el contenido a todo el ancho de sus elementos añadiendo la clase `min-w-fit` en la ranura `ui.content`.

::component-example
---
name: 'input-menu-content-width-example'
collapse: true
---
::

::tip
También puede cambiar el ancho del contenido de forma global en su `app.config.ts`:

```
export default defineAppConfig({
  ui: {
    inputMenu: {
      slots: {
        content: 'min-w-fit'
      }
    }
  }
})
```
::

### Como selector de país

Puede utilizar el InputMenu como selector de países con carga lenta. Los países solo se obtienen cuando se abre el menú por primera vez.

::component-example
---
collapse: true
name: 'input-menu-countries-example'
---
::

::note
Este ejemplo utiliza `useLazyFetch` con `immediate: false` para cargar solo los países cuando se abre el menú por primera vez.
::

## API (Edición española)

### Props (Edición española)

:component-props

::callout{icon="i-simple-icons-mdnwebdocs" to="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attributes" target="_blank"}
Este componente también admite todos los atributos HTML nativos de `<input>`.
::

### Slots

:component-slots

### Emisiones

:component-emits

### Exposición

Al acceder al componente a través de una referencia de plantilla, puede utilizar lo siguiente:

| Nombre| Tipo|
| ---- | ---- |
| `inputRef`x{lang="ts-type"} (Edición española)| `Ref<HTMLInputElement \| null>`xx{lang="ts-type"} (Edición española)|
| `viewportRef`x{lang="ts-type"} (Edición española)| `Ref<HTMLDivElement \| null>`x{lang="ts-type"} (Edición española)|

## Temas

:component-theme

## Changelog (Edición española)

:component-changelog
