---
title: Auteursformulier
description: 'Een aanpasbaar formulier om aanmeldings-, register- of wachtwoordherstelformulieren te maken.'
category: page
links:
  - label: Vorm
    to: /docs/components/form
    icon: i-simple-icons-nuxtdotjs
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/AuthForm.vue
---

## Gebruik

Gebouwd bovenop de [Form](/docs/components/form) component, kan de `AuthForm` component worden gebruikt in uw pagina 's of verpakt in een [PageCard](/docs/components/page-card).

::component-example
---
name: 'auth-form-example'
collapse: true
---
::

### Velden

Het formulier construeert zichzelf op basis van de `fields`-prop en de status wordt intern afgehandeld.

Gebruik de `fields` prop als een array van objecten met de volgende eigenschappen:

- `name: string`{lang="ts-type"}
- `type: 'checkbox' | 'select' | 'otp' | 'InputHTMLAttributes['type']'`{lang="ts-type"}

Elk veld moet een eigenschap `type` bevatten, die de invoercomponent en eventuele aanvullende toegepaste rekwisieten bepaalt: `checkbox`-velden gebruiken [Checkbox](/docs/components/checkbox#props) rekwisieten, `select`-velden gebruiken [SelectMenu](/docs/components/select-menu#props) rekwisieten, `otp`-velden gebruiken 
[PinInput](/docs/components/pin-input#props) rekwisieten en alle andere typen gebruiken [Input](/docs/components/input#props) rekwisieten.

U kunt ook elke eigenschap van de [FormField](/docs/components/form-field#props) component aan elk veld doorgeven.

::component-code
---
prettier: true
ignore:
  - fields
  - class
external:
  - fields
externalTypes:
  - AuthFormField[]
props:
  fields:
    - name: 'email'
      type: 'email'
      label: 'Email'
      placeholder: 'Enter your email'
      required: true
    - name: 'password'
      type: 'password'
      label: 'Password'
      placeholder: 'Enter your password'
      required: true
    - name: 'country'
      type: 'select'
      label: 'Country'
      placeholder: 'Select country'
      items:
        - label: 'United States'
          value: 'us'
        - label: 'France'
          value: 'fr'
        - label: 'United Kingdom'
          value: 'uk'
        - label: 'Australia'
          value: 'au'
    - name: 'otp'
      type: 'otp'
      label: 'OTP'
      length: 6
      placeholder: '○'
    - name: 'remember'
      type: 'checkbox'
      label: 'Remember me'
      description: 'You will be logged in for 30 days.'
  class: 'max-w-sm'
---
::

### Titel

Gebruik de `title` prop om de titel van het formulier in te stellen.

::component-code
---
prettier: true
ignore:
  - fields
  - class
external:
  - fields
externalTypes:
  - AuthFormField[]
props:
  title: 'Login'
  fields:
    - name: 'email'
      type: text
      label: 'Email'
    - name: 'password'
      type: 'password'
      label: 'Password'
  class: 'max-w-md'
---
::

### Beschrijving

Gebruik de `description` prop om de beschrijving van het formulier in te stellen.

::component-code
---
prettier: true
ignore:
  - fields
  - title
  - class
external:
  - fields
externalTypes:
  - AuthFormField[]
props:
  title: 'Login'
  description: 'Enter your credentials to access your account.'
  fields:
    - name: 'email'
      type: text
      label: 'Email'
    - name: 'password'
      type: 'password'
      label: 'Password'
  class: 'max-w-md'
---
::

### Icoon

Gebruik de `icon` prop om het pictogram van het formulier in te stellen.

::component-code
---
prettier: true
ignore:
  - fields
  - title
  - description
  - class
external:
  - fields
externalTypes:
  - AuthFormField[]
props:
  title: 'Login'
  description: 'Enter your credentials to access your account.'
  icon: 'i-lucide-user'
  fields:
    - name: 'email'
      type: text
      label: 'Email'
    - name: 'password'
      type: 'password'
      label: 'Password'
  class: 'max-w-md'
---
::

### Aanbieders

Gebruik de `providers` prop om providers aan het formulier toe te voegen.

U kunt elke eigenschap van de [Button](/docs/components/button) component doorgeven, zoals `variant`, `color`, `to`, enz.

::component-code
---
prettier: true
ignore:
  - fields
  - title
  - description
  - icon
  - providers
  - headerAlign
  - class
external:
  - providers
  - fields
externalTypes:
  - ButtonProps[]
  - AuthFormField[]
props:
  title: 'Login'
  description: 'Enter your credentials to access your account.'
  icon: 'i-lucide-user'
  providers:
    - label: 'Google'
      icon: 'i-simple-icons-google'
      color: 'neutral'
      variant: 'subtle'
    - label: 'GitHub'
      icon: 'i-simple-icons-github'
      color: 'neutral'
      variant: 'subtle'
  fields:
    - name: 'email'
      type: text
      label: 'Email'
    - name: 'password'
      type: 'password'
      label: 'Password'
  class: 'max-w-md'
---
::

### Afscheider

Gebruik de `separator` prop om de [Separator](/docs/components/separator) tussen de providers en de velden aan te passen. Standaard `or`.

::component-code
---
prettier: true
ignore:
  - fields
  - title
  - description
  - icon
  - providers
  - class
external:
  - providers
  - fields
externalTypes:
  - ButtonProps[]
  - AuthFormField[]
props:
  title: 'Login'
  description: 'Enter your credentials to access your account.'
  icon: 'i-lucide-user'
  providers:
    - label: 'Google'
      icon: 'i-simple-icons-google'
      color: 'neutral'
      variant: 'subtle'
    - label: 'GitHub'
      icon: 'i-simple-icons-github'
      color: 'neutral'
      variant: 'subtle'
  fields:
    - name: 'email'
      type: text
      label: 'Email'
    - name: 'password'
      type: 'password'
      label: 'Password'
  separator: 'Providers'
  class: 'max-w-md'
---
::

U kunt elke eigenschap van de [Separator](/docs/components/separator#props) component doorgeven om deze aan te passen.

::component-code
---
prettier: true
ignore:
  - fields
  - title
  - description
  - icon
  - providers
  - class
external:
  - providers
  - fields
externalTypes:
  - ButtonProps[]
  - AuthFormField[]
props:
  title: 'Login'
  description: 'Enter your credentials to access your account.'
  icon: 'i-lucide-user'
  providers:
    - label: 'Google'
      icon: 'i-simple-icons-google'
      color: 'neutral'
      variant: 'subtle'
    - label: 'GitHub'
      icon: 'i-simple-icons-github'
      color: 'neutral'
      variant: 'subtle'
  fields:
    - name: 'email'
      type: text
      label: 'Email'
    - name: 'password'
      type: 'password'
      label: 'Password'
  separator:
    icon: 'i-lucide-user'
  class: 'max-w-md'
---
::

### Verzenden

Gebruik de `submit` prop om de verzendknop van het formulier te wijzigen.

U kunt elke eigenschap van de [Button](/docs/components/button) component zoals `variant`, `color`, `to`, etc.

::component-code
---
prettier: true
ignore:
  - fields
  - title
  - description
  - icon
  - providers
  - submit.label
  - submit.color
  - submit.variant
  - class
external:
  - fields
externalTypes:
  - AuthFormField[]
props:
  title: 'Login'
  description: 'Enter your credentials to access your account.'
  icon: 'i-lucide-user'
  fields:
    - name: 'email'
      type: text
      label: 'Email'
    - name: 'password'
      type: 'password'
      label: 'Password'
  submit:
    label: 'Submit'
    color: 'error'
    variant: 'subtle'
  class: 'max-w-md'
---
::

## Voorbeelden

### Binnen een pagina

U kunt het `AuthForm`-onderdeel omwikkelen met het [PageCard](/docs/components/page-card) -onderdeel om het bijvoorbeeld op een `login.vue`-pagina weer te geven.

::component-example
---
name: 'auth-form-page-example'
collapse: true
---
::

## API

### Voordelen

:component-props

::callout{icon="i-simple-icons-mdnwebdocs" to="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form#attributes" target="_blank"}
Dit onderdeel ondersteunt ook alle native `<form>` HTML-kenmerken.
::

### Slots

:component-slots

### Uitzendt

:component-emits

### Expose

U kunt toegang krijgen tot de getypte componentinstantie (die formRef en status blootlegt) met [`useTemplateRef`](https://vuejs.org/api/composition-api-helpers.html#usetemplateref). In een apart formulier (bijvoorbeeld een "reset" -formulier) kunt u bijvoorbeeld doen:

```vue
<script setup lang="ts">
const authForm = useTemplateRef('authForm')
</script>

<template>
  <UAuthForm ref="authForm" />
</template>
```

Dit geeft u toegang tot de volgende (blootgestelde) eigenschappen:

| Naam | Type |
| ---- | ---- |
| `formRef`{lang="ts-type"} | `Ref<HTMLFormElement \| null>`{lang="ts-type"} |
| `state`{lang="ts-type"} | `Reactive<FormStateType>`{lang="ts-type"} |

## Thema

:component-theme

## Wijzigingsgelog

:component-changelog
