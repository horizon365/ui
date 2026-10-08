---
description: 'Un composant qui affiche une séquence d'événements avec des dates, des titres, des icônes ou des avatars.'
category: data
keywords:
  - activity feed
  - history
links:
  - label: GitHub à
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Timeline.vue
---

@@ph000@utilisation

Utilisez le composant Timeline pour afficher une liste d'éléments dans une timeline.

::component-code
---
Collapse: vrai
Caché:
  @@ph001@classe
  @@ph002@@valeur défaillante
ignorer:
  @@ph003@articles
  @@ph004@classe
  @@@ph005@@defaultValue
Extérieure:
  @@ph006@articles
Extérieurs:
  @@007@@heure []
Props:
  Valeur défaite: 2
  items:
    - date:'15 mars 2025'
      Titre original: Project Kickoff
      Description: 'Lancement du projet avec alignement d'équipe. Configurer les jalons du projet et les ressources allouées.'
      Étiquette: i-lucide-rocket
    - date:'22 mars 2025'
      Titre: Phase de design
      Description: 'Ateliers de recherche et de conception utilisateurs.Création de wireframes et de prototypes pour les tests utilisateurs'.
      Icon: i-lucide-palette
    - date:'29 mars 2025'
      Titre: Sprint de développement
      Description: 'Développement frontend et backend. Fonctionnalités de base implémentées et intégrées aux API.'
      Icône: i-lucide-code.
    - date:'Apr 5 2025'
      Titre: Test & Déploiement
      Description: 'Tests d'assurance qualité et optimisation des performances. Déploiement de l'application en production.'
      Icône: i-lucide-check-circle
  Catégorie: W-96
---
::

@@ph012@articles

Utilisez le `items` prop comme un tableau d'objets avec les propriétés suivantes:

@@
@@
@@
@@
@@
@@
@@
@@
@@

::component-code
---
Ignorer:
  @@ph045@articles
  @@ph046@classe
  - defaultValue
Extérieur:
  @@ph048@articles
Extérieurs:
  @@449@@449@449@449@449@449@449@449@449@49@449@449@49@49@449@49@49@49@49@49@49@49@49@49@49@49@49@49@49@49@49@49@49@49@49@49@49@49@499@4999@4999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
Props:
  Valeur défaite: 2
  items:
    - date:'15 mars 2025'
      Titre original: Project Kickoff
      Description: 'Lancement du projet avec alignement d'équipe. Configurer les jalons du projet et les ressources allouées.'
      Étiquette: i-lucide-rocket
    - date:'22 mars 2025'
      Titre: Phase de design
      Description: 'Ateliers de recherche et de conception utilisateurs.Création de wireframes et de prototypes pour les tests utilisateurs'.
      Icon: i-lucide-palette
    - date:'29 mars 2025'
      Titre: Sprint de développement
      Description: 'Développement frontend et backend. Fonctionnalités de base implémentées et intégrées aux API.'
      Icône: i-lucide-code.
    - date:'Apr 5 2025'
      Titre: Test & Déploiement
      Description: 'Tests d'assurance qualité et optimisation des performances. Déploiement de l'application en production.'
      Icône: i-lucide-check-circle
  Catégorie: W-96
---
::

### couleur

Utilisez la prop `color` pour modifier la couleur des éléments actifs dans une chronologie.

::component-code
---
Ignorer:
  @@556@éléments
  @@ph057@classe
  - defaultValue
Extérieure:
  @@59@@éléments
Extérieurs:
  @@@P060@@TimelineItem [réf. nécessaire]
Props:
  Couleur: Neutre
  Valeur défaite: 2
  items:
    - date:'15 mars 2025'
      Titre original: Project Kickoff
      Description: 'Lancement du projet avec alignement d'équipe. Configurer les jalons du projet et les ressources allouées.'
      Étiquette: i-lucide-rocket
    - date:'22 mars 2025'
      Titre: Phase de design
      Description: 'Ateliers de recherche et de conception utilisateurs.Création de wireframes et de prototypes pour les tests utilisateurs'.
      Icon: i-lucide-palette
    - date:'29 mars 2025'
      Titre: Sprint de développement
      Description: 'Développement frontend et backend. Fonctionnalités de base implémentées et intégrées aux API.'
      Icône: i-lucide-code
    - date:'Apr 5 2025'
      Titre: Test & Déploiement
      Description: 'Tests d'assurance qualité et optimisation des performances. Déploiement de l'application en production.'
      Icône: i-lucide-check-circle
  Catégorie: W-96
---
::

@@pH065@série

Utilisez la prop `size` pour modifier la taille de la chronologie.

::component-code
---
Ignorer:
  @@ph067@articles
  @@ph068@classe
  - defaultValue
Extérieure:
  @@ph070@articles
Extérieurs:
  @@701@@TimelineItem [réf. nécessaire]
