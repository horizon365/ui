---
title: PricePlan
description: 'Un plan de tarification personnalisable à afficher dans une page de tarification.'
category: page
links:
  - label: GitHub à
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/PricingPlan.vue
---

@@ph000@@utilisation

Le composant Pricing Plan offre un moyen flexible d'afficher un plan de tarification avec un contenu personnalisable, y compris le titre, la description, le prix, les fonctionnalités, etc.

::code-preview

::u-pricing-plan
---
Titre: Solo
Pour les bootstrappers et les hackers indépendants.
Prix: 249 $
Réduction: 199 $
cycle de facturation: '/mois'
Badge: "Le plus populaire"
Caractéristiques:
  - 'Un développeur '
  - 'Projets illimités '
  - 'Accès au dépôt GitHub '
  - 'Patch illimité et mises à jour mineures '
  - 'Accès à vie '
bouton:
  Étiquette:"Acheter maintenant"
Catégorie: W-96
---
::

::

::tip{to="/docs/components/pricing-plans"}
Utilisez le composant `PricingPlans` pour afficher plusieurs plans tarifaires dans une mise en page de grille réactive.
::

@@ph007@titre

Utilisez la prop `title` pour définir le titre du plan de prix.

::component-code
---
Ignorer:
  @@ph009@classe
Props:
  Titre: Solo
  Catégorie: W-96
---
::

@@ph010@Description

Utilisez la prop `description` pour définir la description du plan de prix.

::component-code
---
Caché:
  @@classe 12
ignorer:
  @@ph013@titre
Props:
  Titre: Solo
  Pour les bootstrappers et les hackers indépendants.
  Catégorie: W-96
---
::

@@ph014@@badge

Utilisez le `badge` prop pour afficher un [Badge](/docs/components/badge) à côté du titre du plan de tarification.

::component-code
---
Étiquette: true
Caché:
  @@ph020@classe
ignorer:
  @@21@titre
  @@ph022@description
Props:
  Titre: Solo
  Pour les bootstrappers et les hackers indépendants.
  Badge: "Le plus populaire"
  Catégorie: W-96
---
::

