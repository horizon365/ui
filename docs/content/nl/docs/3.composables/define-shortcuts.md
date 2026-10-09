---
title: definieerSnelkoppelingen
description: 'Een compositie om sneltoetsen in uw app te definiëren.'
---

## Gebruik

Gebruik de automatisch geïmporteerde `defineShortcuts` composable om sneltoetsen te definiëren.

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

- Snelkoppelingen worden automatisch aangepast voor niet-macOS-platforms en converteren `meta` naar `ctrl`.
- De composable gebruikt de [`useEventListener`](https://vueuse.org/core/useEventListener/) van VueUse om keydown-gebeurtenissen af te handelen.
- Raadpleeg de [`KeyboardEvent.key`](https://developer.mozilla.org/en-US/docs/Web/API/UI_Events/Keyboard_event_key_values) API-documentatie voor een volledige lijst met beschikbare sneltoetsen. Toetsen in de configuratie zijn niet hoofdlettergevoelig, dus `meta_k` en `meta_K` zijn equivalent.

::tip{to="/docs/components/kbd"}
Leer hoe u snelkoppelingen in componenten weergeeft in de **Kbd**-componentdocumentatie.
::

## API

`defineShortcuts(config: MaybeRef<ShortcutsConfig>, options?: ShortcutsOptions): () => void`{lang="ts-type"}

Definieer sneltoetsen voor uw toepassing. Retourneert een functie die de luisteraar verwijdert, voor het geval u de sneltoetsen moet stoppen voordat de component wordt ontkoppeld.

### Parameters

::field-group

  ::field{name="config" type="MaybeRef<ShortcutsConfig>" required}
Een object waar toetsen snelkoppelingsdefinities zijn en waarden handlerfuncties of snelkoppelingsconfiguratieobjecten zijn. Geef een `ref` door om de snelkoppelingen reactief bij te werken.
Een waarde van `false`, `null` of `undefined` slaat die snelkoppeling over, en zo schakel je er een voorwaardelijk in.
  ::

  ::field{name="options" type="ShortcutsOptions"}
Optionele configuratie voor het gedrag van de snelkoppelingen.

    ::collapsible

      ::field-group
        ::field{name="chainDelay" type="number"}
De vertraging tussen toetsaanslagen om de snelkoppeling als geketend te beschouwen. Standaard ingesteld op `800`.
        ::

        ::field{name="layoutIndependent" type="boolean"}
Indien ingeschakeld, werken snelkoppelingen consistent in verschillende toetsenbordindelingen (Arabisch, Hebreeuws) door fysieke sleutelposities te matchen in plaats van karakterwaarden.
- `false` (standaard): Gebruikt `e.key` voor op tekens gebaseerde matching (lay-out specifiek)
- `true`: Gebruikt `e.code` voor fysieke sleutel matching (Layout agnostic)
        ::
      ::
    ::
  ::
::

### Definitie snelkoppeling

Snelkoppelingen worden gedefinieerd in de volgende indeling:

- Enige sleutel: `'a'`, `'b'`, `'1'`, `'?'`, enz.
- Toetscombinaties: Gebruik `_` om toetsen te scheiden, bijv. `'meta_k'`, `'ctrl_shift_f'`
- Key sequences: Gebruik `-` om een sequentie te definiëren, bijv. `'g-d'`

### Modificatoren

- `meta` / `command`: Vertegenwoordigt `⌘ Command` op macOS en `Ctrl` op andere platforms
- `ctrl`: Vertegenwoordigt `Ctrl` op alle platformen
- `shift`: Gebruikt voor alfabetische toetsen wanneer Shift vereist is
- `alt` / `option`: Vertegenwoordigt `⌥ Option` op macOS en `Alt` op andere platforms. Komt overeen met de fysieke sleutelpositie, aangezien Option het personage op macOS herschrijft

### Speciale toetsen

Gebruik deze namen om speciale sleutels te matchen.

- `escape`: Triggers op Esc-toets
- `enter`: Triggers op Enter-toets
- `arrowleft`, `arrowright`, `arrowup`, `arrowdown`: Trigger op respectievelijke pijltjestoetsen
- `tab`: Triggers op Tab-toets
- `backspace`: Triggers op Backspace-toets
- `delete`: Triggers op Delete-toets
- `space`: triggers op de spatiebalk. Vereist `layoutIndependent` tenzij gecombineerd met `alt`

### Snelkoppeling configuratie

Elke snelkoppeling kan worden gedefinieerd als een functie of een object met de volgende eigenschappen:

`interface ShortcutConfig { handler: (e?: KeyboardEvent) => void; usingInput?: boolean | string }`{lang="ts-type"}

#### Parameters

::field-group
  ::field{name="handler" type="(e?: KeyboardEvent) => void" required}
Functie die moet worden uitgevoerd wanneer de snelkoppeling wordt geactiveerd. Het ontvangt de oorspronkelijke `KeyboardEvent`.
  ::

  ::field{name="usingInput" type="boolean | string"}
Bepaalt wanneer de snelkoppeling moet worden geactiveerd op basis van invoerfocus:
- `false` (standaard): Snelkoppeling wordt alleen geactiveerd wanneer er geen invoer is gericht
- `true`: Snelkoppeling wordt geactiveerd, zelfs wanneer een invoer is gericht
- `string`: Snelkoppeling wordt alleen geactiveerd wanneer de opgegeven invoer (op naam) is gericht
  ::
::

## Voorbeelden

### Basisgebruik

```vue
<script setup lang="ts">
defineShortcuts({
  '?': () => openHelpModal(),
  'meta_k': () => openCommandPalette(),
  'g-d': () => navigateToDashboard()
})
</script>
```

### Met invoer focus handling

Gebruik `usingInput` om een snelkoppeling alleen te activeren wanneer een specifieke invoer is gericht.

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

### Snelkoppelingen uit menu-items extraheren

Gebruik het hulpprogramma `extractShortcuts` om automatisch snelkoppelingen uit menu-items te definiëren.

::tip{to="/docs/composables/extract-shortcuts"}
Meer informatie over het **extractShortcuts** hulpprogramma.
::
