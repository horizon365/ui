---
title: Die ProseCodeGroup
description: 'Gruppieren Sie mehrere Codebeispiele in Tabbed Interfaces für einen einfachen Vergleich.'
category: components
navigation.title: CodeGroup
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/prose/CodeGroup.vue
---

## Bearbeiten

Wickeln Sie Ihre Codeblöcke um eine `code-group`-Komponente, um sie in Registerkarten zu gruppieren

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
pnpm add @ nuxt/ui hinzufügen
```

```bash [yarn]
yarn add @ nuxt/ui hinzufügen
```

```bash [npm]
npm install @ nuxt/ui (nicht verfügbar)
```

```bash [bun]
bun add @ nuxt/ui hinzufügen
```

::
````

::

::note{to="/docs/typography/code#code-blocks"}
Wie die `ProsePre`-Komponente verarbeitet die `CodeGroup` Dateinamen, Symbole und Kopierschaltflächen.
::

## API (englisch)

### Props (nicht)

:component-props{prose}

### Slots Bearbeiten

:component-slots{prose}

## Theme Bearbeiten

:component-theme{prose}

## Changelog (englisch)

:component-changelog{prefix="prose"}
