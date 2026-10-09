---
title: extractSneltoetsen
description: 'Een hulpprogramma om sneltoetsen uit menu-items te extraheren.'
---

## Gebruik

Gebruik het automatisch geïmporteerde hulpprogramma `extractShortcuts` om sneltoetsen uit menu-items te definiëren. Het haalt sneltoetsen uit componenten zoals [DropdownMenu](/docs/components/dropdown-menu), [ContextMenu](/docs/components/context-menu) of [CommandPalette](/docs/components/command-palette) waar items `kbds` hebben gedefinieerd.

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
Lees meer over sneltoetsen in de **defineShortcuts** samen te stellen documentatie.
::

## API

`extractShortcuts(items: any[] | any[][], separator?: '_' | '-'): ShortcutsConfig`{lang="ts-type"}

Haalt sneltoetsen uit een reeks menu-items en retourneert een configuratieobject dat compatibel is met `defineShortcuts`.

#### Parameters

::field-group

  ::field{name="items" type="any[] | any[][]" required}
Een reeks menu-items (of geneste arrays) met snelkoppelingsdefinities. Elk item kan de volgende eigenschappen hebben:

    ::collapsible

      ::field-group

        ::field{name="kbds" type="string[]"}
Een reeks toetsenbordtoetsen die de snelkoppeling vormen (bijv. `['meta', 'S']`).
        ::

        ::field{name="onSelect" type="() => void"}
Een callback-functie die moet worden uitgevoerd wanneer de snelkoppeling wordt geactiveerd.
        ::

        ::field{name="onClick" type="() => void"}
Een alternatieve callback-functie (gebruikt als `onSelect` niet is gedefinieerd).
        ::

        ::field{name="children" type="any[]"}
Genestelde menu-items om recursief snelkoppelingen uit te halen.
        ::

        ::field{name="items" type="any[]"}
Alternatieve eigenschap voor geneste menu-items.
        ::
      ::
    ::
  ::

  ::field{name="separator" type="'_' | '-'"}
Het scheidingsteken dat wordt gebruikt om toetsenbordtoetsen samen te voegen. Gebruik `'_'` voor toetscombinaties (bijv. `meta_k`) of `'-'` voor toetsreeksen (bijv. `g-d`). Standaard `'_'`.
  ::
::

**Returns: ** Een `ShortcutsConfig` object dat direct aan `defineShortcuts` kan worden doorgegeven.

## Voorbeelden

### Met geneste items

Het hulpprogramma doorkruist recursief de eigenschappen `children` en `items` om snelkoppelingen uit geneste menustructuren te extraheren.

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

### Met toetsreeksen

Gebruik de parameter `separator` om toetsreeksen te maken in plaats van toetscombinaties.

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
