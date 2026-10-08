---
title: defineLocale
description: '一个为你的应用创建自定义区域设置的工具。'
---

## 使用情况

使用自动导入的`defineLocale`实用程序创建具有您自己的翻译的自定义区域设置。

```vue
<script setup lang="ts">
import type { Messages } from '@nuxt/ui'

const locale = defineLocale<Messages>({
  name: 'My custom locale',
  code: 'en',
  dir: 'ltr',
  messages: {
    // implement pairs
  }
})
</script>

<template>
  <UApp :locale="locale">
    <NuxtPage />
  </UApp>
</template>
```

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

`defineLocale<M>(options: DefineLocaleOptions<M>): Locale<M>`{lang="ts-type"}

使用提供的选项创建新的区域设置对象。

#### Parameters

::field-group

  ::field{name="options" type="DefineLocaleOptions<M>" required}
  具有以下属性的区域设置配置对象：

    ::collapsible

      ::field-group

        ::field{name="name" type="string" required}
        区域设置的显示名称（例如`'English'`、`'Français'`）。
        ::

        ::field{name="code" type="string" required}
        区域设置的ISO代码（例如`'en'`、`'fr'`、`'de-AT'`）。
        ::

        ::field{name="dir" type="'ltr' | 'rtl'"}
        区域设置的文本方向.将其设置为`'ltr'`。
        ::

        ::field{name="messages" type="M" required}
        翻译消息对象。为了类型安全，请使用`@nuxt/ui`中的`Messages`类型。
        ::
      ::
    ::
  ::
::

**Returns：**一个可以传递给[App](/docs/components/app)组件的`locale`prop的对象。

## Example

下面是创建自定义区域设置的完整示例：

```vue
<script setup lang="ts">
import type { Messages } from '@nuxt/ui'

const locale = defineLocale<Messages>({
  name: 'Español',
  code: 'es',
  dir: 'ltr',
  messages: {
    alert: {
      close: 'Cerrar'
    },
    modal: {
      close: 'Cerrar'
    },
    commandPalette: {
      back: 'Atrás',
      close: 'Cerrar',
      noData: 'Sin datos',
      noMatch: 'Sin resultados',
      placeholder: 'Escribe un comando o busca…'
    }
    // ... other component messages
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
您可以查看[内置的locales](https://github.com/nuxt/ui/tree/v4/src/runtime/locale)以了解如何构造消息对象。
::
