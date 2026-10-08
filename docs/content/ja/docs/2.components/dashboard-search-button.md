---
title: DashboardSearchButton
description: 'DashboardSearchモーダルを開くためのスタイル設定済みボタン。'
category: dashboard
links:
  - label: ボタン
    to: /docs/components/button
    icon: i-simple-icons-nuxtdotjs
  - label: サイトマップ
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/DashboardSearchButton.vue
---

## 使用法

DashboardSearchButtonコンポーネントは、[ DashboardSearch ](/docs/components/dashboard-search)モーダルを開くために使用されます。

コンポーネントコード

[ Button ](/docs/components/button)コンポーネントを拡張しているので、`color`、`variant`、`size`などのプロパティを渡すことができます。

::component-code
---
無視
  - バリアント
小道具
  バリアント：'微妙'
---
::

::note{to="#collapsed"}
ボタンのデフォルト値は`color="neutral"`と`variant="outline"`、折りたたまれていない場合は`variant="ghost"`です。
::

### 崩壊

`collapsed` propを使用してボタンのラベルを非表示にし、[ kbds ](#kbds)を使用します。デフォルトは`false`です。

::component-code
---
きれい真
小道具
  崩壊：true
---
::

::tip{to="/docs/components/dashboard-sidebar#slots"}
** DashboardSidebar **コンポーネント内のボタンを使用する場合は、`collapsed`スロットプロップを直接使用します。
::

###  Kbds

ボタンにキーボードキーを表示するには、`kbds`プロパティを使用します。[ DashboardSearch ](/docs/components/dashboard-search#shortcut)コンポーネントのデフォルトのショートカットに一致するには、デフォルトの`['meta', 'K']`{lang="ts-type"}です。

::component-code
---
きれい真
無視
  -  kbds
小道具
  折りたたみ：false
  kbds
    - 'alt'
    - 'O'
---
::

##  API

###  Props

component—props

::callout{icon="i-simple-icons-mdnwebdocs" to="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attributes" target="_blank"}
このコンポーネントは、すべてのネイティブ`<button>` HTML属性もサポートします。
::

### スロット

コンポーネントスロット

## テーマ

コンポーネントテーマ

##  Changelog

component—changelog
