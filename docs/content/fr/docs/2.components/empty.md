---
description: 'Un composant pour afficher un état vide.'
category: data
keywords:
  - no data
  - placeholder
  - zero state
links:
  - label: GitHub à
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Empty.vue
---

@@ph000@utilisation

Utilisez le composant vide pour afficher un état d'espace réservé lorsqu 'il n'y a pas de contenu à afficher.

::code-preview

:::u-empty
---
Icône: i-lucide-file
Titre: Aucun projet trouvé
Description: Il semble que vous n'ayez ajouté aucun projet. Créez-en un pour commencer.
Actions:
  - icon: i-lucide-plus
    Étiquette: Créer Nouveau
  - icon: i-lucide-refresh-cw
    Étiquette: Refresh
    Couleur: Neutre
    Variante: subtile
---
:::

::

@@ph003@titre

Utilisez la prop `title` pour définir le titre de l'état vide.

::component-code
---
Props:
  Titre: Aucun projet trouvé
---
::

@@P005@Description

Utilisez la prop `description` pour définir la description de l'état vide.

::component-code
---
Étiquette: true
Ignorer:
  @@ph007@titre
Props:
  Titre: Aucun projet trouvé
  Description: Il semble que vous n'ayez ajouté aucun projet. Créez-en un pour commencer.
---
::

@@008@Icon

Utilisez la prop `icon` pour définir l'icône de l'état vide.

::component-code
---
Étiquette: true
ignorer:
  @@ph010@titre
  @@ph011@description
Props:
  Icône: i-lucide-file
  Titre: Aucun projet trouvé
  Description: Il semble que vous n'ayez ajouté aucun projet. Créez-en un pour commencer.
---
::

@12@avatar

Utilisez la prop `avatar` pour définir l'avatar de l'état vide.

::component-code
---
Étiquette: true
Ignorer:
  @@pha14@icon
  @@ph015@titre
  @@ph016@description
Props:
  avatar. src: 'https://github.com/nuxt.png'
  Titre: Aucun projet trouvé
  Description: Il semble que vous n'ayez ajouté aucun projet. Créez-en un pour commencer.
---
::

### Chargement: badge{label="4.10+" class="align-text-top"}

Utilisez le prop `loading` pour afficher une icône de chargement à la place de l'icône. La mise en page reste identique, de sorte que vous pouvez basculer entre les états de chargement et de vide sans changement de mise en page.

::component-code
---
Étiquette: true
ignorer:
  @@2020@icon
  @@21@titre
  @@ph022@description
Props:
  Icône: i-lucide-file
  Chargement: vrai
  Titre: Chargement de projets
  Description: Veuillez patienter pendant que nous récupérons vos projets.
---
::

### Icône de chargement: badge{label="4.10+" class="align-text-top"}

Utilisez la prop `loading-icon` pour personnaliser l'icône de chargement. Par défaut,`i-lucide-loader-circle`.

::component-code
---
Étiquette: true
ignorer:
  @@27@icon
  @@28@titre
  @@ph029@description
  - chargement
Props:
  Icône: i-lucide-file
  Chargement: vrai
  loadingIcon: 'i-lucide-loader'
  Titre: Chargement de projets
  Description: Veuillez patienter pendant que nous récupérons vos projets.
---
::

::framework-only
#numérique
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
Vous pouvez personnaliser cette icône globalement dans votre `app.config.ts` sous la touche `ui.icons.loading`.
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
Vous pouvez personnaliser cette icône globalement dans votre `vite.config.ts` sous la touche `ui.icons.loading`.
:::
::

@@P035@Actions

Utilisez la prop `actions` pour ajouter des actions [Button](/docs/components/button) à l'état vide.

::component-code
---
Étiquette: true
ignorer:
  @@ph041@icon
  @@ph042@titre
  @@ph043@description
  @@44@actions
Props:
  Icône: i-lucide-file
  Titre: Aucun projet trouvé
  Description: Il semble que vous n'ayez ajouté aucun projet. Créez-en un pour commencer.
  Actions:
    - icon: i-lucide-plus
      Étiquette: Créer Nouveau
    - icon: i-lucide-refresh-cw
      Étiquette: Refresh
      Couleur: Neutre
      Variante: subtile
---
::

@@@700@Variant

Utilisez la prop `variant` pour changer la variante de l'état vide.

::component-code
---
Étiquette: true
Ignorer:
  @@ph049@icon
  @@ph050@titre
  @@ph051@@description
  @@502@actions
Props:
  Variante: nue
  Icône: i-lucide-bell
  Titre: Pas de notification
  Vous êtes tous rattrapés. Nouvelles notifications apparaîtront ici.
  Actions:
    - icon: i-lucide-refresh-cw
      Étiquette: Refresh
      Couleur: Neutre
      Variante: subtile
---
::

@@500@Size

Utilisez la prop `size` pour modifier la taille de l'état vide.

::component-code
---
Étiquette: true
ignorer:
  @@ph056@icon
  @@ph057@titre
  @@ph058@description
  @@59@actions
Props:
  Taille: XL
  Icône: i-lucide-bell
  Titre: Pas de notification
  Vous êtes tous rattrapés. Nouvelles notifications apparaîtront ici.
  Actions:
    - icon: i-lucide-refresh-cw
      Étiquette: Refresh
      Couleur: Neutre
      Variante: subtile
---
::

@@ph061@@Exemples

### Avec slots

Utilisez les slots disponibles pour créer un état vide plus complexe.

::component-example
---
Collapse: vrai
nom: 'empty-slots-exemple'
---
::

@@ph063@@api

@@ph064@@props

Composants-props

### série

Composants slots

@@ph066@thème

Composant-thème

@changement@changement@changement@changement.com

Composant-changelog
