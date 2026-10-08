---
title: chatmessages
description: 'Affichez une liste de messages de chat, conçus pour fonctionner de manière transparente avec le SDK Vercel AI.'
category: chat
links:
  - label: GitHub à
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/ChatMessages.vue
---

@@ph000@utilisation

Le composant ChatMessages affiche une liste de composants [ChatMessage](/docs/components/chat-message) en utilisant soit l'emplacement par défaut, soit le prop `messages`.

```vue {2,8}
<template>
  <UChatMessages>
    <UChatMessage
      v-for="(message, index) in messages"
      :key="index"
      v-bind="message"
    />
  </UChatMessages>
</template>
```

::callout{icon="i-lucide-rocket"}
Ce composant est spécialement conçu pour les chatbots d'IA avec des fonctionnalités telles que

- Initial scroll vers le bas lors du chargement ([`shouldScrollToBottom`](#should-scroll-to-bottom)).
- Défilement continu vers le bas au fur et à mesure que de nouveaux messages arrivent ([`shouldAutoScroll`](#should-auto-scroll)).
- Un bouton "Défilement automatique" apparaît lorsque vous faites défiler vers le haut, permettant aux utilisateurs de revenir aux derniers messages ([`autoScroll`](#auto-scroll)).
- Un indicateur de chargement s'affiche pendant que l'assistant traite ([`status`](#status)).
- Les messages soumis sont défilés vers le haut de la fenêtre d'affichage et la hauteur du dernier message utilisateur est ajustée dynamiquement.
::

@@ph042@Messages

Utilisez la prop `messages` pour afficher une liste de messages de discussion.

::component-code
---
Étiquette: true
Extérieure:
  @@ph044@messages
ignorer:
  @@ph045@messages
Caché:
  - shouldScrollToBottom
Collapse: vrai
Catégorie: Overflow-y-auto
Props:
  messages:
    - id:'6045235a-a435 - 46b8 - 989d-2df38ca2eb47'
      Rôle: utilisateur
      parts:
        - type:'texte'
          Texte: "Bonjour, comment allez-vous?"
    - id:'7a92b3c1-d5f8 - 4e76-b8a9 - 3c1e5fb2e0d8'
      Rôle: assistant
      Parts:
        - type:'texte'
          texte: "Je vais bien, merci de demander! Comment puis-je vous aider aujourd 'hui?"
    - id:'9c84d6a7 - 8b23 - 4f12-a1d5-e7f3b9c05e2a'
      Rôle: utilisateur
      Parts:
        - type:« texte »
          Le texte: "Quelle est la météo actuelle à Tokyo?"
    - id:'b2e5f8c3-a1d9 - 4e67-b3f2-c9d8e7a6b5f4'
      Rôle: assistant
      Parts:
        - type:'texte'
          texte:"D'après les dernières données, Tokyo connaît actuellement un temps ensoleillé avec des températures autour de 24 ° C. C'est une belle journée avec un ciel clair."
  shouldScrollToBottom: faux
---
::

@@ph055@statut

Utilisez le prop `status` pour afficher un indicateur visuel lorsque l'assistant est en train de traiter.

::component-code
---
Étiquette: true
Extérieur:
  @@ph057@messages
ignorer:
  @@ph058@messages
  @@ph059@statut
Caché:
  - shouldScrollToBottom
Catégorie: Overflow-y-auto
Props:
  Statut: "Soumis"
  messages:
    - id:'6045235a-a435 - 46b8 - 989d-2df38ca2eb47'
      Rôle: utilisateur
      parts:
        - type:'texte'
          Texte: "Bonjour, comment allez-vous?"
  shouldScrollToBottom: faux
---
::

::note
Voici le détail des différents statuts issus du SDK AI `useChat` composable:

- `submitted`: Le message a été envoyé à l'API et nous attendons le début du flux de réponse.
- `streaming`: La réponse est activement diffusée à partir de l'API, recevant des morceaux de données.
- `ready`: La réponse complète a été reçue et traitée; un nouveau message utilisateur peut être soumis.
- `error`: Une erreur s'est produite lors de la requête API, empêchant la réussite de la requête.
::

@@ph072@Utilisateur

Utilisez le `user` prop pour changer le [ChatMessage](/docs/components/chat-message) props pour `user` messages. Par défaut à:

@@
@@

::component-code
---
Étiquette: true
Extérieur:
  @@ph085@messages
Ignorer:
  @@ph086@messages
  - avatar.src
  - avatar.chargement
Caché :
  - shouldScrollToBottom
Collapse : vrai
items :
  user.variant:
    @@ph090@solide
    @@ph091@outline
    @@ph092@subtile
    @@pH093@@doux
    @@@naked
  user.side:
    @@ph095@left
    @@pH096@@droite
Catégorie : Overflow-y - auto
Props :
  utilisateur :
    Côté : gauche
    Variante : solide
    Avatar :
      src :https://github.com/benjamincanac.png
      Étiquette : Lazy
  messages :
    - id:'6045235a-a435 - 46b8 - 989d-2df38ca2eb47'
      Rôle: utilisateur
      parts:
        - type:'texte'
          Texte: « Bonjour, comment allez-vous?»
    - id:'7a92b3c1-d5f8 - 4e76-b8a9 - 3c1e5fb2e0d8'
      Rôle: assistant
      Parts:
        - type:'texte'
          texte: "Je vais bien, merci de demander! Comment puis-je vous aider aujourd 'hui?"
    - id:'9c84d6a7 - 8b23 - 4f12-a1d5-e7f3b9c05e2a'
      Rôle: utilisateur
      parts:
        - type:'texte'
          Le texte: "Quelle est la météo actuelle à Tokyo?"
    - id:'b2e5f8c3-a1d9 - 4e67-b3f2-c9d8e7a6b5f4'
      Rôle: assistant
      parts:
        - type:'texte'
          texte:"D'après les dernières données, Tokyo connaît actuellement un temps ensoleillé avec des températures autour de 24 ° C. C'est une belle journée avec un ciel clair."
  shouldScrollToBottom: faux
---
::

@@P105@assistant à l'émission

Utilisez le prop `assistant` pour changer le prop [ChatMessage](/docs/components/chat-message) pour les messages `assistant`. Par défaut:

@@
@@

::component-code
---
Étiquette: true
Extérieure:
  @@ph118@messages
ignorer:
  @@ph119@messages
  - avatar.icon
  - assistant.actions
Caché:
  - shouldScrollToBottom
Collapse: vrai
items:
  assistant.variant:
    @@ph123@solide
    - outline
    @@ph125@subtile
    @@ph126@doux
    @@ph127@naked
  assistant.side:
    @@ph128@left
    @@ph129@droite
Catégorie: Overflow-y-auto
Props:
  assistant:
    Côté: gauche
    Étiquette: Outline
    Avatar:
      Icône: i-lucide-bot
    Actions:
      - label:'Copy to clipboard'
        Icône: i-lucide-copy
  messages:
    - id:'6045235a-a435 - 46b8 - 989d-2df38ca2eb47'
      Rôle: utilisateur
      Parts:
        - type:'text'
          Text: "Hello, how are you?"
    - id:'7a92b3c1-d5f8 - 4e76-b8a9 - 3c1e5fb2e0d8'
      Rôle: assistant
      Parts:
        - type:'texte'
          texte: "Je vais bien, merci de demander! Comment puis-je vous aider aujourd 'hui?"
    - id:'9c84d6a7 - 8b23 - 4f12-a1d5-e7f3b9c05e2a'
      Rôle: utilisateur
      Parts:
        - type:'texte'
          Le texte: "Quelle est la météo actuelle à Tokyo?"
    - id:'b2e5f8c3-a1d9 - 4e67-b3f2-c9d8e7a6b5f4'
      Rôle: assistant
      parts:
        - type:'texte'
          texte:"D'après les dernières données, Tokyo connaît actuellement un temps ensoleillé avec des températures autour de 24 ° C. C'est une belle journée avec un ciel clair."
  shouldScrollToBottom: faux
---
::

### Auto défilement

Utilisez le prop `auto-scroll` pour personnaliser ou masquer le bouton de défilement automatique (avec la valeur `false`) affiché lors du défilement vers le haut de la discussion.

@@
@@

Vous pouvez passer n'importe quelle propriété du composant [Button](/docs/components/button) pour le personnaliser.

::component-code
---
Étiquette: true
Collapse: vrai
Extérieur:
  @@ph152@messages
Ignorer:
  @@ph153@messages
  - autoScroll.color
  - autoScroll.variant
  - shouldScrollToBottom
classe: 'overflow-y-auto max-h-[341px] static'
Props:
  Autoscroll:
    Couleur: Neutre
    Étiquette: Outline
  shouldScrollToBottom: faux
  messages:
    - id:'6045235a-a435 - 46b8 - 989d-2df38ca2eb47'
      Rôle: utilisateur
      Parts:
        - type:'texte'
          Texte: "Bonjour, comment allez-vous?"
    - id:'7a92b3c1-d5f8 - 4e76-b8a9 - 3c1e5fb2e0d8'
      Rôle: assistant
      parts:
        - type:'texte'
          texte: "Je vais bien, merci de demander! Comment puis-je vous aider aujourd 'hui?"
    - id:'9c84d6a7 - 8b23 - 4f12-a1d5-e7f3b9c05e2a'
      Rôle: utilisateur
      parts:
        - type:'texte'
          Le texte: "Quelle est la météo actuelle à Tokyo?"
    - id:'b2e5f8c3-a1d9 - 4e67-b3f2-c9d8e7a6b5f4'
      Rôle: assistant
      Parts:
        - type:'texte'
          texte:"D'après les dernières données, Tokyo connaît actuellement un temps ensoleillé avec des températures autour de 24 ° C. C'est une belle journée avec un ciel dégagé. Les prévisions pour le reste de la semaine montrent un léger risque de pluie jeudi, avec des températures atteignant progressivement 28 ° C d'ici le week-end. Les niveaux d'humidité sont modérés à environ 65%, et la vitesse du vent est faible à 8 km/h du sud-est. La qualité de l'air est bonne avec un indice de 42. L'indice UV est élevé à 7, il est donc recommandé de porter un écran solaire si vous prévoyez de passer du temps à l'extérieur. Le lever du soleil était à 5h24 et le coucher du soleil sera à 6: 48 PM, ce qui donne à Tokyo environ 13 heures et 24 minutes de lumière du jour aujourd 'hui. La lune est actuellement dans sa phase gibbeuse croissante.
    - id:'c3e5f8c3-a1d9 - 4e67-b3f2-c9d8e7a6b5f4'
      Rôle: utilisateur
      parts:
        - type:'texte'
          texte: 'Pouvez-vous recommander quelques attractions touristiques populaires à Kyoto?'
    - id:'d4f5g8c3-a1d9 - 4e67-b3f2-c9d8e7a6b5f4'
      Rôle: assistant
      Parts:
        - type:'texte'
          texte: Kyoto est connue pour ses beaux temples, ses maisons de thé traditionnelles et ses jardins. Certaines attractions populaires incluent Kinkaku-ji.(Pavillon d'Or) avec son superbe extérieur en feuilles d'or se reflétant dans l'étang miroir, le sanctuaire Fushimi Inari avec ses milliers de portes torii vermillon qui serpentent le flanc de la montagne, la forêt de bambous d'Arashiyama où les tiges imposantes créent une atmosphère d'un autre monde, Le temple de Kiyomizu-dera perché sur une colline offrant une vue panoramique sur la ville et le quartier historique de Gion où vous pourriez apercevoir des geishas se précipiter vers les rendez-vous du soir dans des rues étroites pavées de pierres bordées de maisons traditionnelles en bois.
---
::

### Auto Icône de défilement

Utilisez le prop `auto-scroll-icon` pour personnaliser le bouton de défilement automatique [Icon](/docs/components/icon).

::component-code
---
Étiquette: true
Collapse: vrai
Extérieur:
  @@ph176@messages
ignorer:
  @@ph177@messages
  - autoScroll.color
  - autoScroll.variant
  - shouldScrollToBottom
classe: 'overflow-y-auto max-h-[341px] static'
Props:
  autoScrollIcon: 'i-lucide-chevron-down'
  shouldScrollToBottom: faux
  messages:
    - id:'6045235a-a435 - 46b8 - 989d-2df38ca2eb47'
      Rôle: utilisateur
      parts:
        - type:'texte'
          Text: "Hello, how are you?"
    - id:'7a92b3c1-d5f8 - 4e76-b8a9 - 3c1e5fb2e0d8'
      Rôle: assistant
      Parts:
        - type:'texte'
          texte: "Je vais bien, merci de demander! Comment puis-je vous aider aujourd 'hui?"
    - id:'9c84d6a7 - 8b23 - 4f12-a1d5-e7f3b9c05e2a'
      Rôle: utilisateur
      Parts:
        - type:'texte'
          Le texte: "Quelle est la météo actuelle à Tokyo?"
    - id:'b2e5f8c3-a1d9 - 4e67-b3f2-c9d8e7a6b5f4'
      Rôle: assistant
      Parts:
        - type:'texte'
          texte:"D'après les dernières données, Tokyo connaît actuellement un temps ensoleillé avec des températures autour de 24 ° C. C'est une belle journée avec un ciel dégagé. Les prévisions pour le reste de la semaine montrent un léger risque de pluie jeudi, avec des températures atteignant progressivement 28 ° C d'ici le week-end. Les niveaux d'humidité sont modérés à environ 65%, et la vitesse du vent est faible à 8 km/h du sud-est. La qualité de l'air est bonne avec un indice de 42. L'indice UV est élevé à 7, il est donc recommandé de porter un écran solaire si vous prévoyez de passer du temps à l'extérieur. Le lever du soleil était à 5h24 et le coucher du soleil sera à 6: 48 PM, ce qui donne à Tokyo environ 13 heures et 24 minutes de lumière du jour aujourd 'hui. La lune est actuellement dans sa phase gibbeuse croissante.
    - id:'c3e5f8c3-a1d9 - 4e67-b3f2-c9d8e7a6b5f4'
      Rôle: utilisateur
      Parts:
        - type:'texte'
          texte: 'Pouvez-vous recommander quelques attractions touristiques populaires à Kyoto?'
    - id:'d4f5g8c3-a1d9 - 4e67-b3f2-c9d8e7a6b5f4'
      Rôle: assistant
      parts:
        - type:'texte'
          texte: Kyoto est connue pour ses beaux temples, ses maisons de thé traditionnelles et ses jardins. Certaines attractions populaires incluent Kinkaku-ji.(Pavillon d'Or) avec son superbe extérieur en feuilles d'or se reflétant dans l'étang miroir, le sanctuaire Fushimi Inari avec ses milliers de portes torii vermillon qui serpentent le flanc de la montagne, la forêt de bambous d'Arashiyama où les tiges imposantes créent une atmosphère d'un autre monde, Le temple de Kiyomizu-dera perché sur une colline offrant une vue panoramique sur la ville et le quartier historique de Gion où vous pourriez apercevoir des geishas se précipiter vers les rendez-vous du soir dans des rues étroites pavées de pierres bordées de maisons traditionnelles en bois.
---
::

::framework-only
#numérique
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
Vous pouvez personnaliser cette icône globalement dans votre `app.config.ts` sous la touche `ui.icons.arrowDown`.
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
Vous pouvez personnaliser cette icône globalement dans votre `vite.config.ts` sous la touche `ui.icons.arrowDown`.
:::
::

### Should Défilement automatique

Utilisez la prop `should-auto-scroll` pour activer/désactiver le défilement automatique continu pendant que les messages sont en streaming. Par défaut à `false`.

```vue
<template>
  <UChatMessages :messages="messages" should-auto-scroll />
</template>
```

### Devrait faire défiler vers le bas

Utilisez le prop `should-scroll-to-bottom` pour activer/désactiver le défilement automatique du bas lorsque le composant est monté. Par défaut à `true`.

```vue
<template>
  <UChatMessages :messages="messages" :should-scroll-to-bottom="false" />
</template>
```

@@ph213@@Exemples

::tip{to="/docs/components/chat"}
Consultez la page d'aperçu **Chat** pour connaître les instructions d'installation, la configuration du serveur et les exemples d'utilisation.
::

### Avec slot d'indicateur

Utilisez l'emplacement `#indicator` pour personnaliser l'indicateur de chargement avec un effet [`ChatShimmer`](/docs/components/chat-shimmer).

::component-example
---
nom: 'chat-messages-indicateur-slot-exemple'
Catégorie: Overflow-y-auto
Collapse: vrai
---
::

@@223@223@223@223@223@223@223@223@223@223@2223@22223@222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222ééééééééééééééééééééééééééééééééééééééééééééééé

@@224@224@224

Composants-props

@@225@@séries

Composants slots

::tip
Vous pouvez utiliser tous les emplacements du composant [`ChatMessage`](/docs/components/chat-message#slots) dans ChatMessages, ils sont automatiquement transférés afin que vous puissiez personnaliser des messages individuels lors de l'utilisation du prop `messages`.

```vue{7-15}
<script setup lang="ts">
import { isTextUIPart } from 'ai'
</script>

<template>
  <UChatMessages :messages="messages" :status="status">
    <template #content="{ message }">
      <template
        v-for="(part, index) in message.parts"
        :key="`${message.id}-${part.type}-${index}`"
      >
        <p v-if="isTextUIPart(part)" class="whitespace-pre-wrap">
          {{ part.text }}
        </p>
      </template>
    </template>
  </UChatMessages>
</template>
```
::

@@ph252@@exposé

Lorsque vous accédez au composant via une référence de modèle, vous pouvez utiliser les éléments suivants:

| nom| type|
| ---- | ---- |
| @@|@@|

@257@thème

Composant-thème

@258@changements

Composant-changelog
