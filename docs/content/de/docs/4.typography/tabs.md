---
title: Prosetabs Bearbeiten
description: 'Organisieren Sie verwandte Inhalte in interaktiven Tabbed Interfaces.'
category: components
navigation.title: Tabs
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/prose/Tabs.vue
---

## Bearbeiten

Verwenden Sie die Komponenten `tabs` und `tabs-item`, um [Tabs](/docs/components/tabs) in Ihrem Inhalt anzuzeigen.

::code-preview{class="[&>div]:*:my-0"}

:::tabs{class="w-full"}

:::tabs-item{label="Der Code" icon="i-lucide-code"}

```mdc
::callout
Lorem velit voluptate ex reprehenderit ullamco et culpa.
::
```

:::

:::tabs-item{label="Vorschau Preview" icon="i-lucide-eye"}

::callout
Lorem velit voluptate ex reprehenderit ullamco et culpa (Lorem velit voluptate ex reprehenderit ullamco et culpa)(Lorem velit voluptate ex reprehenderit ullamco et culpa)(Übersetzung)
::

:::

:::

#code

````mdc
::tabs

:::tabs-item{label="Code" icon="i-lucide-code"}

```mdc
::callout
Lorem velit voluptate ex reprehenderit ullamco et culpa (Lorem velit voluptate ex reprehenderit ullamco et culpa)(Lorem velit voluptate ex reprehenderit ullamco et culpa)(Übersetzung)
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

## API (englisch)

### Props Bearbeiten

:component-props{prose}

### Slots Bearbeiten

:component-slots{prose}

## Theme Bearbeiten

::component-theme{prose}
---
extra:
  - tabsItem
---
::

## Changelog (englisch)

:component-changelog{prefix="prose"}
