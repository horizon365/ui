---
description: 'Muestra un banner en la parte superior de tu sitio web para informar a los usuarios sobre información importante.'
category: element
keywords:
  - announcement bar
  - top bar
links:
  - label: GitHub también
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Banner.vue
---

@@pH000@@Uso del producto

@0001@Título

Utilice el prop `title` para mostrar un título en el banner.

::component-code
---
Categoría: true
Categoría:! p-0
Props:
  Título:"Esta es una pancarta con un mensaje importante".
---
::

@@pH003@Icon

Utilice el prop `icon` para mostrar un icono en el banner.

::component-code
---
Categoría: true
Categoría:! p-0
Ignora:
  @@005@título
Props:
  Icono: i-lucide-info
  Título:"Esta es una pancarta con un icono".
---
::

@006@color

Utilice el prop `color` para cambiar el color de la bandera.

::component-code
---
Categoría: true
Categoría:! p-0
Ignora:
  @008@icon
  @009@title
Props:
  Categoría:"Neutral"
  Icono: i-lucide-info
  Título:"Esta es una pancarta con un icono".
---
::

@100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000

Utilice el `close` prop para mostrar un [Button](/docs/components/button) para descartar el Banner.

::tip
Se emitirá un evento `close` cuando se haga clic en el botón de cierre.
::

::component-example
---
iframe:
  estilo: 'altura: 48px;'
Desconocido: true
Nombre: 'bandera-ejemplo'
---
#El Código

```vue
<template>
  <UBanner id="example" title="This is a closable banner." close />
</template>
```

::

::note
Cuando se cierra,`banner-${id}` se almacenará en el almacenamiento local para evitar que se muestre de nuevo.: br Para el ejemplo anterior,`banner-example` se almacenará en el almacenamiento local.
::

::caution
Para persistir en el estado despedido a través de las recargas de página, debe especificar un `id` prop. Sin un `id` explícito, el banner solo se ocultará durante la sesión actual y volverá a aparecer en la recarga de página.
::

### Cerrar Icono

Utilice el prop `close-icon` para personalizar el botón de cierre [Icon](/docs/components/icon).

::component-example
---
iframe:
  estilo: 'altura: 48px;'
Desconocido: true
Nombre: 'bandera-ejemplo'
Props:
  Título:'Este es un banner cerrable con un icono de cierre personalizado.'
  Icono: 'i-lucide-x-circle'
---
#Código

```vue
<template>
  <UBanner
    title="This is a closable banner with a custom close icon."
    close
    close-icon="i-lucide-x-circle"
  />
</template>
```

::

::framework-only
#nuxidad
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
Puede personalizar este icono de forma global en su `app.config.ts` bajo la tecla `ui.icons.close`.
:::

#vista
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
Puede personalizar este icono globalmente en su `vite.config.ts` bajo la tecla `ui.icons.close`.
:::
::

@@47@@acciones

Utilice el prop `actions` para añadir algunas acciones [Button](/docs/components/button) al banner.

::component-code
---
Categoría: true
Categoría:! p-0
Ignora:
  @@50000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
  @@500@acciones
  @@50000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
Externo:
  @@56@acciones
Externalidades:
  @@575@@575@575@@575@@575@@575@575@575@@575@575@@5755@@5755)
Props:
  Título:"Esta es una pancarta con acciones".
  Acciones:
    - label: Acción 1
      Categoría: Outline
    - label: Acción 1
      Archivo de la etiqueta: i-lucide-arrow-right
---
::

::note
Los botones de acción son `color="neutral"` y `size="xs"`. Puede personalizar estos valores pasándolos directamente a cada botón de acción.
::

@@2006@enlace

Puede pasar cualquier propiedad del componente [`<NuxtLink>`](https://nuxt.com/docs/api/components/nuxt-link) como `to`,`target`,`rel`, etc.

::component-code
---
Categoría: true
Categoría:! p-0
Desconocido: true
Ignora:
  @@701@title
  @2002@target
Props:
  en: 'https://nuxtlabs.com/'
  Nombre: '_blanco'
  título:'¡ NuxtLabs se une a Vercel!'
  Categoría:"Primary"
---
::

::note
El componente `NuxtLink` heredará todos los demás atributos que pase al componente `User`.
::

@@75@Ejemplos

@@ph076 @@@ en el interior @@ph077 @

Utilice el componente Banner en su `app.vue` o en un diseño:

```vue [app.vue]{3}
<template>
  <UApp>
    <UBanner icon="i-lucide-construction" title="Nuxt UI v4 has been released!" />

    <UHeader />

    <UMain>
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </UMain>

    <UFooter />
  </UApp>
</template>
```

@@pH096

@@pH097@@Propuestas

Componentes Props

@098@098@098

Componentes de slots

@099@@Emisiones

Componentes Emisiones

@100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000

Componente Tema

@101@Changelog

Categoría: component-changelog
