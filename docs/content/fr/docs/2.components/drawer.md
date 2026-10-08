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

@@ph000@utilisation

Utilisez un [Button](/docs/components/button) ou tout autre composant dans l'emplacement par défaut du tiroir.

Ensuite, utilisez l'emplacement `#content` pour ajouter le contenu affiché lorsque le tiroir est ouvert.

::component-code
---
Étiquette: true
Slots:
  Défaut:|

    @@@ 006 @

  contenu:|

    @@@ 007 @
---

Référence: u-button {label="Open" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up"}

#contenu
par placeholder{class="h-48 m-4"}
::

Vous pouvez également utiliser les emplacements `#header`{lang="ts-type"},`#body`{lang="ts-type"} et `#footer`{lang="ts-type"} pour personnaliser le contenu du tiroir.

@@ph016@titre

Utilisez la prop `title` pour définir le titre de l'en-tête du tiroir.

::component-code
---
Étiquette: true
Props:
  Titre: "Titre avec titre"
Slots:
  Défaut:|

    @@@@ 018 @

  Corps:|

    @@@@ 019 @
---

Le bouton {label="Open" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up"}

#corps
par placeholder{class="h-48"}
::

@@22@Description

Utilisez la prop `description` pour définir la description de l'en-tête du tiroir.

::component-code
---
Étiquette: true
ignorer:
  @@24@titre
Props:
  Titre: "Dessin avec description"
  « Lorem ipsum dolor sit amet, consectetur adipiscing elit ».
Slots:
  Default:|

    @@@ 25 @

  Corps:|

    @@@ 26 @
---

Référence: u-button {label="Open" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up"}

#corps
par placeholder{class="h-48"}
::

### Close: badge{label="4.10+" class="align-text-top"}

Utilisez le prop `close` pour afficher un bouton de fermeture dans le tiroir. Par défaut à `false`.

Vous pouvez passer n'importe quelle propriété du composant [Button](/docs/components/button) pour le personnaliser.

::component-code
---
Étiquette: true
ignorer:
  @@ph037@titre
  - close.color
  - close.variant
Props:
  Titre: Tiroir avec bouton de fermeture
  proche:
    Couleur: Primaire
    Étiquette: Outline
    Catégorie:"round-full"
Slots:
  Default:|

    @@@ 040 @

  Corps:|

    @@@ 041 @
---

Référence: u-button {label="Open" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up"}

#corps
@ph043
::

### Fermer Icône: badge{label="4.10+" class="align-text-top"}

Utilisez le prop `close-icon` pour personnaliser le bouton de fermeture [Icon](/docs/components/icon).

::component-code
---
Étiquette: true
Ignorer:
  @@ph052@titre
Props:
  Titre: Tiroir avec bouton de fermeture
  Clôture: vrai
  closeIcône:'i-lucide-arrow-right'
Slots:
  Default:|

    @@@ 53 @

  Corps:|

    @@@ 54 @
---

Référence: u-button {label="Open" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up"}

#corps
par: placeholder{class="h-48"}
::

@@P057@@Direction générale

Utilisez le prop `direction` pour contrôler la direction du tiroir. Par défaut à `bottom`.

::component-code
---
Étiquette: true
Props:
  Référence:"Right"
Slots:
  Default:|

    @@@ 060 @

  contenu:|

    @@@ 061 @
---

Référence: u-button {label="Open" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up"}

#contenu
@@ph063
::

### référencement

Utilisez le prop `inset` pour insérer le tiroir par les bords.

::component-code
---
Étiquette: true
Props:
  Référence:"Right"
  Inset: vrai
Slots:
  Default:|

    @@@@ 66 @

  contenu:|

    @@@ 067 @
---

Référence: u-button {label="Open" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up"}

#contenu
par: placeholder{class="min-w-96 min-h-96 size-full m-4"}
::

@070@handle

Utilisez la prop `handle` pour contrôler si le tiroir a une poignée ou non. Par défaut à `true`.

::component-code
---
Étiquette: true
Props:
  Présentation: Faux
Slots:
  Défaut:|

    @@@ 073 @

  contenu:|

    @@@ 74 @
---

Référence: u-button {label="Open" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up"}

#contenu
par: placeholder{class="h-48 m-4"}
::

### Handle uniquement

Utilisez le prop `handle-only` pour ne permettre que le tiroir d'être traîné par la poignée.

::component-code
---
Étiquette: true
Props:
  Référence: true
Slots:
  Défaut:|

    @@@ 079 @

  contenu:|

    @@@ 80 @
---

Référence: u-button {label="Open" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up"}

#contenu
par: placeholder{class="h-48 m-4"}
::

@083@@récupération

Utilisez la prop `overlay` pour contrôler si le tiroir a une superposition ou non. Par défaut à `true`.

::component-code
---
Étiquette: true
Props:
  Définition: Faux
Slots:
  Défaut:|

    @@@ 086 @

  contenu:|

    @@@ 087 @
---

Référence: u-button {label="Open" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up"}

#contenu
par: placeholder{class="h-48 m-4"}
::

@090@mode

Utilisez la prop `modal` pour contrôler si le tiroir bloque l'interaction avec le contenu extérieur. Par défaut à `true`.

::note
Lorsque `modal` est défini sur `false`, la superposition est automatiquement désactivée et le contenu extérieur devient interactif.
::

::component-code
---
Étiquette: true
Props:
  Modalité: Faux
Slots:
  Default:|

    @@@ 095 @

  contenu:|

    @@@ 096 @
---

Référence: u-button {label="Open" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up"}

#contenu
par: placeholder{class="h-48 m-4"}
::

@099@@récupération

Utilisez la prop `dismissible` pour contrôler si le tiroir est éliminable lorsque vous cliquez à l'extérieur ou appuyez sur escape. Par défaut à `true`.

::note
Un événement `close:prevent` sera émis lorsque l'utilisateur essaiera de le fermer.
::

::tip
Vous pouvez combiner `modal: false` avec `dismissible: false` pour rendre l'arrière-plan du tiroir interactif sans le fermer.
::

::component-example
---
Étiquette: true
nom: 'dessinateur-dismissible-exemple'
---
::

### Échelle de fond

Utilisez l'accessoire `should-scale-background` pour redimensionner l'arrière-plan lorsque le tiroir est ouvert, créant ainsi un effet de profondeur visuelle. Vous pouvez définir l'accessoire `set-background-color-on-scale` sur `false` pour éviter de modifier la couleur de l'arrière-plan.

::component-code
---
Étiquette: true
Props:
  shouldScaleBackground: vrai
  setBackgroundColorOnScale: vrai
Slots:
  Default:|

    @@@ 109 @

  contenu:|

    @@@ 110 @
---

Référence: u-button {label="Open" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up"}

#contenu
par placeholder{class="h-screen m-4"}
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

@@ph135@exemples

### Control état ouvert

Vous pouvez contrôler l'état ouvert en utilisant la prop `default-open` ou la directive `v-model:open`.

::component-example
---
Étiquette: true
nom: 'drawer-open-example'
---
::

::note
Dans cet exemple, en utilisant [`defineShortcuts`](/docs/composables/define-shortcuts), vous pouvez basculer le tiroir en appuyant sur: kbd{value="O"}.
::

::tip
Cela vous permet de déplacer la gâchette à l'extérieur du tiroir ou de la retirer complètement.
::

### Drapeau réactif

Vous pouvez rendre un composant [Modal](/docs/components/modal) sur un bureau et un tiroir sur un mobile par exemple.

::component-example
---
Étiquette: true
nom: 'drawer-responsive-example'
---
::

### Les tiroirs imbriqués

Vous pouvez imbriquer des tiroirs les uns dans les autres en utilisant le prop `nested`.

::component-example
---
Étiquette: true
nom: 'drawer-nested-example'
---
::

### Avec fente de pied de page

Utilisez l'emplacement `#footer` pour ajouter du contenu après le corps du tiroir.

::component-example
---
Étiquette: true
Collapse: vrai
nom: 'drawer-footer-slot-example'
---
::

### Avec palette de commandes

Vous pouvez utiliser un composant [CommandPalette](/docs/components/command-palette) à l'intérieur du contenu du tiroir.

::component-example
---
Collapse: vrai
nom: 'drawer-command-palette-exemple'
---
::

::note
Cet exemple utilise `useLazyFetch` avec `immediate: false` pour récupérer des données uniquement lorsque le tiroir s'ouvre.
::

@@ph161@@api

@@ph162@@props

Composants-props

@@ph163@@réglages

Composants slots

@@ph164@@émissions

Composants émetteurs

@@ph165@thème

Composant-thème

@change166 @ changement

Composant-changelog
