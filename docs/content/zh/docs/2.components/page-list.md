---
title: 分页首页
description: '用于以堆叠格式显示内容的垂直列表布局。'
category: page
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/PageList.vue
---

## 用法

PageList组件提供了一种灵活的方式来以垂直列表布局显示内容。它非常适合创建[PageCard](/docs/components/page-card)组件或任何其他元素的堆叠列表，项目之间具有可选的分隔符。

::component-example
---
collapse: true
name: 'page-list-example'
props:
  class: 'w-full'
---
::

### 分割

使用`divide`属性在每个子元素之间添加分隔符。

::component-example
---
collapse: true
name: 'page-list-divide-example'
props:
  class: 'w-full'
---
::

## API

### Props

:component-props

### 老虎机

:component-slots

## Theme

:component-theme

## Changelog

:component-changelog
