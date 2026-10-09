---
description: Eine Baumansichtkomponente zum Anzeigen und Interagieren mit hierarchischen Datenstrukturen.
category: data
keywords:
  - file tree
  - hierarchy
  - folder tree
links:
  - label: Bäume
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/tree
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Tree.vue
---

## Bearbeiten

Verwenden Sie die Komponente Baum, um eine hierarchische Struktur von Elementen anzuzeigen.

::component-code
---
collapse: true
hide:
  - class
ignore:
  - items
external:
  - items
externalTypes:
  - TreeItem[]
props:
  items:
    - label: 'app/'
      defaultExpanded: true
      children:
        - label: 'composables/'
          children:
            - label: 'useAuth.ts'
              icon: 'i-vscode-icons-file-type-typescript'
            - label: 'useUser.ts'
              icon: 'i-vscode-icons-file-type-typescript'
        - label: 'components/'
          defaultExpanded: true
          children:
            - label: 'Card.vue'
              icon: 'i-vscode-icons-file-type-vue'
            - label: 'Button.vue'
              icon: 'i-vscode-icons-file-type-vue'
    - label: 'app.vue'
      icon: 'i-vscode-icons-file-type-vue'
    - label: 'nuxt.config.ts'
      icon: 'i-vscode-icons-file-type-nuxt'
  class: 'w-60'
---
::

### Items Bearbeiten

Verwenden Sie die `items`-prop als Array von Objekten mit den folgenden Eigenschaften:

- `icon?: string`{lang="ts-type"} (nicht vorhanden)
- `label?: string`{lang="ts-type"} (englisch)
- `trailingIcon?: string`{lang="ts-type"} (englisch)
- `defaultExpanded?: boolean`{lang="ts-type"} (nicht)
- `disabled?: boolean`{lang="ts-type"} (englisch)
- `slot?: string`{lang="ts-type"} (nicht vorhanden)
xph0555x`children?: TreeItem[]`{lang="ts-type"} (nicht vorhanden)
- `onToggle?: (e: TreeItemToggleEvent<TreeItem>) => void`{lang="ts-type"} (nicht vorhanden)
- `onSelect?: (e: TreeItemSelectEvent<TreeItem>) => void`{lang="ts-type"} (nicht vorhanden)
- `class?: any`{lang="ts-type"} (englisch)
- `ui?: { item?: ClassNameValue, itemWithChildren?: ClassNameValue, link?: ClassNameValue, linkLeadingIcon?: ClassNameValue, linkLabel?: ClassNameValue, linkTrailing?: ClassNameValue, linkTrailingIcon?: ClassNameValue, listWithChildren?: ClassNameValue }`{lang="ts-type"} (nicht vorhanden)

::note
Für jedes Item ist eine eindeutige Kennung erforderlich. Die Komponente verwendet die `label`-Prop als Kennung, wenn kein `get-key` angegeben ist. Idealerweise sollten Sie eine `get-key`-Funktionsprop bereitstellen, um eine eindeutige Kennung zurückzugeben. Alternativ können Sie die `labelKey`-Prop verwenden, um anzugeben, welche Eigenschaft als eindeutige Kennung verwendet werden soll.
::

::component-code
---
collapse: true
hide:
  - class
ignore:
  - items
external:
  - items
externalTypes:
  - TreeItem[]
props:
  items:
    - label: 'app/'
      defaultExpanded: true
      children:
        - label: 'composables/'
          children:
            - label: 'useAuth.ts'
              icon: 'i-vscode-icons-file-type-typescript'
            - label: 'useUser.ts'
              icon: 'i-vscode-icons-file-type-typescript'
        - label: 'components/'
          defaultExpanded: true
          children:
            - label: 'Card.vue'
              icon: 'i-vscode-icons-file-type-vue'
            - label: 'Button.vue'
              icon: 'i-vscode-icons-file-type-vue'
    - label: 'app.vue'
      icon: 'i-vscode-icons-file-type-vue'
    - label: 'nuxt.config.ts'
      icon: 'i-vscode-icons-file-type-nuxt'
  class: 'w-60'
---
::

### multiple-mehrfache

Verwenden Sie die `multiple`-Prop, um mehrere Elemente auszuwählen.

::component-code
---
collapse: true
hide:
  - class
ignore:
  - items
external:
  - items
externalTypes:
  - TreeItem[]
