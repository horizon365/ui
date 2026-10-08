---
description: 基于TipTap的富文本编辑器组件，支持markdown、HTML和JSON内容类型。
category: editor
links:
  - label: TipTap
    icon: i-custom-tiptap
    to: https://tiptap.dev/
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Editor.vue
---

## 使用情况

编辑器组件提供了基于[TipTap](https://tiptap.dev/)构建的强大富文本编辑体验。它支持多种内容格式（JSON、HTML、Markdown）、可自定义的工具栏、拖放块重新排序、斜杠命令、提及、表情符号选取器以及用于添加自定义功能的可扩展体系结构。

::component-example
---
资料来源：错误
升高：true
名称：'编辑器示例'
类：'相对h-176溢出-y-auto！p-0舍入-b-md'
---
::

::callout{icon="i-simple-icons-github" to="https://github.com/nuxt/ui/blob/v4/docs/app/components/content/examples/editor/EditorExample.vue" aria-label="查看源代码"}
这个例子演示了一个生产就绪的编辑器组件。在GitHub上查看源代码。
::

::warning
如果在使用Editor组件或其扩展时遇到与prosemirror相关的错误（如`Adding different instances of a keyed plugin`），则可能需要将prosemirror软件包添加到`nuxt.config.ts`文件的`vite.optimizeDeps.include`列表中。这可确保Vite预先捆绑了这些依赖项，以避免加载多个实例。

```ts [nuxt.config.ts]
export default defineNuxtConfig({
  vite: {
    optimizeDeps: {
      include: [
        '@nuxt/ui > prosemirror-state',
        '@nuxt/ui > prosemirror-transform',
        '@nuxt/ui > prosemirror-model',
        '@nuxt/ui > prosemirror-view',
        '@nuxt/ui > prosemirror-gapcursor'
      ]
    }
  }
})
```
::

内容

使用`v-model`指示词来控制编辑器的值。

::component-code
---
升高：true
更漂亮：真的
收阖：true
忽略：
- 模型值类型
- 模型值.内容
  班级
外部：
  模型值
类别：'p-8'
道具：
  型号值：
    类型：'doc'
    主要内容：
- 类型：'标题'
        属性：
          水平：1
        主要内容：
- 类型：“文本”
            文本：“Hello World”
      - 类型：'段落'
        主要内容：
          类型：'文本'
            文本：“这是一个”
          类型：'文本'
            标志：
              键入：'粗体'
            文本：“多信息文本”
          类型：'文本'
            文本：“编辑器”。
  类别：'w-完整最小值-h-21'
---
::

### 内容类型

编辑器会根据`v-model`类型自动侦测内容格式：字串会视为`html`{lang="ts-type"}，而物件则视为`json`{lang="ts-type"}。

您可以使用`content-type`属性来明确设定格式：`json`{lang="ts-type"}、`html`{lang="ts-type"}或`markdown`{lang="ts-type"}。

::component-code
---
升高：true
更漂亮：真的
忽略：
- 模型值
- 内容类型
  班级
外部：
- 模型值
类别：'p-8'
道具：
  型号值：|
    你好，世界
    <p>这是一个<strong>RTF编辑器</strong>。</p>
  内容类型：'html'
  类别：'w-完整最小值-h-21'
---
::

扩展名

默认情况下，编辑器包括以下扩展名：

- [**StarterKit**](#starter-kit) -核心编辑功能（粗体、斜体、标题、列表等）
- [**占位符**](#placeholder) -显示占位符文本（当提供了占位符属性时）
- **Image** -插入并显示图像
- **提及** -添加@提及支持
- **Markdown** -解析并序列化标记（当内容类型为标记时）

::note
每个内置扩展都可以使用其相应的属性（`starter-kit`、`placeholder`、`image`、`mention`、`markdown`）进行配置，以使用TipTap选项自定义其行为。
::

您可以使用`extensions`属性添加其他TipTap扩展，以增强编辑器的功能：

```vue
<script setup lang="ts">
import { Emoji } from '@tiptap/extension-emoji'
import { TextAlign } from '@tiptap/extension-text-align'

const value = ref('<h1>Hello World</h1>\n')
</script>

<template>
  <UEditor
    v-model="value"
    :extensions="[
      Emoji,
      TextAlign.configure({
        types: ['heading', 'paragraph']
      })
    ]"
  />
</template>
```

::tip{to="#with-image-upload"}
查看创建自定义TipTap扩展的图像上传示例。
::

### 预留位置

使用`placeholder`属性设置在空段落中显示的占位符文本。

::component-code
---
升高：true
更漂亮：真的
忽略：
- 模型值
- 内容类型
- 占位符
  115班
外部：
- 型号值
类别：'p-8'
道具：
  modelValue：“”
  placeholder：'开始写入...'
  class：'w-full min-h-7'
---
::

::note
`placeholder`prop接受一个字符串或一个具有[PlaceholderOptions](https://tiptap.dev/docs/editor/extensions/functionality/placeholder)和一个附加的`mode`属性的对象：
- `everyLine`：聚焦时在每一个空行上显示占位符（默认）。
- `firstLine`：编辑器为空时，仅在第一行显示占位符。

```vue
<template>
  <UEditor :placeholder="{ placeholder: 'Start writing...', mode: 'firstLine' }" />
</template>
```
::

::tip
默认情况下，占位符只出现在顶层空节点上。要在列表项等嵌套元素中显示占位符，请将`includeChildren`设置为`true`：

```vue
<template>
  <UEditor :placeholder="{ placeholder: 'Start writing...', includeChildren: true }" />
</template>
```
::

::callout{icon="i-custom-tiptap" to="https://tiptap.dev/docs/editor/extensions/functionality/placeholder" target="_blank"}
在TipTap文档中了解有关占位符扩展的更多信息。
::

### Starter Kit

使用`starter-kit`prop配置内置的TipTap StarterKit扩展，其中包括常用的编辑器功能，如粗体、斜体、标题、列表、块引号、代码块等。

```vue
<script setup lang="ts">
const value = ref('<h1>Hello World</h1>\n')
</script>

<template>
  <UEditor
    v-model="value"
    :starter-kit="{
      blockquote: false,
      headings: {
        levels: [1, 2, 3, 4]
      },
      dropcursor: {
        color: 'var(--ui-primary)',
        width: 2
      },
      link: {
        openOnClick: false
      }
    }"
  />
</template>
```

::tip
将`starter-kit`设置为`false`以获得纯文本编辑器。它保留基本节点（段落、文本、历史记录），并禁用所有格式设置功能，如粗体、斜体、标题、列表、代码、块引用、链接和水平规则。
::

::callout{icon="i-custom-tiptap" to="https://tiptap.dev/docs/editor/extensions/functionality/starterkit" target="_blank"}
在TipTap文档中了解有关StarterKit扩展的更多信息。
::

### Handlers

处理程序包装TipTap的内置命令，为编辑器操作提供统一的界面。当您将`kind`属性添加到[EditorToolbar](/docs/components/editor-toolbar)或[EditorSugestionMenu](/docs/components/editor-suggestion-menu)项时，相应的处理程序将执行TipTap命令并管理其状态（活动、禁用等）。

#### Default handlers

编辑器组件提供了以下默认处理程序，您可以使用`kind`属性在工具栏或建议菜单项中引用这些处理程序：

| 处理程序|描述|使用|
|---------|-------------|-------|
| `mark`{lang="ts-type"}|切换文本标记（粗体、斜体、删除线、代码、下划线）|项目中需要`mark`属性|
| `textAlign`{lang="ts-type"}|设置文本对齐方式（左对齐、居中对齐、右对齐、对齐）|项目中需要`align`属性|
| `heading`{lang="ts-type"}|切换标题级别（1-6）|项目中需要`level`属性|
| `link`{lang="ts-type"}|添加、编辑或删除链接|如果未提供URL，则将其删除|
| `image`{lang="ts-type"}|插入图像|如果未提供URL，则将其删除|
| `blockquote`{lang="ts-type"}| Toggle blockquotes||
| `bulletList`{lang="ts-type"}|切换项目符号列表|处理列表转换|
| `orderedList`{lang="ts-type"}|切换有序列表|处理列表转换|
| `taskList`{lang="ts-type"}|切换任务列表|处理列表转换|
| `codeBlock`{lang="ts-type"}|切换代码块||
| `horizontalRule`{lang="ts-type"}|插入水平线||
| `paragraph`{lang="ts-type"}|设置段落格式||
| `undo`{lang="ts-type"}|撤消上次更改||
| `redo`{lang="ts-type"}|恢复上次撤消的更改||
| `clearFormatting`{lang="ts-type"}|删除所有格式|与选择或位置一起工作|
| `duplicate`{lang="ts-type"}|复制节点|项目中需要`pos`属性|
| `delete`{lang="ts-type"}|删除节点|项目中需要`pos`属性|
| `moveUp`{lang="ts-type"}|向上移动节点|项目中需要`pos`属性|
| `moveDown`{lang="ts-type"}|向下移动节点|项目中需要`pos`属性|
| `suggestion`{lang="ts-type"}|触发器建议菜单|`/`字符|
| `mention`{lang="ts-type"}|触发器提及菜单|`@`字符|
| 230英尺232英尺|触发表情选择器|插入`:`个字符|

::warning
`taskList`和`textAlign`处理程序仅在安装了各自的扩展后才能工作，因为默认情况下，它们不包括在编辑器中。
::

以下是如何在工具栏或建议菜单项中使用默认处理程序：

```vue
<script setup lang="ts">
import type { EditorToolbarItem } from '@nuxt/ui'

const value = ref('<h1>Hello World</h1>\n')

const items: EditorToolbarItem[] = [
  { kind: 'mark', mark: 'bold', icon: 'i-lucide-bold' },
  { kind: 'mark', mark: 'italic', icon: 'i-lucide-italic' },
  { kind: 'heading', level: 1, icon: 'i-lucide-heading-1' },
  { kind: 'heading', level: 2, icon: 'i-lucide-heading-2' },
  { kind: 'textAlign', align: 'left', icon: 'i-lucide-align-left' },
  { kind: 'textAlign', align: 'center', icon: 'i-lucide-align-center' },
  { kind: 'bulletList', icon: 'i-lucide-list' },
  { kind: 'orderedList', icon: 'i-lucide-list-ordered' },
  { kind: 'blockquote', icon: 'i-lucide-quote' },
  { kind: 'link', icon: 'i-lucide-link' }
]
</script>

<template>
  <UEditor v-slot="{ editor }" v-model="value">
    <UEditorToolbar :editor="editor" :items="items" />
  </UEditor>
</template>
```

#### 自定义处理程序

使用`handlers`属性扩展或覆盖默认处理程序。自定义处理程序与默认处理程序合并，因此您可以添加新操作或修改现有行为。

每个处理程序都实现`EditorHandler`{lang="ts-type"}接口：

```ts
interface EditorHandler {
  /* Checks if the command can be executed in the current editor state */
  canExecute: (editor: Editor, item?: any) => boolean
  /* Executes the command and returns a Tiptap chain */
  execute: (editor: Editor, item?: any) => any
  /* Determines if the item should appear active (used for toggle states) */
  isActive: (editor: Editor, item?: any) => boolean
  /* Optional additional check to disable the item (combined with `canExecute`) */
  isDisabled?: (editor: Editor, item?: any) => boolean
}
```

以下是创建自定义处理程序的示例：

```vue
<script setup lang="ts">
import type { Editor } from '@tiptap/vue-3'
import type { EditorCustomHandlers, EditorToolbarItem } from '@nuxt/ui'

const value = ref('<h1>Hello World</h1>\n')

const customHandlers = {
  highlight: {
    canExecute: (editor: Editor) => editor.can().toggleHighlight(),
    execute: (editor: Editor) => editor.chain().focus().toggleHighlight(),
    isActive: (editor: Editor) => editor.isActive('highlight'),
    isDisabled: (editor: Editor) => !editor.isEditable
  }
} satisfies EditorCustomHandlers

const items = [
  // Built-in handler
  { kind: 'mark', mark: 'bold', icon: 'i-lucide-bold' },
  // Custom handler
  { kind: 'highlight', icon: 'i-lucide-highlighter' }
] satisfies EditorToolbarItem<typeof customHandlers>[]
</script>

<template>
  <UEditor v-slot="{ editor }" v-model="value" :handlers="customHandlers">
    <UEditorToolbar :editor="editor" :items="items" />
  </UEditor>
</template>
```

::tip{to="#with-image-upload"}
查看图像上传示例，了解使用自定义处理程序的完整实现。
::

示例

::callout{icon="i-simple-icons-github" to="https://github.com/nuxt-ui-templates/editor" target="_blank"}
查看GitHub上的**Editor模板**的源代码，以获取一个真实的示例。
::

### 使用工具栏

您可以使用[EditorToolbar](/docs/components/editor-toolbar)元件，将`fixed`、`bubble`或`floating`工具列加入具有一般格式设定动作的编辑器。

::component-example
---
升高：true
收阖：true
更漂亮：真的
名称：'编辑器工具栏示例'
类别：'p-8'
---
::

### 使用拖曳控点

您可以使用[EditorDragHandle](/docs/components/editor-drag-handle)组件来加入可拖曳的控制代码，以便重新排序区块。

::component-example
---
升高：true
收阖：true
更漂亮：真的
名称：'编辑器-拖动-句柄-示例'
类别：'p-8'
---
::

### 使用建议菜单

您可以使用[EditorSugestionMenu](/docs/components/editor-suggestion-menu)组件来新增斜扛命令，以快速格式化和插入。

::component-example
---
升高：true
收阖：true
更漂亮：真的
名称：'编辑器-建议-菜单-示例'
类别：'p-8'
---
::

### 使用提及菜单

您可以使用[EditorMentionMenu](/docs/components/editor-mention-menu)元件来新增@提及，以便为使用者或实体加上标签。

::component-example
---
升高：true
收阖：true
更漂亮：真的
名称：'编辑器-提及-菜单-示例'
类别：'p-8'
---
::

### 使用表情菜单

您可以使用[EditorEmojiMenu](/docs/components/editor-emoji-menu)组件来新增表情选择器支援。

::component-example
---
升高：true
收阖：true
更漂亮：真的
名称：'编辑器-表情符号-菜单-示例'
类别：'p-8'
---
::

### 使用图像上载

此示例演示如何使用`extensions`属性注册自定义TipTap节点以及`handlers`属性定义工具栏按钮如何触发上载流来创建图像上载功能。

1. 创建一个使用[文件上载](/docs/components/file-upload)组件的Vue组件：

::component-example
---
预览：假
收阖：true
名称：'编辑器图像上传节点'
---
::

2. 创建一个自定义TipTap扩展来注册节点：

::component-example
---
预览：假
收阖：true
语言：'ts'
名称：'编辑器-图像-上传-扩展'
---
::

3. 在编辑器中使用自定义扩展名：

::component-example
---
升高：true
收阖：true
更漂亮：真的
名称：'编辑器-图像-上传-示例'
类：“！p-0”
---
::

::callout{icon="i-custom-tiptap" to="https://tiptap.dev/docs/editor/extensions/custom-extensions" target="_blank"}
在TipTap文档中了解有关创建自定义扩展的更多信息。
::

### 使用人工智能完成

此示例演示了如何使用[Vercel AI SDK](https://ai-sdk.dev/)（特别是[`useCompletion`](https://ai-sdk.dev/docs/reference/ai-sdk-ui/use-completion)）将AI支持的功能添加到编辑器中，该SDK可用于流式文本完成，与[Vercel AI Gateway](https://vercel.com/ai-gateway)结合使用，可通过一个集中式端点访问AI模型。它包括ghost文本自动完成和文本转换操作（修复语法、扩展、减少、简化、翻译等）。

::note
要使用此示例，您需要首先安装这些依赖项：

::code-group{sync="pm"}

```bash [pnpm]
pnpm add ai @ai-sdk/gateway @ai-sdk/vue
```

```bash [yarn]
yarn add ai @ai-sdk/gateway @ai-sdk/vue
```

```bash [npm]
npm install ai @ai-sdk/gateway @ai-sdk/vue
```

```bash [bun]
bun add ai @ai-sdk/gateway @ai-sdk/vue
```

::

::

1. 创建一个处理内联重影文本建议的自定义TipTap扩展：

::component-example
---
预览：假
收阖：true
名称：'编辑器-补全-扩展'
语言：'ts'
---
::

2. 创建一个管理AI完成状态和处理程序的可组合对象：

::component-example
---
预览：假
收阖：true
名称：'编辑器-使用-完成'
文件名：'使用编辑器完成'
语言：'ts'
---
::

3. 使用[创建服务器API终结点来处理完成请求`streamText`](https://ai-sdk.dev/docs/reference/ai-sdk-core/stream-text#streamtext)：

::code-collapse

```ts [server/api/completion.post.ts]
import { streamText, createTextStreamResponse } from 'ai'
import { gateway } from '@ai-sdk/gateway'

export default defineEventHandler(async (event) => {
  const { prompt, mode, language } = await readBody(event)
  if (!prompt) {
    throw createError({ statusCode: 400, message: 'Prompt is required' })
  }

  let instructions: string
  let maxOutputTokens: number

  const preserveMarkdown = 'IMPORTANT: Preserve all markdown formatting (bold, italic, links, etc.) exactly as in the original.'

  switch (mode) {
    case 'fix':
      instructions = `You are a writing assistant. Fix all spelling and grammar errors in the given text. ${preserveMarkdown} Only output the corrected text, nothing else.`
      maxOutputTokens = 500
      break
    case 'extend':
      instructions = `You are a writing assistant. Extend the given text with more details, examples, and explanations while maintaining the same style. ${preserveMarkdown} Only output the extended text, nothing else.`
      maxOutputTokens = 500
      break
    case 'reduce':
      instructions = `You are a writing assistant. Make the given text more concise by removing unnecessary words while keeping the meaning. ${preserveMarkdown} Only output the reduced text, nothing else.`
      maxOutputTokens = 300
      break
    case 'simplify':
      instructions = `You are a writing assistant. Simplify the given text to make it easier to understand, using simpler words and shorter sentences. ${preserveMarkdown} Only output the simplified text, nothing else.`
      maxOutputTokens = 400
      break
    case 'summarize':
      instructions = 'You are a writing assistant. Summarize the given text concisely while keeping the key points. Only output the summary, nothing else.'
      maxOutputTokens = 200
      break
    case 'translate':
      instructions = `You are a writing assistant. Translate the given text to ${language || 'English'}. ${preserveMarkdown} Only output the translated text, nothing else.`
      maxOutputTokens = 500
      break
    case 'continue':
    default:
      instructions = `You are a writing assistant providing inline autocompletions.
CRITICAL RULES:
- Output ONLY the NEW text that comes AFTER the user's input
- NEVER repeat any words from the end of the user's text
- Keep completions short (1 sentence max)
- Match the tone and style of the existing text
- ${preserveMarkdown}`
      maxOutputTokens = 25
      break
  }

  const result = streamText({
    model: gateway('anthropic/claude-haiku-4.5'),
    instructions,
    prompt,
    maxOutputTokens
  })

  return createTextStreamResponse({ stream: result.textStream })
})
```

::

4. 在编辑器中使用可组合对象：

::component-example
---
升高：true
收阖：true
更漂亮：真的
名称：'编辑器完成范例'
类：“！p-0”
---
::

::note
可以使用`autoTrigger: true`将完成扩展配置为在键入时自动建议完成（默认情况下禁用）。您也可以使用以下命令手动触发它：kbd{value="meta"}：kbd{value="j" class="ms-px"}。
::

::callout{icon="i-simple-icons-vercel" to="https://ai-sdk.dev/" target="_blank"}
了解有关Vercel AI SDK和可用提供程序的更多信息。
::

活性成分

### 道具

：组件-支柱

插槽

：组件插槽

发射率

：组件发射

曝光

通过模板引用访问组件时，可以使用以下命令：

| 名称|类型|
| ---- | ---- |
| 454小时456小时|457号公路|

::callout{icon="i-custom-tiptap" to="https://tiptap.dev/docs/editor/api/editor" target="_blank"}
公开的编辑器实例是TipTap编辑器API。请查看TipTap文档以了解所有可用的方法和属性。
::

主题

：组件主题

## 变更日志

：组件更改日志
