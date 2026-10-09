---
description: Ein Dialog, der von einer beliebigen Seite des Bildschirms eingeblendet wird.
category: overlay
keywords:
  - sheet
  - side panel
  - off-canvas
links:
  - label: Der Dialog
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/dialog
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Slideover.vue
---

## Bearbeiten

Verwenden Sie einen [Button](/docs/components/button) oder eine andere Komponente im Standard-Steckplatz des Slideovers.

Verwenden Sie dann den `#content`-Steckplatz, um den angezeigten Inhalt hinzuzufügen, wenn der Slideover geöffnet ist.

::component-code
---
prettier: true
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" />

  content: |

    <Placeholder class="h-full m-4" />
---

:u-button{label="öffnen" color="neutral" variant="subtle"}

#content
:placeholder{class="h-full m-4"}
::

Sie können auch die Slots `#header`{lang="ts-type"}, `#body`{lang="ts-type"} und `#footer`{lang="ts-type"} verwenden, um den Inhalt des Slideovers anzupassen.

### Titel

Verwenden Sie die `title`-prop, um den Titel des Slideover-Headers festzulegen.

::component-code
---
prettier: true
props:
  title: 'Slideover with title'
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

### Beschreibung

Verwenden Sie die `description`-prop, um die Beschreibung des Slideover-Headers festzulegen.

::component-code
---
prettier: true
ignore:
  - title
props:
  title: 'Slideover with description'
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
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

### Schließen

Verwenden Sie die `close`-Prop, um die Schaltfläche zum Schließen (mit dem Wert `false`), die in der Kopfzeile des Slideovers angezeigt wird, anzupassen oder auszublenden.

Sie können jede Eigenschaft der Komponente [Button](/docs/components/button) übergeben, um sie anzupassen.

::component-code
---
prettier: true
ignore:
  - title
  - close.color
  - close.variant
props:
  title: 'Slideover with close button'
  close:
    color: primary
    variant: outline
    class: 'rounded-full'
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

::note
Die Schaltfläche Schließen wird nicht angezeigt, wenn der `#content`-Steckplatz verwendet wird, da er Teil des Headers ist.
::

### Close Symbol

Verwenden Sie die `close-icon`-Prop, um die Schließen-Taste [Icon](/docs/components/icon). Defaults auf `i-lucide-x`.

::component-code
---
prettier: true
ignore:
  - title
props:
  title: 'Slideover with close button'
  closeIcon: 'i-lucide-arrow-right'
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

X117X-Seite

Verwenden Sie die `side`-Prop, um die Seite des Bildschirms einzustellen, an der der Slideover von. Defaults auf `right` gleitet.

::component-code
---
prettier: true
ignore:
  - title
props:
  side: 'left'
  title: 'Slideover with side'
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" />

  body: |

    <Placeholder class="h-full min-h-48" />
---

:u-button{label="öffnen" color="neutral" variant="subtle"}

#body
:placeholder{class="h-full min-h-48"}
::

### Einfügung: badge{label="4.3+" class="align-text-top"}

Verwenden Sie die `inset`-Stütze, um den Slideover von den Rändern zu setzen.

::component-code
---
prettier: true
ignore:
  - title
props:
  side: 'right'
  inset: true
  title: 'Slideover with inset'
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" />

  body: |

    <Placeholder class="min-w-96 min-h-96 size-full" />
---

:u-button{label="öffnen" color="neutral" variant="subtle"}

#body
:placeholder{class="min-w-96 min-h-96 size-full"}
::

### Transition Übersetzung

Verwenden Sie die `transition`-prop, um zu steuern, ob der Slideover animiert ist oder nicht. Standardmäßig `true`.

::component-code
---
prettier: true
ignore:
  - title
props:
  transition: false
  title: 'Slideover without transition'
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

### Overlay Bearbeiten

Verwenden Sie die `overlay`-prop, um zu steuern, ob der Slideover ein Overlay hat oder nicht.

::component-code
---
prettier: true
ignore:
  - title
props:
  overlay: false
  title: 'Slideover without overlay'
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

