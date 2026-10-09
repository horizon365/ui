---
title: 下拉菜单
description: 单击元素时显示操作的菜单。
category: overlay
keywords:
  - menu
  - context menu
  - actions
links:
  - label: 下拉菜单
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/dropdown-menu
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/DropdownMenu.vue
---

## 用法

在下拉菜单的默认槽中使用[Button](/docs/components/button)或任何其他组件。

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
  - DropdownMenuItem[][]
props:
  items:
    - - label: Benjamin
        avatar:
          src: 'https://github.com/benjamincanac.png'
          loading: lazy
        type: label
    - - label: Profile
        icon: i-lucide-user
      - label: Billing
        icon: i-lucide-credit-card
      - label: Settings
        icon: i-lucide-cog
        kbds:
          - ','
      - label: Keyboard shortcuts
        icon: i-lucide-monitor
    - - label: Team
        icon: i-lucide-users
        filter:
          placeholder: 'Search members...'
        children:
          - - label: benjamincanac
              avatar:
                src: 'https://github.com/benjamincanac.png'
                loading: lazy
            - label: HugoRCD
              avatar:
                src: 'https://github.com/HugoRCD.png'
                loading: lazy
            - label: atinux
              avatar:
                src: 'https://github.com/atinux.png'
                loading: lazy
            - label: romhml
              avatar:
                src: 'https://github.com/romhml.png'
                loading: lazy
            - label: sandros94
              avatar:
                src: 'https://github.com/sandros94.png'
                loading: lazy
            - label: J-Michalek
              avatar:
                src: 'https://github.com/J-Michalek.png'
                loading: lazy
            - label: hywax
              avatar:
                src: 'https://github.com/hywax.png'
                loading: lazy
      - label: Invite users
        icon: i-lucide-user-plus
        children:
          - - label: Email
              icon: i-lucide-mail
            - label: Message
              icon: i-lucide-message-square
          - - label: More
              icon: i-lucide-circle-plus
              children:
                - label: Import from Slack
                  icon: i-simple-icons-slack
                  to: 'https://slack.com'
                  target: _blank
                - label: Import from Trello
                  icon: i-simple-icons-trello
                - label: Import from Asana
                  icon: i-simple-icons-asana
      - label: New team
        icon: i-lucide-plus
        kbds:
          - meta
          - n
    - - label: GitHub
        icon: i-simple-icons-github
        to: 'https://github.com/nuxt/ui'
        target: _blank
      - label: Support
        icon: i-lucide-life-buoy
        to: '/docs/components/dropdown-menu'
      - label: API
        icon: i-lucide-cloud
        disabled: true
    - - label: Logout
        icon: i-lucide-log-out
        color: error
        kbds:
          - shift
          - meta
          - q
slots:
  default: |

    <UButton icon="i-lucide-menu" color="neutral" variant="outline" />
---

