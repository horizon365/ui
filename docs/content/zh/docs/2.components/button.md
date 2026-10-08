---
description: 一个按钮元素，可以作为一个链接或触发一个动作。
category: element
keywords:
  - cta
  - action
  - btn
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Button.vue
---

## 使用情况

使用默认插槽设置按钮的标签。

::component-code
---
插槽：
  默认：按钮
---
::

### Label

使用`label`道具设置按钮的标签。

::component-code
---
道具：
  标签：按钮
---
::

### Color

使用`color`道具更改按钮的颜色。

::component-code
---
道具：
  颜色：中性
插槽：
  默认：按钮
---
::

### Variant

使用`variant`prop更改按钮的变体。

::component-code
---
道具：
  颜色：中性
  变体：轮廓
插槽：
  默认：按钮
---
::

### Size

使用`size`道具更改按钮的大小。

::component-code
---
道具：
  尺寸：xl
插槽：
  默认：按钮
---
::

### Icon

使用`icon`道具在按钮内显示[Icon](/docs/components/icon)。

::component-code
---
道具：
  图标：i-lucide-火箭
  尺寸：md
  颜色：原色
  变体：实体
插槽：
  默认：按钮
---
::

使用`leading`和`trailing`道具设置图标位置，或使用`leading-icon`和`trailing-icon`道具为每个位置设置不同的图标。

::component-code
---
道具：
  拖尾图标：i-透明箭头-右
  尺寸：md
插槽：
  默认：按钮
---
::

将`label`作为道具或插槽是可选的，因此您可以将Button用作仅图标按钮。

::component-code
---
道具：
  图标：i-lucide-搜索
  尺寸：md
  颜色：原色
  变体：实体
---
::

阿凡达

使用`avatar`道具在按钮内显示[](/docs/components/avatar)。

::component-code
---
更漂亮：真的
忽略：
- 头像.加载中
道具：
  头像：
    来源：'https：//github.com/nuxt.png'
    加载：惰性
  尺寸：md
  颜色：中性
  变体：轮廓
插槽：
  默认值：|

    按钮
---
::

将`label`作为道具或插槽是可选的，因此您可以将该按钮用作仅用于头像的按钮。

::component-code
---
更漂亮：真的
忽略：
- 头像.加载中
道具：
  头像：
    来源：'https：//github.com/nuxt.png'
    加载：惰性
  尺寸：md
  颜色：中性
  变体：轮廓
---
::

链接

您可以从[Link](/docs/components/link#props)元件传递任何属性，例如`to`、`target`等。

::component-code
---
忽略：
  目标位置
道具：
  发送至：https://github.com/nuxt/ui
  目标：空白（_B）
插槽：
  默认：按钮
---
::

当按钮是链接或使用`active`道具时，您可以使用`active-color`和`active-variant`道具自订作用中状态。

::component-code
---
更漂亮：真的
忽略：
  颜色
- 变体
项目名称：
  活动颜色：
    主要的
    第二个
    成功了
    @@信息
    警告：
    错误消息
    中性的
  活动变量：
    实心的
- 大纲
    软的
    微妙的
    幽灵，幽灵
- 链接
道具：
  活动：true
  颜色：中性
  变体：轮廓
  活动颜色：主色
  active变量：实体
插槽：
  默认值：|

    按钮
---

按钮
::

您也可以使用`active-class`和`inactive-class`属性来自订作用中状态。

::component-code
---
道具：
  活动：true
  活动类：'字体粗体'
  非活动类：“字体-浅色”
插槽：
  默认：按钮
---

按钮
::

::tip
您可以在`app.config.ts`文件中的`ui.button.variants.active`项下全局配置这些样式。

```ts
export default defineAppConfig({
  ui: {
    button: {
      variants: {
        active: {
          true: {
            base: 'font-bold'
          }
        }
      }
    }
  }
})
```
::

正在加载

使用`loading`道具显示加载图标并禁用按钮。

::component-code
---
道具：
  载入：true
  结尾：false
插槽：
  默认：按钮
---
按钮
::

使用`loading-auto`道具，在`@click`承诺未完成时自动显示载入图标。

：组件示例{name="button-loading-auto-example"}

这也适用于[Form](/docs/components/form)组件。

：组件示例{name="button-loading-auto-form-example"}

### Loading（加载）图标

使用`loading-icon`属性来自订载入图标。预设为`i-lucide-loader-circle`。

::component-code
---
道具：
  载入：true
  加载图标："i-lucide加载程序"
插槽：
  默认：按钮
---
按钮
::

::framework-only
#nuxt（无文本）
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
您可以在`ui.icons.loading`键下的`app.config.ts`中全局自定义此图标。
:::

版本号
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
您可以在`vite.config.ts`的`ui.icons.loading`键下全局自定此图标。
:::
::

### 已停用

使用`disabled`道具禁用按钮。

::component-code
---
道具：
  已禁用：true
插槽：
  默认：按钮
---

按钮
::

示例

第1095章道具

使用`class`属性覆盖Button的基本样式。

::component-code
---
道具：
  类别：'粗体四舍五入完整字型'
插槽：
  默认：按钮
---
::

我的天啊！

使用`ui`属性覆盖Button的插槽样式。

::component-code
---
更漂亮：真的
忽略：
- 用户界面
- 颜色
- 变体
- 图标
道具：
  图标：i-lucide-火箭
  颜色：中性
  变体：轮廓
  用户界面：
    leadingIcon：'文本-主'
插槽：
  默认值：|

    按钮
---
::

## 活性成分

### 道具

：组件-支柱

::callout{icon="i-simple-icons-mdnwebdocs" to="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attributes" target="_blank"}
此组件还支持所有本机`<button>`HTML属性。
::

::callout{icon="i-simple-icons-github" to="https://github.com/nuxt/ui/blob/v4/src/runtime/components/Link.vue#L13"}
`Button`组件扩展了`Link`组件。请查看GitHub上的源代码。
::

插槽

：组件插槽

## 主题

：组件主题

## 变更日志

：组件更改日志
