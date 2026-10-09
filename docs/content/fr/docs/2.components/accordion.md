---
description: Un ensemble empilé de panneaux pliables.
category: data
keywords:
  - disclosure
  - collapse
  - faq
  - expansion panel
links:
  - label: Accordéon
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/accordion
  - label: GitHub à
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Accordion.vue
---

## Utilisation

Utilisez le composant Accordéon pour afficher une liste d'éléments pliables.

::component-code
---
collapse: true
ignore:
  - items
  - ui.content
external:
  - items
externalTypes:
  - AccordionItem[]
hide:
  - class
  - ui
  - defaultValue
props:
  defaultValue: '0'
  class: 'px-4 max-w-lg'
  ui:
    content: 'text-muted'
  items:
    - label: 'Is Nuxt UI free to use?'
      content: 'Yes! Nuxt UI is completely free and open source under the MIT license. All 125+ components are available to everyone.'
    - label: 'Can I use Nuxt UI with Vue without Nuxt?'
      content: 'Yes! While optimized for Nuxt, Nuxt UI works perfectly with standalone Vue projects via our Vite plugin. You can follow the [installation guide](/docs/getting-started/installation/vue) to get started.'
    - label: 'Is Nuxt UI production-ready?'
      content: 'Yes! Nuxt UI is used in production by thousands of applications with extensive tests, regular updates, and active maintenance.'
---
::

### Éléments

Utilisez le prop `items` comme un tableau d'objets avec les propriétés suivantes:

