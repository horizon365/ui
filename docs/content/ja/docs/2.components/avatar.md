---
description: フォールバックとNuxt Imageをサポートするimg要素。
category: element
keywords:
  - profile picture
  - user image
links:
  - label: サイトマップ
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Avatar.vue
---

## 使用法

アバターは[`@nuxt/image`](https://github.com/nuxt/image)がインストールされている場合、`<NuxtImg>`コンポーネントを使用します。

::component-code
---
無視
  -  src
小道具
  https//github.com/benjamincanac.png
---
::

::note
`alt`、`loading`など、HTMLの`<img>`要素から任意のプロパティを渡すことができます。
::

::tip
`@nuxt/image`をオプトアウトするには、`as` propを使用します。`:as="{ img: 'img' }"`。
::

###  Src

`src`プロパティを使用して画像URLを設定します。

::component-code
---
無視
  - ローディング
小道具
  https//github.com/benjamincanac.png
  読み込み怠惰
---
::

### サイズ

アバターのサイズを設定するには、`size`プロパティを使用します。

::component-code
---
無視
  -  src
  - ローディング
小道具
  https//github.com/benjamincanac.png
  サイズXL
  読み込み怠惰
---
::

::note
`<img>`要素の`width`と`height`は、`size` propに基づいて自動的に設定されます。
::

### アイコン

`icon` propを使用して、フォールバック[ Icon ](/docs/components/icon)を表示します。

::component-code
---
小道具
  アイコン'i—lucide'
  サイズMD
---
::

### テキスト

フォールバックテキストを表示するには、`text`プロパティを使用します。

::component-code
---
小道具
  テキスト'+1'
  サイズMD
---
::

###  Alt

アイコンまたはテキストが指定されていない場合、`alt` propの** initials **がフォールバックとして使用されます。

::component-code
---
小道具
  alt 'ベンジャミン·カナック'
  サイズMD
---
::

::note
`alt` propは`img`要素に`alt`属性として渡されます。
::

### 色バッジ{label="4.8+" class="align-text-top"}

`color`を使ってアバターの色を変更します。

::component-code
---
小道具
  色プライマリ
  alt 'ベンジャミン·カナック'
---
::

### チップ

`chip` propを使用して、アバターの周りにチップを表示します。

::component-code
---
きれい真
無視
  -  src
  - ローディング
  -  chip.inset
小道具
  https//github.com/benjamincanac.png
  読み込み怠惰
  チップ
    インセットtrue
---
::

## 例

### ツールチップ付き

[ Tooltip ](/docs/components/tooltip)コンポーネントを使用して、アバターをホバリングするときにツールチップを表示できます。

component—example {name="avatar-tooltip-example"}

### マスク付き

CSSマスクを使用して、単純な円の代わりにカスタム形状でアバターを表示できます。

component—example {name="avatar-mask-example"}

##  API

###  Props

component—props

::callout{icon="i-simple-icons-mdnwebdocs" to="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#attributes" target="_blank"}
このコンポーネントは、すべてのネイティブ`<img>` HTML属性もサポートします。
::

## テーマ

コンポーネントテーマ

##  Changelog

component—changelog
