---
title: 散文可折叠
description: '使用平滑的展开和折叠动画切换内容可见性。'
category: components
navigation.title: Collapsible
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/prose/Collapsible.vue
---

## 使用情况

使用`collapsible`组件包装内容，以在内容中显示[Collapsible](/docs/components/collapsible)。

::code-preview{class="[&>div]:*:w-full [&>div]:*:my-0"}

::collapsible

| 道具    |默认   |类型                     |
|---------|-----------|--------------------------|
|`name`的|           |`string`{lang="ts-type"}|
|`size`的|`md`的      |`string`{lang="ts-type"}|
|`color`的|`neutral`的|`string`{lang="ts-type"}|

::

#代码

```mdc
::collapsible

| Prop    | Default   | Type                     |
|---------|-----------|--------------------------|
| `name`  |           | `string`{lang="ts-type"} |
| `size`  | `md`      | `string`{lang="ts-type"} |
| `color` | `neutral` | `string`{lang="ts-type"} |

::
```

::

## API

### Props

：组件-道具{prose}

### Slots

：组件插槽{prose}

主题

：组件主题{prose}

## Changelog

：component-changelog{prefix="prose"}
