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

xph0000xUso

Envuelva los componentes `card` con el componente `card-group` para agruparlos en un diseño de cuadrícula.

::code-preview

:::card-group{class="w-full my-0"}

::card
---
title: Dashboard
icon: i-simple-icons-github
to: https://github.com/nuxt-ui-templates/dashboard
target: _blank
---
Dashboard con diseño multicolumna.
::

::card
---
title: SaaS
icon: i-simple-icons-github
to: https://github.com/nuxt-ui-templates/saas
target: _blank
---
Una plantilla con aterrizaje, precios, documentos y blog.
::

::card
---
title: Docs
icon: i-simple-icons-github
to: https://github.com/nuxt-ui-templates/docs
target: _blank
---
Una documentación con `@nuxt/content`.
::

::card
---
title: Landing
icon: i-simple-icons-github
to: https://github.com/nuxt-ui-templates/landing
target: _blank
---
Una landing page que puedes utilizar como punto de partida.
::

:::

#code

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

## API (Edición española)

### Accesorios

:component-props{prose}

### Slots (Edición española)

:component-slots{prose}

## Temas

:component-theme{prose}

Changelog (Edición española)

:component-changelog{prefix="prose"}
