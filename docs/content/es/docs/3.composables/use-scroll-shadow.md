---
title: Userescrollshadow
description: 'Un componente para aplicar efectos de sombra de desplazamiento en cualquier elemento desplazable.'
---

xph0000xUso

Utilice el componente de importación automática `useScrollShadow` para aplicar sombras de desvanecimiento en los bordes de un elemento desplazable, lo que indica que hay más contenido disponible en la dirección de desplazamiento.

::component-example
---
name: 'use-scroll-shadow-example'
---
::

- Utiliza CSS `mask-image` para desvanecer el contenido en los bordes en lugar de superponer elementos, por lo que funciona en cualquier fondo.
- Detecta automáticamente si el elemento está desbordado y solo aplica sombras cuando sea necesario.
-  Soporta orientaciones tanto verticales como horizontales.

## API (Edición española)

`useScrollShadow(element, options?)`xx{lang="ts-type"} (Edición española)

### Parámetros

::field-group

  ::field{name="element" type="MaybeRef<HTMLElement | null | undefined>" required}
  Una referencia de plantilla o una referencia reactiva al elemento desplazable.
  ::

  ::field{name="options" type="UseScrollShadowOptions"}
  Opciones de configuración para la sombra de desplazamiento.

    ::collapsible

      ::field-group
        ::field{name="size" type="MaybeRefOrGetter<number>" default="24"}
        El tamaño de la sombra en pixeles.
        ::

        ::field{name="orientation" type="MaybeRefOrGetter<'vertical' | 'horizontal'>" default="'vertical'"}
        La dirección de desplazamiento para aplicar sombras.
        ::
      ::
    ::
  ::
::

### Regresar

::field-group

  ::field{name="style" type="ComputedRef<CSSProperties | undefined>"}
  Un objeto de estilo reactivo para enlazar en el elemento desplazable con `:style`. Contiene `maskImage` cuando las sombras están activas, `undefined` de lo contrario.
  ::

  ::field{name="isOverflowing" type="ComputedRef<boolean>"}
  Si el contenido del elemento excede su área visible.
  ::

  ::field{name="arrivedState" type="{ top: boolean, bottom: boolean, left: boolean, right: boolean }"}
  Estado de llegada de desplazamiento reactivo desde [`useScroll`](https://vueuse.org/core/useScroll/).
  ::
::

## Ejemplos

### Horizontal

Utilice la opción `orientation` para contenedores desplazables horizontalmente:

```vue
<script setup lang="ts">
const el = useTemplateRef('el')

const { style } = useScrollShadow(el, { orientation: 'horizontal' })
</script>

<template>
  <div ref="el" class="overflow-x-auto whitespace-nowrap" :style="style">
    <!-- Horizontally scrollable content -->
  </div>
</template>
```

### Tamaño personalizado

Utilice la opción `size` para cambiar el tamaño de la sombra en píxeles:

```vue
<script setup lang="ts">
const el = useTemplateRef('el')

const { style } = useScrollShadow(el, { size: 48 })
</script>

<template>
  <div ref="el" class="max-h-[300px] overflow-y-auto" :style="style">
    <!-- Scrollable content -->
  </div>
</template>
```
