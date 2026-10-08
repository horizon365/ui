---
title: PricePlan
description: 'Un plan de precios personalizable para mostrar en una página de precios.'
category: page
links:
  - label: GitHub también
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/PricingPlan.vue
---

@@pH000@@Uso del producto

El componente Pricing Plan proporciona una forma flexible de mostrar un plan de precios con contenido personalizable que incluye título, descripción, precio, características, etc.

::code-preview

::u-pricing-plan
---
Título:"Solo"
Descripción:'Para bootstrappers y hackers indie.'
Precio: $249 dólares
Descuento: $199
ciclo de facturación:'/mes'
Tags: "más popular"
Características:
  - 'Un desarrollador '
  - 'Proyectos Ilimitados '
  - 'Acceso al repositorio de GitHub '
  - 'parche ilimitado y actualizaciones menores '
  - 'Acceso de por vida '
Botón:
  Etiqueta: "Comprar ahora"
Categoría: W-96
---
::

::

::tip{to="/docs/components/pricing-plans"}
Utilice el componente `PricingPlans` para mostrar varios planes de precios en un diseño de cuadrícula sensible.
::

@0007@Nombre

Utilice el prop `title` para establecer el título del Plan de Precios.

::component-code
---
Ignora:
  @009@clase
Props:
  Título:"Solo"
  Categoría: W-96
---
::

@@pH010@Descripción

Utilice el prop `description` para establecer la descripción del Plan de Precios.

::component-code
---
Escondido:
  @12000@clase
Ignora:
  @@13@título
Props:
  Título:"Solo"
  Descripción:'Para bootstrappers y hackers indie.'
  Categoría: W-96
---
::

@14@badge (en inglés)

Utilice el prop `badge` para mostrar un [Badge](/docs/components/badge) junto al título del plan de precios.

::component-code
---
Categoría: true
Escondido:
  @200000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
Ignora:
  @@21@título
  @@ph022@descripción
Props:
  Título:"Solo"
  Descripción:'Para bootstrappers y hackers indie.'
  Tags: "más popular"
  Categoría: W-96
---
::

