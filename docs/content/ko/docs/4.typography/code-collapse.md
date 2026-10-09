---
title: ProseCodeCollapse (프로세코드 축소)
description: '긴 코드 블록을 축소 가능하게 만들어 공간을 절약하고 가독성을 향상시킵니다.'
category: components
navigation.title: CodeCollapse
links:
  - label: Github (GitHub)
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/prose/CodeCollapse.vue
---

## Usage

축소 가능한 코드 블록을 표시하려면 `code-collapse` 구성 요소로 코드 블록을 래핑합니다.

::code-preview{class="[&>div]:*:my-0 [&>div]:*:w-full"}

::code-collapse{class="[&>div]:my-0"}

```css [app/assets/css/main.css]
@import "tailwindcss";
@import "@nuxt/ui";

@theme static {
  --font-sans: 'Public Sans', sans-serif;

  --breakpoint-3xl: 1920px;

  --color-green-50: #EFFDF5;
  --color-green-100: #D9FBE8;
  --color-green-200: #B3F5D1;
  --color-green-300: #75EDAE;
  --color-green-400: #00DC82;
  --color-green-500: #00C16A;
  --color-green-600: #00A155;
  --color-green-700: #007F45;
  --color-green-800: #016538;
  --color-green-900: #0A5331;
  --color-green-950: #052E16;
}
```

::

#code

````mdc
::code-collapse

```css [app/assets/css/main.css]
@import "windtailcss";
@import "@nuxt/ui";

@theme 정적 {
  --font-sans: 'Public Sans', 'Sans-serif' 등의 글을 게재했다.

  -breakpoint-3xl:1920px; // breakpoint-3xl: 1920px;

  색상 - 녹색 - 50: #EFFDF5;
  색상 - 녹색 - 100 : #D9FBE8;
  색상 - 녹색 - 200 : #B3F5D1;
  -- 색상 - 녹색 - 300 : #75EDAE;
  색상 - 녹색 - 400 : #00DC82;
  색상 - 녹색 - 500 : #00C16A;
  색상 - 녹색 - 600 : #00A155;
  색상 - 녹색 - 700 : #007F45;
  색상 - 녹색 - 800 : #016538;
  색상 - 녹색 - 900: #0A5331;
  색상 - 녹색 - 950 : #052E16;
}
```

::
````

::

## API

### Props (### Props)

:component-props{prose}

### Slots

:component-slots{prose}

## Theme 주제

:component-theme{prose}

## 변경 로그

:component-changelog{prefix="prose"}
