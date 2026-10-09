---
title: 页面功能
description: '一个展示应用程序关键特性的组件。'
category: page
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/PageFeature.vue
---

## 用法

PageFeature组件由[PageSection](/docs/components/page-section)组件用于显示[features](/docs/components/page-section#features)。

### 标题

使用`title`属性设置特性的标题。

::component-code
---
hide:
  - class
props:
  title: 'Theme'
  class: 'w-96'
---
::

### 说明

使用`description` prop设置功能的描述。

::component-code
---
prettier: true
hide:
  - class
ignore:
  - title
props:
  title: 'Theme'
  description: 'Customize Nuxt UI with your own colors, fonts, and more.'
  class: 'w-96'
---
::

### Icon

使用`icon`道具设置功能的图标。

::component-code
---
prettier: true
hide:
  - class
ignore:
  - title
  - description
props:
  title: 'Theme'
  description: 'Customize Nuxt UI with your own colors, fonts, and more.'
  icon: 'i-lucide-swatch-book'
  class: 'w-96'
---
::

### Link

可以从[`<NuxtLink>`](https://nuxt.com/docs/api/components/nuxt-link)组件传递任何属性，如`to`、`target`、`rel`等。

::component-code
---
prettier: true
hide:
  - class
ignore:
  - title
  - description
  - icon
  - target
props:
  title: 'Theme'
  description: 'Customize Nuxt UI with your own colors, fonts, and more.'
  icon: 'i-lucide-swatch-book'
  to: '/docs/getting-started/theme/design-system'
  target: _blank
  class: 'w-96'
---
::

### 方向

使用`orientation`属性将特征. xp的方向更改为`horizontal`。

::component-code
---
prettier: true
hide:
  - class
ignore:
  - title
  - description
  - icon
props:
  orientation: 'vertical'
  title: 'Theme'
  description: 'Customize Nuxt UI with your own colors, fonts, and more.'
  icon: 'i-lucide-swatch-book'
  class: 'w-96'
---
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
