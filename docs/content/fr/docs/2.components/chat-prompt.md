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

## Utilisation

Le composant ChatPrompt rend un élément `<form>` et étend le composant [Textarea](/docs/components/textarea) afin que vous puissiez passer n'importe quelle propriété telle que `icon`, `placeholder`, `autofocus`, etc.

::component-example
---
collapse: true
name: 'chat-prompt-example'
---
::

::note
Le ChatPrompt gère les événements suivants:

- Le formulaire est soumis lorsque l'utilisateur appuie sur: kbd{value="enter"} ou lorsque l'utilisateur clique sur le bouton soumettre. Définissez la prop `submit-on-enter` sur `false` pour soumettre avec: kbd{value="ctrl"} +: kbd{value="enter"} (ou: kbd{value="cmd"} +: kbd{value="enter"} sur macOS) à la place, permettant à: kbd{value="enter"} d'insérer un saut de ligne.
- La zone de texte est floue lorsque: kbd{value="escape"} est appuyé et émet un événement `close`.
::

### Variant

Utilisez la prop `variant` pour changer le style de l'invite. Defaults à `outline`.

::component-code
---
hide:
  - autofocus
props:
  variant: 'soft'
  autofocus: false
---
::

## exemples

::tip{to="/docs/components/chat"}
Consultez la page d'aperçu **Chat** pour les instructions d'installation, la configuration du serveur et les exemples d'utilisation.
::

### Avec un éditeur: badge{label="4.10+" class="align-text-top"}

Composez les emplacements `#header`, `#body` et `#footer` pour créer une invite riche: pièces jointes, un [Editor](xph047) avec des mentions `@` et des commandes `/` via xEditorMentionMenu](xph051), et un sélecteur de mode.

::component-example
---
collapse: true
name: 'chat-prompt-editor-example'
class: 'justify-center'
---
::

::note
L'emplacement `#body` remplace le textarea interne et expose les gestionnaires `submit` et `close`, de sorte que vous pouvez câbler les raccourcis clavier de l'éditeur au formulaire. Quand un menu de mention est ouvert, appuyez sur: kbd{value="enter"} pour sélectionner l'élément en surbrillance au lieu de soumettre.
::

### As page d'accueil

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

## api

### Props équipement

:component-props

::callout{icon="i-simple-icons-mdnwebdocs" to="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea#attributes" target="_blank"}
Ce composant prend également en charge tous les attributs HTML natifs `<textarea>`.
::

### Slots

:component-slots

### Emis

:component-emits

### expose

Lorsque vous accédez au composant via une référence de modèle, vous pouvez utiliser les éléments suivants:

| nom| type|
| ---- | ---- |
| `textareaRef`{lang="ts-type"}| `Ref<HTMLTextAreaElement \| null>`x{lang="ts-type"}|

## Theme

:component-theme

## Changelog écrit

:component-changelog
