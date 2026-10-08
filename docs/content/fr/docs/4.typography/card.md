---
title: Proséquence
description: 'Créez des blocs de contenu surlignés avec des liens et une navigation optionnels.'
category: components
navigation.title: Card
links:
  - label: GitHub à
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/prose/Card.vue
---

@@ph000@utilisation

Utilisez le markdown dans l'emplacement par défaut du composant`card`pour mettre en évidence votre contenu .

Utilisez les props`title`,`icon`et`color`pour le personnaliser . Vous pouvez également transmettre n'importe quelle propriété du composant[`<NuxtLink>`](https://nuxt.com/docs/api/components/nuxt-link)ou@@@PH0111](https://router.vuejs.org/api/interfaces/RouterLinkProps.html).

::component-code{slug="card" prose}
---
Caché :
  @@classe 15
ignorer :
  @@ph016@cible
Props :
  classe : ' my - 0 w - 96 '
  Titre : Startup
  icon : i-lucide - utilisateurs
  Couleur : Primaire
  à : ' https://nuxt.lemonsqueezy.com'
  cible : _ blanc
Slots :
  Par défaut : Mieux adapté aux petites équipes , aux startups et aux agences comptant jusqu'à 5 développeurs .
---

Idéal pour les petites équipes , les startups et les agences comptant jusqu'à 5 développeurs .
::

@@P017@@Paix

@@ph018@@props

: composants{prose}

@@20000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000

: composant-slots{prose}

@222@thème

: composant - thème{prose}

@@changelog

: composant-changelog {prefix="prose"}
