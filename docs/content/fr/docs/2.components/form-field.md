---
title: Formées Field
description: Un wrapper pour les éléments de formulaire qui fournit la validation et la gestion des erreurs.
category: form
keywords:
  - field wrapper
  - form label
links:
  - label: GitHub à
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/FormField.vue
---

## Utilisation

Utilisé dans un [Form](xph003), il assure la validation et la gestion des erreurs.

### étiquette

Utilisez la prop `label` pour définir l'étiquette du contrôle de formulaire.

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
L'attribut label `for` et le contrôle de formulaire sont associés à un `id` unique s'ils ne sont pas fournis.
::

Lorsque vous utilisez le prop `required`, un astérisque est ajouté à côté de l'étiquette.

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

### Description

Utilisez le prop `description` pour fournir des informations supplémentaires sous l'étiquette.

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

### référence

Utilisez le prop `hint` pour afficher un message d'allusion à côté de l'étiquette.

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

### Aide

Utilisez la prop `help` pour afficher un message d'aide sous le contrôle de formulaire. Lorsqu 'elle est utilisée avec la prop `error`, la prop `error` a priorité.

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

### Erreur

Utilisez la prop `error` pour afficher un message d'erreur sous le contrôle de formulaire. Lorsqu 'il est utilisé avec la prop `help`, la prop `error` a la priorité.

Lorsqu 'il est utilisé à l'intérieur d'un [Form](/docs/components/form), il est automatiquement défini lorsqu' une erreur de validation se produit.

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
Cela définit le `color` à `error` sur le contrôle de formulaire. Vous pouvez le modifier globalement dans votre `app.config.ts`.
::

### Erreur de référence

Ceci est particulièrement pertinent pour les composants avec des valeurs de tableau telles que [InputTags](/docs/components/input-tags), où les erreurs incluent des indices de tableau dans leur nom (par exemple, `tags.0`).

::tip{to="/docs/components/form#error-reporting"}
Voir un exemple d'utilisation de `error-pattern` dans un formulaire.
::

### Size

Utilisez la prop `size` pour modifier la taille du FormField, le `size` est proxié au contrôle de formulaire.

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

### Orientation: badge{label="4.3+" class="align-text-top"}

Utilisez la prop `orientation` pour modifier la disposition du FormField. Defaults à `vertical`.

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

### Props équipements

:component-props

### Slots

:component-slots

## Thème

:component-theme

## Changelog écrit

:component-changelog
