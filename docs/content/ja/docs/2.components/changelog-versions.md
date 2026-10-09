---
title: ChangelogVersions
description: 'タイムラインに変更履歴バージョンのリストを表示します。'
category: page
links:
  - label: サイトマップ
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/ChangelogVersions.vue
---

## 使用法

ChangelogVersionsコンポーネントは、[ChangelogVersion](/docs/components/changelog-version)コンポーネントのリストを、デフォルトスロットまたは`versions` propを使用して表示する柔軟なレイアウトを提供します。

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

### Versions

`versions`プロパティを[ChangelogVersion](/docs/components/changelog-version#props)コンポーネントのプロパティを持つオブジェクトの配列として使用します。

::component-code
---
collapse: true
ignore:
  - versions
external:
  - versions
externalTypes:
  - ChangelogVersionProps[]
hide:
  - class
props:
  versions:
    - title: Nuxt 3.17
      description: 'Nuxt 3.17 is out - bringing a major reworking of the async data layer, a new built-in component, better warnings, and performance improvements!'
      image: https://nuxt.com/assets/blog/v3.17.png
      date: 2025-04-27
      to: 'https://nuxt.com/blog/v3-17'
      target: '_blank'
      ui.container: 'max-w-lg'
    - title: Nuxt 3.16
      description: 'Nuxt 3.16 is out - packed with features and performance improvements!'
      image: https://nuxt.com/assets/blog/v3.16.png
      date: 2025-03-07
      to: 'https://nuxt.com/blog/v3-16'
      target: '_blank'
      ui.container: 'max-w-lg'
    - title: Nuxt 3.15
      description: 'Nuxt 3.15 is out - with Vite 6, better HMR and faster performance!'
      image: https://nuxt.com/assets/blog/v3.15.png
      date: 2024-12-24
      to: 'https://nuxt.com/blog/v3-15'
      target: '_blank'
      ui.container: 'max-w-lg'
  class: 'w-full'
---
::

### Indicator

`indicator`プロパティを使用して左側のインディケータバーを非表示にします。デフォルトは`true`です。

::component-code
---
collapse: true
ignore:
  - versions
external:
  - versions
externalTypes:
  - ChangelogVersionProps[]
hide:
  - class
props:
  indicator: false
  versions:
    - title: Nuxt 3.17
      description: 'Nuxt 3.17 is out - bringing a major reworking of the async data layer, a new built-in component, better warnings, and performance improvements!'
      image: https://nuxt.com/assets/blog/v3.17.png
      date: 2025-04-27
      to: 'https://nuxt.com/blog/v3-17'
      target: '_blank'
      ui.container: 'max-w-lg'
    - title: Nuxt 3.16
      description: 'Nuxt 3.16 is out - packed with features and performance improvements!'
      image: https://nuxt.com/assets/blog/v3.16.png
      date: 2025-03-07
      to: 'https://nuxt.com/blog/v3-16'
      target: '_blank'
      ui.container: 'max-w-lg'
    - title: Nuxt 3.15
      description: 'Nuxt 3.15 is out - with Vite 6, better HMR and faster performance!'
      image: https://nuxt.com/assets/blog/v3.15.png
      date: 2024-12-24
      to: 'https://nuxt.com/blog/v3-15'
      target: '_blank'
      ui.container: 'max-w-lg'
  class: 'w-full'
---
::

### インジケーターモーション

`indicator-motion`プロパティを使用して、インジケータバーのモーションエフェクトをカスタマイズまたは非表示にします。デフォルトは`true`で、`{ damping: 30, restDelta: 0.001 }` [spring遷移オプション](https://motion.dev/docs/vue-transitions#spring)です。

::component-code
---
collapse: true
ignore:
  - versions
external:
  - versions
externalTypes:
  - ChangelogVersionProps[]
hide:
  - class
items:
  indicatorMotion:
    - true
    - false
props:
  indicatorMotion: true
  versions:
    - title: Nuxt 3.17
      description: 'Nuxt 3.17 is out - bringing a major reworking of the async data layer, a new built-in component, better warnings, and performance improvements!'
      image: https://nuxt.com/assets/blog/v3.17.png
      date: 2025-04-27
      to: 'https://nuxt.com/blog/v3-17'
      target: '_blank'
      ui.container: 'max-w-lg'
    - title: Nuxt 3.16
      description: 'Nuxt 3.16 is out - packed with features and performance improvements!'
      image: https://nuxt.com/assets/blog/v3.16.png
      date: 2025-03-07
      to: 'https://nuxt.com/blog/v3-16'
      target: '_blank'
      ui.container: 'max-w-lg'
    - title: Nuxt 3.15
      description: 'Nuxt 3.15 is out - with Vite 6, better HMR and faster performance!'
      image: https://nuxt.com/assets/blog/v3.15.png
      date: 2024-12-24
      to: 'https://nuxt.com/blog/v3-15'
      target: '_blank'
      ui.container: 'max-w-lg'
  class: 'w-full'
---
::

## の例

::note
これらの例は[Nuxt Content](https://content.nuxt.com)を使用していますが、コンポーネントは任意のコンテンツ管理システムと統合できます。
::

### ページ内

ページ内のChangelogVersionsコンポーネントを使用して、変更履歴ページを作成します。

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
この例では、`@nuxt/content`モジュールの`queryCollection`を使用して`versions`をフェッチします。
::

::tip
`@nuxt/content`は`path`プロパティを使用するため、`to`プロパティはオーバーライドされます。
::

### 粘着性インジケータ付き

`ui`プロパティと異なるスロットを使用して、インジケータをスティッキーにすることができます。

::component-example
---
prettier: true
collapse: true
name: 'changelog-versions-sticky-example'
class: 'p-8'
props:
  class: 'w-full'
---
::

### スクロールコンテナ付きbadge{label="4.4+" class="align-text-top"}

`indicator`プロパティにオブジェクトを渡してスクロールコンテナを設定します。デフォルトでは、インジケータはウィンドウ/ページスクロールを追跡しますhttps//motion.dev/docs/vue—use—scroll #page—scroll。

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
カスタム`container`を使用する場合は、コンテナ要素が`UChangelogVersions`よりも前にマウントされていることを確認してください。
::

## API

### Props

:component-props

### スロット

:component-slots

::tip
[`ChangelogVersion`](/docs/components/changelog-version#slots)コンポーネントのすべてのスロットはChangelogVersions内で使用できます。これらのスロットは自動的に転送されるので、`versions` propを使用する際に個々のバージョンをカスタマイズできます。

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

## Theme

:component-theme

## Changelog

:component-changelog