You can pass any property from the [Badge](/docs/components/badge#props) component to customize it.

::component-code
---
Étiquette: true
Caché:
  @@ph027@classe
Ignorer:
  @@28@titre
  @@ph029@description
  - badge.label
  - badge.couleur
  - badge.variant
Props:
  Titre: Solo
  Pour les bootstrappers et les hackers indépendants.
  badge:
    Étiquette:"Most Popular"
    Couleur: "Neutre"
    Étiquette:"solide"
  Catégorie: W-96
---
::

@@ph033@price

Utilisez le `price` prop pour définir le prix du plan de prix.

::component-code
---
Étiquette: true
Caché:
  @@classe 35
Ignorer:
  @@ph036@titre
  @@ph037@description
Props:
  Titre: Solo
  Pour les bootstrappers et les hackers indépendants.
  Prix: 249 $
  Catégorie: W-96
---
::

@@38@@réduction

Utilisez le prop `discount` pour définir un prix réduit qui sera affiché à côté du prix original (qui sera affiché avec une barre).

::component-code
---
Étiquette: true
Caché:
  @@classe 400
Ignorer:
  @@ph041@titre
  @@ph042@description
Props:
  Titre: Solo
  Pour les bootstrappers et les hackers indépendants.
  Prix: 249 $
  Réduction: 199 $
  Catégorie: W-96
---
::

@@pH043@@référencement

Utilisez les accessoires `billing-cycle` et/ou `billing-period` pour afficher les informations de facturation du plan de tarification.

::component-code
---
Étiquette: true
Caché:
  @@ph046@classe
ignorer:
  @@ph047@titre
  @@ph048@description
Props:
  Titre: Solo
  Pour les bootstrappers et les hackers indépendants.
  Prix: 9 $
  cycle: '/mois'
  Période de facturation: 'facturé annuellement'
  Catégorie: W-96
---
::

### Caractéristiques

Utilisez le `features` prop comme tableau de chaînes pour afficher une liste de caractéristiques sur le plan de prix:

::component-code
---
Étiquette: true
Caché:
  @@ph051@classe
Ignorer:
  @@ph052@titre
  @@ph053@description
  - prix
  - caractéristiques
Props:
  Titre: Solo
  Pour les bootstrappers et les hackers indépendants.
  Prix: 249 $
  Caractéristiques:
    - 'Un développeur '
    - 'Projets illimités '
    - 'Accès au dépôt GitHub '
    - 'Patch illimité et mises à jour mineures '
    - 'Accès à vie '
  Catégorie: W-96
---
::

::framework-only
#numérique
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
Vous pouvez personnaliser cette icône globalement dans votre `app.config.ts` sous la touche `ui.icons.success`.
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
Vous pouvez personnaliser cette icône globalement dans votre `vite.config.ts` sous la touche `ui.icons.success`.
:::
::

Vous pouvez également passer un tableau d'objets avec les propriétés suivantes:

@@
@@

::component-code
---
Étiquette: true
Caché:
  @@ph071@classe
Extérieure:
  - caractéristiques
Extérieurs:
  - PricingPlanFeature []
Ignorer:
  @@ph074@titre
  @@ph075@description
  @76@prix
  - caractéristiques
Props:
  Titre: Solo
  Pour les bootstrappers et les hackers indépendants.
  Prix: 249 $
  Caractéristiques:
    - title:'Un développeur'
      Icône: i-lucide-user
    - title:'Projets illimités'
      Icône: i-lucide-infinity
    - title:'Accès au dépôt GitHub'
      Icône: i-lucide-github
    - title:'Patch illimité et mises à jour mineures'
      Icône: i-lucide-refresh-cw
    - title: Accès à vie
      Icône: i-lucide-clock
  Catégorie: W-96
---
::

@@ph083@bouton

Utilisez la prop `button` avec n'importe quelle propriété du composant [Button](/docs/components/button) pour afficher un bouton au bas du plan de prix.

::component-code
---
Étiquette: true
Caché:
  @@ph089@classe
ignorer:
  @@ph090@titre
  @@ph091@description
  @@ph092@prix
  - caractéristiques
Props:
  Titre: Solo
  Pour les bootstrappers et les hackers indépendants.
  Prix: 249 $
  Caractéristiques:
    - 'Un développeur '
    - 'Projets illimités '
    - 'Accès au dépôt GitHub '
    - 'Patch illimité et mises à jour mineures '
    - 'Accès à vie '
  Bouton:
    Étiquette:"acheter maintenant"
  Catégorie: W-96
---
::

::tip
Utilisez le champ `onClick` pour ajouter un gestionnaire de clics afin de déclencher l'achat du plan.
::

@@P100@@Variant

Utilisez la prop `variant` pour modifier la variante du plan de prix.

::component-code
---
Étiquette: true
Caché:
  @@ph102@classe
Ignorer:
  @@ph103@titre
  @@ph104@description
  @@P105 @ prix
  - caractéristiques
  - button.label
Props:
  Titre: Solo
  Pour les bootstrappers et les hackers indépendants.
  Prix: 249 $
  Caractéristiques:
    - 'Un développeur '
    - 'Projets illimités '
    - 'Accès au dépôt GitHub '
    - 'Patch illimité et mises à jour mineures '
    - 'Accès à vie '
  Bouton:
    Étiquette:"acheter maintenant"
  Étiquette:"subtil"
  Catégorie: W-96
---
::

### Référencement

Utilisez la prop `orientation` pour modifier l'orientation de la Pricing Plan. Defaults à `vertical`.

::component-code
---
Étiquette: true
Caché:
  @@classe 116
Ignorer:
  @@ph117@titre
  @@ph118@description
  @@ph119@prix
  - caractéristiques
  - button.label
Props:
  Titre: Solo
  Pour les bootstrappers et les hackers indépendants.
  Prix: 249 $
  Caractéristiques:
    - 'Un développeur '
    - 'Projets illimités '
    - 'Accès au dépôt GitHub '
    - 'Accès à vie '
  Bouton:
    Étiquette:"Acheter maintenant"
  Orientation: horizontale
  Étiquette:"Outline"
  Catégorie: w-full
---
::

@@ph126@@synthèse

Utilisez le prop `tagline` pour afficher un texte de slogan au-dessus du prix.

::component-code
---
Étiquette: true
Caché:
  @@ph128@classe
Ignorer:
  @@ph129@titre
  @@ph130@description
  @@ph131@prix
  - caractéristiques
  @@ph133@@button.label
  - référence
Props:
  Titre: Solo
  Pour les bootstrappers et les hackers indépendants.
  Prix: 249 $
  Caractéristiques:
    - 'Un développeur '
    - 'Projets illimités '
    - 'Accès au dépôt GitHub '
    - 'Accès à vie '
  Bouton:
    Étiquette:"Acheter maintenant"
  Orientation: horizontale
  Le slogan: « Payez une fois, possédez-le pour toujours »
  Catégorie: w-full
---
::

@@ph139@@termes

Use the `terms` prop to display terms below the price.

::component-code
---
Étiquette: true
Caché:
  @@ph141@@classe
Ignorer:
  @@ph142@titre
  @@ph143@description
  @@ph144@prix
  - caractéristiques
  - button.label
  - référencement
  @@ph148@synthèse
Props:
  Titre: Solo
  Pour les bootstrappers et les hackers indépendants.
  Prix: 249 $
  Caractéristiques:
    - 'Un développeur '
    - 'Projets illimités '
    - 'Accès au dépôt GitHub '
    - 'Accès à vie '
  Bouton:
    Étiquette:"acheter maintenant"
  Orientation: horizontale
  Le slogan: « Payez une fois, possédez-le pour toujours »
  termes: "Factures et reçus disponibles."
  Catégorie: w-full
---
::

@@ph153@@highlight

Utilisez la prop `highlight` pour afficher une bordure surlignée autour du plan de prix.

::component-code
---
Étiquette: true
Caché:
  @@ph155@classe
ignorer:
  @@ph156@titre
  - description
  - prix
  - caractéristiques
  - button.label
Props:
  Titre: Solo
  Pour les bootstrappers et les hackers indépendants.
  Prix: 249 $
  Caractéristiques:
    - 'Un développeur '
    - 'Projets illimités '
    - 'Accès au dépôt GitHub '
    - 'Patch illimité et mises à jour mineures '
    - 'Accès à vie '
  Bouton:
    Étiquette:"acheter maintenant"
  Highlight: vrai
  Catégorie: W-96
---
::

@@ph166@@échelle

Use the `scale` prop to make a PricingPlan bigger than the others.

::note{to="/docs/components/pricing-plans#scale"}
Consultez l'exemple `scale` de PricingPlans pour voir comment cela fonctionne, car il est difficile de le démontrer par lui-même.
::

@@ph169@@api

@170@projets

Composants-props

@@ph171@@slot

Composants slots

@@ph172@thème

Composant-thème

@changement@changement@changement.com

Composant-changelog
