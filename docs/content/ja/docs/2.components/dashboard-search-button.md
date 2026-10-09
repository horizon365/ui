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

DashboardSearchButtonコンポーネントを使用して、[DashboardSearch](/docs/components/dashboard-search)モーダルを開きます。

:component-code

[Button](/docs/components/button)コンポーネントを拡張するため、`color`、`variant`、`size`などの任意のプロパティを渡すことができます。

::component-code
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

### 崩壊

`collapsed`プロパティを使用して、ボタンのラベルと[kbds](#kbds)を非表示にします。デフォルトは`false`です。

::component-code
---
prettier: true
props:
  collapsed: true
---
::

::tip{to="/docs/components/dashboard-sidebar#slots"}
**DashboardSidebar**コンポーネントでボタンを使用する場合は、`collapsed`スロットプロパティを直接使用します。
::

### Kbds

ボタンにキーボードキーを表示するには、`kbds`プロパティを使用します。[DashboardSearch](/docs/components/dashboard-search#shortcut)コンポーネントのデフォルトショートカットに一致するように、デフォルトでは`['meta', 'K']`{lang="ts-type"}です。

::component-code
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

:component-changelog
