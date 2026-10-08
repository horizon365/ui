---
title: extendLocale
description: '既存のロケールをカスタム翻訳で拡張するユーティリティ。'
---

## 使用法

自動インポートされた`extendLocale`ユーティリティを使用して、特定のプロパティまたはメッセージをオーバーライドして既存のロケールをカスタマイズします。

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

これは以下のような場合に便利です。
- 言語の地域バリアントを作成します例`en`から`en-AU`
- ロケール全体を再定義せずに特定の翻訳を上書きする
- アプリケーションのコンポーネントラベルをカスタマイズする

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

`extendLocale<M>(locale: Locale<M>, options: Partial<DefineLocaleOptions<DeepPartial<M>>>): Locale<M>`{lang="ts-type"}

既存のロケールをオプションで拡張し、メッセージを深くマージします。

#### パラメータ

::field-group

  ::field{name="locale" type="Locale<M>" required}
  拡張するベースロケール。`@nuxt/ui/locale`からインポートします。
  ::

  ::field{name="options" type="Partial<DefineLocaleOptions<DeepPartial<M>>>" required}
  オーバーライドするプロパティ

    ::collapsible

      ::field-group

        ::field{name="name" type="string"}
        ロケールの表示名を上書きします。
        ::

        ::field{name="code" type="string"}
        ロケールのISOコードを上書きします例`'en-GB'``'fr-CA'`。
        ::

        ::field{name="dir" type="'ltr' | 'rtl'"}
        ロケールのテキスト方向を上書きします。
        ::

        ::field{name="messages" type="DeepPartial<M>"}
        部分メッセージは、ベースロケールとマージするオブジェクトです。オーバーライドするメッセージのみを指定します。
        ::
      ::
    ::
  ::
::

**戻り値**マージされたプロパティを持つ新しい`Locale<M>`オブジェクト。

## 例

以下は、オーストラリアのバリアントの英語ロケールを拡張した例です：

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
`extendLocale`ユーティリティはディープマージを使用しているので、オーバーライドしたいメッセージを指定するだけで済みます。その他のメッセージはすべてベースロケールから継承されます。
::
