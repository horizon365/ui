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

@@ph000@utilisation

Enveloppez votre contenu avec le composant `collapsible` pour afficher un [Collapsible](/docs/components/collapsible) dans votre contenu.

::code-preview{class="[&>div]:*:w-full [&>div]:*:my-0"}

::collapsible

| Prop à    | Défaut   | type                     |
|---------|-----------|--------------------------|
| @@@ 006 @|           |@@|
| @@@ 009 @|@@@ 010 @      |@@|
| @@|@@|@@|

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

@@28000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000

@@@29@@propriété

: composant-props {prose}

@@ph031@@slot

: composant {prose}

@@ph033@thème

: composant-thème {prose}

@changelog @changelog

: composant-changelog {prefix="prose"}
