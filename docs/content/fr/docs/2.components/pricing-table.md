---
title: PriceTable
description: 'Un composant de tableau de tarification réactif qui affiche des plans de tarification à plusieurs niveaux avec des comparaisons de fonctionnalités.'
category: page
links:
  - label: GitHub à
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/PricingTable.vue
---

@@ph000@utilisation

Le composant PricingTable fournit un moyen réactif et personnalisable d'afficher les plans de tarification dans un format de tableau, basculant automatiquement entre une disposition de tableau horizontal sur le bureau pour une comparaison facile et une disposition de carte verticale sur mobile pour une meilleure lisibilité.

::code-preview

::u-pricing-table
---
Tiers:
  - id:« seul »
    Titre: Solo
    Description: Pour les hackers indépendants.
    Prix: 249 $
    cycle: '/mois'
    Période de facturation: 'facturé annuellement'
    Badge: "Le plus populaire"
    Bouton:
      Étiquette:"Acheter maintenant"
      Étiquette:"subtil"
  - id:'équipe'
    Titre: "Equipe"
    Description: Pour les équipes en croissance.
    Prix: 499 $
    cycle: '/mois'
    Période de facturation: 'facturé annuellement'
    Bouton:
      Étiquette:"Acheter maintenant"
    Highlights: vrai
  - id:« entreprise »
    Titre: Enterprise
    Description: "Pour les grandes entreprises".
    Titre: Custom
    Bouton:
      Étiquette:"Contact vente"
      Couleur: "Neutre"
Sections:
  - title:"Caractéristiques"
    Caractéristiques:
      - title:'Nombre de développeurs'
        Tiers:
          Étiquette:"1"
          Équipe:"5"
          Étiquette: Unlimited
      - title:« Projets »
        Tiers:
          Étiquette: true
          Étiquette: True
          Étiquette: True
      - title:'Accès au dépôt GitHub'
        Tiers:
          Étiquette: true
          Équipe: True
          Étiquette: True
      - title:"Actualités"
        Tiers:
          Titre: Patch & Minor
          Équipe:'Toutes les actualités'
          entreprise: 'Toutes les mises à jour'
      - title:"Développement"
        Tiers:
          solo: "communauté"
          Étiquette:"priorité"
          Entreprise: 24/7
  - title: Sécurité
    Caractéristiques:
      - title:"référencement"
        Tiers:
          Étiquette: Faux
          Étiquette: True
          Étiquette: True
      - title:'Logs d'audit'
        Tiers:
          Étiquette: Faux
          Étiquette: True
          Étiquette: True
      - title:'Examen de sécurité personnalisé'
        Tiers:
          Étiquette: Faux
          Équipe: Faux
          Étiquette: True
---
::

::

@@P014@@Télécharger

Utilisez le `tiers` prop comme un tableau d'objets pour définir vos plans de tarification. Chaque objet de niveau prend en charge les propriétés suivantes:

- `id: string`{lang="ts-type"}-Identifiant unique pour le niveau (requis)
- `title?: string`{lang="ts-type"}-Nom du plan tarifaire
- `description?: string`{lang="ts-type"}-Description courte du plan
- `price?: string`{lang="ts-type"}-Le prix actuel du plan (par exemple,"$99","€ 99","Gratuit")
- `discount?: string`{lang="ts-type"}-Le prix réduit qui affichera le `price` avec barre (par exemple,"$79","€ 79")
- `billingCycle?: string`{lang="ts-type"}-La période de prix unitaire qui apparaît à côté du prix (par exemple "/mois","/siège/mois")
- `billingPeriod?: string`{lang="ts-type"}-Contexte de facturation supplémentaire qui apparaît au-dessus du cycle de facturation (par exemple,"facturé mensuellement")
- `badge?: string | BadgeProps`{lang="ts-type"}-Afficher un badge à côté du titre `{ color: 'primary', variant: 'subtle' }`{lang="ts-type"}
- `button?: ButtonProps`{lang="ts-type"}-Configurer le bouton CTA `{ size: 'lg', block: true }`{lang="ts-type"}
- `highlight?: boolean`{lang="ts-type"}-Souligner visuellement ce niveau comme option recommandée

::component-code
---
Étiquette: true
Collapse: vrai
Extérieure:
  @@501@tiers
Extérieurs:
  - PricingTableTier []
Caché:
  @@classe 500
Ignorer:
  @@500@tiers
