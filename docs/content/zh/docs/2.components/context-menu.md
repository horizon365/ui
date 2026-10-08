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

## 使用情况

在ContextMenu的默认窗口中使用您喜欢的任何内容，然后右键单击该窗口以显示菜单。

::component-code
---
更漂亮：真的
收阖：true
忽略：
- 个项目
  - 用户界面内容
外部：
- 个项目
外部类型：
  - ContextMenuItem[][]上下文菜单项
道具：
  项目名称：
    - -标签：外观
        孩子们：
          - 标签：系统
            图标：i-Lucide监护仪
          - 标签：浅色
            图标：i-lucide-太阳
          @@标签：深色
            图标：i-透明月亮
    - -标签：显示边栏
        千字节数：
- 元数据
          第11章
      - label：显示工具栏
        千字节数：
- 移位
          - 元数据
          第15话
      - label：折叠固定的标签
        已禁用：true
    - - label：刷新页面
      - label：清除Cookie并刷新
      - label：清除缓存并刷新
      - 类型：分隔符
      - 标签：开发者
        孩子们：
          - -标签：查看源代码
              千字节数：
                - meta
                - shift
                - u
            - label：开发者工具
              千字节数：
                - option
                - meta
                - i
            - label：检查元素
              千字节数：
                - option
                - meta
                - c
          - - label：JavaScript控制台
              千字节数：
                - option
                - meta
                - j
插槽：
  默认值：|

    <div class="flex items-center justify-center rounded-md border border-dashed border-accented text-sm aspect-video w-72">
      右键单击此处
    </div>
---

：div{class="flex items-center justify-center rounded-md border border-dashed border-accented text-sm aspect-video w-72"}[右击这里]
::

### Item

使用`items`prop作为具有以下属性的对象数组：

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

