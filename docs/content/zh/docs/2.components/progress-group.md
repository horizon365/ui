---
title: ProgressGroup
description: 分成多个段的进度条，这些段加起来就是一个总数。
category: element
navigation.badge: New
keywords:
  - meter
  - meter group
  - segmented progress
  - stacked bar
  - breakdown
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/ProgressGroup.vue
---

## 使用情况

使用ProgressGroup组件可以将多个值显示为单个进度条的分段。

::component-code
---
收阖：true
忽略：
- 个项目
- 最大值
  班级
外部：
  项目数
外部类型：
  - ProgressGroupItem []进度组项目
道具：
  最大值：128
  项目名称：
    - 标签："系统"
      数值：24
      颜色："中性"
      图标："i-lucide-cog"
    - 标签："应用程序"
      数值：8
      颜色：'错误'
      图标："i-lucide应用程序窗口"
    - 标签："文档"
      数值：12
      颜色："警告"
      图标："i-lucide文件"
    - 标签："多媒体"
      数值：42
      颜色："成功"
      图标："i-lucide-film"
  类别：'w-96'
---
::

项目

使用`items`属性作为具有下列属性的对象数组：

我的天啊!
我的天啊!
我的天啊!
@@小标题：小标题：小标题
我的天啊!
我的天啊!
我的天啊!

::component-code
---
收阖：true
忽略：
  项目
  班级
外部：
  项目名称
外部类型：
  - ProgressGroupItem[]进度组项目
道具：
  项目名称：
    - 标签：“计算”
      数值：42
      颜色：'主要'
    标签：“存储”
      数值：18
      颜色：“信息”
    标签：“带宽”
      数值：9
      颜色：“警告”
  类别：'w-96'
---
::

::note
没有`icon`的项目在列表中会显示一个彩色圆点。
::

最大值

使用`max`属性来设定所有项目加起来的值。预设值为`100`。

::component-code
---
收阖：true
忽略：
  个项目
  班级
外部：
- 个项目
外部类型：
  - ProgressGroupItem[]进度组项目
道具：
  最大值：512
  项目名称：
    标签：“已使用”
      数值：128
      颜色：'主要'
    - 标签：“保留”
      数值：64
      颜色：“中性”
  类别：'w-96'
---
::

::note
值被限制在`0`和`max`之间，并且加起来超过`max`的分段将按比例共享轨道。
::

状态

使用`status`道具在条形图上方显示合计值。

::component-code
---
收阖：true
忽略：
  项目数
  班级
外部：
- 个项目
外部类型：
  - ProgressGroupItem []进度组项目
道具：
  状态：真
  最大值：128
  项目名称：
    - 标签："系统"
      数值：24
      颜色："中性"
    - 标签："应用程序"
      数值：8
      颜色：'错误'
    标签："多媒体"
      数值：42
      颜色："成功"
  类别：'w-96'
---
::

::tip
状态会追踪长条图的结尾，请使用`:ui="{ status: 'w-full' }"`让它横跨整个长度。
::

颜色

使用`color`道具更改每个未设置其自身颜色的线段的颜色。

::component-code
---
收阖：true
忽略：
  项目数
  班级
外部：
- 个项目
外部类型：
  - 进度组项目[]
道具：
  颜色：中性
  项目名称：
    - 标签：“读取”
      数值：42
    - 标签：“写入”
      数值：18
  类别：'w-96'
---
::

::tip
此道具和每个项目的`color`都接受任何CSS颜色值，这对于主题之外的调色板非常方便。
::

尺寸

使用`size`属性更改ProgressGroup的大小。

::component-code
---
收阖：true
忽略：
  项目数
  班级
外部：
- 个项目
外部类型：
  - ProgressGroupItem[]进度组项目
道具：
  尺寸：xl
  项目名称：
    - 标签：“读取”
      数值：42
      颜色：'主要'
    - 标签：“写入”
      数值：18
      颜色：“信息”
  类别：'w-96'
---
::

方向

使用`orientation`属性更改ProgressGroup的方向。默认为`horizontal`。

::component-code
---
收阖：true
忽略：
  项目数
  班级
外部：
  项目数
外部类型：
  - ProgressGroupItem[]进度组项目
道具：
  方向：垂直
  项目名称：
    - 标签：“已读”
      数值：42
      颜色：'主要'
    - 标签：“写入”
      数值：18
      颜色：“信息”
  类别：'h-48'
---
::

示例

### 使用状态插槽

使用`#status`插槽，用您自己的内容替换合计百分比。

::component-example
---
收阖：true
名称：进度组状态示例
---
::

### 使用项目插槽

使用`#item-label`和`#item-trailing`插槽来更改每个条目的显示内容。这两个插槽都将接收`item`、`index`和`percent`。

::component-example
---
收阖：true
名称：进度-组-项-示例
---
::

### 使用自定义颜色

为每个项目指定一种CSS颜色，以便在主题调色板之外构建细目。

::component-example
---
收阖：true
名称：进度组自定义颜色示例
---
::

## 活性成分

### 道具

：组件-支柱

插槽数

：组件插槽

主题

：组件主题

## 变更日志

：组件更改日志
