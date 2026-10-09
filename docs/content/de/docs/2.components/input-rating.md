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

## Bearbeiten

Verwenden Sie die `v-model`-Direktive, um den Ratingwert der Komponente InputRating zu steuern.

::component-code
---
external:
  - modelValue
props:
  modelValue: 3
---
::

Verwenden Sie die `default-value`-prop, um den Anfangswert festzulegen, wenn Sie den Zustand nicht steuern müssen.

::component-code
---
ignore:
  - defaultValue
props:
  defaultValue: 3
---
::

### step-### step

Verwenden Sie die `step`-prop, um die Granularität jedes Sterns zu steuern. Setzen Sie sie auf `0.5`, um Halbsterne-Bewertungen zu ermöglichen.

::component-code
---
ignore:
  - defaultValue
props:
  step: 0.5
  defaultValue: 3.5
---
::

### Length ist

Verwenden Sie die `length`-prop, um die Anzahl der Sterne einzustellen. Standardmäßig ist `5`.

::component-code
---
ignore:
  - defaultValue
props:
  length: 10
  step: 0.5
  defaultValue: 7.5
---
::

### Clearable.de Bearbeiten

Verwenden Sie die `clearable`-Prop, um Benutzern zu ermöglichen, die Bewertung durch Klicken auf den aktuell ausgewählten Wert zu löschen.

::component-code
---
ignore:
  - defaultValue
props:
  clearable: true
  defaultValue: 3
---
::

### Hoverable Bearbeiten

Verwenden Sie die `hoverable`-prop, um zu steuern, ob die Bewertung den Wert beim Schweben über den Sternen anzeigt.

::component-code
---
ignore:
  - defaultValue
props:
  hoverable: true
  defaultValue: 3
---
::

### Icon (englisch)

Verwenden Sie die `icon`-Prop, um das Symbol für Sterne anzupassen. Standardmäßig ist `i-lucide-star`.

::component-code
---
ignore:
  - defaultValue
props:
  icon: 'i-lucide-heart'
  defaultValue: 4
---
::

::framework-only
#nuxt
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
Sie können das Standardsternsymbol global in Ihrem `app.config.ts` unter der `ui.icons.star`-Taste anpassen.
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
Sie können das Standardsternsymbol global in Ihrem `vite.config.ts` unter der `ui.icons.star`-Taste anpassen.
:::
::

### Empty Icon (nicht vorhanden)

Verwenden Sie die `empty-icon`-prop, um das Symbol für leere Sterne. If nicht zur Verfügung gestellt, verwendet das gleiche Symbol wie `icon`.

::component-code
---
ignore:
  - defaultValue
props:
  emptyIcon: 'i-lucide-circle'
  icon: 'i-lucide-circle-check'
  defaultValue: 3
---
::

### Color (englisch)

Verwenden Sie die `color`-Prop, um die Farbe der gefüllten Sterne zu ändern.

::component-code
---
ignore:
  - defaultValue
props:
  color: neutral
  defaultValue: 4
---
::

### Size

Verwenden Sie die `size`-Prop, um die Größe der Sterne zu ändern.

::component-code
---
ignore:
  - defaultValue
items:
  size:
    - xs
    - sm
    - md
    - lg
    - xl
props:
  size: xl
  defaultValue: 4
---
::

### Orientierung

Verwenden Sie die `orientation` prop, um die Ausrichtung der Bewertung zu ändern. Standardmäßig auf `horizontal`.

::component-code
---
ignore:
  - defaultValue
props:
  orientation: vertical
  defaultValue: 4
---
::

### Disabled (englisch)

Wenn deaktiviert, hat die Komponente eine reduzierte Deckkraft (75%) und zeigt einen `not-allowed`-Cursor an, um anzuzeigen, dass sie nicht interaktiv ist.

::component-code
---
ignore:
  - defaultValue
props:
  disabled: true
  defaultValue: 3
---
::

### Readonly (englisch)

Verwenden Sie die `readonly`-Prop, um eine Bewertung anzuzeigen, ohne die Benutzerinteraktion zuzulassen. Im Gegensatz zu `disabled` behält sie das normale Erscheinungsbild bei (volle Deckkraft, Standard-Cursor). Verwenden Sie diese Funktion, wenn Sie eine Bewertung anzeigen möchten, die nicht geändert werden kann, aber normal aussehen sollte.

::component-code
---
ignore:
  - defaultValue
props:
  readonly: true
  defaultValue: 4.5
---
::

## API Bearbeiten

### Props (englisch)

:component-props

### Slots (englisch)

:component-slots

### Emits (nicht)

:component-emits

## Theme Bearbeiten

:component-theme

## Changelog (englisch)

:component-changelog
