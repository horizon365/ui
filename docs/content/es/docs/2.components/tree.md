---
description: Un componente de vista de árbol para mostrar e interactuar con estructuras de datos jerárquicas.
category: data
keywords:
  - file tree
  - hierarchy
  - folder tree
links:
  - label: Árbol
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/tree
  - label: GitHub también
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Tree.vue
---

@@pH000@@Uso del producto

Utilice el componente Árbol para mostrar una estructura jerárquica de elementos.

::component-code
---
Colapso: Verdad
Escondido:
  @001@clase
Ignora:
  @@2002@artículos
Externo:
  @@pH000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
Externalidades:
  @@F004@F004 [en línea]
Props:
  Items:
    - label:'aplicación/'
      defaultExpanded: verdadero
      niños:
        - label:'composables/'
          niños:
            - label:'useAuth. ts'
              icon: 'i-vscode-icons-file-type-typescript'
            - label:'UseUser.es'
              icon: 'i-vscode-icons-file-type-typescript'
        - label:'componentes/'
          defaultExpanded: verdadero
          niños:
            - label:'Tarjeta. vista'
              icon: 'i-vscode-icons-file-type-vue'
            - label:'Botón. vue'
              icon: 'i-vscode-icons-file-type-vue'
    - label:'aplicación. vue'
      icon: 'i-vscode-icons-file-type-vue'
    - label:'nuxt. config. ts'
      icon: 'i-vscode-icons-file-type-nuxt'
  Categoría: W-60
---
::

@140000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000

Utilice el prop `items` como una matriz de objetos con las siguientes propiedades:

@@
@@
@@
@@
@@
@@
@@
@@
@@
@@
@@

::note
Se requiere un identificador único para cada ítem. El componente utilizará el `label` prop como identificador si no se proporciona `get-key`. Idealmente, debe proporcionar un `get-key` función prop para devolver un identificador único. Alternativamente, puede usar el `labelKey` prop para especificar qué propiedad usar como identificador único.
::

::component-code
---
Colapso: Verdad
Escondido:
  @@50000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
Ignora:
  @@50000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
Externo:
  @@50000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
Externalidades:
  @@500@5000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
Props:
  Items:
    - label:'aplicación/'
      defaultExpanded: verdadero
      niños:
        - label:'composables/'
          niños:
            - label:'useAuth. ts'
              icon: 'i-vscode-icons-file-type-typescript'
            - label:'UseUser.es'
              icon: 'i-vscode-icons-file-type-typescript'
        - label:'componentes/'
          defaultExpanded: verdadero
          niños:
            - label:'Tarjeta. vista'
              icon: 'i-vscode-icons-file-type-vue'
            - label:'Botón. vue'
              icon: 'i-vscode-icons-file-type-vue'
    - label:'aplicación. vue'
      icon: 'i-vscode-icons-file-type-vue'
    - label:'nuxt. config. ts'
      icon: 'i-vscode-icons-file-type-nuxt'
  Categoría: W-60
---
::

@@6666 @

Utilice el prop `multiple` para permitir la selección de varios elementos.

::component-code
---
Colapso: Verdad
Escondido:
  @068@clase
Ignora:
  @@pH069@artículos
Externo:
  @070000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
Externalidades:
  @@701@@TREE [en línea]
Props:
  Multiplicación: True
  items:
    - label:'aplicación/'
      defaultExpanded: verdadero
      niños:
        - label:'composables/'
          niños:
            - label:'useAuth. ts'
              icon: 'i-vscode-icons-file-type-typescript'
            - label:'UseUser.es'
              icon: 'i-vscode-icons-file-type-typescript'
        - label:'componentes/'
          defaultExpanded: verdadero
          niños:
            - label:'Tarjeta. vue'
              icon: 'i-vscode-icons-file-type-vue'
            - label:'Botón. vue'
              icon: 'i-vscode-icons-file-type-vue'
    - label:'aplicación. vue'
      icon: 'i-vscode-icons-file-type-vue'
    - label:'nuxt. config. ts'
      icon: 'i-vscode-icons-file-type-nuxt'
  Categoría: W-60
---
::

### Anidado: badge{label="4.1+" class="align-text-top"}

