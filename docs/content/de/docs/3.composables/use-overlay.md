---
title: NutzenOverlay
description: 'Ein Composable, um Overlays programmgesteuert zu steuern.'
---

@@@ph000@@Verwendung

Verwenden Sie das automatisch importierte `useOverlay` composable, um die Komponenten [Modal](/docs/components/modal) und [Slideover](/docs/components/slideover) programmgesteuert zu steuern.

::component-example
---
Name: 'use-overlay-example'(Überlagerungsbeispiel)
---
::

- Das `useOverlay` composable wird mit `createSharedComposable` erstellt, um sicherzustellen, dass der gleiche Overlay-Zustand in Ihrer gesamten Anwendung gemeinsam genutzt wird.

::note
Dies funktioniert nur, wenn die Komponente **overlay ein `close` event** aussendet.
::

@@@@@b17@b17.de

{lang="ts-type"}

`useOverlay` composable bietet Methoden zum globalen Verwalten von Overlays. Jedes erstellte Overlay gibt eine Instanz mit eigenen Methoden zurück.

### create () Bearbeiten

{lang="ts-type"}

Erstellen Sie ein Overlay, und geben Sie eine Factory-Instanz zurück.

#### Parameter Bearbeiten

::field-group

  ::field{name="component" type="T" required}
  Die Overlay-Komponente zum Rendern.
  ::

  ::field{name="options" type="OverlayOptions"}
  Konfigurationsmöglichkeiten für das Overlay.

    ::collapsible

      ::field-group
        ::field{name="defaultOpen" type="boolean"}
        Öffnen Sie das Overlay sofort nach der Erstellung. Standardmäßig auf `false`.
        ::

        ::field{name="props" type="ComponentProps"}
        Ein optionales Objekt von Requisiten, das an die gerenderte Komponente übergeben werden soll.
        ::

        ::field{name="destroyOnClose" type="boolean"}
        Entfernt das Overlay aus dem Speicher, wenn es geschlossen ist. Standardmäßig `false`.
        ::
      ::
    ::
  ::
::

### open () Bearbeiten

{lang="ts-type"}

Öffnen Sie ein Overlay mit seinem `id`.

#### Parameter Bearbeiten

::field-group
  ::field{name="id" type="symbol" required}
  Die Identität des Overlays.
  ::

  ::field{name="props" type="ComponentProps<T>"}
  Ein optionales Objekt von Requisiten, das an die gerenderte Komponente übergeben wird.
  ::
::

### close ()

{lang="ts-type"}

Schließen Sie ein Overlay mit seinem `id`.

#### Parameter Bearbeiten

::field-group
  ::field{name="id" type="symbol" required}
  Die Identifikation des Overlays.
  ::

  ::field{name="value" type="any"}
  Ein Wert, mit dem das Overlay-Versprechen aufgelöst wird.
  ::
::

### closeAll ()

{lang="ts-type"}

Schließen Sie alle offenen Überlagerungen.

@@ph040@patch ()

{lang="ts-type"}

Aktualisieren Sie ein Overlay durch seine `id`.

#### Parameter Bearbeiten

::field-group
  ::field{name="id" type="symbol" required}
  Die Identifikation des Overlays.
  ::

  ::field{name="props" type="Partial<ComponentProps<T>>" required}
  Ein Objekt von Requisiten zum Aktualisieren der gerenderten Komponente.
  ::
::

### unmount ()

{lang="ts-type"}

Entfernen Sie ein Overlay aus dem DOM durch seine `id`.

#### Parameter Bearbeiten

::field-group
  ::field{name="id" type="symbol" required}
  Die Identifikation des Overlays.
  ::
::

### isOpen ()

{lang="ts-type"}

Überprüfen Sie, ob ein Overlay geöffnet ist, indem Sie seine `id`.

#### Parameter

::field-group
  ::field{name="id" type="symbol" required}
  Die Identifikation des Overlays.
  ::
::

@@555@Überschneidungen

{lang="ts-type"}

In-Memory-Liste aller Overlays, die erstellt wurden.

## Instanz-API

Dies sind die Methoden, die für die von `create()` zurückgegebene Instanz verfügbar sind.

### open () Bearbeiten

{lang="ts-type"}

Öffnet das Overlay. Gibt ein `OpenedOverlay` zurück, ein Versprechen, das mit dem vom `close`-Ereignis ausgegebenen Wert aufgelöst wird. Das gleiche Versprechen wird auch als `result` angezeigt, so dass `const { result } = modal.open()` auch funktioniert.

#### Parameter Bearbeiten

::field-group
  ::field{name="props" type="ComponentProps<T>"}
  Ein optionales Objekt von Requisiten, das an die gerenderte Komponente übergeben werden soll.
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

@@ph083@close () Bearbeiten

@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

Schließen Sie den Overlay.

#### Parameter

::field-group
  ::field{name="value" type="any"}
  Ein Wert, mit dem das Overlay-Versprechen aufgelöst wird.
  ::
::

@@ph087@patch ()

@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

Aktualisieren Sie die Requisiten des Overlays.

@@ph090@@Parameter

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

@@@PH11@@Mit mehreren Overlays

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

### Bestätigen Dialog

Dieses Beispiel zeigt, wie man ein wiederverwendbares Bestätigungsdialogmuster mit einem benutzerdefinierten `useConfirmDialog` composable erstellt, das `useOverlay` umschließt.

1. Erstellen Sie eine `ConfirmDialog`-Komponente, die beim Schließen einen booleschen Wert ausgibt:

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

2. Erstelle ein `useConfirmDialog` composable, das ein Versprechen zurückgibt:

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

@@@@@@@@@@@@@@ph218@@@Caveats

### Bereitstellung/Injektion

Beim programmgesteuerten Öffnen von Overlays (Modals, Slideovers usw.) kann die Overlay-Komponente nur auf eingespeiste Werte von der Komponente zugreifen, die `UApp` enthält (normalerweise `app.vue` oder Layout-Komponenten).

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
