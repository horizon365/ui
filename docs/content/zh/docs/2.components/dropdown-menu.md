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

## 使用情况

使用[Button](/docs/components/button)或下拉菜单的默认位置中的任何其他组件。

::component-code
---
更漂亮：真的
收阖：true
忽略：
  项目数
  - 用户界面内容
外部：
  项目
外部类型：
  - 下拉菜单项[][]
道具类：
  项目名称：
    - -标签：本杰明
        头像：
          来源：'https：//github.com/benjamincanac.png'
          加载：惰性
        文字：标签
    - -标签：配置文件
        图标：i-lucide用户
      - 标签：计费
        图标：信用卡
- 标签：设置
        图标：i-lucide-cog
        千字节数：
          - '，'
      - 标签：键盘快捷键
        图标：i-Lucide监护仪
    - -标签：团队
        图标：i-lucide用户
        过滤器：
          占位符：'搜索成员...'
        孩子们：
          - -标签：本杰明·坎纳克
              头像：
                来源：'https：//github.com/benjamincanac.png'
                加载：惰性
            @标签：HugoRCD
              头像：
                来源：“https：//github.com/HugoRCD.png”（网址：http：//github.com/HugoRCD.png）
                加载：惰性
            - label：atinux
              头像：
                第一个字符串
                加载：惰性
            - label：romhml
              头像：
                src：'https：//github.com/romhml.png'
                加载：惰性
            - label：sandros94
              头像：
                第一个问题：
                加载：惰性
            - label：J-Michalek
              头像：
                用户名：'//
                加载：惰性
            - label：hywax
              头像：
                用户名：'http：//github.com/hywax.png'
                加载：惰性
      - label：邀请用户
        图标：i-lucide-user-plus
        孩子们：
          - -label：Email
              图标：i-lucide-mail
            - label：在线留言
              图标：i-lucide-message-square
          - -label：查看更多
              图标：i-lucide-circle-plus
              孩子们：
                - label：从Slack导入
                  图标：i-simple-icons-slack
                  至：'https：//www.example.com'
                  目标：空白（_B）
                - label：从Trello导入
                  图标：i-simple-icons-trello
                - label：从Asana导入
                  图标：i-simple-icons-asana
      - label：新团队
        图标：i-lucide-plus
        千字节数：
          - 元数据
          第32章
    - -标签：GitHub
        图标：i-simple-图标-github
        到：“https：//github.com/nuxt/ui”
        目标：空白（_B）
      @@标签：支持
        图标：i-lucide-救生圈
        至：'/docs/元件/下拉式功能表'
- 标签：API
        图标：i-lucide云
        已禁用：true
    - -标签：注销
        图标：i-lucide-注销
        颜色：错误
        千字节数：
          转移
          - 元数据
          第39章
插槽：
  默认值：|

<UButton icon="i-lucide-menu" color="neutral" variant="outline" />的
---

：U形按钮{icon="i-lucide-menu" color="neutral" variant="outline"}
::

项目

使用`items`属性作为具有下列属性的对象数组：

