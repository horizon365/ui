---
description: '無限スクロールコンテンツを作成するコンポーネント。'
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
prettier: true
slots:
  default: |

    <UIcon name="i-simple-icons-github" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons-discord" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons-x" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons-instagram" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons-linkedin" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons-facebook" class="size-10 shrink-0" />
---
:u-icon{name="i-simple-icons-github" class="size-10 shrink-0"}
:u-icon{name="i-simple-icons-discord" class="size-10 shrink-0"}
:u-icon{name="i-simple-icons-x" class="size-10 shrink-0"}
:u-icon{name="i-simple-icons-instagram" class="size-10 shrink-0"}
:u-icon{name="i-simple-icons-linkedin" class="size-10 shrink-0"}
:u-icon{name="i-simple-icons-facebook" class="size-10 shrink-0"}
::

::tip
アニメーションは、ユーザーが縮小したい場合に自動的に無効になり、コンテンツは静的に表示されます。
::

### ホバーで一時停止

`pause-on-hover`プロパティを使用して、ユーザがコンテンツにカーソルを合わせたときにアニメーションを一時停止します。

::component-code
---
prettier: true
props:
  pauseOnHover: true
slots:
  default: |

    <UIcon name="i-simple-icons-github" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons-discord" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons-x" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons-instagram" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons-linkedin" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons-facebook" class="size-10 shrink-0" />
---
:u-icon{name="i-simple-icons-github" class="size-10 shrink-0"}
:u-icon{name="i-simple-icons-discord" class="size-10 shrink-0"}
:u-icon{name="i-simple-icons-x" class="size-10 shrink-0"}
:u-icon{name="i-simple-icons-instagram" class="size-10 shrink-0"}
:u-icon{name="i-simple-icons-linkedin" class="size-10 shrink-0"}
:u-icon{name="i-simple-icons-facebook" class="size-10 shrink-0"}
::

### Reverse

`reverse`プロパティを使用して、アニメーションの方向を逆にします。

::component-code
---
prettier: true
props:
  reverse: true
slots:
  default: |

    <UIcon name="i-simple-icons-github" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons-discord" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons-x" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons-instagram" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons-linkedin" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons-facebook" class="size-10 shrink-0" />
---
:u-icon{name="i-simple-icons-github" class="size-10 shrink-0"}
:u-icon{name="i-simple-icons-discord" class="size-10 shrink-0"}
:u-icon{name="i-simple-icons-x" class="size-10 shrink-0"}
:u-icon{name="i-simple-icons-instagram" class="size-10 shrink-0"}
:u-icon{name="i-simple-icons-linkedin" class="size-10 shrink-0"}
:u-icon{name="i-simple-icons-facebook" class="size-10 shrink-0"}
::

### Orientation

`orientation`プロパティを使用してスクロール方向を変更します。

::component-code
---
prettier: true
class: 'h-96'
props:
  orientation: 'vertical'
slots:
  default: |

    <UIcon name="i-simple-icons-github" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons-discord" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons-x" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons-instagram" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons-linkedin" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons-facebook" class="size-10 shrink-0" />
---
:u-icon{name="i-simple-icons-github" class="size-10 shrink-0"}
:u-icon{name="i-simple-icons-discord" class="size-10 shrink-0"}
:u-icon{name="i-simple-icons-x" class="size-10 shrink-0"}
:u-icon{name="i-simple-icons-instagram" class="size-10 shrink-0"}
:u-icon{name="i-simple-icons-linkedin" class="size-10 shrink-0"}
:u-icon{name="i-simple-icons-facebook" class="size-10 shrink-0"}
::

### リピート

`repeat`プロパティを使用して、アニメーション内でコンテンツを繰り返す回数を指定します。

::component-code
---
prettier: true
props:
  repeat: 6
slots:
  default: |

    <UIcon name="i-simple-icons-github" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons-discord" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons-x" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons-instagram" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons-linkedin" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons-facebook" class="size-10 shrink-0" />
---
:u-icon{name="i-simple-icons-github" class="size-10 shrink-0"}
:u-icon{name="i-simple-icons-discord" class="size-10 shrink-0"}
:u-icon{name="i-simple-icons-x" class="size-10 shrink-0"}
:u-icon{name="i-simple-icons-instagram" class="size-10 shrink-0"}
:u-icon{name="i-simple-icons-linkedin" class="size-10 shrink-0"}
:u-icon{name="i-simple-icons-facebook" class="size-10 shrink-0"}
::

### オーバーレイ

`overlay`プロパティを使用して、マーキーのエッジにあるグラデーションオーバーレイを削除します。

::component-code
---
prettier: true
props:
  overlay: false
slots:
  default: |

    <UIcon name="i-simple-icons-github" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons-discord" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons-x" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons-instagram" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons-linkedin" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons-facebook" class="size-10 shrink-0" />
---
:u-icon{name="i-simple-icons-github" class="size-10 shrink-0"}
:u-icon{name="i-simple-icons-discord" class="size-10 shrink-0"}
:u-icon{name="i-simple-icons-x" class="size-10 shrink-0"}
:u-icon{name="i-simple-icons-instagram" class="size-10 shrink-0"}
:u-icon{name="i-simple-icons-linkedin" class="size-10 shrink-0"}
:u-icon{name="i-simple-icons-facebook" class="size-10 shrink-0"}
::

## 例

### お客様の声

`Marquee`コンポーネントを使用して、お客様の声の無限スクロールアニメーションを作成します。

::component-example{label="With Items"}
---
prettier: true
name: 'marquee-testimonials'
collapse: true
overflowHidden: true
class: 'px-0'
---
::

### スクリーンショット

`Marquee`コンポーネントを使用して、スクリーンショットの無限スクロールアニメーションを作成します。

::component-example{label="スクリーンショット付き"}
---
prettier: true
name: 'marquee-screenshots'
collapse: true
overflowHidden: true
class: '!p-0'
---
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
