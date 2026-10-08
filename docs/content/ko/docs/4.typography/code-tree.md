---
title: ProseCodeTree (프로세코드트리)
description: '구문 강조 표시된 코드를 사용하여 파일 및 폴더 구조를 시각화합니다.'
category: components
navigation.title: CodeTree
links:
  - label: Github (GitHub)
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/prose/CodeTree.vue
---

##  사용

코드 블록을 `code-tree` 구성 요소로 특정 순서로 래핑하여 파일의 트리 뷰를 표시합니다.Wrap your code blocks with a `code-tree` component in any particular order to display a tree view of your files.

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
npm install 설치

#  pnpm
pnpm 설치

#  yarn
YARN 설치

#  bun
bun install 설치
```

## Development server

Start the development server on `http://localhost:3000`:

```bash
#  npm
npm 실행 dev

#  pnpm
pnpm run dev 실행

#  yarn
Yarn 개발

#  bun
Bun Run 개발
```

## Production

Build the application for production:

```bash
#  npm
npm 실행 빌드

#  pnpm
Pnpm 실행 빌드

#  yarn
실 제작.

#  bun
Bun Run 빌드
```

Locally preview production build:

```bash
#  npm
npm 실행 미리보기

#  pnpm
pnpm 실행 미리 보기

#  yarn
원사 미리보기

#  bun
bun run 미리보기
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
````

::

# 코드

::code-collapse{class="[&>div>pre]:rounded-t-none [&>div]:my-0"}

`````mdc
::code-tree{defaultValue="app/app.config.ts"}

```ts [nuxt.config.ts]
export default defineNuxtConfig({
  modules: ['@nuxt/ui'],

  css: ['~/assets/css/main.css']
})

```

```css [app/assets/css/main.css]
@import "windtailcss";
@import "@nuxt/ui";
```

```ts [app/app.config.ts]
export default defineAppConfig({
  ui: {
    색상 : {
      사진: "sky"
      색상 : slate
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
  이름 : nuxt-app
  "개인": 사실,
  "type": "module", "module",
  "scripts": {
    "build": "nuxt build",
    "dev": "nuxt dev",
    "generate": "nuxt generate", "nuxt generate",
    "preview": "nuxt preview",
    "postinstall": "nuxt prepare",
    "typecheck": "nutxt typecheck": "nutxt typecheck"(텍스트 형식 검사)
  },
  "dependencies" : {
    "@iconify-json/lucide": "^1.2.0",
    "@nuxt/ui": "^4.0.0",
    "nuxt": ^4.0.0"
  },
  "devDependencies" : {
    "typescript": "^6.0.0",
    "vue-tsc": ^3.2.0"
  }
}
```

```json [tsconfig.json]
{
  "extends": "./.nuxt/tsconfig.json"
}
```

````md [README.md]
# Nuxt 4 최소 스타터

자세한 내용은 [Nuxt 4 documentation](https://nuxt.com/docs/getting-started/introduction)를 참조하십시오.

##  설정

종속성을 설치하려면 다음과 같이 하십시오.Make sure to install dependencies:

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

## 개발 서버

`http://localhost:3000`에서 개발 서버 시작:

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

##  프로덕션

프로덕션용 응용 프로그램을 빌드하려면 다음과 같이 하십시오.

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

프로덕션 빌드를 로컬로 미리 보기:

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

자세한 내용은 [deployment documentation](https://nuxt.com/docs/getting-started/deployment)를 참조하십시오.
````

::
`````

::

::

::note{to="/docs/typography/code#code-blocks"}
`ProsePre` 구성 요소와 마찬가지로 `CodeTree`는 파일 이름, 아이콘 및 복사 버튼을 처리합니다.
::

##  API

### Props 이미지

: component-props {prose}

###  슬롯

:component-slots {prose}

##  테마

:component-theme {prose}

##  Changelog

: component-changelog{prefix="prose"}
