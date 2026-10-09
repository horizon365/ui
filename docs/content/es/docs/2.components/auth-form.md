---
title: Autenticidad
description: 'Un formulario personalizable para crear formularios de inicio de sesión, registro o restablecimiento de contraseña.'
category: page
links:
  - label: forma
    to: /docs/components/form
    icon: i-simple-icons-nuxtdotjs
  - label: GitHub también
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/AuthForm.vue
---

xph0000xUso

Construido sobre el componente [Form](/docs/components/form), el componente `AuthForm` se puede utilizar en sus páginas o envuelto en un [PageCard](/docs/components/page-card).

::component-example
---
name: 'auth-form-example'
collapse: true
---
::

Xph014xCampos

El formulario se construirá a sí mismo basado en el prop `fields` y el estado se manejará internamente.

Utilice el prop `fields` como una matriz de objetos con las siguientes propiedades:

xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
- x`type: 'checkbox' | 'select' | 'otp' | 'InputHTMLAttributes['type']'`xx{lang="ts-type"}

Cada campo debe incluir una propiedad `type`, que determina el componente de entrada y cualquier accesorio adicional aplicado: Los campos `checkbox` usan props [Checkbox](/docs/components/checkbox#props), los campos `select` usan props [SelectMenu](xph0333), los campos `otp` usan props [PinInput](/docs/components/pin-input#props), y todos los demás tipos usan props [Input](/docs/components/input#props).

También puede pasar cualquier propiedad del componente [FormField](/docs/components/form-field#props) a cada campo.

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

### Títulos

Utilice el prop `title` para establecer el título del formulario.

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

Xph114xDescripción

Utilice el prop `description` para establecer la descripción del formulario.

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

### Icon

Utilice el prop `icon` para configurar el icono del formulario.

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

### Proveedores

Utilice el prop `providers` para agregar proveedores al formulario.

Puede pasar cualquier propiedad del componente [Button](/docs/components/button) como `variant`, `color`, `to`, etc.

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

### Separador

Utilice el prop `separator` para personalizar el [Separator](/docs/components/separator) entre los proveedores y los campos.

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

Puede pasar cualquier propiedad del componente [Separator](/docs/components/separator#props) para personalizarlo.

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

### Submit (Edición española)

Utilice el prop `submit` para cambiar el botón de envío del formulario.

Puede pasar cualquier propiedad desde el componente [Button](/docs/components/button) como `variant`, `color`, `to`, etc.

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

## Ejemplos

### Dentro de una página

Puede envolver el componente `AuthForm` con el componente [PageCard](/docs/components/page-card) para mostrarlo dentro de una página `login.vue`, por ejemplo.

::component-example
---
name: 'auth-form-page-example'
collapse: true
---
::

## API (Edición española)

### Props (accesorios)

:component-props

::callout{icon="i-simple-icons-mdnwebdocs" to="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form#attributes" target="_blank"}
Este componente también admite todos los atributos HTML nativos de `<form>`.
::

### Slots en línea

:component-slots

### Emisiones

:component-emits

### Exposición

Puede acceder a la instancia del componente escrito (exponiendo formRef y estado) usando [`useTemplateRef`](https://vuejs.org/api/composition-api-helpers.html#usetemplateref). Por ejemplo, en un formulario separado (por ejemplo, un formulario de "restablecimiento") puede hacer:

```vue
<script setup lang="ts">
const authForm = useTemplateRef('authForm')
</script>

<template>
  <UAuthForm ref="authForm" />
</template>
```

Esto le da acceso a las siguientes propiedades (expuestas):

| Nombre| Tipo|
| ---- | ---- |
| `formRef`x{lang="ts-type"}| `Ref<HTMLFormElement \| null>`x{lang="ts-type"}|
| `state`x{lang="ts-type"} (Edición española)| `Reactive<FormStateType>`x{lang="ts-type"} (Edición española)|

## Temas

:component-theme

## Changelog (Edición española)

:component-changelog
