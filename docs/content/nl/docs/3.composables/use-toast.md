---
title: gebruikToast
description: 'Een compositie om toastmeldingen in uw app weer te geven.'
---

## Gebruik

Gebruik de automatisch geïmporteerde `useToast` composable om [Toast](/docs/components/toast) meldingen weer te geven.

::component-example
---
name: 'use-toast-example'
---
::

- De `useToast` composable gebruikt de `useState` van Nuxt om de toaststatus te beheren, waardoor reactiviteit in uw applicatie wordt gegarandeerd.
- Er worden standaard maximaal 5 toasts per keer weergegeven. Bij het toevoegen van een nieuwe toast die deze limiet zou overschrijden, wordt de oudste toast automatisch verwijderd.
Verander het met de `toaster.max` prop op de [`App`](/docs/components/app#props) component.
- Bij het verwijderen van een toast is er een vertraging van 200 ms voordat deze daadwerkelijk uit de staat wordt verwijderd, waardoor exit-animaties mogelijk zijn.

::warning
Zorg ervoor dat u uw app omhult met de [`App`](/docs/components/app) -component die onze [`Toaster`](https://github.com/nuxt/ui/blob/v4/src/runtime/components/Toaster.vue) -component gebruikt die de [`ToastProvider`](https://reka-ui.com/docs/components/toast#provider) -component van Reka UI gebruikt.
::

::tip{to="/docs/components/toast"}
Leer hoe u het uiterlijk en gedrag van toasts kunt aanpassen in de **Toast**-componentdocumentatie.
::

## API

`useToast()`{lang="ts-type"}

De `useToast` composable biedt methoden om toastmeldingen wereldwijd te beheren.

### toevoegen ()

`add(toast: Partial<Toast>): Toast`{lang="ts-type"}

Voegt een nieuwe toastmelding toe.

#### Parameters

::field-group

  ::field{name="toast" type="Partial<Toast>" required}
Een gedeeltelijk `Toast` object met de volgende eigenschappen:

    ::collapsible

      ::field-group
        ::field{name="id" type="string | number"}
Een unieke identificatie voor de toast. Als deze niet wordt verstrekt, wordt een unieke id gegenereerd. Het hergebruiken van een bestaande id wordt samengevoegd met die toast in plaats van een nieuwe toe te voegen.
        ::

        ::field{name="open" type="boolean"}
Of de toast open is. Standaard `true`.
        ::

        ::field{name="title" type="string | VNode | (() => VNode)"}
De titel die in de toast wordt weergegeven.
        ::

        ::field{name="description" type="string | VNode | (() => VNode)"}
De beschrijving die in de toast wordt weergegeven.
        ::

        ::field{name="icon" type="string"}
Het pictogram dat in de toast wordt weergegeven.
        ::

        ::field{name="avatar" type="AvatarProps"}
De avatar die in de toast wordt weergegeven. Zie [Avatar](/docs/components/avatar#props).
        ::

        ::field{name="color" type="string"}
De kleur van de toast. Standaard `primary`.
        ::

        ::field{name="orientation" type="'horizontal' | 'vertical'"}
De oriëntatie tussen de inhoud en de acties. Standaard `vertical`.
        ::

        ::field{name="close" type="boolean | Omit<ButtonProps, LinkPropsKeys>"}
Pas of verberg de sluitknop (met `false`-waarde). Standaard `true`.
        ::

        ::field{name="closeIcon" type="string"}
Het pictogram dat wordt weergegeven in de knop Sluiten.
        ::

        ::field{name="actions" type="ButtonProps[]"}
De acties die in de toast worden weergegeven. Zie [Button](/docs/components/button#props).
        ::

        ::field{name="progress" type="boolean | Pick<ProgressProps, 'color' | 'ui'>"}
Pas de voortgangsbalk aan of verberg deze (met `false`-waarde). Standaard `true`.
        ::

        ::field{name="duration" type="number"}
De duur in milliseconden voordat de toast automatisch wordt gesloten. Standaard ingesteld op `5000`. Stel in op `0` om de toast open te houden totdat deze handmatig wordt gesloten.
Kan ook globaal worden ingesteld op de [`App`](/docs/components/app) component.
        ::

        ::field{name="onClick" type="(toast: Toast) => void"}
Een callback-functie die wordt aangeroepen wanneer op de toast wordt geklikt.
        ::

        ::field{name="onUpdateOpen" type="(open: boolean) => void"}
Een callback-functie die wordt aangeroepen wanneer de open status van de toast verandert. Handig om een actie uit te voeren wanneer de toast sluit (verlopen of afgewezen).
        ::

        ::field{name="type" type="'foreground' | 'background'"}
Hoe ondersteunende technologieën de toast aankondigen. Gebruik `background` voor toasts die niet het resultaat zijn van een directe gebruikersactie.
        ::

        ::field{name="as" type="any"}
Het element of onderdeel dat de toast weergeeft als. Standaard `li`.
        ::
      ::
    ::
  ::
::

**Returns: ** Het complete `Toast` object dat is toegevoegd.

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

### bijwerken ()

`update(id: string | number, toast: Omit<Partial<Toast>, 'id'>): void`{lang="ts-type"}

Werkt een bestaande toastmelding bij.

#### Parameters

::field-group
  ::field{name="id" type="string | number" required}
De unieke identificatie van de toast die moet worden bijgewerkt.
  ::

  ::field{name="toast" type="Omit<Partial<Toast>, 'id'>" required}
Een gedeeltelijk `Toast`-object met de eigenschappen die moeten worden bijgewerkt. De `id` kan niet worden gewijzigd, de toast wordt heropend en `duration` wordt gereset tenzij u deze opnieuw doorgeeft.
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

### verwijderen ()

`remove(id: string | number): void`{lang="ts-type"}

Verwijdert een toastmelding.

#### Parameters

::field-group
  ::field{name="id" type="string | number" required}
De unieke identificatie van de te verwijderen toast.
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

### helder ()

`clear(): void`{lang="ts-type"}

Verwijdert alle toastmeldingen.

```vue
<script setup lang="ts">
const toast = useToast()

function clearAllToasts() {
  toast.clear()
}
</script>
```

### toasts

`toasts: Ref<Toast[]>`{lang="ts-type"}

Een reactieve array met alle huidige toastmeldingen.

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
