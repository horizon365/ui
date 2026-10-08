---
description: 要素にマウスオーバーすると情報が表示されるポップアップ。
category: overlay
keywords:
  - hint
links:
  - label: ツールチップ
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/tooltip
  - label: サイトマップ
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Tooltip.vue
---

## 使用法

[ Button ](/docs/components/button)またはツールチップのデフォルトスロットにある他のコンポーネントを使用します。

::component-code
---
きれい真
無視
  - テキスト
小道具
  text 'GitHubで開く'
スロット
  デフォルト|

    <UButton label="Open" color="neutral" variant="subtle" />
---

uボタン{label="Open" color="neutral" variant="subtle"}
::

::warning
[`App`](/docs/components/app))コンポーネントでアプリをラップしてください。このコンポーネントは、Reka UIの[`TooltipProvider`](https://reka-ui.com/docs/components/tooltip#provider)コンポーネントを使用しています。
::

::tip{to="/docs/components/app#props"}
`App` component `tooltip` propを確認して、Tooltipをグローバルに設定する方法を確認できます。
::

### テキスト

`text`プロパティを使用して、ツールチップの内容を設定します。

::component-code
---
きれい真
小道具
  text 'GitHubで開く'
スロット
  デフォルト|

    <UButton label="Open" color="neutral" variant="subtle" />
---

u—button {label="Open" color="neutral" variant="subtle"}
::

###  Kbds

`kbds`プロパティを使用して、[ Kbd ](/docs/components/kbd)コンポーネントをツールチップでレンダリングします。

::component-code
---
きれい真
無視
  - テキスト
  -  kbds
小道具
  text 'GitHubで開く'
  kbds
    - メタ
    -  G
スロット
  デフォルト|

    <UButton label="Open" color="neutral" variant="subtle" />
---

u—button {label="Open" color="neutral" variant="subtle"}
::

::tip
macOSでは`⌘`、その他のプラットフォームでは`Ctrl`として表示される`meta`のような特別なキーを使用できます。
::

###  Delay

`delay-duration`プロパティを使用して、Tooltipが表示される前の遅延を変更します。たとえば、`0`に設定すると、ツールチップが表示されるようにすることができます。

::component-code
---
きれい真
無視
  - テキスト
小道具
  delayDuration 0
  text 'GitHubで開く'
スロット
  デフォルト|

    <UButton label="Open" color="neutral" variant="subtle" />
---

u—button {label="Open" color="neutral" variant="subtle"}
::

::tip
これは、[`App`](/docs/components/app)コンポーネント内の`tooltip.delayDuration`オプションを使用してグローバルに設定できます。
::

### コンテンツ

`content`プロパティを使用して、Tooltipコンテンツのレンダリング方法を制御します。たとえば、`align`や`side`などです。

::tip
これは、[`App`](/docs/components/app)コンポーネント内の`tooltip.content`オプションを使用してグローバルに設定できます。
::

::component-code
---
きれい真
無視
  - テキスト
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
  text 'GitHubで開く'
スロット
  デフォルト|

    <UButton label="Open" color="neutral" variant="subtle" />
---

uボタン{label="Open" color="neutral" variant="subtle"}
::

### アロー

`arrow`プロパティを使用して、ツールチップに矢印を表示します。

::component-code
---
きれい真
無視
  - テキスト
  -  arrow
小道具
  矢印true
  text 'GitHubで開く'
スロット
  デフォルト|

    <UButton label="Open" color="neutral" variant="subtle" />
---

uボタン{label="Open" color="neutral" variant="subtle"}
::

### 無効

`disabled`プロパティを使用して、Tooltipを無効にします。

::component-code
---
きれい真
無視
  - テキスト
小道具
  無効true
  text 'GitHubで開く'
スロット
  デフォルト|

    <UButton label="Open" color="neutral" variant="subtle" />
---

u—button {label="Open" color="neutral" variant="subtle"}
::

## 例

###  Controlオープンステート

`default-open` propまたは`v-model:open`ディレクティブを使用してオープン状態を制御できます。

::component-example
---
名前'tooltip—open—example'
---
::

::note
この例では、[`defineShortcuts`](/docs/composables/define-shortcuts)を活用して、kbd {value="O"}を押してツールチップを切り替えることができます。
::

### 次のカーソルで

[`reference`](https://reka-ui.com/docs/components/tooltip#trigger) propを使用して、ツールチップをカーソルに追従させることができます。

::component-example
---
名前'tooltipカーソル—example'
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