props:
  multiple: true
  items:
    - label: 'app/'
      defaultExpanded: true
      children:
        - label: 'composables/'
          children:
            - label: 'useAuth.ts'
              icon: 'i-vscode-icons-file-type-typescript'
            - label: 'useUser.ts'
              icon: 'i-vscode-icons-file-type-typescript'
        - label: 'components/'
          defaultExpanded: true
          children:
            - label: 'Card.vue'
              icon: 'i-vscode-icons-file-type-vue'
            - label: 'Button.vue'
              icon: 'i-vscode-icons-file-type-vue'
    - label: 'app.vue'
      icon: 'i-vscode-icons-file-type-vue'
    - label: 'nuxt.config.ts'
      icon: 'i-vscode-icons-file-type-nuxt'
  class: 'w-60'
---
::

### Geschachtelt: badge{label="4.1+" class="align-text-top"}

Verwenden Sie die `nested`-prop, um zu steuern, ob der Baum mit verschachtelten Strukturen oder als flache Liste gerendert wird.

::component-code
---
collapse: true
hide:
  - class
ignore:
  - items
external:
  - items
externalTypes:
  - TreeItem[]
props:
  nested: false
  items:
    - label: 'app/'
      defaultExpanded: true
      children:
        - label: 'composables/'
          children:
            - label: 'useAuth.ts'
              icon: 'i-vscode-icons-file-type-typescript'
            - label: 'useUser.ts'
              icon: 'i-vscode-icons-file-type-typescript'
        - label: 'components/'
          defaultExpanded: true
          children:
            - label: 'Card.vue'
              icon: 'i-vscode-icons-file-type-vue'
            - label: 'Button.vue'
              icon: 'i-vscode-icons-file-type-vue'
    - label: 'app.vue'
      icon: 'i-vscode-icons-file-type-vue'
    - label: 'nuxt.config.ts'
      icon: 'i-vscode-icons-file-type-nuxt'
  class: 'w-60'
---
::

::note{to="#with-virtualization"}
Wenn `nested` `false` ist, werden alle Elemente auf der gleichen Ebene mit Einrückung gerendert, um die Hierarchie anzuzeigen.
::

### Color (englisch)

Verwenden Sie die `color`-Stütze, um die Farbe des Baumes zu ändern.

::component-code
---
collapse: true
hide:
  - class
ignore:
  - items
external:
  - items
externalTypes:
  - TreeItem[]
props:
  color: neutral
  items:
    - label: 'app/'
      defaultExpanded: true
      children:
        - label: 'composables/'
          children:
            - label: 'useAuth.ts'
              icon: 'i-vscode-icons-file-type-typescript'
            - label: 'useUser.ts'
              icon: 'i-vscode-icons-file-type-typescript'
        - label: 'components/'
          defaultExpanded: true
          children:
            - label: 'Card.vue'
              icon: 'i-vscode-icons-file-type-vue'
            - label: 'Button.vue'
              icon: 'i-vscode-icons-file-type-vue'
    - label: 'app.vue'
      icon: 'i-vscode-icons-file-type-vue'
    - label: 'nuxt.config.ts'
      icon: 'i-vscode-icons-file-type-nuxt'
  class: 'w-60'
---
::

### size

Verwenden Sie die `size`-Stütze, um die Größe des Baums zu ändern.

::component-code
---
collapse: true
hide:
  - class
ignore:
  - items
external:
  - items
externalTypes:
  - TreeItem[]
props:
  size: xl
  items:
    - label: 'app/'
      defaultExpanded: true
      children:
        - label: 'composables/'
          children:
            - label: 'useAuth.ts'
              icon: 'i-vscode-icons-file-type-typescript'
            - label: 'useUser.ts'
              icon: 'i-vscode-icons-file-type-typescript'
        - label: 'components/'
          defaultExpanded: true
          children:
            - label: 'Card.vue'
              icon: 'i-vscode-icons-file-type-vue'
            - label: 'Button.vue'
              icon: 'i-vscode-icons-file-type-vue'
    - label: 'app.vue'
      icon: 'i-vscode-icons-file-type-vue'
    - label: 'nuxt.config.ts'
      icon: 'i-vscode-icons-file-type-nuxt'
  class: 'w-60'
---
::

### Trailing Icon (englisch)

Verwenden Sie die `trailing-icon`-Prop, um die nachlaufende [Icon](/docs/components/icon) eines übergeordneten Knotens anzupassen.

::note
Wenn für ein Element ein Symbol angegeben ist, hat es immer Vorrang vor diesen Requisiten.
::

::component-code
---
collapse: true
hide:
  - class
ignore:
  - items
external:
  - items
externalTypes:
  - TreeItem[]
