---
title: 价格计划
description: '要在定价页面中显示的可自定义定价计划。'
category: page
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/PricingPlan.vue
---

## 使用情况

PricingPlan组件提供了一种灵活的方式来显示包含可定制内容（包括标题、描述、价格、功能等）的定价计划。

::code-preview

::u-pricing-plan
---
标题：“独奏”
description：'为盗版者和独立黑客提供。'
售价：“$249”
折扣：$199
计费周期：'/月'
徽章：“最受欢迎”
特点：
  - '一个开发人员'
  - '无限个项目'
  - '访问GitHub存储库'
  - '无限制的修补程序和次要更新'
  - '终身访问'
按钮：
  标签：“立即购买”
类别：'w-96'
---
::

::

::tip{to="/docs/components/pricing-plans"}
使用`PricingPlans`组件可以在响应式网格布局中显示多个定价计划。
::

标题：

使用`title`道具设置定价计划的标题。

::component-code
---
忽略：
  班级
道具：
  标题：“独奏”
  类别：'w-96'
---
::

说明：

使用`description`属性设置定价计划的说明。

::component-code
---
隐藏：
  班级
忽略：
- 标题
道具：
  标题：“独奏”
  description：'为盗版者和独立黑客提供。'
  类别：'w-96'
---
::

### 徽章

使用`badge`道具在定价计划的标题旁边显示[Badge](/docs/components/badge)。

::component-code
---
更漂亮：真的
隐藏：
  班级
忽略：
- 标题
  描述：
道具：
  标题：“独奏”
  description：'为盗版者和独立黑客提供。'
  徽章：“最受欢迎”
  类别：'w-96'
---
::

