---
title: gebruikOverlay
description: 'Een composable om overlays programmatisch te besturen.'
---

## Gebruik

Gebruik de automatisch geïmporteerde `useOverlay` composable om [Modal](/docs/components/modal) en [Slideover](/docs/components/slideover) componenten programmatisch te bedienen.

::component-example
---
name: 'use-overlay-example'
---
::

- De `useOverlay` composable is gemaakt met `createSharedComposable`, zodat dezelfde overlay-status wordt gedeeld over uw hele applicatie.

::note
Wacht op `overlay.open()` om een waarde terug te krijgen van de overlay. Dit werkt alleen als de **overlay-component een `close` event** uitzendt. Zie het onderstaande voorbeeld voor details.
::

## API

`useOverlay()`{lang="ts-type"}

De `useOverlay` composable biedt methoden om overlays wereldwijd te beheren. Elke gemaakte overlay retourneert een instantie met zijn eigen methoden.

### create ()

`create(component: T, options?: OverlayOptions<ComponentProps<T>>): OverlayInstance<T>`{lang="ts-type"}

Maak een overlay en retourneer een fabrieksinstantie.

#### Parameters

::field-group

  ::field{name="component" type="T" required}
De te renderen overlay-component.
  ::

  ::field{name="options" type="OverlayOptions"}
Configuratie opties voor de overlay.

    ::collapsible

      ::field-group
        ::field{name="defaultOpen" type="boolean"}
Open de overlay onmiddellijk nadat deze is gemaakt. Standaard `false`.
        ::

        ::field{name="props" type="ComponentProps"}
Een optioneel object van rekwisieten om door te geven aan de gerenderde component.
        ::

        ::field{name="destroyOnClose" type="boolean"}
Verwijdert de overlay uit het geheugen wanneer deze is gesloten. Standaard `false`.
        ::
      ::
    ::
  ::
::

### open ()

`open(id: symbol, props?: ComponentProps<T>): OpenedOverlay<T>`{lang="ts-type"}

Open een overlay door zijn `id`.

#### Parameters

::field-group
  ::field{name="id" type="symbol" required}
De identificatie van de overlay.
  ::

  ::field{name="props" type="ComponentProps<T>"}
Een optioneel object van rekwisieten om door te geven aan de gerenderde component.
  ::
::

### sluiten ()

`close(id: symbol, value?: any): void`{lang="ts-type"}

Sluit een overlay door zijn `id`.

#### Parameters

::field-group
  ::field{name="id" type="symbol" required}
De identificatie van de overlay.
  ::

  ::field{name="value" type="any"}
Een waarde om de overlay-belofte mee op te lossen.
  ::
::

### closeAllemaal ()

`closeAll(): void`{lang="ts-type"}

Sluit alle open overlays.

### patch ()

`patch(id: symbol, props: Partial<ComponentProps<T>>): void`{lang="ts-type"}

Update een overlay door zijn `id`.

#### Parameters

::field-group
  ::field{name="id" type="symbol" required}
De identificatie van de overlay.
  ::

  ::field{name="props" type="Partial<ComponentProps<T>>" required}
Een object van rekwisieten om bij te werken op de gerenderde component.
  ::
::

### unmount ()

`unmount(id: symbol): void`{lang="ts-type"}

Verwijder een overlay van de DOM door zijn `id`.

#### Parameters

::field-group
  ::field{name="id" type="symbol" required}
De identificatie van de overlay.
  ::
::

### isOpen ()

`isOpen(id: symbol): boolean`{lang="ts-type"}

Controleer of een overlay open is met `id`.

#### Parameters

::field-group
  ::field{name="id" type="symbol" required}
De identificatie van de overlay.
  ::
::

### overlays

`overlays: Overlay[]`{lang="ts-type"}

In-memory lijst van alle overlays die zijn gemaakt.

API voor ## Instance

Dit zijn de methoden die beschikbaar zijn op de instantie die wordt geretourneerd door `create()`.

### open ()

`open(props?: ComponentProps<T>): OpenedOverlay<T>`{lang="ts-type"}

Open de overlay. Retourneert een `OpenedOverlay`, een belofte die wordt opgelost met de waarde die wordt uitgezonden door de `close`-gebeurtenis. Dezelfde belofte wordt ook weergegeven als `result`, dus `const { result } = modal.open()` werkt ook.

#### Parameters

::field-group
  ::field{name="props" type="ComponentProps<T>"}
Een optioneel object van rekwisieten om door te geven aan de gerenderde component.
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

### sluiten ()

`close(value?: any): void`{lang="ts-type"}

Sluit de overlay.

#### Parameters

::field-group
  ::field{name="value" type="any"}
Een waarde om de overlay-belofte mee op te lossen.
  ::
::

### patch ()

`patch(props: Partial<ComponentProps<T>>): void`{lang="ts-type"}

Werk de rekwisieten van de overlay bij.

#### Parameters

::field-group
  ::field{name="props" type="Partial<ComponentProps<T>>" required}
Een object van rekwisieten om bij te werken op de gerenderde component.
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

## Voorbeelden

### Met meerdere overlays

Dit voorbeeld laat zien hoe u meerdere overlays kunt beheren en gegevens tussen hen kunt doorgeven:

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

### Dialoogvenster bevestigen

Dit voorbeeld laat zien hoe u een herbruikbaar bevestigingsdialoogpatroon kunt maken met behulp van een aangepaste `useConfirmDialog`-composable die `useOverlay` omhult.
Deze aanpak maakt eigenzinnige dialogen mogelijk die zijn afgestemd op specifieke zakelijke vereisten en ontwerpvoorkeuren.

1. Maak een `ConfirmDialog`-component die een booleaanse waarde uitzendt wanneer deze is gesloten:

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

2. Maak een `useConfirmDialog` composable die een belofte retourneert:

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

3. Gebruik de composable in uw componenten:

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

## Voorbehoud

### Voorzien / Injecteren

Bij het programmatisch openen van overlays (modals, slideovers enzovoort), heeft de overlay-component alleen toegang tot geïnjecteerde waarden van de component die `UApp` bevat (meestal `app.vue` of lay-outcomponenten).
Dit komt omdat overlays buiten de paginacontext worden gemonteerd door de `UApp`-component.

Als zodanig wordt het gebruik van `provide()` in pagina 's of bovenliggende componenten niet rechtstreeks ondersteund. Om opgegeven waarden door te geven aan overlays, wordt aanbevolen om in plaats daarvan rekwisieten te gebruiken:

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
