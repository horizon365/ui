---
description: Un ensemble de panneaux redimensionnables séparés par des poignées glissables.
category: layout
links:
  - label: Splitteur
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/splitter
  - label: GitHub à
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Splitter.vue
navigation.badge: New
---

@@ph000@@utilisation

Utilisez le composant Splitter pour afficher une liste de panneaux redimensionnables séparés par des poignées glissables.

::component-example
---
Collapse: vrai
nom: 'splitter-exemple'
---
::

::note
Le Splitter remplit la hauteur de son conteneur, alors assurez-vous qu 'un élément parent en définit un.
::

@@ph001@@éléments

Utilisez le prop `items` comme un tableau d'objets avec les propriétés suivantes:

@@
@@
@@
@@
@@
@@
@@
@@
@@
@@
@@

Utilisez la touche `slot` pour remplir le contenu d'un panneau et la touche `class` pour le styliser. Les éléments sans touche `slot` retombent dans un emplacement `panel-{index}`. Les tailles sont des pourcentages par défaut, définissez `sizeUnit: 'px'` sur un élément pour les valeurs de pixels.

::caution
Lors du rendu sur le serveur, définissez le prop `id` et donnez `defaultSize` à tous les éléments ou à aucun. Les identifiants sont générés automatiquement sinon et le serveur et le client peuvent être en désaccord, ce qui rompt la mise en page sur l'hydratation. Un élément sans un `defaultSize` retombe à une part égale sur le serveur, donc mélanger les deux fait sauter les panneaux une fois hydratés. Les tailles de pixels sont mesurées sur le client et changent toujours un peu.
::

::component-code
---
Collapse: vrai
Catégorie: H-96
Étiquette: true
Ignorer:
  @@ph044@articles
  @@ph045 @ désolé
Extérieure:
  @@ph046@articles
Extérieurs:
  @@447@splitteur []
Props:
  id: 'splitter-items'
  items:
    - slot:'side-bar'(en anglais)
      minuscule: 15
      Maxime: 40
      Défaut: 25
      class: 'bg-elevated/50 border border-default rounded-xl items-center justify-center text-muted font-medium'
    - slot:« principal »
      Défauts: 75
      class: 'bg-elevated/50 border border-default rounded-xl items-center justify-center text-muted font-medium'
Slots:
  Étiquette: sidebar
  Étiquette: Main
---

#épaule
sidebar

#principale
principaux
::

### Référencement

Utilisez la prop `orientation` pour changer la direction du séparateur. Par défaut à `horizontal`.

::component-code
---
Collapse: vrai
Catégorie: H-96
Étiquette: true
Ignorer:
  @@ph053@articles
  @@ph054@réponse
Extérieure:
  @@505@articles
Extérieurs:
  @@556@splitteur []
Props:
  id: 'splitter-orientation'
  Orientation: "Vertical"
  items:
    - slot:« première »
      class: 'bg-elevated/50 border border-default rounded-xl items-center justify-center text-muted font-medium'
    - slot:'deuxième'
      class: 'bg-elevated/50 border border-default rounded-xl items-center justify-center text-muted font-medium'
Slots:
  Première: First
  Deuxième: Deuxième
---

#Première
First one

#deuxième
Deuxième
::

@@ph059@exemples

### Avec panneau repliable

Définissez `collapsible: true` sur un élément pour le laisser s'effondrer au-delà de son `minSize`, et utilisez `collapsedSize` pour garder une partie du panneau visible lorsqu 'il est effondré. L'emplacement du panneau expose `collapsed`,`collapse` et `expand` afin que vous puissiez le contrôler par programmation, et le `collapse`, Les événements `expand` et `resize` se déclenchent avec l'index du panneau.

::component-example
---
Collapse: vrai
nom: 'splitter-foldable-exemple'
---
::

### Avec splitters imbriqués

Installer un `Splitter` à l'intérieur d'un panneau pour créer des mises en page bidimensionnelles de style IDE.

::component-example
---
Collapse: vrai
nom: 'splitter-nested-exemple'
---
::

### Avec poignée personnalisée

Utilisez le `ui` prop pour le restyler, par exemple comme un diviseur visible pour les mises en page affleurantes, et le `resize-handle` fente pour rendre le contenu à l'intérieur comme une poignée.

::component-example
---
Collapse: vrai
nom: 'splitter-custom-handle-example'
---
::

### Avec persévérance

Fournissez un `auto-save-id` pour conserver la mise en page à `localStorage` et la restaurer au rechargement.

```vue
<template>
  <USplitter id="my-layout" auto-save-id="my-layout" :items="items">
    <!-- ... -->
  </USplitter>
</template>
```

@@P085 @@ référencement

@@ph086@@props

Composants-props

@@ph087@@réseaux sociaux

Composants slots

@@888@émissions

Composants émetteurs

@@ph089@thème

Composant-thème

@changement@changement@changement.com

Composant-changelog
