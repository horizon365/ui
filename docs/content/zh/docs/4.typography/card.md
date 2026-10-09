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

## 用法

在`card`组件的默认插槽中使用markdown来突出显示内容。

使用`title`、`icon`和`color`道具进行自定义。您还可以传递来自[`<NuxtLink>`](https://nuxt.com/docs/api/components/nuxt-link)或[`<RouterLink>`](https://router.vuejs.org/api/interfaces/RouterLinkProps.html)组件的任何属性。

::component-code{slug="card" prose}
---
hide:
  - class
ignore:
  - target
props:
  class: 'my-0 w-96'
  title: Startup
  icon: i-lucide-users
  color: primary
  to: 'https://nuxt.lemonsqueezy.com'
  target: '_blank'
slots:
  default: Best suited for small teams, startups and agencies with up to 5 developers.
---

最适合小型团队，初创公司和最多5名开发人员的机构。
::

## API

### Props

:component-props{prose}

### 老虎机

:component-slots{prose}

## Theme

:component-theme{prose}

## Changelog

:component-changelog{prefix="prose"}
