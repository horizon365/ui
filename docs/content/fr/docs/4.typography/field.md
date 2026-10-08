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

@@ph000@@utilisation

Un champ, un prop ou un paramètre à afficher dans votre contenu.

::code-preview
::field{name="name" type="string" required class="w-full"}
Le `description` peut être défini comme prop ou dans l'emplacement par défaut avec un support complet **markdown**.
::

#code

```mdc
::field{name="name" type="string" required}
The `description` can be set as prop or in the default slot with full **markdown** support.
::
```

::

@@ph009 @@ réponse

@@ph010@@props

: composants {prose}

@@ph012@@réglages

: composant-slots {prose}

@@ph014@thème

: composant-thème {prose}

@changement@changement@changement.com

: composant-changelog {prefix="prose"}
