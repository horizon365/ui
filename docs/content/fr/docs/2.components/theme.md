---
description: Un composant headless pour les composants enfants du thème.
category: layout
links:
  - label: GitHub à
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Theme.vue
---

## Utilisation

Le composant Theme remplace les classes par défaut **slot ** et **props** de tous les composants enfants sans modifier chacun individuellement. Il utilise le mécanisme `provide`/`inject` de Vue sous le capot, de sorte que les remplacements s'appliquent à toute profondeur.

::note
Le composant Theme ne restitue aucun élément HTML, il fournit seulement des remplacements de thème à ses enfants.
::

::framework-only
#nuxt
:::tip
Pour la configuration du thème au niveau de l'application, nous vous recommandons d'utiliser le fichier `app.config.ts`.
:::

#vue
:::tip
Pour la configuration du thème au niveau de l'application, nous vous recommandons d'utiliser le fichier `vite.config.ts`.
:::
::

### Slot classes

Utilisez la prop `ui` pour remplacer les classes d'emplacement des composants descendants. Les clés sont des noms de composants (camelCase) et les valeurs sont leurs remplacements de classe d'emplacement.

::component-example
---
name: 'theme-ui-example'
---
::

### Prop par défaut: badge{label="4.8+" class="align-text-top"}

Utilisez la prop `props` pour remplacer la valeur par défaut de n'importe quelle prop sur les composants descendants.

::component-example
---
name: 'theme-props-example'
---
::

::tip
Les props explicites sur un composant (par exemple `<UButton color="primary" />`) l'emportent toujours sur `<UTheme :props>`. Les valeurs par défaut du thème ne s'appliquent que lorsque la prop n'a pas été passée explicitement.
::

## exemples

### Composants multiples

Utilisez différentes touches dans `ui` ou `props` pour thématiser plusieurs types de composants à la fois.

::component-example
---
name: 'theme-multiple-example'
---
::

### Thèmes imbriqués

Imbriquez plusieurs composants de thème pour composer des remplacements. Le thème le plus interne a la priorité, tandis que les clés non remplacées sont héritées du thème externe.

::component-example
---
name: 'theme-nested-example'
---
::

### Priorité explicite

Le paramétrage explicite d'un prop (y compris `ui`) sur un composant individuel a toujours priorité sur le composant Thème.

::component-example
---
name: 'theme-priority-example'
---
::

### Propagation profonde

Les remplacements sont disponibles pour tous les composants descendants, quelle que soit leur profondeur d'imbriquage.

::component-example
---
name: 'theme-deep-example'
---
::

::note
Dans cet exemple, `MyButton` est un composant personnalisé qui rend un `UButton` en interne. Les remplacements de thème s'appliquent toujours car ils se propagent dans toute l'arborescence des composants.
::

### Form composants

Utilisez le composant Thème pour appliquer un style cohérent à un groupe de composants de formulaire.

::component-example
---
name: 'theme-form-example'
---
::

::tip
`<UFormField>`, `<UFieldGroup>` et `<UAvatarGroup>` conservent la priorité sur `<UTheme :props>` pour `size`, `color` et `highlight`. Les erreurs de validation forcent également la couleur `error` sur n'importe quelle valeur de thème.
::

Composants ### Prose

Utilisez l'espace de noms `prose` pour thématiser les composants de typographie. Les touches sont imbriquées sous `prose` (par exemple, `prose.p`, `prose.code`).

::component-example
---
name: 'theme-prose-example'
---
::

## api

### Props

:component-props

### Slots

:component-slots

## Changelog

:component-changelog
