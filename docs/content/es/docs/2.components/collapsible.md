---
description: Un elemento plegable para alternar la visibilidad de su contenido.
category: element
keywords:
  - disclosure
  - expand
links:
  - label: El Collapsible
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/collapsible
  - label: GitHub también
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Collapsible.vue
---

@@pH000@@Uso del producto

Utilice un [Button](/docs/components/button) o cualquier otro componente en la ranura predeterminada del Collapsible.

A continuación, utilice la ranura `#content` para añadir el contenido que se muestra cuando el Collapsible está abierto.

::component-code
---
Categoría: true
Ignora:
  @06@clase
Props:
  clase: 'flex flex-col gap-2 w-48'
Los slots:
  Default:|

    @@@ 007 @

  Contenido:|

    @@ 008 @
---

El botón {label="Open" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-down" block}

#contenido
por placeholder{class="h-48"}
::

@111@@ununmount

Utilice el prop `unmount-on-hide` para evitar que el contenido se desmonte cuando se colapsa el Colapsible.

::component-code
---
Categoría: true
Ignora:
  @@clase014
Props:
  Desconocido: Falso
  clase: 'flex flex-col gap-2 w-48'
Los slots:
  Default:|

    @@@ 15 @

  Contenido:|

    @@@ 16 @
---

por: u-button {label="Open" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-down" block}

#Contenido
por placeholder{class="h-48"}
::

::note
Puede inspeccionar el DOM para ver el contenido que se representa.
::

@@pH019@@desactivado

Utilice el `disabled` prop para desactivar el Colapsable.

::component-code
---
Categoría: true
Ignora:
  @@21@clase
Props:
  clase: 'flex flex-col gap-2 w-48'
  Discapacidad: Verdadero
Los slots:
  Default:|

    @22

  Contenido:|

    @@ 23 @
---

Botón {label="Open" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-down" block}

#Contenido
por placeholder{class="h-48"}
::

@@26000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000

### Control estado abierto

Puede controlar el estado abierto utilizando la prop `default-open` o la directiva `v-model:open`.

::component-example
---
Nombre: 'collapsible-open-exemple'
---
::

::note
En este ejemplo, aprovechando [`defineShortcuts`](/docs/composables/define-shortcuts), puede alternar el Colapsable presionando: kbd{value="O"}.
::

::tip
Esto le permite mover el disparador fuera del Collapsible o eliminarlo por completo.
::

### Con icono rotativo

Aquí hay un ejemplo con un icono giratorio en el botón que indica el estado abierto del Collapsible.

::component-example
---
Nombre: 'collapsible-icon-example'
---
::

@@pH037@@pH037

@380@38000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000

Componentes Props

@@39@39@39

Componentes de slots

@@40000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000

Componentes Emisiones

@410000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000

Componente Tema

@@2004@Changelog

Categoría: component-changelog
