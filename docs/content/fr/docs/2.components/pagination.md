---
description: Une liste de boutons ou de liens pour naviguer dans les pages.
category: navigation
keywords:
  - pager
  - page navigation
links:
  - label: pagination
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/pagination
  - label: GitHub à
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Pagination.vue
---

@@ph000@@utilisation

Utilisez la directive `default-page` ou la directive `v-model:page` pour contrôler la page en cours.

::component-code
---
Extérieure:
  @@ph003@page
Modèle:
  @@ph004@page
ignorer:
  @@ph005@page
  @@F006@tout
Props:
  Page: cinq
  Total: 100
---
::

::note
Le composant Pagination utilise un certain [`Button`](/docs/components/button) pour afficher les pages, utilisez [`color`](#color),[`variant`](#variant) et [`size`](#size) pour les styliser
::

@27@@Total

Utilisez la prop `total` pour définir le nombre total d'éléments dans la liste.

::component-code
---
Extérieure:
  @29@page
Modèle:
  @@ph030@page
Props:
  Page: cinq
  Total: 100
---
::

### Items par page

Utilisez la prop `items-per-page` pour définir le nombre d'éléments par page. Par défaut à `10`.

::component-code
---
Ignorer:
  @@ph034@page
Extérieure:
  @@ph035@page
Modèle:
  @@ph036@page
Props:
  Page: cinq
  Étiquettes: 20
  Total: 100
---
::

### Sibling Compte

Utilisez la prop `sibling-count` pour définir le nombre de frères et sœurs à afficher. Defaults à `2`.

::component-code
---
Ignorer:
  @@ph040@page
  @@ph041@@total
Extérieur:
  @@ph042@page
Modèle:
  @@ph043@page
Props:
  Page: cinq
  Sibérien: 1
  Total: 100
---
::

### Afficher les bords

Utilisez la prop `show-edges` pour toujours afficher les points de suspension, la première et la dernière pages. Par défaut à `false`.

::component-code
---
Ignorer:
  @@ph047@page
  @@ph048@@total
Extérieur:
  @@ph049@page
Modèle:
  @@ph050@page
Props:
  Page: cinq
  Spectacle: vrai
  Sibérien: 1
  Total: 100
---
::

### Afficher les contrôles

Utilisez la prop `show-controls` pour afficher les boutons premier, précédent, suivant et dernier. Par défaut à `true`.

::component-code
---
ignorer:
  @@ph054@page
  @@505@tout
Extérieure:
  @@ph056@page
Modèle:
  @@ph057@page
Props:
  Page: cinq
  Démonstration: False
  Spectacle: vrai
  Total: 100
---
::

### couleur

Utilisez la prop `color` pour définir la couleur des contrôles inactifs. Par défaut sur `neutral`.

::component-code
---
ignorer:
  @@ph061@page
  - tout
Extérieure:
  @@ph063@page
Modèle:
  @@ph064@page
items:
  Couleur:
    @@ph065@primaire
    @@ph066@secondaire
    - réussite
    @@ph068@info
    @@ph069@référencement
    @@F070@erreur
    @@ph071@neutre
Props:
  Page: cinq
  Couleur: Primaire
  Total: 100
---
::

@@72@Variant

Utilisez la prop `variant` pour définir la variante des contrôles inactifs. Defaults à `outline`.

::component-code
---
Ignorer:
  @@ph075@page
  @@76@tout
Extérieure:
  @@ph077@page
Modèle:
  @@ph078@page
items:
  Couleur:
    @@79@primaire
    - secondaire
    @081@réussite
    @@ph082@info
    @@ph083@référencement
    @@ph084@erreur
    @@ph085@neutre
  Variante:
    @@ph086@solide
    @@ph087@outline
    @@888@référencement
    @899@subtile
    @ghost
    @@ph091@lien
Props:
  Page: cinq
  Couleur: Neutre
  Variante: subtile
  Total: 100
---
::

### Couleur active

Utilisez la prop `active-color` pour définir la couleur du contrôle actif. Par défaut sur `primary`.

::component-code
---
ignorer:
  @@ph095@page
  @@P096@tout
Extérieure:
  @@ph097@page
Modèle:
  @@ph098@page
items:
  Activité:
    @@ph099@primaire
    - secondaire
    @101@réussite
    @@ph102@info
    - référencement
    @@F104@erreur
    @@ph105@neutre
Props:
  Page: cinq
  Couleur: Neutre
  Total: 100
---
::

### Variante active

Utilisez la prop `active-variant` pour définir la variante du contrôle actif. Defaults sur `solid`.

::component-code
---
ignorer:
  @@ph109@page
  @@ph110@totale
Extérieure:
  @@ph111@page
Modèle:
  @@ph112@page
items:
  Activité:
    @@ph113@primaire
    - secondaire
    @@115@réussite
    @@ph116@info
    @@ph117@avertissement
    @@ph118@erreur
    @@ph119@neutre
  Activité:
    @@ph120@solide
    @@ph121@outline
    @@ph122@doux
    @@ph123@subtile
    @ph124@fantôme
    @@ph125@lien
Props:
  Page: cinq
  Activité: Primary
  Activité: Subtil
  Total: 100
---
::

@@ph126@size

Utilisez la prop `size` pour définir la taille des contrôles. Par défaut à `md`.

::component-code
---
Ignorer:
  @@ph129@page
  @@P130@tout
Extérieur:
  @@ph131@page
Modèle:
  @@ph132@page
items:
  Size:
    @@ph133@@x
    @@ph134
    @@ph135@md
    @@ph136@lg
    @@ph137@xl
Props:
  Page: cinq
  Taille: XL
  Total: 100
---
::

### désactivé

Utilisez la prop `disabled` pour désactiver les contrôles de pagination.

::component-code
---
Ignorer:
  @@ph140@@page
  @@ph141@@total
Extérieure:
  @@ph142@page
Modèle:
  @@ph143@page
Props:
  Page: cinq
  Total: 100
  handicapés: vrai
---
::

@@ph144@exemples

### Avec les liens

Utilisez la prop `to` pour transformer les boutons en liens. Passez une fonction qui reçoit le numéro de page et renvoie une destination de route.

::component-example
---
nom: 'pagination-links-exemple'
---
::

::note
Dans cet exemple, nous ajoutons le hachage `#with-links` pour éviter d'aller en haut de la page.
::

@@ph148@@api

@@ph149@@props

Composants-props

@@ph150@@réseaux sociaux

Composants slots

@@151@@émetteur

Composants émetteurs

@@ph152@thème

Composant-thème

@changement@changement@changement.com

Composant-changelog
