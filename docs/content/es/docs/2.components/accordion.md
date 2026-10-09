---
description: Un conjunto de paneles plegables.
category: data
keywords:
  - disclosure
  - collapse
  - faq
  - expansion panel
links:
  - label: Acordeón
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/accordion
  - label: GitHub también
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Accordion.vue
---

xph0000xUso

Utilice el componente Acordeón para mostrar una lista de elementos plegables.

::component-code
---
collapse: true
ignore:
  - items
  - ui.content
external:
  - items
externalTypes:
  - AccordionItem[]
hide:
  - class
  - ui
  - defaultValue
props:
  defaultValue: '0'
  class: 'px-4 max-w-lg'
  ui:
    content: 'text-muted'
  items:
    - label: 'Is Nuxt UI free to use?'
      content: 'Yes! Nuxt UI is completely free and open source under the MIT license. All 125+ components are available to everyone.'
    - label: 'Can I use Nuxt UI with Vue without Nuxt?'
      content: 'Yes! While optimized for Nuxt, Nuxt UI works perfectly with standalone Vue projects via our Vite plugin. You can follow the [installation guide](/docs/getting-started/installation/vue) to get started.'
    - label: 'Is Nuxt UI production-ready?'
      content: 'Yes! Nuxt UI is used in production by thousands of applications with extensive tests, regular updates, and active maintenance.'
---
::

### Artículos

Utilice el prop `items` como una matriz de objetos con las siguientes propiedades:

- xx`label?: string`xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
- xxx`icon?: string`xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
- xx`trailingIcon?: string`xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
- xx`value?: string`xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
- xx`class?: any`xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

::component-code
---
ignore:
  - items
external:
  - items
externalTypes:
  - AccordionItem[]
hide:
  - class
props:
  class: 'px-4'
  items:
    - label: 'Icons'
      icon: 'i-lucide-smile'
      content: 'You have nothing to do, @nuxt/icon will handle it automatically.'
    - label: 'Colors'
      icon: 'i-lucide-swatch-book'
      content: 'Choose a primary and a neutral color from your Tailwind CSS theme.'
    - label: 'Components'
      icon: 'i-lucide-box'
      content: 'You can customize components by using the `class` / `ui` props or in your app.config.ts.'
---
::

### Multiplicación

Configure el prop `type` en `multiple` para permitir que varios elementos estén activos al mismo tiempo.

::component-code
---
ignore:
  - type
  - items
external:
  - items
externalTypes:
  - AccordionItem[]
hide:
  - class
props:
  class: 'px-4'
  type: 'multiple'
  items:
    - label: 'Icons'
      icon: 'i-lucide-smile'
      content: 'You have nothing to do, @nuxt/icon will handle it automatically.'
    - label: 'Colors'
      icon: 'i-lucide-swatch-book'
      content: 'Choose a primary and a neutral color from your Tailwind CSS theme.'
    - label: 'Components'
      icon: 'i-lucide-box'
      content: 'You can customize components by using the `class` / `ui` props or in your app.config.ts.'
---
::

### Collapsible (Edición española)

Cuando `type` es `single`, puede configurar el accesorio `collapsible` en `false` para evitar que el elemento activo se colapse.

::component-code
---
ignore:
  - collapsible
  - items
external:
  - items
externalTypes:
  - AccordionItem[]
hide:
  - class
props:
  class: 'px-4'
  collapsible: false
  items:
    - label: 'Icons'
      icon: 'i-lucide-smile'
      content: 'You have nothing to do, @nuxt/icon will handle it automatically.'
    - label: 'Colors'
      icon: 'i-lucide-swatch-book'
      content: 'Choose a primary and a neutral color from your Tailwind CSS theme.'
    - label: 'Components'
      icon: 'i-lucide-box'
      content: 'You can customize components by using the `class` / `ui` props or in your app.config.ts.'
---
::

### Unmount (Edición española)

Utilice el accesorio `unmount-on-hide` para evitar que el contenido se desmonte cuando el acordeón se colapsa.

::component-code
---
ignore:
  - items
external:
  - items
externalTypes:
  - AccordionItem[]
hide:
  - class
props:
  class: 'px-4'
  unmountOnHide: false
  items:
    - label: 'Icons'
      icon: 'i-lucide-smile'
      content: 'You have nothing to do, @nuxt/icon will handle it automatically.'
    - label: 'Colors'
      icon: 'i-lucide-swatch-book'
      content: 'Choose a primary and a neutral color from your Tailwind CSS theme.'
    - label: 'Components'
      icon: 'i-lucide-box'
      content: 'You can customize components by using the `class` / `ui` props or in your app.config.ts.'
