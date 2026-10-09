---
title: Das Formfeld
description: Ein Wrapper für Formularelemente, der Validierung und Fehlerbehandlung bietet.
category: form
keywords:
  - field wrapper
  - form label
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/FormField.vue
---

## Bearbeiten

Wickeln Sie eine beliebige Formularkomponente mit einem FormField ein. Wird in einem [Form](/docs/components/form) verwendet, bietet es Validierung und Fehlerbehandlung.

### Label

Verwenden Sie die prop `label`, um das Label für das Formularsteuerelement festzulegen.

::component-code
---
prettier: true
props:
  label: Email
slots:
  default: |

    <UInput placeholder="Enter your email" />
---

:u-input{placeholder="Enter your email"}
::

::note
Das Attribut label `for` und das Formular-Steuerelement sind mit einem eindeutigen `id` verknüpft, falls nicht angegeben.
::

Wenn Sie die `required`-Prop verwenden, wird neben dem Etikett ein Sternchen hinzugefügt.

::component-code
---
prettier: true
ignore:
  - label
props:
  label: Email
  required: true
slots:
  default: |

    <UInput placeholder="Enter your email" />
---

:u-input{placeholder="Enter your email"}
::

xph031Beschreibung

Verwenden Sie die `description`-Prop, um zusätzliche Informationen unterhalb des Etiketts anzugeben.

::component-code
---
prettier: true
ignore:
  - label
props:
  label: Email
  description: We'll never share your email with anyone else.
slots:
  default: |

    <UInput placeholder="Enter your email" class="w-full" />
---

:u-input{placeholder="Enter your email" class="w-full"}
::

### Hint (englisch)

Verwenden Sie die `hint`-Prop, um eine Hinweismeldung neben dem Etikett anzuzeigen.

::component-code
---
prettier: true
ignore:
  - label
props:
  label: Email
  hint: Optional
slots:
  default: |

    <UInput placeholder="Enter your email" />
---

:u-input{placeholder="Enter your email"}
::

### Help Hilfe

Verwenden Sie die `help`-prop, um eine Hilfemeldung unterhalb des Formular-Steuerelements anzuzeigen. Wenn sie zusammen mit der `error`-prop verwendet wird, hat die `error`-prop Vorrang.

::component-code
---
prettier: true
ignore:
  - label
props:
  label: Email
  help: Please enter a valid email address.
slots:
  default: |

    <UInput placeholder="Enter your email" class="w-full" />
---

:u-input{placeholder="Enter your email" class="w-full"}
::

### Fehler

Verwenden Sie die `error`-prop, um eine Fehlermeldung unterhalb des Formular-Steuerelements anzuzeigen. Wenn sie zusammen mit der `help`-prop verwendet wird, hat die `error`-prop Vorrang.

Bei Verwendung in einem [Form](/docs/components/form) wird dies automatisch gesetzt, wenn ein Validierungsfehler auftritt.

::component-code
---
prettier: true
ignore:
  - label
props:
  label: Email
  error: Please enter a valid email address.
slots:
  default: |

    <UInput placeholder="Enter your email" class="w-full" />
---

:u-input{placeholder="Enter your email" class="w-full"}
::

::tip{to="/docs/getting-started/theme/design-system#color-system"}
Dies setzt den Wert `color` auf `error` im Formular-Steuerelement. Sie können ihn global in Ihrem `app.config.ts` ändern.
::

### Error Pattern (Fehlerbild)

Dies ist besonders relevant für Komponenten mit Array-Werten wie [InputTags](/docs/components/input-tags), bei denen Fehler Array-Indizes in ihrem Namen enthalten (z. B. `tags.0`).

::tip{to="/docs/components/form#error-reporting"}
Hier sehen Sie ein Beispiel für die Verwendung von `error-pattern` in einem Formular.
::

### Size ist

Verwenden Sie die `size`-prop, um die Größe des FormField zu ändern, die `size` wird an das Formularsteuerelement proxiert.

::component-code
---
prettier: true
ignore:
  - label
  - description
  - hint
  - help
props:
  label: Email
  description: We'll never share your email with anyone else.
  hint: Optional
  help: Please enter a valid email address.
  size: xl
slots:
  default: |

    <UInput placeholder="Enter your email" class="w-full" />
---

:u-input{placeholder="Enter your email" class="w-full"}
::

### Orientierung: badgexx128x

Verwenden Sie die `orientation`-prop, um das Layout der FormField. Defaults auf `vertical` zu ändern.

::component-code
---
prettier: true
ignore:
  - label
  - class
props:
  orientation: horizontal
  label: Email
  help: Please enter a valid email address.
  class: w-72
slots:
  default: |

    <UInput placeholder="Enter your email" class="w-full" />
---

:u-input{placeholder="Enter your email" class="w-full"}
::

## API Bearbeiten

### Props Bearbeiten

:component-props

### Slots (englisch)

:component-slots

## Theme Bearbeiten

:component-theme

## Changelog (englisch)

:component-changelog
