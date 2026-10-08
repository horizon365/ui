---
description: 从选项列表中选择的选择元素。
category: form
keywords:
  - dropdown
  - picker
links:
  - label: 选择
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/select
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Select.vue
---

## 使用情况

使用`v-model`指示词来控制Select的值，或使用`default-value`属性来设定初始值（如果不需要控制其状态）。

::component-code
---
更漂亮：真的
隐藏：
  班级
忽略：
  - 模型值
  项目数
  班级
外部：
  项目
  - 模型值
道具：
  模型值：'积压'
  项目名称：
    积压工作
- 待办事项
    - 正在进行中
    完成了
  类别：'w-48'
---
::

项目

将`items`属性用作字符串、数字或布尔值的数组：

::component-code
---
更漂亮：真的
忽略：
  - 模型值
  项目
  班级
外部：
  项目名称
  - 模型值
道具：
  模型值：'积压'
  项目名称：
    积压工作
- 待办事项
    - 进行中
    完成了
  类别：'w-48'
---
::

您也可以传递具有下列属性的物件数组：

我的天啊！
@@小标题：小标题
@@小标题：小标题
我的天啊！
我的天啊，我的天啊！
我的天啊，我的天啊
我的天啊！
我的天啊！
我的天啊！

::component-code
---
忽略：
- 模型值
- 个项目
  班级
外部：
  项目数
  模型值
外部类型：
  - 选择项目[]
道具：
  模型值：'backlog'
  项目名称：
    - 标签：“积压”
      值：'待办事项'
    标签：“待办事项”
      值：'待办事项'
    - 标签：“进行中”
      值：'进行中'
    标签：“完成”
      值：'完成'
  类别：'w-48'
---
::

::caution
使用物件时，您必须在`v-model`指示词或`default-value`属性中指涉物件的`value`属性。
::

您也可以将数组的数组传递给`items`属性，以显示分隔的项目群组。

::component-code
---
更漂亮：真的
忽略：
- 模型值
  项目数
  班级
外部：
  项目数
  模型值
道具：
  型号值：'Apple'
  项目名称：
    - -苹果
      - Banana
      - Blueberry
      - 葡萄
      - Pineapple
    - -茄子
      - Broccoli
      - Carrot
      - Courgette
      - Leek
  类别：'w-48'
---
::

### Value Key

您可以使用`value-key`prop.png将用于设置值的属性更改为`value`。

::component-code
---
忽略：
  - modelValue
  - valueKey
  - items
  - class
外部：
  - items
  - modelValue
外部类型：
  - SelectItem[]
道具：
  模型值：'backlog'
  值键：'id'
  项目名称：
    - label：'待办事项'
      id：'待办事项'
    - label：'Todo'
      id：'待办事项'
    - label：'进行中'
      id：'进行中'
    - label：'完成'
      id：'完成'
  类别：'w-48'
---
::

### Multiple

使用`multiple`prop允许多个选择，所选项目将在触发器中以逗号分隔。

::component-code
---
更漂亮：真的
忽略：
- 型号值
  117个项目
  多个
  班级
外部：
  120个项目
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
  类别：'w-48'
---
::

::caution
请确定将数组传递给`default-value`属性或`v-model`指示词。
::

### 占位符

使用`placeholder`道具来设定占位符文本。

::component-code
---
更漂亮：真的
忽略：
  132个项目
  班级
外部：
  134个项目
道具：
  占位符：“选择状态”
  项目名称：
    积压工作
- 待办事项
- 进行中
    完成了
  类别：'w-48'
---
::

内容

使用`content`属性来控制Select内容的呈现方式，例如`align`或`side`。

::component-code
---
更漂亮：真的
忽略：
  143个项目
- 模型值
  班级
外部：
  146个项目
- 模型值
项目名称：
  content.align:
    开始
    中心位置
- 结束
  content.side:
- 右侧
    左侧152
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
    第156章托多
- 进行中
    完成了
  类别：'w-48'
---
::

::note
这些选项仅在`content.position`为`popper`（默认值）时适用。
::

位置：徽章

使用`content.position`属性来控制Select内容相对于触发器的定位方式。默认为`popper`，这会像其他弹出窗口一样定位内容。将其设置为`item-aligned`可将内容与所选项目对齐（类似于本地macOS菜单）。

::component-code
---
更漂亮：真的
忽略：
  166个项目
- 模型值
  班级
外部：
  169个项目
- 型号价值
项目名称：
  content.position:
    - 对齐的项目
    波普尔
道具：
  modelValue：'待办事项'
  主要内容：
    位置：项目对齐
  项目名称：
    积压工作
    第174章托多
