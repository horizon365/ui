---
description: ユーザーに情報やフィードバックを提供するための簡潔なメッセージ。
category: overlay
keywords:
  - notification
  - snackbar
  - flash message
links:
  - label: 乾杯
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/toast
  - label: サイトマップ
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Toast.vue
---

## 使用法

[ useToast ](/docs/composables/use-toast)を使って、アプリケーションでトーストを表示します。

::component-example
---
崩壊真
きれい真
名前'toast—example'
---
::

::warning
[`App`](/docs/components/app)コンポーネントでアプリをラップしてください。[`Toaster`](https://github.com/nuxt/ui/blob/v4/src/runtime/components/Toaster.vue)[`ToastProvider`](https://reka-ui.com/docs/components/toast#provider)))Reka UIのコンポーネントです。
::

::tip{to="/docs/components/app#props"}
Toasterをグローバルに設定する方法については、`App` component @@@@ propを確認してください。
::

### タイトル

`title`フィールドを`toast.add`メソッドに渡してタイトルを表示します。

::component-example
---
オプション
  -  name 'title'
    label 'title'
    デフォルト'ああ！何かがうまくいかなかった。'
名前'toast—title—example'
---
::

### 説明

`description`フィールドを`toast.add`メソッドに渡して説明を表示します。

::component-example
---
オプション
  -  name 'title'
    label 'title'
    デフォルト'ああ！何かがうまくいかなかった。'
  -  name 'description'
    ラベル'description'
    デフォルト：'リクエストに問題がありました。
名前'toast—description—example'
---
::

### アイコン

`icon`フィールドを`toast.add`メソッドに渡すと、[ Icon ](/docs/components/icon)を表示します。

::component-example
---
オプション
  -  name 'icon'
    ラベル'アイコン'
    デフォルト'i—lucide—wifi'
名前'toast—icon—example'
---
::

### アバター

`avatar`フィールドを`toast.add`メソッドに渡すと、[ Avatar ](/docs/components/avatar)を表示します。

::component-example
---
オプション
  -  name 'avatar.src'
    別名'アバター'
    ラベル'avatar.src'
    デフォルト
      https//github.com/benjamincanac.png
名前'toast—avatar—example'
---
::

### カラー

`color`フィールドを`toast.add`メソッドに渡して、トーストの色を変更します。

::component-example
---
オプション
  -  name 'color'
    ラベル'色'
    デフォルト中立
    アイテム
      - プライマリ
      - セカンダリ
      - 成功
      -  info
      -  warning
      - エラー
      - ニュートラル
名前'toast—color—example'
---
::

### 閉じる

`close`フィールドを渡すと、閉じる[ Button ](/docs/components/button)`false`値をカスタマイズまたは非表示になります。

::component-example
---
名前'toast—close—example'
---
::

### 閉じるアイコン

`closeIcon`フィールドを渡して、閉じるボタン[ Icon ](/docs/components/icon)をカスタマイズします。デフォルトは`i-lucide-x`です。

::component-example
---
オプション
  -  name 'closeIcon'
    label 'closeIcon'
    デフォルト'i—lucide—arrow—right'
名前'toast—close—icon—example'
---
::

::framework-only
#nuxt
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
このアイコンは、`ui.icons.close`キーの`app.config.ts`でグローバルにカスタマイズできます。
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
このアイコンは、`ui.icons.close`キーの`vite.config.ts`でグローバルにカスタマイズできます。
:::
::

### アクション

`actions`フィールドを渡して、Toastに[ Button ](/docs/components/button)アクションを追加します。

::component-example
---
オプション
  -  name '説明'
    ラベル'description'
    デフォルト：'リクエストに問題がありました。
名前'toast—actions'
---
::

### 期間

`duration`フィールドを`toast.add`メソッドに渡して、Toastの表示時間を変更します（ミリ秒単位）。デフォルトは`5000`です。

::tip
`duration`フィールドを`0`に設定して、手動で閉じるまでトーストを開いたままにします。
::

::component-example
---
オプション
  -  name 'duration'
    ラベル'duration'
    デフォルト0
    アイテム
      -  0
      -  1000
      -  3000
      -  5000
名前'toast—duration—example'
---
::

### 進捗状況

`progress`フィールドを渡すと、[ Progress ](/docs/components/progress) bar `false`値をカスタマイズまたは非表示になります。

::tip
プログレスバーはデフォルトでToastカラーを継承しますが、`progress.color`フィールドを使用してオーバーライドできます。
::

::component-example
---
名前'toast—progress'
---
::

### オリエンテーション

`orientation`フィールドを`toast.add`メソッドに渡して、トーストの向きを変更します。

::component-example
---
オプション
  -  name 'オリエンテーション'
    ラベル'オリエンテーション'
    デフォルト'水平'
    アイテム
      - 水平
      - 垂直
名前'toast—oriation—example'
---
::

## 例

::note{to="/docs/components/app"}
Nuxt UIは** App **コンポーネントを提供し、アプリケーションをラップしてグローバルな設定を提供します。
::

### グローバルポジションを変更

トーストの位置を変更するには、[ App ](/docs/components/app#props)コンポーネントの`toaster.position` propを変更します。

```vue [app.vue]
<script setup lang="ts">
const toaster = { position: 'bottom-right' }
</script>

<template>
  <UApp :toaster="toaster">
    <NuxtPage />
  </UApp>
</template>
```

::component-example
---
きれい真
名前'toast—example'
---

#オプション
toaster—position—example
::


### グローバル期間の変更

[ App ](/docs/components/app#props)コンポーネントの`toaster.duration` propを変更して、トーストの持続時間を変更します。

```vue [app.vue]
<script setup lang="ts">
const toaster = { duration: 5000 }
</script>

<template>
  <UApp :toaster="toaster">
    <NuxtPage />
  </UApp>
</template>
```

::component-example
---
きれい真
名前'toast—example'
---

#オプション
toaster—duration—example
::


### グローバル最大値を変更しますbadge {label="4.1+" class="align-text-top"}

[ App ](/docs/components/app#props)コンポーネントの`toaster.max` propを変更して、一度に表示されるトーストの最大数を変更します。

```vue [app.vue]
<script setup lang="ts">
const toaster = { max: 3 }
</script>

<template>
  <UApp :toaster="toaster">
    <NuxtPage />
  </UApp>
</template>
```

::component-example
---
きれい真
名前'toast—example'
---

#オプション
toaster—maxの例
::


### スタックトースト

スタックトーストを表示するには、[ App ](/docs/components/app#props)コンポーネントの`toaster.expand` propを`false`に設定します（[ Sonner ](https://sonner.emilkowal.ski/)に触発されて）。

```vue [app.vue]
<script setup lang="ts">
const toaster = { expand: true }
</script>

<template>
  <UApp :toaster="toaster">
    <NuxtPage />
  </UApp>
</template>
```

::tip
トーストの上にカーソルを合わせると展開できます。これによりトーストのタイマーが一時停止します。
::

::component-example
---
きれい真
名前'toast—example'
---

#オプション
toaster—expand—example
::


### 重複トーストbadge {label="4.5+" class="align-text-top"}

すでに存在する`id`を使って`toast.add`を呼び出すと、既存のトーストが重複する代わりにパルス化されます。

::component-example
---
崩壊真
名前'toast—duplicate'
---
::

### コールバック付き

`onUpdateOpen`フィールドを渡して、トーストがクローズされたときにコールバックを実行します。

::component-example
---
崩壊真
名前'toast—callback'
---
::

###  HTMLコンテンツ付き

`title`または`description`フィールドの[`h()` render関数](https://vuejs.org/api/render-function.html#h)を使用して、HTML要素またはVueコンポーネントをカスタムスタイルでレンダリングします。

::component-example
---
崩壊真
名前'toast—html—example'
---
::

##  API

###  Props

component—props

### スロット

コンポーネントスロット

### エミッツ

component—emits

###  Expose

テンプレート参照を介してコンポーネントにアクセスする場合、以下を使用できます：

| 名前|タイプ|
| ---- | ---- |
| `height`{lang="ts-type"}| `Ref<number>`{lang="ts-type"}|

## テーマ

コンポーネントテーマ

##  Changelog

component—changelog
