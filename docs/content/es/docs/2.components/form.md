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

@@pH000@@Uso del producto

Utilice el componente Formulario para validar los datos del formulario utilizando cualquier biblioteca de validación que admita el esquema estándar ](https://github.com/standard-schema/standard-schema) como [Valibot](https://github.com/fabian-hiller/valibot),[Zod](),[Regle](https://github.com/victorgarciaesgi/regle),[Yup](),[Joi]() o [Superstruct](https://github.com/ianstormtaylor/superstruct) o su propia lógica de validación.

Funciona con el componente [FormField](/docs/components/form-field) para mostrar mensajes de error alrededor de los elementos de formulario automáticamente.

### Validación del esquema

Se requieren dos props:

- `state`-un objeto reactivo que mantiene el estado de la forma.
- `schema`-cualquier [Esquema Estándar ](https://github.com/standard-schema/standard-schema) o [Superestructura ](https://github.com/ianstormtaylor/superstruct).

::warning
**No se incluye ninguna biblioteca de validación ** por defecto, asegúrese de **instalar la que necesite **.
::

::tabs{class="gap-0"}
  ::component-example{label="El Valibot"}
  ---
  Nombre del archivo: 'form-example-valibot'
  Props:
    Categoría: W-60
  ---
  ::

  ::component-example{label="El Zod"}
  ---
  Nombre del archivo: 'form-example-zod'
  Props:
    Categoría: W-60
  ---
  ::

  ::component-example{label="Regía"}
  ---
  Nombre: 'form-ejemplo-regla'
  Props:
    Categoría: W-60
  ---
  ::

  ::component-example{label="yup"}
  ---
  Nombre del archivo: 'form-example-yup'
  Props:
    Categoría: W-60
  ---
  ::

  ::component-example{label="Joía"}
  ---
  Nombre: 'form-example-joi'
  Props:
    Categoría: W-60
  ---
  ::

  ::component-example{label="superestructura"}
  ---
  Nombre: 'form-ejemplo-superestructura'
  Props:
    Categoría: W-60
  ---
  ::
::

### Validación personalizada

Utilice el prop `validate` para aplicar su propia lógica de validación.

La función de validación debe devolver una lista de errores con los siguientes atributos:

- `message`-el mensaje de error que se mostrará.
- `name`-el `name` del `FormField` para enviar el error.

::tip
Se puede utilizar junto con el prop `schema` para manejar casos de uso complejos.
::

::component-example
---
Nombre del archivo: 'form-example-basic'
Props:
  Categoría: W-60
---
::

### Informe de errores

Los errores se emparejan con el correspondiente [FormField](/docs/components/form-field) utilizando su `name` prop.

Un esquema como `{ user: z.object({ email: z.string() }) }`{lang="ts"} se aplicará a `<FormField name="user.email">`{lang="vue"}.

::warning
Los errores en los elementos de la matriz incluyen el índice en su nombre (por ejemplo,`tags.0`,`tags.1`) y no coincidirá con `<FormField name="tags">`{lang="vue"} por `name` solo. Use el prop `error-pattern` con una expresión regular como `/^tags\..+/`{lang="ts"} para capturarlos. Esto es especialmente útil para componentes como [InputTags @@@@@@@@@@@@@@@@ph087 @@@.
::

::component-example
---
Nombre: 'forma-ejemplo-error-patrón'
Props:
  Categoría: W-60
---
::

### Eventos de entrada

El componente Formulario activa automáticamente la validación cuando una entrada emite un evento `input`,`change` o `blur`.

- La validación en `input` ocurre **cuando escribe **.
- La validación en `change` se produce cuando **se compromete a un valor**.
- La validación en `blur` ocurre cuando una entrada **pierde focus**.

Puede controlar cuándo ocurre la validación utilizando el prop.`validate-on`.

::tip
El formulario siempre se valida en el envío.
::

::component-example{label="por defecto"}
---
fuente: FALSO
Nombre: 'form-example-elements'
Opciones:
  - name:'Validación-en'
    Etiqueta: 'Validación'
    items:
    @109 @@"input"(en inglés)
    @110 @@"cambio"
    @1111 @@"desambiguación"
    Default:
    @112 @@"input"(en inglés)
    @@113 @@'cambio'
    @114 @@"desambiguación"
    Multiplicación: True
---
::

::tip
Puede utilizar el `useFormField` composable para implementar esto dentro de sus propios componentes.
::

### Evento de error

Puede escuchar el evento `@error` para manejar errores. Este evento se activa cuando se envía el formulario y contiene una matriz de objetos `FormError` con los siguientes campos:

- `id`-la entrada es `id`.
- `name`-el `name` de la `FormField`
- `message`-el mensaje de error que se mostrará.

Aquí hay un ejemplo que enfoca el primer elemento de entrada con un error después de enviar el formulario:

::component-example
---
Nombre: 'form-example-on-error'
Colapso: Verdad
Props:
  Categoría: W-60
---
::

### HTML5 validación: badge{label="4.5+" class="align-text-top"}

Al llamar a `form.submit()` programáticamente, el componente Formulario activa automáticamente la validación HTML5 nativa antes de la presentación.

::note
Esto es particularmente útil cuando el botón de envío está fuera del elemento de formulario, como en un pie de página modal.
::

::component-example
---
Nombre: 'form-example-html5-validation'
Props:
  Categoría: W-60
---
::

### Formularios de anidación

Utilice la prop `nested` para anidar varios componentes de formulario y vincular sus funciones de validación. En este caso, la validación del formulario principal validará automáticamente todos los demás formularios que se encuentren dentro de él.

Los formularios anidados heredan directamente el estado de su padre, por lo que no es necesario definir un estado separado para ellos.Puede usar la prop `name` para apuntar a un atributo anidado dentro del estado del padre.

Se puede utilizar para agregar dinámicamente campos basados en la entrada del usuario:

::component-example
---
Colapso: Verdad
Nombre: 'form-example-nided'
---
::

O para validar entradas de lista:

::component-example
---
Colapso: Verdad
Nombre del archivo: 'form-example-nested-list'
---
::

@@pH134

@135@135@135

Componentes Props

::callout{icon="i-simple-icons-mdnwebdocs" to="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form#attributes" target="_blank"}
Este componente también soporta todos los atributos HTML nativos `<form>`.
::

@137@137@137

Componentes de slots

@138@138@138

Componentes Emisiones

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
| @154 @@@ 161 @|`Promise<void>`{lang="ts-type"}<br><div class="text-toned mt-1"><p>Triggers forma de presentación con validación HTML5.</p></div>|
| @163 @@@ 171 @|`Promise<T>`{lang="ts-type"}<br><div class="text-toned mt-1"><p>Triggers de validación del formulario. Generará cualquier error a menos que `opts.silent` esté configurado como true.</p></div>|
| @173@180| `void`<br><div class="text-toned mt-1"><p>Borra los errores de formulario asociados a una ruta especifica.Si no se proporciona ninguna ruta, borra todos los errores de forma.</p></div>|
| @181 @@ 188 @|`FormErrorWithId[]`{lang="ts-type"}<br><div class="text-toned mt-1"><p>Recupera los errores de formulario asociados con una ruta específica.|
| @@pH190 @@|`void`<br><div class="text-toned mt-1"><p>Configura los errores de forma para una ruta dada.|
| @@pH205 @|`Ref<FormErrorWithId[]>`{lang="ts-type"}<br><div class="text-toned mt-1"><p>Una referencia a la matriz que contiene errores de validación. Utilice esto para acceder o manipular la información de error.</p></div>|
| @2007 @@@ 2009| @2008 @@@ 2008|
| @@|`Ref<boolean>`{lang="ts-type"}`true` si el usuario ha actualizado al menos un campo del formulario.|
| @216 @@@ 218| `ReadonlySet<DeepReadonly<keyof T>>`{lang="ts-type"} Rastrea los campos que han sido modificados por el usuario.|
| @@220@2222| `ReadonlySet<DeepReadonly<keyof T>>`{lang="ts-type"} Rastrea los campos con los que el usuario interactuó.|
| @@224@@226| `ReadonlySet<DeepReadonly<keyof T>>`{lang="ts-type"} Rastrea los campos borrosos por el usuario.|

@228 @@ Proyecto

Componente Tema

@229@229@2009

Categoría: component-changelog
