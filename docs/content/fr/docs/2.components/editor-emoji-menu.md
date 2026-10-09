---
title: Éditeur Emojimu
description: "Un menu de sélection d'emoji qui affiche des suggestions d'emoji lorsque vous tapez le caractère: dans l'éditeur."
category: editor
links:
  - label: GitHub à
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/EditorEmojiMenu.vue
---

## Utilisation

Le composant EditorEmojiMenu affiche un menu de suggestions d'emoji lors de la saisie du caractère `:` dans l'éditeur et insère l'emoji sélectionné.

::note
Il utilise le composable `useEditorMenu` construit sur l'utilitaire [Suggestion](https://tiptap.dev/docs/editor/api/utilities/suggestion) de TipTap pour filtrer les éléments lorsque vous tapez et prendre en charge la navigation au clavier (touches fléchées, entrée pour sélectionner, échappement pour fermer).
::

::caution
Il doit être utilisé dans l'emplacement par défaut d'un composant [Editor](/docs/components/editor) pour avoir accès à l'instance de l'éditeur.
::

::component-example
---
elevated: true
collapse: true
name: 'editor-emoji-menu-example'
class: 'p-8'
---
::

::warning
Le package `@tiptap/extension-emoji` n'est pas installé par défaut, vous devez l'installer séparément.
::

::callout{icon="i-custom-tiptap" to="https://tiptap.dev/docs/editor/extensions/nodes/emoji" target="_blank"}
En savoir plus sur l'extension Emoji dans la documentation TipTap.
::

### Éléments

Utilisez le prop `items` comme un tableau d'objets avec les propriétés suivantes:

- x`name: string`x{lang="ts-type"}
- x`emoji: string`x{lang="ts-type"}
- x`shortcodes?: string[]`x{lang="ts-type"}
- x`tags?: string[]`x{lang="ts-type"}
- x`group?: string`xx{lang="ts-type"}
- x`fallbackImage?: string`xx{lang="ts-type"}

::component-example
---
elevated: true
collapse: true
name: 'editor-emoji-menu-items-example'
class: 'p-8'
---
::

::note
Vous pouvez également passer un tableau de tableaux à la prop `items` pour créer des groupes d'éléments séparés.
::

### Char

Utilisez la prop `char` pour changer le caractère de déclenchement. Par défaut, `:`{lang="ts-type"}.

```vue
<template>
  <UEditor v-slot="{ editor }">
    <UEditorEmojiMenu :editor="editor" :items="items" char=";" />
  </UEditor>
</template>
```

Suggestion: badge{label="4.7+" class="align-text-top"}

Utilisez la prop `suggestion` pour personnaliser le comportement de correspondance [Suggestion de TipTap ](https://tiptap.dev/docs/editor/api/utilities/suggestion#settings).

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

### options

Utilisez la prop `options` pour personnaliser le comportement de positionnement à l'aide des options d'interface utilisateur flottante ](https://floating-ui.com/docs/computeposition#options).

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

## api

### Props

:component-props

## Thème

:component-theme

## Changelog écrit

:component-changelog
