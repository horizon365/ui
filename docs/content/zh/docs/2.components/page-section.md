---
title: 页面部分
description: '为您的页面提供响应部分。'
category: page
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/PageSection.vue
---

## 使用情况

PageSection组件将您的内容包装在[Container](/docs/components/container)中，同时保持了全宽灵活性，使您可以轻松地添加背景色、图像或图案。它提供了一种灵活的方式来显示内容，并在默认插槽中显示插图。

::code-preview

::u-page-section
---
title：'美丽的Vue UI组件'
产品说明："Nuxt UI提供了一套全面的组件和实用程序，可帮助您使用Vue和Nuxt构建美观且易于访问的Web应用程序。"
标题："功能"
特点：
  - title："图标"
    描述："Nuxt UI与Nuxt Icon集成，可从Iconify访问超过200，000个图标。"
    图标："我-透明-微笑"
    到：'/docs/入门/集成/图标'
  - title："字体"
    描述：'Nuxt UI与Nuxt字体集成，以提供即插即用字体优化。'
    图标："i-lucide-a-大-小"
    到："/docs/入门/集成/字体"
  - title："彩色模式"
    描述："Nuxt UI与Nuxt颜色模式集成，可在亮暗之间切换。"
    图标："i-lucide-日月"
    到：'/docs/入门/整合/色彩模式'
---
::

::

在[PageHero](/docs/components/page-hero)组件之后使用它：

```vue {4}
<template>
  <UPageHero />

  <UPageSection />
</template>
```

### 标题

使用`title`道具设置节的标题。

::component-code
---
道具：
  title：'美丽的Vue UI组件'
---
::

说明：

使用`description`属性设置节的说明。

::component-code
---
更漂亮：真的
忽略：
  标题：
道具：
  title：'美丽的Vue UI组件'
  产品说明："Nuxt UI提供了一套全面的组件和实用程序，可帮助您使用Vue和Nuxt构建美观且易于访问的Web应用程序。"
---
::

标题：

使用`headline`道具设置节的标题。

::component-code
---
更漂亮：真的
忽略：
  标题
  描述：
道具：
  title：'美丽的Vue UI组件'
  产品说明："Nuxt UI提供了一套全面的组件和实用程序，可帮助您使用Vue和Nuxt构建美观且易于访问的Web应用程序。"
  标题：“功能”
---
::

### 图标

使用`icon`道具来设定区段的图标。

::component-code
---
更漂亮：真的
忽略：
- 标题
  描述：
道具类：
  title：'美丽的Vue UI组件'
  产品说明：“Nuxt UI提供了一套全面的组件和实用程序，可帮助您使用Vue和Nuxt构建美观且易于访问的Web应用程序。”
  图标：“i-lucide-火箭”
---
::

功能特性

使用`features`属性可在说明下将[PageFeature](/docs/components/page-feature)的列表显示为具有下列属性的对象数组：

我的天啊！
我的天啊！
我的天啊！
我的天啊！

