---
title: Usos
description: 'Un composable para mostrar notificaciones de tostadas en su aplicación.'
---

xph0000xUso

Utilice el componente `useToast` de importación automática para mostrar las notificaciones [Toast](/docs/components/toast).

::component-example
---
name: 'use-toast-example'
---
::

El componente `useToast` utiliza `useState` de Nuxt para gestionar el estado de tostado, lo que garantiza la reactividad en toda la aplicación.
- Un máximo de 5 tostadas se muestran a la vez de forma predeterminada. Al agregar una nueva tostada que exceda este límite, la tostada más antigua se elimina automáticamente. Cámbiela con el prop `toaster.max` en el componente [`App`](/docs/components/app#props).
- Al eliminar un brindis, hay un retraso de 200 ms antes de que realmente se elimine del estado, lo que permite animaciones de salida.

::warning
Asegúrese de envolver su aplicación con el componente [`App`](/docs/components/app) que utiliza nuestro componente [`Toaster`](https://github.com/nuxt/ui/blob/v4/src/runtime/components/Toaster.vue) que utiliza el componente [`ToastProvider`](xph033) de Reka UI.
::

::tip{to="/docs/components/toast"}
Aprenda a personalizar la apariencia y el comportamiento de las tostadas en la documentación del componente **Toast**.
::

## API (Edición española)

`useToast()`xx{lang="ts-type"} (Edición española)

El composable `useToast` proporciona métodos para administrar notificaciones de tostadas a nivel mundial.

### add ()

`add(toast: Partial<Toast>): Toast`xx{lang="ts-type"} (Edición española)

Añade una nueva notificación de brindis.

#### Parámetros

::field-group

  ::field{name="toast" type="Partial<Toast>" required}
  Un objeto `Toast` parcial con las siguientes propiedades:

    ::collapsible

      ::field-group
        ::field{name="id" type="string | number"}
        Un identificador único para el brindis. Si no se proporciona, se genera un identificador único. Reutilizar un identificador existente se fusiona con ese brindis en lugar de agregar uno nuevo.
        ::

        ::field{name="open" type="boolean"}
        Si el brindis está abierto. por defecto a `true`.
        ::

        ::field{name="title" type="string | VNode | (() => VNode)"}
        El título aparece en el brindis.
        ::

        ::field{name="description" type="string | VNode | (() => VNode)"}
        La descripción que aparece en el brindis.
        ::

        ::field{name="icon" type="string"}
        El icono que aparece en el brindis.
        ::

        ::field{name="avatar" type="AvatarProps"}
        El avatar que aparece en el brindis. Ver [Avatar](xph049).
        ::

        ::field{name="color" type="string"}
        El color de la tostada es `primary`.
        ::

        ::field{name="orientation" type="'horizontal' | 'vertical'"}
        La orientación entre el contenido y las acciones. Por defecto `vertical`.
        ::

        ::field{name="close" type="boolean | Omit<ButtonProps, LinkPropsKeys>"}
        Personalice u oculte el botón de cierre (con el valor `false`).
        ::

        ::field{name="closeIcon" type="string"}
        El icono que aparece en el botón Cerrar.
        ::

        ::field{name="actions" type="ButtonProps[]"}
        Ver [Button](/docs/components/button#props).
        ::

        ::field{name="progress" type="boolean | Pick<ProgressProps, 'color' | 'ui'>"}
        Personalice u oculte la barra de progreso (con el valor `false`).
        ::

        ::field{name="duration" type="number"}
        La duración en milisegundos antes de que la tostada se cierre automáticamente. Por defecto es `5000`. Configurar `0` para mantener la tostada abierta hasta que se cierre manualmente. También se puede configurar globalmente en el componente [`App`](/docs/components/app).
        ::

        ::field{name="onClick" type="(toast: Toast) => void"}
        Una función de devolución de llamada invocada cuando se hace clic en el brindis.
        ::

        ::field{name="onUpdateOpen" type="(open: boolean) => void"}
        Una función de devolución de llamada invocada cuando el estado de apertura de la tostada cambia. Útil para realizar una acción cuando la tostada se cierra (expiró o se desestimó).
        ::

        ::field{name="type" type="'foreground' | 'background'"}
        Use `background` para brindis que no son el resultado de una acción directa del usuario.
        ::

        ::field{name="as" type="any"}
        El elemento o componente que la tostada representa como. Predeterminados a `li`.
        ::
      ::
    ::
  ::
::

**Devuelve: ** El objeto `Toast` completo que se ha añadido.

```vue
<script setup lang="ts">
const toast = useToast()

function showToast() {
  toast.add({
    title: 'Success',
    description: 'Your action was completed successfully.',
    color: 'success'
  })
}
</script>
```

### actualización ()

`update(id: string | number, toast: Omit<Partial<Toast>, 'id'>): void`xx{lang="ts-type"} (Edición española)

Actualiza una notificación de tostadas existente.

#### Parámetros

::field-group
  ::field{name="id" type="string | number" required}
  El identificador único de la tostada para actualizar.
  ::

  ::field{name="toast" type="Omit<Partial<Toast>, 'id'>" required}
  El objeto `id` no se puede cambiar, el tostado se vuelve a abrir y `duration` se restablece a menos que se pase de nuevo.
  ::
::

```vue
<script setup lang="ts">
const toast = useToast()

function updateToast(id: string | number) {
  toast.update(id, {
    title: 'Updated Toast',
    description: 'This toast has been updated.'
  })
}
</script>
```

### remove ()(Acción)

`remove(id: string | number): void`x{lang="ts-type"} (Edición española)

Elimina la notificación de tostadas.

#### Parameteros

::field-group
  ::field{name="id" type="string | number" required}
  El identificador único de la tostada a eliminar.
  ::
::

```vue
<script setup lang="ts">
const toast = useToast()

function removeToast(id: string | number) {
  toast.remove(id)
}
</script>
```

### clear (en inglés)

`clear(): void`x{lang="ts-type"} (Edición española)

Elimina todas las notificaciones de tostadas.

```vue
<script setup lang="ts">
const toast = useToast()

function clearAllToasts() {
  toast.clear()
}
</script>
```

### tostados

`toasts: Ref<Toast[]>`x{lang="ts-type"} (Edición española)

Una matriz reactiva que contiene todas las notificaciones de tostadas actuales.

```vue
<script setup lang="ts">
const { toasts } = useToast()
</script>

<template>
  <div>
    <pre>{{ toasts }}</pre>
  </div>
</template>
```
