---
title: PageCard
description: '显示标题、说明和可选链接的预样式卡组件。'
category: page
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/PageCard.vue
---

## 用法

PageCard组件提供了一种灵活的方法，可在默认插槽中显示带有插图的卡片中的内容。

::code-preview

::u-page-card
---
title: 'Tailwind CSS'
description: 'Nuxt UI integrates with latest Tailwind CSS, bringing significant improvements.'
icon: 'i-simple-icons-tailwindcss'
class: 'w-96'
---

:img{src="/tailwindcss-v4.svg" alt="Tailwind CSS" class="w-full"}
::

::

::tip
使用[PageGrid](/docs/components/page-grid)、[PageColumns](/docs/components/page-columns)或[PageList](/docs/components/page-list)组件显示多个PageCard。
::

### 标题

使用`title`道具设置卡片的标题。

::component-code
---
hide:
  - class
props:
  title: 'Tailwind CSS'
  class: 'w-96'
---
::

### 说明

使用`description`属性设置卡片的描述。

::component-code
---
prettier: true
hide:
  - class
ignore:
  - title
props:
  title: 'Tailwind CSS'
  description: 'Nuxt UI integrates with latest Tailwind CSS, bringing significant improvements.'
  class: 'w-96'
---
::

### Icon

使用`icon`道具设置卡片的图标。

::component-code
---
prettier: true
hide:
  - class
ignore:
  - title
  - description
props:
  title: 'Tailwind CSS'
  description: 'Nuxt UI integrates with latest Tailwind CSS, bringing significant improvements.'
  icon: 'i-simple-icons-tailwindcss'
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
  title: 'Tailwind CSS'
  description: 'Nuxt UI integrates with latest Tailwind CSS, bringing significant improvements.'
  icon: 'i-simple-icons-tailwindcss'
  to: 'https://tailwindcss.com/blog/tailwindcss-v4'
  target: _blank
  class: 'w-96'
---
::

### Variant

使用`variant`道具来改变卡片的样式。

::component-code
---
prettier: true
hide:
  - class
ignore:
  - title
  - description
  - icon
  - to
  - target
props:
  title: 'Tailwind CSS'
  description: 'Nuxt UI integrates with latest Tailwind CSS, bringing significant improvements.'
  icon: 'i-simple-icons-tailwindcss'
  to: 'https://tailwindcss.com/blog/tailwindcss-v4'
  target: _blank
  variant: soft
  class: 'w-96'
---
::

::tip
当使用`solid`变体来反转颜色时，可以将`light`或`dark`类应用于`links`插槽。
::

### 方向

使用`orientation`属性将默认的slot. px的方向更改为`vertical`。

::component-code
---
prettier: true
ignore:
  - title
  - description
  - icon
props:
  title: 'Tailwind CSS'
  description: 'Nuxt UI integrates with latest Tailwind CSS, bringing significant improvements.'
  icon: 'i-simple-icons-tailwindcss'
  orientation: horizontal
slots:
  default: |

    <img src="/tailwindcss-v4.svg" alt="Tailwind CSS" class="w-full" />
---

:img{src="/tailwindcss-v4.svg" alt="Tailwind CSS" class="w-full"}
::

### 反向

使用`reverse`道具反转默认插槽的方向。

::component-code
---
prettier: true
ignore:
  - title
  - description
  - icon
props:
  title: 'Tailwind CSS'
  description: 'Nuxt UI integrates with latest Tailwind CSS, bringing significant improvements.'
  icon: 'i-simple-icons-tailwindcss'
  orientation: horizontal
  reverse: true
slots:
  default: |

    <img src="/tailwindcss-v4.svg" alt="Tailwind CSS" class="w-full" />
---

:img{src="/tailwindcss-v4.svg" alt="Tailwind CSS" class="w-full"}
::

### 亮点

使用`highlight`和`highlight-color`道具在卡片周围显示高亮边框。

::component-code
---
prettier: true
hide:
  - class
ignore:
  - title
  - description
  - icon
  - orientation
props:
  title: 'Tailwind CSS'
  description: 'Nuxt UI integrates with latest Tailwind CSS, bringing significant improvements.'
  icon: 'i-simple-icons-tailwindcss'
  orientation: horizontal
  highlight: true
  highlightColor: 'primary'
slots:
  default: |

    <img src="/tailwindcss-v4.svg" alt="Tailwind CSS" class="w-full" />
---

:img{src="/tailwindcss-v4.svg" alt="Tailwind CSS" class="w-full"}
::

### 聚光灯

使用`spotlight`和`spotlight-color`道具显示一个聚光灯效果，跟随鼠标光标，并在悬停时突出显示边框。

::note
当使用`to`道具时，聚光灯效果将取代悬停效果。最好与`outline`变体一起使用。
::

::component-code
---
prettier: true
hide:
  - class
ignore:
  - title
  - description
  - icon
  - orientation
props:
  title: 'Tailwind CSS'
  description: 'Nuxt UI integrates with latest Tailwind CSS, bringing significant improvements.'
  icon: 'i-simple-icons-tailwindcss'
  orientation: horizontal
  spotlight: true
  spotlightColor: 'primary'
slots:
  default: |

    <img src="/tailwindcss-v4.svg" alt="Tailwind CSS" class="w-full" />
---

:img{src="/tailwindcss-v4.svg" alt="Tailwind CSS" class="w-full"}
::

::tip
您还可以使用`--spotlight-color`和`--spotlight-size` CSS变量自定义颜色和大小：

```vue
<template>
  <UPageCard spotlight class="[--spotlight-color:var(--ui-error)] [--spotlight-size:200px]" />
</template>
```
::

## 示例

### 作为一个证明

在`header`或`footer`插槽中使用[User](/docs/components/user)组件，使卡看起来像一个证明。

::component-example
---
name: 'page-card-testimonial-example'
---
::

::tip{to="/docs/components/page-columns"}
您可以使用`PageColumns`组件在多列布局中显示多个PageCard。
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
