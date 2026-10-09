---
title: proseélectronique
description: 'Basculez la visibilité du contenu avec des animations de développement et de réduction en douceur.'
category: components
navigation.title: Collapsible
links:
  - label: GitHub à
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/prose/Collapsible.vue
---

## Utilisation

Enveloppez votre contenu avec le composant `collapsible` pour afficher un [Collapsible](/docs/components/collapsible) dans votre contenu.

::code-preview{class="[&>div]:*:w-full [&>div]:*:my-0"}

::collapsible

| Prop à    | Défaut   | type                     |
|---------|-----------|--------------------------|
| `name`|           | `string`x{lang="ts-type"}|
| `size`| `md`      | `string`x{lang="ts-type"}|
| `color`| `neutral`| `string`x{lang="ts-type"}|

::

#code

```mdc
::collapsible

| Prop    | Default   | Type                     |
|---------|-----------|--------------------------|
| `name`  |           | `string`{lang="ts-type"} |
| `size`  | `md`      | `string`{lang="ts-type"} |
| `color` | `neutral` | `string`{lang="ts-type"} |

::
```

::

## API

### Props équipement

:component-props{prose}

### Slots

:component-slots{prose}

## Thème

:component-theme{prose}

## Changelog

:component-changelog{prefix="prose"}
