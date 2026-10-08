---
description: メッセージを表示したり、ユーザ入力を要求したりするために使用できるダイアログウィンドウ。
category: overlay
keywords:
  - dialog
  - popup
  - confirm
  - alert dialog
links:
  - label: ダイアログ
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/dialog
  - label: サイトマップ
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Modal.vue
---

## 使用法

[ Button ](/docs/components/button)またはModalのデフォルトスロットにある他のコンポーネントを使用します。

次に、`#content`スロットを使用して、Modalが開いているときに表示されるコンテンツを追加します。

::component-code
---
きれい真
スロット
  デフォルト|

    <UButton label="Open" color="neutral" variant="subtle" />

  内容：|

    <Placeholder class="h-48 m-4" />
---

u—button {label="Open" color="neutral" variant="subtle"}

#コンテンツ
placeholder {class="h-48 m-4"}
::

また、`#header`{lang="ts-type"}、`#body`{lang="ts-type"}、`#footer`{lang="ts-type"}スロットを使用して、Modalのコンテンツをカスタマイズすることもできます。

### タイトル

`title`プロパティを使用して、Modalのヘッダーのタイトルを設定します。

::component-code
---
きれい真
小道具
  タイトル：「タイトル付きモーダル」
スロット
  デフォルト|

    <UButton label="Open" color="neutral" variant="subtle" />

  ボディ|

    <Placeholder class="h-48" />
---

u—button {label="Open" color="neutral" variant="subtle"}

#body
placeholder {class="h-48"}
::

### 説明

`description`プロパティを使用して、Modalのヘッダーの説明を設定します。

::component-code
---
きれい真
無視
  -  title
小道具
  タイトル：「説明のあるモーダル」
  「Lorem ipsum dolor sit amet consectetur adipiscing elit」
スロット
  デフォルト|

    <UButton label="Open" color="neutral" variant="subtle" />

  ボディ|

    <Placeholder class="h-48" />
---

u—button {label="Open" color="neutral" variant="subtle"}

#body
placeholder {class="h-48"}
::

### 閉じる

`close`プロパティを使用して、Modalのヘッダーに表示される閉じるボタン`false`値をカスタマイズまたは非表示にします。

[ Button ](/docs/components/button)コンポーネントから任意のプロパティを渡してカスタマイズできます。

::component-code
---
きれい真
無視
  -  title
  -  close.color
  -  close.variant
小道具
  title '閉じるボタン付きモーダル'
  閉じる
    色プライマリ
    variantアウトライン
    クラス：'rounded—full'
スロット
  デフォルト|

    <UButton label="Open" color="neutral" variant="subtle" />

  ボディ|

    <Placeholder class="h-48" />
---

u—button {label="Open" color="neutral" variant="subtle"}

#body
placeholder {class="h-48"}
::

::tip
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
  title '閉じるボタン付きモーダル'
  closeIcon 'i—lucide—arrow—right'
スロット
  デフォルト|

    <UButton label="Open" color="neutral" variant="subtle" />

  ボディ|

    <Placeholder class="h-48" />
---

u—button {label="Open" color="neutral" variant="subtle"}

#body
placeholder {class="h-48"}
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

### トランジション

`transition`プロパティを使用して、モーダルがアニメーション化されているかどうかを制御します。デフォルトは`true`です。

::component-code
---
きれい真
無視
  -  title
小道具
  遷移false
  タイトル：「移行のないモーダル」
スロット
  デフォルト|

    <UButton label="Open" color="neutral" variant="subtle" />

  ボディ|

    <Placeholder class="h-48" />
---

u—button {label="Open" color="neutral" variant="subtle"}

#body
placeholder {class="h-48"}
::

### オーバーレイ

`overlay`プロパティを使用して、モーダルにオーバーレイがあるかどうかを制御します。デフォルトは`true`です。

::component-code
---
きれい真
無視
  -  title
小道具
  オーバーレイfalse
  タイトル：「オーバーレイのないモーダル」
スロット
  デフォルト|

    <UButton label="Open" color="neutral" variant="subtle" />

  ボディ|

    <Placeholder class="h-48" />
---

u—button {label="Open" color="neutral" variant="subtle"}

#body
placeholder {class="h-48"}
::

###  Modal

`modal`プロパティを使用して、Modalが外部コンテンツとのインタラクションをブロックするかどうかを制御します。デフォルトは`true`です。

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
  title「モーダル·インタラクティブ」
スロット
  デフォルト|

    <UButton label="Open" color="neutral" variant="subtle" />

  ボディ|

    <Placeholder class="h-48" />
---

u—button {label="Open" color="neutral" variant="subtle"}

#body
placeholder {class="h-48"}
::

###  Dismissible

`dismissible`プロパティを使用して、Modalの外側をクリックしたりescapeを押したりしたときにDismissibleかどうかを制御します。デフォルトは`true`です。

::note
`close:prevent`イベントは、ユーザーがそれを閉じようとすると発行されます。
::

