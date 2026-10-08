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

@@ph000@utilisation

L'Avatar utilise le composant `<NuxtImg>` lorsque [`@nuxt/image`](https://github.com/nuxt/image) est installé, retombant à `img` sinon.

::component-code
---
ignorer:
  @@pH008@src
Props:
  src: 'https://github.com/benjamincanac.png'
---
::

::note
Vous pouvez passer n'importe quelle propriété de l'élément HTML `<img>` comme `alt`,`loading`, etc.
::

::tip
Pour vous désinscrire de `@nuxt/image`, utilisez le prop `as`:`:as="{ img: 'img' }"`.
::

@@@ph015 @@ réseau

Utilisez la prop `src` pour définir l'URL de l'image.

::component-code
---
Ignorer:
  @@17@chargement
Props:
  src: 'https://github.com/benjamincanac.png'
  Étiquette: Lazy
---
::

@@ph018@size

Utilisez la prop `size` pour définir la taille de l'avatar.

::component-code
---
Ignorer:
  @@20@src
  @@21@chargement
Props:
  src: 'https://github.com/benjamincanac.png'
  Taille: XL
  Étiquette: Lazy
---
::

::note
Les éléments `<img>``width` et `height` sont automatiquement définis sur la base de la prop `size`.
::

@@226@Icon

Utilisez la prop `icon` pour afficher une solution de secours [Icon](/docs/components/icon).

::component-code
---
Props:
  icon: 'i-lucide-image'
  Étiquette: MD
---
::

@@ph032@texte

Utilisez la prop `text` pour afficher un texte de secours.

::component-code
---
Props:
  Référence:"+1"
  Taille: MD
---
::

@@ph034@@Alt

Lorsqu 'aucune icône ou texte n'est fourni, le **initials** de l'accessoire `alt` est utilisé comme solution de secours.

::component-code
---
Props:
  Auteur: Benjamin Canac
  Taille: MD
---
::

::note
Le prop `alt` est passé à l'élément `img` comme attribut `alt`.
::

### Couleur: badge{label="4.8+" class="align-text-top"}

Utilisez le prop `color` pour changer la couleur de l'avatar.

::component-code
---
Props:
  Couleur: primaire
  Auteur: Benjamin Canac
---
::

@@444@pseudo

Utilisez le prop `chip` pour afficher une puce autour de l'Avatar.

::component-code
---
Étiquette: true
Ignorer:
  @@pH046@src
  - chargement
  - chip.insert
Props:
  src: 'https://github.com/benjamincanac.png'
  Étiquette: Lazy
  Chipé:
    Inset: vrai
---
::

@@ph049@exemples

### Avec tooltip

Vous pouvez utiliser un composant [Tooltip](/docs/components/tooltip) pour afficher une infobulle lorsque vous survolez l'Avatar.

: exemple de composant {name="avatar-tooltip-example"}

### Avec masque

Vous pouvez utiliser un masque CSS pour afficher un avatar avec une forme personnalisée au lieu d'un simple cercle.

: exemple de composant {name="avatar-mask-example"}

@@pH058@@api

@@509@@propriété

Composants-props

::callout{icon="i-simple-icons-mdnwebdocs" to="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#attributes" target="_blank"}
Ce composant prend également en charge tous les attributs HTML natifs `<img>`.
::

@@ph061@thème

Composant-thème

@changement@changement@changement@changement.com

Composant-changelog
