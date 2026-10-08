---
title: ProseCard
description: '创建带有可选链接和导航的突出显示的内容块。'
category: components
navigation.title: Card
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/prose/Card.vue
---

## 使用情况

在`card`组件的默认插槽中使用markdown来突出显示您的内容。

使用`title`、`icon`和`color`道具进行自定义。您也可以从[`<NuxtLink>`](https://nuxt.com/docs/api/components/nuxt-link)或[`<RouterLink>`](https://router.vuejs.org/api/interfaces/RouterLinkProps.html)组件传递任何属性。

::component-code{slug="card" prose}
---
隐藏：
  - class
忽略：
  - target
道具：
  类别：'my-0 w-96'
  标题：启动
  图标：i-lucide用户
  颜色：原色
  至：'https：nuxt.lemonsqueezy.com'
  目的：'_blank'
插槽：
  default：最适合小型团队，初创公司和最多5名开发人员的机构。
---

最适合小型团队，初创公司和最多5名开发人员的机构。
::

## API

### Props

：组件-道具{prose}

### Slots

：组件插槽{prose}

## Theme

：组件主题{prose}

## Changelog

：component-changelog{prefix="prose"}
