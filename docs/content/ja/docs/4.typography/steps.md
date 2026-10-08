---
title: ProseSteps
description: '見出しを番号付きのステップバイステップガイドとチュートリアルに変換します。'
category: components
navigation.title: Steps
links:
  - label: サイトマップ
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/prose/Steps.vue
---

## 使用法

ステップコンポーネントで見出しをラップして、ステップのリストを表示します。

`level`プロパティを使用して、ステップに使用する見出しを定義します。

:::code-preview{class="[&>div]:*:w-full"}
::steps{level="4"}

#### `nuxt.config.ts`にNuxt UIモジュールを追加します。

```ts [nuxt.config.ts]
export default defineNuxtConfig({
  modules: ['@nuxt/ui']
})
```

####  CSSにTailwind CSSをインポート

```css [app/assets/css/main.css]
@import "tailwindcss";
```

#### 開発サーバーを起動します

```bash
npm run dev
```

::

#コード

````mdc
::steps{level="4"}

#### Add the Nuxt UI module in your `nuxt.config.ts`

```ts [nuxt.config.ts]
export defineNuxtConfig {
  モジュール['@ nuxt/ui']
})
```

#### Import Tailwind CSS in your CSS

```css [app/assets/css/main.css]
@ import“tailwindcss”；
```

#### Start your development server

```bash
npm run dev
```

::
````

:::

##  API

###  Props

component—props {prose}

### スロット

component—slots {prose}

## テーマ

component—theme {prose}

##  Changelog

component—changelog {prefix="prose"}
