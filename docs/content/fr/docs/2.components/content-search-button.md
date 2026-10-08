---
title: RéférencesSearchButton
description: 'Un bouton prédéfini pour ouvrir le modal ContentSearch.'
category: content
framework: nuxt
links:
  - label: bouton
    to: /docs/components/button
    icon: i-simple-icons-nuxtdotjs
  - label: GitHub à
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/content/ContentSearchButton.vue
---

::warning{to="/docs/getting-started/integrations/content"}
Ce composant est uniquement disponible lorsque le module `@nuxt/content` est installé.
::

@@ph001@utilisation

Le composant ContentSearchButton est utilisé pour ouvrir le [ContentSearch](/docs/components/content-search) modal.

: composant {prefix="content"}

Il étend le [Button](/docs/components/button) composant, de sorte que vous pouvez passer n'importe quelle propriété telle que `color`,`variant`,`size`, etc.

::component-code{prefix="content"}
---
Ignorer:
  - variant
Props:
  Étiquette:"subtil"
---
::

::note{to="#collapsed"}
El botón por defecto a `color="neutral"` y `variant="outline"` cuando no colapsado,`variant="ghost"` cuando colapsado.
::

@180000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000

Utilisez le prop `collapsed` pour afficher l'étiquette du bouton et [kbds](#kbds).

::component-code{prefix="content"}
---
Étiquette: true
Props:
  Effondrement: faux
---
::

@250@@bbbd

Utilisez le prop `kbds` pour afficher les touches du clavier dans le bouton. Par défaut à `['meta', 'K']`{lang="ts-type"} pour correspondre au raccourci par défaut du composant [](/docs/components/content-search#shortcut).

::component-code{prefix="content"}
---
Étiquette: true
ignorer:
  @@ph033@kbds
Props:
  Effondrement: faux
  kbds:
    @@ph034 @@'alt'
    @@ph035 @@« O »
---
::

@@ph036@api

@@ph037@@props

Composants-props

::callout{icon="i-simple-icons-mdnwebdocs" to="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attributes" target="_blank"}
Ce composant prend également en charge tous les attributs HTML natifs `<button>`.
::

@@ph039@@Slots

Composants slots

@@ph040@thème

Composant-thème

@changement@changement@changement@changement.com

: composant-changelog {prefix="content"}