您可以从[Badge](/docs/components/badge#props)组件传递任何属性来自订该组件。

::component-code
---
更漂亮：真的
隐藏：
  一个班级
忽略：
  标题
  描述
- 徽章标签
- 徽章颜色
- 徽章.变体
道具：
  标题：“独奏”
  description：'为盗版者和独立黑客提供。'
  徽章：
    label：最受欢迎
    颜色：“中性”
    变体：'solid'
  类别：'w-96'
---
::

价格

使用`price`道具设置定价计划的价格。

::component-code
---
更漂亮：真的
隐藏：
  班级
忽略：
  标题
  描述：
道具：
  标题：“独奏”
  description：'为盗版者和独立黑客提供。'
  售价：“$249”
  类别：'w-96'
---
::

折扣

使用`discount`道具设置折扣价格，该价格将显示在原始价格旁边（显示时将带有删除线）。

::component-code
---
更漂亮：真的
隐藏：
  班级
忽略：
  标题：
  描述：
道具：
  标题：“独奏”
  description：'为盗版者和独立黑客提供。'
  售价：“$249”
  折扣：$199
  类别：'w-96'
---
::

账单

使用`billing-cycle`和/或`billing-period`道具来显示定价计划的计费信息。

::component-code
---
更漂亮：真的
隐藏：
  班级
忽略：
  标题
  描述
道具：
  标题：“独奏”
  description：'为盗版者和独立黑客提供。'
  售价：『 $9 』
  计费周期：'/月'
  billingPeriod：'每年计费'
  类别：'w-96'
---
::

功能特性

使用`features`属性作为字符串数组，以显示PricingPlan上的功能列表：

::component-code
---
更漂亮：真的
隐藏：
  班级
忽略：
  标题：
  描述：
  价格
  功能特性
道具：
  标题：“独奏”
  description：'为盗版者和独立黑客提供。'
  售价：“$249”
  特点：
    - '一个开发人员'
    - '无限个项目'
    - '访问GitHub存储库'
    - '无限制的修补程序和次要更新'
    - '终身访问'
  类别：'w-96'
---
::

::framework-only
#nuxt（无文本）
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
您可以在`ui.icons.success`键下的`app.config.ts`中全局自定义此图标。
:::

版本号
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
您可以在`ui.icons.success`键下的`vite.config.ts`中全局自定义此图标。
:::
::

您也可以传递具有下列属性的物件数组：

我的天啊！
我的天啊！

::component-code
---
更漂亮：真的
隐藏：
  班级
外部：
  功能特性
外部类型：
- 定价计划功能[]
忽略：
  标题：
  描述：
  价格
  功能特性
道具：
  标题：“独奏”
  description：'为盗版者和独立黑客提供。'
  售价：“$249”
  特点：
    - title：“一个开发人员”
      图标：i-lucide用户
    - title：'无限的项目'
      图标：i-lucide-无穷大
    - title：'访问GitHub存储库'
      图标：i-lucide-github
    - title：'无限制的修补程序和次要更新'
      图标：i-lucide-刷新-CW
    - title：'终身访问权限'
      图标：i-lucide时钟
  类别：'w-96'
---
::

### 按钮

将`button`属性与[Button](/docs/components/button)组件中的任何属性一起使用，以在PricingPlan的底部显示一个按钮。

::component-code
---
更漂亮：真的
隐藏：
  班级
忽略：
- 标题
  描述：
  价格
  功能特性
道具：
  标题：“独奏”
  description：'为盗版者和独立黑客提供。'
  售价：“$249”
  特点：
    - '一个开发人员'
    - '无限个项目'
    - '访问GitHub存储库'
    - '无限制的修补程序和次要更新'
    - '终身访问'
  按钮：
    标签：“立即购买”
  类别：'w-96'
---
::

::tip
使用`onClick`字段添加一个点击处理程序以触发购买计划。
::

### 变体

使用`variant`道具更改定价计划的变体。

::component-code
---
更漂亮：真的
隐藏：
- 类
忽略：
- 标题
  描述：
  价格为105英镑
  功能特性
  按钮标签
道具：
  标题：“独奏”
  description：'为盗版者和独立黑客提供。'
  售价：“$249”
  特点：
    - '一个开发人员'
    - '无限个项目'
    - '访问GitHub存储库'
    - '无限制的修补程序和次要更新'
    - '终身访问'
  按钮：
    标签：“立即购买”
  变体：“细微”
  类别：'w-96'
---
::

方向图

使用`orientation`属性更改定价计划的方向。默认为`vertical`。

::component-code
---
更漂亮：真的
隐藏：
  116班
忽略：
- 标题
  描述
  价格为119
  功能特性
  @@按钮标签
道具：
  标题：“独奏”
  description：'为盗版者和独立黑客提供。'
  售价：“$249”
  特点：
    - '一个开发人员'
    - '无限个项目'
    - '访问GitHub存储库'
    - '终身访问'
  按钮：
    标签：“立即购买”
  方向：水平
  变体：'outline'
  类别：'w-完整'
---
::

### 标语

使用`tagline`道具在价格上方显示标语文本。

::component-code
---
更漂亮：真的
隐藏：
  128班
忽略：
  标题
  描述：
  价格为131
  功能特性
  按钮标签
  方向
道具：
  标题：“独奏”
  description：'为盗版者和独立黑客提供。'
  售价：“$249”
  特点：
    - '一个开发人员'
    - '无限个项目'
    - '访问GitHub存储库'
    - '终身访问'
  按钮：
    标签：“立即购买”
  方向：水平
  标语：“一次付款，终身拥有”
  类别：'w-完整'
---
::

术语

使用`terms`道具在价格下方显示条款。

::component-code
---
更漂亮：真的
隐藏：
  第141课
忽略：
  第142章
  描述
  价格为144
  功能特性
  按钮标签
  方向
- 标语
道具：
  标题：“独奏”
  description：'为盗版者和独立黑客提供。'
  售价：“$249”
  特点：
    - '一个开发人员'
    - '无限个项目'
    - '访问GitHub存储库'
    - '终身访问'
  按钮：
    标签：“立即购买”
  方向：水平
  标语：“一次付款，终身拥有”
  条款：“发票和收据可用。”
  类别：'w-完整'
---
::

### 醒目提示

使用`highlight`道具在PricingPlan周围显示突出显示的边框。

::component-code
---
更漂亮：真的
隐藏：
  155级
忽略：
  标题
  描述
  价格158
  功能特性
- 按钮标签
道具：
  标题：“独奏”
  description：'为盗版者和独立黑客提供。'
  售价：“$249”
  特点：
    - '一个开发人员'
    - '无限个项目'
    - '访问GitHub存储库'
    - '无限制的修补程序和次要更新'
    - '终身访问'
  按钮：
    标签：“立即购买”
  高亮显示：真
  类别：'w-96'
---
::

比例尺

使用`scale`道具制作比其他定价计划更大的定价计划。

::note{to="/docs/components/pricing-plans#scale"}
查看PricingPlans的`scale`示例，了解它是如何工作的，因为它本身很难演示。
::

## API

### Props

：组件-支柱

插槽数

：组件插槽

## Theme

：组件主题

## 变更日志

：组件更改日志
