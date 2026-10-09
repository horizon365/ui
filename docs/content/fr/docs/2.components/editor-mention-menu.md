---
title: ÉditeurMenu
description: Menu de mention qui affiche les suggestions de l'utilisateur lors de la saisie d'un caractère de déclenchement dans l'éditeur.
category: editor
links:
  - label: GitHub à
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/EditorMentionMenu.vue
---

## Utilisation

Le composant EditorMentionMenu affiche un menu de suggestions utilisateur lors de la saisie d'un caractère de déclenchement (par défaut `@`) dans l'éditeur et insère la mention sélectionnée à l'aide du package `@tiptap/extension-mention`.

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
name: 'editor-mention-menu-example'
class: 'p-8'
---
::

::callout{icon="i-custom-tiptap" to="https://tiptap.dev/docs/editor/extensions/nodes/mention" target="_blank"}
En savoir plus sur l'extension Mention dans la documentation de TipTap.
::

### Détails

Utilisez le prop `items` comme tableau d'objets avec les propriétés suivantes:

- x`label: string`x{lang="ts-type"}
- x`avatar?: AvatarProps`x{lang="ts-type"}
- x`icon?: string`x{lang="ts-type"}
- x`description?: string`x{lang="ts-type"}
- x`disabled?: boolean`xx{lang="ts-type"}

::component-example
---
elevated: true
collapse: true
name: 'editor-mention-menu-items-example'
class: 'p-8'
---
::

::note
Vous pouvez également passer un tableau de tableaux à la prop `items` pour créer des groupes d'éléments séparés.
::

### char

Utilisez la prop `char` pour changer le caractère de déclenchement. Par défaut, `@`{lang="ts-type"}. Le caractère de déclenchement est également utilisé comme préfixe lors du rendu de la mention insérée (par exemple, `#channel` au lieu de `@channel`).

```vue
<template>
  <UEditor v-slot="{ editor }">
    <UEditorMentionMenu :editor="editor" :items="channels" char="#" />
  </UEditor>
</template>
```

::note
Vous pouvez utiliser plusieurs composants `EditorMentionMenu` sur le même éditeur avec différents accessoires `char` et `plugin-key` pour prendre en charge différents types de mentions.

```vue
<template>
  <UEditor v-slot="{ editor }">
    <UEditorMentionMenu :editor="editor" :items="users" plugin-key="mentionMenu" />
    <UEditorMentionMenu :editor="editor" :items="tags" char="#" plugin-key="tagMenu" />
  </UEditor>
</template>
```
::

Suggestion: badge{label="4.7+" class="align-text-top"}

Utilisez la prop `suggestion` pour personnaliser le comportement de correspondance [Suggestion de TipTap ](https://tiptap.dev/docs/editor/api/utilities/suggestion#settings).

Ceci est utile lorsque le caractère de déclenchement doit s'ouvrir directement après d'autres caractères au lieu d'exiger le préfixe d'espace par défaut.

```vue
<template>
  <UEditor v-slot="{ editor }">
    <UEditorMentionMenu
      :editor="editor"
      :items="items"
      char="#"
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
    <UEditorMentionMenu
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

## exemples

### Avec ignorer le filtre: badge{label="4.4+" class="align-text-top"}

Vous pouvez définir la prop `ignore-filter` sur `true` pour désactiver la recherche interne et utiliser votre propre logique de recherche. Utilisez `v-model:search-term` pour accéder au terme de recherche en cours et récupérer des éléments à partir d'une API.

::component-example
---
elevated: true
collapse: true
name: 'editor-mention-menu-ignore-filter-example'
class: 'p-8'
---
::

::note
Cet exemple utilise [`refDebounced`](https://vueuse.org/shared/refDebounced/) pour déboulonner les appels d'API.
::

## API

### Props

:component-props

## Thème

:component-theme

## Changelog

:component-changelog
