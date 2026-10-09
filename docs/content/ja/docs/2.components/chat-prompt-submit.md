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

ChatPromptSubmitコンポーネントは、[ChatPrompt](/docs/components/chat-prompt)コンポーネント内でプロンプトを送信するために使用されます。このコンポーネントは、チャットを制御するために異なる`status`値を自動的に処理します。

[Button](/docs/components/button)コンポーネントを拡張するため、`color`、`variant`、`size`などの任意のプロパティを渡すことができます。

::code-preview

#default
:u-chat-prompt-submit

#code
```vue
<template>
  <UChatPrompt>
    <UChatPromptSubmit />
  </UChatPrompt>
</template>
```
::

::note
[`ChatPrompt`](/docs/components/chat-prompt)コンポーネントの`footer`スロット内でも使用できます。
::

### Ready

ステータスが`ready`{lang="ts-type"}の場合、`color`、`variant`、`icon`のプロップを使用してButtonをカスタマイズします。デフォルトは

- `color="primary"`{lang="ts-type"}
- `variant="solid"`{lang="ts-type"}
- `icon="i-lucide-arrow-up"`{lang="ts-type"}

::component-code
---
prettier: true
items:
  color:
    - primary
    - secondary
    - success
    - warning
    - error
    - neutral
  variant:
    - solid
    - outline
    - soft
    - subtle
    - ghost
props:
  color: 'primary'
  variant: 'solid'
  icon: 'i-lucide-arrow-up'
---
::

::framework-only
#nuxt
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
このアイコンは`app.config.ts`の`ui.icons.arrowUp`キーでグローバルにカスタマイズできます。
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
このアイコンは`vite.config.ts`の`ui.icons.arrowUp`キーでグローバルにカスタマイズできます。
:::
::

### 提出済み

ステータスが`submitted`{lang="ts-type"}の場合、`submitted-color`、`submitted-variant`、`submitted-icon`のプロップを使用してButtonをカスタマイズします。デフォルトは

- `submittedColor="neutral"`{lang="ts-type"}
- `submittedVariant="subtle"`{lang="ts-type"}
- `submittedIcon="i-lucide-square"`{lang="ts-type"}

::note
`stop`イベントは、ユーザーがButtonをクリックすると発行されます。
::

::component-code
---
prettier: true
ignore:
  - status
items:
  submittedColor:
    - primary
    - secondary
    - success
    - warning
    - error
    - neutral
  submittedVariant:
    - solid
    - outline
    - soft
    - subtle
    - ghost
props:
  submittedColor: 'neutral'
  submittedVariant: 'subtle'
  submittedIcon: 'i-lucide-square'
  status: 'submitted'
---
::

::framework-only
#nuxt
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
このアイコンは`app.config.ts`の`ui.icons.stop`キーでグローバルにカスタマイズできます。
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
このアイコンは`vite.config.ts`の`ui.icons.stop`キーでグローバルにカスタマイズできます。
:::
::

### ストリーミング

ステータスが`streaming`{lang="ts-type"}の場合、`streaming-color`、`streaming-variant`、`streaming-icon`のプロップを使用してButtonをカスタマイズします。デフォルトは

- `streamingColor="neutral"`{lang="ts-type"}
- `streamingVariant="subtle"`{lang="ts-type"}
- `streamingIcon="i-lucide-square"`{lang="ts-type"}

::note
`stop`イベントは、ユーザーがButtonをクリックすると発行されます。
::

::component-code
---
prettier: true
ignore:
  - status
items:
  streamingColor:
    - primary
    - secondary
    - success
    - warning
    - error
    - neutral
  streamingVariant:
    - solid
    - outline
    - soft
    - subtle
    - ghost
props:
  streamingColor: 'neutral'
  streamingVariant: 'subtle'
  streamingIcon: 'i-lucide-square'
  status: 'streaming'
---
::

::framework-only
#nuxt
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
このアイコンは`app.config.ts`の`ui.icons.stop`キーでグローバルにカスタマイズできます。
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
このアイコンは`vite.config.ts`の`ui.icons.stop`キーでグローバルにカスタマイズできます。
:::
::

### Error

ステータスが`error`{lang="ts-type"}の場合、`error-color`、`error-variant`、`error-icon`のプロップを使用してButtonをカスタマイズします。デフォルトは

- `errorColor="error"`{lang="ts-type"}
- `errorVariant="soft"`{lang="ts-type"}
- `errorIcon="i-lucide-rotate-ccw"`{lang="ts-type"}

::note
`reload`イベントは、ユーザーがButtonをクリックすると発行されます。
::

::component-code
---
prettier: true
ignore:
  - status
items:
  errorColor:
    - primary
    - secondary
    - success
    - warning
    - error
    - neutral
  errorVariant:
    - solid
    - outline
    - soft
    - subtle
    - ghost
props:
  errorColor: 'error'
  errorVariant: 'soft'
  errorIcon: 'i-lucide-rotate-ccw'
  status: 'error'
---
::

::framework-only
#nuxt
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
このアイコンは`app.config.ts`の`ui.icons.reload`キーでグローバルにカスタマイズできます。
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
このアイコンは`vite.config.ts`の`ui.icons.reload`キーでグローバルにカスタマイズできます。
:::
::

## 例

::tip{to="/docs/components/chat"}
インストール手順、サーバーのセットアップ、使用例については、**Chat**の概要ページをご覧ください。
::

## API

### Props

:component-props

::callout{icon="i-simple-icons-mdnwebdocs" to="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attributes" target="_blank"}
このコンポーネントはすべてのネイティブ`<button>` HTML属性もサポートします。
::

### スロット

:component-slots

### Emits

:component-emits

## Theme

:component-theme

## Changelog

:component-changelog
