---
description: 具有内置验证和提交处理功能的表单组件。
category: form
keywords:
  - validation
  - schema
  - submit
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Form.vue
---

## 用法

使用Form组件可以使用任何支持[标准Schema](https://github.com/standard-schema/standard-schema)的验证库验证表单数据，例如[Valibot](https://github.com/fabian-hiller/valibot)、[Zod](https://github.com/colinhacks/zod)、[Regle](https://github.com/victorgarciaesgi/regle)、[Yup](https://github.com/jquense/yup)、[Joi](https://github.com/hapijs/joi)或[Superstruct](https://github.com/ianstormtaylor/superstruct)或您自己的验证逻辑。

它与[FormField](/docs/components/form-field)组件一起工作，自动在表单元素周围显示错误消息。

### Schema验证

它需要两个道具：

- `state`-一个反应对象，保存表单的状态。
- `schema`-任何[标准架构a](https://github.com/standard-schema/standard-schema)或[Superstruct](https://github.com/ianstormtaylor/superstruct)。

::warning
**默认不包含验证库**，请确保**安装您需要的**。
::

::tabs{class="gap-0"}
  ::component-example{label="瓦利博特"}
  ---
  name: 'form-example-valibot'
  props:
    class: 'w-60'
  ---
  ::

  ::component-example{label="佐德"}
  ---
  name: 'form-example-zod'
  props:
    class: 'w-60'
  ---
  ::

  ::component-example{label="雷格勒"}
  ---
  name: 'form-example-regle'
  props:
    class: 'w-60'
  ---
  ::

  ::component-example{label="是的"}
  ---
  name: 'form-example-yup'
  props:
    class: 'w-60'
  ---
  ::

  ::component-example{label="Joi"}
  ---
  name: 'form-example-joi'
  props:
    class: 'w-60'
  ---
  ::

  ::component-example{label="Superstruct"}
  ---
  name: 'form-example-superstruct'
  props:
    class: 'w-60'
  ---
  ::
::

### 自定义验证

使用`validate` prop应用您自己的验证逻辑。

验证函数必须返回具有以下属性的错误列表：

- `message`-要显示的错误消息。
- `name`-`FormField`的`name`发送错误。

::tip
它可以与`schema` prop一起使用，以处理复杂的用例。
::

::component-example
---
name: 'form-example-basic'
props:
  class: 'w-60'
---
::

### 错误报告

使用`name`属性将错误与相应的[FormField](/docs/components/form-field)匹配。`email`字段上的错误显示为`<FormField name="email">`{lang="vue"}。

嵌套字段使用点表示法匹配。类似`{ user: z.object({ email: z.string() }) }`{lang="ts"}的模式将应用于`<FormField name="user.email">`{lang="vue"}。

::warning
数组项上的错误包括其名称中的索引（例如`tags.0`，`tags.1`），并且不会单独通过`name`匹配`<FormField name="tags">`{lang="vue"}。使用`error-pattern`属性和正则表达式（如`/^tags\..+/`{lang="ts"}）来捕获它们。这对于[InputTags](/docs/components/input-tags)等组件特别有用。
::

::component-example
---
name: 'form-example-error-pattern'
props:
  class: 'w-60'
---
::

### 输入事件

Form组件在输入发出`input`、`change`或`blur`事件时自动触发验证。

-  `input`上的验证在您键入**时发生**。
-  `change`上的验证发生在您**提交值e**时。
当输入**失去焦点**时，`blur`上的验证发生。

您可以使用`validate-on` prop控制验证何时发生。

::tip
表单始终在提交时生效。
::

::component-example{label="默认"}
---
source: false
name: 'form-example-elements'
options:
  - name: 'validate-on'
    label: 'validate-on'
    items:
    - 'input'
    - 'change'
    - 'blur'
    default:
    - 'input'
    - 'change'
    - 'blur'
    multiple: true
---
::

::tip
您可以使用`useFormField`组合在自己的组件中实现此功能。
::

### Error事件

您可以侦听`@error`事件来处理错误。此事件在表单提交时触发，包含一个`FormError`对象数组，该数组具有以下字段：

- `id`-输入的`id`。
- `name`-`FormField`的`name`
- `message`-要显示的错误消息。

下面是一个例子，它关注表单提交后第一个带有错误的输入元素：

::component-example
---
name: 'form-example-on-error'
collapse: true
props:
  class: 'w-60'
---
::

### HTML 5验证：badge{label="4.5+" class="align-text-top"}

当以编程方式调用`form.submit()`时，Form组件会在提交之前自动触发原生HTML5验证。

::note
当提交按钮位于表单元素之外时，例如在模态页脚中，这一点特别有用。
::

::component-example
---
name: 'form-example-html5-validation'
props:
  class: 'w-60'
---
::

### 嵌套表单

使用`nested`属性嵌套多个表单组件并链接它们的验证函数。在这种情况下，验证父表单将自动验证其中的所有其他表单。

嵌套的表单直接继承父表单的状态，所以你不需要为它们定义一个单独的状态。你可以使用`name` prop在父表单的状态中指定一个嵌套的属性。

它可用于根据用户输入动态添加字段：

::component-example
---
collapse: true
name: 'form-example-nested'
---
::

或者验证列表输入：

::component-example
---
collapse: true
name: 'form-example-nested-list'
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

您可以使用[`useTemplateRef`](https://vuejs.org/api/composition-api-helpers.html#usetemplateref)访问类型化的组件实例。

```vue
<script setup lang="ts">
const form = useTemplateRef('form')
</script>

<template>
  <UForm ref="form" />
</template>
```

这将使您能够访问以下内容：

| 名称|类型|
| ---- | ---- |
| `submit()`{lang="ts-type"}| `Promise<void>`{lang="ts-type"} <br> <div class="text-toned mt-1"><p>通过HTML5验证触发表单提交。</p></div>|
| `validate(opts: { name?: keyof T \| (keyof T)[], silent?: boolean, nested?: boolean, transform?: boolean })`{lang="ts-type"}| `Promise<T>`{lang="ts-type"} <br> <div class="text-toned mt-1"><p>触发表单验证。除非`opts.silent`设置为true，否则将引发任何错误。</p></div>|
| `clear(path?: keyof T \| RegExp)`{lang="ts-type"}| `void` <br> <div class="text-toned mt-1"><p>清除与特定路径关联的表单错误。如果未提供路径，则清除所有表单错误。</p></div>|
| `getErrors(path?: keyof T \| RegExp)`{lang="ts-type"}| `FormErrorWithId[]`{lang="ts-type"} <br> <div class="text-toned mt-1"><p>检索与特定路径关联的表单错误。如果未提供路径，则返回所有表单错误。</p></div>|
| `setErrors(errors: FormError[], name?: keyof T \| RegExp)`{lang="ts-type"}| `void` <br> <div class="text-toned mt-1"><p>设置给定路径的表单错误。如果未提供路径，则覆盖所有错误。</p></div>|
| `errors`{lang="ts-type"}| `Ref<FormErrorWithId[]>`{lang="ts-type"} <br> <div class="text-toned mt-1"><p>对包含验证错误的数组的引用。使用此引用可访问或操作错误信息。</p></div>|
| `disabled`{lang="ts-type"}| `Ref<boolean>`{lang="ts-type"}|
| `dirty`{lang="ts-type"}| `Ref<boolean>`{lang="ts-type"} `true`如果用户至少更新了一个表单字段。|
| `dirtyFields`{lang="ts-type"}| `ReadonlySet<DeepReadonly<keyof T>>`{lang="ts-type"}跟踪已被用户修改的字段。|
| `touchedFields`{lang="ts-type"}| `ReadonlySet<DeepReadonly<keyof T>>`{lang="ts-type"}跟踪用户与之交互的字段。|
| `blurredFields`{lang="ts-type"}| `ReadonlySet<DeepReadonly<keyof T>>`{lang="ts-type"}跟踪用户模糊的字段。|

## Theme

:component-theme

## Changelog

:component-changelog
