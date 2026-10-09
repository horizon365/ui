---
title: propriété Prosefield
description: 'Documenter clairement les paramètres de l'API, les accessoires et les options de configuration.'
category: components
navigation.title: Field
links:
  - label: GitHub à
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/prose/Field.vue
---

## Utilisation

Un champ, un prop ou un paramètre à afficher dans votre contenu.

::code-preview
::field{name="name" type="string" required class="w-full"}
Le `description` peut être défini comme prop ou dans l'emplacement par défaut avec un support complet de **markdown**.
::

#code

```mdc
::field{name="name" type="string" required}
The `description` can be set as prop or in the default slot with full **markdown** support.
::
```

::

## api

### Props

:component-props{prose}

### Slots

:component-slots{prose}

## Thème

:component-theme{prose}

## Changelog

:component-changelog{prefix="prose"}