Utilice el prop `nested` para controlar si el árbol se representa con una estructura anidada o como una lista plana.

::component-code
---
Colapso: Verdad
Escondido:
  @085 @ clase
Ignora:
  @086 @ Artículos
Externo:
  @087 @ Artículos
Externalidades:
  @@888@888@888@888 [en]
Props:
  Categoría: False
  Items:
    - label:'aplicación/'
      defaultExpanded: verdadero
      niños:
        - label:'composables/'
          niños:
            - label:'useAuth. ts'
              icon: 'i-vscode-icons-file-type-typescript'
            - label:'UseUser.es'
              icon: 'i-vscode-icons-file-type-typescript'
        - label:'componentes/'
          defaultExpanded: verdadero
          niños:
            - label:'Tarjeta. vista'
              icon: 'i-vscode-icons-file-type-vue'
            - label:'Botón. vue'
              icon: 'i-vscode-icons-file-type-vue'
    - label:'aplicación. vue'
      icon: 'i-vscode-icons-file-type-vue'
    - label:'nuxt. config. ts'
      icon: 'i-vscode-icons-file-type-nuxt'
  Categoría: W-60
---
::

::note{to="#with-virtualization"}
Cuando `nested` es `false`, todos los elementos se representan en el mismo nivel con sangría para indicar jerarquía.
::

@@pH100@color (Edición española)

Utilice el prop `color` para cambiar el color del árbol.

::component-code
---
Colapso: Verdad
Escondido:
  @2010@clase
Ignora:
  @303@artículos
Externo:
  @104@puntos
Externalidades:
  @105@@105@105@105@105@105@105)
Props:
  Color: Neutral
  items:
    - label:'aplicación/'
      defaultExpanded: verdadero
      niños:
        - label:'composables/'
          niños:
            - label:'useAuth. ts'
              icon: 'i-vscode-icons-file-type-typescript'
            - label:'UseUser.es'
              icon: 'i-vscode-icons-file-type-typescript'
        - label:'componentes/'
          defaultExpanded: verdadero
          niños:
            - label:'Tarjeta. vue'
              icon: 'i-vscode-icons-file-type-vue'
            - label:'Botón. vue'
              icon: 'i-vscode-icons-file-type-vue'
    - label:'aplicación. vue'
      icon: 'i-vscode-icons-file-type-vue'
    - label:'nuxt. config. ts'
      icon: 'i-vscode-icons-file-type-nuxt'
  Categoría: W-60
---
::

@115 @@ Tamaño

Utilice el prop `size` para cambiar el tamaño del árbol.

::component-code
---
Colapso: Verdad
Escondido:
  @117 @ clase
Ignora:
  @118@artículos
Externo:
  @119@artículos
Externalidades:
  @120@120@120@120@120@120@120@120@120@120@120@1201111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
Props:
  Tamaño: xl
  items:
    - label:'aplicación/'
      defaultExpanded: verdadero
      niños:
        - label:'composables/'
          niños:
            - label:'useAuth. ts'
              icon: 'i-vscode-icons-file-type-typescript'
            - label:'UseUser.es'
              icon: 'i-vscode-icons-file-type-typescript'
        - label:'componentes/'
          defaultExpanded: verdadero
          niños:
            - label:'Tarjeta. vue'
              icon: 'i-vscode-icons-file-type-vue'
            - label:'Botón. vue'
              icon: 'i-vscode-icons-file-type-vue'
    - label:'aplicación. vue'
      icon: 'i-vscode-icons-file-type-vue'
    - label:'nuxt. config. ts'
      icon: 'i-vscode-icons-file-type-nuxt'
  Categoría: W-60
---
::

### Trailing Icon (Edición española)

Utilice el prop `trailing-icon` para personalizar el [Icon](/docs/components/icon) de un nodo padre.

::note
Si se especifica un icono para un elemento, siempre tendrá prioridad sobre estos accesorios.
::

::component-code
---
Colapso: Verdad
Escondido:
  @137 @ clase
Ignora:
  @138@artículos
Externo:
  @139 @ artículos
Externalidades:
  @140@140@140@140@140@140@140@140@140@140@14000114001140000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
