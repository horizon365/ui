---
description: 'Un componente para mostrar un estado vacío.'
category: data
keywords:
  - no data
  - placeholder
  - zero state
links:
  - label: GitHub también
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Empty.vue
---

@@pH000@@Uso del producto

Utilice el componente Vacío para mostrar un estado de marcador de posición cuando no hay contenido que mostrar.

::code-preview

:::u-empty
---
Archivo: i-lucide-file
Título: No se encontraron proyectos
Descripción: Parece que no has añadido ningún proyecto. Crea uno para empezar.
Acciones:
  - icon: i-lucide-plus
    Etiqueta: crear nuevo
  - icon: i-lucide-refresh-cw
    Categoría: Refresh
    Color: Neutro
    Variación: Sutil
---
:::

::

@@pH0003@title (Edición española)

Utilice la prop `title` para establecer el título del estado vacío.

::component-code
---
Props:
  Categoría: No se encontraron proyectos
---
::

@@pH005@Descripción

Utilice la prop `description` para establecer la descripción del estado vacío.

::component-code
---
Categoría: true
Ignora:
  @007@title
Props:
  Categoría: No se encontraron proyectos
  Descripción: Parece que no has añadido ningún proyecto. Crea uno para empezar.
---
::

@008@Icon

Utilice el prop `icon` para establecer el icono del estado vacío.

::component-code
---
Categoría: true
Ignora:
  @@10000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
  @@pH011@descripción
Props:
  Archivo: i-lucide-file
  Categoría: No se encontraron proyectos
  Descripción: Parece que no has añadido ningún proyecto. Crea uno para empezar.
---
::

@12@avatar

Utilice el prop `avatar` para establecer el avatar del estado vacío.

::component-code
---
Categoría: true
Ignora:
  @@icon
  @@15@título
  @@ph016@descripción
Props:
  avatar. src: 'https://github.com/nuxt.png'
  Category: No projects found
  Descripción: Parece que no has añadido ningún proyecto. Crea uno para empezar.
---
::

### Cargando: badge{label="4.10+" class="align-text-top"}

Utilice el prop `loading` para mostrar un icono de carga en lugar del icono. El diseño se mantiene idéntico, por lo que puede alternar entre los estados de carga y vacío sin cambios de diseño.

::component-code
---
Categoría: true
Ignora:
  @200000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
  @@21@título
  @@ph022@descripción
Props:
  Archivo: i-lucide-file
  Carga: Verdad
  Titre: Chargement de projets
  Descripción: Por favor, espere mientras recogemos sus proyectos.
---
::

### Icono de carga: badge{label="4.10+" class="align-text-top"}

Utilice el prop `loading-icon` para personalizar el icono de carga. Prevalue a `i-lucide-loader-circle`.

::component-code
---
Categoría: true
Ignora:
  @27@icon
  @28@title
  @@ph029@descripción
  @300000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
Props:
  Archivo: i-lucide-file
  Carga: Verdad
  LoadingIcon: 'i-lucide-loader'(en inglés)
  Título: Carga de Proyectos
  Descripción: Por favor espere mientras recogemos sus proyectos.
---
::

::framework-only
#Nuxidad
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
Puede personalizar este icono de forma global en su `app.config.ts` bajo la tecla `ui.icons.loading`.
:::

#vista
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
Puede personalizar este icono de forma global en su `vite.config.ts` bajo la tecla `ui.icons.loading`.
:::
::

@@P035@Acciones

Utilice el prop `actions` para añadir algunas acciones [Button](/docs/components/button) al estado vacío.

::component-code
---
Categoría: true
Ignora:
  @@icon 41
  @@2004@título
  @@ph043@descripción
  @@44@acciones
Props:
  Archivo: i-lucide-file
  Category: No projects found
  Descripción: Parece que no has añadido ningún proyecto. Crea uno para empezar.
  Acciones:
    - icon: i-lucide-plus
      Etiqueta: crear nuevo
    - icon: i-lucide-refresh-cw
      Categoría: Refresh
      Color: Neutral
      Variación: Sutil
---
::

@@47@Variación

Utilice la prop `variant` para cambiar la variante del estado vacío.

::component-code
---
Categoría: true
Ignora:
  @49@icon
  @@50000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
  @@ph051@descripción
  @@52@acciones
Props:
  Categoría: Desnudo
  Icono: i-lucide-bell
  Título: Sin notificaciones
  Descripción: Todos están al día. Las nuevas notificaciones aparecerán aquí.
  Acciones:
    - icon: i-lucide-refresh-cw
      Categoría: Refresh
      Color: Neutro
      Variación: Sutil
---
::

@@50000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000

Utilice la prop `size` para cambiar el tamaño del estado vacío.

::component-code
---
Categoría: true
Ignora:
  @@icon 56
  @@507@título
  @@pH058@descripción
  @@59@acciones
Props:
  Tamaño: XL
  Icono: i-lucide-bell
  Título: Sin notificaciones
  Descripción: Todos están al día. Las nuevas notificaciones aparecerán aquí.
  Acciones:
    - icon: i-lucide-refresh-cw
      Categoría: Refresh
      Color: Neutro
      Variación: Sutil
---
::

@@ph061@@Ejemplos

### Con ranuras

Utilice las ranuras disponibles para crear un estado vacío más complejo.

::component-example
---
Colapso: Verdad
Nombre: 'empty-slots-example'
---
::

@@pH063

@@pH064@@Propuestas

Componentes Props

@@P065@@Escenarios

Componentes de slots

@@666@@Proyecto

Componente Tema

@@changelog

Categoría: component-changelog
