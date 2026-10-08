---
description: 'Affichez une bannière en haut de votre site Web pour informer les utilisateurs des informations importantes.'
category: element
keywords:
  - announcement bar
  - top bar
links:
  - label: GitHub à
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Banner.vue
---

@@ph000@@utilisation

@@ph001@titre

Utilisez la prop `title` pour afficher un titre sur la bannière.

::component-code
---
Étiquette: true
classe: '! p-0'
Props:
  Le titre: « Ceci est une bannière avec un message important.»
---
::

@@ph003@icône

Utilisez la prop `icon` pour afficher une icône sur la bannière.

::component-code
---
Étiquette: true
classe: '! p-0'
ignorer:
  @@ph005@titre
Props:
  Icône: i-lucide-info
  Le titre: « Ceci est une bannière avec une icône.»
---
::

@@pH006@couleur

Utilisez la prop `color` pour changer la couleur de la bannière.

::component-code
---
Étiquette: true
classe: '! p-0'
ignorer:
  @@pH008@icon
  @@ph009@titre
Props:
  Couleur: "Neutre"
  Icône: i-lucide-info
  Le titre: « Ceci est une bannière avec une icône.»
---
::

@@ph010@fermer

Utilisez le prop `close` pour afficher un bouton [](/docs/components/button) pour rejeter la bannière.

::tip
Un événement `close` sera émis lorsque le bouton de fermeture est cliqué.
::

::component-example
---
iframe:
  style: 'hauteur: 48px;'
dépassement: true
nom: 'exemple de bannière'
---
#code

```vue
<template>
  <UBanner id="example" title="This is a closable banner." close />
</template>
```

::

::note
Une fois fermé,`banner-${id}` sera stocké dans le stockage local pour l'empêcher d'être affiché à nouveau.: br Pour l'exemple ci-dessus,`banner-example` sera stocké dans le stockage local.
::

::caution
Pour conserver l'état rejeté à travers les rechargements de page, vous devez spécifier un `id` prop. Sans un `id` explicite, la bannière ne sera cachée que pour la session en cours et réapparaîtra lors du rechargement de page.
::

### Fermer Icône

Utilisez le prop `close-icon` pour personnaliser le bouton de fermeture [Icon](/docs/components/icon).

::component-example
---
Iframe:
  style: 'hauteur: 48px;'
dépassement: true
nom: 'exemple de bannière'
Props:
  title: 'Ceci est une bannière fermable avec une icône de fermeture personnalisée.'
  Icône:'i-lucide-x-circle'
---
#code

```vue
<template>
  <UBanner
    title="This is a closable banner with a custom close icon."
    close
    close-icon="i-lucide-x-circle"
  />
</template>
```

::

::framework-only
#numérique
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
Vous pouvez personnaliser cette icône globalement dans votre `app.config.ts` sous la touche `ui.icons.close`.
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
Vous pouvez personnaliser cette icône globalement dans votre `vite.config.ts` sous la touche `ui.icons.close`.
:::
::

@@ph047@@Actions

Utilisez le prop `actions` pour ajouter des actions [Button](/docs/components/button) à la bannière.

::component-code
---
Étiquette: true
classe: '! p-0'
Ignorer:
  @@P053@titre
  @@54@actions
  - variant
Extérieure:
  @@56@actions
Extérieurs:
  - ButtonProps [réf. nécessaire]
Props:
  Titre: "Ceci est une bannière avec des actions."
  actions:
    - label: Action 1
      Étiquette: Outline
    - label: Action 2
      i-lucide-arrow-right
---
::

::note
Les boutons d'action par défaut sont `color="neutral"` et `size="xs"`. Vous pouvez personnaliser ces valeurs en les transmettant directement à chaque bouton d'action.
::

@@ph062@lien

Vous pouvez transmettre n'importe quelle propriété du composant [`<NuxtLink>`](https://nuxt.com/docs/api/components/nuxt-link) comme `to`,`target`,`rel`, etc.

::component-code
---
Étiquette: true
classe: '! p-0'
dépassement: true
Ignorer:
  @@ph071@titre
  @722@cible
Props:
  à:'https://nuxtlabs.com/'
  cible: _blanc
  title: 'NuxtLabs rejoint Vercel!'
  Couleur: Primaire
---
::

::note
Le composant `NuxtLink` héritera de tous les autres attributs que vous passez au composant `User`.
::

@@ph075@@Exemples

### Dans `app.vue`

Utilisez le composant Bannière dans votre `app.vue` ou dans une mise en page:

```vue [app.vue]{3}
<template>
  <UApp>
    <UBanner icon="i-lucide-construction" title="Nuxt UI v4 has been released!" />

    <UHeader />

    <UMain>
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </UMain>

    <UFooter />
  </UApp>
</template>
```

@@ph096@@api

@@ph097@@props

Composants-props

@@ph098@@réseaux sociaux

Composants slots

@099@@émetteur

Composants émetteurs

@@ph100@thème

Composant-thème

@changelog 101

Composant-changelog
