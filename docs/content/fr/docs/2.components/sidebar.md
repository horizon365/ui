---
description: 'Une barre latérale pliable avec de multiples variantes visuelles.'
category: layout
links:
  - label: GitHub à
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Sidebar.vue
---

@@ph000@utilisation

Le composant Sidebar est une barre latérale autonome et fixe qui pousse le contenu de la page. Sur le bureau, il est rendu en ligne et peut être réduit; sur mobile, il ouvre un [Modal](/docs/components/modal),[Slideover](/docs/components/slideover) ou [Drawer](/docs/components/drawer).

::tip{to="/docs/components/dashboard-sidebar"}
**Sidebar vs DashboardSidebar**: Ce composant est une barre latérale simple et autonome que vous pouvez déposer n'importe où (panneau de discussion, paramètres, navigation). Si vous avez besoin de glisser pour redimensionner, de persistance d'état et d'intégration avec [DashboardGroup](/docs/components/dashboard-group), Utilisez [DashboardSidebar](/docs/components/dashboard-sidebar) à la place.
::

Utilisez les emplacements `header`,`default` et `footer` pour personnaliser le contenu de la barre latérale. La directive `v-model:open` prend en compte le viewport: sur le bureau, elle contrôle l'état développé/réduit, sur le mobile, elle contrôle le menu.

::component-example
---
Collapse: vrai
Étiquette: true
nom: 'sidebar-exemple'
dépassement: true
class: '! p-0! justify-start h-[500px] contain-[paint] transform-gpu'
---
::

@@27@@Variant

Utilisez la prop `variant` pour modifier le style visuel de la barre latérale. Par défaut à `sidebar`.

::component-example
---
Collapse: vrai
Étiquette: true
nom: 'sidebar-props-exemple'
dépassement: true
options:
  - nom:'variant'
    Étiquette:"Variante"
    items:
      @@ph031@@référencement
      - flottant
      @@ph033@intérieur
    par défaut:'inset'
class: '! p-0! justify-start h-[500px] contain-[paint] transform-gpu'
---
::

### récupération

Utilisez la prop `collapsible` pour modifier le comportement d'effondrement de la barre latérale. Par défaut à `offcanvas`.

- `offcanvas`: La barre latérale glisse complètement hors de vue.
- `icon`: La barre latérale se réduit à une largeur d'icône uniquement.
- `none`: La barre latérale n'est pas pliable.

::component-example
---
Collapse: vrai
Étiquette: true
nom: 'sidebar-props-exemple'
dépassement: true
options:
  - name:« pliable »
    Étiquette:"pliable"
    items:
      @@44@@offcanvas
      @@ph045@icon
      - aucune
    par défaut:"icon"
  - nom:'variant'
    Étiquette:"Variante"
    items:
      @@448@référencement
      - flottant
      @@ph050@intérieur
    par défaut:"sidebar"
class: '! p-0! justify-start h-[500px] contain-[paint] transform-gpu'
---
::

::tip{to="#slots"}
Vous pouvez accéder au `state` dans les accessoires de l'emplacement pour personnaliser le contenu de la barre latérale lorsqu 'elle est réduite.
::

@@P252 @ à côté

Utilisez la prop `side` pour changer le côté de la barre latérale. Defaults à `left`.

::component-example
---
Collapse: vrai
Étiquette: true
nom: 'sidebar-props-exemple'
dépassement: true
options:
  - name:'côté'
    Étiquette:"Side"
    items:
      @@556@left
      @@ph057@droite
    Défaut:"Right"
class: '! p-0! justify-start h-[500px] contain-[paint] transform-gpu'
---
::

@@ph058@titre

Utilisez la prop `title` pour définir le titre de l'en-tête de la barre latérale.

::component-code
---
Étiquette: true
Caché:
  @@ph060@classe
  @@ph061@fr
ignorer:
  - ui.container
Props:
  Titre: Navigation
  UI:
    Conteneur: H-full
Slots:
  Default:|

    @@@@ 063 @
class: '! p-0! justify-start h-[500px] contain-[paint] transform-gpu'
---

@ph064
::

### Description

Utilisez la prop `description` pour définir la description de l'en-tête de la barre latérale.

::component-code
---
Étiquette: true
Caché:
  @@ph067@classe
  @@ph068@ui
Ignorer:
  @@ph069@titre
  - ui.container
Props:
  Titre: Navigation
  Description: Browse votre espace de travail
  UI:
    Conteneur: H-full
Slots:
  Défaut:|

    @@@ 071 @
class: '! p-0! justify-start h-[500px] contain-[paint] transform-gpu'
---

par: placeholder{class="h-full"}
::

@@773@réseau

Utilisez la prop `rail` pour afficher un bord interactif mince sur la barre latérale qui permet de basculer l'état réduit au clic. Le rail n'est rendu que lorsque `collapsible` n'est pas `none`.

::component-code
---
Étiquette: true
ignorer:
  @@777@titre
  - ui.container
Caché:
  @@ph079@fr
  @@ph080@classe
Props:
  Rail: vrai
  Catégorie: Icon
  Titre: Navigation
  Conteneur: h-full
Slots:
  Default:|

    @@@ 081 @
class: '! p-0! justify-start h-[500px] contain-[paint] transform-gpu'
---

par: placeholder{class="h-full"}
::

@@ph083@@Fermer

Utilisez la prop `close` pour afficher un bouton de fermeture dans l'en-tête de la barre latérale. Le bouton de fermeture n'est rendu que lorsque `collapsible` n'est pas `none`.

