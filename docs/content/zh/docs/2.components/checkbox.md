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

## 使用情况

使用`v-model`指令控制复选框的选中状态。

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
道具：
  默认值：真
---
::

不确定

在`v-model`指令或`default-value`属性中使用`indeterminate`值，将复选框设置为[indeterminate状态](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox#indeterminate_state_checkboxes)。

::component-code
---
忽略：
  - 默认值
道具：
  defaultValue：'不确定'
---
::

### 不确定图标

使用`indeterminate-icon`属性自定义不确定图标。默认为`i-lucide-minus`。

::component-code
---
忽略：
  - 默认值
道具：
  defaultValue：'不确定'
  不确定图标：“i-lucide-plus”
---
::

::framework-only
#nuxt（无文本）
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
您可以在`ui.icons.minus`键下的`app.config.ts`中全局自定义此图标。
:::

版本号
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
您可以在`ui.icons.minus`键下的`vite.config.ts`中全局自定义此图标。
:::
::

标签

使用`label`属性来设定核取方块的标签。

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

使用`description`属性设置复选框的说明。

::component-code
---
忽略：
  标签
道具：
  label：检查我
  description：'这是一个复选框。'
---
::

图标

使用`icon`属性来设定核取方块被核取时的图标。预设为`i-lucide-check`。

::component-code
---
忽略：
  标签
  - 默认值
道具：
  图标：“i-lucide-heart”（我的心）
  默认值：真
  label：检查我
---
::

::framework-only
#nuxt（无文本）
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
您可以在`ui.icons.check`键下的`app.config.ts`中全局自定义此图标。
:::

版本号
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
您可以在`vite.config.ts`的`ui.icons.check`键下全局自定此图标。
:::
::

颜色

使用`color`道具更改复选框的颜色。

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

### 变体

使用`variant`属性来变更核取方块的变体。

::component-code
---
忽略：
  标签
  - 默认值
道具：
  颜色：'主要'
  变体：'card'
  默认值：真
  label：检查我
---
::

尺寸

使用`size`道具更改复选框的大小。

::component-code
---
忽略：
  标签
  - 默认值
道具：
  尺寸：xl
  变量：列表
  默认值：真
  label：检查我
---
::

### 指标

使用`indicator`道具来变更位置或隐藏指标。预设值为`start`。

::note
当`indicator`为`hidden`时，图标会显示在标签上方。
::

::component-code
---
更漂亮：真的
忽略：
  标签：
  图标
  - 默认值
道具：
  指示器：“隐藏”
  变体：'card'
  图标：“i-lucide-heart”（我的心）
  默认值：真
  label：检查我
---
::

### 已停用

使用`disabled`道具禁用复选框。

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

## Changelog

：组件更改日志
