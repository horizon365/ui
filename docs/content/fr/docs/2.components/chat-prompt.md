---
title: Chatprompt
description: 'Une Textarea améliorée pour soumettre des invites dans les interfaces de chat AI.'
category: chat
links:
  - label: Textaire
    to: /docs/components/textarea
    icon: i-simple-icons-nuxtdotjs
  - label: GitHub à
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/ChatPrompt.vue
---

@@ph000@utilisation

Le composant ChatPrompt rend un élément `<form>` et étend le composant [Textarea](/docs/components/textarea) afin que vous puissiez passer n'importe quelle propriété telle que `icon`,`placeholder`,`autofocus`, etc.

::component-example
---
Collapse: vrai
nom: 'chat-prompt-exemple'
---
::

::note
Le ChatPrompt gère les événements suivants:

- Le formulaire est soumis lorsque l'utilisateur appuie sur: kbd{value="enter"} ou lorsque l'utilisateur clique sur le bouton soumettre. Définissez le `submit-on-enter` prop à `false` pour soumettre avec: kbd{value="ctrl"}+: kbd{value="enter"}(ou: kbd{value="cmd"}+: kbd{value="enter"} sous macOS) à la place, permettant à: kbd{value="enter"} d'insérer une nouvelle ligne.
- La zone de texte est floue lorsque: kbd{value="escape"} est pressé et émet un événement `close`.
::

@@21@@Variant

Utilisez la prop `variant` pour changer le style de l'invite. Defaults à `outline`.

::component-code
---
Caché:
  - autofocus
Props:
  Étiquette:"soft"
  Autofocus: Faux
---
::

@@ph025@exemples

::tip{to="/docs/components/chat"}
Consultez la page d'aperçu **Chat** pour connaître les instructions d'installation, la configuration du serveur et les exemples d'utilisation.
::

### Avec un éditeur: badge{label="4.10+" class="align-text-top"}

Composez les emplacements `#header`,`#body` et `#footer` pour créer une invite riche: fichiers joints, un [Editor](/docs/components/editor) avec `@` mentions et `/` commandes via [EditorMentionMenu](/docs/components/editor-mention-menu), et un sélecteur de mode.

::component-example
---
Collapse: vrai
nom: 'chat-prompt-editor-example'
classe: 'justifie-centre'
---
::

::note
L'emplacement `#body` remplace la zone de texte interne et expose les gestionnaires `submit` et `close`, de sorte que vous pouvez câbler les raccourcis clavier de l'éditeur au formulaire. Lorsqu 'un menu de mention est ouvert, appuyer sur: kbd{value="enter"} sélectionne l'élément en surbrillance au lieu de soumettre.
::

### Comme page d'accueil

Vous pouvez également l'utiliser dans votre page d'accueil de l'interface de chat.

```vue [pages/index.vue] {2,4,8-15,24,26}
<script setup lang="ts">
import { useChat } from '@ai-sdk/vue'

const input = ref('')

const { messages, status, sendMessage } = useChat()

async function onSubmit() {
  sendMessage({ text: input.value })

  // Navigate to chat page after first message
  if (messages.value.length === 1) {
    await navigateTo('/chat')
  }
}
</script>

<template>
  <UDashboardPanel>
    <template #body>
      <UContainer>
        <h1>How can I help you today?</h1>

        <UChatPrompt v-model="input" @submit="onSubmit">
          <UChatPromptSubmit :status="status" />
        </UChatPrompt>
      </UContainer>
    </template>
  </UDashboardPanel>
</template>
```

@@ph080@api

@@ph081@@props

Composants-props

::callout{icon="i-simple-icons-mdnwebdocs" to="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea#attributes" target="_blank"}
Ce composant prend également en charge tous les attributs HTML natifs `<textarea>`.
::

@@ph083@@réseaux sociaux

Composants slots

@084@émissions

Composants émetteurs

@@ph085@@exposé

Lorsque vous accédez au composant via une référence de modèle, vous pouvez utiliser les éléments suivants:

| nom| type|
| ---- | ---- |
| @@|@@|

@@ph090@thème

Composant-thème

@changement@changement@changement@changement.com

Composant-changelog
