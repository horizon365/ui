---
description: 'Eine zusammenklappbare Seitenleiste mit mehreren visuellen Varianten.'
category: layout
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Sidebar.vue
---

@@@ph000@@Verwendung

Die Sidebar-Komponente ist eine eigenständige, feste Sidebar, die den Seiteninhalt verschiebt. Auf dem Desktop wird sie inline gerendert und kann reduziert werden; Auf dem Handy öffnet es eine [Modal](/docs/components/modal),[](/docs/components/slideover) oder [Drawer](PH0111) Komponente.

::tip{to="/docs/components/dashboard-sidebar"}
**Sidebar vs DashboardSidebar**: Diese Komponente ist eine einfache, eigenständige Sidebar, die Sie überall ablegen können (Chat-Panel, Einstellungen, Navigation). If you need drag-to-size, state persistence and integration with [DashboardGroup](/docs/components/dashboard-group),[DashboardSidebar](/docs/components/dashboard-sidebar) verwenden.
::

Verwenden Sie die `header`,`default` und `footer` Slots, um die Seitenleiste content. The `v-model:open` Direktive ist viewport-aware: auf dem Desktop steuert es den erweiterten/reduzierten Zustand, auf dem Handy steuert es das Menü.

::component-example
---
Einsturz: wahr
Schöner: wahr
Name: 'Beispielseite'
Übertreibungen: wahr
Klasse: '! p-0! justify-start h-[500px] enthalten-[paint] transform-gpu'
---
::

@@@@@@@@@@@@@@ph027@@@@variant.de

Verwenden Sie `variant` prop, um den visuellen Stil der Seitenleiste zu ändern. Standardmäßig `sidebar`.

::component-example
---
Einsturz: wahr
Schöner: wahr
name: 'sidebar-props-example'(Beispiel)
Übertreibungen: wahr
Optionen:
  @@@ph030@name:'Variante'
    Bezeichnung: „ Variante "
    Items:
      @@ph031@btw
      @@ph032@floating@@@floating@@@ph032@@floating@@@@floating@@@floating@@@floating@@@floating@@floating@@floating@@floating@floating@floating@floating@floating@floating@floating@floating@floating@floating@floating@floating@floating@floating@floating@floating@floating@floating@floating@floating@floating@@floating@floating@floating@float@floating@floating@floating@floating@float@float@float@@floating@floating@float@@floating@floating@@@float@floating@floating@@float@@floating@floating@@@floating@float@@floating
      @@ph033@inset
    Default: "eingeblendet"
Klasse: '! p-0! justify-start h-[500px] enthalten-[paint] transform-gpu'
---
::

### zusammenklappbar

Verwenden Sie `collapsible` prop, um das Kollapsverhalten der Seitenleiste zu ändern. Defaults auf `offcanvas`.

- `offcanvas`: Die Seitenleiste wird vollständig aus dem Blickfeld verschoben.
- `icon`: Die Seitenleiste schrumpft auf die reine Symbolbreite.
- `none`: Die Seitenleiste ist nicht zusammenklappbar.

::component-example
---
Einsturz: wahr
Schöner: wahr
name: 'sidebar-props-example'(Beispiel)
Übertreibungen: wahr
Optionen:
  - name:'zusammenklappbar'
    Markiert: "collapsible"
    Items:
      @@ph044@@offcanvas (nicht öffentlich)
      @@ph045@@gmail.de
      @@ph046@keine
    Fehler: "Icon"
  - name:'Variante'
    Bezeichnung: „ Variante "
    Items:
      @@048@@slide
      @@ph049@@floating
      @@ph050@@inset
    Default: "Seitenleiste"
Klasse: '! p-0! justify-start h-[500px] enthalten-[paint] transform-gpu'
---
::

::tip{to="#slots"}
Sie können auf die `state` in den Slot-Requisiten zugreifen, um den Inhalt der Seitenleiste anzupassen, wenn sie zusammengeklappt ist.
::

@@@@@@@52@Seite

Verwenden Sie `side` prop, um die Seite der Seitenleiste zu ändern. Standardmäßig zu `left`.

::component-example
---
Einsturz: wahr
Schöner: wahr
name: 'sidebar-props-example'(Beispiel)
Übertreibungen: wahr
Optionen:
  - name:'Seite'
    Labels: "Seite"
    Items:
      @@@@@@@@@@@@@@@@@ph056@@left
      @@@@@57@57@57@57@57@57@57@@57@@57@@@57@@57@@@57@@@57@@@57@@@57@@57@@57@@57@@57@@57@@@57@@@57@@@57@555@@@557@@55557@@@@@@@@@@557@@@@@@@@5557@@@@@@@@@@@@@@@@@@@@@@@@@@@@@5555557@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
    Default: „ richtig "
Klasse: '! p-0! justify-start h-[500px] enthalten-[paint] transform-gpu'
---
::

@@@@@@@@@@@@@@@@@@ph058@title

