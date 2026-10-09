---
description: 为子组件创建主题的无头组件。
category: layout
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Theme.vue
---

## 用法

Theme组件覆盖所有子组件的默认**slot classes**和**props**，而不单独修改每个子组件。它在后台使用Vue的`provide`/`inject`机制，因此覆盖适用于任何深度。

::note
Theme组件不呈现任何HTML元素，它只为其子元素提供主题覆盖。
::

::framework-only
#nuxt
:::tip
对于应用级主题配置，我们建议使用`app.config.ts`文件。
:::

#vue
:::tip
对于应用级主题配置，我们建议使用`vite.config.ts`文件。
:::
::

### Slot类

使用`ui`属性覆盖后代组件的插槽类。键是组件名称（camelCase），值是它们的插槽类覆盖。

::component-example
---
name: 'theme-ui-example'
---
::

### Prop默认值：badge{label="4.8+" class="align-text-top"}

使用`props` prop覆盖后代组件上任何prop的默认值。每个键映射到该组件的prop的一部分。

::component-example
---
name: 'theme-props-example'
---
::

::tip
组件上的显式prop（例如`<UButton color="primary" />`）总是优于`<UTheme :props>`。主题默认值仅适用于prop没有显式传递的情况。
::

## 示例

### 多个组件

在`ui`或`props`中使用不同的键可以一次为多个组件类型创建主题。

::component-example
---
name: 'theme-multiple-example'
---
::

### 嵌套主题

嵌套多个Theme组件以组成覆盖。最里面的Theme优先，而未覆盖的键从外部Theme继承。

::component-example
---
name: 'theme-nested-example'
---
::

### 显式优先级

在单个组件上显式设置任何prop（包括`ui`）总是优先于Theme组件。

::component-example
---
name: 'theme-priority-example'
---
::

### 深度传播

替代可用于所有子代零部件，而不管它们的嵌套有多深。

::component-example
---
name: 'theme-deep-example'
---
::

::note
在这个例子中，`MyButton`是一个自定义组件，它在内部呈现`UButton`。主题覆盖仍然适用，因为它们通过整个组件树传播。
::

### Form组件

使用Theme组件可以在一组表单组件中应用一致的样式。

::component-example
---
name: 'theme-form-example'
---
::

::tip
对于`size`、`color`和`highlight`，`<UFormField>`、`<UFieldGroup>`和`<UAvatarGroup>`保持优先于`<UTheme :props>`。验证错误还强制`error`颜色优先于任何主题值。
::

### Prose组件

使用`prose`命名空间为排版组件创建主题。键嵌套在`prose`下（例如`prose.p`，`prose.code`）。

::component-example
---
name: 'theme-prose-example'
---
::

## API

### Props

:component-props

### Slots

:component-slots

## Changelog

:component-changelog
