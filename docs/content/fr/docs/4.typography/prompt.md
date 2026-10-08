---
title: provisoirement
description: 'Affichez des invites AI prédéfinies avec copie en un clic et intégration IDE.'
category: components
navigation.title: Prompt
links:
  - label: GitHub à
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/prose/Prompt.vue
---

@@ph000@@utilisation

Utilisez le composant `prompt` pour afficher une invite AI pré-construite que les utilisateurs peuvent copier dans leur presse-papiers ou ouvrir directement dans leur IDE. Le prop `description` est affiché comme l'étiquette visible, tandis que l'emplacement par défaut contient le texte de l'invite qui est copié.

::component-code{slug="prompt" prose}
---
Props:
  Description: Créer un tableau de bord avec Nuxt UI.
  classe: 'w-full my-0'
Caché:
  @@ph003@classe
Slots:
  Défaut:|
    Vous êtes un expert Nuxt UI. Aidez-moi à créer une mise en page de tableau de bord avec une barre latérale pliable et une barre de navigation supérieure collante.

    Exigences:
    - Utilisez `UDashboardPanel`,`UDashboardSidebar` et `UDashboardNavbar`
    - Utilisez des jetons de couleur sémantiques comme `bg-elevated` et `text-muted` pour la thématisation
    - La barre latérale doit inclure des liens de navigation avec des icônes utilisant `UNavigationMenu`
    - La barre de navigation doit afficher un fil d'Ariane, un bouton de recherche et un menu déroulant utilisateur
    - La mise en page doit être entièrement réactive et réduire la barre latérale sur mobile
---
::

@@P015@@Icon

Utilisez la prop `icon` pour afficher une icône à côté de la description.

::component-code{slug="prompt" prose}
---
ignorer:
  @@ph017@description
Caché:
  @@ph018@classe
Props:
  Description: Créer un formulaire avec validation.
  Icône: i-lucide-file-pen-line
  classe: 'w-full my-0'
Slots:
  Défaut:|
    Créez un formulaire d'inscription à l'aide de Nuxt UI avec validation de schéma Zod.

    Exigences:
    - Utiliser `UForm` avec un schéma Zod pour la validation
    - Add `UFormField` enveloppant chaque entrée: nom (`UInput`), email (`UInput`), rôle (`USelect` avec les options Admin, Editor, Viewer)
    - Inclure une soumission `UButton` avec l'état de chargement
    - Afficher les messages d'erreur en ligne sous chaque champ
    - Sur soumission réussie, afficher une notification `UToast`
---
::

### Actions

Utilisez la prop `actions` pour afficher des boutons supplémentaires. Le bouton `copy` est toujours affiché. Les actions disponibles sont `cursor`,`windsurf` et `claude`.

::component-code{slug="prompt" prose}
---
ignorer:
  @@ph037@description
  @@pH038@icon
Caché:
  @@ph039@classe
Props:
  Description: Ajouter un mode couleur.
  Icône: i-lucide-sun-moon
  actions:
    @@ph040@curseur
    @@ph041@claude
  classe: 'w-full my-0'
Slots:
  Défaut:|
    Ajouter une bascule de mode couleur à mon application Nuxt.

    Exigences:
    - Utilisez `useColorMode` à partir de `@nuxtjs/color-mode` pour gérer le mode actuel
    - Render un `UButton` avec `variant="ghost"` qui cycle entre `light`,`dark`, et `system` sur un clic
    - Mettre à jour l'icône du bouton dynamiquement: `i-lucide-sun` pour la lumière,`i-lucide-moon` pour l'obscurité,`i-lucide-monitor` pour le système
    - Ajouter une info-bulle à l'aide de `UTooltip` qui affiche le mode actif actuel
---
::

@@P057@@écrivain

@@508@propriétaires

: composant-props {prose}

@@ph060@@réseaux sociaux

: composant {prose}

@@ph062@thème

: composant-thème {prose}

@changelog 64

: composant-changelog {prefix="prose"}
