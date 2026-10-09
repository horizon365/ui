---
title: prosetabs
description: 'Organizar el contenido relacionado en interfaces interactivas con pestañas.'
category: components
navigation.title: Tabs
links:
  - label: GitHub también
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/prose/Tabs.vue
---

xph0000xUso

Utilice los componentes `tabs` y `tabs-item` para mostrar [Tabs](/docs/components/tabs) en el contenido.

::code-preview{class="[&>div]:*:my-0"}

:::tabs{class="w-full"}

:::tabs-item{label="El código" icon="i-lucide-code"}

```mdc
::callout
Lorem velit voluptate ex reprehenderit ullamco et culpa.
::
```

:::

:::tabs-item{label="Preview" icon="i-lucide-eye"}

::callout
Lorem velit voluptate ex reprensit ullamco et culpa.
::

:::

:::

#code

````mdc
::tabs

:::tabs-item{label="Code" icon="i-lucide-code"}

```mdc
::callout
Lorem velit voluptate ex reprensit ullamco et culpa.
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

## API (Edición española)

### Propciones

:component-props{prose}

### Slots (Edición española)

:component-slots{prose}

## Temas

::component-theme{prose}
---
extra:
  - tabsItem
---
::

## Changelog (Edición española)

:component-changelog{prefix="prose"}
