---
description: Ein gestapeltes Set von zusammenklappbaren Panels.
category: data
keywords:
  - disclosure
  - collapse
  - faq
  - expansion panel
links:
  - label: Akkordeon
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/accordion
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Accordion.vue
---

## Bearbeiten

Verwenden Sie die Akkordeon-Komponente, um eine Liste zusammenklappbarer Elemente anzuzeigen.

::component-code
---
collapse: true
ignore:
  - items
  - ui.content
external:
  - items
externalTypes:
  - AccordionItem[]
hide:
  - class
  - ui
  - defaultValue
props:
  defaultValue: '0'
  class: 'px-4 max-w-lg'
  ui:
    content: 'text-muted'
  items:
    - label: 'Is Nuxt UI free to use?'
      content: 'Yes! Nuxt UI is completely free and open source under the MIT license. All 125+ components are available to everyone.'
    - label: 'Can I use Nuxt UI with Vue without Nuxt?'
      content: 'Yes! While optimized for Nuxt, Nuxt UI works perfectly with standalone Vue projects via our Vite plugin. You can follow the [installation guide](/docs/getting-started/installation/vue) to get started.'
    - label: 'Is Nuxt UI production-ready?'
      content: 'Yes! Nuxt UI is used in production by thousands of applications with extensive tests, regular updates, and active maintenance.'
---
::

### Items Bearbeiten

Verwenden Sie die `items`-prop als Array von Objekten mit den folgenden Eigenschaften:

