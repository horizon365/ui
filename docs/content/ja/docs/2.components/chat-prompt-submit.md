---
title: チャットプロンプト送信
description: '自動ステータス処理付きチャットプロンプトを送信するためのボタン。'
category: chat
links:
  - label: ボタン
    to: /docs/components/button
    icon: i-simple-icons-nuxtdotjs
  - label: サイトマップ
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/ChatPromptSubmit.vue
---

## 使用法

ChatPromptSubmitコンポーネントは、プロンプトを送信するために[ ChatPrompt ](/docs/components/chat-prompt)コンポーネント内で使用されます。これは、チャットを制御するために、さまざまな`status`値を自動的に処理します。

[ Button ](/docs/components/button)コンポーネントを拡張しているので、`color`、`variant`、`size`などのプロパティを渡すことができます。

::code-preview

#デフォルト
u—chat—prompt—submit

#コード
```vue
<template>
  <UChatPrompt>
    <UChatPromptSubmit />
  </UChatPrompt>
</template>
```
::

::note
また、[`ChatPrompt`](/docs/components/chat-prompt)コンポーネントの`footer`スロット内でも使用できます。
::

### レディ

ステータスが`ready`{lang="ts-type"}の場合、`color`、`variant`、`icon` propsを使用してButtonをカスタマイズします。デフォルトは

- `color="primary"`{lang="ts-type"}
- `variant="solid"`{lang="ts-type"}
- `icon="i-lucide-arrow-up"`{lang="ts-type"}

::component-code
---
きれい真
アイテム
  色
    - プライマリ
    - セカンダリ
    - 成功
    -  warning
    - エラー
    - ニュートラル
  バリアント
    - ソリッド
    - アウトライン
    - ソフト
    - 微妙
    - ゴースト
小道具
  色'プライマリ'
  バリアント'固体'
  アイコン'i—lucide—arrow—up'
---
::

::framework-only
#nuxt
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
このアイコンは、`ui.icons.arrowUp`キーの`app.config.ts`でグローバルにカスタマイズできます。
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
このアイコンは、`ui.icons.arrowUp`キーの下の`vite.config.ts`でグローバルにカスタマイズできます。
:::
::

### 提出

ステータスが`submitted`{lang="ts-type"}の場合、`submitted-color`、`submitted-variant`、`submitted-icon` propsを使用してButtonをカスタマイズします。デフォルト

- `submittedColor="neutral"`{lang="ts-type"}
- `submittedVariant="subtle"`{lang="ts-type"}
- `submittedIcon="i-lucide-square"`{lang="ts-type"}

::note
`stop`イベントは、ユーザーがボタンをクリックすると発行されます。
::

::component-code
---
きれい真
無視
  - ステータス
アイテム
  submittedColor
    - プライマリ
    - セカンダリ
    - 成功
    -  warning
    - エラー
    - ニュートラル
  submittedVariant
    - ソリッド
    - アウトライン
    - ソフト
    - 微妙
    - ゴースト
小道具
  submittedColor 'neutral'
  submittedVariant：'微妙'
  submittedIcon 'i—lucide'
  ステータス：'送信済み'
---
::

::framework-only
#nuxt
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
このアイコンは、`ui.icons.stop`キーの下の`app.config.ts`でグローバルにカスタマイズできます。
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
このアイコンは、`ui.icons.stop`キーの下の`vite.config.ts`でグローバルにカスタマイズできます。
:::
::

### ストリーミング

ステータスが`streaming`{lang="ts-type"}の場合、`streaming-color`、`streaming-variant`、`streaming-icon` propsを使用してButtonをカスタマイズします。デフォルトは

- `streamingColor="neutral"`{lang="ts-type"}
- `streamingVariant="subtle"`{lang="ts-type"}
- `streamingIcon="i-lucide-square"`{lang="ts-type"}

::note
`stop`イベントは、ユーザーがボタンをクリックすると発行されます。
::

::component-code
---
きれい真
無視
  - ステータス
アイテム
  streamingColor
    - プライマリ
    - セカンダリ
    - 成功
    -  warning
    - エラー
    - ニュートラル
  ストリーミングVariant
    - ソリッド
    - アウトライン
    - ソフト
    - 微妙
    - ゴースト
小道具
  streamingColor '中立'
  streamingVariant：'微妙'
  ストリーミングアイコン'i—lucide—square'
  status 'ストリーミング'
---
::

::framework-only
#nuxt
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
このアイコンは、`ui.icons.stop`キーの下の`app.config.ts`でグローバルにカスタマイズできます。
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
このアイコンは、`ui.icons.stop`キーの下の`vite.config.ts`でグローバルにカスタマイズできます。
:::
::

### エラー

ステータスが`error`{lang="ts-type"}の場合、`error-color`、`error-variant`、`error-icon` propsを使用してButtonをカスタマイズします。デフォルトは

- `errorColor="error"`{lang="ts-type"}
- `errorVariant="soft"`{lang="ts-type"}
- `errorIcon="i-lucide-rotate-ccw"`{lang="ts-type"}

::note
`reload`イベントは、ユーザーがButtonをクリックすると発行されます。
::

::component-code
---
きれい真
無視
  - ステータス
アイテム
  errorColor
    - プライマリ
    - セカンダリ
    - 成功
    -  warning
    - エラー
    - ニュートラル
  errorVariant
    - ソリッド
    - アウトライン
    - ソフト
    - 微妙
    - ゴースト
小道具
  errorColor 'error'
  errorVariant 'soft'
  errorIcon 'i—lucide—rotate—ccw'
  ステータス'エラー'
---
::

::framework-only
#nuxt
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
このアイコンは、`ui.icons.reload`キーの下の`app.config.ts`でグローバルにカスタマイズできます。
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
このアイコンは、`ui.icons.reload`キーの下の`vite.config.ts`でグローバルにカスタマイズできます。
:::
::

## 例

::tip{to="/docs/components/chat"}
インストール手順、サーバー設定、使用例については、** Chat **概要ページをご覧ください。
::

##  API

###  Props

component—props

::callout{icon="i-simple-icons-mdnwebdocs" to="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attributes" target="_blank"}
このコンポーネントは、すべてのネイティブ`<button>` HTML属性もサポートします。
::

### スロット

コンポーネントスロット

###  Emits

component—emits

## テーマ

コンポーネントテーマ

##  Changelog

component—changelog
