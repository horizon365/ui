---
description: Ein Popup, das Informationen anzeigt, wenn der Mauszeiger über ein Element bewegt wird.
category: overlay
keywords:
  - hint
links:
  - label: Tooltip Bearbeiten
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/tooltip
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Tooltip.vue
---

@@@ph000@Verwendung

Verwenden Sie ein [Button](/docs/components/button) oder eine andere Komponente im Standardsteckplatz des Tooltips.

::component-code
---
Schöner: wahr
Ignoriert:
  @@ph005@@text
Props:
  Text: "Öffnen auf GitHub"
Die Slots:
  Default:|

    @@@@006 @
---

: u-button {label="Open" color="neutral" variant="subtle"}
::

::warning
Stellen Sie sicher, dass Sie Ihre App mit der Komponente [`App`]() umschließen, die die Komponente [`TooltipProvider`](https://reka-ui.com/docs/components/tooltip#provider) von Reka UI verwendet.
::

::tip{to="/docs/components/app#props"}
Sie können die `App` Komponente `tooltip` prop überprüfen, um zu sehen, wie der Tooltip global konfiguriert wird.
::

@@ph020@@text @@ Übersetzung

Verwenden Sie `text` prop, um den Inhalt des Tooltips einzustellen.

::component-code
---
Schöner: wahr
Props:
  Text: "Öffnen auf GitHub"
Die Slots:
  Default:|

    @@ph022
---

: u-button {label="Open" color="neutral" variant="subtle"}
::

### Kbds

Verwenden Sie `kbds` prop, um [Kbd](/docs/components/kbd) Komponenten im Tooltip zu rendern

::component-code
---
Schöner: wahr
Ignoriert:
  @@ph030@@text @ Übersetzung
  - kbds
Props:
  Text: "Öffnen auf GitHub"
  Die KBS:
    @@@@@@@@@@@@@@@@@@@ph032@meta
    @@@@333@@g-t-t-t-t-t-t-t-t-t-t-t-t-t-t-t-t-t-t-t-t-t-t-t-t-t-t-t-t-t-t-t-t-t-t-t-t-t-t-t-t-t-t-t-t-t-t-t-t-t-t-t-t-t-t-t-t-t-t-t-t-t-t-t-t-t-t-t-t-t-t-t-t-t-t-t-t-t-t-t-t-t-t-t-t-t-t-t-t-t-t-t-t-t-t-t-t-t-t-t-t-t-t-t-t-t-t-t-t-t-t-t-t-t-t-t-t-t-t-t-t
Slots auf:
  Default:|

    @@@@@@@@034
---

: u-button {label="Open" color="neutral" variant="subtle"}
::

::tip
Sie können spezielle Tasten wie `meta` verwenden, die auf macOS als `⌘` und auf anderen Plattformen als `Ctrl` angezeigt werden.
::

@@ph039@delay

Verwenden Sie `delay-duration` prop, um die Verzögerung zu ändern, bevor der Tooltip angezeigt wird.

::component-code
---
Schöner: wahr
Ignoriert:
  @@ph042@@text @ Übersetzung
Props:
  Verzögerung: 0
  Text: "Öffnen auf GitHub"
Slots auf:
  Default:|

    @@043 @
---

: u-button {label="Open" color="neutral" variant="subtle"}
::

::tip
Dies kann global durch die Option `tooltip.delayDuration` in der Komponente [`App`](/docs/components/app) konfiguriert werden.
::

@@ph051@@Inhalt

Verwenden Sie `content` prop, um zu steuern, wie der Tooltip-Inhalt gerendert wird, z. B.`align` oder `side` zum.

::tip
Dies kann global über die Option `tooltip.content` in der Komponente [`App`](/docs/components/app) konfiguriert werden.
::

::component-code
---
Schöner: wahr
Ignoriert:
  @@ph061@@@text @@@ Übersetzung
Items:
  content.align:
    @@ph062@@starter.de
    @@ph063@mitte@mitte@mitte@mitte@mitte@mitte@mitte@mitte@mitte@mitte@mitte@mitte@mitte@mitte@mitte@mitte@mitte@mitte@mitte@mitte@mitte@mitte@mitte@mitte@mitte@mitte@mitte@mitte@mitte@mitte@mitte@mitte@mitte@mitte@mitte@mitte@mitte@mitte@mitte@mitte@mitte@mitte@mitte@mitte@mitte@mitte@mitte@mitte@mitte@mitte@mitte@mitte@mitte@mitte@mittemitte@mitte@mittemittemittemittemittemittemittemittemittemittemittemittemittemittemittemittemittemittemittemittemittemittemittemittemittemittemittemittemittemittemittemittemittemittemittemittemit
    @@@@@@@@@@@@@@@@@@ph064@ende
  content.side:
    @@@@@@65@000 @ rechts
    @@@@@@666@@666@@666@66@66@66@@666@@66@@66@@66@@66@@66@@66@@66@@@66@@@66@@66@@6@@@left
    @@@@@67@10
    @@@@@68@@bottom
Props:
  Inhalt:
    Ausrichtung: Center
    Seite: Bottom
    Seitenversatz: 8
  Text: "Öffnen auf GitHub"
Slots auf:
  Default:|

    @@@@@@@@@@@@@@069 @
---

: u-button {label="Open" color="neutral" variant="subtle"}
::

@@@@@@@@@@ph071@arrow

Verwenden Sie `arrow` prop, um einen Pfeil auf dem Tooltip anzuzeigen.

::component-code
---
Schöner: wahr
Ignoriert:
  @@ph073@@text
  @@ph074@@arrow
Props:
  Pfeil: wahr
  Text: "Öffnen auf GitHub"
Die Slots:
  Default:|

    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@075
---

: u-button {label="Open" color="neutral" variant="subtle"}
::

### disabled @ disabled

Verwenden Sie `disabled` prop, um den Tooltip zu deaktivieren.

::component-code
---
Schöner: wahr
Ignoriert:
  @@ph079@@@text @@@ Übersetzung
Props:
  Behindert: Wahr
  Text: "Öffnen auf GitHub"
Die Slots:
  Default:|

    @@@@80
---

: u-button {label="Open" color="neutral" variant="subtle"}
::

@@ph082@@@Beispiele

### Control offener Zustand

Sie können den offenen Zustand mit der `default-open` prop oder der `v-model:open`-Direktive steuern.

::component-example
---
Name: 'Tooltip-open-example'(Tooltip-öffnen-Beispiel)
---
::

::note
In diesem Beispiel können Sie den Tooltip mithilfe von [`defineShortcuts`]() umschalten, indem Sie auf kbd{value="O"} drücken.
::

@@ph092@@mit folgendem Cursor

Sie können den Tooltip dazu bringen, dem Cursor zu folgen, wenn Sie mit dem Mauszeiger über ein Element fahren, indem Sie den Befehl [`reference`](https://reka-ui.com/docs/components/tooltip#trigger) prop verwenden:

::component-example
---
Name: 'Tooltip-Cursor-Beispiel'
---
::

@@@@@@98@@bpb

@@@@@@@@@@@@@@@@ph0999@@@props

Komponenten-Props

@@ph100@@slots

Die Komponenten-Slots

@@@@@@@@@@@@@@@@@@@@@@@emits

Komponenten emittieren

@@ph102@@gmail.de

Das Komponenten-Theme

@@ph103@@changelog @ changelog

Das Component-Changelog
