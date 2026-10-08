---
title: PriceTablero
description: 'Un componente de tabla de precios sensible que muestra planes de precios por niveles con comparaciones de características.'
category: page
links:
  - label: GitHub también
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/PricingTable.vue
---

@@pH000@@Uso del producto

El componente PricingTable proporciona una forma adaptable y personalizable de mostrar los planes de precios en un formato de tabla, cambiando automáticamente entre un diseño de tabla horizontal en el escritorio para una fácil comparación y un diseño de tarjeta vertical en el móvil para una mejor legibilidad.

::code-preview

::u-pricing-table
---
terceros:
  - id:"en solitario"
    Título:"Solo"
    Descripción:'Para hackers indie'.
    Precio: $249 dólares
    Ciclo de facturación:'/mes'
    Facturación:"Anualmente"
    Tags: "más popular"
    Botón:
      Etiqueta: "Comprar ahora"
      Variación:"Sutil"
  - id:'equipo'
    Título:"Equipo"
    Descripción:'Para equipos en crecimiento'.
    Precio: 499 dólares
    Ciclo de facturación:'/mes'
    Facturación:"Anualmente"
    Botón:
      Etiqueta: "Comprar ahora"
    Destacado: Verdadero
  - id:'empresa'(en inglés)
    Título: El Enterprise
    Descripción:"Para grandes organizaciones".
    Categoría: Custom
    Botón:
      Etiqueta: 'Contacto de ventas'
      Categoría:"Neutral"
secciones:
  - title:'Características'
    Features:
      - title:'Número de desarrolladores'
        terceros:
          Canción:"1"
          Categoría:"5"
          Categoría: Unlimited
      - title:'Proyectos'
        terceros:
          Solo: Verdad
          Categoría: True
          Compañía: true
      - title:'Acceso al repositorio de GitHub'
        terceros:
          Solo: Verdad
          Categoría: True
          Compañía: true
      - title:'Actualizaciones'
        terceros:
          Canción: Patch & Minor
          Equipo: 'Todas las actualizaciones'
          empresa: 'Todas las actualizaciones'
      - title:"Proyecto"
        terceros:
          Solo: "Comunidad"
          Categoría:"Prioridad"
          Compañía: 24/7
  - title:'Seguridad'
    Características:
      - title:"Nombre de usuario"
        terceros:
          Sólo: Falso
          Categoría: True
          Compañía: True
      - title:'Registros de auditoría'
        terceros:
          Sólo: Falso
          Categoría: True
          Compañía: True
      - title:'Revisión de seguridad personalizada'
        terceros:
          Sólo: Falso
          Categoría: False
          Compañía: true
---
::

::

@14@140 años

Utilice el `tiers` prop como una matriz de objetos para definir sus planes de precios. Cada objeto de nivel admite las siguientes propiedades:

- `id: string`{lang="ts-type"}-Identificador único para el nivel (requerido)
- `title?: string`{lang="ts-type"}-Nombre del plan de precios
- `description?: string`{lang="ts-type"}-Breve descripción del plan
- `price?: string`{lang="ts-type"}-El precio actual del plan (por ejemplo,"$99","€ 99","Gratis")
- `discount?: string`{lang="ts-type"}-El precio con descuento que mostrará el `price` con tachaduras (por ejemplo,"$79","€ 79")
- `billingCycle?: string`{lang="ts-type"}-El período de precio unitario que aparece al lado del precio (por ejemplo,"/mes","/asiento/mes")
- `billingPeriod?: string`{lang="ts-type"}-Contexto de facturación adicional que aparece encima del ciclo de facturación (por ejemplo,"facturado mensualmente")
- `badge?: string | BadgeProps`{lang="ts-type"}-Mostrar una insignia junto al título `{ color: 'primary', variant: 'subtle' }`{lang="ts-type"}
- `button?: ButtonProps`{lang="ts-type"}-Configure el botón CTA `{ size: 'lg', block: true }`{lang="ts-type"}
- `highlight?: boolean`{lang="ts-type"}-Si enfatizar visualmente este nivel como la opción recomendada

::component-code
---
Categoría: true
Colapso: Verdad
Externo:
  @@501@501
Externalidades:
  @@50000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
Escondido:
  @@50000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
Ignora:
  @@50000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
