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

## 使用情况

使用`v-model`指令控制Input的值。

::component-code
---
忽略：
  - 模型值
外部：
  - 模型值
道具：
  模型值：''
---
::

类型：

使用`type`属性更改输入类型。默认为`text`。

某些类型已经在它们自己的组件中实现，例如[Checkbox](/docs/components/checkbox)、[Radio](/docs/components/radio-group)、[InputNumber](/docs/components/input-number)等，而其他类型已经被样式化，例如`file`。

::component-code
---
项目名称：
  字体：
    - 文本
    编号：
    密码
- 搜索
    文件夹
道具：
  类型：'file'
---
::

::callout{icon="i-simple-icons-mdnwebdocs" to="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#input_types" target="_blank"}
您可以在MDN Web Docs上检查所有可用的类型。
::

### 预留位置

使用`placeholder`属性来设定预留位置文字。

::component-code
---
道具：
  占位符：'搜索...'
---
::

颜色

使用`color`道具更改“输入”聚焦时的圆环颜色。

::component-code
---
忽略：
  占位符
道具：
  颜色：中性
  高亮显示：真
  占位符：'搜索...'
---
::

::note
`highlight`属性在这里用来显示焦点状态。当发生验证错误时，它会在内部使用。
::

### 变体

使用`variant`属性更改输入的变量。

::component-code
---
忽略：
- 占位符
道具：
  颜色：中性
  变体：细微
  突出显示：假
  占位符：'搜索...'
---
::

尺寸

使用`size`属性更改输入的大小。

::component-code
---
忽略：
- 占位符
道具：
  尺寸：xl
  占位符：'搜索...'
---
::

### 图标

使用`icon`道具在“输入”中显示[](/docs/components/icon)。

::component-code
---
更漂亮：真的
忽略：
  占位符
道具：
  图标：“i-lucide-搜索”
  尺寸：md
  变体：轮廓
  占位符：'搜索...'
---
::

使用`leading`和`trailing`道具来设定图标位置，或使用`leading-icon`和`trailing-icon`道具来为每个位置设定不同的图标。

::component-code
---
更漂亮：真的
忽略：
  占位符
道具：
  尾随图标：i-lucide-at-符号
  占位符：'输入您的电子邮件'
  尺寸：md
---
::

阿凡达

使用`avatar`道具在“输入”中显示[Avatar](/docs/components/avatar)。

::component-code
---
更漂亮：真的
忽略：
  占位符
- 头像.加载中
道具：
  头像：
    来源：'https：//github.com/nuxt.png'
    加载：惰性
  尺寸：md
  变体：轮廓
  占位符：'搜索...'
---
::

正在载入

使用`loading`道具在“输入”上显示加载图标。

::component-code
---
忽略：
  占位符
道具：
  载入：true
  结尾：false
  占位符：'搜索...'
---
::

### Loading（加载）图标

使用`loading-icon`属性来自订载入图标。预设为`i-lucide-loader-circle`。

::component-code
---
忽略：
- 占位符
道具：
  载入：true
  加载图标：“i-lucide加载程序”
  占位符：'搜索...'
---
::

::framework-only
#nuxt（无文本）
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
您可以在`app.config.ts`的`ui.icons.loading`键下全局自定此图标。
:::

版本号
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
您可以在`vite.config.ts`的`ui.icons.loading`键下全局自定义此图标。
:::
::

### 已停用

使用`disabled`道具禁用“输入”。

::component-code
---
忽略：
- 占位符
道具：
  已禁用：true
  占位符：'搜索...'
---
::

示例

### 使用清除按钮

您可以将[按钮](/docs/components/button放在`#trailing`插槽中来清除输入。

::component-example
---
名称：'输入清除按钮示例'
---
::

使用复制按钮

您可以将[Button](/docs/components/button)放在`#trailing`插槽中，以将值复制到剪贴板。

::component-example
---
名称：'输入-复制-按钮-示例'
---
::

使用密码切换

您可以将[Button](/docs/components/button)放在`#trailing`插槽中，以切换密码的可见性。

::component-example
---
名称：'输入密码切换示例'
---
::

### 使用密码强度指示器

您可以使用[Progress](/docs/components/progress)组件来显示密码强度指示器。

::component-example
---
收阖：true
名称：'输入密码强度指示器示例'
---
::

### 有字符限制

您可以使用`#trailing`插槽向"输入"添加字符限制。

::component-example
---
名称：'输入字符限制示例'
---
::

### 使用快捷键

您可以使用[Kbd](/docs/components/kbd)组件（位于`#trailing`插槽中）将键盘快捷键添加到"输入"。

::component-example
---
名称：'输入-kbd-示例'
---
::

::note{to="/docs/composables/define-shortcuts"}
此示例使用`defineShortcuts`可组合对象在按下：kbd{value="/"}键时聚焦Input。
::

### 带掩码

没有内建的遮罩支援，但是您可以使用[maska](https://github.com/beholdr/maska)之类的程式库来遮罩“输入”。

::component-example
---
名称：'输入掩码示例'
---
::

### 带浮动标签

您可以使用`#default`插槽将浮动标签添加到"输入"。

::component-example
---
名称：'输入浮动标签示例'
---
::

### 在表单字段中

您可以在[FormField](/docs/components/form-field)组件中使用Input来显示标签、说明文字、必要的指示器等。

::component-example
---
名称：'输入表单字段示例'
---
::

::tip{to="/docs/components/form"}
在**Form**组件中使用时，它还提供验证和错误处理。
::

### 在字段组中

您可以在[FieldGroup](/docs/components/field-group)组件中使用Input，将多个元素组合在一起。

::component-example
---
名称：'输入字段组示例'
---
::

### 作为电话号码输入

您可以在[FieldGroup](/docs/components/field-group)组件中使用Input，并在[SelectMenu](/docs/components/select-menu)旁边使用，以建立具有国家/地区代码选取的电话号码输入。

::component-example
---
收阖：true
名称：'输入电话号码示例'
---
::

## 活性成分

### 道具

：组件-支柱

::callout{icon="i-simple-icons-mdnwebdocs" to="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attributes" target="_blank"}
此组件还支持所有本机`<input>`HTML属性。
::

插槽数

：组件插槽

发射率

：组件发射

暴露

通过模板引用访问组件时，可以使用以下命令：

| 名称|类型|
| ---- | ---- |
| 141号公路|140小时142小时|

主题

：组件主题

## Changelog

：组件更改日志
