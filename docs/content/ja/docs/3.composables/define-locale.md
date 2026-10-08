---
title: 定義Locale
description: 'アプリケーションのカスタムロケールを作成するユーティリティです。'
---

## 使用法

自動インポートされた`defineLocale`ユーティリティを使用して、独自の翻訳を含むカスタムロケールを作成します。

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
#nuxt
:::tip{to="/docs/getting-started/integrations/i18n/nuxt"}
国際化の詳細については、** i18n integration **のドキュメントを参照してください。
:::

#vue
:::tip{to="/docs/getting-started/integrations/i18n/vue"}
国際化の詳細については、** i18n integration **のドキュメントを参照してください。
:::
::

##  API

`defineLocale<M>(options: DefineLocaleOptions<M>): Locale<M>`{lang="ts-type"}

オプションで新しいロケールオブジェクトを作成します。

#### パラメータ

::field-group

  ::field{name="options" type="DefineLocaleOptions<M>" required}
  次のプロパティを持つlocale構成オブジェクト：

    ::collapsible

      ::field-group

        ::field{name="name" type="string" required}
        ロケールの表示名例`'English'``'Français'`。
        ::

        ::field{name="code" type="string" required}
        ロケールのISOコード例`'en'``'fr'``'de-AT'`。
        ::

        ::field{name="dir" type="'ltr' | 'rtl'"}
        ロケールのテキスト方向。デフォルトは`'ltr'`です。
        ::

        ::field{name="messages" type="M" required}
        translation messagesオブジェクト。型の安全性のために`@nuxt/ui`から`Messages`型を使用します。
        ::
      ::
    ::
  ::
::

**戻り値** A `Locale<M>`[ App ](/docs/components/app)コンポーネントの`locale` propに渡すことができるオブジェクト。

## 例

カスタムロケールを作成する完全な例を以下に示します：

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
messagesオブジェクトの構成方法については、[](https://github.com/nuxt/ui/tree/v4/src/runtime/locale)を参照してください。
::
