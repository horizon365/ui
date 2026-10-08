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

@@pH000@@Uso del producto

Utilice la ranura predeterminada para establecer la etiqueta del botón.

::component-code
---
Los slots:
  por defecto: Button
---
::

@0001@etiqueta

Utilice el prop `label` para establecer la etiqueta del botón.

::component-code
---
Props:
  Categoría: Button
---
::

@000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000

Utilice el prop `color` para cambiar el color del botón.

::component-code
---
Props:
  Color: Neutro
Los slots:
  por defecto: Button
---
::

@@500@Variante

Utilice el prop `variant` para cambiar la variante del botón.

::component-code
---
Props:
  Color: Neutral
  Categoría: Outline
Los slots:
  por defecto: Button
---
::

@0007@Nombre

Utilice el prop `size` para cambiar el tamaño del botón.

::component-code
---
Props:
  Tamaño: XL
Los slots:
  por defecto: Button
---
::

@009@Icon

Utilice el prop `icon` para mostrar un [Icon](/docs/components/icon) dentro del botón.

::component-code
---
Props:
  Archivo de la etiqueta: i-lucide-rocket
  Tamaño: MD
  Color: Primario
  Variante: Sólido
Los slots:
  por defecto: Button
---
::

Utilice los accesorios `leading` y `trailing` para establecer la posición del icono o los accesorios `leading-icon` y `trailing-icon` para establecer un icono diferente para cada posición.

::component-code
---
Props:
  Archivo de la etiqueta: i-lucide-arrow-right
  Tamaño: MD
Los slots:
  por defecto: Button
---
::

El `label` como accesorio o ranura es opcional, por lo que puede usar el botón como un botón de solo icono.

::component-code
---
Props:
  Icono: i-lucide-search
  Tamaño: MD
  Color: Primario
  Variante: Sólido
---
::

@200000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000

Utilice el prop `avatar` para mostrar un [Avatar](/docs/components/avatar) dentro del botón.

::component-code
---
Categoría: true
Ignora:
  - avatar.carga
Props:
  El avatar:
    src: 'https://github.com/nuxt.png'
    Categoría: Lazy
  Tamaño: MD
  Color: Neutral
  Categoría: Outline
Los slots:
  Default:|

    botón
---
::

El `label` como utilería o ranura es opcional, por lo que puede usar el botón como un botón solo para avatar.

::component-code
---
Categoría: true
Ignora:
  - avatar.carga
Props:
  El avatar:
    src: 'https://github.com/nuxt.png'
    Categoría: Lazy
  Tamaño: MD
  Color: Neutral
  Categoría: Outline
---
::

@29@enlace

Puede pasar cualquier propiedad del componente[Link](/docs/components/link#props)como`to`,`target`, etc.

::component-code
---
Ignora :
  @36@target en Español
Props :
  Dos :https://github.com/nuxt/ui
  Nombre : _ blank
Los slots :
  por defecto : Button
---
::

Cuando el botón es un enlace o cuando se utiliza el prop`active`, se puede utilizar el prop`active-color`y`active-variant`para personalizar el estado activo .

::component-code
---
Categoría : true
Ignora :
  @@pH040@color (Edición española)
  - variante
items :
  Activo :
    - primary (en inglés)
    @@443@secondary
    @@444@éxito
    @@45@info
    @@pH046@advertencia
    @@F047@error
    @@48000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
  Activación :
    @@pH049@@sólido
    @500000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
    @510000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
    @@50000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
    @@ghost05
    @@54@enlace
Props:
  Activo: Verdadero
  Color: Neutro
  Categoría: Outline
  Activo: Primario
  Actividad: Sólido
Los slots:
  Default:|

    Botón
---

botón
::

También puede utilizar los accesorios `active-class` y `inactive-class` para personalizar el estado activo.

::component-code
---
Props:
  Activo: Verdadero
  Categoría:'font-bold'
  Categoría:'font-light'
Los slots:
  por defecto: Button
---

Botón
::

::tip
Puede configurar estos estilos de forma global en su archivo `app.config.ts` bajo la tecla `ui.button.variants.active`.

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

@@70000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000

Utilice el prop `loading` para mostrar un icono de carga y desactivar el botón.

::component-code
---
Props:
  Carga: Verdad
  Trayectoria: Falso
Los slots:
  por defecto: Button
---
Botón
::

Utilice el prop `loading-auto` para mostrar el icono de carga automáticamente mientras la promesa `@click` está pendiente.

Ejemplo de componente {name="button-loading-auto-example"}

Esto también funciona con el componente [Form](/docs/components/form).

Ejemplo de componente {name="button-loading-auto-form-example"}

### Loading Icon (en inglés)

Utilice el prop `loading-icon` para personalizar el icono de carga. Prevalue a `i-lucide-loader-circle`.

::component-code
---
Props:
  Carga: Verdad
  LoadingIcon: 'i-lucide-loader'(en inglés)
Los slots:
  por defecto: Button
---
Botón
::

::framework-only
#nuxidad
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
Puede personalizar este icono de forma global en su `app.config.ts` bajo la tecla `ui.icons.loading`.
:::

#vista
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
Puede personalizar este icono de forma global en su `vite.config.ts` bajo la tecla `ui.icons.loading`.
:::
::

### Desactivado

Utilice el prop `disabled` para desactivar el botón.

::component-code
---
Props:
  Discapacidad: Verdadero
Los slots:
  por defecto: Button
---

Botón
::

@@pH093@Ejemplos

@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

Utilice el prop `class` para anular los estilos base del botón.

::component-code
---
Props:
  Archivo de la etiqueta: font-bold round-full
Los slots:
  por defecto: Button
---
::

@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

Utilice el prop `ui` para anular los estilos de ranuras del botón.

::component-code
---
Categoría: true
Ignora:
  @@pH100@uy
  @101 @ color
  @@2010@Variación
  @@pH103@icon
Props:
  Archivo de la etiqueta: i-lucide-rocket
  Color: Neutral
  Categoría: Outline
  UU.:
    leadingIcon: 'texto primario'
Los slots:
  Default:|

    botón
---
::

@@pH104

@500000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000

Componentes Props

::callout{icon="i-simple-icons-mdnwebdocs" to="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attributes" target="_blank"}
Este componente también soporta todos los atributos HTML nativos `<button>`.
::

::callout{icon="i-simple-icons-github" to="https://github.com/nuxt/ui/blob/v4/src/runtime/components/Link.vue#L13"}
El componente `Button` extiende el componente `Link`. Echa un vistazo al código fuente en GitHub.
::

@109@109@109

Componentes de slots

@110@@Proyecto

Componente Tema

@@111@Changelog

Categoría: component-changelog
