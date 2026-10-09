---
title: Kommandobrücke
description: Eine Befehlspalette mit Volltextsuche, die von Fuse.js für effizientes Fuzzy-Matching unterstützt wird.
category: navigation
keywords:
  - command menu
  - cmdk
  - spotlight
  - global search
links:
  - label: Fuse.js
    icon: i-custom-fuse-js
    to: https://fusejs.io/
    target: _blank
  - label: Listbox
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/listbox
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/CommandPalette.vue
---

## Bearbeiten

Verwenden Sie die `v-model`-Direktive, um den Wert der CommandPalette zu steuern, oder die `default-value`-Prop, um den Anfangswert festzulegen, wenn Sie den Zustand nicht steuern müssen.

::component-code
---
collapse: true
hide:
  - autofocus
ignore:
  - groups
  - modelValue
  - class
external:
  - groups
  - modelValue
externalTypes:
  - CommandPaletteGroup[]
class: '!p-0'
props:
  modelValue: {}
  autofocus: false
  groups:
    - id: 'users'
      label: 'Users'
      items:
        - label: 'Benjamin Canac'
          suffix: 'benjamincanac'
          avatar:
            src: 'https://github.com/benjamincanac.png'
            loading: lazy
        - label: 'Hugo Richard'
          suffix: 'HugoRCD'
          avatar:
            src: 'https://github.com/HugoRCD.png'
            loading: lazy
        - label: 'Sébastien Chopin'
          suffix: 'atinux'
          avatar:
            src: 'https://github.com/atinux.png'
            loading: lazy
        - label: 'Romain Hamel'
          suffix: 'romhml'
          avatar:
            src: 'https://github.com/romhml.png'
            loading: lazy
        - label: 'Sandro Circi'
          suffix: 'sandros94'
          avatar:
            src: 'https://github.com/sandros94.png'
            loading: lazy
        - label: 'Jakub Michálek'
          suffix: 'J-Michalek'
          avatar:
            src: 'https://github.com/J-Michalek.png'
            loading: lazy
        - label: 'Alex'
          suffix: 'hywax'
          avatar:
            src: 'https://github.com/hywax.png'
            loading: lazy
        - label: 'Maxime Pauvert'
          suffix: 'maximepvrt'
          avatar:
            src: 'https://github.com/maximepvrt.png'
            loading: lazy
  class: 'flex-1 h-80'
---
::

::tip{to="#control-selected-items"}
Sie können auch das `@update:model-value`-Ereignis verwenden, um die ausgewählten Elemente anzuhören.
::

### Groups (englisch)

Die CommandPalette-Komponente filtert Gruppen und ordnet übereinstimmende Befehle nach Relevanz, wenn Benutzer sie eingeben. Sie bietet dynamische, sofortige Suchergebnisse für eine effiziente Befehlsermittlung. Verwenden Sie die `groups`-Prop als Array von Objekten mit den folgenden Eigenschaften:

