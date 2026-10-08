---
description: '無限スクロールコンテンツを作成するためのコンポーネント。'
category: data
keywords:
  - ticker
  - scroller
  - carousel
links:
  - label: サイトマップ
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Marquee.vue
---

## 使用法

コンテンツのデフォルトスロットを使用して、無限スクロールアニメーションを作成します。

::component-code
---
きれい真
スロット
  デフォルト|

    <UIcon name="i-simple-icons-github" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons-discord" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons-x" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons-instagram" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons-linkedin" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons-facebook" class="size-10 shrink-0" />
---
u—icon {name="i-simple-icons-github" class="size-10 shrink-0"}
u—icon {name="i-simple-icons-discord" class="size-10 shrink-0"}
u—icon {name="i-simple-icons-x" class="size-10 shrink-0"}
u—icon {name="i-simple-icons-instagram" class="size-10 shrink-0"}
u—icon {name="i-simple-icons-linkedin" class="size-10 shrink-0"}
u—icon {name="i-simple-icons-facebook" class="size-10 shrink-0"}
::

::tip
アニメーションは、ユーザーが縮小したい場合に自動的に無効になり、コンテンツは静的に表示されます。
::

### 一時停止

`pause-on-hover`プロパティを使用して、ユーザーがコンテンツにカーソルを合わせたときにアニメーションを一時停止します。

::component-code
---
きれい真
小道具
  pauseOnHover true
スロット
  デフォルト|

    <UIcon name="i-simple-icons-github" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons-discord" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons-x" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons-instagram" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons-linkedin" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons-facebook" class="size-10 shrink-0" />
---
u—icon {name="i-simple-icons-github" class="size-10 shrink-0"}
u—icon {name="i-simple-icons-discord" class="size-10 shrink-0"}
u—icon {name="i-simple-icons-x" class="size-10 shrink-0"}
u—icon {name="i-simple-icons-instagram" class="size-10 shrink-0"}
u—icon {name="i-simple-icons-linkedin" class="size-10 shrink-0"}
u—icon {name="i-simple-icons-facebook" class="size-10 shrink-0"}
::

### リバース

`reverse`プロパティを使用して、アニメーションの方向を逆にします。

::component-code
---
きれい真
小道具
  逆真
スロット
  デフォルト|

    <UIcon name="i-simple-icons-github" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons-discord" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons-x" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons-instagram" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons-linkedin" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons-facebook" class="size-10 shrink-0" />
---
u—icon {name="i-simple-icons-github" class="size-10 shrink-0"}
u—icon {name="i-simple-icons-discord" class="size-10 shrink-0"}
u—icon {name="i-simple-icons-x" class="size-10 shrink-0"}
u—icon {name="i-simple-icons-instagram" class="size-10 shrink-0"}
u—icon {name="i-simple-icons-linkedin" class="size-10 shrink-0"}
u—icon {name="i-simple-icons-facebook" class="size-10 shrink-0"}
::

### オリエンテーション

スクロール方向を変更するには、`orientation`プロパティを使用します。

::component-code
---
きれい真
クラス'h—96'
小道具
  オリエンテーション'垂直'
スロット
  デフォルト|

    <UIcon name="i-simple-icons-github" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons-discord" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons-x" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons-instagram" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons-linkedin" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons-facebook" class="size-10 shrink-0" />
---
u—icon {name="i-simple-icons-github" class="size-10 shrink-0"}
u—icon {name="i-simple-icons-discord" class="size-10 shrink-0"}
u—icon {name="i-simple-icons-x" class="size-10 shrink-0"}
u—icon {name="i-simple-icons-instagram" class="size-10 shrink-0"}
u—icon {name="i-simple-icons-linkedin" class="size-10 shrink-0"}
u—icon {name="i-simple-icons-facebook" class="size-10 shrink-0"}
::

### リピート

`repeat`プロパティを使用して、アニメーション内でコンテンツを繰り返す回数を指定します。

::component-code
---
きれい真
小道具
  繰り返します6
スロット
  デフォルト|

    <UIcon name="i-simple-icons-github" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons-discord" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons-x" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons-instagram" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons-linkedin" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons-facebook" class="size-10 shrink-0" />
---
u—icon {name="i-simple-icons-github" class="size-10 shrink-0"}
u—icon {name="i-simple-icons-discord" class="size-10 shrink-0"}
u—icon {name="i-simple-icons-x" class="size-10 shrink-0"}
u—icon {name="i-simple-icons-instagram" class="size-10 shrink-0"}
u—icon {name="i-simple-icons-linkedin" class="size-10 shrink-0"}
u—icon {name="i-simple-icons-facebook" class="size-10 shrink-0"}
::

### オーバーレイ

`overlay`プロパティを使用して、マーキーのエッジにあるグラデーションオーバーレイを削除します。

::component-code
---
きれい真
小道具
  オーバーレイfalse
スロット
  デフォルト|

    <UIcon name="i-simple-icons-github" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons-discord" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons-x" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons-instagram" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons-linkedin" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons-facebook" class="size-10 shrink-0" />
---
u—icon {name="i-simple-icons-github" class="size-10 shrink-0"}
u—icon {name="i-simple-icons-discord" class="size-10 shrink-0"}
u—icon {name="i-simple-icons-x" class="size-10 shrink-0"}
u—icon {name="i-simple-icons-instagram" class="size-10 shrink-0"}
u—icon {name="i-simple-icons-linkedin" class="size-10 shrink-0"}
u—icon {name="i-simple-icons-facebook" class="size-10 shrink-0"}
::

## 例

### お客様の声

`Marquee`コンポーネントを使用して、お客様の声の無限スクロールアニメーションを作成します。

::component-example{label="With Items"}
---
きれい真
名前：マーキー·ティスモニアルズ
崩壊真
overflowHidden true
クラス'px—0'
---
::

### スクリーンショット

`Marquee`コンポーネントを使用して、スクリーンショットの無限スクロールアニメーションを作成します。

::component-example{label="スクリーンショット付き"}
---
きれい真
名前'marquee—screenshots'
崩壊真
overflowHidden true
クラス'！p—0'
---
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
