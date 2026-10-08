---
title: DashboardSearchButton
description: 'Un bouton prédéfini pour ouvrir le modal DashboardSearch.'
category: dashboard
links:
  - label: bouton
    to: /docs/components/button
    icon: i-simple-icons-nuxtdotjs
  - label: GitHub à
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/DashboardSearchButton.vue
---

@@ph000@@utilisation

Le composant DashboardSearchButton est utilisé pour ouvrir le [DashboardSearch](/docs/components/dashboard-search) modal.

Composants de code

Il étend le [Button](/docs/components/button) composant, de sorte que vous pouvez passer n'importe quelle propriété telle que `color`,`variant`,`size`, etc.

::component-code
---
Ignorer:
  - variant
Props:
  Étiquette:"subtil"
---
::

::note{to="#collapsed"}
Le bouton par défaut est `color="neutral"` et `variant="outline"` lorsqu 'il n'est pas réduit,`variant="ghost"` lorsqu' il est réduit.
::

@16@16@16@16@16@16@16

Utilisez la prop `collapsed` pour masquer l'étiquette du bouton et [kbds](#kbds).

::component-code
---
Étiquette: true
Props:
  Effondrement: vrai
---
::

::tip{to="/docs/components/dashboard-sidebar#slots"}
Lorsque vous utilisez le bouton dans le composant **DashboardSidebar**, utilisez directement le prop de l'emplacement `collapsed`.
::

@26@260000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000

Utilisez le prop `kbds` pour afficher les touches du clavier dans le bouton. Par défaut à `['meta', 'K']`{lang="ts-type"} pour correspondre au raccourci par défaut du composant [DashboardSearch](/docs/components/dashboard-search#shortcut).

::component-code
---
Étiquette: true
Ignorer:
  @@ph034@kbds
Props:
  Effondrement: faux
  kbds:
    @@pH035 @@"nouveau"
    @@pH036 @@« O »
---
::

@@ph037@api

@@ph038@@props

Composants-props

::callout{icon="i-simple-icons-mdnwebdocs" to="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attributes" target="_blank"}
Ce composant prend également en charge tous les attributs HTML natifs `<button>`.
::

@@ph040@@réglages

Composants slots

@@ph041@thème

Composant-thème

@changement@changement@changement@changement.com

Composant-changelog
