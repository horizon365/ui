---
description: 一个可选择的项目列表与搜索，虚拟化和丰富的项目呈现。
category: form
keywords:
  - option list
  - picker
  - selection
links:
  - label: Listbox
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/listbox
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Listbox.vue
---

## 用法

使用`v-model`指令来控制列表框的值，或使用`default-value`属性来设置初始值，当您不需要控制其状态时。

::component-code
---
collapse: true
hide:
  - class
ignore:
  - modelValue.label
  - modelValue.icon
  - modelValue.value
  - items
external:
  - items
  - modelValue
externalTypes:
  - ListboxItem[]
props:
  modelValue:
    label: 'France'
    icon: 'i-lucide-map-pin'
    value: 'FR'
  items:
    - label: 'France'
      icon: 'i-lucide-map-pin'
      value: 'FR'
    - label: 'Germany'
      icon: 'i-lucide-map-pin'
      value: 'DE'
    - label: 'Italy'
      icon: 'i-lucide-map-pin'
      value: 'IT'
    - label: 'Spain'
      icon: 'i-lucide-map-pin'
      value: 'ES'
    - label: 'Netherlands'
      icon: 'i-lucide-map-pin'
      value: 'NL'
    - label: 'Poland'
      icon: 'i-lucide-map-pin'
      value: 'PL'
    - label: 'Belgium'
      icon: 'i-lucide-map-pin'
      value: 'BE'
    - label: 'Portugal'
      icon: 'i-lucide-map-pin'
      value: 'PT'
    - label: 'Austria'
      icon: 'i-lucide-map-pin'
      value: 'AT'
    - label: 'Sweden'
      icon: 'i-lucide-map-pin'
      value: 'SE'
  class: 'w-full'
---
::

### 项目

使用`items` prop作为具有以下属性的对象数组：