Verwenden Sie `title` prop, um den Titel des Sidebar-Headers festzulegen.

::component-code
---
Schöner: wahr
Hide:
  @@@@@@class060@@class060@class@class060@class@class060@class@class@class@class060@class@class@class@class@class@class060@class@class@class@class@class@class@class060@class@class@class@class@class@class@class@class@classclass@class@class@class@class@classclass@classclass@classclass@classclassclassclassclass@classclassclassclassclassclassclassclassclassclassclassclassclassclassclassclassclassclassclassclassclassc@c@classclassclassclassc@classclassclassclassclassc@classclassclassclassc@classclassclassclass
  @@@@@@@@061@ui
Ignoriert:
  - ui.container
Props:
  Überschrift: Navigation
  ui: ist
    Behälter: h-full
Slots auf:
  Default:|

    @@@@@@@@@063
Klasse: '! p-0! justify-start h-[500px] enthalten-[paint] transform-gpu'
---

: placeholder{class="h-full"}
::

@@ph065@@Beschreibung

Verwenden Sie `description` prop, um die Beschreibung des Sidebar-Headers festzulegen.

::component-code
---
Schöner: wahr
Hide:
  @@@@@@@@@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@c
  @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@#################################################################################################################################################################################################
Ignoriert:
  @@ph069@@title
  - ui.container
Props:
  Überschrift: Navigation
  Beschreibung: Browse your Workspace
  ui: ist
    Behälter: h-full
Die Slots:
  Default:|

    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
Klasse: '! p-0! justify-start h-[500px] enthalten-[paint] transform-gpu'
---

: placeholder{class="h-full"}
::

@@@@@@@@@@@rail@@@@@@rail@@@rail@@rail@rail@rail@rail@rail@rail@rail@rail@rail@rail@rail@rail@rail@rail@rail@rail@rail@rail@rail@rail@rail@rail@rail@rail@rail@rail@rail@rail@rail@rail@rail@rail@rail@rail@@rail@rail@rail@rail@rail@rail@rail@@rail@@rail@@rail@rail@@rail@rail@@rail@@@@rail@rail@@@rail@rail@@rail@rail@rail@rail@rail@rail@rail@rail@rail@rail@rail@rail@rail@rail@rail@rail@@rail@

Verwenden Sie die `rail` prop, um eine dünne interaktive Kante in der Seitenleiste anzuzeigen, die beim Klicken auf den zusammengebrochenen Zustand umschaltet. Die Schiene wird nur gerendert, wenn `collapsible` nicht `none` ist.

::component-code
---
Schöner: wahr
Ignoriert:
  @@ph077@@title
  - ui.container
Hide:
  @@@@@@@@@@@@@@@ph079@@ui
  @@80@Klasse
Props:
  Bahn: Wahr
  Zusammenklappbar: Icon
  Titel: Navigation
  Container: h-voll
Die Slots:
  Default:|

    @@@@@@@@@@@@@@@@@081 @
Klasse: '! p-0! justify-start h-[500px] enthalten-[paint] transform-gpu'
---

: placeholder{class="h-full"}
::

### 

Verwenden Sie `close` prop, um eine Schließen-Schaltfläche in der Kopfzeile der Seitenleiste anzuzeigen. Die Schließen-Schaltfläche wird nur gerendert, wenn `collapsible` nicht `none` ist.

Sie können jede Eigenschaft aus der Komponente [Button](/docs/components/button) übergeben, um sie anzupassen.

::component-code
---
Schöner: wahr
Ignoriert:
  @@ph091@@title
  @@ph092@@gmail.de
  - ui.container
Hide:
  @@@@@@@@@@@@@ph094@@ui
  @@95@Klasse
Props:
  Schließen: true
  Bahn: Wahr
  Zusammenklappbar: Icon
  Titel: Navigation
  ui: ist
    Behälter: h-full
Items:
  Schließen:
    @@ph096@@true
    @@ph097@@unwahr
Die Slots:
  Default:|

    @@@@@@98
Klasse: '! p-0! justify-start h-[500px] enthalten-[paint] transform-gpu'
---

: placeholder{class="h-full"}
::

@@ph100@Schließen-Icon

Verwenden Sie die `close-icon` prop, um die Schließen-Taste anzupassen [Icon](/docs/components/icon). Standardmäßig auf `i-lucide-x`.

::component-code
---
Schöner: wahr
Ignoriert:
  @@107@Titel
  @@@@@@@108@rail
  @@109 @ Seite
  - schließen
  - ui.container
Hide:
  @@112@@gmail.de
  @@113@Klasse
Props:
  Schließen: true
  I-Lucide-Panel-Rechts-Schließen
  Bahn: Wahr
  Zusammenklappbar: Icon
  Seite: rechts
  Titel: Navigation
  ui: ist
    Behälter: h-full
