---
title: Groupe FieldGroup
description: Groupe plusieurs éléments de type bouton.
category: element
keywords:
  - segmented control
  - toggle group
  - button group
  - input group
links:
  - label: GitHub à
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/FieldGroup.vue
---

@@ph000@@utilisation

Enveloppez plusieurs [Button](/docs/components/button) dans un groupe de champ pour les regrouper.

::component-code
---
Étiquette: true
Slots:
  Défaut:|

    @@@ 005 @
    @@@ 006 @
---
Référence: u-button {color="neutral" variant="subtle" label="Button"}
Référence: u-button {color="neutral" variant="outline" icon="i-lucide-chevron-down"}
::

@@pH009@@série

Utilisez la prop `size` pour modifier la taille de tous les boutons.

::component-code
---
Étiquette: true
Props:
  Taille: XL
Slots:
  Défaut:|

    @@@@ 011 @
    @@@ 012 @
---
Référence: u-button {color="neutral" variant="subtle" label="Button"}
Référence: u-button {color="neutral" variant="outline" icon="i-lucide-chevron-down"}
::

### Référencement

Utilisez la prop `orientation` pour modifier l'orientation des boutons. Par défaut à `horizontal`.

::component-code
---
Étiquette: true
Props:
  Orientation: verticale
Slots:
  Default:|

    @@@@ 018 @
    @@@@ 019 @
---
Le bouton {color="neutral" variant="subtle" label="Submit"}
Référence: u-button {color="neutral" variant="outline" label="Cancel"}
::

@@ph022@Exemples

### Avec entrée

Vous pouvez utiliser des composants tels que [Input](/docs/components/input),[InputMenu](),[Select]()[](/docs/components/select-menu), etc. au sein d'un groupe de champs.

::component-code
---
Étiquette: true
Slots:
  Défaut:|

    @@@ 040 @

    @@@ 041 @
---
par: u-input {color="neutral" variant="outline" placeholder="Enter token"}
Référence: u-button {color="neutral" variant="subtle" icon="i-lucide-clipboard"}
::

### Avec tooltip

Vous pouvez utiliser un [Tooltip](/docs/components/tooltip) dans un groupe de champs.

: exemple de composant {name="field-group-tooltip-example"}

### Avec le menu déroulant

Vous pouvez utiliser un [DropdownMenu](/docs/components/dropdown-menu) dans un groupe de champs.

: exemple de composant {name="field-group-dropdown-example"}

### Avec badge

Vous pouvez utiliser un [Badge](/docs/components/badge) dans un groupe de champs.

: exemple de composant {name="field-group-badge-example"}

@@ph062 @ réponse

@@ph063@@props

Composants-props

@@ph064@@réseaux sociaux

Composants slots

@@ph065@thème

Composant-thème

@changement@changement@changement.com

Composant-changelog