- `label?: string`{lang="ts-type"} (nicht vorhanden)
- `icon?: string`{lang="ts-type"} (nicht vorhanden)
- `trailingIcon?: string`{lang="ts-type"} (nicht vorhanden)
- `content?: string`{lang="ts-type"} (nicht vorhanden)
- `value?: string`{lang="ts-type"} (englisch)
- `disabled?: boolean`{lang="ts-type"} (englisch)
- [`slot?: string`{lang="ts-type"}](#with-custom-slot) )
- `class?: any`{lang="ts-type"} (nicht vorhanden)
- `ui?: { item?: ClassNameValue, header?: ClassNameValue, trigger?: ClassNameValue, leadingIcon?: ClassNameValue, label?: ClassNameValue, trailingIcon?: ClassNameValue, content?: ClassNameValue, body?: ClassNameValue }`{lang="ts-type"} (nicht vorhanden)

::component-code
---
ignore:
  - items
external:
  - items
externalTypes:
  - AccordionItem[]
hide:
  - class
props:
  class: 'px-4'
  items:
    - label: 'Icons'
      icon: 'i-lucide-smile'
      content: 'You have nothing to do, @nuxt/icon will handle it automatically.'
    - label: 'Colors'
      icon: 'i-lucide-swatch-book'
      content: 'Choose a primary and a neutral color from your Tailwind CSS theme.'
    - label: 'Components'
      icon: 'i-lucide-box'
      content: 'You can customize components by using the `class` / `ui` props or in your app.config.ts.'
---
::

### Mehrfach

Setzen Sie die `type`-Prop auf `multiple`, damit mehrere Elemente gleichzeitig aktiv sein können.

::component-code
---
ignore:
  - type
  - items
external:
  - items
externalTypes:
  - AccordionItem[]
hide:
  - class
props:
  class: 'px-4'
  type: 'multiple'
  items:
    - label: 'Icons'
      icon: 'i-lucide-smile'
      content: 'You have nothing to do, @nuxt/icon will handle it automatically.'
    - label: 'Colors'
      icon: 'i-lucide-swatch-book'
      content: 'Choose a primary and a neutral color from your Tailwind CSS theme.'
    - label: 'Components'
      icon: 'i-lucide-box'
      content: 'You can customize components by using the `class` / `ui` props or in your app.config.ts.'
---
::

### Collapsible ist ein

Wenn `type` `single` ist, können Sie die `collapsible`-Prop auf `false` setzen, um zu verhindern, dass das aktive Element kollabiert.

::component-code
---
ignore:
  - collapsible
  - items
external:
  - items
externalTypes:
  - AccordionItem[]
hide:
  - class
props:
  class: 'px-4'
  collapsible: false
  items:
    - label: 'Icons'
      icon: 'i-lucide-smile'
      content: 'You have nothing to do, @nuxt/icon will handle it automatically.'
    - label: 'Colors'
      icon: 'i-lucide-swatch-book'
      content: 'Choose a primary and a neutral color from your Tailwind CSS theme.'
    - label: 'Components'
      icon: 'i-lucide-box'
      content: 'You can customize components by using the `class` / `ui` props or in your app.config.ts.'
---
::

### Unmount ist ein

Verwenden Sie die `unmount-on-hide`-Stütze, um zu verhindern, dass der Inhalt beim Zusammenklappen des Akkordeons abgehängt wird. Standardmäßig ist `true`.

::component-code
---
ignore:
  - items
external:
  - items
externalTypes:
  - AccordionItem[]
hide:
  - class
props:
  class: 'px-4'
  unmountOnHide: false
  items:
    - label: 'Icons'
      icon: 'i-lucide-smile'
      content: 'You have nothing to do, @nuxt/icon will handle it automatically.'
    - label: 'Colors'
      icon: 'i-lucide-swatch-book'
      content: 'Choose a primary and a neutral color from your Tailwind CSS theme.'
    - label: 'Components'
      icon: 'i-lucide-box'
      content: 'You can customize components by using the `class` / `ui` props or in your app.config.ts.'
---
::

::note
Sie können das DOM inspizieren, um zu sehen, wie der Inhalt jedes Elements gerendert wird.
::

### Disabled (nicht verfügbar)

Verwenden Sie die `disabled`-Eigenschaft, um das Akkordeon zu deaktivieren.

Sie können auch ein bestimmtes Element deaktivieren, indem Sie die Eigenschaft `disabled` im Objekt item verwenden.

::component-code
---
ignore:
  - items
external:
  - items
externalTypes:
  - AccordionItem[]
hide:
  - class
props:
  class: 'px-4'
  disabled: true
  items:
    - label: 'Icons'
      icon: 'i-lucide-smile'
      content: 'You have nothing to do, @nuxt/icon will handle it automatically.'
    - label: 'Colors'
      icon: 'i-lucide-swatch-book'
      content: 'Choose a primary and a neutral color from your Tailwind CSS theme.'
      disabled: true
    - label: 'Components'
      icon: 'i-lucide-box'
      content: 'You can customize components by using the `class` / `ui` props or in your app.config.ts.'
---
::

### Trailing-Symbol

Verwenden Sie die `trailing-icon`-Prop, um die nachlaufende [Icon](/docs/components/icon) jedes Elements anzupassen.

::tip
Sie können auch ein Symbol für ein bestimmtes Element festlegen, indem Sie die `trailingIcon`-Eigenschaft im item-Objekt verwenden.
::

::component-code
---
ignore:
  - items
external:
  - items
externalTypes:
  - AccordionItem[]
hide:
  - class
props:
  class: 'px-4'
  trailingIcon: 'i-lucide-arrow-down'
  items:
    - label: 'Icons'
      icon: 'i-lucide-smile'
      content: 'You have nothing to do, @nuxt/icon will handle it automatically.'
      trailingIcon: 'i-lucide-plus'
    - label: 'Colors'
      icon: 'i-lucide-swatch-book'
      content: 'Choose a primary and a neutral color from your Tailwind CSS theme.'
    - label: 'Components'
      icon: 'i-lucide-box'
      content: 'You can customize components by using the `class` / `ui` props or in your app.config.ts.'
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

## Examples (Beispiele)

### Control aktive (n) Element (e)

Sie können das aktive Element steuern, indem Sie die `default-value`-prop oder die `v-model`-Direktive mit dem `value` des Elements verwenden. Wenn kein `value` angegeben ist, wird standardmäßig der Index **as ein string** verwendet.

::component-example
---
name: 'accordion-model-value-example'
props:
  class: 'px-4'
---
::

::tip
Verwenden Sie die `value-key`-Prop, um den Schlüssel zu ändern, der für die Übereinstimmung mit Elementen verwendet wird, wenn ein `v-model` oder `default-value` bereitgestellt wird.
::

::caution
Wenn `type="multiple"`, stellen Sie sicher, dass ein Array an die `default-value` prop oder die `v-model` Direktive übergeben wird.
::

### Mit Drag & Drop

Verwenden Sie das aus [`useSortable`](https://vueuse.org/integrations/useSortable/) zusammensetzbare [`@vueuse/integrations`](xph25xhttps://vueuse.org/integrations/README.html), um die Drag-and-Drop-Funktionalität auf dem Accordion zu aktivieren. Diese Integration umschließt [Sortable.js](https://sortablejs.github.io/Sortable/), um ein nahtloses Drag-and-Drop-Erlebnis zu bieten.

::component-example
---
name: 'accordion-drag-and-drop-example'
---
::

### Mit Body Slot

Verwenden Sie den `#body`-Steckplatz, um den Körper jedes Elements anzupassen.

::component-example
---
name: 'accordion-body-slot-example'
props:
  class: 'px-4'
---
::

::tip
Der `#body`-slot enthält einige vordefinierte stile, verwenden sie den [`#content` slot](#with-content-slot), wenn sie von grund auf neu beginnen möchten.
::

### With Inhalts-Slot

Verwenden Sie den `#content`-Steckplatz, um den Inhalt jedes Elements anzupassen.

::component-example
---
name: 'accordion-content-slot-example'
props:
  class: 'px-4'
---
::

### Mit benutzerdefiniertem Slot

Verwenden Sie die `slot`-Eigenschaft, um ein bestimmtes Element anzupassen.

Sie haben Zugriff auf folgende Slots:

- `#{{ item.slot }}`{lang="ts-type"} (englisch)
- `#{{ item.slot }}-body`{lang="ts-type"} (englisch)

::component-example
---
name: 'accordion-custom-slot-example'
props:
  class: 'px-4'
---
::

### With markdown content (mit Markdown-Inhalt)

Sie können die [Markdown](https://comark.dev/rendering/vue)-Komponente von `@comark/vue` verwenden, um Markdown in den Akkordeonelementen darzustellen.

::component-example
---
collapse: true
name: 'accordion-markdown-example'
class: 'px-8'
---
::

## API (Englisch)

### Props (nicht)

:component-props

### Slots Bearbeiten

:component-slots

### Emits (englisch)

:component-emits

## Theme Bearbeiten

:component-theme

## Changelog (englisch)

:component-changelog
