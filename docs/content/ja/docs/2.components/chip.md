---
description: 数値または状態の指標。
category: element
keywords:
  - notification dot
  - status dot
links:
  - label: サイトマップ
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Chip.vue
---

## 使用法

任意のコンポーネントをチップでラップしてインジケータを表示します。

::component-code
---
きれい真
スロット
  デフォルト|

    <UButton icon="i-lucide-mail" color="neutral" variant="subtle" />
---
u—button {icon="i-lucide-mail" color="neutral" variant="subtle"}
::

### カラー

`color`プロパティを使用して、チップの色を変更します。

::component-code
---
きれい真
小道具
  色ニュートラル
スロット
  デフォルト|

    <UButton icon="i-lucide-mail" color="neutral" variant="subtle" />
---
uボタン{icon="i-lucide-mail" color="neutral" variant="subtle"}
::

### サイズ

`size`プロパティを使用して、チップのサイズを変更します。

::component-code
---
きれい真
小道具
  サイズ3xl
スロット
  デフォルト|

    <UButton icon="i-lucide-mail" color="neutral" variant="subtle" />
---
uボタン{icon="i-lucide-mail" color="neutral" variant="subtle"}
::

### テキスト

`text` propを使用して、チップのテキストを設定します。

::component-code
---
きれい真
小道具
  テキスト5
  サイズ3xl
スロット
  デフォルト|

    <UButton icon="i-lucide-mail" color="neutral" variant="subtle" />
---
uボタン{icon="i-lucide-mail" color="neutral" variant="subtle"}
::

### ポジション

`position` propを使用して、チップの位置を変更します。

::component-code
---
きれい真
小道具
  位置'左下'
スロット
  デフォルト|

    <UButton icon="i-lucide-mail" color="neutral" variant="subtle" />
---
u—button {icon="i-lucide-mail" color="neutral" variant="subtle"}
::

### インセット

`inset`プロパティを使用して、コンポーネント内のチップを表示します。これは丸みを帯びたコンポーネントを扱う場合に便利です。

::component-code
---
きれい真
小道具
  インセットtrue
スロット
  デフォルト|

    <UAvatar src="https://github.com/benjamincanac.png" loading="lazy" />
---
u—avatar {src="https://github.com/benjamincanac.png" loading="lazy"}
::

### スタンドアロン

Chipをインラインで表示するには、`inset` propと一緒に`standalone` propを使用します。

::component-code
---
小道具
  スタンドアロン本当
  インセットtrue
---
::

::note
[`CommandPalette`](/docs/components/command-palette)[`InputMenu`](/docs/components/input-menu)[`Select`](/docs/components/select)または[`SelectMenu`](/docs/components/select-menu)コンポーネントなどです。
::

## 例

### 制御可視性

`show` propを使用してチップの可視性を制御できます。

component—example {name="chip-show-example"}

::note
この例では、チップはステータスごとに色を持ち、ステータスが`offline`でない場合に表示されます。
::

##  API

###  Props

component—props

### スロット

コンポーネントスロット

### エミッツ

component—emits

## テーマ

コンポーネントテーマ

##  Changelog

component—changelog
