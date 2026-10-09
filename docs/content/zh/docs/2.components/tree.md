---
description: 一个树视图组件，用于显示分层数据结构并与之交互。
category: data
keywords:
  - file tree
  - hierarchy
  - folder tree
links:
  - label: 树
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/tree
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Tree.vue
---

## 用法

使用“树”组件可以显示项的层次结构。

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
  - TreeItem[]
props:
  items:
    - label: 'app/'
      defaultExpanded: true
      children:
        - label: 'composables/'
          children:
            - label: 'useAuth.ts'
              icon: 'i-vscode-icons-file-type-typescript'
            - label: 'useUser.ts'
              icon: 'i-vscode-icons-file-type-typescript'
        - label: 'components/'
          defaultExpanded: true
          children:
            - label: 'Card.vue'
              icon: 'i-vscode-icons-file-type-vue'
            - label: 'Button.vue'
              icon: 'i-vscode-icons-file-type-vue'
    - label: 'app.vue'
      icon: 'i-vscode-icons-file-type-vue'
    - label: 'nuxt.config.ts'
      icon: 'i-vscode-icons-file-type-nuxt'
  class: 'w-60'
---
::

### 项目

使用`items` prop作为具有以下属性的对象数组：

- `icon?: string`{lang="ts-type"}
- `label?: string`{lang="ts-type"}
- `trailingIcon?: string`{lang="ts-type"}
- `defaultExpanded?: boolean`{lang="ts-type"}
- `disabled?: boolean`{lang="ts-type"}
- `slot?: string`{lang="ts-type"}
- `children?: TreeItem[]`{lang="ts-type"}
- `onToggle?: (e: TreeItemToggleEvent<TreeItem>) => void`{lang="ts-type"}
- `onSelect?: (e: TreeItemSelectEvent<TreeItem>) => void`{lang="ts-type"}
- `class?: any`{lang="ts-type"}
- `ui?: { item?: ClassNameValue, itemWithChildren?: ClassNameValue, link?: ClassNameValue, linkLeadingIcon?: ClassNameValue, linkLabel?: ClassNameValue, linkTrailing?: ClassNameValue, linkTrailingIcon?: ClassNameValue, listWithChildren?: ClassNameValue }`{lang="ts-type"}

::note
每个项目都需要一个唯一的标识符。如果没有提供`get-key`，组件将使用`label` prop作为标识符。理想情况下，您应该提供`get-key`函数prop以返回唯一标识符。或者，您可以使用`labelKey` prop指定哪个属性用作唯一标识符。
::

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
  - TreeItem[]
props:
  items:
    - label: 'app/'
      defaultExpanded: true
      children:
        - label: 'composables/'
          children:
            - label: 'useAuth.ts'
              icon: 'i-vscode-icons-file-type-typescript'
            - label: 'useUser.ts'
              icon: 'i-vscode-icons-file-type-typescript'
        - label: 'components/'
          defaultExpanded: true
          children:
            - label: 'Card.vue'
              icon: 'i-vscode-icons-file-type-vue'
            - label: 'Button.vue'
              icon: 'i-vscode-icons-file-type-vue'
    - label: 'app.vue'
      icon: 'i-vscode-icons-file-type-vue'
    - label: 'nuxt.config.ts'
      icon: 'i-vscode-icons-file-type-nuxt'
  class: 'w-60'
---
::

### 多个

使用`multiple`属性允许选择多个项目。

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
  - TreeItem[]
props:
  multiple: true
  items:
    - label: 'app/'
      defaultExpanded: true
      children:
        - label: 'composables/'
          children:
            - label: 'useAuth.ts'
              icon: 'i-vscode-icons-file-type-typescript'
            - label: 'useUser.ts'
              icon: 'i-vscode-icons-file-type-typescript'
        - label: 'components/'
          defaultExpanded: true
          children:
            - label: 'Card.vue'
              icon: 'i-vscode-icons-file-type-vue'
            - label: 'Button.vue'
              icon: 'i-vscode-icons-file-type-vue'
    - label: 'app.vue'
      icon: 'i-vscode-icons-file-type-vue'
    - label: 'nuxt.config.ts'
      icon: 'i-vscode-icons-file-type-nuxt'
  class: 'w-60'
---
::

### 嵌套：badge{label="4.1+" class="align-text-top"}

使用`nested`属性来控制树是以嵌套结构还是以平面列表的形式呈现。

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
  - TreeItem[]
