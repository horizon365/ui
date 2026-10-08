---
title: Gebraucht
description: 'Ein Composable, um Toast-Benachrichtigungen in Ihrer App anzuzeigen.'
---

@@@ph000@Verwendung

Verwenden Sie das automatisch importierte `useToast` composable, um [Toast](/docs/components/toast) Benachrichtigungen anzuzeigen.

::component-example
---
Name: 'Use-Toast-Beispiel'
---
::

- Das `useToast` composable verwendet Nuxts `useState`, um den Toastzustand zu verwalten und die Reaktivität in Ihrer gesamten Anwendung sicherzustellen.
- Ein Maximum von 5 Toasts wird standardmäßig angezeigt. Wenn ein neuer Toast hinzugefügt wird, der diese Grenze überschreitet, wird der älteste Toast automatisch entfernt. Ändern Sie ihn mit dem `toaster.max` prop auf der [`App`](/docs/components/app#props) Komponente.
- Beim Entfernen eines Toast gibt es eine Verzögerung von 200 ms, bevor er tatsächlich aus dem Zustand entfernt wird, was Exit-Animationen ermöglicht.

::warning
Stellen Sie sicher, dass Sie Ihre App mit der Komponente [`App`]() umwickeln, die unsere Komponente [`Toaster`](https://github.com/nuxt/ui/blob/v4/src/runtime/components/Toaster.vue) Komponente verwendet, die die Komponente [`ToastProvider`https://reka-ui.com/docs/components/toast#providerhttps://reka-ui.com/docs/components/toast#providerPH03@PH03@PH03@PH0)verwendet. Komponenten von Reka UI.
::

::tip{to="/docs/components/toast"}
Erfahren Sie, wie Sie das Aussehen und Verhalten von Toasts in der Komponentendokumentation **Toast** anpassen.
::

@@@@@@b34@b34.de

{lang="ts-type"}

Das `useToast` composable bietet Methoden zur globalen Verwaltung von Toastbenachrichtigungen.

@@ph038@@add ()

{lang="ts-type"}

Fügen Sie eine neue Toast-Benachrichtigung hinzu.

#### Parameter

::field-group

  ::field{name="toast" type="Partial<Toast>" required}
  Ein partielles `Toast`-Objekt mit den folgenden Eigenschaften:

    ::collapsible

      ::field-group
        ::field{name="id" type="string | number"}
        Ein eindeutiger Bezeichner für den Toast. Wenn nicht angegeben, wird eine eindeutige ID generiert. Die Wiederverwendung einer vorhandenen ID wird in diesen Toast übernommen, anstatt eine neue hinzuzufügen.
        ::

        ::field{name="open" type="boolean"}
        Ob der Toast offen ist. Defaults zu `true`.
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
        Siehe [Avatar](/docs/components/avatar#props).
        ::

        ::field{name="color" type="string"}
        Die Farbe des Toast. Defaults auf `primary`.
        ::

        ::field{name="orientation" type="'horizontal' | 'vertical'"}
        Die Orientierung zwischen dem Inhalt und den Aktionen. Standardmäßig `vertical`.
        ::

        ::field{name="close" type="boolean | Omit<ButtonProps, LinkPropsKeys>"}
        Anpassen oder Ausblenden der Schaltfläche Schließen (mit `false`-Wert). Standardmäßig auf `true`.
        ::

        ::field{name="closeIcon" type="string"}
        Das Icon wird im Schließen-Button angezeigt.
        ::

        ::field{name="actions" type="ButtonProps[]"}
        Siehe [Button](/docs/components/button#props).
        ::

        ::field{name="progress" type="boolean | Pick<ProgressProps, 'color' | 'ui'>"}
        Anpassen oder Ausblenden des Fortschrittsbalkens (mit `false`-Wert). Standardmäßig auf `true`.
        ::

        ::field{name="duration" type="number"}
        Die Dauer in Millisekunden, bevor der Toast automatisch geschlossen wird. Standardmäßig auf `5000`. Auf `0` gesetzt, um den Toast offen zu halten, bis er manuell geschlossen wird. Kann auch global auf der Komponente [`App`](/docs/components/app) eingestellt werden.
        ::

        ::field{name="onClick" type="(toast: Toast) => void"}
        Eine Callback-Funktion, die aufgerufen wird, wenn auf den Toast geklickt wird.
        ::

        ::field{name="onUpdateOpen" type="(open: boolean) => void"}
        Eine Callback-Funktion, die aufgerufen wird, wenn sich der Status des Toasts öffnet. Nützlich, um eine Aktion auszuführen, wenn der Toast geschlossen wird (abgelaufen oder abgewiesen).
        ::

        ::field{name="type" type="'foreground' | 'background'"}
        Verwenden Sie `background` für Toast, die nicht das Ergebnis einer direkten Benutzeraktion sind.
        ::

        ::field{name="as" type="any"}
        Das Element oder die Komponente, die der Toast als. Defaults zu `li` rendert
        ::
      ::
    ::
  ::
::

**Returns:** Das komplette `Toast` Objekt, das hinzugefügt wurde.

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

@@ph083@update@update@update@update@update@update@update@update@update@update@update@update@update@update@update@update@update@update@update@update@update@update@update@update@ph083@update@update@update@update@update@update@update@update@update@update@update@update@update@update@update@update@update@update@update@update@update@update@update@update@update@update@update@update@update@update@update@update@update@update@update@upda

@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

Aktualisiert eine vorhandene Toast-Benachrichtigung.

#### Parameter

::field-group
  ::field{name="id" type="string | number" required}
  Die eindeutige Kennung des zu aktualisierenden Toastes.
  ::

  ::field{name="toast" type="Omit<Partial<Toast>, 'id'>" required}
  Das `id` kann nicht geändert werden, der Toast wird wieder geöffnet und `duration` wird zurückgesetzt, wenn Sie es nicht erneut übergeben.
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

@@ph102@remove ()

@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@##################################################################################################################

Löscht eine Toastbenachrichtigung.

#### Parameter

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

### clear ()

@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

Löschen Sie alle Toast-Benachrichtigungen.

```vue
<script setup lang="ts">
const toast = useToast()

function clearAllToasts() {
  toast.clear()
}
</script>
```

@@@@@@@127@@tutaste

{lang="ts-type"}

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
