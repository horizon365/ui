---
description: Eine Reihe von Tab-Panels, die jeweils einzeln angezeigt werden.
category: navigation
keywords:
  - tabbed
  - panels
  - sections
links:
  - label: Tabs sein
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/tabs
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Tabs.vue
---

## Bearbeiten

Verwenden Sie die Tabs-Komponente, um eine Liste von Elementen in Tabs anzuzeigen.

::component-example
---
collapse: true
prettier: true
name: 'tabs-example'
props:
  class: 'w-full'
---
::

### Items Bearbeiten

Verwenden Sie die `items`-prop als Array von Objekten mit den folgenden Eigenschaften:

- `label?: string`{lang="ts-type"} (englisch)
- `icon?: string`{lang="ts-type"} (englisch)
- `avatar?: AvatarProps`{lang="ts-type"} (nicht vorhanden)
- `badge?: string | number | BadgeProps`{lang="ts-type"} (nicht vorhanden)
- `content?: string`{lang="ts-type"} (nicht)
- `value?: string | number`{lang="ts-type"} (Deutsche Ausgabe)
- `disabled?: boolean`{lang="ts-type"} (nicht)
- [`slot?: string`{lang="ts-type"}](#with-custom-slot)
- `class?: any`{lang="ts-type"} (nicht vorhanden)
- `ui?: { trigger?: ClassNameValue, leadingIcon?: ClassNameValue, leadingAvatar?: ClassNameValue, leadingAvatarSize?: ClassNameValue, label?: ClassNameValue, trailingBadge?: ClassNameValue, trailingBadgeSize?: ClassNameValue, content?: ClassNameValue }`{lang="ts-type"} (englisch)

::component-code
---
ignore:
  - items
  - class
external:
  - items
externalTypes:
  - TabsItem[]
props:
  items:
    - label: Account
      icon: 'i-lucide-user'
      content: 'This is the account content.'
    - label: Password
      icon: 'i-lucide-lock'
      content: 'This is the password content.'
  class: 'w-full'
---
::

### Inhalt

Setzen Sie die `content`-prop auf `false`, um die Trigger ohne Panels zu rendern.

::component-code
---
ignore:
  - content
  - items
  - class
external:
  - items
externalTypes:
  - TabsItem[]
props:
  content: false
  items:
    - label: Account
      icon: 'i-lucide-user'
      content: 'This is the account content.'
    - label: Password
      icon: 'i-lucide-lock'
      content: 'This is the password content.'
  class: 'w-full'
---
::

### Unmount (nicht einhängen)

Verwenden Sie die `unmount-on-hide`-Prop, um zu verhindern, dass der Inhalt beim Zusammenklappen der Tabs nicht mehr eingehängt wird. Standardmäßig ist `true`.

::component-code
---
ignore:
  - content
  - items
  - class
external:
  - items
externalTypes:
  - TabsItem[]
props:
  unmountOnHide: false
  items:
    - label: Account
      icon: 'i-lucide-user'
      content: 'This is the account content.'
    - label: Password
      icon: 'i-lucide-lock'
      content: 'This is the password content.'
  class: 'w-full'
---
::

::note
Sie können das DOM inspizieren, um zu sehen, wie der Inhalt jedes Elements gerendert wird.
::

### Color (englisch)

Verwenden Sie die `color` prop, um die Farbe der Tabs zu ändern.

::component-code
---
ignore:
  - content
  - items
  - class
external:
  - items
externalTypes:
  - TabsItem[]
props:
  color: neutral
  content: false
  items:
    - label: Account
    - label: Password
  class: 'w-full'
---
::

### Variant Bearbeiten

Verwenden Sie die `variant` prop, um die Variante der Tabs zu ändern.

::component-code
---
ignore:
  - content
  - items
  - class
external:
  - items
externalTypes:
  - TabsItem[]
props:
  color: neutral
  variant: link
  content: false
  items:
    - label: Account
    - label: Password
  class: 'w-full'
---
::

### Size

Verwenden Sie die `size`-Prop, um die Größe der Tabs zu ändern.

::component-code
---
ignore:
  - content
  - items
  - class
external:
  - items
externalTypes:
  - TabsItem[]
props:
  size: md
  variant: pill
  content: false
  items:
    - label: Account
    - label: Password
  class: 'w-full'
---
::

### Orientierung.

Verwenden Sie die `orientation`-prop, um die Ausrichtung der Tabs. Defaults auf `horizontal` zu ändern.

::component-code
---
ignore:
  - content
  - items
  - class
external:
  - items
externalTypes:
  - TabsItem[]
props:
  orientation: vertical
  variant: pill
  content: false
  items:
    - label: Account
    - label: Password
  class: 'w-full'
---
::

## Beispiele

### Control Aktiver Eintrag

Sie können das aktive Element steuern, indem Sie die `default-value`-prop oder die `v-model`-Direktive mit dem `value` des Elements verwenden. Wenn kein `value` angegeben ist, wird standardmäßig der Index **as ein string** verwendet.

:component-example{name="tabs-model-value-example"}

::tip
Verwenden Sie die `value-key`-Prop, um den Schlüssel zu ändern, mit dem Elemente übereinstimmen, wenn ein `v-model` oder `default-value` bereitgestellt wird.
::

### With Route Query (Routenabfrage)

Sie können das aktive Element durch einen URL-Abfrageparameter steuern, wobei `route.query.tab` als `value` des Elements verwendet wird.

:component-example{name="tabs-route-query-example"}

### With Inhalts-Slot

Verwenden Sie den `#content`-Slot, um den Inhalt jedes Elements anzupassen.

:component-example{name="tabs-content-slot-example"}

### Mit unterer Tab-Leiste

Verwenden Sie die `ui`-Prop, um die Tabs in eine untere Tab-Leiste im mobilen Stil mit Symbolen und kleinen Labels zu verwandeln, ähnlich wie bei YouTube oder Instagram.

::component-example
---
collapse: true
name: 'tabs-bottom-tab-bar-example'
---
::

### Mit benutzerdefiniertem Slot

Verwenden Sie die `slot`-Eigenschaft, um ein bestimmtes Element anzupassen.

Sie haben Zugriff auf folgende Slots:

- `#{{ item.slot }}`{lang="ts-type"} (nicht)

::component-example
---
collapse: true
name: 'tabs-custom-slot-example'
---
::

## API

### Props Bearbeiten

:component-props

### Slots Bearbeiten

:component-slots

### Emits (nicht)

:component-emits

### Expose (englisch)

Beim Zugriff auf die Komponente über eine Template-Referenz können Sie Folgendes verwenden:

| Vorname| Typ|
| ---- | ---- |
| `triggersRef`{lang="ts-type"} nicht| `Ref<ComponentPublicInstance[]>`{lang="ts-type"} Übersetzung|

## Theme Bearbeiten

:component-theme

## Changelog (deutsch)

:component-changelog
