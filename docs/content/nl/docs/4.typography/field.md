---
title: ProseVeld
description: 'Documenteer API-parameters, rekwisieten en configuratie-opties duidelijk.'
category: components
navigation.title: Field
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/prose/Field.vue
---

## Gebruik

Een veld, prop of parameter om in uw inhoud weer te geven.

::code-preview
::field{name="name" type="string" required class="w-full"}
De `description` kan worden ingesteld als prop of in de standaard slot met volledige **markdown** ondersteuning.
::

#code

```mdc
::field{name="name" type="string" required}
The `description` can be set as prop or in the default slot with full **markdown** support.
::
```

::

## API

### Props

:component-props{prose}

### Slots

:component-slots{prose}

## Thema

:component-theme{prose}

## Changelog

:component-changelog{prefix="prose"}