Props:
  TrailingIcono: 'i-lucide-arrow-down'
  items:
    - label:'aplicación/'
      defaultExpanded: verdadero
      niños:
        - label:'composables/'
          Archivo de la etiqueta: i-lucide-chevron-down
          niños:
            - label:'useAuth. ts'
              icon: 'i-vscode-icons-file-type-typescript'
            - label:'UseUser.es'
              icon: 'i-vscode-icons-file-type-typescript'
        - label:'componentes/'
          defaultExpanded: verdadero
          niños:
            - label:'Tarjeta. vista'
              icon: 'i-vscode-icons-file-type-vue'
            - label:'Botón. vue'
              icon: 'i-vscode-icons-file-type-vue'
    - label:'aplicación. vue'
      icon: 'i-vscode-icons-file-type-vue'
    - label:'nuxt. config. ts'
      icon: 'i-vscode-icons-file-type-nuxt'
  Categoría: W-60
---
::

::framework-only
#nuxidad
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
Puede personalizar este icono de forma global en su `app.config.ts` bajo la tecla `ui.icons.chevronDown`.
:::

#vista
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
Puede personalizar este icono de forma global en su `vite.config.ts` bajo la tecla `ui.icons.chevronDown`.
:::
::

### Icono expandido

Utilice los props `expanded-icon` y `collapsed-icon` para personalizar los iconos de un nodo padre cuando se expande o colapsa.

::component-code
---
Colapso: Verdad
Escondido:
  @159 @ clase
Ignora:
  @160000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
Externo:
  @161@artículos
Externalidades:
  @162@162@162@162@162@162@162@162@162@162@162@162@162@162@162@162@162@162@162@162@162)
Props:
  expandedIcono: 'i-lucide-book-open'
  collapsedIcon: 'i-lucide-book'
  Items:
    - label:'aplicación/'
      defaultExpanded: verdadero
      niños:
        - label:'composables/'
          niños:
            - label:'useAuth. ts'
              icon: 'i-vscode-icons-file-type-typescript'
            - label:'UseUser.es'
              icon: 'i-vscode-icons-file-type-typescript'
        - label:'componentes/'
          defaultExpanded: verdadero
          niños:
            - label:'Tarjeta. vue'
              icon: 'i-vscode-icons-file-type-vue'
            - label:'Botón. vue'
              icon: 'i-vscode-icons-file-type-vue'
    - label:'aplicación. vue'
      icon: 'i-vscode-icons-file-type-vue'
    - label:'nuxt. config. ts'
      icon: 'i-vscode-icons-file-type-nuxt'
  Categoría: W-60
---
::

::framework-only
#nuxidad
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
Puede personalizar estos iconos de forma global en su `app.config.ts` bajo `ui.icons.folder` y `ui.icons.folderOpen` teclas.
:::

#vista
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
Puede personalizar estos iconos de forma global en su `vite.config.ts` bajo `ui.icons.folder` y `ui.icons.folderOpen` teclas.
:::
::

### Desactivado

Utilice el prop `disabled` para evitar cualquier interacción del usuario con el árbol.

::component-code
---
Colapso: Verdad
Escondido:
  @180000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
Ignora:
  @181@artículos
Externo:
  @2018@artículos
Externalidades:
  @183@183@183@183@183@183)
Props:
  Discapacidad: Verdadero
  items:
    - label:'aplicación'
      icono: 'i-lucide-folder'
      defaultExpanded: verdadero
      niños:
        - label:'Compuestos'
          icono: 'i-lucide-folder'
          niños:
            - label:'useAuth. ts'
              icon: 'i-vscode-icons-file-type-typescript'
            - label:'UseUser.es'
              icon: 'i-vscode-icons-file-type-typescript'
        - label:'componentes'
          icono: 'i-lucide-folder'
          niños:
            - label:'El hogar'
              icono: 'i-lucide-folder'
              niños:
                - label:'Tarjeta. vue'
                  icon: 'i-vscode-icons-file-type-vue'
                - label:'Botón. vue'
                  icon: 'i-vscode-icons-file-type-vue'
    - label:'aplicación. vue'
      icon: 'i-vscode-icons-file-type-vue'
    - label:'nuxt. config. ts'
      icon: 'i-vscode-icons-file-type-nuxt'
  Categoría: W-60
