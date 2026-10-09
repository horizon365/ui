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

## Utilisation

Utilisez l'emplacement par défaut pour définir l'étiquette du bouton.

::component-code
---
slots:
  default: Button
---
::

### étiquette

Utilisez le prop `label` pour définir l'étiquette du bouton.

::component-code
---
props:
  label: Button
---
::

### Couleur

Utilisez le prop `color` pour changer la couleur du bouton.

::component-code
---
props:
  color: neutral
slots:
  default: Button
---
::

### Variant

Utilisez le prop `variant` pour changer la variante du bouton.

::component-code
---
props:
  color: neutral
  variant: outline
slots:
  default: Button
---
::

### Size

Utilisez le prop `size` pour modifier la taille du bouton.

::component-code
---
props:
  size: xl
slots:
  default: Button
---
::

### Icône

Utilisez la prop `icon` pour afficher un [Icon](/docs/components/icon) à l'intérieur du bouton.

::component-code
---
props:
  icon: i-lucide-rocket
  size: md
  color: primary
  variant: solid
slots:
  default: Button
---
::

Utilisez les accessoires `leading` et `trailing` pour définir la position de l'icône ou les accessoires `leading-icon` et `trailing-icon` pour définir une icône différente pour chaque position.

::component-code
---
props:
  trailingIcon: i-lucide-arrow-right
  size: md
slots:
  default: Button
---
::

Le `label` comme accessoire ou fente est facultatif afin que vous puissiez utiliser le bouton comme bouton d'icône uniquement.

::component-code
---
props:
  icon: i-lucide-search
  size: md
  color: primary
  variant: solid
---
::

### Avatars

Utilisez la prop `avatar` pour afficher un [Avatar](/docs/components/avatar) à l'intérieur du bouton.

::component-code
---
prettier: true
ignore:
  - avatar.loading
props:
  avatar:
    src: 'https://github.com/nuxt.png'
    loading: lazy
  size: md
  color: neutral
  variant: outline
slots:
  default: |

    Button
---
::

Le `label` en tant qu 'accessoire ou fente est facultatif, vous pouvez donc utiliser le bouton comme bouton d'avatar uniquement.

::component-code
---
prettier: true
ignore:
  - avatar.loading
props:
  avatar:
    src: 'https://github.com/nuxt.png'
    loading: lazy
  size: md
  color: neutral
  variant: outline
---
::

### Link équipé

Vous pouvez passer n'importe quelle propriété du composant [Link](xph110) telle que `to`, `target`, etc.

::component-code
---
ignore:
  - target
props:
  to: https://github.com/nuxt/ui
  target: _blank
slots:
  default: Button
---
::

Lorsque le bouton est un lien ou lorsque vous utilisez la prop `active`, vous pouvez utiliser les props `active-color` et `active-variant` pour personnaliser l'état actif.

::component-code
---
prettier: true
ignore:
  - color
  - variant
items:
  activeColor:
    - primary
    - secondary
    - success
    - info
    - warning
    - error
    - neutral
  activeVariant:
    - solid
    - outline
    - soft
    - subtle
    - ghost
    - link
props:
  active: true
  color: neutral
  variant: outline
  activeColor: primary
  activeVariant: solid
slots:
  default: |

    Button
---

bouton
::

Vous pouvez également utiliser les accessoires `active-class` et `inactive-class` pour personnaliser l'état actif.

::component-code
---
props:
  active: true
  activeClass: 'font-bold'
  inactiveClass: 'font-light'
slots:
  default: Button
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

### Chargement

Utilisez le prop `loading` pour afficher une icône de chargement et désactiver le bouton.

::component-code
---
props:
  loading: true
  trailing: false
slots:
  default: Button
---
bouton
::

Utilisez la prop `loading-auto` pour afficher l'icône de chargement automatiquement pendant que la promesse `@click` est en attente.

:component-example{name="button-loading-auto-example"}

Cela fonctionne également avec le composant [Form](/docs/components/form).

:component-example{name="button-loading-auto-form-example"}

### Chargement Icône

Utilisez la prop `loading-icon` pour personnaliser l'icône de chargement. Par défaut, `i-lucide-loader-circle`.

::component-code
---
props:
  loading: true
  loadingIcon: 'i-lucide-loader'
slots:
  default: Button
---
bouton
::

::framework-only
#nuxt
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
Vous pouvez personnaliser cette icône globalement dans votre `app.config.ts` sous la touche `ui.icons.loading`.
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
Vous pouvez personnaliser cette icône globalement dans votre `vite.config.ts` sous la touche `ui.icons.loading`.
:::
::

### Désactivé

Utilisez le prop `disabled` pour désactiver le bouton.

::component-code
---
props:
  disabled: true
slots:
  default: Button
---

bouton
::

## Exemples

### `class` avec prop

Utilisez la prop `class` pour remplacer les styles de base du bouton.

::component-code
---
props:
  class: 'font-bold rounded-full'
slots:
  default: Button
---
::

### `ui` prop

Utilisez la prop `ui` pour remplacer les styles de slots du bouton.

::component-code
---
prettier: true
ignore:
  - ui
  - color
  - variant
  - icon
props:
  icon: i-lucide-rocket
  color: neutral
  variant: outline
  ui:
    leadingIcon: 'text-primary'
slots:
  default: |

    Button
---
::

## API

### Props équipement

:component-props

::callout{icon="i-simple-icons-mdnwebdocs" to="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attributes" target="_blank"}
Ce composant prend également en charge tous les attributs HTML natifs `<button>`.
::

::callout{icon="i-simple-icons-github" to="https://github.com/nuxt/ui/blob/v4/src/runtime/components/Link.vue#L13"}
Le composant `Button` étend le composant `Link`.Consultez le code source sur GitHub.
::

### Slots

:component-slots

## Thème

:component-theme

## Changelog

:component-changelog
