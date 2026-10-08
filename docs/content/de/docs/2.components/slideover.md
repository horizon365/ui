---
description: Ein Dialog, der von einer beliebigen Seite des Bildschirms eingeblendet wird.
category: overlay
keywords:
  - sheet
  - side panel
  - off-canvas
links:
  - label: Der Dialog
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/dialog
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Slideover.vue
---

@@@ph000@@Verwendung

Verwenden Sie eine [Button](/docs/components/button) oder eine andere Komponente im Standard-Steckplatz des Slideovers.

Verwenden Sie dann den `#content`-Slot, um den Inhalt hinzuzufügen, der angezeigt wird, wenn der Slideover geöffnet ist.

::component-code
---
Schöner: wahr
Slots auf:
  Default:|

    @@@@006 @

  Inhalte:|

    @@@@007 @
---

: u-button {label="Open" color="neutral" variant="subtle"}

#Inhalte
: placeholder{class="h-full m-4"}
::

Sie können auch die Slots `#header`{lang="ts-type"},`#body`{lang="ts-type"} und `#footer`{lang="ts-type"} verwenden, um den Inhalt des Slideovers anzupassen.

@@@@@16@16@16@16@16@16@16@16@16@16@16@16@16@16@16@16

Verwenden Sie `title` prop, um den Titel des Headers des Slideovers festzulegen.

::component-code
---
Schöner: wahr
Props:
  Titel: "Slideover mit Titel"
Die Slots:
  Default:|

    @@ph018

  Körper:|

    @@ph019
---

: u-button {label="Open" color="neutral" variant="subtle"}

#Körper
: placeholder{class="h-full"}
::

@@ph022 @ Beschreibung

Verwenden Sie `description` prop, um die Beschreibung des Slideover-Headers festzulegen.

::component-code
---
Schöner: wahr
Ignoriert:
  @@ph024@title
Props:
  Titel: "Slideover mit Beschreibung"
  Die Inschrift lautet: "Lorem ipsum dolor sit amet, consectetur adipiscing elit".
Slots auf:
  Default:|

    @@@@@@@@@@@@@@@@@025 @

  Körper:|

    @@ph026
---

: u-button {label="Open" color="neutral" variant="subtle"}

#Körper
: Platzhalter{class="h-full"}
::

@@ph029@@abschliessen

Verwenden Sie `close` prop, um die Schaltfläche zum Schließen (mit dem Wert `false`), die im Header des Slideovers angezeigt wird, anzupassen oder auszublenden.

Sie können jede Eigenschaft aus der Komponente [Button](/docs/components/button) übergeben, um sie anzupassen.

::component-code
---
Schöner: wahr
Ignoriert:
  @@ph036@title
  - close.color (@ close. color) Bearbeiten
  @@ph038@close.variant (nicht)
Props:
  Titel: "Slideover mit Schließen-Button"
  Schließen:
    Farbe: Primär
    Variante: Übersicht
    Klasse: 'rounded-full'
Die Slots:
  Default:|

    @@@@@@@39 @

  Körper:|

    @@040
---

: u-button {label="Open" color="neutral" variant="subtle"}

#Körper
: placeholder{class="h-full"}
::

::note
Die Schaltfläche Schließen wird nicht angezeigt, wenn der `#content`-Slot verwendet wird, da er Teil des Headers ist.
::

@@ph044@@Schließen-Symbol

Verwenden Sie die `close-icon` prop, um die Schließen-Taste anzupassen [Icon](/docs/components/icon). Standardmäßig auf `i-lucide-x`.

::component-code
---
Schöner: wahr
Ignoriert:
  @@ph051@title
Props:
  Titel: "Slideover mit Schließen-Button"
  closeIcon: 'i-lucide-arrow-right'(I-lucide-arrow-rechts)
Die Slots:
  Default:|

    @@@@52

  Körper:|

    @@@@@@@53
---

: u-button {label="Open" color="neutral" variant="subtle"}

#Der Körper
: placeholder{class="h-full"}
::

