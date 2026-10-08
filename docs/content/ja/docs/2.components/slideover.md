---
description: 画面の任意の側面からスライドするダイアログ。
category: overlay
keywords:
  - sheet
  - side panel
  - off-canvas
links:
  - label: ダイアログ
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/dialog
  - label: サイトマップ
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Slideover.vue
---

## 使用法

[ Button ](/docs/components/button)またはスライドオーバーのデフォルトスロットにあるその他のコンポーネントを使用します。

次に、`#content`スロットを使用して、スライドオーバーが開いたときに表示されるコンテンツを追加します。

::component-code
---
きれい真
スロット
  デフォルト|

    <UButton label="Open" color="neutral" variant="subtle" />

  内容：|

    <Placeholder class="h-full m-4" />
---

u—button {label="Open" color="neutral" variant="subtle"}

#コンテンツ
placeholder {class="h-full m-4"}
::

また、`#header`{lang="ts-type"}、`#body`{lang="ts-type"}および`#footer`{lang="ts-type"}スロットを使用して、スライドオーバーのコンテンツをカスタマイズすることもできます。

### タイトル

`title` propを使用して、Slideoverのヘッダーのタイトルを設定します。

::component-code
---
きれい真
小道具
  タイトル：'Slideover with title'
スロット
  デフォルト|

    <UButton label="Open" color="neutral" variant="subtle" />

  ボディ|

    <Placeholder class="h-full" />
---

u—button {label="Open" color="neutral" variant="subtle"}

#body
placeholder {class="h-full"}
::

### 説明

`description`プロパティを使用して、Slideoverのヘッダーの説明を設定します。

::component-code
---
きれい真
無視
  -  title
小道具
  タイトル：「説明付きスライドオーバー」
  「Lorem ipsum dolor sit amet consectetur adipiscing elit」
スロット
  デフォルト|

    <UButton label="Open" color="neutral" variant="subtle" />

  ボディ|

    <Placeholder class="h-full" />
---

u—button {label="Open" color="neutral" variant="subtle"}

#body
placeholder {class="h-full"}
::

### 閉じる

`close`プロパティを使用して、スライドオーバーのヘッダーに表示される閉じるボタン`false`値をカスタマイズまたは非表示にします。

[ Button ](/docs/components/button)コンポーネントから任意のプロパティを渡してカスタマイズできます。

::component-code
---
きれい真
無視
  -  title
  -  close.color
  -  close.variant
小道具
  タイトル'閉じるボタンでスライドオーバー'
  閉じる
    色プライマリ
    variantアウトライン
    クラス：'rounded—full'
スロット
  デフォルト|

    <UButton label="Open" color="neutral" variant="subtle" />

  ボディ|

    <Placeholder class="h-full" />
---

u—button {label="Open" color="neutral" variant="subtle"}

#body
placeholder {class="h-full"}
::

::note
`#content`スロットがヘッダの一部であるため、閉じるボタンは表示されません。
::

### 閉じるアイコン

`close-icon`プロパティを使用して、閉じるボタン[ Icon ](/docs/components/icon)をカスタマイズします。デフォルトは`i-lucide-x`です。

::component-code
---
きれい真
無視
  -  title
小道具
  タイトル'閉じるボタンでスライドオーバー'
  closeIcon 'i—lucide—arrow—right'
スロット
  デフォルト|

    <UButton label="Open" color="neutral" variant="subtle" />

  ボディ|

    <Placeholder class="h-full" />
---

u—button {label="Open" color="neutral" variant="subtle"}

#body
placeholder {class="h-full"}
::

::framework-only
#nuxt
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
このアイコンは、`ui.icons.close`キーの下の`app.config.ts`でグローバルにカスタマイズできます。
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
このアイコンは、`ui.icons.close`キーの`vite.config.ts`でグローバルにカスタマイズできます。
:::
::

### サイド

`side`プロパティを使用して、スライドオーバーがスライドする画面の側面を設定します。デフォルトは`right`です。

::component-code
---
きれい真
無視
  -  title
小道具
  サイド'左'
  タイトルSlideover with side
スロット
  デフォルト|

    <UButton label="Open" color="neutral" variant="subtle" />

  ボディ|

    <Placeholder class="h-full min-h-48" />
---

u—button {label="Open" color="neutral" variant="subtle"}

#body
placeholder {class="h-full min-h-48"}
::

### インセットbadge {label="4.3+" class="align-text-top"}

`inset`プロパティを使用して、スライドオーバーをエッジから挿入します。

::component-code
---
きれい真
無視
  -  title
小道具
  サイド'右'
  インセットtrue
  タイトルSlideover with inset
スロット
  デフォルト|

    <UButton label="Open" color="neutral" variant="subtle" />

  ボディ|

    <Placeholder class="min-w-96 min-h-96 size-full" />
---

u—button {label="Open" color="neutral" variant="subtle"}

#body
placeholder {class="min-w-96 min-h-96 size-full"}
::

### トランジション

`transition`プロパティを使用して、スライドオーバーがアニメーション化されるかどうかを制御します。デフォルトは`true`です。

::component-code
---
きれい真
無視
  -  title
小道具
  遷移false
  タイトル：「トランジションなしのスライドオーバー」
