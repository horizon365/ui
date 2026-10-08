---
title: Editeur Toolbar
description: Une barre d'outils personnalisable pour les actions de l'éditeur qui peuvent être affichées sous forme de menu fixe, à bulles ou flottant.
category: editor
links:
  - label: GitHub à
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/EditorToolbar.vue
---

@@ph000@utilisation

Le composant EditorToolbar affiche une barre d'outils de boutons de mise en forme qui synchronisent automatiquement leur état actif avec le contenu de l'éditeur. Il prend en charge trois modes de mise en page à l'aide du paquet `@tiptap/vue-3/menus`:
- `fixed`{lang="ts-type"}(toujours visible)
- `bubble`{lang="ts-type"}(apparaît sur la sélection de texte)
- `floating`{lang="ts-type"}(apparaît sur les lignes vides)

::caution
Il doit être utilisé dans l'emplacement par défaut d'un composant [Editor](/docs/components/editor) pour avoir accès à l'instance de l'éditeur.
::

::component-example
---
Élevé: True
Collapse: vrai
nom: 'éditeur-toolbar-exemple'
Catégorie: P-8
---
::

::callout{icon="i-custom-tiptap"}
Les mises en page à bulles et flottantes utilisent les extensions [BubbleMenu](https://tiptap.dev/docs/editor/extensions/functionality/bubble-menu) et [FloatingMenu](https://tiptap.dev/docs/editor/extensions/functionality/floatingmenu) de TipTap.
::

@@223@pour les

Utilisez le `items` prop comme un tableau d'objets avec les propriétés suivantes:

@@
@@
@@
@@
@@
@@
@@
[`kind?: "mark" | "textAlign" | "heading" | "link" | "image" | "blockquote" | "bulletList" | "orderedList" | "taskList" | "codeBlock" | "horizontalRule" | "paragraph" | "undo" | "redo" | "clearFormatting" | "duplicate" | "delete" | "moveUp" | "moveDown" | "suggestion" | "mention" | "emoji"`{lang="ts-type"}](/docs/components/editor#handlers)
@@
@@
@@
@@
[`slot?: string``slot?: string`#with-link-popover)
@@
@@
@@

Vous pouvez passer n'importe quelle propriété du composant [Button](/docs/components/button#props) comme `color`,`variant`,`size`, etc.

::component-example
---
Élevé: True
Collapse: vrai
nom: 'éditeur-toolbar-items-exemple'
Catégorie: P-8
---
::

::note
Vous pouvez également passer un tableau de tableaux à la prop `items` pour créer des groupes d'éléments séparés.
::

::tip
Chaque élément peut prendre un tableau `items` d'objets avec les mêmes propriétés que le prop `items` pour créer un [DropdownMenu](/docs/components/dropdown-menu).
::

@@ph095@layout

Utilisez la prop `layout` pour modifier la façon dont la barre d'outils est affichée. Par défaut à `fixed`{lang="ts-type"}.

::component-example
---
Élevé: True
Collapse: vrai
nom: 'éditeur-toolbar-layout-example'
Catégorie: P-8
options:
  - nom: layout
    Étiquette: layout
    Défaut: Bubble
    items:
      @@ph100@fixé
      @@ph101@bubble
      @@F102@F102
---
::

### Options

Lorsque vous utilisez les mises en page `bubble`{lang="ts-type"} ou `floating`{lang="ts-type"}, utilisez la prop `options` pour personnaliser le comportement de positionnement à l'aide des options d'interface utilisateur flottante ](https://floating-ui.com/docs/computeposition#options).

```vue
<template>
  <UEditor v-slot="{ editor }">
    <UEditorToolbar
      :editor="editor"
      :items="items"
      layout="bubble"
      :options="{
        placement: 'top',
        offset: 8,
        flip: { padding: 8 },
        shift: { padding: 8 }
      }"
    />
  </UEditor>
</template>
```

### Devrait afficher

Lorsque vous utilisez les mises en page `bubble`{lang="ts-type"} ou `floating`{lang="ts-type"}, utilisez la prop `should-show` pour contrôler l'affichage de la barre d'outils. Cette fonction reçoit le contexte de l'état de l'éditeur et renvoie un booléen.

```vue
<template>
  <UEditor v-slot="{ editor }">
    <UEditorToolbar
      :editor="editor"
      :items="items"
      layout="bubble"
      :should-show="({ view, state }) => {
        const { selection } = state
        const { from, to } = selection
        const text = state.doc.textBetween(from, to)
        return view.hasFocus() && !selection.empty && text.length > 10
      }"
    />
  </UEditor>
</template>
```

@@ph153@@Exemples

### Avec barre d'outils d'images

Utilisez la prop `should-show` pour créer des barres d'outils contextuelles qui n'apparaissent que pour certains types de nœuds. Cet exemple montre une barre d'outils `bubble` avec des actions de téléchargement et de suppression qui n'apparaissent que lorsqu 'une image est sélectionnée.

::component-example
---
Élevé: True
Collapse: vrai
nom: 'éditeur-toolbar-image-exemple'
Catégorie: P-8
---
::

### Avec lien popover

Cet exemple montre comment créer un popover de lien personnalisé à l'aide de la propriété `slot` sur les éléments de la barre d'outils et du composant [Popover](/docs/components/popover).

1. Créer un composant Vue qui enveloppe un [Popover](/docs/components/popover) avec une fonctionnalité d'édition de lien:

::component-example
---
Prévision: Faux
Collapse: vrai
nom: 'éditeur-link-popover'
---
::

2. Utilisez le composant personnalisé dans la barre d'outils avec un emplacement nommé:

::component-example
---
Élevé: True
Collapse: vrai
nom: 'editor-toolbar-custom-slot-example'
Catégorie: P-8
---
::

@@ph169@@api

@170@projets

Composants-props

@@ph171@@slot

Composants slots

@@ph172@thème

Composant-thème

@changement@changement@changement.com

Composant-changelog
