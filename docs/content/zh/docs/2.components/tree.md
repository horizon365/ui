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

## 使用情况

使用“树”组件可以显示项目的层次结构。

::component-code
---
收阖：true
隐藏：
  班级
忽略：
- 个项目
外部：
- 个项目
外部类型：
  - 树项目[]
道具：
  项目名称：
    标签：“应用程序/”
      defaultExpanded：扩展的默认值：真
      孩子们：
        - 标签：“可合成/”
          孩子们：
            - 标签：“使用身份验证”
              图标：'i-vscode-图标-文件-类型-键入脚本'
            - 标签：“使用用户.ts”
              图标：'i-vscode-图标-文件-类型-键入脚本'
        - 标签：'组件/'
          defaultExpanded：扩展的默认值：真
          孩子们：
            - 标签：'卡片视图'
              图标：'i-vscode-图标-文件-类型-vue'
            - 标签：'按钮.视图'
              图标：'i-vscode-图标-文件-类型-vue'
    - 标签：“应用程序版本”
      图标：'i-vscode-图标-文件-类型-vue'
    标签：“nuxt.config.ts”（新配置文件）
      图标：'i-vscode-图标-文件-类型-nuxt'
  类别：'w-60'
---
::

项目

使用`items`属性作为具有下列属性的对象数组：

我的天啊！
019、020、021、
022号，023号
我的天啊！
我的天啊！
我的天啊！
我的天啊！
我的天啊！
我的天啊！
我的天啊！
我的天啊！

::note
每个项目都需要一个唯一标识符。如果未提供`get-key`，则组件将使用`label`属性作为标识符。理想情况下，应提供`get-key`函数属性以返回唯一标识符。或者，也可以使用`labelKey`属性指定要用作唯一标识符的属性。
::

::component-code
---
收阖：true
隐藏：
  班级
忽略：
  项目数
外部：
  项目数
外部类型：
  树项目[]
道具：
  项目名称：
    标签：“应用程序/”
      defaultExpanded：扩展的默认值：真
      孩子们：
        - 标签：'可合成/'
          孩子们：
            - 标签：'使用身份验证'
              图标：'i-vscode-图标-文件-类型-键入脚本'
            - 标签：'使用用户.ts'
              图标：'i-vscode-图标-文件-类型-键入脚本'
        - 标签：'组件/'
          defaultExpanded：扩展的默认值：真
          孩子们：
            - 标签：'卡片视图'
              图标：'i-vscode-图标-文件-类型-vue'
            - 标签：'按钮.视图'
              图标：'i-vscode-图标-文件-类型-vue'
    @@标签：“应用程序版本”
      图标：'i-vscode-图标-文件-类型-vue'
    标签：“nuxt.config.ts”（新配置文件）
      图标：'i-vscode-图标-文件-类型-nuxt'
  类别：'w-60'
---
::

多个

使用`multiple`道具可选择多个项目。

::component-code
---
收阖：true
隐藏：
  班级
忽略：
  项目数
外部：
- 个项目
外部类型：
  - TreeItem[]目录树项目
道具：
  多个：真
  项目名称：
    标签：“应用程序/”
      defaultExpanded：扩展的默认值：真
      孩子们：
        - 标签：“可合成/”
          孩子们：
            - 标签：“使用身份验证”
              图标：'i-vscode-图标-文件-类型-键入脚本'
            - 标签：'使用用户.ts'
              图标：'i-vscode-图标-文件-类型-键入脚本'
        - 标签：'组件/'
          defaultExpanded：扩展的默认值：真
          孩子们：
            标签：'卡片视图'
              图标：'i-vscode-图标-文件-类型-vue'
            标签：'按钮.视图'
              图标：'i-vscode-图标-文件-类型-vue'
    标签：'应用程序版本'
      图标：'i-vscode-图标-文件-类型-vue'
    标签：“nuxt.config.ts”（新配置文件）
      图标：'i-vscode-图标-文件-类型-nuxt'
  类别：'w-60'
---
::

