---
title: Definierte Abkürzungen
description: 'Ein Composable, um Tastaturkürzel in Ihrer App zu definieren.'
---

@@@ph000@Verwendung

Verwenden Sie das automatisch importierte `defineShortcuts` composable, um Tastenkombinationen zu definieren.

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

- Shortcuts werden automatisch für Nicht-macOS-Plattformen angepasst, indem `meta` in `ctrl` umgewandelt wird.
- Das Composable verwendet VueUses [`useEventListener`](https://vueuse.org/core/useEventListener/), um Keydown-Ereignisse zu behandeln.
- Eine vollständige Liste der verfügbaren Tastenkombinationen finden Sie in der API-Dokumentation [`KeyboardEvent.key`](https://developer.mozilla.org/en-US/docs/Web/API/UI_Events/Keyboard_event_key_values).

::tip{to="/docs/components/kbd"}
Erfahren Sie, wie Sie Verknüpfungen in Komponenten in der Komponentendokumentation **Kbd** anzeigen.
::

@@@@@@b32@b32@b32

{lang="ts-type"}

Definieren Sie Tastaturkürzel für Ihre Anwendung. Gibt eine Funktion zurück, die den Listener entfernt, falls Sie die Verknüpfungen stoppen müssen, bevor die Komponente nicht mehr eingehängt wird.

### Parameter Bearbeiten

::field-group

  ::field{name="config" type="MaybeRef<ShortcutsConfig>" required}
  Ein Objekt, bei dem Schlüssel Shortcut-Definitionen sind und Werte entweder Handler-Funktionen oder Shortcut-Konfigurationsobjekte sind. Übergeben Sie ein `ref`, um die Shortcuts reaktiv zu aktualisieren. Ein Wert von `false`,`null` oder `undefined` überspringt diese Verknüpfung, so dass Sie eine bedingt aktivieren.
  ::

  ::field{name="options" type="ShortcutsOptions"}
  Optionale Konfiguration für das Shortcutverhalten.

    ::collapsible

      ::field-group
        ::field{name="chainDelay" type="number"}
        Die Verzögerung zwischen den Tastendrücken, um die Verknüpfung als verkettet zu betrachten. Standardmäßig `800`.
        ::

        ::field{name="layoutIndependent" type="boolean"}
        Wenn aktiviert, funktionieren Tastenkombinationen konsistent über verschiedene Tastaturlayouts (Arabisch, Hebräisch) hinweg, indem sie physische Schlüsselpositionen anstelle von Zeichenwerten abgleichen.
        - `false`(Standard): Verwendet `e.key` für zeichenbasiertes Matching (Layout-spezifisch)
        - `true`: Verwendet `e.code` für den physischen Schlüsselabgleich (Layout-agnostisch)
        ::
      ::
    ::
  ::
::

### Shortcut-Definition

Shortcuts werden mit dem folgenden Format definiert:

- Singlekey:`'a'`,`'b'`,`'1'`,`'?'`, usw.
- Tastenkombinationen: Verwenden Sie `_`, um Schlüssel zu trennen, z. B.`'meta_k'`,`'ctrl_shift_f'`
- Schlüsselsequenzen: Verwenden Sie `-`, um eine Sequenz zu definieren, z. B.`'g-d'`

@@@@@ph060@@@Änderungen

- `meta`/`command`: Repräsentiert `⌘ Command` auf macOS und `Ctrl` auf anderen Plattformen
- `ctrl`: Repräsentiert `Ctrl` auf allen Plattformen
- `shift`: Wird für alphabetische Tasten verwendet, wenn Shift erforderlich ist
- `alt`/`option`: Stellt `⌥ Option` auf macOS und `Alt` auf anderen Plattformen dar. Abgestimmt durch physische Schlüsselposition, da Option das Zeichen auf macOS umschreibt.

### Spezialschlüssel

Verwenden Sie diese Namen, um spezielle Schlüssel zu finden.

- `escape`: Trigger auf Esc key
- `enter`: Trigger auf Enter Taste
- `arrowleft`,`arrowright`,`arrowup`,`arrowdown`: Trigger auf den jeweiligen Pfeiltasten
- `tab`: Trigger auf Tab-Taste
- `backspace`: Trigger auf der Backspace-Taste
- `delete`: Trigger auf Delete Taste
- `space`: Trigger auf der Leertaste. Erfordert `layoutIndependent`, sofern nicht mit `alt` kombiniert

### Shortcut-Konfiguration

Jede Verknüpfung kann als eine Funktion oder ein Objekt mit den folgenden Eigenschaften definiert werden:

@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

@@ph099@@Parameter Bearbeiten

::field-group
  ::field{name="handler" type="(e?: KeyboardEvent) => void" required}
  Funktion, die ausgeführt werden soll, wenn die Verknüpfung ausgelöst wird. Sie erhält die ursprüngliche `KeyboardEvent`.
  ::

  ::field{name="usingInput" type="boolean | string"}
  Steuert, wann die Verknüpfung basierend auf dem Eingabefokus ausgelöst werden soll:
  - `false`(Standard): Shortcut wird nur ausgelöst, wenn keine Eingabe fokussiert ist
  - `true`: Shortcut löst aus, auch wenn eine Eingabe fokussiert ist
  - `string`: Shortcut wird nur ausgelöst, wenn die angegebene Eingabe (nach Name) fokussiert ist
  ::
::

@@107@@Beispiele

### Grundbenutzung

```vue
<script setup lang="ts">
defineShortcuts({
  '?': () => openHelpModal(),
  'meta_k': () => openCommandPalette(),
  'g-d': () => navigateToDashboard()
})
</script>
```

### Mit Input-Fokus-Handling

Verwenden Sie `usingInput`, um eine Verknüpfung nur dann auszulösen, wenn eine bestimmte Eingabe fokussiert ist.

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

### Extrahieren von Verknüpfungen aus Menüpunkten

Verwenden Sie das Dienstprogramm `extractShortcuts`, um automatisch Verknüpfungen aus Menüelementen zu definieren.

::tip{to="/docs/composables/extract-shortcuts"}
Erfahren Sie mehr über das **extractShortcuts** utility.
::
