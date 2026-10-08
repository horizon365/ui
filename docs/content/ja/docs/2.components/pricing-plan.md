---
title: 料金プラン
description: '価格ページに表示されるカスタマイズ可能な価格プラン。'
category: page
links:
  - label: サイトマップ
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/PricingPlan.vue
---

## 使用法

PricingPlanコンポーネントは、タイトル、説明、価格、機能などのカスタマイズ可能なコンテンツを含む価格プランを柔軟に表示する方法を提供します。

::code-preview

::u-pricing-plan
---
title 'ソロ'
説明：'ブートストラッパーとインディーハッカーのために'
価格'$249'
割引'$199'
billing—cycle '/month'
バッジ'人気のある'
特徴
  - '一人の開発者
  - '無制限のプロジェクト'
  - 'GitHubリポジトリへのアクセス'
  - '無制限のパッチ&マイナーアップデート'
  - '生涯アクセス'
ボタン
  ラベル'今すぐ購入'
クラス'w—96'
---
::

::

::tip{to="/docs/components/pricing-plans"}
`PricingPlans`コンポーネントを使用して、レスポンシブなグリッドレイアウトで複数の料金プランを表示します。
::

### タイトル

`title`プロパティを使用してPricingPlanのタイトルを設定します。

::component-code
---
無視
  - クラス
小道具
  title 'ソロ'
  クラス'w—96'
---
::

### 説明

`description`プロパティを使用して、PricingPlanの説明を設定します。

::component-code
---
隠す
  - クラス
無視
  -  title
小道具
  title 'ソロ'
  説明：'ブートストラッパーとインディーハッカーのために'
  クラス'w—96'
---
::

### バッジ

`badge`プロップを使用して、PricingPlanのタイトルの横に[ Badge ](/docs/components/badge)を表示します。

::component-code
---
きれい真
隠す
  - クラス
無視
  -  title
  - 説明
小道具
  title 'ソロ'
  説明：'ブートストラッパーとインディーハッカーのために'
  バッジ'人気のある'
  クラス'w—96'
---
::

