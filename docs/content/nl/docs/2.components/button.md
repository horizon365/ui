---
description: Een knopelement dat als link kan fungeren of een actie kan activeren.
category: element
keywords:
  - cta
  - action
  - btn
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Button.vue
---

## Gebruik

Gebruik de standaardsleuf om het label van de knop in te stellen.

::component-code
---
slots:
  default: Button
---
::

### Label

Gebruik de `label` prop om het label van de knop in te stellen.

::component-code
---
props:
  label: Button
---
::

### Kleur

Gebruik de `color` prop om de kleur van de knop te wijzigen.

::component-code
---
props:
  color: neutral
slots:
  default: Button
---
::

### Variant

Gebruik de `variant` prop om de variant van de knop te wijzigen.

::component-code
---
props:
  color: neutral
  variant: outline
slots:
  default: Button
---
::

### Grootte

Gebruik de `size` prop om de grootte van de knop te wijzigen.

::component-code
---
props:
  size: xl
slots:
  default: Button
---
::

### Icoon

Gebruik de `icon` prop om een [Icon](/docs/components/icon) in de knop te tonen.

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

Gebruik de `leading` en `trailing` rekwisieten om de pictogrampositie in te stellen of de `leading-icon` en `trailing-icon` rekwisieten om voor elke positie een ander pictogram in te stellen.

::component-code
---
props:
  trailingIcon: i-lucide-arrow-right
  size: md
slots:
  default: Button
---
::

De `label` als prop of slot is optioneel, dus je kunt de knop gebruiken als een knop met alleen pictogrammen.

::component-code
---
props:
  icon: i-lucide-search
  size: md
  color: primary
  variant: solid
---
::

### Avatar [bewerken]

Gebruik de `avatar` prop om een [Avatar](/docs/components/avatar) in de knop te tonen.

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

De `label` als prop of slot is optioneel, dus je kunt de knop gebruiken als een knop voor alleen avatar.

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

### Link

U kunt elke eigenschap van de [Link](/docs/components/link#props) component doorgeven, zoals `to`, `target`, enz.

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

Wanneer de knop een link is of wanneer u de `active` prop gebruikt, kunt u de `active-color` en `active-variant` props gebruiken om de actieve status aan te passen.

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

Knop
::

U kunt ook de `active-class`- en `inactive-class`-rekwisieten gebruiken om de actieve status aan te passen.

::component-code
---
props:
  active: true
  activeClass: 'font-bold'
  inactiveClass: 'font-light'
slots:
  default: Button
---

Knop
::

::tip
U kunt deze stijlen globaal configureren in uw `app.config.ts` bestand onder de `ui.button.variants.active` sleutel.

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

### Bezig met laden

Gebruik de `loading` prop om een laadpictogram te tonen en schakel de knop uit.

::component-code
---
props:
  loading: true
  trailing: false
slots:
  default: Button
---
Knop
::

Gebruik de `loading-auto` prop om het laadpictogram automatisch weer te geven terwijl de `@click`-belofte in behandeling is.

:component-example{name="button-loading-auto-example"}

Dit werkt ook met de [Form](/docs/components/form) component.

:component-example{name="button-loading-auto-form-example"}

### Pictogram laden

Gebruik de `loading-icon` prop om het laadpictogram aan te passen. Standaard `i-lucide-loader-circle`.

::component-code
---
props:
  loading: true
  loadingIcon: 'i-lucide-loader'
slots:
  default: Button
---
Knop
::

::framework-only
#nuxt
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
U kunt dit pictogram globaal aanpassen in uw `app.config.ts` onder `ui.icons.loading`-sleutel.
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
U kunt dit pictogram globaal aanpassen in uw `vite.config.ts` onder `ui.icons.loading`-sleutel.
:::
::

### Uitgeschakeld

Gebruik de `disabled` prop om de knop uit te schakelen.

::component-code
---
props:
  disabled: true
slots:
  default: Button
---

Knop
::

## Voorbeelden

### `class` voor

Gebruik de `class` prop om de basisstijlen van de knop te overschrijven.

::component-code
---
props:
  class: 'font-bold rounded-full'
slots:
  default: Button
---
::

### `ui` voor

Gebruik de `ui` prop om de sleuvenstijlen van de knop te overschrijven.

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

### Props

:component-props

::callout{icon="i-simple-icons-mdnwebdocs" to="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attributes" target="_blank"}
Dit onderdeel ondersteunt ook alle native `<button>` HTML-kenmerken.
::

::callout{icon="i-simple-icons-github" to="https://github.com/nuxt/ui/blob/v4/src/runtime/components/Link.vue#L13"}
De `Button`-component breidt de `Link`-component uit. Bekijk de broncode op GitHub.
::

### Slots

:component-slots

## Thema

:component-theme

## Changelog

:component-changelog
