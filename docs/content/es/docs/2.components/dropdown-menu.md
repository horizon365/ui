---
title: DropdownMenú
description: Un menú para mostrar acciones al hacer clic en un elemento.
category: overlay
keywords:
  - menu
  - context menu
  - actions
links:
  - label: DropdownMenú
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/dropdown-menu
  - label: GitHub también
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/DropdownMenu.vue
---

@@pH000@@Uso del producto

Utilice un [Button](/docs/components/button) o cualquier otro componente en la ranura predeterminada del menú desplegable.

::component-code
---
Categoría: true
Colapso: Verdad
Ignora:
  @@0005@artículos
  @@ph006@ui.content
Externo:
  @@ph007@articles
Externalidades:
  @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
Props:
  items:
    - -etiqueta: benjamín
        El avatar:
          src: 'https://github.com/benjamincanac.png'
          Categoría: Lazy
        Tipo: Etiqueta
    - -etiqueta: Perfil
        Icono: i-lucide-usuario
      - label: Facturación
        i-lucide-credit-card (tarjeta de crédito)
      - label: Configuración
        Icono: i-lucide-cog
        kbd:
          @@pH013 @@'','
      - label: Atajos de teclado
        Icono: i-lucide-monitor
    - -etiqueta: Equipo
        icon: i-lucide-usuarios
        Filtro:
          placeholder: 'Buscar miembros...'
        niños:
          - -etiqueta: benjamincanac
              El avatar:
                src: 'https://github.com/benjamincanac.png'
                Categoría: Lazy
            - etiqueta: HugoRCD
              El avatar:
                src: 'https://github.com/HugoRCD.png'
                Categoría: Lazy
            - label: Atinux
              El avatar:
                src: 'https://github.com/atinux.png'
                Categoría: Lazy
            - etiqueta: romhml
              El avatar:
                src: 'https://github.com/romhml.png'
                Categoría: Lazy
            - label: sandros94
              El avatar :
                src : ' https://github.com/sandros94.png '
                Categoría : Lazy
            - label : J-Michalek (Edición española)
              El avatar :
                src : ' https://github.com/J-Michalek.png '
                Categoría : Lazy
            - label : hywax
              El avatar :
                src : ' https://github.com/hywax.png '
                Categoría : Lazy
      - label : Invitar usuarios
        icon : i-lucide - user-plus
        niños :
          - - etiqueta : Correo electrónico
              Icono : i-lucide - mail
            - label : Respuesta
              Icono : i-lucide - message-square
          - - etiqueta : Más información
              Icono : i-lucide - circle-plus
              niños :
                - label : Importar desde Slack
                  Icono : i-simple - icons-slack
                  Siguiente : https ://slack.com'
                  Nombre : _ blank
                - label: Importar desde Trello
                  Icono: i-simple-icons-trello
                - label: Importar desde Asana
                  Icono: i-simple-icons-asana (en inglés)
      - label: Nuevo equipo
        i-lucide-plus
        kbd:
          @31@meta
          @@pH032 @
    - -etiqueta: GitHub
        icon: i-simple-icons-github
        en: 'https://github.com/nuxt/ui'
        Nombre: _blank
      - label: Respuesta
        Icono: i-lucide-life-buoy
        en: /docs/components/menú desplegable
      - label: API (Edición española)
        Icono: i-lucide-cloud
        Discapacidad: Verdadero
    - -etiqueta: Inicio de sesión
        Icono: i-lucide-log-out
        Color: El error
        kbd:
          @37@shift
          @38@meta
          @@pH039
Los slots:
  Default:|

    @@ 40 @
---

Botón {icon="i-lucide-menu" color="neutral" variant="outline"}
::

@@42000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000

Utilice el prop `items` como una matriz de objetos con las siguientes propiedades:

