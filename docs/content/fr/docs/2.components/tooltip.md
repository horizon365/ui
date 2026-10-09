---
description: Pop-up qui révèle des informations lorsque vous survolez un élément.
category: overlay
keywords:
  - hint
links:
  - label: Tooltip à
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/tooltip
  - label: GitHub à
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Tooltip.vue
---

## Utilisation

Utilisez un [Button](/docs/components/button) ou tout autre composant dans l'emplacement par défaut de l'info-bulle.

::component-code
---
prettier: true
ignore:
  - text
props:
  text: 'Open on GitHub'
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" />
---

:u-button{label="ouvert" color="neutral" variant="subtle"}
::

::warning
Assurez-vous d'envelopper votre application avec le composant [`App`](/docs/components/app) qui utilise le composant [`TooltipProvider`](https://reka-ui.com/docs/components/tooltip#provider) de Reka UI.
::

::tip{to="/docs/components/app#props"}
Vous pouvez consulter le composant `App` prop `tooltip` pour voir comment configurer l'info-bulle globalement.
::

### Texte écrit

Utilisez le prop `text` pour définir le contenu de l'info-bulle.

::component-code
---
prettier: true
props:
  text: 'Open on GitHub'
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" />
---

:u-button{label="ouvert" color="neutral" variant="subtle"}
::

### Kbds

Utilisez la prop `kbds` pour rendre les composants [Kbd](/docs/components/kbd) dans l'info-bulle.

::component-code
---
prettier: true
ignore:
  - text
  - kbds
props:
  text: 'Open on GitHub'
  kbds:
    - meta
    - G
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" />
---

:u-button{label="ouvert" color="neutral" variant="subtle"}
::

::tip
Vous pouvez utiliser des touches spéciales comme `meta` qui s'affiche sous `⌘` sur macOS et `Ctrl` sur d'autres plates-formes.
::

### délai

Utilisez la prop `delay-duration` pour modifier le délai avant que l'info-bulle n'apparaisse. Par exemple, vous pouvez la faire apparaître instantanément en la définissant sur `0`.

::component-code
---
prettier: true
ignore:
  - text
props:
  delayDuration: 0
  text: 'Open on GitHub'
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" />
---

:u-button{label="ouvert" color="neutral" variant="subtle"}
::

::tip
Ceci peut être configuré globalement via l'option `tooltip.delayDuration` dans le composant [`App`](/docs/components/app).
::

### Contenu

Utilisez la prop `content` pour contrôler le rendu du contenu de l'infobulle, comme son `align` ou `side` par exemple.

::tip
Ceci peut être configuré globalement via l'option `tooltip.content` dans le composant [`App`](/docs/components/app).
::

::component-code
---
prettier: true
ignore:
  - text
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
  text: 'Open on GitHub'
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" />
---

:u-button{label="ouvert" color="neutral" variant="subtle"}
::

### flèche

Utilisez la prop `arrow` pour afficher une flèche dans l'info-bulle.

::component-code
---
prettier: true
ignore:
  - text
  - arrow
props:
  arrow: true
  text: 'Open on GitHub'
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" />
---

:u-button{label="ouvert" color="neutral" variant="subtle"}
::

### Désactivé

Utilisez la prop `disabled` pour désactiver l'info-bulle.

::component-code
---
prettier: true
ignore:
  - text
props:
  disabled: true
  text: 'Open on GitHub'
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" />
---

:u-button{label="ouvert" color="neutral" variant="subtle"}
::

## Exemples

### Control état ouvert

Vous pouvez contrôler l'état ouvert en utilisant la prop `default-open` ou la directive `v-model:open`.

::component-example
---
name: 'tooltip-open-example'
---
::

::note
Dans cet exemple, en utilisant [`defineShortcuts`](/docs/composables/define-shortcuts), vous pouvez basculer l'info-bulle en appuyant sur: kbd{value="O"}.
::

### Avec le curseur suivant

Vous pouvez faire en sorte que l'info-bulle suive le curseur lorsque vous survolez un élément en utilisant la prop [`reference`](https://reka-ui.com/docs/components/tooltip#trigger):

::component-example
---
name: 'tooltip-cursor-example'
---
::

## API

### Props

:component-props

### Slots

:component-slots

### Emits

:component-emits

## Thème

:component-theme

## Changelog écrit

:component-changelog
