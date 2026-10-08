---
title: proseprompt
description: 'Muestra indicaciones de IA preconstruidas con copia de un solo clic e integración IDE.'
category: components
navigation.title: Prompt
links:
  - label: GitHub también
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/prose/Prompt.vue
---

@@pH000@@Uso del producto

Utilice el componente `prompt` para mostrar un prompt de IA preconstruido que los usuarios pueden copiar en su portapapeles o abrir directamente en su IDE. El `description` prop se muestra como la etiqueta visible, mientras que la ranura predeterminada contiene el texto del prompt que se copia.

::component-code{slug="prompt" prose}
---
Props:
  Descripción: Crea un diseño de panel con Nuxt UI.
  clase: 'w-full my-0'
Escondido:
  @003@clase
Los slots:
  Default:|
    Eres un experto en interfaz de usuario de Nuxt. Ayúdame a crear un diseño de panel de control con una barra lateral plegable y una barra de navegación superior adhesiva.

    Requisitos:
    - Use `UDashboardPanel`,`UDashboardSidebar` y `UDashboardNavbar`
    - Use símbolos de color semánticos como `bg-elevated` y `text-muted` para la tematización
    - La barra lateral debe incluir enlaces de navegación con iconos usando `UNavigationMenu`
    - La barra de navegación debe mostrar una ruta de navegación, un botón de búsqueda y un menú desplegable de usuario
    - El diseño debe ser totalmente receptivo y colapsar la barra lateral en el móvil
---
::

@@pH015@Icon

Utilice el prop `icon` para mostrar un icono al lado de la descripción.

::component-code{slug="prompt" prose}
---
Ignora:
  @@pH017@descripción
Escondido:
  @1800@clase
Props:
  Descripción: Crear un formulario con validación.
  Icono: i-lucide-file-pen-line (en inglés)
  clase: 'w-full my-0'
Los slots:
  Default:|
    Crear un formulario de registro con Nuxt UI con validación de esquema Zod.

    Requisitos:
    - Use `UForm` con un esquema Zod para la validación
    - Añadir `UFormField` envolviendo cada entrada: nombre (`UInput`), correo electrónico (`UInput` tipo de correo electrónico), función (`USelect` con opciones Admin, Editor, Viewer)
    - Incluir un envío `UButton` con estado de carga
    - Mostrar mensajes de error en línea debajo de cada campo
    - En caso de envío exitoso, muestre una notificación `UToast`
---
::

@@P031@Acciones

Utilice el prop `actions` para mostrar botones adicionales. El botón `copy` se muestra siempre. Las acciones disponibles son `cursor`,`windsurf` y `claude`.

::component-code{slug="prompt" prose}
---
Ignora:
  @@ph037@descripción
  @@icon 38
Escondido:
  @@39@clase
Props:
  Descripción: Añadir un modo de color.
  Icono: i-lucide-sun-moon
  Acciones:
    @@F0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
    @41@claude
  clase: 'w-full my-0'
Los slots:
  Default:|
    Agregue un modo de color a mi aplicación Nuxt.

    Requisitos:
    - Use `useColorMode` de `@nuxtjs/color-mode` para administrar el modo actual
    - Render un `UButton` con `variant="ghost"` que circula entre `light`,`dark` y `system` al hacer clic.
    - Actualizar el icono del botón dinámicamente:`i-lucide-sun` para la luz,`i-lucide-moon` para la oscuridad,`i-lucide-monitor` para el sistema
    - Añadir una información sobre herramientas usando `UTooltip` que muestre el modo activo actual
---
::

@5757 @

@@50000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000

Artículo siguienteComponentes {prose}

### Escenarios

Componentes: {prose}

@062 @@ Proyecto

Artículo siguiente{prose}

@@changelog

por: component-changelog {prefix="prose"}
