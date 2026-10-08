---
title: ProseSteps (프로스스텝)
description: '제목을 번호가 매겨진 단계별 가이드 및 자습서로 변환합니다.'
category: components
navigation.title: Steps
links:
  - label: Github (GitHub)
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/prose/Steps.vue
---

##  사용

단계 구성요소로 제목을 줄바꿈하여 단계 목록을 표시합니다.

`level`prop을 사용하여 단계에 사용할 머리글을 정의합니다.

:::code-preview{class="[&>div]:*:w-full"}
::steps{level="4"}

####  Nuxt UI 모듈을 `nuxt.config.ts` 에 추가합니다.

```ts [nuxt.config.ts]
export default defineNuxtConfig({
  modules: ['@nuxt/ui']
})
```

####  당신의 CSS에서 Tailwind CSS를 가져오기

```css [app/assets/css/main.css]
@import "tailwindcss";
```

####  개발 서버 시작

```bash
npm run dev
```

::

# 코드

````mdc
::steps{level="4"}

#### Add the Nuxt UI module in your `nuxt.config.ts`

```ts [nuxt.config.ts]
export default defineNuxtConfig({
  modules: ['@nuxt/ui']
})
```

#### Import Tailwind CSS in your CSS

```css [app/assets/css/main.css]
@import "windtailcss";
```

#### Start your development server

```bash
npm 실행 dev
```

::
````

:::

##  API

### Props 이미지

: component-props {prose}

###  슬롯

: component-slots {prose}

##  테마

:component-theme {prose}

##  Changelog

: component-changelog{prefix="prose"}
