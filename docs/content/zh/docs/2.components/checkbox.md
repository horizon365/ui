---
description: 在选中和未选中状态之间切换的输入元素。
category: form
keywords:
  - tickbox
  - check
  - boolean
links:
  - label: 复选框
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/checkbox
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Checkbox.vue
---

## 用法

使用`v-model`指令控制复选框的选中状态。

::component-code
---
ignore:
  - modelValue
external:
  - modelValue
props:
  modelValue: true
---
::

当不需要控制其状态时，使用`default-value`属性设置初始值。

::component-code
---
ignore:
  - defaultValue
props:
  defaultValue: true
---
::

### 不确定

使用`v-model`指令或`default-value`属性中的`indeterminate`值将复选框设置为[indeterminate state](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox#indeterminate_state_checkboxes)。

::component-code
---
ignore:
  - defaultValue
props:
  defaultValue: 'indeterminate'
---
::

### 不确定图标

使用`indeterminate-icon` prop将indeterminate icon.xml自定义为`i-lucide-minus`。

::component-code
---
ignore:
  - defaultValue
props:
  defaultValue: 'indeterminate'
  indeterminateIcon: 'i-lucide-plus'
---
::

::framework-only
#nuxt
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
您可以在`ui.icons.minus`键下的`app.config.ts`中全局自定义此图标。
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
你可以在你的`ui.icons.minus`下的`ui.icons.minus`键中全局自定义这个图标。
:::
::

### Label

使用`label`属性设置复选框的标签。

::component-code
---
props:
  label: Check me
---
::

当使用`required`属性时，标签旁边会添加一个星号。

::component-code
---
ignore:
  - label
props:
  required: true
  label: Check me
---
::

### 说明

使用`description`属性设置复选框的描述。

::component-code
---
ignore:
  - label
props:
  label: Check me
  description: 'This is a checkbox.'
---
::

### Icon

使用`icon`属性将复选框的图标设置为`i-lucide-check`。

::component-code
---
ignore:
  - label
  - defaultValue
props:
  icon: 'i-lucide-heart'
  defaultValue: true
  label: Check me
---
::

::framework-only
#nuxt
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
你可以在你的`app.config.ts`中的`ui.icons.check`键下全局自定义这个图标。
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
您可以在`ui.icons.check`键下的`vite.config.ts`中全局自定义此图标。
:::
::

### Color

使用`color`属性更改复选框的颜色。

::component-code
---
ignore:
  - label
  - defaultValue
props:
  color: neutral
  defaultValue: true
  label: Check me
---
::

### Variant

使用`variant` prop更改Checkbox的变体。

::component-code
---
ignore:
  - label
  - defaultValue
props:
  color: 'primary'
  variant: 'card'
  defaultValue: true
  label: Check me
---
::

### Size

使用`size`属性更改复选框的大小。

::component-code
---
ignore:
  - label
  - defaultValue
props:
  size: xl
  variant: list
  defaultValue: true
  label: Check me
---
::

### 指示灯

使用`indicator`道具更改位置或隐藏指示器. `start`。

::note
当`indicator`为`hidden`时，图标将显示在标签上方。
::

::component-code
---
prettier: true
ignore:
  - label
  - icon
  - defaultValue
props:
  indicator: 'hidden'
  variant: 'card'
  icon: 'i-lucide-heart'
  defaultValue: true
  label: Check me
---
::

### 禁用

使用`disabled` prop禁用复选框。

::component-code
---
ignore:
  - label
props:
  disabled: true
  label: Check me
---
::

## API

### Props

:component-props

::callout{icon="i-simple-icons-mdnwebdocs" to="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attributes" target="_blank"}
此组件还支持所有原生`<button>` HTML属性。
::

### Slots

:component-slots

### Emits

:component-emits

## Theme

:component-theme

## Changelog

:component-changelog
