---
title: ÉditeurSuggestionMenu
description: Un menu de commande qui affiche des suggestions de mise en forme et d'action lors de la saisie du caractère/dans l'éditeur.
category: editor
links:
  - label: GitHub à
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/EditorSuggestionMenu.vue
---

@@ph000@utilisation

Le composant EditorSuggestionMenu affiche un menu de suggestions de mise en forme et d'actions lors de la saisie d'un caractère de déclenchement dans l'éditeur et exécute le [handler](/docs/components/editor#handlers) correspondant lorsqu 'un élément est sélectionné.

::note
Il utilise l'utilitaire `useEditorMenu` composable construit sur [Suggestion](https://tiptap.dev/docs/editor/api/utilities/suggestion) de TipTap pour filtrer les éléments lorsque vous tapez et prendre en charge la navigation au clavier (touches fléchées, entrée pour sélectionner, échappement pour fermer).
::

::caution
Il doit être utilisé dans l'emplacement par défaut d'un composant [Editor](/docs/components/editor) pour avoir accès à l'instance de l'éditeur.
::

::component-example
---
Élevé: True
Collapse: vrai
nom: 'rédacteur-suggestion-menu-exemple'
Catégorie: P-8
---
::

@@ph014@référencement

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
name: 'rédacteur-suggestion-menu-items-exemple'
Catégorie: P-8
---
::

::note
Vous pouvez également passer un tableau de tableaux à la prop `items` pour créer des groupes d'éléments séparés.
::

::tip
Utilisez `type: 'label'` pour les en-têtes de section et `type: 'separator'` pour les séparateurs visuels afin d'organiser les commandes en groupes logiques pour une meilleure découverte.
::

@@ph041@@char

Utilisez la prop `char` pour changer le caractère de déclenchement. Par défaut à `/`{lang="ts-type"}.

```vue
<template>
  <UEditor v-slot="{ editor }">
    <UEditorSuggestionMenu :editor="editor" :items="items" char=">" />
  </UEditor>
</template>
```

### Suggestion: badge{label="4.7+" class="align-text-top"}

Utilisez le prop `suggestion` pour personnaliser le comportement de correspondance [Suggestion de TipTap ](https://tiptap.dev/docs/editor/api/utilities/suggestion#settings).

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

@@73@options

Utilisez le prop `options` pour personnaliser le comportement de positionnement en utilisant les options d'interface utilisateur flottante ](https://floating-ui.com/docs/computeposition#options).

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

@@ph093@@api

@@ph094@@projets

Composants-props

@@ph095@thème

Composant-thème

@changement@changement@changement@changement.com

Composant-changelog
