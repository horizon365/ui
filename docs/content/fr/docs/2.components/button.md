---
description: Un élément de bouton qui peut agir comme un lien ou déclencher une action.
category: element
keywords:
  - cta
  - action
  - btn
links:
  - label: GitHub à
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Button.vue
---

@@ph000@utilisation

Utilisez l'emplacement par défaut pour définir l'étiquette du bouton.

::component-code
---
Slots:
  Défaut: bouton
---
::

@@ph001@étiquette

Utilisez la prop `label` pour définir l'étiquette du bouton.

::component-code
---
Props:
  Étiquette: bouton
---
::

@@pH003@couleur

Utilisez la prop `color` pour changer la couleur du bouton.

::component-code
---
Props:
  Couleur: Neutre
Slots:
  Par défaut: Button
---
::

@@005@@Variant

Utilisez la prop `variant` pour changer la variante du bouton.

::component-code
---
Props:
  Couleur: Neutre
  Étiquette: Outline
Slots:
  Défaut: bouton
---
::

@@ph007@série

Utilisez la prop `size` pour modifier la taille du bouton.

::component-code
---
Props:
  Taille: XL
Slots:
  Défaut: bouton
---
::

@@ph009@icône

Utilisez le prop `icon` pour afficher un [Icon](/docs/components/icon) à l'intérieur du bouton.

::component-code
---
Props:
  Étiquette: i-lucide-rocket
  Taille: MD
  Couleur: Primaire
  Variante: solide
Slots:
  Défaut: bouton
---
::

Utilisez les accessoires `leading` et `trailing` pour définir la position de l'icône ou les accessoires `leading-icon` et `trailing-icon` pour définir une icône différente pour chaque position.

::component-code
---
Props:
  Icône: i-lucide-arrow-right
  Étiquette: MD
Slots:
  Par défaut: Button
---
::

Le `label` comme accessoire ou emplacement est facultatif afin que vous puissiez utiliser le bouton comme bouton d'icône uniquement.

::component-code
---
Props:
  Icône: i-lucide-search
  Étiquette: MD
  Couleur: Primaire
  Variante: solide
---
::

@2000@avatar

Utilisez le prop `avatar` pour afficher un [Avatar](/docs/components/avatar) à l'intérieur du bouton.

::component-code
---
Étiquette: true
Ignorer:
  - avatar.chargement
Props:
  Avatar:
    src: 'https://github.com/nuxt.png'
    Étiquette: Lazy
  Étiquette: MD
  Couleur: Neutre
  Étiquette: Outline
Slots:
  Défaut:|

    bouton
---
::

Le `label` comme accessoire ou emplacement est facultatif afin que vous puissiez utiliser le bouton comme bouton d'avatar uniquement.

::component-code
---
Étiquette: true
ignorer:
  - avatar.chargement
Props:
  Avatar:
    src: 'https://github.com/nuxt.png'
    Étiquette: Lazy
  Étiquette: MD
  Couleur: Neutre
  Étiquette: Outline
---
::

@29@lien

Vous pouvez passer n'importe quelle propriété du composant[Link](/docs/components/link#props)comme`to`,`target`, etc.

::component-code
---
ignorer :
  @@ph036@cible
Props :
  Deux :https://github.com/nuxt/ui
  Référence : _ blank
Slots :
  Par défaut : Button
---
::

Lorsque le bouton est un lien ou lorsque vous utilisez l'accessoire`active`, vous pouvez utiliser les accessoires`active-color`et`active-variant`pour personnaliser l'état actif .

::component-code
---
Étiquette : true
Ignorer :
  @@pH040@couleur
  - variant
items :
  Activité :
    @@ph042@primaire
    - secondaire
    @@44@réussite
    @@ph045@info
    @@ph046@référencement
    @@ph047@erreur
    @@ph048@neutre
  Activité :
    @@ph049@solide
    @@ph050@outline
    @@ph051@@doux
    @@502@subtile
    @@ph053@fantôme
    @@ph054@lien
Props:
  Actif: vrai
  Couleur: Neutre
  Étiquette: Outline
  Activité: Primary
  Activité: Solide
Slots:
  Default:|

    bouton
---

bouton
::

Vous pouvez également utiliser les accessoires `active-class` et `inactive-class` pour personnaliser l'état actif.

::component-code
---
Props:
  Actif: vrai
  Classe d'utilisateur: font-bold
  inactiveClasse: 'font-light'
Slots:
  Par défaut: Button
---

bouton
::

::tip
Vous pouvez configurer ces styles globalement dans votre fichier `app.config.ts` sous la touche `ui.button.variants.active`.

```ts
export default defineAppConfig({
  ui: {
    button: {
      variants: {
        active: {
          true: {
            base: 'font-bold'
          }
        }
      }
    }
  }
})
```
::

@@774@chargement

Utilisez la prop `loading` pour afficher une icône de chargement et désactiver le bouton.

::component-code
---
Props:
  Chargement: vrai
  Traînée: Faux
Slots:
  Défaut: bouton
---
bouton
::

Utilisez la prop `loading-auto` pour afficher l'icône de chargement automatiquement pendant que la promesse `@click` est en attente.

: composant {name="button-loading-auto-example"}

Cela fonctionne également avec le composant [Form](/docs/components/form).

: exemple de composant {name="button-loading-auto-form-example"}

### Icône de chargement

Utilisez la prop `loading-icon` pour personnaliser l'icône de chargement. Par défaut,`i-lucide-loader-circle`.

::component-code
---
Props:
  Chargement: vrai
  loadingIcon: 'i-lucide-loader'
Slots:
  Défaut: bouton
---
bouton
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

### désactivé

Utilisez la prop `disabled` pour désactiver le bouton.

::component-code
---
Props:
  handicapés: vrai
Slots:
  Par défaut: Button
---

bouton
::

@@ph093@exemples

@@

Utilisez la prop `class` pour remplacer les styles de base du bouton.

::component-code
---
Props:
  classe: 'font-bold rounded-full'
Slots:
  Défaut: bouton
---
::

@@

Utilisez la prop `ui` pour remplacer les styles de slots du bouton.

::component-code
---
Étiquette: true
ignorer:
  @@ph100 @
  -  couleur
  - variant
  @@pha103 @@ icon
Props:
  Étiquette: i-lucide-rocket
  Couleur: Neutre
  Étiquette: Outline
  UI:
    leadingIcon: 'text-primaire'
Slots:
  Défaut:|

    bouton
---
::

@@ph104@api

@@P105@@Projets

Composants-props

::callout{icon="i-simple-icons-mdnwebdocs" to="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attributes" target="_blank"}
Ce composant prend également en charge tous les attributs HTML natifs `<button>`.
::

::callout{icon="i-simple-icons-github" to="https://github.com/nuxt/ui/blob/v4/src/runtime/components/Link.vue#L13"}
Le composant `Button` étend le composant `Link`. Consultez le code source sur GitHub.
::

@@ph109@@Slots

Composants slots

@@ph110@thème

Composant-thème

@111@changements

Composant-changelog
