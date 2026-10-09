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

PricingTableコンポーネントは、テーブル形式で価格プランを表示するための応答性とカスタマイズ性の高い方法を提供します。比較しやすいデスクトップ上の水平のテーブルレイアウトと、読みやすいモバイル上の垂直のカードライアウトを自動的に切り替えます。

::code-preview

::u-pricing-table
---
tiers:
  - id: 'solo'
    title: 'Solo'
    description: 'For indie hackers.'
    price: '$249'
    billingCycle: '/month'
    billingPeriod: 'billed annually'
    badge: 'Most popular'
    button:
      label: 'Buy now'
      variant: 'subtle'
  - id: 'team'
    title: 'Team'
    description: 'For growing teams.'
    price: '$499'
    billingCycle: '/month'
    billingPeriod: 'billed annually'
    button:
      label: 'Buy now'
    highlight: true
  - id: 'enterprise'
    title: 'Enterprise'
    description: 'For large organizations.'
    price: 'Custom'
    button:
      label: 'Contact sales'
      color: 'neutral'
sections:
  - title: 'Features'
    features:
      - title: 'Number of developers'
        tiers:
          solo: '1'
          team: '5'
          enterprise: 'Unlimited'
      - title: 'Projects'
        tiers:
          solo: true
          team: true
          enterprise: true
      - title: 'GitHub repository access'
        tiers:
          solo: true
          team: true
          enterprise: true
      - title: 'Updates'
        tiers:
          solo: 'Patch & minor'
          team: 'All updates'
          enterprise: 'All updates'
      - title: 'Support'
        tiers:
          solo: 'Community'
          team: 'Priority'
          enterprise: '24/7'
  - title: 'Security'
    features:
      - title: 'SSO'
        tiers:
          solo: false
          team: true
          enterprise: true
      - title: 'Audit logs'
        tiers:
          solo: false
          team: true
          enterprise: true
      - title: 'Custom security review'
        tiers:
          solo: false
          team: false
          enterprise: true
---
::

::

### Tier

`tiers`プロパティをオブジェクトの配列として使用して、料金プランを定義します。各階層オブジェクトは以下のプロパティをサポートします。

- `id: string`{lang="ts-type"}—階層の一意の識別子（必須）
- `title?: string`{lang="ts-type"}—料金プラン名
- `description?: string`{lang="ts-type"}—プランの簡単な説明
- `price?: string`{lang="ts-type"}—プランの現在の価格（例："$99"、"€ 99"、"Free"）
- `discount?: string`{lang="ts-type"}—`price`がストライクスルー付きで表示される割引価格例"$79""€ 79"
- `billingCycle?: string`{lang="ts-type"}—価格の横に表示される単価期間（例："/month"、"/seat/month"）
- `billingPeriod?: string`{lang="ts-type"}—請求サイクルの上に表示される追加の請求コンテキスト（例：“毎月請求”）。
- `badge?: string | BadgeProps`{lang="ts-type"}—タイトル`{ color: 'primary', variant: 'subtle' }`{lang="ts-type"}の横にバッジを表示する
- `button?: ButtonProps`{lang="ts-type"}—CTAボタンの設定`{ size: 'lg', block: true }`{lang="ts-type"}
- `highlight?: boolean`{lang="ts-type"}—推奨オプションとしてこの階層を視覚的に強調するかどうか

::component-code
---
prettier: true
collapse: true
external:
  - tiers
externalTypes:
  - PricingTableTier[]
hide:
  - class
ignore:
  - tiers
props:
  tiers:
    - id: 'solo'
      title: 'Solo'
      description: 'For indie hackers.'
      price: '$249'
      billingCycle: '/month'
      billingPeriod: 'billed annually'
      badge: 'Most popular'
      button:
        label: 'Buy now'
        variant: 'subtle'
    - id: 'team'
      title: 'Team'
      description: 'For growing teams.'
      price: '$499'
      billingCycle: '/month'
      billingPeriod: 'billed annually'
      button:
        label: 'Buy now'
      highlight: true
    - id: 'enterprise'
      title: 'Enterprise'
      description: 'For large organizations.'
      price: 'Custom'
      button:
        label: 'Contact sales'
        color: 'neutral'
  class: 'border-b border-default'
---
::

### セクション

`sections`プロパティを使用して、機能を論理グループに編成します。各セクションは、異なる価格帯で比較したい機能のカテゴリを表します。

- `title: string`{lang="ts-type"}—フィーチャーセクションの見出し
- `features: PricingTableSectionFeature[]`{lang="ts-type"}—各階層で利用可能な機能の配列：
  - 各機能には、階層IDを値にマッピングする`title`と`tiers`オブジェクトが必要です。
  - Boolean値`true`/`false`はチェックマーク✓またはマイナスアイコン—として表示されます。
  - Stringの値はテキストとして表示されます例"Unlimited""Max to 5 users"
  - 数値はそのまま表示されます（例：10、100）

::component-code
---
prettier: true
collapse: true
external:
  - tiers
  - sections
externalTypes:
  - PricingTableTier[]
  - PricingTableSection[]
hide:
  - class
ignore:
  - tiers
  - sections
props:
  tiers:
    - id: 'solo'
      title: 'Solo'
      price: '$249'
      description: 'For indie hackers.'
      billingCycle: '/month'
      button:
        label: 'Buy now'
        variant: 'subtle'
    - id: 'team'
      title: 'Team'
      price: '$499'
      description: 'For growing teams.'
      billingCycle: '/month'
      button:
        label: 'Buy now'
    - id: 'enterprise'
      title: 'Enterprise'
      price: 'Custom'
      description: 'For large organizations.'
      button:
        label: 'Contact sales'
        color: 'neutral'
  sections:
    - title: 'Features'
      features:
        - title: 'Number of developers'
          tiers:
            solo: '1'
            team: '5'
            enterprise: 'Unlimited'
        - title: 'Projects'
          tiers:
            solo: true
            team: true
            enterprise: true
    - title: 'Security'
      features:
        - title: 'SSO'
          tiers:
            solo: false
            team: true
            enterprise: true
---
::

## サンプル

### スロット付き

PricingTableコンポーネントは、コンテンツの表示を調整するための強力なスロットカスタマイズオプションを提供します。汎用スロットを使用して個々の要素をカスタマイズしたり、IDを使用して特定のアイテムをターゲットにしたりできます。

::component-example
---
prettier: true
name: 'pricing-table-slots-example'
collapse: true
---
::

カスタマイズの柔軟性を最大限に高めるため、さまざまなスロットタイプをサポート。

| スロットタイプ|パターン|説明|例|
|-----------|---------|-------------|---------|
| **Tierスロット**| `#{tier-id}-{element}`|ターゲット特定階層|`#team-title`、`#solo-price`|
| **セクションスロット**| `#section-{id\|formatted-title}-title`|対象セクション|`#section-features-title`|
| **フィーチャースロット**| `#feature-{id\|formatted-title}-{title\|value}`|ターゲット固有の機能|`#feature-developers-title`|
| **汎用スロット**| `#tier-title`、`#section-title`など|すべての項目に適用|`#feature-value`|

::note
`id`が指定されていない場合、スロット名はタイトルから自動生成されます（例：“Premium Features！”は`#section-premium-features-title`になります）。
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
