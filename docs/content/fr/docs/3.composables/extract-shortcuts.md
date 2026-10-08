---
title: Extracteurs
description: 'Un utilitaire pour extraire les raccourcis clavier des éléments de menu.'
---

@@ph000@@utilisation

Utilisez l'utilitaire `extractShortcuts` à importation automatique pour définir des raccourcis clavier à partir d'éléments de menu. Il extrait des raccourcis de composants tels que [DropdownMenu](/docs/components/dropdown-menu),[ContextMenu](/docs/components/context-menu) ou [CommandPalette ](/docs/components/command-palette) où les éléments ont `kbds` définis.

```vue
<script setup lang="ts">
const items = [{
  label: 'Save',
  icon: 'i-lucide-file-down',
  kbds: ['meta', 'S'],
  onSelect() {
    save()
  }
}, {
  label: 'Copy',
  icon: 'i-lucide-copy',
  kbds: ['meta', 'C'],
  onSelect() {
    copy()
  }
}]

defineShortcuts(extractShortcuts(items))
</script>
```

::tip{to="/docs/composables/define-shortcuts"}
Pour en savoir plus sur les raccourcis clavier, consultez la documentation composable **defineShortcuts**.
::

@@pH038@@api

@@

Extrait les raccourcis clavier d'un tableau d'éléments de menu et renvoie un objet de configuration compatible avec `defineShortcuts`.

@@ph042@@Paramètres

::field-group

  ::field{name="items" type="any[] | any[][]" required}
  Tableau d'éléments de menu (ou tableaux imbriqués) contenant des définitions de raccourcis. Chaque élément peut avoir les propriétés suivantes:

    ::collapsible

      ::field-group

        ::field{name="kbds" type="string[]"}
        Un tableau de touches du clavier qui forment le raccourci (par exemple,`['meta', 'S']`).
        ::

        ::field{name="onSelect" type="() => void"}
        Une fonction de callback à exécuter lorsque le raccourci est déclenché.
        ::

        ::field{name="onClick" type="() => void"}
        Une fonction de callback alternative (utilisée si `onSelect` n'est pas définie).
        ::

        ::field{name="children" type="any[]"}
        Éléments de menu imbriqués pour extraire récursivement des raccourcis.
        ::

        ::field{name="items" type="any[]"}
        Propriété alternative pour les éléments de menu imbriqués.
        ::
      ::
    ::
  ::

  ::field{name="separator" type="'_' | '-'"}
  Séparateur utilisé pour joindre les touches du clavier. Utilisez `'_'` pour les combinaisons de touches (par exemple,`meta_k`) ou `'-'` pour les séquences de touches (par exemple,`g-d`). Par défaut à `'_'`.
  ::
::

**Retourne:** Un objet qui peut être passé directement à `defineShortcuts`.

@@ph054@exemples

### Avec éléments imbriqués

L'utilitaire parcourt récursivement les propriétés `children` et `items` pour extraire des raccourcis des structures de menu imbriquées.

```vue
<script setup lang="ts">
import type { DropdownMenuItem } from '@nuxt/ui'

const items: DropdownMenuItem[][] = [[{
  label: 'Edit',
  icon: 'i-lucide-pencil',
  kbds: ['E'],
  onSelect() {
    edit()
  }
}, {
  label: 'Duplicate',
  icon: 'i-lucide-copy',
  kbds: ['D'],
  onSelect() {
    duplicate()
  }
}], [{
  label: 'Invite users',
  icon: 'i-lucide-user-plus',
  children: [[{
    label: 'Invite by email',
    icon: 'i-lucide-send-horizontal',
    kbds: ['meta', 'E'],
    onSelect() {
      inviteByEmail()
    }
  }, {
    label: 'Invite by link',
    icon: 'i-lucide-link',
    kbds: ['meta', 'I'],
    onSelect() {
      inviteByLink()
    }
  }]]
}], [{
  label: 'Delete',
  icon: 'i-lucide-trash',
  kbds: ['meta', 'backspace'],
  onSelect() {
    remove()
  }
}]]

defineShortcuts(extractShortcuts(items))
</script>

<template>
  <UDropdownMenu :items="items">
    <UButton label="Actions" />
  </UDropdownMenu>
</template>
```

### Avec des séquences clés

Utilisez le paramètre `separator` pour créer des séquences de touches au lieu de combinaisons de touches.

```vue
<script setup lang="ts">
const items = [{
  label: 'Go to Dashboard',
  kbds: ['G', 'D'],
  onSelect() {
    navigateTo('/dashboard')
  }
}, {
  label: 'Go to Settings',
  kbds: ['G', 'S'],
  onSelect() {
    navigateTo('/settings')
  }
}]

// Using '-' creates key sequences: 'g-d', 'g-s'
defineShortcuts(extractShortcuts(items, '-'))
</script>
```
