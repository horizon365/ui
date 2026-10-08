---
title: PageCard
description: '显示标题、说明和可选链接的预样式卡组件。'
category: page
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/PageCard.vue
---

## 使用情况

PageCard组件提供了一种灵活的方法，可在默认插槽中显示带有插图的卡片中的内容。

::code-preview

::u-page-card
---
标题：“顺风CSS”
描述：'Nuxt UI集成了最新的Tailwind CSS，带来了显著的改进。'
图标：“i-simple-icons-tailwindcss”（简单图标-顺风css）
类别：'w-96'
---

：img{src="/tailwindcss-v4.svg" alt="Tailwind CSS" class="w-full"}
::

::

::tip
请使用[PageGrid](/docs/components/page-grid)、[PageColumns](/docs/components/page-columns)或[PageList](/docs/components/page-list)组件来显示多个页面卡。
::

### 标题

使用`title`道具来设定卡片的标题。

::component-code
---
隐藏：
  班级
道具类：
  标题：“顺风CSS”
  类别：'w-96'
---
::

说明：

使用`description`道具来设定卡片的描述。

::component-code
---
更漂亮：真的
隐藏：
  班级
忽略：
- 标题
道具：
  标题：“顺风CSS”
  描述：'Nuxt UI集成了最新的Tailwind CSS，带来了显著的改进。'
  类别：'w-96'
---
::

### 图标

使用`icon`道具来设定卡片的图标。

::component-code
---
更漂亮：真的
隐藏：
  班级
忽略：
  标题：
  描述：
道具：
  标题：“顺风CSS”
  描述：'Nuxt UI集成了最新的Tailwind CSS，带来了显著的改进。'
  图标：“i-simple-icons-tailwindcss”（简单图标-顺风css）
  类别：'w-96'
---
::

链接

您可以从[`<NuxtLink>`](https://nuxt.com/docs/api/components/nuxt-link)组件传递任何属性，例如`to`、`target`、`rel`等。

::component-code
---
更漂亮：真的
隐藏：
  班级
忽略：
  标题
  描述：
- 图标
  目标位置
道具：
  标题：“顺风CSS”
  描述：'Nuxt UI集成了最新的Tailwind CSS，带来了显著的改进。'
  图标：“i-simple-icons-tailwindcss”（简单图标-顺风css）
  发送至：“https：//tailwindcss.com/blog/tailwindcss-v4”
  目标：空白（_B）
  类别：'w-96'
---
::

### 变体

使用`variant`道具来变更卡片的样式。

::component-code
---
更漂亮：真的
隐藏：
  班级
忽略：
  标题：
  描述：
  图标
  到了
  目的地
道具：
  标题：“顺风CSS”
  描述：'Nuxt UI集成了最新的Tailwind CSS，带来了显著的改进。'
  图标：“i-simple-icons-tailwindcss”（简单图标-顺风css）
  发送至：“https：//tailwindcss.com/blog/tailwindcss-v4”
  目标：空白（_B）
  变体：软
  类别：'w-96'
---
::

::tip
当使用`solid`变体来反转颜色时，您可以将`light`或`dark`类应用于`links`插槽。
::

方向

使用`orientation`道具更改默认插槽的方向。默认为`vertical`。

::component-code
---
更漂亮：真的
忽略：
  标题：
  描述：
  图标
道具：
  标题：“顺风CSS”
  描述：'Nuxt UI集成了最新的Tailwind CSS，带来了显著的改进。'
  图标：“i-simple-icons-tailwindcss”（简单图标-顺风css）
  方向：水平
插槽：
  默认值：|

    058号
---

：img{src="/tailwindcss-v4.svg" alt="Tailwind CSS" class="w-full"}您的位置：首页
::

反向

使用`reverse`道具反转默认插槽的方向。

::component-code
---
更漂亮：真的
忽略：
  标题：
  描述：
  图标
道具：
  标题：“顺风CSS”
  描述：'Nuxt UI集成了最新的Tailwind CSS，带来了显著的改进。'
  图标：“i-simple-icons-tailwindcss”（简单图标-顺风css）
  方向：水平
  反转：真
插槽：
  默认值：|

<img src="/tailwindcss-v4.svg" alt="Tailwind CSS" class="w-full" />的
---

：img{src="/tailwindcss-v4.svg" alt="Tailwind CSS" class="w-full"}
::

醒目提示

使用`highlight`和`highlight-color`道具在卡片周围显示突出显示的边框。

::component-code
---
更漂亮：真的
隐藏：
  班级
忽略：
  标题：
  描述：
  图标（英文）
  定位
道具：
  标题："顺风CSS"
  描述：'Nuxt UI集成了最新的Tailwind CSS，带来了显著的改进。'
  图标："i-simple-icons-tailwindcss"（简单图标-顺风css）
  方向：水平
  高亮显示：真
  highlightColor："主要"
插槽：
  默认值：|

    075号
---

：img{src="/tailwindcss-v4.svg" alt="Tailwind CSS" class="w-full"}
::

焦点

使用`spotlight`和`spotlight-color`道具来显示聚光灯效果，该效果在鼠标悬停时跟随鼠标光标并高亮显示边框。

::note
当使用`to`道具时，聚光灯效果将取代悬停效果。最好将其与`outline`变体一起使用。
::

::component-code
---
更漂亮：真的
隐藏：
  班级
忽略：
  标题：
  描述：
  图标
  定位
道具：
  标题："顺风CSS"
  描述：'Nuxt UI集成了最新的Tailwind CSS，带来了显著的改进。'
  图标："i-simple-icons-tailwindcss"（简单图标-顺风css）
  方向：水平
  聚光灯：true
  聚光灯颜色：'主要'
插槽：
  默认值：|

    第087章
---

：img{src="/tailwindcss-v4.svg" alt="Tailwind CSS" class="w-full"}
::

::tip
您也可以使用`--spotlight-color`和`--spotlight-size`CSS变数自订色彩和大小：

```vue
<template>
  <UPageCard spotlight class="[--spotlight-color:var(--ui-error)] [--spotlight-size:200px]" />
</template>
```
::

示例

### 作为一个证明

在`header`或`footer`插槽中使用[User](/docs/components/user)组件，使卡片看起来像是一张推荐信。

::component-example
---
名称："页码-卡片-证明-示例"
---
::

::tip{to="/docs/components/page-columns"}
您可以使用`PageColumns`组件在多栏版面配置中显示多个PageCard。
::

## 活性成分

### 道具

：组件-支柱

### Slots

：组件插槽

## Theme

：组件主题

## Changelog

：组件更改日志
