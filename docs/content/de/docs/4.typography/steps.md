---
title: Prosesteps Bearbeiten
description: 'Überschriften in nummerierte Schritt-für-Schritt-Anleitungen und Tutorials umwandeln.'
category: components
navigation.title: Steps
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/prose/Steps.vue
---

@@@ph000@@Verwendung

Umschließen Sie Ihre Überschriften mit der Komponente Schritte, um eine Liste von Schritten anzuzeigen.

Verwenden Sie `level` prop, um zu definieren, welche Überschrift für die Schritte verwendet wird.

:::code-preview{class="[&>div]:*:w-full"}
::steps{level="4"}

#### Fügen Sie das Nuxt UI-Modul in Ihrem `nuxt.config.ts`

```ts [nuxt.config.ts]
export default defineNuxtConfig({
  modules: ['@nuxt/ui']
})
```

#### Import Tailwind CSS in Ihrem CSS

```css [app/assets/css/main.css]
@import "tailwindcss";
```

#### Starten Sie Ihren Entwicklungsserver

```bash
npm run dev
```

::

#Der Code

````mdc
::steps{level="4"}

#### Add the Nuxt UI module in your `nuxt.config.ts`

```ts [nuxt.config.ts]
default export defineNuxtConfig ({Dateiendung})
  Module: ['@ nuxt/ui']
})
```

#### Import Tailwind CSS in your CSS

```css [app/assets/css/main.css]
@ import "tailwindcss";
```

#### Start your development server

```bash
npm Run Dev Bearbeiten
```

::
````

:::

@@@@@@b37@b37

@@@@@@@@@@@@ph038@@props

@@ ph039

@@ph040@@Slots

: component-slots {prose}

@@ph042@@theme.de

: component-theme {prose}

@@ph044@@changelog @@changelog

: component-changelog {prefix="prose"}
