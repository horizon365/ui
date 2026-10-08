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
崩壊真
きれい真
名前'chat—tool—example'
---
::

### テキスト

`text`プロパティを使用して、ツールステータステキストを設定します。

::component-code
---
隠す
  - クラス
小道具
  text '検索されたコンポーネント'
  クラス'w—60'
---
::

### サフィックス

`suffix`プロパティを使用して、メインラベルの後にセカンダリテキストを表示します。

::component-code
---
隠す
  - クラス
無視
  - テキスト
小道具
  text '読み込みコンポーネント'
  サフィックス'ボタン'
  クラス'w—60'
---
::

### ストリーミング

`streaming`プロパティを使用して、ツールがアクティブに実行されていることを示します。テキストにはキラキラアニメーションが表示されます。

::component-code
---
隠す
  - クラス
無視
  - テキスト
小道具
  ストリーミング真
  text 'コンポーネントの検索...'
  クラス'w—60'
---
::

::tip
`@nuxt/ui/utils/ai`の`isToolStreaming`ユーティリティを使用して、ツール部品がまだ実行中かどうかを確認します。ツールがユーザーの承認を待っているときに`false`を返します。
::

###  Shimmer

ストリーミング時、トリガーラベルは[`ChatShimmer`](/docs/components/chat-shimmer)コンポーネントを使用します。`shimmer` propを使用して、`duration`と`spread`をカスタマイズします。

::component-code
---
きれい真
隠す
  - クラス
無視
  - テキスト
小道具
  ストリーミング真
  text 'コンポーネントの検索...'
  シマー
    期間2
    スプレッド2
  クラス'w—60'
---
::

### アイコン

`icon` propを使用して、[ Icon ](/docs/components/icon)コンポーネントをトリガーの横に表示します。

::component-code
---
隠す
  - クラス
無視
  - テキスト
小道具
  アイコンi—lucide—search
  text '検索されたコンポーネント'
  クラス'w—60'
---
::

### ローディング

`loading` propを使用して読み込みインジケータを表示します。`loading-icon` propを使用して読み込みアイコンをカスタマイズします。

::component-code
---
隠す
  - クラス
無視
  - テキスト
小道具
  読み込み真
  text 'コンポーネントの検索...'
  クラス'w—60'
---
::

###  Loadingアイコン

読み込みアイコンをカスタマイズするには、`loading-icon`プロパティを使用します。デフォルトは`i-lucide-loader-circle`です。

::component-code
---
隠す
  - クラス
無視
  - テキスト
小道具
  読み込み真
  loadingIcon 'i—lucide—loader'
  text 'コンポーネントの検索...'
  クラス'w—60'
---
::

::framework-only
#nuxt
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
このアイコンは、`ui.icons.loading`キーの下の`app.config.ts`でグローバルにカスタマイズできます。
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
このアイコンは、`ui.icons.loading`キーの下の`vite.config.ts`でグローバルにカスタマイズできます。
:::
::

###  Chevron

`chevron` propを使用して、シェブロンアイコンの位置を変更します。

::note
`chevron`が`icon`で`leading`に設定されている場合、アイコンはホバーと開いたときにシェブロンと入れ替わります。
::

::component-code
---
きれい真
隠す
  - クラス
無視
  - テキスト
小道具
  シェブロン：リーディング
  アイコンi—lucide—search
  text '検索されたコンポーネント'
  クラス'w—60'
スロット
  デフォルト|

    ツール出力内容
---
::

### シェブロンアイコン

`chevron-icon` propを使用して、chevron [ Icon ](/docs/components/icon)をカスタマイズします。デフォルトは`i-lucide-chevron-down`です。

::component-code
---
きれい真
隠す
  - クラス
無視
  - テキスト
小道具
  chevronIcon 'i—lucide—arrow—down'
  text '検索されたコンポーネント'
  クラス'w—60'
スロット
  デフォルト|

    ツール出力内容
---
::

::framework-only
#nuxt
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
このアイコンは、`ui.icons.chevronDown`キーの下の`app.config.ts`でグローバルにカスタマイズできます。
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
このアイコンは、`ui.icons.chevronDown`キーの下の`vite.config.ts`でグローバルにカスタマイズできます。
:::
::

### バリアント

ビジュアルスタイルを変更するには、`variant`プロパティを使用します。デフォルトは`inline`です。

::component-code
---
きれい真
隠す
  - クラス
無視
  - テキスト
  - アイコン
小道具
  バリアントカード
  text '検索されたコンポーネント'
  アイコンi—lucide—search
  シェブロントレーリング
  クラス'w—60'
スロット
  デフォルト|

    ツール出力内容
---
::

### アクションbadge {label="4.10+" class="align-text-top"}

`actions` propを使用して、[ Button ](/docs/components/button)のリストをトリガーの下に表示します。これは、実行前にユーザーの確認が必要なツールに便利です。

::component-code
---
きれい真
隠す
  - クラス
無視
  - テキスト
  - アイコン
  - バリアント
  - アクション
小道具
  アクション
    -  label '承認'
    -  label 'Deny'
      色ニュートラル
      バリアントソフト
  text 'ターミナルコマンドを実行'
  バリアントカード
  アイコンi—lucide—terminal
  クラス'w—60'
スロット
  デフォルト|

    $pnpm実行lint
---
::

## 例

::tip{to="/docs/components/chat"}
インストール手順、サーバー設定、使用例については、** Chat **概要ページをご覧ください。
::

### 承認フロー付き：badge {label="4.10+" class="align-text-top"}

`actions` propを使用して、[ AI SDK ](https://ai-sdk.dev/docs/agents/tool-approvals)を使用してツール承認フローを構築します。ツールパートが`approval-requested`状態にある場合、承認アクションと拒否アクションを表示し、`addToolApprovalResponse`で応答します。

::component-example
---
崩壊真
きれい真
名前'チャットツール承認例'
---
::

::tip
`@nuxt/ui/utils/ai`から`isToolApprovalPending`ユーティリティを使用して保留中の承認を検出します。`isToolStreaming`はこの状態で`false`を返します。

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

##  API

###  Props

component—props

### スロット

コンポーネントスロット

###  Emits

component—emits

## テーマ

コンポーネントテーマ

##  Changelog

component—changelog
