---
title: ProsecuenciaColapso
description: 'Haga que los bloques de código largos se plieguen para ahorrar espacio y mejorar la legibilidad.'
category: components
navigation.title: CodeCollapse
links:
  - label: GitHub también
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/prose/CodeCollapse.vue
---

@@pH000@@Uso del producto

Envuelva el bloque de código con un componente `code-collapse` para mostrar un bloque de código plegable.

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

#El Código

````mdc
::code-collapse

```css [app/assets/css/main.css]
@ import "cccss";
@ import "@ nuxt/ui";

@ tema estático {
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

@@pH032@@Apid (en inglés)

@@333@333@333@333

Artículo siguienteComponentes {prose}

@@35000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000

Componentes: {prose}

@37@@tema

Artículo siguiente{prose}

@@changelog

por: component-changelog {prefix="prose"}