props:
  trailingIcon: 'i-lucide-arrow-down'
  items:
    - label: 'app/'
      defaultExpanded: true
      children:
        - label: 'composables/'
          trailingIcon: 'i-lucide-chevron-down'
          children:
            - label: 'useAuth.ts'
              icon: 'i-vscode-icons-file-type-typescript'
            - label: 'useUser.ts'
              icon: 'i-vscode-icons-file-type-typescript'
        - label: 'components/'
          defaultExpanded: true
          children:
            - label: 'Card.vue'
              icon: 'i-vscode-icons-file-type-vue'
            - label: 'Button.vue'
              icon: 'i-vscode-icons-file-type-vue'
    - label: 'app.vue'
      icon: 'i-vscode-icons-file-type-vue'
    - label: 'nuxt.config.ts'
      icon: 'i-vscode-icons-file-type-nuxt'
  class: 'w-60'
---
::

::framework-only
#nuxt
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
Sie können dieses Symbol global in Ihrem `app.config.ts` unter dem `ui.icons.chevronDown`-Schlüssel anpassen.
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
Sie können dieses Symbol global in Ihrem `vite.config.ts` unter dem `ui.icons.chevronDown`-Schlüssel anpassen.
:::
::

### Expanded Icon (englisch)

Verwenden Sie die `expanded-icon`-und `collapsed-icon`-Requisiten, um die Symbole eines übergeordneten Knotens anzupassen, wenn er erweitert oder reduziert wird.

::component-code
---
collapse: true
hide:
  - class
ignore:
  - items
external:
  - items
externalTypes:
  - TreeItem[]
props:
  expandedIcon: 'i-lucide-book-open'
  collapsedIcon: 'i-lucide-book'
  items:
    - label: 'app/'
      defaultExpanded: true
      children:
        - label: 'composables/'
          children:
            - label: 'useAuth.ts'
              icon: 'i-vscode-icons-file-type-typescript'
            - label: 'useUser.ts'
              icon: 'i-vscode-icons-file-type-typescript'
        - label: 'components/'
          defaultExpanded: true
          children:
            - label: 'Card.vue'
              icon: 'i-vscode-icons-file-type-vue'
            - label: 'Button.vue'
              icon: 'i-vscode-icons-file-type-vue'
    - label: 'app.vue'
      icon: 'i-vscode-icons-file-type-vue'
    - label: 'nuxt.config.ts'
      icon: 'i-vscode-icons-file-type-nuxt'
  class: 'w-60'
---
::

::framework-only
#nuxt
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
Sie können diese Symbole global in Ihrem `app.config.ts` unter `ui.icons.folder` und `ui.icons.folderOpen` Tasten anpassen.
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
Sie können diese Symbole global in Ihrem `vite.config.ts` unter `ui.icons.folder` und `ui.icons.folderOpen` Tasten anpassen.
:::
::

### Disabled (nicht verfügbar)

Verwenden Sie die `disabled`-Prop, um jede Benutzerinteraktion mit dem Baum zu verhindern.

::component-code
---
collapse: true
hide:
  - class
ignore:
  - items
external:
  - items
externalTypes:
  - TreeItem[]
props:
  disabled: true
  items:
    - label: 'app'
      icon: 'i-lucide-folder'
      defaultExpanded: true
      children:
        - label: 'composables'
          icon: 'i-lucide-folder'
          children:
            - label: 'useAuth.ts'
              icon: 'i-vscode-icons-file-type-typescript'
            - label: 'useUser.ts'
              icon: 'i-vscode-icons-file-type-typescript'
        - label: 'components'
          icon: 'i-lucide-folder'
          children:
            - label: 'Home'
              icon: 'i-lucide-folder'
              children:
                - label: 'Card.vue'
                  icon: 'i-vscode-icons-file-type-vue'
                - label: 'Button.vue'
                  icon: 'i-vscode-icons-file-type-vue'
    - label: 'app.vue'
      icon: 'i-vscode-icons-file-type-vue'
    - label: 'nuxt.config.ts'
      icon: 'i-vscode-icons-file-type-nuxt'
  class: 'w-60'
---
::

::note
Sie können auch einzelne Elemente mit `item.disabled` deaktivieren.
::

## Examples [Bearbeiten]

### Control selected item (s) Ausgewähltes Element

Sie können das/die ausgewählte (n) Element (e) mit der `default-value`-prop-oder der `v-model`-Anweisung steuern.

::component-example
---
name: 'tree-model-value-example'
collapse: true
props:
  class: 'w-60'
