---
description: Ein nicht-modaler Dialog, der um ein Triggerelement herum schwebt.
category: overlay
keywords:
  - hover card
  - flyout
links:
  - label: Die Hovercard
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/hover-card
  - label: Popovers
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/popover
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Popover.vue
---

## Bearbeiten

Verwenden Sie einen [Button](/docs/components/button) oder eine andere Komponente im Standard-Steckplatz des Popovers.

Verwenden Sie dann den `#content`-Steckplatz, um den Inhalt hinzuzufügen, der angezeigt wird, wenn das Popover geöffnet ist.

::component-code
---
prettier: true
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" />

  content: |

    <Placeholder class="size-48 m-4 inline-flex" />
---

:u-button{label="öffnen" color="neutral" variant="subtle"}

#content
:placeholder{class="size-48 m-4 inline-flex"}
::

### Mode ist

Verwenden Sie die `mode`-prop, um den Modus des Popover. Defaults auf `click` zu ändern.

::tip
Stellen Sie im `hover`-Modus die `enable-touch`-Prop so ein, dass Benutzer den Popover durch Antippen des Auslösers auf Touch-Geräten umschalten können, oder verwenden Sie den `click`-Modus für Trigger, die angetippt werden sollen.
::

::component-code
---
prettier: true
items:
  mode:
    - click
    - hover
props:
  mode: 'hover'
  enableTouch: true
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" />

  content: |

    <Placeholder class="size-48 m-4 inline-flex" />
---

:u-button{label="öffnen" color="neutral" variant="subtle"}

#content
:placeholder{class="size-48 m-4 inline-flex"}
::

::note
Wenn Sie den `hover`-Modus verwenden, wird anstelle der Komponente [`Popover`](https://reka-ui.com/docs/components/popover) die Reka-Benutzeroberfläche [xph0444x](https://reka-ui.com/docs/components/hover-card) verwendet.
::

### Delay

Wenn Sie den `hover`-Modus verwenden, können Sie die `open-delay`-und `close-delay`-Props verwenden, um die Verzögerung zu steuern, bevor der Popover geöffnet oder geschlossen wird.

::component-code
---
prettier: true
ignore:
  - mode
props:
  mode: 'hover'
  openDelay: 500
  closeDelay: 300
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" />

  content: |

    <Placeholder class="size-48 m-4 inline-flex" />
---

:u-button{label="öffnen" color="neutral" variant="subtle"}

#content
:placeholder{class="size-48 m-4 inline-flex"}
::

### Inhalt

Verwenden Sie die `content`-Prop, um zu steuern, wie der Popover-Inhalt gerendert wird, z. B. `align` oder `side`.

::component-code
---
prettier: true
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
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" />

  content: |

    <Placeholder class="size-48 m-4 inline-flex" />
---

:u-button{label="öffnen" color="neutral" variant="subtle"}

#content
:placeholder{class="size-48 m-4 inline-flex"}
::

### Arrow Bearbeiten

Verwenden Sie die `arrow`-Prop, um einen Pfeil auf dem Popover anzuzeigen.

::component-code
---
prettier: true
ignore:
  - arrow
props:
  arrow: true
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" />

  content: |

    <Placeholder class="size-48 m-4 inline-flex" />
---

:u-button{label="öffnen" color="neutral" variant="subtle"}

#content
:placeholder{class="size-48 m-4 inline-flex"}
::

### Modal ist

Verwenden Sie die `modal`-prop, um zu steuern, ob der Popover die Interaktion mit externen Inhalten blockiert.

::component-code
---
prettier: true
ignore:
  - title
props:
  modal: true
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" />

  content: |

    <Placeholder class="size-48 m-4 inline-flex" />
---

:u-button{label="öffnen" color="neutral" variant="subtle"}

#content
:placeholder{class="size-48 m-4 inline-flex"}
::

### Dismissible (nicht zulässig)

Verwenden Sie die `dismissible`-Prop, um zu steuern, ob der Popover deaktiviert werden kann, wenn Sie außerhalb des Popovers klicken oder escape drücken.

::note
Ein `close:prevent`-Ereignis wird ausgelöst, wenn der Benutzer versucht, es zu schließen.
::

::component-example
---
name: 'popover-dismissible-example'
---
::

## Beispiele

### Control im offenen Zustand

Sie können den offenen Zustand mit der Direktive `default-open` prop oder der Direktive `v-model:open` steuern.

::component-example
---
name: 'popover-open-example'
---
::

::note
In diesem Beispiel können Sie unter Nutzung von [`defineShortcuts`](/docs/composables/define-shortcuts) das Popover umschalten, indem Sie: kbd{value="O"}.
::

### Mit Befehlspalette

Sie können eine [CommandPalette](/docs/components/command-palette)-Komponente innerhalb des Popover-Inhalts verwenden.

::component-example
---
collapse: true
name: 'popover-command-palette-example'
---
::

### Mit folgendem Cursor

Sie können den Popover dazu bringen, dem Cursor zu folgen, wenn Sie mit der Prop [`reference`](https://reka-ui.com/docs/components/tooltip#trigger) über ein Element fahren:

::component-example
---
name: 'popover-cursor-example'
---
::

### Mit Anchor-Slot

Sie können den `#anchor`-Steckplatz verwenden, um das Popover gegen ein benutzerdefiniertes Element zu positionieren.

::warning
Dieser Slot funktioniert nur, wenn `mode` `click` ist.
::

::component-example
---
collapse: true
name: 'popover-anchor-slot-example'
---
::

## API Bearbeiten

### Props (englisch)

:component-props

### Slots (englisch)

:component-slots

::note
Die `close`-Funktion ist nur verfügbar, wenn `mode` auf `click` gesetzt ist, da die Reka-Benutzeroberfläche dies für [`Popover`](https://reka-ui.com/docs/components/popover#close-using-slot-props), nicht jedoch für [`HoverCard`](https://reka-ui.com/docs/components/hover-card) verfügbar macht.
::

### Emits (englisch)

:component-emits

## Theme Bearbeiten

:component-theme

## Changelog (englisch)

:component-changelog
