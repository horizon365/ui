---
description: Ein select-Element zur Auswahl aus einer Liste von Optionen.
category: form
keywords:
  - dropdown
  - picker
links:
  - label: Auswählen
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/select
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Select.vue
---

## Bearbeiten

Verwenden Sie die `v-model`-Direktive, um den Wert des Select oder des `default-value`-Prop zu steuern, um den Anfangswert festzulegen, wenn Sie den Zustand nicht steuern müssen.

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

- `label?: string`{lang="ts-type"} (englisch)
- [`value?: string`{lang="ts-type"}](#value-key)
05.05.2019 00:55:55 00:55:55 00:55:55:55 00:55:55:55:55
- [`icon?: string`{lang="ts-type"}](#with-icons-in-items)
- [`avatar?: AvatarProps`{lang="ts-type"}](#with-avatar-in-items)
074x[`chip?: ChipProps`{lang="ts-type"}xph0777x#with-chip-in-items) |
- `disabled?: boolean`{lang="ts-type"} (englisch)
- `class?: any`{lang="ts-type"} (englisch)
- `ui?: { label?: ClassNameValue, separator?: ClassNameValue, item?: ClassNameValue, itemLeadingIcon?: ClassNameValue, itemLeadingAvatarSize?: ClassNameValue, itemLeadingAvatar?: ClassNameValue, itemLeadingChipSize?: ClassNameValue, itemLeadingChip?: ClassNameValue, itemLabel?: ClassNameValue, itemTrailing?: ClassNameValue, itemTrailingIcon?: ClassNameValue }`{lang="ts-type"} (nicht vorhanden)

::component-code
---
ignore:
  - modelValue
  - items
  - class
external:
  - items
  - modelValue
externalTypes:
  - SelectItem[]
props:
  modelValue: 'backlog'
  items:
    - label: 'Backlog'
      value: 'backlog'
    - label: 'Todo'
      value: 'todo'
    - label: 'In Progress'
      value: 'in_progress'
    - label: 'Done'
      value: 'done'
  class: 'w-48'
---
::

::caution
Wenn Sie Objekte verwenden, müssen Sie auf die `value`-Eigenschaft des Objekts in der `v-model`-Direktive oder der `default-value`-Prop verweisen.
::

Sie können auch ein Array von Arrays an die `items`-prop übergeben, um getrennte Gruppen von Elementen anzuzeigen.

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

### Value Key (englisch)

Sie können die Eigenschaft ändern, die zum Festlegen des Werts verwendet wird, indem Sie die `value-key`-Prop verwenden.

::component-code
---
ignore:
  - modelValue
  - valueKey
  - items
  - class
external:
  - items
  - modelValue
externalTypes:
  - SelectItem[]
props:
  modelValue: 'backlog'
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

### Mehrfach

Verwenden Sie die `multiple` prop, um mehrere Auswahlen zu ermöglichen, die ausgewählten Elemente werden durch ein Komma im Auslöser getrennt.

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
Stellen Sie sicher, dass Sie ein Array an die `default-value`-prop-oder die `v-model`-Direktive übergeben.
::

### Platzhalter.

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

### Inhalt

Verwenden Sie die `content`-Prop, um zu steuern, wie der Select-Inhalt gerendert wird, z. B. `align` oder `side`.

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

::note
Diese Optionen gelten nur, wenn `content.position` `popper` (Standard) ist.
::

### Position: badge{label="4.7+" class="align-text-top"} (englisch)

Verwenden Sie die `content.position`-prop, um zu steuern, wie der Select-Inhalt relativ zum Trigger positioniert wird. Standardmäßig `popper`, wodurch der Inhalt wie andere Popovers positioniert wird. Setzen Sie ihn auf `item-aligned`, um den Inhalt an dem ausgewählten Element auszurichten (ähnlich einem nativen macOS-Menü).

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
  content.position:
    - item-aligned
    - popper
props:
  modelValue: 'Todo'
  content:
    position: item-aligned
  items:
    - Backlog
    - Todo
    - In Progress
    - Done
  class: 'w-48'
---
::

### Arrow Bearbeiten

Verwenden Sie die `arrow`-Prop, um einen Pfeil auf dem Select-Display anzuzeigen.

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

Verwenden Sie die `color`-prop, um die Ringfarbe zu ändern, wenn die Auswahl fokussiert ist.

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

Verwenden Sie die `variant`-prop, um die Variante des Select zu ändern.

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

x348xSize

Verwenden Sie die `size`-Prop, um die Größe des Select zu ändern.

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

### Icon Bearbeiten

Verwenden Sie die `icon`-Prop, um ein [Icon](/docs/components/icon) innerhalb des Select anzuzeigen.

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

### Trailing Icon (Deutsche Übersetzung)

Verwenden Sie die `trailing-icon`-Prop, um die nachlaufende [Icon](/docs/components/icon) anzupassen.

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
Sie können dieses Symbol global in Ihrem `app.config.ts` unter der `ui.icons.chevronDown`-Taste.
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
Sie können dieses Symbol global in Ihrem `vite.config.ts` unter der `ui.icons.chevronDown`-Taste.
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
Sie können dieses Symbol global in Ihrem `app.config.ts` unter dem `ui.icons.check`-Schlüssel anpassen.
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
Sie können dieses Symbol global in Ihrem `vite.config.ts` unter `ui.icons.check` Schlüssel anpassen.
:::
::

### Avatar (englisch)

Verwenden Sie die `avatar`-Prop, um ein [Avatar](/docs/components/avatar) innerhalb des Select anzuzeigen.

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

Verwenden Sie die `loading`-Prop, um ein Ladesymbol auf der Select anzuzeigen.

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
Sie können dieses Symbol global in Ihrem `app.config.ts` unter dem `ui.icons.loading`-Schlüssel anpassen.
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
Sie können dieses Symbol global in Ihrem `vite.config.ts` unter dem `ui.icons.loading`-Schlüssel anpassen.
:::
::

### Disabled (nicht verfügbar)

Verwenden Sie die `disabled`-Prop, um die Auswahl zu deaktivieren.

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
  - SelectItem[]
props:
  modelValue: 'Apple'
  items:
    - type: 'label'
      label: 'Fruits'
    - Apple
    - Banana
    - Blueberry
    - Grapes
    - Pineapple
    - type: 'separator'
    - type: 'label'
      label: 'Vegetables'
    - Aubergine
    - Broccoli
    - Carrot
    - Courgette
    - Leek
  class: 'w-48'
---
::

### With Icon in items (Deutsche Ausgabe)

Sie können die `icon`-Eigenschaft verwenden, um ein [Icon](/docs/components/icon) in den Elementen anzuzeigen.

::component-example
---
collapse: true
name: 'select-items-icon-example'
---
::

::note
In diesem Beispiel wird das Symbol aus der `value`-Eigenschaft des ausgewählten Elements berechnet.
::

::tip
Sie können auch den `#leading`-Steckplatz verwenden, um das ausgewählte Symbol anzuzeigen.
::

### With avatar in items (Mit Avatar in Elementen)

Sie können die `avatar`-Eigenschaft verwenden, um ein [Avatar](/docs/components/avatar) in den Elementen anzuzeigen.

::component-example
---
collapse: true
name: 'select-items-avatar-example'
---
::

::note
In diesem Beispiel wird der Avatar aus der Eigenschaft `value` des ausgewählten Elements berechnet.
::

::tip
Sie können auch den `#leading`-slot verwenden, um den ausgewählten avatar anzuzeigen.
::

### With Chip in items (Deutsche Übersetzung)

Sie können die `chip`-Eigenschaft verwenden, um ein [Chip](/docs/components/chip) in den Elementen anzuzeigen.

::component-example
---
collapse: true
name: 'select-items-chip-example'
---
::

::note
In diesem Beispiel wird der `#leading`-Steckplatz verwendet, um den ausgewählten Chip anzuzeigen.
::

### Control im offenen Zustand

Sie können den offenen Zustand mit der `default-open`-prop-oder der `v-model:open`-Anweisung steuern.

::component-example
---
name: 'select-open-example'
---
::

::note
In diesem Beispiel können Sie unter Nutzung von [`defineShortcuts`](/docs/composables/define-shortcuts) die Auswahl durch Drücken von: kbd{value="O"} umschalten.
::

### Mit rotierendem Icon

Hier ist ein Beispiel mit einem rotierenden Symbol, das den geöffneten Zustand des Select anzeigt.

::component-example
---
name: 'select-icon-example'
---
::

### Mit hergeholten Elementen

Sie können Elemente aus einer API abrufen und in der Auswahl verwenden.

::component-example
---
name: 'select-fetch-example'
collapse: true
---
::

::note
In diesem Beispiel wird `useLazyFetch` mit `immediate: false` verwendet, um Daten nur beim Öffnen des Menüs abzurufen und unnötige API-Aufrufe beim Laden der Seite zu vermeiden.
::

### With infinite scroll: badge{label="4.4+" class="align-text-top"} (Für Deutschland)

Sie können die [`useInfiniteScroll`](https://vueuse.org/core/useInfiniteScroll/) Composable verwenden, um mehr Daten zu laden, während der Benutzer scrollt.

::component-example
---
prettier: true
collapse: true
highlights:
  - 41
  - 51
overflowHidden: true
name: 'select-infinite-scroll-example'
---
::

::note
In diesem Beispiel wird `useLazyFetch` mit `immediate: false` verwendet, sodass Daten nur beim Scrollen des Benutzers geladen werden.
::

### Mit voller Inhaltsbreite.

Sie können den Inhalt auf die volle Breite seiner Elemente erweitern, indem Sie die `min-w-fit`-Klasse auf dem `ui.content`-Steckplatz hinzufügen.

::component-example
---
name: 'select-content-width-example'
collapse: true
---
::

::tip
Sie können die Inhaltsbreite auch global in Ihrem `app.config.ts` ändern:

```
export default defineAppConfig({
  ui: {
    select: {
      slots: {
        content: 'min-w-fit'
      }
    }
  }
})
```
::

## API ist

### Props Bearbeiten

:component-props

::callout{icon="i-simple-icons-mdnwebdocs" to="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attributes" target="_blank"}
Diese Komponente unterstützt auch alle nativen `<button>`-HTML-Attribute.
::

### Slots (englisch)

:component-slots

### Emits (englisch)

:component-emits

### Expose (englisch)

Beim Zugriff auf die Komponente über eine Template-Referenz können Sie Folgendes verwenden:

| Vorname| Typen|
| ---- | ---- |
| `triggerRef`{lang="ts-type"} nicht| `Ref<HTMLButtonElement \| null>`{lang="ts-type"} nicht|
| `viewportRef`{lang="ts-type"} nicht| `Ref<HTMLDivElement \| null>`{lang="ts-type"} nicht|

## Theme (englisch)

:component-theme

## Changelog (englisch)

:component-changelog
