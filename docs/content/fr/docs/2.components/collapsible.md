---
description: Un élément pliable pour basculer la visibilité de son contenu.
category: element
keywords:
  - disclosure
  - expand
links:
  - label: Collapsible
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/collapsible
  - label: GitHub à
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Collapsible.vue
---

## Utilisation

Utilisez un [Button](/docs/components/button) ou tout autre composant dans l'emplacement par défaut du pliable.

Ensuite, utilisez l'emplacement `#content` pour ajouter le contenu affiché lorsque le pliable est ouvert.

::component-code
---
prettier: true
ignore:
  - class
props:
  class: 'flex flex-col gap-2 w-48'
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-down" block />

  content: |

    <Placeholder class="h-48" />
---

:u-button{label="ouvert" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-down" block}

#content
:placeholder{class="h-48"}
::

### Démontage

Utilisez la prop `unmount-on-hide` pour empêcher que le contenu ne soit démonté lorsque le pliable est réduit.

::component-code
---
prettier: true
ignore:
  - class
props:
  unmountOnHide: false
  class: 'flex flex-col gap-2 w-48'
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-down" block />

  content: |

    <Placeholder class="h-48" />
---

:u-button{label="ouvert" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-down" block}

#content
:placeholder{class="h-48"}
::

::note
Vous pouvez inspecter le DOM pour voir le contenu rendu.
::

### Désactivé

Utilisez le prop `disabled` pour désactiver le repliable.

::component-code
---
prettier: true
ignore:
  - class
props:
  class: 'flex flex-col gap-2 w-48'
  disabled: true
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-down" block />

  content: |

    <Placeholder class="h-48" />
---

:u-button{label="ouvert" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-down" block}

#content
:placeholder{class="h-48"}
::

## exemples

### Control état ouvert

Vous pouvez contrôler l'état ouvert en utilisant la prop `default-open` ou la directive `v-model:open`.

::component-example
---
name: 'collapsible-open-example'
---
::

::note
Dans cet exemple, en tirant parti de [`defineShortcuts`](/docs/composables/define-shortcuts), vous pouvez basculer le rétractable en appuyant sur: kbd{value="O"}.
::

::tip
Cela vous permet de déplacer le déclencheur en dehors du pliable ou de le retirer complètement.
::

### Avec icône rotative

Voici un exemple avec une icône tournante dans le bouton qui indique l'état ouvert du pliable.

::component-example
---
name: 'collapsible-icon-example'
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

## Changelog

:component-changelog
