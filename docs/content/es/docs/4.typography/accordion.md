---
title: ProseAcordeón
description: 'Crear secciones de contenido ampliables para una mejor organización de la información.'
category: components
navigation.title: Accordion
links:
  - label: GitHub también
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/prose/Accordion.vue
---

@@pH000@@Uso del producto

Utilice los componentes `accordion` y `accordion-item` para mostrar un [Accordion](/docs/components/accordion) en su contenido.

::code-preview{class="[&>div]:*:my-0"}

:::accordion
---
Valoración Default:
  @@pH007 @@"1"
---

::accordion-item{label="¿ Nuxt UI es gratis de usar?" icon="i-lucide-circle-help"}
Nuxt UI es completamente gratuito y de código abierto bajo la licencia MIT. Todos los 125 + componentes están disponibles para todos.
::

::accordion-item{label="¿ Puedo usar Nuxt UI con Vue sin Nuxt?" icon="i-lucide-circle-help"}
¡ Sí! Aunque está optimizado para Nuxt, la interfaz de usuario de Nuxt funciona perfectamente con proyectos independientes de Vue a través de nuestro complemento Vite. Puede seguir la guía de instalación [](/docs/getting-started/installation/vue) para comenzar.
::

::accordion-item{label="¿ Está Nuxt UI listo para la producción?" icon="i-lucide-circle-help"}
La interfaz de usuario de Nuxt se utiliza en producción en miles de aplicaciones con pruebas exhaustivas, actualizaciones periódicas y mantenimiento activo.
::

:::

#Código

```mdc
::accordion
---
defaultValue:
  - '1'
---

::accordion-item{label="Is Nuxt UI free to use?" icon="i-lucide-circle-help"}
Yes! Nuxt UI is completely free and open source under the MIT license. All 125+ components are available to everyone.
::

::accordion-item{label="Can I use Nuxt UI with Vue without Nuxt?" icon="i-lucide-circle-help"}
Yes! While optimized for Nuxt, Nuxt UI works perfectly with standalone Vue projects via our Vite plugin. You can follow the [installation guide](/docs/getting-started/installation/vue) to get started.
::

::accordion-item{label="Is Nuxt UI production-ready?" icon="i-lucide-circle-help"}
Yes! Nuxt UI is used in production by thousands of applications with extensive tests, regular updates, and active maintenance.
::

::
```

::

@@pH036@@pH036

@@@3700000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000

Artículo siguienteCOMPONENTES {prose}

@@39@39@39

Componentes: {prose}

@410000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000

::component-theme{prose}
---
Extras:
  @@42000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
---
::

@@changelog

por: component-changelog {prefix="prose"}
