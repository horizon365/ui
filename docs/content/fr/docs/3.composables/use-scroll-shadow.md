---
title: utilisateurscrollshadow
description: 'Un composable pour appliquer des effets d'ombre de défilement sur n'importe quel élément défilable.'
---

@@ph000@@utilisation

Utilisez le composable `useScrollShadow` à importation automatique pour appliquer des ombres de fondu sur les bords d'un élément défilable, indiquant que davantage de contenu est disponible dans la direction de défilement.

::component-example
---
nom: 'use-scroll-shadow-exemple'
---
::

- Utilise CSS `mask-image` pour fondre le contenu sur les bords plutôt que de superposer les éléments, de sorte qu 'il fonctionne sur n'importe quel arrière-plan.
- Détecte automatiquement si l'élément est débordé et n'applique des ombres que si nécessaire
- Prend en charge les orientations verticales et horizontales

@@ph006 @@ réponse

@@

@@ph009@paramètres

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

@@P10@retour

::field-group

  ::field{name="style" type="ComputedRef<CSSProperties | undefined>"}
  Un objet de style réactif à lier sur l'élément défilable avec `:style`. Contient `maskImage` lorsque les ombres sont actives,`undefined` sinon.
  ::

  ::field{name="isOverflowing" type="ComputedRef<boolean>"}
  Si le contenu de l'élément dépasse sa zone visible.
  ::

  ::field{name="arrivedState" type="{ top: boolean, bottom: boolean, left: boolean, right: boolean }"}
  État d'arrivée du défilement réactif de [`useScroll`](https://vueuse.org/core/useScroll/).
  ::
::

@@ph019@exemples

@200000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000

Utilisez l'option `orientation` pour les conteneurs défilables horizontalement:

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
