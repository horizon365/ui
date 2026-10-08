---
description: ヘッダー、ボディ、フッターでカードのコンテンツを表示します。
category: element
keywords:
  - panel
  - box
  - container
links:
  - label: サイトマップ
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Card.vue
---

## 使用法

`header`、`default`、および`footer`スロットを使用して、カードにコンテンツを追加します。

::component-code
---
きれい真
隠す
  - クラス
小道具
  クラス'w—full'
スロット
  ヘッダー|

    <Placeholder class="h-8" />

  デフォルト|

    <Placeholder class="h-32" />

  フッター|

    <Placeholder class="h-8" />
---

#header
placeholder {class="h-8"}

#デフォルト
placeholder {class="h-32"}

#フッター
placeholder {class="h-8"}
::

### タイトルbadge {label="4.7+" class="align-text-top"}

`title`プロップを使用して、カードのヘッダーのタイトルを設定します。

::component-code
---
きれい真
無視
  - クラス
小道具
  タイトルCard with title
  クラス'w—full'
スロット
  デフォルト|

    <Placeholder class="h-32" />
---

#デフォルト
placeholder {class="h-32"}
::

### 説明badge {label="4.7+" class="align-text-top"}

`description`プロパティを使用して、カードのヘッダーの説明を設定します。

::component-code
---
きれい真
無視
  -  title
  - クラス
小道具
  タイトル：「説明付きカード」
  「Lorem ipsum dolor sit amet consectetur adipiscing elit」
  クラス'w—full'
スロット
  デフォルト|

    <Placeholder class="h-32" />
---

#デフォルト
placeholder {class="h-32"}
::

### バリアント

`variant`プロパティを使用して、カードのバリアントを変更します。

::component-code
---
きれい真
隠す
  - クラス
小道具
  バリアント：微妙
  クラス'w—full'
スロット
  ヘッダー|

    <Placeholder class="h-8" />

  デフォルト|

    <Placeholder class="h-32" />

  フッター|

    <Placeholder class="h-8" />
---

#header
placeholder {class="h-8"}

#デフォルト
placeholder {class="h-32"}

#フッター
placeholder {class="h-8"}
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
