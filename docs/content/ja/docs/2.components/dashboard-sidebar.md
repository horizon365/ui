---
title: ダッシュボードサイドバー
description: 'ダッシュボードに表示するサイズ変更可能で折りたたみ可能なサイドバー。'
category: dashboard
links:
  - label: サイトマップ
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/DashboardSidebar.vue
---

## 使用法

DashboardSidebarコンポーネントは、ダッシュボードのレイアウトにサイドバーを表示するために使用されます。これは、ドラッグによるサイズ変更、ステート永続性をサポートし、[ DashboardGroup ](/docs/components/dashboard-group)と統合します。[ DashboardPanel ](/docs/components/dashboard-panel)および[ DashboardNavbar ](/docs/components/dashboard-navbar)。

::tip{to="/docs/components/sidebar"}
** DashboardSidebar vs Sidebar @@@：このコンポーネントは、ドラッグ·ツー·サイズ変更、ステート永続性、および`DashboardGroup`統合を備えたダッシュボードレイアウト用に設計されています。シンプルなスタンドアロンサイドバー（チャットパネル、設定、ナビゲーション）の場合は、代わりに[ Sidebar ](/docs/components/sidebar)を使用します。
::

その状態サイズ、折りたたみなどは、[ DashboardGroup ](/docs/components/dashboard-group#props)コンポーネントに提供する`storage`および`storage-key` propsに基づいて保存されます。

[ DashboardGroup ](/docs/components/dashboard-group)コンポーネントのデフォルトスロット内で使用します。

```vue [layouts/dashboard.vue]{3}
<template>
  <UDashboardGroup>
    <UDashboardSidebar />

    <slot />
  </UDashboardGroup>
</template>
```

::warning
このコンポーネントは`resizable` propを使用する場合、単一のルート要素を持ちません。そのため、ページ遷移を使用する場合やレイアウトに単一のルートを必要とする場合は、コンテナにラップします例：`<div class="flex flex-1">`。
::

サイドバーをカスタマイズするには`header`、`default`、`footer`スロットを使用し、サイドバーメニューをカスタマイズするには`body`または`content`スロットを使用します。

::component-example
---
崩壊真
名前'dashboard—sideber—example'
クラス'！p—0！justify—start'
小道具
  minSize 22
  defaultSize 35
  最大サイズ40
  クラス'！min—h—96 h—136'
---
::

::note
画面の左端近くのサイドバーをドラッグして折りたたみます。
::

### サイズ変更可能

`resizable`プロパティを使用してサイドバーのサイズを変更できます。

::component-code
---
きれい真
隠す
  -  minSize
  -  defaultSize
  -  maxSize
  - クラス
小道具
  サイズ変更可能true
  minSize 22
  defaultSize 35
  最大サイズ40
  クラス'！min—h—96'
スロット
  デフォルト|

    <Placeholder class="h-96" />
クラス'！p—0！justify—start'
---

placeholder {class="h-96"}
::

###  Collapsible

`collapsible`プロパティを使用して、画面の端付近をドラッグするときにサイドバーを折りたたみ可能にします。

::warning
[`DashboardSidebarCollapse`](/docs/components/dashboard-sidebar-collapse)コンポーネントは、サイドバーが** collapsible **でない場合には効果がありません。
::

::component-code
---
きれい真
無視
  -  resizable
隠す
  -  minSize
  -  defaultSize
  -  maxSize
  - クラス
小道具
  サイズ変更可能true
  折りたたみ式true
  minSize 22
  defaultSize 35
  最大サイズ40
  クラス'！min—h—96'
スロット
  デフォルト|

    <Placeholder class="h-96" />
クラス'！p—0！justify—start'
---

placeholder {class="h-96"}
::

::tip{to="#slots"}
スロットプロップ内の`collapsed`ステートにアクセスして、サイドバーが折りたたまれたときのコンテンツをカスタマイズできます。
::

### サイズ

サイドバーのサイズをカスタマイズするには、`min-size`、`max-size`、`default-size`、`collapsed-size` propsを使用します。

::component-code
---
きれい真
無視
  -  resizable
  - 折りたたみ可能
隠す
  - クラス
小道具
  サイズ変更可能true
  折りたたみ式true
  minSize 22
  defaultSize 35
  最大サイズ40
  collapsedSize 0
  クラス'！min—h—96'
スロット
  デフォルト|

    <Placeholder class="h-96" />
クラス'！p—0！justify—start'
---

placeholder {class="h-96"}
::

::tip{to="/docs/components/dashboard-group#props"}
サイズはデフォルトでパーセンテージで計算されます。`DashboardGroup`コンポーネントの`unit`プロパティを使用して変更できます。
::

::note
`collapsed-size` propはデフォルトで`0`に設定されていますが、サイドバーには`min-w-16`があります。
::

### サイド

サイドバーの側面を変更するには、`side`プロパティを使用します。デフォルトは`left`です。

::component-code
---
きれい真
無視
  - サイズ変更可能
  - 折りたたみ可能
隠す
  -  minSize
  -  defaultSize
  -  maxSize
  - クラス
小道具
  サイド'右'
  サイズ変更可能true
  折りたたみ式true
  minSize 22
  defaultSize 35
  最大サイズ40
  クラス'！min—h—96'
スロット
  デフォルト|

    <Placeholder class="h-96" />
クラス'！p—0！justify—end'
---

placeholder {class="h-96"}
::

### モード

サイドバーメニューのモードを変更するには、`mode`プロパティを使用します。デフォルトは`slideover`です。

`body`スロットを使用してメニュー本体ヘッダー下を埋め、`content`スロットを使用してメニュー全体を埋めます。

::tip{to="#props"}
`menu` propを使用してサイドバーのメニューをカスタマイズできます。選択したモードに応じて適応します。
::

::component-example
---
崩壊真
iframe
  高さ500px；
iframeモバイルtrue
overflowHidden true
名前'dashboard—sideber—mode—example'
オプション
  -  name 'mode'
    ラベル'mode'
    デフォルト'引き出し'
    アイテム
      - モーダル
      - スライドオーバー
      - ドロワー
小道具
  クラス'w—full'
---
::

::note
これらの例には、[`DashboardGroup`](/docs/components/dashboard-group)[`DashboardPanel`](/docs/components/dashboard-panel)[`DashboardNavbar`](/docs/components/dashboard-navbar)コンポーネントが含まれています。
::

### トグル

`toggle`プロパティを使用して、モバイルに表示される[ DashboardSidebarToggle ](/docs/components/dashboard-sidebar-toggle)コンポーネントをカスタマイズします。

[ Button ](/docs/components/button)コンポーネントから任意のプロパティを渡してカスタマイズできます。

::component-example
---
崩壊真
iframe
  高さ500px；
iframeモバイルtrue
overflowHidden true
名前'dashboard—sideber—toggle—example'
小道具
  クラス'w—full'
---
::

### トグル側

トグルボタンの側面を変更するには、`toggle-side`プロパティを使用します。デフォルトは`left`です。

::component-example
---
崩壊真
iframe
  高さ500px；
iframeモバイルtrue
overflowHidden true
名前'dashboard—sideber—toggle—side—example'
小道具
  クラス'w—full'
---
::

## 例

###  Controlオープンステート

`open` propまたは`v-model:open`ディレクティブを使用してオープン状態を制御できます。

::component-example
---
iframe
  高さ500px；
iframeモバイルtrue
overflowHidden true
名前'dashboard—sideber—open—example'
クラス'！p—0！justify—start'
---
::

::note
この例では、[`defineShortcuts`](/docs/composables/define-shortcuts)を活用して、kbd {value="O"}を押して、DashboardSidebarのオープン状態を切り替えることができます。
::

### 制御崩壊状態

折りたたまれた状態は、`collapsed` propまたは`v-model:collapsed`ディレクティブを使用して制御できます。

::component-example
---
名前'dashboard—sideber—collapsed—example'
クラス'！p—0！justify—start'
小道具
  minSize 22
  defaultSize 35
  最大サイズ40
  クラス'！min—h—96 h—136'
---
::

::note
この例では、[`defineShortcuts`](/docs/composables/define-shortcuts)を活用して、kbd {value="C"}を押して、DashboardSidebarの折りたたまれた状態を切り替えることができます。
::

##  API

###  Props

component—props

### スロット

コンポーネントスロット

## テーマ

コンポーネントテーマ

##  Changelog

component—changelog
