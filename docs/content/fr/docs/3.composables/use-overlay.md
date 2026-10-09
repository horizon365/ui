---
title: Utilisateur
description: 'Une superposition composable pour le contrôle programmatique.'
---

## Utilisation

Utilisez le composable `useOverlay` auto-importé pour contrôler par programmation les composants [Modal](/docs/components/modal) et [Slideoverxph007/docs/components/slideover).

::component-example
---
name: 'use-overlay-example'
---
::

- Le composable `useOverlay` est créé à l'aide de `createSharedComposable`, garantissant que le même état de superposition est partagé sur l'ensemble de votre application.

::note
Attendez `overlay.open()` pour obtenir une valeur de retour de l'overlay. Cela ne fonctionne que si le composant **overlay émet un événement `close` **.
::

## api

`useOverlay()`x{lang="ts-type"}

Le composable `useOverlay` fournit des méthodes pour gérer les superpositions globalement. Chaque superposition créée renvoie une instance avec ses propres méthodes.

### create ()

Xph025xx{lang="ts-type"}

Créez une superposition et renvoyez une instance d'usine.

#### Paramètres

::field-group

  ::field{name="component" type="T" required}
  Le composant overlay pour rendre.
  ::

  ::field{name="options" type="OverlayOptions"}
  Options de configuration pour l'overlay.

    ::collapsible

      ::field-group
        ::field{name="defaultOpen" type="boolean"}
        Ouvrez la superposition immédiatement après sa création. Par défaut, `false`.
        ::

        ::field{name="props" type="ComponentProps"}
        Un objet optionnel de props à passer au composant rendu.
        ::

        ::field{name="destroyOnClose" type="boolean"}
        Supprime la superposition de la mémoire à la fermeture. Par défaut `false`.
        ::
      ::
    ::
  ::
::

### open (référence)

`open(id: symbol, props?: ComponentProps<T>): OpenedOverlay<T>`x{lang="ts-type"}

Ouvrez une superposition par son `id`.

#### Paramètres

::field-group
  ::field{name="id" type="symbol" required}
  L'identification de l'overlay.
  ::

  ::field{name="props" type="ComponentProps<T>"}
  Un objet optionnel de props à passer au composant rendu.
  ::
::

### close ()

`close(id: symbol, value?: any): void`x{lang="ts-type"}

Fermez une superposition par son `id`.

#### Paramètres

::field-group
  ::field{name="id" type="symbol" required}
  L'identification de l'overlay.
  ::

  ::field{name="value" type="any"}
  Une valeur pour résoudre la promesse de superposition.
  ::
::

### closeAll ()

`closeAll(): void`x{lang="ts-type"}

Fermez toutes les ouvertures.

### patch (résolu)

`patch(id: symbol, props: Partial<ComponentProps<T>>): void`x{lang="ts-type"}

Mettre à jour une superposition par son `id`.

#### Paramètres

::field-group
  ::field{name="id" type="symbol" required}
  L'identification de l'overlay.
  ::

  ::field{name="props" type="Partial<ComponentProps<T>>" required}
  Un objet de props à mettre à jour sur le composant rendu.
  ::
::

### unmount ()

`unmount(id: symbol): void`x{lang="ts-type"}

Supprimer une superposition du DOM par son `id`.

#### Paramètres

::field-group
  ::field{name="id" type="symbol" required}
  L'identification de l'overlay.
  ::
::

### isOuvert ()

`isOpen(id: symbol): boolean`x{lang="ts-type"} référence

Vérifiez si une superposition est ouverte en utilisant son `id`.

#### Paramètres

::field-group
  ::field{name="id" type="symbol" required}
  L'identification de l'overlay.
  ::
::

### superpositions

`overlays: Overlay[]`x{lang="ts-type"}

Liste en mémoire de toutes les superpositions créées.

API ## Instance

Ce sont les méthodes disponibles sur l'instance retournée par `create()`.

### open (résolu)

`open(props?: ComponentProps<T>): OpenedOverlay<T>`x{lang="ts-type"}

Ouvrez la superposition. Renvoie un `OpenedOverlay`, une promesse qui se résout avec la valeur émise par l'événement `close`.La même promesse est également exposée en tant que `result`, donc `const { result } = modal.open()` fonctionne aussi.

#### Paramètres

::field-group
  ::field{name="props" type="ComponentProps<T>"}
  Un objet optionnel de props à passer au composant rendu.
  ::
::

```vue
<script setup lang="ts">
import { LazyModalExample } from '#components'

const overlay = useOverlay()

const modal = overlay.create(LazyModalExample)

function openModal() {
  modal.open({
    title: 'Welcome'
  })
}
</script>
```

