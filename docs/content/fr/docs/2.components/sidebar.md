---
description: 'Une barre latérale pliable avec de multiples variantes visuelles.'
category: layout
links:
  - label: GitHub à
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Sidebar.vue
---

## Utilisation

Sur le bureau, il rend en ligne et peut être rétracté; sur mobile, il ouvre un composant [Modal](/docs/components/modal), [Slideover](/docs/components/slideover) ou [Drawer](/docs/components/drawerxph011).

::tip{to="/docs/components/dashboard-sidebar"}
**Sidebar vs DashboardSidebar**: Ce composant est une barre latérale simple et autonome que vous pouvez déposer n'importe où (panneau de discussion, paramètres, navigation). Si vous avez besoin de glisser-redimensionner, de persistance d'état et d'intégration avec [xx](/docs/components/dashboard-group), utilisez plutôt [DashboardSidebar](ph019).
::

Use the `header`, `default` and `footer` slots to customize the content of the sidebar. The `v-model:open` directive is viewport-aware: on desktop it controls the expanded/collapsed state, on mobile it controls the menu.

::component-example
---
collapse: true
prettier: true
name: 'sidebar-example'
overflowHidden: true
class: '!p-0 !justify-start h-[500px] contain-[paint] transform-gpu'
---
::

### Variant équivalent

Utilisez la prop `variant` pour modifier le style visuel de la barre latérale. Par défaut `sidebar`.

::component-example
---
collapse: true
prettier: true
name: 'sidebar-props-example'
overflowHidden: true
options:
  - name: 'variant'
    label: 'variant'
    items:
      - sidebar
      - floating
      - inset
    default: 'inset'
class: '!p-0 !justify-start h-[500px] contain-[paint] transform-gpu'
---
::

### Rétractable

Utilisez la prop `collapsible` pour modifier le comportement d'effondrement de la barre latérale. Par défaut, `offcanvas`.

- `offcanvas`: La barre latérale glisse complètement hors de vue.
- `icon`: La barre latérale se réduit à une largeur d'icône seulement.
- `none`: La barre latérale n'est pas pliable.

::component-example
---
collapse: true
prettier: true
name: 'sidebar-props-example'
overflowHidden: true
options:
  - name: 'collapsible'
    label: 'collapsible'
    items:
      - offcanvas
      - icon
      - none
    default: 'icon'
  - name: 'variant'
    label: 'variant'
    items:
      - sidebar
      - floating
      - inset
    default: 'sidebar'
class: '!p-0 !justify-start h-[500px] contain-[paint] transform-gpu'
---
::

::tip{to="#slots"}
Vous pouvez accéder au `state` dans les accessoires de la fente pour personnaliser le contenu de la barre latérale lorsqu 'elle est réduite.
::

### Side

Utilisez la prop `side` pour changer le côté de la barre latérale. Par défaut à `left`.

::component-example
---
collapse: true
prettier: true
name: 'sidebar-props-example'
overflowHidden: true
options:
  - name: 'side'
    label: 'side'
    items:
      - left
      - right
    default: 'right'
class: '!p-0 !justify-start h-[500px] contain-[paint] transform-gpu'
---
::

### Titre

Utilisez la prop `title` pour définir le titre de l'en-tête de la barre latérale.

::component-code
---
prettier: true
hide:
  - class
  - ui
ignore:
  - ui.container
props:
  title: Navigation
  ui:
    container: h-full
slots:
  default: |

    <Placeholder class="h-full" />
class: '!p-0 !justify-start h-[500px] contain-[paint] transform-gpu'
---

:placeholder{class="h-full"}
::

### Description

Utilisez la prop `description` pour définir la description de l'en-tête de la barre latérale.

::component-code
---
prettier: true
hide:
  - class
  - ui
ignore:
  - title
  - ui.container
props:
  title: Navigation
  description: Browse your workspace
  ui:
    container: h-full
slots:
  default: |

    <Placeholder class="h-full" />
class: '!p-0 !justify-start h-[500px] contain-[paint] transform-gpu'
---

:placeholder{class="h-full"}
::

### rail électrique

Utilisez le prop `rail` pour afficher un mince bord interactif sur la barre latérale qui permet de basculer l'état effondré au clic. Le rail n'est rendu que lorsque `collapsible` n'est pas `none`.

::component-code
---
prettier: true
ignore:
  - title
  - ui.container
hide:
  - ui
  - class
props:
  rail: true
  collapsible: icon
  title: Navigation
  ui.container: h-full
slots:
  default: |

    <Placeholder class="h-full" />
class: '!p-0 !justify-start h-[500px] contain-[paint] transform-gpu'
---

:placeholder{class="h-full"}
::

### Fermer