我的天啊！
我的天啊！
我的天啊！
我的天啊！
我的天啊！
我的天啊！
我的天啊，我的天啊！
我的天啊！
@@小标题：小标题
我的天啊！
我的天啊，我的天啊！
我的天啊！
- ，[，`filter?: boolean | InputProps`，{lang="ts-type"}，](，#with-filter-items，)
第107章【第108章】第109章
110号，111号，112号
113小时114小时115小时
116、117、118、119、119、10、10、11、10、11、12、10、11、12、15、16、117、1118、19、10、11、10、11、12、10、11、12、15、16、17、118、19、19、1

您可以从[Link](/docs/components/link#props)元件传递任何属性，例如`to`、`target`等。

::component-code
---
更漂亮：真的
收阖：true
忽略：
  125个项目
  - 用户界面.内容
外部：
  127个项目
外部类型：
  - 下拉菜单项[][]
道具：
  项目名称：
    - -标签：本杰明
        头像：
          来源：'https：//github.com/benjamincanac.png'
          加载：惰性
        文字：标签
    - -标签：配置文件
        图标：i-lucide用户
      @标签：计费
        图标：信用卡
      @@标签：设置
        图标：i-lucide-cog
        千字节数：
          - “，”
      - 标签：键盘快捷键
        图标：i-Lucide监护仪
    - -标签：团队
        图标：i-lucide用户
      - label：邀请用户
        图标：i-lucide用户+
        孩子们：
          - -标签：电子邮件
              图标：i-lucide邮件
            - 标签：消息
              图标：i-lucide消息方块
          - -标签：更多
              图标：i-lucide-圆圈+
              孩子们：
                - label：从时差导入
                  图标：i-simple-icons-slack（简单图标松弛）
                  到：“https：slack.com”
                  目标：空白（_B）
                - 标签：从Trello导入
                  图标：简单图标
                - 标签：从浅声导入
                  图标：i-simple-icons-体式
      - 标签：新建团队
        图标：i-lucide-plus
        千字节数：
          我的天
- 小时
    - -标签：GitHub
        图标：i-simple-图标-github
        到：“https：//github.com/nuxt/ui”
        目标：空白（_B）
      @@标签：支持
        图标：i-lucide-救生圈
        至：'/docs/元件/下拉式功能表'
      标签：API
        图标：i-lucide云
        已禁用：true
    - -标签：注销
        图标：i-lucide-注销
        千字节数：
- 移位
          第151章
- 克
  用户界面：
    内容：'w-48'
插槽：
  默认值：|

<UButton icon="i-lucide-menu" color="neutral" variant="outline" />级
---

：U形按钮{icon="i-lucide-menu" color="neutral" variant="outline"}
::

::note
您也可以将数组的数组传递给`items`属性，以建立个别的项目群组。
::

::tip
每个项目都可以使用与`items`属性具有相同属性的`children`对象数组来创建嵌套菜单，该菜单可以使用`open`、`defaultOpen`和`content`属性来控制。
::

内容

使用`content`属性来控制DropdownMenu内容的呈现方式，例如`align`或`side`。

::component-code
---
更漂亮：真的
收阖：true
忽略：
  165个项目
  - 用户界面.内容
外部：
  167个项目
外部类型：
  - 下拉菜单项[]
项目名称：
  content.align:
    开始
- 中心
- 结束
  content.side:
- 右侧
    左侧
- 顶部
- 底部
道具：
  项目名称：
    @标签：配置文件
      图标：i-lucide用户
    @标签：账单
      图标：信用卡
    @@标签：设置
      图标：i-lucide-cog
  主要内容：
    对齐：开始
    侧面：底部
    侧面偏移：8
  用户界面：
    内容：'w-48'
插槽：
  默认值：|

<UButton label="Open" icon="i-lucide-menu" color="neutral" variant="outline" />
---

：U型按钮{label="Open" icon="i-lucide-menu" color="neutral" variant="outline"}
::

过滤器：徽标

使用`filter`属性在下拉菜单中显示筛选器输入。默认为`false`。

::note{to="#with-ignore-filter"}
使用`ignore-filter`道具禁用内部搜索，并使用您自己的搜索逻辑。
::

::note{to="#with-filter-fields"}
使用`filter-fields`属性来指定筛选依据的字段。根据预设，它会使用`labelKey`属性。
::

您可以从[Input](/docs/components/input)组件传递任何属性来自订它。

::component-code
---
更漂亮：真的
收阖：true
忽略：
  192个项目
  过滤器图标
  - 内容对齐
  - ui.内容
外部：
  196个项目
外部类型：
  - 下拉菜单项[]
道具：
  过滤器：
    图标：i-lucide-搜索
  项目名称：
    @标签：配置文件
      图标：i-lucide用户
    @标签：账单
      图标：信用卡
- 标签：设置
      图标：i-lucide-cog
    @@标签：团队
      图标：i-lucide用户
    - label：邀请用户
      图标：i-lucide用户+
    - label：新建团队
      图标：i-lucide-plus
  主要内容：
    对齐：开始
  用户界面：
    内容：'w-48'
插槽：
  默认值：|

<UButton label="Open" icon="i-lucide-menu" color="neutral" variant="outline" />型
---

：U型按钮{label="Open" icon="i-lucide-menu" color="neutral" variant="outline"}
::

::tip{to="#with-filter-items"}
您也可以在具有`children`的项目上使用`filter`字段，在特定的子功能表上启用筛选。
::

箭头

使用`arrow`道具在下拉菜单上显示箭头。

::component-code
---
更漂亮：真的
收阖：true
忽略：
- 箭头
- 个项目
  我的内容
外部：
- 个项目
外部类型：
  - 下拉菜单项[]
道具：
  箭头：true
  项目名称：
    @标签：配置文件
      图标：i-lucide-用户
    @标签：计费
      图标：信用卡
    @@标签：设置
      图标：i-lucide-cog
  用户界面：
    内容：'w-48'
插槽：
  默认值：|

    218小时
---

：U型按钮{label="Open" icon="i-lucide-menu" color="neutral" variant="outline"}
::

### 尺寸

使用`size`属性来控制下拉菜单的大小。

::component-code
---
更漂亮：真的
收阖：true
忽略：
  222个项目
  - 内容对齐
  我的天啊！
外部：
  225个项目
外部类型：
  - 下拉菜单项[]
道具：
  尺寸：xl
  项目名称：
    @标签：配置文件
      图标：i-lucide用户
    @标签：计费
      图标：信用卡
    @@标签：设置
      图标：i-lucide-cog
  主要内容：
    对齐：开始
  用户界面：
    内容：'w-48'
插槽：
  默认值：|

    PH值230
---

：U形按钮{size="xl" label="Open" icon="i-lucide-menu" color="neutral" variant="outline"}
::

::warning
`size`道具将不会代理到Button，您需要自己设置它。
::

::note
当使用相同大小时，DropdownMenu项将与Button完全对齐。
::

### 模式

使用`modal`属性来控制下拉菜单是否阻止与外部内容的交互。默认值为`true`。

::component-code
---
更漂亮：真的
收阖：true
忽略：
  236个项目
  我的内容
外部：
  238个项目
外部类型：
  - 下拉菜单项[]
道具：
  模式：假
  项目名称：
    @标签：配置文件
      图标：i-lucide用户
    @标签：计费
      图标：信用卡
    @@标签：设置
      图标：i-lucide-cog
  用户界面：
    内容：'w-48'
插槽：
  默认值为：|

<UButton label="Open" icon="i-lucide-menu" color="neutral" variant="outline" />的话
---

：U形按钮{label="Open" icon="i-lucide-menu" color="neutral" variant="outline"}
::

### 已停用

使用`disabled`道具禁用下拉菜单。

::component-code
---
更漂亮：真的
收阖：true
忽略：
  247个项目
  - 用户界面.内容
外部：
  249个项目
外部类型：
  - 下拉菜单项[]
道具：
  已禁用：true
  项目名称：
    @标签：配置文件
      图标：i-lucide用户
    @标签：计费
      图标：信用卡
    @@标签：设置
      图标：i-lucide-cog
  用户界面：
    内容：'w-48'
插槽：
  默认值：|

    254小时
---

：U形按钮{label="Open" icon="i-lucide-menu" color="neutral" variant="outline"}
::

示例

### 使用复选框项

您可以将`type`属性与`checkbox`一起使用，并使用`checked` / `onUpdateChecked`属性来控制项目的选中状态。

::component-example
---
收阖：true
名称：'下拉菜单-复选框-项目-示例'
---
::

::note
若要确保项目的`checked`状态的反应性，建议将`items`数组包装在`computed`内。
::

使用彩色项目

您可以使用`color`属性，以色彩反白某些项目。

::component-example
---
收阖：true
名称：'下拉菜单颜色项目示例'
---
::

### 使用筛选器项目：徽标{label="4.6+" class="align-text-top"}

您可以在具有`children`的项目上使用`filter`属性，在子功能表内显示筛选器输入。

::component-example
---
收阖：true
名称：'下拉菜单过滤器项目示例'
---
::

### 控制打开状态

您可以使用`default-open`属性或`v-model:open`指示词来控制开启状态。

::component-example
---
收阖：true
名称：'下拉菜单打开示例'
---
::

::note
在此示例中，利用[`defineShortcuts`](/docs/composables/define-shortcuts)，您可以通过按下：kbd{value="O"}来切换下拉菜单。
::

### 使用自定义插槽

使用`slot`属性可自定义特定项目。

您将可以访问以下插槽：

284号线
285、286、287、288、289、289
288小时289小时290小时
291号，292号

::component-example
---
收阖：true
名称：'下拉菜单-自定义插槽-示例'
---
::

::tip{to="#slots"}
您也可以使用`#item`、`#item-leading`、`#item-label`和`#item-trailing`插槽来自定所有项目。
::

### 在项目中使用开关

您可以搭配`#{{ slot }}-trailing`插槽使用`slot`属性，以呈现项目内的[Switch](/docs/components/switch)。

::component-example
---
收阖：true
名称：'下拉菜单切换项示例'
---
::

### 使用忽略筛选器：标记{label="4.6+" class="align-text-top"}

在具有`children`的项目上使用`filter`属性或`filter`字段时，您可以将`ignore-filter`属性设定为`true`以停用内部搜寻，并使用您自己的搜寻逻辑。

::component-example
---
收阖：true
名称：'下拉菜单-忽略过滤器-示例'
---
::

::note
此示例使用[`refDebounced`](https://vueuse.org/shared/refDebounced/#refdebounced)来消除API调用的抖动。提取被`immediate: false`延迟，因此在菜单打开之前不会发出任何请求。
::

### 使用筛选字段：徽标{label="4.6+" class="align-text-top"}

在具有`children`的项目上使用`filter`属性或`filter`字段时，您可以使用字段数组来设定`filter-fields`属性以进行筛选。预设值为`[labelKey]`。

::component-example
---
收阖：true
名称：'下拉菜单-筛选字段-示例'
---
::

### 使用触发器内容宽度

通过在`ui.content`槽中添加`w-(--reka-dropdown-menu-trigger-width)`类，可以将内容扩展到其按钮的整个宽度。

::component-example
---
收阖：true
名称：'下拉菜单内容宽度示例'
---
::

::tip
您也可以在`app.config.ts`中全局更改内容宽度：

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

使用[extractShortcuts](/docs/composables/extract-shortcuts)实用工具可以自动从带有`kbds`属性的菜单项中定义快捷方式。它以递归方式提取快捷方式，并返回与[defineShortcuts](/docs/composables/define-shortcuts)兼容的对象。

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
在本例中，：kbd{value="meta"}：kbd{value="E" class="ms-px"}、：kbd{value="meta"}：kbd{value="I" class="ms-px"}和：kbd{value="meta"}：kbd{value="N" class="ms-px"}将触发相应项目的`select`函数。
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
