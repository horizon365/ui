---
title: ProseCardGrupo
description: 'Organice varias tarjetas en diseños de cuadrícula receptivos para una mejor presentación del contenido.'
category: components
navigation.title: CardGroup
links:
  - label: GitHub también
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/prose/CardGroup.vue
---

@@pH000@@Uso del producto

Envuelva los componentes`card`con el componente`card-group`para agruparlos en un diseño de cuadrícula .

::code-preview

:::card-group{class="w-full my-0"}

::card
---
Categoría : Dashboard
icon : i-simple - icons-github
Dos :https://github.com/nuxt-ui-templates/dashboard
Nombre : _ blank
---
Dashboard con diseño multicolumna .
::

::card
---
Categoría : SaaS
icon : i-simple - icons-github
Dos :https://github.com/nuxt-ui-templates/saas
Nombre : _ blank
---
Una plantilla con aterrizaje , precios , documentos y blog .
::

::card
---
Categoría : Docs
icon : i-simple - icons-github
Dos :https://github.com/nuxt-ui-templates/docs
Nombre : _ blank
---
Una documentación con`@nuxt/content`.
::

::card
---
Título : Desembarco
icon : i-simple - icons-github
Dos :https://github.com/nuxt-ui-templates/landing
Nombre : _ blank
---
Una landing page que puedes utilizar como punto de partida .
::

:::

# El Código

```mdc
::card-group

::card
---
title: Dashboard
icon: i-simple-icons-github
to: https://github.com/nuxt-ui-templates/dashboard
target: _blank
---
A dashboard with multi-column layout.
::

::card
---
title: SaaS
icon: i-simple-icons-github
to: https://github.com/nuxt-ui-templates/saas
target: _blank
---
A template with landing, pricing, docs and blog.
::

::card
---
title: Docs
icon: i-simple-icons-github
to: https://github.com/nuxt-ui-templates/docs
target: _blank
---
A documentation with `@nuxt/content`.
::

::card
---
title: Landing
icon: i-simple-icons-github
to: https://github.com/nuxt-ui-templates/landing
target: _blank
---
A landing page you can use as starting point.
::

::
```

::

@499000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000

@500000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000

by: component-props {prose}

@@50000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000

by: component-slots {prose}

@@50000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000

: component-theme {prose}

@@50000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000

por: component-changelog {prefix="prose"}
