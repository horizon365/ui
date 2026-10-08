---
description: トリガー要素の周りに浮かぶ非モーダルダイアログ。
category: overlay
keywords:
  - hover card
  - flyout
links:
  - label: ホバーカード
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/hover-card
  - label: ポップオーバー
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/popover
  - label: サイトマップ
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Popover.vue
---

## 使用法

[ Button ](/docs/components/button)または、Popoverのデフォルトスロットにあるその他のコンポーネントを使用します。

次に、`#content`スロットを使用して、ポップオーバーを開いたときに表示されるコンテンツを追加します。

::component-code
---
きれい真
スロット
  デフォルト|

    <UButton label="Open" color="neutral" variant="subtle" />

  内容：|

    <Placeholder class="size-48 m-4 inline-flex" />
---

u—button {label="Open" color="neutral" variant="subtle"}

#コンテンツ
placeholder {class="size-48 m-4 inline-flex"}
::

### モード

`mode`プロパティを使用して、ポップオーバーのモードを変更します。デフォルトは`click`です。

::tip
`hover`モードでは、タッチデバイスのトリガーをタップしてポップオーバーを切り替えるように`enable-touch`プロパティを設定するか、タップするトリガーに`click`モードを使用します。
::

::component-code
---
きれい真
アイテム
  モード
    - クリック
    -  hover
小道具
  モード'ホバー'
  enableTouch true
スロット
  デフォルト|

    <UButton label="Open" color="neutral" variant="subtle" />

  内容：|

    <Placeholder class="size-48 m-4 inline-flex" />
---

u—button {label="Open" color="neutral" variant="subtle"}

#コンテンツ
placeholder {class="size-48 m-4 inline-flex"}
::

::note
`hover`モードを使用する場合、[`Popover`](https://reka-ui.com/docs/components/popover)](https://reka-ui.com/docs/components/hover-card)コンポーネントの代わりに使用されます。
::

###  Delay

`hover`モードを使用する場合、`open-delay`と`close-delay` propsを使用して、ポップオーバーを開くか閉じる前の遅延を制御できます。

::component-code
---
きれい真
無視
  -  mode
小道具
  モード'ホバー'
  openDelay 500
  closeDelay 300
スロット
  デフォルト|

    <UButton label="Open" color="neutral" variant="subtle" />

  内容：|

    <Placeholder class="size-48 m-4 inline-flex" />
---

u—button {label="Open" color="neutral" variant="subtle"}

#コンテンツ
placeholder {class="size-48 m-4 inline-flex"}
::

### コンテンツ

`content`プロパティを使用して、Popoverコンテンツのレンダリング方法を制御します。たとえば、`align`や`side`などです。

::component-code
---
きれい真
アイテム
  content.align:
    -  start
    - センター
    -  end
  content.side:
    - 右
    - 左
    -  top
    -  bottom
小道具
  内容：
    整列センター
    側面底
    sideOffset 8
スロット
  デフォルト|

    <UButton label="Open" color="neutral" variant="subtle" />

  内容：|

    <Placeholder class="size-48 m-4 inline-flex" />
---

u—button {label="Open" color="neutral" variant="subtle"}

#コンテンツ
placeholder {class="size-48 m-4 inline-flex"}
::

### アロー

`arrow`プロパティを使用して、ポップオーバーに矢印を表示します。

::component-code
---
きれい真
無視
  -  arrow
小道具
  矢印true
スロット
  デフォルト|

    <UButton label="Open" color="neutral" variant="subtle" />

  内容：|

    <Placeholder class="size-48 m-4 inline-flex" />
---

u—button {label="Open" color="neutral" variant="subtle"}

#コンテンツ
placeholder {class="size-48 m-4 inline-flex"}
::

###  Modal

`modal`プロパティを使用して、Popoverが外部コンテンツとのインタラクションをブロックするかどうかを制御します。デフォルトは`false`です。

::component-code
---
きれい真
無視
  -  title
小道具
  モーダルtrue
スロット
  デフォルト|

    <UButton label="Open" color="neutral" variant="subtle" />

  内容：|

    <Placeholder class="size-48 m-4 inline-flex" />
---

uボタン{label="Open" color="neutral" variant="subtle"}

#コンテンツ
placeholder {class="size-48 m-4 inline-flex"}
::

###  Dismissible

`dismissible`プロパティを使用して、ポップオーバーの外側をクリックしたりescapeを押したりしたときにポップオーバーがdismissibleかどうかを制御します。デフォルトは`true`です。

::note
`close:prevent`イベントは、ユーザーがそれを閉じようとすると発行されます。
::

::component-example
---
名前'popover—dismission—example'
---
::

## 例

###  Controlオープンステート

`default-open` propまたは`v-model:open`ディレクティブを使用してオープン状態を制御できます。

::component-example
---
名前'popover—open—example'
---
::

::note
この例では、[`defineShortcuts`](/docs/composables/define-shortcuts)を活用して、kbd {value="O"}を押してポップオーバーを切り替えることができます。
::

### コマンドパレット付き

[ CommandPalette ](/docs/components/command-palette)コンポーネントをPopoverのコンテンツ内で使用できます。

::component-example
---
崩壊真
名前'popover—command—palette—example'
---
::

### 次のカーソルで

[`reference`](https://reka-ui.com/docs/components/tooltip#trigger) propを使用して、要素にカーソルを合わせるとポップオーバーができます。

::component-example
---
名前'popover—curs—example'
---
::

### アンカースロット付き

`#anchor`スロットを使用して、ポップオーバーをカスタム要素に対して配置できます。

::warning
このスロットは、`mode`が`click`の場合にのみ機能します。
::

::component-example
---
崩壊真
名前'popover—anchor—slot—example'
---
::

##  API

###  Props

component—props

### スロット

コンポーネントスロット

::note
`close`関数は`mode``click`に設定されている場合にのみ使用できます。なぜなら、Reka UIは[`Popover`](https://reka-ui.com/docs/components/popover#close-using-slot-props PH12 @では公開されていますが、[`HoverCard`]( PH15 )には公開されていないからです。
::

### エミッツ

component—emits

## テーマ

コンポーネントテーマ

##  Changelog

component—changelog