Vous pouvez passer n'importe quelle propriété du composant [Button](/docs/components/button) pour le personnaliser.

::component-code
---
Étiquette: true
ignorer:
  @@ph091@titre
  @@R2009@RAIL
  - ui.container
Caché:
  @@ph094 @
  @@classe 95
Props:
  Clôture: vrai
  Rail: vrai
  Catégorie: Icon
  Titre: Navigation
  UI:
    Conteneur: H-full
items:
  proche:
    @@ph096@vrai
    @@@faux07@faux
Slots:
  Défaut:|

    @@@ 098 @
class: '! p-0! justify-start h-[500px] contain-[paint] transform-gpu'
---

par: placeholder{class="h-full"}
::

### Fermer Icône

Utilisez le prop `close-icon` pour personnaliser le bouton de fermeture [Icon](/docs/components/icon).

::component-code
---
Étiquette: true
Ignorer:
  @@ph107@titre
  @@ph108@rail
  @@ph109@côté
  @@ph110@fermer
  - ui.container
Caché:
  @@ph112@ui
  @@ph113@classe
Props:
  Clôture: vrai
  Icône: i-lucide-panel-right-close
  Rail: vrai
  Catégorie: Icon
  Côté: droite
  Titre: Navigation
  UI:
    Conteneur: H-full
items:
  proche:
    @@ph114@vrai
    @@F115@faux
Slots:
  Default:|

    @@@ 116 @
class: '! p-0! justify-start h-[500px] contain-[paint] transform-gpu'
---

par placeholder{class="h-full"}
::

::framework-only
#numérique
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
Vous pouvez personnaliser cette icône globalement dans votre `app.config.ts` sous la touche `ui.icons.close`.
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
Vous pouvez personnaliser cette icône globalement dans votre `vite.config.ts` sous la touche `ui.icons.close`.
:::
::

@@ph122@@mode

Utilisez la prop `mode` pour modifier le mode du menu de la barre latérale sur mobile. Par défaut à `slideover`.

::component-example
---
Collapse: vrai
Iframe:
  Hauteur: 500px
iframeMobile: vrai
dépassement: true
nom: 'sidebar-mode-exemple'
options:
  - name:« mode »
    Étiquette: mode
    par défaut:"slideover"
    items:
      @@ph126@modalité
      @277@slide
      @@ph128@caillou
Props:
  Catégorie: w-full
---
::

::tip{to="#props"}
Vous pouvez utiliser le prop `menu` pour personnaliser le menu de la barre latérale, il s'adaptera en fonction du mode que vous choisissez.
::

@@ph130@exemple

### Control état ouvert

Vous pouvez contrôler l'état ouvert à l'aide de la directive `open` ou de la directive `v-model:open`. Sur le bureau, il contrôle l'état étendu/réduit, sur le mobile, il ouvre/ferme le menu de la feuille.

::component-example
---
Collapse: vrai
Étiquette: true
nom: 'sidebar-open-example'
dépassement: true
class: '! p-0! justify-start h-[500px] contain-[paint] transform-gpu'
---
::

::note
Dans cet exemple, en utilisant [`defineShortcuts`](/docs/composables/define-shortcuts), vous pouvez basculer l'état ouvert de la barre latérale en appuyant sur: kbd{value="O"}.
::

### Persiste état ouvert

Utilisez [`useLocalStorage`](https://vueuse.org/core/useLocalStorage/) de VueUse ou [`useCookie`](https://nuxt.com/docs/4.x/api/composables/use-cookie) au lieu de `ref` pour conserver l'état de la barre latérale à travers les rechargements de page.

::component-example
---
Collapse: vrai
Étiquette: true
nom: 'sidebar-persistent-exemple'
dépassement: true
class: '! p-0! justify-start h-[500px] contain-[paint] transform-gpu'
---
::

::note
La seule différence avec l'exemple précédent est de remplacer `ref(true)` par `useLocalStorage('sidebar-open', true)`.
::

### Avec largeur personnalisée

La largeur de la barre latérale est contrôlée par la variable CSS `--sidebar-width`(valeur par défaut à `16rem`). La largeur de l'icône réduite est contrôlée par `--sidebar-width-icon`(valeur par défaut à `4rem`).

Remplacez-les globalement dans votre CSS ou par instance avec l'attribut `style`.

::component-example
---
Collapse: vrai
Étiquette: true
nom: 'sidebar-width-example'
dépassement: true
class: '! p-0! justify-start h-[500px] contain-[paint] transform-gpu'
---
::

### Avec header

Pour positionner la barre latérale sous un [Header](/docs/components/header), personnalisez le `gap` et le `container` en utilisant le `ui` prop.

::component-example
---
Collapse: vrai
Étiquette: true
nom: 'sidebar-header-exemple'
dépassement: true
class: '! p-0! justify-start h-[500px] contain-[paint] transform-gpu'
---
::

::note
La variable `--ui-header-height` est par défaut `4rem` et est utilisée par l'en-tête. Ajustez-la si votre barre de navigation utilise une hauteur différente.
::

### Avec chat AI

Utilisez la barre latérale sur le côté droit avec [ChatMessages](/docs/components/chat-messages) et [ChatPrompt](/docs/components/chat-prompt) pour créer un panneau de discussion AI.

::component-example
---
Collapse: vrai
Étiquette: true
nom: 'sidebar-chat-exemple'
dépassement: true
class: '! p-0! justify-start h-[500px] contain-[paint] transform-gpu'
---
::

@@ph179@@api

@@ph180@props

Composants-props

### Slots

Composants slots

@@ph182@thème

Composant-thème

@changement@changement183

Composant-changelog
