---
description: Un ensemble de panneaux d'onglets qui sont affichés un à la fois.
category: navigation
keywords:
  - tabbed
  - panels
  - sections
links:
  - label: Les tabs
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/tabs
  - label: GitHub à
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Tabs.vue
---

## Utilisation

Utilisez le composant onglets pour afficher une liste d'éléments dans des onglets.

::component-example
---
collapse: true
prettier: true
name: 'tabs-example'
props:
  class: 'w-full'
---
::

### Éléments

Utilisez le prop `items` comme un tableau d'objets avec les propriétés suivantes:

- x`label?: string`x{lang="ts-type"}
- x`icon?: string`xx{lang="ts-type"}
- x`avatar?: AvatarProps`xx{lang="ts-type"}
- x`badge?: string | number | BadgeProps`xx{lang="ts-type"}
- x`content?: string`xx{lang="ts-type"}
- x`value?: string | number`x{lang="ts-type"}
- x`disabled?: boolean`x{lang="ts-type"}
Xph031xx[x`slot?: string`x{lang="ts-type"}x](x#with-custom-slotx)
- x`class?: any`x{lang="ts-type"}
- x`ui?: { trigger?: ClassNameValue, leadingIcon?: ClassNameValue, leadingAvatar?: ClassNameValue, leadingAvatarSize?: ClassNameValue, label?: ClassNameValue, trailingBadge?: ClassNameValue, trailingBadgeSize?: ClassNameValue, content?: ClassNameValue }`x{lang="ts-type"}

::component-code
---
ignore:
  - items
  - class
external:
  - items
externalTypes:
  - TabsItem[]
props:
  items:
    - label: Account
      icon: 'i-lucide-user'
      content: 'This is the account content.'
    - label: Password
      icon: 'i-lucide-lock'
      content: 'This is the password content.'
  class: 'w-full'
---
::

### Contenu

Réglez la prop `content` sur `false` pour rendre les déclencheurs sans panneaux.

::component-code
---
ignore:
  - content
  - items
  - class
external:
  - items
externalTypes:
  - TabsItem[]
props:
  content: false
  items:
    - label: Account
      icon: 'i-lucide-user'
      content: 'This is the account content.'
    - label: Password
      icon: 'i-lucide-lock'
      content: 'This is the password content.'
  class: 'w-full'
---
::

### Unmount

Utilisez la prop `unmount-on-hide` pour empêcher que le contenu ne soit démonté lorsque les onglets sont réduits.

::component-code
---
ignore:
  - content
  - items
  - class
external:
  - items
externalTypes:
  - TabsItem[]
props:
  unmountOnHide: false
  items:
    - label: Account
      icon: 'i-lucide-user'
      content: 'This is the account content.'
    - label: Password
      icon: 'i-lucide-lock'
      content: 'This is the password content.'
  class: 'w-full'
---
::

::note
Vous pouvez inspecter le DOM pour voir le contenu de chaque élément rendu.
::

### Couleur

Utilisez le prop `color` pour changer la couleur des onglets.

::component-code
---
ignore:
  - content
  - items
  - class
external:
  - items
externalTypes:
  - TabsItem[]
props:
  color: neutral
  content: false
  items:
    - label: Account
    - label: Password
  class: 'w-full'
---
::

### Variant

Utilisez le prop `variant` pour changer la variante des onglets.

::component-code
---
ignore:
  - content
  - items
  - class
external:
  - items
externalTypes:
  - TabsItem[]
props:
  color: neutral
  variant: link
  content: false
  items:
    - label: Account
    - label: Password
  class: 'w-full'
---
::

### Size

Utilisez le prop `size` pour modifier la taille des onglets.

::component-code
---
ignore:
  - content
  - items
  - class
external:
  - items
externalTypes:
  - TabsItem[]
props:
  size: md
  variant: pill
  content: false
  items:
    - label: Account
    - label: Password
  class: 'w-full'
---
::

### Référencement

Utilisez la prop `orientation` pour changer l'orientation des onglets. Defaults à `horizontal`.

::component-code
---
ignore:
  - content
  - items
  - class
external:
  - items
externalTypes:
  - TabsItem[]
props:
  orientation: vertical
  variant: pill
  content: false
  items:
    - label: Account
    - label: Password
  class: 'w-full'
---
::

## exemples

### Control élément actif

Vous pouvez contrôler l'élément actif à l'aide de la prop `default-value` ou de la directive `v-model` avec le `value` de l'élément. Si aucun `value` n'est fourni, l'index **as par défaut est une string**.

:component-example{name="tabs-model-value-example"}

::tip
Utilisez la prop `value-key` pour modifier la clé utilisée pour faire correspondre les éléments lorsqu 'un `v-model` ou `default-value` est fourni.
::

### With route requête

Vous pouvez contrôler l'élément actif par un paramètre de requête URL, en utilisant `route.query.tab` comme `value` de l'élément.

:component-example{name="tabs-route-query-example"}

### With slot de contenu

Utilisez le slot `#content` pour personnaliser le contenu de chaque élément.

:component-example{name="tabs-content-slot-example"}

### With barre de tabulation inférieur

Utilisez le prop `ui` pour transformer les onglets en une barre d'onglets inférieure de style mobile avec des icônes et de petites étiquettes, similaire à YouTube ou Instagram.

::component-example
---
collapse: true
name: 'tabs-bottom-tab-bar-example'
---
::

### With slot personnalisé

Utilisez la propriété `slot` pour personnaliser un élément spécifique.

Vous aurez accès aux slots suivants:

- x`#{{ item.slot }}`x{lang="ts-type"}

::component-example
---
collapse: true
name: 'tabs-custom-slot-example'
---
::

## API équivalent

### Props équipement

:component-props

### Slots

:component-slots

### Emits

:component-emits

### Expose à

Lorsque vous accédez au composant via une référence de modèle, vous pouvez utiliser les éléments suivants:

| nom| type|
| ---- | ---- |
| `triggersRef`x{lang="ts-type"}| `Ref<ComponentPublicInstance[]>`x{lang="ts-type"}|

## Thème

:component-theme

## Changelog écrit

:component-changelog