---
::

::tip
Verwenden Sie die `get-key`-prop, um die Funktion zu ändern, die verwendet wird, um den eindeutigen Schlüssel von jedem Element zu erhalten, wenn ein `v-model` oder `default-value` bereitgestellt wird.
::

Wenn Sie verhindern möchten, dass ein Element ausgewählt wird, können Sie die Eigenschaft `item.onSelect()`{lang="ts-type"} oder das globale Ereignis `select` verwenden:

::component-example
---
name: 'tree-on-select-example'
collapse: true
props:
  class: 'w-60'
---
::

::note
Auf diese Weise können Sie ein übergeordnetes Element erweitern oder verkleinern, ohne es auszuwählen.
::

### Control Erweitertes Element

Sie können die erweiterten Elemente mithilfe der Direktive `default-expanded` prop oder der Direktive `v-model` steuern.

::component-example
---
name: 'tree-expanded-example'
collapse: true
props:
  class: 'w-60'
---
::

Wenn Sie verhindern möchten, dass ein Element erweitert wird, können Sie die Eigenschaft `item.onToggle()`{lang="ts-type"} oder das globale Ereignis `toggle` verwenden:

::component-example
---
name: 'tree-on-toggle-example'
collapse: true
props:
  class: 'w-60'
---
::

::note
Auf diese Weise können Sie ein übergeordnetes Element auswählen, ohne seine untergeordneten Elemente zu erweitern oder zu reduzieren.
::

### With checkbox in items: badge{label="4.1+" class="align-text-top"} (Deutsche Übersetzung)

Verwenden Sie die `multiple`, `propagate-select` und `bubble-select` Requisiten, um die Mehrfachauswahl mit Eltern-Kind-Beziehung und die Ereignisse `select` und `toggle` zu aktivieren, um den ausgewählten und erweiterten Zustand der Elemente zu steuern.

::component-example
---
name: 'tree-checkbox-items-example'
collapse: true
props:
  class: 'w-60'
---
::

::note
In diesem Beispiel wird die `as`-Prop verwendet, um die Elemente von `button` in `div` zu ändern, da die [`Checkbox`](/docs/components/checkbox) auch als `button` gerendert wird.
::

### Mit Drag and Drop: badge{label="4.1+" class="align-text-top"}

Verwenden Sie die [`useSortable`](https://vueuse.org/integrations/useSortable/) composable von [`@vueuse/integrations`](), um Drag & Drop-Funktionalität auf dem Baum zu aktivieren. Diese Integration umschließt [Sortable.js](https://sortablejs.github.io/Sortable/), um ein nahtloses Drag & Drop-Erlebnis zu bieten.

::component-example
---
prettier: true
collapse: true
name: 'tree-drag-and-drop-example'
---
::

::note
In diesem Beispiel wird die `nested`-Prop auf `false` gesetzt, um eine flache Liste von Elementen zu haben, sodass die Elemente per Drag & Drop gezogen werden können.
::

### Virtualisierung: badge{label="4.1+" class="align-text-top"}

Verwenden Sie die `virtualize`-Prop, um die Virtualisierung für große Listen als Boolean oder ein Objekt mit Optionen wie `{ estimateSize: 32, overscan: 12 }` zu aktivieren.

::warning
Wenn die Virtualisierung aktiviert ist, wird die Baumstruktur abgeflacht, ähnlich wie bei der Einstellung der `nested`-Prop auf `false`.
::

::component-example
---
prettier: true
name: 'tree-virtualize-example'
props:
  class: 'w-60'
---
::

### Mit benutzerdefiniertem Slot

Verwenden Sie die `slot`-Eigenschaft, um ein bestimmtes Element anzupassen.

Sie haben Zugriff auf folgende Slots:

- `#{{ item.slot }}-wrapper`{lang="ts-type"} (englisch)
- `#{{ item.slot }}`{lang="ts-type"} (nicht)
- `#{{ item.slot }}-leading`{lang="ts-type"} (nicht)
- `#{{ item.slot }}-label`{lang="ts-type"} (nicht)
- `#{{ item.slot }}-trailing`{lang="ts-type"} (nicht)

::component-example
---
name: 'tree-custom-slot-example'
collapse: true
props:
  class: 'w-60'
---
::

## API (Englisch)

### Props Bearbeiten

:component-props

### Slots (englisch)

:component-slots

### Emits (englisch)

:component-emits

## Theme Bearbeiten

:component-theme

## Changelog (englisch)

:component-changelog