Items:
  Schließen:
    @@114@114@114@114@114@14@114@14@114@14@114@114@114@114@14@114@14@114@14@14@14@14@14@14@14@14@14@14@14@14@14@14@14@14@14@14@14@14@14@14@14@14@14@14@14@14@14@14@14@14@14@@14@@@@14@@@14@@@@@@@141414@@@@@@1414@@@@@@@@@@@@@@@@@@@1414141414@@@@@@@@@@@@@@
    @@ph115@@unwahr
Slots auf:
  Default:|

    @@@@116 @
Klasse: '! p-0! justify-start h-[500px] enthalten-[paint] transform-gpu'
---

: placeholder{class="h-full"}
::

::framework-only
#nuxt sein
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
Sie können dieses Symbol global in Ihrem `app.config.ts` unter `ui.icons.close` key anpassen.
:::

#Ansehen
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
Sie können dieses Symbol global in Ihrem `vite.config.ts` unter `ui.icons.close` key anpassen.
:::
::

### Mode (nicht)

Verwenden Sie `mode` prop, um den Modus des Sidebar-Menüs auf mobile. Defaults auf `slideover` zu ändern.

::component-example
---
Einsturz: wahr
IFrame:
  Größe: 500px
iframeMobile: wahr
Übertreibungen: wahr
name: 'sidebar-mode-example'(Beispiel für den Seitenmodus)
Optionen:
  - name:'mode'(auf Englisch)
    Markiert: "mode"
    Default: „ Slider "
    Items:
      @@126@modal
      @@127@slideover
      @@@@@@@128@gmail.de
Props:
  Klasse: "W-voll"
---
::

::tip{to="#props"}
Sie können die `menu` prop verwenden, um das Menü der Seitenleiste anzupassen, es wird sich je nach dem von Ihnen gewählten Modus anpassen.
::

## Beispiele

### Control Offener Zustand

Sie können den offenen Zustand steuern, indem Sie die `open` prop oder die `v-model:open` directive. On Desktop steuert es den erweiterten/reduzierten Zustand, auf dem Handy öffnet/schließt es das Blattmenü.

::component-example
---
Einsturz: wahr
Schöner: wahr
Name: 'Seitenöffnen-Beispiel'
Übertreibungen: wahr
Klasse: '! p-0! justify-start h-[500px] enthalten-[paint] transform-gpu'
---
::

::note
In diesem Beispiel können Sie unter Verwendung von [`defineShortcuts`]() den offenen Zustand der Sidebar durch Drücken von kbd{value="O"} umschalten.
::

### Persistieren Sie offenen Zustand

Verwenden Sie [`useLocalStorage`]() von VueUse oder [`useCookie`](https://nuxt.com/docs/4.x/api/composables/use-cookie) anstelle von `ref`, um den Seitenleistenstatus über die Seite zu erhalten.

::component-example
---
Einsturz: wahr
Schöner: wahr
Name: 'sidebar-persistieren-Beispiel'
Übertreibungen: wahr
Klasse: '! p-0! justify-start h-[500px] enthalten-[paint] transform-gpu'
---
::

::note
Der einzige Unterschied zum vorherigen Beispiel ist das Ersetzen von `ref(true)` mit `useLocalStorage('sidebar-open', true)`.
::

### Mit benutzerdefinierter Breite

Die Breite der Seitenleiste wird durch die CSS-Variable `--sidebar-width` gesteuert (standardmäßig auf `16rem`).

Überschreiben Sie sie global in Ihrem CSS oder pro Instanz mit dem `style`-Attribut.

::component-example
---
Einsturz: wahr
Schöner: wahr
name: 'sidebar-width-example'(Seitenzeilen-Width-Beispiel)
Übertreibungen: wahr
Klasse: '! p-0! justify-start h-[500px] enthalten-[paint] transform-gpu'
---
::

@@160@@Mit Header

Um die Seitenleiste unter einem [Header](/docs/components/header) zu positionieren, passen Sie die `gap` und `container` mit der `ui` prop.

::component-example
---
Einsturz: wahr
Schöner: wahr
name: 'sidebar-header-example'(Beispiel)
Übertreibungen: wahr
Klasse: '! p-0! justify-start h-[500px] enthalten-[paint] transform-gpu'
---
::

::note
Die Variable `--ui-header-height` wird standardmäßig auf `4rem` gesetzt und wird vom Header verwendet.
::

### Mit AI Chat

Verwenden Sie die Seitenleiste auf der rechten Seite mit [ChatMessages](/docs/components/chat-messages) und [ChatPrompt](/docs/components/chat-prompt), um ein KI-Chat-Panel zu erstellen.

::component-example
---
Einsturz: wahr
Schöner: wahr
name: 'sidebar-chat-example'(Beispiel)
Übertreibungen: wahr
Klasse: '! p-0! justify-start h-[500px] enthalten-[paint] transform-gpu'
---
::

@@@@@@179@@bmwbp.de

@@@@@@@@ph180@@props

Komponenten Props

### Slots

Die Komponenten-Slots

## theme

Das Komponenten-Theme

@@ph183@@changelog (auf Englisch)

Das Component-Changelog
