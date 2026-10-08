---
description: Pop-up qui révèle des informations lorsque vous survolez un élément.
category: overlay
keywords:
  - hint
links:
  - label: Tooltip à
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/tooltip
  - label: GitHub à
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Tooltip.vue
---

@@ph000@@utilisation

Utilisez un [Button](/docs/components/button) ou tout autre composant dans l'emplacement par défaut de l'info-bulle.

::component-code
---
Étiquette: true
Ignorer:
  @@ph005@texte
Props:
  text: 'Ouvert sur GitHub'
Slots:
  Défaut:|

    @@@ 006 @
---

Référence: u-button {label="Open" color="neutral" variant="subtle"}
::

::warning
Assurez-vous d'envelopper votre application avec le composant [`App`]() qui utilise le composant [`TooltipProvider`](https://reka-ui.com/docs/components/tooltip#provider) de Reka UI.
::

::tip{to="/docs/components/app#props"}
Vous pouvez consulter le composant `App``tooltip` prop pour voir comment configurer l'info-bulle globalement.
::

@@ph20@texte

Utilisez la prop `text` pour définir le contenu de l'info-bulle.

::component-code
---
Étiquette: true
Props:
  text: 'Ouvert sur GitHub'
Slots:
  Défaut:|

    @@@ 22 @
---

Référence: u-button {label="Open" color="neutral" variant="subtle"}
::

@@24@24000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000

Use the `kbds` prop to render [Kbd](/docs/components/kbd) components in the Tooltip.

::component-code
---
Étiquette: true
Ignorer:
  @@ph030@texte
  @@ph031@kbds
Props:
  text: 'Ouvert sur GitHub'
  kbds:
    @@ph032@méta
    @@ph033@@G
Slots:
  Défaut:|

    @@@ 034 @
---

Référence: u-button {label="Open" color="neutral" variant="subtle"}
::

::tip
Vous pouvez utiliser des clés spéciales comme `meta` qui s'affiche sous `⌘` sur macOS et `Ctrl` sur d'autres plateformes.
::

@@pH039@@délai

Utilisez la prop `delay-duration` pour modifier le délai avant que l'info-bulle apparaisse. Par exemple, vous pouvez la faire apparaître instantanément en la définissant sur `0`.

::component-code
---
Étiquette: true
Ignorer:
  @@ph042@texte
Props:
  Durée: 0
  text: 'Ouvert sur GitHub'
Slots:
  Default:|

    @@@ 043 @
---

Référence: u-button {label="Open" color="neutral" variant="subtle"}
::

::tip
Ceci peut être configuré globalement via l'option `tooltip.delayDuration` dans le composant [`App`](/docs/components/app).
::

@@ph051@@contenu

Utilisez la prop `content` pour contrôler le rendu du contenu de l'info-bulle, comme son `align` ou `side` par exemple.

::tip
Ceci peut être configuré globalement via l'option `tooltip.content` dans le composant [`App`](/docs/components/app).
::

::component-code
---
Étiquette: true
ignorer:
  @@ph061@texte
items:
  content.align:
    @@ph062@départ
    @@pH063@centre
    @@ph064@fin
  content.side:
    @@pH065@@droite
    @@ph066@left
    @@ph067@top
    @@ph068@résultat
Props:
  contenu:
    Alignement: Centre
    Étiquette: bottom
    Décalage: 8
  text: 'Ouvert sur GitHub'
Slots:
  Default:|

    @@@ 069 @
---

Référence: u-button {label="Open" color="neutral" variant="subtle"}
::

@@771@@Arceau

Utilisez la prop `arrow` pour afficher une flèche dans l'info-bulle.

::component-code
---
Étiquette: true
ignorer:
  @@ph073@texte
  @@774@araignée
Props:
  Arrow: vrai
  text: 'Ouvert sur GitHub'
Slots:
  Default:|

    @@@ 75 @
---

Référence: u-button {label="Open" color="neutral" variant="subtle"}
::

### désactivé

Utilisez la prop `disabled` pour désactiver l'info-bulle.

::component-code
---
Étiquette: true
Ignorer:
  @@ph079@texte
Props:
  handicapés: vrai
  text: 'Ouvert sur GitHub'
Slots:
  Défaut:|

    @@@ 80 @
---

Référence: u-button {label="Open" color="neutral" variant="subtle"}
::

@@ph082@Exemples

### Contrôle état ouvert

Vous pouvez contrôler l'état ouvert en utilisant la prop `default-open` ou la directive `v-model:open`.

::component-example
---
nom: 'tooltip-open-example'
---
::

::note
Dans cet exemple, en utilisant [`defineShortcuts`](/docs/composables/define-shortcuts), vous pouvez basculer l'info-bulle en appuyant sur: kbd{value="O"}.
::

### Avec curseur suivant

Vous pouvez faire en sorte que l'info-bulle suive le curseur lorsque vous survolez un élément en utilisant le prop [`reference`](https://reka-ui.com/docs/components/tooltip#trigger):

::component-example
---
nom: 'tooltip-cursor-exemple'
---
::

@@ph098@@api

@099@@propriété

Composants-props

@@ph100@@réseaux sociaux

Composants slots

@101@101@101@101

Composants émetteurs

@@ph102@thème

Composant-thème

@changement@changement@changement.com

Composant-changelog
