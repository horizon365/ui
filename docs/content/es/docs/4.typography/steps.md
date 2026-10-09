---
title: Proseguimientos
description: 'Transforma los encabezados en guías y tutoriales paso a paso numerados.'
category: components
navigation.title: Steps
links:
  - label: GitHub también
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/prose/Steps.vue
---

xph0000xUso

Envuelva los encabezados con el componente Pasos para mostrar una lista de pasos.

Utilice el prop `level` para definir qué encabezado se utilizará para los pasos.

:::code-preview{class="[&>div]:*:w-full"}
::steps{level="4"}

#### Añadir el módulo de interfaz de usuario de Nuxt en su `nuxt.config.ts`

```ts [nuxt.config.ts]
export default defineNuxtConfig({
  modules: ['@nuxt/ui']
})
```

#### Importe Tailwind CSS en su CSS

```css [app/assets/css/main.css]
@import "tailwindcss";
```

#### Iniciar el servidor de desarrollo

```bash
npm run dev
```

::

#code

````mdc
::steps{level="4"}

#### Add the Nuxt UI module in your `nuxt.config.ts`

```ts [nuxt.config.ts]
export default defineNuxtConfig
  módulos:['@ nuxt/ui']
})
```

#### Import Tailwind CSS in your CSS

```css [app/assets/css/main.css]
@ import "cccss";
```

#### Start your development server

```bash
npm run dev (en español)
```

::
````

:::

## API (Edición española)

### Accesorios

:component-props{prose}

### Slots

:component-slots{prose}

## Temas

:component-theme{prose}

## Changelog (Edición española)

:component-changelog{prefix="prose"}
