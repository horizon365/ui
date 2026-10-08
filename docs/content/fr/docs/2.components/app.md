---
description: Un wrapper pour fournir une configuration globale, des toasts et des infobulles à votre application.
category: layout
links:
  - label: GitHub à
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/App.vue
---

@@ph000@@utilisation

Ce composant implémente Reka UI [ConfigProvider ](https://reka-ui.com/docs/utilities/config-provider) pour fournir une configuration globale à tous les composants:

- Permet à toutes les primitives d'hériter de la direction de lecture globale.
- Permet de modifier le comportement du corps de défilement lors du définition du verrouillage du corps.
- Beaucoup plus de contrôles pour éviter les changements de disposition.

Il utilise également [ToastProvider](https://reka-ui.com/docs/components/toast#provider) et [TooltipProvider](https://reka-ui.com/docs/components/tooltip#provider) pour fournir des toasts et des infobulles globales, ainsi que des modaux et des diapositives programmatiques.

Enveloppez votre application entière avec le composant App dans votre fichier `app.vue`:

```vue [app.vue]
<template>
  <UApp>
    <NuxtPage />
  </UApp>
</template>
```

::framework-only
#numérique
:::tip{to="/docs/getting-started/integrations/i18n/nuxt#locale"}
Découvrez comment utiliser la prop `locale` pour modifier les paramètres régionaux de votre application. Cela contrôle également le format de date/heure dans des composants tels que Calendrier, InputDate et InputTime.
:::

#vue
:::tip{to="/docs/getting-started/integrations/i18n/vue#locale"}
Découvrez comment utiliser la prop `locale` pour modifier les paramètres régionaux de votre application. Cela contrôle également le format de date/heure dans des composants tels que Calendrier, InputDate et InputTime.
:::
::

@@226@api

@27@@Projets

Composants-props

@@28@@séries

Composants slots

@29@changements

Composant-changelog
