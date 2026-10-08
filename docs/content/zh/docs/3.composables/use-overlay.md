---
title: useOverlay
description: '一个可组合的以编程方式控制覆盖。'
---

## 使用情况

使用自动导入的`useOverlay`组合件以编程方式控制[Modal](/docs/components/modal)和[Slideover](/docs/components/slideover)组件。

::component-example
---
name：'use-overlay-example'
---
::

- `useOverlay`可组合件是使用`createSharedComposable`创建的，可确保在整个应用程序中共享相同的覆盖状态。

::note
等待`overlay.open()`从覆盖中获取值。这仅在**overlay组件发出`close`事件**时有效。有关详细信息，请参阅下面的示例。
::

## API

`useOverlay()`{lang="ts-type"}

`useOverlay`composable提供了全局管理overlay的方法。每个创建的overlay都返回一个带有自己方法的实例。

### create（）

`create(component: T, options?: OverlayOptions<ComponentProps<T>>): OverlayInstance<T>`{lang="ts-type"}

创建一个覆盖，并返回一个工厂实例。

#### Parameters

::field-group

  ::field{name="component" type="T" required}
  要呈现的覆盖组件。
  ::

  ::field{name="options" type="OverlayOptions"}
  覆盖的配置选项。

    ::collapsible

      ::field-group
        ::field{name="defaultOpen" type="boolean"}
        创建后立即打开覆盖图。将其复制到`false`。
        ::

        ::field{name="props" type="ComponentProps"}
        一个可选的props对象，传递给呈现组件。
        ::

        ::field{name="destroyOnClose" type="boolean"}
        关闭时，从内存中删除覆盖。删除到`false`。
        ::
      ::
    ::
  ::
::

### open（）

`open(id: symbol, props?: ComponentProps<T>): OpenedOverlay<T>`{lang="ts-type"}

通过其`id`打开覆盖。

#### Parameters

::field-group
  ::field{name="id" type="symbol" required}
  覆盖的标识符。
  ::

  ::field{name="props" type="ComponentProps<T>"}
  一个可选的props对象，传递给呈现组件。
  ::
::

### close（）

`close(id: symbol, value?: any): void`{lang="ts-type"}

关闭其`id`的叠加层。

#### Parameters

::field-group
  ::field{name="id" type="symbol" required}
  覆盖的标识符。
  ::

  ::field{name="value" type="any"}
  用于解析覆盖承诺的值。
  ::
::

### closeAll（）

`closeAll(): void`{lang="ts-type"}

关闭所有打开的覆盖图。

### patch（）

`patch(id: symbol, props: Partial<ComponentProps<T>>): void`{lang="ts-type"}

通过其`id`更新覆盖。

#### Parameters

::field-group
  ::field{name="id" type="symbol" required}
  覆盖的标识符。
  ::

  ::field{name="props" type="Partial<ComponentProps<T>>" required}
  要在渲染组件上更新的props对象。
  ::
::

### unmount（）

`unmount(id: symbol): void`{lang="ts-type"}

通过其`id`从DOM中删除覆盖。

#### Parameters

::field-group
  ::field{name="id" type="symbol" required}
  覆盖的标识符。
  ::
::

### isOpen（）

`isOpen(id: symbol): boolean`{lang="ts-type"}

使用其`id`检查覆盖是否打开。

#### Parameters

::field-group
  ::field{name="id" type="symbol" required}
  覆盖的标识符。
  ::
::

### overlays

`overlays: Overlay[]`{lang="ts-type"}

已创建的所有覆盖的内存中列表。

## Instance API

这些是在`create()`返回的实例上可用的方法。

### open（）

`open(props?: ComponentProps<T>): OpenedOverlay<T>`{lang="ts-type"}

打开覆盖。返回一个`OpenedOverlay`，一个使用`close`事件发出的值进行解析的Promise。同样的Promise也被暴露为`result`，所以`const { result } = modal.open()`也可以工作。

#### Parameters

::field-group
  ::field{name="props" type="ComponentProps<T>"}
  一个可选的props对象，传递给呈现组件。
  ::
::

```vue
<script setup lang="ts">
import { LazyModalExample } from '#components'

const overlay = useOverlay()

const modal = overlay.create(LazyModalExample)

function openModal() {
  modal.open({
    title: 'Welcome'
  })
}
</script>
```

