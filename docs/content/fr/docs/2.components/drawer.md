---
description: Un tiroir qui glisse doucement dans et hors de l'écran.
category: overlay
keywords:
  - bottom sheet
  - action sheet
  - mobile sheet
links:
  - label: Draveur
    icon: i-custom-reka-ui
    to: https://github.com/unovue/vaul-vue
  - label: GitHub à
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Drawer.vue
---

## Utilisation

Utilisez un [Button](/docs/components/button) ou tout autre composant dans l'emplacement par défaut du tiroir.

Ensuite, utilisez l'emplacement `#content` pour ajouter le contenu affiché lorsque le tiroir est ouvert.

::component-code
---
prettier: true
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up" />

  content: |

    <Placeholder class="h-48 m-4" />
---

:u-button{label="ouvert" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up"}

#content
:placeholder{class="h-48 m-4"}
::

Vous pouvez également utiliser les fentes `#header`{lang="ts-type"}, `#body`{lang="ts-type"} et `#footer`{lang="ts-type"} pour personnaliser le contenu du tiroir.

### Titre

Utilisez la prop `title` pour définir le titre de l'en-tête du tiroir.

::component-code
---
prettier: true
props:
  title: 'Drawer with title'
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up" />

  body: |

    <Placeholder class="h-48" />
---

:u-button{label="ouvert" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up"}

#body
:placeholder{class="h-48"}
::

### Définition

Utilisez le prop `description` pour définir la description de l'en-tête du tiroir.

::component-code
---
prettier: true
ignore:
  - title
props:
  title: 'Drawer with description'
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up" />

  body: |

    <Placeholder class="h-48" />
---

:u-button{label="ouvert" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up"}

#body
:placeholder{class="h-48"}
::

### Fermer: badge{label="4.10+" class="align-text-top"}

Utilisez le prop `close` pour afficher un bouton de fermeture dans le tiroir. Par défaut `false`.

Vous pouvez passer n'importe quelle propriété du composant [Button](/docs/components/button) pour le personnaliser.

::component-code
---
prettier: true
ignore:
  - title
  - close.color
  - close.variant
props:
  title: 'Drawer with close button'
  close:
    color: primary
    variant: outline
    class: 'rounded-full'
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up" />

  body: |

    <Placeholder class="h-48" />
---

:u-button{label="ouvert" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up"}

#body
:placeholder{class="h-48"}
::

### Close Icône: badge{label="4.10+" class="align-text-top"}

Utilisez la prop `close-icon` pour personnaliser le bouton de fermeture [Icon](/docs/components/icon).

::component-code
---
prettier: true
ignore:
  - title
props:
  title: 'Drawer with close button'
  close: true
  closeIcon: 'i-lucide-arrow-right'
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up" />

  body: |

    <Placeholder class="h-48" />
---

:u-button{label="ouvert" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up"}

#body
:placeholder{class="h-48"}
::

### Direction

Utilisez la prop `direction` pour contrôler la direction du tiroir. Par défaut, `bottom`.

::component-code
---
prettier: true
props:
  direction: 'right'
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up" />

  content: |

    <Placeholder class="min-w-96 min-h-96 size-full m-4" />
---

:u-button{label="ouvert" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up"}

#content
:placeholder{class="min-w-96 min-h-96 size-full m-4"}
::

### Inset électronique

Utilisez le prop `inset` pour insérer le tiroir par les bords.

::component-code
---
prettier: true
props:
  direction: 'right'
  inset: true
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up" />

  content: |

    <Placeholder class="min-w-96 min-h-96 size-full m-4" />
---

:u-button{label="ouvert" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up"}

#content
:placeholder{class="min-w-96 min-h-96 size-full m-4"}
::

### Handle

Utilisez la prop `handle` pour contrôler si le tiroir a une poignée ou non. Par défaut, `true`.

::component-code
---
prettier: true
props:
  handle: false
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up" />

  content: |

    <Placeholder class="h-48 m-4" />
---

:u-button{label="ouvert" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up"}

#content
:placeholder{class="h-48 m-4"}
::

### Handle uniquement

Utilisez le prop `handle-only` pour ne permettre que le tiroir d'être traîné par la poignée.

::component-code
---
prettier: true
props:
  handleOnly: true
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up" />

  content: |

    <Placeholder class="h-48 m-4" />
---

:u-button{label="ouvert" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up"}

#content
:placeholder{class="h-48 m-4"}
::

### Overlay écrit

Utilisez la prop `overlay` pour contrôler si le tiroir a une superposition ou non. Par défaut, `true`.

::component-code
---
prettier: true
props:
  overlay: false
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up" />

  content: |

    <Placeholder class="h-48 m-4" />
---

:u-button{label="ouvert" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up"}

#content
:placeholder{class="h-48 m-4"}
::

### Modale

Utilisez la prop `modal` pour contrôler si le tiroir bloque l'interaction avec le contenu extérieur.

::note
Lorsque `modal` est défini sur `false`, la superposition est automatiquement désactivée et le contenu extérieur devient interactif.
::

::component-code
---
prettier: true
props:
  modal: false
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up" />

  content: |

    <Placeholder class="h-48 m-4" />
---

:u-button{label="ouvert" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up"}

#content
:placeholder{class="h-48 m-4"}
::

### Dismissible

Utilisez la prop `dismissible` pour contrôler si le tiroir est éliminable lorsque vous cliquez à l'extérieur ou appuyez sur escape. Par défaut, `true`.

::note
Un événement `close:prevent` sera émis lorsque l'utilisateur essaiera de le fermer.
::

::tip
Vous pouvez combiner `modal: false` avec `dismissible: false` pour rendre l'arrière-plan du tiroir interactif sans le fermer.
::

::component-example
---
prettier: true
name: 'drawer-dismissible-example'
---
::

### Scale arrière-plan

Utilisez la prop `should-scale-background` pour redimensionner l'arrière-plan lorsque le tiroir est ouvert, créant ainsi un effet de profondeur visuelle. Vous pouvez définir la prop `set-background-color-on-scale` sur `false` pour éviter de modifier la couleur de l'arrière-plan.

::component-code
---
prettier: true
props:
  shouldScaleBackground: true
  setBackgroundColorOnScale: true
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up" />

  content: |

    <Placeholder class="h-48 m-4" />
---

:u-button{label="ouvert" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up"}

#content
:placeholder{class="h-screen m-4"}
::

::warning
Assurez-vous d'ajouter la directive `data-vaul-drawer-wrapper` à un élément parent de votre application pour que cela fonctionne.

```vue [app.vue]
<template>
  <UApp>
    <div class="bg-default" data-vaul-drawer-wrapper>
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </div>
  </UApp>
</template>
```

```ts [nuxt.config.ts]
export default defineNuxtConfig({
  app: {
    rootAttrs: {
      'data-vaul-drawer-wrapper': '',
      'class': 'bg-default'
    }
  }
})
```

::

## Exemples

### Control état ouvert

Vous pouvez contrôler l'état ouvert en utilisant la prop `default-open` ou la directive `v-model:open`.

::component-example
---
prettier: true
name: 'drawer-open-example'
---
::

::note
Dans cet exemple, en utilisant [`defineShortcuts`](/docs/composables/define-shortcuts), vous pouvez basculer le tiroir en appuyant sur: kbd{value="O"}.
::

::tip
Cela vous permet de déplacer la gâchette à l'extérieur du tiroir ou de la retirer complètement.
::

### Tireur réactif

Vous pouvez rendre un composant [Modal](/docs/components/modal) sur le bureau et un tiroir sur mobile par exemple.

::component-example
---
prettier: true
name: 'drawer-responsive-example'
---
::

### Tireurs imbriqués

Vous pouvez imbriquer des tiroirs les uns dans les autres en utilisant le prop `nested`.

::component-example
---
prettier: true
name: 'drawer-nested-example'
---
::

### With slot de pied de page

Utilisez le slot `#footer` pour ajouter du contenu après le corps du tiroir.

::component-example
---
prettier: true
collapse: true
name: 'drawer-footer-slot-example'
---
::

### With palette de commandes

Vous pouvez utiliser un composant [CommandPalette](/docs/components/command-palette) à l'intérieur du contenu du tiroir.

::component-example
---
collapse: true
name: 'drawer-command-palette-example'
---
::

::note
Cet exemple utilise `useLazyFetch` avec `immediate: false` pour récupérer les données uniquement lorsque le tiroir s'ouvre.
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
