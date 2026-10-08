---
title: ProseTabs
description: '在交互式浏览器界面中组织相关内容。'
category: components
navigation.title: Tabs
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/prose/Tabs.vue
---

## 使用情况

使用`tabs`和`tabs-item`组件在内容中显示[Tabs](/docs/components/tabs)。

::code-preview{class="[&>div]:*:my-0"}

:::tabs{class="w-full"}

:::tabs-item{label="代码" icon="i-lucide-code"}

```mdc
::callout
Lorem velit voluptate ex reprehenderit ullamco et culpa.
::
```

:::

:::tabs-item{label="预览" icon="i-lucide-eye"}

::callout
Lorem velit voluptate ex reversed derit ullamco et culpa.
::

:::

:::

#代码

````mdc
::tabs

:::tabs-item{label="Code" icon="i-lucide-code"}

```mdc
::callout
Lorem velit voluptate ex reversed derit ullamco et culpa.
::
```

:::

:::tabs-item{label="Preview" icon="i-lucide-eye"}

::callout
Lorem velit voluptate ex reprehenderit ullamco et culpa.
::

:::

::
````

::

## API

### Props

：组件-道具{prose}

### Slots

：组件插槽{prose}

## Theme

::component-theme{prose}
---
额外：
  - tabsItem
---
::

## Changelog

：组件更改日志{prefix="prose"}
