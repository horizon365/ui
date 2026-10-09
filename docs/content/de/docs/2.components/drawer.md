---
description: Eine Schublade, die reibungslos in und aus dem Bildschirm gleitet.
category: overlay
keywords:
  - bottom sheet
  - action sheet
  - mobile sheet
links:
  - label: Dracher
    icon: i-custom-reka-ui
    to: https://github.com/unovue/vaul-vue
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Drawer.vue
---

## Bearbeiten

Verwenden Sie einen [Button](/docs/components/button) oder eine andere Komponente im Standardsteckplatz der Schublade.

Verwenden Sie dann den Steckplatz `#content`, um den Inhalt hinzuzufügen, der angezeigt wird, wenn die Schublade geöffnet ist.

::component-code
---
prettier: true
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up" />

  content: |

    <Placeholder class="h-48 m-4" />
---

:u-button{label="öffnen" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up"}

#content
:placeholder{class="h-48 m-4"}
::

Sie können auch die Slots `#header`{lang="ts-type"}, `#body`{lang="ts-type"} und `#footer`{lang="ts-type"} verwenden, um den Inhalt der Schublade anzupassen.

### title

Verwenden Sie die `title`-prop, um den Titel des Schubladenkopfes festzulegen.

::component-code
---
prettier: true
props:
  title: 'Drawer with title'
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up" />

  body: |

    <Placeholder class="h-48" />
---

:u-button{label="öffnen" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up"}

#body
:placeholder{class="h-48"}
::

### Beschreibung

Verwenden Sie die `description`-prop, um die Beschreibung des Schubladenkopfes festzulegen.

::component-code
---
prettier: true
ignore:
  - title
props:
  title: 'Drawer with description'
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up" />

  body: |

    <Placeholder class="h-48" />
---

:u-button{label="öffnen" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up"}

#body
:placeholder{class="h-48"}
::

### Close: badge{label="4.10+" class="align-text-top"} (geschlossen)

Verwenden Sie die `close`-Stütze, um eine Schließen-Taste in der Schublade anzuzeigen. Standardmäßig ist `false`.

Sie können jede Eigenschaft der Komponente [Button](/docs/components/button) übergeben, um sie anzupassen.

::component-code
---
prettier: true
ignore:
  - title
  - close.color
  - close.variant
props:
  title: 'Drawer with close button'
  close:
    color: primary
    variant: outline
    class: 'rounded-full'
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up" />

  body: |

    <Placeholder class="h-48" />
---

:u-button{label="öffnen" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up"}

#body
:placeholder{class="h-48"}
::

### Schließen Icon: badge{label="4.10+" class="align-text-top"}

Verwenden Sie die `close-icon`-Prop, um die Schließen-Taste [Icon](/docs/components/icon). Defaults auf `i-lucide-x` anzupassen.

::component-code
---
prettier: true
ignore:
  - title
props:
  title: 'Drawer with close button'
  close: true
  closeIcon: 'i-lucide-arrow-right'
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up" />

  body: |

    <Placeholder class="h-48" />
---

:u-button{label="öffnen" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up"}

#body
:placeholder{class="h-48"}
::

### Direction Bearbeiten

Verwenden Sie die `direction`-Stütze, um die Richtung der Schublade zu steuern. Standardmäßig `bottom`.

::component-code
---
prettier: true
props:
  direction: 'right'
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up" />

  content: |

    <Placeholder class="min-w-96 min-h-96 size-full m-4" />
---

:u-button{label="öffnen" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up"}

#content
:placeholder{class="min-w-96 min-h-96 size-full m-4"}
::

### Inset ist

Verwenden Sie die `inset`-Stütze, um die Schublade von den Kanten zu setzen.

::component-code
---
prettier: true
props:
  direction: 'right'
  inset: true
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up" />

  content: |

    <Placeholder class="min-w-96 min-h-96 size-full m-4" />
---

:u-button{label="öffnen" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up"}

#content
:placeholder{class="min-w-96 min-h-96 size-full m-4"}
::

### Handle Bearbeiten

Verwenden Sie die `handle`-Stütze, um zu steuern, ob die Schublade einen Griff hat oder nicht. Standardmäßig `true`.

::component-code
---
prettier: true
props:
  handle: false
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up" />

  content: |

    <Placeholder class="h-48 m-4" />
---

:u-button{label="öffnen" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up"}

#content
:placeholder{class="h-48 m-4"}
::

### Handle Nur für die

Verwenden Sie die `handle-only`-Stütze, um die Schublade nur am Griff ziehen zu lassen.

::component-code
---
prettier: true
props:
  handleOnly: true
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up" />

  content: |

    <Placeholder class="h-48 m-4" />
---

:u-button{label="öffnen" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up"}

#content
:placeholder{class="h-48 m-4"}
::

### Overlay (Überladen)

Verwenden Sie die `overlay`-Stütze, um zu steuern, ob die Schublade eine Überlagerung hat oder nicht. Standardmäßig `true`.

::component-code
---
prettier: true
props:
  overlay: false
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up" />

  content: |

    <Placeholder class="h-48 m-4" />
---

:u-button{label="öffnen" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up"}

#content
:placeholder{class="h-48 m-4"}
::

### Modal Bearbeiten

Verwenden Sie die `modal`-prop, um zu steuern, ob die Schublade die Interaktion mit externen Inhalten blockiert. Standardmäßig ist `true`.

::note
Wenn `modal` auf `false` gesetzt ist, wird das Overlay automatisch deaktiviert und externe Inhalte werden interaktiv.
::

::component-code
---
prettier: true
props:
  modal: false
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up" />

  content: |

    <Placeholder class="h-48 m-4" />
---

:u-button{label="öffnen" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up"}

#content
:placeholder{class="h-48 m-4"}
::

### Dismissible (nicht zulässig)

Verwenden Sie die `dismissible`-Stütze, um zu steuern, ob die Schublade deaktiviert werden kann, wenn Sie außerhalb der Schublade klicken oder escape drücken.

::note
Ein `close:prevent`-Ereignis wird ausgegeben, wenn der Benutzer versucht, es zu schließen.
::

::tip
Sie können `modal: false` mit `dismissible: false` kombinieren, um den Hintergrund der Schublade interaktiv zu gestalten, ohne sie zu schließen.
::

::component-example
---
prettier: true
name: 'drawer-dismissible-example'
---
::

### Scale Hintergrundbilder

Verwenden Sie die `should-scale-background` prop, um den Hintergrund zu skalieren, wenn die Schublade geöffnet ist, wodurch ein visueller Tiefeneffekt entsteht. Sie können die `set-background-color-on-scale` prop auf `false` setzen, um eine Änderung der Hintergrundfarbe zu verhindern.

::component-code
---
prettier: true
props:
  shouldScaleBackground: true
  setBackgroundColorOnScale: true
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up" />

  content: |

    <Placeholder class="h-48 m-4" />
---

:u-button{label="öffnen" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up"}

#content
:placeholder{class="h-screen m-4"}
::

::warning
Stellen Sie sicher, dass Sie die `data-vaul-drawer-wrapper`-Direktive zu einem übergeordneten Element Ihrer App hinzufügen, damit dies funktioniert.

```vue [app.vue]
<template>
  <UApp>
    <div class="bg-default" data-vaul-drawer-wrapper>
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </div>
  </UApp>
</template>
```

```ts [nuxt.config.ts]
export default defineNuxtConfig({
  app: {
    rootAttrs: {
      'data-vaul-drawer-wrapper': '',
      'class': 'bg-default'
    }
  }
})
```

::

## Examples [Bearbeiten]

### Control im Open State

Sie können den offenen Zustand mit der `default-open`-prop-oder der `v-model:open`-Direktive steuern.

::component-example
---
prettier: true
name: 'drawer-open-example'
---
::

::note
In diesem Beispiel können Sie unter Nutzung von [`defineShortcuts`](/docs/composables/define-shortcuts) die Schublade umschalten, indem Sie: kbd{value="O"} drücken.
::

::tip
Auf diese Weise können Sie den Auslöser außerhalb der Schublade bewegen oder vollständig entfernen.
::

### Responsive Drawer für iOS

Sie können beispielsweise eine [Modal](/docs/components/modal)-Komponente auf dem Desktop und eine Schublade auf dem Handy rendern.

::component-example
---
prettier: true
name: 'drawer-responsive-example'
---
::

### Verschachtelte Schubladen

Sie können Schubladen miteinander verschachteln, indem Sie die `nested`-Stütze verwenden.

::component-example
---
prettier: true
name: 'drawer-nested-example'
---
::

### Mit Footer-Slot

Verwenden Sie den `#footer`-Steckplatz, um Inhalt nach dem Schubladenkörper hinzuzufügen.

::component-example
---
prettier: true
collapse: true
name: 'drawer-footer-slot-example'
---
::

### Mit der Befehlspalette

Sie können eine [CommandPalette](/docs/components/command-palette)-Komponente innerhalb des Inhalts der Schublade verwenden.

::component-example
---
collapse: true
name: 'drawer-command-palette-example'
---
::

::note
In diesem Beispiel wird `useLazyFetch` mit `immediate: false` verwendet, um Daten nur beim Öffnen der Schublade abzurufen.
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

## Changelog (englisch)

:component-changelog
