---
title: ContextMenu
description: 右键单击元素时显示操作的菜单。
category: overlay
keywords:
  - right click menu
links:
  - label: ContextMenu
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/context-menu
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/ContextMenu.vue
---

## 用法

在ContextMenu的默认窗口中使用您喜欢的任何内容，然后右键单击该窗口以显示菜单。

::component-code
---
prettier: true
collapse: true
ignore:
  - items
  - ui.content
external:
  - items
externalTypes:
  - ContextMenuItem[][]
props:
  items:
    - - label: Appearance
        children:
          - label: System
            icon: i-lucide-monitor
          - label: Light
            icon: i-lucide-sun
          - label: Dark
            icon: i-lucide-moon
    - - label: Show Sidebar
        kbds:
          - meta
          - s
      - label: Show Toolbar
        kbds:
          - shift
          - meta
          - d
      - label: Collapse Pinned Tabs
        disabled: true
    - - label: Refresh the Page
      - label: Clear Cookies and Refresh
      - label: Clear Cache and Refresh
      - type: separator
      - label: Developer
        children:
          - - label: View Source
              kbds:
                - meta
                - shift
                - u
            - label: Developer Tools
              kbds:
                - option
                - meta
                - i
            - label: Inspect Elements
              kbds:
                - option
                - meta
                - c
          - - label: JavaScript Console
              kbds:
                - option
                - meta
                - j
slots:
  default: |

    <div class="flex items-center justify-center rounded-md border border-dashed border-accented text-sm aspect-video w-72">
      Right click here
    </div>
---

:div{class="flex items-center justify-center rounded-md border border-dashed border-accented text-sm aspect-video w-72"}[Right click here]
::

### 项目

使用`items` prop作为具有以下属性的对象数组：

