---
description: '名前、説明、アバターでユーザー情報を表示します。'
category: data
keywords:
  - profile
  - person
  - account
links:
  - label: サイトマップ
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/User.vue
---

## 使用法

### 名前

`name`プロパティを使用して、ユーザの名前を表示します。

::component-code
---
小道具
  名前：'ジョン·ドウ'
---
::

### 説明

`description`プロパティを使用して、ユーザの説明を表示します。

::component-code
---
小道具
  名前：'ジョン·ドウ'
  説明：'ソフトウェアエンジニア'
---
::

### アバター

`avatar` propを使用して、[ Avatar ](/docs/components/avatar)コンポーネントを表示します。

::component-code
---
きれい真
無視
  -  name
  - 説明
小道具
  名前：'ジョン·ドウ'
  説明：'ソフトウェアエンジニア'
  アバター
    src 'https//i.pravatar.cc/150 u = john—doe'
    読み込み怠惰
    アイコンi—lucide—image
---
::

::collapsible{name="all avatar properties"}

::component-props
---
名前アバター
無視
  - サイズ
  -  as
---
::

::

### チップ

`chip` propを使用して、[ Chip ](/docs/components/chip)コンポーネントを表示します。

::component-code
---
きれい真
無視
  -  name
  - 説明
  @@ avatar.src @ ph023 @ avatar.src
アイテム
  chip.color:
    - プライマリ
    - セカンダリ
    - 成功
    -  info
    -  warning
    - エラー
    - ニュートラル
  chip.position:
    - 左上
    - 右上
    -  bottom—left
    -  bottom—right
小道具
  名前：'ジョン·ドウ'
  説明：'ソフトウェアエンジニア'
  avatar.src 'https//i.pravatar.cc/150 u = john—doe'
  チップ
    色'プライマリ'
    位置右上
---
::

::collapsible{name="all chip properties"}

::component-props
---
名前チップ
無視
  -  as
  - サイズ
  - スタンドアロン
---
::

::

### サイズ

`size`プロパティを使用して、ユーザーのアバターとテキストのサイズを変更します。

::component-code
---
きれい真
無視
  - 名前
  - 説明
  @@ avatar.src @ ph042 @ avatar.src
  - チップ
小道具
  名前：'ジョン·ドウ'
  説明：'ソフトウェアエンジニア'
  avatar.src 'https//i.pravatar.cc/150 u = john—doe'
  チップ本当
  サイズXL
---
::

### オリエンテーション

向きを変更するには`orientation`プロパティを使用します。デフォルトは`horizontal`です。

::component-code
---
きれい真
無視
  @@ avatar.src @ ph047 @ avatar.src
小道具
  オリエンテーション'垂直'
  名前：'ジョン·ドウ'
  説明：'ソフトウェアエンジニア'
  avatar.src 'https//i.pravatar.cc/150 u = john—doe'
---
::

### リンク

[`<NuxtLink>`](https://nuxt.com/docs/api/components/nuxt-link)コンポーネントから、`to`、`target`、`rel`などのプロパティを渡すことができます。

::component-code
---
きれい真
無視
  - 名前
  - 説明
  日本語
  - ターゲット
小道具
  「https//github.com/benjamincanac」
  ターゲット'_blank'
  名前：ベンジャミン·カナック
  説明：'ソフトウェアエンジニア'
  avatar.src 'https//github.com/benjamincanac.png'
---
::

::note
`NuxtLink`コンポーネントは、`User`コンポーネントに渡した他のすべての属性を継承します。
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
