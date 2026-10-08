---
description: Ein nicht-modaler Dialog, der um ein Triggerelement herum schwebt.
category: overlay
keywords:
  - hover card
  - flyout
links:
  - label: Die Hovercard
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/hover-card
  - label: Popovers
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/popover
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Popover.vue
---

@@@ph000@@Verwendung

Verwenden Sie eine [Button](/docs/components/button) oder eine andere Komponente im Standardsteckplatz des Popovers.

Verwenden Sie dann den `#content`-Slot, um den Inhalt hinzuzufügen, der angezeigt wird, wenn das Popover geöffnet ist.

::component-code
---
Schöner: wahr
Slots auf:
  Default:|

    @@@@006 @

  Inhalt:|

    @@@@007 @
---

: u-button {label="Open" color="neutral" variant="subtle"}

#Inhalte
: placeholder{class="size-48 m-4 inline-flex"}
::

@@ph010@mode.de Bearbeiten

Verwenden Sie `mode` prop, um den Modus des Popover. Defaults in `click` zu ändern.

::tip
Stellen Sie im `hover`-Modus die `enable-touch` prop so ein, dass Benutzer den Popover durch Antippen des Auslösers auf Touch-Geräten umschalten können, oder verwenden Sie den `click`-Modus für Trigger, die angetippt werden sollen.
::

::component-code
---
Schöner: wahr
Items:
  Mode sein:
    @@ph016@@klick
    @@ph017@gmail.de
Props:
  Modus: „ Hover "
  enableTouch: wahr
Slots auf:
  Default:|

    @@ph018

  Inhalt:|

    @@ph019
---

: u-button {label="Open" color="neutral" variant="subtle"}

#Inhalte
: placeholder{class="size-48 m-4 inline-flex"}
::