您可以从[Link](/docs/components/link#props)元件传递任何属性，例如`to`、`target`等。

::component-code
---
更漂亮：真的
收阖：true
忽略：
- 个项目
  - 用户界面.内容
外部：
  113个项目
外部类型：
  - 上下文菜单项[][]
道具：
  项目名称：
    - -标签：外观
        孩子们：
- 标签：系统
            图标：i-Lucide监护仪
- 标签：浅色
            图标：i-lucide-太阳
          标签：深色
            图标：i-透明月亮
    - -标签：显示边栏
        千字节数：
- 元
- 秒
      - label：显示工具栏
        千字节数：
- 移位
          我的天
- 天
      - label：折叠固定的标签
        已禁用：true
    - - label：刷新页面
      - label：清除Cookie并刷新
      - label：清除缓存并刷新
      - 类型：分隔符
      - 标签：开发者
        孩子们：
          - - label：查看源代码
              千字节数：
                第133章
- 移位
- 度
            - label：开发人员工具
              千字节数：
                选项
                - 元数据
- ，我
            - 标签：检查元素
              千字节数：
- 选项
                第142章
- C型
          - -标签：JavaScript控制台
              千字节数：
- 选项
                我的天
                第147章
  用户界面：
    内容：'w-48'
插槽：
  默认值：|

<div class="flex items-center justify-center rounded-md border border-dashed border-accented text-sm aspect-video w-72">小时
      右键单击此处
</div>小时
---

：div{class="flex items-center justify-center rounded-md border border-dashed border-accented text-sm aspect-video w-72"}[右键单击此处]
::

::note
您也可以将数组的数组传递给`items`属性，以建立个别的项目群组。
::

::tip
每个项目都可以使用与`items`属性具有相同属性的`children`对象数组来创建嵌套菜单，该菜单可以使用`open`、`defaultOpen`和`content`属性进行控制。
::

尺寸为157

使用`size`属性更改上下文菜单的大小。

::component-code
---
更漂亮：真的
收阖：true
忽略：
  159个项目
  我的内容
外部：
  161个项目
外部类型：
  - 上下文菜单项[]
道具：
  尺寸：xl
  项目名称：
    @@标签：系统
      图标：i-Lucide监护仪
    @标签：浅色
      图标：i-lucide-太阳
    黑色的
      图标：i-透明月亮
  用户界面：
    内容：'w-48'
插槽：
  默认值：|

<div class="flex items-center justify-center rounded-md border border-dashed border-accented text-sm aspect-video w-72">级
      右键单击此处
</div>级
---

：div{class="flex items-center justify-center rounded-md border border-dashed border-accented text-sm aspect-video w-72"}[右键单击此处]
::

莫代尔色

使用`modal`属性来控制ContextMenu是否封锁与外部内容的互动。预设值为`true`。

::component-code
---
更漂亮：真的
收阖：true
忽略：
  172个项目
  - ui.内容
外部：
  174个项目
外部类型：
  - 上下文菜单项[]
道具：
  模式：假
  项目名称：
    @@标签：系统
      图标：i-Lucide监护仪
    @标签：浅色
      图标：i-lucide-太阳
    黑色的
      图标：i-透明月亮
  用户界面：
    内容：'w-48'
插槽：
  默认值为：|

<div class="flex items-center justify-center rounded-md border border-dashed border-accented text-sm aspect-video w-72">
      右键单击此处
    PH值180
---

：div{class="flex items-center justify-center rounded-md border border-dashed border-accented text-sm aspect-video w-72"}[右键单击此处]
::


### 已禁用

使用`disabled`道具禁用上下文菜单。

::component-code
---
更漂亮：真的
收阖：true
忽略：
  184个项目
  - ui.内容
外部：
  186个项目
外部类型：
  - ContextMenuItem[]上下文菜单项
道具：
  已禁用：true
  项目名称：
    @@标签：系统
      图标：i-Lucide监护仪
    @标签：浅色
      图标：i-lucide-太阳
    标签：深色
      图标：i-透明月亮
  用户界面：
    内容：'w-48'
插槽：
  默认值：|

<div class="flex items-center justify-center rounded-md border border-dashed border-accented text-sm aspect-video w-72">号
      右键单击此处
</div>级
---

：div{class="flex items-center justify-center rounded-md border border-dashed border-accented text-sm aspect-video w-72"}[右键单击此处]
::

示例

### 使用复选框项

您可以将`type`属性与`checkbox`一起使用，并使用`checked` / `onUpdateChecked`属性来控制项目的选中状态。

::component-example
---
收阖：true
名称：'上下文菜单-复选框-项目-示例'
---
::

::note
若要确保项目的`checked`状态的反应性，建议将`items`数组包装在`computed`内。
::

### 使用彩色项目

您可以使用`color`属性，以色彩反白某些项目。

::component-example
---
收阖：true
名称：'上下文菜单颜色项目示例'
---
::

### 带有自定义插槽

使用`slot`属性可自定义特定项目。

您将可以访问以下插槽：

207、208、209、208、209、208、208、209、208、208、209、208、209、208、208、209、208、209、208、208、209、208、209
212号线
213号，214号，215号，
216、217、218、219、219、20、219、20、20、21、22、20、21、22、23、24、25、26、219、219、29、219、29、29、2

::component-example
---
收阖：true
名称：'上下文菜单-自定义插槽-示例'
---
::

::tip{to="#slots"}
您也可以使用`#item`、`#item-leading`、`#item-label`和`#item-trailing`插槽来自定所有项目。
::

### 提取快捷方式

使用[extractShortcuts](/docs/composables/extract-shortcuts)实用工具可以自动从带有`kbds`属性的菜单项中定义快捷方式。它以递归方式提取快捷方式，并返回与[defineShortcuts](/docs/composables/define-shortcuts)兼容的对象。

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
在此示例中，：{value="option"}：{value="meta" class="ms-px"}：{value="U" class="ms-px"}：{value="option"}：{value="meta" class="ms-px"}：{value="U" class="ms-px"}：{value="I" class="ms-px"}、{value="option"}、{value="meta" class="ms-px"}、{value="C" class="ms-px"}和{value="option"}的名称：kbd{value="meta" class="ms-px"}：kbd{value="J" class="ms-px"}将触发相应项目的`select`函数。
::

## 活性成分

道具

：组件-支柱

插槽

：组件插槽

发射性

：组件发射

主题

：组件主题

## 变更日志

：组件更改日志
