---
description: 输入文本的输入元素。
category: form
keywords:
  - text field
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Input.vue
---

## 用法

使用`v-model`指令控制Input的值。

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

使用`type` prop将输入类型. png更改为`text`。

一些类型已经在它们自己的组件中实现，例如[Checkbox](/docs/components/checkbox)，[Radio](/docs/components/radio-group)，[InputNumber](/docs/components/input-number)等，其他类型的样式类似于`file`。

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
您可以在MDN Web Docs上检查所有可用的类型。
::

### 占位符

使用`placeholder`属性设置占位符文本。

::component-code
---
props:
  placeholder: 'Search...'
---
::

### Color

使用`color`道具在输入被聚焦时改变环的颜色。

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
这里使用`highlight`属性来显示焦点状态。当发生验证错误时，在内部使用它。
::

### Variant

使用`variant` prop更改Input的变量。

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

使用`size`属性更改Input的大小。

::component-code
---
ignore:
  - placeholder
props:
  size: xl
  placeholder: 'Search...'
---
::

### Icon

使用`icon` prop在Input中显示[Icon](/docs/components/icon)。

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

使用`leading`和`trailing`道具设置图标位置，或使用`leading-icon`和`trailing-icon`道具为每个位置设置不同的图标。

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

使用`avatar`道具在Input中显示[Avatar](/docs/components/avatar)。

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

### 加载中

使用`loading`道具在输入上显示加载图标。

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

### 加载图标

使用`loading-icon`道具自定义加载图标. `i-lucide-loader-circle`。

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
你可以在你的`app.config.ts`中的`ui.icons.loading`键下全局自定义这个图标。
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
你可以在你的`vite.config.ts`下的`ui.icons.loading`键全局自定义这个图标。
:::
::

### 禁用

使用`disabled` prop禁用Input。

::component-code
---
ignore:
  - placeholder
props:
  disabled: true
  placeholder: 'Search...'
---
::

## 示例

### 带清除按钮

您可以将[Button](/docs/components/button)放入`#trailing`插槽中以清除输入。

::component-example
---
name: 'input-clear-button-example'
---
::

### 带复制按钮

您可以将[Button](/docs/components/button)放入`#trailing`插槽中，以将值复制到剪贴板。

::component-example
---
name: 'input-copy-button-example'
---
::

### 带密码切换

您可以将[Button](/docs/components/button)放入`#trailing`插槽中以切换密码可见性。

::component-example
---
name: 'input-password-toggle-example'
---
::

### 带密码强度指示

您可以使用[Progress](/docs/components/progress)组件来显示密码强度指示器。

::component-example
---
collapse: true
name: 'input-password-strength-indicator-example'
---
::

### 带字符限制

您可以使用`#trailing`插槽向Input添加字符限制。

::component-example
---
name: 'input-character-limit-example'
---
::

### 带键盘快捷键

您可以使用`#trailing`插槽中的[Kbd](/docs/components/kbd)组件将键盘快捷键添加到输入。

::component-example
---
name: 'input-kbd-example'
---
::

::note{to="/docs/composables/define-shortcuts"}
此示例使用`defineShortcuts`组合工具在按下：kbd{value="/"}键时聚焦Input。
::

### 带面罩

没有内置的掩码支持，但是你可以使用像[maska](https://github.com/beholdr/maska)这样的库来掩码输入。

::component-example
---
name: 'input-mask-example'
---
::

### 带浮动标签

您可以使用`#default`插槽向Input添加浮动标签。

::component-example
---
name: 'input-floating-label-example'
---
::

### 在表单域中

您可以使用[FormField](/docs/components/form-field)组件中的Input来显示标签、帮助文本、必需的指示符等。

::component-example
---
name: 'input-form-field-example'
---
::

::tip{to="/docs/components/form"}
当在**Form**组件中使用时，它还提供验证和错误处理。
::

### 字段组内

您可以使用[FieldGroup](/docs/components/field-group)组件中的Input将多个元素分组在一起。

::component-example
---
name: 'input-field-group-example'
---
::

### 作为电话号码输入

您可以使用[FieldGroup](/docs/components/field-group)组件中的Input以及[SelectMenu](/docs/components/select-menu)来创建具有国家代码选择的电话号码输入。

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
此组件还支持所有原生`<input>` HTML属性。
::

### Slots

:component-slots

### Emits

:component-emits

### 曝光

通过模板引用访问组件时，可以使用以下命令：

| 名称|类型|
| ---- | ---- |
| `inputRef`{lang="ts-type"}| `Ref<HTMLInputElement \| null>`{lang="ts-type"}|

## Theme

:component-theme

## Changelog

:component-changelog