Puede pasar cualquier propiedad del componente [Badge](/docs/components/badge#props) para personalizarlo.

::component-code
---
Categoría: true
Escondido:
  @27@clase
Ignora:
  @28@title
  @@ph029@descripción
  @badge.label
  - badge.color (en inglés)
  - badge.variante
Props:
  Título:"Solo"
  Descripción:'Para bootstrappers y hackers indie.'
  El Badge:
    Etiqueta: "más popular"
    Categoría:"Neutral"
    Variante: "sólido"
  Categoría: W-96
---
::

@@pH033@precio

Utilice el prop `price` para establecer el precio del Plan de Precios.

::component-code
---
Categoría: true
Escondido:
  @35@clase
Ignora:
  @36@title
  @@ph037@descripción
Props:
  Título:"Solo"
  Descripción:'Para bootstrappers y hackers indie.'
  Precio: $249 dólares
  Categoría: W-96
---
::

@38@@Descuento

Utilice el prop `discount` para establecer un precio con descuento que se mostrará junto al precio original (que se mostrará con un tachado).

::component-code
---
Categoría: true
Escondido:
  @@clase00000
Ignora:
  @@401@title
  @@ph042@descripción
Props:
  Título:"Solo"
  Descripción:'Para bootstrappers y hackers indie.'
  Precio: $249 dólares
  Descuento: $199
  Categoría: W-96
---
::

@@40000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000

Utilice los props `billing-cycle` y/o `billing-period` para mostrar la información de facturación del Plan de Precios.

::component-code
---
Categoría: true
Escondido:
  @46@clase
Ignora:
  @@47@title
  @@ph048@descripción
Props:
  Título:"Solo"
  Descripción:'Para bootstrappers y hackers indie.'
  Precio: $9 dólares
  Ciclo de facturación:'/mes'
  Facturación:"Anualmente"
  Categoría: W-96
---
::

### Características

Utilice el prop `features` como una matriz de cadena para mostrar una lista de características en el Plan de Precios:

::component-code
---
Categoría: true
Escondido:
  @@501@clase
Ignora:
  @@52@título
  @@pH053@descripción
  @@pH054@precio
  @@505@características
Props:
  Título:"Solo"
  Descripción:'Para bootstrappers y hackers indie.'
  Precio: $249 dólares
  Features:
    - 'Un desarrollador '
    - 'Proyectos Ilimitados '
    - 'Acceso al repositorio de GitHub '
    - 'parche ilimitado y actualizaciones menores '
    - 'Acceso de por vida '
  Categoría: W-96
---
::

::framework-only
#Nuxidad
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
Puede personalizar este icono de forma global en su `app.config.ts` bajo la tecla `ui.icons.success`.
:::

#vista
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
Puede personalizar este icono de forma global en su `vite.config.ts` bajo la tecla `ui.icons.success`.
:::
::

También puede pasar una matriz de objetos con las siguientes propiedades:

@@
@@@ph068@@@ph069@@@ph070

::component-code
---
Categoría: true
Escondido:
  @071@clase
Externo:
  @@ph072@características
Externalidades:
  - PricingPlanFeature [en inglés]
Ignora:
  @@74@title
  @@pH075@descripción
  @76@precio
  @@777@características
Props:
  Título:"Solo"
  Descripción:'Para bootstrappers y hackers indie.'
  Precio: $249 dólares
  Características:
    - title:'Un desarrollador'
      Icono: i-lucide-usuario
    - title:'Proyectos Ilimitados'
      Icono: i-lucide-infinito
    - title:'Acceso al repositorio de GitHub'
      Icono: i-lucide-github
    - title:'Patch ilimitado y actualizaciones menores'
      Icono: i-lucide-refresh-cw
    - title:"Acceso de por vida"
      i-lucide-clock (reloj inteligente)
  Categoría: W-96
---
::

@@pH083@@Botón

Utilice el prop `button` con cualquier propiedad del componente [Button](/docs/components/button) para mostrar un botón en la parte inferior del Plan de Precios.

::component-code
---
Categoría: true
Escondido:
  @089@clase
Ignora:
  @090000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
  @@ph091@descripción
  @@pH092@precio
  @@pH093@@características
Props:
  Título:"Solo"
  Descripción:'Para bootstrappers y hackers indie.'
  Precio: $249 dólares
  Features:
    - 'Un desarrollador '
    - 'Proyectos Ilimitados '
    - 'Acceso al repositorio de GitHub '
    - 'parche ilimitado y actualizaciones menores '
    - 'Acceso de por vida '
  Botón:
    Etiqueta: "Comprar ahora"
  Categoría: W-96
---
::

::tip
Utilice el campo `onClick` para agregar un controlador de clics para activar la compra del plan.
::

@@P100@Variación

Utilice el prop `variant` para cambiar la variante del Plan de Precios.

::component-code
---
Categoría: true
Escondido:
  @2010@clase
Ignora:
  @@103@título
  @@ph104@descripción
  @@pH105@precio
  @@F106@características
  @button.label @button.label
Props:
  Título:"Solo"
  Descripción:'Para bootstrappers y hackers indie.'
  Precio: $249 dólares
  Características:
    - 'Un desarrollador '
    - 'Proyectos Ilimitados '
    - 'Acceso al repositorio de GitHub '
    - 'Patch ilimitado y actualizaciones menores '
    - 'Acceso de por vida '
  Botón:
    Etiqueta: "Comprar ahora"
  Variación:"Sutil"
  Categoría: W-96
---
::

@@113@Orientación

Utilice el prop `orientation` para cambiar la orientación del Plan de Precios. Predeterminados a `vertical`.

::component-code
---
Categoría: true
Escondido:
  @116 @ clase
Ignora:
  @117@título
  @@ph118@descripción
  @119 @ precio
  - características
  @button.label @button.label
Props:
  Título:"Solo"
  Descripción:'Para bootstrappers y hackers indie.'
  Precio: $249 dólares
  Características:
    - 'Un desarrollador '
    - 'Proyectos Ilimitados '
    - 'Acceso al repositorio de GitHub '
    - 'Acceso de por vida'
  Botón:
    Etiqueta: "Comprar ahora"
  Orientación: Horizontal
  Categoría:"Outline"
  Categoría: w-full
---
::

@126@126@126@126

Utilice el prop `tagline` para mostrar un texto de eslogan sobre el precio.

::component-code
---
Categoría: true
Escondido:
  @128 @ clase
Ignora:
  @29@title
  @@ph130@descripción
  @131 @ precio
  - características
  @button.label @button.label
  - orientación
Props:
  Título:"Solo"
  Descripción:'Para bootstrappers y hackers indie.'
  Precio: $249 dólares
  Características:
    - 'Un desarrollador '
    - 'Proyectos Ilimitados '
    - 'Acceso al repositorio de GitHub '
    - 'Acceso de por vida'
  Botón:
    Etiqueta: "Comprar ahora"
  Orientación: Horizontal
  Tagline: "Paga una vez, poseelo para siempre"
  Categoría: w-full
---
::

@139 @ Términos

Utilice el prop `terms` para mostrar los términos por debajo del precio.

::component-code
---
Categoría: true
Escondido:
  @141 @ clase
Ignora:
  @242@title
  @@ph143@descripción
  @@pH144@precio
  - características
  @button.label @button.label
  - orientación
  @148@@Tablero
Props:
  Título:"Solo"
  Descripción:'Para bootstrappers y hackers indie.'
  Precio: $249 dólares
  Features:
    - 'Un desarrollador '
    - 'Proyectos Ilimitados '
    - 'Acceso al repositorio de GitHub '
    - 'Acceso de por vida '
  Botón:
    Etiqueta: "Comprar ahora"
  Orientación: Horizontal
  Tagline: "Paga una vez, poseelo para siempre"
  términos:'Facturas y recibos disponibles'.
  Categoría: w-full
---
::

@153 @ Destacado

Utilice el prop `highlight` para mostrar un borde resaltado alrededor del Plan de Precios.

::component-code
---
Categoría: true
Escondido:
  @@5000@clase
Ignora:
  @156@título
  - descripción
  @@pH158@precio
  - características
  @button.label @button.label
Props:
  Título:"Solo"
  Descripción:'Para bootstrappers y hackers indie.'
  Precio: $249 dólares
  Features:
    - 'Un desarrollador '
    - 'Proyectos Ilimitados '
    - 'Acceso al repositorio de GitHub '
    - 'parche ilimitado y actualizaciones menores '
    - 'Acceso de por vida '
  Botón:
    Etiqueta: "Comprar ahora"
  Destacado: Verdadero
  Categoría: W-96
---
::

@166

Utilice el `scale` prop para hacer un plan de precios más grande que los demás.

::note{to="/docs/components/pricing-plans#scale"}
Echa un vistazo al ejemplo de `scale` de PricingPlans para ver cómo funciona, ya que es difícil de demostrar por sí mismo.
::

@@pH169

@170000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000

Componentes Props

@@171@171@171

Componentes de slots

@@2017@Proyecto

Componente Tema

@173@Changelog (Edición española)

Categoría: component-changelog
