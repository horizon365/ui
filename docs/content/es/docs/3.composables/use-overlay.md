---
title: UseOverlay
description: 'Un composable para superposiciones de control programático.'
---

xph0000xUso

Utilice el componente `useOverlay` autoimportado para controlar programáticamente los componentes [Modal](/docs/components/modal) y [Slideover](/docs/components/slideover).

::component-example
---
name: 'use-overlay-example'
---
::

El componente `useOverlay` se crea utilizando `createSharedComposable`, asegurando que el mismo estado de superposición se comparta en toda su aplicación.

::note
Espere `overlay.open()` para obtener un valor de la superposición. Esto solo funciona si el componente **overlay emite un evento `close` **.
::

## API

`useOverlay()`x{lang="ts-type"} (Edición española)

El composable `useOverlay` proporciona métodos para administrar superposiciones globalmente. Cada superposición creada devuelve una instancia con sus propios métodos.

### crear ()

`create(component: T, options?: OverlayOptions<ComponentProps<T>>): OverlayInstance<T>`x{lang="ts-type"} (Edición española)

Crear una superposición y devolver una instancia de fábrica.

#### Parámetros

::field-group

  ::field{name="component" type="T" required}
  El componente de superposición para renderizar.
  ::

  ::field{name="options" type="OverlayOptions"}
  Opciones de configuración para la superposición.

    ::collapsible

      ::field-group
        ::field{name="defaultOpen" type="boolean"}
        Abra la superposición inmediatamente después de crearla. Por defecto `false`.
        ::

        ::field{name="props" type="ComponentProps"}
        Un objeto opcional de props para pasar al componente renderizado.
        ::

        ::field{name="destroyOnClose" type="boolean"}
        Elimina la superposición de la memoria cuando se cierra. Por defecto `false`.
        ::
      ::
    ::
  ::
::

### open (en inglés)

`open(id: symbol, props?: ComponentProps<T>): OpenedOverlay<T>`x{lang="ts-type"} (Edición española)

Abra una superposición por su `id`.

#### Parámetros

::field-group
  ::field{name="id" type="symbol" required}
  El identificador de la superposición.
  ::

  ::field{name="props" type="ComponentProps<T>"}
  Un objeto opcional de props para pasar al componente renderizado.
  ::
::

### close (en inglés)

`close(id: symbol, value?: any): void`xx{lang="ts-type"} (Edición española)

Cierre una superposición con su `id`.

#### Parámetros

::field-group
  ::field{name="id" type="symbol" required}
  El identificador de la superposición.
  ::

  ::field{name="value" type="any"}
  Un valor con el que resolver la promesa de superposición.
  ::
::

### closeAll ()

`closeAll(): void`x{lang="ts-type"} (Edición española)

Cierre todas las superficies abiertas.

### patch (en inglés)

`patch(id: symbol, props: Partial<ComponentProps<T>>): void`xx{lang="ts-type"} (Edición española)

Actualizar una superposición por su `id`.

#### Parámetros

::field-group
  ::field{name="id" type="symbol" required}
  El identificador de la superposición.
  ::

  ::field{name="props" type="Partial<ComponentProps<T>>" required}
  Un objeto de props para actualizar en el componente renderizado.
  ::
::

### unmount (en inglés)

`unmount(id: symbol): void`xx{lang="ts-type"} (Edición española)

Quitar una superposición del DOM por su `id`.

#### Parámetros

::field-group
  ::field{name="id" type="symbol" required}
  El identificador de la superposición.
  ::
::

### isAbierto ()

`isOpen(id: symbol): boolean`xx{lang="ts-type"} (Edición española)

Compruebe si una superposición está abierta utilizando su `id`.

#### Parámetros

::field-group
  ::field{name="id" type="symbol" required}
  El identificador de la superposición.
  ::
::

### superposiciones

`overlays: Overlay[]`xx{lang="ts-type"} (Edición española)

Lista en memoria de todas las superposiciones que se crearon.

## Instance API (Edición española)

Estos son los métodos disponibles en la instancia devuelta por `create()`.

### open (en inglés)

`open(props?: ComponentProps<T>): OpenedOverlay<T>`xx{lang="ts-type"} (Edición española)

Abre la superposición. Devuelve un `OpenedOverlay`, una promesa que se resuelve con el valor emitido por el evento `close`.La misma promesa también se expone como `result`, por lo que `const { result } = modal.open()` también funciona.

#### Parámetros

::field-group
  ::field{name="props" type="ComponentProps<T>"}
  Un objeto opcional de props para pasar al componente renderizado.
  ::
::

