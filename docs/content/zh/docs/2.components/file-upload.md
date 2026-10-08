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

## 使用情况

使用`v-model`指令来控制FileUpload的值。

::component-code
---
忽略：
  - 模型值
  班级
外部：
  - 模型值
道具：
  模型值：空
  等级：'w-96分钟-h-48'
---
::

多个

使用`multiple`属性可以选择多个文件。

::component-code
---
忽略：
  班级
道具：
  多个：真
  等级：'w-96分钟-h-48'
---
::

放置区

使用`dropzone`属性启用/禁用可拖放区域。默认为`true`。

::component-code
---
忽略：
  班级
道具：
  放置区：假
  等级：'w-96分钟-h-48'
---
::

### 互动式

使用`interactive`属性启用/禁用可点击区域。默认为`true`。

::tip{to="#with-files-bottom-slot"}
在`#actions`插槽中添加`Button`组件时，此功能非常有用。
::

::component-code
---
忽略：
  班级
道具：
  交互式：假
  等级：'w-96分钟-h-48'
---
::

接受

使用`accept`属性来指定输入所允许的档案类型。请提供以逗号分隔的[MIME类型清单](https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/MIME_types)或副档名（例如`image/png,application/pdf,.jpg`）。预设值为`*`（所有档案类型）。

::component-code
---
忽略：
  接受
  班级
道具：
  接受：'image/*'
  等级：'w-96分钟-h-48'
---
::

标签

使用`label`属性设置FileUpload的标签。

::component-code
---
更漂亮：真的
忽略：
  班级
道具：
  label：'将图像拖到此处'
  等级：'w-96分钟-h-48'
---
::

说明：

使用`description`属性设置FileUpload的描述。

::component-code
---
更漂亮：真的
忽略：
  标签
  班级
道具：
  label：'将图像拖到此处'
  描述：'SVG、PNG、JPG或GIF（最大2 MB）'
  等级：'w-96分钟-h-48'
---
::

### 图标

使用`icon`属性设置文件上载的图标。默认为`i-lucide-upload`。

::component-code
---
更漂亮：真的
忽略：
  标签
  描述：
  班级
道具类：
  图标：“i-lucide-图像”
  label：'将图像拖到此处'
  描述：'SVG、PNG、JPG或GIF（最大2 MB）'
  等级：'w-96分钟-h-48'
---
::

::framework-only
#nuxt（无文本）
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
您可以在`ui.icons.upload`键下的`app.config.ts`中全局自定义此图标。
:::

版本号
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
您可以在`ui.icons.upload`键下的`vite.config.ts`中全局自定义此图标。
:::
::

颜色

使用`color`属性更改FileUpload的颜色。

::component-code
---
更漂亮：真的
忽略：
  标签
  描述
  班级
道具：
  颜色：中性
  高亮显示：真
  label：'将图像拖到此处'
  描述：'SVG、PNG、JPG或GIF（最大2 MB）'
  等级：'w-96分钟-h-48'
---
::

::note
`highlight`属性在这里用来显示焦点状态。当发生验证错误时，它会在内部使用。
::

### 变体

使用`variant`属性更改FileUpload的变体。

::component-code
---
忽略：
  班级
道具：
  变体：按钮
---
::

尺寸

使用`size`属性更改FileUpload的大小。

::component-code
---
更漂亮：真的
忽略：
  标签
  描述
  班级
道具：
  尺寸：xl
  变量：区域
  label：'将图像拖到此处'
  描述：'SVG、PNG、JPG或GIF（最大2 MB）'
---
::

版面配置

使用`layout`属性可更改文件在FileUpload中的显示方式。默认为`grid`。

::warning
此道具仅在`variant`为`area`时有效。
::

::component-code
---
更漂亮：真的
忽略：
  标签
  描述：
  多个
  班级
  用户名：
道具：
  布局：列表
  多个：真
  label：'将图像拖到此处'
  描述：'SVG、PNG、JPG或GIF（最大2 MB）'
  类别：'w-96'
  用户界面：
    基底：'min-h-48'
---
::

位置：

使用`position`属性更改文件在FileUpload中的位置。默认为`outside`。

::warning
此道具仅在`variant`为`area`且`layout`为`list`时有效。
::

::component-code
---
更漂亮：真的
忽略：
  标签
  描述：
  多个
  版面配置
  班级
  用户名：
道具：
  位置：内部
  布局：列表
  多个：真
  label：'将图像拖到此处'
  描述：'SVG、PNG、JPG或GIF（最大2 MB）'
  类别：'w-96'
  用户界面：
    基底：'min-h-48'
---
::

示例

### 使用表单验证

您可以在[Form](/docs/components/form)和[FormField](/docs/components/form-field)组件中使用FileUpload来处理验证和错误处理。

::component-example
---
更漂亮：真的
收阖：true
名称：'文件-上载-表单-验证-示例'
---
::

### 使用默认插槽

您可以使用默认插槽来创建自己的FileUpload组件。

::component-example
---
更漂亮：真的
收阖：true
名称：'文件上载默认插槽示例'
---
::

### 带文件夹底部插槽

例如，您可以使用`files-bottom`插槽在文件列表下添加[Button](/docs/components/button)以删除所有文件。

::component-example
---
更漂亮：真的
收阖：true
名称：'文件-上载-文件-底部-插槽-示例'
---
::

::note{to="#interactive"}
在此示例中，`interactive`属性设置为`false`以阻止默认的可单击区域。
::

### 带文件夹顶部插槽

例如，您可以使用`files-top`插槽在文件列表上方添加[按钮](/docs/components/button)以添加新文件。

::component-example
---
更漂亮：真的
收阖：true
名称：'文件-上载-文件-顶部插槽-示例'
---
::

## 活性药物成分

### 道具

：组件-支柱

::callout{icon="i-simple-icons-mdnwebdocs" to="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attributes" target="_blank"}
此组件还支持所有本机`<input>`HTML属性。
::

### 插槽

：组件插槽

### 排放

：组件发射

暴露

通过模板引用访问组件时，可以使用以下命令：

| 名称|类型|
| ---- | ---- |
|`inputRef`，{lang="ts-type"}| 114小时116小时|
| 第117章【第119章】|`Ref<HTMLDivElement \| null>`，{lang="ts-type"}|

主题

：组件主题

## 变更日志

：组件更改日志
