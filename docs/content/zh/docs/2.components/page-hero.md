---
title: PageHero
description: '为您的页面提供响应式英雄。'
category: page
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/PageHero.vue
---

## 用法

PageHero组件将您的内容包装在[Container](/docs/components/container)中，同时保持全宽度的灵活性，使您可以轻松添加背景颜色，图像或图案。它提供了一种灵活的方式来显示默认插槽中的插图内容。

::code-preview

:::u-page-hero
---
title: 'Ultimate Vue UI library'
description: 'A Nuxt/Vue-integrated UI library providing a rich set of fully-styled, accessible and highly customizable components for building modern web applications.'
---

::::u-page-card{variant="subtle" class="rounded-lg"}

![App截图](/blocks/image4.png){width="960" height="540" class="rounded-sm shadow-2xl ring ring-default"}

::::

:::

::

### 标题

使用`title`道具设置英雄的称号。

::component-code
---
props:
  title: 'Ultimate Vue UI library'
---
::

### 说明

使用`description`道具设置英雄的描述。

::component-code
---
prettier: true
ignore:
  - title
props:
  title: 'Ultimate Vue UI library'
  description: 'A Nuxt/Vue-integrated UI library providing a rich set of fully-styled, accessible and highly customizable components for building modern web applications.'
---
::

### 标题

使用`headline`道具设置英雄的标题。

::component-code
---
prettier: true
ignore:
  - title
  - description
props:
  title: 'Ultimate Vue UI library'
  description: 'A Nuxt/Vue-integrated UI library providing a rich set of fully-styled, accessible and highly customizable components for building modern web applications.'
  headline: 'New release'
---
::

### 链接

使用`links`属性在描述下显示[Button](/docs/components/button)的列表。

::component-code
---
prettier: true
external:
  - links
externalTypes:
  - ButtonProps[]
ignore:
  - title
  - description
  - links
props:
  title: 'Ultimate Vue UI library'
  description: 'A Nuxt/Vue-integrated UI library providing a rich set of fully-styled, accessible and highly customizable components for building modern web applications.'
  links:
    - label: 'Get started'
      to: '/docs/getting-started'
      icon: 'i-lucide-square-play'
    - label: 'Learn more'
      to: '/docs/getting-started/theme/design-system'
      color: 'neutral'
      variant: 'subtle'
      trailingIcon: 'i-lucide-arrow-right'
---
::

### 方向

使用`orientation`属性将默认的slot. xmp方向更改为`vertical`。

::component-code
---
prettier: true
external:
  - links
externalTypes:
  - ButtonProps[]
ignore:
  - title
  - description
  - headline
  - links
props:
  title: 'Ultimate Vue UI library'
  description: 'A Nuxt/Vue-integrated UI library providing a rich set of fully-styled, accessible and highly customizable components for building modern web applications.'
  headline: 'New release'
  orientation: horizontal
  links:
    - label: 'Get started'
      to: '/docs/getting-started'
      icon: 'i-lucide-square-play'
    - label: 'Learn more'
      to: '/docs/getting-started/theme/design-system'
      color: 'neutral'
      variant: 'subtle'
      trailingIcon: 'i-lucide-arrow-right'
slots:
  default: |

    <img src="/blocks/image4.png" alt="App screenshot" class="rounded-lg shadow-2xl ring ring-default" />
---

![App截图](/blocks/image4.png){class="rounded-lg shadow-2xl ring ring-default"}
::

### 反向

使用`reverse`道具反转默认插槽的方向。

::component-code
---
prettier: true
external:
  - links
externalTypes:
  - ButtonProps[]
ignore:
  - title
  - description
  - headline
  - links
props:
  title: 'Ultimate Vue UI library'
  description: 'A Nuxt/Vue-integrated UI library providing a rich set of fully-styled, accessible and highly customizable components for building modern web applications.'
  headline: 'New release'
  orientation: horizontal
  reverse: true
  links:
    - label: 'Get started'
      to: '/docs/getting-started'
      icon: 'i-lucide-square-play'
    - label: 'Learn more'
      to: '/docs/getting-started/theme/design-system'
      color: 'neutral'
      variant: 'subtle'
      trailingIcon: 'i-lucide-arrow-right'
slots:
  default: |

    <img src="/blocks/image4.png" alt="App screenshot" class="rounded-lg shadow-2xl ring ring-default" />
---

![App截图](/blocks/image4.png){class="rounded-lg shadow-2xl ring ring-default"}
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