::tip
`modal: false`と`dismissible: false`を組み合わせると、Modalの背景を閉じずにインタラクティブにすることができます。
::

::component-code
---
きれい真
無視
  -  title
小道具
  dismissible false
  モーダルtrue
  タイトル「モーダル·ノン·ディスミブル」
スロット
  デフォルト|

    <UButton label="Open" color="neutral" variant="subtle" />

  ボディ|

    <Placeholder class="h-48" />
---

uボタン{label="Open" color="neutral" variant="subtle"}

#body
placeholder {class="h-48"}
::

###  Scrollable badge {label="4.2+" class="align-text-top"}

`scrollable`プロパティを使用して、モーダルのコンテンツをオーバーレイ内でスクロールできるようにします。

::warning
スクロールにオーバーレイが必要なため、`modal: false`は互換性がなく、`overlay: false`は背景を削除するだけです。
::

::component-code
---
きれい真
無視
  -  title
小道具
  scrollable true
  オーバーレイtrue
  title「モーダルスクロール可能」
スロット
  デフォルト|

    <UButton label="Open" color="neutral" variant="subtle" />

  ボディ|

    <Placeholder class="h-full" />
---

uボタン{label="Open" color="neutral" variant="subtle"}

#body
placeholder {class="h-screen"}
::

::caution
[既知の問題](https://reka-ui.com/docs/components/dialog#scrollable-overlay)があります。
::

### フルスクリーン

`fullscreen`プロパティを使用して、Modalをフルスクリーンにします。

::component-code
---
きれい真
無視
  -  title
  - フルスクリーン
小道具
  フルスクリーン真
  タイトル「モーダルフルスクリーン」
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

### アンマウントbadge {label="4.10+" class="align-text-top"}

`unmount-on-hide`プロパティを使用して、Modalのコンテンツがクローズ時にアンマウントされないようにします。デフォルトは`true`です。

::component-code
---
きれい真
無視
  -  title
小道具
  unmountOnHide false
  title 'モーダル'
スロット
  デフォルト|

    <UButton label="Open" color="neutral" variant="subtle" />

  ボディ|

    <Placeholder class="h-48" />
---

uボタン{label="Open" color="neutral" variant="subtle"}

#body
placeholder {class="h-48"}
::

::note
DOMを調べると、Modalのコンテンツが閉じている間でもレンダリングされていることがわかります。
::

::tip
`portal` propが`false`に設定されている場合、コンテンツはサーバー上でもレンダリングされます。これはSSR中にページ読み込み時にフラッシュなしで開いているModalをレンダリングしたり、SEOのためにコンテンツを公開したりするのに便利です。
::

## 例

###  Controlオープンステート

`default-open` propまたは`v-model:open`ディレクティブを使用してオープン状態を制御できます。

::component-example
---
名前'modal—open—example'
---
::

::note
この例では、[`defineShortcuts`](/docs/composables/define-shortcuts)を活用して、kbd {value="O"}を押してモーダルを切り替えることができます。
::

::tip
これにより、トリガーをモーダルの外側に移動したり、完全に削除したりできます。
::

###  Programmatic使用法

[`useOverlay`](/docs/composables/use-overlay)を使って、プログラムでModalを開くことができます。

::warning
[`App`](/docs/components/app)コンポーネントでアプリをラップしてください。このコンポーネントは[`OverlayProvider`](https://github.com/nuxt/ui/blob/v4/src/runtime/components/OverlayProvider.vue)コンポーネントを使用しています。
::

まず、プログラムで開くモーダルコンポーネントを作成します。

::component-example
---
きれい真
name 'modal—example'
プレビュー false
---
::

::note
ここでは、モーダルがクローズまたは却下されたときに`close`イベントを発行しています。`close`イベントを通じて任意のデータを発行でき、そのデータは`open()`の解決済み値になります。Promiseが解決されるにはイベントが発行されなければなりません。
::

次に、アプリで使用します。

::component-example
---
名前'modal—programic—example'
---
::

::tip
モーダルコンポーネント内でモーダルを閉じるには、`emit('close')`を出力します。
::

### ネストされたモーダル

お互いにモーダルをネストできます。

::component-example
---
name 'modal—nested—example'
---
::

### フッタースロット付き

`#footer`スロットを使用して、Modal本体の後にコンテンツを追加します。

::component-example
---
名前'modal—footer—slot—example'
---
::

### コマンドパレット付き

[ CommandPalette ](/docs/components/command-palette)コンポーネントをModalのコンテンツ内で使用できます。

::component-example
---
崩壊真
名前'modal—command—palette—example'
---
::

::note
この例では、`useLazyFetch`と`immediate: false`を使用して、Modalが開いたときにのみデータを取得します。
::

##  API

###  Props

component—props

### スロット

コンポーネントスロット

### エミッツ

component—emits

## テーマ

コンポーネントテーマ

##  Changelog

component—changelog
