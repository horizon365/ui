---
title: avatargroupe
description: Plusieurs avatars dans un groupe.
category: element
keywords:
  - stacked avatars
  - faces
  - members
links:
  - label: GitHub à
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/AvatarGroup.vue
---

@@ph000@utilisation

Enveloppez plusieurs [Avatar](/docs/components/avatar) dans un AvatarGroup pour les empiler.

::component-code
---
Étiquette: true
Slots:
  Default:|

    @@@ 005 @
    @@@ 006 @
    @@@ 007 @
---
: u-avatar {src="https://github.com/benjamincanac.png" alt="Benjamin Canac"}
: u-avatar {src="https://github.com/HugoRCD.png" alt="Hugo Richard"}
: u-avatar {src="https://github.com/atinux.png" alt="Sébastien Chopin"}
::

@@ph011@@Size

Utilisez la prop `size` pour modifier la taille de tous les avatars.

::component-code
---
Étiquette: true
Props:
  Taille: XL
Slots:
  Default:|

    @@
    @@
    @@
---
: u-avatar {src="https://github.com/benjamincanac.png" alt="Benjamin Canac" loading="lazy"}
: u-avatar {src="https://github.com/HugoRCD.png" alt="Hugo Richard" loading="lazy"}
: u-avatar {src="https://github.com/atinux.png" alt="Sébastien Chopin" loading="lazy"}
::

@@ph019@max

Utilisez la prop `max` pour limiter le nombre d'avatars affichés. Le reste est affiché comme un avatar `+X`.

::component-code
---
Étiquette: true
Props:
  Max: deux
Slots:
  Default:|

    @@@ 22 @
    @@@ 23 @
    @@@ 24 @
---
: u-avatar {src="https://github.com/benjamincanac.png" alt="Benjamin Canac" loading="lazy"}
: u-avatar {src="https://github.com/HugoRCD.png" alt="Hugo Richard" loading="lazy"}
: u-avatar {src="https://github.com/atinux.png" alt="Sébastien Chopin" loading="lazy"}
::

### Couleur: badge{label="4.8+" class="align-text-top"}

Utilisez le prop `color` pour changer la couleur de tous les avatars.

::component-code
---
Étiquette: true
Props:
  Couleur: primaire
Slots:
  Défaut:|

    @@@ 031 @
    @@@ 032 @
    @@@@ 33 @
---
: u-avatar {alt="Benjamin Canac"}
: u-avatar {alt="Hugo Richard"}
: u-avatar {alt="Sébastien Chopin"}
::

@@ph037@exemples

### Avec tooltip

Enveloppez chaque avatar avec un [Tooltip](/docs/components/tooltip) pour afficher une infobulle en survol.

: exemple de composant {name="avatar-group-tooltip-example"}

### Avec puce

Enveloppez chaque avatar avec un [Chip](/docs/components/chip) pour afficher une puce autour de l'avatar.

: exemple de composant {name="avatar-group-chip-example"}

### Avec lien

Enveloppez chaque avatar avec un [Link](/docs/components/link) pour les rendre cliquables.

: exemple de composant {name="avatar-group-link-example"}

### Avec masque

Enveloppez un avatar avec un masque CSS pour l'afficher avec une forme personnalisée.

: exemple de composant {name="avatar-group-mask-example"}

::warning
Le `chip` prop ne fonctionne pas correctement lors de l'utilisation d'un masque. Des puces peuvent être coupées en fonction de la forme du masque.
::

@@ph059 @@ réponse

@@ph060@@props

Composants-props

@@ph061@@réglages

Composants slots

@@ph062@thème

Composant-thème

@changelog @changelog

Composant-changelog
