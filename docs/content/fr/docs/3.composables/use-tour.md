---
title: Utilisation
description: 'Un composable pour construire des visites guidées en ré-ancrant un seul Popover à travers les étapes.'
---

@@ph000@utilisation

Utilisez le composant `useTour` auto-importé pour conduire une visite guidée avec un seul [Popover](/docs/components/popover) dont l'ancre se déplace entre les étapes. Le composable possède l'état de l'étape et résout le `target` de chaque étape en un `reference` que vous liez à `<UPopover>`, Vous gardez un contrôle total sur le contenu et la navigation.

::component-example
---
Collapse: vrai
nom: 'exemple de tour'
---
::

Chaque étape requiert un `target` auquel le popover s'ancre. Il accepte un sélecteur CSS, un élément, un élément virtuel (n'importe quoi avec `getBoundingClientRect`), ou un ref/getter retournant l'un de ceux-ci. Pass `null` pour ancrer l'étape au centre de la fenêtre d'affichage. Tout autre champ sur une étape (`title`,`body`,`side`,...) est passé intact et disponible via `current`.

```vue
<script setup lang="ts">
const card = useTemplateRef('card')

const tour = useTour([
  { target: '#cta', title: 'Get started' },
  { target: () => card.value, title: 'Profile', side: 'right' },
  { target: null, title: 'All set' }
])
</script>

<template>
  <UButton @click="tour.start()">Start tour</UButton>

  <UPopover :open="tour.open.value" :reference="tour.reference.value" :dismissible="false">
    <template #content>
      <!-- your content + buttons -->
      <UButton :disabled="!tour.hasPrev.value" @click="tour.prev()">Back</UButton>
      <UButton @click="tour.next()">{{ tour.hasNext.value ? 'Next' : 'Finish' }}</UButton>
    </template>
  </UPopover>
</template>
```

- Construit sur le prop `reference` réactif du Popover, de sorte que le popover se repositionne en douceur lorsque l'étape active change.
- La cible active est défilée automatiquement dans la vue lorsqu 'une étape devient active.
- Puisque vous rendre le contenu vous-même, il n'y a pas de thème supplémentaire ou locale à maintenir.

@@ph043@@api

@@

@@ph046@paramètres

::field-group

  ::field{name="steps" type="MaybeRefOrGetter<TourStep[]>" required}
  La liste des étapes de la tournée peut être un tableau statique, un `ref`, ou un getter pour les étapes réactives.

    ::collapsible

      ::field-group
        ::field{name="target" type="MaybeRefOrGetter<string | ReferenceElement | null | undefined>"}
        Accepte un sélecteur CSS (`'#id'`,`'.class'`, ou un identifiant nu résolu comme `#id`), un élément, un élément virtuel ou un ref/getter en renvoyant un. Utilisez `null` pour centrer l'étape dans la fenêtre d'affichage.
        ::

        ::field{name="[key: string]" type="any"}
        Tous les champs supplémentaires (`title`,`body`,`side`,...) sont transmis et disponibles via `current`.
        ::
      ::
    ::
  ::

  ::field{name="options" type="UseTourOptions"}
  Options de configuration pour la tournée

    ::collapsible

      ::field-group
        ::field{name="initialStep" type="number" default="0"}
        L'index de pas sur lequel le tour commence.
        ::

        ::field{name="loop" type="boolean" default="false"}
        Retour à la première étape après la dernière.
        ::

        ::field{name="scrollIntoView" type="boolean | ScrollIntoViewOptions" default="true"}
        Scroll the target to view when a step becomes active.
        ::
      ::
    ::
  ::
::

@@P56@retour

::field-group

  ::field{name="open" type="Ref<boolean>"}
  La tournée est actuellement ouverte.
  ::

  ::field{name="index" type="Ref<number>"}
  L'index de pas actuel, serré sur la plage de pas.
  ::

  ::field{name="current" type="ComputedRef<TourStep | undefined>"}
  L'objet step courant, ou `undefined` lorsqu 'il n'y a pas d'étapes.
  ::

  ::field{name="reference" type="ComputedRef<ReferenceElement | undefined>"}
  L'ancre résolue pour l'étape en cours, à passer à `<UPopover :reference>`.
  ::

  ::field{name="total" type="ComputedRef<number>"}
  Le nombre total d'étapes.
  ::

  ::field{name="hasNext" type="ComputedRef<boolean>"}
  Si une prochaine étape existe.
  ::

  ::field{name="hasPrev" type="ComputedRef<boolean>"}
  Si une étape précédente existe.
  ::

  ::field{name="start" type="(index?: number) => void"}
  Ouvrez le tour, optionnellement à un index donné.
  ::

  ::field{name="next" type="() => void"}
  Passez à l'étape suivante. Boucles ou finitions à la fin en fonction de l'option `loop`.
  ::

  ::field{name="prev" type="() => void"}
  Allez à l'étape précédente.
  ::

  ::field{name="goTo" type="(index: number) => void"}
  Passez à une étape spécifique et ouvrez la visite.
  ::

  ::field{name="finish" type="() => void"}
  Fermez la tournée.
  ::
::
