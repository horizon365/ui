---
description: Eine Headless-Komponente zum Theme-Child-Komponenten.
category: layout
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Theme.vue
---

@@@ph000@Verwendung

Die Theme-Komponente überschreibt die Standardeinstellungen **slotclasses** und **props** aller untergeordneten Komponenten, ohne jede einzelne einzeln zu modifizieren.

::note
Die Theme-Komponente rendert kein HTML-Element, sondern bietet nur Theme-Overrides für ihre Kinder.
::

::framework-only
#nuxt sein
:::tip
Für die Konfiguration des Designs auf App-Ebene empfehlen wir stattdessen die `app.config.ts`-Datei.
:::

#Ansehen
:::tip
Für die Konfiguration des Designs auf App-Ebene empfehlen wir stattdessen die `vite.config.ts`-Datei.
:::
::

### Slot-Klassen

Verwenden Sie `ui` prop, um Slot-Klassen von untergeordneten Komponenten zu überschreiben. Schlüssel sind Komponentennamen (camelCase) und Werte sind ihre Slot-Klassen-Überschreibungen.

::component-example
---
Name: 'Theme-ui-Beispiel'
---
::

### Prop Standardeinstellungen: badge{label="4.8+" class="align-text-top"}

Verwenden Sie `props` prop, um den Standardwert einer beliebigen prop auf den untergeordneten Komponenten zu überschreiben.

::component-example
---
Name: 'theme-props-example'(Beispiel)
---
::

::tip
Explizite Props auf einer Komponente (z.B.`<UButton color="primary" />`) gewinnen immer über `<UTheme :props>`. Theme-Standardeinstellungen gelten nur, wenn die Prop nicht explizit übergeben wurde.
::

@@ph016 @ Beispiele

### Mehrere Komponenten

Verwenden Sie verschiedene Tasten in `ui` oder `props`, um mehrere Komponententypen gleichzeitig zu gestalten.

::component-example
---
Name: "Themen-Mehrfachbeispiel"
---
::

@@ph020@geschachtelten Themen

Verschachteln Sie mehrere Theme-Komponenten, um Overrides zu erstellen. Das innerste Theme hat Vorrang, während nicht überschriebene Schlüssel vom äußeren Theme geerbt werden.

::component-example
---
Name: 'Theme-nested-example'(Beispiel)
---
::

### Explizite Priorität

Das explizite Setzen einer beliebigen Prop (einschließlich `ui`) auf eine einzelne Komponente hat immer Vorrang vor der Theme-Komponente.

::component-example
---
Name: 'Themen-Vorrangbeispiel'
---
::

### Deep propagation

Die Overrides sind für alle abgeleiteten Komponenten verfügbar, unabhängig davon, wie tief sie verschachtelt sind.

::component-example
---
Name: 'Themen-Tiefbeispiel'
---
::

::note
In diesem Beispiel ist `MyButton` eine benutzerdefinierte Komponente, die ein `UButton` intern rendert. Die Theme-Overrides gelten weiterhin, da sie sich durch den gesamten Komponentenbaum ausbreiten.
::

### Formkomponenten

Verwenden Sie die Designkomponente, um ein konsistentes Styling für eine Gruppe von Formularkomponenten anzuwenden.

::component-example
---
Name: 'Themen-Form-Beispiel'
---
::

::tip
`<UFormField>`,`<UFieldGroup>` und `<UAvatarGroup>` haben Vorrang vor `<UTheme :props>` für `size`,`color` und `highlight`.
::

### prosa-komponenten

Verwenden Sie den `prose` Namespace, um Typografiekomponenten zu gestalten. Schlüssel werden unter `prose` verschachtelt (z. B.`prose.p`,`prose.code`).

::component-example
---
Name: 'Theme-Prosa-Beispiel'
---
::

@@ph040@@api

@@ph041@@@props

Komponenten-Props

@@ph042@@slots

Die Komponenten-Slots

@@ph043@@changelog @ changelog

Das Component-Changelog
