---
description: 一个抽屉，顺利地滑进和滑出屏幕。
category: overlay
keywords:
  - bottom sheet
  - action sheet
  - mobile sheet
links:
  - label: 抽屉
    icon: i-custom-reka-ui
    to: https://github.com/unovue/vaul-vue
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Drawer.vue
---

## 用法

在抽屉的默认插槽中使用[Button](/docs/components/button)或任何其他组件。

然后，使用`#content`插槽添加抽屉打开时显示的内容。

::component-code
---
prettier: true
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up" />

  content: |

    <Placeholder class="h-48 m-4" />
---

:u-button{label="开放" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up"}

#content
:placeholder{class="h-48 m-4"}
::

您还可以使用`#header`{lang="ts-type"}、`#body`{lang="ts-type"}和`#footer`{lang="ts-type"}插槽来自定义抽屉的内容。

### 标题

使用`title`属性设置Drawer的标题。

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

:u-button{label="开放" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up"}

#body
:placeholder{class="h-48"}
::

### 说明

使用`description`属性设置Drawer的标题的描述。

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

:u-button{label="开放" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up"}

#body
:placeholder{class="h-48"}
::

### 关闭：badge{label="4.10+" class="align-text-top"}

使用`close`属性在`false`的Drawer.exe中显示一个关闭按钮。

您可以从[Button](/docs/components/button)组件传递任何属性来对其进行自定义。

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

:u-button{label="开放" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up"}

#body
:placeholder{class="h-48"}
::

### 关闭图标：badge{label="4.10+" class="align-text-top"}

使用`close-icon`道具自定义关闭按钮[Icon](/docs/components/icon).`i-lucide-x`。

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

:u-button{label="开放" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up"}

#body
:placeholder{class="h-48"}
::

### 方向

使用`direction`道具来控制抽屉的方向。

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

:u-button{label="开放" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up"}

#content
:placeholder{class="min-w-96 min-h-96 size-full m-4"}
::

### Inset

使用`inset`道具从边缘插入抽屉。

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

:u-button{label="开放" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up"}

#content
:placeholder{class="min-w-96 min-h-96 size-full m-4"}
::

### 手柄

使用`handle`属性来控制抽屉是否有句柄。将其转换为`true`。

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

:u-button{label="开放" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up"}

#content
:placeholder{class="h-48 m-4"}
::

### 仅手柄

使用`handle-only`属性仅允许通过手柄拖动抽屉。

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

:u-button{label="开放" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up"}

#content
:placeholder{class="h-48 m-4"}
::

### 叠加

使用`overlay`属性来控制抽屉是否有覆盖。将其转换为`true`。

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

:u-button{label="开放" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up"}

#content
:placeholder{class="h-48 m-4"}
::

### Modal

使用`modal`属性来控制抽屉是否阻止与外部内容的交互。

::note
当`modal`设置为`false`时，叠加将自动禁用，外部内容将变得交互式。
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

:u-button{label="开放" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up"}

#content
:placeholder{class="h-48 m-4"}
::

### 可忽略

使用`dismissible`属性来控制当在抽屉外单击或按escape. `true`时抽屉是否被禁用。

::note
当用户试图关闭它时，将发出`close:prevent`事件。
::

::tip
您可以将联合收割机`modal: false`与`dismissible: false`结合使用，使抽屉的背景具有交互性，而无需关闭它。
::

::component-example
---
prettier: true
name: 'drawer-dismissible-example'
---
::

### Scale背景

当抽屉打开时，使用`should-scale-background`道具缩放背景，创建视觉深度效果。您可以将`set-background-color-on-scale`道具设置为`false`，以防止更改背景颜色。

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

:u-button{label="开放" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up"}

#content
:placeholder{class="h-screen m-4"}
::

::warning
确保将`data-vaul-drawer-wrapper`指令添加到应用的父元素中以使其工作。

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

## 示例

### 控制打开状态

您可以使用`default-open` prop或`v-model:open`指令控制打开状态。

::component-example
---
prettier: true
name: 'drawer-open-example'
---
::

::note
在本例中，利用[`defineShortcuts`](/docs/composables/define-shortcuts)，您可以通过按：kbd{value="O"}来切换抽屉。
::

::tip
这使您可以将触发器移出抽屉或将其完全移除。
::

### 响应式抽屉

例如，您可以在桌面上渲染[Modal](/docs/components/modal)组件，在移动的上渲染Drawer。

::component-example
---
prettier: true
name: 'drawer-responsive-example'
---
::

### 嵌套抽屉

您可以使用`nested`属性嵌套抽屉。

::component-example
---
prettier: true
name: 'drawer-nested-example'
---
::

### 带页脚插槽

使用`#footer`插槽在Drawer的主体之后添加内容。

::component-example
---
prettier: true
collapse: true
name: 'drawer-footer-slot-example'
---
::

### 带命令调色板

您可以在Drawer的内容中使用[CommandPalette](/docs/components/command-palette)组件。

::component-example
---
collapse: true
name: 'drawer-command-palette-example'
---
::

::note
本例使用`useLazyFetch`和`immediate: false`，仅在Drawer打开时获取数据。
::

## API

### Props

:component-props

### Slots

:component-slots

### Emits

:component-emits

## Theme

:component-theme

## Changelog

:component-changelog
