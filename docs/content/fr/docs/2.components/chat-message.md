---
title: Chatmessage
description: 'Afficher un message de chat avec une icône, un avatar et des actions.'
category: chat
links:
  - label: GitHub à
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/ChatMessage.vue
---

@@ph000@@utilisation

Le composant ChatMessage rend un élément `<article>` pour un message de chat `user` ou `assistant`.

::code-preview

::u-chat-message
---
Parts:
  - type:« texte »
    ID: « 1 »
    texte: 'Bonjour! Dites-moi plus sur la création de chatbots IA avec Nuxt UI.'
Étiquette:"Right"
Étiquette:"soft"
Rôle:"Utilisateur"
ID: « 1 »
Avatar:
  src: 'https://github.com/benjamincanac.png'
  Étiquette: Lazy
---
::

::

::tip{to="/docs/components/chat-messages"}
Utilisez le composant `ChatMessages` pour afficher une liste de messages de discussion.
::

@@ph006@parts

Utilisez la prop `parts` pour afficher le contenu du message en utilisant le format AI SDK.

::component-code
---
Étiquette: true
Ignorer:
  @@ph008@parts
  @@pH009@rôle
  @@ph010@id.
Props:
  Parts:
    - type:'texte'
      ID: « 1 »
      texte: 'Bonjour! Dites-moi plus sur la création de chatbots IA avec Nuxt UI.'
  Rôle:"Utilisateur"
  ID: « 1 »
---
::

::note
Le prop `parts` est le format recommandé pour le SDK d'IA. Chaque partie a un `type`(par exemple,'texte') et le contenu correspondant. Le composant ChatMessage prend également en charge le prop `content` obsolète pour la compatibilité ascendante.
::

@@ph015

Utilisez le prop `side` pour afficher le message à gauche ou à droite.

::component-code
---
Étiquette: true
ignorer:
  @@ph017@parts
  @@@ph018@rôle
  @@ph019@id.
Props:
  Étiquette:"Right"
  Parts:
    - type:'texte'
      ID: « 1 »
      texte: 'Bonjour! En savoir plus sur la création de chatbots IA avec Nuxt UI.'
  Rôle:"Utilisateur"
  ID: « 1 »
---
::

::note
Lorsque vous utilisez le composant [`ChatMessages`](/docs/components/chat-messages), le prop `side` est défini sur `left` pour les messages `assistant` et `right` pour les messages `user`.
::

### Variant

Utilisez la prop `variant` pour modifier le style du message.

::component-code
---
Étiquette: true
Ignorer:
  @@ph033@parts
  @@pH034@rôle
  @@pH035@@id.
Props:
  Étiquette:"soft"
  Parts:
    - type:'texte'
      ID: « 1 »
      texte: 'Bonjour! En savoir plus sur la création de chatbots IA avec Nuxt UI.'
  Rôle:"Utilisateur"
  ID: « 1 »
---
::

::note
Lorsque vous utilisez le [`ChatMessages`](/docs/components/chat-messages) composant, le `variant` prop est réglé à `naked` pour `assistant` messages et `soft` pour `user` messages.
::

### couleur: badge{label="4.8+" class="align-text-top"}

Utilisez la prop `color` pour changer la couleur du message.

::component-code
---
Étiquette: true
Ignorer:
  @@ph050@parts
  @@501@rôle
  @@ph052@id.
Props:
  Étiquette:"soft"
  Couleur: Primaire
  parts:
    - type:'texte'
      ID: « 1 »
      texte: 'Bonjour! En savoir plus sur la création de chatbots IA avec Nuxt UI.'
  Rôle:"Utilisateur"
  ID: « 1 »
---
::

### Icon

Utilisez le prop `icon` pour afficher un composant [Icon](/docs/components/icon) à côté du message.

::component-code
---
Étiquette: true
Ignorer:
  @@ph060@parts
  @@ph061@côté
  - variant
  @@pH063@rôle
  @@ph064@id.
Props:
  Icône: i-lucide-user
  Étiquette:"soft"
  Étiquette:"Right"
  Parts:
    - type:'texte'
      ID: « 1 »
      texte: 'Bonjour! En savoir plus sur la création de chatbots IA avec Nuxt UI.'
  Rôle:"Utilisateur"
  ID: « 1 »
---
::

@@ph066@avatar

Utilisez le prop `avatar` pour afficher un composant [Avatar](/docs/components/avatar) à côté du message

::component-code
---
Étiquette: true
ignorer:
  @@ph072@parts
  @@ph073@côté
  @@74@@variété
  @@75@rôle
  @@ph076@id.
  - avatar.chargement
Props:
  Avatar:
    src: 'https://github.com/benjamincanac.png'
    Étiquette: Lazy
  Étiquette:"soft"
  Étiquette:"Right"
  Parts:
    - type:'texte'
      ID: « 1 »
      texte: 'Bonjour! En savoir plus sur la création de chatbots IA avec Nuxt UI.'
  Rôle:"Utilisateur"
  ID: « 1 »
---
::

Vous pouvez également utiliser le prop `avatar.icon` pour afficher une icône en tant qu 'avatar.

::component-code
---
Étiquette: true
Ignorer:
  @@ph080@parts
  @@ph081@rôle
  @@ph082@id.
Props:
  Avatar:
    Icône: i-lucide-bot
  parts:
    - type:'texte'
      ID: « 1 »
      texte: Nuxt UI offre plusieurs fonctionnalités pour créer des chatbots IA, notamment les composants ChatMessage, ChatMessages et ChatPrompt. Les meilleures pratiques comprennent l'utilisation de la classe Chat du SDK AI, la mise en œuvre d'un style de message approprié avec des variantes et l'utilisation des actions intégrées pour les interactions de message. Les composants sont entièrement personnalisables avec un support thématique et un design réactif.
  Rôle:"assistant"
  ID: « 1 »
---
::

@@884@Actions

Utilisez la prop `actions` pour afficher les actions en dessous du message qui seront affichées lorsque vous survolez le message.

::component-code
---
Étiquette: true
Extérieur:
  @@ph086@actions
Extérieurs:
  - ButtonProps [réf. nécessaire]
ignorer:
  @@ph088@parts
  @@ph089@actions
  @@pH090@rôle
  @@ph091@id.
Props:
  Actions:
    - label:'Copier dans le presse-papiers'
      Icône: i-lucide-copy
  parts:
    - type:'texte'
      ID: « 1 »
      texte: Nuxt UI offre plusieurs fonctionnalités pour créer des chatbots IA, notamment les composants ChatMessage, ChatMessages et ChatPrompt. Les meilleures pratiques comprennent l'utilisation de la classe Chat du SDK AI, la mise en œuvre d'un style de message approprié avec des variantes et l'utilisation des actions intégrées pour les interactions de message. Les composants sont entièrement personnalisables avec un support thématique et un design réactif.
  Rôle:"Utilisateur"
  ID: « 1 »
---
::

@@ph094@exemples

::tip{to="/docs/components/chat"}
Consultez la page d'aperçu **Chat** pour connaître les instructions d'installation, la configuration du serveur et les exemples d'utilisation.
::

@@ph097@@api

@@ph098@@props

Composants-props

@@ph099@@réseaux sociaux

Composants slots

@@ph100@thème

Composant-thème

@changelog 101

Composant-changelog
