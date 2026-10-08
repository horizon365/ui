---
title: ProseCodeGroupe
description: 'Regroupez plusieurs exemples de code dans des interfaces à onglets pour une comparaison facile.'
category: components
navigation.title: CodeGroup
links:
  - label: GitHub à
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/prose/CodeGroup.vue
---

@@ph000@utilisation

Enroulez vos blocs de code autour d'un composant `code-group` pour les regrouper en onglets.

::code-preview{class="[&>div]:*:my-0 [&>div]:*:w-full"}

:::code-group

```bash [pnpm]
pnpm add @nuxt/ui
```

```bash [yarn]
yarn add @nuxt/ui
```

```bash [npm]
npm install @nuxt/ui
```

```bash [bun]
bun add @nuxt/ui
```

:::

#code

````mdc
::code-group

```bash [pnpm]
pnpm add @ nuxt/ui
```

```bash [yarn]
add @ nuxt/ui
```

```bash [npm]
npm install @ nuxt/ui
```

```bash [bun]
add @ nuxt/ui
```

::
````

::

::note{to="/docs/typography/code#code-blocks"}
Comme le composant `ProsePre`, le `CodeGroup` gère les noms de fichiers, les icônes et le bouton copier.
::

@@ph033@@api

@@ph034@@props

: composant-props {prose}

@@ph036@@réglages

: composant {prose}

@@ph038@thème

: composant-thème {prose}

@changelog @changelog

: composant-changelog {prefix="prose"}
