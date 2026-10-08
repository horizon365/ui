---
description: Ein Dialogfenster, in dem eine Nachricht angezeigt oder Benutzereingaben angefordert werden können.
category: overlay
keywords:
  - dialog
  - popup
  - confirm
  - alert dialog
links:
  - label: Der Dialog
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/dialog
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Modal.vue
---

@@@ph000@Verwendung

Verwenden Sie eine [Button](/docs/components/button) oder eine andere Komponente im Standard-Slot des Modal.

Verwenden Sie dann den `#content`-Slot, um den Inhalt hinzuzufügen, der angezeigt wird, wenn das Modal geöffnet ist.

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
: placeholder{class="h-48 m-4"}
::

Sie können auch die `#header`{lang="ts-type"},`#body`{lang="ts-type"} und `#footer`{lang="ts-type"} Slots verwenden, um den Inhalt des Modals anzupassen.

@@@@@16@16@16@16@16@16@16@16@16@16@16@16@16@16@16@16

Verwenden Sie `title` prop, um den Titel des Modal-Headers zu setzen.

::component-code
---
Schöner: wahr
Props:
  title: 'Modal mit Titel'
Slots auf:
  Default:|

    @@ph018

  Der Körper:|

    @@ph019
---

: u-button {label="Open" color="neutral" variant="subtle"}

#Körper
: placeholder{class="h-48"}
::

@@ph022@@Beschreibung

Verwenden Sie `description` prop, um die Beschreibung des Modal-Headers festzulegen.

::component-code
---
Schöner: wahr
Ignoriert:
  @@ph024@title
Props:
  Titel: "Mode mit Beschreibung"
  Die Inschrift lautet: "Lorem ipsum dolor sit amet, consectetur adipiscing elit".
Die Slots:
  Default:|

    @@@@@@@@@@@@@@@@@025 @

  Der Körper:|

    @@@@@@@@@@@@@@@@@026 @
---

: u-button {label="Open" color="neutral" variant="subtle"}

#Körper
: placeholder{class="h-48"}
::

@@ph029@@abschliessen

Verwenden Sie `close` prop, um die Schaltfläche zum Schließen (mit dem Wert `false`), die in der Kopfzeile des Modals angezeigt wird, anzupassen oder zu verbergen.

Sie können jede Eigenschaft aus der Komponente [Button](/docs/components/button) übergeben, um sie anzupassen.

::component-code
---
Schöner: wahr
Ignoriert:
  @@ph036@title
  - close.color (@ close. color) Bearbeiten
  @@ph038@close.variant (nicht)
Props:
  Titel: 'Modal mit Schließen-Knopf'
  Schließen:
    Farbe: Primär
    Beschreibung: Outline
    Klasse: 'rounded-full'
Die Slots:
  Default:|

    @@@@@@@39

  Körper:|

    @@040
---

: u-button {label="Open" color="neutral" variant="subtle"}

#Der Körper
: Platzhalter{class="h-48"}
::

::tip
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
  Titel: 'Modal mit Schließen-Knopf'
  closeIcon: 'i-lucide-arrow-right'(I-lucide-arrow-rechts)
Slots auf:
  Default:|

    @@@@52

  Körper:|

    @@@@@@@53
---

: u-button {label="Open" color="neutral" variant="subtle"}

#Körper
: placeholder{class="h-48"}
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

@@ph060@übergangsweise

Verwenden Sie `transition` prop, um zu steuern, ob das Modal animiert ist oder nicht. Standardmäßig ist `true`.

::component-code
---
Schöner: wahr
Ignoriert:
  @@ph063@title
Props:
  Übergang: false
  Titel: "Mode ohne Übergang"
Die Slots:
  Default:|

    @@@@@@@@@@@@@@064 @

  Körper:|

    @@@@@@@@@@@065
---

: u-button {label="Open" color="neutral" variant="subtle"}

#Der Körper
: placeholder{class="h-48"}
::

### Überlappung

Verwenden Sie `overlay` prop, um zu steuern, ob das Modal ein Overlay hat oder nicht. Standardmäßig ist `true`.

::component-code
---
Schöner: wahr
Ignoriert:
  @@ph071@title
Props:
  Überlagerung: false
  Titel: "Mode ohne Überlagerung"
Die Slots:
  Default:|

    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

  Körper:|

    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@073
---

: u-button {label="Open" color="neutral" variant="subtle"}

#Körper
: placeholder{class="h-48"}
::

### Modal

Verwenden Sie `modal` prop, um zu steuern, ob das Modal die Interaktion mit externen Inhalten blockiert. Standardmäßig `true`.

::note
Wenn `modal` auf `false` gesetzt wird, wird das Overlay automatisch deaktiviert und externe Inhalte werden interaktiv.
::

::component-code
---
Schöner: wahr
Ignoriert:
  @@@@@@81@title
Props:
  Ausführung: FALSE
  Titel: Interaktiv
Slots auf:
  Default:|

    @@@@@@@@@@@@@@@@@@@082

  Körper:|

    @@@@@@@@@@@@@@@@@@083
---

: u-button {label="Open" color="neutral" variant="subtle"}

#Körper
: placeholder{class="h-48"}
::

### dismissible

Verwenden Sie die `dismissible` prop, um zu steuern, ob das Modal deaktiviert werden kann, wenn Sie außerhalb davon klicken oder escape drücken.

::note
Ein `close:prevent`-Ereignis wird ausgegeben, wenn der Benutzer versucht, es zu schließen.
::

::tip
Sie können `modal: false` mit `dismissible: false` kombinieren, um den Hintergrund des Modals interaktiv zu gestalten, ohne ihn zu schließen.
::

