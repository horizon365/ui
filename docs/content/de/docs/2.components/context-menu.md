---
title: Kontextmenü
description: Ein Menü zum Anzeigen von Aktionen beim Rechtsklick auf ein Element.
category: overlay
keywords:
  - right click menu
links:
  - label: Kontextmenü
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/context-menu
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/ContextMenu.vue
---

## Bearbeiten

Verwenden Sie alles, was Sie im Standard-Slot des ContextMenu möchten, und klicken Sie mit der rechten Maustaste darauf, um das Menü anzuzeigen.

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
  - ContextMenuItem[][]
props:
  items:
    - - label: Appearance
        children:
          - label: System
            icon: i-lucide-monitor
          - label: Light
            icon: i-lucide-sun
          - label: Dark
            icon: i-lucide-moon
    - - label: Show Sidebar
        kbds:
          - meta
          - s
      - label: Show Toolbar
        kbds:
          - shift
          - meta
          - d
      - label: Collapse Pinned Tabs
        disabled: true
    - - label: Refresh the Page
      - label: Clear Cookies and Refresh
      - label: Clear Cache and Refresh
      - type: separator
      - label: Developer
        children:
          - - label: View Source
              kbds:
                - meta
                - shift
                - u
            - label: Developer Tools
              kbds:
                - option
                - meta
                - i
            - label: Inspect Elements
              kbds:
                - option
                - meta
                - c
          - - label: JavaScript Console
              kbds:
                - option
                - meta
                - j
slots:
  default: |

    <div class="flex items-center justify-center rounded-md border border-dashed border-accented text-sm aspect-video w-72">
      Right click here
    </div>
---

:div{class="flex items-center justify-center rounded-md border border-dashed border-accented text-sm aspect-video w-72"}[Right click here]
::

### Einträge

Verwenden Sie die `items`-prop als Array von Objekten mit den folgenden Eigenschaften:

