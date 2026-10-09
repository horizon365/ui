---
title: Der ColorModeButton
description: 'Ein Knopf zum Umschalten zwischen Hell-und Dunkelmodus.'
category: color-mode
links:
  - label: Der Button
    to: /docs/components/button
    icon: i-simple-icons-nuxtdotjs
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/color-mode/ColorModeButton.vue
---

## Bearbeiten

Die ColorModeButton-Komponente erweitert die Komponente [Button](/docs/components/button), sodass Sie jede Eigenschaft wie `color`, `variant`, `size` usw. übergeben können.

:component-code{prefix="color-mode"}

::note
Die Standardeinstellung für die Schaltfläche lautet `color="neutral"` und `variant="ghost"`.
::

## Examples (Beispiele)

### With benutzerdefinierte Icons

::framework-only
#nuxt
::div

Verwenden Sie die `app.config.ts`, um das Symbol mit der Eigenschaft `ui.icons` anzupassen:

```ts [app/app.config.ts]
export default defineAppConfig({
  ui: {
    icons: {
      light: 'i-lucide-sun-medium',
      dark: 'i-lucide-moon-star'
    }
  }
})
```

::

#vue
::div
Verwenden Sie die `vite.config.ts`, um das Symbol mit der Eigenschaft `ui.icons` anzupassen:

```ts [vite.config.ts]
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import ui from '@nuxt/ui/vite'

export default defineConfig({
  plugins: [
    vue(),
    ui({
      ui: {
        icons: {
          light: 'i-lucide-sun-medium',
          dark: 'i-lucide-moon-star'
        }
      }
    })
  ]
})
```

::

::

## API (englisch)

### Props (nicht)

:component-props

::callout{icon="i-simple-icons-mdnwebdocs" to="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attributes" target="_blank"}
Diese Komponente unterstützt auch alle nativen `<button>`-HTML-Attribute.
::

## Changelog (englisch)

:component-changelog{prefix="color-mode"}