- `id: string`{lang="ts-type"} (nicht vorhanden)
- `label?: string`{lang="ts-type"} (nicht vorhanden)
- `slot?: string`{lang="ts-type"}x077xx07x07x07x07x07x07x07x07x07x07x07x07x07x07x07x07x07x07x07x07x07x07x07x07x07x07x07x07x07x07x07x07x007x07x07x007x07x007x07x007x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
- `items?: CommandPaletteItem[]`{lang="ts-type"} (nicht vorhanden)
- [`ignoreFilter?: boolean`{lang="ts-type"}](#with-ignore-filter)
- [`postFilter?: (searchTerm: string, items: T[]) => T[]`{lang="ts-type"}](#with-post-filtered-items)
- `highlightedIcon?: string`{lang="ts-type"} (nicht vorhanden)

::caution
Sie müssen für jede Gruppe ein `id` angeben, da die Gruppe sonst ignoriert wird.
::

Jede Gruppe enthält ein `items`-Array von Objekten, die die Befehle definieren. Jedes Element kann die folgenden Eigenschaften haben:

- `prefix?: string`{lang="ts-type"} (nicht)
- `label?: string`{lang="ts-type"} | mehr
- `suffix?: string`{lang="ts-type"} (nicht)
- `icon?: string`{lang="ts-type"}
- `avatar?: AvatarProps`{lang="ts-type"} (nicht)
- `chip?: ChipProps`{lang="ts-type"} (nicht)
- `kbds?: string[] | KbdProps[]`{lang="ts-type"} (nicht)
- `active?: boolean`{lang="ts-type"} (nicht)
- `loading?: boolean`{lang="ts-type"} (nicht)
- `disabled?: boolean`{lang="ts-type"} (nicht)
- [`slot?: string`{lang="ts-type"}](](#with-custom-slot)
- `placeholder?: string`{lang="ts-type"} (nicht)
- `children?: CommandPaletteItem[]`{lang="ts-type"} (englisch)
- `onSelect?: (e: Event) => void`{lang="ts-type"} | mehr
- `class?: any`{lang="ts-type"} (nicht)
- `ui?: { item?: ClassNameValue, itemLeadingIcon?: ClassNameValue, itemLeadingAvatarSize?: ClassNameValue, itemLeadingAvatar?: ClassNameValue, itemLeadingChipSize?: ClassNameValue, itemLeadingChip?: ClassNameValue, itemLabel?: ClassNameValue, itemLabelPrefix?: ClassNameValue, itemLabelBase?: ClassNameValue, itemLabelSuffix?: ClassNameValue, itemTrailing?: ClassNameValue, itemTrailingKbds?: ClassNameValue, itemTrailingKbdsSize?: ClassNameValue, itemTrailingHighlightedIcon?: ClassNameValue, itemTrailingIcon?: ClassNameValue }`{lang="ts-type"} (englisch)

Sie können jede Eigenschaft der Komponente [Link](/docs/components/link#props) übergeben, z. B. `to`, `target` usw.

::component-code
---
collapse: true
hide:
  - autofocus
ignore:
  - groups
  - modelValue
  - class
external:
  - groups
  - modelValue
externalTypes:
  - CommandPaletteGroup[]
class: '!p-0'
props:
  modelValue: {}
  autofocus: false
  groups:
    - id: 'users'
      label: 'Users'
      items:
        - label: 'Benjamin Canac'
          suffix: 'benjamincanac'
          avatar:
            src: 'https://github.com/benjamincanac.png'
            loading: lazy
        - label: 'Hugo Richard'
          suffix: 'HugoRCD'
          avatar:
            src: 'https://github.com/HugoRCD.png'
            loading: lazy
        - label: 'Sébastien Chopin'
          suffix: 'atinux'
          avatar:
            src: 'https://github.com/atinux.png'
            loading: lazy
        - label: 'Romain Hamel'
          suffix: 'romhml'
          avatar:
            src: 'https://github.com/romhml.png'
            loading: lazy
        - label: 'Sandro Circi'
          suffix: 'sandros94'
          avatar:
            src: 'https://github.com/sandros94.png'
            loading: lazy
        - label: 'Jakub Michálek'
          suffix: 'J-Michalek'
          avatar:
            src: 'https://github.com/J-Michalek.png'
            loading: lazy
        - label: 'Alex'
          suffix: 'hywax'
          avatar:
            src: 'https://github.com/hywax.png'
            loading: lazy
        - label: 'Maxime Pauvert'
          suffix: 'maximepvrt'
          avatar:
            src: 'https://github.com/maximepvrt.png'
            loading: lazy
  class: 'flex-1'
---
::

::tip{to="#with-children-in-items"}
Jedes Element kann ein `children`-Array von Objekten mit den folgenden Eigenschaften zum Erstellen von Untermenüs verwenden:
::

### multiple (Mehrfach)

Verwenden Sie die `multiple`-Prop, um mehrere Auswahlen zu ermöglichen.

::component-code
---
collapse: true
hide:
  - autofocus
ignore:
  - groups
  - modelValue
  - multiple
  - class
external:
  - groups
  - modelValue
externalTypes:
  - CommandPaletteGroup[]
class: '!p-0'
props:
  multiple: true
  autofocus: false
  modelValue: []
  groups:
    - id: 'users'
      label: 'Users'
      items:
        - label: 'Benjamin Canac'
          suffix: 'benjamincanac'
          avatar:
            src: 'https://github.com/benjamincanac.png'
            loading: lazy
        - label: 'Hugo Richard'
          suffix: 'HugoRCD'
          avatar:
            src: 'https://github.com/HugoRCD.png'
            loading: lazy
        - label: 'Sébastien Chopin'
          suffix: 'atinux'
          avatar:
            src: 'https://github.com/atinux.png'
            loading: lazy
        - label: 'Romain Hamel'
          suffix: 'romhml'
          avatar:
            src: 'https://github.com/romhml.png'
            loading: lazy
        - label: 'Sandro Circi'
          suffix: 'sandros94'
          avatar:
            src: 'https://github.com/sandros94.png'
            loading: lazy
        - label: 'Jakub Michálek'
          suffix: 'J-Michalek'
          avatar:
            src: 'https://github.com/J-Michalek.png'
            loading: lazy
        - label: 'Alex'
          suffix: 'hywax'
          avatar:
            src: 'https://github.com/hywax.png'
            loading: lazy
        - label: 'Maxime Pauvert'
          suffix: 'maximepvrt'
          avatar:
            src: 'https://github.com/maximepvrt.png'
            loading: lazy
  class: 'flex-1'
---
::

::caution
Stellen Sie sicher, dass Sie ein Array an die `default-value`-prop-oder die `v-model`-Direktive übergeben.
::

### Platzhalter

Verwenden Sie die `placeholder`-Prop, um den Platzhaltertext zu ändern.

::component-code
---
collapse: true
hide:
  - autofocus
ignore:
  - class
  - groups
external:
  - groups
externalTypes:
  - CommandPaletteGroup[]
class: '!p-0'
props:
  autofocus: false
  placeholder: 'Search an app...'
  groups:
    - id: 'apps'
      items:
        - label: 'Calendar'
          icon: 'i-lucide-calendar'
        - label: 'Music'
          icon: 'i-lucide-music'
        - label: 'Maps'
          icon: 'i-lucide-map'
  class: 'flex-1'
---
::

Größe: badge{label="4.4+" class="align-text-top"}

Verwenden Sie die `size`-prop, um die Größe der CommandPalette zu ändern.

::component-code
---
collapse: true
hide:
  - autofocus
ignore:
  - class
  - groups
external:
  - groups
externalTypes:
  - CommandPaletteGroup[]
class: '!p-0'
props:
  autofocus: false
  size: 'xl'
  groups:
    - id: 'apps'
      items:
        - label: 'Calendar'
          icon: 'i-lucide-calendar'
        - label: 'Music'
          icon: 'i-lucide-music'
        - label: 'Maps'
          icon: 'i-lucide-map'
  class: 'flex-1'
---
::

### Icon (englisch)

Verwenden Sie die `icon`-Prop, um die Eingabe [Icon](/docs/components/icon) anzupassen.

::component-code
---
collapse: true
hide:
  - autofocus
ignore:
  - class
  - groups
external:
  - groups
externalTypes:
  - CommandPaletteGroup[]
class: '!p-0'
props:
  autofocus: false
  icon: 'i-lucide-box'
  groups:
    - id: 'apps'
      items:
        - label: 'Calendar'
          icon: 'i-lucide-calendar'
        - label: 'Music'
          icon: 'i-lucide-music'
        - label: 'Maps'
          icon: 'i-lucide-map'
  class: 'flex-1'
---
::

::framework-only
#nuxt
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
Sie können dieses Symbol global in Ihrem `app.config.ts` unter der `ui.icons.search`-Taste.
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
Sie können dieses Symbol global in Ihrem `vite.config.ts` unter dem `ui.icons.search`-Schlüssel anpassen.
:::
::

### Selected Icon auswählen

Verwenden Sie die `selected-icon`-Prop, um das ausgewählte Element anzupassen [Icon](/docs/components/icon). Standardmäßig `i-lucide-check`.

::component-code
---
collapse: true
hide:
  - autofocus
ignore:
  - groups
  - modelValue
  - multiple
  - class
external:
  - groups
  - modelValue
externalTypes:
  - CommandPaletteGroup[]
class: '!p-0'
props:
  multiple: true
  autofocus: false
  modelValue:
    - label: 'Benjamin Canac'
      suffix: 'benjamincanac'
      avatar:
        src: 'https://github.com/benjamincanac.png'
        loading: lazy
  selectedIcon: 'i-lucide-circle-check'
  groups:
    - id: 'users'
      label: 'Users'
      items:
        - label: 'Benjamin Canac'
          suffix: 'benjamincanac'
          avatar:
            src: 'https://github.com/benjamincanac.png'
            loading: lazy
        - label: 'Hugo Richard'
          suffix: 'HugoRCD'
          avatar:
            src: 'https://github.com/HugoRCD.png'
            loading: lazy
        - label: 'Sébastien Chopin'
          suffix: 'atinux'
          avatar:
            src: 'https://github.com/atinux.png'
            loading: lazy
        - label: 'Romain Hamel'
          suffix: 'romhml'
          avatar:
            src: 'https://github.com/romhml.png'
            loading: lazy
        - label: 'Sandro Circi'
          suffix: 'sandros94'
          avatar:
            src: 'https://github.com/sandros94.png'
            loading: lazy
        - label: 'Jakub Michálek'
          suffix: 'J-Michalek'
          avatar:
            src: 'https://github.com/J-Michalek.png'
            loading: lazy
        - label: 'Alex'
          suffix: 'hywax'
          avatar:
            src: 'https://github.com/hywax.png'
            loading: lazy
        - label: 'Maxime Pauvert'
          suffix: 'maximepvrt'
          avatar:
            src: 'https://github.com/maximepvrt.png'
            loading: lazy
  class: 'flex-1'
---
::

::framework-only
#nuxt
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
Sie können dieses Symbol global in Ihrem `app.config.ts` unter der `ui.icons.check`-Taste.
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
Sie können dieses Symbol global in Ihrem `vite.config.ts` unter der `ui.icons.check`-Taste.
:::
::

### Trailing Icon (Deutsche Übersetzung)

Verwenden Sie die `trailing-icon`-Prop, um die nachlaufende [Icon](/docs/components/icon) anzupassen, wenn ein Element untergeordnete Elemente hat.

::component-code
---
collapse: true
prettier: true
hide:
  - autofocus
ignore:
  - groups
  - class
external:
  - groups
externalTypes:
  - CommandPaletteGroup[]
class: '!p-0'
props:
  autofocus: false
  trailingIcon: 'i-lucide-arrow-right'
  groups:
    - id: 'actions'
      items:
        - label: 'Share'
          icon: 'i-lucide-share'
          children:
            - label: 'Email'
              icon: 'i-lucide-mail'
            - label: 'Copy'
              icon: 'i-lucide-copy'
            - label: 'Link'
              icon: 'i-lucide-link'
  class: 'flex-1'
---
::

::framework-only
#nuxt
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
Sie können dieses Symbol global in Ihrem `app.config.ts` unter dem `ui.icons.chevronRight`-Schlüssel anpassen.
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
Sie können dieses Symbol global in Ihrem `vite.config.ts` unter dem `ui.icons.chevronRight`-Schlüssel anpassen.
:::
::

### Loading (nicht verfügbar)

Verwenden Sie die `loading` prop, um ein Ladesymbol auf der CommandPalette anzuzeigen.

::component-code
---
collapse: true
hide:
  - autofocus
ignore:
  - class
  - groups
external:
  - groups
externalTypes:
  - CommandPaletteGroup[]
class: '!p-0'
props:
  autofocus: false
  loading: true
  groups:
    - id: 'apps'
      items:
        - label: 'Calendar'
          icon: 'i-lucide-calendar'
        - label: 'Music'
          icon: 'i-lucide-music'
        - label: 'Maps'
          icon: 'i-lucide-map'
  class: 'flex-1'
---
::

### Loading Icon (englisch)

Verwenden Sie die `loading-icon`-Prop, um das Ladesymbol anzupassen. Standardmäßig ist `i-lucide-loader-circle`.

::component-code
---
collapse: true
hide:
  - autofocus
ignore:
  - class
  - groups
external:
  - groups
externalTypes:
  - CommandPaletteGroup[]
class: '!p-0'
props:
  autofocus: false
  loading: true
  loadingIcon: 'i-lucide-loader'
  groups:
    - id: 'apps'
      items:
        - label: 'Calendar'
          icon: 'i-lucide-calendar'
        - label: 'Music'
          icon: 'i-lucide-music'
        - label: 'Maps'
          icon: 'i-lucide-map'
  class: 'flex-1'
---
::

::framework-only
#nuxt
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
Sie können dieses Symbol global in Ihrem `app.config.ts` unter dem `ui.icons.loading`-Schlüssel anpassen.
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
Sie können dieses Symbol global in Ihrem `vite.config.ts` unter der `ui.icons.loading`-Taste.
:::
::

### Close Bearbeiten

Verwenden Sie die `close`-Prop, um eine [Button](/docs/components/button) anzuzeigen, um die CommandPalette zu beenden.

::tip
Ein `update:open`-Ereignis wird ausgegeben, wenn die Schaltfläche Schließen geklickt wird.
::

::component-code
---
collapse: true
hide:
  - autofocus
ignore:
  - class
  - groups
  - close
external:
  - groups
externalTypes:
  - CommandPaletteGroup[]
class: '!p-0'
props:
  autofocus: false
  close: true
  groups:
    - id: 'apps'
      items:
        - label: 'Calendar'
          icon: 'i-lucide-calendar'
        - label: 'Music'
          icon: 'i-lucide-music'
        - label: 'Maps'
          icon: 'i-lucide-map'
  class: 'flex-1'
---
::

Sie können jede Eigenschaft der Komponente [Button](/docs/components/button) übergeben, um sie anzupassen.

::component-code
---
collapse: true
prettier: true
hide:
  - autofocus
ignore:
  - close.color
  - close.variant
  - groups
  - class
external:
  - groups
externalTypes:
  - CommandPaletteGroup[]
class: '!p-0'
props:
  autofocus: false
  close:
    color: primary
    variant: outline
    class: 'rounded-full'
  groups:
    - id: 'apps'
      items:
        - label: 'Calendar'
          icon: 'i-lucide-calendar'
        - label: 'Music'
          icon: 'i-lucide-music'
        - label: 'Maps'
          icon: 'i-lucide-map'
  class: 'flex-1'
---
::

### Close Icon (nicht vorhanden)

Verwenden Sie die `close-icon`-Prop, um die Schließen-Taste [Icon](/docs/components/icon). Defaults auf `i-lucide-x`.

::component-code
---
collapse: true
hide:
  - autofocus
ignore:
  - class
  - groups
  - close
external:
  - groups
externalTypes:
  - CommandPaletteGroup[]
class: '!p-0'
props:
  autofocus: false
  close: true
  closeIcon: 'i-lucide-arrow-right'
  groups:
    - id: 'apps'
      items:
        - label: 'Calendar'
          icon: 'i-lucide-calendar'
        - label: 'Music'
          icon: 'i-lucide-music'
        - label: 'Maps'
          icon: 'i-lucide-map'
  class: 'flex-1'
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

### Back (englisch)

Verwenden Sie die `back`-Prop, um die Zurück-Schaltfläche (mit dem `false`-Wert) anzupassen oder auszublenden, die beim Navigieren in ein Untermenü angezeigt wird.

Sie können jede Eigenschaft der Komponente [Button](/docs/components/button) übergeben, um sie anzupassen.

::component-code
---
collapse: true
prettier: true
hide:
  - autofocus
ignore:
  - back.color
  - groups
  - class
external:
  - groups
externalTypes:
  - CommandPaletteGroup[]
class: '!p-0'
props:
  autofocus: false
  back:
    color: primary
  groups:
    - id: 'actions'
      items:
        - label: 'Share'
          icon: 'i-lucide-share'
          children:
            - label: 'Email'
              icon: 'i-lucide-mail'
            - label: 'Copy'
              icon: 'i-lucide-copy'
            - label: 'Link'
              icon: 'i-lucide-link'
  class: 'flex-1'
---
::

### Back Icon (englisch)

Verwenden Sie die `back-icon`-Prop, um die Zurück-Taste [Icon](/docs/components/icon). Defaults auf `i-lucide-arrow-left`.

::component-code
---
collapse: true
hide:
  - autofocus
ignore:
  - class
  - groups
  - back
external:
  - groups
externalTypes:
  - CommandPaletteGroup[]
class: '!p-0'
props:
  autofocus: false
  back: true
  backIcon: 'i-lucide-house'
  groups:
    - id: 'actions'
      items:
        - label: 'Share'
          icon: 'i-lucide-share'
          children:
            - label: 'Email'
              icon: 'i-lucide-mail'
            - label: 'Copy'
              icon: 'i-lucide-copy'
            - label: 'Link'
              icon: 'i-lucide-link'
  class: 'flex-1'
---
::

::framework-only
#nuxt
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
Sie können dieses Symbol global in Ihrem `app.config.ts` unter dem `ui.icons.arrowLeft`-Schlüssel anpassen.
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
Sie können dieses Symbol global in Ihrem `vite.config.ts` unter dem `ui.icons.arrowLeft`-Schlüssel anpassen.
:::
::

### Disabled (englisch)

Verwenden Sie die `disabled`-prop, um die CommandPalette zu deaktivieren.

::component-code
---
collapse: true
hide:
  - autofocus
ignore:
  - groups
  - class
external:
  - groups
externalTypes:
  - CommandPaletteGroup[]
class: '!p-0'
props:
  autofocus: false
  disabled: true
  groups:
    - id: 'apps'
      items:
        - label: 'Calendar'
          icon: 'i-lucide-calendar'
        - label: 'Music'
          icon: 'i-lucide-music'
        - label: 'Maps'
          icon: 'i-lucide-map'
  class: 'flex-1'
---
::

## Examples [Bearbeiten]

### Control selected item (s) Ausgewähltes Element

Sie können die ausgewählten Elemente steuern, indem Sie die `default-value`-prop-oder die `v-model`-Direktive verwenden, indem Sie das `onSelect`-Feld für jedes Element verwenden oder das `@update:model-value`-Ereignis verwenden.

::component-example
---
collapse: true
name: 'command-palette-select-example'
class: '!p-0'
props:
  autofocus: false
---
::

::tip
Verwenden Sie die `value-key`-prop, um ein Feld eines Elements auszuwählen, das anstelle des Objekts selbst als Wert verwendet werden soll.
::

### Control Suchbegriff

Verwenden Sie die `v-model:search-term`-Direktive, um den Suchbegriff zu steuern.

::component-example
---
collapse: true
name: 'command-palette-search-term-example'
class: '!p-0'
props:
  autofocus: false
---
::

::note
In diesem Beispiel wird das Ereignis `@update:model-value` verwendet, um den Suchbegriff zurückzusetzen, wenn ein Element ausgewählt wird.
::

### With children in items (Mit Kindern in Gegenständen)

Sie können hierarchische Menüs erstellen, indem Sie die `children`-Eigenschaft in items verwenden. Wenn ein Element untergeordnete Elemente hat, wird automatisch ein Chevron-Symbol angezeigt und die Navigation in ein Untermenü aktiviert.

::component-example
---
collapse: true
prettier: true
name: 'command-palette-items-children-example'
class: '!p-0'
props:
  autofocus: false
---
::

::note
Navigieren Sie in ein Untermenü:
- Der Suchbegriff wird zurückgesetzt
- A Zurück-Taste erscheint im Eingang
- Sie können zur vorherigen Gruppe zurückkehren, indem Sie die Taste: kbd{value="backspace"} drücken
::

### Mit hergeholten Objekten

Sie können Elemente von einer API abrufen und in der CommandPalette verwenden.

::component-example
---
collapse: true
name: 'command-palette-fetch-example'
class: '!p-0'
props:
  autofocus: false
---
::

::note
In diesem Beispiel wird `useLazyFetch` mit `server: false` verwendet, um Daten auf dem Client abzurufen, ohne das anfängliche Rendern zu blockieren. Der Ladezustand überprüft sowohl den `pending`-als auch den `idle`-Status, um vor und während des Abrufs einen Ladeindikator anzuzeigen.
::

### With ignore filter (Filter ignorieren)

Sie können das Feld `ignoreFilter` auf `true` für eine Gruppe setzen, um die interne Suche zu deaktivieren und Ihre eigene Suchlogik zu verwenden.

::component-example
---
collapse: true
name: 'command-palette-ignore-filter-example'
class: '!p-0'
props:
  autofocus: false
---
::

::note
In diesem Beispiel wird [`refDebounced`](https://vueuse.org/shared/refDebounced/#refdebounced) verwendet, um die API-Aufrufe zu debouncen. Der Ladezustand überprüft sowohl den `pending`-als auch den `idle`-Status, um eine Ladeanzeige vor und während des Abrufs anzuzeigen.
::

### With nachgefilterte Elemente

Sie können das Feld `postFilter` in einer Gruppe verwenden, um Elemente zu filtern, nachdem die Suche durchgeführt wurde.

::component-example
---
collapse: true
name: 'command-palette-post-filter-example'
class: '!p-0'
props:
  autofocus: false
---
::

::note
Beginnen Sie mit der Eingabe, um Elemente mit höherer Ebene zu sehen.
::

### With Custom Fuse Search (Deutsche Übersetzung)

Sie können die `fuse`-Prop verwenden, um die Optionen von [useFuse](https://vueuse.org/integrations/useFuse) zu überschreiben, die standardmäßig wie folgt lautet:

```ts
{
  fuseOptions: {
    ignoreLocation: true,
    threshold: 0.1,
    keys: ['label', 'description', 'suffix']
  },
  resultLimit: 12,
  matchAllWhenSearchEmpty: true
}
```

::tip
Die `fuseOptions` sind die Optionen von [Fuse.js](https://www.fusejs.io/), die `resultLimit` ist die maximale Anzahl der Ergebnisse, die zurückgegeben werden sollen, und die `matchAllWhenSearchEmpty` ist ein Boolean, um alle Elemente zu finden, wenn der Suchbegriff leer ist.
::

Sie können zum Beispiel `{ fuseOptions: { includeMatches: true } }`{lang="ts-type"} festlegen, um den Suchbegriff in den Elementen hervorzuheben.

::component-example
---
collapse: true
name: 'command-palette-fuse-example'
class: '!p-0'
props:
  autofocus: false
---
::

### Mit Virtualisierung: badge{label="4.1+" class="align-text-top"}

Verwenden Sie die `virtualize`-Prop, um die Virtualisierung für große Listen als Boolean oder ein Objekt mit Optionen wie `{ estimateSize: 32, overscan: 12 }` zu aktivieren.

::warning{to="https://github.com/unovue/reka-ui/issues/1885" target="_blank"}
Wenn diese Option aktiviert ist, werden alle Gruppen aufgrund einer Einschränkung der Reka-Benutzeroberfläche in eine einzige Liste zusammengefasst.
::

::component-example
---
collapse: true
name: 'command-palette-virtualize-example'
class: '!p-0'
props:
  autofocus: false
---
::

### Within a Popover (Deutsche Ausgabe)

Sie können die CommandPalette-Komponente innerhalb des Inhalts eines [Popover](/docs/components/popover) verwenden.

::component-example
---
collapse: true
name: 'popover-command-palette-example'
props:
  autofocus: false
---
::

### In einem Modal

Sie können die CommandPalette-Komponente innerhalb eines [Modal](/docs/components/modal)x-Inhalts verwenden.

::component-example
---
collapse: true
name: 'modal-command-palette-example'
props:
  autofocus: false
---
::

::note
In diesem Beispiel wird `useLazyFetch` mit `immediate: false` verwendet, um nur Daten abzurufen, wenn das Modal geöffnet wird.
::

### Innerhalb einer Schublade

Sie können die CommandPalette-Komponente innerhalb eines [Drawer](/docs/components/drawer)x-Inhalts verwenden.

::component-example
---
collapse: true
name: 'drawer-command-palette-example'
props:
  autofocus: false
---
::

::note
In diesem Beispiel wird `useLazyFetch` mit `immediate: false` verwendet, um Daten nur beim Öffnen der Schublade abzurufen.
::

### Listen Open State (englisch)

Wenn Sie die `close`-Prop verwenden, können Sie das `update:open`-Ereignis hören, wenn Sie auf die Schaltfläche klicken.

::component-example
---
collapse: true
name: 'command-palette-open-example'
props:
  autofocus: false
---
::

::note
Dies kann beispielsweise nützlich sein, wenn Sie die CommandPalette in einem [`Modal`](/docs/components/modal) verwenden.
::

### With Fußzeilen-Slot

Verwenden Sie den `#footer`-Steckplatz, um benutzerdefinierte Inhalte am unteren Rand der CommandPalette hinzuzufügen, z. B. Tastaturkürzel oder zusätzliche Aktionen.

::component-example
---
collapse: true
name: 'command-palette-footer-slot-example'
class: '!p-0'
props:
  autofocus: false
---
::

### Mit benutzerdefiniertem Slot

Verwenden Sie die `slot`-Eigenschaft, um ein bestimmtes Element oder eine bestimmte Gruppe anzupassen.

Sie haben Zugriff auf folgende Slots:

- `#{{ item.slot }}`{lang="ts-type"} (englisch)
- `#{{ item.slot }}-leading`{lang="ts-type"} (englisch)
- `#{{ item.slot }}-label`{lang="ts-type"} (nicht vorhanden)
- `#{{ item.slot }}-trailing`{lang="ts-type"} (englisch)

- `#{{ group.slot }}`{lang="ts-type"} (nicht)
- `#{{ group.slot }}-leading`{lang="ts-type"}xx38x38x38x38x38x38x38x38x38x38x38x38x38x38x38x38x38x38x38x38x38x38x38x38x38x38x38x38x38x38x38x38x38x38x38x38x38x38x38x38x38x38x38x38x38x38x38x38x38x38x38x38x38x38x38x38x38x38x38x38x38x38x38x38x38x38x38x38x38x38x38x38x38x38x38x38x38x3
- `#{{ group.slot }}-label`{lang="ts-type"} (nicht vorhanden)
- `#{{ group.slot }}-trailing`{lang="ts-type"} (englisch)

::component-example
---
collapse: true
name: 'command-palette-custom-slot-example'
class: '!p-0'
props:
  autofocus: false
---
::

::tip{to="#slots"}
Sie können auch die `#item`, `#item-leading`, `#item-label` und `#item-trailing` Steckplätze verwenden, um alle Elemente anzupassen.
::

## API (Englisch)

### Props (nicht)

:component-props

### Slots (englisch)

:component-slots

### Emits (englisch)

:component-emits

## Theme Bearbeiten

:component-theme

## Changelog (englisch)

:component-changelog
