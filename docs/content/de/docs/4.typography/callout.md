---
title: Prosecalout Bearbeiten
description: 'Heben Sie wichtige Informationen mit auffälligen farbigen Boxen und Icons hervor.'
category: components
navigation.title: Callout
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/prose/Callout.vue
---

## Bearbeiten

Verwenden Sie Markdown im Standard-Slot der `callout`-Komponente, um Ihren Inhalten einen auffälligen Kontext hinzuzufügen.

::component-code{slug="callout" prose}
---
props:
  class: 'w-full my-0'
hide:
  - class
slots:
  default: This is a `callout` with full **markdown** support.
---
::

### Icon (nicht)

Verwenden Sie die `icon`-Prop, um ein Symbol neben dem Inhalt anzuzeigen.

::component-code{slug="callout" prose}
---
props:
  icon: i-lucide-square-play
  class: 'w-full my-0'
hide:
  - class
slots:
  default: This is a `callout` with an icon.
---
::

### Color (englisch)

Verwenden Sie die `color`-Prop, um die Farbe des Callouts zu ändern.

::component-code{slug="callout" prose}
---
ignore:
  - icon
props:
  icon: i-lucide-info
  color: info
  class: 'w-full my-0'
hide:
  - class
slots:
  default: This is a `callout` with a custom color.
---
::

### Link Bearbeiten

Sie können jede Eigenschaft der Komponente [`<NuxtLink>`](https://nuxt.com/docs/api/components/nuxt-link) übergeben, z. B. `to` und `target`, um die Beschriftung zu einem Link zu machen.

::component-code{slug="callout" prose}
---
hide:
  - class
ignore:
  - icon
  - target
props:
  icon: i-lucide-square-play
  to: '/docs/getting-started/installation/nuxt'
  color: neutral
  class: 'w-full my-0'
slots:
  default: Learn how to install `@nuxt/ui` in your project.
---
::

## Kurzfassungen

Sie können auch die `note`, `tip`, `warning` und `caution` Verknüpfungen mit vordefinierten Symbolen und Farben verwenden.

::code-preview

:::div{class="flex flex-col gap-4 w-full"}

::note{class="w-full my-0"}
Hier einige zusätzliche Informationen für Sie.
::

::tip{class="w-full my-0"}
Hier ein hilfreicher Vorschlag.
::

::warning{class="w-full my-0"}
Seien Sie vorsichtig mit dieser Aktion, da dies zu unerwarteten Ergebnissen führen kann.
::

::caution{class="w-full my-0"}
Diese Aktion kann nicht rückgängig gemacht werden.
::

:::

#code

```mdc
::note
Here's some additional information.
::

::tip
Here's a helpful suggestion.
::

::warning
Be careful with this action as it might have unexpected results.
::

::caution
This action cannot be undone.
::
```

::

## API (Englisch)

### Props (englisch)

:component-props{prose}

### Slots Bearbeiten

:component-slots{prose}

## Theme Bearbeiten

:component-theme{prose}

## Changelog (englisch)

:component-changelog{prefix="prose"}
