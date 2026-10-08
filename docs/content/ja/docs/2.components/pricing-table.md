---
title: PricingTable
description: '機能比較とともに階層的な価格プランを表示するレスポンシブな価格表コンポーネント。'
category: page
links:
  - label: サイトマップ
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/PricingTable.vue
---

## 使用法

PricingTableコンポーネントは、テーブル形式で価格プランを表示するための応答性とカスタマイズ性の高い方法を提供します。比較しやすいデスクトップ上の水平テーブルレイアウトと、読みやすいモバイル上の垂直カードレイアウトを自動的に切り替えます。

::code-preview

::u-pricing-table
---
階層
  -  id 'solo'
    title 'ソロ'
    説明：「インディーハッカーのために」
    価格'$249'
    billingCycle '/month'
    billingPeriod：「毎年請求」
    バッジ'人気のある'
    ボタン
      ラベル'今すぐ購入'
      バリアント：'微妙'
  -  id 'team'
    title 'チーム'
    説明：「成長するチームのために」
    価格'$499'
    billingCycle '/month'
    billingPeriod：「毎年請求」
    ボタン
      ラベル'今すぐ購入'
    ハイライト真
  -  id 'エンタープライズ'
    title 'エンタープライズ'
    説明：「大規模な組織向け」
    価格'カスタム'
    ボタン
      ラベル'接触販売'
      色'中立'
セクション
  -  title '特徴'
    特徴
      -  title '開発者数'
        階層
          ソロ'1'
          チーム：'5'
          エンタープライズ'無制限'
      -  title 'プロジェクト'
        階層
          ソロtrue
          チーム：true
          エンタープライズ真
      -  title 'GitHubリポジトリアクセス'
        階層
          ソロtrue
          チーム：真
          エンタープライズ真
      -  title 'アップデート'
        階層
          solo 'パッチマイナー'
          チーム：'すべてのアップデート'
          エンタープライズ'すべての更新'
      -  title 'サポート'
        階層
          solo：'コミュニティ'
          チーム：'Priority'
          企業'24/7'
  -  title 'セキュリティ'
    特徴
      -  title 'SSO'
        階層
          ソロfalse
          チーム：真
          エンタープライズ真
      -  title '監査ログ'
        階層
          ソロfalse
          チーム：真
          エンタープライズ真
      -  title 'カスタムセキュリティレビュー'
        階層
          ソロfalse
          チーム：false
          エンタープライズ真
---
::

::

###  Tiers

`tiers`プロパティをオブジェクトの配列として使用して、料金プランを定義します。各階層オブジェクトは以下のプロパティをサポートします。

- `id: string`{lang="ts-type"}—階層の一意の識別子（必須）
- `title?: string`{lang="ts-type"}—料金プラン名
- `description?: string`{lang="ts-type"}—計画の短い説明
- `price?: string`{lang="ts-type"}—プランの現在の価格（例："$99"、"€ 99"、"Free"）
- `discount?: string`{lang="ts-type"}—`price`をストライクスルーで表示する割引価格（例："$79"、"€ 79"）
- `billingCycle?: string`{lang="ts-type"}—価格の横に表示される単価期間（例："/month"、"/seat/month"）
- `billingPeriod?: string`{lang="ts-type"}—請求サイクルの上に表示される追加の請求コンテキスト（例：「毎月請求」）
- `badge?: string | BadgeProps`{lang="ts-type"}—タイトル`{ color: 'primary', variant: 'subtle' }`{lang="ts-type"}の横にバッジを表示
- `button?: ButtonProps`{lang="ts-type"}—CTAボタンを設定`{ size: 'lg', block: true }`{lang="ts-type"}
- `highlight?: boolean`{lang="ts-type"}—推奨オプションとしてこの階層を視覚的に強調するかどうか

::component-code
---
きれい真
崩壊真
外部
  - ティア
externalTypes
  -  PricingTableTier []
隠す
  - クラス
無視
  - ティア
