---
description: Fenêtre de dialogue qui peut être utilisée pour afficher un message ou demander une entrée utilisateur.
category: overlay
keywords:
  - dialog
  - popup
  - confirm
  - alert dialog
links:
  - label: dialogue
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/dialog
  - label: GitHub à
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Modal.vue
---

## Utilisation

Utilisez un [Button](/docs/components/button) ou tout autre composant dans l'emplacement par défaut du Modal.

A continuación, utilice la ranura `#content` para añadir el contenido que se muestra cuando el Modal está abierto.

::component-code
---
prettier: true
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" />

  content: |

    <Placeholder class="h-48 m-4" />
---

:u-button{label="ouvert" color="neutral" variant="subtle"}

#content
:placeholder{class="h-48 m-4"}
::

Vous pouvez également utiliser les emplacements `#header`{lang="ts-type"}, `#body`{lang="ts-type"} et `#footer`{lang="ts-type"} pour personnaliser le contenu de la Modal.

### Titre

Utilisez la prop `title` pour définir le titre de l'en-tête du Modal.

::component-code
---
prettier: true
props:
  title: 'Modal with title'
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" />

  body: |

    <Placeholder class="h-48" />
---

:u-button{label="ouvert" color="neutral" variant="subtle"}

#body
:placeholder{class="h-48"}
::

### Description

Utilisez la prop `description` pour définir la description de l'en-tête du Modal.

::component-code
---
prettier: true
ignore:
  - title
props:
  title: 'Modal with description'
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" />

  body: |

    <Placeholder class="h-48" />
---

:u-button{label="ouvert" color="neutral" variant="subtle"}

#body
:placeholder{class="h-48"}
::

### Fermeture

Utilisez le prop `close` pour personnaliser ou masquer le bouton de fermeture (avec la valeur `false`) affiché dans l'en-tête du Modal.

Puede pasar cualquier propiedad del componente [Button](/docs/components/button) para personalizarlo.

::component-code
---
prettier: true
ignore:
  - title
  - close.color
  - close.variant
props:
  title: 'Modal with close button'
  close:
    color: primary
    variant: outline
    class: 'rounded-full'
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" />

  body: |

    <Placeholder class="h-48" />
---

:u-button{label="ouvert" color="neutral" variant="subtle"}

#body
:placeholder{class="h-48"}
::

::tip
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
  title: 'Modal with close button'
  closeIcon: 'i-lucide-arrow-right'
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" />

  body: |

    <Placeholder class="h-48" />
---

:u-button{label="ouvert" color="neutral" variant="subtle"}

#body
:placeholder{class="h-48"}
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

### Transition

Utilisez la prop `transition` pour contrôler si le Modal est animé ou non.

::component-code
---
prettier: true
ignore:
  - title
props:
  transition: false
  title: 'Modal without transition'
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" />

  body: |

    <Placeholder class="h-48" />
---

:u-button{label="ouvert" color="neutral" variant="subtle"}

#body
:placeholder{class="h-48"}
::

### Overlay

Utilisez la prop `overlay` pour contrôler si le Modal a une superposition ou non. Par défaut à `true`.

::component-code
---
prettier: true
ignore:
  - title
props:
  overlay: false
  title: 'Modal without overlay'
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" />

  body: |

    <Placeholder class="h-48" />
---

:u-button{label="ouvert" color="neutral" variant="subtle"}

#body
:placeholder{class="h-48"}
::

### Modal électrique

Utilisez la prop `modal` pour contrôler si le module bloque l'interaction avec le contenu extérieur.

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
  title: 'Modal interactive'
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" />

  body: |

    <Placeholder class="h-48" />
---

:u-button{label="ouvert" color="neutral" variant="subtle"}

#body
:placeholder{class="h-48"}
::

### Délivrable

Utilisez la prop `dismissible` pour contrôler si le Modal est éliminable lorsque vous cliquez en dehors de celui-ci ou appuyez sur escape.

::note
Un événement `close:prevent` sera émis lorsque l'utilisateur essaiera de le fermer.
::

::tip
Vous pouvez combiner `modal: false` avec `dismissible: false` pour rendre l'arrière-plan du Modal interactif sans le fermer.
::

::component-code
---
prettier: true
ignore:
  - title
props:
  dismissible: false
  modal: true
  title: 'Modal non-dismissible'
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" />

  body: |

    <Placeholder class="h-48" />
---

:u-button{label="ouvert" color="neutral" variant="subtle"}

