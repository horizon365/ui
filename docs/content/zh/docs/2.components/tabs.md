---
description: 一组选项卡面板，一次显示一个。
category: navigation
keywords:
  - tabbed
  - panels
  - sections
links:
  - label: 选项卡
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/tabs
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Tabs.vue
---

## 用法

使用选项卡组件可以在选项卡中显示项列表。

::component-example
---
collapse: true
prettier: true
name: 'tabs-example'
props:
  class: 'w-full'
---
::

### 项目

使用`items` prop作为具有以下属性的对象数组：

- `label?: string`{lang="ts-type"}
- `icon?: string`{lang="ts-type"}
- `avatar?: AvatarProps`{lang="ts-type"}
- `badge?: string | number | BadgeProps`{lang="ts-type"}
- `content?: string`{lang="ts-type"}
- `value?: string | number`{lang="ts-type"}
- `disabled?: boolean`{lang="ts-type"}
- [`slot?: string`{lang="ts-type"}](#with-custom-slot)
- `class?: any`{lang="ts-type"}
- `ui?: { trigger?: ClassNameValue, leadingIcon?: ClassNameValue, leadingAvatar?: ClassNameValue, leadingAvatarSize?: ClassNameValue, label?: ClassNameValue, trailingBadge?: ClassNameValue, trailingBadgeSize?: ClassNameValue, content?: ClassNameValue }`{lang="ts-type"}

::component-code
---
ignore:
  - items
  - class
external:
  - items
externalTypes:
  - TabsItem[]
props:
  items:
    - label: Account
      icon: 'i-lucide-user'
      content: 'This is the account content.'
    - label: Password
      icon: 'i-lucide-lock'
      content: 'This is the password content.'
  class: 'w-full'
---
::

### 内容

将`content`属性设置为`false`以在没有任何面板的情况下呈现触发器。将`true`属性设置为`true`。

::component-code
---
ignore:
  - content
  - items
  - class
external:
  - items
externalTypes:
  - TabsItem[]
props:
  content: false
  items:
    - label: Account
      icon: 'i-lucide-user'
      content: 'This is the account content.'
    - label: Password
      icon: 'i-lucide-lock'
      content: 'This is the password content.'
  class: 'w-full'
---
::

### 卸载

使用`unmount-on-hide`属性来防止在折叠标签时卸载内容。将其替换为`true`。

::component-code
---
ignore:
  - content
  - items
  - class
external:
  - items
externalTypes:
  - TabsItem[]
props:
  unmountOnHide: false
  items:
    - label: Account
      icon: 'i-lucide-user'
      content: 'This is the account content.'
    - label: Password
      icon: 'i-lucide-lock'
      content: 'This is the password content.'
  class: 'w-full'
---
::

::note
您可以检查DOM以查看呈现的每个项的内容。
::

### Color

使用`color`属性更改选项卡的颜色。

::component-code
---
ignore:
  - content
  - items
  - class
external:
  - items
externalTypes:
  - TabsItem[]
props:
  color: neutral
  content: false
  items:
    - label: Account
    - label: Password
  class: 'w-full'
---
::

### Variant

使用`variant` prop来更改选项卡的变体。

::component-code
---
ignore:
  - content
  - items
  - class
external:
  - items
externalTypes:
  - TabsItem[]
props:
  color: neutral
  variant: link
  content: false
  items:
    - label: Account
    - label: Password
  class: 'w-full'
---
::

### Size

使用`size`属性来更改选项卡的大小。

::component-code
---
ignore:
  - content
  - items
  - class
external:
  - items
externalTypes:
  - TabsItem[]
props:
  size: md
  variant: pill
  content: false
  items:
    - label: Account
    - label: Password
  class: 'w-full'
---
::

### 定向

使用`orientation`道具将Tabs.xml.的方向更改为`horizontal`。

::component-code
---
ignore:
  - content
  - items
  - class
external:
  - items
externalTypes:
  - TabsItem[]
props:
  orientation: vertical
  variant: pill
  content: false
  items:
    - label: Account
    - label: Password
  class: 'w-full'
---
::

## 示例

### Control活动项目

您可以通过使用`default-value` prop或`v-model`指令与项目的`value`来控制活动项目。如果没有提供`value`，则默认为索引**作为字符串**。

:component-example{name="tabs-model-value-example"}

::tip
当提供`v-model`或`default-value`时，使用`value-key`属性更改用于匹配项的键。
::

### 带路由查询

您可以通过URL查询参数控制活动项目，使用`route.query.tab`作为项目的`value`。

:component-example{name="tabs-route-query-example"}

### 带内容插槽

使用`#content`插槽自定义每个项目的内容。

:component-example{name="tabs-content-slot-example"}

### 带底部选项卡栏

使用`ui`道具将标签转换为带有图标和小标签的移动风格底部标签栏，类似于YouTube或Instagram。

::component-example
---
collapse: true
name: 'tabs-bottom-tab-bar-example'
---
::

### 带自定义插槽

使用`slot`属性自定义特定项。

您将可以访问以下插槽：

- `#{{ item.slot }}`{lang="ts-type"}

::component-example
---
collapse: true
name: 'tabs-custom-slot-example'
---
::

## API

### Props

:component-props

### Slots

:component-slots

### 发射

:component-emits

### 曝光

通过模板引用访问组件时，可以使用以下命令：

| 名称|类型|
| ---- | ---- |
| `triggersRef`{lang="ts-type"}| `Ref<ComponentPublicInstance[]>`{lang="ts-type"}|

## Theme

:component-theme

## Changelog

:component-changelog
