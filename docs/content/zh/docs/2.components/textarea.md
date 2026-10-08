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

## 使用情况

使用`v-model`指令控制Textarea的值。

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

### 行

使用`rows`属性来设定列数。预设值为`3`。

::component-code
---
道具：
  行数：12
---
::

### 占位符

使用`placeholder`属性来设定预留位置文字。

::component-code
---
道具：
  占位符：'键入内容...'
---
::

### 自动调整大小

使用`autoresize`道具可启用自动调整文本区域高度的功能。

::component-code
---
忽略：
  - modelValue（型号值）
外部：
  - 模型值
道具：
  modelValue：'这是一个长文本，将自动调整Textarea的高度。'
  自动调整大小：true
---
::

使用`maxrows`属性设置自动调整大小时的最大行数。如果设置为`0`，则文本区域将无限增大。

::component-code
---
忽略：
  - 模型值
外部：
  - 模型值
道具：
  modelValue：'这是一个长文本，将自动调整文本区域的高度，最多4行。'
  最大行数：4
  自动调整大小：true
---
::

颜色

使用`color`道具更改文本区域聚焦时的圆环颜色。

::component-code
---
忽略：
- 占位符
道具：
  颜色：中性
  高亮显示：真
  占位符：'键入内容...'
---
::

::note
`highlight`属性在这里用来显示焦点状态。当发生验证错误时，它会在内部使用。
::

### 变体

使用`variant`属性更改文本区域的变体。

::component-code
---
忽略：
- 占位符
道具：
  颜色：中性
  变体：细微
  突出显示：假
  占位符：'键入内容...'
---
::

尺寸

使用`size`道具更改文本区域的大小。

::component-code
---
忽略：
- 占位符
道具：
  尺寸：xl
  占位符：'键入内容...'
---
::

### 图标

使用`icon`道具在文本区域内显示[](/docs/components/icon)图标。

::component-code
---
更漂亮：真的
忽略：
- 占位符
道具：
  图标：“i-lucide-搜索”
  尺寸：md
  变体：轮廓
  占位符：'搜索...'
  行数：1
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
  行数：1
---
::

阿凡达

使用`avatar`道具在文本区域内显示[](/docs/components/avatar)。

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
  行数：1
---
::

正在载入

使用`loading`道具在文本区域上显示加载图标。

::component-code
---
忽略：
  占位符
道具：
  载入：true
  结尾：false
  占位符：'搜索...'
  行数：1
---
::

### 载入图标

使用`loading-icon`属性来自订载入图标。预设为`i-lucide-loader-circle`。

::component-code
---
忽略：
- 占位符
道具类：
  载入：true
  加载图标：“i-lucide加载程序”
  占位符：'搜索...'
  行数：1
---
::

::framework-only
#nuxt（无文本）
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
您可以在`app.config.ts`的`ui.icons.loading`键下全局自定此图标。
:::

版本号
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
您可以在`ui.icons.loading`键下的`vite.config.ts`中全局自定义此图标。
:::
::

### 已停用

使用`disabled`道具禁用文本区域。

::component-code
---
忽略：
- 占位符
道具：
  已禁用：true
  占位符：'键入内容...'
---
::

活性成分

道具

：组件-支柱

::callout{icon="i-simple-icons-mdnwebdocs" to="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea#attributes" target="_blank"}
此组件还支持所有本机`<textarea>`HTML属性。
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
| 我的天啊|我的天啊|

主题

：组件主题

## 变更日志

：组件更改日志
