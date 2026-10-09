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

## Bearbeiten

### Name Bearbeiten

Verwenden Sie die `name`-Prop, um einen Namen für den Benutzer anzuzeigen.

::component-code
---
props:
  name: 'John Doe'
---
::

xph007 Beschreibung

Verwenden Sie die `description`-Prop, um eine Beschreibung für den Benutzer anzuzeigen.

::component-code
---
props:
  name: 'John Doe'
  description: 'Software Engineer'
---
::

### Avatar Bearbeiten

Verwenden Sie die `avatar`-Prop, um eine [Avatar](/docs/components/avatar)-Komponente anzuzeigen.

::component-code
---
prettier: true
ignore:
  - name
  - description
props:
  name: 'John Doe'
  description: 'Software Engineer'
  avatar:
    src: 'https://i.pravatar.cc/150?u=john-doe'
    loading: lazy
    icon: i-lucide-image
---
::

::collapsible{name="all avatar properties"}

::component-props
---
name: Avatar
ignore:
  - size
  - as
---
::

::

### Chip ist ein

Verwenden Sie die `chip`-Prop, um eine [Chip](/docs/components/chip)-Komponente anzuzeigen.

::component-code
---
prettier: true
ignore:
  - name
  - description
  - avatar.src
items:
  chip.color:
    - primary
    - secondary
    - success
    - info
    - warning
    - error
    - neutral
  chip.position:
    - top-left
    - top-right
    - bottom-left
    - bottom-right
props:
  name: 'John Doe'
  description: 'Software Engineer'
  avatar.src: 'https://i.pravatar.cc/150?u=john-doe'
  chip:
    color: 'primary'
    position: top-right
---
::

::collapsible{name="all chip properties"}

::component-props
---
name: Chip
ignore:
  - as
  - size
  - standalone
---
::

::

### Size

Verwenden Sie die `size`-Prop, um die Größe des Benutzer-Avatars und des Texts zu ändern.

::component-code
---
prettier: true
ignore:
  - name
  - description
  - avatar.src
  - chip
props:
  name: 'John Doe'
  description: 'Software Engineer'
  avatar.src: 'https://i.pravatar.cc/150?u=john-doe'
  chip: true
  size: xl
---
::

### Orientierung

Verwenden Sie die `orientation`-prop, um die Ausrichtung zu ändern. Standardmäßig `horizontal`.

::component-code
---
prettier: true
ignore:
  - avatar.src
props:
  orientation: 'vertical'
  name: 'John Doe'
  description: 'Software Engineer'
  avatar.src: 'https://i.pravatar.cc/150?u=john-doe'
---
::

### Link ist

Sie können jede Eigenschaft der Komponente [`<NuxtLink>`](https://nuxt.com/docs/api/components/nuxt-link) übergeben, z. B. `to`, `target`, `rel` usw.

::component-code
---
prettier: true
ignore:
  - name
  - description
  - avatar.src
  - target
props:
  to: 'https://github.com/benjamincanac'
  target: '_blank'
  name: 'Benjamin Canac'
  description: 'Software Engineer'
  avatar.src: 'https://github.com/benjamincanac.png'
---
::

::note
Die `NuxtLink`-Komponente erbt alle anderen Attribute, die Sie an die `User`-Komponente übergeben.
::

## API (englisch)

### Props Bearbeiten

:component-props

### Slots Bearbeiten

:component-slots

## Theme Bearbeiten

:component-theme

## Changelog (englisch)

:component-changelog
