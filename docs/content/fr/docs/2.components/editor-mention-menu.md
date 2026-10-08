---
title: ÉditeurMenu
description: Menu de mention qui affiche les suggestions de l'utilisateur lors de la saisie d'un caractère de déclenchement dans l'éditeur.
category: editor
links:
  - label: GitHub à
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/EditorMentionMenu.vue
---

@@ph000@utilisation

Le composant EditorMentionMenu affiche un menu de suggestions d'utilisateur lors de la saisie d'un caractère de déclenchement (par défaut `@`) dans l'éditeur et insère la mention sélectionnée à l'aide du paquet `@tiptap/extension-mention`.

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
nom: 'rédacteur-mention-menu-exemple'
Catégorie: P-8
---
::

::callout{icon="i-custom-tiptap" to="https://tiptap.dev/docs/editor/extensions/nodes/mention" target="_blank"}
En savoir plus sur l'extension Mention dans la documentation de TipTap.
::

@@ph012@articles

Utilisez le `items` prop comme un tableau d'objets avec les propriétés suivantes:

@@
@@
@@
@@
@@

::component-example
---
Élevé: True
Collapse: vrai
name: 'rédacteur-mention-menu-items-exemple'
Catégorie: P-8
---
::

::note
Vous pouvez également passer un tableau de tableaux à la prop `items` pour créer des groupes d'éléments séparés.
::

@@00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000

Utilisez la prop `char` pour changer le caractère de déclenchement. Par défaut,`@`{lang="ts-type"}. Le caractère de déclenchement est également utilisé comme préfixe lors du rendu de la mention insérée (par exemple,`#channel` au lieu de `@channel`).

```vue
<template>
  <UEditor v-slot="{ editor }">
    <UEditorMentionMenu :editor="editor" :items="channels" char="#" />
  </UEditor>
</template>
```

::note
Vous pouvez utiliser plusieurs composants `EditorMentionMenu` sur le même éditeur avec différents props `char` et `plugin-key` pour prendre en charge différents types de mentions.

```vue
<template>
  <UEditor v-slot="{ editor }">
    <UEditorMentionMenu :editor="editor" :items="users" plugin-key="mentionMenu" />
    <UEditorMentionMenu :editor="editor" :items="tags" char="#" plugin-key="tagMenu" />
  </UEditor>
</template>
```
::

### Suggestion: badge{label="4.7+" class="align-text-top"}

Utilisez le prop `suggestion` pour personnaliser le comportement de correspondance [Suggestion de TipTap ](https://tiptap.dev/docs/editor/api/utilities/suggestion#settings).

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

@@75@options

Utilisez le prop `options` pour personnaliser le comportement de positionnement à l'aide des options d'interface utilisateur flottante ](https://floating-ui.com/docs/computeposition#options).

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

@@ph095@exemples

### Avec ignorer le filtre: badge{label="4.4+" class="align-text-top"}

Vous pouvez définir la prop `ignore-filter` à `true` pour désactiver la recherche interne et utiliser votre propre logique de recherche. Utilisez `v-model:search-term` pour accéder au terme de recherche en cours et récupérer des éléments à partir d'une API.

::component-example
---
Élevé: True
Collapse: vrai
name: 'rédacteur-mention-menu-ignore-filtre-exemple'
Catégorie: P-8
---
::

::note
Cet exemple utilise [`refDebounced`](https://vueuse.org/shared/refDebounced/) pour déboulonner les appels d'API.
::

@@ph106@api

@@ph107@props

Composants-props

@@ph108@thème

Composant-thème

@change109 @ changement

Composant-changelog
