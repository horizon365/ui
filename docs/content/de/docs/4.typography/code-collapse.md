---
title: ProseCodeCollapse Ubersetzungen
description: 'Machen Sie lange Code-Blöcke zusammenklappbar, um Platz zu sparen und die Lesbarkeit zu verbessern.'
category: components
navigation.title: CodeCollapse
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/prose/CodeCollapse.vue
---

## Bearbeiten

Wickeln Sie Ihren Code-Block mit einer `code-collapse`-Komponente ein, um einen zusammenklappbaren Code-Block anzuzeigen.

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
@ import "tailwindcss";
@ import "@ nuxt/ui";

@ static {Bearbeiten}
  - -font-sans:'Public Sans', serifenlose Schrift;

  - -breakpoint-3xl: 1920px;-Haltepunkt-3xl: 1920px;

  - -grün-50:#EFFDF5;
  - -grün-100:#D9FBE8;
  - -grün-200:#B3F5D1;
  - -grün-300:#75EDAE;
  - -grün-400:#00DC82;
  - -grün-500:#00C16A;
  - -grün-600:#00A155;
  - -grün-700:#007F45;
  - -grün-800:#016538;
  - -grün-900:#0A5331;
  - -grün-950:#052E16;
}
```

::
````

::

## API (englisch)

### Props Bearbeiten

:component-props{prose}

### Slots Bearbeiten

:component-slots{prose}

## Theme Bearbeiten

:component-theme{prose}

## Changelog (englisch)

:component-changelog{prefix="prose"}
