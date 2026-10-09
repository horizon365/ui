---
description: Afficher le contenu dans une carte avec un en-tête, un corps et un pied de page.
category: element
keywords:
  - panel
  - box
  - container
links:
  - label: GitHub à
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Card.vue
---

## Utilisation

Utilisez les fentes `header`, `default` et `footer` pour ajouter du contenu à la carte.

::component-code
---
prettier: true
hide:
  - class
props:
  class: 'w-full'
slots:
  header: |

    <Placeholder class="h-8" />

  default: |

    <Placeholder class="h-32" />

  footer: |

    <Placeholder class="h-8" />
---

#header
:placeholder{class="h-8"}

#default
:placeholder{class="h-32"}

#footer
:placeholder{class="h-8"}
::

Titre: badge{label="4.7+" class="align-text-top"}

Utilisez la prop `title` pour définir le titre de l'en-tête de la carte.

::component-code
---
prettier: true
ignore:
  - class
props:
  title: 'Card with title'
  class: 'w-full'
slots:
  default: |

    <Placeholder class="h-32" />
---

#default
:placeholder{class="h-32"}
::

### Description: badge{label="4.7+" class="align-text-top"}

Utilisez la prop `description` pour définir la description de l'en-tête de la carte.

::component-code
---
prettier: true
ignore:
  - title
  - class
props:
  title: 'Card with description'
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  class: 'w-full'
slots:
  default: |

    <Placeholder class="h-32" />
---

#default
:placeholder{class="h-32"}
::

### Variant équivalent

Utilisez le prop `variant` pour changer la variante de la carte.

::component-code
---
prettier: true
hide:
  - class
props:
  variant: subtle
  class: 'w-full'
slots:
  header: |

    <Placeholder class="h-8" />

  default: |

    <Placeholder class="h-32" />

  footer: |

    <Placeholder class="h-8" />
---

#header
:placeholder{class="h-8"}

#default
:placeholder{class="h-32"}

#footer
:placeholder{class="h-8"}
::

## api

### Props

:component-props

### Slots

:component-slots

## Thème

:component-theme

## Changelog

:component-changelog
