---
title: Prosécurité Collapse
description: 'Rendre les blocs de code longs pliables pour économiser de l'espace et améliorer la lisibilité.'
category: components
navigation.title: CodeCollapse
links:
  - label: GitHub à
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/prose/CodeCollapse.vue
---

@@ph000@@utilisation

Enveloppez votre bloc de code avec un composant `code-collapse` pour afficher un bloc de code pliable.

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
@ import "développeur";
@ import "@ nuxt/ui";

@ thème statique {
  - -font-sans:'Public Sans', sans-serif;

  - -breakpoint-3xl: 1920px;

  - -color-green-50:#EFFDF5;
  - -color-green-100:#D9FBE8;
  - -color-green-200:#B3F5D1;
  - -color-green-300:#75EDAE;
  - -color-green-400:#00DC82;
  - -color-green-500:#00C16A;
  - -color-green-600:#00A155;
  - -color-green-700:#007F45;
  - -color-green-800:#016538;
  - -color-green-900:#0A5331;
  - -color-green-950:#052E16;
}
```

::
````

::

@@ph032@api

@@333@propriétés

: composant-props {prose}

### Slots

: composant {prose}

@@ph037@thème

: composant-thème {prose}

@changement@changement@changement.com

: composant-changelog {prefix="prose"}
