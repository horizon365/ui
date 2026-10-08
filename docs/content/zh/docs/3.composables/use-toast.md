---
title: 使用Toast
description: '一个可以在应用中显示吐司通知的组合。'
---

## 使用情况

使用自动导入的`useToast`可组合显示[Toast](/docs/components/toast)通知。

::component-example
---
name：'use-toast-example'
---
::

- `useToast`可组合使用Nuxt的`useState`来管理吐司状态，确保整个应用程序的反应性。
- 默认情况下，一次最多显示5个toast。当添加一个超过此限制的新吐司时，最旧的吐司将自动删除。请使用[`App`](/docs/components/app#props)组件上的`toaster.max`prop进行更改。
- 当删除一个吐司时，在它实际从状态中删除之前有200 ms的延迟，允许退出动画。

::warning
请确保使用[`App`](/docs/components/app)组件包装您的应用，该组件使用我们的[`Toaster`](https://github.com/nuxt/ui/blob/v4/src/runtime/components/Toaster.vue)组件，该组件使用[`ToastProvider`](https://reka-ui.com/docs/components/toast#provider) Reka UI中的组件。
::

::tip{to="/docs/components/toast"}
在**Toast**组件文档中了解如何自定义toast的外观和行为。
::

## API

`useToast()`{lang="ts-type"}

`useToast`组合工具提供了全局管理吐司通知的方法。

### add（）

`add(toast: Partial<Toast>): Toast`{lang="ts-type"}

添加新的吐司通知。

#### Parameters

::field-group

  ::field{name="toast" type="Partial<Toast>" required}
  具有以下属性的部分`Toast`对象：

    ::collapsible

      ::field-group
        ::field{name="id" type="string | number"}
        吐司的唯一标识符。如果未提供，则会生成唯一的id。重用现有的id将合并到该吐司中，而不是添加新的id。
        ::

        ::field{name="open" type="boolean"}
        吐司是否打开。请转到`true`。
        ::

        ::field{name="title" type="string | VNode | (() => VNode)"}
        在吐司中显示的标题。
        ::

        ::field{name="description" type="string | VNode | (() => VNode)"}
        吐司中显示的描述。
        ::

        ::field{name="icon" type="string"}
        吐司中显示的图标。
        ::

        ::field{name="avatar" type="AvatarProps"}
        吐司中显示的头像。请参见[Avatar](/docs/components/avatar#props)。
        ::

        ::field{name="color" type="string"}
        吐司的颜色。请选择`primary`。
        ::

        ::field{name="orientation" type="'horizontal' | 'vertical'"}
        内容和操作之间的方向。请参阅`vertical`。
        ::

        ::field{name="close" type="boolean | Omit<ButtonProps, LinkPropsKeys>"}
        自定义或隐藏关闭按钮（带`false`值）。将其设置为`true`。
        ::

        ::field{name="closeIcon" type="string"}
        关闭按钮中显示的图标。
        ::

        ::field{name="actions" type="ButtonProps[]"}
        吐司中显示的操作。请参见[Button](/docs/components/button#props)。
        ::

        ::field{name="progress" type="boolean | Pick<ProgressProps, 'color' | 'ui'>"}
        自定义或隐藏进度条（带`false`值）。将其设置为`true`。
        ::

        ::field{name="duration" type="number"}
        吐司自动关闭前的持续时间（毫秒）。设置为`5000`。设置为`0`可使吐司保持打开状态，直到手动关闭。也可以在[`App`](/docs/components/app)组件上全局设置。
        ::

        ::field{name="onClick" type="(toast: Toast) => void"}
        点击吐司时调用的回调函数。
        ::

        ::field{name="onUpdateOpen" type="(open: boolean) => void"}
        当吐司打开状态改变时调用的回调函数。当吐司关闭时（过期或解散）执行操作时很有用。
        ::

        ::field{name="type" type="'foreground' | 'background'"}
        辅助技术如何宣布吐司。使用`background`表示不是用户直接操作的祝酒词。
        ::

        ::field{name="as" type="any"}
        吐司呈现为. xml到`li`的元素或组件。
        ::
      ::
    ::
  ::
::

**Returns：**添加的完整的`Toast`对象。

```vue
<script setup lang="ts">
const toast = useToast()

function showToast() {
  toast.add({
    title: 'Success',
    description: 'Your action was completed successfully.',
    color: 'success'
  })
}
</script>
```

### update（）

`update(id: string | number, toast: Omit<Partial<Toast>, 'id'>): void`{lang="ts-type"}

更新现有吐司通知。

#### Parameters

::field-group
  ::field{name="id" type="string | number" required}
  要更新的吐司的唯一标识符。
  ::

  ::field{name="toast" type="Omit<Partial<Toast>, 'id'>" required}
  具有要更新的属性的部分`Toast`对象。无法更改`id`，将重新打开吐司，并且将重置`duration`，除非您再次传递它。
  ::
::

```vue
<script setup lang="ts">
const toast = useToast()

function updateToast(id: string | number) {
  toast.update(id, {
    title: 'Updated Toast',
    description: 'This toast has been updated.'
  })
}
</script>
```

### remove（）

`remove(id: string | number): void`{lang="ts-type"}

吐司通知。

#### 参数

::field-group
  ::field{name="id" type="string | number" required}
  要删除的吐司的唯一标识符。
  ::
::

```vue
<script setup lang="ts">
const toast = useToast()

function removeToast(id: string | number) {
  toast.remove(id)
}
</script>
```

### clear（）

`clear(): void`{lang="ts-type"}

所有吐司通知。

```vue
<script setup lang="ts">
const toast = useToast()

function clearAllToasts() {
  toast.clear()
}
</script>
```

### toasts

`toasts: Ref<Toast[]>`{lang="ts-type"}

一个包含所有当前吐司通知的反应数组。

```vue
<script setup lang="ts">
const { toasts } = useToast()
</script>

<template>
  <div>
    <pre>{{ toasts }}</pre>
  </div>
</template>
```
