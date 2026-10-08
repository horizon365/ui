---
title: 料金プラン
description: '料金プランのリストをレスポンシブグリッドレイアウトで表示します。'
category: page
links:
  - label: サイトマップ
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/PricingPlans.vue
---

## 使用法

PricingPlansコンポーネントは、[ PricingPlan ](/docs/components/pricing-plan)コンポーネントのリストを、デフォルトスロットまたは`plans` propを使用して表示する柔軟なレイアウトを提供します。

```vue {2,8}
<template>
  <UPricingPlans>
    <UPricingPlan
      v-for="(plan, index) in plans"
      :key="index"
      v-bind="plan"
    />
  </UPricingPlans>
</template>
```

::tip
グリッド列は計画の数に基づいて自動的に計算されます。これは`plans` propで動作しますが、デフォルトスロットでも動作します。
::

### プラン

`plans` propを、[ PricingPlan ](/docs/components/pricing-plan#props)コンポーネントのプロパティを持つオブジェクトの配列として使用します。

::component-code
---
崩壊真
無視
  - プラン
外部
  - プラン
externalTypes
  -  PricingPlanProps []
小道具
  プラン：
    -  titleソロ
      説明：「インディーハッカーのためのテーラード」
      価格'$249'
      特徴
        - '開発者1名
        - '生涯アクセス'
      ボタン
        ラベル'今すぐ購入'
    -  titleスタートアップ
      説明：「小規模チームに最適」
      価格'$499'
      特徴
        - '最大5人の開発者'
        - 'ソロのすべて'
      ボタン
        ラベル'今すぐ購入'
    -  title組織
      説明：'より大きなチームや組織に最適です。
      価格'$999'
      特徴
        - '最大20名の開発者
        - 'スタートアップのすべて'
      ボタン
        ラベル'今すぐ購入'
---
::

### オリエンテーション

`orientation`プロパティを使用してPricingPlansの向きを変更します。デフォルトは`horizontal`です。

::component-code
---
崩壊真
隠す
  - クラス
無視
  - プラン
外部
  - プラン
externalTypes
  -  PricingPlanProps []
小道具
  オリエンテーション垂直
  プラン：
    -  titleソロ
      説明：「インディーハッカーのためのテーラード」
      価格'$249'
      特徴
        - '開発者1名
        - '生涯アクセス'
      ボタン
        ラベル'今すぐ購入'
    -  titleスタートアップ
      説明：「小規模チームに最適」
      価格'$499'
      特徴
        - '最大5人の開発者'
        - 'ソロでのすべて'
      ボタン
        ラベル'今すぐ購入'
    -  title組織
      説明：'より大きなチームや組織に最適です。
      価格'$999'
      特徴
        - '最大20名の開発者
        - 'スタートアップのすべて'
      ボタン
        ラベル'今すぐ購入'
  クラス'w—full'
---
::

::tip
デフォルトスロットの代わりに`plans` propを使用すると、プランの`orientation`は自動的に逆になり、`horizontal`から`vertical`、その逆も同様です。
::

### コンパクト

`compact`プロパティを使用して、1つのプランが視覚的なバランスを改善するために拡大縮小されたときに、プラン間のパディングを減らします。

::component-code
---
崩壊真
無視
  - プラン
  -  compact
外部
  - プラン
externalTypes
  -  PricingPlanProps []
クラス'p—8'
小道具
  コンパクト真
  プラン：
    -  titleソロ
      説明：「インディーハッカーのためのテーラード」
      価格'$249'
      特徴
        - '開発者1名
        - '生涯アクセス'
      ボタン
        ラベル'今すぐ購入'
    -  titleスタートアップ
      説明：「小規模チームに最適」
      価格'$499'
      スケール本当の
      特徴
        - '最大5人の開発者'
        - 'ソロのすべて'
      ボタン
        ラベル'今すぐ購入'
    -  title組織
      説明：'より大きなチームや組織に最適です。
      価格'$999'
      特徴
        - '最大20名の開発者
        - 'スタートアップのすべて'
      ボタン
        ラベル'今すぐ購入'
---
::

### スケール

`scale`プロパティを使用して、1つのプランが拡大縮小されて視覚的なバランスを改善するときに、プラン間の間隔を調整します。

::component-code
---
崩壊真
無視
  - プラン
  - スケール
外部
  - プラン
externalTypes
  -  PricingPlanProps []
クラス'p—8'
小道具
  スケール本当の
  プラン：
    -  titleソロ
      説明：「インディーハッカーのためのテーラード」
      価格'$249'
      特徴
        - '開発者1名
        - '生涯アクセス'
      ボタン
        ラベル'今すぐ購入'
    -  titleスタートアップ
      説明：「小規模チームに最適」
      価格'$499'
      スケール本当の
      特徴
        - '最大5人の開発者'
        - 'ソロのすべて'
      ボタン
        ラベル'今すぐ購入'
    -  title組織
      説明：'より大きなチームや組織に最適です。
      価格'$999'
      特徴
        - '最大20名の開発者
        - 'スタートアップのすべて'
      ボタン
        ラベル'今すぐ購入'
---
::

## 例

::note
これらの例では[ Nuxt Content ](https://content.nuxt.com)を使用していますが、コンポーネントは任意のコンテンツ管理システムと統合できます。
::

### ページ内

ページでPricingPlansコンポーネントを使用して、価格ページを作成します。

```vue [pages/pricing/index.vue]{11}
<script setup lang="ts">
const { data: plans } = await useAsyncData('plans', () => queryCollection('plans').all())
</script>

<template>
  <UPage>
    <UPageHero title="Pricing" />

    <UPageBody>
      <UContainer>
        <UPricingPlans :plans="plans" />
      </UContainer>
    </UPageBody>
  </UPage>
</template>
```

::note
この例では、`@nuxt/content`モジュールの`queryCollection`を使用して`plans`を取得しています。
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
