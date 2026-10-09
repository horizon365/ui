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

ContentSearchButtonコンポーネントは、[ ContentSearch](/docs/components/content-search)モーダルを開くために使用されます。

:component-code{prefix="content"}

[Button](/docs/components/button)コンポーネントを拡張するため、`color`、`variant`、`size`などの任意のプロパティを渡すことができます。

::component-code{prefix="content"}
---
ignore:
  - variant
props:
  variant: 'subtle'
---
::

::note{to="#collapsed"}
ボタンのデフォルト値は、折りたたまれていない場合は`color="neutral"`と`variant="outline"`、折りたたまれている場合は`variant="ghost"`です。
::

### Collapsed

`collapsed`プロパティを使用してボタンのラベルと[kbds](#kbds)を表示します。デフォルトは`true`です。

::component-code{prefix="content"}
---
prettier: true
props:
  collapsed: false
---
::

### Kbds

ボタンにキーボードキーを表示するには、`kbds`プロパティを使用します。[ContentSearch](/docs/components/content-search#shortcut)コンポーネントのデフォルトショートカットに一致するように、デフォルトで`['meta', 'K']`{lang="ts-type"}になります。

::component-code{prefix="content"}
---
prettier: true
ignore:
  - kbds
props:
  collapsed: false
  kbds:
    - 'alt'
    - 'O'
---
::

## API

### Props

:component-props

::callout{icon="i-simple-icons-mdnwebdocs" to="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attributes" target="_blank"}
このコンポーネントはすべてのネイティブ`<button>` HTML属性もサポートします。
::

### スロット

:component-slots

## Theme

:component-theme

## Changelog

:component-changelog{prefix="content"}
