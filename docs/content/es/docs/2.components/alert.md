---
description: Una llamada para llamar la atención del usuario.
category: element
keywords:
  - notice
  - inline notification
links:
  - label: GitHub también
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Alert.vue
---

@@pH000@@Uso del producto

@0001@Título

Utilice el prop `title` para establecer el título de la alerta.

::component-code
---
Props:
  Título:¡ Arriba la cabeza!
---
::

@@pH003@Descripción

Utilice el prop `description` para establecer la descripción de la Alerta.

::component-code
---
Categoría: true
Props:
  Título:¡ Arriba la cabeza!
  Descripción:"Puede cambiar el color principal en la configuración de la aplicación."
---
::

@@pH005@Icon

Utilice el prop `icon` para mostrar un [Icon](/docs/components/icon).

::component-code
---
Categoría: true
Ignora:
  @@111@title
  @@ph012@descripción
Props:
  Título:¡ Arriba la cabeza!
  Descripción:"Puede cambiar el color principal en la configuración de la aplicación."
  Icono: 'i-lucide-terminal'
---
::

@13@avatar

Utilice el prop `avatar` para mostrar un [Avatar](/docs/components/avatar).

::component-code
---
Categoría: true
Ignora:
  @19@title
  @@ph020@descripción
Props:
  Título:¡ Arriba la cabeza!
  Descripción:"Puede cambiar el color principal en la configuración de la aplicación."
  avatar. src: 'https://github.com/nuxt.png'
---
::

@@21@color

Utilice el prop `color` para cambiar el color de la alerta.

::component-code
---
Categoría: true
Ignora:
  @@23@título
  @@24@Descripción
  @@25@icon
Props:
  Color: Neutro
  Título:¡ Arriba la cabeza!
  Descripción:"Puede cambiar el color principal en la configuración de la aplicación."
  Icono: 'i-lucide-terminal'
---
::

@@26@Variación

Utilice el prop `variant` para cambiar la variante de la alerta.

::component-code
---
Categoría: true
Ignora:
  @28@title
  @@ph029@descripción
  @@pH030@icon
Props:
  Color: Neutral
  Variación: Sutil
  Título:¡ Arriba la cabeza!
  Descripción:"Puede cambiar el color principal en la configuración de la aplicación."
  Icono: 'i-lucide-terminal'
---
::

@31@@Cerrar

Utilice el `close` prop para mostrar un [Button](/docs/components/button) para descartar la alerta.

::tip
Se emitirá un evento `update:open` cuando se haga clic en el botón cerrar.
::

::component-code
---
Categoría: true
Ignora:
  @38@title
  @@ph039@descripción
  @400000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
  @41@color
  @@2004@Variación
Props:
  Título:¡ Arriba la cabeza!
  Descripción:"Puede cambiar el color principal en la configuración de la aplicación."
  Color: Neutro
  Categoría: Outline
  Cerrado: Verdad
---
::

Puede pasar cualquier propiedad del componente [Button](/docs/components/button) para personalizarlo.

::component-code
---
Categoría: true
Ignora:
  @@47@title
  @@ph048@descripción
  - close.color (en inglés)
  - close.variante
  @@5000@color
  @@52@Variación
Props:
  Título:¡ Arriba la cabeza!
  Descripción:"Puede cambiar el color principal en la configuración de la aplicación."
  Color: Neutral
  Categoría: Outline
  Cerrado:
    Color: Primario
    Categoría: Outline
    Categoría:"Round-full"
---
::

### Cerrar Icono

Utilice el prop `close-icon` para personalizar el botón de cierre [Icon](/docs/components/icon).

::component-code
---
Categoría: true
Ignora:
  @@pH060@título
  @@ph061@descripción
  @2006@Cerrar
  @@pH063@color (Edición española)
  - Variación
Props:
  Título:¡ Arriba la cabeza!
  Descripción:"Puede cambiar el color principal en la configuración de la aplicación."
  Color: Neutro
  Categoría: Outline
  Cerrado: Verdad
  Icono: 'i-lucide-arrow-right'
---
::

::framework-only
#Nuxidad
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
You can customize this icon globally in your `app.config.ts` under `ui.icons.close` key.
:::

#vista
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
Puede personalizar este icono de forma global en su `vite.config.ts` bajo la tecla `ui.icons.close`.
:::
::

@@pH069@@Acciones

Utilice el prop `actions` para añadir algunas acciones [Button](/docs/components/button) a la alerta.

::component-code
---
Categoría: true
Ignora:
  @@75@título
  @@76@acciones
  @777@color
  - Variante
Props:
  Título:¡ Arriba la cabeza!
  Descripción:"Puede cambiar el color principal en la configuración de la aplicación."
  Color: Neutro
  Categoría: Outline
  Acciones:
    - label: Acción 1
    - label: Acción 2
      Color: Neutral
      Variación: Sutil
---
::

@081@Orientación

Utilice el prop `orientation` para cambiar la orientación de la alerta.

::component-code
---
Categoría: true
Ignora:
  @083@title (Edición española)
  @@84@acciones
  @085@color
  - Variación
Props:
  Título:¡ Arriba la cabeza!
  Descripción:"Puede cambiar el color principal en la configuración de la aplicación."
  Color: Neutro
  Categoría: Outline
  Orientación: Horizontal
  Acciones:
    - label: Acción 1
    - label: Acción 2
      Color: Neutro
      Variación: Sutil
---
::

@@ph089@Ejemplos

@@@@ph090@@@ph091

Utilice el prop `class` para anular los estilos base de la Alerta.

::component-code
---
Categoría: true
Ignora:
  @@pH093@título
  @@ph094@descripción
Props:
  Título:¡ Arriba la cabeza!
  Descripción:"Puede cambiar el color principal en la configuración de la aplicación."
  Categoría:'rounded-none'
---
::

@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

Utilice el prop `ui` para anular los estilos de ranuras de la Alerta.

::component-code
---
Categoría: true
Ignora:
  @098
  @099 @ Título
  @@ph100@descripción
  @101@icon
Props:
  Título:¡ Arriba la cabeza!
  Descripción:"Puede cambiar el color principal en la configuración de la aplicación."
  Archivo de la etiqueta: i-lucide-rocket
  UU.:
    Icono: 'Tamaño-11'
---
::

@P2002 @

@300000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000

Componentes Props

@104@104@104

Componentes de slots

@105 @@ Emisiones

Componentes Emisiones

@106 @@ Proyecto

Componente Tema

@107@Changelog

Categoría: component-changelog
