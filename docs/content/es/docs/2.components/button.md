---
description: Un elemento de botón que puede actuar como un enlace o desencadenar una acción.
category: element
keywords:
  - cta
  - action
  - btn
links:
  - label: GitHub también
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Button.vue
---

xph0000xUso

Utilice la ranura predeterminada para establecer la etiqueta del botón.

::component-code
---
slots:
  default: Button
---
::

### Label

Utilice el prop `label` para establecer la etiqueta del botón.

::component-code
---
props:
  label: Button
---
::

### Color (Edición española)

Utilice el prop `color` para cambiar el color del botón.

::component-code
---
props:
  color: neutral
slots:
  default: Button
---
::

### Variante

Utilice el prop `variant` para cambiar la variante del botón.

::component-code
---
props:
  color: neutral
  variant: outline
slots:
  default: Button
---
::

### Tamaño

Utilice el prop `size` para cambiar el tamaño del botón.

::component-code
---
props:
  size: xl
slots:
  default: Button
---
::

### Icon

Utilice el prop `icon` para mostrar un [Icon](/docs/components/icon) dentro del botón.

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

Utilice los accesorios `leading` y `trailing` para establecer la posición del icono o los accesorios `leading-icon` y `trailing-icon` para establecer un icono diferente para cada posición.

::component-code
---
props:
  trailingIcon: i-lucide-arrow-right
  size: md
slots:
  default: Button
---
::

El `label` como accesorio o ranura es opcional, por lo que puede usar el botón como un botón de solo icono.

::component-code
---
props:
  icon: i-lucide-search
  size: md
  color: primary
  variant: solid
---
::

### Avatar en Español

Use the `avatar` prop to show an [Avatar](/docs/components/avatar) inside the Button.

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

El `label` como accesorio o ranura es opcional, por lo que puede usar el botón como un botón solo para avatar.

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

### Link (Edición española)

You can pass any property from the [Link](xph110) component such as `to`, `target`, etc.

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

Cuando el botón es un enlace o cuando se utiliza el prop `active`, puede utilizar los props `active-color` y `active-variant` para personalizar el estado activo.

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

Botón
::

También puede utilizar los accesorios `active-class` y `inactive-class` para personalizar el estado activo.

::component-code
---
props:
  active: true
  activeClass: 'font-bold'
  inactiveClass: 'font-light'
slots:
  default: Button
---

botón
::

::tip
Puede configurar estos estilos de forma global en su archivo `app.config.ts` bajo la clave `ui.button.variants.active`.

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

### Cargando

Utilice el accesorio `loading` para mostrar un icono de carga y desactivar el botón.

::component-code
---
props:
  loading: true
  trailing: false
slots:
  default: Button
---
botón
::

Utilice el prop `loading-auto` para mostrar el icono de carga automáticamente mientras la promesa `@click` está pendiente.

:component-example{name="button-loading-auto-example"}

Esto también funciona con el componente [Form](/docs/components/form).

:component-example{name="button-loading-auto-form-example"}

### Loading Icon (en inglés)

Utilice el prop `loading-icon` para personalizar el icono de carga.

::component-code
---
props:
  loading: true
  loadingIcon: 'i-lucide-loader'
slots:
  default: Button
---
Botón
::

::framework-only
#nuxt
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
Puede personalizar este icono globalmente en su `app.config.ts` bajo la tecla `ui.icons.loading`.
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
Puede personalizar este icono globalmente en su Xph210x bajo la tecla Xph211x.
:::
::

### Disabled

Utilice el prop `disabled` para desactivar el botón.

::component-code
---
props:
  disabled: true
slots:
  default: Button
---

Botón
::

## Ejemplos

### x`class`xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

Utilice el prop `class` para anular los estilos base del botón.

::component-code
---
props:
  class: 'font-bold rounded-full'
slots:
  default: Button
---
::

### x`ui` Prop (Edición española)

Utilice el prop `ui` para anular los estilos de ranuras del botón.

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

## API (Versión)

### Props (accesorios)

:component-props

::callout{icon="i-simple-icons-mdnwebdocs" to="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attributes" target="_blank"}
Este componente también soporta todos los atributos HTML `<button>` nativos.
::

::callout{icon="i-simple-icons-github" to="https://github.com/nuxt/ui/blob/v4/src/runtime/components/Link.vue#L13"}
El componente `Button` extiende el componente `Link`.Echa un vistazo al código fuente en GitHub.
::

### Slots en línea

:component-slots

## Temas

:component-theme

## Changelog (Edición española)

:component-changelog