### Modal Bearbeiten

Verwenden Sie die `modal`-Prop, um zu steuern, ob der Slideover die Interaktion mit externen Inhalten blockiert.

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
  title: 'Slideover interactive'
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

### Dismissible (nicht zulässig)

Verwenden Sie die `dismissible`-prop, um zu steuern, ob das Slideover unzulässig ist, wenn Sie außerhalb davon klicken oder escape drücken.

::note
Ein `close:prevent`-Ereignis wird ausgelöst, wenn der Benutzer versucht, es zu schließen.
::

::tip
Sie können `modal: false` mit `dismissible: false` kombinieren, um den Hintergrund des Slideovers interaktiv zu gestalten, ohne ihn zu schließen.
::

::component-code
---
prettier: true
ignore:
  - title
props:
  dismissible: false
  modal: true
  title: 'Slideover non-dismissible'
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

Verwenden Sie die `unmount-on-hide`-Prop, um zu verhindern, dass der Inhalt des Slideovers beim Schließen nicht mehr eingehängt wird.

::component-code
---
prettier: true
ignore:
  - title
props:
  unmountOnHide: false
  title: 'Slideover'
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

::note
Sie können das DOM überprüfen, um zu sehen, wie der Inhalt des Slideovers gerendert wird, auch wenn es geschlossen ist.
::

::tip
Wenn die `portal`-prop auf `false` gesetzt ist, wird der Inhalt auch auf dem Server gerendert. Dies ist nützlich, um ein geöffnetes Slideover während SSR ohne Flash beim Laden der Seite zu rendern oder um den Inhalt für SEO freizugeben.
::

## Examples (Deutsche Übersetzung)

### Control Open State (englisch)

Sie können den offenen Zustand mit der `default-open`-prop-oder der `v-model:open`-Anweisung steuern.

::component-example
---
name: 'slideover-open-example'
---
::

::note
In diesem Beispiel können Sie unter Nutzung von [`defineShortcuts`](/docs/composables/define-shortcuts) die Slideover umschalten, indem Sie: kbd{value="O"}.
::

::tip
Auf diese Weise können Sie den Auslöser außerhalb des Slideovers verschieben oder vollständig entfernen.
::

### Programmatic Verwendung

Sie können das Composable [`useOverlay`](/docs/composables/use-overlay) verwenden, um ein Slideover programmatisch zu öffnen.

::warning
Stellen Sie sicher, dass Sie Ihre App mit der Komponente [`App`](/docs/components/app) umschließen, die die Komponente [`OverlayProvider`](https://github.com/nuxt/ui/blob/v4/src/runtime/components/OverlayProvider.vue) verwendet.
::

Erstellen Sie zunächst eine Slideover-Komponente, die programmgesteuert geöffnet wird:

::component-example
---
prettier: true
name: 'slideover-example'
preview: false
---
::

::note
Wir senden ein `close`-Ereignis aus, wenn der Slideover hier geschlossen oder verworfen wird. Sie können beliebige Daten über das `close`-Ereignis ausgeben, und diese Daten werden zum aufgelösten Wert von `open()`. Das Ereignis muss ausgegeben werden, damit das Versprechen aufgelöst werden kann.
::

Dann nutzen Sie es in Ihrer App:

::component-example
---
name: 'slideover-programmatic-example'
---
::

::tip
Sie können den Slideover in der Slideover-Komponente schließen, indem Sie `emit('close')` ausgeben.
::

### Verschachtelte Slideover

So könnt ihr euch untereinander verschachteln.

::component-example
---
name: 'slideover-nested-example'
---
::

### Mit Footer-Slot

Verwenden Sie den `#footer`-Slot, um Inhalte nach dem Slideover-Body hinzuzufügen.

::component-example
---
name: 'slideover-footer-slot-example'
---
::

## API (Englisch)

### Props (nicht)

:component-props

### Slots (englisch)

:component-slots

### Emits Bearbeiten

:component-emits

## Theme Bearbeiten

:component-theme

## Changelog (englisch)

:component-changelog
