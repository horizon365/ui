---
description: Un componente sin cabeza para componentes hijos de tema.
category: layout
links:
  - label: GitHub también
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Theme.vue
---

xph0000xUso

El componente Theme anula las clases **slot por defecto ** y **props** de todos los componentes secundarios sin modificar cada uno individualmente.

::note
El componente Theme no representa ningún elemento HTML, solo proporciona anulaciones de tema a sus hijos.
::

::framework-only
#nuxt
:::tip
Para la configuración del tema a nivel de aplicación, recomendamos usar el archivo `app.config.ts`.
:::

#vue
:::tip
Para la configuración del tema a nivel de aplicación, recomendamos usar el archivo `vite.config.ts` en lugar.
:::
::

### Clases de ranura

Utilice la prop `ui` para anular las clases de ranuras de los componentes descendientes. Las claves son nombres de componentes (camelCase) y los valores son sus anulaciones de clase de ranuras.

::component-example
---
name: 'theme-ui-example'
---
::

### Prop predeterminado: badge{label="4.8+" class="align-text-top"}

Utilice la prop `props` para anular el valor predeterminado de cualquier prop en componentes descendientes. Cada clave se asigna a una parte de los props de ese componente.

::component-example
---
name: 'theme-props-example'
---
::

::tip
Los props explícitos en un componente (por ejemplo, `<UButton color="primary" />`) siempre ganan sobre `<UTheme :props>`. Los valores predeterminados del tema solo se aplican cuando el prop no se pasó explícitamente.
::

## Ejemplos

###  Componentes múltiples

Utilice diferentes teclas en `ui` o `props` para tematizar varios tipos de componentes a la vez.

::component-example
---
name: 'theme-multiple-example'
---
::

### Temas Anidados

Anida múltiples componentes de tema para componer anulaciones. El tema más interno tiene prioridad, mientras que las claves no anuladas se heredan del tema externo.

::component-example
---
name: 'theme-nested-example'
---
::

### Prioridad explícita

La configuración explícita de cualquier prop (incluyendo `ui`) en un componente individual siempre tiene prioridad sobre el componente Tema.

::component-example
---
name: 'theme-priority-example'
---
::

### Propagación profunda

Las anulaciones están disponibles para todos los componentes descendientes, independientemente de cuán profundamente anidados estén.

::component-example
---
name: 'theme-deep-example'
---
::

::note
En este ejemplo, `MyButton` es un componente personalizado que procesa un `UButton` internamente. Las anulaciones de tema aún se aplican porque se propagan a través de todo el árbol de componentes.
::

Componentes de XPH044XFORM

Use el componente Tema para aplicar un estilo coherente en un grupo de componentes de formulario.

::component-example
---
name: 'theme-form-example'
---
::

::tip
`<UFormField>`, `<UFieldGroup>` y `<UAvatarGroup>` mantienen la precedencia sobre `<UTheme :props>` para `size`, `color` y `highlight`. Los errores de validación también fuerzan el color `error` sobre cualquier valor de tema.
::

Componentes ### Prose

Utilice el espacio de nombres `prose` para los componentes de tipografía de tema. Las claves están anidadas debajo de `prose` (por ejemplo, `prose.p`, `prose.code`).

::component-example
---
name: 'theme-prose-example'
---
::

## API (Edición española)

### Accesorios

:component-props

### Slots (Edición española)

:component-slots

## Changelog (Edición española)

:component-changelog