您可以从[Link](/docs/components/link#props)元件传递任何属性，例如`to`、`target`等。

::component-code
---
更漂亮：真的
外部：
  功能特性
外部类型：
  - 页面功能属性[]
忽略：
  标题
  描述
  功能特性
道具：
  title：'美丽的Vue UI组件'
  产品说明：“Nuxt UI提供了一套全面的组件和实用程序，可帮助您使用Vue和Nuxt构建美观且易于访问的Web应用程序。”
  特点：
    - title：“图标”
      描述：“Nuxt UI与Nuxt Icon集成，可从Iconify访问超过200，000个图标。”
      图标：“我-透明-微笑”
      到：'/docs/入门/集成/图标'
    标题：“字体”
      描述：'Nuxt UI与Nuxt字体集成，以提供即插即用字体优化。'
      图标：“i-lucide-a-大-小”
      到：“/docs/入门/集成/字体”
    - title：“彩色模式”
      描述：“Nuxt UI与Nuxt颜色模式集成，可在亮暗之间切换。”
      图标：“i-lucide-日月”
      到：'/docs/入门/整合/色彩模式'
---
::

链接

使用`links`属性在描述下显示[按钮](/docs/components/button的列表。

::component-code
---
更漂亮：真的
外部：
  链接
外部类型：
  - 按钮属性[]
忽略：
  标题：
  描述：
  链接
道具：
  title：'美丽的Vue UI组件'
  产品说明：“Nuxt UI提供了一套全面的组件和实用程序，可帮助您使用Vue和Nuxt构建美观且易于访问的Web应用程序。”
  链接：
    - 标签：“开始使用”
      收件人：“/docs/开始使用”
      图标：“i-lucide-square-play”（透明方块游戏）
      颜色：“中性”
    - label：“浏览组件”
      到：“/docs/组件/应用程序”
      颜色：“中性”
      变体：“细微”
      尾部图标：'i-透明箭头-右'
---
::

方向

使用`orientation`道具更改默认插槽的方向。默认为`vertical`。

::component-code
---
更漂亮：真的
外部：
  功能特性
  链接
外部类型：
  - 页面功能属性[]
  - 按钮属性[]
忽略：
  标题：
  描述：
  图标
  功能特性
  链接
道具：
  title：'美丽的Vue UI组件'
  产品说明：“Nuxt UI提供了一套全面的组件和实用程序，可帮助您使用Vue和Nuxt构建美观且易于访问的Web应用程序。”
  图标：“i-lucide-火箭”
  方向：水平
  特点：
    “图标”
      描述：“Nuxt UI与Nuxt Icon集成，可从Iconify访问超过200，000个图标。”
      图标：“我-透明-微笑”
      到：'/docs/入门/集成/图标'
    “字体”
      描述：'Nuxt UI与Nuxt字体集成，以提供即插即用字体优化。'
      图标：“i-lucide-a-大-小”
      到：“/docs/入门/集成/字体”
    - title：“彩色模式”
      描述：“Nuxt UI与Nuxt颜色模式集成，可在亮暗之间切换。”
      图标：“i-lucide-日月”
      到：'/docs/入门/整合/色彩模式'
  链接：
    - label：“浏览组件”
      到：“/docs/组件/应用程序”
      颜色：“中性”
      变体：“细微”
      尾部图标：'i-透明箭头-右'
插槽：
  默认值：|

    第093章
---

：img{src="https://picsum.photos/704/1294" width="352" height="647" alt="Illustration" class="w-full rounded-lg" loading="lazy"}
::

反向

使用`reverse`道具反转默认插槽的方向。

::component-code
---
更漂亮：真的
外部：
  功能特性
  链接链接
外部类型：
  - 页面功能属性[]
  - 按钮属性[]
忽略：
- 标题
  描述：
- 图标
  功能特性
  链接
道具：
  title：'美丽的Vue UI组件'
  产品说明：“Nuxt UI提供了一套全面的组件和实用程序，可帮助您使用Vue和Nuxt构建美观且易于访问的Web应用程序。”
  图标：“i-lucide-火箭”
  方向：水平
  反转：真
  特点：
    - title：“图标”
      描述：“Nuxt UI与Nuxt Icon集成，可从Iconify访问超过200，000个图标。”
      图标：“我-透明-微笑”
      到：'/docs/入门/集成/图标'
    “字体”
      描述：'Nuxt UI与Nuxt字体集成，以提供即插即用字体优化。'
      图标：“i-lucide-a-大-小”
      到：“/docs/入门/集成/字体”
    - title：“彩色模式”
      描述：“Nuxt UI与Nuxt颜色模式集成，可在亮暗之间切换。”
      图标：“i-lucide-日月”
      到：'/docs/入门/整合/色彩模式'
  链接：
    - label：“浏览组件”
      到：“/docs/组件/应用程序”
      颜色：“中性”
      变体：“细微”
      尾部图标：'i-透明箭头-右'
插槽：
  默认值：|

    110华氏度
---

：img{src="https://picsum.photos/704/1294" width="352" height="647" alt="Illustration" class="w-full rounded-lg" loading="lazy"}
::

## 活性成分

### 道具

：组件-支柱

插槽

：组件插槽

主题

：组件主题

## Changelog

：组件更改日志
