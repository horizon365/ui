---
description: 吸引用户注意力的一种方法。
category: element
keywords:
  - notice
  - inline notification
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Alert.vue
---

## 使用情况

标题：

使用`title`道具设置警报的标题。

::component-code
---
道具：
  title：“小心！”
---
::

说明：

使用`description`属性设置警报的说明。

::component-code
---
更漂亮：真的
道具：
  title：“小心！”
  description：'您可以在应用程序配置中更改主颜色。'
---
::

### 图标

使用“`icon`”道具来显示“[”图标。

::component-code
---
更漂亮：真的
忽略：
- 标题
  说明：
道具：
  title：“小心！”
  description：'您可以在应用程序配置中更改主颜色。'
  图标：“i-lucide-终端”
---
::

虚拟人偶

使用“`avatar`”道具来显示“化身”。

::component-code
---
更漂亮：真的
忽略：
  019标题
  描述：
道具：
  title：“小心！”
  description：'您可以在应用程序配置中更改主颜色。'
  虚拟化身.src：“https：//github.com/nuxt.png”（网址：http：//github.com/nuxt.png）
---
::

彩色的

使用`color`道具更改警报的颜色。

::component-code
---
更漂亮：真的
忽略：
  标题：
  描述：
  图标
道具：
  颜色：中性
  title：“小心！”
  description：'您可以在应用程序配置中更改主颜色。'
  图标：“i-lucide-终端”
---
::

### 变体

使用`variant`道具更改警报的变体。

::component-code
---
更漂亮：真的
忽略：
  标题
  描述
- 图标
道具：
  颜色：中性
  变体：细微
  title：“小心！”
  description：'您可以在应用程序配置中更改主颜色。'
  图标：“i-lucide-终端”
---
::

### 关闭

使用`close`道具来显示[按钮](/docs/components/button)，以解除警示。

::tip
单击关闭按钮时，将发出`update:open`事件。
::

::component-code
---
更漂亮：真的
忽略：
  标题
  描述：
  关闭
  颜色
- 变体
道具：
  title：“小心！”
  description：'您可以在应用程序配置中更改主颜色。'
  颜色：中性
  变体：轮廓
  关闭：true
---
::

您可以从[Button](/docs/components/button)组件传递任何属性来自订它。

::component-code
---
更漂亮：真的
忽略：
  标题
  描述
  关闭. color
- 关闭变量
  颜色
- 变体
道具：
  title：“注意！”
  description：'您可以在应用程序配置中更改主颜色。'
  颜色：中性
  变体：轮廓
  结束语：
    颜色：原色
    变体：轮廓
    类别：'四舍五入-完整'
---
::

### 关闭图标

使用`close-icon`道具来自订关闭按钮[Icon](/docs/components/icon)。预设值为`i-lucide-x`。

::component-code
---
更漂亮：真的
忽略：
  标题：
  描述：
  关闭
  颜色
- 变体
道具：
  title：“小心！”
  description：'您可以在应用程序配置中更改主颜色。'
  颜色：中性
  变体：轮廓
  关闭：true
  关闭图标：'i-透明箭头-右'
---
::

::framework-only
#nuxt（无文本）
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
您可以在`ui.icons.close`键下的`app.config.ts`中全局自定义此图标。
:::

版本号
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
您可以在`vite.config.ts`的`ui.icons.close`键下全局自定此图标。
:::
::

操作

使用`actions`属性将一些[按钮](

::component-code
---
更漂亮：真的
忽略：
  标题
  操作
  颜色
- 变体
道具：
  title：“小心！”
  description：'您可以在应用程序配置中更改主颜色。'
  颜色：中性
  变体：轮廓
  动作：
    标签：操作1
    标签：操作2
      颜色：中性
      变体：细微
---
::

方向

使用`orientation`道具更改警报的方向。

::component-code
---
更漂亮：真的
忽略：
  标题：
  操作
  彩色的
- 变体
道具：
  title：“小心！”
  description：'您可以在应用程序配置中更改主颜色。'
  颜色：中性
  变体：轮廓
  方向：水平
  动作：
    标签：操作1
    @@标签：操作2
      颜色：中性
      变体：细微
---
::

示例

第1000章道具

使用`class`属性覆盖警报的基本样式。

::component-code
---
更漂亮：真的
忽略：
  标题：
  描述
道具：
  title：“小心！”
  description：'您可以在应用程序配置中更改主颜色。'
  类别：'舍入-无'
---
::

第1096章道具

使用`ui`属性覆盖报警的插槽样式。

::component-code
---
更漂亮：真的
忽略：
  我的天
  标题：
- 说明
- 图标
道具：
  title：“小心！”
  description：'您可以在应用程序配置中更改主颜色。'
  图标：i-lucide-火箭
  用户界面：
    图标：“大小-11”
---
::

## 活性成分

### 道具

：组件-支柱

插槽

：组件插槽

### 排放量

：组件发射

主题

：组件主题

## 变更日志

：组件更改日志
