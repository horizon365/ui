---
description: 一组叠起来的可折叠的嵌板。
category: data
keywords:
  - disclosure
  - collapse
  - faq
  - expansion panel
links:
  - label: 手风琴
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/accordion
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Accordion.vue
---

## 使用情况

使用Accordion组件可显示可折叠项的列表。

::component-code
---
收阖：true
忽略：
- 个项目
  - 用户界面内容
外部：
- 个项目
外部类型：
  - Accordion项目[]
隐藏：
  班级
  我的天
  - 默认值
道具：
  默认值：“0”
  类别：'px-4最大值-w-lg'
  用户界面：
    内容：'文本静音'
  项目名称：
    - label：“Nuxt用户界面是否可以免费使用？”
      内容：“是的！Nuxt UI是完全免费的，在MIT许可证下是开源的。所有125个以上的组件对每个人都可用。”
    - label：“我可以在没有Nuxt的情况下将Nuxt UI与Vue一起使用吗？”
      主要内容：“”是的！虽然针对Nuxt进行了优化，但Nuxt用户界面通过我们的Vite插件与独立的Vue项目完美配合。您可以按照[installationguide](/docs/getting-started/installation/vue)开始操作。
    - label：“Nuxt UI是否已准备好生产？”
      content：“是的！Nuxt UI在生产中被数千个应用程序使用，并经过广泛的测试，定期更新和主动维护。”
---
::

项目

使用`items`属性作为具有下列属性的对象数组：

我的天啊！
020、021、022、023、024、025、026、027、028、029、029、029、029、020、021、022、029、029、020、021、022、029、020、020、021、022、020、021、022、021、022、021、022、021、022、022、022、023、024、025、026、027、028、029、029、029、29、29、20
我的天啊！
我的天啊！
我的天啊！
我的天啊！
我的天啊，我的天啊
我的天啊！
我的天啊！

::component-code
---
忽略：
  个项目
外部：
  - items
外部类型：
  - AccordionItem[]
隐藏：
  - class
道具：
  类别：'px-4'
  项目名称：
    - label：'图标'
      图标：“我-透明-微笑”
      content：'您无事可做，@nuxt/icon将自动处理。'
    - label：'颜色'
      图标：“i-lucide-色板-书本”
      content：'从您的Tailwind CSS主题中选择主色和中性色。'
    - label：'组件'
      图标：“i-lucide盒”
      content：'您可以通过使用`class` / `ui`道具或在您的app. aplog. ts中自定义组件。'
---
::

### Multiple

将`type`属性设置为`multiple`，以允许同时激活多个项目。将其设置为`single`。

::component-code
---
忽略：
  - type
  - items
外部：
  - items
外部类型：
  - AccordionItem[]
隐藏：
  - class
道具：
  类别：'px-4'
  类型：'multiple'
  项目名称：
    - label：'图标'
      图标：“我-透明-微笑”
      content：'您无事可做，@nuxt/icon将自动处理。'
    - label：'颜色'
      图标：“i-lucide-色板-书本”
      content：'从您的Tailwind CSS主题中选择主色和中性色。'
    - label：'组件'
      图标：“i-lucide盒”
      content：“您可以使用`class` / `ui`道具或在app. config. ts中自定义组件。”
---
::

可折叠的

当`type`为`single`时，您可以将`collapsible`属性设定为`false`，以防止使用中项目折迭。

::component-code
---
忽略：
  可折叠的
  项目数
外部：
  项目数
外部类型：
  - 会计科目项目[]
隐藏：
  班级
道具：
  类别：'px-4'
  可折叠：假
  项目名称：
    - 标签：“图标”
      图标：“我-透明-微笑”
      content：'您无事可做，@nuxt/icon将自动处理。'
    - 标签：“颜色”
      图标：“i-lucide-色板-书本”
      content：'从您的Tailwind CSS主题中选择主色和中性色。'
    - 标签：“组件”
      图标：“i-lucide盒”
      content：'您可以使用`class` / `ui`道具或在app. config. ts中自定义组件。'
---
::

卸载

使用`unmount-on-hide`道具可防止折叠面板折叠时卸载内容。默认为`true`。

::component-code
---
忽略：
  项目数
外部：
- 个项目
外部类型：
  - Accordion项目[]
隐藏：
  班级
