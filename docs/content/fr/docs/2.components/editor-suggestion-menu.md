---
title: ÉditeurSuggestionMenu
description: Un menu de commande qui affiche des suggestions de mise en forme et d'action lors de la saisie du caractère/dans l'éditeur.
category: editor
links:
  - label: GitHub à
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/EditorSuggestionMenu.vue
---

## Utilisation

Le composant EditorSuggestionMenu affiche un menu de suggestions de mise en forme et d'action lors de la saisie d'un caractère de déclenchement dans l'éditeur et exécute le [handler](/docs/components/editor#handlers) correspondant lorsqu 'un élément est sélectionné.

::note
Il utilise le composable `useEditorMenu` construit sur l'utilitaire [Suggestion](https://tiptap.dev/docs/editor/api/utilities/suggestion) de TipTap pour filtrer les éléments lorsque vous tapez et prendre en charge la navigation au clavier (touches fléchées, entrée pour sélectionner, échappement pour fermer).
::

::caution
Il doit être utilisé à l'intérieur de l'emplacement par défaut d'un composant [Editor](/docs/components/editor) pour avoir accès à l'instance de l'éditeur.
::

::component-example
---
elevated: true
collapse: true
name: 'editor-suggestion-menu-example'
class: 'p-8'
---
::

### Détails

Utilisez le prop `items` comme un tableau d'objets avec les propriétés suivantes:

Xph022xx[x`kind?: "textAlign" | "heading" | "link" | "image" | "blockquote" | "bulletList" | "orderedList" | "taskList" | "codeBlock" | "horizontalRule" | "paragraph" | "clearFormatting" | "duplicate" | "delete" | "moveUp" | "moveDown" | "suggestion" | "mention" | "emoji"`x{lang="ts-type"}x](x/docs/components/editor#handlersx)
- x`label?: string`x{lang="ts-type"}
- xx`description?: string`xx{lang="ts-type"}
- x`icon?: string`xx{lang="ts-type"}
- x`type?: "label" | "separator"`x{lang="ts-type"}
- x`disabled?: boolean`x{lang="ts-type"}

::component-example
---
elevated: true
collapse: true
name: 'editor-suggestion-menu-items-example'
class: 'p-8'
---
::

::note
Vous pouvez également passer un tableau de tableaux à la prop `items` pour créer des groupes d'éléments séparés.
::

::tip
Utilisez `type: 'label'` pour les en-têtes de section et `type: 'separator'` pour les séparateurs visuels pour organiser les commandes en groupes logiques pour une meilleure découverte.
::

### Char

Utilisez la prop `char` pour changer le caractère de déclenchement. Par défaut, `/`{lang="ts-type"}.

```vue
<template>
  <UEditor v-slot="{ editor }">
    <UEditorSuggestionMenu :editor="editor" :items="items" char=">" />
  </UEditor>
</template>
```

Suggestion: badge{label="4.7+" class="align-text-top"}

Utilisez la prop `suggestion` pour personnaliser le comportement de correspondance [Suggestion de TipTap ](https://tiptap.dev/docs/editor/api/utilities/suggestion#settings).

Ceci est utile lorsque le caractère de déclenchement doit s'ouvrir directement après d'autres caractères au lieu d'exiger le préfixe d'espace par défaut.

```vue
<template>
  <UEditor v-slot="{ editor }">
    <UEditorSuggestionMenu
      :editor="editor"
      :items="items"
      char=":"
      :suggestion="{
        allowedPrefixes: null
      }"
    />
  </UEditor>
</template>
```

### Options

Utilisez la prop `options` pour personnaliser le comportement de positionnement à l'aide des options d'interface utilisateur flottante ](https://floating-ui.com/docs/computeposition#options).

```vue
<template>
  <UEditor v-slot="{ editor }">
    <UEditorSuggestionMenu
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

## API

### Props équipements

:component-props

## Thème

:component-theme

## Changelog

:component-changelog