Props:
  Tiers:
    - id:"seul"
      Titre: Solo
      Description: Pour les hackers indépendants.
      Prix: 249 $
      cycle: '/mois'
      Période de facturation: 'facturé annuellement'
      Badge: "Le plus populaire"
      Bouton:
        Étiquette:"Acheter maintenant"
        Étiquette:"subtil"
    - id:'équipe'
      Titre: "Equipe"
      Description: Pour les équipes en croissance.
      Prix: 499 $
      cycle: '/mois'
      Période de facturation: 'facturé annuellement'
      Bouton:
        Étiquette:"acheter maintenant"
      Highlight: vrai
    - id:« entreprise »
      Titre: Enterprise
      Description: "Pour les grandes entreprises".
      Titre: Custom
      Bouton:
        Étiquette:"Contact vente"
        Couleur: "Neutre"
  Définition: border-b border-default
---
::

@@508@sections

Utilisez la prop `sections` pour organiser les fonctionnalités en groupes logiques. Chaque section représente une catégorie de fonctionnalités que vous souhaitez comparer entre différents niveaux de tarification.

- `title: string`{lang="ts-type"}-L'en-tête de la section des fonctionnalités
- `features: PricingTableSectionFeature[]`{lang="ts-type"}-Une gamme de fonctionnalités avec leur disponibilité dans chaque niveau:
  - Chaque fonctionnalité nécessite un `title` et un `tiers` ID de niveau de mappage d'objet aux valeurs
  - Les valeurs booléennes (`true`/`false`) s'affichent sous forme de coche (✓) ou d'icône moins (-)
  Les valeurs - String seront affichées sous forme de texte (par exemple,"Illimité","Jusqu'à 5 utilisateurs")
  - Les valeurs numériques seront affichées telles quelles (par exemple, 10, 100)

::component-code
---
Étiquette: true
Collapse: vrai
Extérieur:
  @@774@référencement
  @@75@sections
Extérieurs:
  - PricingTableTier []
  - PricingTableSection []
Caché:
  @@ph078@classe
Ignorer:
  @799@@référencement
  @@ph080@sections
Props:
  Tiers:
    - id:"seul"
      Titre: Solo
      Prix: 249 $
      Description: Pour les hackers indépendants.
      cycle: '/mois'
      Bouton:
        Étiquette:"Acheter maintenant"
        Étiquette:"subtil"
    - id:'équipe'
      Titre: "Equipe"
      Prix: 499 $
      Description: Pour les équipes en croissance.
      cycle: '/mois'
      Bouton:
        Étiquette:"acheter maintenant"
    - id:« entreprise »
      Catégorie: Enterprise
      Titre: Custom
      Description: "Pour les grandes entreprises".
      Bouton:
        Étiquette:"Contact vente"
        Couleur: "Neutre"
  Sections:
    - title:"Caractéristiques"
      Caractéristiques:
        - title:'Nombre de développeurs'
          Tiers:
            Étiquette:"1"
            Équipe:"5"
            Étiquette: Unlimited
        - title:« Projets »
          Tiers:
            Étiquette: true
            Étiquette: True
            Étiquette: True
    - title:'Sécurité'
      Caractéristiques:
        - title:"référencement"
          Tiers:
            Étiquette: Faux
            Étiquette: True
            Étiquette: True
---
::

@@ph089@exemples

### Avec slots

Le composant PricingTable fournit de puissantes options de personnalisation des emplacements pour personnaliser l'affichage de votre contenu. Vous pouvez personnaliser des éléments individuels à l'aide d'emplacements génériques ou cibler des éléments spécifiques à l'aide de leurs ID.

::component-example
---
Étiquette: true
nom: 'pricing-table-slots-exemple'
Collapse: vrai
---
::

Le composant prend en charge différents types de fentes pour une flexibilité de personnalisation maximale:

| Type de slot| Pattern| Description| exemple d'exemple|
|-----------|---------|-------------|---------|
| **Tier slots**| @@@ 091 @| Cibles spécifiques tiers| @@|
| **Section des machines à sous **| @@@ 096 @| Cibler des sections spécifiques| @@@ 097 @|
| **Slots**| @@@ pha100 @| Caractéristiques spécifiques cibles| @@@ 101 @|
| **slots**| `#tier-title`,`#section-title`, etc.| Applicable à tous les items| @@@ 106 @|

::note
Lorsqu 'aucun `id` n'est fourni, le nom de l'emplacement est généré automatiquement à partir du titre (par exemple,"Premium Features!" devient `#section-premium-features-title`).
::

@@ph111@api

@112@propriétés

Composants-props

@@ph113@@Slots

Composants slots

@@ph114@thème

Composant-thème

@@changement@changement@changement.com

Composant-changelog