::note
Bei Verwendung des `hover`-Modus wird die Reka-Benutzeroberfläche [`HoverCard`](https://reka-ui.com/docs/components/hover-card) Komponente anstelle der Komponente [`Popover`](https://reka-ui.com/docs/components/popover) verwendet.
::

@@ph033@delay

Wenn Sie den Modus `hover` verwenden, können Sie die Props `open-delay` und `close-delay` verwenden, um die Verzögerung zu steuern, bevor das Popover geöffnet oder geschlossen wird.

::component-code
---
Schöner: wahr
Ignoriert:
  @@ph037@mode.de
Props:
  Modus: „ Hover "
  Öffnungszeit: 500
  Geschlossene Zeit: 300
Die Slots:
  Default:|

    @@@@@@@@@@@@@@@@@038 @

  Inhalte:|

    @@@@@@@39 @
---

: u-button {label="Open" color="neutral" variant="subtle"}

#Inhalte
: placeholder{class="size-48 m-4 inline-flex"}
::

@@ph042 @ Inhalt

Verwenden Sie `content` prop, um zu steuern, wie der Popover-Inhalt gerendert wird, z. B.`align` oder `side`.

::component-code
---
Schöner: wahr
Items:
  content.align:
    @@@@@@@@@@starts046@@starts046@starts046@starts046@starts046@starts046@starts046@starts046 @ starts046 @ starts046 @ starts046 @ starts046
    @@ph047@mitte-center
    @@048@048@048
  content.side:
    @@ph049@@gmail.de
    @@500@left
    @@@@@551@101@101@101@101@101@101@101@101@101@101@101@101@111@1011@1011@111@1011@111@111@1111@1111@111@11111@1111@1111@1111@11111@111111@11111@1@111111@11111@11111@1111111@11111111@11111111@111111111111@1111111111@@@@111111111111111111@@@@@11111111111
    @@ph052@bottom
Props:
  Inhalte:
    Ausrichtung: Center
    Seite: Bottom
    Seitenversatz: 8
Die Slots:
  Default:|

    @@@@@@@53

  Inhalt:|

    @@@@@@54
---

: u-button {label="Open" color="neutral" variant="subtle"}

#Inhalte
: placeholder{class="size-48 m-4 inline-flex"}
::

@@ph057@Pfeiltasten

Verwenden Sie die `arrow` prop, um einen Pfeil auf dem Popover anzuzeigen.

::component-code
---
Schöner: wahr
Ignoriert:
  @@ph059@arrow (nicht bekannt)
Props:
  Arrow: wahr
Slots auf:
  Default:|

    @@@@@@@@060

  Inhalt:|

    @@061
---

: u-button {label="Open" color="neutral" variant="subtle"}

#Inhalte
: placeholder{class="size-48 m-4 inline-flex"}
::

### Modal

Verwenden Sie `modal` prop, um zu steuern, ob der Popover die Interaktion mit externen Inhalten blockiert.

::component-code
---
Schöner: wahr
Ignoriert:
  @@@@@@@title
Props:
  Modus: wahr
Die Slots:
  Default:|

    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@068

  Inhalt:|

    @@@@@@@@@@@@@@069 @
---

: u-button {label="Open" color="neutral" variant="subtle"}

#Inhalte
: placeholder{class="size-48 m-4 inline-flex"}
::

### dismissible @ Unzulässig

Verwenden Sie `dismissible` prop, um zu steuern, ob der Popover deaktiviert werden kann, wenn Sie außerhalb des Popovers klicken oder escape drücken.

::note
Ein `close:prevent`-Ereignis wird ausgegeben, wenn der Benutzer versucht, es zu schließen.
::

::component-example
---
Name: 'Popoor-dismissible-example'(Popoor-dismissible-Beispiel)
---
::

## Beispiele

### Control offener Zustand

Sie können den offenen Zustand mit der `default-open` prop oder der `v-model:open`-Direktive steuern.

::component-example
---
Name: 'Popoor-Open-Beispiel'
---
::

::note
In diesem Beispiel können Sie das Popover mithilfe von [`defineShortcuts`]() umschalten, indem Sie: kbd{value="O"} drücken.
::

### Mit der Befehlspalette

Sie können eine [CommandPalette](/docs/components/command-palette) Komponente innerhalb des Popover-Inhalts verwenden.

::component-example
---
Einsturz: wahr
Name: 'popoor-command-palette-example'(Popoor-Befehl-Palette-Beispiel)
---
::

@@ph091@@Mit folgendem Cursor

Sie können den Popover dazu bringen, dem Cursor zu folgen, wenn Sie mit dem Mauszeiger über ein Element fahren, indem Sie den Befehl [`reference`](https://reka-ui.com/docs/components/tooltip#trigger) prop verwenden:

::component-example
---
name: 'popover-cursor-example'(Popover-Cursor-Beispiel)
---
::

### Mit Ankerplatz

Sie können den `#anchor`-Slot verwenden, um den Popover gegen ein benutzerdefiniertes Element zu positionieren.

::warning
Dieser Slot funktioniert nur, wenn `mode` ist.
::

::component-example
---
Einsturz: wahr
Name: 'popoor-anchor-slot-beispiel'
---
::

@@101@bpb

@@@@@@@@ph102@@props

Komponenten-Props

### Spielautomaten

Die Komponenten-Slots

::note
Die `close` Funktion ist nur verfügbar, wenn `mode` auf `click` gesetzt ist, da Reka UI dies für [`Popover`](https://reka-ui.com/docs/components/popover#close-using-slot-props) aber nicht für [`HoverCard`]().
::

@@@@@@@@@@@@@@@@Emits

Komponenten emittieren

@@@@@@@118@18@118@18@18@18@18@18@18@18@18@18@18@18@18@18@18@18@18@18@18@18@18@18@18@18@18@18@18@18@18@118@18@18@18@118@18@18@18@118@18@18@18@@@18118@@@1818118@@@@1818111118@@@@@@@@181818111111111111118@@@@@@@@@@@@@@@@@@@@@@@@@@18181818181818181181818

Das Komponenten-Theme

@@ph119@@changelog (auf Englisch)

Das Component-Changelog
