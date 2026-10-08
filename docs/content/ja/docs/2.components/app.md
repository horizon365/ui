---
description: アプリケーションにグローバル設定、トースト、ツールチップを提供するラッパー。
category: layout
links:
  - label: サイトマップ
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/App.vue
---

## 使用法

このコンポーネントはReka UI [ ConfigProvider ](https://reka-ui.com/docs/utilities/config-provider)を実装し、すべてのコンポーネントにグローバル設定を提供します。

- すべてのプリミティブがグローバルな読み取り方向を継承できるようにします。
- ボディロック設定時のスクロールボディの動作変更を有効にします。
- レイアウトシフトを防ぐためのより多くのコントロール。

また、[ ToastProvider ](https://reka-ui.com/docs/components/toast#provider)と[ TooltipProvider ](https://reka-ui.com/docs/components/tooltip#provider)を使用して、グローバルなトーストとツールチップ、プログラムモーダルとスライドオーバーを提供しています。

アプリケーション全体を`app.vue`ファイルにAppコンポーネントでラップします。

```vue [app.vue]
<template>
  <UApp>
    <NuxtPage />
  </UApp>
</template>
```

::framework-only
#nuxt
:::tip{to="/docs/getting-started/integrations/i18n/nuxt#locale"}
`locale`プロパティを使用してアプリケーションのロケールを変更する方法を学びます。これは、Calendar、InputDate、InputTimeなどのコンポーネントの日付/時刻形式を制御します。
:::

#vue
:::tip{to="/docs/getting-started/integrations/i18n/vue#locale"}
`locale`プロパティを使用してアプリケーションのロケールを変更する方法を学びます。これは、Calendar、InputDate、InputTimeなどのコンポーネントの日付/時刻形式を制御します。
:::
::

##  API

###  Props

component—props

### スロット

コンポーネントスロット

##  Changelog

component—changelog
