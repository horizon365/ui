---
title: colorimetría
description: 'Un elemento de imagen con una fuente diferente para el modo claro y oscuro.'
category: color-mode
links:
  - label: GitHub también
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/color-mode/ColorModeImage.vue
---

@@pH000@@Uso del producto

El componente ColorModeImage utiliza el componente `<NuxtImg>` cuando está instalado [`@nuxt/image`](https://github.com/nuxt/image), volviendo a `img` de lo contrario.

::component-code{prefix="color-mode"}
---
Categoría: true
Ignora:
  @008@@WW (en inglés)
  @0009@@altoñoñoñoño
Props:
  luz: 'https://picsum.photos/id/29/400'
  dark: 'https://picsum.photos/id/46/400'
  Cantidad: 200
  Altura: 200
---
::

::note
Cambiar entre el modo claro y oscuro para ver las diferentes imágenes:: u-color-mode-select {size="sm"}
::

@@111111111

@120000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000

Componentes Props

::callout{icon="i-simple-icons-mdnwebdocs" to="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#attributes" target="_blank"}
Este componente también soporta todos los atributos HTML nativos `<img>`.
::

@14@Changelog

por: component-changelog {prefix="color-mode"}
