---
title: ExtractShortcuts Bearbeiten
description: 'Ein Dienstprogramm, um Tastaturkürzel aus Menüelementen zu extrahieren.'
---

@@@ph000@Verwendung

Verwenden Sie das automatisch importierte `extractShortcuts` Utility, um Tastaturkürzel aus Menüelementen zu definieren. Es extrahiert Verknüpfungen aus Komponenten wie [DropdownMenu](/docs/components/dropdown-menu),[](/docs/components/context-menu) oder [](/docs/components/command-palette), wo Elemente haben `kbds` definiert.

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
Weitere Informationen zu Tastaturkürzeln finden Sie in der Dokumentation **defineShortcuts** composable.
::

@@@@@@38@@bmmmmwh

{lang="ts-type"}

Extrahiert Tastaturkürzel aus einem Array von Menüelementen und gibt ein mit `defineShortcuts` kompatibles Konfigurationsobjekt zurück.

#### Parameter Bearbeiten

::field-group

  ::field{name="items" type="any[] | any[][]" required}
  Ein Array von Menüelementen (oder verschachtelten Arrays), die Shortcut-Definitionen enthalten. Jedes Element kann die folgenden Eigenschaften haben:

    ::collapsible

      ::field-group

        ::field{name="kbds" type="string[]"}
        Ein Array von Tastaturtasten, die die Verknüpfung bilden (z. B.`['meta', 'S']`).
        ::

        ::field{name="onSelect" type="() => void"}
        Eine Callback-Funktion, die ausgeführt wird, wenn der Shortcut ausgelöst wird.
        ::

        ::field{name="onClick" type="() => void"}
        Eine alternative Callback-Funktion (wird verwendet, wenn `onSelect` nicht definiert ist).
        ::

        ::field{name="children" type="any[]"}
        Verschachtelte Menüpunkte, um rekursiv Verknüpfungen zu extrahieren.
        ::

        ::field{name="items" type="any[]"}
        Alternative Property für verschachtelte Menüelemente.
        ::
      ::
    ::
  ::

  ::field{name="separator" type="'_' | '-'"}
  Verwenden Sie `'_'` für Tastenkombinationen (z. B.`meta_k`) oder `'-'` für Tastenfolgen (z. B.`g-d`).
  ::
::

**Returns:** A `ShortcutsConfig` Objekt, das direkt an `defineShortcuts` übergeben werden kann.

@@ph054@@Beispiele

### Mit verschachtelten Elementen

Das Dienstprogramm durchläuft rekursiv die Eigenschaften `children` und `items`, um Verknüpfungen aus verschachtelten Menüstrukturen zu extrahieren.

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

### Mit Schlüsselsequenzen

Verwenden Sie den `separator` Parameter, um Tastenfolgen anstelle von Tastenkombinationen zu erstellen.

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
