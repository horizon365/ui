---
title: Author sein
description: 'Ein anpassbares Formular zum Erstellen von Login-, Registrierungs-oder Passwort-Rücksetzformularen.'
category: page
links:
  - label: Formen
    to: /docs/components/form
    icon: i-simple-icons-nuxtdotjs
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/AuthForm.vue
---

@@@ph000@@Verwendung

Die `AuthForm` Komponente basiert auf der Komponente [Form](/docs/components/form) Komponente, die in Ihren Seiten verwendet oder in eine [PageCard](/docs/components/page-card) eingewickelt wird.

::component-example
---
Name: 'Auth-Form-Beispiel'
Einsturz: wahr
---
::

@@ph010@@fields@@fields.de

Das Formular wird sich selbst auf der Grundlage des `fields` prop konstruieren und der Zustand wird intern behandelt.

Verwenden Sie `fields` prop als Array von Objekten mit den folgenden Eigenschaften:

`name: string``name: string``name: string`{lang="ts-type"}`name: string`{lang="ts-type"}
`type: 'checkbox' | 'select' | 'otp' | 'InputHTMLAttributes['type']'``type: 'checkbox' | 'select' | 'otp' | 'InputHTMLAttributes['type']'`{lang="ts-type"}{lang="ts-type"}{lang="ts-type"}{lang="ts-type"}{lang="ts-type"}PH018018@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

