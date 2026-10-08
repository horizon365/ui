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

## 使用情况

使用表单组件可使用支持[Standard Schema](https://github.com/standard-schema/standard-schema)的任何验证库验证表单数据，如[Valibot](https://github.com/fabian-hiller/valibot)、[Zod]()、[Regle](https://github.com/victorgarciaesgi/regle)、[Yup](https://github.com/jquense/yup)、[Joi](https://github.com/hapijs/joi)或[Superstruct](https://github.com/ianstormtaylor/superstruct)或您自己的验证逻辑。

它与[FormField](/docs/components/form-field)组件配合使用，自动在表单元素周围显示错误消息。

### Schema验证

它需要两个道具：

- `state` -一个保持窗体状态的反应对象。
- `schema` -任何[Standard Schema](https://github.com/standard-schema/standard-schema)或[Superstruct](PH0444)。

::warning
**默认情况下不包含验证库**，请确保您**安装了所需的验证库**。
::

::tabs{class="gap-0"}
  ::component-example{label="瓦利博特"}
  ---
  name：'form-example-valibot'
  道具：
    类别：'W-60'
  ---
  ::

  ::component-example{label="佐德"}
  ---
  名称：'form-example-zod'
  道具：
    类别：'W-60'
  ---
  ::

  ::component-example{label="雷格勒"}
  ---
  name：'form-example-regle'
  道具：
    类别：'W-60'
  ---
  ::

  ::component-example{label="是的"}
  ---
  name：'form-example-yup'
  道具：
    类别：'W-60'
  ---
  ::

  ::component-example{label="Joi"}
  ---
  name：'form-example-joi'
  道具：
    类别：'W-60'
  ---
  ::

  ::component-example{label="Superstruct"}
  ---
  名称：'form-example-superstruct'
  道具：
    类别：'W-60'
  ---
  ::
::

### Custom validation

使用`validate`prop应用您自己的验证逻辑。

验证函数必须返回具有以下属性的错误列表：

- `message` -要显示的错误消息。
- `name` -要将错误发送到的`FormField`的`name`。

::tip
它可以与`schema`prop一起使用，以处理复杂的用例。
::

::component-example
---
name：'form-example-basic'
道具：
  类别：'W-60'
---
::

### 错误报告

错误将使用其`name`属性与相应的[FormField](/docs/components/form-field)匹配。`email`字段上的错误显示为`<FormField name="email">`{lang="vue"}。

嵌套字段使用点表示法匹配。类似`{ user: z.object({ email: z.string() }) }`{lang="ts"}的架构将应用于`<FormField name="user.email">`{lang="vue"}。

::warning
数组项上的错误在其名称中包含索引（例如：`tags.0`，`tags.1`），并且仅通过`name`无法匹配`<FormField name="tags">`{lang="vue"}。请使用带有正则表达式（如`/^tags\..+/`{lang="ts"}）的`error-pattern`prop来捕获它们。这对于像[InputTags@@这样的组件尤其有用](/docs/components/input-tags)。
::

::component-example
---
name：'form-example-error-pattern'
道具：
  类别：'w-60'
---
::

### 输入事件

当输入发出`input`、`change`或`blur`事件时，表单组件会自动触发验证。

- 在您键入**时，**会在`input`上进行验证。
- 当您**提交到一个值**时，将发生对`change`的验证。
- 当输入**失去焦点**时，会在`blur`上进行验证。

您可以使用`validate-on`属性来控制验证发生的时间。

::tip
表单总是在提交时进行验证。
::

::component-example{label="默认"}
---
资料来源：错误
名称：'表单范例元素'
可选项：
  - name：'验证日期'
    标签：“生效日期”
    项目名称：
    - '输入'
    - '更改'
    "模糊“
    默认值：
    - '输入'
    - '更改'
- 模糊
    多个：真
---
::

::tip
您可以使用`useFormField`可组合项在您自己的组件中实现它。
::

### 错误事件

您可以侦听`@error`事件来处理错误。此事件在表单被提交时触发，并且包含一个`FormError`对象数组，该数组包含下列字段：

- `id` -输入的`id`。
- `name` -`FormField`中的`name`
- `message` -要显示的错误消息。

下面是一个在提交表单后将焦点放在第一个输入元素上并显示错误的示例：

::component-example
---
名称：'错误时的表单示例'
收阖：true
道具：
  类别：'w-60'
---
::

### HTML5验证：徽标{label="4.5+" class="align-text-top"}

以编程方式调用`form.submit()`时，表单组件会在提交前自动触发本机HTML5验证。

::note
当提交按钮在表单元素之外（如在模式页脚中）时，这一点特别有用。
::

::component-example
---
名称：'表单范例html5验证'
道具类：
  类别：'w-60'
---
::

### 巢状表单

使用`nested`属性可嵌套多个表单组件并链接其验证函数。在这种情况下，验证父表单将自动验证其中的所有其他表单。

嵌套窗体直接继承其父级的状态，因此不需要为它们定义单独的状态。可以使用`name`属性将嵌套属性定位到父级状态中。

可根据用户输入动态增加字段：

::component-example
---
收阖：true
名称：'表单范例巢状'
---
::

或验证列表输入：

::component-example
---
收阖：true
名称：'表单范例巢状清单'
---
::

## 活性成分

### 道具

：组件-支柱

::callout{icon="i-simple-icons-mdnwebdocs" to="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form#attributes" target="_blank"}
此组件还支持所有本机`<form>`HTML属性。
::

插槽

：组件插槽

发射量

：组件发射

暴露

您可以使用[`useTemplateRef`](https://vuejs.org/api/composition-api-helpers.html#usetemplateref)来存取具型别的元件实体。

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
| 154小时，161小时|`Promise<void>`{lang="ts-type"}<br><div class="text-toned mt-1"><p>触发表单提交并进行HTML5验证</p></div>|
| 171号公路|`Promise<T>`{lang="ts-type"}<br><div class="text-toned mt-1"><p>触发表单验证。除非`opts.silent`设为true，否则将引发任何错误。</p></div>|
|`clear(path?: keyof T \| RegExp)`华氏度180度|`void`<br><div class="text-toned mt-1"><p>清除与特定路径相关的表单错误。如果未提供路径，则清除所有表单错误。</p></div>|
| 188号公路|`FormErrorWithId[]`{lang="ts-type"}<br><div class="text-toned mt-1"><p>撷取与特定路径相关的表单错误。如果未提供路径，则传回所有表单错误。</p></div>|
| 197年12月19日|`void`<br><div class="text-toned mt-1"><p>设定指定路径的表单错误。如果未提供路径，则覆写所有错误。</p></div>|
|`errors`{lang="ts-type"}{lang="ts-type"}| `Ref<FormErrorWithId[]>`{lang="ts-type"}<br><div class="text-toned mt-1"><p>包含验证错误的数组参照。使用它来存取或操作错误信息。</p></div>{lang="ts-type"}|
| 207号，209号|208小时210小时|
| 214号线|`Ref<boolean>`{lang="ts-type"}`true`（如果用户至少更新了一个表单域）。|
| 216号线218号线|`ReadonlySet<DeepReadonly<keyof T>>`{lang="ts-type"}跟踪已被用户修改的域。|
| 222小时|`ReadonlySet<DeepReadonly<keyof T>>`{lang="ts-type"}跟踪用户与之交互的字段。|
| 224小时226小时|`ReadonlySet<DeepReadonly<keyof T>>`{lang="ts-type"}追踪使用者模糊的字段。|

主题

：组件主题

## 变更日志

：组件更改日志
