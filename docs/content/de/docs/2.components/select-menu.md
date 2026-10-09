---
title: AuswählenMenü
description: Ein erweitertes durchsuchbares Select-Element.
category: form
keywords:
  - combobox
  - multi select
  - filterable select
links:
  - label: Die Combobox
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/combobox
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/SelectMenu.vue
---

## Bearbeiten

Verwenden Sie die Direktive `v-model`, um den Wert des SelectMenu zu steuern, oder die prop `default-value`, um den Anfangswert festzulegen, wenn Sie den Zustand nicht steuern müssen.

::component-code
---
prettier: true
hide:
  - class
ignore:
  - modelValue
  - items
  - class
external:
  - items
  - modelValue
props:
  modelValue: 'Backlog'
  items:
    - Backlog
    - Todo
    - In Progress
    - Done
  class: 'w-48'
---
::

::tip
Verwenden Sie dies über eine [`Select`](/docs/components/select), um die Vorteile der Komponente [`Combobox`](https://reka-ui.com/docs/components/combobox) von Reka UI zu nutzen, die Suchfunktionen und Mehrfachauswahl bietet.
::

::note
Diese Komponente ähnelt der [`InputMenu`](/docs/components/input-menu), verwendet jedoch eine Auswahl anstelle einer Eingabe mit der Suche im Menü.
::

### Items Bearbeiten

Verwenden Sie die `items`-prop als Array von Strings, Zahlen oder Booleans:

::component-code
---
prettier: true
ignore:
  - modelValue
  - items
  - class
external:
  - items
  - modelValue
props:
  modelValue: 'Backlog'
  items:
    - Backlog
    - Todo
    - In Progress
    - Done
  class: 'w-48'
---
::

Sie können auch ein Array von Objekten mit den folgenden Eigenschaften übergeben:

- `label?: string`{lang="ts-type"} (nicht vorhanden)
- [`type?: "label" | "separator" | "item"`{lang="ts-type"}](#with-items-type) xph0666x xph0666xxx066xx06x06x06x06x06x06x06x06x06x06x06x06x06x06x0x06x06x06x0x06x06x06x06x0x066x0x066x0x066x0x0666x0x066x0x0x0x06060x0x0x0606060x0x0606060x0x06060x06060x0x06060x0x060606060x00606060606060x0x0606060606
- [`icon?: string`{lang="ts-type"}](#with-icons-in-items)
0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
- [`chip?: ChipProps`xph0888x](#with-chip-in-items) ) ) xph08888xx{lang="ts-type"}xxxph08xxxph08xxxph08xxph08xxxph08xx{lang="ts-type"}xxxph08xxx{lang="ts-type"}xx08xxxph08x08xxxxph08xxx08x08x088xxxxph08x08x08x08x08x08x08x08x08x08x08x08x08x08x08x08x08x08x08x08x08x08x08x08x08x08x08x08x08x08x08x08x0
- `disabled?: boolean`{lang="ts-type"} (nicht vorhanden)
- `onSelect?: (e: Event) => void`{lang="ts-type"} (nicht vorhanden)
- `class?: any`{lang="ts-type"} (nicht vorhanden)
- `ui?: { label?: ClassNameValue, separator?: ClassNameValue, item?: ClassNameValue, itemLeadingIcon?: ClassNameValue, itemLeadingAvatarSize?: ClassNameValue, itemLeadingAvatar?: ClassNameValue, itemLeadingChipSize?: ClassNameValue, itemLeadingChip?: ClassNameValue, itemLabel?: ClassNameValue, itemTrailing?: ClassNameValue, itemTrailingIcon?: ClassNameValue }`{lang="ts-type"} (nicht)

::component-code
---
ignore:
  - modelValue.label
  - items
  - class
external:
  - items
  - modelValue
externalTypes:
  - SelectMenuItem[]
props:
  modelValue:
    label: 'Todo'
  items:
    - label: 'Backlog'
    - label: 'Todo'
    - label: 'In Progress'
    - label: 'Done'
  class: 'w-48'
---
::

::caution
Im Gegensatz zur [`Select`](/docs/components/select)-Komponente erwartet das SelectMenu, dass das gesamte Objekt standardmäßig an die `v-model`-Direktive oder die `default-value`-Prop übergeben wird.
::

Sie können auch ein Array von Arrays an die `items`-Prop übergeben, um getrennte Gruppen von Elementen anzuzeigen.

::component-code
---
prettier: true
ignore:
  - modelValue
  - items
  - class
external:
  - items
  - modelValue
props:
  modelValue: 'Apple'
  items:
    - - Apple
      - Banana
      - Blueberry
      - Grapes
      - Pineapple
    - - Aubergine
      - Broccoli
      - Carrot
      - Courgette
      - Leek
  class: 'w-48'
---
::

### value Schlüssel für

Sie können eine einzelne Eigenschaft des Objekts anstelle des gesamten Objekts binden, indem Sie die `value-key`-Prop verwenden.

::component-code
---
collapse: true
ignore:
  - modelValue
  - valueKey
  - items
  - class
external:
  - items
  - modelValue
externalTypes:
  - SelectMenuItem[]
props:
  modelValue: 'todo'
  valueKey: 'id'
  items:
    - label: 'Backlog'
      id: 'backlog'
    - label: 'Todo'
      id: 'todo'
    - label: 'In Progress'
      id: 'in_progress'
    - label: 'Done'
      id: 'done'
  class: 'w-48'
---
::

::tip
Verwenden Sie die `by`-prop, um Objekte durch ein Feld anstelle eines Verweises zu vergleichen, wenn die `model-value` ein Objekt ist.
::

### Multiple (mehrfache

Verwenden Sie die `multiple` prop, um mehrere Auswahlen zu ermöglichen, die ausgewählten Elemente werden durch ein Komma im Trigger getrennt.

::component-code
---
prettier: true
ignore:
  - modelValue
  - items
  - multiple
  - class
external:
  - items
  - modelValue
props:
  modelValue:
    - Backlog
    - Todo
  multiple: true
  items:
    - Backlog
    - Todo
    - In Progress
    - Done
  class: 'w-48'
---
::

::caution
Stellen Sie sicher, dass ein Array an die `default-value`-prop-oder die `v-model`-Direktive übergeben wird.
::

### Placeholder ist ein

Verwenden Sie die `placeholder` prop, um einen Platzhaltertext festzulegen.

::component-code
---
prettier: true
ignore:
  - items
  - class
external:
  - items
props:
  placeholder: 'Select status'
  items:
    - Backlog
    - Todo
    - In Progress
    - Done
  class: 'w-48'
---
::

### Search Eingabegerät

Verwenden Sie die `search-input`-Prop, um die Sucheingabe anzupassen oder auszublenden (mit `false`-Wert).

Sie können jede Eigenschaft der Komponente [Input](/docs/components/input) übergeben, um sie anzupassen.

::component-code
---
prettier: true
ignore:
  - modelValue.label
  - modelValue.icon
  - items
  - class
external:
  - items
  - modelValue
externalTypes:
  - SelectMenuItem[]
props:
  modelValue:
    label: 'Backlog'
    icon: 'i-lucide-circle-help'
  searchInput:
    placeholder: 'Filter...'
    icon: 'i-lucide-search'
  items:
    - label: Backlog
      icon: 'i-lucide-circle-help'
    - label: Todo
      icon: 'i-lucide-circle-plus'
    - label: In Progress
      icon: 'i-lucide-circle-arrow-up'
    - label: Done
      icon: 'i-lucide-circle-check'
  class: 'w-48'
---
::

::tip
Sie können die `search-input`-prop auf `false` setzen, um die sucheingabe auszublenden.
::

::note
Verwenden Sie `:search-input="{ autofocus: false }"`, um zu verhindern, dass die Sucheingabe beim Öffnen des Menüs fokussiert wird, z. B. um zu vermeiden, dass die virtuelle Tastatur auf Touch-Geräten geöffnet wird.
::

### Inhalt

Verwenden Sie die `content`-Prop, um zu steuern, wie der SelectMenu-Inhalt gerendert wird, z. B. `align` oder `side`.

::component-code
---
prettier: true
ignore:
  - items
  - modelValue
  - class
external:
  - items
  - modelValue
items:
  content.align:
    - start
    - center
    - end
  content.side:
    - right
    - left
    - top
    - bottom
props:
  modelValue: 'Backlog'
  content:
    align: center
    side: bottom
    sideOffset: 8
  items:
    - Backlog
    - Todo
    - In Progress
    - Done
  class: 'w-48'
---
::

### Arrow Bearbeiten

Verwenden Sie die `arrow` prop, um einen Pfeil auf dem SelectMenu anzuzeigen.

::component-code
---
prettier: true
ignore:
  - items
  - modelValue
  - class
  - arrow
external:
  - items
  - modelValue
props:
  modelValue: 'Backlog'
  arrow: true
  items:
    - Backlog
    - Todo
    - In Progress
    - Done
  class: 'w-48'
---
::

### Color Bearbeiten

Verwenden Sie die `color`-prop, um die Ringfarbe zu ändern, wenn das SelectMenu fokussiert ist.

::component-code
---
prettier: true
ignore:
  - items
  - modelValue
  - class
external:
  - items
  - modelValue
props:
  modelValue: 'Backlog'
  color: neutral
  highlight: true
  items:
    - Backlog
    - Todo
    - In Progress
    - Done
  class: 'w-48'
---
::

::note
Die `highlight`-prop wird hier verwendet, um den Fokuszustand anzuzeigen. Es wird intern verwendet, wenn ein Validierungsfehler auftritt.
::

### Variant Bearbeiten

Verwenden Sie die `variant`-prop, um die Variante des SelectMenu zu ändern.

::component-code
---
prettier: true
ignore:
  - items
  - modelValue
  - class
external:
  - items
  - modelValue
props:
  modelValue: 'Backlog'
  color: neutral
  variant: subtle
  highlight: false
  items:
    - Backlog
    - Todo
    - In Progress
    - Done
  class: 'w-48'
---
::

### Size

Verwenden Sie die `size`-prop, um die Größe des SelectMenu zu ändern.

::component-code
---
prettier: true
ignore:
  - items
  - modelValue
  - class
external:
  - items
  - modelValue
props:
  modelValue: 'Backlog'
  size: xl
  items:
    - Backlog
    - Todo
    - In Progress
    - Done
  class: 'w-48'
---
::

### Icon (englisch)

Verwenden Sie die `icon`-Prop, um ein [Icon](/docs/components/icon) innerhalb des SelectMenu anzuzeigen.

::component-code
---
prettier: true
ignore:
  - items
  - modelValue
  - class
external:
  - items
  - modelValue
props:
  modelValue: 'Backlog'
  icon: 'i-lucide-search'
  size: md
  items:
    - Backlog
    - Todo
    - In Progress
    - Done
  class: 'w-48'
---
::

### Trailing-Symbol

Verwenden Sie die `trailing-icon`-Prop, um die folgende [Icon](/docs/components/icon) anzupassen.

::component-code
---
prettier: true
ignore:
  - items
  - modelValue
  - class
external:
  - items
  - modelValue
props:
  modelValue: 'Backlog'
  trailingIcon: 'i-lucide-arrow-down'
  size: md
  items:
    - Backlog
    - Todo
    - In Progress
    - Done
  class: 'w-48'
---
::

::framework-only
#nuxt
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
Sie können dieses Symbol global in Ihrem `app.config.ts` unter `ui.icons.chevronDown` Schlüssel anpassen.
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
Sie können dieses Symbol global in Ihrem `vite.config.ts` unter `ui.icons.chevronDown` Schlüssel anpassen.
:::
::

### Selected Icon auswählen

Verwenden Sie die `selected-icon`-prop, um das Symbol anzupassen, wenn ein Element ausgewählt ist. Standardmäßig `i-lucide-check`.

::component-code
---
prettier: true
ignore:
  - items
  - modelValue
  - class
external:
  - items
  - modelValue
props:
  modelValue: 'Backlog'
  selectedIcon: 'i-lucide-flame'
  size: md
  items:
    - Backlog
    - Todo
    - In Progress
    - Done
  class: 'w-48'
---
::

::framework-only
#nuxt
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
Sie können dieses Symbol global in Ihrem `app.config.ts` unter `ui.icons.check` Schlüssel anpassen.
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
Sie können dieses Symbol global in Ihrem `vite.config.ts` unter `ui.icons.check` Schlüssel anpassen.
:::
::

### Löschen: badge{label="4.4+" class="align-text-top"}

Verwenden Sie die `clear`-Prop, um eine Schaltfläche zum Löschen anzuzeigen, wenn ein Wert ausgewählt ist.

::component-code
---
prettier: true
ignore:
  - items
  - modelValue
  - class
external:
  - items
  - modelValue
items:
  clear:
    - true
    - false
props:
  modelValue: 'Backlog'
  clear: true
  items:
    - Backlog
    - Todo
    - In Progress
    - Done
  class: 'w-48'
---
::

### Clear Icon: badge{label="4.4+" class="align-text-top"} (Deutsche Ausgabe)

Verwenden Sie die `clear-icon`-Prop, um die Clear-Taste [Icon](/docs/components/icon). Defaults auf `i-lucide-x`.

::component-code
---
prettier: true
ignore:
  - items
  - modelValue
  - class
external:
  - items
  - modelValue
items:
  clear:
    - true
    - false
props:
  modelValue: 'Backlog'
  clear: true
  clearIcon: 'i-lucide-trash'
  items:
    - Backlog
    - Todo
    - In Progress
    - Done
  class: 'w-48'
---
::

::framework-only
#nuxt
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
Sie können dieses Symbol global in Ihrem `app.config.ts` unter `ui.icons.close` Schlüssel anpassen.
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
Sie können dieses Symbol global in Ihrem `vite.config.ts` unter dem `ui.icons.close`-Schlüssel anpassen.
:::
::

### Avatar (englisch)

Verwenden Sie die `avatar`-Prop, um ein [Avatar](/docs/components/avatar) innerhalb des SelectMenu anzuzeigen.

::component-code
---
prettier: true
ignore:
  - items
  - modelValue
  - class
  - avatar.loading
external:
  - items
  - modelValue
props:
  modelValue: 'Nuxt'
  avatar:
    src: 'https://github.com/nuxt.png'
    loading: lazy
  items:
    - Nuxt
    - NuxtHub
    - NuxtLabs
    - Nuxt Modules
    - Nuxt Community
  class: 'w-48'
---
::

### Loading (englisch)

Verwenden Sie die `loading` prop, um ein Ladesymbol im SelectMenu anzuzeigen.

::component-code
---
prettier: true
ignore:
  - items
  - modelValue
  - class
external:
  - items
  - modelValue
props:
  modelValue: 'Backlog'
  loading: true
  trailing: false
  items:
    - Backlog
    - Todo
    - In Progress
    - Done
  class: 'w-48'
---
::

### Loading Icon (englisch)

Verwenden Sie die `loading-icon`-Prop, um das Ladesymbol anzupassen. Standardmäßig `i-lucide-loader-circle`.

::component-code
---
prettier: true
ignore:
  - items
  - modelValue
  - class
external:
  - items
  - modelValue
props:
  modelValue: 'Backlog'
  loading: true
  loadingIcon: 'i-lucide-loader'
  items:
    - Backlog
    - Todo
    - In Progress
    - Done
  class: 'w-48'
---
::

::framework-only
#nuxt
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
Sie können dieses Symbol global in Ihrem `app.config.ts` unter `ui.icons.loading` Schlüssel anpassen.
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
Sie können dieses Symbol global in Ihrem `vite.config.ts` unter `ui.icons.loading` Schlüssel anpassen.
:::
::

### Disabled (nicht verfügbar)

Verwenden Sie die `disabled`-Prop, um das SelectMenu zu deaktivieren.

::component-code
---
prettier: true
ignore:
  - items
  - placeholder
  - class
external:
  - items
props:
  disabled: true
  placeholder: 'Select status'
  items:
    - Backlog
    - Todo
    - In Progress
    - Done
  class: 'w-48'
---
::

## Beispiele

### With items type (Deutsche Ausgabe)

Sie können die `type`-Eigenschaft mit `separator` verwenden, um ein Trennzeichen zwischen Elementen anzuzeigen, oder `label`, um eine Beschriftung anzuzeigen.

::component-code
---
collapse: true
ignore:
  - modelValue
  - items
  - class
external:
  - items
  - modelValue
externalTypes:
  - SelectMenuItem[]
props:
  modelValue: 'Apple'
  items:
    - - type: 'label'
        label: 'Fruits'
      - Apple
      - Banana
      - Blueberry
      - Grapes
      - Pineapple
    - - type: 'label'
        label: 'Vegetables'
      - Aubergine
      - Broccoli
      - Carrot
      - Courgette
      - Leek
  class: 'w-48'
---
::

::note
Wenn Sie `label`-Elemente als Gruppenüberschriften verwenden, übergeben Sie ein Array von Arrays, damit ein Label bei der Suche zusammen mit seiner Gruppe herausgefiltert wird.
::

### With icon in items (Deutsche Übersetzung)

Sie können die `icon`-Eigenschaft verwenden, um ein [Icon](/docs/components/icon) in den Elementen anzuzeigen.

::component-example
---
collapse: true
name: 'select-menu-items-icon-example'
---
::

::tip
Sie können auch den `#leading`-Steckplatz verwenden, um das ausgewählte Symbol anzuzeigen.
::

### With avatar in items (mit Avatar in Elementen)

Sie können die `avatar`-Eigenschaft verwenden, um ein [Avatar](/docs/components/avatar) in den Elementen anzuzeigen.

::component-example
---
collapse: true
name: 'select-menu-items-avatar-example'
---
::

::tip
Sie können den `#leading`-slot auch verwenden, um den ausgewählten avatar anzuzeigen.
::

### With Chip in items (Deutsche Übersetzung)

Sie können die `chip`-Eigenschaft verwenden, um ein [Chip](/docs/components/chip) in den Elementen anzuzeigen.

::component-example
---
collapse: true
name: 'select-menu-items-chip-example'
---
::

::note
In diesem Beispiel wird der `#leading`-Steckplatz verwendet, um den ausgewählten Chip anzuzeigen.
::

### Control im Open State

Sie können den offenen Zustand mithilfe der Direktive `default-open` prop oder der Direktive `v-model:open` steuern.

::component-example
---
name: 'select-menu-open-example'
---
::

::note
In diesem Beispiel können Sie mit [`defineShortcuts`](/docs/composables/define-shortcuts) das SelectMenu umschalten, indem Sie: kbd{value="O"} drücken.
::

### Control-Suchbegriff

Verwenden Sie die `v-model:search-term`-Direktive, um den Suchbegriff zu steuern.

::component-example
---
name: 'select-menu-search-term-example'
---
::

### Mit rotierendem Icon

Hier ist ein Beispiel mit einem rotierenden Symbol, das den geöffneten Zustand des SelectMenu anzeigt.

::component-example
---
name: 'select-menu-icon-example'
---
::

### With erstellen Element

Verwenden Sie die `create-item`-Prop, um Benutzern das Hinzufügen benutzerdefinierter Werte zu ermöglichen, die nicht in den vordefinierten Optionen enthalten sind.

::component-example
---
collapse: true
name: 'select-menu-create-item-example'
---
::

::note
Die create-Option wird angezeigt, wenn standardmäßig keine Übereinstimmung gefunden wird. Setzen Sie sie auf `always`, um sie auch dann anzuzeigen, wenn ähnliche Werte vorhanden sind.
::

::tip{to="#emits"}
Verwenden Sie das Ereignis `@create`, um die Erstellung des Elements zu behandeln. Sie erhalten das Ereignis und das Element als Argumente.
::

### With herowed items Eingestellt von

Sie können Elemente von einer API abrufen und im SelectMenu verwenden.

::component-example
---
collapse: true
name: 'select-menu-fetch-example'
---
::

::note
In diesem Beispiel wird `useLazyFetch` mit `immediate: false` verwendet, um Daten nur beim Öffnen des Menüs abzurufen, wodurch unnötige API-Aufrufe beim Laden der Seite vermieden werden.
::

### With Ignore-Filter (englisch)

Setzen Sie die `ignore-filter`-Prop auf `true`, um die interne Suche zu deaktivieren und Ihre eigene Suchlogik zu verwenden.

::component-example
---
collapse: true
name: 'select-menu-ignore-filter-example'
---
::

::note
In diesem Beispiel wird [`refDebounced`](https://vueuse.org/shared/refDebounced/#refdebounced) verwendet, um die API-Aufrufe zu entkräften. Der Abruf wird mit `immediate: false` verschoben, sodass keine Anfrage gestellt wird, bis das Menü geöffnet wird.
::

### With Filterfelder

Verwenden Sie die `filter-fields`-Prop mit einem Array von Feldern, um nach. Defaults zu `[labelKey]`.

::component-example
---
collapse: true
name: 'select-menu-filter-fields-example'
---
::

::note
In diesem Beispiel wird `useLazyFetch` mit `immediate: false` verwendet, um Daten nur beim Öffnen des Menüs abzurufen und unnötige API-Aufrufe beim Laden der Seite zu vermeiden.
::

### Mit Virtualisierung: badge{label="4.1+" class="align-text-top"}

Verwenden Sie die `virtualize`-Prop, um die Virtualisierung für große Listen als Boolean oder als Objekt mit Optionen wie `{ estimateSize: 32, overscan: 12 }` zu aktivieren.

::warning{to="https://github.com/unovue/reka-ui/issues/1885" target="_blank"}
Wenn diese Option aktiviert ist, werden alle Gruppen aufgrund einer Einschränkung der Reka-Benutzeroberfläche in eine einzige Liste zusammengefasst.
::

::component-example
---
prettier: true
name: 'select-menu-virtualize-example'
---
::

### Mit unendlichem Scroll: badge{label="4.4+" class="align-text-top"}

Sie können das Composable [`useInfiniteScroll`](https://vueuse.org/core/useInfiniteScroll/) verwenden, um mehr Daten zu laden, während der Benutzer scrollt.

::component-example
---
prettier: true
collapse: true
highlights:
  - 41
  - 51
overflowHidden: true
name: 'select-menu-infinite-scroll-example'
---
::

::note
In diesem Beispiel wird `useLazyFetch` mit `immediate: false` verwendet, sodass Daten nur beim Scrollen des Benutzers geladen werden.
::

### Mit voller Inhaltsbreite.

Sie können den Inhalt auf die volle Breite seiner Elemente erweitern, indem Sie die `min-w-fit`-Klasse auf dem `ui.content`-Steckplatz hinzufügen.

::component-example
---
name: 'select-menu-content-width-example'
collapse: true
---
::

::tip
Sie können die Inhaltsbreite auch global in Ihrem `app.config.ts` ändern:

```
export default defineAppConfig({
  ui: {
    selectMenu: {
      slots: {
        content: 'min-w-fit'
      }
    }
  }
})
```
::

### Als Länderauswahl

Sie können das SelectMenu als Länderauswahl mit Lazy Loading verwenden. Länder werden nur beim ersten Öffnen des Menüs abgerufen.

::component-example
---
collapse: true
name: 'select-menu-countries-example'
---
::

::note
In diesem Beispiel wird `useLazyFetch` mit `immediate: false` verwendet, um nur Länder zu laden, wenn das Menü zum ersten Mal geöffnet wird.
::

## API ist

### Props Bearbeiten

:component-props

::callout{icon="i-simple-icons-mdnwebdocs" to="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attributes" target="_blank"}
Diese Komponente unterstützt auch alle nativen `<button>`-HTML-Attribute.
::

### Slots (englisch)

:component-slots

### Emits Bearbeiten

:component-emits

### Expose (englisch)

Beim Zugriff auf die Komponente über eine Template-Referenz können Sie Folgendes verwenden:

| Vorname| Typ|
| ---- | ---- |
| `triggerRef`{lang="ts-type"}| `Ref<HTMLButtonElement \| null>`{lang="ts-type"} nicht|
| `viewportRef`{lang="ts-type"}| `Ref<HTMLDivElement \| null>`{lang="ts-type"} nicht|

## Theme Bearbeiten

:component-theme

## Changelog (englisch)

:component-changelog