Utilisez la prop `close` pour afficher un bouton de fermeture dans l'en-tête de la barre latérale. Le bouton de fermeture n'est rendu que lorsque `collapsible` n'est pas `none`.

Vous pouvez passer n'importe quelle propriété du composant [Button](/docs/components/button) pour le personnaliser.

::component-code
---
prettier: true
ignore:
  - title
  - rail
  - ui.container
hide:
  - ui
  - class
props:
  close: true
  rail: true
  collapsible: icon
  title: Navigation
  ui:
    container: h-full
items:
  close:
    - true
    - false
slots:
  default: |

    <Placeholder class="h-full" />
class: '!p-0 !justify-start h-[500px] contain-[paint] transform-gpu'
---

:placeholder{class="h-full"}
::

### Fermer l'icône

Utilisez la prop `close-icon` pour personnaliser le bouton de fermeture [Icon](/docs/components/icon).

::component-code
---
prettier: true
ignore:
  - title
  - rail
  - side
  - close
  - ui.container
hide:
  - ui
  - class
props:
  close: true
  closeIcon: i-lucide-panel-right-close
  rail: true
  collapsible: icon
  side: right
  title: Navigation
  ui:
    container: h-full
items:
  close:
    - true
    - false
slots:
  default: |

    <Placeholder class="h-full" />
class: '!p-0 !justify-start h-[500px] contain-[paint] transform-gpu'
---

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

### mode

Utilisez la prop `mode` pour changer le mode du menu de la barre latérale sur mobile. Par défaut, `slideover`.

::component-example
---
collapse: true
iframe:
  height: 500px;
iframeMobile: true
overflowHidden: true
name: 'sidebar-mode-example'
options:
  - name: 'mode'
    label: 'mode'
    default: 'slideover'
    items:
      - modal
      - slideover
      - drawer
props:
  class: 'w-full'
---
::

::tip{to="#props"}
Vous pouvez utiliser le prop `menu` pour personnaliser le menu de la barre latérale, il s'adaptera en fonction du mode que vous choisissez.
::

## Exemples

### Control état ouvert

Vous pouvez contrôler l'état ouvert à l'aide de la prop `open` ou de la directive `v-model:open`. Sur le bureau, il contrôle l'état développé/réduit, sur mobile, il ouvre/ferme le menu de la feuille.

::component-example
---
collapse: true
prettier: true
name: 'sidebar-open-example'
overflowHidden: true
class: '!p-0 !justify-start h-[500px] contain-[paint] transform-gpu'
---
::

::note
Dans cet exemple, en utilisant [`defineShortcuts`](/docs/composables/define-shortcuts), vous pouvez basculer l'état ouvert de la barre latérale en appuyant sur: kbd{value="O"}.
::

### Persist état ouvert

Utilisez [`useLocalStorage`](https://vueuse.org/core/useLocalStorage/) à partir de VueUse ou [`useCookie`](xph288) au lieu de `ref` pour conserver l'état de la barre latérale à travers les rechargements de page.

::component-example
---
collapse: true
prettier: true
name: 'sidebar-persist-example'
overflowHidden: true
class: '!p-0 !justify-start h-[500px] contain-[paint] transform-gpu'
---
::

::note
La seule différence avec l'exemple précédent est le remplacement de `ref(true)` par `useLocalStorage('sidebar-open', true)`.
::

### Avec largeur personnalisée

La largeur de la barre latérale est contrôlée par la variable CSS `--sidebar-width` (par défaut `16rem`). La largeur de l'icône réduite est contrôlée par `--sidebar-width-icon` (par défaut `4rem`).

Remplacez-les globalement dans votre CSS ou par instance avec l'attribut `style`.

::component-example
---
collapse: true
prettier: true
name: 'sidebar-width-example'
overflowHidden: true
class: '!p-0 !justify-start h-[500px] contain-[paint] transform-gpu'
---
::

### Avec header

Pour positionner la barre latérale sous un [Header](/docs/components/header), personnalisez le `gap` et le `container` à l'aide de la prop `ui`.

::component-example
---
collapse: true
prettier: true
name: 'sidebar-header-example'
overflowHidden: true
class: '!p-0 !justify-start h-[500px] contain-[paint] transform-gpu'
---
::

::note
La variable `--ui-header-height` est par défaut `4rem` et est utilisée par l'en-tête. Ajustez-la si votre barre de navigation utilise une hauteur différente.
::

### Avec chat AI

Utilisez la barre latérale sur le côté droit avec [ChatMessages](/docs/components/chat-messages) et [ChatPrompt](/docs/components/chat-prompt) pour créer un panneau de discussion AI.

::component-example
---
collapse: true
prettier: true
name: 'sidebar-chat-example'
overflowHidden: true
class: '!p-0 !justify-start h-[500px] contain-[paint] transform-gpu'
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
