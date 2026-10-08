---
title: Chatière
description: Afficher un effet d'animation de miroitement de texte.
category: chat
links:
  - label: GitHub à
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/ChatShimmer.vue
---

@@ph000@@utilisation

Le composant ChatShimmer rend un élément avec un gradient de miroitement animé sur le texte, couramment utilisé pour indiquer les états de streaming ou de chargement dans les interfaces de chat.

::note
Ce composant est automatiquement utilisé par les composants `ChatTool`](/docs/components/chat-tool) et [`ChatReasoning`](/docs/components/chat-reasoning) lors du streaming.
::

::tip
L'animation est automatiquement désactivée lorsque l'utilisateur préfère un mouvement réduit, le texte est affiché sous forme de texte statique en sourdine à la place.
::

@@ph011@texte

Utilisez la prop `text` pour définir le texte de miroitement.

::component-code
---
Props:
  Texte: "Réfléchir..."
---
::

@@pH013@@Durée

Utilisez le prop `duration` pour contrôler la vitesse d'animation en secondes.

::component-code
---
Props:
  Texte: "Réfléchir..."
  Durée: 4
---
::

@@P015@@référencement

Utilisez la prop `spread` pour contrôler la largeur de la mise en évidence. La propagation réelle est calculée comme `text.length * spread` en pixels.

::component-code
---
Props:
  Texte: "Réfléchir..."
  Répartition: 5
---
::

@@ph018@exemples

::tip{to="/docs/components/chat"}
Consultez la page d'aperçu **Chat** pour connaître les instructions d'installation, la configuration du serveur et les exemples d'utilisation.
::

@@2012@@api

@@222@Projets

Composants-props

@@ph023@thème

Composant-thème

@@changelog

Composant-changelog
