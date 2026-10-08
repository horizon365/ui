---
description: Un élément kbd pour afficher une touche de clavier.
category: element
keywords:
  - keyboard shortcut
  - hotkey
  - keybinding
links:
  - label: GitHub à
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Kbd.vue
---

@@ph000@@utilisation

Utilisez le slot par défaut pour définir la valeur du Kbd.

::component-code
---
Slots:
  Défaut: K
---
::

@@ph001@valeur

Utilisez la prop `value` pour définir la valeur du Kbd.

::component-code
---
Props:
  Valeur: K
---
::

Vous pouvez passer des clés spéciales à la prop `value` qui passe par le [`useKbd`](https://github.com/nuxt/ui/blob/v4/src/runtime/composables/useKbd.ts) composable. Par exemple, la clé `meta` s'affiche comme `⌘` sur macOS et `Ctrl` sur d'autres plateformes.

::component-code
---
Props:
  Valeur: meta
items:
  Valeur:
    @@ph012@méta
    @@g013@gagnant
    @@ph014@commande
    @@15@@shift
    @@ctrl @ctrl
    @@ph017@option
    @@ph018
    @@P19@entrée
    @200000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
    @@21@rétroaction
    @@22@échappé
    @@23@tab
    @@24@capsule
    @250@@Arrouette
    @26@@Arrowright
    @@@27@@Arrowdown
    @@28@@Arrowleft
    @@29@@pha29
    @@ph030@@ph030
    @@ph031@home
    @@ph032@fin
---
::

@@pH033@@couleur

Utilisez la prop `color` pour changer la couleur du Kbd.

::component-code
---
Props:
  Couleur: Neutre
Slots:
  Défaut: K
---
::

### Variant

Utilisez la prop `variant` pour modifier la variante du Kbd.

::component-code
---
Props:
  Couleur: Neutre
  Variante: solide
Slots:
  Défaut: K
---
::

@@ph037@série

Utilisez la prop `size` pour modifier la taille du Kbd.

::component-code
---
Props:
  Taille: LG
Slots:
  Défaut: K
---
::

@@ph039@exemples

@@

Utilisez la prop `class` pour remplacer les styles de base du badge.

::component-code
---
Props:
  classe: 'font-bold rounded-full'
  Variante: subtile
Slots:
  Défaut: K
---
::

@@ph043@@api

@@444@propriété

Composants-props

### Slots

Composants slots

@@ph046@thème

Composant-thème

@changement@changement@changement@changement.com

Composant-changelog
