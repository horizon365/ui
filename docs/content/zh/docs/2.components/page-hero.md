---
title: PageHero
description: '为您的页面提供响应式英雄。'
category: page
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/PageHero.vue
---

## 使用情况

PageHero组件将您的内容包装在[Container](/docs/components/container)中，同时保持了全宽灵活性，使您可以轻松地添加背景色、图像或图案。它提供了一种灵活的方式来显示内容，并在默认插槽中显示插图。

::code-preview

:::u-page-hero
---
标题：“Ultimate Vue用户界面库”
产品说明：'一个集成了Nuxt/Vue的UI库，提供了一组丰富的、完全样式化的、可访问的、高度可定制的组件，用于构建现代Web应用程序。'
---

::::u-page-card{variant="subtle" class="rounded-lg"}

应用程序屏幕截图

::::

:::

::

### 的标题

使用`title`道具来设定英雄的标题。

::component-code
---
道具：
  标题：“Ultimate Vue用户界面库”
---
::

说明：

使用`description`道具来设定英雄的描述。

::component-code
---
更漂亮：真的
忽略：
  014标题
道具：
  标题：“Ultimate Vue用户界面库”
  产品说明：'一个集成了Nuxt/Vue的UI库，提供了一组丰富的、样式齐全、易于访问且高度可定制的组件，用于构建现代Web应用程序。'
---
::

标题：

使用`headline`道具来设定主角的标题。

::component-code
---
更漂亮：真的
忽略：
- 标题
  描述：
道具：
  标题：“Ultimate Vue用户界面库”
  产品说明：'一个集成了Nuxt/Vue的UI库，提供了一组丰富的、样式齐全、易于访问且高度可定制的组件，用于构建现代Web应用程序。'
  标题：“新版本”
---
::

### 链接

使用`links`属性在描述下显示[Button](/docs/components/button)的列表。

::component-code
---
更漂亮：真的
外部：
  链接
外部类型：
  - 按钮属性[]
忽略：
  标题
  描述：
  链接
道具：
  标题：“Ultimate Vue用户界面库”
  产品说明：'一个集成了Nuxt/Vue的UI库，提供了一组丰富的、样式齐全、易于访问且高度可定制的组件，用于构建现代Web应用程序。'
  链接：
    - label：'开始使用'
      收件人：“/docs/开始使用”
      图标：“i-lucide-square-play”（透明方块游戏）
    - label：'了解更多'
      到：“/docs/入门/主题/设计系统”
      颜色：“中性”
      变体：“细微”
      尾部图标：'i-透明箭头-右'
---
::

定位

使用`orientation`道具更改默认插槽的方向。默认为`vertical`。

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
  标题
  链接
道具：
  标题：“Ultimate Vue用户界面库”
  产品说明：'一个集成了Nuxt/Vue的UI库，提供了一组丰富的、样式齐全、易于访问且高度可定制的组件，用于构建现代Web应用程序。'
  标题：“新版本”
  方向：水平
  链接：
    - label：'开始使用'
      收件人：“/docs/开始使用”
      图标：“i-lucide-square-play”（透明方块游戏）
    - label：'了解更多信息'
      到：“/docs/入门/主题/设计系统”
      颜色：“中性”
      变体：“细微”
      尾部图标：'i-透明箭头-右'
插槽：
  默认值：|

    043号
---

应用程序屏幕截图
::

反向

使用`reverse`道具反转默认插槽的方向。

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
  标题
  链接
道具：
  标题：“Ultimate Vue用户界面库”
  产品说明：'一个集成了Nuxt/Vue的UI库，提供了一组丰富的、样式齐全、易于访问且高度可定制的组件，用于构建现代Web应用程序。'
  标题：“新版本”
  方向：水平
  反转：真
  链接：
    - 标签：“开始使用”
      收件人：“/docs/开始使用”
      图标：“i-lucide-square-play”（透明方块游戏）
    - label：'了解更多'
      到：“/docs/入门/主题/设计系统”
      颜色：“中性”
      变体：“细微”
      尾部图标：'i-透明箭头-右'
插槽：
  默认值：|

    059号
---

应用程序屏幕截图
::

美国石油学会

道具

：组件-支柱

插槽

：组件插槽

主题

：组件主题

## 变更日志

：组件更改日志
