---
title: ProseCodeGroep
description: 'Groepeer meerdere codevoorbeelden in interfaces met tabbladen voor eenvoudige vergelijking.'
category: components
navigation.title: CodeGroup
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/prose/CodeGroup.vue
---

## Gebruik

Wikkel uw codeblokken om een `code-group`-component om ze in tabbladen te groeperen.

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
pnpm voeg @ nuxt / ui toe
```

```bash [yarn]
garen voeg @ nuxt / ui toe
```

```bash [npm]
npm installeer @ nuxt / ui
```

```bash [bun]
knot voeg @ nuxt / ui toe
```

::
````

::

::note{to="/docs/typography/code#code-blocks"}
Net als de `ProsePre`-component verwerkt de `CodeGroup` bestandsnamen, pictogrammen en kopieerknop.
::

## API

### Props

:component-props{prose}

### Slots

:component-slots{prose}

## Thema

:component-theme{prose}

## Wijzigingsgelog

:component-changelog{prefix="prose"}
