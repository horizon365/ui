---
title: Inputmenu hinzufügen
description: Autocomplete-Eingabe mit Echtzeit-Vorschlägen.
category: form
keywords:
  - combobox
  - typeahead
  - autosuggest
links:
  - label: Die Combobox
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/combobox
  - label: Autovervollständigung
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/autocomplete
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/InputMenu.vue
---

## Bearbeiten

Verwenden Sie die Direktive `v-model`, um den Wert des InputMenu zu steuern, oder die `default-value` prop, um den Anfangswert festzulegen, wenn Sie den Zustand nicht steuern müssen.

::component-code
---
prettier: true
ignore:
  - modelValue
  - items
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
---
::

::tip
Verwenden Sie dies über einem [`Input`](/docs/components/input), um die Vorteile der Komponente [`Combobox`](https://reka-ui.com/docs/components/combobox) von Reka UI zu nutzen, die Autocomplete-Funktionen bietet.
::

::note
Diese Komponente ähnelt der [`SelectMenu`](/docs/components/select-menu), verwendet jedoch eine Eingabe anstelle einer Auswahl.
::

### Items Bearbeiten

Verwenden Sie die `items`-prop als Array von Strings, Zahlen oder Booleans:

::component-code
---
prettier: true
ignore:
  - modelValue
  - items
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
---
::

Sie können auch ein Array von Objekten mit den folgenden Eigenschaften übergeben:

- `label?: string`{lang="ts-type"} (nicht vorhanden)
0555x[`type?: "label" | "separator" | "item"`{lang="ts-type"}](#with-items-type) |
- [`icon?: string`{lang="ts-type"}](xph0666x) ) xph0667x ) xph06667x xph0667x {lang="ts-type"}xx0667xxx066x06)
- [`avatar?: AvatarProps`{lang="ts-type"}](#with-avatar-in-items) )x074xx07x07x07xph07x07x07x07xx07x07x07x07x07x07x07x07x07xx07x07x07x07x07x07x07x07x07x07x07x07x07x07x007x07x007x07x007x07x007x07x007x007x007x07x0007x007x00007x07x000000000000000000000000000000000000000000000007
08.07.2018 00:28 - 07:28 00:28:28:28 00:28:28:28:28
- `disabled?: boolean`{lang="ts-type"} (englisch)
- `onSelect?: (e: Event) => void`{lang="ts-type"} (nicht vorhanden)
- `class?: any`{lang="ts-type"} (nicht vorhanden)
- `ui?: { tagsItem?: ClassNameValue, tagsItemText?: ClassNameValue, tagsItemDelete?: ClassNameValue, tagsItemDeleteIcon?: ClassNameValue, label?: ClassNameValue, separator?: ClassNameValue, item?: ClassNameValue, itemLeadingIcon?: ClassNameValue, itemLeadingAvatarSize?: ClassNameValue, itemLeadingAvatar?: ClassNameValue, itemLeadingChip?: ClassNameValue, itemLeadingChipSize?: ClassNameValue, itemLabel?: ClassNameValue, itemTrailing?: ClassNameValue, itemTrailingIcon?: ClassNameValue }`{lang="ts-type"} (nicht vorhanden)

::component-code
---
ignore:
  - modelValue.label
  - items
external:
  - items
  - modelValue
externalTypes:
  - InputMenuItem[]
props:
  modelValue:
    label: 'Todo'
  items:
    - label: 'Backlog'
    - label: 'Todo'
    - label: 'In Progress'
    - label: 'Done'
---
::

Sie können auch ein Array von Arrays an die `items`-prop übergeben, um getrennte Gruppen von Elementen anzuzeigen.

::component-code
---
prettier: true
ignore:
  - modelValue
  - items
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
---
::

### value Schlüssel

Sie können eine einzelne Eigenschaft des Objekts anstelle des gesamten Objekts binden, indem Sie die `value-key`-Prop verwenden.

::component-code
---
collapse: true
ignore:
  - modelValue
  - valueKey
  - items
external:
  - items
  - modelValue
externalTypes:
  - InputMenuItem[]
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
---
::

::tip
Verwenden Sie die `by`-prop, um Objekte durch ein Feld anstelle eines Verweises zu vergleichen, wenn die `model-value` ein Objekt ist.
::

### multiple ist ein

Verwenden Sie die `multiple`-prop, um mehrere Auswahlen zu ermöglichen, die ausgewählten Elemente werden als Tags angezeigt.

::component-code
---
prettier: true
ignore:
  - modelValue
  - items
  - multiple
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
---
::

::caution
Stellen Sie sicher, dass Sie ein Array an die `default-value`-prop-oder die `v-model`-Direktive übergeben.
::

### Delete Icon löschen

Verwenden Sie mit `multiple` die `delete-icon`-Prop, um das Löschen von [Icon](/docs/components/icon) in den Tags anzupassen.

::component-code
---
prettier: true
ignore:
  - modelValue
  - items
  - multiple
external:
  - items
  - modelValue
props:
  modelValue:
    - Backlog
    - Todo
  multiple: true
  deleteIcon: 'i-lucide-trash'
  items:
    - Backlog
    - Todo
    - In Progress
    - Done
---
::

::framework-only
#nuxt
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
Sie können dieses Symbol global in Ihrem `app.config.ts` unter der `ui.icons.close`-Taste anpassen.
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
Sie können dieses Symbol global in Ihrem `vite.config.ts` unter `ui.icons.close` Schlüssel anpassen.
:::
::

### Platzhalter

Verwenden Sie die `placeholder`-Prop, um einen Platzhaltertext festzulegen.

::component-code
---
prettier: true
ignore:
  - items
external:
  - items
props:
  placeholder: 'Select status'
  items:
    - Backlog
    - Todo
    - In Progress
    - Done
---
::

### Mode: badge{label="4.8+" class="align-text-top"} (englisch)

Setzen Sie die `mode`-prop auf `autocomplete`, um das Eingabemenü in eine Freiform-Texteingabe mit Vorschlägen zu verwandeln. Die `modelValue` wird zum Eingabetext (`string`) anstelle eines ausgewählten Elements.

::component-example
---
name: 'input-menu-mode-example'
---
::

::caution
Wenn `mode` gleich `autocomplete` ist, sind `multiple`, `by`, `resetSearchTermOnSelect` und `resetModelValueOnClear` nicht anwendbar.
::

::tip
Verwenden Sie die `content.hideWhenEmpty`-Prop, um das Menü auszublenden, wenn es keine passenden Vorschläge gibt.
::

### Content Inhalt

Verwenden Sie die `content`-Prop, um zu steuern, wie der InputMenu-Inhalt gerendert wird, z. B. `align` oder `side`.

::component-code
---
prettier: true
ignore:
  - items
  - modelValue
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
---
::

### Pfeil

Verwenden Sie die `arrow`-Prop, um einen Pfeil im Eingabemenü anzuzeigen.

::component-code
---
prettier: true
ignore:
  - items
  - modelValue
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
---
::

### Color Bearbeiten

Verwenden Sie die `color` prop, um die Ringfarbe zu ändern, wenn das Eingabemenü fokussiert ist.

::component-code
---
prettier: true
ignore:
  - items
  - modelValue
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
---
::

::note
Die `highlight`-prop wird hier verwendet, um den Fokuszustand anzuzeigen. Es wird intern verwendet, wenn ein Validierungsfehler auftritt.
::

### Variant Bearbeiten

Verwenden Sie die `variant`-prop, um die Variante des InputMenu zu ändern.

::component-code
---
prettier: true
ignore:
  - items
  - modelValue
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
---
::

### Size Bearbeiten

Verwenden Sie die `size`-prop, um die Größe des Eingabemenüs zu ändern.

::component-code
---
prettier: true
ignore:
  - items
  - modelValue
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
---
::

### Icon (englisch)

Verwenden Sie die `icon`-Prop, um ein [Icon](/docs/components/icon) innerhalb des Eingabemenüs anzuzeigen.

::component-code
---
prettier: true
ignore:
  - items
  - modelValue
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
---
::

### Trailing Icon (Deutsche Übersetzung)

Verwenden Sie die `trailing-icon`-Prop, um die folgende [Icon](/docs/components/icon) anzupassen.

::component-code
---
prettier: true
ignore:
  - items
  - modelValue
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
---
::

::framework-only
#nuxt
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
Sie können dieses Symbol global in Ihrem `app.config.ts` unter der `ui.icons.chevronDown`-Taste anpassen.
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
---
::

::framework-only
#nuxt
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
Sie können dieses Symbol global in Ihrem `app.config.ts` unter der `ui.icons.check`-Taste.
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
Sie können dieses Symbol global in Ihrem `vite.config.ts` unter `ui.icons.check` Schlüssel anpassen.
:::
::

### Clear: badge{label="4.4+" class="align-text-top"} (Deutsche Übersetzung)

Verwenden Sie die `clear`-Prop, um eine Schaltfläche zum Löschen anzuzeigen, wenn ein Wert ausgewählt ist.

::component-code
---
prettier: true
ignore:
  - items
  - modelValue
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
---
::

::framework-only
#nuxt
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
Sie können dieses Symbol global in Ihrem `app.config.ts` unter der `ui.icons.close`-Taste.
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
Sie können dieses Symbol global in Ihrem `vite.config.ts` unter dem `ui.icons.close`-Schlüssel anpassen.
:::
::

### Avatar (englisch)

Verwenden Sie die `avatar`-Prop, um ein [Avatar](/docs/components/avatar) innerhalb des Eingabemenüs anzuzeigen.

::component-code
---
prettier: true
ignore:
  - items
  - modelValue
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
---
::

### Loading (nicht verfügbar)

Verwenden Sie die `loading`-Prop, um ein Ladesymbol im InputMenu anzuzeigen.

::component-code
---
prettier: true
ignore:
  - items
  - modelValue
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

Verwenden Sie die `disabled`-Prop, um das Eingabemenü zu deaktivieren.

::component-code
---
prettier: true
ignore:
  - items
  - placeholder
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
---
::

## Beispiele

### With items type (Deutsche Übersetzung)

Sie können die `type`-Eigenschaft mit `separator` verwenden, um ein Trennzeichen zwischen Elementen anzuzeigen, oder `label`, um eine Beschriftung anzuzeigen.

::component-code
---
collapse: true
ignore:
  - modelValue
  - items
external:
  - items
  - modelValue
externalTypes:
  - InputMenuItem[]
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
---
::

::note
Wenn Sie `label`-Elemente als Gruppenüberschriften verwenden, übergeben Sie ein Array von Arrays, damit ein Label bei der Suche zusammen mit seiner Gruppe herausgefiltert wird.
::

### With Icon in items (Deutsche Übersetzung)

Sie können die `icon`-Eigenschaft verwenden, um ein [Icon](/docs/components/icon) innerhalb der Elemente anzuzeigen.

::component-example
---
collapse: true
name: 'input-menu-items-icon-example'
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
name: 'input-menu-items-avatar-example'
---
::

::tip
Sie können auch den `#leading`-slot verwenden, um den ausgewählten avatar anzuzeigen.
::

### With Chip in items (Deutsche Ausgabe)

Sie können die `chip`-Eigenschaft verwenden, um ein [Chip](/docs/components/chip) in den Elementen anzuzeigen.

::component-example
---
collapse: true
name: 'input-menu-items-chip-example'
---
::

::note
In diesem Beispiel wird der `#leading`-Slot verwendet, um den ausgewählten Chip anzuzeigen.
::

### Control im offenen Zustand

Sie können den offenen Zustand mit der `default-open`-prop-oder der `v-model:open`-Anweisung steuern.

::component-example
---
name: 'input-menu-open-example'
---
::

::note
In diesem Beispiel können Sie mit [`defineShortcuts`](/docs/composables/define-shortcuts) das Eingabemenü umschalten, indem Sie: kbd{value="O"} drücken.
::

### Control Open State bei Fokus

Sie können die `open-on-focus` oder `open-on-click` props verwenden, um das Menü zu öffnen, wenn die Eingabe fokussiert oder geklickt wird.

::component-example
---
name: 'input-menu-open-focus-example'
---
::

### Control Suchbegriffe

Verwenden Sie die `v-model:search-term`-Direktive, um den Suchbegriff zu steuern.

::component-example
---
name: 'input-menu-search-term-example'
---
::

### Mit rotierendem Icon

Hier ist ein Beispiel mit einem rotierenden Symbol, das den geöffneten Zustand des InputMenu anzeigt.

::component-example
---
name: 'input-menu-icon-example'
---
::

### With Element erstellen

Verwenden Sie die `create-item`-Prop, um Benutzern das Hinzufügen benutzerdefinierter Werte zu ermöglichen, die nicht in den vordefinierten Optionen enthalten sind.

::component-example
---
collapse: true
name: 'input-menu-create-item-example'
---
::

::note
Die create-Option wird angezeigt, wenn standardmäßig keine Übereinstimmung gefunden wird. Setzen Sie sie auf `always`, um sie auch dann anzuzeigen, wenn ähnliche Werte vorhanden sind.
::

::tip{to="#emits"}
Verwenden Sie das Ereignis `@create`, um die Erstellung des Elements zu behandeln. Sie erhalten das Ereignis und das Element als Argumente.
::

### Mit hergeholten Elementen

Sie können Elemente aus einer API abrufen und im InputMenu verwenden.

::component-example
---
collapse: true
name: 'input-menu-fetch-example'
---
::

::note
In diesem Beispiel wird `useLazyFetch` mit `immediate: false` verwendet, um Daten nur beim Öffnen des Menüs abzurufen, wodurch unnötige API-Aufrufe beim Laden der Seite vermieden werden.
::

### With Ignore Filter (Deutsche Ausgabe)

Setzen Sie die `ignore-filter` prop auf `true`, um die interne Suche zu deaktivieren und Ihre eigene Suchlogik zu verwenden.

::component-example
---
collapse: true
name: 'input-menu-ignore-filter-example'
---
::

::note
In diesem Beispiel wird [`refDebounced`](https://vueuse.org/shared/refDebounced/#refdebounced) verwendet, um die API-Aufrufe zu entkräften. Der Abruf wird mit `immediate: false` verschoben, sodass keine Anforderung gestellt wird, bis das Menü geöffnet wird.
::

### With Filterfelder

Verwenden Sie die `filter-fields`-Prop mit einem Array von Feldern, um nach. Defaults auf `[labelKey]` zu filtern.

::component-example
---
collapse: true
name: 'input-menu-filter-fields-example'
---
::

::note
In diesem Beispiel wird `useLazyFetch` mit `immediate: false` verwendet, um Daten nur beim Öffnen des Menüs abzurufen, wodurch unnötige API-Aufrufe beim Laden der Seite vermieden werden.
::

### Virtualisierung: badge{label="4.1+" class="align-text-top"}

Verwenden Sie die `virtualize`-Prop, um die Virtualisierung für große Listen als Boolean oder ein Objekt mit Optionen wie `{ estimateSize: 32, overscan: 12 }` zu aktivieren.

::warning{to="https://github.com/unovue/reka-ui/issues/1885" target="_blank"}
Wenn diese Option aktiviert ist, werden alle Gruppen aufgrund einer Einschränkung der Reka-Benutzeroberfläche in eine einzige Liste zusammengefasst.
::

::component-example
---
prettier: true
name: 'input-menu-virtualize-example'
---
::

### With infinite scroll: badge{label="4.4+" class="align-text-top"} (Für Deutschland)

Sie können das Composable [`useInfiniteScroll`](https://vueuse.org/core/useInfiniteScroll/) verwenden, um mehr Daten zu laden, während der Benutzer scrollt.

::component-example
---
prettier: true
collapse: true
highlights:
  - 41
  - 51
overflowHidden: true
name: 'input-menu-infinite-scroll-example'
---
::

::note
In diesem Beispiel wird `useLazyFetch` mit `immediate: false` verwendet, sodass Daten nur beim Scrollen des Benutzers geladen werden.
::

### Mit voller Inhaltsbreite.

Sie können den Inhalt auf die volle Breite seiner Elemente erweitern, indem Sie die `min-w-fit`-Klasse auf dem `ui.content`-Steckplatz hinzufügen.

::component-example
---
name: 'input-menu-content-width-example'
collapse: true
---
::

::tip
Sie können auch die Inhaltsbreite global in Ihrem `app.config.ts` ändern:

```
export default defineAppConfig({
  ui: {
    inputMenu: {
      slots: {
        content: 'min-w-fit'
      }
    }
  }
})
```
::

### Als Länderauswahl

Sie können das InputMenu als Länderauswahl mit Lazy Loading verwenden. Länder werden nur beim ersten Öffnen des Menüs abgerufen.

::component-example
---
collapse: true
name: 'input-menu-countries-example'
---
::

::note
In diesem Beispiel wird `useLazyFetch` mit `immediate: false` verwendet, um nur Länder zu laden, wenn das Menü zum ersten Mal geöffnet wird.
::

## API ist

### Props Bearbeiten

:component-props

::callout{icon="i-simple-icons-mdnwebdocs" to="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attributes" target="_blank"}
Diese Komponente unterstützt auch alle nativen `<input>` HTML-Attribute.
::

### Slots (englisch)

:component-slots

### Emits (englisch)

:component-emits

### Expose (englisch)

Beim Zugriff auf die Komponente über eine Template-Referenz können Sie Folgendes verwenden:

| Vorname| Typen|
| ---- | ---- |
| `inputRef`{lang="ts-type"} Übersetzung| `Ref<HTMLInputElement \| null>`{lang="ts-type"} nicht|
| `viewportRef`{lang="ts-type"} nicht| `Ref<HTMLDivElement \| null>`{lang="ts-type"} nicht|

## Theme (englisch)

:component-theme

## Changelog (englisch)

:component-changelog
