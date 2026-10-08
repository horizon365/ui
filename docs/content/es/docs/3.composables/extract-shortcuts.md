---
title: ExtracciónCortos
description: 'Una utilidad para extraer atajos de teclado de los elementos del menú.'
---

@@pH000@@Uso del producto

Utilice la utilidad `extractShortcuts` de importación automática para definir atajos de teclado desde elementos de menú. Extrae atajos de componentes como [DropdownMenu](/docs/components/dropdown-menu),[ContextMenu](/docs/components/context-menu) o [CommandPalette](/docs/components/command-palette) donde los elementos tienen `kbds` definidos.

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
Obtenga más información sobre los atajos de teclado en la documentación componible **defineShortcuts**.
::

@380000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000

@@@pH039 @

Extrae atajos de teclado de una matriz de elementos de menú y devuelve un objeto de configuración compatible con `defineShortcuts`.

#### Parámetros

::field-group

  ::field{name="items" type="any[] | any[][]" required}
  Una matriz de elementos de menú (o matrices anidadas) que contiene definiciones de accesos directos. Cada elemento puede tener las siguientes propiedades:

    ::collapsible

      ::field-group

        ::field{name="kbds" type="string[]"}
        Una matriz de teclas de teclado que forman el acceso directo (por ejemplo,`['meta', 'S']`).
        ::

        ::field{name="onSelect" type="() => void"}
        Una función de devolución de llamada para ejecutar cuando se activa el atajo.
        ::

        ::field{name="onClick" type="() => void"}
        Una función de devolución de llamada alternativa (utilizada si `onSelect` no está definida).
        ::

        ::field{name="children" type="any[]"}
        Elementos de menú anidados para extraer accesos directos recursivamente de.
        ::

        ::field{name="items" type="any[]"}
        Propiedad alternativa para elementos de menú anidados.
        ::
      ::
    ::
  ::

  ::field{name="separator" type="'_' | '-'"}
  Utilice `'_'` para combinaciones de teclas (por ejemplo,`meta_k`) o `'-'` para secuencias de teclas (por ejemplo,`g-d`).
  ::
::

**Devuelve:** Un objeto que se puede pasar directamente a `defineShortcuts`.

@@P054@Ejemplos

### Con artículos anidados

La utilidad recorre recursivamente las propiedades `children` y `items` para extraer accesos directos de estructuras de menú anidadas.

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

### Con secuencias clave

Utilice el parámetro `separator` para crear secuencias de teclas en lugar de combinaciones de teclas.

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
