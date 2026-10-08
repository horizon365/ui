---
title: PageCta
description: 'Une section d'appel à l'action à afficher dans vos pages.'
category: page
links:
  - label: GitHub à
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/PageCTA.vue
---

@@ph000@utilisation

Le composant PageCTA offre un moyen flexible d'afficher un appel à l'action dans vos pages avec une illustration dans l'emplacement par défaut.

::code-preview

::u-page-c-t-a
---
title: "Confiance et soutien de notre incroyable communauté"
Description: 'Prévisualisez la dernière version de Tailwind CSS et démarrez avec Nuxt UI'
Orientation: horizontale
à gauche:
  - label:« Démarrer »
    Couleur: "Neutre"
  - label: En savoir plus
    Couleur: "Neutre"
    Étiquette:"subtil"
    trailingIcône:'i-lucide-arrow-right'
---

par: img{src="https://picsum.photos/640/616" width="320" height="308" alt="Illustration" class="w-full rounded-lg"}
::

::

Utilisez-le à l'intérieur d'un composant [PageSection](/docs/components/page-section) ou directement sur votre page:

```vue {4,8-10}
<template>
  <UPageHero />

  <UPageCTA class="rounded-none" />

  <UPageSection />

  <UPageSection :ui="{ container: 'px-0' }">
    <UPageCTA class="rounded-none sm:rounded-xl" />
  </UPageSection>

  <UPageSection />
</template>
```

::tip
Utilisez les classes `px-0` et `rounded-none` pour faire en sorte que le CTA remplisse le bord de la page sur mobile.
::

@@25@titre

Utilisez la prop `title` pour définir le titre du CTA.

::component-code{slug="page-CTA"}
---
Props:
  title: "Confiance et soutien de notre incroyable communauté"
---
::

@@27@Description

Utilisez la prop `description` pour définir la description du CTA.

::component-code{slug="page-CTA"}
---
Étiquette: true
ignorer:
  @@ph029@title
Props:
  title: "Confiance et soutien de notre incroyable communauté"
  description: "Nous avons construit un partenariat solide et durable. leur confiance est notre force motrice, nous propulsant vers un succès partagé."
---
::

@@ph030@liens

Utilisez la prop `links` pour afficher une liste de [Button](/docs/components/button) sous la description.

::component-code{slug="page-CTA"}
---
Étiquette: true
Extérieur:
  @@ph036@liens
Extérieurs:
  - ButtonProps [réf. nécessaire]
ignorer:
  @@ph038@titre
  @@ph039@description
  @@ph040@liens
Props:
  title: "Confiance et soutien de notre incroyable communauté"
  description: "Nous avons construit un partenariat solide et durable. leur confiance est notre force motrice, nous propulsant vers un succès partagé."
  à gauche:
    - label:« Démarrer »
      Couleur: "Neutre"
    - label:"En savoir plus"
      Couleur: "Neutre"
      Étiquette:"subtil"
      trailingIcône:'i-lucide-arrow-right'
---
::

### Variant

Utilisez la prop `variant` pour modifier le style du CTA.

::component-code{slug="page-CTA"}
---
Étiquette: true
Extérieur:
  @@ph045@liens
Extérieurs:
  - ButtonProps [réf. nécessaire]
ignorer:
  @@ph047@titre
  @@ph048@description
  @@ph049@liens
Props:
  title: "Confiance et soutien de notre incroyable communauté"
  description: "Nous avons construit un partenariat solide et durable. leur confiance est notre force motrice, nous propulsant vers un succès partagé."
  Variété: Soft
  à gauche:
    - label:« Démarrer »
      Couleur: "Neutre"
    - label:"En savoir plus"
      Couleur: "Neutre"
      Étiquette:"subtil"
      trailingIcône:'i-lucide-arrow-right'
---
::

::tip
Vous pouvez appliquer la classe `light` ou `dark` à l'emplacement `links` lorsque vous utilisez la variante `solid` pour inverser les couleurs.
::

### Référencement

Utilisez la prop `orientation` pour changer l'orientation avec l'emplacement par défaut.

::component-code{slug="page-CTA"}
---
Étiquette: true
Extérieure:
  @@ph059@liens
Extérieurs:
  @@@ph060@@ButtonProps []
ignorer:
  @@ph061@titre
  @@ph062@description
  @@ph063@liens
Props:
  title: "Confiance et soutien de notre incroyable communauté"
  description: "Nous avons construit un partenariat solide et durable. leur confiance est notre force motrice, nous propulsant vers un succès partagé."
  Orientation: horizontale
  à gauche:
    - label:"Démarrer"
      Couleur: "Neutre"
    - label:"En savoir plus"
      Couleur: "Neutre"
      Étiquette:"subtil"
      trailingIcône:'i-lucide-arrow-right'
Slots:
  Défaut:|

    @@@@ 66 @
---

par img{src="https://picsum.photos/640/728" width="320" height="364" alt="Illustration" class="w-full rounded-lg" loading="lazy"}
::

### Reverse

Utilisez la prop `reverse` pour inverser l'orientation de l'emplacement par défaut.

::component-code{slug="page-CTA"}
---
Étiquette: true
Extérieur:
  @@ph070@liens
Extérieurs:
  - ButtonProps []
Ignorer:
  @@ph072@titre
  @@ph073@description
  @@ph074@liens
Props:
  title: "Confiance et soutien de notre incroyable communauté"
  description: "Nous avons construit un partenariat solide et durable. leur confiance est notre force motrice, nous propulsant vers un succès partagé."
  Orientation: horizontale
  Revers: vrai
  à gauche:
    - label:« Démarrer »
      Couleur: "Neutre"
    - label:"En savoir plus"
      Couleur: "Neutre"
      Étiquette:"subtil"
      trailingIcône:'i-lucide-arrow-right'
Slots:
  Défaut:|

    @@@ 77 @
---

par: img{src="https://picsum.photos/640/728" width="320" height="364" alt="Illustration" class="w-full rounded-lg" loading="lazy"}
::

@799@fait

@@ph080@@props

: composant-props {slug="page-CTA"}

@@ph082@@réglages

: composant {slug="page-CTA"}

@@ph084@thème

: composant-thème {slug="page-CTA"}

@changement@changement@changement.com

Composant-changelog
