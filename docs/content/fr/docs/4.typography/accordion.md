---
title: ProseAccordéon
description: 'Créez des sections de contenu extensibles pour une meilleure organisation de l'information.'
category: components
navigation.title: Accordion
links:
  - label: GitHub à
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/prose/Accordion.vue
---

@@ph000@@utilisation

Utilisez les composants `accordion` et `accordion-item` pour afficher un [Accordion](/docs/components/accordion) dans votre contenu.

::code-preview{class="[&>div]:*:my-0"}

:::accordion
---
Valeur défaillante:
  @@ph007 @ 1
---

::accordion-item{label="Nuxt UI est-il gratuit à utiliser?" icon="i-lucide-circle-help"}
Nuxt UI est entièrement gratuit et open source sous licence MIT. Tous les 125 composants sont disponibles pour tous.
::

::accordion-item{label="Puis-je utiliser Nuxt UI avec Vue sans Nuxt?" icon="i-lucide-circle-help"}
Oui oui! Bien qu 'optimisée pour Nuxt, l'interface utilisateur Nuxt fonctionne parfaitement avec les projets Vue autonomes via notre plugin Vite. Vous pouvez suivre le guide d'installation ](/docs/getting-started/installation/vue) pour commencer.
::

::accordion-item{label="Nuxt UI est-il prêt pour la production?" icon="i-lucide-circle-help"}
Nuxt UI est utilisé en production par des milliers d'applications avec des tests approfondis, des mises à jour régulières et une maintenance active.
::

:::

#code

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

@@ph036@api

@@ph037@@props

: composant-props {prose}

@@ph039@@Slots

: composant-slots {prose}

@@ph041@thème

::component-theme{prose}
---
supplémentaire:
  @@ph042@accordéon
---
::

@changelog @changelog

: composant-changelog {prefix="prose"}