- 进行中
    完成了
  类别：'w-48'
---
::

箭头

使用`arrow`道具在"选择"上显示箭头。

::component-code
---
更漂亮：真的
忽略：
  179个项目
- 型号价值
  班级
  箭头
外部：
  183个项目
- 模型值
道具：
  模型值：'积压'
  箭头：true
  项目名称：
    积压工作
    第186章托多
- 进行中
    完成了
  类别：'w-48'
---
::

颜色

使用`color`道具更改"选择"聚焦时的圆环颜色。

::component-code
---
更漂亮：真的
忽略：
  191个项目
- 模型值
  班级
外部：
  194个项目
- 模型值
道具：
  模型值：'积压'
  颜色：中性
  高亮显示：真
  项目名称：
    积压工作
- 待办事项
- 进行中
    完成了
  类别：'w-48'
---
::

::note
`highlight`属性在这里用来显示焦点状态。当发生验证错误时，它会在内部使用。
::

### 变体

使用`variant`道具更改Select的变体。

::component-code
---
更漂亮：真的
忽略：
- 个项目
- 型号值
- 类
外部：
- 个项目
- 型号值
道具：
  模型值：'积压'
  颜色：中性
  变体：细微
  突出显示：假
  项目名称：
    积压工作
- 待办事项
- 进行中
    完成了
  类别：'w-48'
---
::

### 尺寸

使用`size`道具更改"选择"的大小。

::component-code
---
更漂亮：真的
忽略：
  214个项目
- 型号价值
  216班
外部：
  217个项目
- 型号值
道具：
  模型值：'积压'
  尺寸：xl
  项目名称：
    积压工作
- 待办事项
- 进行中
- 完成
  类别：'w-48'
---
::

图标

使用`icon`道具在“选择”中显示[](/docs/components/icon)图标。

::component-code
---
更漂亮：真的
忽略：
  229个项目
- 型号价值
  班级
外部：
  232个项目
- 模型值
道具：
  模型值：'积压'
  图标：“i-lucide-搜索”
  尺寸：md
  项目名称：
    积压工作
- 待办事项
- 进行中
    完成了
  类别：'w-48'
---
::

### 结尾图标

使用`trailing-icon`属性来自订结尾的[图标](/docs/components/icon)。预设值为`i-lucide-chevron-down`。

::component-code
---
更漂亮：真的
忽略：
  245个项目
- 型号值
  班级
外部：
  248个项目
- 模型值
道具：
  模型值：'积压'
  尾部图标：'i-lucide-箭头向下'
  尺寸：md
  项目名称：
    250积压
- 待办事项
- 进行中
- 完成
  类别：'w-48'
---
::

::framework-only
#nuxt（无文本）
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
您可以在`ui.icons.chevronDown`键下的`app.config.ts`中全局自定义此图标。
:::

版本号
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
您可以在`ui.icons.chevronDown`键下的`vite.config.ts`中全局自定义此图标。
:::
::

### 选定的图标

使用`selected-icon`属性来自订选取项目时的图标。预设值为`i-lucide-check`。

::component-code
---
更漂亮：真的
忽略：
  261个项目
- 模型值
  班级
外部：
  264个项目
- 型号价值
道具：
  模型值：'积压'
  选定图标：“i-lucide-火焰”
  尺寸：md
  项目名称：
    积压工作
    待处理
- 进行中
    完成了
  类别：'w-48'
---
::

::framework-only
#nuxt（无文本）
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
您可以在`app.config.ts`的`ui.icons.check`键下全局自定此图标。
:::

版本号
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
您可以在`ui.icons.check`键下的`vite.config.ts`中全局自定义此图标。
:::
::

阿凡达

使用`avatar`道具在“选择”中显示[Avatar](/docs/components/avatar)。

::component-code
---
更漂亮：真的
忽略：
  280个项目
- 型号值
  282班
- 头像.加载中
外部：
- 个项目
- 型号价值
道具：
  模型值：'Nuxt'
  头像：
    来源：'https：//github.com/nuxt.png'
    加载：惰性
  项目名称：
    286号
    - NuxtHub网络中心
    Nuxt实验室
    新模块
    新社区
  类别：'w-48'
---
::

正在载入

使用`loading`道具在“选择”上显示加载图标。

::component-code
---
更漂亮：真的
忽略：
  293个项目
- 型号值
  班级
外部：
  296个项目
- 模型值
道具：
  模型值：'积压'
  载入：true
  结尾：false
  项目名称：
    积压工作
    待处理
- 进行中
    完成了
  类别：'w-48'
---
::

### Loading（加载）图标

使用`loading-icon`属性来自订载入图标。预设为`i-lucide-loader-circle`。