嵌套的：徽标

使用`nested`属性可控制树是以嵌套结构呈现还是以平面列表呈现。默认值为`true`。

::component-code
---
收阖：true
隐藏：
  班级
忽略：
  项目数
外部：
  项目数
外部类型：
- 树项[]
道具：
  巢状：false
  项目名称：
    标签：“应用程序/”
      defaultExpanded：扩展的默认值：真
      孩子们：
        - 标签：'可合成/'
          孩子们：
            - 标签：“使用身份验证”
              图标：'i-vscode-图标-文件-类型-键入脚本'
            - 标签：“使用用户.ts”
              图标：'i-vscode-图标-文件-类型-键入脚本'
        - 标签：'组件/'
          defaultExpanded：扩展的默认值：真
          孩子们：
            - 标签：'卡片视图'
              图标：'i-vscode-图标-文件-类型-vue'
            - 标签：'按钮.视图'
              图标：'i-vscode-图标-文件-类型-vue'
    - 标签：“应用程序版本”
      图标：'i-vscode-图标-文件-类型-vue'
    标签：“nuxt.config.ts”（新配置文件）
      图标：'i-vscode-图标-文件-类型-nuxt'
  类别：'w-60'
---
::

::note{to="#with-virtualization"}
当`nested`为`false`时，所有项目都会以相同的层级呈现，并以缩排表示阶层。这对于虚拟化或拖放功能很有用。
::

### 色彩

使用`color`道具更改树的颜色。

::component-code
---
收阖：true
隐藏：
- 类
忽略：
  103个项目
外部：
  104个项目
外部类型：
  - TreeItem[]目录树项目
道具：
  颜色：中性
  项目名称：
    标签：“应用程序/”
      defaultExpanded：扩展的默认值：真
      孩子们：
        - 标签：“可合成/”
          孩子们：
            - 标签：“使用身份验证”
              图标：'i-vscode-图标-文件-类型-键入脚本'
            - 标签：“使用用户.ts”
              图标：'i-vscode-图标-文件-类型-键入脚本'
        - 标签：'组件/'
          defaultExpanded：扩展的默认值：真
          孩子们：
            - 标签：“卡片视图”
              图标：'i-vscode-图标-文件-类型-vue'
            - 标签：'按钮.视图'
              图标：'i-vscode-图标-文件-类型-vue'
    @@标签：“应用程序版本”
      图标：'i-vscode-图标-文件-类型-vue'
    - 标签：“nuxt.config.ts”（新配置文件）
      图标：'i-vscode-图标-文件-类型-nuxt'
  类别：'w-60'
---
::

### 尺寸

使用`size`道具更改树的大小。

::component-code
---
收阖：true
隐藏：
  班级
忽略：
  118个项目
外部：
  119个项目
外部类型：
  - TreeItem[]目录树项目
道具：
  尺寸：xl
  项目名称：
    @@标签：“应用程序/”
      defaultExpanded：扩展的默认值：真
      孩子们：
        - 标签：'可合成/'
          孩子们：
            - 标签：“使用身份验证”
              图标：'i-vscode-图标-文件-类型-键入脚本'
            - 标签：'使用用户.ts'
              图标：“i-vscode-图标-文件-类型-键入脚本”
        - 标签：'组件/'
          defaultExpanded：扩展的默认值：真
          孩子们：
            - 标签：'卡片视图'
              图标：'i-vscode-图标-文件-类型-vue'
            - 标签：'按钮.视图'
              图标：'i-vscode-图标-文件-类型-vue'
    @@标签：“应用程序版本”
      图标：'i-vscode-图标-文件-类型-vue'
    - 标签：“nuxt.config.ts”（新配置文件）
      图标：'i-vscode-图标-文件-类型-nuxt'
  类别：'w-60'
---
::

### 结尾图标

使用`trailing-icon`属性可自定义父节点的尾部[Icon](/docs/components/icon)。默认值为`i-lucide-chevron-down`。

::note
如果为某个项目指定了图标，则该图标的优先级始终高于这些道具。
::

