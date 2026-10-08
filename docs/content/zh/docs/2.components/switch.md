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

## 使用情况

使用`v-model`指令可控制Switch的选中状态。

::component-code
---
忽略：
  - 模型值
外部：
  - 模型值
道具：
  模型值：true
---
::

当您不需要控制其状态时，请使用`default-value`属性来设定初始值。

::component-code
---
忽略：
  - 默认值
道具类：
  默认值：真
---
::

标签

使用`label`道具设置交换机的标签。

::component-code
---
道具：
  label：检查我
---
::

使用`required`道具时，会在标签旁边添加一个星号。

::component-code
---
忽略：
  标签
道具：
  必填项：true
  label：检查我
---
::

说明：

使用`description`属性设置交换机的说明。

::component-code
---
忽略：
  标签
道具：
  label：检查我
  description：'这是一个复选框。'
---
::

### 图标

使用`checked-icon`和`unchecked-icon`道具设置选中和未选中时的交换机图标。

::component-code
---
更漂亮：真的
忽略：
  标签
  - 默认值
道具：
  未选中图标：“i-lucide-x”
  选中图标：“i-lucide-选中”
  默认值：真
  label：检查我
---
::

正在载入

使用`loading`道具在交换机上显示加载图标。

::component-code
---
忽略：
  标签
  - 默认值
道具：
  载入：true
  默认值：真
  label：检查我
---
::

### Loading（加载）图标

使用`loading-icon`属性来自订载入图标。预设为`i-lucide-loader-circle`。

::component-code
---
忽略：
  标签
  - 默认值
道具：
  载入：true
  加载图标："i-lucide加载程序"
  默认值：真
  label：检查我
---
::

::framework-only
#nuxt（无文本）
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
您可以在`app.config.ts`的`ui.icons.loading`键下全局自定此图标。
:::

版本号
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
您可以在`vite.config.ts`的`ui.icons.loading`键下全局自定此图标。
:::
::

彩色的

使用`color`道具更改交换机的颜色。

::component-code
---
忽略：
  标签
  - 默认值
道具：
  颜色：中性
  默认值：真
  label：检查我
---
::

尺寸

使用`size`道具更改交换机的大小。

::component-code
---
忽略：
  标签
  - 默认值
道具：
  尺寸：xl
  默认值：真
  label：检查我
---
::

### 已禁用

使用`disabled`道具禁用交换机。

::component-code
---
忽略：
  标签
道具：
  已禁用：true
  label：检查我
---
::

活性成分

道具

：组件-支柱

::callout{icon="i-simple-icons-mdnwebdocs" to="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attributes" target="_blank"}
此组件还支持所有本机`<button>`HTML属性。
::

插槽

：组件插槽

发射器

：组件发射

主题

：组件主题

## 变更日志

：组件更改日志
