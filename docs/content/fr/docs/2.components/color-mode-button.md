---
title: Couleur ModeButton
description: 'Un bouton pour basculer entre le mode clair et sombre.'
category: color-mode
links:
  - label: bouton
    to: /docs/components/button
    icon: i-simple-icons-nuxtdotjs
  - label: GitHub à
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/color-mode/ColorModeButton.vue
---

@@ph000@@utilisation

Le composant ColorModeButton étend le composant [Button](/docs/components/button), de sorte que vous pouvez passer n'importe quelle propriété telle que `color`,`variant`,`size`, etc.

: composant code {prefix="color-mode"}

::note
Le bouton par défaut est `color="neutral"` et `variant="ghost"`.
::

@@ph011@@Exemples

### Avec des icônes personnalisées

::framework-only
#numérique
::div

Utilisez le `app.config.ts` pour personnaliser l'icône avec la propriété `ui.icons`:

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
Utilisez le `vite.config.ts` pour personnaliser l'icône avec la propriété `ui.icons`:

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

@@ph046@@api

@@ph047@@props

Composants-props

::callout{icon="i-simple-icons-mdnwebdocs" to="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attributes" target="_blank"}
Ce composant prend également en charge tous les attributs HTML natifs `<button>`.
::

@changement@changement@changement@changement.com

: composant-changelog {prefix="color-mode"}
