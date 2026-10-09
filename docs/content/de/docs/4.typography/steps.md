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

## Bearbeiten

Umschließen Sie Ihre Überschriften mit der Komponente Schritte, um eine Liste von Schritten anzuzeigen.

Verwenden Sie die `level`-prop, um zu definieren, welche Überschrift für die Schritte verwendet wird.

:::code-preview{class="[&>div]:*:w-full"}
::steps{level="4"}

#### Fügen Sie das Nuxt UI Modul in Ihrem `nuxt.config.ts` hinzu

```ts [nuxt.config.ts]
export default defineNuxtConfig({
  modules: ['@nuxt/ui']
})
```

#### Tailwind CSS in CSS importieren

```css [app/assets/css/main.css]
@import "tailwindcss";
```

#### Starten Sie Ihren Entwicklungsserver

```bash
npm run dev
```

::

#code

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
npm run dev ausführen
```

::
````

:::

## API (englisch)

### Props Bearbeiten

:component-props{prose}

### Slots Bearbeiten

:component-slots{prose}

## Theme Bearbeiten

:component-theme{prose}

## Changelog (englisch)

:component-changelog{prefix="prose"}
