---
description: Une boîte de dialogue qui glisse de n'importe quel côté de l'écran.
category: overlay
keywords:
  - sheet
  - side panel
  - off-canvas
links:
  - label: dialogue
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/dialog
  - label: GitHub à
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Slideover.vue
---

@@ph000@utilisation

Utilisez un [Button](/docs/components/button) ou tout autre composant dans l'emplacement par défaut du Slideover.

Ensuite, utilisez l'emplacement `#content` pour ajouter le contenu affiché lorsque le Slideover est ouvert.

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
par placeholder{class="h-full m-4"}
::

Vous pouvez également utiliser les emplacements `#header`{lang="ts-type"},`#body`{lang="ts-type"} et `#footer`{lang="ts-type"} pour personnaliser le contenu du Slideover.

@@ph016@titre

Utilisez la prop `title` pour définir le titre de l'en-tête du Slideover.

::component-code
---
Étiquette: true
Props:
  title: "Slideover avec titre"
Slots:
  Défaut:|

    @@@@ 018 @

  Corps:|

    @@@@ 019 @
---

Le bouton {label="Open" color="neutral" variant="subtle"}

#corps
par placeholder{class="h-full"}
::

@@22@Description

Utilisez la prop `description` pour définir la description de l'en-tête du Slideover.

::component-code
---
Étiquette: true
ignorer:
  @@24@titre
Props:
  Titre: Slideover avec description
  « Lorem ipsum dolor sit amet, consectetur adipiscing elit ».
Slots:
  Default:|

    @@@ 25 @

  Corps:|

    @@@ 26 @
---

Référence: u-button {label="Open" color="neutral" variant="subtle"}

#corps
par placeholder{class="h-full"}
::

@29@@fermer

Utilisez la prop `close` pour personnaliser ou masquer le bouton de fermeture (avec la valeur `false`) affiché dans l'en-tête du Slideover.

Vous pouvez passer n'importe quelle propriété du composant [Button](/docs/components/button) pour le personnaliser.

::component-code
---
Étiquette: true
ignorer:
  @@ph036@titre
  - close.color
  - close.variant
Props:
  Titre: Slideover with Close Button
  proche:
    Couleur: Primaire
    Étiquette: Outline
    Catégorie:"round-full"
Slots:
  Default:|

    @@@ 039 @

  Corps:|

    @@@ 040 @
---

Référence: u-button {label="Open" color="neutral" variant="subtle"}

#corps
by placeholder{class="h-full"}
::

::note
Le bouton de fermeture n'est pas affiché si l'emplacement `#content` est utilisé car il fait partie de l'en-tête.
::

### Fermer l'icône

Utilisez le prop `close-icon` pour personnaliser le bouton de fermeture [Icon](/docs/components/icon).

::component-code
---
Étiquette: true
Ignorer:
  @@ph051@titre
Props:
  Titre: Slideover with Close Button
  closeIcône:'i-lucide-arrow-right'
Slots:
  Défaut:|

    @@@ 52 @

  Corps:|

    @@@ 53 @
---

Référence: u-button {label="Open" color="neutral" variant="subtle"}

#corps
par: placeholder{class="h-full"}
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

@@pH060@@côté

Utilisez le prop `side` pour définir le côté de l'écran où le Slideover va glisser de. Defaults à `right`.

::component-code
---
Étiquette: true
ignorer:
  @@ph063@titre
Props:
  Catégorie:"Left"
  Titre original: Slideover With Side
Slots:
  Default:|

    @@@@ 064 @

  Corps:|

    @@
---

Référence: u-button {label="Open" color="neutral" variant="subtle"}

#corps
par: placeholder{class="h-full min-h-48"}
::

### Inset: badge{label="4.3+" class="align-text-top"}

Utilisez le prop `inset` pour insérer le Slideover depuis les bords.

::component-code
---
Étiquette: true
Ignorer:
  @@ph071@titre
Props:
  Étiquette:"Right"
  Inset: vrai
  Titre: Slideover with Inset
Slots:
  Défaut:|

    @@@ph072 @

  Corps:|

    @@@ 073 @
---

Référence: u-button {label="Open" color="neutral" variant="subtle"}

#corps
par: placeholder{class="min-w-96 min-h-96 size-full"}
::

@@776@@référencement

Utilisez la prop `transition` pour contrôler si le Slideover est animé ou non. Par défaut à `true`.

::component-code
---
Étiquette: true
ignorer:
  @@ph079@titre
Props:
  Transition: Faux
  Titre: Slideover sans transition
Slots:
  Défaut:|

    @@@ 80 @

  Corps:|

    @@@ 081 @
---

Référence: u-button {label="Open" color="neutral" variant="subtle"}

#corps
par: placeholder{class="h-full"}
::

@084@@récupération

Utilisez la prop `overlay` pour contrôler si le Slideover a une superposition ou non. Par défaut à `true`.

::component-code
---
Étiquette: true
ignorer:
  @@ph087@titre
