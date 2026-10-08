---
description: 'Benutzerinformationen mit Name, Beschreibung und Avatar anzeigen.'
category: data
keywords:
  - profile
  - person
  - account
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/User.vue
---

@@@ph000@Verwendung

@@ph001@@names

Verwenden Sie `name` prop, um einen Namen für den Benutzer anzuzeigen.

::component-code
---
Props:
  Der Name: John Doe
---
::

@@ph003 @ Beschreibung

Verwenden Sie `description` prop, um eine Beschreibung für den Benutzer anzuzeigen.

::component-code
---
Props:
  Der Name: John Doe
  Beschreibung: "Software Engineer"
---
::

@@@@@@@avatar@@avatar@@@avatar@@@avatar@@avatar@@avatar@avatar@avatar@avatar@avatar@avatar@avatar@avatar@avatar@avatar@avatar@avatar@avatar@avatar@avatar@avataratar@avataratar@avataratar@avataratar@avataratar@avataratar@avataratar@avatar@avataratar@avataratar@avataratar@avataratar@avatar@avataratar@avatar@avataratar@@@@avataratarataratarataratarataratar@@@avatarataratarataram@@@avataramataram@@avataramataramataramataramataramataramatar

Verwenden Sie die `avatar` prop, um eine [Avatar](/docs/components/avatar) Komponente anzuzeigen.

::component-code
---
Schöner: wahr
Ignoriert:
  @@ph011@@names
  @@ph012@beschreibung
Props:
  Der Name: John Doe
  Beschreibung: "Software Engineer"
  Avatare sind:
    src: 'https://i.pravatar.cc/150?u=john-doe'(auf Englisch)
    Aufladung: Lazy
    Icon: i-lucide-Bild
---
::

::collapsible{name="all avatar properties"}

::component-props
---
Bezeichnung: Avatar
Ignoriert:
  @@ph013@Größe
  @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@##############################################################################################################################################
---
::

::

@@ph015@chip@@@chip@@chip@@chip@@chip@chip@chip@chip@chip@chip@chip@chip@chip@chip@chip@chip@chip@chip@chip@chip@chip@chip@chip@chip@chip@chip@chip@chip@chip@chip@chip@chip@chip@chip@chip@chip@chip@chip@chip@chip@chip@chip@chip@chip@chip@chip@chip@chip@chip@chip@chip@chip@chip@chip@chip@chip@@chip@chip@chip@@chip@@chip@@chip@chip@@chip@chip@chip@chip@chip@chip@chip@chip@chip@chip@chip@chip@chip@chip@chip

Verwenden Sie die `chip` prop, um eine [Chip](/docs/components/chip) Komponente anzuzeigen.

::component-code
---
Schöner: wahr
Ignoriert:
  @@ph021@@names
  @@ph022@beschreibung
  - avatar.src
Items:
  chip.color:
    - vorallem
    @@ph025@zweitrangig
    @@ph026@@Erfolg
    @@@@@@info@@@info@@info@@info@info@info@info@info@info@info@info@info@info@info@info@info@info@info@info@info@info@info@info@info@info@info@info@info@info@info@info@info@info@info@info@info@info@info@info@info@info@info@info@@info@info@info@info@info@info@info@info@@@info@info@@info@info@@info@info@@@info@@@info@info@info@info@info@info@info@info@info@info@info@info@info@info@info@info@info@info@info@
    @@ph028@@warning
    @@ph029@Fehler
    @@ph030@neutral
  chip.position:
    @@ b31 @ b31
    @@@ ph032 @@ oben rechts
    @@ bottom-left @ bottom-left @ bottom-left-left-left-left-left-left-left-left-left-left-left @ bottom-left-left-left-left-left-left-left-left-lefth-left-
    @@ bottom-right @@ bottom-right @ bottom-right @@ bottom-right @ bottom-right @ bottom-rechts
Props:
  Der Name: John Doe
  Beschreibung: "Software Engineer"
  avatar. src: 'https://i.pravatar.cc/150?u=john-doe'(englisch)
  Der CHIP:
    Farbe: "Primär"
    Position: oben rechts
---
::

::collapsible{name="all chip properties"}

::component-props
---
Bezeichnung: Chip
Ignoriert:
  @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@#####################################################################################################################################
  @@ph036 @ Größe
  @@ph037@stylon.de
---
::

::

@@@@@@38@38

Verwenden Sie `size` prop, um die Größe des Benutzeravatars und des Texts zu ändern.

::component-code
---
Schöner: wahr
Ignoriert:
  @@ph040@names @ names @ nr
  @@ph041@beschreibung
  - avatar.src
  @@ph043@chip@@@chip@@@chip@@chip@chip@chip@chip@chip@chip@chip@chip@chip@chip@chip@chip@chip@chip@chip@chip@chip@chip@chip@chip@chip@chip@chip@chip@chip@chip@chip@chip@chip@chip@chip@chip@chip@chip@chip@chip@chip@chip@chip@chip@chip@chip@chip@chip@chip@chip@chip@@chip@@chip@@chip@chip@@@chip@chip@@@@chip@chip@@chip@@chip@@@@chip@@@chip@@chip@@@chip@@@chip@@@chip@chip@@@chip@chip@@@@@chip@
Props:
  Der Name: John Doe
  Beschreibung: "Software Engineer"
  avatar. src: 'https://i.pravatar.cc/150?u=john-doe'(englisch)
  Chip: echt
  Größe: XL
---
::

@@ph044@Orientierung

Verwenden Sie `orientation` prop, um die Ausrichtung zu ändern. Standardmäßig ist `horizontal`.

::component-code
---
Schöner: wahr
Ignoriert:
  - avatar.src
Props:
  Ausrichtung: "vertikal"
  Der Name: John Doe
  Beschreibung: "Software Engineer"
  avatar. src: 'https://i.pravatar.cc/150?u=john-doe'(englisch)
---
::

@@@@@@@48@Link

Sie können jede Eigenschaft von der [`<NuxtLink>`](https://nuxt.com/docs/api/components/nuxt-link) Komponente wie `to`,`target`,`rel`, etc. übergeben.

::component-code
---
Schöner: wahr
Ignoriert:
  @@ph057@nomega
  @@ph058@beschreibung
  - avatar.src
  @@ph060@@zielgruppe
Props:
  zu: 'https://github.com/benjamincanac'
  Ziel: _blank
  Der Name: Benjamin Canac
  Beschreibung: "Software Engineer"
  avatar. src: 'https://github.com/benjamincanac.png'(englisch)
---
::

::note
Die Komponente `NuxtLink` erbt alle anderen Attribute, die Sie an die Komponente `User` übergeben.
::

## api

@@@ph064@@Props

Komponenten Props

### Slots

Die Komponenten-Slots

## Thema

Das Komponenten-Theme

@@ph067@@changelog @@changelog

Das Component-Changelog
