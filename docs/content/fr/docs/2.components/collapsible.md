---
description: Un élément pliable pour basculer la visibilité de son contenu.
category: element
keywords:
  - disclosure
  - expand
links:
  - label: Collapsif
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/collapsible
  - label: GitHub à
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Collapsible.vue
---

@@ph000@@utilisation

Utilisez un [Button](/docs/components/button) ou tout autre composant dans l'emplacement par défaut de l'appareil pliable.

Ensuite, utilisez l'emplacement `#content` pour ajouter le contenu affiché lorsque le Repliable est ouvert.

::component-code
---
Étiquette: true
Ignorer:
  @@ph006@classe
Props:
  classe: 'flex flex-col gap-2 w-48'
Slots:
  Défaut:|

    @@@ 007 @

  contenu:|

    @@@ 008 @
---

Référence: u-button {label="Open" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-down" block}

#contenu
par placeholder{class="h-48"}
::

@@111@111@1111

Utilisez la prop `unmount-on-hide` pour empêcher le contenu d'être démonté lorsque le pliable est réduit. Par défaut à `true`.

::component-code
---
Étiquette: true
ignorer:
  @@classe
Props:
  Défaut: False
  classe: 'flex flex-col gap-2 w-48'
Slots:
  Default:|

    @@

  contenu:|

    @@@@ 016 @
---

Référence: u-button {label="Open" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-down" block}

#contenu
par placeholder{class="h-48"}
::

::note
Vous pouvez inspecter le DOM pour voir le contenu rendu.
::

### désactivé

Utilisez le prop `disabled` pour désactiver le pliable.

::component-code
---
Étiquette: true
Ignorer:
  @@ph021@classe
Props:
  classe: 'flex flex-col gap-2 w-48'
  handicapés: vrai
Slots:
  Défaut:|

    @@@ 22 @

  contenu:|

    @@@ 23 @
---

Référence: u-button {label="Open" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-down" block}

#contenu
par placeholder{class="h-48"}
::

@@ph026@exemples

### Contrôle état ouvert

Vous pouvez contrôler l'état ouvert en utilisant la prop `default-open` ou la directive `v-model:open`.

::component-example
---
nom: 'collapsible-open-example'
---
::

::note
Dans cet exemple, en utilisant [`defineShortcuts`](/docs/composables/define-shortcuts), vous pouvez basculer le rétractable en appuyant sur: kbd{value="O"}.
::

::tip
Cela vous permet de déplacer le déclencheur en dehors du pliable ou de le supprimer complètement.
::

### Avec icône tournante

Voici un exemple avec une icône tournante dans le bouton qui indique l'état ouvert du pliable.

::component-example
---
nom: 'collapsible-icon-example'
---
::

@@ph037@api

@@ph038@@props

Composants-props

@@ph039@@Slots

Composants slots

### émissions

Composants émetteurs

@@ph041@thème

Composant-thème

@changement@changement@changement@changement.com

Composant-changelog
