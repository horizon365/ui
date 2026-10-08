---
description: Eine Schublade, die reibungslos in und aus dem Bildschirm gleitet.
category: overlay
keywords:
  - bottom sheet
  - action sheet
  - mobile sheet
links:
  - label: Drawer
    icon: i-custom-reka-ui
    to: https://github.com/unovue/vaul-vue
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Drawer.vue
---

@@@ph000@@Verwendung

Verwenden Sie eine [Button](/docs/components/button) oder eine andere Komponente im Standardsteckplatz der Schublade.

Verwenden Sie dann den `#content`-Slot, um den Inhalt hinzuzufügen, der angezeigt wird, wenn die Schublade geöffnet ist.

::component-code
---
Schöner: wahr
Die Slots:
  Default:|

    @@@@006 @

  Inhalt:|

    @@@@007 @
---

: u-button {label="Open" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up"}

#Inhalte
: placeholder{class="h-48 m-4"}
::

Sie können auch die Slots `#header`{lang="ts-type"},`#body`{lang="ts-type"} und `#footer`{lang="ts-type"} verwenden, um den Inhalt der Schublade anzupassen.

@@@@@16@16@16@16@16@16@16@16@16@16@16@16@16@16@16@16

Verwenden Sie `title` prop, um den Titel des Schubladenkopfes festzulegen.

::component-code
---
Schöner: wahr
Props:
  title: "Schublade mit Titel"
Die Slots:
  Default:|

    @@ph018

  Der Körper:|

    @@ph019
---

: u-button {label="Open" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up"}

#Körper
: placeholder{class="h-48"}
::

@@ph022@@Beschreibung

Verwenden Sie `description` prop, um die Beschreibung des Headers der Schublade festzulegen.

::component-code
---
Schöner: wahr
Ignoriert:
  @@ph024@title
Props:
  Titel: 'Schublade mit Beschreibung'
  Die Inschrift lautet: "Lorem ipsum dolor sit amet, consectetur adipiscing elit".
Slots auf:
  Default:|

    @@@@@@@@@@@@@@@@@025 @

  Der Körper:|

    @@@@@@@@@@@@@@@@@026 @
---

: u-button {label="Open" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up"}

#Der Körper
: Platzhalter{class="h-48"}
::

### Close: badge{label="4.10+" class="align-text-top"} Schließen: badge{label="4.10+" class="align-text-top"}

Verwenden Sie `close` prop, um eine Schließen-Schaltfläche in der Schublade anzuzeigen. Defaults to `false`.

Sie können jede Eigenschaft aus der Komponente [Button](/docs/components/button) übergeben, um sie anzupassen.

::component-code
---
Schöner: wahr
Ignoriert:
  @@ph037@title
  - close.color
  @@ph039@close.variant (nicht verfügbar)
Props:
  Titel: "Schublade mit Schließknopf"
  schließen:
    Farbe: Primär
    Variante: Übersicht
    Klasse: 'rounded-full'
Slots auf:
  Default:|

    @@040

  Der Körper:|

    @@041
---

: u-button {label="Open" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up"}

#Der Körper
: placeholder{class="h-48"}
::

### Close Icon: badge{label="4.10+" class="align-text-top"}

Verwenden Sie die `close-icon` prop, um die Schließen-Taste anzupassen [Icon](/docs/components/icon). Standardmäßig auf `i-lucide-x`.

::component-code
---
Schöner: wahr
Ignoriert:
  @@ph052@title
Props:
  Titel: "Schublade mit Schließknopf"
  Schließen: true
  closeIcon: 'i-lucide-arrow-right'(I-lucide-arrow-rechts)
Slots auf:
  Default:|

    @@@@@@@53

  Der Körper:|

    @@@@@@54
---

: u-button {label="Open" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up"}

#Körper
: placeholder{class="h-48"}
::

### Richtung

Verwenden Sie `direction` prop, um die Richtung der Schublade zu steuern. Standardmäßig auf `bottom`.

::component-code
---
Schöner: wahr
Props:
  Richtung: "richtig"
Die Slots:
  Default:|

    @@@@@@@@060

  Inhalt:|

    @@061
---

: u-button {label="Open" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up"}

#Inhalte
: placeholder{class="min-w-96 min-h-96 size-full m-4"}
::

@@@@@@@@@@ph064@@inset

Verwenden Sie die `inset` prop, um die Schublade von den Kanten zu setzen.

::component-code
---
Schöner: wahr
Props:
  Richtung: "richtig"
  Einschub: true
Slots auf:
  Default:|

    @@@@@@@66 @

  Inhalt:|

    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@067
---

: u-button {label="Open" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up"}

#Inhalte
: placeholder{class="min-w-96 min-h-96 size-full m-4"}
::

@@ph070@@Bearbeiten

Verwenden Sie `handle` prop, um zu steuern, ob die Schublade einen Griff hat oder nicht.

::component-code
---
Schöner: wahr
Props:
  Ausführung: False
Slots auf:
  Default:|

    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@073

  Inhalt:|

    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
---

: u-button {label="Open" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up"}

#Inhalte
: placeholder{class="h-48 m-4"}
::

### Handle Nur

Verwenden Sie die `handle-only` prop, um nur zu erlauben, dass die Schublade am Griff gezogen wird.

::component-code
---
Schöner: wahr
Props:
  Handheld: wahr
Die Slots:
  Default:|

    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@079

  Inhalte:|

    @@@@80
---

: u-button {label="Open" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up"}

#Inhalte
: placeholder{class="h-48 m-4"}
::

@@ph083@@Überlappung

Verwenden Sie `overlay` prop, um zu steuern, ob die Schublade ein Overlay hat oder nicht.

::component-code
---
Schöner: wahr
Props:
  Überlagerung: false
Slots auf:
  Default:|

    @@@@@@@@@@@@@@@@@@@086

  Inhalt:|

    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@087
---

: u-button {label="Open" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up"}

#Inhalte
: placeholder{class="h-48 m-4"}
::

@@@@@@@@@@@ph090@@@modal

Verwenden Sie `modal` prop, um zu steuern, ob die Schublade die Interaktion mit externen Inhalten blockiert. Standardmäßig auf `true`.

::note
Wenn `modal` auf `false` gesetzt ist, wird das Overlay automatisch deaktiviert und externe Inhalte werden interaktiv.
::

::component-code
---
Schöner: wahr
Props:
  Ausführung: false
Slots auf:
  Default:|

    @@@@95 @

  Inhalt:|

    @@@@@@96
---

: u-button {label="Open" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up"}

#Inhalte
: placeholder{class="h-48 m-4"}
::

@@999@unzustellbar

Verwenden Sie die `dismissible` prop, um zu steuern, ob die Schublade deaktiviert werden kann, wenn Sie außerhalb der Schublade klicken oder escape drücken.

::note
Ein `close:prevent`-Ereignis wird ausgegeben, wenn der Benutzer versucht, es zu schließen.
::

::tip
Sie können `modal: false` mit `dismissible: false` kombinieren, um den Hintergrund der Schublade interaktiv zu gestalten, ohne ihn zu schließen.
::

::component-example
---
Schöner: wahr
Name: 'drawer-dismissible-example'(Zeichner-dismissible-Beispiel)
---
::

### Scale-Hintergrund

Verwenden Sie `should-scale-background` prop, um den Hintergrund bei geöffneter Schublade zu skalieren und einen visuellen Tiefeneffekt zu erzeugen. Sie können `set-background-color-on-scale` prop auf `false` einstellen, um eine Änderung der Hintergrundfarbe zu verhindern.

::component-code
---
Schöner: wahr
Props:
  Hintergrund: true
  setBackgroundColorOnScale: wahr
Die Slots:
  Default:|

    @@@@109 @

  Inhalt:|

    @@@@110 @
---

: u-button {label="Open" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up"}

#Inhalte
: placeholder{class="h-screen m-4"}
::

::warning
Stellen Sie sicher, dass Sie die `data-vaul-drawer-wrapper`-Direktive zu einem übergeordneten Element Ihrer App hinzufügen, damit dies funktioniert.

```vue [app.vue]
<template>
  <UApp>
    <div class="bg-default" data-vaul-drawer-wrapper>
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </div>
  </UApp>
</template>
```

```ts [nuxt.config.ts]
export default defineNuxtConfig({
  app: {
    rootAttrs: {
      'data-vaul-drawer-wrapper': '',
      'class': 'bg-default'
    }
  }
})
```

::

## Beispiele

### Control Offener Zustand

Sie können den offenen Zustand mithilfe der Direktive `default-open` prop oder der Direktive `v-model:open` steuern.

::component-example
---
Schöner: wahr
Name: 'drawer-open-example'(Zeichenöffnungs-Beispiel)
---
::

::note
In diesem Beispiel können Sie die Schublade mithilfe von [`defineShortcuts`]() umschalten, indem Sie: kbd{value="O"} drücken.
::

::tip
Auf diese Weise können Sie den Auslöser außerhalb der Schublade bewegen oder vollständig entfernen.
::

### Responsive Schublade

Sie können beispielsweise eine [Modal](/docs/components/modal) Komponente auf dem Desktop und eine Schublade auf dem Handy rendern.

::component-example
---
Schöner: wahr
Name: 'drawer-responsive-example'(drawer-responsive-beispiel)
---
::

### geschachtelte Schubladen

Sie können Schubladen miteinander verschachteln, indem Sie die `nested` prop.

::component-example
---
Schöner: wahr
Name: 'drawer-nested-example'(Zeiger-verschachtetes-Beispiel)
---
::

### Mit Fußzeilensteckplatz

Verwenden Sie den `#footer`-Steckplatz, um Inhalte nach dem Schubladenkörper hinzuzufügen.

::component-example
---
Schöner: wahr
Einsturz: wahr
name: 'drawer-footer-slot-example'(drawer-Fußzeile-Slot-Beispiel)
---
::

### Mit der Befehlspalette

Sie können eine [CommandPalette](/docs/components/command-palette) Komponente innerhalb des Inhalts der Schublade verwenden.

::component-example
---
Einsturz: wahr
Name: 'drawer-command-palette-example'(Zeiger-Befehl-Paletten-Beispiel)
---
::

::note
In diesem Beispiel wird `useLazyFetch` mit `immediate: false` verwendet, um Daten nur beim Öffnen der Schublade abzurufen.
::

@@161@btw

@@@@@@@@162@@Props

Komponenten Props

### Slots

Die Komponenten-Slots

@@@@@@@164@Emits

Komponenten emittieren

@@165@Einsteigertipps

Das Komponenten-Theme

## Changelog (Deutsche Übersetzung)

Das Component-Changelog
