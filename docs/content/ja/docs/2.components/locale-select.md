---
title: Locale Select
description: 'ロケールを切り替えるための選択。'
category: i18n
links:
  - label: 選択メニュー
    to: /docs/components/select-menu
    icon: i-simple-icons-nuxtdotjs
  - label: サイトマップ
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/locale/LocaleSelect.vue
---

## 使用法

LocaleSelectコンポーネントは[ SelectMenu ](/docs/components/select-menu)`color``variant``size`などのプロパティを渡すことができます。

::framework-only
#nuxt
::note{to="/docs/getting-started/integrations/i18n/nuxt"}
このコンポーネントは、** i18n **システムで使用することを意図しています。詳細については、ガイドを参照してください。
::

#vue
::note{to="/docs/getting-started/integrations/i18n/vue"}
このコンポーネントは、** i18n **システムで使用することを意図しています。詳細については、ガイドを参照してください。
::

::

::warning
フラグはUnicode文字を使用して表示されます。これにより、異なる表示になる可能性があります。例えば、WindowsのMicrosoft Edgeでは、OSフォントにはフラグアイコンが付属していないため、代わりにISO 3166—1 alpha—2コードが表示されます。
::

###  Locales

`locales` propを`@nuxt/ui/locale`からのロケールの配列で使用します。

::component-example
---
name 'ロケール選択例'
---
::

アプリケーションで必要なロケールのみを渡すことができます。

```vue
<script setup lang="ts">
import { en, es, fr } from '@nuxt/ui/locale'

const locale = ref('en')
</script>

<template>
  <ULocaleSelect v-model="locale" :locales="[en, es, fr]" />
</template>
```

### 動的ロケール

::framework-only
#nuxt
::div
Nuxt i 18 nで使用できます：

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

#vue
::div
Vue i 18 nで使用できます：

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

##  API

###  Props

component—props

##  Changelog

component—changelog {prefix="locale"}
