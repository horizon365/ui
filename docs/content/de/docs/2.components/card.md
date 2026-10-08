---
description: Zeigen Sie Inhalte in einer Karte mit Kopf, Körper und Fußzeile an.
category: element
keywords:
  - panel
  - box
  - container
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Card.vue
---

@@@ph000@Verwendung

Verwenden Sie die `header`,`default` und `footer` Slots, um Inhalte auf die Karte hinzuzufügen.

::component-code
---
Schöner: wahr
Hide:
  @@004@Klasse
Props:
  Klasse: "W-voll"
Die Slots:
  Der Header:|

    @@@@005

  Default:|

    @@@@006 @

  Fußzeile:|

    @@@@007 @
---

Der Header
: placeholder{class="h-8"}

#DefaultBearbeiten
: placeholder{class="h-32"}

#Footer hinzufügen
: placeholder{class="h-8"}
::

### Titel: badge{label="4.7+" class="align-text-top"}

Verwenden Sie `title` prop, um den Titel des Kartenkopfes festzulegen.

::component-code
---
Schöner: wahr
Ignoriert:
  @@14@Klasse
Props:
  Titel: "Karte mit Titel"
  Klasse: "W-voll"
Die Slots:
  Default:|

    @@015
---

#DefaultBearbeiten
: placeholder{class="h-32"}
::

### Beschreibung: badge{label="4.7+" class="align-text-top"}

Verwenden Sie `description` prop, um die Beschreibung des Kartenkopfes festzulegen.

::component-code
---
Schöner: wahr
Ignoriert:
  @@ph020@@title
  @@ph021@class
Props:
  Titel: "Karte mit Beschreibung"
  Die Inschrift lautet: "Lorem ipsum dolor sit amet, consectetur adipiscing elit".
  Klasse: "W-voll"
Slots auf:
  Default:|

    @@ph022
---

#DefaultBearbeiten
: placeholder{class="h-32"}
::

@@ph024@@Variantentyp

Verwenden Sie `variant` prop, um die Variante der Karte zu ändern.

::component-code
---
Schöner: wahr
Hide:
  @@ph026@@gmail.de
Props:
  Variante: subtil
  Klasse: "W-voll"
Slots auf:
  Der Header:|

    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@027

  Default:|

    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@028

  Fußzeile:|

    @@@@@@@@@@@029
---

#Header hinzufügen
: placeholder{class="h-8"}

#DefaultBearbeiten
: placeholder{class="h-32"}

#Fußzeile
: placeholder{class="h-8"}
::

@@333@bpb

@@ph034@@gmail.de

Komponenten Props

@@ph035@gmail.de

Die Komponenten-Slots

@@ph036@gmail.de

Das Komponenten-Theme

@@ph037@changelog @ changelog

Das Component-Changelog
