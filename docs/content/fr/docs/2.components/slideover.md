---
description: Une boîte de dialogue qui glisse de n'importe quel côté de l'écran.
category: overlay
keywords:
  - sheet
  - side panel
  - off-canvas
links:
  - label: Dialogue
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/dialog
  - label: GitHub à
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Slideover.vue
---

## Utilisation

Use a [Button](/docs/components/button) or any other component in the default slot of the Slideover.

Ensuite, utilisez l'emplacement `#content` pour ajouter le contenu affiché lorsque le Slideover est ouvert.

::component-code
---
prettier: true
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" />

  content: |

    <Placeholder class="h-full m-4" />
---

:u-button{label="ouvert" color="neutral" variant="subtle"}

#content
:placeholder{class="h-full m-4"}
::

Vous pouvez également utiliser les emplacements `#header`{lang="ts-type"}, `#body`{lang="ts-type"} et `#footer`{lang="ts-type"} pour personnaliser le contenu du Slideover.

### Titre

Utilisez la prop `title` pour définir le titre de l'en-tête du Slideover.

::component-code
---
prettier: true
props:
  title: 'Slideover with title'
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" />

  body: |

    <Placeholder class="h-full" />
---

:u-button{label="ouvert" color="neutral" variant="subtle"}

#body
:placeholder{class="h-full"}
::

### Description

Utilisez la prop `description` pour définir la description de l'en-tête du Slideover.

::component-code
---
prettier: true
ignore:
  - title
props:
  title: 'Slideover with description'
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" />

  body: |

    <Placeholder class="h-full" />
---

:u-button{label="ouvert" color="neutral" variant="subtle"}

#body
:placeholder{class="h-full"}
::

### Fermeture

Utilisez la prop `close` pour personnaliser ou masquer le bouton de fermeture (avec la valeur `false`) affiché dans l'en-tête du Slideover.

Puede pasar cualquier propiedad del componente [Button](/docs/components/button) para personalizarlo.

::component-code
---
prettier: true
ignore:
  - title
  - close.color
  - close.variant
props:
  title: 'Slideover with close button'
  close:
    color: primary
    variant: outline
    class: 'rounded-full'
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" />

  body: |

    <Placeholder class="h-full" />
---

:u-button{label="ouvert" color="neutral" variant="subtle"}

#body
:placeholder{class="h-full"}
::

::note
El botón de cierre no se muestra si se utiliza la ranura `#content`, ya que es parte del encabezado.
::

### Fermer l'icône

Utilisez la prop `close-icon` pour personnaliser le bouton de fermeture [Icon](/docs/components/icon).

::component-code
---
prettier: true
ignore:
  - title
props:
  title: 'Slideover with close button'
  closeIcon: 'i-lucide-arrow-right'
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" />

  body: |

    <Placeholder class="h-full" />
---

:u-button{label="ouvert" color="neutral" variant="subtle"}

#body
:placeholder{class="h-full"}
::

::framework-only
#nuxt
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
Vous pouvez personnaliser cette icône globalement dans votre `app.config.ts` sous la touche `ui.icons.close`.
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
Vous pouvez personnaliser cette icône globalement dans votre `vite.config.ts` sous la touche `ui.icons.close`.
:::
::

### Side

Utilisez le prop `side` pour définir le côté de l'écran où le Slideover va glisser de. Defaults à `right`.

::component-code
---
prettier: true
ignore:
  - title
props:
  side: 'left'
  title: 'Slideover with side'
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" />

  body: |

    <Placeholder class="h-full min-h-48" />
---

:u-button{label="ouvert" color="neutral" variant="subtle"}

#body
:placeholder{class="h-full min-h-48"}
::

### Inset: badge{label="4.3+" class="align-text-top"}

Utilisez le prop `inset` pour insérer le Slideover depuis les bords.

::component-code
---
prettier: true
ignore:
  - title
props:
  side: 'right'
  inset: true
  title: 'Slideover with inset'
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" />

  body: |

    <Placeholder class="min-w-96 min-h-96 size-full" />
---

:u-button{label="ouvert" color="neutral" variant="subtle"}

#body
:placeholder{class="min-w-96 min-h-96 size-full"}
::

### Transition

Utilisez la prop `transition` pour contrôler si le Slideover est animé ou non.

::component-code
---
prettier: true
ignore:
  - title
props:
  transition: false
  title: 'Slideover without transition'
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" />

  body: |

    <Placeholder class="h-full" />
---

:u-button{label="ouvert" color="neutral" variant="subtle"}

#body
:placeholder{class="h-full"}
::

### Overlay

Utilisez la prop `overlay` pour contrôler si le Slideover a une superposition ou non. Par défaut, `true`.

