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

xph0000xUso

El componente Link es una envoltura alrededor de [`<NuxtLink>`](https://nuxt.com/docs/api/components/nuxt-link) usando el prop. [`custom`xph008https://router.vuejs.org/api/interfaces/RouterLinkProps.html#Properties-custom).

- `inactive-class` prop para establecer una clase cuando el enlace está inactivo, `active-class` se utiliza cuando está activo.
- `exact` prop para estilizar con `active-class` cuando el enlace está activo y la ruta es exactamente la misma que la ruta actual.
- `exact-query` y `exact-hash` props para usar `active-class` cuando el enlace está activo y la consulta o el hash es exactamente el mismo que la consulta o hash actual.
  - Use `exact-query="partial"` para estilizar con `active-class` cuando el enlace está activo y la consulta coincide parcialmente con la consulta actual.

El incentivo detrás de esto es proporcionar la misma API que NuxtLink en Nuxt 2/Vue 2. Puede leer más al respecto en la guía Vue Router [migration de Vue 2](xph026).

::note
Es utilizado por los componentes [`Breadcrumb`](/docs/components/breadcrumb), [`Button`](/docs/components/button), [xxph030](xph043), [`DropdownMenu`xph046/docs/components/dropdown-menu) y [x`NavigationMenu`/docs/components/navigation-menu).
::

xp053xTítulos

Los componentes `Link` representan una etiqueta `<a>` cuando se proporciona un soporte `to`, de lo contrario representa una etiqueta `<button>`.

::component-code
---
props:
  to: ''
  as: 'button'
slots:
  default: Link
---
::

::note
Puede inspeccionar el HTML renderizado cambiando la prop. `to`.
::

### Estilo

De forma predeterminada, el enlace tiene estilos activos e inactivos predeterminados, consulte la sección [#theme](#theme).

::component-code
---
props:
  to: /docs/components/link
slots:
  default: Link
---
::

::note
Intente cambiar el prop `to` para ver los estados activo e inactivo.
::

Puede anular este comportamiento usando el prop `raw` y proporcionar sus propios estilos usando `class`, `active-class` y `inactive-class`.

::component-code
---
ignore:
  - raw
props:
  raw: true
  to: /docs/components/link
  activeClass: 'font-bold'
  inactiveClass: 'text-muted'
slots:
  default: Link
---

El Link
::

::callout{icon="i-simple-icons-visualstudiocode"}
Si está utilizando la extensión [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss) para VSCode y desea obtener la autofinalización para los accesorios `active-class` y `inactive-class`, puede agregar la siguiente configuración a su `.vscode/settings.json`:

```json [.vscode/settings.json]
{
  "tailwindCSS.classAttributes": [
    "active-class",
    "inactive-class"
  ]
}
```
::

Ubicación: badge{label="4.7+" class="align-text-top"}

El componente Link se integra automáticamente con [`@nuxtjs/i18n`](https://i18n.nuxtjs.org/) cuando se instala. Los enlaces internos se localizan automáticamente con el ayudante `$localePath` sin necesidad de empaquetar manualmente.

```vue
<template>
  <!-- Automatically becomes /en/about or /fr/about based on current locale -->
  <ULink to="/about">About</ULink>
</template>
```

::tip
Todavía puede usar manualmente `localePath()` o `localeRoute()` si es necesario.
::

::note{to="/docs/getting-started/integrations/i18n/nuxt#dynamic-locale"}
Obtenga más información sobre Internacionalización en Nuxt UI.
::

## API (Edición española)

### Props (Edición española)

::component-props
---
ignore:
  - custom
---
::

::callout{icon="i-simple-icons-mdnwebdocs" to="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#attributes" target="_blank"}
Este componente también soporta todos los atributos HTML `<a>` nativos.
::

### Slots

:component-slots

## Temas

:component-theme

## Changelog (Edición española)

:component-changelog