props:
  nested: false
  items:
    - label: 'app/'
      defaultExpanded: true
      children:
        - label: 'composables/'
          children:
            - label: 'useAuth.ts'
              icon: 'i-vscode-icons-file-type-typescript'
            - label: 'useUser.ts'
              icon: 'i-vscode-icons-file-type-typescript'
        - label: 'components/'
          defaultExpanded: true
          children:
            - label: 'Card.vue'
              icon: 'i-vscode-icons-file-type-vue'
            - label: 'Button.vue'
              icon: 'i-vscode-icons-file-type-vue'
    - label: 'app.vue'
      icon: 'i-vscode-icons-file-type-vue'
    - label: 'nuxt.config.ts'
      icon: 'i-vscode-icons-file-type-nuxt'
  class: 'w-60'
---
::

::note{to="#with-virtualization"}
当`nested`是`false`时，所有项目都在同一级别上呈现，并使用缩进来表示层次结构。这对于虚拟化或拖放功能很有用。
::

### Color

使用`color`道具来改变树的颜色。

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
  - TreeItem[]
props:
  color: neutral
  items:
    - label: 'app/'
      defaultExpanded: true
      children:
        - label: 'composables/'
          children:
            - label: 'useAuth.ts'
              icon: 'i-vscode-icons-file-type-typescript'
            - label: 'useUser.ts'
              icon: 'i-vscode-icons-file-type-typescript'
        - label: 'components/'
          defaultExpanded: true
          children:
            - label: 'Card.vue'
              icon: 'i-vscode-icons-file-type-vue'
            - label: 'Button.vue'
              icon: 'i-vscode-icons-file-type-vue'
    - label: 'app.vue'
      icon: 'i-vscode-icons-file-type-vue'
    - label: 'nuxt.config.ts'
      icon: 'i-vscode-icons-file-type-nuxt'
  class: 'w-60'
---
::

### Size

使用`size`属性来改变树的大小。

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
  - TreeItem[]
props:
  size: xl
  items:
    - label: 'app/'
      defaultExpanded: true
      children:
        - label: 'composables/'
          children:
            - label: 'useAuth.ts'
              icon: 'i-vscode-icons-file-type-typescript'
            - label: 'useUser.ts'
              icon: 'i-vscode-icons-file-type-typescript'
        - label: 'components/'
          defaultExpanded: true
          children:
            - label: 'Card.vue'
              icon: 'i-vscode-icons-file-type-vue'
            - label: 'Button.vue'
              icon: 'i-vscode-icons-file-type-vue'
    - label: 'app.vue'
      icon: 'i-vscode-icons-file-type-vue'
    - label: 'nuxt.config.ts'
      icon: 'i-vscode-icons-file-type-nuxt'
  class: 'w-60'
---
::

### 拖尾图标

使用`trailing-icon` prop将父节点的尾随[Icon](/docs/components/icon)自定义为`i-lucide-chevron-down`。

::note
如果为某个项目指定了图标，则该图标的优先级始终高于这些道具。
::

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
  - TreeItem[]
props:
  trailingIcon: 'i-lucide-arrow-down'
  items:
    - label: 'app/'
      defaultExpanded: true
      children:
        - label: 'composables/'
          trailingIcon: 'i-lucide-chevron-down'
          children:
            - label: 'useAuth.ts'
              icon: 'i-vscode-icons-file-type-typescript'
            - label: 'useUser.ts'
              icon: 'i-vscode-icons-file-type-typescript'
        - label: 'components/'
          defaultExpanded: true
          children:
            - label: 'Card.vue'
              icon: 'i-vscode-icons-file-type-vue'
            - label: 'Button.vue'
              icon: 'i-vscode-icons-file-type-vue'
    - label: 'app.vue'
      icon: 'i-vscode-icons-file-type-vue'
    - label: 'nuxt.config.ts'
      icon: 'i-vscode-icons-file-type-nuxt'
  class: 'w-60'
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

### 扩展图标

使用`expanded-icon`和`collapsed-icon`属性可以自定义父节点在展开或折叠时的图标。请分别将其设置为`i-lucide-folder-open`和`i-lucide-folder`。

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
  - TreeItem[]
props:
  expandedIcon: 'i-lucide-book-open'
  collapsedIcon: 'i-lucide-book'
  items:
    - label: 'app/'
      defaultExpanded: true
      children:
        - label: 'composables/'
          children:
            - label: 'useAuth.ts'
              icon: 'i-vscode-icons-file-type-typescript'
            - label: 'useUser.ts'
              icon: 'i-vscode-icons-file-type-typescript'
        - label: 'components/'
          defaultExpanded: true
          children:
            - label: 'Card.vue'
              icon: 'i-vscode-icons-file-type-vue'
            - label: 'Button.vue'
              icon: 'i-vscode-icons-file-type-vue'
    - label: 'app.vue'
      icon: 'i-vscode-icons-file-type-vue'
    - label: 'nuxt.config.ts'
      icon: 'i-vscode-icons-file-type-nuxt'
  class: 'w-60'
---
::

