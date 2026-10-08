---
description: 画面の内外をスムーズにスライドさせる引き出し。
category: overlay
keywords:
  - bottom sheet
  - action sheet
  - mobile sheet
links:
  - label: ドロワー
    icon: i-custom-reka-ui
    to: https://github.com/unovue/vaul-vue
  - label: サイトマップ
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Drawer.vue
---

## 使用法

[ Button ](/docs/components/button)またはDrawerのデフォルトスロットにある他のコンポーネントを使用します。

次に、`#content`スロットを使用して、Drawerが開いているときに表示されるコンテンツを追加します。

::component-code
---
きれい真
スロット
  デフォルト|

    <UButton label="Open" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up" />

  内容：|

    <Placeholder class="h-48 m-4" />
---

u—button {label="Open" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up"}

#コンテンツ
placeholder {class="h-48 m-4"}
::

また、`#header`{lang="ts-type"}、`#body`{lang="ts-type"}、`#footer`{lang="ts-type"}スロットを使用してDrawerのコンテンツをカスタマイズすることもできます。

### タイトル

`title` propを使用して、Drawerのヘッダーのタイトルを設定します。

::component-code
---
きれい真
小道具
  タイトル：「タイトル付き引き出し」
スロット
  デフォルト|

    <UButton label="Open" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up" />

  ボディ|

    <Placeholder class="h-48" />
---

u—button {label="Open" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up"}

#body
placeholder {class="h-48"}
::

### 説明

`description`プロパティを使用して、Drawerのヘッダーの説明を設定します。

::component-code
---
きれい真
無視
  -  title
小道具
  タイトル：「説明付き引き出し」
  「Lorem ipsum dolor sit amet consectetur adipiscing elit」
スロット
  デフォルト|

    <UButton label="Open" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up" />

  ボディ|

    <Placeholder class="h-48" />
---

u—button {label="Open" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up"}

#body
placeholder {class="h-48"}
::

### 閉じるbadge {label="4.10+" class="align-text-top"}

`close`プロパティを使用して、Drawerに閉じるボタンを表示します。デフォルトは`false`です。

[ Button ](/docs/components/button)コンポーネントから任意のプロパティを渡してカスタマイズできます。

::component-code
---
きれい真
無視
  -  title
  -  close.color
  -  close.variant
小道具
  title「閉じるボタン付き引き出し」
  閉じる
    色プライマリ
    variantアウトライン
    クラス：'rounded—full'
スロット
  デフォルト|

    <UButton label="Open" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up" />

  ボディ|

    <Placeholder class="h-48" />
---

u—button {label="Open" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up"}

#body
placeholder {class="h-48"}
::

### 閉じるアイコンbadge {label="4.10+" class="align-text-top"}

`close-icon`プロパティを使用して、閉じるボタン[ Icon ](/docs/components/icon)をカスタマイズします。デフォルトは`i-lucide-x`です。

::component-code
---
きれい真
無視
  -  title
小道具
  title「閉じるボタン付き引き出し」
  閉じるtrue
  closeIcon 'i—lucide—arrow—right'
スロット
  デフォルト|

    <UButton label="Open" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up" />

  ボディ|

    <Placeholder class="h-48" />
---

u—button {label="Open" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up"}

#body
placeholder {class="h-48"}
::

### ディレクション

Drawerの方向を制御するには`direction`プロパティを使用します。デフォルトは`bottom`です。

::component-code
---
きれい真
小道具
  方向'右'
スロット
  デフォルト|

    <UButton label="Open" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up" />

  内容：|

    <Placeholder class="min-w-96 min-h-96 size-full m-4" />
---

u—button {label="Open" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up"}

#コンテンツ
placeholder {class="min-w-96 min-h-96 size-full m-4"}
::

### インセット

`inset`プロパティを使用して、Drawerをエッジから挿入します。

::component-code
---
きれい真
小道具
  方向'右'
  インセットtrue
スロット
  デフォルト|

    <UButton label="Open" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up" />

  内容：|

    <Placeholder class="min-w-96 min-h-96 size-full m-4" />
---

u—button {label="Open" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up"}

#コンテンツ
placeholder {class="min-w-96 min-h-96 size-full m-4"}
::

### ハンドル

Drawerにハンドルがあるかどうかを制御するには、`handle`プロパティを使用します。デフォルトは`true`です。

::component-code
---
きれい真
小道具
  ハンドルfalse
スロット
  デフォルト|

    <UButton label="Open" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up" />

  内容：|

    <Placeholder class="h-48 m-4" />
---

uボタン{label="Open" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up"}

#コンテンツ
placeholder {class="h-48 m-4"}
::

### ハンドルのみ

`handle-only`プロパティを使用して、Drawerをハンドルでのみドラッグできるようにします。

::component-code
---
きれい真
小道具
  handleOnly true
スロット
  デフォルト|

    <UButton label="Open" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up" />

  内容：|

    <Placeholder class="h-48 m-4" />
---

u—button {label="Open" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up"}

#コンテンツ
placeholder {class="h-48 m-4"}
::

### オーバーレイ

Drawerにオーバーレイがあるかどうかを制御するには、`overlay`プロパティを使用します。デフォルトは`true`です。

::component-code
---
きれい真
小道具
  オーバーレイfalse
スロット
  デフォルト|

    <UButton label="Open" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up" />

  内容：|

    <Placeholder class="h-48 m-4" />
---

u—button {label="Open" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up"}

#コンテンツ
placeholder {class="h-48 m-4"}
::

###  Modal

`modal`プロパティを使用して、Drawerが外部コンテンツとのインタラクションをブロックするかどうかを制御します。デフォルトは`true`です。

::note
`modal`を`false`に設定すると、オーバーレイは自動的に無効になり、外部コンテンツはインタラクティブになります。
::

::component-code
---
きれい真
小道具
  モーダルfalse
スロット
  デフォルト|

    <UButton label="Open" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up" />

  内容：|

    <Placeholder class="h-48 m-4" />
---

uボタン{label="Open" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up"}

#コンテンツ
placeholder {class="h-48 m-4"}
::

###  Dismissible

`dismissible`プロパティを使用して、Drawerの外側をクリックしたりescapeを押したりしたときにDrawerがdismissibleかどうかを制御します。デフォルトは`true`です。

::note
`close:prevent`イベントは、ユーザーがそれを閉じようとすると発行されます。
::

::tip
`modal: false`と`dismissible: false`を組み合わせると、Drawerの背景を閉じずにインタラクティブにすることができます。
::

::component-example
---
きれい真
名前'drawer—dismission—example'
---
::

### スケール背景

`should-scale-background`プロパティを使用して、Drawerが開いているときに背景を拡大し、視覚的な奥行き効果を作成します。`set-background-color-on-scale`プロパティを`false`に設定して、背景色の変更を防ぐことができます。

::component-code
---
きれい真
小道具
  shouldScaleBackground true
  setBackgroundColorOnScale true
スロット
  デフォルト|

    <UButton label="Open" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up" />

  内容：|

    <Placeholder class="h-48 m-4" />
---

u—button {label="Open" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up"}

#コンテンツ
placeholder {class="h-screen m-4"}
::

::warning
これを動作させるには、`data-vaul-drawer-wrapper`ディレクティブをアプリの親要素に追加してください。

```vue [app.vue]
<template>
  <UApp>
    <div class="bg-default" data-vaul-drawer-wrapper>
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </div>
  </UApp>
</template>
```

```ts [nuxt.config.ts]
export default defineNuxtConfig({
  app: {
    rootAttrs: {
      'data-vaul-drawer-wrapper': '',
      'class': 'bg-default'
    }
  }
})
```

::

## 例

###  Controlオープンステート

`default-open` propまたは`v-model:open`ディレクティブを使用してオープン状態を制御できます。

::component-example
---
きれい真
名前'drawer—open—example'
---
::

::note
この例では、[`defineShortcuts`](/docs/composables/define-shortcuts)を活用して、kbd {value="O"}を押してDrawerを切り替えることができます。
::

::tip
これにより、トリガーを引き出しの外側に移動したり、完全に削除したりできます。
::

###  Responsiveドロワー

たとえば、[ Modal ](/docs/components/modal)コンポーネントをデスクトップで、Drawerをモバイルでレンダリングできます。

::component-example
---
きれい真
名前'drawer—responsive'
---
::

### ネストされた引き出し

`nested` propを使用して、ドロワー同士をネストできます。

::component-example
---
きれい真
名前'drawer—nested—example'
---
::

### フッタースロット付き

`#footer`スロットを使用して、Drawerの本体の後にコンテンツを追加します。

::component-example
---
きれい真
崩壊真
名前'drawer—footer—slot—example'
---
::

### コマンドパレット付き

Drawerのコンテンツ内で[ CommandPalette ](/docs/components/command-palette)コンポーネントを使用できます。

::component-example
---
崩壊真
名前'drawer—command—palette—example'
---
::

::note
この例では、`useLazyFetch`と`immediate: false`を使用して、Drawerが開いたときにのみデータを取得します。
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
