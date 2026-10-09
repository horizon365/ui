---
description: Een invoerelement om tekst in te voeren.
category: form
keywords:
  - text field
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Input.vue
---

## Gebruik

Gebruik de `v-model`-richtlijn om de waarde van de invoer te regelen.

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

### Type

Gebruik de `type` prop om het ingangstype te wijzigen. Standaard ingesteld op `text`.

Sommige typen zijn geïmplementeerd in hun eigen componenten zoals [Checkbox](/docs/components/checkbox), [Radio](/docs/components/radio-group), [InputNumber](/docs/components/input-number) etc. en andere zijn gestyled zoals `file` bijvoorbeeld.

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
U kunt alle beschikbare typen controleren op de MDN-webdocumenten.
::

### Plaatshouder

Gebruik de `placeholder` prop om een tijdelijke aanduiding in te stellen.

::component-code
---
props:
  placeholder: 'Search...'
---
::

### Kleur

Gebruik de `color` prop om de kleur van de ring te wijzigen wanneer de invoer is scherpgesteld.

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
De `highlight` prop wordt hier gebruikt om de focusstatus weer te geven. Het wordt intern gebruikt wanneer er een validatiefout optreedt.
::

### Variant

Gebruik de `variant` prop om de variant van de Input te wijzigen.

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

### Grootte

Gebruik de `size` prop om de grootte van de invoer te wijzigen.

::component-code
---
ignore:
  - placeholder
props:
  size: xl
  placeholder: 'Search...'
---
::

### Icoon

Gebruik de `icon` prop om een [Icon](/docs/components/icon) in de Input te tonen.

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

Gebruik de `leading` en `trailing` rekwisieten om de pictogrampositie in te stellen of de `leading-icon` en `trailing-icon` rekwisieten om voor elke positie een ander pictogram in te stellen.

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

### Avatar

Gebruik de `avatar` prop om een [Avatar](/docs/components/avatar) in de ingang te tonen.

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

### Bezig met laden

Gebruik de `loading` prop om een laadpictogram op de invoer te tonen.

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

### Pictogram laden

Gebruik de `loading-icon` prop om het laadpictogram aan te passen. Standaard `i-lucide-loader-circle`.

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
U kunt dit pictogram globaal aanpassen in uw `app.config.ts` onder `ui.icons.loading`-sleutel.
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
U kunt dit pictogram globaal aanpassen in uw `vite.config.ts` onder `ui.icons.loading`-sleutel.
:::
::

### Uitgeschakeld

Gebruik de `disabled` prop om de invoer uit te schakelen.

::component-code
---
ignore:
  - placeholder
props:
  disabled: true
  placeholder: 'Search...'
---
::

## Voorbeelden

### Met duidelijke knop

U kunt ***** [Button](/docs/components/button) in de `#trailing`-sleuf om de invoer te wissen.

::component-example
---
name: 'input-clear-button-example'
---
::

### Met kopieerknop

U kunt ***** [Button](/docs/components/button) in de `#trailing`-sleuf om de waarde naar het klembord te kopiëren.

::component-example
---
name: 'input-copy-button-example'
---
::

### Met wachtwoord wisselen

U kunt ***** [Button](/docs/components/button) in de `#trailing`-sleuf om de zichtbaarheid van het wachtwoord te wijzigen.

::component-example
---
name: 'input-password-toggle-example'
---
::

### Met wachtwoord sterkte indicator

U kunt de [Progress](/docs/components/progress) gebruiken om de indicator voor wachtwoordsterkte weer te geven.

::component-example
---
collapse: true
name: 'input-password-strength-indicator-example'
---
::

### Met tekenlimiet

U kunt de `#trailing`-sleuf gebruiken om een tekenlimiet aan de invoer toe te voegen.

::component-example
---
name: 'input-character-limit-example'
---
::

### Met sneltoets

U kunt de [Kbd](/docs/components/kbd) in de `#trailing`-sleuf gebruiken om een sneltoets aan de invoer toe te voegen.

::component-example
---
name: 'input-kbd-example'
---
::

::note{to="/docs/composables/define-shortcuts"}
In dit voorbeeld wordt de `defineShortcuts` composable gebruikt om de invoer scherp te stellen wanneer de toets: kbd{value="/"} wordt ingedrukt.
::

### Met masker

Er is geen ingebouwde ondersteuning voor maskers, maar u kunt bibliotheken zoals [maska](https://github.com/beholdr/maska) gebruiken om de invoer te maskeren.

::component-example
---
name: 'input-mask-example'
---
::

### Met drijvend etiket

U kunt de `#default`-sleuf gebruiken om een zwevend label aan de invoer toe te voegen.

::component-example
---
name: 'input-floating-label-example'
---
::

### Binnen een FormField

U kunt de invoer binnen een [FormField](/docs/components/form-field) gebruiken om een label, helptekst, vereiste indicator, enz. Te tonen.

::component-example
---
name: 'input-form-field-example'
---
::

::tip{to="/docs/components/form"}
Het biedt ook validatie en foutafhandeling bij gebruik binnen een **Form**-component.
::

### Binnen een FieldGroup

U kunt de invoer binnen een [FieldGroup](/docs/components/field-group) component gebruiken om meerdere elementen samen te groeperen.

::component-example
---
name: 'input-field-group-example'
---
::

### Als een telefoonnummerinvoer

U kunt de invoer binnen een [FieldGroup](/docs/components/field-group) naast een [SelectMenu](/docs/components/select-menu) gebruiken om een telefoonnummerinvoer te maken met landcodeselectie.

::component-example
---
collapse: true
name: 'input-phone-number-example'
---
::

## API

### Props

:component-props

::callout{icon="i-simple-icons-mdnwebdocs" to="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attributes" target="_blank"}
Dit onderdeel ondersteunt ook alle native `<input>` HTML-kenmerken.
::

### Slots

:component-slots

### Uitzendt

:component-emits

### Expose

Wanneer u de component opent via een sjabloonref, kunt u het volgende gebruiken:

| Naam | Type |
| ---- | ---- |
| `inputRef`{lang="ts-type"} | `Ref<HTMLInputElement \| null>`{lang="ts-type"} |

## Thema

:component-theme

## Wijzigingsgelog

:component-changelog