- x`label?: string`x{lang="ts-type"}
- x`icon?: string`xx{lang="ts-type"}
- x`trailingIcon?: string`xx{lang="ts-type"}
- x`content?: string`x{lang="ts-type"}
- x`value?: string`x{lang="ts-type"}
- x`disabled?: boolean`x{lang="ts-type"}
Xph047xx[x`slot?: string`{lang="ts-type"}x](x#with-custom-slot)
- x`class?: any`x{lang="ts-type"}
- xx`ui?: { item?: ClassNameValue, header?: ClassNameValue, trigger?: ClassNameValue, leadingIcon?: ClassNameValue, label?: ClassNameValue, trailingIcon?: ClassNameValue, content?: ClassNameValue, body?: ClassNameValue }`xx{lang="ts-type"}

::component-code
---
ignore:
  - items
external:
  - items
externalTypes:
  - AccordionItem[]
hide:
  - class
props:
  class: 'px-4'
  items:
    - label: 'Icons'
      icon: 'i-lucide-smile'
      content: 'You have nothing to do, @nuxt/icon will handle it automatically.'
    - label: 'Colors'
      icon: 'i-lucide-swatch-book'
      content: 'Choose a primary and a neutral color from your Tailwind CSS theme.'
    - label: 'Components'
      icon: 'i-lucide-box'
      content: 'You can customize components by using the `class` / `ui` props or in your app.config.ts.'
---
::

### Multiple

Définissez la prop `type` sur `multiple` pour permettre à plusieurs éléments d'être actifs en même temps.

::component-code
---
ignore:
  - type
  - items
external:
  - items
externalTypes:
  - AccordionItem[]
hide:
  - class
props:
  class: 'px-4'
  type: 'multiple'
  items:
    - label: 'Icons'
      icon: 'i-lucide-smile'
      content: 'You have nothing to do, @nuxt/icon will handle it automatically.'
    - label: 'Colors'
      icon: 'i-lucide-swatch-book'
      content: 'Choose a primary and a neutral color from your Tailwind CSS theme.'
    - label: 'Components'
      icon: 'i-lucide-box'
      content: 'You can customize components by using the `class` / `ui` props or in your app.config.ts.'
---
::

### Collapsible

Lorsque `type` est `single`, vous pouvez définir le prop `collapsible` sur `false` pour empêcher l'élément actif de s'effondrer.

::component-code
---
ignore:
  - collapsible
  - items
external:
  - items
externalTypes:
  - AccordionItem[]
hide:
  - class
props:
  class: 'px-4'
  collapsible: false
  items:
    - label: 'Icons'
      icon: 'i-lucide-smile'
      content: 'You have nothing to do, @nuxt/icon will handle it automatically.'
    - label: 'Colors'
      icon: 'i-lucide-swatch-book'
      content: 'Choose a primary and a neutral color from your Tailwind CSS theme.'
    - label: 'Components'
      icon: 'i-lucide-box'
      content: 'You can customize components by using the `class` / `ui` props or in your app.config.ts.'
---
::

### unmount

Utilisez la prop `unmount-on-hide` pour éviter que le contenu ne soit démonté lorsque l'accordéon est rétracté. Par défaut, `true`.

::component-code
---
ignore:
  - items
external:
  - items
externalTypes:
  - AccordionItem[]
hide:
  - class
props:
  class: 'px-4'
  unmountOnHide: false
  items:
    - label: 'Icons'
      icon: 'i-lucide-smile'
      content: 'You have nothing to do, @nuxt/icon will handle it automatically.'
    - label: 'Colors'
      icon: 'i-lucide-swatch-book'
      content: 'Choose a primary and a neutral color from your Tailwind CSS theme.'
    - label: 'Components'
      icon: 'i-lucide-box'
      content: 'You can customize components by using the `class` / `ui` props or in your app.config.ts.'
---
::

::note
Vous pouvez inspecter le DOM pour voir le contenu de chaque élément rendu.
::

### Disabled

Utilisez la propriété `disabled` pour désactiver l'accordéon.

Vous pouvez également désactiver un élément spécifique en utilisant la propriété `disabled` dans l'objet item.

::component-code
---
ignore:
  - items
external:
  - items
externalTypes:
  - AccordionItem[]
hide:
  - class
props:
  class: 'px-4'
  disabled: true
  items:
    - label: 'Icons'
      icon: 'i-lucide-smile'
      content: 'You have nothing to do, @nuxt/icon will handle it automatically.'
    - label: 'Colors'
      icon: 'i-lucide-swatch-book'
      content: 'Choose a primary and a neutral color from your Tailwind CSS theme.'
      disabled: true
    - label: 'Components'
      icon: 'i-lucide-box'
      content: 'You can customize components by using the `class` / `ui` props or in your app.config.ts.'
---
::

Icône ### Trailing

Utilisez la prop `trailing-icon` pour personnaliser la fin [Icon](/docs/components/icon) de chaque élément.

::tip
Vous pouvez également définir une icône pour un élément spécifique en utilisant la propriété `trailingIcon` dans l'objet item.
::

::component-code
---
ignore:
  - items
external:
  - items
externalTypes:
  - AccordionItem[]
hide:
  - class
props:
  class: 'px-4'
  trailingIcon: 'i-lucide-arrow-down'
  items:
    - label: 'Icons'
      icon: 'i-lucide-smile'
      content: 'You have nothing to do, @nuxt/icon will handle it automatically.'
      trailingIcon: 'i-lucide-plus'
    - label: 'Colors'
      icon: 'i-lucide-swatch-book'
      content: 'Choose a primary and a neutral color from your Tailwind CSS theme.'
    - label: 'Components'
      icon: 'i-lucide-box'
      content: 'You can customize components by using the `class` / `ui` props or in your app.config.ts.'
---
::

::framework-only
#nuxt
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
Vous pouvez personnaliser cette icône globalement dans votre `app.config.ts` sous la touche `ui.icons.chevronDown`.
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
Vous pouvez personnaliser cette icône globalement dans votre `vite.config.ts` sous la touche `ui.icons.chevronDown`.
:::
::

## Exemples

### Control élément actif (s)

Vous pouvez contrôler l'élément actif à l'aide de la prop `default-value` ou de la directive `v-model` avec le `value` de l'élément. Si aucun `value` n'est fourni, l'index **as par défaut est une string**.

::component-example
---
name: 'accordion-model-value-example'
props:
  class: 'px-4'
---
::

::tip
Utilisez la prop `value-key` pour modifier la clé utilisée pour faire correspondre les éléments lorsqu 'un `v-model` ou `default-value` est fourni.
::

::caution
Lorsque `type="multiple"`, assurez-vous de passer un tableau à la prop `default-value` ou à la directive `v-model`.
::

### Avec drag and drop.

Utilisez le composable [`useSortable`](https://vueuse.org/integrations/useSortable/) de [`@vueuse/integrations`](https://vueuse.org/integrations/README.html) pour activer la fonctionnalité de glisser-déposer sur l'accordéon. Cette intégration enveloppe [Sortable.js](https://sortablejs.github.io/Sortable/) pour fournir une expérience de glisser-déposer transparente.

::component-example
---
name: 'accordion-drag-and-drop-example'
---
::

### Avec slot de corps

Utilisez le slot `#body` pour personnaliser le corps de chaque élément.

::component-example
---
name: 'accordion-body-slot-example'
props:
  class: 'px-4'
---
::

::tip
La fente `#body` comprend quelques styles prédéfinis, utilisez la fente [`#content` ](xph276) si vous voulez commencer à zéro.
::

### With slot de contenu

Utilisez le slot `#content` pour personnaliser le contenu de chaque élément.

::component-example
---
name: 'accordion-content-slot-example'
props:
  class: 'px-4'
---
::

### With slot personnalisé

Utilisez la propriété `slot` pour personnaliser un élément spécifique.

Vous aurez accès aux slots suivants:

- x`#{{ item.slot }}`x{lang="ts-type"}
- x`#{{ item.slot }}-body`{lang="ts-type"}

::component-example
---
name: 'accordion-custom-slot-example'
props:
  class: 'px-4'
---
::

### Avec contenu markdown

Vous pouvez utiliser le composant [Markdown](https://comark.dev/rendering/vue) de `@comark/vue` pour rendre le markdown dans les éléments d'accordéon.

::component-example
---
collapse: true
name: 'accordion-markdown-example'
class: 'px-8'
---
::

## API

### Props

:component-props

### Slots

:component-slots

### Emits

:component-emits

## Thème

:component-theme

## Changelog écrit

:component-changelog
