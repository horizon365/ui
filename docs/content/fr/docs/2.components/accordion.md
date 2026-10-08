---
description: Un ensemble empilé de panneaux pliables.
category: data
keywords:
  - disclosure
  - collapse
  - faq
  - expansion panel
links:
  - label: Accordéon
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/accordion
  - label: GitHub à
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Accordion.vue
---

@@ph000@utilisation

Utilisez le composant Accordéon pour afficher une liste d'éléments pliables.

::component-code
---
Collapse: vrai
ignorer:
  @@ph001@articles
  @@ph002@ui.content
Extérieur:
  @@ph003@articles
Extérieurs:
  @@004@@accordéon []
Caché:
  @@classe 05
  @@ph006@@ui
  @@ph007@@defaultValue
Props:
  valeur défaillante:'0'
  classe: 'px-4 max-w-lg'
  Ui:
    contenu: 'text-muté'
  items:
    - label:'L'interface utilisateur Nuxt est-elle gratuite?'
      content: 'Oui! Nuxt UI est entièrement gratuit et open source sous licence MIT. Tous les 125 + composants sont disponibles pour tous.'
    - label:'Puis-je utiliser l'interface utilisateur Nuxt avec Vue sans Nuxt?'
      contenu:« Oui! Bien qu 'optimisée pour Nuxt, l'interface utilisateur Nuxt fonctionne parfaitement avec les projets Vue autonomes via notre plugin Vite. Vous pouvez suivre le guide d'installation ](/docs/getting-started/installation/vue) pour commencer.'
    - label:'L'interface utilisateur Nuxt est-elle prête pour la production?'
      Nuxt UI est utilisé en production par des milliers d'applications avec des tests approfondis, des mises à jour régulières et une maintenance active.
---
::

@@ph015@@éléments

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
ignorer:
  @@ph048@articles
Extérieur:
  @@ph049@articles
Extérieurs:
  @@5000@@accordéon []
Caché:
  @@ph051@classe
Props:
  Catégorie: px-4
  items:
    - label:'Icônes'
      Icône: i-lucide-smile
      content: 'Vous n'avez rien à faire,@ nuxt/icon s'en occupera automatiquement.'
    - label:"Couleurs"
      icon: 'i-lucide-swatch-book'
      content: 'Choisissez une couleur primaire et une couleur neutre dans votre thème CSS Tailwind.'
    - label:"Composants"
      Icône: i-lucide-box
      content: 'Vous pouvez personnaliser les composants en utilisant les props `class`/`ui` ou dans votre app.config.ts.'
---
::

@@57@@multiple

Définissez la prop `type` à `multiple` pour permettre à plusieurs éléments d'être actifs en même temps.

::component-code
---
ignorer:
  @@ph061@type
  @@ph062@articles
Extérieur:
  @@ph063@articles
Extérieurs:
  @@@P064@@AccordionItem [réf. nécessaire]
Caché:
  @@ph065@classe
Props:
  Catégorie: px-4
  Catégorie:"Multiple"
  items:
    - label:'Icônes'
      Icône: i-lucide-smile
      content: 'Vous n'avez rien à faire,@ nuxt/icon s'en occupera automatiquement.'
    - label:"Couleurs"
      icon: 'i-lucide-swatch-book'
      content: 'Choisissez une couleur primaire et une couleur neutre dans votre thème CSS Tailwind.'
    - label:'Composants'
      Icône: i-lucide-box
      content: 'Vous pouvez personnaliser les composants en utilisant les props `class`/`ui` ou dans votre app.config.ts.'
---
::

### Résolu

Lorsque `type` est `single`, vous pouvez définir la prop `collapsible` sur `false` pour empêcher l'élément actif de s'effondrer.

::component-code
---
Ignorer:
  @@776@@récupération
  @@777@articles
Extérieur:
  @@ph078@articles
Extérieurs:
  @@779@@accordéon []
Caché:
  @@ph080@classe
Props:
  Catégorie: px-4
  Pliable: faux
  items:
    - label:'Icônes'
      Icône: i-lucide-smile
      content: 'Vous n'avez rien à faire,@ nuxt/icon s'en occupera automatiquement.'
    - label:"Couleurs"
      icon: 'i-lucide-swatch-book'
      content: 'Choisissez une couleur primaire et une couleur neutre dans votre thème CSS Tailwind.'
    - label:'Composants'
      Icône: i-lucide-box
      content: 'Vous pouvez personnaliser les composants à l'aide des props `class`/`ui` ou dans votre app.config.ts.'
---
::

@@886@non-réponse

Utilisez la prop `unmount-on-hide` pour empêcher le contenu d'être démonté lorsque l'accordéon est rétracté. Par défaut à `true`.

::component-code
---
ignorer:
  @@ph089@@articles
Extérieure:
  @@ph090@articles
Extérieurs:
  @@P091@@AccordionItem [réf. nécessaire]
Caché:
  @@ph092@classe
Props:
  Catégorie: px-4
  Défaut: False
  items:
    - label:'Icônes'
      Icône: i-lucide-smile
      content: 'Vous n'avez rien à faire,@ nuxt/icon s'en occupera automatiquement.'
    - label:"Couleurs"
      icon: 'i-lucide-swatch-book'
      content: 'Choisissez une couleur primaire et une couleur neutre dans votre thème CSS Tailwind.'
    - label:"Composants"
      Icône: i-lucide-box
      content: 'Vous pouvez personnaliser les composants à l'aide des props `class`/`ui` ou dans votre app.config.ts.'