- `label?: string`{lang="ts-type"}
- [`description?: string`{lang="ts-type"}](#with-description-in-items)
072x年07月07日星期一
079x年07月08日星期一
- [`avatar?: AvatarProps`{lang="ts-type"}](#with-avatar-in-items)
- [`chip?: ChipProps`{lang="ts-type"}](#with-chip-in-items)
097x年12月27日
- `onSelect?: (e: Event) => void`{lang="ts-type"}
- `class?: any`{lang="ts-type"}
- `ui?: { label?: ClassNameValue, separator?: ClassNameValue, item?: ClassNameValue, itemLeadingIcon?: ClassNameValue, ... }`{lang="ts-type"}

::component-code
---
collapse: true
hide:
  - class
ignore:
  - items
external:
  - items
externalTypes:
  - ListboxItem[]
props:
  items:
    - label: 'France'
      description: 'The Hexagon'
      icon: 'i-lucide-map-pin'
      value: 'FR'
    - label: 'Germany'
      description: 'The Federal Republic'
      icon: 'i-lucide-map-pin'
      value: 'DE'
    - label: 'Italy'
      description: 'The Boot'
      icon: 'i-lucide-map-pin'
      value: 'IT'
    - label: 'Spain'
      description: 'The Bull Skin'
      icon: 'i-lucide-map-pin'
      value: 'ES'
  class: 'w-full'
---
::

您还可以将数组的数组传递给`items`属性，以显示分隔的项目组。

::component-code
---
collapse: true
hide:
  - class
ignore:
  - items
external:
  - items
externalTypes:
  - ListboxItem[][]
props:
  items:
    - - label: 'France'
        icon: 'i-lucide-map-pin'
        value: 'FR'
      - label: 'Germany'
        icon: 'i-lucide-map-pin'
        value: 'DE'
      - label: 'Italy'
        icon: 'i-lucide-map-pin'
        value: 'IT'
    - - label: 'Brazil'
        icon: 'i-lucide-map-pin'
        value: 'BR'
      - label: 'Argentina'
        icon: 'i-lucide-map-pin'
        value: 'AR'
  class: 'w-full'
---
::

### 多个

使用`multiple`属性允许选择多个项目。启用后，`v-model`将是一个数组。

::component-code
---
collapse: true
hide:
  - class
ignore:
  - items
  - multiple
external:
  - items
externalTypes:
  - ListboxItem[]
props:
  multiple: true
  items:
    - label: 'France'
      icon: 'i-lucide-map-pin'
      value: 'FR'
    - label: 'Germany'
      icon: 'i-lucide-map-pin'
      value: 'DE'
    - label: 'Italy'
      icon: 'i-lucide-map-pin'
      value: 'IT'
    - label: 'Spain'
      icon: 'i-lucide-map-pin'
      value: 'ES'
  class: 'w-full'
---
::

### 值密钥

您可以选择使用`value-key` prop.configureto`undefined`来绑定对象的单个属性，而不是整个对象。

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
  - ListboxItem[]
props:
  modelValue: 'FR'
  valueKey: 'value'
  items:
    - label: 'France'
      icon: 'i-lucide-map-pin'
      value: 'FR'
    - label: 'Germany'
      icon: 'i-lucide-map-pin'
      value: 'DE'
    - label: 'Italy'
      icon: 'i-lucide-map-pin'
      value: 'IT'
    - label: 'Spain'
      icon: 'i-lucide-map-pin'
      value: 'ES'
  class: 'w-full'
---
::

### 过滤器

使用`filter` prop来显示过滤器输入或传递对象以自定义[Input](/docs/components/input)组件。将`false`转换为`false`。

::component-code
---
collapse: true
hide:
  - class
ignore:
  - items
external:
  - items
externalTypes:
  - ListboxItem[]
props:
  filter:
    placeholder: 'Filter...'
    icon: 'i-lucide-search'
  items:
    - label: 'France'
      icon: 'i-lucide-map-pin'
      value: 'FR'
    - label: 'Germany'
      icon: 'i-lucide-map-pin'
      value: 'DE'
    - label: 'Italy'
      icon: 'i-lucide-map-pin'
      value: 'IT'
    - label: 'Spain'
      icon: 'i-lucide-map-pin'
      value: 'ES'
    - label: 'Netherlands'
      icon: 'i-lucide-map-pin'
      value: 'NL'
    - label: 'Poland'
      icon: 'i-lucide-map-pin'
      value: 'PL'
  class: 'w-full'
---
::

### 选定图标

使用`selected-icon`道具自定义选中某个项目时的图标。将其转换为`i-lucide-check`。

::component-code
---
collapse: true
ignore:
  - items
  - modelValue
  - valueKey
  - class
external:
  - items
  - modelValue
externalTypes:
  - ListboxItem[]
props:
  modelValue: 'FR'
  selectedIcon: 'i-lucide-flame'
  valueKey: 'value'
  items:
    - label: 'France'
      icon: 'i-lucide-map-pin'
      value: 'FR'
    - label: 'Germany'
      icon: 'i-lucide-map-pin'
      value: 'DE'
    - label: 'Italy'
      icon: 'i-lucide-map-pin'
      value: 'IT'
    - label: 'Spain'
      icon: 'i-lucide-map-pin'
      value: 'ES'
  class: 'w-full'
---
::

### Size

使用`size`属性更改列表框的大小。

::component-code
---
collapse: true
hide:
  - class
ignore:
  - items
external:
  - items
externalTypes:
  - ListboxItem[]
props:
  size: xl
  items:
    - label: 'France'
      icon: 'i-lucide-map-pin'
      value: 'FR'
    - label: 'Germany'
      icon: 'i-lucide-map-pin'
      value: 'DE'
    - label: 'Italy'
      icon: 'i-lucide-map-pin'
      value: 'IT'
    - label: 'Spain'
      icon: 'i-lucide-map-pin'
      value: 'ES'
  class: 'w-full'
---
::

### 加载中

使用`loading`道具显示加载指示器。使用`loading-icon`道具自定义图标。

::component-code
---
collapse: true
hide:
  - class
ignore:
  - items
external:
  - items
externalTypes:
  - ListboxItem[]
props:
  loading: true
  items:
    - label: 'France'
      icon: 'i-lucide-map-pin'
      value: 'FR'
    - label: 'Germany'
      icon: 'i-lucide-map-pin'
      value: 'DE'
  class: 'w-full'
---
::

### 禁用

使用`disabled` prop防止用户与列表框进行任何交互。

::component-code
---
collapse: true
hide:
  - class
ignore:
  - items
external:
  - items
externalTypes:
  - ListboxItem[]
props:
  disabled: true
  items:
    - label: 'France'
      icon: 'i-lucide-map-pin'
      value: 'FR'
    - label: 'Germany'
      icon: 'i-lucide-map-pin'
      value: 'DE'
    - label: 'Italy'
      icon: 'i-lucide-map-pin'
      value: 'IT'
    - label: 'Spain'
      icon: 'i-lucide-map-pin'
      value: 'ES'
  class: 'w-full'
---
::

## 示例

### 带项目类型

可以将`type`属性与`separator`一起使用，以显示项之间的分隔符，或将`label`一起使用，以显示标签。

::component-code
---
collapse: true
hide:
  - class
ignore:
  - items
external:
  - items
externalTypes:
  - ListboxItem[][]
props:
  items:
    - - type: 'label'
        label: 'Fruits'
      - label: 'Apple'
      - label: 'Banana'
      - label: 'Blueberry'
      - label: 'Grapes'
      - label: 'Pineapple'
    - - type: 'label'
        label: 'Vegetables'
      - label: 'Aubergine'
      - label: 'Broccoli'
      - label: 'Carrot'
      - label: 'Courgette'
      - label: 'Leek'
  class: 'w-full'
---
::

::note
当使用`label`项目作为组标题时，传递一个数组数组，以便在搜索时将标签与其组一起过滤掉。
::

### 项目中带有图标

您可以使用`icon`属性在项目中显示[Icon](/docs/components/icon)。

::component-code
---
collapse: true
hide:
  - class
ignore:
  - items
external:
  - items
externalTypes:
  - ListboxItem[]
props:
  items:
    - label: 'Backlog'
      icon: 'i-lucide-circle-help'
      value: 'backlog'
    - label: 'Todo'
      icon: 'i-lucide-circle-plus'
      value: 'todo'
    - label: 'In Progress'
      icon: 'i-lucide-circle-arrow-up'
      value: 'in_progress'
    - label: 'Done'
      icon: 'i-lucide-circle-check'
      value: 'done'
  class: 'w-full'
---
::

### 物品中有头像

您可以使用`avatar`属性在项目中显示[Avatar](/docs/components/avatar)。

::component-code
---
collapse: true
hide:
  - class
ignore:
  - items
external:
  - items
externalTypes:
  - ListboxItem[]
props:
  items:
    - label: 'benjamincanac'
      avatar:
        src: 'https://github.com/benjamincanac.png'
    - label: 'HugoRCD'
      avatar:
        src: 'https://github.com/HugoRCD.png'
    - label: 'atinux'
      avatar:
        src: 'https://github.com/atinux.png'
    - label: 'romhml'
      avatar:
        src: 'https://github.com/romhml.png'
  class: 'w-full'
---
::

### 带芯片的物品

您可以使用`chip`属性在项目中显示[Chip](/docs/components/chip)。

::component-code
---
collapse: true
hide:
  - class
ignore:
  - items
external:
  - items
externalTypes:
  - ListboxItem[]
props:
  items:
    - label: 'bug'
      chip:
        color: 'error'
    - label: 'feature'
      chip:
        color: 'success'
    - label: 'enhancement'
      chip:
        color: 'info'
  class: 'w-full'
---
::

### 项目中有说明

可以使用`description`属性在标签下显示其他文本。

::component-code
---
collapse: true
hide:
  - class
ignore:
  - items
external:
  - items
externalTypes:
  - ListboxItem[]
props:
  items:
    - label: 'France'
      description: 'The Hexagon'
      icon: 'i-lucide-map-pin'
      value: 'FR'
    - label: 'Germany'
      description: 'The Federal Republic'
      icon: 'i-lucide-map-pin'
      value: 'DE'
    - label: 'Italy'
      description: 'The Boot'
      icon: 'i-lucide-map-pin'
      value: 'IT'
    - label: 'Spain'
      description: 'The Bull Skin'
      icon: 'i-lucide-map-pin'
      value: 'ES'
  class: 'w-full'
---
::

### 控制选定项目

您可以使用`default-value` prop或`v-model`指令来控制所选项目。

::component-example
---
name: 'listbox-model-value-example'
collapse: true
---
::

### 控件搜索词

使用`v-model:search-term`指令控制搜索词。

::component-example
---
name: 'listbox-search-term-example'
---
::

### 带忽略过滤器

将`ignore-filter`属性设置为`true`以禁用内部搜索并使用您自己的搜索逻辑。

::component-example
---
collapse: true
name: 'listbox-ignore-filter-example'
---
::

::note
此示例使用[`refDebounced`](https://vueuse.org/shared/refDebounced/#refdebounced)对API调用进行反跳。
::

### 带过滤器字段

使用`filter-fields` prop和一个字段数组来过滤`[labelKey]`上的. xml。

::component-example
---
collapse: true
name: 'listbox-filter-fields-example'
---
::

### 通过虚拟化

使用`virtualize` prop将大型列表虚拟化为布尔值或带有`{ estimateSize: 32, overscan: 12 }`等选项的对象。

::component-example
---
name: 'listbox-virtualize-example'
collapse: true
---
::

### 作为传输列表

您可以使用[Button](/docs/components/button)控件组合两个Listbox组件来构建传输列表模式。

::component-example
---
name: 'listbox-transfer-list-example'
collapse: true
---
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
