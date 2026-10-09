---
title: ProseCallout
description: '用醒目的彩色框和图标突出显示重要信息。'
category: components
navigation.title: Callout
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/prose/Callout.vue
---

## 用法

在`callout`组件的默认插槽中使用markdown为内容添加醒目的上下文。

::component-code{slug="callout" prose}
---
props:
  class: 'w-full my-0'
hide:
  - class
slots:
  default: This is a `callout` with full **markdown** support.
---
::

### Icon

使用`icon` prop在内容旁边显示图标。

::component-code{slug="callout" prose}
---
props:
  icon: i-lucide-square-play
  class: 'w-full my-0'
hide:
  - class
slots:
  default: This is a `callout` with an icon.
---
::

### Color

使用`color`道具来改变屏幕的颜色。

::component-code{slug="callout" prose}
---
ignore:
  - icon
props:
  icon: i-lucide-info
  color: info
  class: 'w-full my-0'
hide:
  - class
slots:
  default: This is a `callout` with a custom color.
---
::

### Link

您可以传递[`<NuxtLink>`](https://nuxt.com/docs/api/components/nuxt-link)组件的任何属性（如`to`和`target`），以使`target`成为一个链接。

::component-code{slug="callout" prose}
---
hide:
  - class
ignore:
  - icon
  - target
props:
  icon: i-lucide-square-play
  to: '/docs/getting-started/installation/nuxt'
  color: neutral
  class: 'w-full my-0'
slots:
  default: Learn how to install `@nuxt/ui` in your project.
---
::

## 快捷方式

您还可以使用带有预定义图标和颜色的`note`、`tip`、`warning`和`caution`快捷方式。

::code-preview

:::div{class="flex flex-col gap-4 w-full"}

::note{class="w-full my-0"}
这里有一些额外的信息给你。
::

::tip{class="w-full my-0"}
我有个有用的建议
::

::warning{class="w-full my-0"}
请小心此操作，因为它可能会产生意想不到的结果。
::

::caution{class="w-full my-0"}
此操作无法撤消。
::

:::

#code

```mdc
::note
Here's some additional information.
::

::tip
Here's a helpful suggestion.
::

::warning
Be careful with this action as it might have unexpected results.
::

::caution
This action cannot be undone.
::
```

::

## API

### Props

:component-props{prose}

### Slots

:component-slots{prose}

## Theme

:component-theme{prose}

## Changelog

:component-changelog{prefix="prose"}
