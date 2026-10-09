---
title: PageCta
description: 'Une section d'appel à l'action à afficher dans vos pages.'
category: page
links:
  - label: GitHub à
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/PageCTA.vue
---

## Utilisation

Le composant PageCTA offre un moyen flexible d'afficher un appel à l'action dans vos pages avec une illustration dans l'emplacement par défaut.

::code-preview

::u-page-c-t-a
---
title: 'Trusted and supported by our amazing community'
description: 'Preview the latest Tailwind CSS and get started with Nuxt UI.'
orientation: horizontal
links:
  - label: 'Get started'
    color: 'neutral'
  - label: 'Learn more'
    color: 'neutral'
    variant: 'subtle'
    trailingIcon: 'i-lucide-arrow-right'
---

:img{src="https://picsum.photos/640/616" width="320" height="308" alt="Illustration" class="w-full rounded-lg"}
::

::

Utilisez-le dans un composant [PageSection](/docs/components/page-section) ou directement dans votre page:

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

### Titre

Utilisez le prop `title` pour définir le titre du CTA.

::component-code{slug="page-CTA"}
---
props:
  title: 'Trusted and supported by our amazing community'
---
::

### Définition

Utilisez le prop `description` pour définir la description du CTA.

::component-code{slug="page-CTA"}
---
prettier: true
ignore:
  - title
props:
  title: 'Trusted and supported by our amazing community'
  description: "We've built a strong, lasting partnership. Their trust is our driving force, propelling us towards shared success."
---
::

### Liens

Utilisez la prop `links` pour afficher une liste de [Button](/docs/components/button) sous la description.

::component-code{slug="page-CTA"}
---
prettier: true
external:
  - links
externalTypes:
  - ButtonProps[]
ignore:
  - title
  - description
  - links
props:
  title: 'Trusted and supported by our amazing community'
  description: "We've built a strong, lasting partnership. Their trust is our driving force, propelling us towards shared success."
  links:
    - label: 'Get started'
      color: 'neutral'
    - label: 'Learn more'
      color: 'neutral'
      variant: 'subtle'
      trailingIcon: 'i-lucide-arrow-right'
---
::

### Variant

Utilisez le prop `variant` pour modifier le style du CTA.

::component-code{slug="page-CTA"}
---
prettier: true
external:
  - links
externalTypes:
  - ButtonProps[]
ignore:
  - title
  - description
  - links
props:
  title: 'Trusted and supported by our amazing community'
  description: "We've built a strong, lasting partnership. Their trust is our driving force, propelling us towards shared success."
  variant: soft
  links:
    - label: 'Get started'
      color: 'neutral'
    - label: 'Learn more'
      color: 'neutral'
      variant: 'subtle'
      trailingIcon: 'i-lucide-arrow-right'
---
::

::tip
Vous pouvez appliquer la classe `light` ou `dark` au slot `links` lorsque vous utilisez la variante `solid` pour inverser les couleurs.
::

### Définition

Utilisez le prop `orientation` pour changer l'orientation avec l'emplacement par défaut.

::component-code{slug="page-CTA"}
---
prettier: true
external:
  - links
externalTypes:
  - ButtonProps[]
ignore:
  - title
  - description
  - links
props:
  title: 'Trusted and supported by our amazing community'
  description: "We've built a strong, lasting partnership. Their trust is our driving force, propelling us towards shared success."
  orientation: horizontal
  links:
    - label: 'Get started'
      color: 'neutral'
    - label: 'Learn more'
      color: 'neutral'
      variant: 'subtle'
      trailingIcon: 'i-lucide-arrow-right'
slots:
  default: |

    <img src="https://picsum.photos/640/728" width="320" height="364" alt="Illustration" class="w-full rounded-lg" loading="lazy" />
---

:img{src="https://picsum.photos/640/728" width="320" height="364" alt="Illustration" class="w-full rounded-lg" loading="lazy"}
::

### Reverse

Utilisez le prop `reverse` pour inverser l'orientation de la fente par défaut.

::component-code{slug="page-CTA"}
---
prettier: true
external:
  - links
externalTypes:
  - ButtonProps[]
ignore:
  - title
  - description
  - links
props:
  title: 'Trusted and supported by our amazing community'
  description: "We've built a strong, lasting partnership. Their trust is our driving force, propelling us towards shared success."
  orientation: horizontal
  reverse: true
  links:
    - label: 'Get started'
      color: 'neutral'
    - label: 'Learn more'
      color: 'neutral'
      variant: 'subtle'
      trailingIcon: 'i-lucide-arrow-right'
slots:
  default: |

    <img src="https://picsum.photos/640/728" width="320" height="364" alt="Illustration" class="w-full rounded-lg" loading="lazy" />
---

:img{src="https://picsum.photos/640/728" width="320" height="364" alt="Illustration" class="w-full rounded-lg" loading="lazy"}
::

## API

### Props équipements

:component-props{slug="page-CTA"}

### Slots

:component-slots{slug="page-CTA"}

## Thème

:component-theme{slug="page-CTA"}

## Changelog

:component-changelog
