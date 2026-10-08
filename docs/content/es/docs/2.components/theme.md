---
description: Un componente sin cabeza para componentes hijos del tema.
category: layout
links:
  - label: GitHub también
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Theme.vue
---

@@pH000@@Uso del producto

El componente Theme anula por defecto **slot classes** y **props** de todos los componentes secundarios sin modificar cada uno individualmente. Utiliza el mecanismo `provide`/`inject` de Vue bajo el capó, por lo que las anulaciones se aplican a cualquier profundidad.

::note
El componente Theme no representa ningún elemento HTML, solo proporciona anulaciones de tema a sus hijos.
::

::framework-only
#nuxidad
:::tip
Para la configuración del tema a nivel de aplicación, recomendamos usar el archivo `app.config.ts` en su lugar.
:::

#vista
:::tip
Para la configuración del tema a nivel de aplicación, recomendamos usar el archivo `vite.config.ts`.
:::
::

### clases de ranura

Utilice la prop `ui` para anular las clases de ranuras de los componentes descendientes. Las claves son nombres de componentes (camelCase) y los valores son sus anulaciones de clase de ranuras.

::component-example
---
Nombre: 'theme-ui-ejemplo'
---
::

### Prop valores por defecto: badge{label="4.8+" class="align-text-top"}

Utilice la prop `props` para anular el valor predeterminado de cualquier prop en componentes descendientes. Cada clave se asigna a una parte de los props de ese componente.

::component-example
---
Nombre: 'theme-props-example'
---
::

::tip
Los props explícitos en un componente (por ejemplo,`<UButton color="primary" />`) siempre ganan sobre `<UTheme :props>`. Los valores predeterminados del tema solo se aplican cuando el prop no se pasó explícitamente.
::

@16@Ejemplos

### Componentes múltiples

Utilice diferentes teclas en `ui` o `props` para tematizar varios tipos de componentes a la vez.

::component-example
---
Nombre: 'multiple-ejemplo'
---
::

### Temas anidados

Anida múltiples componentes de tema para componer anulaciones. El tema más interno tiene prioridad, mientras que las claves no anuladas se heredan del tema externo.

::component-example
---
Nombre: 'theme-nided-example'
---
::

### prioridad explícita

La configuración explícita de cualquier accesorio (incluyendo `ui`) en un componente individual siempre tiene prioridad sobre el componente Tema.

::component-example
---
name: 'tema-prioridad-ejemplo'
---
::

### Propagación profunda

Las anulaciones están disponibles para todos los componentes descendientes, independientemente de cuán profundamente anidados estén.

::component-example
---
Nombre: 'theme-deep-example'
---
::

::note
En este ejemplo,`MyButton` es un componente personalizado que representa un `UButton` internamente. Las anulaciones de tema aún se aplican porque se propagan a través de todo el árbol de componentes.
::

### Componentes de la forma

Use el componente Tema para aplicar un estilo coherente en un grupo de componentes de formulario.

::component-example
---
Nombre: 'tema-forma-ejemplo'
---
::

::tip
`<UFormField>`,`<UFieldGroup>` y `<UAvatarGroup>` mantienen la precedencia sobre `<UTheme :props>` para `size`,`color` y `highlight`. Los errores de validación también fuerzan el color `error` sobre cualquier valor de tema.
::

### Componentes de prosa

Utilice el espacio de nombres `prose` para tematizar los componentes de tipografía. Las claves están anidadas debajo de `prose`(por ejemplo,`prose.p`,`prose.code`).

::component-example
---
Nombre: 'tema-prosa-ejemplo'
---
::

@@pH040@@pH0000

@@401@Propuestas

Componentes Props

@@42000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000

Componentes de slots

@@changelog

Categoría: component-changelog
