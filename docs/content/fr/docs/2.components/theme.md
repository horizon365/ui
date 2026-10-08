---
description: Un composant headless pour les composants enfants du thème.
category: layout
links:
  - label: GitHub à
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Theme.vue
---

@@ph000@utilisation

Le composant Theme remplace les classes par défaut **slot classes** et **props** de tous les composants enfants sans modifier chacun individuellement. Il utilise le mécanisme `provide`/`inject` de Vue sous le capot, de sorte que les remplacements s'appliquent à n'importe quelle profondeur.

::note
Le composant Theme ne restitue aucun élément HTML, il fournit seulement des remplacements de thème à ses enfants.
::

::framework-only
#numérique
:::tip
Pour la configuration du thème au niveau de l'application, nous vous recommandons d'utiliser le fichier `app.config.ts`.
:::

#vue
:::tip
Pour la configuration du thème au niveau de l'application, nous vous recommandons d'utiliser le fichier `vite.config.ts`.
:::
::

### Classes à sous

Utilisez la prop `ui` pour remplacer les classes d'emplacement des composants descendants. Les clés sont des noms de composants (camelCase) et les valeurs sont leurs remplacements de classe d'emplacement.

::component-example
---
nom: 'thème-exemple'
---
::

### Prop défaut: badge{label="4.8+" class="align-text-top"}

Utilisez la prop `props` pour remplacer la valeur par défaut de n'importe quelle prop sur les composants descendants.

::component-example
---
nom: 'theme-props-exemple'
---
::

::tip
Les props explicites sur un composant (par exemple `<UButton color="primary" />`) l'emportent toujours sur `<UTheme :props>`. Les valeurs par défaut du thème ne s'appliquent que lorsque la prop n'a pas été passée explicitement.
::

@@ph016@exemples

### Composants multiples

Utilisez différentes touches dans `ui` ou `props` pour thématiser plusieurs types de composants à la fois.

::component-example
---
nom: 'theme-multiple-exemple'
---
::

### thèmes imbriqués

Imbriquez plusieurs composants de thème pour composer des remplacements. Le thème le plus interne a la priorité, tandis que les clés non remplacées sont héritées du thème externe.

::component-example
---
nom: 'theme-nided-example'
---
::

### Priorité explicite

Le fait de définir explicitement n'importe quel accessoire (y compris `ui`) sur un composant individuel a toujours priorité sur le composant Thème.

::component-example
---
name: 'thème-priorité-exemple'
---
::

### Propagation profonde

Les remplacements sont disponibles pour tous les composants descendants, quelle que soit la profondeur de leur imbriquage.

::component-example
---
nom: 'thème-exemple'
---
::

::note
Dans cet exemple,`MyButton` est un composant personnalisé qui rend un `UButton` en interne. Les remplacements de thème s'appliquent toujours car ils se propagent dans toute l'arborescence des composants.
::

### Composants du formulaire

Utilisez le composant Thème pour appliquer un style cohérent à un groupe de composants de formulaire.

::component-example
---
nom: 'thème-exemple'
---
::

::tip
`<UFormField>`,`<UFieldGroup>` et `<UAvatarGroup>` conservent la préséance sur `<UTheme :props>` pour `size`,`color` et `highlight`. Les erreurs de validation forcent également la couleur `error` sur toute valeur de thème.
::

### Prose composants

Utilisez l'espace de noms `prose` pour thématiser les composants typographiques. Les clés sont imbriquées sous `prose`(par exemple,`prose.p`,`prose.code`).

::component-example
---
nom: 'thème-prose-exemple'
---
::

@@ph040@@api

@@ph041@@props

Composants-props

@@ph042@@réglages

Composants slots

@changelog @changelog

Composant-changelog
