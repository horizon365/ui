---
description: Ein zusammenklappbares Element, um die Sichtbarkeit seines Inhalts zu ändern.
category: element
keywords:
  - disclosure
  - expand
links:
  - label: Kollapsfähig
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/collapsible
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Collapsible.vue
---

@@@ph000@@Verwendung

Verwenden Sie eine [Button](/docs/components/button) oder eine andere Komponente im Standard-Steckplatz des Collapsible.

Verwenden Sie dann den `#content`-Steckplatz, um den Inhalt hinzuzufügen, der angezeigt wird, wenn das Kollapsible geöffnet ist.

::component-code
---
Schöner: wahr
Ignoriert:
  @@006@Klasse
Props:
  Flex-col-Lücke-2 w-48
Die Slots:
  Default:|

    @@@@007 @

  Inhalt:|

    @@008
---

: u-button {label="Open" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-down" block}

#Inhalte
: Platzhalter{class="h-48"}
::

@@ph011@@unmount

Verwenden Sie `unmount-on-hide` prop, um zu verhindern, dass der Inhalt beim Zusammenklappen des Collapsible entfernt wird. Standardmäßig auf `true`.

::component-code
---
Schöner: wahr
Ignoriert:
  @@14@Klasse
Props:
  unmountOnHide: falsch
  Flex-col-Lücke-2 w-48
Slots auf:
  Default:|

    @@015

  Inhalt:|

    @@ph016
---

: u-button {label="Open" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-down" block}

#Inhalte
: placeholder{class="h-48"}
::

::note
Sie können das DOM inspizieren, um zu sehen, wie der Inhalt gerendert wird.
::

@@ph019@disabled @ disabled

Verwenden Sie `disabled` prop, um das Collapsible zu deaktivieren.

::component-code
---
Schöner: wahr
Ignoriert:
  @@ph021@class
Props:
  Flex-col-Lücke-2 w-48
  Behindert: Wahr
Slots auf:
  Default:|

    @@ph022

  Inhalt:|

    @@ph023
---

: u-button {label="Open" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-down" block}

#Inhalte
: placeholder{class="h-48"}
::

## Beispiele

### Control offener Zustand

Sie können den offenen Zustand mit der `default-open` prop oder der `v-model:open` Direktive steuern.

::component-example
---
Bezeichnung: "collapsible-open-example"
---
::

::note
In diesem Beispiel können Sie unter Verwendung von [`defineShortcuts`]() das Kollapsible durch Drücken von: kbd{value="O"} umschalten.
::

::tip
Auf diese Weise können Sie den Auslöser außerhalb des Kollapsiblen verschieben oder vollständig entfernen.
::

### Mit rotierendem Icon

Hier ist ein Beispiel mit einem rotierenden Symbol im Button, das den offenen Zustand des Collapsible anzeigt.

::component-example
---
Name: 'collapsible-icon-example'(zusammenklappbares Icon-Beispiel)
---
::

@@@@@@b37@b37

@@@@@@@@@@@@ph038@@props

Komponenten-Props

@@ph039@gmail.de

Die Komponenten-Slots

@@ph040@@@emits

Komponenten emittieren

@@ph041@@gmail.de

Das Komponenten-Theme

@@ph042@@changelog @ changelog

Das Component-Changelog
