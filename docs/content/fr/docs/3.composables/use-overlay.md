---
title: Utilisateur
description: 'Une superposition composable pour le contrôle programmatique.'
---

@@ph000@@utilisation

Utilisez le composant `useOverlay` auto-importé pour contrôler par programmation les composants [](/docs/components/modal) et [Slideover](/docs/components/slideover).

::component-example
---
nommé:'use-overlay-example'
---
::

- Le composable `useOverlay` est créé à l'aide de `createSharedComposable`, garantissant que le même état de superposition est partagé sur l'ensemble de votre application.

::note
Attendez `overlay.open()` pour obtenir une valeur de retour de la superposition. Cela ne fonctionne que si le composant de superposition **émet un `close` event**. Voir l'exemple ci-dessous pour les détails.
::

@@P017@@Paix

@@

Le composable `useOverlay` fournit des méthodes pour gérer les superpositions globalement. Chaque superposition créée renvoie une instance avec ses propres méthodes.

@@21@@créer ()

@@

Créez une superposition et renvoyez une instance d'usine.

@@ph024@@Paramètres

::field-group

  ::field{name="component" type="T" required}
  Le composant overlay pour rendre.
  ::

  ::field{name="options" type="OverlayOptions"}
  Options de configuration pour l'overlay.

    ::collapsible

      ::field-group
        ::field{name="defaultOpen" type="boolean"}
        Ouvrez la superposition immédiatement après sa création. Par défaut à `false`.
        ::

        ::field{name="props" type="ComponentProps"}
        Un objet optionnel de props à passer au composant rendu.
        ::

        ::field{name="destroyOnClose" type="boolean"}
        Supprime la superposition de la mémoire à la fermeture. Par défaut à `false`.
        ::
      ::
    ::
  ::
::

@@27@ouvert ()

@@

Ouvrez une superposition par son `id`.

@@ph031@@Paramètres

::field-group
  ::field{name="id" type="symbol" required}
  L'identification de l'overlay.
  ::

  ::field{name="props" type="ComponentProps<T>"}
  Un objet optionnel de props à passer au composant rendu.
  ::
::

@@ph032@close ()

@@

Fermez une superposition par son `id`.

@@ph036@paramètres

::field-group
  ::field{name="id" type="symbol" required}
  L'identification de l'overlay.
  ::

  ::field{name="value" type="any"}
  Une valeur pour résoudre la promesse de superposition.
  ::
::

@@ph037@@closeAll ()

@@

Fermez toutes les ouvertures.

@@ph040@patch ()

@@

Mettre à jour une superposition par son `id`.

@@ph044@@Paramètres

::field-group
  ::field{name="id" type="symbol" required}
  L'identification de l'overlay.
  ::

  ::field{name="props" type="Partial<ComponentProps<T>>" required}
  Un objet de props à mettre à jour sur le composant rendu.
  ::
::

### unmount ()

@@

Retirer une superposition du DOM par son `id`.

@@ph049@@Paramètres

::field-group
  ::field{name="id" type="symbol" required}
  L'identification de l'overlay.
  ::
::

### isOuvert ()

@@

Vérifiez si une superposition est ouverte en utilisant son `id`.

#### Paramètres

::field-group
  ::field{name="id" type="symbol" required}
  L'identification de l'overlay.
  ::
::

@@555@référencement

@@

Liste en mémoire de toutes les superpositions créées.

## Instance API (en anglais)

Ce sont les méthodes disponibles sur l'instance retournée par `create()`.

@@ph060@open ()

@@

Ouvrez la superposition. Renvoie un `OpenedOverlay`, une promesse qui se résout avec la valeur émise par l'événement `close`. La même promesse est également exposée en tant que `result`, donc `const { result } = modal.open()` fonctionne aussi.

@@ph067@paramètres

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

@@ph083@@close ()

@@

Fermez l'overlay.

@@ph086@paramètres

::field-group
  ::field{name="value" type="any"}
  Une valeur pour résoudre la promesse de superposition.
  ::
::

### patch ()

@@

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

@@ph110@exemples

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

### Confirmez le dialogue

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

2. Créer un `useConfirmDialog` composable qui renvoie une promesse:

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

@218@@référencement

### Provide/Injecter

Lors de l'ouverture des superpositions par programme (modaux, diapositives, etc.), le composant de superposition ne peut accéder qu 'aux valeurs injectées du composant contenant `UApp`(généralement `app.vue` ou des composants de mise en page).

En tant que tel, l'utilisation de `provide()` dans les pages ou les composants parents n'est pas prise en charge directement. Pour passer les valeurs fournies aux superpositions, l'approche recommandée consiste à utiliser des props à la place:

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
