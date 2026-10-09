---
description: 在两种状态之间切换的控件。
category: form
keywords:
  - toggle
  - toggle switch
links:
  - label: 开关
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/switch
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Switch.vue
---

## 用法

使用`v-model`指令控制Switch的选中状态。

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

### Label

使用`label`属性设置Switch的标签。

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

使用`description` prop设置Switch的描述。

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

使用`checked-icon`和`unchecked-icon`道具设置选中和未选中Switch的图标。

::component-code
---
prettier: true
ignore:
  - label
  - defaultValue
props:
  uncheckedIcon: 'i-lucide-x'
  checkedIcon: 'i-lucide-check'
  defaultValue: true
  label: Check me
---
::

### 加载中

使用`loading`道具在交换机上显示加载图标。

::component-code
---
ignore:
  - label
  - defaultValue
props:
  loading: true
  defaultValue: true
  label: Check me
---
::

### 加载图标

使用`loading-icon`道具自定义加载图标. `i-lucide-loader-circle`。

::component-code
---
ignore:
  - label
  - defaultValue
props:
  loading: true
  loadingIcon: 'i-lucide-loader'
  defaultValue: true
  label: Check me
---
::

::framework-only
#nuxt
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
您可以在`ui.icons.loading`键下的`app.config.ts`中全局自定义此图标。
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
你可以在你的`vite.config.ts`中的`ui.icons.loading`键下全局自定义这个图标。
:::
::

### Color

使用`color`道具更改Switch的颜色。

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

### Size

使用`size`属性更改Switch的大小。

::component-code
---
ignore:
  - label
  - defaultValue
props:
  size: xl
  defaultValue: true
  label: Check me
---
::

### 已禁用

使用`disabled` prop禁用Switch。

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
