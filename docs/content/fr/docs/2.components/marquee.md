---
description: 'Un composant pour créer du contenu à défilement infini.'
category: data
keywords:
  - ticker
  - scroller
  - carousel
links:
  - label: GitHub à
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Marquee.vue
---

## Utilisation

Utilisez l'emplacement par défaut de votre contenu pour créer une animation à défilement infini.

::component-code
---
prettier: true
slots:
  default: |

    <UIcon name="i-simple-icons-github" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons-discord" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons-x" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons-instagram" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons-linkedin" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons-facebook" class="size-10 shrink-0" />
---
:u-icon{name="i-simple-icons-github" class="size-10 shrink-0"}
:u-icon{name="i-simple-icons-discord" class="size-10 shrink-0"}
:u-icon{name="i-simple-icons-x" class="size-10 shrink-0"}
:u-icon{name="i-simple-icons-instagram" class="size-10 shrink-0"}
:u-icon{name="i-simple-icons-linkedin" class="size-10 shrink-0"}
:u-icon{name="i-simple-icons-facebook" class="size-10 shrink-0"}
::

::tip
L'animation est automatiquement désactivée lorsque l'utilisateur préfère un mouvement réduit, le contenu est affiché statiquement à la place.
::

### Pause sur Hover

Utilisez le prop `pause-on-hover` pour mettre en pause l'animation lorsque l'utilisateur survole le contenu.

::component-code
---
prettier: true
props:
  pauseOnHover: true
slots:
  default: |

    <UIcon name="i-simple-icons-github" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons-discord" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons-x" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons-instagram" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons-linkedin" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons-facebook" class="size-10 shrink-0" />
---
:u-icon{name="i-simple-icons-github" class="size-10 shrink-0"}
:u-icon{name="i-simple-icons-discord" class="size-10 shrink-0"}
:u-icon{name="i-simple-icons-x" class="size-10 shrink-0"}
:u-icon{name="i-simple-icons-instagram" class="size-10 shrink-0"}
:u-icon{name="i-simple-icons-linkedin" class="size-10 shrink-0"}
:u-icon{name="i-simple-icons-facebook" class="size-10 shrink-0"}
::

### Reverse

Utilisez le prop `reverse` pour inverser la direction de l'animation.

::component-code
---
prettier: true
props:
  reverse: true
slots:
  default: |

    <UIcon name="i-simple-icons-github" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons-discord" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons-x" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons-instagram" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons-linkedin" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons-facebook" class="size-10 shrink-0" />
---
:u-icon{name="i-simple-icons-github" class="size-10 shrink-0"}
:u-icon{name="i-simple-icons-discord" class="size-10 shrink-0"}
:u-icon{name="i-simple-icons-x" class="size-10 shrink-0"}
:u-icon{name="i-simple-icons-instagram" class="size-10 shrink-0"}
:u-icon{name="i-simple-icons-linkedin" class="size-10 shrink-0"}
:u-icon{name="i-simple-icons-facebook" class="size-10 shrink-0"}
::

### Orientation

Utilisez le prop `orientation` pour changer la direction du défilement.

::component-code
---
prettier: true
class: 'h-96'
props:
  orientation: 'vertical'
slots:
  default: |

    <UIcon name="i-simple-icons-github" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons-discord" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons-x" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons-instagram" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons-linkedin" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons-facebook" class="size-10 shrink-0" />
---
:u-icon{name="i-simple-icons-github" class="size-10 shrink-0"}
:u-icon{name="i-simple-icons-discord" class="size-10 shrink-0"}
:u-icon{name="i-simple-icons-x" class="size-10 shrink-0"}
:u-icon{name="i-simple-icons-instagram" class="size-10 shrink-0"}
:u-icon{name="i-simple-icons-linkedin" class="size-10 shrink-0"}
:u-icon{name="i-simple-icons-facebook" class="size-10 shrink-0"}
::

### Répéter

Utilisez la prop `repeat` pour spécifier combien de fois le contenu doit être répété dans l'animation.

::component-code
---
prettier: true
props:
  repeat: 6
slots:
  default: |

    <UIcon name="i-simple-icons-github" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons-discord" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons-x" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons-instagram" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons-linkedin" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons-facebook" class="size-10 shrink-0" />
---
:u-icon{name="i-simple-icons-github" class="size-10 shrink-0"}
:u-icon{name="i-simple-icons-discord" class="size-10 shrink-0"}
:u-icon{name="i-simple-icons-x" class="size-10 shrink-0"}
:u-icon{name="i-simple-icons-instagram" class="size-10 shrink-0"}
:u-icon{name="i-simple-icons-linkedin" class="size-10 shrink-0"}
:u-icon{name="i-simple-icons-facebook" class="size-10 shrink-0"}
::

### Découverte

Utilisez le prop `overlay` pour enlever les superpositions de dégradé sur les bords de la marquise.

::component-code
---
prettier: true
props:
  overlay: false
slots:
  default: |

    <UIcon name="i-simple-icons-github" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons-discord" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons-x" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons-instagram" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons-linkedin" class="size-10 shrink-0" />
    <UIcon name="i-simple-icons-facebook" class="size-10 shrink-0" />
---
:u-icon{name="i-simple-icons-github" class="size-10 shrink-0"}
:u-icon{name="i-simple-icons-discord" class="size-10 shrink-0"}
:u-icon{name="i-simple-icons-x" class="size-10 shrink-0"}
:u-icon{name="i-simple-icons-instagram" class="size-10 shrink-0"}
:u-icon{name="i-simple-icons-linkedin" class="size-10 shrink-0"}
:u-icon{name="i-simple-icons-facebook" class="size-10 shrink-0"}
::

## Exemples

### Témoignages

Utilisez le composant `Marquee` pour créer une animation de défilement infini pour vos témoignages.

::component-example{label="Avec items"}
---
prettier: true
name: 'marquee-testimonials'
collapse: true
overflowHidden: true
class: 'px-0'
---
::

### Captures d'écran

Utilisez le composant `Marquee` pour créer une animation de défilement infini pour vos captures d'écran.

::component-example{label="Avec Screenshots"}
---
prettier: true
name: 'marquee-screenshots'
collapse: true
overflowHidden: true
class: '!p-0'
---
::

## API

### Props équipements

:component-props

### Slots

:component-slots

## Thème

:component-theme

## Changelog écrit

:component-changelog