::framework-only
#nuxt sein
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
Sie können dieses Symbol global in Ihrem `app.config.ts` unter `ui.icons.close` key anpassen.
:::

#Ansehen
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
Sie können dieses Symbol global in Ihrem `vite.config.ts` unter `ui.icons.close` Schlüssel anpassen.
:::
::

@@ph060@@Seite

Verwenden Sie `side` prop, um die Seite des Bildschirms einzustellen, an der der Slideover von. Defaults auf `right` eingleitet.

::component-code
---
Schöner: wahr
Ignoriert:
  @@ph063@title
Props:
  Seite: „ Links "
  Titel: "Slideover mit Seite"
Die Slots:
  Default:|

    @@@@@@@@@@@@@@064 @

  Körper:|

    @@@@@@@@@@@065
---

: u-button {label="Open" color="neutral" variant="subtle"}

#Der Körper
: Platzhalter{class="h-full min-h-48"}
::

### Inset: badge{label="4.3+" class="align-text-top"}

Verwenden Sie `inset` prop, um den Slideover von den Kanten zu setzen.

::component-code
---
Schöner: wahr
Ignoriert:
  @@ph071@title
Props:
  Seite: "Richtig"
  Einschub: true
  Titel: "Slideover mit Einschub"
Die Slots:
  Default:|

    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

  Körper:|

    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@073
---

: u-button {label="Open" color="neutral" variant="subtle"}

#Der Körper
: placeholder{class="min-w-96 min-h-96 size-full"}
::

@@ph076@übergangsweise

Verwenden Sie `transition` prop, um zu steuern, ob der Slideover animiert ist oder nicht.

::component-code
---
Schöner: wahr
Ignoriert:
  @@ph079@@title
Props:
  Übergang: false
  Titel: "Slideover ohne Übergang"
Slots auf:
  Default:|

    @@@@80

  Körper:|

    @@@@@@@@@@@@@@@@@081 @
---

: u-button {label="Open" color="neutral" variant="subtle"}

#Körper
: placeholder{class="h-full"}
::

@@@@@@@@@@@@@@ph084@@@overlay

Verwenden Sie `overlay` prop, um zu steuern, ob der Slideover ein Overlay hat oder nicht.

::component-code
---
Schöner: wahr
Ignoriert:
  @@@@@@@87@title
Props:
  Überlagerung: false
  Titel: "Slideover ohne Overlay"
Die Slots:
  Default:|

    @@@@88

  Körper:|

    @@@@@@89
---

: u-button {label="Open" color="neutral" variant="subtle"}

#Körper
: placeholder{class="h-full"}
::

@@ph092@@modal

Verwenden Sie `modal` prop, um zu steuern, ob der Slideover die Interaktion mit externen Inhalten blockiert.

::note
Wenn `modal` auf `false` gesetzt ist, wird das Overlay automatisch deaktiviert und externe Inhalte werden interaktiv.
::

::component-code
---
Schöner: wahr
Ignoriert:
  @@@@@97@title
Props:
  Ausführung: FALSE
  Weitere Empfehlungen zu „ Slideover Interactive "
Die Slots:
  Default:|

    @@@@@@98

  Körper:|

    @@@@999 @
---

: u-button {label="Open" color="neutral" variant="subtle"}

#Der Körper
: placeholder{class="h-full"}
::

@@102@unzustellbar

Verwenden Sie die `dismissible` prop, um zu steuern, ob das Slideover unzulässig ist, wenn Sie außerhalb davon klicken oder escape drücken.

::note
Ein `close:prevent`-Ereignis wird ausgegeben, wenn der Benutzer versucht, es zu schließen.
::

::tip
Sie können `modal: false` mit `dismissible: false` kombinieren, um den Hintergrund des Slideovers interaktiv zu gestalten, ohne ihn zu schließen.
::

::component-code
---
Schöner: wahr
Ignoriert:
  @@108 @ Überschrift
Props:
  Ablehnbar: false
  Modus: wahr
  Titel: "Nicht abnehmbar"
