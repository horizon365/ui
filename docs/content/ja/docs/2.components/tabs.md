---
description: 一度に1つずつ表示されるタブパネルのセット。
category: navigation
keywords:
  - tabbed
  - panels
  - sections
links:
  - label: タブズ
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/tabs
  - label: サイトマップ
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Tabs.vue
---

## 使用法

タブコンポーネントを使用して、タブ内の項目のリストを表示します。

::component-example
---
崩壊真
きれい真
名前'tabs—example'
小道具
  クラス'w—full'
---
::

### アイテム

`items` propを、次のプロパティを持つオブジェクトの配列として使用します。

- `label?: string`{lang="ts-type"}
- `icon?: string`{lang="ts-type"}
- `avatar?: AvatarProps`{lang="ts-type"}
- `badge?: string | number | BadgeProps`{lang="ts-type"}
- `content?: string`{lang="ts-type"}
- `value?: string | number`{lang="ts-type"}
- `disabled?: boolean`{lang="ts-type"}
- [`slot?: string`{lang="ts-type"}](#with-custom-slot)
- `class?: any`{lang="ts-type"}
- `ui?: { trigger?: ClassNameValue, leadingIcon?: ClassNameValue, leadingAvatar?: ClassNameValue, leadingAvatarSize?: ClassNameValue, label?: ClassNameValue, trailingBadge?: ClassNameValue, trailingBadgeSize?: ClassNameValue, content?: ClassNameValue }`{lang="ts-type"}

::component-code
---
無視
  - アイテム
  - クラス
外部
  - アイテム
externalTypes
  -  TabsItem []
小道具
  アイテム
    -  labelアカウント
      アイコン'i—lucide—user'
      内容：「これがアカウントの内容です。
    -  labelパスワード
      アイコン'i—lucide—lock'
      content：'これはパスワードの内容です。
  クラス'w—full'
---
::

### コンテンツ

パネルなしでトリガーをレンダリングするには、`content` propを`false`に設定します。デフォルトは`true`です。

::component-code
---
無視
  - コンテンツ
  - アイテム
  - クラス
外部
  - アイテム
externalTypes
  -  TabsItem []
小道具
  コンテンツfalse
  アイテム
    -  labelアカウント
      アイコン'i—lucide—user'
      内容：「これがアカウントの内容です。
    -  labelパスワード
      アイコン'i—lucide—lock'
      content：'これはパスワードの内容です。
  クラス'w—full'
---
::

### アンマウント

タブが折りたたまれたときにコンテンツがアンマウントされないようにするには、`unmount-on-hide`プロパティを使用します。デフォルトは`true`です。

::component-code
---
無視
  - コンテンツ
  - アイテム
  - クラス
外部
  - アイテム
externalTypes
  -  TabsItem []
小道具
  unmountOnHide false
  アイテム
    -  labelアカウント
      アイコン'i—lucide—user'
      内容：「これがアカウントの内容です。
    -  labelパスワード
      アイコン'i—lucide—lock'
      content：'これはパスワードの内容です。
  クラス'w—full'
---
::

::note
DOMを検査して、各項目のコンテンツがレンダリングされていることを確認できます。
::

### カラー

タブの色を変更するには、`color`プロパティを使用します。

::component-code
---
無視
  - コンテンツ
  - アイテム
  - クラス
外部
  - アイテム
externalTypes
  -  TabsItem []
小道具
  色ニュートラル
  コンテンツfalse
  アイテム
    -  labelアカウント
    -  labelパスワード
  クラス'w—full'
---
::

### バリアント

タブのバリアントを変更するには、`variant`プロパティを使用します。

::component-code
---
無視
  - コンテンツ
  - アイテム
  - クラス
外部
  - アイテム
externalTypes
  -  TabsItem []
小道具
  色ニュートラル
  バリアントリンク
  コンテンツfalse
  アイテム
    -  labelアカウント
    -  labelパスワード
  クラス'w—full'
---
::

### サイズ

タブのサイズを変更するには、`size`プロパティを使用します。

::component-code
---
無視
  - コンテンツ
  - アイテム
  - クラス
外部
  - アイテム
externalTypes
  -  TabsItem []
小道具
  サイズMD
  バリアントピル
  コンテンツfalse
  アイテム
    -  labelアカウント
    -  labelパスワード
  クラス'w—full'
---
::

### オリエンテーション

タブの向きを変更するには、`orientation`プロパティを使用します。デフォルトは`horizontal`です。

::component-code
---
無視
  - コンテンツ
  - アイテム
  - クラス
外部
  - アイテム
externalTypes
  -  TabsItem []
小道具
  オリエンテーション垂直
  バリアントピル
  コンテンツfalse
  アイテム
    -  labelアカウント
    -  labelパスワード
  クラス'w—full'
---
::

## 例

###  Controlアクティブ項目

`default-value` propまたは`v-model`ディレクティブを使用して、アクティブなアイテムを制御できます。`value`が指定されていない場合、デフォルトでは**としてインデックス**になります。

：component—example {name="tabs-model-value-example"}

::tip
`v-model`または`default-value`が指定された場合に、アイテムにマッチするために使用されるキーを変更するには、`value-key`プロパティを使用します。
::

### ルートクエリ付き

項目の`value`として`route.query.tab`を使用して、URLクエリパラメータでアクティブな項目を制御できます。

component—example {name="tabs-route-query-example"}

### コンテンツスロット付き

`#content`スロットを使用して、各項目の内容をカスタマイズします。

component—example {name="tabs-content-slot-example"}

### 下部タブバー付き

`ui` propを使用して、タブをYouTubeやInstagramのようなアイコンと小さなラベル付きのモバイルスタイルの下部タブバーに変換します。

::component-example
---
崩壊真
名前'tabs—bottom—tab—bar'
---
::

### カスタムスロット付き

特定の項目をカスタマイズするには、`slot`プロパティを使用します。

以下のスロットにアクセスできます：

- `#{{ item.slot }}`{lang="ts-type"}

::component-example
---
崩壊真
名前'tabs—custom—slot—example'
---
::

##  API

###  Props

component—props

### スロット

コンポーネントスロット

###  Emits

component—emits

###  Expose

テンプレート参照を介してコンポーネントにアクセスする場合、以下を使用できます：

| 名前|タイプ|
| ---- | ---- |
| `triggersRef`{lang="ts-type"}| `Ref<ComponentPublicInstance[]>`{lang="ts-type"}|

## テーマ

コンポーネントテーマ

##  Changelog

component—changelog