:u-button{icon="i-lucide-menu" color="neutral" variant="outline"}
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
- `children?: DropdownMenuItem[] | DropdownMenuItem[][]`{lang="ts-type"}
- [`filter?: boolean | InputProps`{lang="ts-type"}](#with-filter-items)
- `filterFields?: string[]`{lang="ts-type"}
- `ignoreFilter?: boolean`{lang="ts-type"}
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
  - DropdownMenuItem[][]
props:
  items:
    - - label: Benjamin
        avatar:
          src: 'https://github.com/benjamincanac.png'
          loading: lazy
        type: label
    - - label: Profile
        icon: i-lucide-user
      - label: Billing
        icon: i-lucide-credit-card
      - label: Settings
        icon: i-lucide-cog
        kbds:
          - ','
      - label: Keyboard shortcuts
        icon: i-lucide-monitor
    - - label: Team
        icon: i-lucide-users
      - label: Invite users
        icon: i-lucide-user-plus
        children:
          - - label: Email
              icon: i-lucide-mail
            - label: Message
              icon: i-lucide-message-square
          - - label: More
              icon: i-lucide-circle-plus
              children:
                - label: Import from Slack
                  icon: i-simple-icons-slack
                  to: 'https://slack.com'
                  target: _blank
                - label: Import from Trello
                  icon: i-simple-icons-trello
                - label: Import from Asana
                  icon: i-simple-icons-asana
      - label: New team
        icon: i-lucide-plus
        kbds:
          - meta
          - n
    - - label: GitHub
        icon: i-simple-icons-github
        to: 'https://github.com/nuxt/ui'
        target: _blank
      - label: Support
        icon: i-lucide-life-buoy
        to: '/docs/components/dropdown-menu'
      - label: API
        icon: i-lucide-cloud
        disabled: true
    - - label: Logout
        icon: i-lucide-log-out
        kbds:
          - shift
          - meta
          - q
  ui:
    content: 'w-48'
slots:
  default: |

    <UButton icon="i-lucide-menu" color="neutral" variant="outline" />
---

:u-button{icon="i-lucide-menu" color="neutral" variant="outline"}
::

::note
您还可以将数组的数组传递给`items` prop以创建单独的项目组。
::

::tip
每个项目都可以使用一个`children`对象数组，这些对象具有与`items`属性相同的属性，以创建一个嵌套菜单，可以使用`open`，`defaultOpen`和`content`属性进行控制。
::

### 内容

使用`content`属性控制下拉菜单内容的呈现方式，例如`align`或`side`。

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
  - DropdownMenuItem[]
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
  items:
    - label: Profile
      icon: i-lucide-user
    - label: Billing
      icon: i-lucide-credit-card
    - label: Settings
      icon: i-lucide-cog
  content:
    align: start
    side: bottom
    sideOffset: 8
  ui:
    content: 'w-48'
slots:
  default: |

    <UButton label="Open" icon="i-lucide-menu" color="neutral" variant="outline" />
---

:u-button{label="开放" icon="i-lucide-menu" color="neutral" variant="outline"}
::

### 过滤器：badge{label="4.6+" class="align-text-top"}

使用`filter`属性在下拉菜单中显示一个过滤器输入。

::note{to="#with-ignore-filter"}
使用`ignore-filter` prop禁用内部搜索，并使用自己的搜索逻辑。
::

::note{to="#with-filter-fields"}
使用`filter-fields`属性指定要过滤的字段。默认情况下，它使用`labelKey`属性。
::

您可以从[Input](/docs/components/input)组件传递任何属性来对其进行自定义。

::component-code
---
prettier: true
collapse: true
ignore:
  - items
  - filter.icon
  - content.align
  - ui.content
external:
  - items
externalTypes:
  - DropdownMenuItem[]
props:
  filter:
    icon: i-lucide-search
  items:
    - label: Profile
      icon: i-lucide-user
    - label: Billing
      icon: i-lucide-credit-card
    - label: Settings
      icon: i-lucide-cog
    - label: Team
      icon: i-lucide-users
    - label: Invite users
      icon: i-lucide-user-plus
    - label: New team
      icon: i-lucide-plus
  content:
    align: start
  ui:
    content: 'w-48'
slots:
  default: |

    <UButton label="Open" icon="i-lucide-menu" color="neutral" variant="outline" />
---

:u-button{label="开放" icon="i-lucide-menu" color="neutral" variant="outline"}
::

::tip{to="#with-filter-items"}
您还可以使用`children`项目上的`filter`字段在特定子菜单上启用过滤器。
::

### Arrow

使用`arrow` prop在下拉菜单上显示箭头。

::component-code
---
prettier: true
collapse: true
ignore:
  - arrow
  - items
  - ui.content
external:
  - items
externalTypes:
  - DropdownMenuItem[]
props:
  arrow: true
  items:
    - label: Profile
      icon: i-lucide-user
    - label: Billing
      icon: i-lucide-credit-card
    - label: Settings
      icon: i-lucide-cog
  ui:
    content: 'w-48'
slots:
  default: |

    <UButton label="Open" icon="i-lucide-menu" color="neutral" variant="outline" />
---

:u-button{label="开放" icon="i-lucide-menu" color="neutral" variant="outline"}
::

### Size

使用`size` prop控制下拉菜单的大小。

::component-code
---
prettier: true
collapse: true
ignore:
  - items
  - content.align
  - ui.content
external:
  - items
externalTypes:
  - DropdownMenuItem[]
props:
  size: xl
  items:
    - label: Profile
      icon: i-lucide-user
    - label: Billing
      icon: i-lucide-credit-card
    - label: Settings
      icon: i-lucide-cog
  content:
    align: start
  ui:
    content: 'w-48'
slots:
  default: |

    <UButton size="xl" label="Open" icon="i-lucide-menu" color="neutral" variant="outline" />
---

:u-button{size="xl" label="开放" icon="i-lucide-menu" color="neutral" variant="outline"}
::

::warning
`size`道具不会被代理到按钮，你需要自己设置。
::

::note
当使用相同的大小时，下拉菜单项将与按钮完美对齐。
::

### Modal

使用`modal`属性控制下拉菜单是否阻止与外部内容的交互。

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
  - DropdownMenuItem[]
props:
  modal: false
  items:
    - label: Profile
      icon: i-lucide-user
    - label: Billing
      icon: i-lucide-credit-card
    - label: Settings
      icon: i-lucide-cog
  ui:
    content: 'w-48'
slots:
  default: |

    <UButton label="Open" icon="i-lucide-menu" color="neutral" variant="outline" />
---

:u-button{label="开放" icon="i-lucide-menu" color="neutral" variant="outline"}
::

### 禁用

使用`disabled`属性禁用下拉菜单。

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
  - DropdownMenuItem[]
props:
  disabled: true
  items:
    - label: Profile
      icon: i-lucide-user
    - label: Billing
      icon: i-lucide-credit-card
    - label: Settings
      icon: i-lucide-cog
  ui:
    content: 'w-48'
slots:
  default: |

    <UButton label="Open" icon="i-lucide-menu" color="neutral" variant="outline" />
---

:u-button{label="开放" icon="i-lucide-menu" color="neutral" variant="outline"}
::

## 示例

### 带有复选框项

您可以将`type`属性与`checkbox`一起使用，并使用`checked`/`onUpdateChecked`属性来控制项的选中状态。

::component-example
---
collapse: true
name: 'dropdown-menu-checkbox-items-example'
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
name: 'dropdown-menu-color-items-example'
---
::

###  With filter items：badge{label="4.6+" class="align-text-top"}

您可以在具有`children`的项目上使用`filter`属性，以在子菜单中显示筛选器输入。

::component-example
---
collapse: true
name: 'dropdown-menu-filter-items-example'
---
::

### 控制打开状态

您可以使用`default-open` prop或`v-model:open`指令控制打开状态。

::component-example
---
collapse: true
name: 'dropdown-menu-open-example'
---
::

::note
在本例中，利用[`defineShortcuts`](/docs/composables/define-shortcuts)，您可以通过按：kbd{value="O"}切换下拉菜单。
::

### 带自定义插槽

使用`slot`属性可自定义特定项。

您将可以访问以下插槽：

- `#{{ item.slot }}`{lang="ts-type"}
- `#{{ item.slot }}-leading`{lang="ts-type"}
- `#{{ item.slot }}-label`{lang="ts-type"}
- `#{{ item.slot }}-trailing`{lang="ts-type"}

::component-example
---
collapse: true
name: 'dropdown-menu-custom-slot-example'
---
::

::tip{to="#slots"}
您还可以使用`#item`、`#item-leading`、`#item-label`和`#item-trailing`插槽来自定义所有项目。
::

### 带项目开关

您可以将`slot`属性与`#{{ slot }}-trailing`插槽一起使用，以在项目中呈现[Switch](/docs/components/switch)。

::component-example
---
collapse: true
name: 'dropdown-menu-switch-items-example'
---
::

### 带忽略过滤器：badge{label="4.6+" class="align-text-top"}

在`children`的项目上使用`filter`属性或`filter`字段时，您可以将`ignore-filter`属性设置为`true`以禁用内部搜索并使用自己的搜索逻辑。

::component-example
---
collapse: true
name: 'dropdown-menu-ignore-filter-example'
---
::

::note
本例使用[`refDebounced`](https://vueuse.org/shared/refDebounced/#refdebounced)对API调用进行反跳。`immediate: false`延迟提取，因此在菜单打开之前不会发出请求。
::

### 带有过滤器字段：badge{label="4.6+" class="align-text-top"}

当使用`filter` prop或`filter`字段对`children`的项目进行过滤时，您可以将`filter-fields` prop设置为一个字段数组，以过滤`[labelKey]`。

::component-example
---
collapse: true
name: 'dropdown-menu-filter-fields-example'
---
::

### 带触发器内容宽度

您可以通过在`ui.content`插槽上添加`w-(--reka-dropdown-menu-trigger-width)`类来将内容扩展到其按钮的全宽。

::component-example
---
collapse: true
name: 'dropdown-menu-content-width-example'
---
::

::tip
您还可以在`app.config.ts`中全局更改内容宽度：

```
export default defineAppConfig({
  ui: {
    dropdownMenu: {
      slots: {
        content: 'w-(--reka-dropdown-menu-trigger-width)'
      }
    }
  }
})
```
::

### 提取快捷方式

使用[extractShortcuts](/docs/composables/extract-shortcuts)实用程序自动定义具有`kbds`属性的菜单项的快捷方式。它递归地提取快捷方式并返回与[defineShortcuts](/docs/composables/define-shortcuts)兼容的对象。

```vue
<script setup lang="ts">
import type { DropdownMenuItem } from '@nuxt/ui'

const items: DropdownMenuItem[] = [{
  label: 'Invite users',
  icon: 'i-lucide-user-plus',
  children: [{
    label: 'Invite by email',
    icon: 'i-lucide-send-horizontal',
    kbds: ['meta', 'e'],
    onSelect() {
      console.log('Invite by email clicked')
    }
  }, {
    label: 'Invite by link',
    icon: 'i-lucide-link',
    kbds: ['meta', 'i'],
    onSelect() {
      console.log('Invite by link clicked')
    }
  }]
}, {
  label: 'New team',
  icon: 'i-lucide-plus',
  kbds: ['meta', 'n'],
  onSelect() {
    console.log('New team clicked')
  }
}]

defineShortcuts(extractShortcuts(items))
</script>
```

::note
在本例中，：kbd{value="meta"}：kbd{value="E" class="ms-px"}、：kbd{value="meta"}：kbd{value="I" class="ms-px"}和：kbd{value="meta"}：kbd{value="N" class="ms-px"}将触发相应项的`select`函数。
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
