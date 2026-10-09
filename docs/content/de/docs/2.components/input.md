---
description: Ein Eingabeelement zum Eingeben von Text.
category: form
keywords:
  - text field
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Input.vue
---

## Bearbeiten

Verwenden Sie die `v-model`-Direktive, um den Wert der Eingabe zu steuern.

::component-code
---
ignore:
  - modelValue
external:
  - modelValue
props:
  modelValue: ''
---
::

### type ist

Verwenden Sie die `type`-prop, um den Eingabetyp zu ändern. Standardmäßig ist `text`.

Einige Typen wurden in ihren eigenen Komponenten implementiert, wie z.B. [Checkbox](/docs/components/checkbox), [Radio](/docs/components/radio-group), [InputNumber](/docs/components/input-number) usw. und andere wurden wie z.B. `file` gestaltet.

::component-code
---
items:
  type:
    - text
    - number
    - password
    - search
    - file
props:
  type: 'file'
---
::

::callout{icon="i-simple-icons-mdnwebdocs" to="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#input_types" target="_blank"}
Sie können alle verfügbaren Typen auf den MDN Web Docs überprüfen.
::

### Placeholder (englisch)

Verwenden Sie die `placeholder`-Prop, um einen Platzhaltertext festzulegen.

::component-code
---
props:
  placeholder: 'Search...'
---
::

### Color (englisch)

Verwenden Sie die `color`-prop, um die Ringfarbe zu ändern, wenn der Eingang fokussiert ist.

::component-code
---
ignore:
  - placeholder
props:
  color: neutral
  highlight: true
  placeholder: 'Search...'
---
::

::note
Die `highlight`-prop wird hier verwendet, um den Fokuszustand anzuzeigen. Es wird intern verwendet, wenn ein Validierungsfehler auftritt.
::

### Variant Übersetzung

Verwenden Sie die `variant`-prop, um die Variante des Eingangs zu ändern.

::component-code
---
ignore:
  - placeholder
props:
  color: neutral
  variant: subtle
  highlight: false
  placeholder: 'Search...'
---
::

### Size

Verwenden Sie die `size`-prop, um die Größe des Eingangs zu ändern.

::component-code
---
ignore:
  - placeholder
props:
  size: xl
  placeholder: 'Search...'
---
::

### Icon (englisch)

Verwenden Sie die `icon`-Prop, um ein [Icon](/docs/components/icon) innerhalb der Eingabe anzuzeigen.

::component-code
---
prettier: true
ignore:
  - placeholder
props:
  icon: 'i-lucide-search'
  size: md
  variant: outline
  placeholder: 'Search...'
---
::

Verwenden Sie die `leading`-und `trailing`-Requisiten, um die Symbolposition festzulegen, oder die `leading-icon`-und `trailing-icon`-Requisiten, um für jede Position ein anderes Symbol festzulegen.

::component-code
---
prettier: true
ignore:
  - placeholder
props:
  trailingIcon: i-lucide-at-sign
  placeholder: 'Enter your email'
  size: md
---
::

### Avatar (englisch)

Verwenden Sie die `avatar`-Prop, um ein [Avatar](/docs/components/avatar) innerhalb des Eingangs anzuzeigen.

::component-code
---
prettier: true
ignore:
  - placeholder
  - avatar.loading
props:
  avatar:
    src: 'https://github.com/nuxt.png'
    loading: lazy
  size: md
  variant: outline
  placeholder: 'Search...'
---
::

### Loading (englisch)

Verwenden Sie die `loading` prop, um ein Ladesymbol auf der Eingabe anzuzeigen.

::component-code
---
ignore:
  - placeholder
props:
  loading: true
  trailing: false
  placeholder: 'Search...'
---
::

### Loading Icon (englisch)

Verwenden Sie die `loading-icon`-prop, um das Ladesymbol anzupassen. Standardmäßig ist `i-lucide-loader-circle`.

::component-code
---
ignore:
  - placeholder
props:
  loading: true
  loadingIcon: 'i-lucide-loader'
  placeholder: 'Search...'
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

Verwenden Sie die `disabled`-prop, um die Eingabe zu deaktivieren.

::component-code
---
ignore:
  - placeholder
