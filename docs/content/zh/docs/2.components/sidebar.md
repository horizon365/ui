---
description: '一个可折叠的侧边栏与多个视觉变量。'
category: layout
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Sidebar.vue
---

## 用法

侧边栏组件是一个独立的、固定的侧边栏，用于推送页面内容。在桌面上，它可以内联呈现，也可以折叠;在移动的上，它可以打开[Modal](/docs/components/modal)、[Slideover](/docs/components/slideover)或[Drawer](/docs/components/drawer)组件。

::tip{to="/docs/components/dashboard-sidebar"}
**Sidebar vs DashboardSidebar**：这个组件是一个简单的独立侧边栏，你可以放在任何地方（聊天面板，设置，导航）。如果你需要拖动调整大小，状态持久化和与[DashboardGroup](/docs/components/dashboard-group)集成，请使用[DashboardSidebar](/docs/components/dashboard-sidebar)。
::

使用`header`、`default`和`footer`插槽来自定义侧边栏内容。`v-model:open`指令是视口感知的：在桌面上它控制展开/折叠状态，在移动的上它控制菜单。

::component-example
---
collapse: true
prettier: true
name: 'sidebar-example'
overflowHidden: true
class: '!p-0 !justify-start h-[500px] contain-[paint] transform-gpu'
---
::

### Variant

使用`variant`属性将侧边栏. xml 2的视觉样式更改为`sidebar`。

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

### 可折叠

使用`collapsible`属性将侧边栏. xml 2的折叠行为更改为`offcanvas`。

- `offcanvas`：侧边栏完全滑出视图。
- `icon`：侧边栏缩小到图标宽度。
- `none`：侧边栏不可折叠。

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
您可以在插槽道具中访问`state`，以自定义边栏折叠时的内容。
::

### Side

使用`side`属性将侧边栏的边更改为`left`。

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

### 标题

使用`title`属性设置侧边栏标题。

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

### 说明

使用`description` prop设置侧边栏标题的描述。

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

### Rail

使用`rail`属性在侧边栏上显示一条交互式的窄边，点击时切换折叠状态。只有当`collapsible`不是`none`时，才会呈现栏杆。

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

### 关闭

使用`close` prop在侧边栏标题中显示关闭按钮。关闭按钮仅在`collapsible`不是`none`时呈现。

您可以从[Button](/docs/components/button)组件传递任何属性来对其进行自定义。

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

### 关闭图标

使用`close-icon`道具自定义关闭按钮[Icon](/docs/components/icon).exe到`i-lucide-x`。

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
你可以在你的`app.config.ts`下的`ui.icons.close`键全局自定义这个图标。
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
你可以在你的`vite.config.ts`下的`ui.icons.close`键全局自定义这个图标。
:::
::

### Mode

使用`mode`属性将移动的. exe上的侧边栏菜单的模式更改为`slideover`。

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
您可以使用`menu`道具来自定义侧边栏的菜单，它会根据您选择的模式进行调整。
::

## 示例

### 控制打开状态

您可以使用`open` prop或`v-model:open`指令控制打开状态。在桌面上，它控制展开/折叠状态，在移动的上，它打开/关闭工作表菜单。

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
在此示例中，利用[`defineShortcuts`](/docs/composables/define-shortcuts)，您可以通过按：kbd{value="O"}切换侧边栏的打开状态。
::

### Persistopen state

使用VueUse的[`useLocalStorage`](https://vueuse.org/core/useLocalStorage/)或[`useCookie`](https://nuxt.com/docs/4.x/api/composables/use-cookie)而不是`ref`来在页面重新加载时保持侧边栏状态。

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
与前一个示例的唯一区别是将`ref(true)`替换为`useLocalStorage('sidebar-open', true)`。
::

### 自定义宽度

侧边栏宽度由`--sidebar-width` CSS变量控制（默认为`16rem`）。折叠图标宽度由`--sidebar-width-icon`控制（默认为`4rem`）。

在CSS中全局重命名它们，或者使用`style`属性按实例重命名它们。

::component-example
---
collapse: true
prettier: true
name: 'sidebar-width-example'
overflowHidden: true
class: '!p-0 !justify-start h-[500px] contain-[paint] transform-gpu'
---
::

### 带标题

要将侧边栏定位在[Header](/docs/components/header)下方，请使用`ui`属性自定义`gap`和`container`。

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
`--ui-header-height`变量默认为`4rem`，用于页眉。如果您的导航栏使用不同的高度，请调整它。
::

### 带AI聊天

使用[ChatMessages](/docs/components/chat-messages)和[ChatMessages](/docs/components/chat-prompt)右侧的侧边栏创建AI聊天面板。

::component-example
---
collapse: true
prettier: true
name: 'sidebar-chat-example'
overflowHidden: true
class: '!p-0 !justify-start h-[500px] contain-[paint] transform-gpu'
---
::

## API

### Props

:component-props

### Slots

:component-slots

## Theme

:component-theme

## Changelog

:component-changelog
