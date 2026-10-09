---
title: 选择菜单
description: 一个高级的可搜索的选择元素。
category: form
keywords:
  - combobox
  - multi select
  - filterable select
links:
  - label: Combobox
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/combobox
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/SelectMenu.vue
---

## 用法

使用`v-model`指令控制SelectMenu的值，或使用`default-value` prop在不需要控制其状态时设置初始值。

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

::tip
在[`Select`](/docs/components/select)上使用此功能，可充分利用Reka UI的[`Combobox`](https://reka-ui.com/docs/components/combobox)组件，该组件提供搜索功能和多项选择。
::

::note
此组件类似于[`InputMenu`](/docs/components/input-menu)，但它使用的是Select（选择）而不是Input（输入），并在菜单内进行搜索。
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

060 x的字符串
066 x年061月063日062月067日064日065日066 x年066月067日064日065月066日
073 x年07月07日星期一
080x-081x-080x
087 x年082月084日083日088 x年085 x年086 x年087 x年087 x年087 x月087 x日087 x年087 x月087 x日087 x年087 x月087 x日087 x年0877 x月087 x日087 x年087 x月087 x月087 x日087 x月087 x月087 x日087 x月087 x日087 x月087 x日
090 {lang="ts-type"}的字符串
094 x年12月15日
097 x年12月15日星期一
100 x个字符

::component-code
---
ignore:
  - modelValue.label
  - items
  - class
external:
  - items
  - modelValue
externalTypes:
  - SelectMenuItem[]
props:
  modelValue:
    label: 'Todo'
  items:
    - label: 'Backlog'
    - label: 'Todo'
    - label: 'In Progress'
    - label: 'Done'
  class: 'w-48'
---
::

::caution
与[`Select`](/docs/components/select)组件不同，默认情况下，SelectMenu希望将整个对象传递给`v-model`指令或`default-value`属性。
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

您可以选择使用`value-key`属性来系结物件的单一属性，而非整个物件。预设值为`undefined`。

::component-code
---
collapse: true
ignore:
  - modelValue
  - valueKey
  - items
  - class
external:
  - items
  - modelValue
externalTypes:
  - SelectMenuItem[]
props:
  modelValue: 'todo'
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

::tip
当`model-value`是对象时，使用`by`属性按字段而不是按引用来比较对象。
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
请确保将数组传递给`default-value`属性或`v-model`指令。
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

### 搜索输入

使用`search-input` prop自定义或隐藏搜索输入（使用`false`值）。

您可以从[Input](/docs/components/input)组件传递任何属性来对其进行自定义。

::component-code
---
prettier: true
ignore:
  - modelValue.label
  - modelValue.icon
  - items
  - class
external:
  - items
  - modelValue
externalTypes:
  - SelectMenuItem[]
props:
  modelValue:
    label: 'Backlog'
    icon: 'i-lucide-circle-help'
  searchInput:
    placeholder: 'Filter...'
    icon: 'i-lucide-search'
  items:
    - label: Backlog
      icon: 'i-lucide-circle-help'
    - label: Todo
      icon: 'i-lucide-circle-plus'
    - label: In Progress
      icon: 'i-lucide-circle-arrow-up'
    - label: Done
      icon: 'i-lucide-circle-check'
  class: 'w-48'
---
::

::tip
您可以将`search-input`属性设置为`false`以隐藏搜索输入。
::

::note
使用`:search-input="{ autofocus: false }"`可防止在菜单打开时聚焦搜索输入，例如避免在触摸设备上打开虚拟键盘。
::

### 内容

使用`content`属性来控制SelectMenu内容的呈现方式，例如`align`或`side`。

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

### Arrow

使用`arrow` prop在SelectMenu上显示一个箭头。

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

使用`color`道具来改变选择菜单聚焦时的环颜色。

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

使用`variant` prop更改SelectMenu的变体。

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

使用`size`属性更改SelectMenu的大小。

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

使用`icon`道具在SelectMenu中显示[Icon](/docs/components/icon)。

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
你可以在你的`ui.icons.chevronDown`键下的`app.config.ts`中全局自定义这个图标。
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
你可以在你的`vite.config.ts`中的`ui.icons.chevronDown`键下全局自定义这个图标。
:::
::

### 选定图标

使用`selected-icon`道具自定义选中项目时的图标。将其转换为`i-lucide-check`。

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

### 清除：badge{label="4.4+" class="align-text-top"}

使用`clear` prop在选择值时显示清除按钮。

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
  clear:
    - true
    - false
props:
  modelValue: 'Backlog'
  clear: true
  items:
    - Backlog
    - Todo
    - In Progress
    - Done
  class: 'w-48'
---
::

### 清除图标：badge{label="4.4+" class="align-text-top"}

使用`clear-icon`道具自定义清除按钮[Icon](/docs/components/icon)。

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
  clear:
    - true
    - false
props:
  modelValue: 'Backlog'
  clear: true
  clearIcon: 'i-lucide-trash'
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
你可以在你的`ui.icons.close`键下的`app.config.ts`中全局自定义这个图标。
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
您可以在`ui.icons.close`键下在`vite.config.ts`中全局自定义此图标。
:::
::

### Avatar

使用`avatar`道具在选择菜单中显示[Avatar](/docs/components/avatar)。

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

使用`loading` prop在SelectMenu上显示加载图标。

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
你可以在你的`app.config.ts`中的`ui.icons.loading`键下全局自定义这个图标。
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
你可以在你的`ui.icons.loading`键下的`vite.config.ts`中全局自定义这个图标。
:::
::

### 禁用

使用`disabled` prop禁用选择菜单。

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

可以将`type`属性与`separator`一起使用，以显示项之间的分隔符，或将`label`一起使用，以显示标签。

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
  - SelectMenuItem[]
props:
  modelValue: 'Apple'
  items:
    - - type: 'label'
        label: 'Fruits'
      - Apple
      - Banana
      - Blueberry
      - Grapes
      - Pineapple
    - - type: 'label'
        label: 'Vegetables'
      - Aubergine
      - Broccoli
      - Carrot
      - Courgette
      - Leek
  class: 'w-48'
---
::

::note
当使用`label`项目作为组标题时，传递一个数组数组，以便在搜索时将标签与其组一起过滤掉。
::

### 项目中带有图标

可以使用`icon`属性在项目中显示[Icon](/docs/components/icon)。

::component-example
---
collapse: true
name: 'select-menu-items-icon-example'
---
::

::tip
您也可以使用`#leading`插槽来显示选定的图标。
::

### 物品中有头像

您可以使用`avatar`属性在项目中显示[Avatar](/docs/components/avatar)。

::component-example
---
collapse: true
name: 'select-menu-items-avatar-example'
---
::

::tip
您也可以使用`#leading`插槽来显示选定的头像。
::

### 带芯片的物品

您可以使用`chip`属性在项目中显示[Chip](/docs/components/chip)。

::component-example
---
collapse: true
name: 'select-menu-items-chip-example'
---
::

::note
在本例中，`#leading`插槽用于显示所选筹码。
::

### 控制打开状态

您可以使用`default-open` prop或`v-model:open`指令控制打开状态。

::component-example
---
name: 'select-menu-open-example'
---
::

::note
在本例中，利用[`defineShortcuts`](/docs/composables/define-shortcuts)，您可以通过按：kbd{value="O"}切换选择菜单。
::

### 控件搜索词

使用`v-model:search-term`指令控制搜索词。

::component-example
---
name: 'select-menu-search-term-example'
---
::

### 带旋转图标

下面是一个带有旋转图标的示例，该图标指示SelectMenu的打开状态。

::component-example
---
name: 'select-menu-icon-example'
---
::

### 带创建项

使用`create-item`属性可以让用户添加预定义选项中没有的自定义值。

::component-example
---
collapse: true
name: 'select-menu-create-item-example'
---
::

::note
默认情况下，create选项在没有找到匹配项时显示。将其设置为`always`，即使存在类似的值也会显示。
::

::tip{to="#emits"}
使用`@create`事件来处理项目的创建。您将接收事件和项目作为参数。
::

### 使用获取的项目

您可以从API获取项目并在选择菜单中使用它们。

::component-example
---
collapse: true
name: 'select-menu-fetch-example'
---
::

::note
本例使用`useLazyFetch`和`immediate: false`，仅在菜单打开时获取数据，避免了页面加载时不必要的API调用。
::

### 带忽略过滤器

将`ignore-filter`属性设置为`true`以禁用内部搜索并使用您自己的搜索逻辑。

::component-example
---
collapse: true
name: 'select-menu-ignore-filter-example'
---
::

::note
本例使用[`refDebounced`](https://vueuse.org/shared/refDebounced/#refdebounced)对API调用进行反跳。`immediate: false`延迟提取，因此在菜单打开之前不会发出请求。
::

### 带过滤器字段

使用`filter-fields` prop和一个字段数组来过滤. `[labelKey]`。

::component-example
---
collapse: true
name: 'select-menu-filter-fields-example'
---
::

::note
本例使用`useLazyFetch`和`immediate: false`，仅在菜单打开时获取数据，避免了页面加载时不必要的API调用。
::

### 虚拟化：badge{label="4.1+" class="align-text-top"}

使用`virtualize` prop将大型列表虚拟化为布尔值或带有`{ estimateSize: 32, overscan: 12 }`等选项的对象。

::warning{to="https://github.com/unovue/reka-ui/issues/1885" target="_blank"}
启用后，由于Reka UI的限制，所有组将被展平为单个列表。
::

::component-example
---
prettier: true
name: 'select-menu-virtualize-example'
---
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
name: 'select-menu-infinite-scroll-example'
---
::

::note
本例使用`useLazyFetch`和`immediate: false`，因此数据仅在用户滚动时加载。
::

### 具有完整内容宽度

您可以通过在`ui.content`插槽上添加`min-w-fit`类来将内容扩展到其项目的全宽。

::component-example
---
name: 'select-menu-content-width-example'
collapse: true
---
::

::tip
您还可以在`app.config.ts`中全局更改内容宽度：

```
export default defineAppConfig({
  ui: {
    selectMenu: {
      slots: {
        content: 'min-w-fit'
      }
    }
  }
})
```
::

### 作为国家选择器

您可以使用SelectMenu作为国家/地区选择器，并进行延迟加载。只有在首次打开菜单时才会提取国家/地区。

::component-example
---
collapse: true
name: 'select-menu-countries-example'
---
::

::note
本例使用`useLazyFetch`和`immediate: false`，仅在菜单首次打开时加载国家/地区。
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
