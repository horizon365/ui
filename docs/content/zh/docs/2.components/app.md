---
description: 一个包装器，为您的应用提供全局配置、toast和工具提示。
category: layout
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/App.vue
---

## 使用情况

该组件实现Reka UI[ConfigProvider](https://reka-ui.com/docs/utilities/config-provider)，为所有组件提供全局配置：

- 使所有基元能够继承全局阅读方向。
- 在设置正文锁定时启用更改滚动正文的行为。
- 更多的控制，以防止布局变化。

它还使用[ToastProvider](https://reka-ui.com/docs/components/toast#provider)和[TooltipProvider](https://reka-ui.com/docs/components/tooltip#provider)来提供全局toast和工具提示，以及编程模式和幻灯片。

在`app.vue`文件中使用App组件包装整个应用程序：

```vue [app.vue]
<template>
  <UApp>
    <NuxtPage />
  </UApp>
</template>
```

::framework-only
#nuxt（无文本）
:::tip{to="/docs/getting-started/integrations/i18n/nuxt#locale"}
了解如何使用`locale`prop更改应用的区域设置。这还可以控制Calendar、InputDate和InputTime等组件中的日期/时间格式。
:::

版本号
:::tip{to="/docs/getting-started/integrations/i18n/vue#locale"}
了解如何使用`locale`prop更改应用的区域设置。这还可以控制Calendar、InputDate和InputTime等组件中的日期/时间格式。
:::
::

## API

### Props

：组件-支柱

### Slots

：组件插槽

## Changelog

：组件更改日志