---
::

::note
Vous pouvez inspecter le DOM pour voir le contenu de chaque élément rendu.
::

### désactivé

Utilisez la propriété `disabled` pour désactiver l'accordéon.

Vous pouvez également désactiver un élément spécifique en utilisant la propriété `disabled` dans l'objet item.

::component-code
---
ignorer:
  @@ph101@articles
Extérieur:
  @@ph102@articles
Extérieurs:
  @@P103@@AccordionItem [réf. nécessaire]
Caché:
  @@classe 104
Props:
  Catégorie: px-4
  handicapés: vrai
  items:
    - label:'Icônes'
      Icône: i-lucide-smile
      content: 'Vous n'avez rien à faire,@ nuxt/icon s'en occupera automatiquement.'
    - label:"Couleurs"
      icon: 'i-lucide-swatch-book'
      content: 'Choisissez une couleur primaire et une couleur neutre dans votre thème CSS Tailwind.'
      handicapés: vrai
    - label:'Composants'
      Icône: i-lucide-box
      content: 'Vous pouvez personnaliser les composants en utilisant les props `class`/`ui` ou dans votre app.config.ts.'
---
::

### Trailing Icône d'accueil

Utilisez le prop `trailing-icon` pour personnaliser le [Icon](/docs/components/icon) de chaque élément.

::tip
Vous pouvez également définir une icône pour un élément spécifique en utilisant la propriété `trailingIcon` dans l'objet item.
::

::component-code
---
Ignorer:
  @@ph118@articles
Extérieure:
  @@ph119@articles
Extérieurs:
  - AccordionItem [réf. nécessaire]
Caché:
  @@ph121@classe
Props:
  Catégorie: px-4
  trailingIcône:'i-lucide-arrow-down'
  items:
    - label:'Icônes'
      Icône: i-lucide-smile
      content: 'Vous n'avez rien à faire,@ nuxt/icon s'en occupera automatiquement.'
      TrailingIcône:'i-lucide-plus'
    - label:"Couleurs"
      icon: 'i-lucide-swatch-book'
      content: 'Choisissez une couleur primaire et une couleur neutre dans votre thème CSS Tailwind.'
    - label:'Composants'
      Icône: i-lucide-box
      content: 'Vous pouvez personnaliser les composants à l'aide des props `class`/`ui` ou dans votre app.config.ts.'
---
::

::framework-only
#numérique
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
Vous pouvez personnaliser cette icône globalement dans votre `app.config.ts` sous la touche `ui.icons.chevronDown`.
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
Vous pouvez personnaliser cette icône globalement dans votre `vite.config.ts` sous la touche `ui.icons.chevronDown`.
:::
::

@@ph131@@exemples

### Contrôle élément actif (s)

Vous pouvez contrôler l'élément actif en utilisant la prop `default-value` ou la directive `v-model` avec le `value` de l'élément. Si aucun `value` n'est fourni, l'index par défaut est **en tant que chaîne **.

::component-example
---
nom: 'modèle-valeur-exemple'
Props:
  Catégorie: px-4
---
::

::tip
Utilisez la prop `value-key` pour modifier la clé utilisée pour faire correspondre les éléments lorsqu 'un `v-model` ou `default-value` est fourni.
::

::caution
Lorsque `type="multiple"`, assurez-vous de passer un tableau à la prop `default-value` ou à la directive `v-model`.
::

### Avec drag & drop

Utilisez le [`useSortable`](https://vueuse.org/integrations/useSortable/) composable depuis le [](https://vueuse.org/integrations/README.html) pour activer la fonctionnalité de glisser-déposer sur l'Accordéon. pour fournir une expérience drag and drop sans faille.

::component-example
---
nom: 'accordéon-drag-and-drop-example'
---
::

### Avec fente pour le corps

Utilisez l'emplacement `#body` pour personnaliser le corps de chaque élément.

::component-example
---
nom: 'accordéon-corps-slot-exemple'
Props:
  Catégorie: px-4
---
::

::tip
Le `#body` slot comprend quelques styles prédéfinis, utilisez le [`#content` slot ](#with-content-slot) si vous voulez commencer à zéro.
::

### Avec emplacement de contenu

Utilisez l'emplacement `#content` pour personnaliser le contenu de chaque élément.

::component-example
---
nom: 'accordeon-content-slot-exemple'
Props:
  Catégorie: px-4
---
::

### Avec slot custom

Utilisez la propriété `slot` pour personnaliser un élément spécifique.

Vous aurez accès aux slots suivants:

@@
@@

::component-example
---
nom: 'accordéon-custom-slot-exemple'
Props:
  Catégorie: px-4
---
::

### Avec contenu de markdown

Vous pouvez utiliser le composant [Markdown](https://comark.dev/rendering/vue) de `@comark/vue` pour rendre le markdown dans les éléments d'accordéon.

::component-example
---
Collapse: vrai
nom: 'accordéon-markdown-exemple'
Classe: px-8
---
::

@@ph184@api

@@ph185@@props

Composants-props

### Slots

Composants slots

### émissions

Composants émetteurs

@@ph188@thème

Composant-thème

@@ph189@changelog

Composant-changelog
