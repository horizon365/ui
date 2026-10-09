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

## 用法

要在内容中显示的字段、属性或参数。

::code-preview
::field{name="name" type="string" required class="w-full"}
该`description`可以设置为道具或在默认插槽与完整的**markdown**的支持。
::

#code

```mdc
::field{name="name" type="string" required}
The `description` can be set as prop or in the default slot with full **markdown** support.
::
```

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
