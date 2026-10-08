---
description: Una jerarquía de enlaces para navegar a través de un sitio web.
category: navigation
keywords:
  - breadcrumbs
links:
  - label: GitHub también
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Breadcrumb.vue
---

@@pH000@@Uso del producto

Utilice el componente Breadcrumb para mostrar la ubicación de la página actual en la jerarquía de su sitio.

::component-code
---
Colapso: Verdad
Ignora:
  @0001@artículos
Externo:
  @@2002@artículos
Externalidades:
  @@@P2003@@P2003 [en línea]
Props:
  Items:
    - label:'Artículos'
      icono: 'i-lucide-libro-abierto'
      Nombre: /docs
    - label:'Componentes'
      Icono: 'i-lucide-box'
      en: /docs/componentes
    - label:"Breadcrumb"(Edición española)
      icono: 'i-lucide-link'
      En el archivo/docs/components/breadcrumb
---
::

@0007@Artículos

Utilice el prop `items` como una matriz de objetos con las siguientes propiedades:

@@
@@
@@
@@
@@
@@

Puede pasar cualquier propiedad del componente [Link](/docs/components/link#props) como `to`,`target`, etc.

::component-code
---
Ignora:
  @373@artículos
Externo:
  @@38000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
Externalidades:
  @@@P2003@@P2003 [en línea]
Props:
  Items:
    - label:'Documentos'
      icono: 'i-lucide-libro-abierto'
      Nombre: /docs
    - label:'Componentes'
      Icono: 'i-lucide-box'
      en: /docs/componentes
    - label:"Breadcrumb"(Edición española)
      icono: 'i-lucide-link'
      En el archivo/docs/components/breadcrumb
---
::

::note
Un `span` se representa en lugar de un enlace cuando la propiedad `to` no está definida.
::

### Separador Icono

Utilice el prop `separator-icon` para personalizar el [Icon](/docs/components/icon) entre cada elemento.

::component-code
---
Ignora:
  @@502@artículos
Externo:
  @@50000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
Externalidades:
  @@@P2005@@P2005 [en línea]
Props:
  separatorIcono: 'i-lucide-arrow-right'
  items:
    - label:'Documentos'
      icono: 'i-lucide-libro-abierto'
      Archivo: /docs
    - label:'Componentes'
      Icono: 'i-lucide-box'
      en: /docs/componentes
    - label:"Breadcrumb"(Edición española)
      icono: 'i-lucide-link'
      En el archivo/docs/components/breadcrumb
---
::

::framework-only
#nuxidad
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
Puede personalizar este icono de forma global en su `app.config.ts` bajo la tecla `ui.icons.chevronRight`.
:::

#vista
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
Puede personalizar este icono de forma global en su `vite.config.ts` bajo la tecla `ui.icons.chevronRight`.
:::
::

### Color: badge{label="4.8+" class="align-text-top"}

Utilice el prop `color` para cambiar el color de la migaja de pan activa.

::component-code
---
Ignora:
  @065 @ artículos
Externo:
  @666@puntos
Externalidades:
  @@@P2006@@@P2006 [en inglés]
Props:
  Categoría:"Secundario"
  items:
    - label:'Documentos'
      icono: 'i-lucide-libro-abierto'
      Nombre: /docs
    - label:'Componentes'
      Icono: 'i-lucide-box'
      en: /docs/componentes
    - label:"Breadcrumb"(Edición española)
      icono: 'i-lucide-link'
      En el archivo/docs/components/breadcrumb
---
::

@@ph071@@Ejemplos

### Con ranura separadora

Utilice la ranura `#separator` para personalizar el separador entre cada elemento.

Ejemplo de componente {name="breadcrumb-separator-slot-example"}

### Con slot personalizado

Utilice la propiedad `slot` para personalizar un elemento específico.

Tendrás acceso a los siguientes slots:

@@@ph077@@@ph078@@@ph079
@@ph080@@@ph081
@@
@@ph086@@@ph087@@@ph088 @

Ejemplo: {name="breadcrumb-custom-slot-example"}

::tip{to="#slots"}
También puede utilizar las ranuras `#item`,`#item-leading`,`#item-label` y `#item-trailing` para personalizar todos los artículos.
::

@@pH094

@@pH095@@Propuestas

Componentes Props

@@pH096@@espanol

Componentes de slots

@097@@Proyecto

Componente Tema

@080000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000

Categoría: component-changelog
