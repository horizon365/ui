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

@@@ph000@Verwendung

Wickeln Sie Ihre Codeblöcke um eine `code-group`-Komponente, um sie in Registerkarten zusammenzufassen.

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

#Der Code

````mdc
::code-group

```bash [pnpm]
pnpm add @ nuxt/ui hinzufügen
```

```bash [yarn]
add @ nuxt/ui hinzufügen
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
Wie die Komponente `ProsePre` behandelt die Komponente `CodeGroup` Dateinamen, Symbole und Kopierknopf.
::

@@333@bpb

@@ph034@@gmail.de

: component-props {prose}

@@ph036@gmail.de

: component-slots {prose}

@@ph038@gmail.de

: component-theme {prose}

@@ph040@@changelog @@changelog

: component-changelog {prefix="prose"}
