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

@@ph000@@utilisation

Utilisez un [Button](/docs/components/button) ou tout autre composant dans l'emplacement par défaut du Popover.

Ensuite, utilisez l'emplacement `#content` pour ajouter le contenu affiché lorsque le Popover est ouvert.

::component-code
---
Étiquette: true
Slots:
  Default:|

    @@@ 006 @

  contenu:|

    @@@ 007 @
---

Référence: u-button {label="Open" color="neutral" variant="subtle"}

#contenu
par placeholder{class="size-48 m-4 inline-flex"}
::

@@pH010@mode

Utilisez la prop `mode` pour changer le mode du Popover. Defaults à `click`.

::tip
En mode `hover`, définissez le prop `enable-touch` pour permettre aux utilisateurs de basculer le Popover en appuyant sur le déclencheur sur les appareils tactiles, ou utilisez le mode `click` pour les déclencheurs destinés à être appuyés.
::

::component-code
---
Étiquette: true
items:
  Mode:
    @@ph016@cliquez sur
    @17@@hasard
Props:
  mode: « hover »
  enableTouch: vrai
Slots:
  Défaut:|

    @@@@ 018 @

  contenu:|

    @@@@ 019 @
---

Le bouton {label="Open" color="neutral" variant="subtle"}

#contenu
par placeholder{class="size-48 m-4 inline-flex"}
::

::note
Lors de l'utilisation du mode `hover`, le composant Reka UI [`HoverCard`](https://reka-ui.com/docs/components/hover-card) est utilisé à la place du composant [`Popover`](https://reka-ui.com/docs/components/popover).
::

@@333@délai

Lorsque vous utilisez le mode `hover`, vous pouvez utiliser les props `open-delay` et `close-delay` pour contrôler le délai avant l'ouverture ou la fermeture du Popover.

::component-code
---
Étiquette: true
ignorer:
  @@ph037@mode
Props:
  mode: « hover »
  ouverture: 500
  Fermeture: 300
Slots:
  Default:|

    @@@ 038 @

  contenu:|

    @@@ 039 @
---

Le bouton {label="Open" color="neutral" variant="subtle"}

#contenu
par placeholder{class="size-48 m-4 inline-flex"}
::

@@ph042@contenu

Utilisez la prop `content` pour contrôler la façon dont le contenu Popover est rendu, comme son `align` ou `side` par exemple.

::component-code
---
Étiquette: true
items:
  content.align:
    @@ph046@départ
    - réseau
    @@ph048@fin
  content.side:
    @@ph049@droite
    @@F050@left
    @@501@top
    @@552@réduit
Props:
  contenu:
    Alignement: Centre
    Étiquette: bottom
    Décalage: 8
Slots:
  Default:|

    @@@ 53 @

  contenu:|

    @@@ 54 @
---

Référence: u-button {label="Open" color="neutral" variant="subtle"}

#contenu
par: placeholder{class="size-48 m-4 inline-flex"}
::

@@575@@Arceau

Utilisez le prop `arrow` pour afficher une flèche sur le Popover.

::component-code
---
Étiquette: true
ignorer:
  @@599@@Arc
Props:
  Arrow: vrai
Slots:
  Défaut:|

    @@@ 060 @

  contenu:|

    @@@ 061 @
---

Référence: u-button {label="Open" color="neutral" variant="subtle"}

#contenu
@ph063
::

### Modal

Utilisez la prop `modal` pour contrôler si le Popover bloque l'interaction avec le contenu extérieur. Par défaut à `false`.

::component-code
---
Étiquette: true
ignorer:
  @@ph067@titre
Props:
  Modalité: true
Slots:
  Défaut:|

    @@@ 068 @

  contenu:|

    @@@ 069 @
---

Référence: u-button {label="Open" color="neutral" variant="subtle"}

#contenu
par: placeholder{class="size-48 m-4 inline-flex"}
::

@@72@@désactivé

Utilisez la prop `dismissible` pour contrôler si le Popover est éliminable lorsque vous cliquez en dehors de celui-ci ou appuyez sur escape. Par défaut à `true`.

::note
Un événement `close:prevent` sera émis lorsque l'utilisateur essaiera de le fermer.
::

::component-example
---
name: 'exemple de défaillance'
---
::

@@ph076@exemples

### Contrôle état ouvert

Vous pouvez contrôler l'état ouvert en utilisant la prop `default-open` ou la directive `v-model:open`.

::component-example
---
nom: 'popover-open-exemple'
---
::

::note
Dans cet exemple, en utilisant [`defineShortcuts`](/docs/composables/define-shortcuts), vous pouvez basculer le Popover en appuyant sur: kbd{value="O"}.
::

### Avec palette de commandes

Vous pouvez utiliser un composant [CommandPalette](/docs/components/command-palette) à l'intérieur du contenu du Popover.

::component-example
---
Collapse: vrai
nom: 'popover-command-palette-exemple'
---
::

### Avec le curseur suivant

Vous pouvez faire en sorte que le Popover suive le curseur lorsque vous survolez un élément en utilisant le prop [`reference`](https://reka-ui.com/docs/components/tooltip#trigger):

::component-example
---
nom: 'popover-cursor-exemple'
---
::

### Avec slot d'ancrage

Vous pouvez utiliser l'emplacement `#anchor` pour positionner le Popover contre un élément personnalisé.

::warning
Cet emplacement ne fonctionne que lorsque `mode` est `click`.
::

::component-example
---
Collapse: vrai
nom: 'popover-anchor-slot-example'
---
::

@@ph101@@api

@@ph102@props

Composants-props

@@ph103@@Slots

Composants slots

::note
La fonction `close` n'est disponible que lorsque `mode` est définie sur `click` car Reka UI expose cela pour [`Popover`]() mais pas pour [`HoverCard`](https://reka-ui.com/docs/components/hover-card).
::

@117@117@117

Composants émetteurs

@@ph118@thème

Composant-thème

@119@changements

Composant-changelog
