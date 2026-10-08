---
title: ProseCardGroupe
description: 'Organisez plusieurs cartes dans des dispositions de grille réactives pour une meilleure présentation du contenu.'
category: components
navigation.title: CardGroup
links:
  - label: GitHub à
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/prose/CardGroup.vue
---

@@ph000@@utilisation

Enveloppez vos composants`card`avec le composant`card-group`pour les regrouper dans une disposition de grille .

::code-preview

:::card-group{class="w-full my-0"}

::card
---
Titre : Dashboard
icon : i-simple - icons-github
Deux :https://github.com/nuxt-ui-templates/dashboard
Référence : _ blank
---
Un tableau de bord avec layout multi-colonnes .
::

::card
---
Titre : SaaS
icon : i-simple - icons-github
Deux :https://github.com/nuxt-ui-templates/saas
Référence : _ blank
---
Un modèle avec atterrissage , prix , documents et blog .
::

::card
---
Titre : Docs
icon : i-simple - icons-github
Deux :https://github.com/nuxt-ui-templates/docs
Référence : _ blank
---
Une documentation avec`@nuxt/content`.
::

::card
---
Titre : Landing
icon : i-simple - icons-github
Deux :https://github.com/nuxt-ui-templates/landing
Référence : _ blank
---
Une landing page que vous pouvez utiliser comme point de départ .
::

:::

# code

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

@@50000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000

: composant-props {prose}

@@52@@séries

: composant {prose}

@@ph054@thème

: composant-thème {prose}

@changement@changement@changement.com

: composant-changelog {prefix="prose"}