::component-code
---
收阖：true
隐藏：
  班级
忽略：
  138个项目
外部：
  139个项目
外部类型：
  - 树项[]
道具：
  尾部图标：'i-lucide-箭头向下'
  项目名称：
    @@标签：“应用程序/”
      defaultExpanded：扩展的默认值：真
      孩子们：
        - 标签：'可合成/'
          尾部图标：'i-透明-V形-向下'
          孩子们：
            - 标签：“使用身份验证”
              图标：'i-vscode-图标-文件-类型-键入脚本'
            - 标签：'使用用户.ts'
              图标：'i-vscode-图标-文件-类型-键入脚本'
        - 标签：'组件/'
          defaultExpanded：扩展的默认值：真
          孩子们：
            - 标签：'卡片视图'
              图标：'i-vscode-图标-文件-类型-vue'
            - 标签：'按钮.视图'
              图标：'i-vscode-图标-文件-类型-vue'
    @@标签：“应用程序版本”
      图标：'i-vscode-图标-文件-类型-vue'
    - 标签：“nuxt.config.ts”（新配置文件）
      图标：'i-vscode-图标-文件-类型-nuxt'
  类别：'w-60'
---
::

::framework-only
#nuxt（无文本）
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
您可以在`app.config.ts`的`ui.icons.chevronDown`键下全局自定此图标。
:::

版本号
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
您可以在`ui.icons.chevronDown`键下的`vite.config.ts`中全局自定此图标。
:::
::

### 展开的图标

使用`expanded-icon`和`collapsed-icon`属性来自定义父节点展开或折叠时的图标。默认值分别为`i-lucide-folder-open`和`i-lucide-folder`。

::component-code
---
收阖：true
隐藏：
  班级
忽略：
  160个项目
外部：
  161个项目
外部类型：
  - 树项[]
道具：
  扩展图标：“i-lucide-书本-打开”
  折叠图标：'i-lucide-book'
  项目名称：
    @@标签：“应用程序/”
      defaultExpanded：扩展的默认值：真
      孩子们：
        - 标签：'可合成/'
          孩子们：
            - 标签：“使用身份验证”
              图标：'i-vscode-图标-文件-类型-键入脚本'
            - 标签：'使用用户.ts'
              图标：'i-vscode-图标-文件-类型-键入脚本'
        - 标签：'组件/'
          defaultExpanded：扩展的默认值：真
          孩子们：
            - 标签：'卡片视图'
              图标：'i-vscode-图标-文件-类型-vue'
            - 标签：'按钮.视图'
              图标：'i-vscode-图标-文件-类型-vue'
    @@标签：“应用程序版本”
      图标：'i-vscode-图标-文件-类型-vue'
    @@标签：“nuxt.config.ts”（新配置文件）
      图标：'i-vscode-图标-文件-类型-nuxt'
  类别：'w-60'
---
::

::framework-only
#nuxt（无文本）
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
您可以在`ui.icons.folder`和`ui.icons.folderOpen`键下的`app.config.ts`中全局自定这些图标。
:::

版本号
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
您可以在`vite.config.ts`中的`ui.icons.folder`和`ui.icons.folderOpen`键下全局自定义这些图标。
:::
::

### 已停用

使用`disabled`道具可防止用户与树进行任何交互。

::component-code
---
收阖：true
隐藏：
- 级
忽略：
  181个项目
外部：
  182个项目
外部类型：
  - 树项目[]
道具：
  已禁用：true
  项目名称：
    - 标签：“应用程序”
      图标：“i-lucide文件夹”
      defaultExpanded：扩展的默认值：真
      孩子们：
        - 标签：“可合成内容”
          图标：“i-lucide文件夹”
          孩子们：
            - 标签：'使用身份验证'
              图标：'i-vscode-图标-文件-类型-键入脚本'
            - 标签：'使用用户.ts'
              图标：'i-vscode-图标-文件-类型-键入脚本'
        - 标签：“组件”
          图标：“i-lucide文件夹”
          孩子们：
            - 标签：“主页”
              图标：“i-lucide文件夹”
              孩子们：
                - 标签：'卡片视图'
                  图标：'i-vscode-图标-文件-类型-vue'
                - 标签：'按钮.视图'
                  图标：'i-vscode-图标-文件-类型-vue'
    @@标签：“应用程序版本”
      图标：'i-vscode-图标-文件-类型-vue'
    - 标签：“nuxt.config.ts”（新配置文件）
      图标：'i-vscode-图标-文件-类型-nuxt'
  类别：'w-60'
