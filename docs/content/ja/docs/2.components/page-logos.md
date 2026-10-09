---
title: ページロゴ
description: 'ページに表示するロゴや画像のリスト。'
category: page
links:
  - label: サイトマップ
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/PageLogos.vue
---

## 使用法

PageLogosコンポーネントは、ページ内にロゴや画像のリストを表示する柔軟な方法を提供します。

::component-code
---
collapse: true
prettier: true
hide:
  - class
ignore:
  - items
props:
  items:
    - i-simple-icons-github
    - i-simple-icons-discord
    - i-simple-icons-x
    - i-simple-icons-instagram
    - i-simple-icons-linkedin
    - i-simple-icons-facebook
  class: 'mb-10'
---
::

### Title

`title`プロパティを使用して、ロゴの上にタイトルを設定します。

::component-code
---
prettier: true
ignore:
  - items
hide:
  - class
props:
  title: 'Trusted by the best front-end teams'
  items:
    - i-simple-icons-github
    - i-simple-icons-discord
    - i-simple-icons-x
    - i-simple-icons-instagram
    - i-simple-icons-linkedin
    - i-simple-icons-facebook
  class: 'my-10'
---
::

### アイテム

ロゴは2つの方法で表示できます。

1.  `items`プロパティを使用してロゴのリストを提供します。各項目は以下のいずれかになります
  - アイコン名（例：`i-simple-icons-github`）
  -  `UAvatar`コンポーネントで利用される画像の`src`および`alt`プロパティを含むオブジェクト。
2. デフォルトスロットを使用してコンテンツを完全に制御

::tabs{class="gap-0"}

::component-example{label="アイテム付き"}
---
name: 'page-logos-with-items'
class: '[&>div]:my-10'
---
::

::component-example{label="スロット付き"}
---
name: 'page-logos-with-slot'
class: '[&>div]:my-10'
---
::

::

### マーキー

`marquee`プロパティを使用して、ロゴのマーキー効果を有効にします。

::component-code
---
prettier: true
ignore:
  - items
  - marquee
hide:
  - class
props:
  title: 'Trusted by the best front-end teams'
  marquee: true
  items:
    - i-simple-icons-github
    - i-simple-icons-discord
    - i-simple-icons-x
    - i-simple-icons-instagram
    - i-simple-icons-linkedin
    - i-simple-icons-facebook
  class: 'my-10'
---
::

::note{to="/docs/components/marquee"}
`marquee`モードを使用する場合、propsを渡すことで動作をカスタマイズできます。詳細は`Marquee`コンポーネントを参照してください。
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