Props:
  terceros:
    - id:'en solitario'
      Título:"Solo"
      Descripción:'Para hackers indie'.
      Precio: $249 dólares
      Ciclo de facturación:'/mes'
      Facturación:"Anualmente"
      Tags: "más popular"
      Botón:
        Etiqueta: "Comprar ahora"
        Variación:"Sutil"
    - id:'equipo'
      Título:"Equipo"
      Descripción:'Para equipos en crecimiento'.
      Precio: 499 dólares
      Ciclo de facturación:'/mes'
      Facturación:"Anualmente"
      Botón:
        Etiqueta: "Comprar ahora"
      Destacado: Verdadero
    - id:'empresa'(en inglés)
      Título: El Enterprise
      Descripción:"Para grandes organizaciones".
      Categoría: Custom
      Botón:
        Etiqueta: 'Contacto de ventas'
        Categoría:"Neutral"
  Categoría: Border-B Border-Default
---
::

@@58000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000

Utilice la prop `sections` para organizar las características en grupos lógicos. Cada sección representa una categoría de características que desea comparar en diferentes niveles de precios.

- `title: string`{lang="ts-type"}-El encabezado de la sección de características
- `features: PricingTableSectionFeature[]`{lang="ts-type"}-Una serie de características con su disponibilidad en cada nivel:
  - Cada característica requiere un `title` y un `tiers` ID de nivel de mapeo de objetos a valores
  - Los valores booleanos (`true`/`false`) se mostrarán como marcas de verificación (✓) o iconos menos (-)
  - Los valores de cadena se mostrarán como texto (por ejemplo,"Ilimitado","Hasta 5 usuarios")
  - Los valores numéricos se mostrarán tal como están (por ejemplo, 10, 100)

::component-code
---
Categoría: true
Colapso: Verdad
Externo:
  @@70000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
  @@75@secciones
Externalidades:
  @@776@@Tablero de precios []
  @@777@@777@@777@@777@@777@@777@77@77@77@77@77@77@777@77@77@77@777@77@77@77@77@77@77@77@77@77@77@77@77@77@77@777@7777@777@777@777@777@@7777)
Escondido:
  @788@clase
Ignora:
  @799@@Tablero
  @@ph080@secciones
Props:
  terceros:
    - id:'en solitario'
      Título:"Solo"
      Precio: $249 dólares
      Descripción:'Para hackers indie'.
      Ciclo de facturación:'/mes'
      Botón:
        Etiqueta: "Comprar ahora"
        Variación:"Sutil"
    - id:'equipo'
      Título:"Equipo"
      Precio: 499 dólares
      Descripción:'Para equipos en crecimiento'.
      Ciclo de facturación:'/mes'
      Botón:
        Etiqueta: "Comprar ahora"
    - id:'empresa'(en inglés)
      Categoría: Enterprise
      Categoría: Custom
      Descripción:"Para grandes organizaciones".
      Botón:
        Etiqueta: 'Contacto de ventas'
        Categoría:"Neutral"
  secciones:
    - title:'Características'
      Características:
        - title:'Número de desarrolladores'
          terceros:
            Canción:"1"
            Categoría:"5"
            Categoría: Unlimited
        - title:'Proyectos'
          terceros:
            Solo: Verdad
            Categoría: True
            Compañía: True
    - title:'Seguridad'
      Features:
        - title:"Nombre de usuario"
          terceros:
            Sólo: Falso
            Categoría: True
            Compañía: true
---
::

@@ph089@@Ejemplos

### Con ranuras

El componente PricingTable proporciona potentes opciones de personalización de ranuras para adaptar la visualización de su contenido. Puede personalizar elementos individuales utilizando ranuras genéricas o apuntar a elementos específicos utilizando sus ID.

::component-example
---
Categoría: true
Nombre: 'pricing-table-slots-example'
Colapso: Verdad
---
::

El componente admite varios tipos de ranuras para una máxima flexibilidad de personalización:

| Tipo de slot| El pattern| Descripción| ejemplo|
|-----------|---------|-------------|---------|
| **Tier slots**| @@pH091 @| Objetivos específicos de terceros| @@pH092 @@ y @pH093|
| **Sección**| @@pf096 @| Secciones específicas objetivo| @@pf097 @|
| **Características de las tragamonedas **| @@@ 100 @| Características específicas target| @@@ 101|
| ****| `#tier-title`,`#section-title`, etc.| Aplica a todos los items| @@pH106 @|

::note
Cuando no se proporciona `id`, el nombre de la ranura se genera automáticamente a partir del título (por ejemplo,"Características Premium!" se convierte en `#section-premium-features-title`).
::

@111

@112@112@112

Componentes Props

@@113@113@113

Componentes de slots

@114 @@ Temas

Componente Tema

@115@Changelog

Categoría: component-changelog
