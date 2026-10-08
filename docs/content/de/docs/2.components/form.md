---
description: Eine Formularkomponente mit eingebauter Validierung und Handhabung der Übermittlung.
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

@@@ph000@@Verwendung

Verwenden Sie die Formularkomponente, um Formulardaten mit einer Validierungsbibliothek zu validieren, die [](https://github.com/standard-schema/standard-schema) wie [Valibot](https://github.com/fabian-hiller/valibot),[Zod](PH0111),[Regle](https://github.com/victorgarciaesgi/regle)](https://github.com/jquense/yup[Joi](https://github.com/hapijs/joi) oder [Superstruct](](PH02222@@PH07)oder Ihre eigene Validierung.

Es funktioniert mit der Komponente [FormField](/docs/components/form-field), um Fehlermeldungen rund um Formularelemente automatisch anzuzeigen.

### Schemavalidierung

Es braucht zwei Props:

- `state`-ein reaktives Objekt, das den Status des Formulars enthält.
- `schema`-alle [Standard-Schema ](https://github.com/standard-schema/standard-schema) oder [Superstruct](PH0444).

::warning
**Keine Validierungsbibliothek ist standardmäßig enthalten **, stellen Sie sicher, dass Sie **installieren Sie die, die Sie benötigen **.
::

::tabs{class="gap-0"}
  ::component-example{label="Validierungen"}
  ---
  Name: 'Beispiel-Formular-Valibot'
  Props:
    Klasse: W-60
  ---
  ::

  ::component-example{label="Zod"}
  ---
  Name: 'form-example-zod'(Beispiel-Form-Zod)
  Props:
    Bezeichnung: W-60
  ---
  ::

  ::component-example{label="Regle"}
  ---
  Name: 'Beispiel-Regle'
  Props:
    Bezeichnung: W-60
  ---
  ::

  ::component-example{label="Yup"}
  ---
  Name: 'Beispiel-Beispiel-yup'
  Props:
    Klasse: W-60
  ---
  ::

  ::component-example{label="Joi"}
  ---
  Name: 'Beispiel-Joi'
  Props:
    Klasse: W-60
  ---
  ::

  ::component-example{label="Superstruktur"}
  ---
  Bezeichnung: "form-example-superstruct"
  Props:
    Bezeichnung: W-60
  ---
  ::
::

### Benutzerdefinierte Validierung

Verwenden Sie `validate` prop, um Ihre eigene Validierungslogik anzuwenden.

Die Validierungsfunktion muss eine Liste von Fehlern mit den folgenden Attributen zurückgeben:

- `message`-die Fehlermeldung angezeigt werden.
- `name`-die `name` der `FormField`, um den Fehler zu senden.

::tip
Es kann zusammen mit dem `schema` prop verwendet werden, um komplexe Anwendungsfälle zu behandeln.
::

::component-example
---
Name: 'Beispiel-Grundlegendes'
Props:
  Klasse: W-60
---
::

### Fehlermeldung

Fehler werden dem entsprechenden [FormField](/docs/components/form-field) unter Verwendung seiner `name` prop. Ein Fehler im Feld `email` wird von `<FormField name="email">`{lang="vue"} angezeigt.

Ein Schema wie `{ user: z.object({ email: z.string() }) }`{lang="ts"} wird auf `<FormField name="user.email">`{lang="vue"} angewendet.

::warning
Fehler in Array-Elementen enthalten den Index in ihrem Namen (z.B.`tags.0`,`tags.1`) und passt nicht zu `<FormField name="tags">`{lang="vue"} by `name` alone. Use the `error-pattern` prop mit einem regulären Ausdruck wie `/^tags\..+/`{lang="ts"} um sie zu erfassen. This ist besonders nützlich für Komponenten wie [InputTags /docs/components/input-tags).
::

::component-example
---
Name: 'Beispiel-Fehler-Muster "
Props:
  Klasse: W-60
---
::

### Input-Veranstaltungen

Die Formularkomponente löst automatisch die Validierung aus, wenn eine Eingabe ein `input`,`change` oder `blur` Ereignis ausgibt.

- Validierung auf `input` tritt auf **wie Sie tippen**.
- Validierung auf `change` tritt auf, wenn Sie **commit zu einem Wert **.
- Validation auf `blur` geschieht, wenn eine Eingabe **** verliert.

Sie können steuern, wann die Validierung erfolgt, indem Sie die `validate-on` prop.

::tip
Das Formular ist immer gültig bei Vorlage.
::

::component-example{label="Default ist"}
---
Quelle: Falscher
Name: 'Beispiel-Elemente'
Optionen:
  - name:'gültig'
    Bezeichnung: "Validate-On"
    Items:
    @@ph109 @@@'Eingabe'
    @@ph110 @@"Veränderung"
    @@ph111 @@'Blurb'(englisch)
    Default:
    - 'Eingabe'
    @@ph113 @"Veränderung"
    @@ph114 @@'blur'(auf Englisch)
    Anzahl: true
---
::

::tip
Sie können das `useFormField` composable verwenden, um dies in Ihren eigenen Komponenten zu implementieren.
::

### Fehlerereignis

Dieses Ereignis wird ausgelöst, wenn das Formular abgeschickt wird und enthält ein Array von `FormError`Objekten mit den folgenden Feldern:

`id`--
- `name`-die `name` der `FormField`-
- `message`-die Fehlermeldung angezeigt werden.

Hier ist ein Beispiel, das das erste Eingabeelement mit einem Fehler nach dem Absenden des Formulars fokussiert:

::component-example
---
Name: "Beispiel-Fehler"
Einsturz: wahr
Props:
  Klasse: W-60
---
::

### HTML5-Validierung: badge{label="4.5+" class="align-text-top"}

Wenn Sie `form.submit()` programmatisch aufrufen, löst die Formularkomponente vor der Übermittlung automatisch die native HTML5-Validierung aus.

::note
Dies ist besonders nützlich, wenn sich der Absenden-Button außerhalb des Formularelements befindet, z. B. in einer modalen Fußzeile.
::

::component-example
---
Name: 'form-example-html5-validation'(form-Beispiel-html5-Validierung)
Props:
  Klasse: W-60
---
::

### nistingforms

Verwenden Sie `nested` prop, um mehrere Formularkomponenten zu verschachteln und deren Validierungsfunktionen zu verknüpfen. In diesem Fall werden durch die Validierung des übergeordneten Formulars automatisch alle anderen darin enthaltenen Formulare validiert.

Geschachtelte Formulare erben direkt den Zustand ihres Elternteils, so dass Sie keinen separaten Zustand für sie definieren müssen. Sie können das `name` prop verwenden, um ein verschachteltes Attribut innerhalb des Elternzustands anzuvisieren.

Es kann verwendet werden, um Felder basierend auf der Eingabe des Benutzers dynamisch hinzuzufügen:

::component-example
---
Einsturz: wahr
Name: 'Beispiel-Formular-verschachtelt'
---
::

Oder um Listeneingaben zu validieren:

::component-example
---
Einsturz: wahr
Name: 'form-example-nested-list'-Datei
---
::

@@@@@@134@@api

@@135@@bmg-gmbh

Komponenten-Props

::callout{icon="i-simple-icons-mdnwebdocs" to="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form#attributes" target="_blank"}
Diese Komponente unterstützt auch alle nativen `<form>` HTML-Attribute.
::

### Spielautomaten

Die Komponenten-Slots

@@@@@@@138@@@@Emits

Komponenten emittieren

### Aufdecken

Sie können auf die typisierte Komponenteninstanz über [`useTemplateRef`](https://vuejs.org/api/composition-api-helpers.html#usetemplateref) zugreifen.

```vue
<script setup lang="ts">
const form = useTemplateRef('form')
</script>

<template>
  <UForm ref="form" />
</template>
```

Dies gibt Ihnen Zugang zu den folgenden:

| Vorname| Typ|
| ---- | ---- |
| {lang="ts-type"}|`Promise<void>`{lang="ts-type"}<br><div class="text-toned mt-1"><p>Triggers-Formularvorlage mit HTML5-Validierung.</p></div>|
| {lang="ts-type"}|`Promise<T>`{lang="ts-type"}<br><div class="text-toned mt-1"><p>Triggers Form validation. Will erhöhen alle Fehler, wenn `opts.silent` auf true.</p></div> gesetzt wird|
| {lang="ts-type"}|`void`<br><div class="text-toned mt-1"><p>Löscht Formularfehler, die mit einem bestimmten Pfad verknüpft sind.|
| @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@|`FormErrorWithId[]`{lang="ts-type"}<br><div class="text-toned mt-1"><p>Abruft Formularfehler, die mit einem bestimmten Pfad verknüpft sind.|
| {lang="ts-type"}|`void`<br><div class="text-toned mt-1"><p>Setzt Formularfehler für einen bestimmten Pfad fest. Wenn kein Pfad angegeben ist, werden alle Fehler überschrieben.</p></div>|
| @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@#####################################################################################################|`Ref<FormErrorWithId[]>`{lang="ts-type"}<br><div class="text-toned mt-1"><p>Ein Verweis auf das Array, das Validierungsfehler enthält. Verwenden Sie dies, um auf die Fehlerinformationen zuzugreifen oder diese zu manipulieren.</p></div>|
| {lang="ts-type"}|{lang="ts-type"}|
| {lang="ts-type"}|`Ref<boolean>`{lang="ts-type"}`true` wenn mindestens ein Formularfeld vom Benutzer aktualisiert wurde.|
| {lang="ts-type"}|`ReadonlySet<DeepReadonly<keyof T>>`{lang="ts-type"} Verfolgt Felder, die vom Benutzer geändert wurden.|
| @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@PH22222 @|`ReadonlySet<DeepReadonly<keyof T>>`{lang="ts-type"} Verfolgt Felder, mit denen der Benutzer interagiert hat.|
| @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@PH2226 @|`ReadonlySet<DeepReadonly<keyof T>>`{lang="ts-type"} Verfolgt Felder, die durch den Benutzer unscharf sind.|

## theme

Das Komponenten-Theme

@@ph229@@changelog (auf Englisch)

Das Component-Changelog
