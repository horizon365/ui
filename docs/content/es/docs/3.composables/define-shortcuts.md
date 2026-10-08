---
title: DefiniciónCortos
description: 'Un composable para definir atajos de teclado en tu app.'
---

@@pH000@@Uso del producto

Utilice el componente autoimportado `defineShortcuts` para definir atajos de teclado.

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

- Los atajos se ajustan automáticamente para plataformas que no son macOS, convirtiendo `meta` a `ctrl`.
- El componente utiliza el [`useEventListener`](https://vueuse.org/core/useEventListener/) de VueUse para manejar eventos de keydown.
- Para obtener una lista completa de las teclas de acceso directo disponibles, consulte la documentación de la API [`KeyboardEvent.key`](https://developer.mozilla.org/en-US/docs/Web/API/UI_Events/Keyboard_event_key_values). Las claves en la configuración son insensibles a la mayúsculas y minúsculas, por lo que `meta_k` y `meta_K` son equivalentes.

::tip{to="/docs/components/kbd"}
Aprenda a mostrar accesos directos en componentes en la documentación del componente **Kbd**.
::

@@pH032@@Apid (en inglés)

@@

Define atajos de teclado para tu aplicación. Devuelve una función que elimina el listener, en caso de que necesites detener los atajos antes de que el componente se desmonte.

### Parámetros

::field-group

  ::field{name="config" type="MaybeRef<ShortcutsConfig>" required}
  Un objeto donde las claves son definiciones de accesos directos y los valores son funciones de controlador u objetos de configuración de accesos directos. Pase un `ref` para actualizar los accesos directos de forma reactiva. Un valor de `false`,`null` o `undefined` omite ese acceso directo, que es la forma en que se habilita uno condicionalmente.
  ::

  ::field{name="options" type="ShortcutsOptions"}
  Configuración opcional para el comportamiento de los accesos directos.

    ::collapsible

      ::field-group
        ::field{name="chainDelay" type="number"}
        The delay between key presses to consider the shortcut as chained. Default to `800`.
        ::

        ::field{name="layoutIndependent" type="boolean"}
        Cuando están habilitados, los accesos directos funcionan de manera consistente en diferentes diseños de teclado (árabe, hebreo) al hacer coincidir las posiciones físicas de las teclas en lugar de los valores de caracteres.
        - `false`(por defecto): utiliza `e.key` para la coincidencia basada en caracteres (diseño específico)
        - `true`: Utiliza `e.code` para la coincidencia de claves físicas (agnóstico del diseño)
        ::
      ::
    ::
  ::
::

### Definición de atajo

Los atajos se definen utilizando el siguiente formato:

- Clave única:`'a'`,`'b'`,`'1'`,`'?'`, etc.
- Combinaciones de claves: Utilice `_` para separar las claves, por ejemplo,`'meta_k'`,`'ctrl_shift_f'`
- Secuencias clave: Utilice `-` para definir una secuencia, por ejemplo `'g-d'`

### Modificaciones

- `meta`/`command`: Representa `⌘ Command` en macOS y `Ctrl` en otras plataformas
- `ctrl`: Representa a `Ctrl` en todas las plataformas
- `shift`: Se utiliza para las teclas alfabéticas cuando se requiere Shift
- `alt`/`option`: Representa `⌥ Option` en macOS y `Alt` en otras plataformas. Coincide por la posición de clave física, ya que la opción reescribe el carácter en macOS

### Claves especiales

Utilice estos nombres para hacer coincidir las claves especiales.

- `escape`: Disparadores en la tecla Esc
- `enter`: Disparadores en la tecla Enter
- `arrowleft`,`arrowright`,`arrowup`,`arrowdown`: Activación en las teclas de flecha respectivas
- `tab`: Disparadores en la tecla Tab
- `backspace`: Disparadores en la tecla Backspace
- `delete`: Activadores en la tecla Delete
- `space`: Disparadores en la barra espaciadora. Requiere `layoutIndependent` a menos que se combine con `alt`

### Configuración de acceso directo

Cada acceso directo se puede definir como una función o un objeto con las siguientes propiedades:

@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

@@pH099@@Parámetros

::field-group
  ::field{name="handler" type="(e?: KeyboardEvent) => void" required}
  Función que se ejecutará cuando se active el atajo. Recibe el `KeyboardEvent` de origen.
  ::

  ::field{name="usingInput" type="boolean | string"}
  Controla cuándo debe activarse el acceso directo en función del enfoque de entrada:
  - `false`(por defecto): El acceso directo solo se activa cuando no se enfoca ninguna entrada
  - `true`: Se activa el acceso directo incluso cuando se enfoca cualquier entrada.
  - `string`: El acceso directo solo se activa cuando se enfoca la entrada especificada (por nombre)
  ::
::

@@P107@Ejemplos

### Uso básico

```vue
<script setup lang="ts">
defineShortcuts({
  '?': () => openHelpModal(),
  'meta_k': () => openCommandPalette(),
  'g-d': () => navigateToDashboard()
})
</script>
```

### Con manejo de enfoque de entrada

Utilice `usingInput` para activar un acceso directo sólo cuando se enfoca una entrada específica.

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

### Extracción de accesos directos de elementos de menú

Utilice la utilidad `extractShortcuts` para definir automáticamente los accesos directos de los elementos del menú.

::tip{to="/docs/composables/extract-shortcuts"}
Obtenga más información sobre la utilidad **extractShortcuts**.
::
