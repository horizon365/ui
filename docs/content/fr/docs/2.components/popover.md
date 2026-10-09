---
description: Un dialogue non modal qui flotte autour d'un élément trigger.
category: overlay
keywords:
  - hover card
  - flyout
links:
  - label: Hovercard électronique
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/hover-card
  - label: popour
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/popover
  - label: GitHub à
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Popover.vue
---

## Utilisation

Utilisez un [Button](/docs/components/button) ou tout autre composant dans l'emplacement par défaut du Popover.

Ensuite, utilisez l'emplacement `#content` pour ajouter le contenu affiché lorsque le Popover est ouvert.

::component-code
---
prettier: true
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" />

  content: |

    <Placeholder class="size-48 m-4 inline-flex" />
---

:u-button{label="ouvert" color="neutral" variant="subtle"}

#content
:placeholder{class="size-48 m-4 inline-flex"}
::

### mode

Utilisez la prop `mode` pour changer le mode du Popover. Defaults à `click`.

::tip
En mode `hover`, définissez le prop `enable-touch` pour permettre aux utilisateurs de basculer le Popover en appuyant sur le déclencheur sur les appareils tactiles, ou utilisez le mode `click` pour les déclencheurs destinés à être appuyés.
::

::component-code
---
prettier: true
items:
  mode:
    - click
    - hover
props:
  mode: 'hover'
  enableTouch: true
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" />

  content: |

    <Placeholder class="size-48 m-4 inline-flex" />
---

:u-button{label="ouvert" color="neutral" variant="subtle"}

#content
:placeholder{class="size-48 m-4 inline-flex"}
::

::note
Cuando se utiliza el modo `hover`, se utiliza el componente Reka UI [`HoverCard`](https://reka-ui.com/docs/components/hover-card) en lugar del componente [`Popover`](https://reka-ui.com/docs/components/popover).
::

### délai

Lorsque vous utilisez le mode `hover`, vous pouvez utiliser les accessoires `open-delay` et `close-delay` pour contrôler le délai avant que le Popover ne soit ouvert ou fermé.

::component-code
---
prettier: true
ignore:
  - mode
props:
  mode: 'hover'
  openDelay: 500
  closeDelay: 300
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" />

  content: |

    <Placeholder class="size-48 m-4 inline-flex" />
---

:u-button{label="ouvert" color="neutral" variant="subtle"}

#content
:placeholder{class="size-48 m-4 inline-flex"}
::

### contenu

Utilice la prop `content` para controlar cómo se representa el contenido de Popover, como su `align` o `side`, por ejemplo.

::component-code
---
prettier: true
items:
  content.align:
    - start
    - center
    - end
  content.side:
    - right
    - left
    - top
    - bottom
props:
  content:
    align: center
    side: bottom
    sideOffset: 8
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" />

  content: |

    <Placeholder class="size-48 m-4 inline-flex" />
---

:u-button{label="ouvert" color="neutral" variant="subtle"}

#content
:placeholder{class="size-48 m-4 inline-flex"}
::

### flèche

Utilisez le prop `arrow` pour afficher une flèche sur le Popover.

::component-code
---
prettier: true
ignore:
  - arrow
props:
  arrow: true
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" />

  content: |

    <Placeholder class="size-48 m-4 inline-flex" />
---

:u-button{label="ouvert" color="neutral" variant="subtle"}

#content
:placeholder{class="size-48 m-4 inline-flex"}
::

### Modal électrique

Utilisez la prop `modal` pour contrôler si le Popover bloque l'interaction avec le contenu extérieur.

::component-code
---
prettier: true
ignore:
  - title
props:
  modal: true
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" />

  content: |

    <Placeholder class="size-48 m-4 inline-flex" />
---

:u-button{label="ouvert" color="neutral" variant="subtle"}

#content
:placeholder{class="size-48 m-4 inline-flex"}
::

### Dismissible

Utilisez la prop `dismissible` pour contrôler si le Popover est éliminable lorsque vous cliquez en dehors de celui-ci ou appuyez sur escape.

::note
Un événement `close:prevent` sera émis lorsque l'utilisateur essaiera de le fermer.
::

::component-example
---
name: 'popover-dismissible-example'
---
::

## Exemples

### Control état ouvert

Vous pouvez contrôler l'état ouvert en utilisant la prop `default-open` ou la directive `v-model:open`.

::component-example
---
name: 'popover-open-example'
---
::

::note
En este ejemplo, aprovechando [`defineShortcuts`](/docs/composables/define-shortcuts), puede alternar el Popover presionando: kbd{value="O"}.
::

### With palette de commandes

Vous pouvez utiliser un composant [CommandPalette](/docs/components/command-palette) à l'intérieur du contenu du Popover.

::component-example
---
collapse: true
name: 'popover-command-palette-example'
---
::

### Avec le curseur suivant

Vous pouvez faire en sorte que le Popover suive le curseur lorsque vous survolez un élément en utilisant la prop [`reference`](https://reka-ui.com/docs/components/tooltip#trigger):

::component-example
---
name: 'popover-cursor-example'
---
::

### Avec slot d'ancrage

Vous pouvez utiliser le slot `#anchor` pour positionner le Popover contre un élément personnalisé.

::warning
Cet emplacement ne fonctionne que lorsque `mode` est `click`.
::

::component-example
---
collapse: true
name: 'popover-anchor-slot-example'
---
::

## API

### Props

:component-props

### Slots

:component-slots

::note
La fonction `close` n'est disponible que lorsque `mode` est défini sur `click` car Reka UI expose cela pour [`Popover`](https://reka-ui.com/docs/components/popover#close-using-slot-props) mais pas pour [`HoverCard`](https://reka-ui.com/docs/components/hover-card).
::

### Emits

:component-emits

## Thème

:component-theme

## Changelog

:component-changelog