::component-code
---
更漂亮：真的
忽略：
- 个项目
- 型号值
  班级
外部：
- 个项目
- 型号值
道具：
  模型值：'积压'
  载入：true
  加载图标：“i-lucide加载程序”
  项目名称：
- 积压工作
- 待办事项
- 进行中
    完成了
  类别：'w-48'
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

使用`disabled`道具禁用“选择”。

::component-code
---
更漂亮：真的
忽略：
- 个项目
- 占位符
- 类
外部：
- 个项目
道具：
  已禁用：true
  占位符：'选择状态'
  项目名称：
    积压工作
- 待办事项
- 进行中
- 完成
  类别：'w-48'
---
::

示例

### 使用项目类型

可以将`type`属性与`separator`一起使用，以显示项之间的分隔符，或将`label`一起使用，以显示标签。

::component-code
---
收阖：true
忽略：
- 模型值
- 个项目
  班级
外部：
- 个项目
- 模型值
外部类型：
  - 选择项目[]
道具：
  型号值：'Apple'
  项目名称：
- 类型：'标签'
      标签：“水果”
- 苹果
    香蕉树
    蓝莓色
    葡萄
    菠萝
    - 类型：'分隔符号'
    类型：'标签'
      标签：“蔬菜”
- 紫红
    西兰花
    胡萝卜
    西葫芦
    韭菜
  类别：'w-48'
---
::

### 在项目中使用图标

您可以使用`icon`属性在项目内显示[图标](/docs/components/icon)。

::component-example
---
收阖：true
名称：'选择项目图标示例'
---
::

::note
在此范例中，图标是从选取项目的`value`属性计算而来。
::

::tip
您也可以使用`#leading`插槽来显示选定的图标。
::

在项目中使用虚拟形象

您可以使用`avatar`属性在项目内显示[Avatar](/docs/components/avatar)。

::component-example
---
收阖：true
名称：“选择项目化身示例”
---
::

::note
在这个范例中，虚拟化身是从选取项目的`value`属性计算出来的。
::

::tip
您也可以使用`#leading`插槽来显示所选的虚拟形象。
::

带芯片的物品

您可以使用`chip`属性来显示项目内的[Chip](/docs/components/chip)。

::component-example
---
收阖：true
名称：“选择项目芯片示例”
---
::

::note
在本例中，`#leading`插槽用于显示选定的筹码。
::

### 控制打开状态

您可以使用`default-open`属性或`v-model:open`指示词来控制开启状态。

::component-example
---
名称：'选择-打开-示例'
---
::

::note
在此示例中，利用[`defineShortcuts`](/docs/composables/define-shortcuts)，您可以通过按下：kbd{value="O"}来切换“选择”。
::

### 带有旋转图标

下面是一个带有旋转图标的示例，该图标指示“选择”的打开状态。

::component-example
---
名称：“选择图标示例”
---
::

### 使用提取的项目

您可以从API中提取项目，并在Select中使用它们。

::component-example
---
名称：'选择-获取-示例'
收阖：true
---
::

::note
此示例将`useLazyFetch`与`immediate: false`一起使用，以便仅在菜单打开时提取数据，从而避免在页面加载时调用不必要的API。
::

### 无限滚动：徽章{label="4.4+" class="align-text-top"}

您可以使用[`useInfiniteScroll`](https://vueuse.org/core/useInfiniteScroll/)组合式，在使用者卷动时载入更多数据。

::component-example
---
更漂亮：真的
收阖：true
亮点：
  395小时41分
  51号
overflowHidden：真的
名称：'选择无限滚动示例'
---
::

::note
此示例将`useLazyFetch`与`immediate: false`一起使用，以便仅在用户滚动时加载数据。
::

### 使用完整内容长度

通过在`ui.content`槽中添加`min-w-fit`类，可以将内容扩展到其项目的整个宽度。

::component-example
---
名称：'选择内容宽度示例'
收阖：true
---
::

::tip
您也可以在`app.config.ts`中全局更改内容宽度：

```
export default defineAppConfig({
  ui: {
    select: {
      slots: {
        content: 'min-w-fit'
      }
    }
  }
})
```
::

活性成分

道具

：组件-支柱

::callout{icon="i-simple-icons-mdnwebdocs" to="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attributes" target="_blank"}
此组件还支持所有本机`<button>`HTML属性。
::

插槽

：组件插槽

发射率

：组件发射

暴露

通过模板引用访问组件时，可以使用以下命令：

| 名称|类型|
| ---- | ---- |
| 420英尺422英尺|421号，423号|
| 424小时426小时|427号公路|

主题

：组件主题

## 变更日志

：组件更改日志
