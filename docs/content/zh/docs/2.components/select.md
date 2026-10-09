---
description: 从选项列表中选择的选择元素。
category: form
keywords:
  - dropdown
  - picker
links:
  - label: 选择
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/select
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Select.vue
---

## 用法

使用`v-model`指令来控制Select的值，或在不需要控制其状态时使用`default-value`属性来设置初始值。

::component-code
---
prettier: true
hide:
  - class
ignore:
  - modelValue
  - items
  - class
external:
  - items
  - modelValue
props:
  modelValue: 'Backlog'
  items:
    - Backlog
    - Todo
    - In Progress
    - Done
  class: 'w-48'
---
::

### 项目

将`items`属性用作字符串、数字或布尔值的数组：

::component-code
---
prettier: true
ignore:
  - modelValue
  - items
  - class
external:
  - items
  - modelValue
props:
  modelValue: 'Backlog'
  items:
    - Backlog
    - Todo
    - In Progress
    - Done
  class: 'w-48'
---
::

您也可以传递具有下列属性的物件数组：

045 x的地址
051 x年12月27日星期一
058x-059x-056x-057x-058x-056x-057x-058x
065 x年060月062日061日066日063日064日065 x年065 x年065 x月065 x日065 x年065 x月065 x日
072 x年07月07日星期一
079 x年07月08日星期一
083x-083x
086 x年12月15日星期一
089 x年12月27日星期一

::component-code
---
ignore:
  - modelValue
  - items
  - class
external:
  - items
  - modelValue
externalTypes:
  - SelectItem[]
props:
  modelValue: 'backlog'
  items:
    - label: 'Backlog'
      value: 'backlog'
    - label: 'Todo'
      value: 'todo'
    - label: 'In Progress'
      value: 'in_progress'
    - label: 'Done'
      value: 'done'
  class: 'w-48'
---
::

::caution
使用物件时，您必须在`v-model`指示词或`default-value`属性中指涉物件的`value`属性。
::

您也可以将数组的数组传递给`items` prop，以显示分开的项目群组。

::component-code
---
prettier: true
ignore:
  - modelValue
  - items
  - class
external:
  - items
  - modelValue
props:
  modelValue: 'Apple'
  items:
    - - Apple
      - Banana
      - Blueberry
      - Grapes
      - Pineapple
    - - Aubergine
      - Broccoli
      - Carrot
      - Courgette
      - Leek
  class: 'w-48'
---
::

### 值键

您可以使用`value-key`属性来变更用来设定值的属性。预设为`value`。

::component-code
---
ignore:
  - modelValue
  - valueKey
  - items
  - class
external:
  - items
  - modelValue
externalTypes:
  - SelectItem[]
props:
  modelValue: 'backlog'
  valueKey: 'id'
  items:
    - label: 'Backlog'
      id: 'backlog'
    - label: 'Todo'
      id: 'todo'
    - label: 'In Progress'
      id: 'in_progress'
    - label: 'Done'
      id: 'done'
  class: 'w-48'
---
::

### 多重

使用`multiple`道具可进行多项选择，所选项目将在触发器中以逗号分隔。

::component-code
---
prettier: true
ignore:
  - modelValue
  - items
  - multiple
  - class
external:
  - items
  - modelValue
props:
  modelValue:
    - Backlog
    - Todo
  multiple: true
  items:
    - Backlog
    - Todo
    - In Progress
    - Done
  class: 'w-48'
---
::

::caution
请确定将数组传递至`default-value`属性或`v-model`指示词。
::

### 占位符

使用`placeholder`属性设置占位符文本。

::component-code
---
prettier: true
ignore:
  - items
  - class
external:
  - items
props:
  placeholder: 'Select status'
  items:
    - Backlog
    - Todo
    - In Progress
    - Done
  class: 'w-48'
---
::

### 内容

使用`content`属性控制Select内容的呈现方式，例如`align`或`side`。

::component-code
---
prettier: true
ignore:
  - items
  - modelValue
  - class
external:
  - items
  - modelValue
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
  modelValue: 'Backlog'
  content:
    align: center
    side: bottom
    sideOffset: 8
  items:
    - Backlog
    - Todo
    - In Progress
    - Done
  class: 'w-48'
---
::

::note
这些选项仅在`content.position`为`popper`（默认值）时适用。
::

### 位置：badge{label="4.7+" class="align-text-top"}

使用`content.position`属性来控制Select内容相对于触发器的定位方式。将其设置为`popper`，这会像其他弹出窗口一样定位内容。将其设置为`item-aligned`可将内容与所选项目对齐（类似于本机macOS菜单）。

::component-code
---
prettier: true
ignore:
  - items
  - modelValue
  - class
external:
  - items
  - modelValue
items:
  content.position:
    - item-aligned
    - popper
