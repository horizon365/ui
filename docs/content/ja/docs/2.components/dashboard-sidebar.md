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

DashboardSidebarコンポーネントは、ダッシュボードのレイアウトにサイドバーを表示するために使用されます。このコンポーネントは、ドラッグ·ツー·サイズ変更、ステート永続性をサポートし、[DashboardGroup](/docs/components/dashboard-group)、[DashboardPanel](/docs/components/dashboard-panel)、[DashboardNavbar](xph01x)と統合されます。

::tip{to="/docs/components/sidebar"}
**DashboardSidebar vs Sidebar**このコンポーネントは、ドラッグ·ツー·サイズ変更、ステート永続性、`DashboardGroup`統合を備えたダッシュボードレイアウト用に設計されています。シンプルなスタンドアロンサイドバー（チャットパネル、設定、ナビゲーション）の場合は、代わりに[Sidebar](/docs/components/sidebar)を使用してください。
::

その状態サイズ、折りたたまれたなどは、[DashboardGroup](/docs/components/dashboard-group#props)コンポーネントに提供した`storage`および`storage-key`プロパティに基づいて保存されます。

[DashboardGroup](/docs/components/dashboard-group)コンポーネントのデフォルトスロット内で使用します。

```vue [layouts/dashboard.vue]{3}
<template>
  <UDashboardGroup>
    <UDashboardSidebar />

    <slot />
  </UDashboardGroup>
</template>
```

::warning
`resizable`プロパティを使用する場合、このコンポーネントは単一のルート要素を持ちません。ページ遷移を使用する場合や、レイアウトに単一のルートを必要とする場合は、コンテナ（例えば`<div class="flex flex-1">`）でラップします。
::

サイドバーをカスタマイズするには`header`、`default`、`footer`スロットを使用し、サイドバーメニューをカスタマイズするには`body`または`content`スロットを使用します。

::component-example
---
collapse: true
name: 'dashboard-sidebar-example'
class: '!p-0 !justify-start'
props:
  minSize: 22
  defaultSize: 35
  maxSize: 40
  class: '!min-h-96 h-136'
---
::

::note
画面の左端近くのサイドバーをドラッグして折りたたみます。
::

### サイズ変更可能

`resizable`プロパティを使用してサイドバーのサイズを変更できます。

::component-code
---
prettier: true
hide:
  - minSize
  - defaultSize
  - maxSize
  - class
props:
  resizable: true
  minSize: 22
  defaultSize: 35
  maxSize: 40
  class: '!min-h-96'
slots:
  default: |

    <Placeholder class="h-96" />
class: '!p-0 !justify-start'
---

:placeholder{class="h-96"}
::

### Collapsible

`collapsible`プロパティを使用して、画面の端付近をドラッグするとサイドバーを折りたたみ可能にします。

::warning
[`DashboardSidebarCollapse`](/docs/components/dashboard-sidebar-collapse)コンポーネントは、サイドバーが**collapsible**でない場合には効果がありません。
::

::component-code
---
prettier: true
ignore:
  - resizable
hide:
  - minSize
  - defaultSize
  - maxSize
  - class
props:
  resizable: true
  collapsible: true
  minSize: 22
  defaultSize: 35
  maxSize: 40
  class: '!min-h-96'
slots:
  default: |

    <Placeholder class="h-96" />
class: '!p-0 !justify-start'
---

:placeholder{class="h-96"}
::

::tip{to="#slots"}
スロットプロップの`collapsed`ステートにアクセスして、サイドバーが折りたたまれたときにサイドバーのコンテンツをカスタマイズできます。
::

### Size

サイドバーのサイズをカスタマイズするには、`min-size`、`max-size`、`default-size`、`collapsed-size`の小道具を使用します。

::component-code
---
prettier: true
ignore:
  - resizable
  - collapsible
hide:
  - class
props:
  resizable: true
  collapsible: true
  minSize: 22
  defaultSize: 35
  maxSize: 40
  collapsedSize: 0
  class: '!min-h-96'
slots:
  default: |

    <Placeholder class="h-96" />
class: '!p-0 !justify-start'
---

:placeholder{class="h-96"}
::

::tip{to="/docs/components/dashboard-group#props"}
サイズはデフォルトでパーセンテージで計算されます。`DashboardGroup`コンポーネントの`unit`プロパティを使用して変更できます。
::

::note
`collapsed-size`プロパティはデフォルトで`0`に設定されていますが、サイドバーには`min-w-16`があります。
::

### Side

サイドバーの側面を変更するには`side`プロパティを使用します。デフォルトは`left`です。

::component-code
---
prettier: true
ignore:
  - resizable
  - collapsible
hide:
  - minSize
  - defaultSize
  - maxSize
  - class
props:
  side: 'right'
  resizable: true
  collapsible: true
  minSize: 22
  defaultSize: 35
  maxSize: 40
  class: '!min-h-96'
slots:
  default: |

    <Placeholder class="h-96" />
class: '!p-0 !justify-end'
---

:placeholder{class="h-96"}
::

### Mode

サイドバーメニューのモードを変更するには、`mode`プロパティを使用します。デフォルトは`slideover`です。

メニュー本体（ヘッダー下）を埋めるには`body`スロットを使用し、メニュー全体を埋めるには`content`スロットを使用します。

::tip{to="#props"}
`menu`プロパティを使用してサイドバーのメニューをカスタマイズできます。選択したモードに応じて適応します。
::

::component-example
---
collapse: true
iframe:
  height: 500px;
iframeMobile: true
overflowHidden: true
name: 'dashboard-sidebar-mode-example'
options:
  - name: 'mode'
    label: 'mode'
    default: 'drawer'
    items:
      - modal
      - slideover
      - drawer
props:
  class: 'w-full'
---
::

::note
これらの例には、モバイルでサイドバーをデモンストレーションするために必要な[`DashboardGroup`](/docs/components/dashboard-group)、[`DashboardPanel`](/docs/components/dashboard-panel)、[`DashboardNavbar`](/docs/components/dashboard-navbar)コンポーネントが含まれます。
::

### Toggle

`toggle`プロパティを使用して、モバイルで表示される[DashboardSidebarToggle](/docs/components/dashboard-sidebar-toggle)コンポーネントをカスタマイズします。

[Button](/docs/components/button)コンポーネントから任意のプロパティを渡してカスタマイズできます。

::component-example
---
collapse: true
iframe:
  height: 500px;
iframeMobile: true
overflowHidden: true
name: 'dashboard-sidebar-toggle-example'
props:
  class: 'w-full'
---
::

### Toggle側

トグルボタンの側面を変更するには、`toggle-side`プロパティを使用します。デフォルトは`left`です。

::component-example
---
collapse: true
iframe:
  height: 500px;
iframeMobile: true
overflowHidden: true
name: 'dashboard-sidebar-toggle-side-example'
props:
  class: 'w-full'
---
::

## サンプル

### Controlオープンステート

オープン状態は`open`プロパティまたは`v-model:open`ディレクティブを使用して制御できます。

::component-example
---
iframe:
  height: 500px;
iframeMobile: true
overflowHidden: true
name: 'dashboard-sidebar-open-example'
class: '!p-0 !justify-start'
---
::

::note
この例では、[`defineShortcuts`](/docs/composables/define-shortcuts)を活用して、kbd{value="O"}を押してDashboardSidebarのオープン状態を切り替えることができます。
::

###  Control折りたたみ状態

折りたたまれた状態は`collapsed`プロパティまたは`v-model:collapsed`ディレクティブを使用して制御できます。

::component-example
---
name: 'dashboard-sidebar-collapsed-example'
class: '!p-0 !justify-start'
props:
  minSize: 22
  defaultSize: 35
  maxSize: 40
  class: '!min-h-96 h-136'
---
::

::note
この例では、[`defineShortcuts`](/docs/composables/define-shortcuts)を活用して、kbd{value="C"}を押してDashboardSidebarの折りたたまれた状態を切り替えることができます。
::

## API

### Props

:component-props

### スロット

:component-slots

## Theme

:component-theme

## Changelog

:component-changelog
