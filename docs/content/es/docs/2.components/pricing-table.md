---
title: PriceTablero
description: 'Un componente de tabla de precios sensible que muestra planes de precios por niveles con comparaciones de características.'
category: page
links:
  - label: GitHub también
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/PricingTable.vue
---

xph0000xUso

El componente PricingTable proporciona una forma adaptable y personalizable de mostrar los planes de precios en un formato de tabla, cambiando automáticamente entre un diseño de tabla horizontal en el escritorio para una fácil comparación y un diseño de tarjeta vertical en el móvil para una mejor legibilidad.

::code-preview

::u-pricing-table
---
tiers:
  - id: 'solo'
    title: 'Solo'
    description: 'For indie hackers.'
    price: '$249'
    billingCycle: '/month'
    billingPeriod: 'billed annually'
    badge: 'Most popular'
    button:
      label: 'Buy now'
      variant: 'subtle'
  - id: 'team'
    title: 'Team'
    description: 'For growing teams.'
    price: '$499'
    billingCycle: '/month'
    billingPeriod: 'billed annually'
    button:
      label: 'Buy now'
    highlight: true
  - id: 'enterprise'
    title: 'Enterprise'
    description: 'For large organizations.'
    price: 'Custom'
    button:
      label: 'Contact sales'
      color: 'neutral'
sections:
  - title: 'Features'
    features:
      - title: 'Number of developers'
        tiers:
          solo: '1'
          team: '5'
          enterprise: 'Unlimited'
      - title: 'Projects'
        tiers:
          solo: true
          team: true
          enterprise: true
      - title: 'GitHub repository access'
        tiers:
          solo: true
          team: true
          enterprise: true
      - title: 'Updates'
        tiers:
          solo: 'Patch & minor'
          team: 'All updates'
          enterprise: 'All updates'
      - title: 'Support'
        tiers:
          solo: 'Community'
          team: 'Priority'
          enterprise: '24/7'
  - title: 'Security'
    features:
      - title: 'SSO'
        tiers:
          solo: false
          team: true
          enterprise: true
      - title: 'Audit logs'
        tiers:
          solo: false
          team: true
          enterprise: true
      - title: 'Custom security review'
        tiers:
          solo: false
          team: false
          enterprise: true
---
::

::

### Tiers en Español

Utilice el prop `tiers` como una matriz de objetos para definir sus planes de precios. Cada objeto de nivel admite las siguientes propiedades:

- `id: string`{lang="ts-type"}-Identificador único para el nivel (requerido)
- `title?: string`{lang="ts-type"}-Nombre del plan de precios
- `description?: string`{lang="ts-type"}-Breve descripción del plan
- `price?: string`{lang="ts-type"}-El precio actual del plan (por ejemplo,"$99","€ 99","Gratis")
- `discount?: string`{lang="ts-type"}-El precio con descuento que mostrará el `price` con tachaduras (por ejemplo,"$79","€ 79")
- `billingCycle?: string`{lang="ts-type"}-El período de precio unitario que aparece al lado del precio (por ejemplo,"/mes","/asiento/mes")
- `billingPeriod?: string`{lang="ts-type"}-Contexto de facturación adicional que aparece por encima del ciclo de facturación (por ejemplo,"facturado mensualmente")
- `badge?: string | BadgeProps`{lang="ts-type"}-Muestra una insignia junto al título `{ color: 'primary', variant: 'subtle' }`{lang="ts-type"}
- `button?: ButtonProps`{lang="ts-type"}-Configurar el botón CTA `{ size: 'lg', block: true }`{lang="ts-type"}
- `highlight?: boolean`{lang="ts-type"}-Si desea enfatizar visualmente este nivel como la opción recomendada

::component-code
---
prettier: true
collapse: true
external:
  - tiers
externalTypes:
  - PricingTableTier[]
hide:
  - class
ignore:
  - tiers
