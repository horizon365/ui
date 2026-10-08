---
title: チャットメッセージ
description: 'Vercel AI SDKとシームレスに連携するように設計されたチャットメッセージの一覧を表示します。'
category: chat
links:
  - label: サイトマップ
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/ChatMessages.vue
---

## 使用法

ChatMessagesコンポーネントは、デフォルトスロットまたは`messages` propを使用して、[ ChatMessage ](/docs/components/chat-message)コンポーネントのリストを表示します。

```vue {2,8}
<template>
  <UChatMessages>
    <UChatMessage
      v-for="(message, index) in messages"
      :key="index"
      v-bind="message"
    />
  </UChatMessages>
</template>
```

::callout{icon="i-lucide-rocket"}
このコンポーネントは、以下のような機能を備えたAIチャットボット専用に構築されています。

- 読み込み時に最初にスクロールします（[`shouldScrollToBottom`](#should-scroll-to-bottom)）。
- 新しいメッセージが届くとスクロールダウンします[`shouldAutoScroll`](#should-auto-scroll)。
- スクロールすると「自動スクロール」ボタンが表示され、ユーザは最新のメッセージ（[`autoScroll`](#auto-scroll)）にジャンプできます。
- アシスタントが処理中にロードインジケータが表示されます[`status`](#status)。
- 送信されたメッセージはビューポートの上部までスクロールされ、最後のユーザーメッセージの高さは動的に調整されます。
::

### メッセージ

`messages`プロパティを使用して、チャットメッセージのリストを表示します。

::component-code
---
きれい真
外部
  - メッセージ
無視
  - メッセージ
隠す
  -  shouldScrollToBottom
崩壊真
クラス'overflow—y—auto'
小道具
  メッセージ
    -  id '6045235a—a435—46b8—989d—2df38ca2eb47'
      役割ユーザー
      パーツ
        - タイプ'text'
          「こんにちは、お元気ですか？」
    -  id '7a92b3c1—d5f8—4e76—b8a9—3c1e5fb2e0d8'
      役割アシスタント
      パーツ
        - タイプ'text'
          テキスト：「私は元気です、尋ねてくれてありがとう！今日はどうしたらいいですか？」
    -  id '9c84d6a7—8b23—4f12—a1d5—e7f3b9c05e2a'
      役割ユーザー
      パーツ
        - タイプ'text'
          テキスト：「東京の現在の天気は？」
    -  id 'b2e5f8c3—a1d9—4e67—b3f2—c9d8e7a6b5f4'
      役割アシスタント
      パーツ
        - タイプ'text'
          テキスト「最新のデータによると、東京は現在晴れており、気温は24 ° C前後です。晴れた空が美しい天気です。」
  shouldScrollToBottom：false
---
::

### ステータス

`status`プロパティを使用して、アシスタントが処理中のビジュアルインジケータを表示します。

::component-code
---
きれい真
外部
  - メッセージ
無視
  - メッセージ
  - ステータス
隠す
  -  shouldScrollToBottom
クラス'overflow—y—auto'
小道具
  ステータス：'送信済み'
  メッセージ
    -  id：'6045235a—a435—46b8—989d—2df38ca2eb47'
      役割ユーザー
      パーツ
        - タイプ'text'
          「こんにちは、お元気ですか？」
  shouldScrollToBottom：false
---
::

::note
以下は、AI SDK `useChat` composableの異なるステータスの詳細です。

- `submitted`メッセージはAPIに送信され、レスポンスストリームの開始を待っています。
- `streaming`レスポンスはAPIからアクティブにストリーミングされ、大量のデータを受信します。
- `ready`完全な応答が受信され処理されました。新しいユーザーメッセージを送信できます。
- `error` APIリクエスト中にエラーが発生し、正常に完了できませんでした。
::

### ユーザー

`user` propを使用して、[ ChatMessage ](/docs/components/chat-message) propを`user``user`メッセージに変更します。デフォルトは

- `side: 'right'`{lang="ts-type"}
- `variant: 'soft'`{lang="ts-type"}

::component-code
---
きれい真
外部
  - メッセージ
無視
  - メッセージ
  日本語
  -  avatar.loading
隠す
  -  shouldScrollToBottom
崩壊 真
アイテム
  user.variant:
    - ソリッド
    - アウトライン
    - 微妙
    - ソフト
    - naked
  user.side:
    - 左
    - 右
クラス ' overflow-y-auto '
小道具
  ユーザー
    サイド 左
    バリアント 固体
    アバター
      srchttps://github.com/benjamincanac.png
      読み込み 怠惰
  メッセージ
    - id ' 6045235a-a435 - 46b8 - 989d-2df38ca2eb47 '
      役割 ユーザー
      パーツ
        - タイプ ' text '
          “ こんにちは 、 お 元気 です か ？ ”
    - id ' 7a92b3c1-d5f8 - 4e76-b8a9 - 3c1e5fb2e0d8 '
      役割 アシスタント
      パーツ
        - タイプ ' text '
          テキスト ： “ 私 は 元気 です 、 尋ね て くれ て ありがとう ! 今日 は どう し たら いい です か ？ ”
    - id ' 9c84d6a7 - 8b23 - 4f12-a1d5-e7f3b9c05e2a '
      役割 ユーザー
      パーツ
        - タイプ ' text '
          テキスト ： “ 東京 の 現在 の 天気 は ？ ”
    - id ' b2e5f8c3-a1d9 - 4e67-b3f2-c9d8e7a6b5f4 '
      役割 アシスタント
      パーツ
        - タイプ ' text '
          テキスト“ 最新 の データ に よる と 、 東京 は 現在 晴れ て おり 、 気温 は 24 ° C 前後 です 。 晴れ た 空 が 美しい 天気 です 。 ”
  shouldScrollToBottom：false
---
::

### アシスタント

`assistant` propを使用して、[ ChatMessage ](/docs/components/chat-message) propを`assistant``assistant` propを変更します。デフォルトは

- `side: 'left'`{lang="ts-type"}
- `variant: 'naked'`{lang="ts-type"}

::component-code
---
きれい真
外部
  - メッセージ
無視
  - メッセージ
  -  avatar.icon
  -  assistant.actions
隠す
  -  shouldScrollToBottom
崩壊真
アイテム
  assistant.variant:
    - ソリッド
    - アウトライン
    - 微妙
    - ソフト
    -  naked
  assistant.side:
    - 左
    - 右
クラス'overflow—y—auto'
小道具
  アシスタント
    サイド左
    variantアウトライン
    アバター
      アイコンi—lucide—bot
    アクション
      -  label 'クリップボードにコピー'
        アイコンi—lucide—copy
  メッセージ
    -  id：'6045235a—a435—46b8—989d—2df38ca2eb47'
      役割ユーザー
      パーツ
        - タイプ'text'
          「こんにちは、お元気ですか？」
    -  id '7a92b3c1—d5f8—4e76—b8a9—3c1e5fb2e0d8'
      役割アシスタント
      パーツ
        - タイプ'text'
          テキスト：「私は元気です、尋ねてくれてありがとう！今日はどうしたらいいですか？」
    -  id '9c84d6a7—8b23—4f12—a1d5—e7f3b9c05e2a'
      役割ユーザー
      パーツ
        - タイプ'text'
          テキスト：「東京の現在の天気は？」
    -  id 'b2e5f8c3—a1d9—4e67—b3f2—c9d8e7a6b5f4'
      役割アシスタント
      パーツ
        - タイプ'text'
          テキスト「最新のデータによると、東京は現在晴れており、気温は24 ° C前後です。晴れた空が美しい天気です。」
  shouldScrollToBottom：false
---
::

### 自動スクロール

`auto-scroll`プロパティを使用して、チャットの先頭までスクロールするときに表示される自動スクロールボタン（`false`値）をカスタマイズまたは非表示にします。デフォルトは：

- `color: 'neutral'`{lang="ts-type"}
- `variant: 'outline'`{lang="ts-type"}

[ Button ](/docs/components/button)コンポーネントから任意のプロパティを渡してカスタマイズできます。

::component-code
---
きれい真
崩壊真
外部
  - メッセージ
無視
  - メッセージ
  -  autoScroll.color
  -  autoScroll.variant
  -  shouldScrollToBottom
クラス'overflow—y—auto max—h—[341px] static'
小道具
  自動スクロール
    色ニュートラル
    variantアウトライン
  shouldScrollToBottom：false
  メッセージ
    -  id：'6045235a—a435—46b8—989d—2df38ca2eb47'
      役割ユーザー
      パーツ
        - タイプ'text'
          「こんにちは、お元気ですか？」
    -  id '7a92b3c1—d5f8—4e76—b8a9—3c1e5fb2e0d8'
      役割アシスタント
      パーツ
        - タイプ'text'
          テキスト：「私は元気です、尋ねてくれてありがとう！今日はどうしたらいいですか？」
    -  id '9c84d6a7—8b23—4f12—a1d5—e7f3b9c05e2a'
      役割ユーザー
      パーツ
        - タイプ'text'
          テキスト：「東京の現在の天気は？」
    -  id 'b2e5f8c3—a1d9—4e67—b3f2—c9d8e7a6b5f4'
      役割アシスタント
      パーツ
        - タイプ'text'
          テキスト「最新のデータによると、東京は現在晴れており、気温は約24 ° C（75 ° F）となっています。今日は晴れた空が美しい日です。今週の残りの予報では、木曜日にはわずかに雨が降り、週末には気温は徐々に28 ° Cに上昇します。湿度レベルは約65%と中程度です。風速は南東から8 km/hで軽いです。空気の質は42のインデックスで良好です。UVインデックスは7と高いので、屋外で時間を過ごす予定の場合は日焼け止めを着用することをお勧めします。日の出は5：24 AM、日没は6：午後48時、東京に今日の日照時間はおよそ13時間24分となる。
    -  id 'c3e5f8c3—a1d9—4e67—b3f2—c9d8e7a6b5f4'
      役割ユーザー
      パーツ
        - タイプ'text'
          テキスト：「京都で人気の観光スポットを教えてください。」
    -  id 'd4f5g8c3—a1d9—4e67—b3f2—c9d8e7a6b5f4'
      役割アシスタント
      パーツ
        - タイプ'text'
          テキスト「京都は美しい寺院、伝統的な茶室、庭園で知られています。鏡の池に映る金箔の外観が見事な金閣、山腹に何千もの朱の鳥居が連なる伏見稲荷神社、そびえ立つ茎が別世界の雰囲気を醸し出す嵐山竹林、「清水寺は丘の中腹にあり、街を一望することができ、伝統的な木造町家が並ぶ石畳の細い道を、夜の約束に急ぐ芸妓を見ることができる歴史ある祇園地区を一望できる。」
---
::

### 自動スクロールアイコン

`auto-scroll-icon`プロパティを使用して、自動スクロールボタン[ Icon ](/docs/components/icon)をカスタマイズします。デフォルトは`i-lucide-arrow-down`です。

::component-code
---
きれい真
崩壊真
外部
  - メッセージ
無視
  - メッセージ
  -  autoScroll.color
  -  autoScroll.variant
  -  shouldScrollToBottom
クラス'overflow—y—auto max—h—[341px] static'
小道具
  autoScrollIcon 'i—lucide—chevron—down'
  shouldScrollToBottom：false
  メッセージ
    -  id：'6045235a—a435—46b8—989d—2df38ca2eb47'
      役割ユーザー
      パーツ
        - タイプ'text'
          「こんにちは、お元気ですか？」
    -  id '7a92b3c1—d5f8—4e76—b8a9—3c1e5fb2e0d8'
      役割アシスタント
      パーツ
        - タイプ'text'
          テキスト：「私は元気です、尋ねてくれてありがとう！今日はどうしたらいいですか？」
    -  id '9c84d6a7—8b23—4f12—a1d5—e7f3b9c05e2a'
      役割ユーザー
      パーツ
        - タイプ'text'
          テキスト：「東京の現在の天気は？」
    -  id 'b2e5f8c3—a1d9—4e67—b3f2—c9d8e7a6b5f4'
      役割アシスタント
      パーツ
        - タイプ'text'
          テキスト「最新のデータによると、東京は現在晴れており、気温は約24 ° C（75 ° F）となっています。今日は晴れた空が美しい日です。今週の残りの予報では、木曜日にはわずかに雨が降り、週末には気温は徐々に28 ° Cに上昇します。湿度レベルは約65%と中程度です。風速は南東から8 km/hで軽いです。空気の質は42のインデックスで良好です。UVインデックスは7と高いので、屋外で時間を過ごす予定の場合は日焼け止めを着用することをお勧めします。日の出は5：24 AM、日没は6：午後48時、東京に今日の日照時間はおよそ13時間24分となる。
    -  id 'c3e5f8c3—a1d9—4e67—b3f2—c9d8e7a6b5f4'
      役割ユーザー
      パーツ
        - タイプ'text'
          テキスト：「京都で人気の観光スポットを教えてください。」
    -  id 'd4f5g8c3—a1d9—4e67—b3f2—c9d8e7a6b5f4'
      役割アシスタント
      パーツ
        - タイプ'text'
          テキスト「京都は美しい寺院、伝統的な茶室、庭園で知られています。鏡の池に映る金箔の外観が見事な金閣、山腹に何千もの朱の鳥居が連なる伏見稲荷神社、そびえ立つ茎が別世界の雰囲気を醸し出す嵐山竹林、「清水寺は丘の中腹にあり、街を一望することができ、伝統的な木造町家が並ぶ石畳の細い道を、夜の約束に急ぐ芸妓を見ることができる歴史ある祇園地区を一望できる。」
---
::

::framework-only
#nuxt
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
このアイコンは、`ui.icons.arrowDown`キーの下の`app.config.ts`でグローバルにカスタマイズできます。
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
このアイコンは、`ui.icons.arrowDown`キーの下の`vite.config.ts`でグローバルにカスタマイズできます。
:::
::

###  Should自動スクロール

`should-auto-scroll`プロパティを使用して、メッセージのストリーミング中に連続自動スクロールを有効/無効にします。デフォルトは`false`です。

```vue
<template>
  <UChatMessages :messages="messages" should-auto-scroll />
</template>
```

### は下にスクロールしてください

`should-scroll-to-bottom`プロパティを使用して、コンポーネントがマウントされたときに下部の自動スクロールを有効/無効にします。デフォルトは`true`です。

```vue
<template>
  <UChatMessages :messages="messages" :should-scroll-to-bottom="false" />
</template>
```

## 例

::tip{to="/docs/components/chat"}
インストール手順、サーバー設定、使用例については、** Chat **概要ページをご覧ください。
::

### インジケータスロット付き

`#indicator`スロットを使用して、[`ChatShimmer`](/docs/components/chat-shimmer)エフェクトを使用してロードインジケータをカスタマイズします。

::component-example
---
名前'チャットメッセージ—indicator—slot—example'
クラス'overflow—y—auto'
崩壊真
---
::

##  API

###  Props

component—props

### スロット

コンポーネントスロット

::tip
[`ChatMessage`](/docs/components/chat-message#slots)コンポーネントのすべてのスロットを使用できます。これらは自動的に転送されるので、`messages` propを使用するときに個々のメッセージをカスタマイズできます。

```vue{7-15}
<script setup lang="ts">
import { isTextUIPart } from 'ai'
</script>

<template>
  <UChatMessages :messages="messages" :status="status">
    <template #content="{ message }">
      <template
        v-for="(part, index) in message.parts"
        :key="`${message.id}-${part.type}-${index}`"
      >
        <p v-if="isTextUIPart(part)" class="whitespace-pre-wrap">
          {{ part.text }}
        </p>
      </template>
    </template>
  </UChatMessages>
</template>
```
::

### エクスポーズ

テンプレート参照を介してコンポーネントにアクセスする場合、以下を使用できます：

| 名前|タイプ|
| ---- | ---- |
| `registerMessageRef(id: string, element: ComponentPublicInstance \| null)`{lang="ts-type"}| `void`{lang="ts-type"}|

## テーマ

コンポーネントテーマ

##  Changelog

component—changelog
