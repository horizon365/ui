---
title: Colorées
description: Un composant pour sélectionner une couleur.
category: form
keywords:
  - colour picker
  - swatch
  - hex
links:
  - label: GitHub à
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/ColorPicker.vue
---

@@ph000@utilisation

Utilisez la directive `v-model` pour contrôler la valeur du ColorPicker.

::component-code
---
Ignorer:
  - modèleValeur
Extérieur:
  - modèleValeur
Props:
  Modèle:'#00C16A'
---
::

Utilisez la prop `default-value` pour définir la valeur initiale lorsque vous n'avez pas besoin de contrôler son état.

::component-code
---
ignorer:
  @@@ph005@@defaultValue
Props:
  valeur: '#00BCD4'
---
::

### RGB au format RGB

Utilisez la prop `format` pour définir la valeur `rgb` du ColorPicker.

::component-code
---
Ignorer:
  - modèleValeur
  @@ph010@format
Extérieure:
  - modèleValeur
Props:
  Format: rgb
  valeur: 'rgb (0, 193, 106)'
---
::

### HSL Format d'émission

Utilisez la prop `format` pour définir la valeur `hsl` du ColorPicker.

::component-code
---
Ignorer:
  - modèleValeur
  @@ph016@format
Extérieure:
  - modèleValeur
Props:
  Format: HSL
  modelValue: 'hsl (153, 100%, 37.8%)'
---
::

### CMYK Format d'émission

Utilisez la prop `format` pour définir la valeur `cmyk` du ColorPicker.

::component-code
---
Ignorer:
  - modèleValeur
  @@ph022@format
Extérieure:
  - modelValeur
Props:
  Format: Cmyk
  modelValue: 'cmyk (100%, 0%, 45.08%, 24.31%)'
---
::

### CIELab Format d'accueil

Utilisez la prop `format` pour définir la valeur `lab` du ColorPicker.

::component-code
---
Ignorer:
  - modelValeur
  @@28@format
Extérieur:
  - modèleValeur
Props:
  Format: laboratoire
  modelValue: 'laboratoire (68.88%-60.41% 32. 55%)'
---
::

@@ph030@throttle

Utilisez le prop `throttle` pour régler la valeur de l'accélérateur du ColorPicker.

::component-code
---
ignorer:
  - modèleValeur
Extérieur:
  - modelValeur
Props:
  Téléchargement: 100
  Modèle:'#00C16A'
---
::

@@ph034@série

Utilisez la prop `size` pour définir la taille du ColorPicker.

::component-code
---
Props:
  Taille: XL
---
::

### désactivé

Utilisez la prop `disabled` pour désactiver le ColorPicker.

::component-code
---
Props:
  handicapés: vrai
---
::

@@ph038@exemples

### En tant que choix de couleur

Utilisez un [Button](/docs/components/button) et un [Popover](/docs/components/popover) pour créer un sélecteur de couleur.

::component-example
---
nom: 'color-picker-chooser-exemple'
---
::

@@ph048@@api

@@ph049@@props

Composants-props

@@50000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000

Composants émetteurs

@@ph051@thème

Composant-thème

@changement@changement@changement@changement.com

Composant-changelog
