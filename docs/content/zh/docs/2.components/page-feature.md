---
title: 页面功能
description: '一个展示应用程序关键特性的组件。'
category: page
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/PageFeature.vue
---

## 使用情况

页面功能组件由[PageSection](/docs/components/page-section)组件用来显示[features](/docs/components/page-section#featuresPH08 @@.

标题：

使用`title`道具设置功能的标题。

::component-code
---
隐藏：
  班级
道具：
  标题：“主题”
  类别：'w-96'
---
::

说明：

使用`description`属性设置功能的描述。

::component-code
---
更漂亮：真的
隐藏：
  班级
忽略：
- 标题
道具：
  标题：“主题”
  description：'使用您自己的颜色、字体等自定义Nuxt UI。'
  类别：'w-96'
---
::

### 图标

使用`icon`道具来设定功能的图标。

::component-code
---
更漂亮：真的
隐藏：
  班级
忽略：
  019标题
  描述：
道具：
  标题：“主题”
  description：'使用您自己的颜色、字体等自定义Nuxt UI。'
  图标：“i-lucide-色板-书本”
  类别：'w-96'
---
::

链接

您可以从[`<NuxtLink>`](https://nuxt.com/docs/api/components/nuxt-link)元件传递任何属性，例如`to`、`target`、`rel`等。

::component-code
---
更漂亮：真的
隐藏：
  班级
忽略：
- 标题
  描述：
- 图标
  目标位置
道具类：
  标题：“主题”
  description：'使用您自己的颜色、字体等自定义Nuxt UI。'
  图标：“i-lucide-色板-书本”
  到：“/docs/入门/主题/设计系统”
  目标：空白（_B）
  类别：'w-96'
---
::

定位

使用`orientation`属性更改特征的方向。默认为`horizontal`。

::component-code
---
更漂亮：真的
隐藏：
  班级
忽略：
  标题
  描述：
  “- ”图标
道具：
  方向：'垂直'
  标题：“主题”
  description：'使用您自己的颜色、字体等自定义Nuxt UI。'
  图标：“i-lucide-色板-书本”
  类别：'w-96'
---
::

活性成分

道具

：组件-支柱

插槽

：组件插槽

主题

：组件主题

## 变更日志

：组件更改日志
