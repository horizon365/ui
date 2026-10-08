---
title: Proyecto ProseCodeGroup
description: 'Agrupe varios ejemplos de código en interfaces con pestañas para facilitar la comparación.'
category: components
navigation.title: CodeGroup
links:
  - label: GitHub también
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/prose/CodeGroup.vue
---

@@pH000@@Uso del producto

Envuelva los bloques de código alrededor de un componente `code-group` para agruparlos en pestañas.

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

#El Código

````mdc
::code-group

```bash [pnpm]
pnpm add @ nuxt/ui (en inglés)
```

```bash [yarn]
iread add @ nuxt/ui (en inglés)
```

```bash [npm]
npm install @ nuxt/ui (en inglés)
```

```bash [bun]
bun add @ nuxt/ui (en español)
```

::
````

::

::note{to="/docs/typography/code#code-blocks"}
Al igual que el componente `ProsePre`, el `CodeGroup` maneja nombres de archivos, iconos y botón de copia.
::

@3333@33333

@@30000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000

Artículo siguienteComponentes {prose}

@@36000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000

Componentes: {prose}

@@38000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000

Artículo siguiente{prose}

@@changelog

por: component-changelog {prefix="prose"}
