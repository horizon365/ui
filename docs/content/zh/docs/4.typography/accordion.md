---
title: 散文手风琴
description: '创建可扩展的内容部分，以更好地组织信息。'
category: components
navigation.title: Accordion
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/prose/Accordion.vue
---

## 使用情况

使用`accordion`和`accordion-item`组件在内容中显示[Accordion](/docs/components/accordion)。

::code-preview{class="[&>div]:*:my-0"}

:::accordion
---
默认值：
  - '1'
---

::accordion-item{label="Nuxt UI可以免费使用吗？" icon="i-lucide-circle-help"}
是的！Nuxt UI在MIT许可下完全免费开源。所有125+组件都可供任何人使用。
::

::accordion-item{label="我可以在没有Nuxt的情况下使用Vue的Nuxt UI吗？" icon="i-lucide-circle-help"}
是的，我会的在针对Nuxt进行优化的同时，Nuxt UI可以通过我们的Vite插件完美地与独立的Vue项目配合使用。您可以按照[](/docs/getting-started/installation/vue)开始安装。
::

::accordion-item{label="Nuxt UI是否已准备好生产？" icon="i-lucide-circle-help"}
是的！Nuxt UI被成千上万的应用程序用于生产，并进行了广泛的测试，定期更新和主动维护。
::

:::

#代码

```mdc
::accordion
---
defaultValue:
  - '1'
---

::accordion-item{label="Is Nuxt UI free to use?" icon="i-lucide-circle-help"}
Yes! Nuxt UI is completely free and open source under the MIT license. All 125+ components are available to everyone.
::

::accordion-item{label="Can I use Nuxt UI with Vue without Nuxt?" icon="i-lucide-circle-help"}
Yes! While optimized for Nuxt, Nuxt UI works perfectly with standalone Vue projects via our Vite plugin. You can follow the [installation guide](/docs/getting-started/installation/vue) to get started.
::

::accordion-item{label="Is Nuxt UI production-ready?" icon="i-lucide-circle-help"}
Yes! Nuxt UI is used in production by thousands of applications with extensive tests, regular updates, and active maintenance.
::

::
```

::

美国石油学会

### Props

：组件-道具{prose}

### Slots

：组件插槽{prose}

主题

::component-theme{prose}
---
额外：
  - accordionItem
---
::

## Changelog

：component-changelog{prefix="prose"}
