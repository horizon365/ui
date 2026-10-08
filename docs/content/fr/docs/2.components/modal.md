---
description: Fenêtre de dialogue qui peut être utilisée pour afficher un message ou demander une entrée utilisateur.
category: overlay
keywords:
  - dialog
  - popup
  - confirm
  - alert dialog
links:
  - label: Dialogue
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/dialog
  - label: GitHub à
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Modal.vue
---

@@ph000@utilisation

Utilisez un [Button](/docs/components/button) ou tout autre composant dans l'emplacement par défaut du Modal.

Ensuite, utilisez l'emplacement `#content` pour ajouter le contenu affiché lorsque le Modal est ouvert.

::component-code
---
Étiquette: true
Slots:
  Défaut:|

    @@@ 006 @

  contenu:|

    @@@ 007 @
---

Référence: u-button {label="Open" color="neutral" variant="subtle"}

#contenu
par placeholder{class="h-48 m-4"}
::

Vous pouvez également utiliser les emplacements `#header`{lang="ts-type"},`#body`{lang="ts-type"} et `#footer`{lang="ts-type"} pour personnaliser le contenu du Modal.

@@ph016@titre

Utilisez la prop `title` pour définir le titre de l'en-tête du Modal.

::component-code
---
Étiquette: true
Props:
  title: "Modal avec titre"
Slots:
  Default:|

    @@@@ 018 @

  Corps:|

    @@@@ 019 @
---

Le bouton {label="Open" color="neutral" variant="subtle"}

#corps
par placeholder{class="h-48"}
::

@@22@Description

Utilisez la prop `description` pour définir la description de l'en-tête de la Modal.

::component-code
---
Étiquette: true
ignorer:
  @@24@titre
Props:
  Titre: Modal avec description
  « Lorem ipsum dolor sit amet, consectetur adipiscing elit ».
Slots:
  Default:|

    @@@ 25 @

  Corps:|

    @@@ 26 @
---

Référence: u-button {label="Open" color="neutral" variant="subtle"}

#corps
par placeholder{class="h-48"}
::

@29@@fermer

Utilisez la prop `close` pour personnaliser ou masquer le bouton de fermeture (avec la valeur `false`) affiché dans l'en-tête du Modal.

Vous pouvez passer n'importe quelle propriété du composant [Button](/docs/components/button) pour le personnaliser.

::component-code
---
Étiquette: true
Ignorer:
  @@ph036@titre
  - close.color
  - close.variant
Props:
  Titre: Modal avec bouton de fermeture
  proche:
    Couleur: Primaire
    Étiquette: Outline
    Catégorie:"round-full"
Slots:
  Défaut:|

    @@@ 039 @

  Corps:|

    @@@ 040 @
---

Référence: u-button {label="Open" color="neutral" variant="subtle"}

#corps
by placeholder{class="h-48"}
::

::tip
Le bouton de fermeture n'est pas affiché si l'emplacement `#content` est utilisé car il fait partie de l'en-tête.
::

### Fermer l'icône

Utilisez le prop `close-icon` pour personnaliser le bouton de fermeture [Icon](/docs/components/icon).

::component-code
---
Étiquette: true
ignorer:
  @@ph051@titre
Props:
  Titre: Modal avec bouton de fermeture
  closeIcône:'i-lucide-arrow-right'
Slots:
  Default:|

    @@@ 52 @

  Corps:|

    @@@ 53 @
---

Référence: u-button {label="Open" color="neutral" variant="subtle"}

#corps
par: placeholder{class="h-48"}
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

### référencement

Utilisez la prop `transition` pour contrôler si le Modal est animé ou non. Par défaut à `true`.

::component-code
---
Étiquette: true
Ignorer:
  @@ph063@titre
Props:
  Transition: Faux
  Titre original: Modal without transition
Slots:
  Default:|

    @@@@ 064 @

  Corps:|

    @@
---

Référence: u-button {label="Open" color="neutral" variant="subtle"}

#corps
par: placeholder{class="h-48"}
::

### récupération

Utilisez la prop `overlay` pour contrôler si le Modal a une superposition ou non. Par défaut à `true`.

::component-code
---
Étiquette: true
Ignorer:
  @@ph071@titre
Props:
  Définition: Faux
  Titre original: Modal Without Overlay
Slots:
  Default:|

    @@@ph072 @

  Corps:|

    @@@ 073 @
---

Référence: u-button {label="Open" color="neutral" variant="subtle"}

#corps
par: placeholder{class="h-48"}
::

@766@modélisme

Utilisez la prop `modal` pour contrôler si le Modal bloque l'interaction avec le contenu extérieur. Par défaut à `true`.

::note
Lorsque `modal` est défini sur `false`, la superposition est automatiquement désactivée et le contenu extérieur devient interactif.
::

::component-code
---
Étiquette: true
ignorer:
  @@ph081@titre
Props:
  Modalité: Faux
  Titre: Modal interactive
Slots:
  Défaut:|

    @@@ 082 @

  Corps:|

    @@@ 083 @
---

Référence: u-button {label="Open" color="neutral" variant="subtle"}

#corps
par: placeholder{class="h-48"}
::

@086@@récupération

Utilisez la prop `dismissible` pour contrôler si le Modal est éliminable lorsque vous cliquez en dehors de celui-ci ou appuyez sur escape. Par défaut à `true`.

::note
Un événement `close:prevent` sera émis lorsque l'utilisateur tentera de le fermer.
::

