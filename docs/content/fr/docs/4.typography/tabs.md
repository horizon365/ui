---
title: propriétaires
description: 'Organisez le contenu connexe dans des interfaces interactives à onglets.'
category: components
navigation.title: Tabs
links:
  - label: GitHub à
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/prose/Tabs.vue
---

## Utilisation

Utilisez les composants `tabs` et `tabs-item` pour afficher [Tabs](/docs/components/tabs) dans votre contenu.

::code-preview{class="[&>div]:*:my-0"}

:::tabs{class="w-full"}

:::tabs-item{label="code" icon="i-lucide-code"}

```mdc
::callout
Lorem velit voluptate ex reprehenderit ullamco et culpa.
::
```

:::

:::tabs-item{label="preview" icon="i-lucide-eye"}

::callout
Lorem velit voluptate ex repréhensit ullamco et culpa.
::

:::

:::

#code

````mdc
::tabs

:::tabs-item{label="Code" icon="i-lucide-code"}

```mdc
::callout
Lorem velit voluptate ex repréhensit ullamco et culpa.
::
```

:::

:::tabs-item{label="Preview" icon="i-lucide-eye"}

::callout
Lorem velit voluptate ex reprehenderit ullamco et culpa.
::

:::

::
````

::

## api

### Props

:component-props{prose}

### Slots

:component-slots{prose}

## Thème

::component-theme{prose}
---
extra:
  - tabsItem
---
::

## Changelog

:component-changelog{prefix="prose"}