---
::

::note
您也可以使用`item.disabled`来停用个别项目。
::

示例

### 控制所选项目

您可以使用`default-value`属性或`v-model`指示词来控制选取的项目。

::component-example
---
名称：'树模型值示例'
收阖：true
道具类：
  类别：'w-60'
---
::

::tip
当提供`v-model`或`default-value`时，请使用`get-key`属性来变更用于从每个项目取得唯一索引键的函数。
::

如果要防止某个项目被选中，可以使用`item.onSelect()`{lang="ts-type"}属性或全局`select`事件：

::component-example
---
名称：'选择示例上树'
收阖：true
道具类：
  类别：'w-60'
---
::

::note
这可让您展开或收合父项目，而不需选取它。
::

### Control展开的项目

您可以使用`default-expanded`属性或`v-model`指示词来控制展开的项目。

::component-example
---
名称：'树展开示例'
收阖：true
道具：
  类别：'w-60'
---
::

如果要防止展开某个项目，可以使用`item.onToggle()`{lang="ts-type"}属性或全局`toggle`事件：

::component-example
---
名称："切换示例上的树"
收阖：true
道具：
  类别：'w-60'
---
::

::note
这可让您选取父项目，而不需展开或收合其子项目。
::

### 项目中有复选框：徽标{label="4.1+" class="align-text-top"}

您可以使用`item-leading`插槽将[Checkbox](/docs/components/checkbox)添加到项目中。使用`multiple`，`propagate-select`和`bubble-select`道具，以启用具有父子关系的多重选择，以及`select`和`toggle`事件来控制项目的选取和展开状态。

::component-example
---
名称：'树-复选框-项目-示例'
收阖：true
道具：
  类别：'w-60'
---
::

::note
此示例使用`as`道具将项目从`button`更改为`div`，因为[`Checkbox`](/docs/components/checkbox)也呈现为`button`。
::

### 使用拖放功能：徽标{label="4.1+" class="align-text-top"}

使用[`useSortable`](https://vueuse.org/integrations/useSortable/)（可从[`@vueuse/integrations`](https://vueuse.org/integrations/README.html)组合）在树上启用拖放功能。此集成将包装[Sortable.js](https://sortablejs.github.io/Sortable/)以提供无缝拖放体验。

::component-example
---
更漂亮：真的
收阖：true
名称：'树拖放示例'
---
::

::note
本示例将`nested`属性设置为`false`，使其具有一个简单的项目列表，以便可以拖放项目。
::

### 借助虚拟化：徽标{label="4.1+" class="align-text-top"}

使用`virtualize`属性为大型列表启用虚拟化，将其作为布尔值或带有`{ estimateSize: 32, overscan: 12 }`等选项的对象。

::warning
启用虚拟化后，树结构将被展平，类似于将`nested`属性设置为`false`。
::

::component-example
---
更漂亮：真的
名称："树虚拟化示例"
道具：
  类别：'w-60'
---
::

### 使用自定义插槽

使用`slot`属性可自定义特定项目。

您将可以访问以下插槽：

258小时259小时260小时
263号公路
264小时265小时266小时
267、268、269、268、269、269、260、269、260、260
270号，271号

::component-example
---
名称：'树-自定义-插槽-示例'
收阖：true
道具：
  类别：'w-60'
---
::

## API

### Props

：组件-支柱

### Slots

：组件插槽

### Emits

：组件发射

## Theme

：组件主题

## Changelog

：组件更改日志