[ Badge ](/docs/components/badge#props)コンポーネントから任意のプロパティを渡してカスタマイズできます。

::component-code
---
きれい真
隠す
  - クラス
無視
  -  title
  - 説明
  -  badge.label
  -  badge.color
  -  badge.variant
小道具
  title 'ソロ'
  説明：'ブートストラッパーとインディーハッカーのために'
  バッジ
    ラベル'最も人気のある'
    色'ニュートラル'
    バリアント'固体'
  クラス'w—96'
---
::

### 価格

`price`プロパティを使用してPricingPlanの価格を設定します。

::component-code
---
きれい真
隠す
  - クラス
無視
  -  title
  - 説明
小道具
  title 'ソロ'
  説明：'ブートストラッパーとインディーハッカーのために'
  価格'$249'
  クラス'w—96'
---
::

### 割引

`discount`プロップを使用して、元の価格と一緒に表示される割引価格を設定しますこれはストライクスルーで表示されます。

::component-code
---
きれい真
隠す
  - クラス
無視
  -  title
  - 説明
小道具
  title 'ソロ'
  説明：'ブートストラッパーとインディーハッカーのために'
  価格'$249'
  割引'$199'
  クラス'w—96'
---
::

### 請求

PricingPlanの請求情報を表示するには、`billing-cycle`および/または`billing-period` propsを使用します。

::component-code
---
きれい真
隠す
  - クラス
無視
  -  title
  - 説明
小道具
  title 'ソロ'
  説明：'ブートストラッパーとインディーハッカーのために'
  価格'$9'
  billingCycle '/month'
  billingPeriod：「毎年請求」
  クラス'w—96'
---
::

### 特徴

`features`プロパティを文字列の配列として使用して、PricingPlanに機能のリストを表示します。

::component-code
---
きれい真
隠す
  - クラス
無視
  -  title
  - 説明
  - 価格
  - 機能
小道具
  title 'ソロ'
  説明：'ブートストラッパーとインディーハッカーのために'
  価格'$249'
  特徴
    - '開発者1名
    - '無制限のプロジェクト'
    - 'GitHubリポジトリへのアクセス'
    - '無制限のパッチ&マイナーアップデート'
    - '生涯アクセス'
  クラス'w—96'
---
::

::framework-only
#nuxt
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
このアイコンは、`ui.icons.success`キーの下の`app.config.ts`でグローバルにカスタマイズできます。
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
このアイコンは、`ui.icons.success`キーの下の`vite.config.ts`でグローバルにカスタマイズできます。
:::
::

次のプロパティを持つオブジェクトの配列を渡すこともできます：

- `title: string`{lang="ts-type"}
- `icon?: string`{lang="ts-type"}

::component-code
---
きれい真
隠す
  - クラス
外部
  - 特徴
externalTypes
  -  PricingPlanFeature []
無視
  -  title
  - 説明
  - 価格
  - 特徴
小道具
  title 'ソロ'
  説明：'ブートストラッパーとインディーハッカーのために'
  価格'$249'
  特徴
    -  title '一人の開発者'
      アイコンi—lucide—user
    -  title '無制限プロジェクト'
      アイコンi—lucide—infinity
    -  title 'GitHubリポジトリへのアクセス'
      アイコンi—lucide—github
    -  title '無制限のパッチ&マイナーアップデート'
      アイコンi—lucide—resh—cw
    -  title '生涯アクセス'
      アイコンi—lucide—clock
  クラス'w—96'
---
::

### ボタン

PricingPlanの下部にボタンを表示するには、[ Button ](/docs/components/button)コンポーネントの任意のプロパティを`button` propを使用します。

::component-code
---
きれい真
隠す
  - クラス
無視
  -  title
  - 説明
  - 価格
  - 機能
小道具
  title 'ソロ'
  説明：'ブートストラッパーとインディーハッカーのために'
  価格'$249'
  特徴
    - '開発者1名
    - '無制限のプロジェクト'
    - 'GitHubリポジトリへのアクセス'
    - '無制限のパッチ&マイナーアップデート'
    - '生涯アクセス'
  ボタン
    ラベル'今すぐ購入'
  クラス'w—96'
---
::

::tip
`onClick`フィールドを使用して、プラン購入をトリガーするクリックハンドラーを追加します。
::

### バリアント

`variant`プロパティを使用して、PricingPlanのバリアントを変更します。

::component-code
---
きれい真
隠す
  - クラス
無視
  -  title
  - 説明
  - 価格
  - 機能
  -  button.label
小道具
  title 'ソロ'
  説明：'ブートストラッパーとインディーハッカーのために'
  価格'$249'
  特徴
    - '開発者1名
    - '無制限プロジェクト'
    - 'GitHubリポジトリへのアクセス'
    - '無制限のパッチ&マイナーアップデート'
    - '生涯アクセス'
  ボタン
    ラベル'今すぐ購入'
  バリアント：'微妙'
  クラス'w—96'
---
::

### オリエンテーション

PricingPlanの向きを変更するには、`orientation`プロパティを使用します。デフォルトは`vertical`です。

::component-code
---
きれい真
隠す
  - クラス
無視
  -  title
  - 説明
  - 価格
  - 機能
  -  button.label
小道具
  title 'ソロ'
  説明：'ブートストラッパーとインディーハッカーのために'
  価格'$249'
  特徴
    - '開発者1名
    - '無制限のプロジェクト'
    - 'GitHubリポジトリへのアクセス'
    - '生涯アクセス'
  ボタン
    ラベル'今すぐ購入'
  オリエンテーション水平
  variant 'outline'
  クラス'w—full'
---
::

### タグライン

`tagline`プロパティを使用して、価格の上にタグラインテキストを表示します。

::component-code
---
きれい真
隠す
  - クラス
無視
  -  title
  - 説明
  - 価格
  - 機能
  -  button.label
  - オリエンテーション
小道具
  title 'ソロ'
  説明：'ブートストラッパーとインディーハッカーのために'
  価格'$249'
  特徴
    - '開発者1名
    - '無制限のプロジェクト'
    - 'GitHubリポジトリへのアクセス'
    - '生涯アクセス'
  ボタン
    ラベル'今すぐ購入'
  オリエンテーション水平
  キャッチコピーは「一度払えば永遠に所有する」
  クラス'w—full'
---
::

### 利用規約

`terms`プロパティを使用して、価格以下の条件を表示します。

::component-code
---
きれい真
隠す
  - クラス
無視
  -  title
  - 説明
  - 価格
  - 機能
  -  button.label
  - オリエンテーション
  - タグライン
小道具
  title 'ソロ'
  説明：'ブートストラッパーとインディーハッカーのために'
  価格'$249'
  特徴
    - '開発者1名
    - '無制限のプロジェクト'
    - 'GitHubリポジトリへのアクセス'
    - '生涯アクセス'
  ボタン
    ラベル'今すぐ購入'
  オリエンテーション水平
  キャッチコピーは「一度払えば永遠に所有する」
  用語：'利用可能な請求書と領収書。'
  クラス'w—full'
---
::

### ハイライト

`highlight`プロパティを使用して、PricingPlanの周りにハイライトされた境界線を表示します。

::component-code
---
きれい真
隠す
  - クラス
無視
  -  title
  - 説明
  - 価格
  - 機能
  -  button.label
小道具
  title 'ソロ'
  説明：'ブートストラッパーとインディーハッカーのために'
  価格'$249'
  特徴
    - '開発者1名
    - '無制限のプロジェクト'
    - 'GitHubリポジトリへのアクセス'
    - '無制限のパッチ&マイナーアップデート'
    - '生涯アクセス'
  ボタン
    ラベル'今すぐ購入'
  ハイライト真
  クラス'w—96'
---
::

### スケール

`scale`プロパティを使用して、PricingPlanを他のものよりも大きくします。

::note{to="/docs/components/pricing-plans#scale"}
PricingPlansの`scale`の例を見て、それだけではデモンストレーションが難しいので、どのように動作するかを確認してください。
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
