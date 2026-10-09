---
title: ProseTabs
description: 'Organiseer gerelateerde inhoud in interactieve interfaces met tabbladen.'
category: components
navigation.title: Tabs
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/prose/Tabs.vue
---

## Gebruik

Gebruik de `tabs` en `tabs-item` componenten om [Tabs](/docs/components/tabs) in je content weer te geven.

::code-preview{class="[&>div]:*:my-0"}

:::tabs{class="w-full"}

:::tabs-item{label="Code" icon="i-lucide-code"}

```mdc
::callout
Lorem velit voluptate ex reprehenderit ullamco et culpa.
::
```

:::

:::tabs-item{label="Voorbeeld" icon="i-lucide-eye"}

::callout
Lorem velit voluptate ex reprehenderit ullamco en culpa.
::

:::

:::

#code

````mdc
::tabs

:::tabs-item{label="Code" icon="i-lucide-code"}

```mdc
::callout
Lorem velit voluptate ex reprehenderit ullamco en culpa.
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

## API

### Props

:component-props{prose}

### Slots

:component-slots{prose}

## Thema

::component-theme{prose}
---
extra:
  - tabsItem
---
::

## Wijzigingsgelog

:component-changelog{prefix="prose"}
