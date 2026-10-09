---
title: Author sein
description: 'Ein anpassbares Formular zum Erstellen von Login-, Registrierungs-oder Passwort-Rücksetzformularen.'
category: page
links:
  - label: Formen
    to: /docs/components/form
    icon: i-simple-icons-nuxtdotjs
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/AuthForm.vue
---

## Bearbeiten

Aufbauend auf der [Form](/docs/components/form)-Komponente, kann die `AuthForm`-Komponente in Ihren Seiten verwendet oder in eine [PageCard](/docs/components/page-card) eingewickelt werden.

::component-example
---
name: 'auth-form-example'
collapse: true
---
::

### Fields Bearbeiten

Das Formular wird sich selbst auf Basis der `fields`-Prop konstruieren und der Zustand wird intern behandelt.

Verwenden Sie die `fields`-prop als Array von Objekten mit den folgenden Eigenschaften:

- `name: string`{lang="ts-type"} (nicht vorhanden)
- `type: 'checkbox' | 'select' | 'otp' | 'InputHTMLAttributes['type']'`xph0222x (nicht vorhanden)

Jedes Feld muss eine `type`-Eigenschaft enthalten, die die Eingabekomponente und alle zusätzlichen angewendeten Props bestimmt: `checkbox`-Felder verwenden [Checkbox](/docs/components/checkbox#props) props, `select`-Felder verwenden [SelectMenu](/docs/components/select-menu#props) props, `otp`-Felder verwenden [PinInput](/docs/components/pin-input#props) props, `otp` Felder verwenden [PinInputxph036) props, und alle anderen Typen verwenden [Input](/docs/components/input#props)-Props.

Sie können auch jede Eigenschaft der Komponente [FormField](/docs/components/form-field#props) an jedes Feld übergeben.

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

### title Übersetzung

Verwenden Sie die `title`-prop, um den Titel des Formulars festzulegen.

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

xph14xBeschreibung

Verwenden Sie die `description`-prop, um die Beschreibung des Formulars festzulegen.

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

### Icon (nicht)

Verwenden Sie die `icon` prop, um das Symbol des Formulars festzulegen.

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

### Provider für

Verwenden Sie die `providers` prop, um Anbieter zum Formular hinzuzufügen.

Sie können jede Eigenschaft der Komponente [Button](/docs/components/button) übergeben, z. B. `variant`, `color`, `to` usw.

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

Der XPH211xSeparator

Verwenden Sie die `separator`-Prop, um den [Separator](/docs/components/separator) zwischen den Providern und den Feldern anzupassen.

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

Sie können jede Eigenschaft aus der Komponente [Separator](/docs/components/separator#props) übergeben, um sie anzupassen.

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

### submit

Verwenden Sie die `submit`-prop, um die Schaltfläche zum Absenden des Formulars zu ändern.

Sie können jede Eigenschaft der Komponente [Button](/docs/components/button) übergeben, z. B. `variant`, `color`, `to` usw.

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

## Examples (Beispiele)

### Innerhalb einer Seite

Sie können die `AuthForm`-Komponente mit der [PageCard](/docs/components/page-card)-Komponente umschließen, um sie beispielsweise auf einer `login.vue`-Seite anzuzeigen.

::component-example
---
name: 'auth-form-page-example'
collapse: true
---
::

## API

### Props (nicht)

:component-props

::callout{icon="i-simple-icons-mdnwebdocs" to="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form#attributes" target="_blank"}
Diese Komponente unterstützt auch alle nativen `<form>`-HTML-Attribute.
::

### Slots (englisch)

:component-slots

### Emits Bearbeiten

:component-emits

### Expose (englisch)

Sie können auf die typisierte Komponenteninstanz zugreifen (formRef und Status anzeigen), indem Sie [`useTemplateRef`](https://vuejs.org/api/composition-api-helpers.html#usetemplateref) verwenden. Zum Beispiel können Sie in einer separaten Form (z. B. einem "Reset"-Formular) Folgendes tun:

```vue
<script setup lang="ts">
const authForm = useTemplateRef('authForm')
</script>

<template>
  <UAuthForm ref="authForm" />
</template>
```

Dies gibt Ihnen Zugriff auf die folgenden (exponierten) Eigenschaften:

| Vorname| Typen|
| ---- | ---- |
| `formRef`{lang="ts-type"} nicht| `Ref<HTMLFormElement \| null>`{lang="ts-type"} Übersetzung|
| `state`{lang="ts-type"} nicht| `Reactive<FormStateType>`{lang="ts-type"} Bearbeiten|

## Theme Bearbeiten

:component-theme

## Changelog (englisch)

:component-changelog
