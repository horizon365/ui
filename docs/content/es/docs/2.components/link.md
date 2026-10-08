---
description: Un envoltorio alrededor de NuxtLink con accesorios adicionales.
category: navigation
keywords:
  - anchor
  - href
  - navigation
links:
  - label: GitHub también
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Link.vue
---

@@pH000@@Uso del producto

El componente Link es una envoltura alrededor de [`<NuxtLink>`](https://nuxt.com/docs/api/components/nuxt-link) usando el [`custom`](https://router.vuejs.org/api/interfaces/RouterLinkProps.html#Properties-custom) prop.

- `inactive-class` prop to set a class when the link is inactive,`active-class` is used when active.
- `exact` prop para usar el estilo `active-class` cuando el enlace está activo y la ruta es exactamente la misma que la ruta actual.
- `exact-query` y `exact-hash` props para estilizar con `active-class` cuando el enlace está activo y la consulta o hash es exactamente la misma que la consulta o hash actual.
  - use `exact-query="partial"` para usar `active-class` cuando el enlace esté activo y la consulta coincida parcialmente con la consulta actual.

El incentivo detrás de esto es proporcionar la misma API que NuxtLink en Nuxt 2/Vue 2. Puede leer más sobre esto en la migración de Vue Router [de la guía Vue 2](https://router.vuejs.org/guide/migration/#removal-of-the-exact-prop-in-router-link).

::note
Es utilizado por el [`Breadcrumb`](/docs/components/breadcrumb),[/docs/components/button),[`ContextMenu`](/docs/components/context-menuPH0444 @@,[`DropdownMenu`](/docs/components/dropdown-menu) y [`NavigationMenu`](/docs/components/navigation-menu).
::

@@50000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000

El `Link` componentes hace un `<a>` etiqueta cuando se proporciona un `to` prop, de lo contrario se hace un `<button>` etiqueta.

::component-code
---
Props:
  Dos: "
  como: "botón"
Los slots:
  por defecto: link
---
::

::note
Puede inspeccionar el HTML renderizado cambiando el `to` prop.
::

@@pH060@Estilo

De forma predeterminada, el enlace tiene estilos activos e inactivos predeterminados, consulte la sección [#theme](#theme).

::component-code
---
Props:
  En: /docs/componentes/enlace
Los slots:
  por defecto: link
---
::

::note
Intente cambiar el prop `to` para ver los estados activo e inactivo.
::

Puede anular este comportamiento utilizando el prop `raw` y proporcionar sus propios estilos utilizando `class`,`active-class` y `inactive-class`.

::component-code
---
Ignora:
  @F070 @
Props:
  RAW: Verdad
  En: /docs/componentes/enlace
  Categoría:'font-bold'
  inactiveClass: 'text-muted'
Los slots:
  por defecto: Link
---

El Link
::

::callout{icon="i-simple-icons-visualstudiocode"}
Si está utilizando la extensión [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss) para VSCode y desea obtener la autofinalización para los accesorios `active-class` y `inactive-class`, puede agregar los siguientes ajustes a su `.vscode/settings.json`:

```json [.vscode/settings.json]
{
  "tailwindCSS.classAttributes": [
    "active-class",
    "inactive-class"
  ]
}
```
::

### Locale: badge{label="4.7+" class="align-text-top"}

El componente Link se integra automáticamente con [`@nuxtjs/i18n`](https://i18n.nuxtjs.org/) cuando se instala. Los enlaces internos se localizan automáticamente utilizando el ayudante `$localePath` sin necesidad de envolver manualmente.

```vue
<template>
  <!-- Automatically becomes /en/about or /fr/about based on current locale -->
  <ULink to="/about">About</ULink>
</template>
```

::tip
Todavía puede utilizar manualmente `localePath()` o `localeRoute()` si es necesario.
::

::note{to="/docs/getting-started/integrations/i18n/nuxt#dynamic-locale"}
Obtenga más información sobre Internacionalización en Nuxt UI.
::

@P2002 @

@300000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000

::component-props
---
Ignora:
  @F104 @ Custom
---
::

::callout{icon="i-simple-icons-mdnwebdocs" to="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#attributes" target="_blank"}
Este componente también soporta todos los atributos HTML nativos `<a>`.
::

@106@106@106

Componentes de slots

@107 @@ Temas

Componente Tema

@108@Changelog

Categoría: component-changelog
