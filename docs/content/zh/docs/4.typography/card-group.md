---
title: ProseCardGroup
description: '以响应式网格布局组织多张卡片，以实现更好的内容呈现。'
category: components
navigation.title: CardGroup
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/prose/CardGroup.vue
---

## 使用情况

用`card-group`组件包裹`card`组件，以网格布局将它们组合在一起。

::code-preview

:::card-group{class="w-full my-0"}

::card
---
标题：仪表板
图标：i-simple-图标-github
发送至：www.example.com
目标：空白（_B）
---
具有多列布局的仪表板。
::

::card
---
标题：SaaS
图标：i-simple-图标-github
发送至：www.example.com
目标：空白（_B）
---
一个模板与着陆，定价，文档和博客.
::

::card
---
标题：
图标：i-simple-图标-github
发送至：www.example.com
目标：空白（_B）
---
一份带有`@nuxt/content`的文档。
::

::card
---
标题：登陆
图标：i-simple-图标-github
发送至：www.example.com
目标：空白（_B）
---
您可以使用的着陆页作为起点。
::

:::

#代码

```mdc
::card-group

::card
---
title: Dashboard
icon: i-simple-icons-github
to: https://github.com/nuxt-ui-templates/dashboard
target: _blank
---
A dashboard with multi-column layout.
::

::card
---
title: SaaS
icon: i-simple-icons-github
to: https://github.com/nuxt-ui-templates/saas
target: _blank
---
A template with landing, pricing, docs and blog.
::

::card
---
title: Docs
icon: i-simple-icons-github
to: https://github.com/nuxt-ui-templates/docs
target: _blank
---
A documentation with `@nuxt/content`.
::

::card
---
title: Landing
icon: i-simple-icons-github
to: https://github.com/nuxt-ui-templates/landing
target: _blank
---
A landing page you can use as starting point.
::

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
