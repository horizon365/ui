---
title: FormVeld
description: Een wrapper voor formulierelementen die validatie en foutafhandeling biedt.
category: form
keywords:
  - field wrapper
  - form label
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/FormField.vue
---

## Gebruik

Wikkel elk formulieronderdeel in met een FormField. Gebruikt in een [Form](/docs/components/form), biedt het validatie en foutafhandeling.

### Label

Gebruik de `label` prop om het label voor het formulierbesturingselement in te stellen.

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
Het kenmerk label `for` en het formulierbesturingselement worden geassocieerd met een unieke `id` indien niet verstrekt.
::

Bij gebruik van de `required` prop wordt naast het label een sterretje toegevoegd.

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

### Beschrijving

Gebruik de `description` prop om aanvullende informatie onder het label te geven.

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

### Hint

Gebruik de `hint` prop om een hint bericht naast het label weer te geven.

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

### Hulp

Gebruik de `help` prop om een helpbericht onder het formulierbesturingselement weer te geven. Bij gebruik samen met de `error` prop heeft de `error` prop voorrang.

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

### Fout

Gebruik de `error` prop om een foutmelding onder het formulierbesturingselement weer te geven. Bij gebruik samen met de `help` prop heeft de `error` prop voorrang.

Bij gebruik binnen een [Form](/docs/components/form) wordt dit automatisch ingesteld wanneer er een validatiefout optreedt.

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
Dit stelt de `color` in op `error` op het formulierbesturingselement. U kunt het globaal wijzigen in uw `app.config.ts`.
::

### Foutpatroon

Gebruik de `error-pattern` prop om formulierfouten te matchen met een reguliere expressie.
Dit is vooral relevant voor componenten met matrixwaarden zoals [InputTags](/docs/components/input-tags), waarbij fouten matrixindices in hun naam bevatten (bijv. `tags.0`).

::tip{to="/docs/components/form#error-reporting"}
Zie een voorbeeld van het gebruik van `error-pattern` binnen een formulier.
::

### Grootte

Gebruik de `size` prop om de grootte van het FormField te wijzigen, de `size` is gekoppeld aan het formulierbesturingselement.

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

### Oriëntatie: badge{label="4.3+" class="align-text-top"}

Gebruik de `orientation` prop om de lay-out van het FormField te wijzigen. Standaard is `vertical`.

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

## API

### Props

:component-props

### Slots

:component-slots

## Thema

:component-theme

## Wijzigingsgelog

:component-changelog
