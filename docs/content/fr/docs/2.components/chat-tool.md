---
title: chattool
description: Afficher un état d'invocation d'outil AI pliable.
category: chat
links:
  - label: Collapsif
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/collapsible
  - label: GitHub à
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/ChatTool.vue
---

@@ph000@@utilisation

Le composant ChatTool rend un bloc pliable qui affiche le statut d'appel de l'outil d'IA, tel que "Recherche de composants" ou "Lecture de documentation". Lorsqu 'un emplacement par défaut est fourni, il devient pliable pour révéler la sortie de l'outil.

::component-example
---
Collapse: vrai
Étiquette: true
nom: 'chat-outil-exemple'
---
::

@@ph001@texte

Utilisez la prop `text` pour définir le texte d'état de l'outil.

::component-code
---
Caché:
  @@ph003@classe
Props:
  text: 'Composants recherchés'
  Catégorie: W-60
---
::

@@ph004@@suffix

Utilisez la prop `suffix` pour afficher le texte secondaire après l'étiquette principale.

::component-code
---
Caché:
  @@ph006@classe
ignorer:
  @@ph007@texte
Props:
  texte: 'Composante de lecture'
  Sujet: "bouton"
  Catégorie: W-60
---
::

@08@Streaming

Utilisez la prop `streaming` pour indiquer que l'outil est activement en cours d'exécution. Le texte affiche une animation de miroitement.

::component-code
---
Caché:
  @@classe 1000
ignorer:
  @@ph011@texte
Props:
  Étiquette: true
  text: 'Recherche de composants...'
  Catégorie: W-60
---
::

::tip
Utilisez l'utilitaire `isToolStreaming` de `@nuxt/ui/utils/ai` pour déterminer si une partie de l'outil est toujours en cours d'exécution. Il renvoie `false` lorsque l'outil attend l'approbation de l'utilisateur.
::

### Phénix

Lors de la diffusion en continu, l'étiquette de déclenchement utilise le composant [`ChatShimmer`](/docs/components/chat-shimmer). Utilisez le prop `shimmer` pour personnaliser ses `duration` et `spread`.

::component-code
---
Étiquette: true
Caché:
  @@ph024@classe
Ignorer:
  @@ph025@texte
Props:
  Étiquette: true
  text: 'Recherche de composants...'
  Shimmer:
    Durée: 2
    Répartition: 2
  Catégorie: W-60
---
::

@@226@Icon

Utilisez la prop `icon` pour afficher un composant [Icon](/docs/components/icon) à côté du déclencheur.

::component-code
---
Caché:
  @@classe 32
Ignorer:
  @@ph033@texte
Props:
  Icône: i-lucide-search
  text: 'Composants recherchés'
  Catégorie: W-60
---
::

### chargement

Utilisez la prop `loading` pour afficher un indicateur de chargement. Utilisez la prop `loading-icon` pour personnaliser l'icône de chargement.

::component-code
---
Caché:
  @@ph037@classe
Ignorer:
  @@ph038@texte
Props:
  Chargement: vrai
  text: 'Recherche de composants...'
  Catégorie: W-60
---
::

### Icône de chargement

Utilisez la prop `loading-icon` pour personnaliser l'icône de chargement. Par défaut,`i-lucide-loader-circle`.

::component-code
---
Caché:
  @@classe 42
Ignorer:
  @@ph043@texte
Props:
  Chargement: vrai
  loadingIcon: 'i-lucide-loader'
  text: 'Recherche de composants...'
  Catégorie: W-60
---
::

::framework-only
#numérique
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
Vous pouvez personnaliser cette icône globalement dans votre `app.config.ts` sous la touche `ui.icons.loading`.
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
Vous pouvez personnaliser cette icône globalement dans votre `vite.config.ts` sous la touche `ui.icons.loading`.
:::
::

@@ph048@chevron

Utilisez la prop `chevron` pour modifier la position de l'icône du chevron.

::note
Lorsque `chevron` est réglé sur `leading` avec un `icon`, l'icône change avec le chevron en survol stationnaire et lorsqu 'elle est ouverte.
::

