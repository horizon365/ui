---
description: '使用可能なビューポートの高さを埋めるmain要素。'
category: layout
links:
  - label: サイトマップ
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Main.vue
---

## 使用法

Mainコンポーネントは`<main>`要素をレンダリングし、[Header](/docs/components/header)コンポーネントと連携してビューポートの使用可能な高さまで拡張するフルハイトレイアウトを作成します。

::tip{to="/docs/getting-started/theme/css-variables#header"}
MainコンポーネントはCSS変数`--ui-header-height`を使用して、`Header`の下に正しく配置します。
::

## 例

### x`app.vue`内

`app.vue`またはレイアウトでMainコンポーネントを使用します。

```vue [app.vue]{5-9}
<template>
  <UApp>
    <UHeader />

    <UMain>
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </UMain>

    <UFooter />
  </UApp>
</template>
```

## API

### Props

:component-props

### スロット

:component-slots

## Theme

:component-theme

## Changelog

:component-changelog
