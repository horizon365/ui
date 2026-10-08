---
title: ProseCode Tree
description: '構文ハイライトされたコードでファイルとフォルダ構造を視覚化します。'
category: components
navigation.title: CodeTree
links:
  - label: サイトマップ
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/prose/CodeTree.vue
---

## 使用法

コードブロックを`code-tree`コンポーネントでラップして、ファイルのツリービューを表示します。

::code-preview{class="[&>div]:*:my-0 [&>div]:*:w-full"}

::code-tree{defaultValue="app/app.config.ts"}

```ts [nuxt.config.ts]
export default defineNuxtConfig({
  modules: ['@nuxt/ui'],

  css: ['~/assets/css/main.css']
})

```

```css [app/assets/css/main.css]
@import "tailwindcss";
@import "@nuxt/ui";
```

```ts [app/app.config.ts]
export default defineAppConfig({
  ui: {
    colors: {
      primary: 'sky',
      colors: 'slate'
    }
  }
})
```

```vue [app/app.vue]
<template>
  <UApp>
    <NuxtPage />
  </UApp>
</template>
```

```json [package.json]
{
  "name": "nuxt-app",
  "private": true,
  "type": "module",
  "scripts": {
    "build": "nuxt build",
    "dev": "nuxt dev",
    "generate": "nuxt generate",
    "preview": "nuxt preview",
    "postinstall": "nuxt prepare",
    "typecheck": "nuxt typecheck"
  },
  "dependencies": {
    "@iconify-json/lucide": "^1.2.0",
    "@nuxt/ui": "^4.0.0",
    "nuxt": "^4.0.0"
  },
  "devDependencies": {
    "typescript": "^6.0.0",
    "vue-tsc": "^3.2.0"
  }
}
```

```json [tsconfig.json]
{
  "extends": "./.nuxt/tsconfig.json"
}
```

````md [README.md]
# Nuxt 4 Minimal Starter

Look at the [Nuxt 4 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install the dependencies:

```bash
#  npm
npmインストール

#  pnpm
pnpmインストール

#  yarn
ヤーンインストール

#  bun
bunインストール
```

## Development server

Start the development server on `http://localhost:3000`:

```bash
#  npm
npm run dev

メール：info @ pnpm
pnpm run dev

#  yarn
ヤーンdev

#  bun
bun run dev
```

## Production

Build the application for production:

```bash
#  npm
npm run build

#  pnpm
pnpm run build

#  yarn
ヤーンビルド

#  bun
bun runビルド
```

Locally preview production build:

```bash
#  npm
npm runプレビュー

#  pnpm
pnpm実行プレビュー

#  yarn
ヤーンプレビュー

#  bun
bun runプレビュー
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
````

::

#コード

::code-collapse{class="[&>div>pre]:rounded-t-none [&>div]:my-0"}

`````mdc
::code-tree{defaultValue="app/app.config.ts"}

```ts [nuxt.config.ts]
export defineNuxtConfig {
  modules ['@ nuxt/ui']

  css ['～/assets/css/main.css']
})

```

```css [app/assets/css/main.css]
@ import“tailwindcss”；
@ import "@ nuxt/ui"；
```

```ts [app/app.config.ts]
export defineAppConfig {
  UI {
    色{
      主なものは「空」
      色'スレート'
    }
  }
})
```

```vue [app/app.vue]
<template>
  <UApp>
    <NuxtPage />
  </UApp>
</template>
```

```json [package.json]
{
  "name""nuxt—app"
  "private" true
  "type""module"
  "スクリプト"{
    "build""nuxt build"
    "dev""nuxt dev"
    "generate""nuxt generate"
    "preview""nuxt preview"
    "postinstall""nuxt prepare"
    "typecheck""nuxt typecheck"
  },
  "依存関係"{
    "@ iconify—json/lucide""^1.2.0"
    "@ nuxt/ui""^4.0.0"
    "nuxt""^4.0.0"
  },
  "devDependencies"{
    "typescript""^6.0.0"
    "vue—tsc""^3.2.0"
  }
}
```

```json [tsconfig.json]
{
  "extends""./. nuxt/tsconfig.json"
}
```

````md [README.md]
#  Nuxt 4最小スターター

詳細については、[ Nuxt 4ドキュメント](https://nuxt.com/docs/getting-started/introduction)をご覧ください。

## セットアップ

依存関係をインストールしてください：

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## 開発サーバ

`http://localhost:3000`で開発サーバーを起動します。

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn dev

# bun
bun run dev
```

## プロダクション

本番用アプリケーションをビルドする：

```bash
# npm
npm run build

# pnpm
pnpm run build

# yarn
yarn build

# bun
bun run build
```

ローカルプレビュープロダクションビルド：

```bash
# npm
npm run preview

# pnpm
pnpm run preview

# yarn
yarn preview

# bun
bun run preview
```

詳細については、[ deployment documentation ](https://nuxt.com/docs/getting-started/deployment)を参照してください。
````

::
`````

::

::

::note{to="/docs/typography/code#code-blocks"}
`ProsePre`コンポーネントと同様に、`CodeTree`はファイル名、アイコン、コピーボタンを処理します。
::

##  API

###  Props

component—props {prose}

### スロット

component—slots {prose}

## テーマ

component—theme {prose}

##  Changelog

component—changelog {prefix="prose"}
