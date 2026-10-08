---
title: ChangelogVersions
description: 'タイムラインに変更履歴バージョンのリストを表示します。'
category: page
links:
  - label: サイトマップ
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/ChangelogVersions.vue
---

## 使用 法

ChangelogVersions コンポーネント は 、[ChangelogVersion](/docs/components/changelog-version))コンポーネント の リスト を 表示 する 柔軟 な レイアウト を 提供 し ます 。

```vue {2,8}
<template>
  <UChangelogVersions>
    <UChangelogVersion
      v-for="(version, index) in versions"
      :key="index"
      v-bind="version"
    />
  </UChangelogVersions>
</template>
```

### バージョン

`versions`prop を 、[ChangelogVersion](/docs/components/changelog-version#props)コンポーネント の プロ パティ を 持つ オブジェクト の 配列 として 使用 し ます 。

::component-code
---
崩壊 真
無視
  - バージョン
外部
  - バージョン
externalTypes
  - ChangelogVersionProps [ ]
隠す
  - クラス
小道具
  バージョン
    - title Nuxt 3.17
      説明Nuxt 3.17 が リリース さ れ まし た 。 非 同期 データレイヤー の 大幅 な 改良 、 新しい 組み込み コンポーネント 、 より 良い 警告 、 パフォーマンス の 向上 が 含ま れ て い ます 。
      画像https://nuxt.com/assets/blog/v3.17.png
      日 付 2025 - 04 - 27
      へ ' https//nuxt.com/blog/v3 - 17 '
      ターゲット ' _blank '
      ui . コンテナ ' max-w-lg '
    - title Nuxt 3.16
      説明 ： ' Nuxt 3.16 が リリース さ れ まし た - 機能 と パフォーマンス の 改善 が 満載 ! '
      画像https://nuxt.com/assets/blog/v3.16.png
      日 付 2025 - 03 - 07
      へ ' https//nuxt.com/blog/v3 - 16 '
      ターゲット ' _blank '
      ui . コンテナ ' max-w-lg '
    - title Nuxt 3.15
      説明 ： ' Nuxt 3.15 が リリース さ れ まし た -Vite 6 、 より 良い HMR と 高速 な パフォーマンス ! '
      画像https://nuxt.com/assets/blog/v3.15.png
      日 付 2024 - 12 - 24
      へ ' https//nuxt.com/blog/v3 - 15 '
      ターゲット ' _blank '
      ui . コンテナ ' max-w-lg '
  クラス ' w-full '
---
::

### インジケータ

`indicator`プロ パティ を 使用 し て 、 左側 の インジケータバー を 非 表示 に し ます 。 デフォルト は`true`です 。

::component-code
---
崩壊 真
無視
  - バージョン
外部
  - バージョン
externalTypes
  - ChangelogVersionProps [ ]
隠す
  - クラス
小道具
  インジケータ 偽
  バージョン
    - title Nuxt 3.17
      説明Nuxt 3.17 が リリース さ れ まし た 。 非 同期 データレイヤー の 大幅 な 改良 、 新しい 組み込み コンポーネント 、 より 良い 警告 、 パフォーマンス の 向上 が 含ま れ て い ます 。
      画像https://nuxt.com/assets/blog/v3.17.png
      日 付 2025 - 04 - 27
      へ ' https//nuxt.com/blog/v3 - 17 '
      ターゲット ' _blank '
      ui . コンテナ ' max-w-lg '
    - title Nuxt 3.16
      説明 ： ' Nuxt 3.16 が リリース さ れ まし た - 機能 と パフォーマンス の 改善 が 満載 ! '
      画像https://nuxt.com/assets/blog/v3.16.png
      日 付 2025 - 03 - 07
      へ ' https//nuxt.com/blog/v3 - 16 '
      ターゲット ' _blank '
      ui . コンテナ ' max-w-lg '
    - title Nuxt 3.15
      説明 ： ' Nuxt 3.15 が リリース さ れ まし た -Vite 6 、 より 良い HMR と 高速 な パフォーマンス ! '
      画像https://nuxt.com/assets/blog/v3.15.png
      日 付 2024 - 12 - 24
      へ ' https//nuxt.com/blog/v3 - 15 '
      ターゲット ' _blank '
      ui . コンテナ ' max-w-lg '
  クラス ' w-full '
---
::

### インジケーター モーション

`indicator-motion`プロ パティ を 使用 し て 、 インジケータバー の モーション エフェクト を カスタマイズ また は 非 表示 に し ます 。 デフォルト は`true``{ damping: 30, restDelta: 0.001 }`[spring 遷移 オプション](https://motion.dev/docs/vue-transitions#spring)です 。

::component-code
---
崩壊 真
無視
  - バージョン
外部
  - バージョン
externalTypes
  - ChangelogVersionProps [ ]
隠す
  - クラス
アイテム
  indicatorMotion
    - true
    - false
小道具
  indicatorMotion true
  バージョン
    - title Nuxt 3.17
      説明Nuxt 3.17 が リリース さ れ まし た 。 非 同期 データレイヤー の 大幅 な 改良 、 新しい 組み込み コンポーネント 、 より 良い 警告 、 パフォーマンス の 向上 が 含ま れ て い ます 。
      画像https://nuxt.com/assets/blog/v3.17.png
      日 付 2025 - 04 - 27
      へ ' https//nuxt.com/blog/v3 - 17 '
      ターゲット ' _blank '
      ui . コンテナ ' max-w-lg '
    - title Nuxt 3.16
      説明 ： ' Nuxt 3.16 が リリース さ れ まし た - 機能 と パフォーマンス の 改善 が 満載 ! '
      画像https://nuxt.com/assets/blog/v3.16.png
      日 付 2025 - 03 - 07
      へ ' https//nuxt.com/blog/v3 - 16 '
      ターゲット ' _blank '
      ui . コンテナ ' max-w-lg '
    - title Nuxt 3.15
      説明 ： ' Nuxt 3.15 が リリース さ れ まし た -Vite 6 、 より 良い HMR と 高速 な パフォーマンス ! '
      画像https://nuxt.com/assets/blog/v3.15.png
      日 付 2024 - 12 - 24
      へ ' https//nuxt.com/blog/v3 - 15 '
      ターゲット ' _blank '
      ui . コンテナ ' max-w-lg '
  クラス ' w-full '
---
::

## 例

::note
これら の 例 で は[Nuxt Content](https://content.nuxt.com)を 使用 し て い ます が 、 コンポーネント は 任意 の コンテンツ 管理 システム と 統合 でき ます 。
::

### ページ 内

ページ 内 の ChangelogVersions コンポーネント を 使用 し て 、 変更 履歴 ページ を 作成 し ます 。

```vue [pages/changelog.vue]{10-17}
<script setup lang="ts">
const { data: versions } = await useAsyncData('versions', () => queryCollection('versions').all())
</script>

<template>
  <UPage>
    <UPageHero title="Changelog" />

    <UPageBody>
      <UChangelogVersions>
        <UChangelogVersion
          v-for="(version, index) in versions"
          :key="index"
          v-bind="version"
          :to="version.path"
        />
      </UChangelogVersions>
    </UPageBody>
  </UPage>
</template>
```

::note
この 例 で は 、`@nuxt/content`モジュール の`queryCollection`を 使用 し て`versions`を 取得 し て い ます 。
::

::tip
`@nuxt/content`は`path`プロ パティ を 使用 し て いる ため 、`to`プロ パティ は 上書き さ れ ます 。
::

### 粘着 性 インジケータ 付き

`ui` propと異なるスロットを使用して、インジケータをスティッキーにすることができます。

::component-example
---
きれい真
崩壊真
名前'changelog—versions—sticky'
クラス'p—8'
小道具
  クラス'w—full'
---
::

### スクロールコンテナ付き：badge {label="4.4+" class="align-text-top"}

スクロールコンテナを構成するために、`indicator` propにオブジェクトを渡します。デフォルトでは、インジケータはウィンドウ/ページのスクロールを追跡しますhttps//motion.dev/docs/vue—use—scroll #page—scroll。

```vue
<script setup lang="ts">
const scrollContainer = ref<HTMLElement>()
</script>

<template>
  <div ref="scrollContainer" class="max-h-96 overflow-y-auto">
    <UChangelogVersions v-if="scrollContainer" :indicator="{ container: scrollContainer }" />
  </div>
</template>
```

::warning
カスタム`container`を使用する場合は、コンテナ要素が`UChangelogVersions`の前にマウントされていることを確認してください。
::

##  API

###  Props

component—props

### スロット

コンポーネントスロット

::tip
[`ChangelogVersion`](/docs/components/changelog-version#slots))コンポーネントのすべてのスロットを使用できます。`versions` propを使用するときに個々のバージョンをカスタマイズできるように自動的に転送されます。

```vue{3-5}
<template>
  <UChangelogVersions :versions="versions">
    <template #body="{ version }">
      <Markdown :value="version.content" />
    </template>
  </UChangelogVersions>
</template>
```
::

## テーマ

コンポーネントテーマ

##  Changelog

component—changelog