props:
  tiers:
    - id: 'solo'
      title: 'Solo'
      description: 'For indie hackers.'
      price: '$249'
      billingCycle: '/month'
      billingPeriod: 'billed annually'
      badge: 'Most popular'
      button:
        label: 'Buy now'
        variant: 'subtle'
    - id: 'team'
      title: 'Team'
      description: 'For growing teams.'
      price: '$499'
      billingCycle: '/month'
      billingPeriod: 'billed annually'
      button:
        label: 'Buy now'
      highlight: true
    - id: 'enterprise'
      title: 'Enterprise'
      description: 'For large organizations.'
      price: 'Custom'
      button:
        label: 'Contact sales'
        color: 'neutral'
  class: 'border-b border-default'
---
::

### Secciones

Utilice el prop `sections` para organizar las características en grupos lógicos. Cada sección representa una categoría de características que desea comparar en diferentes niveles de precios.

- `title: string`{lang="ts-type"}-El título de la sección de características
- `features: PricingTableSectionFeature[]`{lang="ts-type"}-Una serie de características con su disponibilidad en cada nivel:
  - Cada característica requiere un ID de nivel de mapeo de objetos `title` y `tiers` a los valores
  Los valores booleanos (`true`/`false`) se mostrarán como marcas de verificación (✓) o iconos menos (-).
  Los valores - String se mostrarán como texto (por ejemplo,"Ilimitado","Hasta 5 usuarios")
  - Los valores numéricos se mostrarán tal cual (por ejemplo, 10, 100)

::component-code
---
prettier: true
collapse: true
external:
  - tiers
  - sections
externalTypes:
  - PricingTableTier[]
  - PricingTableSection[]
hide:
  - class
ignore:
  - tiers
  - sections
props:
  tiers:
    - id: 'solo'
      title: 'Solo'
      price: '$249'
      description: 'For indie hackers.'
      billingCycle: '/month'
      button:
        label: 'Buy now'
        variant: 'subtle'
    - id: 'team'
      title: 'Team'
      price: '$499'
      description: 'For growing teams.'
      billingCycle: '/month'
      button:
        label: 'Buy now'
    - id: 'enterprise'
      title: 'Enterprise'
      price: 'Custom'
      description: 'For large organizations.'
      button:
        label: 'Contact sales'
        color: 'neutral'
  sections:
    - title: 'Features'
      features:
        - title: 'Number of developers'
          tiers:
            solo: '1'
            team: '5'
            enterprise: 'Unlimited'
        - title: 'Projects'
          tiers:
            solo: true
            team: true
            enterprise: true
    - title: 'Security'
      features:
        - title: 'SSO'
          tiers:
            solo: false
            team: true
            enterprise: true
---
::

## Ejemplos

### Con ranuras

El componente PricingTable proporciona potentes opciones de personalización de ranuras para adaptar la visualización de su contenido. Puede personalizar elementos individuales utilizando ranuras genéricas o apuntar a elementos específicos utilizando sus ID.

::component-example
---
prettier: true
name: 'pricing-table-slots-example'
collapse: true
---
::

El componente admite varios tipos de ranuras para una máxima flexibilidad de personalización:

| Tipo de slot| Patrón| Descripción| ejemplo|
|-----------|---------|-------------|---------|
| **Tier tragamonedas **| `#{tier-id}-{element}`| Objetivos específicos de terceros| Xph236x y Xph237x|
| **Sección slots**| `#section-{id\|formatted-title}-title` también| Secciones específicas objetivo| `#section-features-title` (Edición española)|
| **Características slots**| `#feature-{id\|formatted-title}-{title\|value}` también| Características específicas target| `#feature-developers-title`|
| **Genérico slots**| `#tier-title`, `#section-title`, etc.| Aplica a todos los items| `#feature-value`|

::note
Cuando no se proporciona `id`, el nombre de la ranura se genera automáticamente a partir del título (por ejemplo,"Características Premium!" se convierte en `#section-premium-features-title`).
::

## API

### Props (accesorios)

:component-props

### Slots

:component-slots

## Temas

:component-theme

## Changelog (Edición española)

:component-changelog
