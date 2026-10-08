---
description: Une hiérarchie de liens pour naviguer à travers un site Web.
category: navigation
keywords:
  - breadcrumbs
links:
  - label: GitHub à
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Breadcrumb.vue
---

@@ph000@@utilisation

Utilisez le composant Breadcrumb pour afficher l'emplacement de la page actuelle dans la hiérarchie de votre site.

::component-code
---
Collapse: vrai
Ignorer:
  @@ph001@articles
Extérieur:
  @@ph002@@articles
Extérieurs:
  @@@@@@@@@BreadcrumbItem []
Props:
  items:
    - label:« Docs »
      icon: 'i-lucide-book-open'
      à:/docs
    - label:'Composants'
      Icône: i-lucide-box
      à:'/docs/composants'
    - label:« Breadcrumb »
      Icône:'i-lucide-link'
      à:/docs/components/breadcrumb
---
::

@0007@@référencement

Utilisez le `items` prop comme un tableau d'objets avec les propriétés suivantes:

@@
@@
@@
@@
@@
@@

Vous pouvez passer n'importe quelle propriété du composant [Link](/docs/components/link#props) comme `to`,`target`, etc.

::component-code
---
Ignorer:
  @@ph037@articles
Extérieure:
  @@ph038@articles
Extérieurs:
  @@@P039@@BreadcrumbItem [réf. nécessaire]
Props:
  items:
    - label:'Docs'
      icon: 'i-lucide-book-open'
      à:/docs
    - label:'Composants'
      Icône: i-lucide-box
      à:'/docs/composants'
    - label:« Breadcrumb »
      Icône:'i-lucide-link'
      à:/docs/components/breadcrumb
---
::

::note
Un `span` est rendu à la place d'un lien lorsque la propriété `to` n'est pas définie.
::

### Séparateur Icône

Utilisez le prop `separator-icon` pour personnaliser le [Icon](/docs/components/icon) entre chaque élément.

::component-code
---
ignorer:
  @@502@articles
Extérieur:
  @@ph053@articles
Extérieurs:
  @@@P505@@@Papier []
Props:
  séparateurIcône:'i-lucide-arrow-right'
  items:
    - label:'Docs'
      icon: 'i-lucide-book-open'
      à:/docs
    - label:'Composants'
      Icône: i-lucide-box
      à:'/docs/composants'
    - label:« Breadcrumb »
      Icône:'i-lucide-link'
      à:/docs/components/breadcrumb
---
::

::framework-only
#numérique
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
Vous pouvez personnaliser cette icône globalement dans votre `app.config.ts` sous la touche `ui.icons.chevronRight`.
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
Vous pouvez personnaliser cette icône globalement dans votre `vite.config.ts` sous la touche `ui.icons.chevronRight`.
:::
::

### Couleur: badge{label="4.8+" class="align-text-top"}

Utilisez la prop `color` pour modifier la couleur du fil de pain actif.

::component-code
---
ignorer:
  @@ph065@articles
Extérieur:
  @@ph066@éléments
Extérieurs:
  @@@P067@@BreadcrumbItem [réf. nécessaire]
Props:
  Couleur: Secondaire
  items:
    - label:'Docs'
      icon: 'i-lucide-book-open'
      à:/docs
    - label:'Composants'
      Icône: i-lucide-box
      à:'/docs/composants'
    - label:« Breadcrumb »
      Icône:'i-lucide-link'
      à:/docs/components/breadcrumb
---
::

@@ph071@@Exemples

### Avec fente de séparation

Utilisez l'emplacement `#separator` pour personnaliser le séparateur entre chaque élément.

: composant {name="breadcrumb-separator-slot-example"}

### Avec slot custom

Utilisez la propriété `slot` pour personnaliser un élément spécifique.

Vous aurez accès aux slots suivants:

@@
@@
@@
@@

: exemple de composant {name="breadcrumb-custom-slot-example"}

::tip{to="#slots"}
Vous pouvez également utiliser les emplacements `#item`,`#item-leading`,`#item-label` et `#item-trailing` pour personnaliser tous les articles.
::

@@ph094@@api

@@ph095@@projets

Composants-props

@@ph096@@réglages

Composants slots

@@ph097@thème

Composant-thème

@changement@changement@changement@changement.com

Composant-changelog
