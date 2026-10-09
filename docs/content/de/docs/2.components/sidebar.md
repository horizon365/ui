---
description: 'Eine zusammenklappbare Seitenleiste mit mehreren visuellen Varianten.'
category: layout
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Sidebar.vue
---

## Bearbeiten

Die Sidebar-Komponente ist eine eigenständige, feste Seitenleiste, die den Seiteninhalt verschiebt. Auf dem Desktop rendert sie inline und kann zusammengeklappt werden; auf dem Handy öffnet sie eine [Modal](/docs/components/modal), [Slideover](/docs/components/slideover) oder [Drawer](](/docs/components/drawer) Komponente.

::tip{to="/docs/components/dashboard-sidebar"}
**Sidebar vs DashboardSidebar**: Diese Komponente ist eine einfache, eigenständige Sidebar, die Sie überall ablegen können (Chat-Panel, Einstellungen, Navigation). Wenn Sie Drag-to-Size, State Persistenz und Integration mit [DashboardGroup](/docs/components/dashboard-group) benötigen, verwenden Sie stattdessen [DashboardSidebar](/docs/components/dashboard-sidebar).
::

Verwenden Sie die Slots `header`, `default` und `footer`, um den Inhalt der Seitenleiste anzupassen. Die Direktive `v-model:open` ist viewport-fähig: Auf dem Desktop steuert sie den erweiterten/reduzierten Zustand, auf dem Handy steuert sie das Menü.

::component-example
---
collapse: true
prettier: true
name: 'sidebar-example'
overflowHidden: true
class: '!p-0 !justify-start h-[500px] contain-[paint] transform-gpu'
---
::

### Variant Bearbeiten

Verwenden Sie die `variant`-prop, um den visuellen Stil der Seitenleiste zu ändern. Standardmäßig ist `sidebar`.

::component-example
---
collapse: true
prettier: true
name: 'sidebar-props-example'
overflowHidden: true
options:
  - name: 'variant'
    label: 'variant'
    items:
      - sidebar
      - floating
      - inset
    default: 'inset'
class: '!p-0 !justify-start h-[500px] contain-[paint] transform-gpu'
---
::

### Collapsible ist

Verwenden Sie die `collapsible`-Prop, um das Kollapsverhalten der Seitenleiste zu ändern. Standardmäßig ist `offcanvas`.

- `offcanvas`: Die Seitenleiste wird vollständig aus dem Blickfeld verschoben.
- `icon`: Die Sidebar schrumpft auf die reine Symbolbreite.
- `none`: Die Seitenleiste ist nicht zusammenklappbar.

::component-example
---
collapse: true
prettier: true
name: 'sidebar-props-example'
overflowHidden: true
options:
  - name: 'collapsible'
    label: 'collapsible'
    items:
      - offcanvas
      - icon
      - none
    default: 'icon'
  - name: 'variant'
    label: 'variant'
    items:
      - sidebar
      - floating
      - inset
    default: 'sidebar'
class: '!p-0 !justify-start h-[500px] contain-[paint] transform-gpu'
---
::

::tip{to="#slots"}
Sie können auf die `state` in den Slot-Requisiten zugreifen, um den Inhalt der Seitenleiste anzupassen, wenn sie zusammengeklappt ist.
::

### Side

Verwenden Sie die `side`-prop, um die Seite der Seitenleiste zu ändern. Standardmäßig ist `left`.

::component-example
---
collapse: true
prettier: true
name: 'sidebar-props-example'
overflowHidden: true
options:
  - name: 'side'
    label: 'side'
    items:
      - left
      - right
    default: 'right'
class: '!p-0 !justify-start h-[500px] contain-[paint] transform-gpu'
---
::

### Titel

Verwenden Sie die `title`-Prop, um den Titel des Sidebar-Headers festzulegen.

::component-code
---
prettier: true
hide:
  - class
  - ui
ignore:
  - ui.container
props:
  title: Navigation
  ui:
    container: h-full
slots:
  default: |

    <Placeholder class="h-full" />
class: '!p-0 !justify-start h-[500px] contain-[paint] transform-gpu'
---

:placeholder{class="h-full"}
::

### Beschreibung

Verwenden Sie die `description`-Prop, um die Beschreibung des Sidebar-Headers festzulegen.

::component-code
---
prettier: true
hide:
  - class
  - ui
ignore:
  - title
  - ui.container
props:
  title: Navigation
  description: Browse your workspace
  ui:
    container: h-full
slots:
  default: |

    <Placeholder class="h-full" />
class: '!p-0 !justify-start h-[500px] contain-[paint] transform-gpu'
---

:placeholder{class="h-full"}
::

### Rail (englisch)

Verwenden Sie die `rail`-Prop, um eine dünne interaktive Kante in der Seitenleiste anzuzeigen, die beim Klicken den zusammengebrochenen Zustand umschaltet. Die Schiene wird nur gerendert, wenn `collapsible` nicht `none` ist.

::component-code
---
prettier: true
ignore:
  - title
  - ui.container
hide:
  - ui
  - class
props:
  rail: true
  collapsible: icon
  title: Navigation
  ui.container: h-full
slots:
  default: |

    <Placeholder class="h-full" />
class: '!p-0 !justify-start h-[500px] contain-[paint] transform-gpu'
---

:placeholder{class="h-full"}
::

### Close

Verwenden Sie die `close`-Prop, um eine Schließen-Schaltfläche im Sidebar-Header anzuzeigen. Die Schließen-Schaltfläche wird nur gerendert, wenn `collapsible` nicht `none` ist.