@@
@@
@@
@@
@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
- [`checked?: boolean`{lang="ts-type"}](#with-checkbox-items)
@@@ph077@@@ph078@@@ph079
@@@ph080@@@@ph082@@@@ph081@@@ph086@@@ph083@@@@ph084@@@@ph085
@@
- [`onUpdateChecked?: (checked: boolean) => void`{lang="ts-type"}](#with-checkbox-items)
@@
- [`filter?: boolean | InputProps`{lang="ts-type"}](#with-filter-items)
@@@ph107@@@ph108@@ph109 @
@110@@111@112
@@113@@114@115
@116@@117@118

Puede pasar cualquier propiedad del componente [Link](/docs/components/link#props) como `to`,`target`, etc.

::component-code
---
Categoría: true
Colapso: Verdad
Ignora:
  @125 @ puntos
  @@ph126@ui.contenido
Externo:
  @127 @ artículos
Externalidades:
  @@2008@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
Props:
  Items:
    - -etiqueta: Benjamin
        El avatar:
          src: 'https://github.com/benjamincanac.png'
          Categoría: Lazy
        Tipo: Etiqueta
    - -etiqueta: Perfil
        Icono: i-lucide-usuario
      - label: Facturación
        i-lucide-credit-card (tarjeta de crédito)
      - label: Configuración
        Icono: i-lucide-cog
        kbd:
          @133 @@'',''.
      - label: Atajos de teclado
        Icono : i-lucide - monitor
    - - etiqueta : Equipo
        icon : i-lucide - usuarios
      - label : Invitar usuarios
        icon : i-lucide - user-plus
        niños :
          - - etiqueta : Correo electrónico
              Icono : i-lucide - mail
            - label : Respuesta
              Icono : i-lucide - message-square
          - - etiqueta : Más información
              Icono : i-lucide - circle-plus
              niños :
                - label : Importación desde Slack
                  Icono : i-simple - icons-slack
                  Siguiente : https ://slack.com'
                  Nombre : _ blank
                - label : Importar desde Trello
                  Icono : i-simple - icons-trello
                - label : Importar desde Asana
                  Icono : i-simple - icons-asana (en inglés)
      - label : Nuevo equipo
        i-lucide - plus
        kbd :
          @44@meta
          @145
    - -etiqueta: GitHub
        icon: i-simple-icons-github
        en: 'https://github.com/nuxt/ui'
        Nombre: _blank
      - label: Respuesta
        Icono: i-lucide-life-buoy
        en: /docs/components/menú desplegable
      - label: API (Edición española)
        Icono: i-lucide-cloud
        Discapacidad: Verdadero
    - -etiqueta: Inicio de sesión
        Icono: i-lucide-log-out
        kbd:
          @150000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
          @151 @ meta
          @@252@q
  UU.:
    Contenido: 'W-48'
Los slots:
  Default:|

    @@@ 153 @
---

Botón {icon="i-lucide-menu" color="neutral" variant="outline"}
::

::note
También puede pasar un array de arrays a la prop `items` para crear grupos separados de elementos.
::

::tip
Cada elemento puede tomar un array `children` de objetos con las mismas propiedades que el prop `items` para crear un menú anidado que se puede controlar utilizando las propiedades `open`,`defaultOpen` y `content`.
::

@@161@Contenido

Utilice el prop `content` para controlar cómo se representa el contenido del menú desplegable, como su `align` o `side`, por ejemplo.

::component-code
---
Categoría: true
Colapso: Verdad
Ignora:
  @165 @ puntos
  @@ph166@ui.contenido
Externo:
  @167@artículos
Externalidades:
  - DropdownMenuItem [en inglés]
Items:
  content.align:
    @169 @ Inicio
    @170000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
    @171 @@ Inicio
  content.side:
    @2017@derecha
    @173 @ izquierda
    @174@Top (Edición española)
    @175 @ abajo
Props:
  Items:
    - label: Perfil de usuario
      Icono: i-lucide-usuario
    - label: Facturación
      i-lucide-credit-card (tarjeta de crédito)
    - label: Configuración
      Icono: i-lucide-cog
  Contenido:
    Categoría: Start
    Categoría: Bottom
    Desplazamiento: 8
  UU.:
    Contenido: 'W-48'
Los slots:
  Default:|

    @179 @
---

Botón {label="Open" icon="i-lucide-menu" color="neutral" variant="outline"}
::

### Filtro: badge{label="4.6+" class="align-text-top"}

Utilice el prop `filter` para mostrar una entrada de filtro dentro del menú desplegable. Por defecto a `false`.

::note{to="#with-ignore-filter"}
Utilice el `ignore-filter` prop para desactivar la búsqueda interna y utilizar su propia lógica de búsqueda.
::

::note{to="#with-filter-fields"}
Utilice el prop `filter-fields` para especificar por qué campos filtrar. De forma predeterminada, utiliza el prop `labelKey`.
::

Puede pasar cualquier propiedad del componente [Input](/docs/components/input) para personalizarlo.

::component-code
---
Categoría: true
Colapso: Verdad
Ignora:
  @2019@artículos
  - filter.icon
  - content.align (en inglés)
  - ui.contenido
Externo:
  @@196@artículos
Externalidades:
  - DropdownMenuItem [en inglés]
Props:
  Filtro:
    Icono: i-lucide-search
  items:
    - label: Perfil de usuario
      Icono: i-lucide-usuario
    - label: Facturación
      i-lucide-credit-card (tarjeta de crédito)
    - label: Configuración
      Icono: i-lucide-cog
    - label: Equipo
      icon: i-lucide-usuarios
    - label: Invitar usuarios
      icon: i-lucide-user-plus
    - label: Nuevo equipo
      i-lucide-plus
  Contenido:
    Categoría: Start
  UU.:
    Contenido: 'W-48'
Los slots:
  Default:|

    @204 @
---

Botón {label="Open" icon="i-lucide-menu" color="neutral" variant="outline"}
::

::tip{to="#with-filter-items"}
También puede habilitar el filtro en submenús específicos utilizando el campo `filter` en elementos con `children`.
::

@208@Flecha

Utilice el prop `arrow` para mostrar una flecha en el menú desplegable.

::component-code
---
Categoría: true
Colapso: Verdad
Ignora:
  @210 @@ Dirección
  @211@artículos
  - ui.contenido
Externo:
  @213@artículos
Externalidades:
  @@214@@@DropdownMenuItem [en inglés]
Props:
  Arrow: Verdad
  items:
    - label: Perfil de usuario
      Icono: i-lucide-usuario
    - label: Facturación
      i-lucide-credit-card (tarjeta de crédito)
    - label: Configuración
      Icono: i-lucide-cog
  UU.:
    Contenido: 'W-48'
Los slots:
  Default:|

    @218 @
---

Botón {label="Open" icon="i-lucide-menu" color="neutral" variant="outline"}
::

@220@220@220@220@220@22020

Utilice el prop `size` para controlar el tamaño del menú desplegable.

::component-code
---
Categoría: true
Colapso: Verdad
Ignora:
  @222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222220000000000
  - content.align
  @@224@224@224@224@224@224@224@224@224@224@224@224@224@224@224@2224@2224@224@224@24@24@24@24@2224@24@24@24@24@24@224@224@24@224@24@24@24@224@24@2224@24@224@24@224@224@224@224@224@2224@224@22224@2224@2222224@22222@2222222@222222@22222@222222@2222222222
Externo:
  @225@artículos
Externalidades:
  @@226@226@226@226@226@226@226@226@226@226@226@226@226@226@226@2226@2226@226@226@226@2226@226@226@2226@226@226@2226@2226@22226@22226@22226@222226@222226@222226@222226@222226@2222226@222222226@22222222226@22222222222226@2222222222226@222222222222222222
Props:
  Tamaño: xl
  Items:
    - label: Perfil de usuario
      Icono: i-lucide-usuario
    - label: Facturación
      i-lucide-credit-card (tarjeta de crédito)
    - label: Configuración
      Icono: i-lucide-cog
  Contenido:
    Categoría: Start
  UU.:
    Contenido: 'W-48'
Los slots:
  Default:|

    @@ 230 @
---

Botón {size="xl" label="Open" icon="i-lucide-menu" color="neutral" variant="outline"}
::

::warning
El `size` prop no se asignará al botón, debe configurarlo usted mismo.
::

::note
Cuando se utiliza el mismo tamaño, los elementos del menú desplegable estarán perfectamente alineados con el botón.
::

@@233@Modal (Edición española)

Utilice el prop `modal` para controlar si el menú desplegable bloquea la interacción con el contenido externo.

::component-code
---
Categoría: true
Colapso: Verdad
Ignora:
  @236@artículos
  @@ph237@ui.contenido
Externo:
  @238@artículos
Externalidades:
  @@239@@@Despedida [editar]
Props:
  Modalidad: Falso
  items:
    - label: Perfil de usuario
      Icono: i-lucide-usuario
    - label: Facturación
      i-lucide-credit-card (tarjeta de crédito)
    - label: Configuración
      Icono: i-lucide-cog
  UU.:
    Contenido: 'W-48'
Los slots:
  Default:|

    @243
---

Botón {label="Open" icon="i-lucide-menu" color="neutral" variant="outline"}
::

### Desactivado

Utilice el prop `disabled` para desactivar el menú desplegable.

::component-code
---
Categoría: true
Colapso: Verdad
Ignora:
  @247 @ artículos
  - ui.contenido
Externo:
  @249@artículos
Externalidades:
  - DropdownMenuItem [en inglés]
Props:
  Discapacidad: Verdadero
  items:
    - label: Perfil de usuario
      Icono: i-lucide-usuario
    - label: Facturación
      i-lucide-credit-card (tarjeta de crédito)
    - label: Configuración
      Icono: i-lucide-cog
  UU.:
    Contenido: 'W-48'
Los slots:
  Default:|

    @254 @
---

Botón {label="Open" icon="i-lucide-menu" color="neutral" variant="outline"}
::

@256 Ejemplos

### Con elementos de casilla

Puede utilizar la propiedad `type` con `checkbox` y utilizar las propiedades `checked`/`onUpdateChecked` para controlar el estado comprobado del elemento.

::component-example
---
Colapso: Verdad
Nombre: 'menú desplegable-checkbox-items-example'
---
::

::note
Para garantizar la reactividad para el estado de los elementos `checked`, se recomienda envolver su array `items` dentro de un `computed`.
::

### Con artículos de color

Puede utilizar la propiedad `color` para resaltar ciertos elementos con un color.

::component-example
---
Colapso: Verdad
Nombre: 'menu-desplegable-color-items-ejemplo'
---
::

### Con los elementos de filtro: badge{label="4.6+" class="align-text-top"}

Puede utilizar la propiedad `filter` en elementos con `children` para mostrar una entrada de filtro dentro del submenú.

::component-example
---
Colapso: Verdad
Nombre del archivo: 'drop-menu-filter-items-example'
---
::

### Estado abierto de control

Puede controlar el estado abierto utilizando la directiva `default-open` o la directiva `v-model:open`.

::component-example
---
Colapso: Verdad
Nombre del archivo: 'dropdown-menu-open-example'
---
::

::note
En este ejemplo, aprovechando [`defineShortcuts`](/docs/composables/define-shortcuts), puede alternar el menú desplegable presionando: kbd{value="O"}.
::

### Con slot personalizado

Utilice la propiedad `slot` para personalizar un elemento específico.

Tendrás acceso a las siguientes slots:

@@282@@283@284
@@285@@286@287
@288@@289@289@290
@@291@@@292@293

::component-example
---
Colapso: Verdad
Nombre: 'dropdown-menu-custom-slot-example'
---
::

::tip{to="#slots"}
También puede utilizar las ranuras `#item`,`#item-leading`,`#item-label` y `#item-trailing` para personalizar todos los elementos.
::

### Con cambio en los artículos

Puede utilizar la propiedad `slot` con una ranura `#{{ slot }}-trailing` para representar un [Switch](/docs/components/switch) dentro de un elemento.

::component-example
---
Colapso: Verdad
Nombre del archivo: 'dropdown-menu-switch-items-example'
---
::

### Con ignorar el filtro: badge{label="4.6+" class="align-text-top"}

Cuando se utiliza el `filter` prop o el `filter` campo en los elementos con `children`, se puede establecer el `ignore-filter` prop a `true` para desactivar la búsqueda interna y utilizar su propia lógica de búsqueda.

::component-example
---
Colapso: Verdad
Nombre del archivo: 'dropdown-menu-ignore-filter-example'
---
::

::note
Este ejemplo utiliza [`refDebounced`](https://vueuse.org/shared/refDebounced/#refdebounced) para desacreditar las llamadas a la API. El fetch se difiere con `immediate: false` por lo que no se realiza ninguna solicitud hasta que se abra el menú.
::

### Con los campos de filtro: badge{label="4.6+" class="align-text-top"}

Cuando se utiliza el prop `filter` o el campo `filter` en elementos con `children`, puede establecer el prop `filter-fields` con una matriz de campos para filtrar.

::component-example
---
Colapso: Verdad
Nombre: 'menu-desplegable-filter-fields-ejemplo'
---
::

### Con ancho de contenido de disparo

Puede ampliar el contenido a todo el ancho de su botón añadiendo la clase `w-(--reka-dropdown-menu-trigger-width)` en la ranura `ui.content`.

::component-example
---
Colapso: Verdad
Nombre del archivo: 'dropdown-menu-content-width-example'
---
::

::tip
También puede cambiar el ancho de contenido globalmente en su `app.config.ts`:

```
export default defineAppConfig({
  ui: {
    dropdownMenu: {
      slots: {
        content: 'w-(--reka-dropdown-menu-trigger-width)'
      }
    }
  }
})
```
::

### Extracto de accesos directos

Utilice la utilidad [extractShortcuts](/docs/composables/extract-shortcuts) para definir automáticamente accesos directos de elementos de menú con una propiedad `kbds`. Extrae recursivamente accesos directos y devuelve un objeto compatible con [defineShortcuts](/docs/composables/define-shortcuts).

```vue
<script setup lang="ts">
import type { DropdownMenuItem } from '@nuxt/ui'

const items: DropdownMenuItem[] = [{
  label: 'Invite users',
  icon: 'i-lucide-user-plus',
  children: [{
    label: 'Invite by email',
    icon: 'i-lucide-send-horizontal',
    kbds: ['meta', 'e'],
    onSelect() {
      console.log('Invite by email clicked')
    }
  }, {
    label: 'Invite by link',
    icon: 'i-lucide-link',
    kbds: ['meta', 'i'],
    onSelect() {
      console.log('Invite by link clicked')
    }
  }]
}, {
  label: 'New team',
  icon: 'i-lucide-plus',
  kbds: ['meta', 'n'],
  onSelect() {
    console.log('New team clicked')
  }
}]

defineShortcuts(extractShortcuts(items))
</script>
```

::note
En este ejemplo,: kbd{value="meta"}: kbd{value="E" class="ms-px"},: kbd{value="meta"}: kbd{value="I" class="ms-px"} y: kbd{value="meta"}: kbd{value="N" class="ms-px"} activarían la función `select` del elemento correspondiente.
::

@@p391 @

@392@2000 puntos

Componentes Props

@@393@393@393@393

Componentes de slots

@394@@Emisiones

Componentes Emisiones

@395

Componente Tema

@396@Changelog

Categoría: component-changelog
