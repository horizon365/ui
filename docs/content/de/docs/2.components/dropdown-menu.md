---
title: Dropdownmenu hinzufügen
description: Ein Menü zum Anzeigen von Aktionen beim Klicken auf ein Element.
category: overlay
keywords:
  - menu
  - context menu
  - actions
links:
  - label: Dropdownmenu hinzufügen
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/dropdown-menu
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/DropdownMenu.vue
---

## Bearbeiten

Verwenden Sie einen [Button](/docs/components/button) oder eine andere Komponente im Standard-Slot des DropdownMenu.

::component-code
---
prettier: true
collapse: true
ignore:
  - items
  - ui.content
external:
  - items
externalTypes:
  - DropdownMenuItem[][]
props:
  items:
    - - label: Benjamin
        avatar:
          src: 'https://github.com/benjamincanac.png'
          loading: lazy
        type: label
    - - label: Profile
        icon: i-lucide-user
      - label: Billing
        icon: i-lucide-credit-card
      - label: Settings
        icon: i-lucide-cog
        kbds:
          - ','
      - label: Keyboard shortcuts
        icon: i-lucide-monitor
    - - label: Team
        icon: i-lucide-users
        filter:
          placeholder: 'Search members...'
        children:
          - - label: benjamincanac
              avatar:
                src: 'https://github.com/benjamincanac.png'
                loading: lazy
            - label: HugoRCD
              avatar:
                src: 'https://github.com/HugoRCD.png'
                loading: lazy
            - label: atinux
              avatar:
                src: 'https://github.com/atinux.png'
                loading: lazy
            - label: romhml
              avatar:
                src: 'https://github.com/romhml.png'
                loading: lazy
            - label: sandros94
              avatar:
                src: 'https://github.com/sandros94.png'
                loading: lazy
            - label: J-Michalek
              avatar:
                src: 'https://github.com/J-Michalek.png'
                loading: lazy
            - label: hywax
              avatar:
                src: 'https://github.com/hywax.png'
                loading: lazy
      - label: Invite users
        icon: i-lucide-user-plus
        children:
          - - label: Email
              icon: i-lucide-mail
            - label: Message
              icon: i-lucide-message-square
          - - label: More
              icon: i-lucide-circle-plus
              children:
                - label: Import from Slack
                  icon: i-simple-icons-slack
                  to: 'https://slack.com'
                  target: _blank
                - label: Import from Trello
                  icon: i-simple-icons-trello
                - label: Import from Asana
                  icon: i-simple-icons-asana
      - label: New team
        icon: i-lucide-plus
        kbds:
          - meta
          - n
    - - label: GitHub
        icon: i-simple-icons-github
        to: 'https://github.com/nuxt/ui'
        target: _blank
      - label: Support
        icon: i-lucide-life-buoy
        to: '/docs/components/dropdown-menu'
      - label: API
        icon: i-lucide-cloud
        disabled: true
    - - label: Logout
        icon: i-lucide-log-out
        color: error
        kbds:
          - shift
          - meta
          - q
slots:
  default: |

    <UButton icon="i-lucide-menu" color="neutral" variant="outline" />
---

:u-button{icon="i-lucide-menu" color="neutral" variant="outline"}
::

### Items Bearbeiten

Verwenden Sie die `items`-prop als Array von Objekten mit den folgenden Eigenschaften:

