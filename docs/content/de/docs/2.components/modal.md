---
description: Ein Dialogfenster, in dem eine Nachricht angezeigt oder Benutzereingaben angefordert werden können.
category: overlay
keywords:
  - dialog
  - popup
  - confirm
  - alert dialog
links:
  - label: Der Dialog
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/dialog
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Modal.vue
---

## Bearbeiten

Verwenden Sie einen [Button](/docs/components/button) oder eine andere Komponente im Standard-Slot des Modal.

Verwenden Sie dann den `#content`-Steckplatz, um den angezeigten Inhalt hinzuzufügen, wenn das Modal geöffnet ist.

::component-code
---
prettier: true
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" />

  content: |

    <Placeholder class="h-48 m-4" />
---

:u-button{label="öffnen" color="neutral" variant="subtle"}

#content
:placeholder{class="h-48 m-4"}
::

Sie können auch die Slots `#header`{lang="ts-type"}, `#body`{lang="ts-type"} und `#footer`{lang="ts-type"} verwenden, um den Inhalt des Modals anzupassen.

### Titel

Verwenden Sie die `title`-prop, um den Titel des Modal-Headers festzulegen.

::component-code
---
prettier: true
props:
  title: 'Modal with title'
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" />

  body: |

    <Placeholder class="h-48" />
---

:u-button{label="öffnen" color="neutral" variant="subtle"}

#body
:placeholder{class="h-48"}
::

### Beschreibung

Verwenden Sie die `description`-prop, um die Beschreibung des Modal-Headers festzulegen.

::component-code
---
prettier: true
ignore:
  - title
props:
  title: 'Modal with description'
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" />

  body: |

    <Placeholder class="h-48" />
---

:u-button{label="öffnen" color="neutral" variant="subtle"}

#body
:placeholder{class="h-48"}
::

### Schließen

Verwenden Sie die `close`-Prop, um die Schaltfläche zum Schließen (mit dem Wert `false`), die im Kopfbereich des Modals angezeigt wird, anzupassen oder auszublenden.

Sie können jede Eigenschaft der Komponente [Button](/docs/components/button) übergeben, um sie anzupassen.

::component-code
---
prettier: true
ignore:
  - title
  - close.color
  - close.variant
props:
  title: 'Modal with close button'
  close:
    color: primary
    variant: outline
    class: 'rounded-full'
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" />

  body: |

    <Placeholder class="h-48" />
---

:u-button{label="öffnen" color="neutral" variant="subtle"}

#body
:placeholder{class="h-48"}
::

::tip
Die Schaltfläche Schließen wird nicht angezeigt, wenn der `#content`-Slot verwendet wird, da er Teil des Headers ist.
::

### Close Symbol

Verwenden Sie die `close-icon`-Prop, um die Schließen-Taste [Icon](/docs/components/icon). Defaults auf `i-lucide-x`.

::component-code
---
prettier: true
ignore:
  - title
props:
  title: 'Modal with close button'
  closeIcon: 'i-lucide-arrow-right'
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" />

  body: |

    <Placeholder class="h-48" />
---

:u-button{label="öffnen" color="neutral" variant="subtle"}

#body
:placeholder{class="h-48"}
::

::framework-only
#nuxt
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
Sie können dieses Symbol global in Ihrem `app.config.ts` unter `ui.icons.close` Schlüssel anpassen.
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
Sie können dieses Symbol global in Ihrem `vite.config.ts` unter `ui.icons.close` Schlüssel anpassen.
:::
::

### transition (englisch)

Verwenden Sie die `transition`-prop, um zu steuern, ob das Modal animiert ist oder nicht. Standardmäßig ist `true`.

::component-code
---
prettier: true
ignore:
  - title
props:
  transition: false
  title: 'Modal without transition'
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" />

  body: |

    <Placeholder class="h-48" />
---

:u-button{label="öffnen" color="neutral" variant="subtle"}

#body
:placeholder{class="h-48"}
::

### Overlay (Englisch)

Verwenden Sie die `overlay`-prop, um zu steuern, ob das Modal ein Overlay hat oder nicht.

::component-code
---
prettier: true
ignore:
  - title
props:
  overlay: false
  title: 'Modal without overlay'
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" />

  body: |

    <Placeholder class="h-48" />
---

:u-button{label="öffnen" color="neutral" variant="subtle"}

#body
:placeholder{class="h-48"}
::

### Modal ist

Verwenden Sie die `modal`-prop, um zu steuern, ob das Modal die Interaktion mit externen Inhalten blockiert.

::note
Wenn `modal` auf `false` eingestellt ist, wird das Overlay automatisch deaktiviert und externe Inhalte werden interaktiv.
::

::component-code
---
prettier: true
ignore:
  - title
props:
  modal: false
  title: 'Modal interactive'
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" />

  body: |

    <Placeholder class="h-48" />
---

:u-button{label="öffnen" color="neutral" variant="subtle"}

#body
:placeholder{class="h-48"}
::

### Dismissible (nicht zulässig)

Verwenden Sie die `dismissible`-Prop, um zu steuern, ob das Modal deaktiviert werden kann, wenn Sie außerhalb davon klicken oder escape drücken.

::note
Ein `close:prevent`-Ereignis wird ausgelöst, wenn der Benutzer versucht, es zu schließen.
::

::tip
Sie können `modal: false` mit `dismissible: false` kombinieren, um den Hintergrund des Modals interaktiv zu gestalten, ohne ihn zu schließen.
::