props:
  modelValue: 'Todo'
  content:
    position: item-aligned
  items:
    - Backlog
    - Todo
    - In Progress
    - Done
  class: 'w-48'
---
::

### Arrow

使用`arrow`道具在Select上显示箭头。

::component-code
---
prettier: true
ignore:
  - items
  - modelValue
  - class
  - arrow
external:
  - items
  - modelValue
props:
  modelValue: 'Backlog'
  arrow: true
  items:
    - Backlog
    - Todo
    - In Progress
    - Done
  class: 'w-48'
---
::

### Color

使用`color`道具来改变选择时的环颜色。

::component-code
---
prettier: true
ignore:
  - items
  - modelValue
  - class
external:
  - items
  - modelValue
props:
  modelValue: 'Backlog'
  color: neutral
  highlight: true
  items:
    - Backlog
    - Todo
    - In Progress
    - Done
  class: 'w-48'
---
::

::note
这里使用`highlight`属性来显示焦点状态。当发生验证错误时，在内部使用它。
::

### Variant

使用`variant` prop更改Select的变体。

::component-code
---
prettier: true
ignore:
  - items
  - modelValue
  - class
external:
  - items
  - modelValue
props:
  modelValue: 'Backlog'
  color: neutral
  variant: subtle
  highlight: false
  items:
    - Backlog
    - Todo
    - In Progress
    - Done
  class: 'w-48'
---
::

### Size

使用`size`道具来更改Select的大小。

::component-code
---
prettier: true
ignore:
  - items
  - modelValue
  - class
external:
  - items
  - modelValue
props:
  modelValue: 'Backlog'
  size: xl
  items:
    - Backlog
    - Todo
    - In Progress
    - Done
  class: 'w-48'
---
::

### Icon

使用`icon`道具在Select中显示[Icon](/docs/components/icon)。

::component-code
---
prettier: true
ignore:
  - items
  - modelValue
  - class
external:
  - items
  - modelValue
props:
  modelValue: 'Backlog'
  icon: 'i-lucide-search'
  size: md
  items:
    - Backlog
    - Todo
    - In Progress
    - Done
  class: 'w-48'
---
::

### 拖尾图标

使用`trailing-icon` prop将尾随的[Icon](/docs/components/icon).xml自定义为`i-lucide-chevron-down`。

::component-code
---
prettier: true
ignore:
  - items
  - modelValue
  - class
external:
  - items
  - modelValue
props:
  modelValue: 'Backlog'
  trailingIcon: 'i-lucide-arrow-down'
  size: md
  items:
    - Backlog
    - Todo
    - In Progress
    - Done
  class: 'w-48'
---
::

::framework-only
#nuxt
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
你可以在你的`app.config.ts`中的`ui.icons.chevronDown`键下全局自定义这个图标。
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
你可以在你的`vite.config.ts`中的`ui.icons.chevronDown`键下全局自定义这个图标。
:::
::

### 选定图标

使用`selected-icon`道具自定义选中某个项目时的图标。将其转换为`i-lucide-check`。

::component-code
---
prettier: true
ignore:
  - items
  - modelValue
  - class
external:
  - items
  - modelValue
props:
  modelValue: 'Backlog'
  selectedIcon: 'i-lucide-flame'
  size: md
  items:
    - Backlog
    - Todo
    - In Progress
    - Done
  class: 'w-48'
---
::

::framework-only
#nuxt
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
你可以在你的`app.config.ts`中的`ui.icons.check`键下全局自定义这个图标。
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
你可以在你的`ui.icons.check`键下的`vite.config.ts`中全局自定义这个图标。
:::
::

### Avatar

使用`avatar`道具在Select内显示[Avatar](/docs/components/avatar)。

::component-code
---
prettier: true
ignore:
  - items
  - modelValue
  - class
  - avatar.loading
external:
  - items
  - modelValue
props:
  modelValue: 'Nuxt'
  avatar:
    src: 'https://github.com/nuxt.png'
    loading: lazy
  items:
    - Nuxt
    - NuxtHub
    - NuxtLabs
    - Nuxt Modules
    - Nuxt Community
  class: 'w-48'
---
::

### 加载中

使用`loading`道具在Select上显示一个加载图标。

::component-code
---
prettier: true
ignore:
  - items
  - modelValue
  - class
external:
  - items
  - modelValue
props:
  modelValue: 'Backlog'
  loading: true
  trailing: false
  items:
    - Backlog
    - Todo
    - In Progress
    - Done
  class: 'w-48'
---
::

### 加载图标

使用`loading-icon`道具自定义加载图标. `i-lucide-loader-circle`。

::component-code
---
prettier: true
ignore:
  - items
  - modelValue
  - class
external:
  - items
  - modelValue
