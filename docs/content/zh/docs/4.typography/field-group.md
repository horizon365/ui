---
title: ProseFieldGroup
description: '将相关字段组合在一起，以获得全面的API文档。'
category: components
navigation.title: FieldGroup
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/prose/FieldGroup.vue
---

## 用法

在列表中将字段分组在一起。

:::code-preview

::field-group{class="my-0"}

  ::field{name="analytics" type="boolean"}
  转换为`false`。为您的项目启用分析（即将推出）。
  ::

  ::field{name="blob" type="boolean"}
  支持blob存储来存储静态资产，如图像、视频等。
  ::

  ::field{name="cache" type="boolean"}
  转换为`false`。使用硝基的`cachedEventHandler`和`cachedFunction`启用缓存存储来缓存服务器路由响应或函数。
  ::

  ::field{name="database" type="boolean"}
  转换为`false`。使SQL数据库能够存储应用程序的数据。
  ::

::

#code

```mdc
::field-group
  ::field{name="analytics" type="boolean"}
    Defaults to `false`. Enables analytics for your project (coming soon).
  ::

  ::field{name="blob" type="boolean"}
    Defaults to `false`. Enables blob storage to store static assets, such as images, videos and more.
  ::

  ::field{name="cache" type="boolean"}
    Defaults to `false`. Enables cache storage to cache your server route responses or functions using Nitro's `cachedEventHandler` and `cachedFunction`.
  ::

  ::field{name="database" type="boolean"}
    Defaults to `false`. Enables SQL database to store your application's data.
  ::
::
```

:::

## API

### Props

:component-props{prose}

### Slots

:component-slots{prose}

## Theme

:component-theme{prose}

## Changelog

:component-changelog{prefix="prose"}
