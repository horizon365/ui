---
title: Éditeur Emojimu
description: "Un menu de sélection d'emoji qui affiche des suggestions d'emoji lorsque vous tapez le caractère: dans l'éditeur."
category: editor
links:
  - label: GitHub à
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/EditorEmojiMenu.vue
---

@@ph000@@utilisation

Le composant EditorEmojiMenu affiche un menu de suggestions d'emoji lorsque vous tapez le caractère `:` dans l'éditeur et insère l'emoji sélectionné.

::note
Il utilise le `useEditorMenu` composable construit au-dessus de [Suggestion](https://tiptap.dev/docs/editor/api/utilities/suggestion) utilitaire de TipTap pour filtrer les éléments que vous tapez et supporter la navigation au clavier (touches fléchées, entrée pour sélectionner, échapper pour fermer).
::

::caution
Il doit être utilisé dans l'emplacement par défaut d'un composant [Editor](/docs/components/editor) pour avoir accès à l'instance de l'éditeur.
::

::component-example
---
Élevé: True
Collapse: vrai
nom: 'emoji-menu-exemple'
Catégorie: P-8
---
::

::warning
Le paquet `@tiptap/extension-emoji` n'est pas installé par défaut, vous devez l'installer séparément.
::

::callout{icon="i-custom-tiptap" to="https://tiptap.dev/docs/editor/extensions/nodes/emoji" target="_blank"}
En savoir plus sur l'extension Emoji dans la documentation TipTap.
::

@@ph013@référencement

Utilisez le `items` prop comme un tableau d'objets avec les propriétés suivantes:

@@
@@
@@
@@
@@
@@

::component-example
---
Élevé: True
Collapse: vrai
nom: 'émotion-menu-items-exemple'
Catégorie: P-8
---
::

::note
Vous pouvez également passer un tableau de tableaux à la prop `items` pour créer des groupes d'éléments séparés.
::

@344@34@34

Utilisez la prop `char` pour changer le caractère de déclenchement. Par défaut à `:`{lang="ts-type"}.

```vue
<template>
  <UEditor v-slot="{ editor }">
    <UEditorEmojiMenu :editor="editor" :items="items" char=";" />
  </UEditor>
</template>
```

### Suggestion: badge

Utilisez le prop `suggestion` pour personnaliser le comportement de correspondance [Suggestion de TipTap ](https://tiptap.dev/docs/editor/api/utilities/suggestion#settings).

Ceci est utile lorsque le caractère de déclenchement doit s'ouvrir directement après d'autres caractères au lieu d'exiger le préfixe d'espace par défaut.

```vue
<template>
  <UEditor v-slot="{ editor }">
    <UEditorEmojiMenu
      :editor="editor"
      :items="items"
      :suggestion="{
        allowedPrefixes: null
      }"
    />
  </UEditor>
</template>
```

### Options

Utilisez le prop `options` pour personnaliser le comportement de positionnement à l'aide des options d'interface utilisateur flottante ](https://floating-ui.com/docs/computeposition#options).

```vue
<template>
  <UEditor v-slot="{ editor }">
    <UEditorEmojiMenu
      :editor="editor"
      :items="items"
      :options="{
        placement: 'bottom-start',
        offset: 4
      }"
    />
  </UEditor>
</template>
```

@@P085 @@ référencement

@@ph086@@props

Composants-props

@@ph087@thème

Composant-thème

@@888@changements

Composant-changelog