::component-code
---
prettier: true
ignore:
  - title
props:
  dismissible: false
  modal: true
  title: 'Modal non-dismissible'
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" />

  body: |

    <Placeholder class="h-48" />
---

:u-button{label="öffnen" color="neutral" variant="subtle"}

#body
:placeholder{class="h-48"}
::

### Scrollable: badge{label="4.2+" class="align-text-top"} (englisch)

Verwenden Sie die `scrollable` prop, um den Inhalt des Modals innerhalb des Overlays scrollbar zu machen.

::warning
Da das Overlay zum Scrollen benötigt wird, ist `modal: false` nicht kompatibel und `overlay: false` entfernt nur den Hintergrund.
::

::component-code
---
prettier: true
ignore:
  - title
props:
  scrollable: true
  overlay: true
  title: 'Modal scrollable'
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" />

  body: |

    <Placeholder class="h-full" />
---

:u-button{label="öffnen" color="neutral" variant="subtle"}

#body
:placeholder{class="h-screen"}
::

::caution
Es gibt ein [bekanntes issue](https://reka-ui.com/docs/components/dialog#scrollable-overlay), bei dem ein Klick auf die Bildlaufleiste den Dialog unter einigen Betriebssystemen unbeabsichtigt schließen kann.
::

### Fullscreen-Übersicht

Verwenden Sie die `fullscreen`-Prop, um den Modal-Vollbildmodus zu erstellen.

::component-code
---
prettier: true
ignore:
  - title
  - fullscreen
props:
  fullscreen: true
  title: 'Modal fullscreen'
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" />

  body: |

    <Placeholder class="h-full" />
---

:u-button{label="öffnen" color="neutral" variant="subtle"}

#body
:placeholder{class="h-full"}
::

### Unmount: badge{label="4.10+" class="align-text-top"} (nicht einhängen)

Verwenden Sie die `unmount-on-hide`-prop, um zu verhindern, dass der Inhalt des Modals beim Schließen entfernt wird. Standardmäßig ist `true`.

::component-code
---
prettier: true
ignore:
  - title
props:
  unmountOnHide: false
  title: 'Modal'
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" />

  body: |

    <Placeholder class="h-48" />
---

:u-button{label="öffnen" color="neutral" variant="subtle"}

#body
:placeholder{class="h-48"}
::

::note
Sie können das DOM überprüfen, um zu sehen, wie der Inhalt des Modals gerendert wird, auch wenn es geschlossen ist.
::

::tip
Wenn die `portal`-prop auf `false` gesetzt ist, wird der Inhalt auch auf dem Server gerendert. Dies ist nützlich, um ein geöffnetes Modal während SSR ohne Flash beim Laden der Seite zu rendern oder seinen Inhalt für SEO freizugeben.
::

## Examples [Bearbeiten]

### Control im Open State

Sie können den offenen Zustand mit der Direktive `default-open` prop oder der Direktive `v-model:open` steuern.

::component-example
---
name: 'modal-open-example'
---
::

::note
In diesem Beispiel können Sie unter Nutzung von [`defineShortcuts`](/docs/composables/define-shortcuts) das Modal umschalten, indem Sie: kbd{value="O"} drücken.
::

::tip
Auf diese Weise können Sie den Auslöser außerhalb des Modal verschieben oder vollständig entfernen.
::

### Programmatische Nutzung

Sie können das Composable [`useOverlay`](/docs/composables/use-overlay) verwenden, um ein Modal programmatisch zu öffnen.

::warning
Stellen Sie sicher, dass Sie Ihre App mit der Komponente [`App`](/docs/components/app) umschließen, die die Komponente [`OverlayProvider`]() verwendet.
::

Erstellen Sie zunächst eine modale Komponente, die programmatisch geöffnet wird:

::component-example
---
prettier: true
name: 'modal-example'
preview: false
---
::

::note
Wir senden ein `close`-Ereignis aus, wenn das Modal hier geschlossen oder verworfen wird. Sie können beliebige Daten über das `close`-Ereignis ausgeben, und diese Daten werden zum aufgelösten Wert von `open()`. Das Ereignis muss ausgegeben werden, damit das Versprechen aufgelöst werden kann.
::

Dann nutzen Sie es in Ihrer App:

::component-example
---
name: 'modal-programmatic-example'
---
::

::tip
Sie können das Modal innerhalb der modalen Komponente schließen, indem Sie `emit('close')` ausgeben.
::

### Verschachtelte Modale

Sie können Modals ineinander verschachteln.

::component-example
---
name: 'modal-nested-example'
---
::

### Mit Footer-Slot

Verwenden Sie den `#footer`-Steckplatz, um Inhalte nach dem Modal-Körper hinzuzufügen.

::component-example
---
name: 'modal-footer-slot-example'
---
::

### Mit der Befehlspalette

Sie können eine [CommandPalette](/docs/components/command-palette)-Komponente innerhalb des Modal-Inhalts verwenden.

::component-example
---
collapse: true
name: 'modal-command-palette-example'
---
::

::note
In diesem Beispiel wird `useLazyFetch` mit `immediate: false` verwendet, um Daten nur beim Öffnen des Modal abzurufen.
::

## API Bearbeiten

### Props Bearbeiten

:component-props

### Slots Bearbeiten

:component-slots

### Emits Bearbeiten

:component-emits

## Theme Bearbeiten

:component-theme

## Changelog (deutsch)

:component-changelog
