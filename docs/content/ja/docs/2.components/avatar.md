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

Avatarは[`@nuxt/image`](https://github.com/nuxt/image)がインストールされている場合は`<NuxtImg>`コンポーネントを使用し、それ以外の場合は`img`に戻ります。

::component-code
---
ignore:
  - src
props:
  src: 'https://github.com/benjamincanac.png'
---
::

::note
`alt`、`loading`など、HTML `<img>`要素から任意のプロパティを渡すことができます。
::

::tip
`@nuxt/image`をオプトアウトするには、`as`プロパティ`:as="{ img: 'img' }"`を使用します。
::

### Src

`src`プロパティを使用して画像URLを設定します。

::component-code
---
ignore:
  - loading
props:
  src: 'https://github.com/benjamincanac.png'
  loading: lazy
---
::

### サイズ

`size`プロパティを使ってアバターのサイズを設定します。

::component-code
---
ignore:
  - src
  - loading
props:
  src: 'https://github.com/benjamincanac.png'
  size: xl
  loading: lazy
---
::

::note
`<img>`要素の`width`と`height`は、`size` propに基づいて自動的に設定されます。
::

### Icon

`icon`プロパティを使用して、フォールバック[Icon](/docs/components/icon)を表示します。

::component-code
---
props:
  icon: 'i-lucide-image'
  size: md
---
::

### Text

`text`プロパティを使用してフォールバックテキストを表示します。

::component-code
---
props:
  text: '+1'
  size: md
---
::

### Alt

アイコンやテキストが指定されていない場合、`alt`プロパティの**initials**がフォールバックとして使用されます。

::component-code
---
props:
  alt: 'Benjamin Canac'
  size: md
---
::

::note
`alt`プロパティは`img`要素に`alt`属性として渡されます。
::

### カラー badge{label="4.8+" class="align-text-top"}

`color`プロパティを使用してアバターの色を変更します。

::component-code
---
props:
  color: primary
  alt: 'Benjamin Canac'
---
::

xph082チップ

`chip`プロップを使用してアバターの周りにチップを表示します。

::component-code
---
prettier: true
ignore:
  - src
  - loading
  - chip.inset
props:
  src: 'https://github.com/benjamincanac.png'
  loading: lazy
  chip:
    inset: true
---
::

## 例

### ツールチップ付き

[Tooltip](/docs/components/tooltip)コンポーネントを使用して、アバターをホバリングするとツールチップを表示できます。

:component-example{name="avatar-tooltip-example"}

### マスク付き

CSSマスクを使用して、単純な円の代わりにカスタム形状でアバターを表示できます。

:component-example{name="avatar-mask-example"}

## API

### Props

:component-props

::callout{icon="i-simple-icons-mdnwebdocs" to="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#attributes" target="_blank"}
このコンポーネントはすべてのネイティブ`<img>` HTML属性もサポートします。
::

## Theme

:component-theme

## Changelog

:component-changelog