- `label?: string`{lang="ts-type"} (nicht vorhanden)
- `icon?: string`{lang="ts-type"} (nicht vorhanden)
- `avatar?: AvatarProps`{lang="ts-type"} (nicht vorhanden)
- `kbds?: string[] | KbdProps[]`{lang="ts-type"}078x078x0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
- [`type?: "link" | "label" | "separator" | "checkbox"`{lang="ts-type"}](#with-checkbox-items)
- [`color?: "error" | "primary" | "secondary" | "success" | "info" | "warning" | "neutral"`{lang="ts-type"}](#with-color-items) ) xph08800)
- [`checked?: boolean`{lang="ts-type"}](#with-checkbox-items) ) xph0998x xph0999999xxph0999xx{lang="ts-type"}x{lang="ts-type"}x{lang="ts-type"}xx09xx)
- `disabled?: boolean`{lang="ts-type"} (nicht)
- [`slot?: string`{lang="ts-type"}](#with-custom-slot)
- `onSelect?: (e: Event) => void`{lang="ts-type"} (englisch)
- [`onUpdateChecked?: (checked: boolean) => void`{lang="ts-type"}](#with-checkbox-items) )
- `children?: ContextMenuItem[] | ContextMenuItem[][]`{lang="ts-type"} (nicht)
- `class?: any`{lang="ts-type"} (nicht)
- `ui?: { item?: ClassNameValue, label?: ClassNameValue, separator?: ClassNameValue, itemLeadingIcon?: ClassNameValue, itemLeadingAvatarSize?: ClassNameValue, itemLeadingAvatar?: ClassNameValue, itemLabel?: ClassNameValue, itemLabelExternalIcon?: ClassNameValue, itemTrailing?: ClassNameValue, itemTrailingIcon?: ClassNameValue, itemTrailingKbds?: ClassNameValue, itemTrailingKbdsSize?: ClassNameValue }`{lang="ts-type"} (nicht)

Sie können jede Eigenschaft der Komponente [Link](/docs/components/link#props) übergeben, z. B. `to`, `target` usw.

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
  - ContextMenuItem[][]
props:
  items:
    - - label: Appearance
        children:
          - label: System
            icon: i-lucide-monitor
          - label: Light
            icon: i-lucide-sun
          - label: Dark
            icon: i-lucide-moon
    - - label: Show Sidebar
        kbds:
          - meta
          - s
      - label: Show Toolbar
        kbds:
          - shift
          - meta
          - d
      - label: Collapse Pinned Tabs
        disabled: true
    - - label: Refresh the Page
      - label: Clear Cookies and Refresh
      - label: Clear Cache and Refresh
      - type: separator
      - label: Developer
        children:
          - - label: View Source
              kbds:
                - meta
                - shift
                - u
            - label: Developer Tools
              kbds:
                - option
                - meta
                - i
            - label: Inspect Elements
              kbds:
                - option
                - meta
                - c
          - - label: JavaScript Console
              kbds:
                - option
                - meta
                - j
  ui:
    content: 'w-48'
slots:
  default: |

    <div class="flex items-center justify-center rounded-md border border-dashed border-accented text-sm aspect-video w-72">
      Right click here
    </div>
---

:div{class="flex items-center justify-center rounded-md border border-dashed border-accented text-sm aspect-video w-72"}[Right click here]
::

::note
Sie können auch ein Array von Arrays an die `items`-Prop übergeben, um getrennte Gruppen von Elementen zu erstellen.
::

::tip
Jedes Element kann ein `children`-Array von Objekten mit den gleichen Eigenschaften wie die `items`-Prop verwenden, um ein verschachteltes Menü zu erstellen, das mit den Eigenschaften `open`, `defaultOpen` und `content` gesteuert werden kann.
::

### Size ist

Verwenden Sie die `size`-prop, um die Größe des Kontextmenüs zu ändern.

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
  - ContextMenuItem[]
props:
  size: xl
  items:
    - label: System
      icon: i-lucide-monitor
    - label: Light
      icon: i-lucide-sun
    - label: Dark
      icon: i-lucide-moon
  ui:
    content: 'w-48'
slots:
  default: |

    <div class="flex items-center justify-center rounded-md border border-dashed border-accented text-sm aspect-video w-72">
      Right click here
    </div>
---

:div{class="flex items-center justify-center rounded-md border border-dashed border-accented text-sm aspect-video w-72"}[Right click here]
::

### Modal ist

Verwenden Sie die `modal`-prop, um zu steuern, ob das ContextMenu die Interaktion mit externen Inhalten blockiert.

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
  - ContextMenuItem[]
props:
  modal: false
  items:
    - label: System
      icon: i-lucide-monitor
    - label: Light
      icon: i-lucide-sun
    - label: Dark
      icon: i-lucide-moon
  ui:
    content: 'w-48'
slots:
  default: |

    <div class="flex items-center justify-center rounded-md border border-dashed border-accented text-sm aspect-video w-72">
      Right click here
    </div>
---

:div{class="flex items-center justify-center rounded-md border border-dashed border-accented text-sm aspect-video w-72"}[Right click here]
::


### Disabled (nicht verfügbar)

Verwenden Sie die `disabled`-prop, um das Kontextmenü zu deaktivieren.

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
  - ContextMenuItem[]
props:
  disabled: true
  items:
    - label: System
      icon: i-lucide-monitor
    - label: Light
      icon: i-lucide-sun
    - label: Dark
      icon: i-lucide-moon
  ui:
    content: 'w-48'
slots:
  default: |

    <div class="flex items-center justify-center rounded-md border border-dashed border-accented text-sm aspect-video w-72">
      Right click here
    </div>
---

:div{class="flex items-center justify-center rounded-md border border-dashed border-accented text-sm aspect-video w-72"}[Right click here]
::

## Beispiele

### With Checkbox-Elemente

Sie können die `type`-Eigenschaft mit `checkbox` verwenden und die `checked`/`onUpdateChecked`-Eigenschaften verwenden, um den überprüften Zustand des Elements zu steuern.

::component-example
---
collapse: true
name: 'context-menu-checkbox-items-example'
---
::

::note
Um die Reaktivität für den `checked`-Status von Elementen zu gewährleisten, wird empfohlen, das `items`-Array in ein `computed` zu wickeln.
::

### With color items (Deutsche Übersetzung)

Mit der Eigenschaft `color` können Sie bestimmte Elemente mit einer Farbe hervorheben.

::component-example
---
collapse: true
name: 'context-menu-color-items-example'
---
::

### Mit benutzerdefiniertem Slot

Verwenden Sie die `slot`-Eigenschaft, um ein bestimmtes Element anzupassen.

Sie haben Zugriff auf folgende Slots:

- `#{{ item.slot }}`{lang="ts-type"} (nicht)
- `#{{ item.slot }}-leading`{lang="ts-type"}324x
- `#{{ item.slot }}-label`{lang="ts-type"} (nicht)
- `#{{ item.slot }}-trailing`{lang="ts-type"} (nicht)

::component-example
---
collapse: true
name: 'context-menu-custom-slot-example'
---
::

::tip{to="#slots"}
Sie können auch die `#item`, `#item-leading`, `#item-label` und `#item-trailing` Steckplätze verwenden, um alle Elemente anzupassen.
::

### Extract Shortcuts (englisch)

Verwenden Sie das Dienstprogramm [extractShortcuts](/docs/composables/extract-shortcuts), um automatisch Verknüpfungen von Menüelementen mit einer `kbds`-Eigenschaft zu definieren.

```vue
<script setup lang="ts">
const items = [
  [{
    label: 'Show Sidebar',
    kbds: ['meta', 'S'],
    onSelect() {
      console.log('Show Sidebar clicked')
    }
  }, {
    label: 'Show Toolbar',
    kbds: ['shift', 'meta', 'D'],
    onSelect() {
      console.log('Show Toolbar clicked')
    }
  }, {
    label: 'Collapse Pinned Tabs',
    disabled: true
  }], [{
    label: 'Refresh the Page'
  }, {
    label: 'Clear Cookies and Refresh'
  }, {
    label: 'Clear Cache and Refresh'
  }, {
    type: 'separator' as const
  }, {
    label: 'Developer',
    children: [[{
      label: 'View Source',
      kbds: ['option', 'meta', 'U'],
      onSelect() {
        console.log('View Source clicked')
      }
    }, {
      label: 'Developer Tools',
      kbds: ['option', 'meta', 'I'],
      onSelect() {
        console.log('Developer Tools clicked')
      }
    }], [{
      label: 'Inspect Elements',
      kbds: ['option', 'meta', 'C'],
      onSelect() {
        console.log('Inspect Elements clicked')
      }
    }], [{
      label: 'JavaScript Console',
      kbds: ['option', 'meta', 'J'],
      onSelect() {
        console.log('JavaScript Console clicked')
      }
    }]]
  }]
]

defineShortcuts(extractShortcuts(items))
</script>
```

::note
In diesem Beispiel: kbd{value="meta"}: kbd{value="S" class="ms-px"},: kbd{value="shift"}: kbd{value="meta" class="ms-px"}: kbd{value="D" class="ms-px"},: kbd{value="option"}: kbd{value="meta" class="ms-px"}: kbd{value="U" class="ms-px"},: kbd{value="option"}: kbd{value="meta" class="ms-px"}: kbd{value="I" class="ms-px"},: kbd{value="option"}: kbd{value="meta" class="ms-px"}: kbd{value="meta" class="ms-px"}: kbd{value="meta" class="ms-px"} würde die entsprechende Funktion auslösen.
::

## API (Englisch)

### Props Bearbeiten

:component-props

### Slots (englisch)

:component-slots

### Emits (Englisch)

:component-emits

## Theme Bearbeiten

:component-theme

## Changelog (englisch)

:component-changelog
