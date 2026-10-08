---
title: Die AvatarGroup
description: Mehrere Avatare in einer Gruppe.
category: element
keywords:
  - stacked avatars
  - faces
  - members
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/AvatarGroup.vue
---

@@@ph000@@Verwendung

Wickeln Sie mehrere [Avatar](/docs/components/avatar) innerhalb einer AvatarGroup ein, um sie zu stapeln.

::component-code
---
Schöner: wahr
Die Slots:
  Default:|

    @@@@005
    @@@@006 @
    @@@@007 @
---
: u-avatar {src="https://github.com/benjamincanac.png" alt="Benjamin Canac"}
: u-avatar {src="https://github.com/HugoRCD.png" alt="Hugo Richard"}
: u-avatar {src="https://github.com/atinux.png" alt="Sébastien Chopin"}
::

@@11@11@11.11.11

Verwenden Sie die `size` prop, um die Größe aller Avatare zu ändern.

::component-code
---
Schöner: wahr
Props:
  Größe: XL
Die Slots:
  Default:|

    @@ph013 @
    @@ph013 @
    @@015
---
: u-avatar {src="https://github.com/benjamincanac.png" alt="Benjamin Canac" loading="lazy"}
: u-avatar {src="https://github.com/HugoRCD.png" alt="Hugo Richard" loading="lazy"}
: u-avatar {src="https://github.com/atinux.png" alt="Sébastien Chopin" loading="lazy"}
::

@@@@19@Max

Verwenden Sie die `max` prop, um die Anzahl der angezeigten Avatare zu begrenzen.

::component-code
---
Schöner: wahr
Props:
  max: zwei
Slots auf:
  Default:|

    @@ph022
    @@ph023
    @@ph024
---
: u-avatar {src="https://github.com/benjamincanac.png" alt="Benjamin Canac" loading="lazy"}
: u-avatar {src="https://github.com/HugoRCD.png" alt="Hugo Richard" loading="lazy"}
: u-avatar {src="https://github.com/atinux.png" alt="Sébastien Chopin" loading="lazy"}
::

### Color: badge{label="4.8+" class="align-text-top"}

Verwenden Sie die `color` prop, um die Farbe aller Avatare zu ändern.

::component-code
---
Schöner: wahr
Props:
  Farbe: Primary
Slots auf:
  Default:|

    @031
    @@@@@@@@@@@@@@032
    @033
---
: u-avatar {alt="Benjamin Canac"}
: u-avatar {alt="Hugo Richard"}
: u-avatar {alt="Sébastien Chopin"}
::

@@ph037@@Beispiele

### Mit Tooltip

Wickeln Sie jeden Avatar mit einem [Tooltip](/docs/components/tooltip), um einen Tooltip beim Hover anzuzeigen.

: component-example {name="avatar-group-tooltip-example"}

### Mit Chip

Wickeln Sie jeden Avatar mit einem [Chip](/docs/components/chip) um einen Chip um den Avatar herum anzuzeigen.

: component-beispiel {name="avatar-group-chip-example"}

@@ph050@@mit Link

Wickeln Sie jeden Avatar mit einem [Link](/docs/components/link), um sie anklickbar zu machen.

: component-beispiel {name="avatar-group-link-example"}

### Mit Maske

Wickeln Sie einen Avatar mit einer CSS-Maske ein, um ihn mit einer benutzerdefinierten Form anzuzeigen.

: component-beispiel {name="avatar-group-mask-example"}

::warning
Die `chip` prop funktioniert nicht korrekt, wenn Sie eine Maske verwenden.
::

@@5999@bmg-ng-ng.de

@@ph060@@@props

Komponenten Props

### Slots

Die Komponenten-Slots

@@ph062@@theme@@theme@@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@@theme@theme@theme@theme@@theme@theme@theme@theme@theme@theme@theme@theme@the

Das Komponenten-Theme

@@ph063@@changelog @@changelog

Das Component-Changelog
