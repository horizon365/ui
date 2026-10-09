---
description: Ein Button-Element, das als Link oder als Auslöser einer Aktion fungieren kann.
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

## Bearbeiten

Verwenden Sie den Standard-Slot, um das Label des Buttons festzulegen.

::component-code
---
slots:
  default: Button
---
::

### Label

Verwenden Sie die `label` prop, um die Beschriftung des Buttons festzulegen.

::component-code
---
props:
  label: Button
---
::

### Farbe

Verwenden Sie die `color` prop, um die Farbe des Buttons zu ändern.

::component-code
---
props:
  color: neutral
slots:
  default: Button
---
::

### Variant Bearbeiten

Verwenden Sie die `variant`-Prop, um die Variante des Buttons zu ändern.

::component-code
---
props:
  color: neutral
  variant: outline
slots:
  default: Button
---
::

### Größe

Verwenden Sie die `size`-Prop, um die Größe des Buttons zu ändern.

::component-code
---
props:
  size: xl
slots:
  default: Button
---
::

### Icon (englisch)

Verwenden Sie die `icon`-Prop, um ein [Icon](/docs/components/icon) innerhalb des Buttons anzuzeigen.

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

Verwenden Sie die `leading` und `trailing` props, um die Symbolposition festzulegen, oder die `leading-icon` und `trailing-icon` props, um für jede Position ein anderes Symbol festzulegen.

::component-code
---
props:
  trailingIcon: i-lucide-arrow-right
  size: md
slots:
  default: Button
---
::

Der `label` als Prop oder Slot ist optional, sodass Sie den Button als Nur-Icon-Button verwenden können.

::component-code
---
props:
  icon: i-lucide-search
  size: md
  color: primary
  variant: solid
---
::

### avatar Bearbeiten

Verwenden Sie die `avatar`-Prop, um ein [Avatar](/docs/components/avatar) innerhalb des Buttons anzuzeigen.

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

Der `label` als prop oder slot ist optional, so dass sie den button als avatar-button verwenden können.

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

### Link Bearbeiten

Sie können jede Eigenschaft der Komponente [Link](/docs/components/link#props) übergeben, z. B. `to`, `target` usw.

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

Wenn der Button ein Link ist oder wenn Sie die `active`-Prop verwenden, können Sie die `active-color`-und `active-variant`-Props verwenden, um den aktiven Status anzupassen.

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

Der Button
::

Sie können auch die `active-class`-und `inactive-class`-Requisiten verwenden, um den aktiven Status anzupassen.

::component-code
---
props:
  active: true
  activeClass: 'font-bold'
  inactiveClass: 'font-light'
slots:
  default: Button
---

Der Button
::

::tip
Sie können diese Stile global in Ihrer `app.config.ts`-Datei unter dem `ui.button.variants.active`-Schlüssel konfigurieren.

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

### loading (englisch)

Verwenden Sie die `loading`-Prop, um ein Ladesymbol anzuzeigen und den Button zu deaktivieren.

::component-code
---
props:
  loading: true
  trailing: false
slots:
  default: Button
---
Der Button
::

Verwenden Sie die `loading-auto`-Prop, um das Ladesymbol automatisch anzuzeigen, während das `@click`-Versprechen aussteht.

:component-example{name="button-loading-auto-example"}

Dies funktioniert auch mit der [Form](/docs/components/form)-Komponente.

:component-example{name="button-loading-auto-form-example"}

### Loading Icon (Deutsche Übersetzung)

Verwenden Sie die `loading-icon`-Prop, um das Ladesymbol anzupassen. Standardmäßig `i-lucide-loader-circle`.

::component-code
---
props:
  loading: true
  loadingIcon: 'i-lucide-loader'
slots:
  default: Button
---
Der Button
::

::framework-only
#nuxt
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
Sie können dieses Symbol global in Ihrem `app.config.ts` unter dem `ui.icons.loading`-Schlüssel anpassen.
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
Sie können dieses Symbol global in Ihrem `vite.config.ts` unter `ui.icons.loading` Schlüssel anpassen.
:::
::

### Disabled (nicht verfügbar)

Verwenden Sie die `disabled`-Prop, um den Button zu deaktivieren.

::component-code
---
props:
  disabled: true
slots:
  default: Button
---

Der Button
::

## Examples Bearbeiten

### `class` prop (Deutsche Übersetzung)

Verwenden Sie die `class`-Prop, um die Basisstile des Buttons zu überschreiben.

::component-code
---
props:
  class: 'font-bold rounded-full'
slots:
  default: Button
---
::

### `ui` prop (Deutsche Ausgabe)

Verwenden Sie die `ui` prop, um die Slots Stile der Schaltfläche zu überschreiben.

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

## API (Englisch)

### Props (nicht)

:component-props

::callout{icon="i-simple-icons-mdnwebdocs" to="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attributes" target="_blank"}
Diese Komponente unterstützt auch alle nativen `<button>` HTML-Attribute.
::

::callout{icon="i-simple-icons-github" to="https://github.com/nuxt/ui/blob/v4/src/runtime/components/Link.vue#L13"}
Die `Button`-Komponente erweitert die `Link`-Komponente. Überprüfen Sie den Quellcode auf GitHub.
::

### Slots Bearbeiten

:component-slots

## Theme Bearbeiten

:component-theme

## Changelog (englisch)

:component-changelog