::component-code
---
Schöner: wahr
Ignoriert:
  @@ph092@@title
Props:
  Ablehnbar: false
  Modalwert: wahr
  Titel: "Unaufhaltsam"
Die Slots:
  Default:|

    @@@@@@@@@@@@@@@@093

  Körper:|

    @@@@@94
---

: u-button {label="Open" color="neutral" variant="subtle"}

#Körper
: Platzhalter{class="h-48"}
::

### Scrollable: badge{label="4.2+" class="align-text-top"}

Verwenden Sie die `scrollable` prop, um den Inhalt des Modals innerhalb des Overlays scrollbar zu machen.

::warning
Da das Overlay zum Scrollen benötigt wird, ist `modal: false` nicht kompatibel und `overlay: false` entfernt nur den Hintergrund.
::

::component-code
---
Schöner: wahr
Ignoriert:
  @@102@Titel
Props:
  Scrollbar: wahr
  Überlagerung: true
  Titel: Modal Scrollable
Slots auf:
  Default:|

    @103

  Körper:|

    @104
---

: u-button {label="Open" color="neutral" variant="subtle"}

#Der Körper
: placeholder{class="h-screen"}
::

::caution
Es gibt ein [known issue](https://reka-ui.com/docs/components/dialog#scrollable-overlay), bei dem ein Klick auf die Bildlaufleiste den Dialog unter einigen Betriebssystemen unbeabsichtigt schließen kann.
::

### Vollbildfunktion

Verwenden Sie `fullscreen` prop, um den Modal-Vollbildmodus zu erstellen.

::component-code
---
Schöner: wahr
Ignoriert:
  @@113@Titel
  @@114@fullscreen
Props:
  Vollbild: Wahr
  Titel: "Fullscreen"
Slots auf:
  Default:|

    @@@@115 @

  Körper:|

    @@@@116 @
---

: u-button {label="Open" color="neutral" variant="subtle"}

#Körper
: Platzhalter{class="h-full"}
::

### Unmount: badge{label="4.10+" class="align-text-top"}

Verwenden Sie die `unmount-on-hide` prop, um zu verhindern, dass der Inhalt des Modals beim Schließen entfernt wird.

::component-code
---
Schöner: wahr
Ignoriert:
  @@123@Titel
Props:
  unmountOnHide: falsch
  Titel: "Mode"
Slots auf:
  Default:|

    @@@@@@@124

  Körper:|

    @@@@125
---

: u-button {label="Open" color="neutral" variant="subtle"}

#Der Körper
: placeholder{class="h-48"}
::

::note
Sie können das DOM überprüfen, um zu sehen, dass der Inhalt des Modals gerendert wird, auch wenn es geschlossen ist.
::

::tip
Wenn `portal` prop auf `false` gesetzt ist, wird der Inhalt auch auf dem Server gerendert. Dies ist nützlich, um ein geöffnetes Modal während SSR ohne Flash beim Laden der Seite zu rendern oder seinen Inhalt für SEO freizugeben.
::

## Beispiele

### Control Offener Zustand

Sie können den offenen Zustand mithilfe der Direktive `default-open` prop oder der Direktive `v-model:open` steuern.

::component-example
---
Name: 'Modal-Open-Example'
---
::

::note
In diesem Beispiel können Sie das Modal mithilfe von [`defineShortcuts`]() umschalten, indem Sie: kbd{value="O"} drücken.
::

::tip
Auf diese Weise können Sie den Auslöser außerhalb des Modal verschieben oder vollständig entfernen.
::

### Programmatische Nutzung

Sie können das Composable [`useOverlay`](/docs/composables/use-overlay) verwenden, um ein Modal programmgesteuert zu öffnen.

::warning
Stellen Sie sicher, dass Sie Ihre App mit der Komponente [`App`](/docs/components/app) Komponente, die die Komponente [`OverlayProvider`](https://github.com/nuxt/ui/blob/v4/src/runtime/components/OverlayProvider.vue) Komponente verwendet, umschließen.
::

Erstellen Sie zunächst eine modale Komponente, die programmatisch geöffnet wird:

::component-example
---
Schöner: wahr
Name: "Beispiel-Modell"
Vorschau: FALSE
---
::

::note
Sie können beliebige Daten über das `close`-Ereignis ausgeben, und diese Daten werden zum aufgelösten Wert von `open()`.
::

Dann nutzen Sie es in Ihrer App:

::component-example
---
Modal-Programmatic-Beispiel
---
::

::tip
Sie können das Modal innerhalb der Modalkomponente schließen, indem Sie `emit('close')` ausgeben.
::

### verschachtelte Modale

Sie können Modals ineinander verschachteln.

::component-example
---
Name: 'Modal-Nested-Example'(Beispiel)
---
::

### Mit Fußzeilensteckplatz

Verwenden Sie den `#footer`-Slot, um Inhalte nach dem Modal-Body hinzuzufügen.

::component-example
---
Name: 'modal-footer-slot-beispiel'
---
::

### Mit der Befehlspalette

Sie können eine [CommandPalette](/docs/components/command-palette) Komponente innerhalb des Modals Inhalt verwenden.

::component-example
---
Einsturz: wahr
Name: 'modal-command-palette-example'(modal-Befehl-Paletten-Beispiel)
---
::

::note
In diesem Beispiel wird `useLazyFetch` mit `immediate: false` verwendet, um Daten nur beim Öffnen des Modal abzurufen.
::

@@170@bmg17

### Props

Komponenten-Props

### Slots

Die Komponenten-Slots

@@@@@@@173@@@Emits

Komponenten emittieren

## Thema

Das Komponenten-Theme

@@ph175@@changelog (auf Englisch)

Das Component-Changelog