::component-code
---
prettier: true
ignore:
  - title
props:
  overlay: false
  title: 'Slideover without overlay'
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" />

  body: |

    <Placeholder class="h-full" />
---

:u-button{label="ouvert" color="neutral" variant="subtle"}

#body
:placeholder{class="h-full"}
::

### Modale

Utilisez la prop `modal` pour contrôler si le Slideover bloque l'interaction avec le contenu extérieur.

::note
Lorsque `modal` est défini sur `false`, la superposition est automatiquement désactivée et le contenu extérieur devient interactif.
::

::component-code
---
prettier: true
ignore:
  - title
props:
  modal: false
  title: 'Slideover interactive'
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" />

  body: |

    <Placeholder class="h-full" />
---

:u-button{label="ouvert" color="neutral" variant="subtle"}

#body
:placeholder{class="h-full"}
::

### Dismissible

Utilisez la prop `dismissible` pour contrôler si le Slideover est éliminable lorsque vous cliquez en dehors de celui-ci ou appuyez sur escape.

::note
Un événement `close:prevent` sera émis lorsque l'utilisateur essaiera de le fermer.
::

::tip
Vous pouvez combiner `modal: false` avec `dismissible: false` pour rendre l'arrière-plan du Slideover interactif sans le fermer.
::

::component-code
---
prettier: true
ignore:
  - title
props:
  dismissible: false
  modal: true
  title: 'Slideover non-dismissible'
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" />

  body: |

    <Placeholder class="h-full" />
---

:u-button{label="ouvert" color="neutral" variant="subtle"}

#body
:placeholder{class="h-full"}
::

### Unmount: badge{label="4.10+" class="align-text-top"}

Utilisez la prop `unmount-on-hide` pour empêcher que le contenu du Slideover ne soit démonté lorsqu 'il est fermé. Par défaut, `true`.

::component-code
---
prettier: true
ignore:
  - title
props:
  unmountOnHide: false
  title: 'Slideover'
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" />

  body: |

    <Placeholder class="h-full" />
---

:u-button{label="ouvert" color="neutral" variant="subtle"}

#body
:placeholder{class="h-full"}
::

::note
Vous pouvez inspecter le DOM pour voir le contenu du Slideover en cours de rendu même lorsqu 'il est fermé.
::

::tip
Lorsque la prop `portal` est définie sur `false`, le contenu est également rendu sur le serveur. Ceci est utile pour rendre un slideover ouvert pendant SSR sans flash sur le chargement de la page, ou pour exposer son contenu pour le référencement.
::

## Exemples

### Control état ouvert

Vous pouvez contrôler l'état ouvert en utilisant la prop `default-open` ou la directive `v-model:open`.

::component-example
---
name: 'slideover-open-example'
---
::

::note
Dans cet exemple, en utilisant [`defineShortcuts`](/docs/composables/define-shortcuts), vous pouvez basculer le Slideover en appuyant sur: kbd{value="O"}.
::

::tip
Cela vous permet de déplacer le déclencheur en dehors du Slideover ou de le supprimer complètement.
::

### Utilisation programmatique

Vous pouvez utiliser le composable [`useOverlay`](/docs/composables/use-overlay) pour ouvrir un Slideover par programmation.

::warning
Assurez-vous d'envelopper votre application avec le composant [`App`](/docs/components/app) qui utilise le composant [`OverlayProvider`](https://github.com/nuxt/ui/blob/v4/src/runtime/components/OverlayProvider.vue).
::

Tout d'abord, créez un composant de glissement qui sera ouvert par programme:

::component-example
---
prettier: true
name: 'slideover-example'
preview: false
---
::

::note
Nous émettons un événement `close` lorsque le slideover est fermé ou rejeté ici. Vous pouvez émettre n'importe quelle donnée via l'événement `close`, et ces données deviennent la valeur résolue de `open()`. L'événement doit être émis pour que la promesse se résolve.
::

Ensuite, utilisez-le dans votre app:

::component-example
---
name: 'slideover-programmatic-example'
---
::

::tip
Vous pouvez fermer le coulissant dans le composant coulissant en émettant `emit('close')`.
::

### Slide-overs imbriqués

Vous pouvez imbriquer des glissières les unes dans les autres.

::component-example
---
name: 'slideover-nested-example'
---
::

### With slot de pied de page

Utilisez le slot `#footer` pour ajouter du contenu après le corps du Slideover.

::component-example
---
name: 'slideover-footer-slot-example'
---
::

## API équipement

### Props

:component-props

### Slots

:component-slots

### Emits

:component-emits

## Thème

:component-theme

## Changelog écrit.

:component-changelog
