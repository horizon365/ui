---
title: ChatTool
description: 折りたたみ式AIツール呼び出しステータスを表示します。
category: chat
links:
  - label: 折りたたみ式
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/collapsible
  - label: サイトマップ
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/ChatTool.vue
---

## 使用法

ChatToolコンポーネントは、「コンポーネントの検索」や「ドキュメントの閲覧」など、AIツールの呼び出しステータスを表示する折りたたみ可能なブロックをレンダリングします。デフォルトスロットが指定されていると、ツール出力が表示されるように折りたたみ可能になります。

::component-example
---
collapse: true
prettier: true
name: 'chat-tool-example'
---
::

### Text

`text`プロパティを使用して、ツールステータステキストを設定します。

::component-code
---
hide:
  - class
props:
  text: 'Searched components'
  class: 'w-60'
---
::

### Suffix

メインラベルの後にセカンダリテキストを表示するには、`suffix`プロパティを使用します。

::component-code
---
hide:
  - class
ignore:
  - text
props:
  text: 'Reading component'
  suffix: 'Button'
  class: 'w-60'
---
::

### ストリーミング

`streaming`プロパティを使用して、ツールがアクティブに実行されていることを示します。

::component-code
---
hide:
  - class
ignore:
  - text
props:
  streaming: true
  text: 'Searching components...'
  class: 'w-60'
---
::

::tip
`@nuxt/ui/utils/ai`の`isToolStreaming`ユーティリティを使用して、ツール部品がまだ実行中かどうかを確認します。ツールがユーザーの承認を待っているときに`false`を返します。
::

### Shimmer

ストリーミング時、トリガーラベルは[`ChatShimmer`](/docs/components/chat-shimmer)コンポーネントを使用します。`shimmer`プロパティを使用して`duration`と`spread`をカスタマイズします。

::component-code
---
prettier: true
hide:
  - class
ignore:
  - text
props:
  streaming: true
  text: 'Searching components...'
  shimmer:
    duration: 2
    spread: 2
  class: 'w-60'
---
::

### Icon

`icon`プロパティを使用して、[Icon](/docs/components/icon)コンポーネントをトリガーの横に表示します。

::component-code
---
hide:
  - class
ignore:
  - text
props:
  icon: i-lucide-search
  text: 'Searched components'
  class: 'w-60'
---
::

### Loading

`loading`プロパティを使用して読み込みインジケータを表示します。`loading-icon`プロパティを使用して読み込みアイコンをカスタマイズします。

::component-code
---
hide:
  - class
ignore:
  - text
props:
  loading: true
  text: 'Searching components...'
  class: 'w-60'
---
::

### Loading Icon

`loading-icon`プロパティを使用してロードアイコンをカスタマイズします。デフォルトは`i-lucide-loader-circle`です。

::component-code
---
hide:
  - class
ignore:
  - text
props:
  loading: true
  loadingIcon: 'i-lucide-loader'
  text: 'Searching components...'
  class: 'w-60'
---
::

::framework-only
#nuxt
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
このアイコンは`app.config.ts`の`ui.icons.loading`キーでグローバルにカスタマイズできます。
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
このアイコンは`vite.config.ts`の`ui.icons.loading`キーでグローバルにカスタマイズできます。
:::
::

### Chevron

`chevron`プロパティを使用して、シェブロンアイコンの位置を変更します。

::note
`chevron`が`icon`で`leading`に設定されている場合、アイコンはホバーと開いたときにシェブロンと切り替わります。
::

::component-code
---
prettier: true
hide:
  - class
ignore:
  - text
props:
  chevron: leading
  icon: i-lucide-search
  text: 'Searched components'
  class: 'w-60'
slots:
  default: |

    Tool output content
---
::

### Chevronアイコン

`chevron-icon`プロパティを使用して、シェブロン[Icon](/docs/components/icon)をカスタマイズします。デフォルトは`i-lucide-chevron-down`です。

::component-code
---
prettier: true
hide:
  - class
ignore:
  - text
props:
  chevronIcon: 'i-lucide-arrow-down'
  text: 'Searched components'
  class: 'w-60'
slots:
  default: |

    Tool output content
---
::

::framework-only
#nuxt
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
このアイコンは`app.config.ts`の`ui.icons.chevronDown`キーでグローバルにカスタマイズできます。
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
このアイコンは`vite.config.ts`の`ui.icons.chevronDown`キーでグローバルにカスタマイズできます。
:::
::

### Variant

`variant`プロパティを使用してビジュアルスタイルを変更します。デフォルトは`inline`です。

::component-code
---
prettier: true
hide:
  - class
ignore:
  - text
  - icon
props:
  variant: card
  text: 'Searched components'
  icon: i-lucide-search
  chevron: trailing
  class: 'w-60'
slots:
  default: |

    Tool output content
---
::

### Actions badge{label="4.10+" class="align-text-top"}

`actions`プロパティを使用して、トリガーの下に[Button](/docs/components/button)のリストを表示します。

::component-code
---
prettier: true
hide:
  - class
ignore:
  - text
  - icon
  - variant
  - actions
props:
  actions:
    - label: 'Approve'
    - label: 'Deny'
      color: neutral
      variant: soft
  text: 'Run terminal command'
  variant: card
  icon: i-lucide-terminal
  class: 'w-60'
slots:
  default: |

    $ pnpm run lint
---
::

## サンプル

::tip{to="/docs/components/chat"}
インストール手順、サーバーのセットアップ、使用例については、**Chat**の概要ページをご覧ください。
::

### 承認フロー付きbadge{label="4.10+" class="align-text-top"}

`actions`プロパティを使用して、[AI SDK](https://ai-sdk.dev/docs/agents/tool-approvals)を使用してツール承認フローを構築します。ツールパーツが`approval-requested`ステートの場合、承認および拒否アクションを表示し、`addToolApprovalResponse`で応答します。

::component-example
---
collapse: true
prettier: true
name: 'chat-tool-approval-example'
---
::

::tip
`@nuxt/ui/utils/ai`の`isToolApprovalPending`ユーティリティを使用して保留中の承認を検出します。`isToolStreaming`はこの状態で`false`を返します。

```vue
<script setup lang="ts">
import { useChat } from '@ai-sdk/vue'
import { lastAssistantMessageIsCompleteWithApprovalResponses } from 'ai'

const { messages, addToolApprovalResponse } = useChat({
  sendAutomaticallyWhen: lastAssistantMessageIsCompleteWithApprovalResponses
})
</script>

<template>
  <UChatTool
    v-if="isToolUIPart(part)"
    :text="getToolName(part)"
    :streaming="isToolStreaming(part)"
    :actions="part.state === 'approval-requested' ? [
      { label: 'Approve', onClick: () => addToolApprovalResponse({ id: part.approval.id, approved: true }) },
      { label: 'Deny', color: 'neutral', variant: 'ghost', onClick: () => addToolApprovalResponse({ id: part.approval.id, approved: false }) }
    ] : undefined"
  />
</template>
```
::

## API

### Props

:component-props

### スロット

:component-slots

### Emits

:component-emits

## Theme

:component-theme

## Changelog

:component-changelog
