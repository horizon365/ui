---
title: Prosefield Bearbeiten
description: 'Dokumentieren Sie API-Parameter, Requisiten und Konfigurationsoptionen klar und deutlich.'
category: components
navigation.title: Field
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/prose/Field.vue
---

## Bearbeiten

Ein Feld, eine Stütze oder ein Parameter, der in Ihrem Inhalt angezeigt werden soll.

::code-preview
::field{name="name" type="string" required class="w-full"}
Das `description` kann als Prop oder im Standard-Slot mit voller **markdown**-Unterstützung eingestellt werden.
::

#code

```mdc
::field{name="name" type="string" required}
The `description` can be set as prop or in the default slot with full **markdown** support.
::
```

::

## API (Englisch)

### Props Bearbeiten

:component-props{prose}

### Slots Bearbeiten

:component-slots{prose}

## Themes Bearbeiten

:component-theme{prose}

## Changelog (englisch)

:component-changelog{prefix="prose"}