Jedes Feld muss eine `type`-Eigenschaft enthalten, die die Eingabekomponente und alle zusätzlichen angewendeten Requisiten bestimmt:`checkbox` Felder verwenden [Checkbox](/docs/components/checkbox#props) props,`select` Felder verwenden [SelectMenu](/docs/components/select-menu#props) props,`otp` Felder verwenden [PinInput](/docs/components/pin-input#props) props, und alle anderen Typen verwenden [Input](/docs/components/input#props) props.

Sie können auch jede Eigenschaft aus der [FormField](/docs/components/form-field#props) Komponente an jedes Feld übergeben.

::component-code
---
Schöner: wahr
Ignoriert:
  @@ph043@fields @@fields@@fields@@fields@fields@fields@fields@fields@fields@fields@fields@fields@fields@fields@fields@fields@fields@fields@fields@fields@fields@fields@fields@fields.@fields.@@fields.@@fields.@fields.@@@@@fields.@fields.@@@@@@fields.@@@fields.@@@@fields.@fields.@@@@fields.@@@@@fields.@@@@@fields.@@@fields.@@@@@@fields.@@@@@@@fields.@@@@@@@fields.@@@@@@@fields.@
  @@@@@444@Klasse
Außen:
  @@ph045@fields @@fields@@fields@@fields@fields@fields@fields@fields@fields@fields@fields@fields@fields@fields@fields@fields@fields@fields@fields@fields@fields@fields@fields@fields@@fields.@@fields.@@@@fields.@@@@fields.@@@@@@@@fields.@@@@@@@@fields045@@@@@fields.@fields.@@@@@fields.@@@@@fields.@@@@@fields.@@@@@fields.@@@@@@@fields.@@@@@@@fields.@@@@@@fields.@@@@@@@@fiel
Externe Personen:
  - AuthFormField [Bearbeiten | Quelltext bearbeiten]
Props:
  Felder:
    @@@ph047@name:'E-Mail'
      Typ: „ E-Mail "
      Bezeichnung: "E-Mail"
      Platzhalter: "Geben Sie Ihre E-Mail ein"
      Erforderlich: true
    - name:'Passwort'
      Typ: "Passwort"
      Bezeichnung: "Passwort"
      Platzhalter: "Geben Sie Ihr Passwort ein"
      erforderlich: true
    - name:'Land'
      Typ: 'Auswählen'
      Label: „ Land "
      Platzhalter: "Land auswählen"
      Items:
        - label:'Vereinigte Staaten'
          Wert: „ uns "
        - label:'Frankreich'
          Wert: 'fr'
        - label:'Vereinigtes Königreich'
          Wert: "Großbritannien"
        - label:'Australien'
          Wert: "au"
    @@@ph054@name:'otp'
      Typ: 'Op'
      Bezeichnung: OTP
      Länge: 6
      Beispiel: "Platzhalter"
    @@@ph055@name:'erinnern'
      Typ: "Checkbox"(Kontrollkästchen)
      Titel: „ Remember Me "
      Beschreibung: 'Sie werden für 30 Tage eingeloggt sein.'
  Klasse: 'max-w-sm'(nicht)
---
::

@@@@@@@@@@56@@Titel

Verwenden Sie `title` prop, um den Titel des Formulars festzulegen.

::component-code
---
Schöner: wahr
Ignoriert:
  @@ph058@fields @@fields@@fields@@fields@fields@fields@@fields@fields@fields@fields@fields@fields@fields@fields@fields@fields@fields@fields@fields@fields@fields@fields@fields@fields@@fields@@fields.@@fields.@@@@@@fields.@@@@@@@fields.@@@@@@@@@@@fields.@@@@@@@@@fields.@@@@@@@@@@fields.@@@@@@@@@@fields.@@@@@@@@@@@@@fields.@@@@@@fields.@@@@@@@@@@@fields.@@@@@@@
  @@599@Klasse
Außen:
  @@ph060@fields @@fields@@fields@@fields@fields@@fields@fields@fields@fields@fields@fields@fields@fields@fields@fields@fields@fields@fields@fields@ph060@@fields@fields@fields@fields@fields@fields@@fields.@@fields.@@@@fields.@@@@@@fields.@@@@@@@@@fields060600@@@@@@@@fields.@@@@@@@@@@@@fields.fields.@@@@@@@@@@@@@@@@fields.fields.@@@@@@@@@@@@@@@@@@fields.fields@@@@
Externe Personen:
  - AuthFormField [Bearbeiten | Quelltext bearbeiten]
Props:
  Überschrift:"Login"
  Feldern:
    @@ph062@@name:'E-Mail'(E-Mail-Adresse)
      Typ: Der Text
      Bezeichnung: "E-Mail"
    - name:'Passwort'
      Typ: „ Passwort "
      Stichwort: "Passwort"
  Klasse: 'max-w-md'
---
::

### Beschreibung

Verwenden Sie `description` prop, um die Beschreibung des Formulars festzulegen.

::component-code
---
Schöner: wahr
Ignoriert:
  @@ph066@@fields@@fields@@fields@@fields@fields@@fields@fields@fields@@fields@fields@fields@fields@fields@fields@fields@fields@fields@fields@fields@fields@fields@fields@@fields.@fields.@@@@fields.@@@@@@fields.@@@@@fields.@@@@@@@@@fields.@@@@@@@@@@fields.@@@@@@fields.@@@@@@fields.@@@@@@@@@fields.@@@@@@@@@@fields.@@@@@@@@@@@@@@@fields.@@@@@@@@@@@@@@@@@
  @@@@@@@title
  @@@@@@@@@@@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@classclass@classclass@class@class@class@class@classclass@class@classclass@classc
Außen:
  @@ph069@fields @@fields@@fields@@fields@@fields@fields@fields@@fields@fields@fields@fields@fields@fields@fields@fields@fields@fields@fields@fields@fields@fields@@fields.@@fields.@@fields.@@@@fields.@@@@@fields.@@@@@@@@@@@fields069@@@fields.@@@@@@@fields.@@@fields.@@@@@@fields.@@@@@@@@fields.@@@@@@@fields.@@@@@@@@fields.@@@@@@@@@@@fields.@@@@@@@@@@@@@@@@@
Externe Typen:
  - AuthFormField [Bearbeiten | Quelltext bearbeiten]
Props:
  Überschrift:"Login"
  Beschreibung: "Geben Sie Ihre Anmeldeinformationen ein, um auf Ihr Konto zuzugreifen."
  Feldern:
    @@ph071@name:'E-Mail'
      Typ: Der Text
      Bezeichnung: "E-Mail"
    - name:'Passwort'
      Typ: "Passwort"
      Bezeichnung: "Passwort"
  Klasse: 'max-w-md'
---
::

@@@ph073@@Icon-Seite

Verwenden Sie `icon` prop, um das Symbol des Formulars festzulegen.

::component-code
---
Schöner: wahr
Ignoriert:
  @@@ph075@@fields @@fields@@fields@@fields@@fields@@fields@@fields@fields@@fields@fields@@fields@fields@fields@@fields@fields@fields@@fields@fields@fields@@fields@@fields@@@fields@@@fields.@@@fields.@@@@@@@@@@@@@fields075@@@@fields
  @@ph076@@title
  @@ph077@beschreibung
  @@@@@@@@@@@@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@classclass@classclass@class@class@classclass@classclassclassclass@class@class@c
Außen:
  @@@ph079@@@fields
Externe Personen:
  - AuthFormField [Bearbeiten | Quelltext bearbeiten]
Props:
  Überschrift: „ Login "
  Beschreibung: "Geben Sie Ihre Anmeldeinformationen ein, um auf Ihr Konto zuzugreifen."
  Icon: 'i-lucide-user'(Benutzer)
  Felder:
    @@@@ph081@name:'E-Mail'(E-Mail-Adresse)
      Typ: Der Text
      Markiert: "E-Mail"
    @@ph082@name:'Passwort'
      Typ: "Passwort"
      Bezeichnung: "Passwort"
  Klasse: 'max-w-md'
---
::

### Anbieter

Verwenden Sie `providers` prop, um dem Formular Anbieter hinzuzufügen.

Sie können jede Eigenschaft von der [Button](/docs/components/button) Komponente wie `variant`,`color`,`to`, etc. übergeben.

::component-code
---
Schöner: wahr
Ignoriert:
  @@ph092@@@fields @@fields@@fields@@fields@fields@@fields@fields@fields@@fields@fields@fields@fields@fields@fields@fields@fields@fields@fields@fields@fields@fields@fields@ph092@@fields@@fields@@fields@@@fields@@@@@fields
  @@ph093@title
  @@ph094@beschreibung
  @@ph095@@gmail.de
  @@ph096@anbieter@anbieter.de
  - headerAlign
  @@@@@@@@@@@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@classclass@class@classclass@class@classclass@classclassclassclassclass@classclassclassclassclassclass@classclassclassclass@class@class@class@class@class@class
Außen:
  @@ph099@anbieter@anbieter@anbieter@anbieter@anbieter@anbieter@anbieter@anbieter@anbieter@anbieter@anbieter@anbieter@anbieter@anbieter@anbieter@anbieter@anbieter@anbieter@anbieter@anbieter@anbieter@anbieter@anbieter@anbieter@anbieter@anbieter@anbieter@anbieter@anbieter@anbieter@anbieter@anbieter@anbieter@anbieter@anbieter@anbieter@anbieter@anbieter@anbieter@anbieter@anbieter@anbieter@anbieter@anbieter@anbieter@anbieter@anbieter@anbieter@anbieter@anbieter@anbieter@anbieter@anbieter@anbieter@anbieter@anbieter@anbieter@anbieter@anbieter@anbieter@anbieter@anbieter@anbieter@anbieter@anbieter@anbieter@anbieter@anbieter@anbieter@anbieter@anbieter@anbieter@anbieter@anbieter@anbieter@anbieter@anbieter@anbieter@anbieter@anbieter@anbieter@
  @@ph100@@fields (nicht)
Externe Typen:
  @@ph101@buttonprops [Bearbeiten | Quelltext bearbeiten]
  - AuthFormField [Bearbeiten | Quelltext bearbeiten]
Props:
  Überschrift: „ Login "
  Beschreibung: "Geben Sie Ihre Anmeldeinformationen ein, um auf Ihr Konto zuzugreifen."
  Icon: 'i-lucide-user'(Benutzer)
  Anbieter:
    @@@ph103@label:'Google'(auf Englisch)
      Icon: 'i-simple-icons-google', auf Englisch
      Farbe: „ neutral "
      Variante: "Unterwürfig"
    - label:'GitHub'(auf Englisch)
      Icon: 'i-simple-icons-github'(I-Einfach-Ikonen-GitHub)
      Farbe: „ neutral "
      Variante: „ subtil "
  Feldern:
    @@@ph105@name:'E-Mail'
      Typ: Der Text
      Markiert: "E-Mail"
    - name:'Passwort'
      Typ: „ Passwort "
      Stichwort: "Passwort"
  Klasse: 'max-w-md'
---
::

@@@@@@@107@@Trennungszeichen

Verwenden Sie die `separator` prop, um die [Separator](/docs/components/separator) zwischen den Anbietern und den Feldern anzupassen.

::component-code
---
Schöner: wahr
Ignoriert:
  - Felder
  @@115@title
  - Beschreibung
  @@@@@@@@@icon_117@@@icon_117@@@@icon_117@@@@icon_117@@@@icon_117@@@@@icon_17@@@icon_17@@@@icon_17@@@@icon_17@@@@@@icon_17@@@@@@@@icon_117@@@@@@@@@@@@@icon_117@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@iconicon@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
  @@118@anbieter@anbieter@anbieter@anbieter@anbieter@anbieter@anbieter@anbieter@anbieter@anbieter@anbieter@anbieter@anbieter@anbieter@anbieter@anbieter@anbieter@anbieter@anbieter@anbieter@anbieter@anbieter@anbieter@anbieter@anbieter@anbieter@anbieter@anbieter@anbieter@anbieter@anbieter@anbieter@anbieter@anbieter@anbieter@anbieter@anbieter@anbieter@anbieter@anbieter@anbieter@anbieter@anbieter@anbieter@anbieter@anbieter@anbieter@anbieter@anbieter@anbieter@anbieter@anbieter@anbieter@anbieter@anbieter@anbieter@anbieter@anbieter@anbieter@anbieter@anbieter@anbieter@anbieter@anbieter@anbieter@anbieter@anbieter@anbieter@anbieter@anbieter@anbieter@anbieter@anbieter@anbieter@anbieter@anbieter@anbieter@anbieter@anbieter@anbieter@anbieter@an
  @@119@class
Außen:
  - Anbieter
  - Felder
Externe Personen:
  @@ph122@buttonprops [Bearbeiten | Quelltext bearbeiten]
  - AuthFormField [Bearbeiten | Quelltext bearbeiten]
Props:
  Überschrift:"Login"
  Beschreibung: "Geben Sie Ihre Anmeldeinformationen ein, um auf Ihr Konto zuzugreifen."
  Icon: 'i-lucide-user'(Benutzer)
  Anbieter:
    - label:'Google'(auf Englisch)
      Icon: 'i-simple-icons-google', auf Englisch
      Farbe: „ neutral "
      Variante: "Unterwürfig"
    - label:'GitHub'(auf Englisch)
      Icon: 'i-simple-icons-github'(I-Einfach-Ikonen-GitHub)
      Farbe: "neutral"
      Variante: „ subtil "
  Feldern:
    - name:'E-Mail'
      Typ: Der Text
      Bezeichnung: "E-Mail"
    - name:'Passwort'
      Typ: "Passwort"
      Bezeichnung: "Passwort"
  separator: 'Anbieter'
  Klasse: 'max-w-md'
---
::

Sie können jede Eigenschaft von der Komponente [Separator](/docs/components/separator#props) übergeben, um sie anzupassen.

::component-code
---
Schöner: wahr
Ignoriert:
  @@ph132@fields @@fields@@fields@@fields@@fields@fields@@fields@fields@fields@fields@@fields@fields@fields@fields@fields@fields@fields@fields@fields@fields@ph132@@fields@@fields@fields@@fields@@@fields@@@@fields.@@@@fields.@@@@@@@@@@fields.@@@@@@@@@@@@@@@fields.@@@@@@@@@@@@fields@@@@@@fields@@@@@@@fields@@@@@@@@@@@fields@@@@@@@@@@@@@@@fields@@@@@@@@@@@@
  @@133@Titel
  @@ph134@beschreibung
  @@ph135@@gmail.de
  - Anbieter
  @@137@Klasse
Außen:
  @@138@anbieter@anbieter@anbieter@anbieter@anbieter@anbieter@anbieter@anbieter@anbieter@anbieter@anbieter@anbieter@anbieter@anbieter@anbieter@anbieter@anbieter@anbieter@anbieter@anbieter@anbieter@anbieter@anbieter@anbieter@anbieter@anbieter@anbieter@anbieter@anbieter@anbieter@anbieter@anbieter@anbieter@anbieter@anbieter@anbieter@anbieter@anbieter@anbieter@anbieter@anbieter@anbieter@anbieter@anbieter@anbieter@anbieter@anbieter@anbieter@anbieter@anbieter@anbieter@anbieter@anbieter@anbieter@anbieter@anbieter@anbieter@anbieter@anbieter@anbieter@anbieter@anbieter@anbieter@anbieter@anbieter@anbieter@anbieter@anbieter@anbieter@anbieter@anbieter@anbieter@anbieter@anbieter@anbieter@anbieter@anbieter@anbieter@anbieter@anbieter@anbieter@an
  @@ph139@fields @@fields@@fields@@fields@fields@@fields@fields@fields@@fields@fields@fields@fields@fields@fields@fields@fields@fields@fields@fields@fields@fields@ph139@@fields@fields@@fields@@fields@@@@fields.@@@@fields.@@@@@@@fields.@@@@@@@@@@@@@@fields.@@@@@@@@@@@@fields.@@@@@@@@@@@@@fields.@@@@@@@@@@@@@@@@@fields@@@@@@@@@@@@fields@@@@@@@@@@@@@fields.
Externe Typen:
  @@ph140@buttonprops [Bearbeiten | Quelltext bearbeiten]
  - AuthFormField [Bearbeiten | Quelltext bearbeiten]
Props:
  Überschrift: „ Login "
  Beschreibung: "Geben Sie Ihre Anmeldeinformationen ein, um auf Ihr Konto zuzugreifen."
  Icon: 'i-lucide-user'(Benutzer)
  Anbieter:
    - label:'Google'(auf Englisch)
      Icon: 'i-simple-icons-google', auf Englisch
      Farbe: „ neutral "
      Variante: "Unterwürfig"
    - label:'GitHub'(auf Englisch)
      Icon: 'i-simple-icons-github'(I-Einfach-Ikonen-GitHub)
      Farbe: "neutral"
      Variante: "Unterwürfig"
  Feldern:
    - name:'E-Mail'
      Typ: Der Text
      Markiert: "E-Mail"
    - name:'Passwort'
      Typ: "Passwort"
      Bezeichnung: "Passwort"
  Trennung:
    Icon: 'i-lucide-user'(Benutzer)
  Klasse: 'max-w-md'
---
::

@146@Einfügen

Verwenden Sie `submit` prop, um den Absenden-Button des Formulars zu ändern.

Sie können jede Eigenschaft von der [Button](/docs/components/button) Komponente wie `variant`,`color`,`to`, etc. übergeben.

::component-code
---
Schöner: wahr
Ignoriert:
  @@ph155@fields (nicht)
  @@156 @ Überschrift
  - Beschreibung
  @@ph158@@gmail.de
  @@ph159@anbieter@anbieter@anbieter@anbieter@anbieter@anbieter@anbieter@anbieter@anbieter@anbieter@anbieter@anbieter@anbieter@anbieter@anbieter@anbieter@anbieter@anbieter@anbieter@anbieter@anbieter@anbieter@anbieter@anbieter@anbieter@anbieter@anbieter@anbieter@anbieter@anbieter@anbieter@anbieter@anbieter@anbieter@anbieter@anbieter@anbieter@anbieter@anbieter@anbieter@anbieter@anbieter@anbieter@anbieter@anbieter@anbieter@anbieter@anbieter@anbieter@anbieter@anbieter@anbieter@anbieter@anbieter@anbieter@anbieter@anbieter@anbieter@anbieter@anbieter@anbieter@anbieter@anbieter@anbieter@anbieter@anbieter@anbieter@anbieter@anbieter@anbieter@anbieter@anbieter@anbieter@anbieter@anbieter@anbieter@anbieter@anbieter@anbieter@anbieter@anbieter@
  - submit.label
  - submit.color
  - submit.variant (nicht verfügbar)
  @@163@Klasse
Außen:
  - Felder
Externe Typen:
  - AuthFormField [Bearbeiten | Quelltext bearbeiten]
Props:
  Überschrift:"Login"
  Beschreibung: "Geben Sie Ihre Anmeldeinformationen ein, um auf Ihr Konto zuzugreifen."
  Icon: 'i-lucide-user'(Benutzer)
  Feldern:
    - name:'E-Mail'
      Typ: Der Text
      Markiert: "E-Mail"
    - name:'Passwort'
      Typ: „ Passwort "
      Bezeichnung: "Passwort"
  Unterordnung:
    Label: 'Unterordnung'
    Farbe: "Fehler"
    Variante: "Unterwürfig"
  Klasse: 'max-w-md'
---
::

## Beispiele

### Innerhalb einer Seite

Sie können die Komponente `AuthForm` mit der Komponente [PageCard](/docs/components/page-card) umschließen, um sie beispielsweise in einer Seite `login.vue` anzuzeigen.

::component-example
---
name: 'auth-form-page-example'(Beispiel für eine auth-form-page)
Einsturz: wahr
---
::

@@176@btw

@@@@@@@@@@@@@@ph177@@props

Komponenten-Props

::callout{icon="i-simple-icons-mdnwebdocs" to="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form#attributes" target="_blank"}
Diese Komponente unterstützt auch alle nativen `<form>` HTML-Attribute.
::

### Spielautomaten

Die Komponenten-Slots

### Emits

Komponenten emittieren

@@181@181@181@181@181@181@181@181@181@181@181@181@181@181@@181@18@181@181@@181@@181@@181@@181@@181@181@181@181@181@181@@181@181@1@181@181@@181@@181@@@181@@@18181@@@@@18100000000001@@@@@@@@@@@@111111181000000000000000000000000000000000

Sie können auf die typisierte Komponenteninstanz zugreifen (formRef und Zustand offen legen), indem Sie [`useTemplateRef`](). Zum Beispiel können Sie in einer separaten Form (z. B. ein "Reset"-Formular) Folgendes tun:

```vue
<script setup lang="ts">
const authForm = useTemplateRef('authForm')
</script>

<template>
  <UAuthForm ref="authForm" />
</template>
```

Dies gibt Ihnen Zugriff auf die folgenden (exponierten) Eigenschaften:

| Vorname| Typ|
| ---- | ---- |
| @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@|{lang="ts-type"}|
| @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@###################################################################################################################################|{lang="ts-type"}|

@@ph204@@gmail.de

Das Komponenten-Theme

@@ph205@@changelog (auf Englisch)

Das Component-Changelog