Sie können jede Eigenschaft der Komponente [Button](/docs/components/button) übergeben, um sie anzupassen.

::component-code
---
prettier: true
ignore:
  - title
  - rail
  - ui.container
hide:
  - ui
  - class
props:
  close: true
  rail: true
  collapsible: icon
  title: Navigation
  ui:
    container: h-full
items:
  close:
    - true
    - false
slots:
  default: |

    <Placeholder class="h-full" />
class: '!p-0 !justify-start h-[500px] contain-[paint] transform-gpu'
---

:placeholder{class="h-full"}
::

### Schließen Icon

Verwenden Sie die `close-icon`-Prop, um die Schließen-Taste [Icon](/docs/components/icon). Defaults auf `i-lucide-x`.

::component-code
---
prettier: true
ignore:
  - title
  - rail
  - side
  - close
  - ui.container
hide:
  - ui
  - class
props:
  close: true
  closeIcon: i-lucide-panel-right-close
  rail: true
  collapsible: icon
  side: right
  title: Navigation
  ui:
    container: h-full
items:
  close:
    - true
    - false
slots:
  default: |

    <Placeholder class="h-full" />
class: '!p-0 !justify-start h-[500px] contain-[paint] transform-gpu'
---

:placeholder{class="h-full"}
::

::framework-only
#nuxt
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
Sie können dieses Symbol global in Ihrem `app.config.ts` unter `ui.icons.close` Schlüssel anpassen.
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
Sie können dieses Symbol global in Ihrem `vite.config.ts` unter dem `ui.icons.close`-Schlüssel anpassen.
:::
::

### Mode ist

Verwenden Sie die `mode`-prop, um den Modus des Seitenleistenmenüs auf mobile zu ändern. Standardmäßig auf `slideover`.

::component-example
---
collapse: true
iframe:
  height: 500px;
iframeMobile: true
overflowHidden: true
name: 'sidebar-mode-example'
options:
  - name: 'mode'
    label: 'mode'
    default: 'slideover'
    items:
      - modal
      - slideover
      - drawer
props:
  class: 'w-full'
---
::

::tip{to="#props"}
Sie können die `menu`-prop verwenden, um das Menü der Seitenleiste anzupassen, es wird sich je nach dem von Ihnen gewählten Modus anpassen.
::

## Examples [Bearbeiten]

### Control im offenen Zustand

Sie können den offenen Zustand steuern, indem Sie die `open` prop oder die `v-model:open` Direktive verwenden. Auf dem Desktop steuert es den expandierten/kollabierten Zustand, auf dem Handy öffnet/schließt es das Blattmenü.

::component-example
---
collapse: true
prettier: true
name: 'sidebar-open-example'
overflowHidden: true
class: '!p-0 !justify-start h-[500px] contain-[paint] transform-gpu'
---
::

::note
In diesem Beispiel können Sie unter Nutzung von [`defineShortcuts`](/docs/composables/define-shortcuts) den offenen Status der Sidebar durch Drücken von kbd{value="O"} umschalten.
::

### Persistieren im offenen Zustand

Verwenden Sie [`useLocalStorage`](https://vueuse.org/core/useLocalStorage/) von VueUse oder [`useCookie`](https://nuxt.com/docs/4.x/api/composables/use-cookie) anstelle von `ref`, um den Sidebar-Status über das Nachladen der Seite hinweg beizubehalten.

::component-example
---
collapse: true
prettier: true
name: 'sidebar-persist-example'
overflowHidden: true
class: '!p-0 !justify-start h-[500px] contain-[paint] transform-gpu'
---
::

::note
Der einzige Unterschied zum vorherigen Beispiel ist das Ersetzen von `ref(true)` durch `useLocalStorage('sidebar-open', true)`.
::

### With custom width Benutzerdefinierte Breite

Die Breite der Seitenleiste wird durch die CSS-Variable `--sidebar-width` gesteuert (Standardeinstellung ist `16rem`). Die reduzierte Symbolbreite wird von `--sidebar-width-icon` gesteuert (Standardeinstellung ist `4rem`).

Überschreiben Sie sie global in Ihrem CSS oder pro Instanz mit dem Attribut `style`.

::component-example
---
collapse: true
prettier: true
name: 'sidebar-width-example'
overflowHidden: true
class: '!p-0 !justify-start h-[500px] contain-[paint] transform-gpu'
---
::

### With header (englisch)

Um die Seitenleiste unter einem [Header](/docs/components/header) zu positionieren, passen Sie die `gap` und `container` mit der `ui`-Prop an.

::component-example
---
collapse: true
prettier: true
name: 'sidebar-header-example'
overflowHidden: true
class: '!p-0 !justify-start h-[500px] contain-[paint] transform-gpu'
---
::

::note
Die Variable `--ui-header-height` ist standardmäßig auf `4rem` eingestellt und wird vom Header verwendet. Passen Sie sie an, wenn Ihre Navigationsleiste eine andere Höhe verwendet.
::

### Mit KI Chat

Verwenden Sie die Seitenleiste auf der rechten Seite mit [ChatMessages](xph32x) und [ChatPrompt](/docs/components/chat-promptxph37x, um ein AI-Chat-Panel zu erstellen.

::component-example
---
collapse: true
prettier: true
name: 'sidebar-chat-example'
overflowHidden: true
class: '!p-0 !justify-start h-[500px] contain-[paint] transform-gpu'
---
::

## API Bearbeiten

### Props (nicht)

:component-props

### Slots (englisch)

:component-slots

## Theme Bearbeiten

:component-theme

## Changelog (englisch)

:component-changelog