---
::

::note
Puede inspeccionar el DOM para ver el contenido de cada elemento que se representa.
::

### Disabled

Utilice la propiedad `disabled` para desactivar el acordeón.

También puede deshabilitar un elemento específico utilizando la propiedad `disabled` en el objeto item.

::component-code
---
ignore:
  - items
external:
  - items
externalTypes:
  - AccordionItem[]
hide:
  - class
props:
  class: 'px-4'
  disabled: true
  items:
    - label: 'Icons'
      icon: 'i-lucide-smile'
      content: 'You have nothing to do, @nuxt/icon will handle it automatically.'
    - label: 'Colors'
      icon: 'i-lucide-swatch-book'
      content: 'Choose a primary and a neutral color from your Tailwind CSS theme.'
      disabled: true
    - label: 'Components'
      icon: 'i-lucide-box'
      content: 'You can customize components by using the `class` / `ui` props or in your app.config.ts.'
---
::

### Trailing Icono de diseño

Utilice el prop `trailing-icon` para personalizar el [Icon](/docs/components/icon) final de cada elemento.

::tip
También puede establecer un icono para un elemento específico mediante la propiedad `trailingIcon` en el objeto elemento.
::

::component-code
---
ignore:
  - items
external:
  - items
externalTypes:
  - AccordionItem[]
hide:
  - class
props:
  class: 'px-4'
  trailingIcon: 'i-lucide-arrow-down'
  items:
    - label: 'Icons'
      icon: 'i-lucide-smile'
      content: 'You have nothing to do, @nuxt/icon will handle it automatically.'
      trailingIcon: 'i-lucide-plus'
    - label: 'Colors'
      icon: 'i-lucide-swatch-book'
      content: 'Choose a primary and a neutral color from your Tailwind CSS theme.'
    - label: 'Components'
      icon: 'i-lucide-box'
      content: 'You can customize components by using the `class` / `ui` props or in your app.config.ts.'
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

## Ejemplos

### Control elemento (s) activo (s)

Puede controlar el elemento activo mediante el uso de la prop `default-value` o la directiva `v-model` con el `value` del elemento. Si no se proporciona `value`, el índice **as predeterminado es un string**.

::component-example
---
name: 'accordion-model-value-example'
props:
  class: 'px-4'
---
::

::tip
Utilice el accesorio `value-key` para cambiar la clave utilizada para hacer coincidir los elementos cuando se proporciona un `v-model` o `default-value`.
::

::caution
Cuando `type="multiple"`, asegúrese de pasar una matriz a la prop `default-value` o a la directiva `v-model`.
::

### Con arrastrar y soltar

Use el composable [`useSortable`](https://vueuse.org/integrations/useSortable/) de [`@vueuse/integrations`](https://vueuse.org/integrations/README.html) para habilitar la funcionalidad de arrastrar y soltar en el acordeón. Esta integración envuelve [Sortable.js](https://sortablejs.github.io/Sortable/) para proporcionar una experiencia de arrastrar y soltar sin problemas.

::component-example
---
name: 'accordion-drag-and-drop-example'
---
::

### Con ranura para el cuerpo

Utilice la ranura `#body` para personalizar el cuerpo de cada elemento.

::component-example
---
name: 'accordion-body-slot-example'
props:
  class: 'px-4'
---
::

::tip
La ranura `#body` incluye algunos estilos predefinidos, use la ranura [`#content` ](#with-content-slot) si desea comenzar desde cero.
::

### Con ranura de contenido

Utilice la ranura `#content` para personalizar el contenido de cada elemento.

::component-example
---
name: 'accordion-content-slot-example'
props:
  class: 'px-4'
---
::

### Con ranura personalizada

Use la propiedad `slot` para personalizar un elemento específico.

Tendrás acceso a las siguientes slots:

- x`#{{ item.slot }}`x{lang="ts-type"}
- x`#{{ item.slot }}-body`x{lang="ts-type"}

::component-example
---
name: 'accordion-custom-slot-example'
props:
  class: 'px-4'
---
::

### Con contenido de marcado

Puede utilizar el componente [Markdown](https://comark.dev/rendering/vue) de `@comark/vue` para representar la reducción en los elementos de acordeón.

::component-example
---
collapse: true
name: 'accordion-markdown-example'
class: 'px-8'
---
::

## API (Edición española)

### Props

:component-props

### Slots en línea

:component-slots

### Emisiones

:component-emits

## Temas

:component-theme

## Changelog (Edición española)

:component-changelog
