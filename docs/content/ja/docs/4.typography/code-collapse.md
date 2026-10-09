---
title: ProseCode Collapse
description: '長いコードブロックを折りたたみ可能にし、スペースを節約します。'
category: components
navigation.title: CodeCollapse
links:
  - label: サイトマップ
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/prose/CodeCollapse.vue
---

## 使用法

コードブロックを`code-collapse`コンポーネントでラップして、折りたたみ可能なコードブロックを表示します。

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
@ import“tailwindcss”；
@ import "@ nuxt/ui"；

@ theme static {
  ——font—sans：'Public Sans'、サンセリフ体；

  ——ブレークポイント—3xl：1920px；

  ——色緑50：#EFFDF5；
  ——色緑100：#D9FBE8；
  ——色緑200：#B3F5D1；
  ——色緑300：#75EDAE；
  ——色緑400 #00DC82；
  ——色緑500 #00C16A；
  ——色緑600 #00A155；
  ——色緑700：#007F45；
  ——カラーグリーン800：#016538；
  ——色緑900：#0A5331；
  ——色緑950：#052E16；
}
```

::
````

::

## API

### Props

:component-props{prose}

### スロット

:component-slots{prose}

## Theme

:component-theme{prose}

## Changelog

:component-changelog{prefix="prose"}
