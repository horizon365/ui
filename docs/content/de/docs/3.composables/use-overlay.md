---
title: NutzenOverlay
description: 'Ein Composable, um Overlays programmgesteuert zu steuern.'
---

## Bearbeiten

Verwenden Sie das automatisch importierte `useOverlay` Composable, um [Modal](/docs/components/modal) und [Slideover](/docs/components/slideoverxph09x Komponenten programmgesteuert zu steuern.

::component-example
---
name: 'use-overlay-example'
---
::

- Das `useOverlay` composable wird mit `createSharedComposable` erstellt, um sicherzustellen, dass der gleiche Overlay-Status in Ihrer gesamten Anwendung gemeinsam genutzt wird.

::note
Warten Sie auf `overlay.open()`, um einen Wert aus dem Overlay zu erhalten. Dies funktioniert nur, wenn die **overlay-Komponente ein `close`-Event** ausgibt.
::

## API Bearbeiten

`useOverlay()`{lang="ts-type"} nicht

`useOverlay` composable bietet Methoden zum globalen Verwalten von Overlays. Jedes erstellte Overlay gibt eine Instanz mit eigenen Methoden zurück.

### create ()(nicht verfügbar)

`create(component: T, options?: OverlayOptions<ComponentProps<T>>): OverlayInstance<T>`{lang="ts-type"} nicht

Erstellen Sie ein Overlay und geben Sie eine Factory-Instanz zurück.

#### Parameters (englisch)

::field-group

  ::field{name="component" type="T" required}
  Die Overlay-Komponente zum Rendern.
  ::

  ::field{name="options" type="OverlayOptions"}
  Konfigurationsmöglichkeiten für das Overlay.

    ::collapsible

      ::field-group
        ::field{name="defaultOpen" type="boolean"}
        Öffnen Sie das Overlay sofort nach der Erstellung. Standardmäßig `false`.
        ::

        ::field{name="props" type="ComponentProps"}
        Ein optionales Objekt von Requisiten, das an die gerenderte Komponente übergeben werden soll.
        ::

        ::field{name="destroyOnClose" type="boolean"}
        Entfernt das Overlay aus dem Speicher, wenn es geschlossen ist. Standardmäßig ist `false`.
        ::
      ::
    ::
  ::
::

### open ()(nicht verfügbar)

`open(id: symbol, props?: ComponentProps<T>): OpenedOverlay<T>`{lang="ts-type"} nicht

Öffnen Sie ein Overlay mit seiner `id`.

#### Parameters (englisch)

::field-group
  ::field{name="id" type="symbol" required}
  Die Identifikation des Overlays.
  ::

  ::field{name="props" type="ComponentProps<T>"}
  Ein optionales Objekt von Requisiten, das an die gerenderte Komponente übergeben wird.
  ::
::

### close () Bearbeiten

`close(id: symbol, value?: any): void`{lang="ts-type"} nicht

Schließen Sie ein Overlay mit seinem `id`.

#### Parameters (englisch)

::field-group
  ::field{name="id" type="symbol" required}
  Die Identität des Overlays.
  ::

  ::field{name="value" type="any"}
  Ein Wert, mit dem das Overlay-Versprechen aufgelöst wird.
  ::
::

### closeAll ()(nicht verfügbar)

`closeAll(): void`{lang="ts-type"} nicht

Schließen Sie alle offenen Überlagerungen.

### patch ()(Deutsche Ausgabe)

`patch(id: symbol, props: Partial<ComponentProps<T>>): void`{lang="ts-type"} nicht

Aktualisieren Sie ein Overlay mit seinem `id`.

#### Parameters (englisch)

::field-group
  ::field{name="id" type="symbol" required}
  Die Identifikation des Overlays.
  ::

  ::field{name="props" type="Partial<ComponentProps<T>>" required}
  Ein Objekt von Requisiten zum Aktualisieren der gerenderten Komponente.
  ::
::

### unmount ()(nicht verfügbar)

`unmount(id: symbol): void`{lang="ts-type"} nicht

Entfernen Sie ein Overlay aus dem DOM durch seine `id`.

#### Parameters (englisch)

::field-group
  ::field{name="id" type="symbol" required}
  Die Identifikation des Overlays.
  ::
::

### isOpen () Bearbeiten

`isOpen(id: symbol): boolean`{lang="ts-type"} nicht

Prüfen Sie, ob ein Overlay mit seinem `id` geöffnet ist.

#### Parameters (englisch)

::field-group
  ::field{name="id" type="symbol" required}
  Die Identifikation des Overlays.
  ::
::

### overlays (englisch)

`overlays: Overlay[]`{lang="ts-type"} nicht

In-Memory-Liste aller Overlays, die erstellt wurden.

## Instanz-API

Dies sind die Methoden, die auf der von `create()` zurückgegebenen Instanz verfügbar sind.

### open ()(Deutsche Ausgabe)

`open(props?: ComponentProps<T>): OpenedOverlay<T>`{lang="ts-type"} nicht

Öffnet das Overlay. Gibt ein `OpenedOverlay` zurück, ein Versprechen, das mit dem vom `close`-Ereignis ausgegebenen Wert aufgelöst wird. Das gleiche Versprechen wird auch als `result` angezeigt, so dass `const { result } = modal.open()` auch funktioniert.

#### Parameters (englisch)

::field-group
  ::field{name="props" type="ComponentProps<T>"}
  Ein optionales Objekt von Requisiten, das an die gerenderte Komponente übergeben wird.
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

### close () Bearbeiten

`close(value?: any): void`{lang="ts-type"} (nicht)

Schließen Sie das Overlay.

#### Parameters (englisch)

::field-group
  ::field{name="value" type="any"}
  Ein Wert, mit dem das Overlay-Versprechen aufgelöst wird.
  ::
::

### patch ()(Deutsche Ausgabe)

`patch(props: Partial<ComponentProps<T>>): void`{lang="ts-type"} nicht

Aktualisieren Sie die Requisiten des Overlays.

#### Parameters (englisch)

::field-group
  ::field{name="props" type="Partial<ComponentProps<T>>" required}
  Ein Objekt von Requisiten zum Aktualisieren der gerenderten Komponente.
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

## Beispiele

### With multiple overlays (mit mehreren Überlagerungen)

Dieses Beispiel zeigt, wie Sie mehrere Overlays verwalten und Daten zwischen ihnen übergeben:

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

### Bestätigen

Dieses Beispiel zeigt, wie Sie ein wiederverwendbares Bestätigungsdialogmuster mit einem benutzerdefinierten `useConfirmDialog` Composable erstellen, das `useOverlay` umschließt.

1. Erstellen Sie eine `ConfirmDialog`-Komponente, die einen booleschen Wert ausgibt, wenn sie geschlossen wird:

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

2. Erstellen Sie ein `useConfirmDialog` composable, das ein Versprechen zurückgibt:

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

3. Verwenden Sie das Composable in Ihren Komponenten:

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

## Caveats (englisch)

### Provide/Inject (Bereitstellen/Einführen)

Beim programmgesteuerten Öffnen von Overlays (Modals, Slideovers usw.) kann die Overlay-Komponente nur auf eingespeiste Werte von der Komponente zugreifen, die `UApp` enthält (normalerweise `app.vue` oder Layoutkomponenten).

Daher wird die Verwendung von `provide()` in Seiten oder übergeordneten Komponenten nicht direkt unterstützt. Um bereitgestellte Werte an Overlays zu übergeben, wird empfohlen, stattdessen Props zu verwenden:

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