Props:
  Définition: Faux
  Titre original: Slideover Without Overlay
Slots:
  Défaut:|

    @@@ 88 @

  Corps:|

    @@@ 089 @
---

Référence: u-button {label="Open" color="neutral" variant="subtle"}

#corps
par: placeholder{class="h-full"}
::

@092@modélisme

Utilisez la prop `modal` pour contrôler si le Slideover bloque l'interaction avec le contenu extérieur. Par défaut à `true`.

::note
Lorsque `modal` est défini sur `false`, la superposition est automatiquement désactivée et le contenu extérieur devient interactif.
::

::component-code
---
Étiquette: true
ignorer:
  @@ph097@titre
Props:
  Modalité: Faux
  Étiquette: slideover interactive
Slots:
  Default:|

    @@@ 098 @

  Corps:|

    @@@ 099 @
---

Le bouton {label="Open" color="neutral" variant="subtle"}

#corps
par placeholder{class="h-full"}
::

@102@désactivé

Utilisez la prop `dismissible` pour contrôler si le Slideover est éliminable lorsque vous cliquez en dehors de celui-ci ou appuyez sur escape. Par défaut à `true`.

::note
Un événement `close:prevent` sera émis lorsque l'utilisateur essaiera de le fermer.
::

::tip
Vous pouvez combiner `modal: false` avec `dismissible: false` pour rendre l'arrière-plan du Slideover interactif sans le fermer.
::

::component-code
---
Étiquette: true
Ignorer:
  @@ph108@titre
Props:
  Désactivé: Faux
  Modalité: true
  Titre original: Slideover Non-Dismissible
Slots:
  Default:|

    @@@ 109 @

  Corps:|

    @@@ 110 @
---

Référence: u-button {label="Open" color="neutral" variant="subtle"}

#corps
par placeholder{class="h-full"}
::

### Unmount: badge{label="4.10+" class="align-text-top"}

Utilisez la prop `unmount-on-hide` pour empêcher le contenu du Slideover d'être démonté lorsqu 'il est fermé. Par défaut à `true`.

::component-code
---
Étiquette: true
ignorer:
  @@ph117@titre
Props:
  Défaut: False
  Titre: Slideover
Slots:
  Default:|

    @@@ 118 @

  Corps:|

    @@@ 119 @
---

Référence: u-button {label="Open" color="neutral" variant="subtle"}

#corps
par placeholder{class="h-full"}
::

::note
Vous pouvez inspecter le DOM pour voir le contenu du Slideover en cours de rendu même lorsqu 'il est fermé.
::

::tip
Lorsque la prop `portal` est définie sur `false`, le contenu est également rendu sur le serveur. Ceci est utile pour rendre un slideover ouvert pendant SSR sans flash sur le chargement de la page, ou pour exposer son contenu pour le référencement.
::

@@ph124@@exemples

### Control état ouvert

Vous pouvez contrôler l'état ouvert en utilisant la prop `default-open` ou la directive `v-model:open`.

::component-example
---
nom: 'slideover-open-example'
---
::

::note
Dans cet exemple, en utilisant [`defineShortcuts`](/docs/composables/define-shortcuts), vous pouvez basculer le Slideover en appuyant sur: kbd{value="O"}.
::

::tip
Cela vous permet de déplacer le déclencheur en dehors du Slideover ou de le supprimer complètement.
::

### Utilisation programmatique

Vous pouvez utiliser le [`useOverlay`](/docs/composables/use-overlay) pour ouvrir un Slideover par programmation.

::warning
Assurez-vous d'envelopper votre application avec le composant [`App`](/docs/components/app`OverlayProvider`](https://github.com/nuxt/ui/blob/v4/src/runtime/components/OverlayProvider.vue).
::

Tout d'abord, créez un composant de glissement qui sera ouvert par programme:

::component-example
---
Étiquette: true
nom: 'exemple de slide'
Prévision: Faux
---
::

::note
Nous émettons un événement `close` lorsque le glissement est fermé ou rejeté ici. Vous pouvez émettre n'importe quelle donnée via l'événement `close`, et ces données deviennent la valeur résolue de `open()`. L'événement doit être émis pour que la promesse se se résolve.
::

Ensuite, utilisez-le dans votre app:

::component-example
---
nom: 'slideover-programmatique-exemple'
---
::

::tip
Vous pouvez fermer le coulissant dans le composant coulissant en émettant `emit('close')`.
::

### Nested glissières

Vous pouvez imbriquer des glissières les unes dans les autres.

::component-example
---
nom: 'slideover-nested-exemple'
---
::

### Avec fente de pied de page

Utilisez l'emplacement `#footer` pour ajouter du contenu après le corps du Slideover.

::component-example
---
nom: 'slideover-footer-slot-example'
---
::

@@ph157@api

@@ph158@@props

Composants-props

@@ph159@@Slots

Composants slots

@@P160@@émissions

Composants émetteurs

@@ph161@thème

Composant-thème

@changement@changement@changement@changement@changement.com

Composant-changelog
