---
description: Ein zusammenklappbares Element, um die Sichtbarkeit seines Inhalts zu ändern.
category: element
keywords:
  - disclosure
  - expand
links:
  - label: Kollapsfähig
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/collapsible
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Collapsible.vue
---

## Bearbeiten

Verwenden Sie einen [Button](/docs/components/button) oder eine andere Komponente im Standard-Slot des Collapsible.

Verwenden Sie dann den `#content`-Steckplatz, um den Inhalt hinzuzufügen, der angezeigt wird, wenn der Collapsible geöffnet ist.

::component-code
---
prettier: true
ignore:
  - class
props:
  class: 'flex flex-col gap-2 w-48'
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-down" block />

  content: |

    <Placeholder class="h-48" />
---

:u-button{label="öffnen" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-down" block}

#content
:placeholder{class="h-48"}
::

### Unmount nicht verfügbar

Verwenden Sie die `unmount-on-hide`-Prop, um zu verhindern, dass der Inhalt nicht mehr eingehängt wird, wenn das Collapsible zusammengeklappt wird. Standardmäßig ist `true`.

::component-code
---
prettier: true
ignore:
  - class
props:
  unmountOnHide: false
  class: 'flex flex-col gap-2 w-48'
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-down" block />

  content: |

    <Placeholder class="h-48" />
---

:u-button{label="öffnen" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-down" block}

#content
:placeholder{class="h-48"}
::

::note
Sie können das DOM inspizieren, um zu sehen, wie der Inhalt gerendert wird.
::

### Disabled (nicht verfügbar)

Verwenden Sie die `disabled`-Prop, um das Collapsible zu deaktivieren.

::component-code
---
prettier: true
ignore:
  - class
props:
  class: 'flex flex-col gap-2 w-48'
  disabled: true
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-down" block />

  content: |

    <Placeholder class="h-48" />
---

:u-button{label="öffnen" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-down" block}

#content
:placeholder{class="h-48"}
::

## Examples [Bearbeiten]

### Control im offenen Zustand

Sie können den offenen Zustand mithilfe der Direktive `default-open` prop oder der Direktive `v-model:open` steuern.

::component-example
---
name: 'collapsible-open-example'
---
::

::note
In diesem Beispiel können Sie unter Nutzung von [`defineShortcuts`](/docs/composables/define-shortcuts) das Kollapsible durch Drücken von: kbd{value="O"} umschalten.
::

::tip
Auf diese Weise können Sie den Auslöser außerhalb des Kollapsiblen verschieben oder vollständig entfernen.
::

### Mit rotierendem Symbol

Hier ist ein Beispiel mit einem rotierenden Symbol im Button, das den offenen Zustand des Collapsible anzeigt.

::component-example
---
name: 'collapsible-icon-example'
---
::

## API (Englisch)

### Props Bearbeiten

:component-props

### Slots Bearbeiten

:component-slots

### Emits (nicht)

:component-emits

## Theme Bearbeiten

:component-theme

## Changelog (englisch)

:component-changelog
