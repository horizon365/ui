---
title: Chatraisonnement
description: Afficher un raisonnement ou un processus de réflexion d'IA pliable.
category: chat
links:
  - label: Collapsif
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/collapsible
  - label: GitHub à
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/ChatReasoning.vue
---

@@ph000@utilisation

Le composant ChatReasoning rend un bloc pliable qui affiche le contenu du raisonnement ou de la pensée de l'IA. Il s'ouvre automatiquement pendant le streaming et se ferme automatiquement après.

::component-example
---
Collapse: vrai
Étiquette: true
nom: 'chat-raisonnement-exemple'
classe: 'h-[252px]'
---
::

::note{to="/docs/composables/use-scroll-shadow"}
Le contenu du corps utilise le composable `useScrollShadow` pour appliquer des ombres de fondu lorsqu 'il déborde.
::

@@ph002@Texte écrit

Utilisez la prop `text` pour définir le contenu du raisonnement. Le texte est affiché à l'intérieur du corps pliable.

::component-code
---
Étiquette: true
Caché:
  @@ph004@classe
Props:
  text: 'L'utilisateur demande des composants Vue...'
  Catégorie: W-60
---
::

@@005@Streaming

Utilisez la prop `streaming` pour indiquer un raisonnement actif. Le composant s'ouvre automatiquement lorsque le streaming démarre et se ferme automatiquement lorsqu 'il se termine.

::component-code
---
Étiquette: true
Caché:
  @@ph007@classe
ignorer:
  @@ph008@texte
Props:
  Étiquette: true
  text: 'L'utilisateur demande des composants Vue...'
  Catégorie: W-60
---
::

::tip
Utilisez l'utilitaire `isPartStreaming` de `@nuxt/ui/utils/ai` pour déterminer si une partie est en cours de diffusion.
::

@111@111@111

Lors de la diffusion en continu, l'étiquette de déclenchement utilise le composant [`ChatShimmer`](/docs/components/chat-shimmer). Utilisez le prop `shimmer` pour personnaliser ses `duration` et `spread`.

::component-code
---
Étiquette: true
Caché:
  @@ph020@classe
Ignorer:
  @@ph021@texte
Props:
  Étiquette: true
  text: 'L'utilisateur demande des composants Vue...'
  Shimmer:
    Durée: 2
    Répartition: 2
  Catégorie: W-60
---
::

@222@Icon

Utilisez la prop `icon` pour afficher un composant [Icon](/docs/components/icon) à côté du déclencheur.

::component-code
---
Étiquette: true
Caché:
  @@ph028@classe
ignorer:
  @@ph029@texte
Props:
  Étiquette: i-lucide-brain
  text: 'L'utilisateur demande des composants Vue...'
  Catégorie: W-60
---
::

### chevron

Utilisez la prop `chevron` pour modifier la position de l'icône du chevron.

::note
Lorsque `chevron` est défini sur `leading` avec un `icon`, l'icône change avec le chevron en survol et lorsqu 'elle est ouverte.
::

::component-code
---
Étiquette: true
Caché:
  @@classe 35
Ignorer:
  @@ph036@texte
Props:
  Chevron: leader
  Étiquette: i-lucide-brain
  text: 'L'utilisateur demande des composants Vue...'
  Catégorie: W-60
---
::

### Chevron Icon

Utilisez le prop `chevron-icon` pour personnaliser le chevron [Icon](/docs/components/icon).

::component-code
---
Étiquette: true
Caché:
  @@ph044@classe
ignorer:
  @@ph045@texte
Props:
  chevronIcône:'i-lucide-arrow-down'
  text: 'L'utilisateur demande des composants Vue...'
  Catégorie: W-60
---
::

::framework-only
#numérique
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
Vous pouvez personnaliser cette icône globalement dans votre `app.config.ts` sous la touche `ui.icons.chevronDown`.
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
Vous pouvez personnaliser cette icône globalement dans votre `vite.config.ts` sous la touche `ui.icons.chevronDown`.
:::
::

@@ph050@exemples

::tip{to="/docs/components/chat"}
Consultez la page d'aperçu **Chat** pour connaître les instructions d'installation, la configuration du serveur et les exemples d'utilisation.
::

@@ph053@@api

@@500@@propriétés

Composants-props

@@555@@série

Composants slots

@@556@@émetteur

Composants émetteurs

@@ph057@thème

Composant-thème

@changement@changement@changement.com

Composant-changelog
