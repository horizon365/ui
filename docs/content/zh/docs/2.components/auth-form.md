---
title: AuthForm
description: '一个可自定义的表单，用于创建登录，注册或密码重置表单。'
category: page
links:
  - label: 形式
    to: /docs/components/form
    icon: i-simple-icons-nuxtdotjs
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/AuthForm.vue
---

## 用法

构建在[Form](/docs/components/form)组件之上，`AuthForm`组件可以在页面中使用，也可以包装在[PageCard](/docs/components/page-card)中。

::component-example
---
name: 'auth-form-example'
collapse: true
---
::

### Fields

Form将基于`fields` prop构造自己，状态将在内部处理。

使用`fields` prop作为具有以下属性的对象数组：

- `name: string`{lang="ts-type"}
- `type: 'checkbox' | 'select' | 'otp' | 'InputHTMLAttributes['type']'`{lang="ts-type"}

每个字段必须包含一个`type`属性，该属性确定输入组件和应用的任何其他属性：`checkbox`字段使用[Checkbox](/docs/components/checkbox#props)道具，`select`字段使用[SelectMenu](/docs/components/select-menu#props)道具，`otp`字段使用[PinInput](/docs/components/pin-input#props)道具，所有其他类型都使用[Input](/docs/components/input#props) props。

还可以将[FormField](/docs/components/form-field#props)组件中的任何属性传递给每个字段。

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

### 标题

使用`title`属性设置窗体的标题。

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

### 说明

使用`description`属性设置表单的描述。

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

使用`icon`属性设置窗体的图标。

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

### 提供商

使用`providers`属性将提供程序添加到表单中。

您可以从[Button](/docs/components/button)组件传递任何属性，如`variant`、`color`、`to`等。

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

### Separator

使用`separator` prop自定义提供程序和字段之间的[Separator](/docs/components/separator)。

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

您可以从[Separator](/docs/components/separator#props)组件传递任何属性来对其进行自定义。

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

### 提交

使用`submit`属性更改表单的提交按钮。

您可以从[Button](/docs/components/button)组件传递任何属性，如`variant`、`color`、`to`等。

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

## 示例

### 页面内

例如，您可以使用[PageCard](/docs/components/page-card)组件包装`AuthForm`组件，以便在`login.vue`页面中显示它。

::component-example
---
name: 'auth-form-page-example'
collapse: true
---
::

## API

### Props

:component-props

::callout{icon="i-simple-icons-mdnwebdocs" to="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form#attributes" target="_blank"}
此组件还支持所有原生`<form>` HTML属性。
::

### Slots

:component-slots

### Emits

:component-emits

### 曝光

您可以使用[`useTemplateRef`](https://vuejs.org/api/composition-api-helpers.html#usetemplateref)访问类型化组件实例（暴露formRef和状态）。例如，在单独的表单（例如“重置”表单）中，您可以执行以下操作：

```vue
<script setup lang="ts">
const authForm = useTemplateRef('authForm')
</script>

<template>
  <UAuthForm ref="authForm" />
</template>
```

这使您可以访问以下（公开的）属性：

| 名称|类型|
| ---- | ---- |
| `formRef`{lang="ts-type"}| `Ref<HTMLFormElement \| null>`{lang="ts-type"}|
| `state`{lang="ts-type"}| `Reactive<FormStateType>`{lang="ts-type"}|

## Theme

:component-theme

## Changelog

:component-changelog