Die Slots:
  Default:|

    @@@@109 @

  Körper:|

    @@@@110 @
---

: u-button {label="Open" color="neutral" variant="subtle"}

#Körper
: placeholder{class="h-full"}
::

### Unmount: badge{label="4.10+" class="align-text-top"}

Verwenden Sie die `unmount-on-hide` prop, um zu verhindern, dass der Inhalt des Slideovers beim Schließen entfernt wird.

::component-code
---
Schöner: wahr
Ignoriert:
  @@117@title
Props:
  unmountOnHide: falsch
  Titel: „ Slideover "
Slots auf:
  Default:|

    @@@@118

  Körper:|

    @@@@119 @
---

: u-button {label="Open" color="neutral" variant="subtle"}

#Der Körper
: placeholder{class="h-full"}
::

::note
Sie können das DOM überprüfen, um zu sehen, dass der Inhalt des Slideovers gerendert wird, auch wenn es geschlossen ist.
::

::tip
Wenn `portal` prop auf `false` gesetzt ist, wird der Inhalt auch auf dem Server gerendert. Dies ist nützlich, um ein geöffnetes Slideover während SSR ohne Flash beim Laden der Seite zu rendern oder seinen Inhalt für SEO freizugeben.
::

## Beispiele

### Control Offener Zustand

Sie können den offenen Zustand mit der `default-open` prop oder der `v-model:open` Direktive steuern.

::component-example
---
Name: 'slideover-open-example'(Beispiel für ein 'slideover-open'-Beispiel)
---
::

::note
In diesem Beispiel können Sie unter Verwendung von [`defineShortcuts`](/docs/composables/define-shortcuts) die Slideover durch Drücken von: kbd{value="O"} umschalten.
::

::tip
Auf diese Weise können Sie den Auslöser außerhalb des Slideovers verschieben oder ganz entfernen.
::

### Programmatische Nutzung

Sie können das [`useOverlay`](/docs/composables/use-overlay) composable verwenden, um ein Slideover programmgesteuert zu öffnen.

::warning
Stellen Sie sicher, dass Sie Ihre App mit der Komponente [`App`](/docs/components/app) Komponente, die die Komponente [`OverlayProvider`](https://github.com/nuxt/ui/blob/v4/src/runtime/components/OverlayProvider.vue) Komponente verwendet, umschließen.
::

Erstellen Sie zunächst eine Slideover-Komponente, die programmatisch geöffnet wird:

::component-example
---
Schöner: wahr
Name: 'slideover-beispiel'
Vorschau: FALSE
---
::

::note
Sie können beliebige Daten über das Ereignis `close` ausgeben, und diese Daten werden zum aufgelösten Wert von `open()`.
::

Verwenden Sie es in Ihrer App:

::component-example
---
Slideover-Programmatic-Example (englisch)
---
::

::tip
Sie können den Slideover innerhalb der Slideover-Komponente schließen, indem Sie `emit('close')` ausgeben.
::

### geschachtelte Slideovers

So könnt ihr euch untereinander verschachteln.

::component-example
---
Name: 'slideover-nested-example'(Beispiel für ein verschachteltes Slideover-Beispiel)
---
::

### Mit Fußzeilensteckplatz

Verwenden Sie den `#footer`-Slot, um Inhalte nach dem Slideover-Body hinzuzufügen.

::component-example
---
Name: 'slideover-footer-slot-example'(slideover-Fußzeile-Slot-Beispiel)
---
::

@@@@@@157@@api

@@@@@@@@@@@@@@@ph158@props

Komponenten-Props

### Spielautomaten

Die Komponenten-Slots

### Emits

Komponenten emittieren

@@161@161@161@161@161@161@161@161@161@161@161@161@161@161@@161@@161@161@16@@161@@@161@161@@161@161@@161@@161@@161@@@161@@@@@@16161@@@@@@@@@@@@@@@@@@@@16161@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@#######################################

Das Komponenten-Theme

## Changelog (Deutsche Übersetzung)

Das Component-Changelog
