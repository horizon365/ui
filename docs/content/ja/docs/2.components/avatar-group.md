---
title: AvatarGroup
description: 複数のアバターをグループに積み重ねる。
category: element
keywords:
  - stacked avatars
  - faces
  - members
links:
  - label: サイトマップ
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/AvatarGroup.vue
---

## 使用法

複数の[ Avatar ](/docs/components/avatar)をAvatarGroup内でラップしてスタックします。

::component-code
---
きれい真
スロット
  デフォルト|

    <UAvatar src="https://github.com/benjamincanac.png" alt="Benjamin Canac" />
    <UAvatar src="https://github.com/HugoRCD.png" alt="Hugo Richard" />
    <UAvatar src="https://github.com/atinux.png" alt="Sébastien Chopin" />
---
u—avatar {src="https://github.com/benjamincanac.png" alt="Benjamin Canac"}
u—avatar {src="https://github.com/HugoRCD.png" alt="Hugo Richard"}
u—avatar {src="https://github.com/atinux.png" alt="Sébastien Chopin"}
::

### サイズ

`size`プロパティを使用して、すべてのアバターのサイズを変更します。

::component-code
---
きれい真
小道具
  サイズXL
スロット
  デフォルト|

    <UAvatar src="https://github.com/benjamincanac.png" alt="Benjamin Canac" loading="lazy" />
    <UAvatar src="https://github.com/HugoRCD.png" alt="Hugo Richard" loading="lazy" />
    <UAvatar src="https://github.com/atinux.png" alt="Sébastien Chopin" loading="lazy" />
---
u—avatar {src="https://github.com/benjamincanac.png" alt="Benjamin Canac" loading="lazy"}
u—avatar {src="https://github.com/HugoRCD.png" alt="Hugo Richard" loading="lazy"}
u—avatar {src="https://github.com/atinux.png" alt="Sébastien Chopin" loading="lazy"}
::

###  Max

`max`プロパティを使用して、表示されるアバターの数を制限します。残りは`+X`アバターとして表示されます。

::component-code
---
きれい真
小道具
  最高2
スロット
  デフォルト|

    <UAvatar src="https://github.com/benjamincanac.png" alt="Benjamin Canac" loading="lazy" />
    <UAvatar src="https://github.com/HugoRCD.png" alt="Hugo Richard" loading="lazy" />
    <UAvatar src="https://github.com/atinux.png" alt="Sébastien Chopin" loading="lazy" />
---
u—avatar {src="https://github.com/benjamincanac.png" alt="Benjamin Canac" loading="lazy"}
u—avatar {src="https://github.com/HugoRCD.png" alt="Hugo Richard" loading="lazy"}
u—avatar {src="https://github.com/atinux.png" alt="Sébastien Chopin" loading="lazy"}
::

### 色バッジ{label="4.8+" class="align-text-top"}

`color`プロパティを使用して、すべてのアバターの色を変更します。

::component-code
---
きれい真
小道具
  色プライマリ
スロット
  デフォルト|

    <UAvatar alt="Benjamin Canac" />
    <UAvatar alt="Hugo Richard" />
    <UAvatar alt="Sébastien Chopin" />
---
u—avatar {alt="Benjamin Canac"}
u—avatar {alt="Hugo Richard"}
u—avatar {alt="Sébastien Chopin"}
::

## 例

### ツールチップ付き

各アバターを[ Tooltip ](/docs/components/tooltip)でラップして、ホバー時にツールチップを表示します。

component—example {name="avatar-group-tooltip-example"}

### チップ付き

各アバターを[ Chip ](/docs/components/chip)で包むと、アバターの周りにチップが表示されます。

component—example {name="avatar-group-chip-example"}

### リンク付き

各アバターを[ Link ](/docs/components/link)でラップしてクリック可能にします。

component—example {name="avatar-group-link-example"}

### マスク付き

アバターをCSSマスクでラップして、カスタム形状で表示します。

component—example {name="avatar-group-mask-example"}

::warning
`chip` propがマスク使用時に正しく動作しません。マスク形状によってはチップがカットされる場合があります。
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
