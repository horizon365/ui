---
title: Formalidad
description: Un envoltorio para elementos de formulario que proporciona validación y manejo de errores.
category: form
keywords:
  - field wrapper
  - form label
links:
  - label: GitHub también
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/FormField.vue
---

@@pH000@@Uso del producto

Utilizado en un [Form](/docs/components/form), proporciona validación y manejo de errores.

@@pH005@etiqueta

Utilice el prop `label` para establecer la etiqueta para el control de formulario.

::component-code
---
Categoría: true
Props:
  Etiqueta: correo electrónico
Los slots:
  Default:|

    @@@ 007 @
---

por: u-input {placeholder="Enter your email"}
::

::note
La etiqueta `for` atributo y el formulario de control se asocian con un único `id` si no se proporciona.
::

Cuando se utiliza el prop `required`, se añade un asterisco junto a la etiqueta.

::component-code
---
Categoría: true
Ignora:
  @@pH012@etiqueta
Props:
  Etiqueta: correo electrónico
  Requerido: Verdadero
Los slots:
  Default:|

    @@@ 013
---

por: u-input {placeholder="Enter your email"}
::

@@pH015@Descripción

Utilice el prop `description` para proporcionar información adicional debajo de la etiqueta.

::component-code
---
Categoría: true
Ignora:
  @1700@etiqueta
Props:
  Etiqueta: correo electrónico
  Descripción: Nunca compartiremos su correo electrónico con nadie más.
Los slots:
  Default:|

    @@@ 18 @
---

por: u-input {placeholder="Enter your email" class="w-full"}
::

@200000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000

Utilice el prop `hint` para mostrar un mensaje de sugerencia junto a la etiqueta.

::component-code
---
Categoría: true
Ignora:
  @222@etiqueta
Props:
  Etiqueta: correo electrónico
  Indice: Opcional
Los slots:
  Default:|

    @@ 23 @
---

por: u-input {placeholder="Enter your email"}
::

@2500@ayuda

Utilice el prop `help` para mostrar un mensaje de ayuda debajo del control de formulario. Cuando se usa junto con el prop `error`, el prop `error` tiene prioridad.

::component-code
---
Categoría: true
Ignora:
  @@29@etiqueta
Props:
  Etiqueta: correo electrónico
  Ayuda: Por favor, introduzca una dirección de correo electrónico válida.
Los slots:
  Default:|

    @@@ 30 @
---

por: u-input {placeholder="Enter your email" class="w-full"}
::

@@pH032@@error

Utilice el prop `error` para mostrar un mensaje de error debajo del control de formulario. Cuando se usa junto con el prop `help`, el prop `error` tiene prioridad.

Cuando se utiliza dentro de un [Form](/docs/components/form), esto se establece automáticamente cuando se produce un error de validación.

::component-code
---
Categoría: true
Ignora:
  @@pH040@etiqueta
Props:
  Etiqueta: correo electrónico
  error: Por favor, introduzca una dirección de correo electrónico válida.
Los slots:
  Default:|

    @@@ 41 @
---

por: u-input {placeholder="Enter your email" class="w-full"}
::

::tip{to="/docs/getting-started/theme/design-system#color-system"}
Esto establece el `color` a `error` en el control de formulario. Puede cambiarlo globalmente en su `app.config.ts`.
::

### Patrón de error

Esto es especialmente relevante para componentes con valores de matriz como [InputTags](/docs/components/input-tags), donde los errores incluyen índices de matriz en su nombre (por ejemplo,`tags.0`).

::tip{to="/docs/components/form#error-reporting"}
Vea un ejemplo de cómo usar `error-pattern` dentro de un formulario.
::

@@50000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000

Utilice el prop `size` para cambiar el tamaño del FormField, el `size` está vinculado al control de formulario.

::component-code
---
Categoría: true
Ignora:
  @@57@etiqueta
  @@pH058@descripción
  @595@huef
  @060@ayuda
Props:
  Etiqueta: correo electrónico
  Descripción: Nunca compartiremos su correo electrónico con nadie más.
  Indice: Opcional
  Ayuda: Por favor, introduzca una dirección de correo electrónico válida.
  Tamaño: xl
Los slots:
  Default:|

    @@@ 061
---

por: u-input {placeholder="Enter your email" class="w-full"}
::

### Orientación: badge{label="4.3+" class="align-text-top"}

Utilice la prop `orientation` para cambiar el diseño del FormField. Defaults a `vertical`.

::component-code
---
Categoría: true
Ignora:
  @@pH067@etiqueta
  @068@clase
Props:
  Orientación: Horizontal
  Etiqueta: correo electrónico
  Ayuda: Por favor, introduzca una dirección de correo electrónico válida.
  Categoría: W-72
Los slots:
  Default:|

    @@pf069 @
---

por: u-input {placeholder="Enter your email" class="w-full"}
::

@7101 @

@@2007@@Propuestas

Componentes Props

@@70000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000

Componentes de slots

@@74000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000

Componente Tema

@@750@Changelog

Categoría: component-changelog
