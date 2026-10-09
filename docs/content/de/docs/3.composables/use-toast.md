---
title: Gebraucht
description: 'Ein Composable zum Anzeigen von Toastbenachrichtigungen in Ihrer App.'
---

## Bearbeiten

Verwenden Sie das automatisch importierte `useToast` composable, um [Toast](/docs/components/toast)-Benachrichtigungen anzuzeigen.

::component-example
---
name: 'use-toast-example'
---
::

- Das `useToast` composable verwendet Nuxts `useState`, um den Toast-Status zu verwalten und die Reaktivität in Ihrer gesamten Anwendung sicherzustellen.
- Ein Maximum von 5 Toasts werden standardmäßig gleichzeitig angezeigt. Wenn ein neuer Toast hinzugefügt wird, der dieses Limit überschreitet, wird der älteste Toast automatisch entfernt. Ändern Sie ihn mit der `toaster.max`-Prop auf der Komponente [`App`](/docs/components/app#props).
- Wenn Sie einen Toast entfernen, gibt es eine Verzögerung von 200 ms, bevor er tatsächlich aus dem Status entfernt wird, was Exit-Animationen ermöglicht.

::warning
Stellen Sie sicher, dass Sie Ihre App mit der Komponente [`App`](/docs/components/app) umwickeln, die unsere Komponente [`Toaster`](https://github.com/nuxt/ui/blob/v4/src/runtime/components/Toaster.vue) verwendet, die die Komponente [`ToastProvider`](]() von Reka UI verwendet.
::

::tip{to="/docs/components/toast"}
Erfahren Sie, wie Sie das Aussehen und Verhalten von Toasts in der Dokumentation der **Toast**-Komponente anpassen können.
::

## API (Englisch)

`useToast()`{lang="ts-type"} (nicht)

Das `useToast` composable bietet Methoden zur globalen Verwaltung von Toast-Benachrichtigungen.

### add () Bearbeiten

`add(toast: Partial<Toast>): Toast`{lang="ts-type"} nicht

Fügen Sie eine neue Toast-Benachrichtigung hinzu.

#### Parameters (englisch)

::field-group

  ::field{name="toast" type="Partial<Toast>" required}
  Ein partielles `Toast`-Objekt mit den folgenden Eigenschaften:

    ::collapsible

      ::field-group
        ::field{name="id" type="string | number"}
        Ein eindeutiger Bezeichner für den Toast. Wenn nicht angegeben, wird eine eindeutige ID generiert. Die Wiederverwendung einer vorhandenen ID wird in diesen Toast übernommen, anstatt eine neue hinzuzufügen.
        ::

        ::field{name="open" type="boolean"}
        Ob der Toast offen ist. Standardmäßig `true`.
        ::

        ::field{name="title" type="string | VNode | (() => VNode)"}
        Der Titel stand auf dem Toast.
        ::

        ::field{name="description" type="string | VNode | (() => VNode)"}
        Die Beschreibung wurde auf dem Toast angezeigt.
        ::

        ::field{name="icon" type="string"}
        Das Icon ist auf dem Toast zu sehen.
        ::

        ::field{name="avatar" type="AvatarProps"}
        Der Avatar, der im Toast angezeigt wird. Siehe [Avatar](/docs/components/avatar#propsx.
        ::

        ::field{name="color" type="string"}
        Die Farbe des Toast. Standardmäßig `primary`.
        ::

        ::field{name="orientation" type="'horizontal' | 'vertical'"}
        Die Orientierung zwischen dem Inhalt und den Aktionen. Standardmäßig ist `vertical`.
        ::

        ::field{name="close" type="boolean | Omit<ButtonProps, LinkPropsKeys>"}
        Anpassen oder Ausblenden der Schaltfläche Schließen (mit dem Wert `false`). Standardmäßig `true`.
        ::

        ::field{name="closeIcon" type="string"}
        Das Icon wird im Schließen-Button angezeigt.
        ::

        ::field{name="actions" type="ButtonProps[]"}
        Die Aktionen, die im toast angezeigt werden. Siehe [Button](/docs/components/button#props).
        ::

        ::field{name="progress" type="boolean | Pick<ProgressProps, 'color' | 'ui'>"}
        Anpassen oder Ausblenden des Fortschrittsbalkens (mit dem Wert `false`). Standardmäßig `true`.
        ::

        ::field{name="duration" type="number"}
        Die Dauer in Millisekunden vor dem automatischen Schließen des Toast. Standardmäßig auf `5000`. Auf `0` gesetzt, um den Toast offen zu halten, bis er manuell geschlossen wird. Kann auch global auf der Komponente [`App`](/docs/components/app) eingestellt werden.
        ::

        ::field{name="onClick" type="(toast: Toast) => void"}
        Eine Callback-Funktion, die aufgerufen wird, wenn auf den Toast geklickt wird.
        ::

        ::field{name="onUpdateOpen" type="(open: boolean) => void"}
        Eine Callback-Funktion, die aufgerufen wird, wenn sich der Status des Toast Open ändert. Nützlich, um eine Aktion auszuführen, wenn der Toast geschlossen wird (abgelaufen oder abgewiesen).
        ::

        ::field{name="type" type="'foreground' | 'background'"}
        Verwenden Sie `background` für Toast, die nicht das Ergebnis einer direkten Benutzeraktion sind.
        ::

        ::field{name="as" type="any"}
        Das Element oder die Komponente, die der Toast als. Defaults rendert `li`.
        ::
      ::
    ::
  ::
::

**Gibt zurück: ** Das komplette `Toast`-Objekt, das hinzugefügt wurde.

```vue
<script setup lang="ts">
const toast = useToast()

function showToast() {
  toast.add({
    title: 'Success',
    description: 'Your action was completed successfully.',
    color: 'success'
  })
}
</script>
```

### update ()(Deutsche Ausgabe)

`update(id: string | number, toast: Omit<Partial<Toast>, 'id'>): void`{lang="ts-type"} (nicht)

Aktualisiert eine vorhandene Toast-Benachrichtigung.

#### Parameters (englisch)

::field-group
  ::field{name="id" type="string | number" required}
  Die eindeutige Kennung des zu aktualisierenden Toastes.
  ::

  ::field{name="toast" type="Omit<Partial<Toast>, 'id'>" required}
  Das `id` kann nicht geändert werden, der Toast wird erneut geöffnet, und `duration` wird zurückgesetzt, wenn Sie es nicht erneut übergeben.
  ::
::

```vue
<script setup lang="ts">
const toast = useToast()

function updateToast(id: string | number) {
  toast.update(id, {
    title: 'Updated Toast',
    description: 'This toast has been updated.'
  })
}
</script>
```

### remove () Bearbeiten

`remove(id: string | number): void`{lang="ts-type"} nicht

Löscht eine Toast-Benachrichtigung.

#### Parameters Bearbeiten

::field-group
  ::field{name="id" type="string | number" required}
  Der eindeutige Identifikator des zu entfernenden Toasts.
  ::
::

```vue
<script setup lang="ts">
const toast = useToast()

function removeToast(id: string | number) {
  toast.remove(id)
}
</script>
```

### clear ()(nicht verfügbar)

`clear(): void`{lang="ts-type"} (englisch)

Löscht alle Toast-Benachrichtigungen.

```vue
<script setup lang="ts">
const toast = useToast()

function clearAllToasts() {
  toast.clear()
}
</script>
```

### toasts (Für Deutschland)

`toasts: Ref<Toast[]>`{lang="ts-type"} (nicht)

Ein reaktives Array mit allen aktuellen Toast-Benachrichtigungen.

```vue
<script setup lang="ts">
const { toasts } = useToast()
</script>

<template>
  <div>
    <pre>{{ toasts }}</pre>
  </div>
</template>
```
