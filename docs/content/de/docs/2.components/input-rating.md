---
title: Inputation
description: Eine Komponente, um Bewertungen von Benutzern anzuzeigen und zu sammeln.
category: form
keywords:
  - star rating
  - stars
links:
  - label: Das Rating
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/rating
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/InputRating.vue
---

@@@ph000@@Verwendung

Verwenden Sie die `v-model`-Direktive, um den Bewertungswert der InputRating-Komponente zu steuern.

::component-code
---
Außen:
  - modellWert
Props:
  Modellgröße: 3
---
::

Verwenden Sie `default-value` prop, um den Anfangswert festzulegen, wenn Sie den Zustand nicht steuern müssen.

::component-code
---
Ignoriert:
  - defaultValue (nicht vorhanden)
Props:
  Defaultwert: 3
---
::

@@ph005@Schritt

Verwenden Sie `step` prop, um die Granularität jedes Sterns zu steuern. Setzen Sie es auf `0.5`, um Halbsterne-Bewertungen zuzulassen.

::component-code
---
Ignoriert:
  - defaultValue (nicht vorhanden)
Props:
  Schritt: 0.5
  Fehlerwert: 3,5
---
::

@@ph009@@Länge

Verwenden Sie `length` prop, um die Anzahl der Sterne festzulegen.

::component-code
---
Ignoriert:
  - defaultValue
Props:
  Dauer: 10
  Schritt: 0.5
  Fehlerwert: 7.5
---
::

### Klarstellung

Verwenden Sie `clearable` prop, damit Benutzer die Bewertung löschen können, indem Sie auf den aktuell ausgewählten Wert klicken. Standardmäßig auf `false`.

::component-code
---
Ignoriert:
  - defaultValue
Props:
  Klarstellung: true
  Defaultwert: 3
---
::

@@ph017@@gmail.de

Verwenden Sie `hoverable` prop, um zu steuern, ob die Bewertung den Wert anzeigt, wenn Sie über die Sterne schweben.

::component-code
---
Ignoriert:
  - defaultValue (@ Fehlerwert)
Props:
  unwahr: true
  Defaultwert: 3
---
::

@@ph021@@@Icon-Seite

Verwenden Sie `icon` prop, um das Symbol für stars. Defaults auf `i-lucide-star` anzupassen.

::component-code
---
Ignoriert:
  - defaultValue
Props:
  I-Lucide-Heart (englisch)
  Defaultwert: 4
---
::

::framework-only
#nuxt sein
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
Sie können das Standardsternsymbol global in Ihrem `app.config.ts` unter `ui.icons.star` key anpassen.
:::

#Ansehen
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
Sie können das Standardsternsymbol global in Ihrem `vite.config.ts` unter `ui.icons.star` Schlüssel anpassen.
:::
::

@@ph029@@leeres Icon

Verwenden Sie das `empty-icon` prop, um das Symbol für leere Sterne anzupassen. Wenn nicht angegeben, verwendet es dasselbe Symbol wie `icon`.

::component-code
---
Ignoriert:
  - defaultValue
Props:
  emptyIcon: 'i-lucide-circle'(I-luzide-Kreis)
  Icon: 'i-lucide-circle-check'(I-luzide-Kreis-Check)
  Defaultwert: 3
---
::

@@@@@333@33@33@33@33@33@@33@33@@33@@33@@@33@@@@33@@@@33@3@@@@33@@@@33@3@@@@33@3@@3@@@33@3@@@@33@3@@3@3@3@@@33@@@@@333@@3@@@33@3@@@@33@@@@33@@3@@@@@333@@@@3@@@@@@333@@@@@@333@@@@@@@@@@@@@3333@@@@@@@@@@@@@@@@@@333333@@@@@@@@@@@@@@@@@@@@@@@@33333333@@

Verwenden Sie die `color` prop, um die Farbe der gefüllten Sterne zu ändern.

::component-code
---
Ignoriert:
  - defaultValue
Props:
  Farbe: neutral
  Defaultwert: 4
---
::

@@ph036 @ Größe

Verwenden Sie `size` prop, um die Größe der Sterne zu ändern.

::component-code
---
Ignoriert:
  - defaultValue
Items:
  Größe:
    @@@@39@xxx
    @@ph040@@sm
    @@041@md
    @@ph042@@lg
    @@ph043@@xl
Props:
  Größe: XL
  Defaultwert: 4
---
::

@@ph044@Orientierung

Verwenden Sie `orientation` prop, um die Ausrichtung der Bewertung zu ändern. Standardmäßig auf `horizontal`.

::component-code
---
Ignoriert:
  - defaultValue (nicht vorhanden)
Props:
  Ausrichtung: Vertikal
  Defaultwert: 4
---
::

@@ph048@disabled @ disabled

Wenn deaktiviert, hat die Komponente eine reduzierte Deckkraft (75%) und zeigt einen `not-allowed` Cursor an, um anzuzeigen, dass sie nicht interaktiv ist.

::component-code
---
Ignoriert:
  - defaultValue
Props:
  Behindert: Wahr
  Defaultwert: 3
---
::

@@ph052@readonly (nicht übersetzt)

Verwenden Sie `readonly` prop, um eine Bewertung ohne Benutzerinteraktion anzuzeigen. Im Gegensatz zu `disabled` behält es das normale Aussehen bei (volle Deckkraft, Standard-Cursor). Verwenden Sie es, wenn Sie eine Bewertung anzeigen möchten, die nicht geändert werden kann, aber normal aussehen sollte.

::component-code
---
Ignoriert:
  - defaultValue
Props:
  Readonly: wahr
  Fehlerwert: 4.5
---
::

@@@@@@565@@bmw

@@@ph057@@props

Komponenten-Props

@@ph058@gmail.de

Die Komponenten-Slots

@@ph059@@emits

Komponenten emittieren

@@ph060@@gmail.de

Das Komponenten-Theme

## Changelog @@ Changelog @@@ Changelog

Das Component-Changelog
