---
description: Indicateur d'une valeur numérique ou d'un état.
category: element
keywords:
  - notification dot
  - status dot
links:
  - label: GitHub à
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Chip.vue
---

@@ph000@utilisation

Enveloppez tout composant avec une puce pour afficher un indicateur.

::component-code
---
Étiquette: true
Slots:
  Défaut:|

    @@@ 001 @
---
Référence: u-button {icon="i-lucide-mail" color="neutral" variant="subtle"}
::

@@pH003@couleur

Utilisez le prop `color` pour changer la couleur de la puce.

::component-code
---
Étiquette: true
Props:
  Couleur: Neutre
Slots:
  Default:|

    @@@ 005 @
---
Référence: u-button {icon="i-lucide-mail" color="neutral" variant="subtle"}
::

@@ph007@série

Utilisez le prop `size` pour changer la taille de la puce.

::component-code
---
Étiquette: true
Props:
  Taille: 3xl
Slots:
  Default:|

    @@@ 009 @
---
Référence: u-button {icon="i-lucide-mail" color="neutral" variant="subtle"}
::

@@ph011@texte

Utilisez le prop `text` pour définir le texte de la puce.

::component-code
---
Étiquette: true
Props:
  Texte: 5
  Taille: 3xl
Slots:
  Défaut:|

    @@
---
Référence: u-button {icon="i-lucide-mail" color="neutral" variant="subtle"}
::

@@@P015@Positionnement

Utilisez le prop `position` pour changer la position de la puce.

::component-code
---
Étiquette: true
Props:
  Position: "gauche"
Slots:
  Default:|

    @@@ 017 @
---
Référence: u-button {icon="i-lucide-mail" color="neutral" variant="subtle"}
::

@@ph019@intérieur

Utilisez le prop `inset` pour afficher la puce à l'intérieur du composant. Ceci est utile lorsque vous traitez avec des composants arrondis.

::component-code
---
Étiquette: true
Props:
  Inset: vrai
Slots:
  Défaut:|

    @@@ 21 @
---
: u-avatar {src="https://github.com/benjamincanac.png" loading="lazy"}
::

### Séparé

Utilisez le `standalone` prop à côté du `inset` prop pour afficher la puce en ligne.

::component-code
---
Props:
  Standalone: Vrai
  Inset: vrai
---
::

::note
Il est utilisé de cette façon dans le [`CommandPalette`](/docs/components/command-palette),[`InputMenu`](/docs/components/input-menu),[`Select`](/docs/components/select) ou [`SelectMenu`](/docs/components/select-menu) par exemple.
::

@@ph046@exemples

### Contrôle de la visibilité

Vous pouvez contrôler la visibilité de la puce en utilisant le `show` prop.

: exemple de composant {name="chip-show-example"}

::note
Dans cet exemple, la puce a une couleur par état et est affichée lorsque l'état n'est pas `offline`.
::

@@P501 @@ référence

@@502@@propriété

Composants-props

@@53@@séries

Composants slots

@@54@@émetteur

Composants émetteurs

@@505@thème

Composant-thème

@changement@changement@changement.com

Composant-changelog
