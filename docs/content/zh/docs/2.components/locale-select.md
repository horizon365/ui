---
title: LocaleSelect
description: '选择以在区域设置之间切换。'
category: i18n
links:
  - label: 选择菜单
    to: /docs/components/select-menu
    icon: i-simple-icons-nuxtdotjs
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/locale/LocaleSelect.vue
---

## 使用情况

LocaleSelect组件扩展了[SelectMenu](/docs/components/select-menu)组件，因此您可以传递任何属性，如`color`、`variant`、`size`等。

::framework-only
#nuxt（无文本）
::note{to="/docs/getting-started/integrations/i18n/nuxt"}
此组件适用于**i18n**系统。请在指南中了解有关此组件的详细信息。
::

版本号
::note{to="/docs/getting-started/integrations/i18n/vue"}
此组件适用于**i18n**系统。请在指南中了解有关此组件的详细信息。
::

::

::warning
标志使用Unicode字符显示。这可能导致不同的显示，例如Windows下的微软Edge显示ISO 3166-1 alpha-2代码，因为OS字体没有附带标志图标。
::

### Locales

将`locales`道具与来自`@nuxt/ui/locale`的区域设置数组一起使用。

::component-example
---
name：'locale-select-example'
---
::

您可以只传递应用程序中所需的区域设置：

```vue
<script setup lang="ts">
import { en, es, fr } from '@nuxt/ui/locale'

const locale = ref('en')
</script>

<template>
  <ULocaleSelect v-model="locale" :locales="[en, es, fr]" />
</template>
```

### Dynamic locale

::framework-only
#nuxt（无文本）
::div
您可以使用它与Nuxt i18 n：

```vue
<script setup lang="ts">
import * as locales from '@nuxt/ui/locale'

const { locale, setLocale } = useI18n()
</script>

<template>
  <ULocaleSelect
    :model-value="locale"
    :locales="Object.values(locales)"
    @update:model-value="setLocale($event)"
  />
</template>
```

::

版本号
::div
你可以在Vue i18 n中使用它：

```vue
<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import * as locales from '@nuxt/ui/locale'

const { locale, setLocale } = useI18n()
</script>

<template>
  <ULocaleSelect
    :model-value="locale"
    :locales="Object.values(locales)"
    @update:model-value="setLocale($event)"
  />
</template>
```

::

::

美国石油学会

### Props

：组件支柱

## Changelog

：component-changelog{prefix="locale"}
