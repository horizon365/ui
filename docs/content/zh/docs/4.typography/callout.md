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

## 使用情况

在`callout`组件的默认插槽中使用markdown，为您的内容添加醒目的上下文。

::component-code{slug="callout" prose}
---
道具：
  class：'w-full my-0'
隐藏：
  - class
插槽：
  默认值：这是一个`callout`，完全支持**markdown**。
---
::

### Icon

使用`icon`道具在内容旁边显示图标。

::component-code{slug="callout" prose}
---
道具：
  图标：i-lucide-square-play
  class：'w-full my-0'
隐藏：
  - class
插槽：
  默认值：这是一个带有图标的`callout`。
---
::

### Color

使用`color`道具更改屏幕的颜色。

::component-code{slug="callout" prose}
---
忽略：
  - icon
道具：
  图标：i-lucide-信息
  颜色：信息
  class：'w-full my-0'
隐藏：
  班级
插槽：
  default：这是一个带有自定义颜色的`callout`。
---
::

### Link

您可以从[`<NuxtLink>`](https://nuxt.com/docs/api/components/nuxt-link)组件（如`to`和`target`）传递任何属性，以使该对象成为链接。

::component-code{slug="callout" prose}
---
隐藏：
  班级
忽略：
  - icon
  - target
道具：
  图标：i-lucide-square-play
  到：'/docs/getting-started/installation/nuxt'
  颜色：中性
  class：'w-full my-0'
插槽：
  default：了解如何在项目中安装`@nuxt/ui`。
---
::

## Shortcuts

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

#代码

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

：组件-道具{prose}

### Slots

：组件插槽{prose}

## Theme

：组件主题{prose}

## 变更日志

：component-changelog{prefix="prose"}
