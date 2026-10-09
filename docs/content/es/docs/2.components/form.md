---
description: Un componente de formulario con validación y manejo de envío integrados.
category: form
keywords:
  - validation
  - schema
  - submit
links:
  - label: GitHub también
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Form.vue
---

xph0000xUso

Utilice el componente Formulario para validar los datos del formulario utilizando cualquier biblioteca de validación que admita [xhttps://github.com/standard-schema/standard-schema), como [Valibot](https://github.com/fabian-hiller/valibot), [Zodxph010https://github.com/colinhacks/zod), [Reglexph014https://github.com/victorgarciaesgi/regle), [Yupxph018https://github.com/jquense/yup), xxxxph018https://github.com/jquense/yup), [Joi](https://github.com/hapijs/joi) o [Superestructur](https://github.com/ianstormtaylor/superstruct) o su propia lógica de validación.

Funciona con el componente [FormField](/docs/components/form-field) para mostrar mensajes de error alrededor de los elementos de formulario automáticamente.

### Validación de esquema

Se requieren dos props:

- `state`-un objeto reactivo que contiene el estado de la forma.
- `schema`-cualquier [Standard Schema](https://github.com/standard-schema/standard-schema) o [Superstruct](https://github.com/ianstormtaylor/superstruct).

::warning
**No hay biblioteca de validación incluida** por defecto, asegúrese de **instalar el que necesita **.
::

::tabs{class="gap-0"}
  ::component-example{label="El Valibot"}
  ---
  name: 'form-example-valibot'
  props:
    class: 'w-60'
  ---
  ::

  ::component-example{label="El Zod"}
  ---
  name: 'form-example-zod'
  props:
    class: 'w-60'
  ---
  ::

  ::component-example{label="Regía"}
  ---
  name: 'form-example-regle'
  props:
    class: 'w-60'
  ---
  ::

  ::component-example{label="yup"}
  ---
  name: 'form-example-yup'
  props:
    class: 'w-60'
  ---
  ::

  ::component-example{label="Joía"}
  ---
  name: 'form-example-joi'
  props:
    class: 'w-60'
  ---
  ::

  ::component-example{label="superestructura"}
  ---
  name: 'form-example-superstruct'
  props:
    class: 'w-60'
  ---
  ::
::

### Validación personalizada

Utilice el prop `validate` para aplicar su propia lógica de validación.

La función de validación debe devolver una lista de errores con los siguientes atributos:

- `message`: el mensaje de error que se mostrará.
- `name`-el `name` del `FormField` para enviar el error a.

::tip
Se puede usar junto con el soporte `schema` para manejar casos de uso complejos.
::

::component-example
---
name: 'form-example-basic'
props:
  class: 'w-60'
---
::

### Error de notificación

Los errores se emparejan con el correspondiente [FormField](/docs/components/form-field) usando su prop. `name` Un error en el campo `email` se muestra por `<FormField name="email">`{lang="vue"}.

Un esquema como `{ user: z.object({ email: z.string() }) }`{lang="ts"} se aplicará a `<FormField name="user.email">`{lang="vue"}.

::warning
Los errores en los elementos de la matriz incluyen el índice en su nombre (por ejemplo, `tags.0`, `tags.1`) y no coincidirán con `<FormField name="tags">`{lang="vue"} solo por `name`x.Use el prop `error-pattern` con una expresión regular como `/^tags\..+/`{lang="ts"} para capturarlos.Esto es especialmente útil para componentes como [InputTags](/docs/components/input-tags).
::

::component-example
---
name: 'form-example-error-pattern'
props:
  class: 'w-60'
---
::

### Eventos de entrada

El componente Formulario activa automáticamente la validación cuando una entrada emite un evento `input`, `change` o `blur`.

- La validación en `input` ocurre **as usted escribe e**.
- Validación en `change` se produce cuando **commit a un value**.
- La validación en `blur` ocurre cuando una entrada **pierde focus**.

Puede controlar cuándo ocurre la validación utilizando el accesorio `validate-on`.

::tip
El formulario siempre se valida en el envío.
::

::component-example{label="por defecto"}
---
source: false
name: 'form-example-elements'
options:
  - name: 'validate-on'
    label: 'validate-on'
    items:
    - 'input'
    - 'change'
    - 'blur'
    default:
    - 'input'
    - 'change'
    - 'blur'
    multiple: true
---
::

::tip
Puede usar el composable `useFormField` para implementar esto dentro de sus propios componentes.
::

Evento ### Error

Este evento se activa cuando se envía el formulario y contiene una matriz de objetos `FormError` con los siguientes campos:

- `id`-el `id` de la entrada.
- `name`-el `name` del `FormField`
- `message`-el mensaje de error que se mostrará.

Aquí hay un ejemplo que enfoca el primer elemento de entrada con un error después de enviar el formulario:

::component-example
---
name: 'form-example-on-error'
collapse: true
props:
  class: 'w-60'
---
::

Validación ### HTML5: badge{label="4.5+" class="align-text-top"}

Al llamar a `form.submit()` de forma programática, el componente Formulario activa automáticamente la validación HTML5 nativa antes del envío.

::note
Esto es particularmente útil cuando el botón de envío está fuera del elemento de formulario, como en un pie de página modal.
::

::component-example
---
name: 'form-example-html5-validation'
props:
  class: 'w-60'
---
::

### Formularios de anidamiento

Utilice el prop `nested` para anidar varios componentes de formulario y vincular sus funciones de validación. En este caso, la validación del formulario principal validará automáticamente todos los demás formularios que se encuentren dentro de él.

Los formularios anidados heredan directamente el estado de su padre, por lo que no es necesario definir un estado separado para ellos.Puede usar la prop `name` para apuntar a un atributo anidado dentro del estado del padre.

Se puede utilizar para agregar dinámicamente campos basados en la entrada del usuario:

::component-example
---
collapse: true
name: 'form-example-nested'
---
::

O para validar las entradas de lista:

::component-example
---
collapse: true
name: 'form-example-nested-list'
---
::

## API (Versión)

### Props (accesorios)

:component-props

::callout{icon="i-simple-icons-mdnwebdocs" to="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form#attributes" target="_blank"}
Este componente también admite todos los atributos HTML nativos de `<form>`.
::

### Slots

:component-slots

### Emisiones

:component-emits

### Exposición

Puede acceder a la instancia de componente escrito utilizando [`useTemplateRef`](https://vuejs.org/api/composition-api-helpers.html#usetemplateref).

```vue
<script setup lang="ts">
const form = useTemplateRef('form')
</script>

<template>
  <UForm ref="form" />
</template>
```

Esto le dará acceso a lo siguiente:

| Nombre| Tipo|
| ---- | ---- |
| `submit()`x{lang="ts-type"}| `Promise<void>`{lang="ts-type"} <br> <div class="text-toned mt-1">x<p>Triggers envío de formulario con validación HTML5. </p></div>|
| `validate(opts: { name?: keyof T \| (keyof T)[], silent?: boolean, nested?: boolean, transform?: boolean })`{lang="ts-type"} (Edición española)| `Promise<T>`{lang="ts-type"} <br> <div class="text-toned mt-1">x<p>Triggers validación de formulario. Generará cualquier error a menos que `opts.silent` esté configurado en true.</p></div>|
| `clear(path?: keyof T \| RegExp)`{lang="ts-type"} (Edición española)| `void` <br> <div class="text-toned mt-1"><p>Borra errores de formulario asociados a una ruta de acceso específica.|
| `getErrors(path?: keyof T \| RegExp)`x{lang="ts-type"} y| `FormErrorWithId[]`{lang="ts-type"} <br> <div class="text-toned mt-1"><p>Recupera los errores de formulario asociados a una ruta específica.|
| `setErrors(errors: FormError[], name?: keyof T \| RegExp)`x{lang="ts-type"}| `void` <br> <div class="text-toned mt-1"><p>Establece errores de formulario para una ruta determinada. Si no se proporciona ninguna ruta, anula todos los errores. </p></div>|
| `errors`x{lang="ts-type"} (Edición española)| `Ref<FormErrorWithId[]>`{lang="ts-type"} <br> <div class="text-toned mt-1"><p>Una referencia a la matriz que contiene errores de validación. Use esto para acceder o manipular la información de error.</p></div>|
| `disabled`x{lang="ts-type"} (Edición española)| `Ref<boolean>`x{lang="ts-type"}|
| `dirty`x{lang="ts-type"} (Edición española)| `Ref<boolean>`{lang="ts-type"} `true` si el usuario ha actualizado al menos un campo del formulario.|
| `dirtyFields`x{lang="ts-type"}| `ReadonlySet<DeepReadonly<keyof T>>`{lang="ts-type"} Rastrea los campos que han sido modificados por el usuario.|
| `touchedFields`x{lang="ts-type"} (Edición española)| `ReadonlySet<DeepReadonly<keyof T>>`{lang="ts-type"} Rastrea los campos con los que el usuario interactuó.|
| `blurredFields`x{lang="ts-type"} (Edición española)| `ReadonlySet<DeepReadonly<keyof T>>`{lang="ts-type"} Rastrea los campos borrosos por el usuario.|

## Temas

:component-theme

## Changelog (Edición española)

:component-changelog
