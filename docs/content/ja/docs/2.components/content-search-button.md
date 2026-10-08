---
title: ContentSearchButton
description: 'ContentSearchモーダルを開くためのスタイル設定済みボタン。'
category: content
framework: nuxt
links:
  - label: ボタン
    to: /docs/components/button
    icon: i-simple-icons-nuxtdotjs
  - label: サイトマップ
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/content/ContentSearchButton.vue
---

::warning{to="/docs/getting-started/integrations/content"}
このコンポーネントは`@nuxt/content`モジュールがインストールされている場合にのみ使用できます。
::

## 使用法

ContentSearchButtonコンポーネントは、[ ContentSearch ](/docs/components/content-search)モーダルを開くために使用されます。

コンポーネントコード{prefix="content"}

[ Button ](/docs/components/button)コンポーネントを拡張しているので、`color`、`variant`、`size`などのプロパティを渡すことができます。

::component-code{prefix="content"}
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

`collapsed`プロパティを使用してボタンのラベルを表示し、[ kbds ](#kbds)を表示します。デフォルトは`true`です。

::component-code{prefix="content"}
---
きれい真
小道具
  折りたたみ：false
---
::

###  Kbds

ボタンにキーボードキーを表示するには、`kbds`プロパティを使用します。デフォルトは`['meta', 'K']`{lang="ts-type"}で、[ ContentSearch ](/docs/components/content-search#shortcut)コンポーネントのデフォルトのショートカットに一致します。

::component-code{prefix="content"}
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

component—changelog {prefix="content"}