道具：
  类别：'px-4'
  隐藏时卸载：假
  项目名称：
    - 标签：'图标'
      图标：“我-透明-微笑”
      content：'您无事可做，@nuxt/icon将自动处理。'
    标签：“颜色”
      图标：“i-lucide-色板-书本”
      content：'从您的Tailwind CSS主题中选择主色和中性色。'
    - 标签：“组件”
      图标：“i-lucide盒”
      content：'您可以使用`class` / `ui`道具或在app. config. ts中自定义组件。'
---
::

::note
您可以检查DOM以查看呈现的每个项的内容。
::

### 已停用

使用`disabled`属性来停用折迭式。

您也可以使用item物件中的`disabled`属性来停用特定的项目。

::component-code
---
忽略：
- 个项目
外部：
  102个项目
外部类型：
  - Accordion项目[]
隐藏：
  班级
道具：
  类别：'px-4'
  已禁用：true
  项目名称：
    - 标签：'图标'
      图标：“我-透明-微笑”
      content：'您无事可做，@nuxt/icon将自动处理。'
    - 标签：“颜色”
      图标：“i-lucide-色板-书本”
      content：'从您的Tailwind CSS主题中选择主色和中性色。'
      已禁用：true
    - 标签：“组件”
      图标：“i-lucide盒”
      content：'您可以使用`class` / `ui`道具或在app. config. ts中自定义组件。'
---
::

### 结尾图标

使用`trailing-icon`属性可自定义每个项目的尾部[Icon](/docs/components/icon)。默认为`i-lucide-chevron-down`。

::tip
您也可以使用item物件中的`trailingIcon`属性来设定特定项目的图标。
::

::component-code
---
忽略：
  118个项目
外部：
  - items
外部类型：
  - AccordionItem[]
隐藏：
  - class
道具：
  类别：'px-4'
  trailingIcon：'i-lucide-arrow-down'
  项目名称：
    - label：'图标'
      图标：“我-透明-微笑”
      content：'您无事可做，@nuxt/icon将自动处理。'
      trailingIcon：'i-lucide-plus'
    - label：'颜色'
      图标：“i-lucide-色板-书本”
      content：'从您的Tailwind CSS主题中选择主色和中性色。'
    - label：'组件'
      图标：“i-lucide盒”
      content：'您可以使用`class` /`ui`props或在您的app. ap. ts中自定义组件。'
---
::

::framework-only
#nuxt（无文本）
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
您可以在`app.config.ts`中的`ui.icons.chevronDown`键下全局自定义此图标。
:::

版本号
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
您可以在`vite.config.ts`中的`ui.icons.chevronDown`键下全局自定义此图标。
:::
::

## 示例

### Control活动项目

您可以通过使用`default-value`prop或`v-model`指令与项目的`value`来控制活动项目。如果没有提供`value`，则默认为索引**作为字符串**。

::component-example
---
name：'accordion-model-value-example'
道具：
  类别：'px-4'
---
::

::tip
当提供了`v-model`或`default-value`时，使用`value-key`属性更改用于匹配项的密钥。
::

::caution
当`type="multiple"`时，确保将数组传递给`default-value`prop或`v-model`指令。
::

### With drag and drop

使用来自[`@vueuse/integrations`](https://vueuse.org/integrations/README.html)的[`useSortable`](https://vueuse.org/integrations/useSortable/)可组合项在Accordion上启用拖放功能。此集成将封装[Sortable.js](https://sortablejs.github.io/Sortable/)以提供无缝的拖放体验。

::component-example
---
name：'accordion-drag-and-drop-example'
---
::

### With body slot

使用`#body`插槽自定义每个项目的主体。

::component-example
---
name：'accordion-body-slot-example'
道具：
  类别：'px-4'
---
::

::tip
`#body`插槽包含一些预定义的样式，如果您想从头开始，请使用[`#content`插槽](#with-content-slot)。
::

### 使用内容插槽

使用`#content`插槽来自定每个项目的内容。

::component-example
---
名称：'折叠内容插槽示例'
道具：
  类别：'px-4'
---
::

### 使用自定义插槽

使用`slot`属性可自定义特定项目。

您将可以访问以下插槽：

172小时173小时174小时
第175话第176话177话

::component-example
---
名称：“折叠式自定义插槽示例”
道具：
  类别：'px-4'
---
::

### 包含减价内容

您可以使用`@comark/vue`中的[Markdown](https://comark.dev/rendering/vue)组件来呈现折叠式项目中的减价。

::component-example
---
收阖：true
名称：“折叠-标记-示例”
类别：'px-8'
---
::

## 活性成分

### 道具

：组件-支柱

插槽数

：组件插槽

发射率

：组件发射

主题

：组件主题

## 变更日志

：组件更改日志