- `label?: string`{lang="ts-type"} (nicht)
- `icon?: string`{lang="ts-type"} (nicht)
- `avatar?: AvatarProps`{lang="ts-type"} (nicht)
- `kbds?: string[] | KbdProps[]`{lang="ts-type"} (nicht)
- [`type?: "link" | "label" | "separator" | "checkbox"`{lang="ts-type"}](#with-checkbox-items) ) #with-checkbox-items129x125{lang="ts-type"}](xph128)
- [`color?: "error" | "primary" | "secondary" | "success" | "info" | "warning" | "neutral"`{lang="ts-type"}](#with-color-items) )136x137{lang="ts-type"}ph136xx136x136x136x136xx136xx136xx137x136xx136x136x
- [`checked?: boolean`{lang="ts-type"}](#with-checkbox-items)
- `disabled?: boolean`{lang="ts-type"} (nicht)
- [`slot?: string`{lang="ts-type"}](#with-custom-slot)
- `onSelect?: (e: Event) => void`{lang="ts-type"} (englisch)
- [`onUpdateChecked?: (checked: boolean) => void`{lang="ts-type"}](#with-checkbox-items)
- `children?: DropdownMenuItem[] | DropdownMenuItem[][]`{lang="ts-type"} (englisch)
- [`filter?: boolean | InputProps`{lang="ts-type"}](#with-filter-items)
- `filterFields?: string[]`{lang="ts-type"} (nicht vorhanden)
- `ignoreFilter?: boolean`{lang="ts-type"} (nicht vorhanden)
- `class?: any`{lang="ts-type"} (englisch)
- `ui?: { item?: ClassNameValue, label?: ClassNameValue, separator?: ClassNameValue, itemLeadingIcon?: ClassNameValue, itemLeadingAvatarSize?: ClassNameValue, itemLeadingAvatar?: ClassNameValue, itemLabel?: ClassNameValue, itemLabelExternalIcon?: ClassNameValue, itemTrailing?: ClassNameValue, itemTrailingIcon?: ClassNameValue, itemTrailingKbds?: ClassNameValue, itemTrailingKbdsSize?: ClassNameValue }`{lang="ts-type"} (englisch)

Sie können jede Eigenschaft aus der Komponente [Link](/docs/components/link#props) übergeben, z. B. `to`, `target` usw.

::component-code
---
prettier: true
collapse: true
ignore:
  - items
  - ui.content
external:
  - items
externalTypes:
  - DropdownMenuItem[][]
props:
  items:
    - - label: Benjamin
        avatar:
          src: 'https://github.com/benjamincanac.png'
          loading: lazy
        type: label
    - - label: Profile
        icon: i-lucide-user
      - label: Billing
        icon: i-lucide-credit-card
      - label: Settings
        icon: i-lucide-cog
        kbds:
          - ','
      - label: Keyboard shortcuts
        icon: i-lucide-monitor
    - - label: Team
        icon: i-lucide-users
      - label: Invite users
        icon: i-lucide-user-plus
        children:
          - - label: Email
              icon: i-lucide-mail
            - label: Message
              icon: i-lucide-message-square
          - - label: More
              icon: i-lucide-circle-plus
              children:
                - label: Import from Slack
                  icon: i-simple-icons-slack
                  to: 'https://slack.com'
                  target: _blank
                - label: Import from Trello
                  icon: i-simple-icons-trello
                - label: Import from Asana
                  icon: i-simple-icons-asana
      - label: New team
        icon: i-lucide-plus
        kbds:
          - meta
          - n
    - - label: GitHub
        icon: i-simple-icons-github
        to: 'https://github.com/nuxt/ui'
        target: _blank
      - label: Support
        icon: i-lucide-life-buoy
        to: '/docs/components/dropdown-menu'
      - label: API
        icon: i-lucide-cloud
        disabled: true
    - - label: Logout
        icon: i-lucide-log-out
        kbds:
          - shift
          - meta
          - q
  ui:
    content: 'w-48'
slots:
  default: |

    <UButton icon="i-lucide-menu" color="neutral" variant="outline" />
---

:u-button{icon="i-lucide-menu" color="neutral" variant="outline"}
::

::note
Sie können auch ein Array von Arrays an die `items`-prop übergeben, um getrennte Gruppen von Elementen zu erstellen.
::

::tip
Jedes Element kann ein `children`-Array von Objekten mit den gleichen Eigenschaften wie die `items`-Prop verwenden, um ein verschachteltes Menü zu erstellen, das mit den Eigenschaften `open`, `defaultOpen` und `content` gesteuert werden kann.
::

### Inhalt

Verwenden Sie die `content`-Prop, um zu steuern, wie der DropdownMenu-Inhalt gerendert wird, z. B. `align` oder `side`.

::component-code
---
prettier: true
collapse: true
ignore:
  - items
  - ui.content
external:
  - items
externalTypes:
  - DropdownMenuItem[]
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
  items:
    - label: Profile
      icon: i-lucide-user
    - label: Billing
      icon: i-lucide-credit-card
    - label: Settings
      icon: i-lucide-cog
  content:
    align: start
    side: bottom
    sideOffset: 8
  ui:
    content: 'w-48'
slots:
  default: |

    <UButton label="Open" icon="i-lucide-menu" color="neutral" variant="outline" />
---

:u-button{label="öffnen" icon="i-lucide-menu" color="neutral" variant="outline"}
::

### Filter: badge{label="4.6+" class="align-text-top"}

Verwenden Sie die `filter`-Prop, um einen Filtereingang innerhalb des DropdownMenu anzuzeigen. Standardmäßig ist `false`.

::note{to="#with-ignore-filter"}
Verwenden Sie die `ignore-filter`-prop, um die interne Suche zu deaktivieren und Ihre eigene Suchlogik zu verwenden.
::

::note{to="#with-filter-fields"}
Verwenden Sie die `filter-fields` prop, um anzugeben, nach welchen Feldern gefiltert werden soll. Standardmäßig wird die `labelKey` prop verwendet.
::

Sie können jede Eigenschaft der Komponente [Input](/docs/components/input) übergeben, um sie anzupassen.

::component-code
---
prettier: true
collapse: true
ignore:
  - items
  - filter.icon
  - content.align
  - ui.content
external:
  - items
externalTypes:
  - DropdownMenuItem[]
props:
  filter:
    icon: i-lucide-search
  items:
    - label: Profile
      icon: i-lucide-user
    - label: Billing
      icon: i-lucide-credit-card
    - label: Settings
      icon: i-lucide-cog
    - label: Team
      icon: i-lucide-users
    - label: Invite users
      icon: i-lucide-user-plus
    - label: New team
      icon: i-lucide-plus
  content:
    align: start
  ui:
    content: 'w-48'
slots:
  default: |

    <UButton label="Open" icon="i-lucide-menu" color="neutral" variant="outline" />
---

:u-button{label="öffnen" icon="i-lucide-menu" color="neutral" variant="outline"}
::

::tip{to="#with-filter-items"}
Sie können den Filter auch für bestimmte Untermenüs aktivieren, indem Sie das Feld `filter` für Elemente mit `children` verwenden.
::

### Arrow Bearbeiten

Verwenden Sie die `arrow`-Prop, um einen Pfeil im DropdownMenü anzuzeigen.

::component-code
---
prettier: true
collapse: true
ignore:
  - arrow
  - items
  - ui.content
external:
  - items
externalTypes:
  - DropdownMenuItem[]
props:
  arrow: true
  items:
    - label: Profile
      icon: i-lucide-user
    - label: Billing
      icon: i-lucide-credit-card
    - label: Settings
      icon: i-lucide-cog
  ui:
    content: 'w-48'
slots:
  default: |

    <UButton label="Open" icon="i-lucide-menu" color="neutral" variant="outline" />
---

:u-button{label="öffnen" icon="i-lucide-menu" color="neutral" variant="outline"}
::

### Size ist

Verwenden Sie die `size`-Prop, um die Größe des DropdownMenu zu steuern.

::component-code
---
prettier: true
collapse: true
ignore:
  - items
  - content.align
  - ui.content
external:
  - items
externalTypes:
  - DropdownMenuItem[]
props:
  size: xl
  items:
    - label: Profile
      icon: i-lucide-user
    - label: Billing
      icon: i-lucide-credit-card
    - label: Settings
      icon: i-lucide-cog
  content:
    align: start
  ui:
    content: 'w-48'
slots:
  default: |

    <UButton size="xl" label="Open" icon="i-lucide-menu" color="neutral" variant="outline" />
---

:u-button{size="xl" label="öffnen" icon="i-lucide-menu" color="neutral" variant="outline"}
::

::warning
Die `size`-Prop wird nicht an den Button weitergeleitet, Sie müssen sie selbst einstellen.
::

::note
Bei Verwendung derselben Größe werden die DropdownMenu-Elemente perfekt auf den Button ausgerichtet.
::

### Modal Bearbeiten

Verwenden Sie die `modal`-Prop, um zu steuern, ob das DropdownMenu die Interaktion mit externen Inhalten blockiert.

::component-code
---
prettier: true
collapse: true
ignore:
  - items
  - ui.content
external:
  - items
externalTypes:
  - DropdownMenuItem[]
props:
  modal: false
  items:
    - label: Profile
      icon: i-lucide-user
    - label: Billing
      icon: i-lucide-credit-card
    - label: Settings
      icon: i-lucide-cog
  ui:
    content: 'w-48'
slots:
  default: |

    <UButton label="Open" icon="i-lucide-menu" color="neutral" variant="outline" />
---

:u-button{label="öffnen" icon="i-lucide-menu" color="neutral" variant="outline"}
::

### Disabled (nicht verfügbar)

Verwenden Sie die `disabled`-Prop, um das DropdownMenu zu deaktivieren.

::component-code
---
prettier: true
collapse: true
ignore:
  - items
  - ui.content
external:
  - items
externalTypes:
  - DropdownMenuItem[]
props:
  disabled: true
  items:
    - label: Profile
      icon: i-lucide-user
    - label: Billing
      icon: i-lucide-credit-card
    - label: Settings
      icon: i-lucide-cog
  ui:
    content: 'w-48'
slots:
  default: |

    <UButton label="Open" icon="i-lucide-menu" color="neutral" variant="outline" />
---

:u-button{label="öffnen" icon="i-lucide-menu" color="neutral" variant="outline"}
::

## Beispiele

### With Checkbox Items (Deutsche Übersetzung)

Sie können die `type`-Eigenschaft mit `checkbox` verwenden und die `checked`/`onUpdateChecked`-Eigenschaften verwenden, um den überprüften Zustand des Elements zu steuern.

::component-example
---
collapse: true
name: 'dropdown-menu-checkbox-items-example'
---
::

::note
Um die Reaktivität für den `checked`-Status von Elementen zu gewährleisten, wird empfohlen, das `items`-Array in ein `computed` zu wickeln.
::

### Mit farbigen Elementen

Sie können die `color`-Eigenschaft verwenden, um bestimmte Elemente mit einer Farbe hervorzuheben.

::component-example
---
collapse: true
name: 'dropdown-menu-color-items-example'
---
::

### With filter items: badge{label="4.6+" class="align-text-top"} (Mit Filterelementen: badge{label="4.6+" class="align-text-top"})

Sie können die `filter`-Eigenschaft für Elemente mit `children` verwenden, um eine Filtereingabe im Untermenü anzuzeigen.

::component-example
---
collapse: true
name: 'dropdown-menu-filter-items-example'
---
::

### Control im Open State

Sie können den offenen Zustand mit der `default-open`-prop-oder der `v-model:open`-Anweisung steuern.

::component-example
---
collapse: true
name: 'dropdown-menu-open-example'
---
::

::note
In diesem Beispiel können Sie unter Verwendung von [`defineShortcuts`](/docs/composables/define-shortcuts) das DropdownMenu umschalten, indem Sie: kbd{value="O"}.
::

### Mit Custom Slot

Verwenden Sie die `slot`-Eigenschaft, um ein bestimmtes Element anzupassen.

Sie haben Zugriff auf folgende Slots:

- `#{{ item.slot }}`{lang="ts-type"}
- `#{{ item.slot }}-leading`{lang="ts-type"} (nicht)
- `#{{ item.slot }}-label`{lang="ts-type"} (nicht)
- `#{{ item.slot }}-trailing`{lang="ts-type"}

::component-example
---
collapse: true
name: 'dropdown-menu-custom-slot-example'
---
::

::tip{to="#slots"}
Sie können auch die `#item`, `#item-leading`, `#item-label` und `#item-trailing` Steckplätze verwenden, um alle Elemente anzupassen.
::

### With switch in items (Mit Schalter in Elementen)

Sie können die `slot`-Eigenschaft mit einem `#{{ slot }}-trailing`-Steckplatz verwenden, um einen [Switch](/docs/components/switch) in einem Element zu rendern.

::component-example
---
collapse: true
name: 'dropdown-menu-switch-items-example'
---
::

### With ignore filter: badge{label="4.6+" class="align-text-top"} (mit dem Filter "ignorieren")

Wenn Sie die `filter`-prop oder das `filter`-Feld für Elemente mit `children` verwenden, können Sie die `ignore-filter`-prop auf `true` setzen, um die interne Suche zu deaktivieren und Ihre eigene Suchlogik zu verwenden.

::component-example
---
collapse: true
name: 'dropdown-menu-ignore-filter-example'
---
::

::note
In diesem Beispiel wird [`refDebounced`](https://vueuse.org/shared/refDebounced/#refdebounced) verwendet, um die API-Aufrufe zu entkräften. Der Abruf wird mit `immediate: false` verschoben, so dass keine Anfrage gestellt wird, bis das Menü geöffnet wird.
::

### With Filterfelder: badge{label="4.6+" class="align-text-top"}

Wenn Sie die `filter`-Prop oder das `filter`-Feld für Elemente mit `children` verwenden, können Sie die `filter-fields`-Prop mit einem Array von Feldern zum Filtern festlegen.

::component-example
---
collapse: true
name: 'dropdown-menu-filter-fields-example'
---
::

### With trigger content width (Inhaltsbreite des Triggers)

Sie können den Inhalt auf die volle Breite der Schaltfläche erweitern, indem Sie die `w-(--reka-dropdown-menu-trigger-width)`-Klasse auf dem `ui.content`-Steckplatz hinzufügen.

::component-example
---
collapse: true
name: 'dropdown-menu-content-width-example'
---
::

::tip
Sie können auch die Inhaltsbreite global in Ihrem `app.config.ts` ändern:

```
export default defineAppConfig({
  ui: {
    dropdownMenu: {
      slots: {
        content: 'w-(--reka-dropdown-menu-trigger-width)'
      }
    }
  }
})
```
::

### Extract Shortcuts (englisch)

Verwenden Sie das Dienstprogramm [extractShortcuts](/docs/composables/extract-shortcuts), um automatisch Verknüpfungen von Menüelementen mit einer `kbds`-Eigenschaft zu definieren. Es extrahiert rekursiv Verknüpfungen und gibt ein Objekt zurück, das mit [defineShortcuts](/docs/composables/define-shortcuts) kompatibel ist.

```vue
<script setup lang="ts">
import type { DropdownMenuItem } from '@nuxt/ui'

const items: DropdownMenuItem[] = [{
  label: 'Invite users',
  icon: 'i-lucide-user-plus',
  children: [{
    label: 'Invite by email',
    icon: 'i-lucide-send-horizontal',
    kbds: ['meta', 'e'],
    onSelect() {
      console.log('Invite by email clicked')
    }
  }, {
    label: 'Invite by link',
    icon: 'i-lucide-link',
    kbds: ['meta', 'i'],
    onSelect() {
      console.log('Invite by link clicked')
    }
  }]
}, {
  label: 'New team',
  icon: 'i-lucide-plus',
  kbds: ['meta', 'n'],
  onSelect() {
    console.log('New team clicked')
  }
}]

defineShortcuts(extractShortcuts(items))
</script>
```

::note
In diesem Beispiel würden: kbd{value="meta"}: kbd{value="E" class="ms-px"},: kbd{value="meta"}: kbd{value="I" class="ms-px"} und: kbd{value="meta"}: kbd{value="N" class="ms-px"} die Funktion `select` des entsprechenden Elements auslösen.
::

## API (englisch)

### Props Bearbeiten

:component-props

### Slots (englisch)

:component-slots

### Emits Bearbeiten

:component-emits

## Themes Bearbeiten

:component-theme

## Changelog (englisch)

:component-changelog