Props:
  Taille: XS
  Valeur défaite: 2
  items:
    - date:'15 mars 2025'
      Titre original: Project Kickoff
      Description: 'Lancement du projet avec alignement d'équipe. Configurer les jalons du projet et les ressources allouées.'
      Étiquette: i-lucide-rocket
    - date:'22 mars 2025'
      Titre: Phase de design
      Description: 'Ateliers de recherche et de conception utilisateurs.Création de wireframes et de prototypes pour les tests utilisateurs'.
      Icon: i-lucide-palette
    - date:'29 mars 2025'
      Titre: Sprint de développement
      Description: 'Développement frontend et backend. Fonctionnalités de base implémentées et intégrées aux API.'
      Icône: i-lucide-code
    - date:'Apr 5 2025'
      Titre: Test & Déploiement
      Description: 'Tests d'assurance qualité et optimisation des performances. Déploiement de l'application en production.'
      Icône: i-lucide-check-circle
  Catégorie: W-96
---
::

### Référencement

Utilisez la prop `orientation` pour changer l'orientation de la timeline. Par défaut à `vertical`.

::component-code
---
ignorer:
  @@779@articles
  @@ph080@classe
  - defaultValue
Extérieur:
  @@ph082@articles
Extérieurs:
  @@883@@heure []
Props:
  Orientation: « horizontale »
  Valeur défaite: 2
  items:
    - date:'15 mars 2025'
      Titre original: Project Kickoff
      Description: "Lancement du projet avec l'alignement de l'équipe."
      Étiquette: i-lucide-rocket
    - date:'22 mars 2025'
      Titre: Phase de design
      Description: 'Ateliers de recherche et de conception utilisateurs'.
      Icon: i-lucide-palette
    - date:'29 mars 2025'
      Titre: Sprint de développement
      Description: Développement frontend et backend.
      Icône: i-lucide-code
    - date:'Apr 5 2025'
      Titre: Test & Déploiement
      Description: 'Tests QA et optimisation des performances.'
      Icône: i-lucide-check-circle
  Catégorie: w-full
classe: « overflow-x-auto »
---
::

@@888@rétroactions

Utilisez la prop inverse pour inverser la direction de la timeline.

::component-code
---
ignorer:
  @@ph089@articles
  @@ph090@classe
  - defaultValue
Extérieure:
  @@ph092@articles
Extérieurs:
  @@P093@@TimelineItem [réf. nécessaire]
Props:
  Revers: vrai
  Modèle: 2
  Orientation: "Vertical"
  items:
    - date:'15 mars 2025'
      Titre original: Project Kickoff
      Description: "Lancement du projet avec l'alignement de l'équipe."
      Étiquette: i-lucide-rocket
    - date:'22 mars 2025'
      Titre: Phase de design
      Description: 'Ateliers de recherche et de conception utilisateurs'.
      Icon: i-lucide-palette
    - date:'29 mars 2025'
      Titre: Sprint de développement
      Description: Développement frontend et backend.
      Icône: i-lucide-code
    - date:'Apr 5 2025'
      Titre: Test & Déploiement
      Description: 'Tests QA et optimisation des performances.'
      Icône: i-lucide-check-circle
  Catégorie: w-full
classe: 'overflow-x-auto'
---
::

@@ph098@exemples

### Contrôle élément actif

Vous pouvez contrôler l'élément actif à l'aide de la prop `default-value` ou de la directive `v-model` avec la directive `value` de l'élément.

: composant-exemple {name="timeline-model-value-example" prettier}

::tip
Utilisez la prop `value-key` pour modifier la clé utilisée pour faire correspondre les éléments lorsqu 'un `v-model` ou `default-value` est fourni.
::

### Avec événement sélectionné

Vous pouvez ajouter un écouteur `@select` pour rendre les éléments cliquables.

::note
La fonction handler reçoit les `Event` et `TimelineItem` comme premier et deuxième arguments respectivement.
::

::component-example
---
Étiquette: true
nom: 'timeline-select-exemple'
---
::

### Avec disposition alternative

Utilisez la prop `ui` pour créer une chronologie avec une disposition alternée.

: composant {name="timeline-alternating-layout-example" prettier}

### Avec slot custom

Utilisez la propriété `slot` pour personnaliser un élément spécifique.

Vous aurez accès aux slots suivants:

@@
@@
@@
@@

: composant {name="timeline-custom-slot-example" prettier}

### Avec slots

Utilisez les emplacements disponibles pour créer une chronologie plus complexe.

: composant {name="timeline-slots-example" prettier}

@@ph132@api

@@ph133@@props

Composants-props

@@ph134@@réglages

Composants slots

@@P135@@émissions

Composants émetteurs

@@ph136@thème

Composant-thème

@changement@changement137

Composant-changelog