::component-code
---
Étiquette: true
Caché:
  @@classe 500
ignorer:
  @@ph054@texte
Props:
  Chevron: leader
  Icône: i-lucide-search
  text: 'Composants recherchés'
  Catégorie: W-60
Slots:
  Default:|

    Outil de sortie de contenu
---
::

### Chevron Icône

Utilisez le prop `chevron-icon` pour personnaliser le chevron [Icon](/docs/components/icon).

::component-code
---
Étiquette: true
Caché:
  @@ph062@classe
ignorer:
  @@ph063@texte
Props:
  chevronIcône:'i-lucide-arrow-down'
  text: 'Composants recherchés'
  Catégorie: W-60
Slots:
  Défaut:|

    Outil de sortie de contenu
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

### Variant

Utilisez la prop `variant` pour modifier le style visuel. Par défaut à `inline`.

::component-code
---
Étiquette: true
Caché:
  @@ph071@classe
ignorer:
  @@ph072@texte
  @@ph073@icon
Props:
  Variante: carte
  text: 'Composants recherchés'
  Icône: i-lucide-search
  Étiquette: trailing
  Catégorie: W-60
Slots:
  Défaut:|

    Outil de sortie de contenu
---
::

### Actions: badge{label="4.10+" class="align-text-top"}

Utilisez la prop `actions` pour afficher une liste de [Button](/docs/components/button) sous le déclencheur, utile pour les outils qui nécessitent une confirmation de l'utilisateur avant de s'exécuter.

::component-code
---
Étiquette: true
Caché:
  @@ph081@classe
Ignorer:
  @@ph082@texte
  @@pH083@icon
  - variant
  @@85@actions
Props:
  actions:
    - label:« Approuver »
    - label:"Démenti"
      Couleur: Neutre
      Variété: Soft
  text: "Exécuter la commande terminal"
  Variante: carte
  Icône: i-lucide-terminal
  Catégorie: W-60
Slots:
  Défaut:|

    $pnpm fonctionne lint
---
::

@@ph088@exemples

::tip{to="/docs/components/chat"}
Consultez la page d'aperçu **Chat** pour connaître les instructions d'installation, la configuration du serveur et les exemples d'utilisation.
::

### Avec flux d'approbation: badge{label="4.10+" class="align-text-top"}

Utilisez la prop `actions` pour créer un flux d'approbation d'outil avec le [AI SDK](). Lorsqu 'une pièce d'outil est dans l'état `approval-requested`, affichez les actions approuver et refuser et répondez avec `addToolApprovalResponse`.

::component-example
---
Collapse: vrai
Étiquette: true
nom: 'chat-outil-approuve-exemple'
---
::

::tip
Utilisez l'utilitaire `isToolApprovalPending` de `@nuxt/ui/utils/ai` pour détecter une approbation en attente,`isToolStreaming` retourne `false` dans cet état.

```vue
<script setup lang="ts">
import { useChat } from '@ai-sdk/vue'
import { lastAssistantMessageIsCompleteWithApprovalResponses } from 'ai'

const { messages, addToolApprovalResponse } = useChat({
  sendAutomaticallyWhen: lastAssistantMessageIsCompleteWithApprovalResponses
})
</script>

<template>
  <UChatTool
    v-if="isToolUIPart(part)"
    :text="getToolName(part)"
    :streaming="isToolStreaming(part)"
    :actions="part.state === 'approval-requested' ? [
      { label: 'Approve', onClick: () => addToolApprovalResponse({ id: part.approval.id, approved: true }) },
      { label: 'Deny', color: 'neutral', variant: 'ghost', onClick: () => addToolApprovalResponse({ id: part.approval.id, approved: false }) }
    ] : undefined"
  />
</template>
```
::

@@ph126@api

@@ph127@@props

Composants-props

@@ph128@@réseaux sociaux

Composants slots

@@ph129@@émissions

Composants émetteurs

@@ph130@thème

Composant-thème

@change131 @ changement

Composant-changelog
