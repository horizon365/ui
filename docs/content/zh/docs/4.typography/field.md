---
title: ProseField
description: '清楚地记录API参数、属性和配置选项。'
category: components
navigation.title: Field
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/prose/Field.vue
---

## 使用情况

要在内容中显示的字段、属性或参数。

::code-preview
::field{name="name" type="string" required class="w-full"}
`description`可以设置为道具，也可以设置为默认插槽，完全支持**markdown**。
::

#代码

```mdc
::field{name="name" type="string" required}
The `description` can be set as prop or in the default slot with full **markdown** support.
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

## Changelog

：component-changelog{prefix="prose"}
