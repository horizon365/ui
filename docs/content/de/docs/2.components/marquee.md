---
description: 'Eine Komponente, um unendlich scrollenden Inhalt zu erstellen.'
category: data
keywords:
  - ticker
  - scroller
  - carousel
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Marquee.vue
---

@@@ph000@@Verwendung

Verwenden Sie den Standard-Slot mit Ihren Inhalten, um eine unendliche Scroll-Animation zu erstellen.

::component-code
---
Schöner: wahr
Slots auf:
  Default:|

    @@001
    @@ph002
    @@003
    @@@@004
    @@@@005
    @@@@006 @
---
: u-icon {name="i-simple-icons-github" class="size-10 shrink-0"}
: u-icon {name="i-simple-icons-discord" class="size-10 shrink-0"}
: u-icon {name="i-simple-icons-x" class="size-10 shrink-0"}
: u-icon {name="i-simple-icons-instagram" class="size-10 shrink-0"}
: u-icon {name="i-simple-icons-linkedin" class="size-10 shrink-0"}
: u-icon {name="i-simple-icons-facebook" class="size-10 shrink-0"}
::

::tip
Die Animation wird automatisch deaktiviert, wenn der Benutzer reduzierte Bewegung bevorzugt, der Inhalt wird stattdessen statisch angezeigt.
::

### Pause auf Hover

Verwenden Sie `pause-on-hover` prop, um die Animation anzuhalten, wenn der Benutzer mit der Maus über den Inhalt fährt.

::component-code
---
Schöner: wahr
Props:
  PauseOnHover: wahr
Die Slots:
  Default:|

    @@015
    @@ph016
    @@ph017
    @@ph018
    @@ph019
    @@ph020 von mir
---
: u-icon {name="i-simple-icons-github" class="size-10 shrink-0"}
: u-icon {name="i-simple-icons-discord" class="size-10 shrink-0"}
: u-icon {name="i-simple-icons-x" class="size-10 shrink-0"}
: u-icon {name="i-simple-icons-instagram" class="size-10 shrink-0"}
: u-icon {name="i-simple-icons-linkedin" class="size-10 shrink-0"}
: u-icon {name="i-simple-icons-facebook" class="size-10 shrink-0"}
::

@@ph027@umgekehrter

Verwenden Sie die `reverse` prop, um die Richtung der Animation umzukehren.

::component-code
---
Schöner: wahr
Props:
  umgekehrt: wahr
Die Slots:
  Default:|

    @@@@@@@@@@@029
    @030
    @031
    @@@@@@@@@@@@032
    @033
    @@@@@@@@034
---
: u-icon {name="i-simple-icons-github" class="size-10 shrink-0"}
: u-icon {name="i-simple-icons-discord" class="size-10 shrink-0"}
: u-icon {name="i-simple-icons-x" class="size-10 shrink-0"}
: u-icon {name="i-simple-icons-instagram" class="size-10 shrink-0"}
: u-icon {name="i-simple-icons-linkedin" class="size-10 shrink-0"}
: u-icon {name="i-simple-icons-facebook" class="size-10 shrink-0"}
::

@@ph041@@Orientierung

Verwenden Sie die `orientation` prop, um die Scrollrichtung zu ändern.

::component-code
---
Schöner: wahr
Klasse: H-96
Props:
  Ausrichtung: "vertikal"
Slots auf:
  Default:|

    @@043
    @@@@@@@@044
    @045
    @@@@@@@@046
    @@@@@@@@@@@@@@047 @
    @@048
---
: u-icon {name="i-simple-icons-github" class="size-10 shrink-0"}
: u-icon {name="i-simple-icons-discord" class="size-10 shrink-0"}
: u-icon {name="i-simple-icons-x" class="size-10 shrink-0"}
: u-icon {name="i-simple-icons-instagram" class="size-10 shrink-0"}
: u-icon {name="i-simple-icons-linkedin" class="size-10 shrink-0"}
: u-icon {name="i-simple-icons-facebook" class="size-10 shrink-0"}
::

@@@@@555@Wiederholung

Verwenden Sie `repeat` prop, um festzulegen, wie oft der Inhalt in der Animation wiederholt werden soll.

::component-code
---
Schöner: wahr
Props:
  Wiederholung: 6
Die Slots:
  Default:|

    @@@@@@57
    @@@@@@@58
    @@@@59 @
    @@@@@@@@060
    @@061
    @@@@@@@@@@@@062
---
: u-icon {name="i-simple-icons-github" class="size-10 shrink-0"}
: u-icon {name="i-simple-icons-discord" class="size-10 shrink-0"}
: u-icon {name="i-simple-icons-x" class="size-10 shrink-0"}
: u-icon {name="i-simple-icons-instagram" class="size-10 shrink-0"}
: u-icon {name="i-simple-icons-linkedin" class="size-10 shrink-0"}
: u-icon {name="i-simple-icons-facebook" class="size-10 shrink-0"}
::

### Überlappung

Verwenden Sie `overlay` prop, um die Farbverlaufsüberlagerungen an den Rändern des Festzeltes zu entfernen.

::component-code
---
Schöner: wahr
Props:
  Überlagerung: false
Slots auf:
  Default:|

    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@073
    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@075
    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@076 @
---
: u-icon {name="i-simple-icons-github" class="size-10 shrink-0"}
: u-icon {name="i-simple-icons-discord" class="size-10 shrink-0"}
: u-icon {name="i-simple-icons-x" class="size-10 shrink-0"}
: u-icon {name="i-simple-icons-instagram" class="size-10 shrink-0"}
: u-icon {name="i-simple-icons-linkedin" class="size-10 shrink-0"}
: u-icon {name="i-simple-icons-facebook" class="size-10 shrink-0"}
::

@@ph083@@Beispiele

@@@@@@@@@@@@testimonials

Verwenden Sie die `Marquee`-Komponente, um eine unendliche Scroll-Animation für Ihre Testimonials zu erstellen.

::component-example{label="Mit Items"}
---
Schöner: wahr
Name: "Markus-Zeugnis"
Einsturz: wahr
Übertreibungen: wahr
Klasse: px-0
---
::

@@ph087@screenshots

Verwenden Sie die `Marquee`-Komponente, um eine unendliche Scroll-Animation für Ihre Screenshots zu erstellen.

::component-example{label="mit Screenshots"}
---
Schöner: wahr
Bezeichnung: 'marquee-screenshots'
Einsturz: wahr
Übertreibungen: wahr
Klasse: '! p-0'
---
::

@@900@bpb

@@ph091@@@props

Komponenten-Props

@@ph092@@slots

Die Komponenten-Slots

@@ph093@gmail.de

Das Komponenten-Theme

@@ph094@@changelog @@changelog

Das Component-Changelog
