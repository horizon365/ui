---
title: Chatière
description: Afficher un effet d'animation de miroitement de texte.
category: chat
links:
  - label: GitHub à
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/ChatShimmer.vue
---

## Utilisation

Le composant ChatShimmer rend un élément avec un gradient de miroitement animé sur le texte, couramment utilisé pour indiquer les états de streaming ou de chargement dans les interfaces de chat.

::note
Ce composant est automatiquement utilisé par les composants [`ChatTool`](/docs/components/chat-tool) et [`ChatReasoning`](/docs/components/chat-reasoning) lors de la diffusion en streaming.
::

::tip
L'animation est automatiquement désactivée lorsque l'utilisateur préfère un mouvement réduit, le texte est affiché sous forme de texte statique en sourdine à la place.
::

### Texte écrit

Utilisez le prop `text` pour définir le texte de miroitement.

::component-code
---
props:
  text: 'Thinking...'
---
::

### Durée

Utilisez le prop `duration` pour contrôler la vitesse d'animation en quelques secondes.

::component-code
---
props:
  text: 'Thinking...'
  duration: 4
---
::

### Répartition

Utilisez la prop `spread` pour contrôler la largeur de la mise en lumière. La propagation réelle est calculée comme `text.length * spread` en pixels.

::component-code
---
props:
  text: 'Thinking...'
  spread: 5
---
::

## exemples

::tip{to="/docs/components/chat"}
Consultez la page d'aperçu **Chat** pour les instructions d'installation, la configuration du serveur et les exemples d'utilisation.
::

## api

### Props

:component-props

## thème

:component-theme

## Changelog

:component-changelog