#body
:placeholder{class="h-48"}
::

### Scrollable: badge{label="4.2+" class="align-text-top"}

Utilisez le prop `scrollable` pour faire défiler le contenu du Modal dans la superposition.

::warning
Comme la superposition est nécessaire pour le défilement, `modal: false` n'est pas compatible et `overlay: false` supprime uniquement l'arrière-plan.
::

::component-code
---
prettier: true
ignore:
  - title
props:
  scrollable: true
  overlay: true
  title: 'Modal scrollable'
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" />

  body: |

    <Placeholder class="h-full" />
---

:u-button{label="ouvert" color="neutral" variant="subtle"}

#body
:placeholder{class="h-screen"}
::

::caution
Il y a un problème [known e](https://reka-ui.com/docs/components/dialog#scrollable-overlay) où cliquer sur la barre de défilement peut fermer involontairement la boîte de dialogue sur certains systèmes d'exploitation.
::

### plein écran

Utilisez le prop `fullscreen` pour rendre le Modal plein écran.

::component-code
---
prettier: true
ignore:
  - title
  - fullscreen
props:
  fullscreen: true
  title: 'Modal fullscreen'
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

Utilisez la prop `unmount-on-hide` pour empêcher que le contenu du module ne soit démonté lorsqu 'il est fermé.

::component-code
---
prettier: true
ignore:
  - title
props:
  unmountOnHide: false
  title: 'Modal'
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" />

  body: |

    <Placeholder class="h-48" />
---

:u-button{label="ouvert" color="neutral" variant="subtle"}

#body
:placeholder{class="h-48"}
::

::note
Vous pouvez inspecter le DOM pour voir le contenu du Modal rendu même lorsqu 'il est fermé.
::

::tip
Lorsque la prop `portal` est définie sur `false`, le contenu est également rendu sur le serveur. Ceci est utile pour rendre un Modal ouvert pendant SSR sans flash sur le chargement de la page, ou pour exposer son contenu pour le référencement.
::

## Exemples

### Control état ouvert

Vous pouvez contrôler l'état ouvert en utilisant la prop `default-open` ou la directive `v-model:open`.

::component-example
---
name: 'modal-open-example'
---
::

::note
Dans cet exemple, en utilisant [`defineShortcuts`](/docs/composables/define-shortcuts), vous pouvez basculer le Modal en appuyant sur: kbd{value="O"}.
::

::tip
Cela vous permet de déplacer le déclencheur en dehors du Modal ou de le supprimer complètement.
::

### Programmatique

Vous pouvez utiliser le composable [`useOverlay`](/docs/composables/use-overlay) pour ouvrir un Modal par programmation.

::warning
Assurez-vous d'envelopper votre application avec le composant [`App`](/docs/components/app) qui utilise le composant [`OverlayProvider`](https://github.com/nuxt/ui/blob/v4/src/runtime/components/OverlayProvider.vue).
::

Tout d'abord, créez un composant modal qui sera ouvert par programmation:

::component-example
---
prettier: true
name: 'modal-example'
preview: false
---
::

::note
Nous émettons un événement `close` lorsque le modal est fermé ou rejeté ici. Vous pouvez émettre n'importe quelle donnée via l'événement `close`, et ces données deviennent la valeur résolue de `open()`. L'événement doit être émis pour que la promesse se résolve.
::

Ensuite, utilisez-le dans votre app:

::component-example
---
name: 'modal-programmatic-example'
---
::

::tip
Vous pouvez fermer le modal à l'intérieur du composant modal en émettant `emit('close')`.
::

### Modaux imbriqués

Vous pouvez imbriquer des modaux les uns dans les autres.

::component-example
---
name: 'modal-nested-example'
---
::

### With slot de pied de page

Utilice la ranura `#footer` para añadir contenido después del cuerpo del Modal.

::component-example
---
name: 'modal-footer-slot-example'
---
::

### With palette de commandes

Vous pouvez utiliser un composant [CommandPalette](/docs/components/command-palette) à l'intérieur du contenu du Modal.

::component-example
---
collapse: true
name: 'modal-command-palette-example'
---
::

::note
Cet exemple utilise `useLazyFetch` avec `immediate: false` pour ne récupérer des données que lorsque le Modal s'ouvre.
::

## API

### Props

:component-props

### Slots

:component-slots

### Emis

:component-emits

## Thème

:component-theme

## Changelog écrit

:component-changelog
