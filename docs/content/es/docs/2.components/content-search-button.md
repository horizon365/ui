---
title: Contenido SearchButton
description: 'Un botón prediseñado para abrir el modal ContentSearch.'
category: content
framework: nuxt
links:
  - label: botón
    to: /docs/components/button
    icon: i-simple-icons-nuxtdotjs
  - label: GitHub también
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/content/ContentSearchButton.vue
---

::warning{to="/docs/getting-started/integrations/content"}
Este componente sólo está disponible cuando el módulo `@nuxt/content` está instalado.
::

@@pH001@@El uso

El componente ContentSearchButton se utiliza para abrir el [ContentSearch](/docs/components/content-search) modal.

: código de componentes {prefix="content"}

Se extiende el [Button](/docs/components/button) componente, por lo que puede pasar cualquier propiedad, como `color`,`variant`,`size`, etc

::component-code{prefix="content"}
---
Ignora:
  @@P014@Variación
Props:
  Variación:"Sutil"
---
::

::note{to="#collapsed"}
El botón por defecto es `color="neutral"` y `variant="outline"` cuando no está colapsado,`variant="ghost"` cuando está colapsado
::

@180000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000

Utilice el prop `collapsed` para mostrar la etiqueta del botón y [kbds](#kbds).

::component-code{prefix="content"}
---
Categoría: true
Props:
  Colapsado: Falso
---
::

@@25000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000

Utilice el `kbds` prop para mostrar las teclas del teclado en el botón. Predeterminados a `['meta', 'K']`{lang="ts-type"} para que coincida con el acceso directo predeterminado del componente [ContentSearch](/docs/components/content-search#shortcut).

::component-code{prefix="content"}
---
Categoría: true
Ignora:
  @@333@333@333@333@333@333@333@333@333@333@3333@3333@3333@3333@33333@33333@3333@3333@3333@3333@3333@3333@3333333@333333333@333333333@33333333@333333333333@3333333333333@3333333333333333333333333333333333333333333333333333333333333333333333333333333333
Props:
  Colapsado: Falso
  kbd:
    @@pH034 @@'Alto'.
    @@pH035 @@'y'
---
::

@@pH036@@pH036

@@@3700000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000

Componentes Props

::callout{icon="i-simple-icons-mdnwebdocs" to="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attributes" target="_blank"}
Este componente también soporta todos los atributos HTML nativos `<button>`.
::

@@39@39@39

Componentes de slots

@@pH040@@Proyecto

Componente Tema

@@changelog

por: component-changelog {prefix="content"}
