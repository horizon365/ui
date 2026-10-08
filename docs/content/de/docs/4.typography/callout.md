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

@@@ph000@@Verwendung

Verwenden Sie Markdown im Standard-Slot der `callout`-Komponente, um Ihren Inhalten einen auffälligen Kontext hinzuzufügen.

::component-code{slug="callout" prose}
---
Props:
  Klasse: 'w-voll my-0'
Hide:
  @@@@@@@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@
Die Slots:
  default: Dies ist ein `callout` mit vollem **markdown** support.
---
::

@@@@@@@@@@@@@@@@@@Icony

Verwenden Sie das `icon` prop, um ein Symbol neben dem Inhalt anzuzeigen.

::component-code{slug="callout" prose}
---
Props:
  I-Lucide-Square-Play (englisch)
  Klasse: 'w-voll my-0'
Hide:
  @@@008@0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
Slots auf:
  default: Dies ist ein `callout` mit einem Icon.
---
::

@@@@@10@100@100@100@100@100@100@10@10@10@10@10@10@@10@10@10@@10@10@10@10@10@10@10@10@10@10@10@10@10@10@10@10@10@10@10@10@10@10@10@10@10@10@10@10@10@10@10@10@@100@@@@@100000@@@@@@@@@@@@@1000000000@@@@@@@@@@@@@@@@@@@@@@@10000000000@@@@@@@@@@@@@@@@@@@

Verwenden Sie `color` prop, um die Farbe des Callouts zu ändern.

::component-code{slug="callout" prose}
---
Ignoriert:
  @@@@@@@@@@icon.de
Props:
  Bildnachweis: i-lucide-info
  Farbe: Info
  Klasse: 'w-voll mein-0'
Hide:
  @@13@Klasse
Slots auf:
  default: Dies ist ein `callout` mit einer benutzerdefinierten Farbe.
---
::

@@@@@15@Link

Sie können jede Eigenschaft von der [`<NuxtLink>`](https://nuxt.com/docs/api/components/nuxt-link) Komponente wie `to` und `target` übergeben, um die Callout einen Link zu machen.

::component-code{slug="callout" prose}
---
Hide:
  @@ph023@class
Ignoriert:
  @@ph024@@gmail.de
  @@ph025@@zielgruppe
Props:
  I-Lucide-Square-Play (englisch)
  zu: '/docs/getting-started/installation/nuxt'
  Farbe: neutral
  Klasse: 'w-voll my-0'
Die Slots:
  default: Lernen Sie, wie Sie `@nuxt/ui` in Ihrem Projekt installieren.
---
::

@@ph027@Kurzfassungen

Sie können auch die `note`,`tip`,`warning` und `caution` Shortcuts mit vordefinierten Icons und Farben verwenden.

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
Diese Aktion kann nicht ungeschehen gemacht werden.
::

:::

#Der Code

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

@@ph049@@api

@@@@@@@@ph050@@props

: component-props {prose}

@@ph052@gmail.de

: component-slots {prose}

@@ph054@gmail.de

: component-theme {prose}

@@ph056@@changelog @@changelog

: component-changelog {prefix="prose"}