スロット
  デフォルト|

    <UButton label="Open" color="neutral" variant="subtle" />

  ボディ|

    <Placeholder class="h-full" />
---

u—button {label="Open" color="neutral" variant="subtle"}

#body
placeholder {class="h-full"}
::

### オーバーレイ

スライドオーバーにオーバーレイがあるかどうかを制御するには、`overlay`プロパティを使用します。デフォルトは`true`です。

::component-code
---
きれい真
無視
  -  title
小道具
  オーバーレイfalse
  タイトル'オーバーレイなしのスライドオーバー'
スロット
  デフォルト|

    <UButton label="Open" color="neutral" variant="subtle" />

  ボディ|

    <Placeholder class="h-full" />
---

uボタン{label="Open" color="neutral" variant="subtle"}

#body
placeholder {class="h-full"}
::

###  Modal

`modal`プロパティを使用して、Slideoverが外部コンテンツとのインタラクションをブロックするかどうかを制御します。デフォルトは`true`です。

::note
`modal`を`false`に設定すると、オーバーレイは自動的に無効になり、外部コンテンツはインタラクティブになります。
::

::component-code
---
きれい真
無視
  -  title
小道具
  モーダルfalse
  title「スライドオーバーインタラクティブ」
スロット
  デフォルト|

    <UButton label="Open" color="neutral" variant="subtle" />

  ボディ|

    <Placeholder class="h-full" />
---

uボタン{label="Open" color="neutral" variant="subtle"}

#body
placeholder {class="h-full"}
::

###  Dismissible

`dismissible`プロパティを使用して、スライドオーバーの外側をクリックするかエスケープを押したときにスライドオーバーを無効にするかどうかを制御します。デフォルトは`true`です。

::note
`close:prevent`イベントは、ユーザーがそれを閉じようとすると発行されます。
::

::tip
`modal: false`と`dismissible: false`を組み合わせると、スライドオーバーの背景を閉じずにインタラクティブにすることができます。
::

::component-code
---
きれい真
無視
  -  title
小道具
  dismissible false
  モーダルtrue
  タイトル「スライドオーバー非dismissible」
スロット
  デフォルト|

    <UButton label="Open" color="neutral" variant="subtle" />

  ボディ|

    <Placeholder class="h-full" />
---

u—button {label="Open" color="neutral" variant="subtle"}

#body
placeholder {class="h-full"}
::

### アンマウントbadge {label="4.10+" class="align-text-top"}

`unmount-on-hide`プロパティを使用して、Slideoverのコンテンツがクローズされたときにアンマウントされないようにします。デフォルトは`true`です。

::component-code
---
きれい真
無視
  -  title
小道具
  unmountOnHide false
  タイトル'スライドオーバー'
スロット
  デフォルト|

    <UButton label="Open" color="neutral" variant="subtle" />

  ボディ|

    <Placeholder class="h-full" />
---

uボタン{label="Open" color="neutral" variant="subtle"}

#body
placeholder {class="h-full"}
::

::note
DOMを検査して、Slideoverが閉じている間でもスライドオーバーのコンテンツがレンダリングされていることを確認できます。
::

::tip
`portal` propが`false`に設定されている場合、コンテンツもサーバー上でレンダリングされます。これは、SSR中に開いているスライドオーバーをページ読み込み時にフラッシュなしでレンダリングしたり、SEOのためにコンテンツを公開したりするのに便利です。
::

## 例

###  Controlオープンステート

`default-open` propまたは`v-model:open`ディレクティブを使用してオープン状態を制御できます。

::component-example
---
名前'slideover—open—example'
---
::

::note
この例では、[`defineShortcuts`](/docs/composables/define-shortcuts)を活用して、kbd {value="O"}を押してスライドオーバーを切り替えることができます。
::

::tip
これにより、トリガーをスライドオーバーの外側に移動したり、完全に削除したりできます。
::

###  Programmatic使用法

[`useOverlay`](/docs/composables/use-overlay)を使って、プログラムでスライドオーバーを開くことができます。

::warning
[`App`](/docs/components/app))[`OverlayProvider`](https://github.com/nuxt/ui/blob/v4/src/runtime/components/OverlayProvider.vue)コンポーネントを使用してアプリをラップしてください。
::

まず、プログラムで開くスライドオーバーコンポーネントを作成します。

::component-example
---
きれい真
name 'slideover—example'
プレビュー false
---
::

::note
ここでスライドオーバーがクローズまたは却下されたときに`close`イベントを発行しています。`close`イベントを通じて任意のデータを発行することができ、そのデータは`open()`の解決済み値になります。Promiseを解決するにはイベントが発行されなければなりません。
::

次に、アプリで使用します。

::component-example
---
名前'slideover—Programmatic—example'
---
::

::tip
slideoverコンポーネント内でslideoverを閉じるには、`emit('close')`を出力します。
::

### ネストされたスライドオーバー

お互いにスライドオーバーをネストできます。

::component-example
---
name 'slideover—nested—example'
---
::

### フッタースロット付き

`#footer`スロットを使用して、スライドオーバーの本体の後にコンテンツを追加します。

::component-example
---
名前'slideover—footer—slot—example'
---
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
