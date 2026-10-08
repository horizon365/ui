---
description: Ein img-Element mit Fallback-und Nuxt-Image-Unterstützung.
category: element
keywords:
  - profile picture
  - user image
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Avatar.vue
---

@@@ph000@@Verwendung

Der Avatar verwendet die `<NuxtImg>` Komponente, wenn [`@nuxt/image`](https://github.com/nuxt/image) installiert ist, ansonsten fällt er auf `img` zurück.

::component-code
---
Ignoriert:
  @@008@@src
Props:
  src: 'https://github.com/benjamincanac.png'
---
::

::note
Sie können jede Eigenschaft aus dem HTML-Element `<img>` übergeben, z. B.`alt`,`loading`, usw.
::

::tip
Um sich von `@nuxt/image` abzumelden, verwenden Sie die `as` prop: `:as="{ img: 'img' }"`.
::

@@@@@@15@@src

Verwenden Sie `src` prop, um die Bild-URL festzulegen.

::component-code
---
Ignoriert:
  @@ph017@@Aufladen
Props:
  src: 'https://github.com/benjamincanac.png'
  Aufladung: Lazy
---
::

@@@@@@18@18

Verwenden Sie `size` prop, um die Größe des Avatars einzustellen.

::component-code
---
Ignoriert:
  @@ph020@@src
  @@ph021@@Aufladen
Props:
  src: 'https://github.com/benjamincanac.png'
  Größe: XL
  Aufladung: Lazy
---
::

::note
Die Elemente `<img>` und `height` werden automatisch basierend auf der `size` prop.
::

@@ph026@@@Icon-Seite

Verwenden Sie die `icon` prop, um einen Fallback anzuzeigen [Icon](/docs/components/icon).

::component-code
---
Props:
  Icon: 'I-Lucide-Bild'
  Größe: MD
---
::

@@ph032@@text @ Übersetzung

Verwenden Sie `text` prop, um einen Fallback-Text anzuzeigen.

::component-code
---
Props:
  Text: "+1"
  Größe: md
---
::

@@@@@34@34

Wenn kein Symbol oder Text angegeben ist, wird die **initials** der `alt` prop als Fallback verwendet.

::component-code
---
Props:
  Suche nach: Benjamin Canac
  Größe: md
---
::

::note
Das `alt` prop wird als `alt`-Attribut an das `img`-Element übergeben.
::

@@ph041@@@ph042@@@ph042@@@ph042@@@@@@ph042@@@@badge@@ph042@@@@badge@@ph042 @

Verwenden Sie die `color` prop, um die Farbe des Avatars zu ändern.

::component-code
---
Props:
  Farbe: Primary
  Suche nach: Benjamin Canac
---
::

@@ph044@chip@@@chip@@@chip@@chip@chip@chip@chip@chip@chip@chip@chip@chip@chip@chip@chip@chip@chip@chip@chip@chip@chip@chip@chip@chip@chip@chip@chip@chip@chip@chip@chip@chip@chip@chip@chip@chip@chip@chip@chip@chip@chip@chip@chip@chip@chip@chip@chip@chip@chip@chip@chip@chip@chip@chip@chip@chip@@chip@chip@@chip@chip@chip@@@chip@chip@@@chip@@@chip@chip@@chip@@chip@@@chip@chip@chip@@chip@chip@@chip@

Verwenden Sie die `chip` prop, um einen Chip um den Avatar herum anzuzeigen.

::component-code
---
Schöner: wahr
Ignoriert:
  @@046@src
  @@ph047@aufladen.de
  - chip.inset (nicht vorhanden)
Props:
  src: 'https://github.com/benjamincanac.png'
  Aufladung: Lazy
  Der CHIP:
    Einschub: true
---
::

@@ph049@@Beispiele

@@ph050@@mit tooltip

Sie können eine [Tooltip](/docs/components/tooltip) Komponente verwenden, um einen Tooltip anzuzeigen, wenn Sie den Avatar bewegen.

: component-beispiel {name="avatar-tooltip-example"}

### Mit Maske

Sie können eine CSS-Maske verwenden, um einen Avatar mit einer benutzerdefinierten Form anstelle eines einfachen Kreises anzuzeigen.

: component-beispiel {name="avatar-mask-example"}

@@@@@@58@@bmmwh

@@ph059@@gmail.de

Komponenten-Props

::callout{icon="i-simple-icons-mdnwebdocs" to="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#attributes" target="_blank"}
Diese Komponente unterstützt auch alle nativen `<img>` HTML-Attribute.
::

@@ph061@@theme@@theme@@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@@theme@theme@theme@theme@@theme@@theme@@@theme@theme@theme@theme@@@theme@theme@theme@@theme@theme@theme@theme

Das Komponenten-Theme

@@ph062@@changelog @@changelog

Das Component-Changelog
