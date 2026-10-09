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

## 用法

编辑器组件在[TipTap](https://tiptap.dev/)的基础上提供了强大的富文本编辑体验。它支持多种内容格式（JSON，HTML，Markdown），可自定义的编辑器，拖放块重新排序，斜杠命令，提及，表情符号选择器以及用于添加自定义功能的可扩展架构。

::component-example
---
source: false
elevated: true
name: 'editor-example'
class: 'relative h-176 overflow-y-auto !p-0 rounded-b-md'
---
::

::callout{icon="i-simple-icons-github" to="https://github.com/nuxt/ui/blob/v4/docs/app/components/content/examples/editor/EditorExample.vue" aria-label="查看源代码"}
这个例子演示了一个生产就绪的编辑器组件。在GitHub上查看源代码。
::

::warning
如果您在使用Editor组件或其扩展时遇到类似`Adding different instances of a keyed plugin`的prosemirror相关错误，您可能需要将prosemirror包添加到`nuxt.config.ts`文件中的`vite.optimizeDeps.include`列表中。这可以确保Vite预先绑定这些依赖项，以避免加载多个实例。

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

### 内容

使用`v-model`指令控制编辑器的值。

::component-code
---
elevated: true
prettier: true
collapse: true
ignore:
  - modelValue.type
  - modelValue.content
  - class
external:
  - modelValue
class: 'p-8'
props:
  modelValue:
    type: 'doc'
    content:
      - type: 'heading'
        attrs:
          level: 1
        content:
          - type: 'text'
            text: 'Hello World'
      - type: 'paragraph'
        content:
          - type: 'text'
            text: 'This is a '
          - type: 'text'
            marks:
              - type: 'bold'
            text: 'rich text'
          - type: 'text'
            text: ' editor.'
  class: 'w-full min-h-21'
---
::

### 内容类型

编辑器会根据`v-model`类型自动检测内容格式：字符串被视为`html`{lang="ts-type"}，对象被视为`json`{lang="ts-type"}。

您可以使用`content-type`属性显式设置格式：`json`{lang="ts-type"}、`html`{lang="ts-type"}或`markdown`{lang="ts-type"}。

::component-code
---
elevated: true
prettier: true
ignore:
  - modelValue
  - contentType
  - class
external:
  - modelValue
class: 'p-8'
props:
  modelValue: |
    <h1>Hello World</h1>
    <p>This is a <strong>rich text</strong> editor.</p>
  contentType: 'html'
  class: 'w-full min-h-21'
---
::

### 扩展

默认情况下，编辑器包括以下扩展名：

- [**StarterKit**](#starter-kit)-核心编辑功能（粗体、斜体、标题、列表等）
- [**Placeholder**](#placeholder)-显示占位符文本（当提供占位符道具时）
- **Image**-插入和显示图像
- **Mention**-添加@提及支持
- **Markdown**-解析和序列化markdown（当内容类型为markdown时）

::note
每个内置扩展都可以使用其相应的prop（`starter-kit`，`placeholder`，`image`，`mention`，`markdown`）进行配置，以使用TipTap选项自定义其行为。
::

您可以使用`extensions` prop添加额外的TipTap扩展来增强编辑器的功能：

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
查看图像上传示例，以创建自定义TipTap扩展。
::

### 占位符

使用`placeholder`属性设置一个显示在空段落中的占位符文本。

::component-code
---
elevated: true
prettier: true
ignore:
  - modelValue
  - contentType
  - placeholder
  - class
external:
  - modelValue
class: 'p-8'
props:
  modelValue: ''
  placeholder: 'Start writing...'
  class: 'w-full min-h-7'
---
::

::note
`placeholder` prop接受一个字符串或一个带有[PlaceholderOptions](https://tiptap.dev/docs/editor/extensions/functionality/placeholder)和一个附加`mode`属性的对象：
- `everyLine`：聚焦时在每一个空行上显示占位符（默认）。
- `firstLine`：编辑器为空时，仅在第一行显示占位符。

```vue
<template>
  <UEditor :placeholder="{ placeholder: 'Start writing...', mode: 'firstLine' }" />
</template>
```
::

::tip
默认情况下，占位符只出现在顶层空节点上。要在嵌套元素（如列表项）中显示占位符，请将`includeChildren`设置为`true`：

```vue
<template>
  <UEditor :placeholder="{ placeholder: 'Start writing...', includeChildren: true }" />
</template>
```
::

::callout{icon="i-custom-tiptap" to="https://tiptap.dev/docs/editor/extensions/functionality/placeholder" target="_blank"}
在TipTap文档中了解有关占位符扩展的更多信息。
::

### 入门套件

使用`starter-kit` prop配置内置的TipTap StarterKit扩展，其中包括常用的编辑器功能，如粗体，斜体，标题，列表，块引号，代码块等。

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
将`starter-kit`设置为`false`以获得纯文本编辑器。它保留基本节点（段落，文本，历史记录）并禁用所有格式功能，如粗体，斜体，标题，列表，代码，块引用，链接和水平规则。
::

::callout{icon="i-custom-tiptap" to="https://tiptap.dev/docs/editor/extensions/functionality/starterkit" target="_blank"}
在TipTap文档中了解有关StarterKit扩展的更多信息。
::

### Handlers

处理程序包装TipTap的内置命令，为编辑器操作提供统一的界面。当您将`kind`属性添加到[EditorToolbar](/docs/components/editor-toolbar)或[EditorSuggestionMenu](/docs/components/editor-suggestion-menu)项时，相应的处理程序将执行TipTap命令并管理其状态（活动、禁用等）。

#### 默认处理程序

编辑器组件提供了这些默认处理程序，您可以使用`kind`属性在工具栏或建议菜单项中引用它们：

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
| `suggestion`{lang="ts-type"}|触发器建议菜单|ph271x字符|
| `mention`{lang="ts-type"}|触发器提及菜单|ph274x字符|
| `emoji`{lang="ts-type"}|触发表情符号选择器|ph277x字符|

::warning
`taskList`和`textAlign`处理程序仅在安装了各自的扩展时才能工作，因为默认情况下它们不包含在编辑器中。
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

每个处理程序实现`EditorHandler`{lang="ts-type"}接口：

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
查看图片上传示例，了解自定义处理程序的完整实现。
::

## 示例

::callout{icon="i-simple-icons-github" to="https://github.com/nuxt-ui-templates/editor" target="_blank"}
在GitHub上查看我们的**Editor template**的源代码，以获得真实的示例。
::

### 带工具栏

您可以使用[EditorToolbar](/docs/components/editor-toolbar)组件将`fixed`、`bubble`或`floating`工具栏添加到具有常见格式设置操作的编辑器。

::component-example
---
elevated: true
collapse: true
prettier: true
name: 'editor-toolbar-example'
class: 'p-8'
---
::

### 带拖动手柄

您可以使用[EditorDragHandle](/docs/components/editor-drag-handle)组件添加可拖动句柄，以便对块进行重新排序。

::component-example
---
elevated: true
collapse: true
prettier: true
name: 'editor-drag-handle-example'
class: 'p-8'
---
::

### 带建议菜单

您可以使用[EditorSuggestionMenu](/docs/components/editor-suggestion-menu)组件添加斜线命令，以快速设置格式和插入。

::component-example
---
elevated: true
collapse: true
prettier: true
name: 'editor-suggestion-menu-example'
class: 'p-8'
---
::

### 带提示菜单

您可以使用[EditorMentionMenu](/docs/components/editor-mention-menu)组件添加@mentions以标记用户或实体。

::component-example
---
elevated: true
collapse: true
prettier: true
name: 'editor-mention-menu-example'
class: 'p-8'
---
::

### 带表情符号菜单

您可以使用[EditorjiMenu](/docs/components/editor-emoji-menu)组件添加emoji选择器支持。

::component-example
---
elevated: true
collapse: true
prettier: true
name: 'editor-emoji-menu-example'
class: 'p-8'
---
::

### 带图片上传

此示例演示如何使用`extensions` prop创建图像上传功能，以注册自定义TipTap节点，并使用`handlers` prop定义工具栏按钮如何触发上传流。

1. 创建一个使用[文件夹ad](/docs/components/file-upload)组件的Vue组件：

::component-example
---
preview: false
collapse: true
name: 'editor-image-upload-node'
---
::

2. 创建自定义TipTap扩展来注册节点：

::component-example
---
preview: false
collapse: true
lang: 'ts'
name: 'editor-image-upload-extension'
---
::

3. 在编辑器中使用自定义扩展：

::component-example
---
elevated: true
collapse: true
prettier: true
name: 'editor-image-upload-example'
class: '!p-0'
---
::

::callout{icon="i-custom-tiptap" to="https://tiptap.dev/docs/editor/extensions/custom-extensions" target="_blank"}
在TipTap文档中了解有关创建自定义扩展的更多信息。
::

### 带AI补全

此示例演示如何使用[Vercel AI SDK](https://ai-sdk.dev/)将AI驱动的功能添加到编辑器中，特别是可用于流式文本补全的[`useCompletion`](https://ai-sdk.dev/docs/reference/ai-sdk-ui/use-completion)组合，结合[Vercel AI Gateway ](https://vercel.com/ai-gateway)，通过集中式端点访问AI模型。它包括ghost文本自动完成和文本转换操作（修复语法、扩展、减少、简化、翻译等）。

::note
您需要先安装这些依赖项才能使用此示例：

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

1. 创建一个自定义TipTap扩展来处理内联ghost文本建议：

::component-example
---
preview: false
collapse: true
name: 'editor-completion-extension'
lang: 'ts'
---
::

2. 创建一个管理AI完成状态和处理程序的组合：

::component-example
---
preview: false
collapse: true
name: 'editor-use-completion'
filename: 'useEditorCompletion'
lang: 'ts'
---
::

3. 使用[`streamText`](https://ai-sdk.dev/docs/reference/ai-sdk-core/stream-text#streamtext)创建一个服务器API端点来处理完成请求：

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

4. 在编辑器中使用组合：

::component-example
---
elevated: true
collapse: true
prettier: true
name: 'editor-completion-example'
class: '!p-0'
---
::

::note
补全扩展可以通过`autoTrigger: true`配置为在键入时自动建议补全（默认情况下禁用）。您也可以通过kbd{value="meta"}：kbd{value="j" class="ms-px"}手动触发它。
::

::callout{icon="i-simple-icons-vercel" to="https://ai-sdk.dev/" target="_blank"}
了解有关Vercel AI SDK和可用提供商的更多信息。
::

## API

### Props

:component-props

### Slots

:component-slots

### Emits

:component-emits

### 曝光

通过模板引用访问组件时，可以使用以下命令：

| 名称|类型|
| ---- | ---- |
| `editor`{lang="ts-type"}| `Ref<Editor \| undefined>`{lang="ts-type"}|

::callout{icon="i-custom-tiptap" to="https://tiptap.dev/docs/editor/api/editor" target="_blank"}
公开的编辑器实例是TipTap Editor API。查看TipTap文档以了解所有可用的方法和属性。
::

## Theme

:component-theme

## Changelog

:component-changelog