::framework-only
#nuxt
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
您可以在`app.config.ts`中的`ui.icons.folder`和`ui.icons.folderOpen`键下全局自定义这些图标。
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
您可以在`vite.config.ts`中的`ui.icons.folder`和`ui.icons.folderOpen`键下全局自定义这些图标。
:::
::

### 已禁用

使用`disabled` prop防止用户与树进行任何交互。

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
  - TreeItem[]
props:
  disabled: true
  items:
    - label: 'app'
      icon: 'i-lucide-folder'
      defaultExpanded: true
      children:
        - label: 'composables'
          icon: 'i-lucide-folder'
          children:
            - label: 'useAuth.ts'
              icon: 'i-vscode-icons-file-type-typescript'
            - label: 'useUser.ts'
              icon: 'i-vscode-icons-file-type-typescript'
        - label: 'components'
          icon: 'i-lucide-folder'
          children:
            - label: 'Home'
              icon: 'i-lucide-folder'
              children:
                - label: 'Card.vue'
                  icon: 'i-vscode-icons-file-type-vue'
                - label: 'Button.vue'
                  icon: 'i-vscode-icons-file-type-vue'
    - label: 'app.vue'
      icon: 'i-vscode-icons-file-type-vue'
    - label: 'nuxt.config.ts'
      icon: 'i-vscode-icons-file-type-nuxt'
  class: 'w-60'
---
::

::note
您也可以使用`item.disabled`禁用个别项目。
::

## 示例

### 控制选定项目

您可以使用`default-value` prop或`v-model`指令控制所选项目。

::component-example
---
name: 'tree-model-value-example'
collapse: true
props:
  class: 'w-60'
---
::

::tip
当提供`v-model`或`default-value`时，使用`get-key`属性更改用于从每个项目获取唯一密钥的函数。
::

如果要阻止选中某个项目，可以使用`item.onSelect()`{lang="ts-type"}属性或全局`select`事件：

::component-example
---
name: 'tree-on-select-example'
collapse: true
props:
  class: 'w-60'
---
::

::note
这使您可以展开或折叠父项而不选择它。
::

### Control扩展项

您可以使用`default-expanded` prop或`v-model`指令控制展开的项目。

::component-example
---
name: 'tree-expanded-example'
collapse: true
props:
  class: 'w-60'
---
::

如果你想阻止一个项目被展开，你可以使用`item.onToggle()`{lang="ts-type"}属性或全局`toggle`事件：

::component-example
---
name: 'tree-on-toggle-example'
collapse: true
props:
  class: 'w-60'
---
::

::note
这可让您选取父项目，而不需展开或收合其子项目。
::

### 在项目中带有复选框：badgexp438x

您可以使用`item-leading`插槽为项目添加一个[Checkbox](/docs/components/checkbox)。使用`multiple`、`propagate-select`和`bubble-select`道具可以实现具有父子关系的多选，使用`select`和`toggle`事件可以控制项目的选中和展开状态。

::component-example
---
name: 'tree-checkbox-items-example'
collapse: true
props:
  class: 'w-60'
---
::

::note
本例使用`as`属性将项目从`button`更改为`div`，因为[`Checkbox`](/docs/components/checkbox)也呈现为`button`。
::

### 通过拖放：badge{label="4.1+" class="align-text-top"}

使用[`@vueuse/integrations`](https://vueuse.org/integrations/README.html)中的[`useSortable`](https://vueuse.org/integrations/useSortable/)组合可在树上启用拖放功能。此集成包装[Sortable.js](https://sortablejs.github.io/Sortable/)以提供无缝拖放体验。

::component-example
---
prettier: true
collapse: true
name: 'tree-drag-and-drop-example'
---
::

::note
此示例将`nested`属性设置为`false`，以获得一个平面项列表，以便可以拖放这些项。
::

### 虚拟化：badge{label="4.1+" class="align-text-top"}

使用`virtualize` prop将大型列表虚拟化为布尔值或带有`{ estimateSize: 32, overscan: 12 }`等选项的对象。

::warning
启用虚拟化后，树结构将变平，类似于将`nested`属性设置为`false`。
::

::component-example
---
prettier: true
name: 'tree-virtualize-example'
props:
  class: 'w-60'
---
::

### 带自定义插槽

使用`slot`属性可自定义特定项。

您将可以访问以下插槽：

- `#{{ item.slot }}-wrapper`{lang="ts-type"}
- `#{{ item.slot }}`{lang="ts-type"}
- `#{{ item.slot }}-leading`{lang="ts-type"}
- `#{{ item.slot }}-label`{lang="ts-type"}
- `#{{ item.slot }}-trailing`{lang="ts-type"}

::component-example
---
name: 'tree-custom-slot-example'
collapse: true
props:
  class: 'w-60'
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
