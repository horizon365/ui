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

## Usage

단계 구성요소로 제목을 줄바꿈하여 단계 목록을 표시합니다.

`level` prop을 사용하여 단계에 사용할 제목을 정의합니다.

:::code-preview{class="[&>div]:*:w-full"}
::steps{level="4"}

#### x`nuxt.config.ts`에 Nuxt UI 모듈 추가

```ts [nuxt.config.ts]
export default defineNuxtConfig({
  modules: ['@nuxt/ui']
})
```

#### Import 당신의 CSS에 Tailwind CSS

```css [app/assets/css/main.css]
@import "tailwindcss";
```

#### 개발 서버를 시작합니다.

```bash
npm run dev
```

::

#code

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

## API

### Props 코드

:component-props{prose}

### Slots

:component-slots{prose}

## Theme 테마

:component-theme{prose}

## 변경 로그

:component-changelog{prefix="prose"}
