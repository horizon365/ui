---
description: Eine Formularkomponente mit eingebauter Validierung und Handhabung der Einreichung.
category: form
keywords:
  - validation
  - schema
  - submit
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Form.vue
---

## Bearbeiten

Verwenden Sie die Formularkomponente, um Formulardaten mit einer Validierungsbibliothek zu validieren, die [Standard Schema](https://github.com/standard-schema/standard-schema) unterstützt, z. B. [Valibot](https://github.com/fabian-hiller/valibot), [Zod](xph0111x), [Regle](https://github.com/victorgarciaesgi/regle), [Yup](xph018https://github.com/jquense/yup, x00018x), x000019x, xxph000012x [Joi](https://github.com/hapijs/joi) oder [Superstruct](https://github.com/ianstormtaylor/superstruct) oder Ihrer eigenen Validierungslogik.

Es arbeitet mit der Komponente [FormField](/docs/components/form-field) zusammen, um Fehlermeldungen in Formularelementen automatisch anzuzeigen.

### Schema Validierung

Dazu braucht es zwei Props:

- `state`-ein reaktives Objekt, das den Zustand des Formulars enthält.
- `schema`-irgendein [Standard Schema](https://github.com/standard-schema/standard-schema) oder [Superstruct](https://github.com/ianstormtaylor/superstruct).

::warning
**No validation library is included** by default, ensure you **install the one you need**. ** ist standardmäßig nicht enthalten.
::

::tabs{class="gap-0"}
  ::component-example{label="Validierungen"}
  ---
  name: 'form-example-valibot'
  props:
    class: 'w-60'
  ---
  ::

  ::component-example{label="Zod"}
  ---
  name: 'form-example-zod'
  props:
    class: 'w-60'
  ---
  ::

  ::component-example{label="Regle"}
  ---
  name: 'form-example-regle'
  props:
    class: 'w-60'
  ---
  ::

  ::component-example{label="yup"}
  ---
  name: 'form-example-yup'
  props:
    class: 'w-60'
  ---
  ::

  ::component-example{label="Joi"}
  ---
  name: 'form-example-joi'
  props:
    class: 'w-60'
  ---
  ::

  ::component-example{label="Superstruktur"}
  ---
  name: 'form-example-superstruct'
  props:
    class: 'w-60'
  ---
  ::
::

### Custom Validierung

Verwenden Sie die `validate`-Prop, um Ihre eigene Validierungslogik anzuwenden.

Die Validierungsfunktion muss eine Liste von Fehlern mit den folgenden Attributen zurückgeben:

- `message`-die Fehlermeldung angezeigt werden.
- `name`-der `name` des `FormField`, an den der Fehler gesendet werden soll.

::tip
Es kann zusammen mit der `schema`-prop verwendet werden, um komplexe Anwendungsfälle zu bewältigen.
::

::component-example
---
name: 'form-example-basic'
props:
  class: 'w-60'
---
::

### Fehler melden

Fehler werden dem entsprechenden [FormField](/docs/components/form-field) mit seiner `name`-Prop. Ein Fehler im `email`-Feld wird durch `<FormField name="email">`{lang="vue"} angezeigt.

Geschachtelte Felder werden mit Punktnotation abgeglichen. Ein Schema wie `{ user: z.object({ email: z.string() }) }`{lang="ts"} wird auf `<FormField name="user.email">`{lang="vue"} angewendet.

::warning
Fehler bei Array-Elementen enthalten den Index in ihrem Namen (z. B. `tags.0`, `tags.1`) und passen nicht allein mit `name` zu `<FormField name="tags">`{lang="vue"}. Verwenden Sie die `error-pattern`-Prop mit einem regulären Ausdruck wie `/^tags\..+/`{lang="ts"}, um sie zu erfassen.
::

::component-example
---
name: 'form-example-error-pattern'
props:
  class: 'w-60'
---
::

### Input-Veranstaltungen

Die Formularkomponente löst die Validierung automatisch aus, wenn eine Eingabe ein `input`-, `change`-oder `blur`-Ereignis ausgibt.

- Validierung auf `input` erfolgt **as Sie type**.
- Validation auf `change` tritt auf, wenn Sie **commit zu einem value**.
Die Validierung auf `blur` erfolgt, wenn ein Eingang **focus** verliert.

Sie können steuern, wann die Validierung erfolgt, indem Sie die `validate-on`-Prop verwenden.

::tip
Die Form ist immer gültig auf Vorlage.
::

::component-example{label="Default sein"}
---
source: false
name: 'form-example-elements'
options:
  - name: 'validate-on'
    label: 'validate-on'
    items:
    - 'input'
    - 'change'
    - 'blur'
    default:
    - 'input'
    - 'change'
    - 'blur'
    multiple: true
---
::

::tip
Sie können das `useFormField` composable verwenden, um dies in Ihre eigenen Komponenten zu implementieren.
::

### Error Ereignis

Dieses Ereignis wird ausgelöst, wenn das Formular abgeschickt wird und enthält ein Array von `FormError`-Objekten mit den folgenden Feldern:

- `id`-die Eingabe `id`.
- `name`-der `name` des `FormField`
- `message`-die Fehlermeldung, die angezeigt werden soll

Hier ist ein Beispiel, das das erste Eingabeelement mit einem Fehler nach dem Absenden des Formulars fokussiert:

::component-example
---
name: 'form-example-on-error'
collapse: true
props:
  class: 'w-60'
---
::

### HTML5-Validierung: badge{label="4.5+" class="align-text-top"}

Beim programmgesteuerten Aufruf von `form.submit()` löst die Formularkomponente vor der Übermittlung automatisch die native HTML5-Validierung aus.

::note
Dies ist besonders nützlich, wenn sich der Absenden-Button außerhalb des Formularelements befindet, z. B. in einer modalen Fußzeile.
::

::component-example
---
name: 'form-example-html5-validation'
props:
  class: 'w-60'
---
::

### Nesting-Formulare

Verwenden Sie die `nested`-prop, um mehrere Formularkomponenten zu verschachteln und deren Validierungsfunktionen zu verknüpfen. In diesem Fall wird durch die Validierung des übergeordneten Formulars automatisch alle anderen darin enthaltenen Formulare validiert.

Verschachtelte Formulare erben direkt den Zustand ihres Elternteils, sodass Sie keinen separaten Zustand für sie definieren müssen. Sie können die `name`-prop verwenden, um ein verschachteltes Attribut innerhalb des Elternzustands anzuvisieren.

Es kann verwendet werden, um Felder basierend auf der Eingabe des Benutzers dynamisch hinzuzufügen:

::component-example
---
collapse: true
name: 'form-example-nested'
---
::

Oder um Listeneingaben zu validieren:

::component-example
---
collapse: true
name: 'form-example-nested-list'
---
::

## API

### Props Bearbeiten

:component-props

::callout{icon="i-simple-icons-mdnwebdocs" to="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form#attributes" target="_blank"}
Diese Komponente unterstützt auch alle nativen `<form>`-HTML-Attribute.
::

### Slots Bearbeiten

:component-slots

### Emits (nicht)

:component-emits

### Expose (englisch)

Sie können auf die typisierte Komponenteninstanz mit [`useTemplateRef`](https://vuejs.org/api/composition-api-helpers.html#usetemplateref) zugreifen.

```vue
<script setup lang="ts">
const form = useTemplateRef('form')
</script>

<template>
  <UForm ref="form" />
</template>
```

Dies gibt Ihnen Zugang zu den folgenden:

| Vorname| Typen|
| ---- | ---- |
| `submit()`{lang="ts-type"} (nicht)| `Promise<void>`{lang="ts-type"} <br> <div class="text-toned mt-1"><p>Triggers Formularvorlage mit HTML5-Validierung. </p></div>|
| `validate(opts: { name?: keyof T \| (keyof T)[], silent?: boolean, nested?: boolean, transform?: boolean })`{lang="ts-type"} Übersetzung| `Promise<T>`{lang="ts-type"} <br> <div class="text-toned mt-1"><p>Triggers form validation. Will raise any errors unless `opts.silent` is set to true.</p></div> Es wird keine Fehler ausgelöst, es sei denn, `opts.silent` ist auf true.</p></div> gesetzt|
| `clear(path?: keyof T \| RegExp)`{lang="ts-type"} Übersetzung| `void` <br> <div class="text-toned mt-1"><p>Löscht Formularfehler, die mit einem bestimmten Pfad verknüpft sind. Wenn kein Pfad angegeben ist, werden alle Formularfehler gelöscht. </p></div>|
| `getErrors(path?: keyof T \| RegExp)`{lang="ts-type"} (nicht)| `FormErrorWithId[]`{lang="ts-type"} <br> <div class="text-toned mt-1"><p>Ruft Formularfehler ab, die einem bestimmten Pfad zugeordnet sind. Wenn kein Pfad angegeben ist, werden alle Formularfehler zurückgegeben.</p></div>|
| `setErrors(errors: FormError[], name?: keyof T \| RegExp)`{lang="ts-type"} (nicht)| `void` <br> <div class="text-toned mt-1"><p>Setzt Formularfehler für einen gegebenen Pfad. Wenn kein Pfad angegeben ist, werden alle Fehler überschrieben. </p></div>|
| `errors`{lang="ts-type"} Übersetzung| `Ref<FormErrorWithId[]>`{lang="ts-type"} <br> <div class="text-toned mt-1"><p>Ein Verweis auf das Array, das Validierungsfehler enthält. Verwenden Sie diese Option, um auf die Fehlerinformationen zuzugreifen oder diese zu manipulieren.</p></div>|
| `disabled`{lang="ts-type"} (englisch)| `Ref<boolean>`{lang="ts-type"} (englisch)|
| `dirty`{lang="ts-type"} (englisch)| `Ref<boolean>`{lang="ts-type"} `true`, wenn mindestens ein Formularfeld vom Benutzer aktualisiert wurde,|
| `dirtyFields`{lang="ts-type"} Übersetzung| `ReadonlySet<DeepReadonly<keyof T>>`{lang="ts-type"} Verfolgt vom Benutzer geänderte Felder.|
| `touchedFields`{lang="ts-type"} (englisch)| `ReadonlySet<DeepReadonly<keyof T>>`{lang="ts-type"} Verfolgt die Felder, mit denen der Benutzer interagiert hat.|
| `blurredFields`{lang="ts-type"} (nicht)| `ReadonlySet<DeepReadonly<keyof T>>`{lang="ts-type"} Verfolgt Felder, die vom Benutzer unscharf sind.|

## Theme Bearbeiten

:component-theme

## Changelog (Deutsche Ausgabe)

:component-changelog
