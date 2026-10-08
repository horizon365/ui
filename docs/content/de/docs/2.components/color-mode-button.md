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

@@@ph000@Verwendung

Die ColorModeButton-Komponente erweitert die Komponente [Button](/docs/components/button), so dass Sie jede Eigenschaft wie `color`,`variant`,`size`, etc. übergeben können

: component-code {prefix="color-mode"}

::note
Die Schaltfläche ist standardmäßig auf `color="neutral"` und `variant="ghost"`.
::

@@ph011@@Beispiele

@@ph012@@mit benutzerdefinierten Icons

::framework-only
#nuxt sein
::div

Verwenden Sie `app.config.ts`, um das Symbol mit der `ui.icons`-Eigenschaft anzupassen:

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

#Ansehen
::div
Verwenden Sie `vite.config.ts`, um das Symbol mit der `ui.icons`-Eigenschaft anzupassen:

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

## api

@@@@@@@@@@ph047@@props

Komponenten-Props

::callout{icon="i-simple-icons-mdnwebdocs" to="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attributes" target="_blank"}
Diese Komponente unterstützt auch alle nativen `<button>` HTML-Attribute.
::

@@ph049@@changelog @@changelog

: component-changelog {prefix="color-mode"}
