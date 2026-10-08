---
title: extendLocale
description: '一个实用程序，以扩展现有的地区与自定义翻译。'
---

## 使用情况

使用自动导入的`extendLocale`实用程序通过覆盖特定属性或消息来自定义现有区域设置。

```vue
<script setup lang="ts">
import { en } from '@nuxt/ui/locale'

const locale = extendLocale(en, {
  code: 'en-AU',
  messages: {
    commandPalette: {
      placeholder: 'Search a component...'
    }
  }
})
</script>

<template>
  <UApp :locale="locale">
    <NuxtPage />
  </UApp>
</template>
```

这在以下情况下很有用：
- 创建语言的区域变体（例如，从`en`创建`en-AU`）
- 特定于PHP的翻译，而无需重新定义整个区域设置
- 为您的应用定制组件标签

::framework-only
#nuxt（无文本）
:::tip{to="/docs/getting-started/integrations/i18n/nuxt"}
在**i18n集成**文档中了解有关国际化的更多信息。
:::

版本号
:::tip{to="/docs/getting-started/integrations/i18n/vue"}
在**i18n集成**文档中了解有关国际化的更多信息。
:::
::

## API

`extendLocale<M>(locale: Locale<M>, options: Partial<DefineLocaleOptions<DeepPartial<M>>>): Locale<M>`{lang="ts-type"}

使用提供的选项扩展现有区域设置，深度合并消息。

#### Parameters

::field-group

  ::field{name="locale" type="Locale<M>" required}
  要扩展的基本区域设置。从`@nuxt/ui/locale`导入。
  ::

  ::field{name="options" type="Partial<DefineLocaleOptions<DeepPartial<M>>>" required}
  要覆盖的属性：

    ::collapsible

      ::field-group

        ::field{name="name" type="string"}
        重新设置区域设置的显示名称。
        ::

        ::field{name="code" type="string"}
        删除区域设置的ISO代码（例如`'en-GB'`、`'fr-CA'`）。
        ::

        ::field{name="dir" type="'ltr' | 'rtl'"}
        重新设置区域设置的文本方向。
        ::

        ::field{name="messages" type="DeepPartial<M>"}
        要与基本区域设置合并的部分消息对象。仅指定要重写的消息。
        ::
      ::
    ::
  ::
::

**返回：**一个新的具有合并属性的`Locale<M>`对象。

## Example

下面是一个为澳大利亚变体扩展英语语言环境的示例：

```vue
<script setup lang="ts">
import { en } from '@nuxt/ui/locale'

const locale = extendLocale(en, {
  name: 'English (Australia)',
  code: 'en-AU',
  messages: {
    colorMode: {
      dark: 'Dark',
      light: 'Light',
      system: 'System'
    },
    selectMenu: {
      search: 'Search…',
      noData: 'No results found',
      noMatch: 'No matching results'
    }
  }
})
</script>

<template>
  <UApp :locale="locale">
    <NuxtPage />
  </UApp>
</template>
```

::note
`extendLocale`实用程序使用深度合并，因此您只需指定要覆盖的消息。所有其他消息都将从基本区域设置继承。
::
