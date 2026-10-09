---
description: Markdown, HTML 및 JSON 콘텐츠 유형을 지원하는 TipTap 기반의 리치 텍스트 편집기 구성 요소입니다.A rich text editor component based on TipTap with support for markdown, HTML, and JSON content types.
category: editor
links:
  - label: TipTap (티탭)
    icon: i-custom-tiptap
    to: https://tiptap.dev/
  - label: Github (GitHub)
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Editor.vue
---

## Usage

Editor 구성 요소는 [TipTap](https://tiptap.dev/xph04x에 구축된 강력한 풍부한 텍스트 편집 환경을 제공합니다. 다양한 컨텐츠 형식(JSON, HTML, Markdown), 사용자 정의 도구 모음, 드래그 앤 드롭 블록 순서 변경, 언급, 이모티콘 선택기 및 사용자 정의 기능을 추가하기 위한 확장 가능한 아키텍처를 지원합니다.

::component-example
---
source: false
elevated: true
name: 'editor-example'
class: 'relative h-176 overflow-y-auto !p-0 rounded-b-md'
---
::

::callout{icon="i-simple-icons-github" to="https://github.com/nuxt/ui/blob/v4/docs/app/components/content/examples/editor/EditorExample.vue" aria-label="소스 코드 보기"}
이 예제에서는 프로덕션 준비 편집기 구성 요소를 보여 줍니다.GitHub에서 소스 코드를 확인하십시오.This example demonstrates a production-ready Editor component.Check out the source code on GitHub.
::

::warning
Editor 구성 요소 또는 확장 프로그램을 사용할 때 `Adding different instances of a keyed plugin`와 같은 prosemirror 관련 오류가 발생하면 prosemirror 패키지를 `nuxt.config.ts` 파일의 `vite.optimizeDeps.include` 목록에 추가해야 할 수도 있습니다. 이렇게 하면 Vite는 이러한 종속성을 사전 번들로 묶어 여러 인스턴스를 로드하지 않습니다.

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

### Content

`v-model` 지시문을 사용하여 Editor 값을 제어합니다.

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

### Content 형식

편집기는 `v-model` 유형에 따라 컨텐츠 형식을 자동으로 감지합니다. 문자열은 `html`{lang="ts-type"}로 처리되고 객체는 `json`{lang="ts-type"}로 처리됩니다.

`content-type` prop을 사용하여 형식을 명시적으로 설정할 수 있습니다: `json`{lang="ts-type"}, `html`{lang="ts-type"} 또는 `markdown`{lang="ts-type"}.

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

### 확장

편집기에는 기본적으로 다음과 같은 확장이 포함됩니다.The Editor includes the following extensions by default:

- [**StarterKit**](#starter-kit) - 코어 편집 기능(굵게, 기울임꼴, 머리글, 목록 등)
- [**Placeholder**](#placeholder) - 자리 표시자 텍스트 표시(자리 표시자 Prop 제공 시)
- **Image** - 이미지 삽입 및 표시
- **Mention** - @mention 지원 추가
- **Markdown** - Markdown 구문 분석 및 직렬화 (콘텐츠 유형이 markdown 인 경우)

::note
각 내장 확장은 해당 prop (`starter-kit`, `placeholder`, `image`, `mention`, `markdown`)를 사용하여 TipTap 옵션으로 동작을 사용자 정의 할 수 있습니다.
::

`extensions` prop을 사용하여 TipTap 확장을 추가하여 에디터의 기능을 향상시킬 수 있습니다:

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
사용자 지정 TipTap 확장을 만들기 위한 이미지 업로드 예제를 확인하십시오.
::

### placeholder 위치 표시자

`placeholder` 소품을 사용하여 빈 단락에 표시되는 자리 표시자 텍스트를 설정합니다.

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
`placeholder` prop은 [PlaceholderOptions](https://tiptap.dev/docs/editor/extensions/functionality/placeholder) 및 추가 `mode` 속성이 있는 문자열 또는 객체를 허용합니다.
- `everyLine`: 포커스가 설정되면 빈 줄마다 자리 표시자를 표시합니다(기본값).
- `firstLine` : 편집기가 비어 있을 때 첫 줄에만 자리 표시자를 표시합니다.

```vue
<template>
  <UEditor :placeholder="{ placeholder: 'Start writing...', mode: 'firstLine' }" />
</template>
```
::

::tip
기본적으로 자리 표시자는 최상위 빈 노드에만 표시됩니다. 목록 항목과 같은 중첩된 요소에 자리 표시자를 표시하려면 `includeChildren`를 `true`로 설정합니다.

```vue
<template>
  <UEditor :placeholder="{ placeholder: 'Start writing...', includeChildren: true }" />
</template>
```
::

::callout{icon="i-custom-tiptap" to="https://tiptap.dev/docs/editor/extensions/functionality/placeholder" target="_blank"}
TipTap   설명서 에서   자리   표시 자   확장 에   대해   자세히   알아보 십시오 .
::

### starter   키트

`starter-kit`   prop 을   사용 하 여   굵 게 ,   기울임 꼴 ,   제목 ,   목록 ,   블록   따옴표 ,   코드   블록   등 과   같 은   일반 적 인   편집기   기능 을   포함 하 는   내장   TipTap   StarterKit   확장 을   구성 합니다 . Use   the   `starter-kit`   prop   to   configure   the   built - in   TipTap   StarterKit   extension   which   includes   common   editor   features   like   bold ,   italic ,   headers ,   lists ,   blockquotes ,   code   blocks ,   and   more .

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
일반   텍스트   편집기 의   경우   `starter-kit` 를   `false` 로   설정 합니다 .   기본   노드 (단락 ,   텍스트 ,   히스토리) 를   유지 하 고   굵 게 ,   기울임 꼴 ,   머리글 ,   목록 ,   코드 ,   블록   따옴표 ,   링크   및   가로   규칙 과   같 은   모든   서식   기능 을   비 활성 화 합니다 .
::

::callout{icon="i-custom-tiptap" to="https://tiptap.dev/docs/editor/extensions/functionality/starterkit" target="_blank"}
StarterKit   확장 에   대한   자세 한   내용 은   TipTap   설명서 에서   확인 하 십시오 .
::

### Handler   (### Handler)   파일

핸들러 는   TipTap 의   기본   제공   명령 을   래핑 하 여   편집기   작업 을   위한   통합   인터페이스 를   제공 합니다 .   [EditorToolbar](/docs/components/editor-toolbar)   또는   [EditorSugestionMenu](xph 21 x)   항목 에   `kind`   등록   정보 를   추가 하 면   해당   핸들러 는   TipTap   명령 을   관리 하 고   활성   상태 (비활성 화) 를   실행 합니다 .

#### 기본   핸들러

Editor   구성   요소 는   `kind`   속성 을   사용 하 여   도구   모음   또는   제안   메뉴   항목 에서   참조 할   수   있 는   이러 한   기본   처리 기 를   제공 합니다 .

| 처리 기 (Handler)| 설명 (Description)| 사용   방법|
|---------|-------------|-------|
| `mark`{lang="ts-type"}| 텍스트   표시 (굵 게 ,   기울임 꼴 ,   스트라이크 ,   코드 ,   밑줄)   전환| 항목 에   `mark`   속성   필요|
| `textAlign`{lang="ts-type"}| 텍스트   정렬   설정 (왼쪽 ,   가운데 ,   오른쪽 ,   자리 맞추 기)| 항목 에   `align`   속성   필요|
| `heading`{lang="ts-type"}| 제목   레벨   전환 (1 - 6)| 항목 에   `level`   속성   필요|
| `link`{lang="ts-type"}| 링크   추가 ,   편집   또는   제거| URL 이   제공 되 지   않 은   경우   프롬프트|
| `image`{lang="ts-type"}| 이미지   삽입| URL 이   제공 되 지   않 은   경우   프롬프트|
| `blockquote`{lang="ts-type"}| 블록   따옴표   토글||
| `bulletList`{lang="ts-type"}| 글 머리   기호   목록   전환| 리스트   변환   처리|
| `orderedList`{lang="ts-type"}| 순서 가   지정 된   목록   전환| 리스트   변환   처리|
| `taskList`{lang="ts-type"}| 작업   목록   토글| 리스트   변환   처리|
| `codeBlock`{lang="ts-type"}| 코드   블록   전환||
| `horizontalRule`{lang="ts-type"}| 수평   규칙   삽입||
| `paragraph`{lang="ts-type"}| 단락   형식   설정||
| `undo`{lang="ts-type"}| 마지막   변경   명령 취소||
| `redo`{lang="ts-type"}| 마지막 으로   실행   취소 한   변경   내용   다시   실행||
| `clearFormatting`{lang="ts-type"}   파일| 모든   서식   제거| 선택   또는   위치 와   함께   작업|
| `duplicate`{lang="ts-type"}| 노드 복제|항목에 `pos` 속성 필요|
| `delete`{lang="ts-type"}| 노드 삭제|항목에 `pos` 속성 필요|
| `moveUp`{lang="ts-type"}| 노드를 위로 이동| 항목에 `pos` 속성 필요|
| `moveDown`{lang="ts-type"}| 노드 아래로 이동| 항목에 `pos` 속성 필요|
| `suggestion`{lang="ts-type"}| 제안 메뉴 트리거| `/` 문자 삽입|
| `mention`{lang="ts-type"}| 트리거 언급 메뉴| `@` 문자 삽입|
| `emoji`{lang="ts-type"} 파일| 이모티콘 선택기 트리거| `:` 문자 삽입|

::warning
`taskList` 및 `textAlign` 처리기는 해당 확장이 설치된 경우에만 작동하며, 기본적으로 편집기에 포함되지 않습니다.
::

다음은 도구 모음 또는 제안 메뉴 항목에서 기본 처리기를 사용하는 방법입니다.

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

#### 사용자 정의 처리기

`handlers` 소품을 사용하여 기본 처리기를 확장하거나 재정의합니다. 사용자 정의 처리기는 기본 처리기와 병합되므로 새 작업을 추가하거나 기존 동작을 수정할 수 있습니다.

각 핸들러는 `EditorHandler`{lang="ts-type"} 인터페이스를 구현합니다.

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

다음은 사용자 지정 처리기를 만드는 예입니다.

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
사용자 지정 처리기를 사용하여 전체 구현을 보려면 이미지 업로드 예제를 확인하십시오.
::

## 예제

::callout{icon="i-simple-icons-github" to="https://github.com/nuxt-ui-templates/editor" target="_blank"}
GitHub에서 **Editor template**의 소스 코드를 확인하여 실제 예제를 보십시오.
::

### With 도구 모음

[EditorToolbar](/docs/components/editor-toolbar) 구성 요소를 사용하여 일반적인 서식 작업을 사용하여 `fixed`, `bubble` 또는 `floating` 도구 모음을 편집기에 추가할 수 있습니다.

::component-example
---
elevated: true
collapse: true
prettier: true
name: 'editor-toolbar-example'
class: 'p-8'
---
::

### 드래그 핸들 사용

[EditorDragHandle](/docs/components/editor-drag-handle) 구성요소를 사용하여 블록 순서를 조정하기 위한 끌기 가능한 핸들을 추가할 수 있습니다.

::component-example
---
elevated: true
collapse: true
prettier: true
name: 'editor-drag-handle-example'
class: 'p-8'
---
::

### With 권장 메뉴

[EditorSugestionMenu](/docs/components/editor-suggestion-menu) 구성 요소를 사용하여 슬래시 명령을 추가하여 형식 지정 및 삽입을 신속하게 수행할 수 있습니다.

::component-example
---
elevated: true
collapse: true
prettier: true
name: 'editor-suggestion-menu-example'
class: 'p-8'
---
::

### Mention 메뉴

[EditorMentionMenu](/docs/components/editor-mention-menu) 구성 요소를 사용하여 사용자 또는 엔티티에 태그를 지정하기 위한 @mentions를 추가할 수 있습니다.

::component-example
---
elevated: true
collapse: true
prettier: true
name: 'editor-mention-menu-example'
class: 'p-8'
---
::

### Emoji 메뉴 포함

[EditorEmojMenu](/docs/components/editor-emoji-menu) 구성 요소를 사용하여 이모티콘 선택기 지원을 추가할 수 있습니다.

::component-example
---
elevated: true
collapse: true
prettier: true
name: 'editor-emoji-menu-example'
class: 'p-8'
---
::

### With 이미지 업로드

이 예에서는 `extensions` prop을 사용하여 이미지 업로드 기능을 만들어 사용자 정의 TipTap 노드와 `handlers` prop을 등록하여 도구 모음 버튼이 업로드 흐름을 트리거하는 방법을 정의하는 방법을 보여 줍니다.

1. x[FileUpload](/docs/components/file-upload) 구성 요소를 사용하여 Vue 구성 요소를 만듭니다.

::component-example
---
preview: false
collapse: true
name: 'editor-image-upload-node'
---
::

2. 사용자 정의 TipTap 확장을 만들어 노드를 등록합니다.

::component-example
---
preview: false
collapse: true
lang: 'ts'
name: 'editor-image-upload-extension'
---
::

3. 편집기에서 사용자 지정 확장을 사용합니다.

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
TipTap 설명서에서 사용자 지정 확장 만들기에 대해 자세히 알아보십시오.
::

### AI 완료

이 예에서는 [Vercel AI SDK](https://ai-sdk.dev/), 특히 스트리밍 텍스트 완성을 위해 ](https://ai-sdk.dev/docs/reference/ai-sdk-ui/use-completion) 컴포지션을 사용하여 편집기에 AI 기반 기능을 추가하는 방법을 보여 줍니다. [Vercel AI Gateway](https://vercel.com/ai-gateway)와 결합하여 중앙 집중식 엔드포인트를 통해 AI 모델에 액세스할 수 있습니다. 고스트 텍스트 자동 완성 및 텍스트 변환이 포함됩니다. 동작 (수정 문법, 확장, 축소, 단순화, 번역 등).

::note
이 예제를 사용하려면 먼저 이러한 종속성을 설치해야 합니다.You need to install these dependencies first to use this example:

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

1. 인라인 고스트 텍스트 제안을 처리하는 사용자 지정 TipTap 확장을 만듭니다.

::component-example
---
preview: false
collapse: true
name: 'editor-completion-extension'
lang: 'ts'
---
::

2. AI 완료 상태 및 처리기를 관리하는 컴포지블을 만듭니다.

::component-example
---
preview: false
collapse: true
name: 'editor-use-completion'
filename: 'useEditorCompletion'
lang: 'ts'
---
::

3. x[`streamText`](https://ai-sdk.dev/docs/reference/ai-sdk-core/stream-text#streamtext)를 사용하여 완료 요청을 처리하는 서버 API 엔드포인트를 만듭니다.

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

4. Editor에서 작성 가능한 항목을 사용합니다.

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
완료 확장 기능은 `autoTrigger: true`를 사용하여 입력하는 동안 자동으로 완료를 제안하도록 구성할 수 있습니다(기본적으로 비활성화됨). kbd{value="meta"}:kbd{value="j" class="ms-px"}로 수동으로 트리거할 수도 있습니다.
::

::callout{icon="i-simple-icons-vercel" to="https://ai-sdk.dev/" target="_blank"}
Vercel AI SDK 및 사용 가능한 공급자에 대해 자세히 알아보세요.
::

## API

### Props (### Props)

:component-props

### Slots 슬롯

:component-slots

### Emits

:component-emits

### 노출

템플릿 참조를 통해 컴포넌트에 액세스하는 경우 다음을 사용할 수 있습니다.

| 이름 (Name)| 유형 (Type)|
| ---- | ---- |
| `editor`{lang="ts-type"} (`editor`{lang="ts-type"})| `Ref<Editor \| undefined>`{lang="ts-type"} (`Ref<Editor \| undefined>`{lang="ts-type"})|

::callout{icon="i-custom-tiptap" to="https://tiptap.dev/docs/editor/api/editor" target="_blank"}
노출된 편집기 인스턴스는 TipTap Editor API입니다. 사용 가능한 모든 메소드와 속성은 TipTap 설명서를 참조하십시오.
::

## Theme 테마

:component-theme

## 변경 로그

:component-changelog
