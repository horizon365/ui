---
title: The Usetour
description: 'Un componente para construir visitas guiadas volviendo a anclar un solo Popover a través de los pasos.'
---

@@pH000@@Uso del producto

Utilice el auto-importado `useTour` componible para conducir una visita guiada con un solo [Popover](/docs/components/popover) cuyo ancla se mueve entre los pasos. El componible posee el estado del paso y resuelve el `target` de cada paso en un `reference` que se une a `<UPopover>`, mientras usted mantiene el control total sobre el contenido y la navegación.

::component-example
---
Colapso: Verdad
Nombre: 'use-tour-example'
---
::

Cada paso requiere un `target` al que el popover se ancla. Acepta un selector CSS, un elemento, un elemento virtual (cualquier cosa con `getBoundingClientRect`), o un ref/getter que devuelve uno de esos. Pass `null` para anclar el paso al centro de la ventana gráfica.(`title`,`body`,`side`,...) se pasa a través de intacto y disponible a través de `current`.

```vue
<script setup lang="ts">
const card = useTemplateRef('card')

const tour = useTour([
  { target: '#cta', title: 'Get started' },
  { target: () => card.value, title: 'Profile', side: 'right' },
  { target: null, title: 'All set' }
])
</script>

<template>
  <UButton @click="tour.start()">Start tour</UButton>

  <UPopover :open="tour.open.value" :reference="tour.reference.value" :dismissible="false">
    <template #content>
      <!-- your content + buttons -->
      <UButton :disabled="!tour.hasPrev.value" @click="tour.prev()">Back</UButton>
      <UButton @click="tour.next()">{{ tour.hasNext.value ? 'Next' : 'Finish' }}</UButton>
    </template>
  </UPopover>
</template>
```

- Construido sobre el prop reactivo `reference` del Popover, por lo que el popover se reposiciona suavemente cuando cambia el paso activo.
- El objetivo activo se desplaza a la vista automáticamente cuando un paso se activa.
- Dado que usted mismo procesa el contenido, no hay un tema o una configuración regional adicional que mantener.

@@pH043

@@

### Parámetros

::field-group

  ::field{name="steps" type="MaybeRefOrGetter<TourStep[]>" required}
  Puede ser una matriz estática, un `ref`, o un getter para pasos reactivos.

    ::collapsible

      ::field-group
        ::field{name="target" type="MaybeRefOrGetter<string | ReferenceElement | null | undefined>"}
        Acepta un selector CSS (`'#id'`,`'.class'`, o un id desnudo resuelto como `#id`), un elemento, un elemento virtual o un ref/getter que devuelve uno. Use `null` para centrar el paso en la ventana.
        ::

        ::field{name="[key: string]" type="any"}
        Cualquier campo adicional (`title`,`body`,`side`,...) se pasa a través y disponible a través de `current`.
        ::
      ::
    ::
  ::

  ::field{name="options" type="UseTourOptions"}
  Opciones de configuración del tour.

    ::collapsible

      ::field-group
        ::field{name="initialStep" type="number" default="0"}
        El índice de pasos en el que comienza el recorrido.
        ::

        ::field{name="loop" type="boolean" default="false"}
        Vuelve al primer paso después del último.
        ::

        ::field{name="scrollIntoView" type="boolean | ScrollIntoViewOptions" default="true"}
        Desplácese por el objetivo a la vista cuando un paso se active.
        ::
      ::
    ::
  ::
::

@@50000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000

::field-group

  ::field{name="open" type="Ref<boolean>"}
  The Tour is currently open.
  ::

  ::field{name="index" type="Ref<number>"}
  El índice de pasos actual, fijado al rango de pasos.
  ::

  ::field{name="current" type="ComputedRef<TourStep | undefined>"}
  El objeto de paso actual, o `undefined` cuando no hay pasos.
  ::

  ::field{name="reference" type="ComputedRef<ReferenceElement | undefined>"}
  El ancla resuelto para el paso actual, para pasar a `<UPopover :reference>`.
  ::

  ::field{name="total" type="ComputedRef<number>"}
  El número total de pasos.
  ::

  ::field{name="hasNext" type="ComputedRef<boolean>"}
  Si existe un siguiente paso.
  ::

  ::field{name="hasPrev" type="ComputedRef<boolean>"}
  Si existe un paso anterior.
  ::

  ::field{name="start" type="(index?: number) => void"}
  Abra el recorrido, opcionalmente en un índice dado.
  ::

  ::field{name="next" type="() => void"}
  Ir al siguiente paso. Loops o termina al final dependiendo de la opción `loop`
  ::

  ::field{name="prev" type="() => void"}
  Ir al paso anterior.
  ::

  ::field{name="goTo" type="(index: number) => void"}
  Salta a un paso específico y abre el recorrido.
  ::

  ::field{name="finish" type="() => void"}
  Cierra el tour.
  ::
::
