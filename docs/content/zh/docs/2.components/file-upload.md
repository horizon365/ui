---
title: FileUpload
description: '用于上传文件的输入元素。'
category: form
keywords:
  - dropzone
  - drag and drop
  - file input
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/FileUpload.vue
---

## 用法

使用`v-model`指令控制FileUpload的值。

::component-code
---
ignore:
  - modelValue
  - class
external:
  - modelValue
props:
  modelValue: null
  class: 'w-96 min-h-48'
---
::

### 多个

使用`multiple`属性允许选择多个文件。

::component-code
---
ignore:
  - class
props:
  multiple: true
  class: 'w-96 min-h-48'
---
::

### Dropzone

使用`dropzone` prop来启用/禁用可拖放区域。

::component-code
---
ignore:
  - class
props:
  dropzone: false
  class: 'w-96 min-h-48'
---
::

### 互动

使用`interactive`属性来启用/禁用可单击区域。将其设置为`true`。

::tip{to="#with-files-bottom-slot"}
在`#actions`插槽中添加`Button`组件时，这可能很有用。
::

::component-code
---
ignore:
  - class
props:
  interactive: false
  class: 'w-96 min-h-48'
---
::

### 接受

使用`accept`属性指定输入允许的文件类型。提供一个逗号分隔的[MIME类型](https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/MIME_types)或文件扩展名（例如`image/png,application/pdf,.jpg`）的列表。`*`（所有文件类型）。

::component-code
---
ignore:
  - accept
  - class
props:
  accept: 'image/*'
  class: 'w-96 min-h-48'
---
::

### Label

使用`label`属性设置FileUpload的标签。

::component-code
---
prettier: true
ignore:
  - class
props:
  label: 'Drop your image here'
  class: 'w-96 min-h-48'
---
::

### 说明

使用`description`属性设置FileUpload的描述。

::component-code
---
prettier: true
ignore:
  - label
  - class
props:
  label: 'Drop your image here'
  description: 'SVG, PNG, JPG or GIF (max. 2MB)'
  class: 'w-96 min-h-48'
---
::

### Icon

使用`icon`属性将FileUpload.xml的图标设置为`i-lucide-upload`。

::component-code
---
prettier: true
ignore:
  - label
  - description
  - class
props:
  icon: 'i-lucide-image'
  label: 'Drop your image here'
  description: 'SVG, PNG, JPG or GIF (max. 2MB)'
  class: 'w-96 min-h-48'
---
::

::framework-only
#nuxt
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
你可以在你的`app.config.ts`中的`ui.icons.upload`键下全局自定义这个图标。
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
您可以在`ui.icons.upload`键下的`vite.config.ts`中全局自定义此图标。
:::
::

### Color

使用`color`属性更改FileUpload的颜色。

::component-code
---
prettier: true
ignore:
  - label
  - description
  - class
props:
  color: neutral
  highlight: true
  label: 'Drop your image here'
  description: 'SVG, PNG, JPG or GIF (max. 2MB)'
  class: 'w-96 min-h-48'
---
::

::note
这里使用`highlight`属性来显示焦点状态。当发生验证错误时，在内部使用它。
::

### Variant

使用`variant` prop更改FileUpload的变量。

::component-code
---
ignore:
  - class
props:
  variant: button
---
::

### Size

使用`size`属性更改FileUpload的大小。

::component-code
---
prettier: true
ignore:
  - label
  - description
  - class
props:
  size: xl
  variant: area
  label: 'Drop your image here'
  description: 'SVG, PNG, JPG or GIF (max. 2MB)'
---
::

### Layout

使用`layout`属性将文件在FileUpload.xml中的显示方式更改为`grid`。

::warning
这个道具只有在`variant`是`area`时才有效。
::

::component-code
---
prettier: true
ignore:
  - label
  - description
  - multiple
  - class
  - ui.base
props:
  layout: list
  multiple: true
  label: 'Drop your images here'
  description: 'SVG, PNG, JPG or GIF (max. 2MB)'
  class: 'w-96'
  ui:
    base: 'min-h-48'
---
::

### 位置

使用`position`属性将文件在FileUpload.xml中的位置更改为`outside`。

::warning
此属性仅在`variant`为`area`和`layout`为`list`时有效。
::

::component-code
---
prettier: true
ignore:
  - label
  - description
  - multiple
  - layout
  - class
  - ui.base
props:
  position: inside
  layout: list
  multiple: true
  label: 'Drop your images here'
  description: 'SVG, PNG, JPG or GIF (max. 2MB)'
  class: 'w-96'
  ui:
    base: 'min-h-48'
---
::

## 示例

### 带表单验证

您可以在[Form](/docs/components/form)和[FormField](/docs/components/form-field)组件中使用FileUpload来处理验证和错误处理。

::component-example
---
prettier: true
collapse: true
name: 'file-upload-form-validation-example'
---
::

### 带默认插槽

您可以使用默认插槽来创建自己的FileUpload组件。

::component-example
---
prettier: true
collapse: true
name: 'file-upload-default-slot-example'
---
::

### 带文件-底部插槽

例如，您可以使用`files-bottom`插槽在文件列表下添加[Button](/docs/components/button)以删除所有文件。

::component-example
---
prettier: true
collapse: true
name: 'file-upload-files-bottom-slot-example'
---
::

::note{to="#interactive"}
在本例中，`interactive`属性被设置为`false`，以防止出现默认的可单击区域。
::

### 带文件顶槽

例如，您可以使用`files-top`插槽在文件列表上方添加[Button](/docs/components/button)以添加新文件。

::component-example
---
prettier: true
collapse: true
name: 'file-upload-files-top-slot-example'
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
| `dropzoneRef`{lang="ts-type"}| `Ref<HTMLDivElement \| null>`{lang="ts-type"}|

## Theme

:component-theme

## Changelog

:component-changelog
