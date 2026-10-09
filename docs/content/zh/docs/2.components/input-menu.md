---
title: 输入菜单
description: 自动完成输入与实时建议。
category: form
keywords:
  - combobox
  - typeahead
  - autosuggest
links:
  - label: Combobox
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/combobox
  - label: 自动完成
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/autocomplete
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/InputMenu.vue
---

## 用法

使用`v-model`指令控制InputMenu的值，或使用`default-value`属性在不需要控制其状态时设置初始值。

::component-code
---
prettier: true
ignore:
  - modelValue
  - items
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
---
::

::tip
在[`Input`](/docs/components/input)上使用此功能，可以充分利用Reka UI的[`Combobox`](https://reka-ui.com/docs/components/combobox)组件，该组件提供自动补全功能。
::

::note
此组件与[`SelectMenu`](/docs/components/select-menu)类似，但它使用的是“输入”而不是“选择”。
::

项目

将`items`属性用作字符串、数字或布尔值的数组：

::component-code
---
prettier: true
ignore:
  - modelValue
  - items
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
---
::

您也可以传递具有下列属性的物件数组：

054x，054x
060 x年060 x月060 x日星期一
067x-068x-080x-060x-0680x-080x-060x
074 x年07月07日星期一
081 x年12月27日星期一
085 x年12月15日星期一
088 x年12月15日星期一
090 {lang="ts-type"}的字符串
094 x年12月15日

::component-code
---
ignore:
  - modelValue.label
  - items
external:
  - items
  - modelValue
externalTypes:
  - InputMenuItem[]
props:
  modelValue:
    label: 'Todo'
  items:
    - label: 'Backlog'
    - label: 'Todo'
    - label: 'In Progress'
    - label: 'Done'
---
::

您也可以将数组的数组传递给`items` prop，以显示分隔的项目群组。

::component-code
---
prettier: true
ignore:
  - modelValue
  - items
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
external:
  - items
  - modelValue
externalTypes:
  - InputMenuItem[]
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
---
::

::tip
当`model-value`是一个对象时，使用`by`属性按字段而不是按引用来比较对象。
::

### 多个

使用`multiple`道具可进行多项选择，所选项目将显示为标签。

::component-code
---
prettier: true
ignore:
  - modelValue
  - items
  - multiple
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
---
::

::caution
请确定将数组传递至`default-value`属性或`v-model`指示词。
::

### 删除图标

在`multiple`中，使用`delete-icon`属性自定义标记中的删除[Icon](/docs/components/icon)。默认为`i-lucide-x`。

::component-code
---
prettier: true
ignore:
  - modelValue
  - items
  - multiple
external:
  - items
  - modelValue
props:
  modelValue:
    - Backlog
    - Todo
  multiple: true
  deleteIcon: 'i-lucide-trash'
  items:
    - Backlog
    - Todo
    - In Progress
    - Done
---
::

::framework-only
#nuxt
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
你可以在你的`app.config.ts`中的`ui.icons.close`键下全局自定义这个图标。
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
你可以在你的`vite.config.ts`中的`ui.icons.close`键下全局自定义这个图标。
:::
::

### 占位符

使用`placeholder`属性设置占位符文本。

::component-code
---
prettier: true
ignore:
  - items
external:
  - items
props:
  placeholder: 'Select status'
  items:
    - Backlog
    - Todo
    - In Progress
    - Done
---
::

### 模式：badge{label="4.8+" class="align-text-top"}

将`mode`属性设置为`autocomplete`，将InputMenu转换为带有建议的自由格式文本输入。`modelValue`将成为输入文本（`string`），而不是选定项。

::component-example
---
name: 'input-menu-mode-example'
---
::

::caution
当`mode`为`autocomplete`时，`multiple`、`by`、`resetSearchTermOnSelect`和`resetModelValueOnClear`不适用。
::

::tip
使用`content.hideWhenEmpty`属性在没有匹配的建议时隐藏菜单。
::

### 内容

使用`content`属性来控制InputMenu内容的呈现方式，例如`align`或`side`。

::component-code
---
prettier: true
ignore:
  - items
  - modelValue
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
---
::

### Arrow

使用`arrow` prop在InputMenu上显示一个箭头。

::component-code
---
prettier: true
ignore:
  - items
  - modelValue
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
---
::

### Color

使用`color`属性来改变InputMenu聚焦时的环颜色。

::component-code
---
prettier: true
ignore:
  - items
  - modelValue
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
---
::

::note
这里使用`highlight`属性来显示焦点状态。当发生验证错误时，在内部使用它。
::

### Variant

使用`variant` prop更改InputMenu的变体。

::component-code
---
prettier: true
ignore:
  - items
  - modelValue
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
---
::

### Size

使用`size`属性更改InputMenu的大小。

::component-code
---
prettier: true
ignore:
  - items
  - modelValue
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
---
::

### Icon

使用`icon` prop在InputMenu中显示[Icon](/docs/components/icon)。

::component-code
---
prettier: true
ignore:
  - items
  - modelValue
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

使用`selected-icon`道具自定义选中项目时的图标。将其转换为`i-lucide-check`。

::component-code
---
prettier: true
ignore:
  - items
  - modelValue
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
---
::

::framework-only
#nuxt
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
你可以在你的`ui.icons.check`下的`ui.icons.check`键中全局自定义这个图标。
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
---
::

::framework-only
#nuxt
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
你可以在你的`app.config.ts`中的`ui.icons.close`键下全局自定义这个图标。
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
你可以在你的`vite.config.ts`中的`ui.icons.close`键下全局自定义这个图标。
:::
::

### Avatar

使用`avatar`道具在InputMenu中显示[Avatar](/docs/components/avatar)。

::component-code
---
prettier: true
ignore:
  - items
  - modelValue
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
---
::

### 加载中

使用`loading` prop在InputMenu上显示加载图标。

::component-code
---
prettier: true
ignore:
  - items
  - modelValue
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
---
::

::framework-only
#nuxt
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
您可以在`ui.icons.loading`键下在`app.config.ts`中全局自定义此图标。
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
你可以在你的`ui.icons.loading`键下的`vite.config.ts`中全局自定义这个图标。
:::
::

### 禁用

使用`disabled` prop禁用InputMenu。

::component-code
---
prettier: true
ignore:
  - items
  - placeholder
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
external:
  - items
  - modelValue
externalTypes:
  - InputMenuItem[]
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
name: 'input-menu-items-icon-example'
---
::

::tip
您也可以使用`#leading`插槽来显示选定的图标。
::

### 在物品中使用头像

您可以使用`avatar`属性在项目中显示[Avatar](/docs/components/avatar)。

::component-example
---
collapse: true
name: 'input-menu-items-avatar-example'
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
name: 'input-menu-items-chip-example'
---
::

::note
在本例中，`#leading`插槽用于显示所选的筹码。
::

### 控件打开状态

您可以使用`default-open` prop或`v-model:open`指令控制打开状态。

::component-example
---
name: 'input-menu-open-example'
---
::

::note
在本例中，利用[`defineShortcuts`](/docs/composables/define-shortcuts)，您可以通过按：kbd{value="O"}来切换InputMenu。
::

### 焦点上的控件打开状态

你可以使用`open-on-focus`或`open-on-click`道具在输入被聚焦或点击时打开菜单。

::component-example
---
name: 'input-menu-open-focus-example'
---
::

### 控件搜索词

使用`v-model:search-term`指令控制搜索词。

::component-example
---
name: 'input-menu-search-term-example'
---
::

### 带旋转图标

下面是一个带有旋转图标的示例，该图标指示InputMenu的打开状态。

::component-example
---
name: 'input-menu-icon-example'
---
::

### 带创建项

使用`create-item`属性可以让用户添加预定义选项中没有的自定义值。

::component-example
---
collapse: true
name: 'input-menu-create-item-example'
---
::

::note
默认情况下，create选项在没有找到匹配项时显示。将其设置为`always`，即使存在类似的值也会显示。
::

::tip{to="#emits"}
使用`@create`事件来处理项目的创建。您将接收事件和项目作为参数。
::

### 使用获取的项目

您可以从API获取项目并在InputMenu中使用它们。

::component-example
---
collapse: true
name: 'input-menu-fetch-example'
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
name: 'input-menu-ignore-filter-example'
---
::

::note
本例使用[`refDebounced`](https://vueuse.org/shared/refDebounced/#refdebounced)对API调用进行反跳。`immediate: false`延迟了提取，因此在菜单打开之前不会发出请求。
::

### 带过滤器字段

使用`filter-fields` prop和一个字段数组来过滤`[labelKey]`上的. xml。

::component-example
---
collapse: true
name: 'input-menu-filter-fields-example'
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
name: 'input-menu-virtualize-example'
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
name: 'input-menu-infinite-scroll-example'
---
::

::note
本例使用`useLazyFetch`和`immediate: false`，因此数据仅在用户滚动时加载。
::

### 具有完整内容宽度

通过在`ui.content`插槽上添加`min-w-fit`类，可以将内容扩展到其项目的全宽。

::component-example
---
name: 'input-menu-content-width-example'
collapse: true
---
::

::tip
您还可以在`app.config.ts`中全局更改内容宽度：

```
export default defineAppConfig({
  ui: {
    inputMenu: {
      slots: {
        content: 'min-w-fit'
      }
    }
  }
})
```
::

### 作为国家选择器

您可以使用InputMenu作为国家/地区选择器，并进行延迟加载。只有在首次打开菜单时才会提取国家/地区。

::component-example
---
collapse: true
name: 'input-menu-countries-example'
---
::

::note
本例使用`useLazyFetch`和`immediate: false`，仅在首次打开菜单时加载国家/地区。
::

## API

### Props

:component-props

::callout{icon="i-simple-icons-mdnwebdocs" to="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attributes" target="_blank"}
此组件还支持所有原生`<input>` HTML属性。
::

### Slots

:component-slots

### Emits

:component-emits

### 曝光

通过模板引用访问组件时，可以使用以下命令：

| 名称|类型|
| ---- | ---- |
| `inputRef`{lang="ts-type"}| `Ref<HTMLInputElement \| null>`{lang="ts-type"}|
| `viewportRef`{lang="ts-type"}| `Ref<HTMLDivElement \| null>`{lang="ts-type"}|

## Theme

:component-theme

## Changelog

:component-changelog