```vue
<script setup lang="ts">
import { LazyModalExample } from '#components'

const overlay = useOverlay()

const modal = overlay.create(LazyModalExample)

function openModal() {
  modal.open({
    title: 'Welcome'
  })
}
</script>
```

### close ()(en español)

`close(value?: any): void`xx{lang="ts-type"} (Edición española)

Cierra el overlay.

#### Parámetros

::field-group
  ::field{name="value" type="any"}
  Un valor con el que resolver la promesa de superposición.
  ::
::

### patch (Edición española)

`patch(props: Partial<ComponentProps<T>>): void`x{lang="ts-type"} (Edición española)

Actualizar los soportes de la superposición.

#### Parámetros

::field-group
  ::field{name="props" type="Partial<ComponentProps<T>>" required}
  Un objeto de props para actualizar en el componente renderizado.
  ::
::

```vue
<script setup lang="ts">
import { LazyModalExample } from '#components'

const overlay = useOverlay()

const modal = overlay.create(LazyModalExample, {
  props: { title: 'Welcome' }
})

function openModal() {
  modal.open()
}

function updateModalTitle() {
  modal.patch({ title: 'Updated Title' })
}
</script>
```

## Ejemplos

### Con múltiples superposiciones

Este ejemplo muestra cómo administrar varias superposiciones y pasar datos entre ellas:

```vue
<script setup lang="ts">
import { ModalA, ModalB, SlideoverA } from '#components'

const overlay = useOverlay()

// Create with default props
const modalA = overlay.create(ModalA, { props: { title: 'Welcome' } })
const modalB = overlay.create(ModalB)
const slideoverA = overlay.create(SlideoverA)

const openModalA = () => {
  // Open modalA, but override the title prop
  modalA.open({ title: 'Hello' })
}

const openModalB = async () => {
  // Open modalB, and wait for its result
  const input = await modalB.open()

  // Pass the result from modalB to the slideover, and open it
  slideoverA.open({ input })
}
</script>

<template>
  <UButton label="Open Modal" @click="openModalA" />
</template>
```

### Confirmar el diálogo

Este ejemplo demuestra cómo crear un patrón de diálogo de confirmación reutilizable utilizando un componente personalizado `useConfirmDialog` que envuelve `useOverlay`. Este enfoque permite diálogos obstinados adaptados a requisitos comerciales específicos y preferencias de diseño.

1. Crear un componente `ConfirmDialog` que emite un valor booleano cuando se cierra:

```vue [components/ConfirmDialog.vue]
<script lang="ts" setup>
interface ConfirmDialogProps {
  title?: string
  description?: string
}

defineProps<ConfirmDialogProps>()

const emits = defineEmits<{
  close: [value: boolean]
}>()
</script>

<template>
  <UModal
    :title="title"
    :description="description"
    :dismissible="false"
    :ui="{ footer: 'justify-end' }"
  >
    <template #footer>
      <UButton label="Cancel" color="neutral" variant="outline" @click="emits('close', false)" />
      <UButton label="Confirm" color="neutral" @click="emits('close', true)" />
    </template>
  </UModal>
</template>
```

2. Crear un composable `useConfirmDialog` que devuelva una promesa:

```ts [composables/useConfirmDialog.ts]
import { ConfirmDialog } from '#components'

export interface ConfirmDialogOptions {
  title: string
  description?: string
}

export const useConfirmDialog = () => {
  const overlay = useOverlay()

  return (options: ConfirmDialogOptions): Promise<boolean> => {
    const modal = overlay.create(ConfirmDialog, {
      destroyOnClose: true,
      props: options
    })

    return modal.open()
  }
}
```

3. Use el composable en sus componentes:

```vue
<script setup lang="ts">
const confirm = useConfirmDialog()

const handleDelete = async () => {
  const confirmed = await confirm({
    title: 'Delete item',
    description: 'Are you sure you want to delete this item?'
  })

  if (confirmed) {
    console.log('Item deleted')
  }
}
</script>

<template>
  <UButton label="Delete item" @click="handleDelete" />
</template>
```

## Cavanías

### Provide/Inyectar

Al abrir las superposiciones mediante programación (modales, deslizamientos, etc.), el componente de superposición solo puede acceder a los valores inyectados desde el componente que contiene `UApp` (normalmente `app.vue` o componentes de diseño).

Como tal, el uso de `provide()` en páginas o componentes principales no es compatible directamente.Para pasar los valores proporcionados a las superposiciones, el enfoque recomendado es usar props en su lugar:

```vue
<script setup lang="ts">
import { LazyModalExample } from '#components'

const overlay = useOverlay()

const providedValue = inject('valueProvidedInPage')

const modal = overlay.create(LazyModalExample, {
  props: {
    providedValue
  }
})
</script>
```
