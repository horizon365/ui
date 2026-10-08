---
title: ÉditeurDragons
description: Une poignée glissable pour réorganiser et sélectionner des blocs dans l'éditeur.
category: editor
links:
  - label: GitHub à
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/EditorDragHandle.vue
---

@@ph000@@utilisation

Le composant EditorDragHandle fournit une fonctionnalité de glisser-déposer pour réorganiser les blocs de l'éditeur à l'aide du paquet `@tiptap/extension-drag-handle-vue-3`.

::caution
Il doit être utilisé dans l'emplacement par défaut d'un composant [Editor](/docs/components/editor) pour avoir accès à l'instance de l'éditeur.
::

Il étend le [Button](/docs/components/button) composant, de sorte que vous pouvez passer n'importe quelle propriété telle que `color`,`variant`,`size`, etc.

::component-example
---
Collapse: vrai
Élevé: True
nom: 'éditeur-drag-handle-example'
Catégorie: P-8
---
::

::callout{icon="i-custom-tiptap" to="https://tiptap.dev/docs/editor/extensions/functionality/drag-handle-vue" target="_blank"}
En savoir plus sur l'extension Drag Handle dans la documentation de TipTap.
::

@@ph013@@Icon

Utilisez le prop `icon` pour personnaliser l'icône de la poignée de glissement.

```vue
<template>
  <UEditor v-slot="{ editor }">
    <UEditorDragHandle :editor="editor" icon="i-lucide-move" />
  </UEditor>
</template>
```

::framework-only
#numérique
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
Vous pouvez personnaliser cette icône globalement dans votre `app.config.ts` sous la touche `ui.icons.drag`.
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
Vous pouvez personnaliser cette icône globalement dans votre `vite.config.ts` sous la touche `ui.icons.drag`.
:::
::

@@26@options

Utilisez le prop `options` pour personnaliser le comportement de positionnement à l'aide des options d'interface utilisateur flottante ](https://floating-ui.com/docs/computeposition#options).

::note
Le décalage est automatiquement calculé pour centrer la poignée pour les petits blocs et l'aligner sur le dessus pour les blocs plus grands.
::

```vue
<template>
  <UEditor v-slot="{ editor }">
    <UEditorDragHandle
      :editor="editor"
      :options="{
        placement: 'left'
      }"
    />
  </UEditor>
</template>
```

@@ph044@exemples

### Avec menu déroulant

Utilisez l'emplacement par défaut pour ajouter un [DropdownMenu](/docs/components/dropdown-menu) avec des actions au niveau des blocs comme dupliquer, supprimer, déplacer vers le haut/vers le bas ou transformer des blocs en différents types.

Écoutez l'événement `@node-change` pour suivre le nœud actuellement en survol et sa position, puis utilisez `editor.chain().setMeta('lockDragHandle', open).run()`{lang="ts-type"} pour verrouiller la position de la poignée pendant que le menu est ouvert.

::component-example
---
Élevé: True
Collapse: vrai
name: 'éditeur-drag-handle-drop-menu-exemple'
Catégorie: P-8
---
::

::note
Cet exemple utilise l'utilitaire `mapEditorItems` de `@nuxt/ui/utils/editor` pour mapper automatiquement les types de gestionnaires (tels que `duplicate`,`delete`,`moveUp`, etc.) à leurs commandes d'éditeur correspondantes avec une gestion d'état appropriée.
::

### Avec menu de suggestions

Utilisez l'emplacement par défaut pour ajouter un [Button](/docs/components/button) à côté de la poignée de glisser pour ouvrir le [EditorSuggestionMenu](/docs/components/editor-suggestion-menu).

Appelez la fonction `onClick` pour obtenir la position actuelle du nœud, puis utilisez `handlers.suggestion?.execute(editor, { pos: node?.pos }).run()`{lang="ts-type"} pour insérer de nouveaux blocs à cette position.

::component-example
---
Élevé: True
Collapse: vrai
name: 'éditeur-drag-handle-suggestion-menu-exemple'
classe: '! p-0'
---
::

@@P2000@@été

@@ph071@@props

Composants-props

@@772@@réseau

Composants slots

@@773@@émetteur

Composants émetteurs

@@ph074@thème

Composant-thème

@@changement@changement@changement.com

Composant-changelog