小道具
  階層
    -  id 'solo'
      title 'ソロ'
      説明：「インディーハッカーのために」
      価格'$249'
      billingCycle '/month'
      billingPeriod：「毎年請求」
      バッジ'人気のある'
      ボタン
        ラベル'今すぐ購入'
        バリアント：'微妙'
    -  id 'team'
      title 'チーム'
      説明：「成長するチームのために」
      価格'$499'
      billingCycle '/month'
      billingPeriod：「毎年請求」
      ボタン
        ラベル'今すぐ購入'
      ハイライト真
    -  id 'エンタープライズ'
      title 'エンタープライズ'
      説明：「大規模な組織向け」
      価格'カスタム'
      ボタン
        ラベル'接触販売'
        色'中立'
  クラス'border—b border—default'
---
::

### セクション

`sections`プロパティを使用して、機能を論理グループに整理します。各セクションは、異なる価格帯で比較したい機能のカテゴリを表します。

- `title: string`{lang="ts-type"}—機能セクションの見出し
- `features: PricingTableSectionFeature[]`{lang="ts-type"}—各階層で利用可能な機能の配列：
  - 各機能には、階層IDを値にマッピングする`title`と`tiers`オブジェクトが必要です。
  - ブール値`true`/`false`はチェックマーク✓またはマイナスアイコン—として表示されます。
  - 文字列の値はテキストで表示されます（例：「無制限」、「最大5ユーザー」）
  - 数値はそのまま表示されます（例：10、100）

::component-code
---
きれい真
崩壊真
外部
  - ティア
  - セクション
externalTypes
  -  PricingTableTier []
  -  PricingTableセクション[]
隠す
  - クラス
無視
  - ティア
  - セクション
小道具
  階層
    -  id 'solo'
      title 'ソロ'
      価格'$249'
      説明：「インディーハッカーのために」
      billingCycle '/month'
      ボタン
        ラベル'今すぐ購入'
        バリアント：'微妙'
    -  id 'team'
      title 'チーム'
      価格'$499'
      説明：「成長するチームのために」
      billingCycle '/month'
      ボタン
        ラベル'今すぐ購入'
    -  id 'エンタープライズ'
      title 'エンタープライズ'
      価格'カスタム'
      説明：「大規模な組織向け」
      ボタン
        ラベル'接触販売'
        色'ニュートラル'
  セクション
    -  title '特徴'
      特徴
        -  title '開発者数'
          階層
            ソロ'1'
            チーム：'5'
            エンタープライズ'無制限'
        -  title 'プロジェクト'
          階層
            ソロtrue
            チーム：真
            エンタープライズ真
    -  title 'セキュリティ'
      特徴
        -  title 'SSO'
          階層
            ソロfalse
            チーム：真
            エンタープライズ真
---
::

## 例

### スロット付き

PricingTableコンポーネントは、コンテンツの表示を調整するための強力なスロットカスタマイズオプションを提供します。汎用スロットを使用して個々の要素をカスタマイズしたり、IDを使用して特定のアイテムをターゲットにしたりできます。

::component-example
---
きれい真
名前'pricing—table—slots—example'
崩壊真
---
::

コンポーネントはカスタマイズの柔軟性を最大限に高めるためにさまざまなスロットタイプをサポート。

| スロットタイプ|パターン|説明|例|
|-----------|---------|-------------|---------|
| **ティアスロット**| `#{tier-id}-{element}`|ターゲット特定階層|`#team-title``#solo-price`|
| **セクションスロット**| `#section-{id\|formatted-title}-title`|対象セクション|`#section-features-title`|
| **フィーチャースロット**| `#feature-{id\|formatted-title}-{title\|value}`|ターゲット固有の機能|`#feature-developers-title`|
| **ジェネリックスロット**| `#tier-title`、`#section-title`など|すべての項目に適用|`#feature-value`|

::note
`id`が指定されていない場合、スロット名はタイトルから自動生成されます（例：「Premium Features！」は`#section-premium-features-title`になります）。
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
