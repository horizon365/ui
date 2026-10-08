---
title: 输入标签
description: 显示交互式标记的输入元素。
category: form
keywords:
  - chips input
  - multi value
links:
  - label: 输入标签
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/tags-input
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/InputTags.vue
---

## 使用情况

使用`v-model`指令来控制InputTags的值。

::component-code
---
更漂亮：真的
忽略：
  - 模型值
外部：
  - 模型值
道具类：
  模型值：['Vue']
---
::

当您不需要控制其状态时，请使用`default-value`属性来设定初始值。

::component-code
---
更漂亮：真的
忽略：
  - 默认值
道具：
  默认值：['Vue']
---
::

### 预留位置

使用`placeholder`道具来设定预留位置文字。

::component-code
---
道具：
  占位符：'输入标记...'
---
::

### Max长度

使用`max-length`属性可设置标记中允许的最大字符数。

::component-code
---
道具：
  最大长度：4
---
::

### 颜色

使用`color`道具可在InputTags成为焦点时更改圆环颜色。

::component-code
---
更漂亮：真的
忽略：
  - 模型值
外部：
- 模型值
道具：
  模型值：['Vue']
  颜色：中性
  高亮显示：真
---
::

::note
`highlight`属性在这里用来显示焦点状态。当发生验证错误时，它会在内部使用。
::

### 变体

使用`variant`道具更改InputTags的外观。

::component-code
---
更漂亮：真的
忽略：
  - 模型值
外部：
  - 模型值
道具：
  模型值：['Vue']
  变体：细微
  颜色：中性色
  突出显示：假
---
::

尺寸

使用`size`道具来调整InputTags的大小。

::component-code
---
更漂亮：真的
忽略：
- 模型值
外部：
  - 模型值
道具：
  模型值：['Vue']
  尺寸：xl
---
::

### 图标

使用`icon`道具在“输入标记”中显示[](/docs/components/icon)图标。

::component-code
---
更漂亮：真的
忽略：
  模型值
外部：
  - 型号值
道具：
  模型值：['Vue']
  图标：“i-lucide-搜索”
  尺寸：md
  变体：轮廓
---
::

::note
使用`leading`和`trailing`道具来设定图标位置，或使用`leading-icon`和`trailing-icon`道具来为每个位置设定不同的图标。
::

阿凡达

使用`avatar`道具在输入标记内显示[Avatar](/docs/components/avatar)。

::component-code
---
更漂亮：真的
忽略：
- 模型值
- 头像.加载中
外部：
  模型值
道具：
  模型值：['Vue']
  头像：
    来源：“https：//github.com/vuejs.png”
    加载：惰性
  尺寸：md
  变体：轮廓
---
::

### 删除图标

使用`delete-icon`属性可自定义在标记中删除[Icon](/docs/components/icon)。默认为`i-lucide-x`。

::component-code
---
更漂亮：真的
忽略：
- 模型值
外部：
- 模型值
道具：
  模型值：['Vue']
  删除图标：'i-lucide-垃圾桶'
---
::

::framework-only
#nuxt（无文本）
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
您可以在`ui.icons.close`键下的`app.config.ts`中全局自定义此图标。
:::

版本号
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
您可以在`ui.icons.close`键下的`vite.config.ts`中全局自定义此图标。
:::
::

正在载入

使用`loading`道具在InputTags上显示加载图标。

::component-code
---
更漂亮：真的
忽略：
  模型值
外部：
- 模型值
道具：
  模型值：['Vue']
  载入：true
  结尾：false
---
::

### 载入图标

使用`loading-icon`属性来自订载入图标。预设为`i-lucide-loader-circle`。

::component-code
---
更漂亮：真的
忽略：
  模型值
外部：
- 模型值
道具：
  模型值：['Vue']
  载入：true
  加载图标：“i-lucide加载程序”
---
::

::framework-only
#nuxt（无文本）
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
您可以在`app.config.ts`的`ui.icons.loading`键下全局自定义此图标。
:::

版本号
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
您可以在`ui.icons.loading`键下的`vite.config.ts`中全局自定义此图标。
:::
::

### 已停用

使用`disabled`道具禁用输入标记。

::component-code
---
更漂亮：真的
忽略：
- 模型值
外部：
  模型值
道具：
  模型值：['Vue']
  已禁用：true
---
::

示例

### 在表单字段中

您可以在[FormField](/docs/components/form-field)组件中使用InputTags来显示标签、帮助文本、必需的指示器等。

::component-example
---
名称：'输入标签表单字段范例'
---
::

美国石油学会

道具

：组件-支柱

::callout{icon="i-simple-icons-mdnwebdocs" to="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attributes" target="_blank"}
此组件还支持所有本机`<input>`HTML属性。
::

插槽

：组件插槽

发射器

：组件发射

曝光

通过模板引用访问组件时，可以使用以下命令：

| 名称|类型|
| ---- | ---- |
| 我的天啊|我的天啊|

主题

：组件主题

## 变更日志

：组件更改日志