::tip
Vous pouvez combiner `modal: false` avec `dismissible: false` pour rendre l'arrière-plan de la Modal interactif sans la fermer.
::

::component-code
---
Étiquette: true
Ignorer:
  @@ph092@titre
Props:
  Désactivé: Faux
  Modalité: true
  Titre: Modal non dismissible
Slots:
  Défaut:|

    @@@ 093 @

  Corps:|

    @@@ 094 @
---

Référence: u-button {label="Open" color="neutral" variant="subtle"}

#corps
par: placeholder{class="h-48"}
::

### Scrollable: badge{label="4.2+" class="align-text-top"}

Utilisez la prop `scrollable` pour faire défiler le contenu du Modal dans la superposition.

::warning
Comme la superposition est nécessaire pour le défilement,`modal: false` n'est pas compatible et `overlay: false` supprime uniquement l'arrière-plan.
::

::component-code
---
Étiquette: true
Ignorer:
  @@ph102@titre
Props:
  Scrollable: vrai
  Définition: true
  Titre: Modal Scrollable
Slots:
  Default:|

    @@@@ 103 @

  Corps:|

    @@@ 104 @
---

Référence: u-button {label="Open" color="neutral" variant="subtle"}

#corps
par placeholder{class="h-screen"}
::

::caution
Il y a un problème [connu ](https://reka-ui.com/docs/components/dialog#scrollable-overlay) où cliquer sur la barre de défilement peut involontairement fermer la boîte de dialogue sur certains systèmes d'exploitation.
::

### plein écran

Utilisez le prop `fullscreen` pour faire le plein écran Modal.

::component-code
---
Étiquette: true
ignorer:
  @@ph113@titre
  - plein écran
Props:
  Étiquette: True
  Titre original: Modal Fullscreen
Slots:
  Default:|

    @@@ 115 @

  Corps:|

    @@@ 116 @
---

Référence: u-button {label="Open" color="neutral" variant="subtle"}

#corps
par: placeholder{class="h-full"}
::

### Unmount: badge{label="4.10+" class="align-text-top"}

Utilisez la prop `unmount-on-hide` pour empêcher le contenu du module d'être démonté lorsqu 'il est fermé. Par défaut à `true`.

::component-code
---
Étiquette: true
ignorer:
  @@ph123@titre
Props:
  Défaut: False
  Titre: Modal
Slots:
  Défaut:|

    @@@ 124 @

  Corps:|

    @@@ 125 @
---

Référence: u-button {label="Open" color="neutral" variant="subtle"}

#corps
par placeholder{class="h-48"}
::

::note
Vous pouvez inspecter le DOM pour voir le contenu du Modal rendu même lorsqu 'il est fermé.
::

::tip
Lorsque la prop `portal` est définie sur `false`, le contenu est également rendu sur le serveur. Ceci est utile pour rendre un Modal ouvert pendant SSR sans flash sur le chargement de la page, ou pour exposer son contenu pour le référencement.
::

@@ph130@exemple

### Control état ouvert

Vous pouvez contrôler l'état ouvert en utilisant la directive `default-open` ou la directive `v-model:open`.

::component-example
---
nom: 'modal-open-example'
---
::

::note
Dans cet exemple, en utilisant [`defineShortcuts`](/docs/composables/define-shortcuts), vous pouvez basculer le Modal en appuyant sur: kbd{value="O"}.
::

::tip
Cela vous permet de déplacer le déclencheur en dehors du Modal ou de le supprimer complètement.
::

### Utilisation programmatique

Vous pouvez utiliser le [`useOverlay`](/docs/composables/use-overlay) pour ouvrir un Modal par programmation.

::warning
Assurez-vous d'envelopper votre application avec le composant [`App`](/docs/components/app) qui utilise le composant [](https://github.com/nuxt/ui/blob/v4/src/runtime/components/OverlayProvider.vue).
::

Tout d'abord, créez un composant modal qui sera ouvert par programmation:

::component-example
---
Étiquette: true
nom: 'modal-exemple'
Prévision: Faux
---
::

::note
Nous émettons un événement `close` lorsque le modal est fermé ou rejeté ici. Vous pouvez émettre n'importe quelle donnée via l'événement `close`, et ces données deviennent la valeur résolue de `open()`. L'événement doit être émis pour que la promesse se résolve.
::

Ensuite, utilisez-le dans votre app:

::component-example
---
name: 'modal-programmatique-exemple'
---
::

::tip
Vous pouvez fermer le modal dans le composant modal en émettant `emit('close')`.
::

### Modalités imbriquées

Vous pouvez imbriquer des modaux les uns dans les autres.

::component-example
---
nom: 'modal-nided-exemple'
---
::

### Avec fente de pied de page

Utilisez l'emplacement `#footer` pour ajouter du contenu après le corps de la Modal.

::component-example
---
nom: 'modal-footer-slot-example'
---
::

### Avec la palette de commandes

Vous pouvez utiliser un composant [CommandPalette](/docs/components/command-palette) dans le contenu du Modal.

::component-example
---
Collapse: vrai
nom: 'modal-command-palette-exemple'
---
::

::note
Cet exemple utilise `useLazyFetch` avec `immediate: false` pour récupérer des données uniquement lorsque le Modal s'ouvre.
::

@@ph170@api

@@ph171@@props

Composants-props

### Slots

Composants slots

@@ph173@@émissions

Composants émetteurs

@@ph174@thème

Composant-thème

@175@changements

Composant-changelog
