---
title: ProseCodeSamenvouwen
description: 'Maak lange codeblokken inklapbaar om ruimte te besparen en de leesbaarheid te verbeteren.'
category: components
navigation.title: CodeCollapse
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/prose/CodeCollapse.vue
---

## Gebruik

Wikkel je codeblok in met een `code-collapse`-component om een opvouwbaar codeblok weer te geven.

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
@ import "staartwindcss";
@ import "@ nuxt / ui";

@ thema statisch {
--font-sans: 'Openbaar zonder', zonder serif;

--breekpunt-3xl: 1920px;

--kleur-groen-50: # EFFDF5;
--kleur-groen-100: # D9FBE8;
--kleur-groen-200: # B3F5D1;
--kleur-groen-300: # 75EDAE;
--kleur-groen-400: # 00DC82;
--kleur-groen-500: # 00C16A;
--kleur-groen-600: # 00A155;
--kleur-groen-700: # 007F45;
--kleur-groen-800: # 016538;
--kleur-groen-900: # 0A5331;
--kleur-groen-950: # 052E16;
}
```

::
````

::

## API

### Props

:component-props{prose}

### Slots

:component-slots{prose}

## Thema

:component-theme{prose}

## Wijzigingsgelog

:component-changelog{prefix="prose"}
