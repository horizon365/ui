---
description: Un contrôle qui bascule entre deux états.
category: form
keywords:
  - toggle
  - toggle switch
links:
  - label: switch
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/switch
  - label: GitHub à
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Switch.vue
---

@@ph000@utilisation

Utilisez la directive `v-model` pour contrôler l'état vérifié du commutateur.

::component-code
---
Ignorer:
  - modèleValeur
Extérieure:
  - modèleValeur
Props:
  Modèle: true
---
::

Utilisez la prop `default-value` pour définir la valeur initiale lorsque vous n'avez pas besoin de contrôler son état.

::component-code
---
ignorer:
  @@@ph005@@defaultValue
Props:
  valeur: true
---
::

@@ph006@étiquette

Utilisez le prop `label` pour définir l'étiquette du commutateur.

::component-code
---
Props:
  Étiquette: check me
---
::

Lorsque vous utilisez le prop `required`, un astérisque est ajouté à côté de l'étiquette.

::component-code
---
Ignorer:
  @@ph009@label
Props:
  Requis: Vrai
  Étiquette: check me
---
::

@@ph010@Description

Utilisez la prop `description` pour définir la description du commutateur.

::component-code
---
Ignorer:
  @@ph012@étiquette
Props:
  Étiquette: check me
  Description: "Ceci est une case à cocher."
---
::

@@ph013@@Icon

Utilisez les accessoires `checked-icon` et `unchecked-icon` pour définir les icônes du commutateur lorsqu 'elles sont cochées ou non.

::component-code
---
Étiquette: true
Ignorer:
  @@ph016@label
  - defaultValue
Props:
  UncheckedIcon: 'i-lucide-x'
  checkedIcon: 'i-lucide-check'
  valeur: true
  Étiquette: check me
---
::

@@18@chargement

Utilisez le prop `loading` pour afficher une icône de chargement sur le Switch.

::component-code
---
Ignorer:
  @@ph020@label
  - defaultValue
Props:
  Chargement: vrai
  valeur: true
  Étiquette: check me
---
::

### Icône de chargement

Utilisez la prop `loading-icon` pour personnaliser l'icône de chargement. Par défaut,`i-lucide-loader-circle`.

::component-code
---
Ignorer:
  @@ph025@label
  - valeur défaillante
Props:
  Chargement: vrai
  loadingIcon: 'i-lucide-loader'
  valeur: true
  Étiquette: check me
---
::

::framework-only
#numérique
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
Vous pouvez personnaliser cette icône globalement dans votre `app.config.ts` sous la touche `ui.icons.loading`.
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
Vous pouvez personnaliser cette icône globalement dans votre `vite.config.ts` sous la touche `ui.icons.loading`.
:::
::

### Couleur

Utilisez le prop `color` pour changer la couleur du commutateur.

::component-code
---
ignorer:
  @@ph033@label
  - valeur défaillante
Props:
  Couleur: Neutre
  valeur: true
  Étiquette: check me
---
::

@@pH035@@Size

Utilisez le prop `size` pour modifier la taille du commutateur.

::component-code
---
ignorer:
  @@ph037@label
  - defaultValue
Props:
  Taille: XL
  valeur: true
  Étiquette: check me
---
::

### désactivé

Utilisez le prop `disabled` pour désactiver le commutateur.

::component-code
---
Ignorer:
  @@ph041@@label
Props:
  handicapés: vrai
  Étiquette: check me
---
::

@@ph042 @ référencement

@@ph043@@props

Composants-props

::callout{icon="i-simple-icons-mdnwebdocs" to="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attributes" target="_blank"}
Ce composant prend également en charge tous les attributs HTML natifs `<button>`.
::

### Slots

Composants slots

### Emits

Composants émetteurs

@@ph047@thème

Composant-thème

@changelog 48

Composant-changelog