props:
  modelValue: 'Backlog'
  loading: true
  loadingIcon: 'i-lucide-loader'
  items:
    - Backlog
    - Todo
    - In Progress
    - Done
  class: 'w-48'
---
::

::framework-only
#nuxt
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
你可以在你的`app.config.ts`下的`ui.icons.loading`键全局自定义这个图标。
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
你可以在你的`vite.config.ts`下的`ui.icons.loading`键全局自定义这个图标。
:::
::

### 禁用

使用`disabled` prop禁用Select。

::component-code
---
prettier: true
ignore:
  - items
  - placeholder
  - class
external:
  - items
props:
  disabled: true
  placeholder: 'Select status'
  items:
    - Backlog
    - Todo
    - In Progress
    - Done
  class: 'w-48'
---
::

## 示例

### 带项目类型

您可以将`type`属性与`separator`一起使用，以显示项之间的分隔符，或将`label`用于显示标签。

::component-code
---
collapse: true
ignore:
  - modelValue
  - items
  - class
external:
  - items
  - modelValue
externalTypes:
  - SelectItem[]
props:
  modelValue: 'Apple'
  items:
    - type: 'label'
      label: 'Fruits'
    - Apple
    - Banana
    - Blueberry
    - Grapes
    - Pineapple
    - type: 'separator'
    - type: 'label'
      label: 'Vegetables'
    - Aubergine
    - Broccoli
    - Carrot
    - Courgette
    - Leek
  class: 'w-48'
---
::

### 项目中带有图标

可以使用`icon`属性在项目中显示[Icon](/docs/components/icon)。

::component-example
---
collapse: true
name: 'select-items-icon-example'
---
::

::note
在本例中，图标是根据选定项的`value`属性计算的。
::

::tip
您也可以使用`#leading`插槽来显示选定的图标。
::

### 物品中有头像

您可以使用`avatar`属性在项目中显示[Avatar](/docs/components/avatar)。

::component-example
---
collapse: true
name: 'select-items-avatar-example'
---
::

::note
在这个例子中，化身是根据所选项目的`value`属性计算的。
::

::tip
您也可以使用`#leading`插槽来显示选定的头像。
::

### 带芯片的物品

您可以使用`chip`属性在项目中显示[Chip](/docs/components/chip)。

::component-example
---
collapse: true
name: 'select-items-chip-example'
---
::

::note
在本例中，`#leading`插槽用于显示所选的筹码。
::

### 控制打开状态

您可以使用`default-open` prop或`v-model:open`指令控制打开状态。

::component-example
---
name: 'select-open-example'
---
::

::note
在本例中，利用[`defineShortcuts`](/docs/composables/define-shortcuts)，您可以通过按：kbd{value="O"}来切换选择。
::

### 带旋转图标

下面是一个带有旋转图标的示例，该图标指示Select的打开状态。

::component-example
---
name: 'select-icon-example'
---
::

### 使用获取的项目

您可以从API获取项目并在Select中使用它们。

::component-example
---
name: 'select-fetch-example'
collapse: true
---
::

::note
本例使用`useLazyFetch`和`immediate: false`，仅在菜单打开时获取数据，避免了页面加载时不必要的API调用。
::

### 无限滚动：badge{label="4.4+" class="align-text-top"}

您可以使用[`useInfiniteScroll`](https://vueuse.org/core/useInfiniteScroll/)组合文件在用户滚动时加载更多数据。

::component-example
---
prettier: true
collapse: true
highlights:
  - 41
  - 51
overflowHidden: true
name: 'select-infinite-scroll-example'
---
::

::note
本例使用`useLazyFetch`和`immediate: false`，因此数据仅在用户滚动时加载。
::

### 具有完整内容宽度

您可以通过在`ui.content`插槽上添加`min-w-fit`类来将内容扩展到其项目的全宽。

::component-example
---
name: 'select-content-width-example'
collapse: true
---
::

::tip
您还可以在`app.config.ts`中全局更改内容宽度：

```
export default defineAppConfig({
  ui: {
    select: {
      slots: {
        content: 'min-w-fit'
      }
    }
  }
})
```
::

## API

### Props

:component-props

::callout{icon="i-simple-icons-mdnwebdocs" to="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attributes" target="_blank"}
此组件还支持所有原生`<button>` HTML属性。
::

### Slots

:component-slots

### Emits

:component-emits

### 曝光

通过模板引用访问组件时，可以使用以下命令：

| 名称|类型|
| ---- | ---- |
| `triggerRef`{lang="ts-type"}| `Ref<HTMLButtonElement \| null>`{lang="ts-type"}|
| `viewportRef`{lang="ts-type"}| `Ref<HTMLDivElement \| null>`{lang="ts-type"}|

## Theme

:component-theme

## Changelog

:component-changelog
