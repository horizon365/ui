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

## 使用情况

使用`v-model`指示词来控制InputMenu的值，或使用`default-value`属性来设定初始值（如果不需要控制其状态）。

::component-code
---
更漂亮：真的
忽略：
  - 模型值
  项目数
外部：
  项目数
  - 模型值
道具：
  模型值：'积压'
  项目名称：
    积压工作
- 待办事项
    - 正在进行中
    完成了
---
::

::tip
在[`Input`](/docs/components/input)上使用此选项，可以利用Reka UI的[`Combobox`](https://reka-ui.com/docs/components/combobox)组件提供的自动完成功能。
::

::note
此组件类似于[`SelectMenu`](/docs/components/select-menu)，但它使用的是“输入”而不是“选择”。
::

项目

将`items`属性用作字符串、数字或布尔值的数组：

::component-code
---
更漂亮：真的
忽略：
- 模型值
  项目名称
外部：
- 个项目
  - modelValue（型号值）
道具：
  模型值：'积压'
  项目名称：
    积压工作
    未完成
- 进行中
    完成了
---
::

您也可以传递具有下列属性的物件数组：

我的天啊！
@@小标题：小标题
我的天啊，我的天啊
@@小标题：小标题：小标题
我的天啊！
我的天啊！
我的天啊！
我的天啊！
我的天啊！

::component-code
---
忽略：
  模型值. label
- 个项目
外部：
- 个项目
- 模型值
外部类型：
  - InputMenuItem[]输入菜单项
道具：
  型号值：
    标签：'待办事项'
  项目名称：
    - 标签：“积压”
    标签：“待办事项”
    - 标签：“进行中”
    @@标签：“完成”
---
::

您也可以将数组的数组传递给`items`属性，以显示分隔的项目群组。

::component-code
---
更漂亮：真的
忽略：
  模型值
- 个项目
外部：
- 个项目
- 模型值
道具：
  型号值：'Apple'
  项目名称：
- -苹果公司
      香蕉
      蓝莓色
      葡萄
      菠萝
    - -紫红色
      西兰花
- 胡萝卜
      小胡瓜
      韭菜
---
::

### Value键

您可以选择使用`value-key`属性来系结物件的单一属性，而非整个物件。预设值为`undefined`。

::component-code
---
收阖：true
忽略：
- 模型值
- 值键
  108个项目
外部：
  109个项目
  - 型号价值
外部类型：
  - InputMenuItem[]输入菜单项
道具：
  模型值：'todo'
  值键：'id'
  项目名称：
    - 标签：“积压工作”
      id：'待办事项'
    - 标签：“待办事项”
      id：'待办事项'
    - 标签：“进行中”
      id：'进行中'
    - 标签：“完成”
      id：'完成'
---
::

::tip
当`model-value`是对象时，使用`by`属性按字段而不是按引用来比较对象。
::

多个

使用`multiple`属性可允许多重选择，所选项目将显示为标记。

::component-code
---
更漂亮：真的
忽略：
  - 型号价值
  121个项目
  多个
外部：
  123个项目
- 模型值
道具：
  型号值：
    积压工作
- 待办事项
  多个：真
  项目名称：
    积压工作
- 待办事项
- 进行中
    完成了
---
::

::caution
请确定将数组传递给`default-value`属性或`v-model`指示词。
::

### 删除图标

使用`multiple`，使用`delete-icon`属性来自订标签中的删除[Icon](/docs/components/icon)。预设为`i-lucide-x`。

::component-code
---
更漂亮：真的
忽略：
- 模型值
  142个项目
  多个
外部：
  144个项目
- 模型值
道具类：
  型号值：
    积压工作
    第147章托多
  多个：真
  删除图标：'i-lucide-垃圾桶'
  项目名称：
    积压工作
- 待办事项
- 进行中
    完成了
---
::

::framework-only
#nuxt（无文本）
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
您可以在`ui.icons.close`键下的`app.config.ts`中全局自定此图标。
:::

版本号
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
您可以在`ui.icons.close`键下的`vite.config.ts`中全局自定义此图标。
:::
::

### 预留位置

使用`placeholder`道具来设定占位符文本。

::component-code
---
更漂亮：真的
忽略：
  158个项目
外部：
  159个项目
道具类：
  占位符：“选择状态”
  项目名称：
    160积压
    第161章托多
- 进行中
- 完成
---
::

模式：徽章

将`mode`属性设置为`autocomplete`可将InputMenu转换为包含建议的自由格式文本输入。`modelValue`将成为输入文本（`string`），而不是选定的项目。

::component-example
---
名称：'输入菜单模式示例'
---
::

::caution
当`mode`为`autocomplete`时，`multiple`、`by`、`resetSearchTermOnSelect`和`resetModelValueOnClear`不适用。
::

::tip
当没有匹配的建议时，使用`content.hideWhenEmpty`道具隐藏菜单。
::

内容

使用`content`属性来控制InputMenu内容的呈现方式，例如`align`或`side`。

::component-code
---
更漂亮：真的
忽略：
  181个项目
- 模型值
外部：
  183个项目
- 模型值
项目名称：
  content.align:
    开始
- 中心
- 结束
  content.side:
- 右侧
    左189
- 顶部
- 底部
道具：
  模型值：'积压'
  主要内容：
    对齐：置中
    侧面：底部
    侧面偏移：8
  项目名称：
    积压工作
- 待办事项
- 进行中
    完成了
---
::

箭头

使用`arrow`道具在“输入菜单”上显示箭头。

::component-code
---
更漂亮：真的
忽略：
  198个项目
- 模型值
- 箭头
外部：
- 个项目
- 型号值
道具：
  模型值：'积压'
  箭头：true
  项目名称：
    积压工作
- 待办事项
- 正在进行中
    完成了
---
::

颜色

使用`color`道具更改“输入菜单”聚焦时的圆环颜色。

::component-code
---
更漂亮：真的
忽略：
- 个项目
- 车型价值
外部：
- 个项目
- 型号价值
道具：
  模型值：'积压'
  颜色：中性
  高亮显示：真
  项目名称：
    积压工作
- 待办事项
- 正在进行中
    完成了
---
::

::note
`highlight`属性在这里用来显示焦点状态。当发生验证错误时，它会在内部使用。
::

### 变体

使用`variant`属性更改InputMenu的变体。

::component-code
---
更漂亮：真的
忽略：
  220个项目
- 型号值
外部：
  222个项目
- 模型值
道具：
  模型值：'积压'
  颜色：中性
  变体：细微
  突出显示：假
  项目名称：
    积压工作
- 待办事项
- 进行中
- 完成
---
::

尺寸：228

使用`size`属性更改InputMenu的大小。

::component-code
---
更漂亮：真的
忽略：
  230个项目
- 型号值
外部：
  232个项目
- 模型值
道具：
  模型值：'积压'
  尺寸：xl
  项目名称：
    积压工作
- 待办事项
- 进行中
    完成了
---
::

图标

使用`icon`道具在“输入菜单”中显示[](/docs/components/icon)图标。

::component-code
---
更漂亮：真的
忽略：
  244个项目
- 型号价值
外部：
  246个项目
- 模型值
道具：
  模型值：'积压'
  图标：“i-lucide-搜索”
  尺寸：md
  项目名称：
    积压工作
    待处理
- 进行中
- 完成
---
::

### 结尾图标

使用`trailing-icon`属性来自订结尾的[图标](/docs/components/icon)。预设值为`i-lucide-chevron-down`。

::component-code
---
更漂亮：真的
忽略：
  259个项目
- 型号价值
外部：
  261个项目
- 模型值
道具：
  模型值：'积压'
  尾部图标：'i-lucide-箭头向下'
  尺寸：md
  项目名称：
    积压工作
    第264章托多
- 进行中
- 完成
---
::

::framework-only
#nuxt（无文本）
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
您可以在`app.config.ts`的`ui.icons.chevronDown`键下全局自定义此图标。
:::

版本号
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
您可以在`vite.config.ts`的`ui.icons.chevronDown`键下全局自定义此图标。
:::
::

### 选定的图标

使用`selected-icon`属性来自订选取项目时的图标。预设为`i-lucide-check`。

::component-code
---
更漂亮：真的
忽略：
  274个项目
- 型号价值
外部：
  276个项目
- 模型值
道具：
  模型值：'积压'
  选定图标：“i-lucide-火焰”
  尺寸：md
  项目名称：
    积压工作
    待处理
- 进行中
    完成了
---
::

::framework-only
#nuxt（无文本）
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
您可以在`ui.icons.check`键下的`app.config.ts`中全局自定义此图标。
:::

版本号
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
您可以在`ui.icons.check`键下的`vite.config.ts`中全局自定义此图标。
:::
::

清除：标记

使用`clear`属性可在选定值时显示清除按钮。

::component-code
---
更漂亮：真的
忽略：
  289个项目
- 型号价值
外部：
  291个项目
- 模型值
项目名称：
  清除：
    真的
    错误的
道具：
  模型值：'积压'
  清除：true
  项目名称：
    积压工作
    第296章托多
- 进行中
    完成了
---
::

### 清除图标：徽标{label="4.4+" class="align-text-top"}

使用`clear-icon`属性来自订清除按钮[Icon](/docs/components/icon)。预设值为`i-lucide-x`。

::component-code
---
更漂亮：真的
忽略：
- 个项目
- 型号值
外部：
- 个项目
- 车型价值
项目名称：
  清除：
    真的
    错了
道具：
  模型值：'积压'
  清除：true
  clearIcon：'i-lucide-垃圾桶'
  项目名称：
    积压工作
- 待办事项
- 进行中
    完成了
---
::

::framework-only
#nuxt（无文本）
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
您可以在`app.config.ts`的`ui.icons.close`键下全局自定此图标。
:::

版本号
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
您可以在`ui.icons.close`键下的`vite.config.ts`中全局自定义此图标。
:::
::

虚拟人偶

使用`avatar`道具在“输入菜单”中显示[Avatar](/docs/components/avatar)。

::component-code
---
更漂亮：真的
忽略：
  327个项目
- 型号值
- 头像.加载中
外部：
- 个项目
- 型号值
道具：
  模型值：'Nuxt'
  头像：
    来源：'https：//github.com/nuxt.png'
    加载：惰性
  项目名称：
    332号
- 网络集线器
    Nuxt实验室
    - Nux模块
    新社区
---
::

正在加载

使用`loading`道具在"输入菜单"上显示加载图标。

::component-code
---
更漂亮：真的
忽略：
- 个项目
- 车型价值
外部：
- 个项目
- 型号值
道具：
  模型值：'积压'
  载入：true
  结尾：false
  项目名称：
    积压工作
    待处理
- 进行中
    完成了
---
::

### 载入图标

使用`loading-icon`属性来自订载入图标。预设为`i-lucide-loader-circle`。

::component-code
---
更漂亮：真的
忽略：
- 个项目
- 型号值
外部：
  352个项目
- 模型值
道具：
  modelValue：'积压'
  载入：true
  加载图标："i-lucide加载程序"
  项目名称：
    积压工作
    第355章托多
- 进行中
    完成了
---
::

::framework-only
#nuxt（无文本）
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
您可以在`app.config.ts`的`ui.icons.loading`键下全局自定此图标。
:::

版本号
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
您可以在`vite.config.ts`的`ui.icons.loading`键下全局自定此图标。
:::
::

### 已停用

使用`disabled`道具禁用"输入菜单"。

::component-code
---
更漂亮：真的
忽略：
- 个项目
- 占位符
外部：
- 个项目
道具：
  已禁用：true
  占位符："选择状态"
  项目名称：
    积压工作
    待处理
- 进行中
    完成了
---
::

示例

### 使用项目类型

可以将`type`属性与`separator`一起使用，以显示项之间的分隔符，或将`label`一起使用，以显示标签。

::component-code
---
收阖：true
忽略：
- 型号价值
  377个项目
外部：
  378个项目
- 模型值
外部类型：
  - InputMenuItem []输入菜单项
道具：
  型号值：'Apple'
  项目名称：
    - -类型："标签"
        标签："水果"
- 苹果
      香蕉树
      蓝莓色
      葡萄
      菠萝
    - -类型：“标签”
        标签：“蔬菜”
      紫红色
      西兰花
- 胡萝卜
      小胡瓜
      韭菜
---
::

::note
使用`label`项目做为群组标题时，请传递数组的数组，以便在搜寻时将标签与其群组一起筛选出来。
::

### 在项目中使用图标

您可以使用`icon`属性在项目内显示[图标](/docs/components/icon)。

::component-example
---
收阖：true
名称：'输入菜单项图标示例'
---
::

::tip
您也可以使用`#leading`插槽来显示选定的图标。
::

### 在项目中使用虚拟形象

您可以使用`avatar`属性在项目内显示[Avatar](/docs/components/avatar)。

::component-example
---
收阖：true
名称：'输入菜单项头像示例'
---
::

::tip
您也可以使用`#leading`插槽来显示所选的虚拟形象。
::

带芯片的物品

您可以使用`chip`属性来显示项目内的[Chip](/docs/components/chip)。

::component-example
---
收阖：true
名称：“输入菜单项目芯片示例”
---
::

::note
在本例中，`#leading`插槽用于显示所选筹码。
::

### 控制打开状态

您可以使用`default-open`属性或`v-model:open`指示词来控制开启状态。

::component-example
---
名称：'输入菜单打开示例'
---
::

::note
在此示例中，利用[`defineShortcuts`](/docs/composables/define-shortcuts)，您可以通过按下：kbd{value="O"}来切换“输入菜单”。
::

### 控制焦点上的打开状态

您可以使用`open-on-focus`或`open-on-click`道具，在输入取得焦点或按一下时开启功能表。

::component-example
---
名称：'输入菜单-打开焦点-示例'
---
::

### 控制搜索词

使用`v-model:search-term`指令控制搜索词。

::component-example
---
名称：'输入菜单-搜索项-示例'
---
::

带旋转图标

下面是一个带有旋转图标的示例，该图标指示InputMenu的打开状态。

::component-example
---
名称：'输入菜单图标示例'
---
::

### 使用创建项目

使用`create-item`属性可让使用者新增不在预先定义选项中的自订值。

::component-example
---
收阖：true
名称：'输入菜单创建项示例'
---
::

::note
默认情况下，如果未找到匹配项，则会显示创建选项。将其设置为`always`，即使存在相似的值也会显示。
::

::tip{to="#emits"}
使用`@create`事件来行程项目的建立。您将收到事件和项目做为参数。
::

### 使用提取的项目

您可以从API中获取项目，并在InputMenu中使用它们。

::component-example
---
收阖：true
名称：'输入菜单获取示例'
---
::

::note
此示例将`useLazyFetch`与`immediate: false`一起使用，以便仅在菜单打开时提取数据，从而避免在页面加载时调用不必要的API。
::

### 使用忽略筛选

将`ignore-filter`属性设置为`true`以禁用内部搜索并使用您自己的搜索逻辑。

::component-example
---
收阖：true
名称：'输入菜单忽略过滤器示例'
---
::

::note
此示例使用[`refDebounced`](https://vueuse.org/shared/refDebounced/#refdebounced)来消除API调用的抖动。提取被`immediate: false`延迟，因此在菜单打开之前不会发出任何请求。
::

### 使用筛选字段

使用`filter-fields`属性搭配字段数组来筛选。预设值为`[labelKey]`。

::component-example
---
收阖：true
名称：'输入菜单筛选字段示例'
---
::

::note
此示例将`useLazyFetch`与`immediate: false`一起使用，以便仅在菜单打开时提取数据，从而避免在页面加载时调用不必要的API。
::

### 借助虚拟化：徽标{label="4.1+" class="align-text-top"}

使用`virtualize`属性为大型列表启用虚拟化，将其作为布尔值或带有`{ estimateSize: 32, overscan: 12 }`等选项的对象。

::warning{to="https://github.com/unovue/reka-ui/issues/1885" target="_blank"}
启用后，由于Reka UI的限制，所有组将被展平为单个列表。
::

::component-example
---
更漂亮：真的
名称：'输入菜单虚拟化示例'
---
::

### 无限滚动：徽章{label="4.4+" class="align-text-top"}

您可以使用[`useInfiniteScroll`](https://vueuse.org/core/useInfiniteScroll/)组合式，在使用者卷动时载入更多数据。

::component-example
---
更漂亮：真的
收阖：true
亮点：
  462号
  51岁
overflowHidden：真的
名称：'输入菜单-无限滚动-示例'
---
::

::note
此示例将`useLazyFetch`与`immediate: false`一起使用，以便仅在用户滚动时加载数据。
::

### 使用完整内容长度

通过在`ui.content`槽中添加`min-w-fit`类，可以将内容扩展到其项目的整个宽度。

::component-example
---
名称：'输入菜单内容宽度示例'
收阖：true
---
::

::tip
您也可以在`app.config.ts`中全局更改内容宽度：

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

### 作为国家/地区选择器

您可以使用InputMenu作为国家/地区选择器，并进行延迟加载。只有在首次打开菜单时才会提取国家/地区。

::component-example
---
收阖：true
名称：'输入菜单-国家/地区-示例'
---
::

::note
本示例将`useLazyFetch`与`immediate: false`一起使用，以便仅在首次打开菜单时加载国家/地区。
::

活性成分

道具

：组件支柱

::callout{icon="i-simple-icons-mdnwebdocs" to="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attributes" target="_blank"}
此组件还支持所有本机`<input>`HTML属性。
::

插槽

：组件插槽

放射性

：组件发射

曝光

通过模板引用访问组件时，可以使用以下命令：

| 名称|类型|
| ---- | ---- |
| 490英尺492英尺|493号公路|
| 496号线|497号线|

主题

：组件主题

## 变更日志

：组件更改日志
