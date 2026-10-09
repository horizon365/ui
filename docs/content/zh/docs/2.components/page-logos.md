---
title: PageLogos
description: '要在页面上显示的徽标或图像的列表。'
category: page
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/PageLogos.vue
---

## 用法

PageLogos组件提供了一种灵活的方式来显示页面中的徽标或图像列表。

::component-code
---
collapse: true
prettier: true
hide:
  - class
ignore:
  - items
props:
  items:
    - i-simple-icons-github
    - i-simple-icons-discord
    - i-simple-icons-x
    - i-simple-icons-instagram
    - i-simple-icons-linkedin
    - i-simple-icons-facebook
  class: 'mb-10'
---
::

### 标题

使用`title`道具将标题设置在徽标上方。

::component-code
---
prettier: true
ignore:
  - items
hide:
  - class
props:
  title: 'Trusted by the best front-end teams'
  items:
    - i-simple-icons-github
    - i-simple-icons-discord
    - i-simple-icons-x
    - i-simple-icons-instagram
    - i-simple-icons-linkedin
    - i-simple-icons-facebook
  class: 'my-10'
---
::

### 项目

您可以通过两种方式显示徽标：

1. 使用`items` prop提供一个徽标列表。每个项目可以是：
  - 图标名称（例如`i-simple-icons-github`）
  - 包含`src`和`alt`图像属性的对象，将在`UAvatar`组件中使用
2. 使用默认插槽对内容进行完全控制

::tabs{class="gap-0"}

::component-example{label="与项目"}
---
name: 'page-logos-with-items'
class: '[&>div]:my-10'
---
::

::component-example{label="与槽"}
---
name: 'page-logos-with-slot'
class: '[&>div]:my-10'
---
::

::

### Marquee

使用`marquee`道具为徽标启用选框效果。

::component-code
---
prettier: true
ignore:
  - items
  - marquee
hide:
  - class
props:
  title: 'Trusted by the best front-end teams'
  marquee: true
  items:
    - i-simple-icons-github
    - i-simple-icons-discord
    - i-simple-icons-x
    - i-simple-icons-instagram
    - i-simple-icons-linkedin
    - i-simple-icons-facebook
  class: 'my-10'
---
::

::note{to="/docs/components/marquee"}
当你使用`marquee`模式时，你可以通过传递props来定制它的行为。更多信息，请查看`Marquee`组件。
::

## API

### Props

:component-props

### Slots

:component-slots

## Theme

:component-theme

## Changelog

:component-changelog
