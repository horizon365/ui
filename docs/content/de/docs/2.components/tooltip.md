---
description: Ein Popup, das Informationen anzeigt, wenn der Mauszeiger über ein Element bewegt wird.
category: overlay
keywords:
  - hint
links:
  - label: Der Tooltip
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/tooltip
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Tooltip.vue
---

## Bearbeiten

Verwenden Sie einen [Button](/docs/components/button) oder eine andere Komponente im Standard-Slot des Tooltips.

::component-code
---
prettier: true
ignore:
  - text
props:
  text: 'Open on GitHub'
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" />
---

:u-button{label="öffnen" color="neutral" variant="subtle"}
::

::warning
Stellen Sie sicher, dass Sie Ihre App mit der Komponente [`App`](/docs/components/app) umschließen, die die Komponente [`TooltipProvider`](https://reka-ui.com/docs/components/tooltip#provider) von Reka UI verwendet.
::

::tip{to="/docs/components/app#props"}
Sie können die `App`-Komponente `tooltip` prop überprüfen, um zu sehen, wie Sie den Tooltip global konfigurieren.
::

### Text Übersetzung

Verwenden Sie die `text`-Prop, um den Inhalt des Tooltips festzulegen.

::component-code
---
prettier: true
props:
  text: 'Open on GitHub'
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" />
---

:u-button{label="öffnen" color="neutral" variant="subtle"}
::

### Kbds (englisch)

Verwenden Sie die `kbds` prop, um [Kbd](/docs/components/kbd) Komponenten im Tooltip zu rendern.

::component-code
---
prettier: true
ignore:
  - text
  - kbds
props:
  text: 'Open on GitHub'
  kbds:
    - meta
    - G
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" />
---

:u-button{label="öffnen" color="neutral" variant="subtle"}
::

::tip
Sie können spezielle Tasten wie `meta` verwenden, die auf macOS als `⌘` und auf anderen Plattformen als `Ctrl` angezeigt werden.
::

### Delay (englisch)

Verwenden Sie die `delay-duration`-prop, um die Verzögerung zu ändern, bevor die Tooltip angezeigt wird. Zum Beispiel können Sie es sofort erscheinen lassen, indem Sie es auf `0` setzen.

::component-code
---
prettier: true
ignore:
  - text
props:
  delayDuration: 0
  text: 'Open on GitHub'
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" />
---

:u-button{label="öffnen" color="neutral" variant="subtle"}
::

::tip
Dies kann global über die `tooltip.delayDuration`-Option in der Komponente [`App`](/docs/components/app) konfiguriert werden.
::

### Content Inhalt

Verwenden Sie die `content`-Prop, um zu steuern, wie der Tooltip-Inhalt gerendert wird, z. B. `align` oder `side`.

::tip
Dies kann global über die `tooltip.content`-Option in der Komponente [`App`](/docs/components/app) konfiguriert werden.
::

::component-code
---
prettier: true
ignore:
  - text
items:
  content.align:
    - start
    - center
    - end
  content.side:
    - right
    - left
    - top
    - bottom
props:
  content:
    align: center
    side: bottom
    sideOffset: 8
  text: 'Open on GitHub'
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" />
---

:u-button{label="öffnen" color="neutral" variant="subtle"}
::

### Pfeil

Verwenden Sie die `arrow` prop, um einen Pfeil auf der Tooltip anzuzeigen.

::component-code
---
prettier: true
ignore:
  - text
  - arrow
props:
  arrow: true
  text: 'Open on GitHub'
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" />
---

:u-button{label="öffnen" color="neutral" variant="subtle"}
::

### Disabled (englisch)

Verwenden Sie die `disabled` prop, um den Tooltip zu deaktivieren.

::component-code
---
prettier: true
ignore:
  - text
props:
  disabled: true
  text: 'Open on GitHub'
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" />
---

:u-button{label="öffnen" color="neutral" variant="subtle"}
::

## Beispiele

### Control im offenen Zustand

Sie können den offenen Zustand mit der `default-open` prop oder der `v-model:open` Direktive steuern.

::component-example
---
name: 'tooltip-open-example'
---
::

::note
In diesem Beispiel können Sie mit [`defineShortcuts`](/docs/composables/define-shortcuts) den Tooltip umschalten, indem Sie: kbd{value="O"} drücken.
::

### Mit dem folgenden Cursor

Sie können den Tooltip dazu bringen, dem Cursor zu folgen, wenn Sie mit der Prop [`reference`](https://reka-ui.com/docs/components/tooltip#trigger) über ein Element fahren:

::component-example
---
name: 'tooltip-cursor-example'
---
::

## API

### Props Bearbeiten

:component-props

### Slots Bearbeiten

:component-slots

### Emits (englisch)

:component-emits

## Theme Bearbeiten

:component-theme

## Changelog Bearbeiten

:component-changelog
