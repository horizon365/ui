---
title: Usos
description: 'Un composable para mostrar notificaciones de tostadas en su aplicación.'
---

@@pH000@@Uso del producto

Utilice el auto-importado `useToast` componible para mostrar [Toast](/docs/components/toast) notificaciones.

::component-example
---
Nombre: 'use-toast-example'
---
::

- El `useToast` componible utiliza el `useState` de Nuxt para gestionar el estado de tostado, asegurando la reactividad en toda su aplicación.
- Un máximo de 5 tostadas se muestran a la vez por defecto. Al agregar una nueva tostada que exceda este límite, la tostada más antigua se elimina automáticamente. Cambiarlo con el `toaster.max` prop en el `App`](/docs/components/app#props) componente.
- Al eliminar una tostada, hay un retraso de 200 ms antes de que se elimine realmente del estado, lo que permite animaciones de salida.

::warning
Asegúrese de envolver su aplicación con el componente [`App`](/docs/components/app) que utiliza nuestro componente [](https://github.com/nuxt/ui/blob/v4/src/runtime/components/Toaster.vue) que utiliza el componente [](https://reka-ui.com/docs/components/toast#provider) Componente de Reka UI.
::

::tip{to="/docs/components/toast"}
Aprenda a personalizar la apariencia y el comportamiento de las tostadas en la documentación del componente **Toast**.
::

@@pH034

@@

El componente `useToast` proporciona métodos para administrar notificaciones de tostadas a nivel mundial.

@@pH038@add ()

@@@pH039 @

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
        Si el brindis está abierto. Por defecto a `true`.
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
        Ver [Avatar](/docs/components/avatar#props).
        ::

        ::field{name="color" type="string"}
        El color de la tostada. por defecto a `primary`.
        ::

        ::field{name="orientation" type="'horizontal' | 'vertical'"}
        La orientación entre el contenido y las acciones. Por defecto a `vertical`.
        ::

        ::field{name="close" type="boolean | Omit<ButtonProps, LinkPropsKeys>"}
        Personaliza u oculta el botón de cierre (con el valor `false`).
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
        La duración en milisegundos antes de que la tostada se cierre automáticamente. Por defecto a `5000`. Ajuste a `0` para mantener la tostada abierta hasta que se cierre manualmente. También se puede establecer globalmente en el componente [`App`](/docs/components/app).
        ::

        ::field{name="onClick" type="(toast: Toast) => void"}
        Una función de devolución de llamada invocada cuando se hace clic en el brindis.
        ::

        ::field{name="onUpdateOpen" type="(open: boolean) => void"}
        Una función de devolución de llamada invocada cuando el estado de apertura de la tostada cambia. Útil para realizar una acción cuando la tostada se cierra (expiró o se desestimó).
        ::

        ::field{name="type" type="'foreground' | 'background'"}
        Utilice `background` para brindis que no son el resultado de una acción directa del usuario.
        ::

        ::field{name="as" type="any"}
        El elemento o componente que la tostada representa como. Defaults a `li`.
        ::
      ::
    ::
  ::
::

**Devuelve:** El objeto completo `Toast` que se agregó.

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

@@pH083@actualización ()

@@

Actualiza una notificación de tostadas existente.

#### Parámetros

::field-group
  ::field{name="id" type="string | number" required}
  El identificador único de la tostada para actualizar.
  ::

  ::field{name="toast" type="Omit<Partial<Toast>, 'id'>" required}
  Un objeto `Toast` parcial con las propiedades a actualizar. El `id` no se puede cambiar, la tostada se vuelve a abrir y el `duration` se restablece a menos que se pase de nuevo.
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

@@2010@remove ()

@103 @@@ 104 @

Elimina la notificación de tostadas.

@@P105@@Parámetros

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

@@clear@clear ()

@116 @@@ 117 @

Elimina todas las notificaciones de Toast.

```vue
<script setup lang="ts">
const toast = useToast()

function clearAllToasts() {
  toast.clear()
}
</script>
```

@277@Toasts

@128 @@@ 129 @

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
