---
title: Formalidad
description: Un envoltorio para elementos de formulario que proporciona validación y manejo de errores.
category: form
keywords:
  - field wrapper
  - form label
links:
  - label: GitHub también
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/FormField.vue
---

xph0000xUso

Se utiliza en un [Form](xph003), proporciona validación y manejo de errores.

### Label

Utilice el prop `label` para establecer la etiqueta del control de formulario.

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
El atributo de etiqueta `for` y el control de formulario se asocian con un `id` único si no se proporciona.
::

Cuando se utiliza el prop `required`, se añade un asterisco junto a la etiqueta.

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

### Descripción

Utilice el prop `description` para proporcionar información adicional debajo de la etiqueta.

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

### Hint (en inglés)

Utilice el accesorio `hint` para mostrar un mensaje de sugerencia junto a la etiqueta.

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

### Ayuda

Utilice el prop `help` para mostrar un mensaje de ayuda debajo del control de formulario. Cuando se usa junto con el prop `error`, el prop `error` tiene prioridad.

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

### Error (en inglés)

Utilice la prop `error` para mostrar un mensaje de error debajo del control de formulario. Cuando se usa junto con la prop `help`, la prop `error` tiene prioridad.

Cuando se utiliza dentro de un [Form](/docs/components/form), se establece automáticamente cuando se produce un error de validación.

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
Esto establece el `color` a `error` en el control de formulario. Puede cambiarlo globalmente en su `app.config.ts`.
::

### Patrón de Error

Esto es especialmente relevante para los componentes con valores de matriz como [InputTags](/docs/components/input-tags), donde los errores incluyen índices de matriz en su nombre (por ejemplo, `tags.0`).

::tip{to="/docs/components/form#error-reporting"}
Vea un ejemplo de cómo usar `error-pattern` dentro de un formulario.
::

### Tamaño

Utilice el prop `size` para cambiar el tamaño del FormField, el `size` se proxy para el control de formulario.

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

### Orientación: badge{label="4.3+" class="align-text-top"}

Utilice el prop `orientation` para cambiar el diseño del FormField. Defaults a `vertical`.

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

## API (Edición española)

### Props (accesorios)

:component-props

### Slots en línea

:component-slots

## Temas

:component-theme

## Changelog (Edición española)

:component-changelog