- `label?: string`{lang="ts-type"}
- `icon?: string`{lang="ts-type"}
- `avatar?: AvatarProps`{lang="ts-type"}
- `kbds?: string[] | KbdProps[]`{lang="ts-type"}
- [`type?: "link" | "label" | "separator" | "checkbox"`{lang="ts-type"}](#with-checkbox-items)
- [`color?: "error" | "primary" | "secondary" | "success" | "info" | "warning" | "neutral"`{lang="ts-type"}](#with-color-items)
- [`checked?: boolean`{lang="ts-type"}](#with-checkbox-items)
- `disabled?: boolean`{lang="ts-type"}
- [`slot?: string`{lang="ts-type"}](#with-custom-slot)
- `onSelect?: (e: Event) => void`{lang="ts-type"}
- [`onUpdateChecked?: (checked: boolean) => void`{lang="ts-type"}](#with-checkbox-items)
- `children?: ContextMenuItem[] | ContextMenuItem[][]`{lang="ts-type"}
- `class?: any`{lang="ts-type"}
- `ui?: { item?: ClassNameValue, label?: ClassNameValue, separator?: ClassNameValue, itemLeadingIcon?: ClassNameValue, itemLeadingAvatarSize?: ClassNameValue, itemLeadingAvatar?: ClassNameValue, itemLabel?: ClassNameValue, itemLabelExternalIcon?: ClassNameValue, itemTrailing?: ClassNameValue, itemTrailingIcon?: ClassNameValue, itemTrailingKbds?: ClassNameValue, itemTrailingKbdsSize?: ClassNameValue }`{lang="ts-type"}

您可以从[Link](/docs/components/link#props)组件传递任何属性，如`to`、`target`等。

::component-code
---
prettier: true
collapse: true
ignore:
  - items
  - ui.content
external:
  - items
externalTypes:
  - ContextMenuItem[][]
props:
  items:
    - - label: Appearance
        children:
          - label: System
            icon: i-lucide-monitor
          - label: Light
            icon: i-lucide-sun
          - label: Dark
            icon: i-lucide-moon
    - - label: Show Sidebar
        kbds:
          - meta
          - s
      - label: Show Toolbar
        kbds:
          - shift
          - meta
          - d
      - label: Collapse Pinned Tabs
        disabled: true
    - - label: Refresh the Page
      - label: Clear Cookies and Refresh
      - label: Clear Cache and Refresh
      - type: separator
      - label: Developer
        children:
          - - label: View Source
              kbds:
                - meta
                - shift
                - u
            - label: Developer Tools
              kbds:
                - option
                - meta
                - i
            - label: Inspect Elements
              kbds:
                - option
                - meta
                - c
          - - label: JavaScript Console
              kbds:
                - option
                - meta
                - j
  ui:
    content: 'w-48'
slots:
  default: |

    <div class="flex items-center justify-center rounded-md border border-dashed border-accented text-sm aspect-video w-72">
      Right click here
    </div>
---

:div{class="flex items-center justify-center rounded-md border border-dashed border-accented text-sm aspect-video w-72"}[Right click here]
::

::note
您还可以将数组的数组传递给`items`属性，以创建分隔的项目组。
::

::tip
每个项都可以采用与`items`道具具有相同属性的`children`对象数组来创建一个嵌套菜单，该菜单可以使用`open`、`defaultOpen`和`content`属性进行控制。
::

### Size

使用`size`属性更改ContextMenu的大小。

::component-code
---
prettier: true
collapse: true
ignore:
  - items
  - ui.content
external:
  - items
externalTypes:
  - ContextMenuItem[]
props:
  size: xl
  items:
    - label: System
      icon: i-lucide-monitor
    - label: Light
      icon: i-lucide-sun
    - label: Dark
      icon: i-lucide-moon
  ui:
    content: 'w-48'
slots:
  default: |

    <div class="flex items-center justify-center rounded-md border border-dashed border-accented text-sm aspect-video w-72">
      Right click here
    </div>
---

:div{class="flex items-center justify-center rounded-md border border-dashed border-accented text-sm aspect-video w-72"}[Right click here]
::

### Modal

使用`modal`属性控制ContextMenu是否阻止与外部内容的交互。

::component-code
---
prettier: true
collapse: true
ignore:
  - items
  - ui.content
external:
  - items
externalTypes:
  - ContextMenuItem[]
props:
  modal: false
  items:
    - label: System
      icon: i-lucide-monitor
    - label: Light
      icon: i-lucide-sun
    - label: Dark
      icon: i-lucide-moon
  ui:
    content: 'w-48'
slots:
  default: |

    <div class="flex items-center justify-center rounded-md border border-dashed border-accented text-sm aspect-video w-72">
      Right click here
    </div>
---

:div{class="flex items-center justify-center rounded-md border border-dashed border-accented text-sm aspect-video w-72"}[Right click here]
::


### 禁用

使用`disabled` prop禁用ContextMenu。

::component-code
---
prettier: true
collapse: true
ignore:
  - items
  - ui.content
external:
  - items
externalTypes:
  - ContextMenuItem[]
props:
  disabled: true
  items:
    - label: System
      icon: i-lucide-monitor
    - label: Light
      icon: i-lucide-sun
    - label: Dark
      icon: i-lucide-moon
  ui:
    content: 'w-48'
slots:
  default: |

    <div class="flex items-center justify-center rounded-md border border-dashed border-accented text-sm aspect-video w-72">
      Right click here
    </div>
---

:div{class="flex items-center justify-center rounded-md border border-dashed border-accented text-sm aspect-video w-72"}[Right click here]
::

## 示例

### 带有复选框项

您可以将`type`属性与`checkbox`一起使用，并使用`checked`/`onUpdateChecked`属性来控制项的选中状态。

::component-example
---
collapse: true
name: 'context-menu-checkbox-items-example'
---
::

::note
为了确保`checked`状态的项目的反应性，建议将`items`数组包装在`computed`中。
::

### 带颜色项

您可以使用`color`属性用颜色突出显示某些项目。

::component-example
---
collapse: true
name: 'context-menu-color-items-example'
---
::

### 带自定义插槽

使用`slot`属性自定义特定项。

您将可以访问以下插槽：

- `#{{ item.slot }}`{lang="ts-type"}
- `#{{ item.slot }}-leading`{lang="ts-type"}
- `#{{ item.slot }}-label`{lang="ts-type"}
- `#{{ item.slot }}-trailing`{lang="ts-type"}

::component-example
---
collapse: true
name: 'context-menu-custom-slot-example'
---
::

::tip{to="#slots"}
您还可以使用`#item`、`#item-leading`、`#item-label`和`#item-trailing`插槽自定义所有项目。
::

### 提取快捷方式

使用[extractShortcuts](/docs/composables/extract-shortcuts)实用程序自动定义具有`kbds`属性的菜单项的快捷方式。它递归地提取快捷方式并返回与[defineShortcuts](/docs/composables/define-shortcuts)兼容的对象。

```vue
<script setup lang="ts">
const items = [
  [{
    label: 'Show Sidebar',
    kbds: ['meta', 'S'],
    onSelect() {
      console.log('Show Sidebar clicked')
    }
  }, {
    label: 'Show Toolbar',
    kbds: ['shift', 'meta', 'D'],
    onSelect() {
      console.log('Show Toolbar clicked')
    }
  }, {
    label: 'Collapse Pinned Tabs',
    disabled: true
  }], [{
    label: 'Refresh the Page'
  }, {
    label: 'Clear Cookies and Refresh'
  }, {
    label: 'Clear Cache and Refresh'
  }, {
    type: 'separator' as const
  }, {
    label: 'Developer',
    children: [[{
      label: 'View Source',
      kbds: ['option', 'meta', 'U'],
      onSelect() {
        console.log('View Source clicked')
      }
    }, {
      label: 'Developer Tools',
      kbds: ['option', 'meta', 'I'],
      onSelect() {
        console.log('Developer Tools clicked')
      }
    }], [{
      label: 'Inspect Elements',
      kbds: ['option', 'meta', 'C'],
      onSelect() {
        console.log('Inspect Elements clicked')
      }
    }], [{
      label: 'JavaScript Console',
      kbds: ['option', 'meta', 'J'],
      onSelect() {
        console.log('JavaScript Console clicked')
      }
    }]]
  }]
]

defineShortcuts(extractShortcuts(items))
</script>
```

::note
在此示例中，：kbd{value="meta"}：kbd{value="S" class="ms-px"}、：kbd{value="shift"}：kbd{value="meta" class="ms-px"}：kbd{value="D" class="ms-px"}、：kbd{value="option"}：kbd{value="meta" class="ms-px"}：kbd{value="U" class="ms-px"}、：kbd{value="option"}：kbd{value="meta" class="ms-px"}：kbd{value="I" class="ms-px"}、：kbd{value="option"}：kbd{value="meta" class="ms-px"}：kbd{value="C" class="ms-px"}和：kbd{value="option"}：kbd{value="meta" class="ms-px"}：kbd{value="J" class="ms-px"}将触发相应项目的`select`功能。
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
