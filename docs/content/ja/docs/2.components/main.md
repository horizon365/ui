---
description: '使用可能なビューポートの高さを埋めるmain要素。'
category: layout
links:
  - label: サイトマップ
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Main.vue
---

## 使用法

Mainコンポーネントは`<main>`要素をレンダリングし、[ Header ](/docs/components/header)コンポーネントと連携して、ビューポートの使用可能な高さまで拡張されるフルハイトレイアウトを作成します。

::tip{to="/docs/getting-started/theme/css-variables#header"}
MainコンポーネントはCSS変数`--ui-header-height`を使用して、自身を`Header`の下に正しく配置します。
::

## 例

### 内`app.vue`

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

##  API

###  Props

component—props

### スロット

コンポーネントスロット

## テーマ

コンポーネントテーマ

##  Changelog

component—changelog