---
::

::note
También puede desactivar elementos individuales utilizando `item.disabled`.
::

@@P195 Ejemplos

### Control elemento (s) seleccionado (s)

Puede controlar los elementos seleccionados mediante la directiva `default-value` o la directiva `v-model`.

::component-example
---
Nombre: 'arbo-modelo-valor-ejemplo'
Colapso: Verdad
Props:
  Categoría: W-60
---
::

::tip
Utilice el prop `get-key` para cambiar la función utilizada para obtener la clave única de cada elemento cuando se proporciona un `v-model` o `default-value`.
::

Si desea evitar que se seleccione un elemento, puede utilizar la propiedad `item.onSelect()`{lang="ts-type"} o el evento global `select`:

::component-example
---
Nombre del archivo: 'tree-on-select-example'
Colapso: Verdad
Props:
  Categoría: W-60
---
::

::note
Esto le permite expandir o contraer un elemento primario sin seleccionarlo.
::

### Control artículos expandidos

Puede controlar los elementos expandidos mediante la prop `default-expanded` o la directiva `v-model`.

::component-example
---
Nombre: 'arbo-ejemplo'
Colapso: Verdad
Props:
  Categoría: W-60
---
::

Si desea evitar que un elemento se expanda, puede usar la propiedad `item.onToggle()`{lang="ts-type"} o el evento global `toggle`:

::component-example
---
Nombre del archivo: 'tree-on-toggle-example'
Colapso: Verdad
Props:
  Categoría: W-60
---
::

::note
Esto le permite seleccionar un elemento padre sin expandir o contraer sus hijos.
::

### Con casilla de verificación en los elementos: badge{label="4.1+" class="align-text-top"}

Puede utilizar la ranura `item-leading` para añadir una [Checkbox](/docs/components/checkbox) a los elementos. Props `propagate-select` y `bubble-select` para permitir la selección múltiple con relación padre-hijo y los `select` y `toggle`eventos para controlar el estado seleccionado y expandido de los elementos.

::component-example
---
Nombre: 'arbor-checkbox-items-example'
Colapso: Verdad
Props:
  Categoría: W-60
---
::

::note
Este ejemplo utiliza el prop `as` para cambiar los elementos de `button` a `div` ya que el [`Checkbox`](/docs/components/checkbox) también se representa como un `button`.
::

### Con arrastrar y soltar: badge{label="4.1+" class="align-text-top"}

Utilice el [`useSortable`](https://vueuse.org/integrations/useSortable/) componible de [`@vueuse/integrations`](https://vueuse.org/integrations/README.html) para habilitar la funcionalidad de arrastrar y soltar en el árbol. para proporcionar una experiencia de arrastrar y soltar sin interrupciones.

::component-example
---
Categoría: true
Colapso: Verdad
name: 'drag-and-drop-example'
---
::

::note
Este ejemplo establece la prop `nested` a `false` para tener una lista plana de elementos de modo que los elementos se puedan arrastrar y soltar.
::

### With virtualization: badge{label="4.1+" class="align-text-top"}

Utilice la prop `virtualize` para habilitar la virtualización de listas grandes como un booleano o un objeto con opciones como `{ estimateSize: 32, overscan: 12 }`.

::warning
Cuando la virtualización está habilitada, la estructura del árbol se aplana, similar a la configuración de la prop `nested` a `false`.
::

::component-example
---
Categoría: true
Nombre: 'arbor-virtualize-ejemplo'
Props:
  Categoría: W-60
---
::

### Con ranura personalizada

Utilice la propiedad `slot` para personalizar un elemento específico.

Tendrás acceso a los siguientes slots:

@@258@@@259@@260
@@
@@
@@267@@268@269
@@270@@271@272

::component-example
---
Nombre del archivo: 'tree-custom-slot-example'
Colapso: Verdad
Props:
  Categoría: W-60
---
::

@273

@@274@274@274

Componentes Props

@275@275@275

Componentes de slots

@276@276@276

Componentes Emisiones

@277 @@ Temas

Componente Tema

@@278@Changelog

Categoría: component-changelog
