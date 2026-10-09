---
description: Zeigen Sie Inhalte in einer Karte mit Kopf, Körper und Fußzeile an.
category: element
keywords:
  - panel
  - box
  - container
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Card.vue
---

## Bearbeiten

Verwenden Sie die Steckplätze `header`, `default` und `footer`, um Inhalte zur Karte hinzuzufügen.

::component-code
---
prettier: true
hide:
  - class
props:
  class: 'w-full'
slots:
  header: |

    <Placeholder class="h-8" />

  default: |

    <Placeholder class="h-32" />

  footer: |

    <Placeholder class="h-8" />
---

#header
:placeholder{class="h-8"}

#default
:placeholder{class="h-32"}

#footer
:placeholder{class="h-8"}
::

### Title: badge{label="4.7+" class="align-text-top"} (englisch)

Verwenden Sie die `title` prop, um den Titel des Kartenkopfes festzulegen.

::component-code
---
prettier: true
ignore:
  - class
props:
  title: 'Card with title'
  class: 'w-full'
slots:
  default: |

    <Placeholder class="h-32" />
---

#default
:placeholder{class="h-32"}
::

### Beschreibung: badge{label="4.7+" class="align-text-top"}

Verwenden Sie die `description`-prop, um die Beschreibung des Kartenkopfes festzulegen.

::component-code
---
prettier: true
ignore:
  - title
  - class
props:
  title: 'Card with description'
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  class: 'w-full'
slots:
  default: |

    <Placeholder class="h-32" />
---

#default
:placeholder{class="h-32"}
::

### Variant Bearbeiten

Verwenden Sie die `variant` prop, um die Variante der Karte zu ändern.

::component-code
---
prettier: true
hide:
  - class
props:
  variant: subtle
  class: 'w-full'
slots:
  header: |

    <Placeholder class="h-8" />

  default: |

    <Placeholder class="h-32" />

  footer: |

    <Placeholder class="h-8" />
---

#header
:placeholder{class="h-8"}

#default
:placeholder{class="h-32"}

#footer
:placeholder{class="h-8"}
::

## API (englisch)

### Props (englisch)

:component-props

### Slots (englisch)

:component-slots

## Theme Bearbeiten

:component-theme

## Changelog Bearbeiten

:component-changelog
