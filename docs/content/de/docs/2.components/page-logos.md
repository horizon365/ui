---
title: PageLogos
description: 'Eine Liste von Logos oder Bildern, die auf Ihren Seiten angezeigt werden sollen.'
category: page
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/PageLogos.vue
---

@@@ph000@@Verwendung

Die PageLogos Komponente bietet eine flexible Möglichkeit, eine Liste von Logos oder Bildern auf Ihren Seiten anzuzeigen.

::component-code
---
Einsturz: wahr
Schöner: wahr
Hide:
  @@001@Klasse
Ignoriert:
  @@ph002@@gmail.de
Props:
  Items:
    -  i-simple-icons-github (auf Englisch)
    -  i-simple-icons-discord @ i-simple-icons-discord -  i-simple-icons-discord
    -  i-simple-icons-x (Deutsche Übersetzung)
    -  i-simple-icons-instagram (auf Englisch)
    -  i-simple-icons-linkedin (auf Englisch)
    -  i-simple-icons-facebook
  Klasse: 'MB-10'
---
::

@@ph009@title

Verwenden Sie die `title` prop, um den Titel über den Logos zu setzen.

::component-code
---
Schöner: wahr
Ignoriert:
  @@ph011@@gmail.de
Hide:
  @@12@Klasse
Props:
  title: 'Vertraut von den besten Frontend-Teams'
  Items:
    -  i-simple-icons-github (auf Englisch)
    -  i-simple-icons-discord @@ i-simple-icons-discord @@ i-simple-icons-discord -  i-simple-icons-discord
    -  i-simple-icons-x (auf Englisch)
    -  i-simple-icons-instagram (auf Englisch)
    -  i-simple-icons-linkedin (englisch)
    -  i-simple-icons-facebook
  Klasse: 'Mein-10'
---
::

@@ph019@gmail.de

Sie können Logos auf zwei Arten darstellen:

1. `items` prop, um eine Liste von logos. Each Element kann entweder:
  - Ein Icon-Name (z.B.`i-simple-icons-github`)
  - Ein Objekt, das `src` und `alt` Eigenschaften für Bilder enthält, die in einer `UAvatar` Komponente verwendet werden.
2. Verwenden des Standard-Steckplatzes, um die vollständige Kontrolle über den Inhalt zu haben

::tabs{class="gap-0"}

::component-example{label="mit Items"}
---
Bezeichnung: page-logos-with-items
Klasse: '[&> div]: mein-10'
---
::

::component-example{label="mit Slot"}
---
Bezeichnung: page-logos-with-slot
class: '[&> div]: mein-10'
---
::

::

@@ph031@@marquee

Verwenden Sie `marquee` prop, um einen Festzelteffekt für die Logos zu aktivieren.

::component-code
---
Schöner: wahr
Ignoriert:
  @@ph033@gmail.de
  @@ph034@marquee
Hide:
  @@35@Klasse
Props:
  title: 'Vertraut von den besten Frontend-Teams'
  Markiert: true
  Items:
    -  i-simple-icons-github (auf Englisch)
    -  i-simple-icons-discord (auf Englisch)
    -  i-simple-icons-x (Deutsche Ausgabe)
    -  i-simple-icons-instagram (auf Englisch)
    -  i-simple-icons-linkedin (englisch)
    -  i-simple-icons-facebook
  Klasse: 'Mein-10'
---
::

::note{to="/docs/components/marquee"}
Wenn Sie den `marquee`-Modus verwenden, können Sie sein Verhalten anpassen, indem Sie Requisiten übergeben. Weitere Informationen finden Sie in der Komponente `Marquee`.
::

@@044@bpgbvbvbvbvbvbvbvbvbvbvbvbvbvbvbvbvbvbvbvbvbvbvbvbvbvbvbvbvbvbvbvbvbvbvbvbvbvbvbvbvbvbvbvbvbvbvbvbvbvbvbvbvbvbvbvbvbvbvbvbvbvbvbvbvbvbvbvbvbvbvbvbvbvbvbvbvbvbvbvbvbvbvbvbvbvbvbvbvbvbvbvbvbvbvbvbvbvbvbvbvbvbvbvbvbvbvbvbvbvbvbvbvbvbvbvbvbvbvbvbvb

@@ph045@@gmail.de

Komponenten-Props

### Slots

Die Komponenten-Slots

@@ph047@@gmail.de

Das Komponenten-Theme

@@ph048@@changelog

Das Component-Changelog
