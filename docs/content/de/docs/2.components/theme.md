---
description: Eine Headless-Komponente zum Theme-Child-Komponenten.
category: layout
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Theme.vue
---

## Bearbeiten

Die Theme-Komponente überschreibt die Standardklassen **slot classes** und **props** aller untergeordneten Komponenten, ohne jede einzeln zu modifizieren. Es verwendet den Mechanismus `provide`/`inject` von Vue unter der Haube, sodass die Überschreibungen in jeder Tiefe angewendet werden.

::note
Die Theme-Komponente rendert kein HTML-Element, sondern bietet nur Theme-Overrides für ihre Kinder.
::

::framework-only
#nuxt
:::tip
Für die Konfiguration des Designs auf App-Ebene empfehlen wir stattdessen die Verwendung der Datei `app.config.ts`.
:::

#vue
:::tip
Für die Konfiguration des Designs auf App-Ebene empfehlen wir stattdessen die Verwendung der Datei `vite.config.ts`.
:::
::

### Slot-Klassen

Verwenden Sie die `ui`-prop, um Slot-Klassen von nachgeordneten Komponenten zu überschreiben. Schlüssel sind Komponentennamen (camelCase) und Werte sind ihre Slot-Klassen-Überschreibungen.

::component-example
---
name: 'theme-ui-example'
---
::

### Prop Standardeinstellungen: badge{label="4.8+" class="align-text-top"}

Verwenden Sie die `props` prop, um den Standardwert einer beliebigen prop auf den untergeordneten Komponenten zu überschreiben. Jede Taste wird einem Teil der props dieser Komponente zugeordnet.

::component-example
---
name: 'theme-props-example'
---
::

::tip
Explizite Requisiten auf einer Komponente (z.B. `<UButton color="primary" />`) gewinnen immer über `<UTheme :props>`. Theme-Standardeinstellungen gelten nur, wenn die Prop nicht explizit übergeben wurde.
::

## Examples (Beispiele)

### Multiple Komponenten

Verwenden Sie verschiedene Tasten in `ui` oder `props`, um mehrere Komponententypen gleichzeitig zu gestalten.

::component-example
---
name: 'theme-multiple-example'
---
::

### Verschachtelte Themen

Verschachteln Sie mehrere Theme-Komponenten, um Overrides zu erstellen. Das innerste Theme hat Vorrang, während nicht überschriebene Schlüssel vom äußeren Theme geerbt werden.

::component-example
---
name: 'theme-nested-example'
---
::

### Explicit priority (Priorität)

Das explizite Setzen einer Prop (einschließlich `ui`) auf eine einzelne Komponente hat immer Vorrang vor der Theme-Komponente.

::component-example
---
name: 'theme-priority-example'
---
::

### Deep Propagation (Tiefenausbreitung)

Die Overrides sind für alle abgeleiteten Komponenten verfügbar, unabhängig davon, wie tief sie verschachtelt sind.

::component-example
---
name: 'theme-deep-example'
---
::

::note
In diesem Beispiel ist `MyButton` eine benutzerdefinierte Komponente, die eine `UButton` intern rendert. Die Theme-Overrides gelten weiterhin, da sie sich über den gesamten Komponentenbaum ausbreiten.
::

### Form Komponenten

Verwenden Sie die Designkomponente, um ein konsistentes Styling auf eine Gruppe von Formularkomponenten anzuwenden.

::component-example
---
name: 'theme-form-example'
---
::

::tip
`<UFormField>`, `<UFieldGroup>` und `<UAvatarGroup>` behalten Vorrang vor `<UTheme :props>` für `size`, `color` und `highlight`.
::

### Prose-Komponenten

Verwenden Sie den Namensraum `prose`, um Typografiekomponenten zu gestalten. Schlüssel werden unter `prose` verschachtelt (z. B. `prose.p`, `prose.code`).

::component-example
---
name: 'theme-prose-example'
---
::

## API (Englisch)

### Props (nicht)

:component-props

### Slots Bearbeiten

:component-slots

## Changelog (englisch)

:component-changelog
