---
title: Die ProseCardGroup
description: 'Organisieren Sie mehrere Karten in reaktionsschnellen Rasterlayouts für eine bessere Präsentation der Inhalte.'
category: components
navigation.title: CardGroup
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/prose/CardGroup.vue
---

@@@ph000@@Verwendung

Wickeln Sie Ihre`card`Komponenten mit der`card-group`Komponente , um sie in einem Rasterlayout zusammenzufassen .

::code-preview

:::card-group{class="w-full my-0"}

::card
---
Titel : Dashboard
Icon : I-Simple - Icons-GitHub
zwei :https://github.com/nuxt-ui-templates/dashboard
Ziel : _ blank
---
Ein Dashboard mit mehrspaltigem Layout .
::

::card
---
Titel : SaaS
Icon : I-Simple - Icons-GitHub
zwei :https://github.com/nuxt-ui-templates/saas
Ziel : _ blank
---
Eine Vorlage mit Landung , Preisgestaltung , Dokumentation und Blog .
::

::card
---
Titel : Docs
Icon : I-Simple - Icons-GitHub
zwei :https://github.com/nuxt-ui-templates/docs
Ziel : _ blank
---
Eine Dokumentation mit`@nuxt/content`.
::

::card
---
Titel : Landung
Icon : I-Simple - Icons-GitHub
zwei :https://github.com/nuxt-ui-templates/landing
Ziel : _ blank
---
Eine Landing Page , die Sie als Ausgangspunkt verwenden können .
::

:::

# Der Code

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

@@ph049@@api

@@@@@@@@ph050@@props

: component-props {prose}

@@ph052@gmail.de

: component-slots {prose}

@@ph054@gmail.de

: component-theme {prose}

@@ph056@@changelog @@changelog

: component-changelog {prefix="prose"}
