---
title: ProseCodeCollapse
description: '使长代码块可折叠以节省空间并提高可读性。'
category: components
navigation.title: CodeCollapse
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/prose/CodeCollapse.vue
---

## 用法

使用`code-collapse`组件包装代码块以显示可折叠的代码块。

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
@import“tailwindcss”;
@import“@nuxt/ui”;

@theme static {
  --font-sans：'Public Sans'，sans-serif;

  --breakpoint-3xl：1920px;

  --color-green-50：#00DF5;
  --color-green-100：#D9FBE8;
  --color-green-200：#B3F5D1;
  --color-green-300：#75EDAE;
  --color-green-400：#00DC82;
  --color-green-500：#00C16A;
  --color-green-600：#00A155;
  --color-green-700：#007F45;
  --color-green-800：#016538;
  --color-green-900：#0A5331;
  --color-green-950：#052E16;
}
```

::
````

::

## API

### Props

:component-props{prose}

### 老虎机

:component-slots{prose}

## Theme

:component-theme{prose}

## Changelog

:component-changelog{prefix="prose"}
