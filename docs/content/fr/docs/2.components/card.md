---
description: Afficher le contenu dans une carte avec un en-tête, un corps et un pied de page.
category: element
keywords:
  - panel
  - box
  - container
links:
  - label: GitHub à
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Card.vue
---

@@ph000@@utilisation

Utilisez les emplacements `header`,`default` et `footer` pour ajouter du contenu à la carte.

::component-code
---
Étiquette: true
Caché:
  @@ph004@classe
Props:
  Catégorie: w-full
Slots:
  Header:|

    @@@ 005 @

  Default:|

    @@@ 006 @

  Footer:|

    @@@ 007 @
---

#header écrit
par placeholder{class="h-8"}

#défaut
par placeholder{class="h-32"}

#Footer
par placeholder{class="h-8"}
::

### Titre: badge{label="4.7+" class="align-text-top"}

Utilisez la prop `title` pour définir le titre de l'en-tête de la carte.

::component-code
---
Étiquette: true
ignorer:
  @@classe
Props:
  Titre: Carte avec titre
  Catégorie: w-full
Slots:
  Default:|

    @@
---

#défaut
par placeholder{class="h-32"}
::

### Description: badge{label="4.7+" class="align-text-top"}

Utilisez la prop `description` pour définir la description de l'en-tête de la carte.

::component-code
---
Étiquette: true
ignorer:
  @@20@titre
  @@ph021@classe
Props:
  Titre: Carte avec description
  « Lorem ipsum dolor sit amet, consectetur adipiscing elit ».
  Catégorie: w-full
Slots:
  Default:|

    @@@ 22 @
---

#Défaut
par placeholder{class="h-32"}
::

@@24@Variant

Utilisez le prop `variant` pour changer la variante de la carte.

::component-code
---
Étiquette: true
Caché:
  @@ph026@classe
Props:
  Variante: subtile
  Catégorie: w-full
Slots:
  Header:|

    @@@ 27 @

  Défaut:|

    @@@ 28 @

  Footer:|

    @@@ 29 @
---

#header écrit
par placeholder{class="h-8"}

#Défaut
par placeholder{class="h-32"}

#Footer
par placeholder{class="h-8"}
::

@@ph033@@api

@@ph034@@props

Composants-props

### Slots

Composants slots

@@ph036@thème

Composant-thème

@changement@changement@changement.com

Composant-changelog
