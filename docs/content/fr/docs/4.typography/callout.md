---
title: Prosécurité
description: 'Mettez en évidence les informations importantes avec des boîtes et des icônes colorées accrocheuses.'
category: components
navigation.title: Callout
links:
  - label: GitHub à
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/prose/Callout.vue
---

@@ph000@@utilisation

Utilisez la réduction dans l'emplacement par défaut du composant `callout` pour ajouter un contexte accrocheur à votre contenu.

::component-code{slug="callout" prose}
---
Props:
  classe: 'w-full my-0'
Caché:
  @@ph002@classe
Slots:
  Par défaut: Ceci est un `callout` avec le plein **markdown** support.
---
::

@@ph006@icône

Utilisez la prop `icon` pour afficher une icône à côté du contenu.

::component-code{slug="callout" prose}
---
Props:
  Icône: i-lucide-square-play
  classe: 'w-full my-0'
Caché:
  @@ph008@classe
Slots:
  par défaut: Ceci est un `callout` avec une icône.
---
::

### couleur

Utilisez la prop `color` pour changer la couleur de l'appel.

::component-code{slug="callout" prose}
---
ignorer:
  @@pha12@icon
Props:
  Icône: i-lucide-info
  Couleur: info
  classe: 'w-full my-0'
Caché:
  @@classe
Slots:
  par défaut: Il s'agit d'un `callout` avec une couleur personnalisée
---
::

@@ph015@lien

Vous pouvez passer n'importe quelle propriété du composant `<NuxtLink>`](https://nuxt.com/docs/api/components/nuxt-link) comme `to` et `target` pour faire de l'appel un lien.

::component-code{slug="callout" prose}
---
Caché:
  @@classe 23
Ignorer:
  @@24@icon
  @25@cible
Props:
  Icône: i-lucide-square-play
  dans/docs/getting-started/installation/nuxt
  Couleur: Neutre
  classe: 'w-full my-0'
Slots:
  Découvrez comment installer `@nuxt/ui` dans votre projet.
---
::

@@27@raccourcis

Vous pouvez également utiliser les raccourcis `note`,`tip`,`warning` et `caution` avec des icônes et des couleurs prédéfinies.

::code-preview

:::div{class="flex flex-col gap-4 w-full"}

::note{class="w-full my-0"}
Voici quelques informations complémentaires pour vous.
::

::tip{class="w-full my-0"}
Voici une suggestion utile.
::

::warning{class="w-full my-0"}
Soyez prudent avec cette action car elle peut avoir des résultats inattendus.
::

::caution{class="w-full my-0"}
Cette action ne peut être défaite.
::

:::

#code

```mdc
::note
Here's some additional information.
::

::tip
Here's a helpful suggestion.
::

::warning
Be careful with this action as it might have unexpected results.
::

::caution
This action cannot be undone.
::
```

::

@@ph049@@api

@@50000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000

: composant-props {prose}

@@52@@séries

: composant {prose}

@@ph054@thème

: composant {prose}

@changement@changement@changement.com

: composant-changelog {prefix="prose"}
