---
title: Authentique
description: 'Un formulaire personnalisable pour créer des formulaires de login, d'enregistrement ou de réinitialisation de mot de passe.'
category: page
links:
  - label: Forme
    to: /docs/components/form
    icon: i-simple-icons-nuxtdotjs
  - label: GitHub à
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/AuthForm.vue
---

## Utilisation

Construit sur le composant [Form](/docs/components/form), le composant `AuthForm` peut être utilisé dans vos pages ou enveloppé dans un [PageCard](/docs/components/page-card).

::component-example
---
name: 'auth-form-example'
collapse: true
---
::

### champs

Le formulaire se construira lui-même sur la base de la prop `fields` et l'état sera géré en interne.

Utilisez le prop `fields` comme tableau d'objets avec les propriétés suivantes:

- x`name: string`xx{lang="ts-type"}
- x`type: 'checkbox' | 'select' | 'otp' | 'InputHTMLAttributes['type']'`x{lang="ts-type"}

Chaque champ doit inclure une propriété `type`, qui détermine le composant d'entrée et tout accessoire supplémentaire appliqué: Les champs `checkbox` utilisent les props [Checkbox](/docs/components/checkbox#props), les champs `select` utilisent les props [SelectMenu](xph0333), les champs `otp` utilisent les props [PinInput](/docs/components/pin-input#props), et tous les autres types utilisent des accessoires [Input](/docs/components/input#props).

Vous pouvez également passer n'importe quelle propriété du composant [FormField](/docs/components/form-field#props) à chaque champ.

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

### Titre

Utilisez la prop `title` pour définir le titre du formulaire.

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

### Définition

Utilisez la prop `description` pour définir la description du formulaire.

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

### Icône

Utilisez la prop `icon` pour définir l'icône du formulaire.

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

### Fournisseur

Utilisez la prop `providers` pour ajouter des fournisseurs au formulaire.

Vous pouvez passer n'importe quelle propriété du composant [Button](/docs/components/button) telle que `variant`, `color`, `to`, etc.

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

### Séparateur

Utilisez la prop `separator` pour personnaliser le [Separator](/docs/components/separator) entre les fournisseurs et les champs.

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

Vous pouvez passer n'importe quelle propriété du composant [Separator](/docs/components/separator#props) pour le personnaliser.

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

### Soumettre

Utilisez la prop `submit` pour modifier le bouton d'envoi du formulaire.

Vous pouvez passer n'importe quelle propriété du composant [Button](/docs/components/button) telle que `variant`, `color`, `to`, etc.

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

## Exemples

### Dans une page

Vous pouvez envelopper le composant `AuthForm` avec le composant [PageCard](/docs/components/page-card) pour l'afficher dans une page `login.vue` par exemple.

::component-example
---
name: 'auth-form-page-example'
collapse: true
---
::

## API équipement

### Props

:component-props

::callout{icon="i-simple-icons-mdnwebdocs" to="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form#attributes" target="_blank"}
Ce composant prend également en charge tous les attributs HTML natifs `<form>`.
::

### Slots

:component-slots

### Emits

:component-emits

### Expose à

Vous pouvez accéder à l'instance du composant typé (exposant formRef et state) en utilisant [`useTemplateRef`](https://vuejs.org/api/composition-api-helpers.html#usetemplateref). Par exemple, dans un formulaire séparé (par exemple un formulaire "reset"), vous pouvez faire:

```vue
<script setup lang="ts">
const authForm = useTemplateRef('authForm')
</script>

<template>
  <UAuthForm ref="authForm" />
</template>
```

Cela vous donne accès aux propriétés (exposées) suivantes:

| nom| type|
| ---- | ---- |
| `formRef`x{lang="ts-type"}| `Ref<HTMLFormElement \| null>`x{lang="ts-type"}|
| `state`x{lang="ts-type"}| `Reactive<FormStateType>`x{lang="ts-type"}|

## Thème

:component-theme

## Changelog écrit

:component-changelog