### close ()

`close(value?: any): void`x{lang="ts-type"}

Fermez l'overlay.

#### Paramètres

::field-group
  ::field{name="value" type="any"}
  Une valeur pour résoudre la promesse de superposition.
  ::
::

### patch (équivalent)

`patch(props: Partial<ComponentProps<T>>): void`x{lang="ts-type"}

Mise à jour des appareils de l'Overlay.

#### Paramètres

::field-group
  ::field{name="props" type="Partial<ComponentProps<T>>" required}
  Un objet de props à mettre à jour sur le composant rendu.
  ::
::

```vue
<script setup lang="ts">
import { LazyModalExample } from '#components'

const overlay = useOverlay()

const modal = overlay.create(LazyModalExample, {
  props: { title: 'Welcome' }
})

function openModal() {
  modal.open()
}

function updateModalTitle() {
  modal.patch({ title: 'Updated Title' })
}
</script>
```

## Exemples

### Avec plusieurs superpositions

Cet exemple montre comment gérer plusieurs superpositions et transmettre des données entre elles:

```vue
<script setup lang="ts">
import { ModalA, ModalB, SlideoverA } from '#components'

const overlay = useOverlay()

// Create with default props
const modalA = overlay.create(ModalA, { props: { title: 'Welcome' } })
const modalB = overlay.create(ModalB)
const slideoverA = overlay.create(SlideoverA)

const openModalA = () => {
  // Open modalA, but override the title prop
  modalA.open({ title: 'Hello' })
}

const openModalB = async () => {
  // Open modalB, and wait for its result
  const input = await modalB.open()

  // Pass the result from modalB to the slideover, and open it
  slideoverA.open({ input })
}
</script>

<template>
  <UButton label="Open Modal" @click="openModalA" />
</template>
```

### Confirmar diálogo

Cet exemple montre comment créer un modèle de dialogue de confirmation réutilisable à l'aide d'un composable `useConfirmDialog` personnalisé qui enveloppe `useOverlay`. Cette approche permet des dialogues opinionnés adaptés aux exigences métier spécifiques et aux préférences de conception.

1. Créer un composant `ConfirmDialog` qui émet une valeur booléenne lorsqu 'il est fermé:

```vue [components/ConfirmDialog.vue]
<script lang="ts" setup>
interface ConfirmDialogProps {
  title?: string
  description?: string
}

defineProps<ConfirmDialogProps>()

const emits = defineEmits<{
  close: [value: boolean]
}>()
</script>

<template>
  <UModal
    :title="title"
    :description="description"
    :dismissible="false"
    :ui="{ footer: 'justify-end' }"
  >
    <template #footer>
      <UButton label="Cancel" color="neutral" variant="outline" @click="emits('close', false)" />
      <UButton label="Confirm" color="neutral" @click="emits('close', true)" />
    </template>
  </UModal>
</template>
```

2. Créer un composable `useConfirmDialog` qui renvoie une promesse:

```ts [composables/useConfirmDialog.ts]
import { ConfirmDialog } from '#components'

export interface ConfirmDialogOptions {
  title: string
  description?: string
}

export const useConfirmDialog = () => {
  const overlay = useOverlay()

  return (options: ConfirmDialogOptions): Promise<boolean> => {
    const modal = overlay.create(ConfirmDialog, {
      destroyOnClose: true,
      props: options
    })

    return modal.open()
  }
}
```

3. Utilisez le composable dans vos composants:

```vue
<script setup lang="ts">
const confirm = useConfirmDialog()

const handleDelete = async () => {
  const confirmed = await confirm({
    title: 'Delete item',
    description: 'Are you sure you want to delete this item?'
  })

  if (confirmed) {
    console.log('Item deleted')
  }
}
</script>

<template>
  <UButton label="Delete item" @click="handleDelete" />
</template>
```

## Détails

### Provide/Injecter (en anglais)

Lors de l'ouverture des superpositions par programme (modaux, diapositives, etc.), le composant de superposition ne peut accéder qu 'aux valeurs injectées du composant contenant `UApp` (généralement des composants `app.vue` ou de mise en page).

En tant que tel, l'utilisation de `provide()` dans les pages ou les composants parents n'est pas prise en charge directement.Pour transmettre les valeurs fournies aux superpositions, l'approche recommandée consiste à utiliser des props à la place:

```vue
<script setup lang="ts">
import { LazyModalExample } from '#components'

const overlay = useOverlay()

const providedValue = inject('valueProvidedInPage')

const modal = overlay.create(LazyModalExample, {
  props: {
    providedValue
  }
})
</script>
```
