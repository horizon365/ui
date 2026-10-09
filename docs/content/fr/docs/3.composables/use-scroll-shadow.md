---
title: utilisateurscrollshadow
description: 'Un composable pour appliquer des effets d'ombre de défilement sur n'importe quel élément défilable.'
---

## Utilisation

Utilisez le composable `useScrollShadow` importé automatiquement pour appliquer des ombres de fondu sur les bords d'un élément défilant, indiquant que plus de contenu est disponible dans la direction de défilement.

::component-example
---
name: 'use-scroll-shadow-example'
---
::

- Utilise le CSS `mask-image` pour fondre le contenu sur les bords plutôt que de superposer les éléments, de sorte qu 'il fonctionne sur n'importe quel arrière-plan.
- Détecte automatiquement si l'élément déborde et n'applique des ombres que si nécessaire.
- Supporte les orientations verticales et horizontales.

## api

`useScrollShadow(element, options?)`x{lang="ts-type"}

### Paramètres

::field-group

  ::field{name="element" type="MaybeRef<HTMLElement | null | undefined>" required}
  Une référence de modèle ou une référence réactive à l'élément défilable.
  ::

  ::field{name="options" type="UseScrollShadowOptions"}
  Options de configuration pour l'ombre de défilement.

    ::collapsible

      ::field-group
        ::field{name="size" type="MaybeRefOrGetter<number>" default="24"}
        La taille de l'ombre en pixels.
        ::

        ::field{name="orientation" type="MaybeRefOrGetter<'vertical' | 'horizontal'>" default="'vertical'"}
        La direction de défilement pour appliquer des ombres.
        ::
      ::
    ::
  ::
::

### retour

::field-group

  ::field{name="style" type="ComputedRef<CSSProperties | undefined>"}
  Un objet de style réactif à lier sur l'élément déroulant avec `:style`. Contient `maskImage` lorsque les ombres sont actives, `undefined` autrement.
  ::

  ::field{name="isOverflowing" type="ComputedRef<boolean>"}
  Si le contenu de l'élément dépasse sa zone visible.
  ::

  ::field{name="arrivedState" type="{ top: boolean, bottom: boolean, left: boolean, right: boolean }"}
  État d'arrivée de défilement réactif de [`useScroll`](https://vueuse.org/core/useScroll/).
  ::
::

## exemples

### horizontale

Utilisez l'option `orientation` pour les conteneurs déroulants horizontalement:

```vue
<script setup lang="ts">
const el = useTemplateRef('el')

const { style } = useScrollShadow(el, { orientation: 'horizontal' })
</script>

<template>
  <div ref="el" class="overflow-x-auto whitespace-nowrap" :style="style">
    <!-- Horizontally scrollable content -->
  </div>
</template>
```

### Taille personnalisée

Utilisez l'option `size` pour modifier la taille de l'ombre en pixels:

```vue
<script setup lang="ts">
const el = useTemplateRef('el')

const { style } = useScrollShadow(el, { size: 48 })
</script>

<template>
  <div ref="el" class="max-h-[300px] overflow-y-auto" :style="style">
    <!-- Scrollable content -->
  </div>
</template>
```
