---
description: Un élément img avec support de repli et de Nuxt Image.
category: element
keywords:
  - profile picture
  - user image
links:
  - label: GitHub à
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Avatar.vue
---

## Utilisation

L'Avatar utilise le composant `<NuxtImg>` lorsque [`@nuxt/image`](https://github.com/nuxt/image) est installé, revenant à `img` sinon.

::component-code
---
ignore:
  - src
props:
  src: 'https://github.com/benjamincanac.png'
---
::

::note
Vous pouvez passer n'importe quelle propriété de l'élément HTML `<img>` telle que `alt`, `loading`, etc.
::

::tip
Pour désactiver `@nuxt/image`, utilisez le prop `as`: `:as="{ img: 'img' }"`.
::

### src

Utilisez la prop `src` pour définir l'URL de l'image.

::component-code
---
ignore:
  - loading
props:
  src: 'https://github.com/benjamincanac.png'
  loading: lazy
---
::

### taille

Utilisez le prop `size` pour définir la taille de l'avatar.

::component-code
---
ignore:
  - src
  - loading
props:
  src: 'https://github.com/benjamincanac.png'
  size: xl
  loading: lazy
---
::

::note
Les valeurs `width` et `height` de l'élément `<img>` sont automatiquement définies en fonction de la valeur `size`.
::

### icône

Utilisez le prop `icon` pour afficher un repli [Icon](/docs/components/icon).

::component-code
---
props:
  icon: 'i-lucide-image'
  size: md
---
::

### Texte écrit

Utilisez le prop `text` pour afficher un texte de secours.

::component-code
---
props:
  text: '+1'
  size: md
---
::

### Alt

Lorsqu 'aucune icône ou texte n'est fourni, le **initials** de la prop `alt` est utilisé comme repli.

::component-code
---
props:
  alt: 'Benjamin Canac'
  size: md
---
::

::note
La prop `alt` est passée à l'élément `img` comme attribut `alt`.
::

Couleur: badge{label="4.8+" class="align-text-top"}

Utilisez le prop `color` pour changer la couleur de l'avatar.

::component-code
---
props:
  color: primary
  alt: 'Benjamin Canac'
---
::

### Chip

Utilisez le prop `chip` pour afficher une puce autour de l'avatar.

::component-code
---
prettier: true
ignore:
  - src
  - loading
  - chip.inset
props:
  src: 'https://github.com/benjamincanac.png'
  loading: lazy
  chip:
    inset: true
---
::

## Exemples

### Avec tooltip

Vous pouvez utiliser un composant [Tooltip](/docs/components/tooltip) pour afficher une infobulle lorsque vous survolez l'avatar.

:component-example{name="avatar-tooltip-example"}

### Avec masque

Vous pouvez utiliser un masque CSS pour afficher un avatar avec une forme personnalisée au lieu d'un simple cercle.

:component-example{name="avatar-mask-example"}

## API écrit

### Props équipements

:component-props

::callout{icon="i-simple-icons-mdnwebdocs" to="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#attributes" target="_blank"}
Ce composant prend également en charge tous les attributs HTML natifs `<img>`.
::

## Thème

:component-theme

## Changelog

:component-changelog
