---
title: PageLogos
description: 'Eine Liste von Logos oder Bildern, die auf Ihren Seiten angezeigt werden sollen.'
category: page
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/PageLogos.vue
---

## Bearbeiten

Die PageLogos Komponente bietet eine flexible Möglichkeit, eine Liste von Logos oder Bildern auf Ihren Seiten anzuzeigen.

::component-code
---
collapse: true
prettier: true
hide:
  - class
ignore:
  - items
props:
  items:
    - i-simple-icons-github
    - i-simple-icons-discord
    - i-simple-icons-x
    - i-simple-icons-instagram
    - i-simple-icons-linkedin
    - i-simple-icons-facebook
  class: 'mb-10'
---
::

### Titel

Verwenden Sie die `title`-Stütze, um den Titel über den Logos zu setzen.

::component-code
---
prettier: true
ignore:
  - items
hide:
  - class
props:
  title: 'Trusted by the best front-end teams'
  items:
    - i-simple-icons-github
    - i-simple-icons-discord
    - i-simple-icons-x
    - i-simple-icons-instagram
    - i-simple-icons-linkedin
    - i-simple-icons-facebook
  class: 'my-10'
---
::

### Einträge

Sie können Logos auf zwei Arten anzeigen:

1. Verwenden Sie die `items`-Prop, um eine Liste von Logos bereitzustellen. Jedes Element kann entweder:
  - Ein Icon-Name (z. B. `i-simple-icons-github`)
  - Ein Objekt mit den Eigenschaften `src` und `alt` für Bilder, das in einer `UAvatar`-Komponente verwendet wird.
2. Verwenden des Standard-Steckplatzes, um vollständige Kontrolle über den Inhalt zu haben

::tabs{class="gap-0"}

::component-example{label="mit Items"}
---
name: 'page-logos-with-items'
class: '[&>div]:my-10'
---
::

::component-example{label="mit Slot"}
---
name: 'page-logos-with-slot'
class: '[&>div]:my-10'
---
::

::

### Marquee (nicht)

Verwenden Sie die `marquee`-Stütze, um einen Markierungseffekt für die Logos zu aktivieren.

::component-code
---
prettier: true
ignore:
  - items
  - marquee
hide:
  - class
props:
  title: 'Trusted by the best front-end teams'
  marquee: true
  items:
    - i-simple-icons-github
    - i-simple-icons-discord
    - i-simple-icons-x
    - i-simple-icons-instagram
    - i-simple-icons-linkedin
    - i-simple-icons-facebook
  class: 'my-10'
---
::

::note{to="/docs/components/marquee"}
Wenn Sie den `marquee`-Modus verwenden, können Sie sein Verhalten anpassen, indem Sie Requisiten übergeben. Weitere Informationen finden Sie in der `Marquee`-Komponente.
::

## API Bearbeiten

### Props Bearbeiten

:component-props

### Slots Bearbeiten

:component-slots

## Theme Bearbeiten

:component-theme

## Changelog Übersetzung

:component-changelog
