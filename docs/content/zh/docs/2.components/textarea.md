---
description: 用于输入多行文本的textarea元素。
category: form
keywords:
  - multiline
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Textarea.vue
---

## 用法

使用`v-model`指令控制Textarea的值。

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

### php

使用`rows` prop将行数. xp设置为`3`。

::component-code
---
props:
  rows: 12
---
::

### 占位符

使用`placeholder`属性设置占位符文本。

::component-code
---
props:
  placeholder: 'Type something...'
---
::

### 自动调整大小

使用`autoresize` prop来启用自动调整Textarea的高度。

::component-code
---
ignore:
  - modelValue
external:
  - modelValue
props:
  modelValue: 'This is a long text that will autoresize the height of the Textarea.'
  autoresize: true
---
::

使用`maxrows`属性来设置自动删除时的最大行数。如果设置为`0`，Textarea将无限增长。

::component-code
---
ignore:
  - modelValue
external:
  - modelValue
props:
  modelValue: 'This is a long text that will autoresize the height of the Textarea with a maximum of 4 rows.'
  maxrows: 4
  autoresize: true
---
::

### Color

使用`color`道具来改变文本区域聚焦时的环颜色。

::component-code
---
ignore:
  - placeholder
props:
  color: neutral
  highlight: true
  placeholder: 'Type something...'
---
::

::note
这里使用`highlight`属性来显示焦点状态。当发生验证错误时，在内部使用它。
::

### Variant

使用`variant` prop更改Textarea的变体。

::component-code
---
ignore:
  - placeholder
props:
  color: neutral
  variant: subtle
  highlight: false
  placeholder: 'Type something...'
---
::

### Size

使用`size`属性更改文本区域的大小。

::component-code
---
ignore:
  - placeholder
props:
  size: xl
  placeholder: 'Type something...'
---
::

### Icon

使用`icon`道具在Textarea内显示[Icon](/docs/components/icon)。

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
  rows: 1
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
  rows: 1
---
::

### Avatar

使用`avatar`道具在文本区域内显示[Avatar](/docs/components/avatar)。

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
  rows: 1
---
::

### 加载中

使用`loading`道具在文本区域显示一个加载图标。

::component-code
---
ignore:
  - placeholder
props:
  loading: true
  trailing: false
  placeholder: 'Search...'
  rows: 1
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
  rows: 1
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

使用`disabled`属性禁用文本区域。

::component-code
---
ignore:
  - placeholder
props:
  disabled: true
  placeholder: 'Type something...'
---
::

## API

### Props

:component-props

::callout{icon="i-simple-icons-mdnwebdocs" to="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea#attributes" target="_blank"}
此组件还支持所有原生`<textarea>` HTML属性。
::

### Slots

:component-slots

### Emits

:component-emits

### 曝光

通过模板引用访问组件时，可以使用以下命令：

| 名称|类型|
| ---- | ---- |
| `textareaRef`{lang="ts-type"}| `Ref<HTMLTextAreaElement \| null>`{lang="ts-type"}|
| `autoResize`{lang="ts-type"}| `() => void`{lang="ts-type"}|

## Theme

:component-theme

## Changelog

:component-changelog