### close（）

`close(value?: any): void`{lang="ts-type"}

关闭覆盖层。

#### Parameters

::field-group
  ::field{name="value" type="any"}
  用于解析覆盖承诺的值。
  ::
::

### patch（）

`patch(props: Partial<ComponentProps<T>>): void`{lang="ts-type"}

更新覆盖的道具。

#### Parameters

::field-group
  ::field{name="props" type="Partial<ComponentProps<T>>" required}
  要在渲染组件上更新的props对象。
  ::
::

```vue
<script setup lang="ts">
import { LazyModalExample } from '#components'

const overlay = useOverlay()

const modal = overlay.create(LazyModalExample, {
  props: { title: 'Welcome' }
})

function openModal() {
  modal.open()
}

function updateModalTitle() {
  modal.patch({ title: 'Updated Title' })
}
</script>
```

## 示例

### With multiple overlays

此示例演示如何管理多个叠加并在它们之间传递数据：

```vue
<script setup lang="ts">
import { ModalA, ModalB, SlideoverA } from '#components'

const overlay = useOverlay()

// Create with default props
const modalA = overlay.create(ModalA, { props: { title: 'Welcome' } })
const modalB = overlay.create(ModalB)
const slideoverA = overlay.create(SlideoverA)

const openModalA = () => {
  // Open modalA, but override the title prop
  modalA.open({ title: 'Hello' })
}

const openModalB = async () => {
  // Open modalB, and wait for its result
  const input = await modalB.open()

  // Pass the result from modalB to the slideover, and open it
  slideoverA.open({ input })
}
</script>

<template>
  <UButton label="Open Modal" @click="openModalA" />
</template>
```

### 确认对话框

此示例演示如何使用包装`useOverlay`的自定义`useConfirmDialog`组合件创建可重用的确认对话框模式。此方法支持根据特定业务需求和设计首选项定制的自定义对话框。

1. 创建一个在关闭时发出布尔值的`ConfirmDialog`组件：

```vue [components/ConfirmDialog.vue]
<script lang="ts" setup>
interface ConfirmDialogProps {
  title?: string
  description?: string
}

defineProps<ConfirmDialogProps>()

const emits = defineEmits<{
  close: [value: boolean]
}>()
</script>

<template>
  <UModal
    :title="title"
    :description="description"
    :dismissible="false"
    :ui="{ footer: 'justify-end' }"
  >
    <template #footer>
      <UButton label="Cancel" color="neutral" variant="outline" @click="emits('close', false)" />
      <UButton label="Confirm" color="neutral" @click="emits('close', true)" />
    </template>
  </UModal>
</template>
```

2. Create a`useConfirmDialog`composable that returns a Promise：

```ts [composables/useConfirmDialog.ts]
import { ConfirmDialog } from '#components'

export interface ConfirmDialogOptions {
  title: string
  description?: string
}

export const useConfirmDialog = () => {
  const overlay = useOverlay()

  return (options: ConfirmDialogOptions): Promise<boolean> => {
    const modal = overlay.create(ConfirmDialog, {
      destroyOnClose: true,
      props: options
    })

    return modal.open()
  }
}
```

3. 在组件中使用可组合：

```vue
<script setup lang="ts">
const confirm = useConfirmDialog()

const handleDelete = async () => {
  const confirmed = await confirm({
    title: 'Delete item',
    description: 'Are you sure you want to delete this item?'
  })

  if (confirmed) {
    console.log('Item deleted')
  }
}
</script>

<template>
  <UButton label="Delete item" @click="handleDelete" />
</template>
```

## Caveats

### Provide / Inject

当以编程方式打开覆盖（模态、幻灯片等）时，覆盖组件只能从包含`UApp`的组件（通常是`app.vue`或布局组件）访问注入值。这是因为覆盖是由`UApp`组件安装在页面上下文之外的。

因此，不支持在页面或父组件中直接使用`provide()`。要将提供的值传递给叠加层，建议使用props：

```vue
<script setup lang="ts">
import { LazyModalExample } from '#components'

const overlay = useOverlay()

const providedValue = inject('valueProvidedInPage')

const modal = overlay.create(LazyModalExample, {
  props: {
    providedValue
  }
})
</script>
```