props:
  disabled: true
  placeholder: 'Search...'
---
::

## Examples (Beispiele)

### Mit Clear-Taste

Sie können einen [Button](/docs/components/button) in den `#trailing`-Steckplatz stecken, um die Eingabe zu löschen.

::component-example
---
name: 'input-clear-button-example'
---
::

### Mit Copy-Button

Sie können einen [Button](/docs/components/button) in den `#trailing`-Steckplatz einfügen, um den Wert in die Zwischenablage zu kopieren.

::component-example
---
name: 'input-copy-button-example'
---
::

### Mit Passwort umschalten

Sie können einen [Button](/docs/components/button) in den `#trailing`-Steckplatz einfügen, um die Sichtbarkeit des Kennworts zu ändern.

::component-example
---
name: 'input-password-toggle-example'
---
::

### Mit Kennwortstärke-Anzeige

Sie können die Komponente [Progress](/docs/components/progress) verwenden, um die Kennwortstärkeanzeige anzuzeigen.

::component-example
---
collapse: true
name: 'input-password-strength-indicator-example'
---
::

### With character limit (Zeichenbegrenzung)

Sie können den `#trailing`-Steckplatz verwenden, um der Eingabe eine Zeichenbegrenzung hinzuzufügen.

::component-example
---
name: 'input-character-limit-example'
---
::

### With Tastaturkürzel

Sie können die [Kbd](/docs/components/kbd)-Komponente im `#trailing`-Steckplatz verwenden, um der Eingabe eine Tastenkombination hinzuzufügen.

::component-example
---
name: 'input-kbd-example'
---
::

::note{to="/docs/composables/define-shortcuts"}
In diesem Beispiel wird das Composable `defineShortcuts` verwendet, um die Eingabe zu fokussieren, wenn die: kbd{value="/"}-Taste gedrückt wird.
::

### With Maske

Es gibt keine eingebaute Unterstützung für Masken, aber Sie können Bibliotheken wie [maska](https://github.com/beholdr/maska) verwenden, um die Eingabe zu maskieren.

::component-example
---
name: 'input-mask-example'
---
::

### Mit Floating-Label

Sie können den `#default`-Steckplatz verwenden, um dem Eingang ein Floating-Label hinzuzufügen.

::component-example
---
name: 'input-floating-label-example'
---
::

### Innerhalb eines Formularfelds

Sie können die Eingabe innerhalb einer [FormField](/docs/components/form-field)-Komponente verwenden, um eine Beschriftung, einen Hilfetext, eine erforderliche Anzeige usw. anzuzeigen.

::component-example
---
name: 'input-form-field-example'
---
::

::tip{to="/docs/components/form"}
Es bietet auch Validierung und Fehlerbehandlung, wenn es in einer **Form**-Komponente verwendet wird.
::

### Innerhalb einer Feldgruppe

Sie können die Eingabe in einer [FieldGroup](/docs/components/field-group)-Komponente verwenden, um mehrere Elemente zusammen zu gruppieren.

::component-example
---
name: 'input-field-group-example'
---
::

### Wie eine Telefonnummer eingeben

Sie können die Eingabe innerhalb einer [FieldGroup](/docs/components/field-group)-Komponente neben einer [SelectMenu](/docs/components/select-menu) verwenden, um eine Rufnummerneingabe mit Ländervorwahl zu erstellen.

::component-example
---
collapse: true
name: 'input-phone-number-example'
---
::

## API

### Props Bearbeiten

:component-props

::callout{icon="i-simple-icons-mdnwebdocs" to="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attributes" target="_blank"}
Diese Komponente unterstützt auch alle nativen `<input>`-HTML-Attribute.
::

### Slots Bearbeiten

:component-slots

### Emits (englisch)

:component-emits

### Expose (englisch)

Beim Zugriff auf die Komponente über eine Template-Referenz können Sie Folgendes verwenden:

| Vorname| Typ|
| ---- | ---- |
| `inputRef`{lang="ts-type"} (englisch)| `Ref<HTMLInputElement \| null>`{lang="ts-type"} nicht|

## Theme Bearbeiten

:component-theme

## Changelog (englisch)

:component-changelog
