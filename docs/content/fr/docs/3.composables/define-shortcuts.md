---
title: Définition Raccourcis
description: 'Un composable pour définir des raccourcis clavier dans votre application.'
---

@@ph000@utilisation

Utilisez le composable `defineShortcuts` auto-importé pour définir des raccourcis clavier.

```vue
<script setup lang="ts">
const open = ref(false)

defineShortcuts({
  meta_k: () => {
    open.value = !open.value
  }
})
</script>
```

Les raccourcis - sont automatiquement ajustés pour les plates-formes non-macOS, en convertissant `meta` en `ctrl`.
- Le composable utilise le [`useEventListener`](https://vueuse.org/core/useEventListener/) de VueUse pour gérer les événements de clé.
- Pour une liste complète des touches de raccourci disponibles, reportez-vous à la documentation de l'API [`KeyboardEvent.key`](https://developer.mozilla.org/en-US/docs/Web/API/UI_Events/Keyboard_event_key_values). Les touches dans la configuration ne sont pas sensibles à la casse, donc `meta_k` et `meta_K` sont équivalentes.

::tip{to="/docs/components/kbd"}
Découvrez comment afficher les raccourcis dans les composants dans la documentation du composant **Kbd**.
::

@@ph032@api

@@

Définissez des raccourcis clavier pour votre application. Renvoie une fonction qui supprime l'écouteur, au cas où vous auriez besoin d'arrêter les raccourcis avant que le composant ne se démonte.

### Paramètres

::field-group

  ::field{name="config" type="MaybeRef<ShortcutsConfig>" required}
  Un objet où les touches sont des définitions de raccourcis et les valeurs sont soit des fonctions de gestionnaire ou des objets de configuration de raccourcis. Passez un `ref` pour mettre à jour les raccourcis de manière réactive. Une valeur de `false`,`null` ou `undefined` saute ce raccourci, c'est ainsi que vous activez un raccourci conditionnellement.
  ::

  ::field{name="options" type="ShortcutsOptions"}
  Configuration optionnelle du comportement des raccourcis.

    ::collapsible

      ::field-group
        ::field{name="chainDelay" type="number"}
        Le délai entre les touches appuie pour considérer le raccourci comme chaîné. Par défaut à `800`.
        ::

        ::field{name="layoutIndependent" type="boolean"}
        Lorsqu 'ils sont activés, les raccourcis fonctionnent de manière cohérente sur différentes dispositions de clavier (arabe, hébreu) en faisant correspondre les positions clés physiques plutôt que les valeurs de caractères.
        - `false`(par défaut): utilise `e.key` pour la correspondance par caractère (spécifique à la mise en page)
        - `true`: Utilise `e.code` pour la correspondance de clés physiques (disposition agnostique)
        ::
      ::
    ::
  ::
::

### Définition du raccourci

Les raccourcis sont définis selon le format suivant:

- Clé unique: `'a'`,`'b'`,`'1'`,`'?'`, etc.
- Combinaisons de clés: Utilisez `_` pour séparer les clés, par exemple `'meta_k'`,`'ctrl_shift_f'`
- Séquences clés: utilisez `-` pour définir une séquence, par exemple `'g-d'`

### Modifier

- `meta`/`command`: Représente `⌘ Command` sur macOS et `Ctrl` sur d'autres plateformes
- `ctrl`: Représente `Ctrl` sur toutes les plateformes
- `shift`: Utilisé pour les touches alphabétiques lorsque Shift est requis
- `alt`/`option`: Représente `⌥ Option` sur macOS et `Alt` sur d'autres plates-formes. Correspond par position de clé physique, puisque Option réécrit le caractère sur macOS

### Clés spéciales

Utilisez ces noms pour faire correspondre des clés spéciales.

- `escape`: Déclencheurs sur la touche Esc
- `enter`: Déclencheurs sur la touche Entrée
- `arrowleft`,`arrowright`,`arrowup`,`arrowdown`: Déclenchement sur les touches fléchées respectives
- `tab`: Déclencheurs sur la touche Tab
- `backspace`: Déclencheurs sur la touche Backspace
- `delete`: Déclencheurs sur la touche Delete
- `space`: Déclencheurs sur la barre d'espace. Nécessite `layoutIndependent` sauf combinaison avec `alt`

### Configuration du raccourci

Chaque raccourci peut être défini comme une fonction ou un objet avec les propriétés suivantes:

@@

@@ph099@paramètres

::field-group
  ::field{name="handler" type="(e?: KeyboardEvent) => void" required}
  Fonction à exécuter lorsque le raccourci est déclenché. Elle reçoit le `KeyboardEvent` d'origine.
  ::

  ::field{name="usingInput" type="boolean | string"}
  Contrôle le moment où le raccourci doit se déclencher en fonction du focus en entrée:
  - `false`(par défaut): Le raccourci se déclenche uniquement lorsqu 'aucune entrée n'est focalisée
  - `true`: Le raccourci se déclenche même lorsqu 'une entrée est focalisée
  - `string`: Le raccourci se déclenche uniquement lorsque l'entrée spécifiée (par nom) est focalisée
  ::
::

@@ph107@Exemples

### Utilisation de base

```vue
<script setup lang="ts">
defineShortcuts({
  '?': () => openHelpModal(),
  'meta_k': () => openCommandPalette(),
  'g-d': () => navigateToDashboard()
})
</script>
```

### Avec manipulation de la mise au point en entrée

Utilisez `usingInput` pour déclencher un raccourci uniquement lorsqu 'une entrée spécifique est focalisée.

```vue
<template>
  <UInput v-model="query" name="queryInput" />
</template>

<script setup lang="ts">
const query = ref('')

defineShortcuts({
  enter: {
    usingInput: 'queryInput',
    handler: () => performSearch()
  },
  escape: {
    usingInput: true,
    handler: () => clearSearch()
  }
})
</script>
```

### Extraire des raccourcis des éléments de menu

Utilisez l'utilitaire `extractShortcuts` pour définir automatiquement des raccourcis à partir d'éléments de menu.

::tip{to="/docs/composables/extract-shortcuts"}
En savoir plus sur l'utilitaire **extractShortcuts**.
::
