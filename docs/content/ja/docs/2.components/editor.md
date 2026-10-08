---
description: Markdown、HTML、JSONコンテンツタイプをサポートするTipTapベースのリッチテキストエディタコンポーネント。
category: editor
links:
  - label: ヒントタップ
    icon: i-custom-tiptap
    to: https://tiptap.dev/
  - label: サイトマップ
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Editor.vue
---

## 使用法

Editorコンポーネントは、[ TipTap ](https://tiptap.dev/)上に構築された強力なリッチテキスト編集エクスペリエンスを提供します。複数のコンテンツフォーマット（JSON、HTML、Markdown）、カスタマイズ可能なツールバー、ドラッグアンドドロップブロックの並べ替え、スラッシュコマンド、メンション、絵文字ピッカー、カスタム機能を追加するための拡張可能なアーキテクチャをサポートしています。

::component-example
---
ソース：false
昇格：true
name 'editor—example'
クラス'相対h—176オーバーフロー—y—auto！p—0 rounded—b—md'
---
::

::callout{icon="i-simple-icons-github" to="https://github.com/nuxt/ui/blob/v4/docs/app/components/content/examples/editor/EditorExample.vue" aria-label="ソースコードを見る"}
この例では、本番対応のEditorコンポーネントを示しています。ソースコードはGitHubで確認してください。
::

::warning
Editorコンポーネントまたはその拡張機能を使用しているときに`Adding different instances of a keyed plugin`のようなprosemirror関連のエラーが発生した場合は、`nuxt.config.ts`ファイルの`vite.optimizeDeps.include`リストにprosemirrorパッケージを追加する必要があります。これにより、Viteはこれらの依存関係を事前にバンドルし、複数のインスタンスをロードしないようにします。

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

### コンテンツ

エディタの値を制御するには、`v-model`ディレクティブを使用します。

::component-code
---
昇格：true
きれい真
崩壊真
無視
  -  modelValue.type
  -  modelValue.content
  - クラス
外部
  -  modelValue
クラス'p—8'
小道具
  modelValue
    タイプ'doc'
    内容：
      -  type 'heading'
        attrs
          レベル1
        内容：
          - タイプ'text'
            text 'Hello World'
      - タイプ'段落'
        内容：
          - タイプ'text'
            テキスト：「これはA」
          - タイプ'text'
            マーク
              -  type 'bold'
            text 'リッチテキスト'
          - タイプ'text'
            テキスト'編集者'
  クラス'w—full min—h—21'
---
::

### コンテンツタイプ

エディタは、`v-model`タイプに基づいてコンテンツ形式を自動的に検出します。文字列は`html`{lang="ts-type"}、オブジェクトは`json`{lang="ts-type"}として扱われます。

`content-type` propを使用してフォーマットを明示的に設定できます：`json`{lang="ts-type"}`html`{lang="ts-type"}`markdown`{lang="ts-type"}。

::component-code
---
昇格：真
きれい真
無視
  -  modelValue
  -  contentType
  - クラス
外部
  -  modelValue
クラス'p—8'
小道具
  modelValue|
    <h1> Hello World </h1>
    <p> This is a <strong> rich text </strong> editor.</p>
  contentType 'html'
  クラス'w—full min—h—21'
---
::

### 拡張機能

エディタにはデフォルトで次の拡張機能があります。

- [** StarterKit **](#starter-kit)—コア編集機能（太字、イタリック体、見出し、リストなど）
- [** Placeholder **](#placeholder)—プレースホルダのテキストを表示する（プレースホルダプロップが提供されている場合）
- ** Image**—画像の挿入と表示
- **メンション**—@メンション追加サポート
- ** Markdown **—markdownを解析してシリアライズします（コンテンツタイプがmarkdownの場合）

::note
各組み込み拡張機能は、対応するプロパティ`starter-kit``placeholder``image``mention``markdown`を使用して、TipTapオプションを使用して動作をカスタマイズすることができます。
::

`extensions` propを使用して、TipTap拡張機能を追加してエディタの機能を強化できます。

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
カスタムTipTap拡張機能を作成するための画像アップロード例をご覧ください。
::

### プレースホルダー

`placeholder`プロパティを使用して、空の段落に表示するプレースホルダーテキストを設定します。

::component-code
---
昇格：真
きれい真
無視
  -  modelValue
  -  contentType
  - プレースホルダー
  - クラス
外部
  -  modelValue
クラス ' p-8 '
小道具
  modelValue ' '
  プレースホルダー ' 書き 始め ます ... '
  クラス ' w-full min-h-7 '
---
::

::note
`placeholder`prop は 、[PlaceholderOptions](https://tiptap.dev/docs/editor/extensions/functionality/placeholder)と 追加 の`mode`プロ パティ を 持つ 文字 列 また は オブジェクト を 受け付け ます 。
- `everyLine`フォーカス 時 に すべて の 空行 に プレースホルダー を 表示 し ます デフォルト 。
- `firstLine`エディタ が 空 の 場合 、 最初 の 行 に のみ プレースホルダー を 表示 し ます 。

```vue
<template>
  <UEditor :placeholder="{ placeholder: 'Start writing...', mode: 'firstLine' }" />
</template>
```
::

::tip
デフォルト で は 、 プレースホルダ は 最 上位 の 空 ノード に のみ 表示 さ れ ます 。 リストアイテム の よう な ネスト さ れ た 要素 に プレースホルダ を 表示 する に は 、`includeChildren`を`true`に 設定 し ます 。

```vue
<template>
  <UEditor :placeholder="{ placeholder: 'Start writing...', includeChildren: true }" />
</template>
```
::

::callout{icon="i-custom-tiptap" to="https://tiptap.dev/docs/editor/extensions/functionality/placeholder" target="_blank"}
プレースホルダー 拡張 機能 の 詳細 について は 、 TipTap ドキュメント を ご覧 ください 。
::

### スターター キット

`starter-kit`prop を 使用 し て 、 太 字 、 イタリック 体 、 見出し 、 リスト 、 ブロック クォート 、 コードブロック など の 一般 的 な エディタ 機能 を 含む 組み込み の TipTap StarterKit 拡張 機能 を 設定 し ます 。

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
プレーン テキストエディタ の 場合 、`starter-kit`を`false`に 設定 し ます 。 これ は 重要 な ノード （ 段落 、 テキスト 、 履歴 ） を 保持 し 、 太字 、 イタリック 体 、 見出し 、 リスト 、 コード 、 ブロック クォート 、 リンク 、 水平 ルール など の すべて の 書式 設定 機能 を 無効 に し ます 。
::

::callout{icon="i-custom-tiptap" to="https://tiptap.dev/docs/editor/extensions/functionality/starterkit" target="_blank"}
StarterKit 拡張 機能 の 詳細 について は 、 TipTap の ドキュメント を ご覧 ください 。
::

### ハンドラー

ハンドラー は TipTap の 組み込み コマンド を ラップ し て 、 エディタ アクション の 統一 さ れ た インター フェイス を 提供 し ます 。[EditorToolbar](/docs/components/editor-toolbar)また は[EditorSuggestionMenu](/docs/components/editor-suggestion-menu)項目 に`kind`プロ パティ を 追加 する と 、 対応 する ハンドラー は TipTap コマンド を 実行 し 、 その 状態 を 管理 し ます 。（ アクティブ 、 障害 者 など ） 。

#### デフォルトハンドラ

Editor コンポーネント は 以下 の デフォルトハンドラ を 提供 し ます 。 ツールバー や 提案 メニュー アイテム で`kind`プロ パティ を 使用 し て 参照 でき ます 。

| ハンドリング|説明|使い方|
|---------|-------------|-------|
| `mark`{lang="ts-type"}|テキスト マーク （ 太 字 、 斜体 、 ストライク 、 コード 、 下 線 ） を 切り替え ます 。|アイテム に`mark`プロ パティ が 必要 です 。|
| `textAlign`{lang="ts-type"}|テキスト の 配置 を 設定 する （ 左 、 中央 、 右 、 justify ）|アイテム に`align`プロ パティ が 必要 です 。|
| `heading`{lang="ts-type"}|見出し レベル を 切り替え ます 1 - 6|アイテム に`level`プロ パティ が 必要 です 。|
| `link`{lang="ts-type"}|リンク の 追加 、 編集 、 削除|提供 さ れ て い ない URL の プロンプト|
| `image`{lang="ts-type"}|画像 を 挿入|提供 さ れ て い ない URL の プロンプト|
| `blockquote`{lang="ts-type"}|ブロック クォート を 切り替え||
| `bulletList`{lang="ts-type"}|箇条 書き リスト を 切り替え|リスト 変換 の 処理|
| `orderedList`{lang="ts-type"}|順序 リスト を 切り替え|リスト 変換 の 処理|
| `taskList`{lang="ts-type"}|タスクリスト を 切り替え|リスト 変換 の 処理|
| `codeBlock`{lang="ts-type"}|コードブロック を 切り替え||
| `horizontalRule`{lang="ts-type"}|水平 ルール の 挿入||
| `paragraph`{lang="ts-type"}|段落 形式 の 設定||
| `undo`{lang="ts-type"}|最後 の 変更 を 取り消す||
| `redo`{lang="ts-type"}|最後 に 取り消し た 変更 を やり直す||
| `clearFormatting`{lang="ts-type"}|すべて の 書式 を 削除|選択 また は 位置 で 動作|
| `duplicate`{lang="ts-type"}|ノード を 複製 する|アイテム に`pos`プロ パティ が 必要 です 。|
| `delete`{lang="ts-type"}|ノード を 削除|アイテム に`pos`プロ パティ が 必要 です 。|
| `moveUp`{lang="ts-type"}|ノード を 上 に 移動|アイテム に`pos`プロ パティ が 必要 です 。|
| `moveDown`{lang="ts-type"}|ノード を 下 に 移動|アイテム に`pos`プロ パティ が 必要 です 。|
| `suggestion`{lang="ts-type"}|トリガー 提案 メニュー| `/`文字 を 挿入|
| `mention`{lang="ts-type"}|トリガー 言及 メニュー| `@`文字 を 挿入|
| `emoji`{lang="ts-type"}|絵文字ピッカーをトリガー| `:`文字を挿入|

::warning
`taskList`と`textAlign`ハンドラは、デフォルトではエディタに含まれていないため、それぞれの拡張機能がインストールされている場合にのみ機能します。
::

ツールバーまたは提案メニュー項目でデフォルトハンドラを使用する方法は次のとおりです。

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

#### カスタムハンドラー

`handlers`プロパティを使用して、デフォルトハンドラーを拡張またはオーバーライドします。カスタムハンドラーはデフォルトハンドラーとマージされるため、新しいアクションを追加したり、既存の動作を変更したりできます。

各ハンドラは`EditorHandler`{lang="ts-type"}インターフェイスを実装しています。

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

カスタムハンドラーの作成例を以下に示します。

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
カスタムハンドラを使用した完全な実装については、画像アップロードの例をご覧ください。
::

## 例

::callout{icon="i-simple-icons-github" to="https://github.com/nuxt-ui-templates/editor" target="_blank"}
GitHubの** Editor template **のソースコードを確認してください。
::

### ツールバー付き

[ EditorToolbar ](/docs/components/editor-toolbar)コンポーネントを使用して、共通の書式設定操作を使用してエディタに`fixed`、`bubble`、または`floating`ツールバーを追加できます。

::component-example
---
昇格：true
崩壊真
きれい真
名前'editor—tool—example'
クラス'p—8'
---
::

### ドラッグハンドル付き

[ EditorDragHandle ](/docs/components/editor-drag-handle)コンポーネントを使用して、ブロックの並べ替え用にドラッグ可能なハンドルを追加できます。

::component-example
---
昇格：true
崩壊真
きれい真
名前'editor—drag—handle—example'
クラス'p—8'
---
::

### 提案メニュー付き

[ EditorSuggestionMenu ](/docs/components/editor-suggestion-menu)コンポーネントを使用して、すばやく書式設定と挿入を行うスラッシュコマンドを追加できます。

::component-example
---
昇格：真
崩壊真
きれい真
名前'editor—suggestion—menu—example'
クラス'p—8'
---
::

### 言及メニュー付き

[ EditorMentionMenu ](/docs/components/editor-mention-menu)コンポーネントを使用して、ユーザーまたはエンティティをタグ付けするための@メンションを追加できます。

::component-example
---
昇格：真
崩壊真
きれい真
名前'editor—mention—menu—example'
クラス'p—8'
---
::

### 絵文字メニュー付き

[ EditorEmojiMenu ](/docs/components/editor-emoji-menu)コンポーネントを使用して、絵文字ピッカーのサポートを追加できます。

::component-example
---
昇格：真
崩壊真
きれい真
名前'editor—emoji—menu—example'
クラス'p—8'
---
::

### 画像アップロードあり

この例では、`extensions`プロパティを使用してカスタムTipTapノードを登録し、`handlers`プロパティを使用してツールバーボタンがアップロードフローをトリガーする方法を定義して画像アップロード機能を作成する方法を示します。

1. [ FileUpload ](/docs/components/file-upload)コンポーネントを使用するVueコンポーネントを作成します。

::component-example
---
プレビュー false
崩壊真
名前'編集者画像アップロードノード'
---
::

2. ノードを登録するカスタムTipTap拡張を作成します。

::component-example
---
プレビュー false
崩壊真
lang 'ts'
名前'editor—image—upload—extension'
---
::

3. エディタでカスタム拡張機能を使用します。

::component-example
---
昇格：真
崩壊真
きれい真
名前'editor—image upload—example'
クラス'！p—0'
---
::

::callout{icon="i-custom-tiptap" to="https://tiptap.dev/docs/editor/extensions/custom-extensions" target="_blank"}
カスタム拡張機能の作成については、TipTapのドキュメントをご覧ください。
::

###  AI完了

この例では、[ Vercel AI SDK ](https://ai-sdk.dev/)`useCompletion`](https://ai-sdk.dev/docs/reference/ai-sdk-ui/use-completion)を使用して、AIを活用した機能をエディタに追加する方法を示します。[ Vercel AIゲートウェイ](https://vercel.com/ai-gateway)と組み合わせて、集中エンドポイントを介してAIモデルにアクセスします。ゴーストテキストの自動補完とテキスト変換アクション（文法修正、拡張、縮小、簡略化、翻訳など）が含まれます。

::note
この例を使用するには、まず依存関係をインストールする必要があります。

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

1. インラインゴーストテキストの提案を処理するカスタムTipTap拡張を作成します。

::component-example
---
プレビュー false
崩壊真
名前'editor—completion—extension'
lang 'ts'
---
::

2.  AI完了状態とハンドラを管理するコンポーザブルを作成します。

::component-example
---
プレビュー false
崩壊真
名前'editor—use—completion'
ファイル名'useEditorCompletion'
lang 'ts'
---
::

3. [`streamText`](https://ai-sdk.dev/docs/reference/ai-sdk-core/stream-text#streamtext)を使用して完了要求を処理するサーバー APIエンドポイントを作成します。

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

4. エディタでコンポーザブルを使用します。

::component-example
---
昇格：真
崩壊真
きれい真
名前'editor—completion—example'
クラス'！p—0'
---
::

::note
補完拡張機能は`autoTrigger: true`で構成して、入力中に自動的に補完を提案することができます（デフォルトでは無効）。kbd {value="meta"} kbd {value="j" class="ms-px"}で手動でトリガーすることもできます。
::

::callout{icon="i-simple-icons-vercel" to="https://ai-sdk.dev/" target="_blank"}
Vercel AI SDKと利用可能なプロバイダの詳細をご覧ください。
::

##  API

###  Props

component—props

### スロット

コンポーネントスロット

### エミッツ

component—emits

### エクスポーズ

テンプレート参照を介してコンポーネントにアクセスする場合、以下を使用できます：

| 名前|タイプ|
| ---- | ---- |
| `editor`{lang="ts-type"}| `Ref<Editor \| undefined>`{lang="ts-type"}|

::callout{icon="i-custom-tiptap" to="https://tiptap.dev/docs/editor/api/editor" target="_blank"}
公開されているエディタインスタンスはTipTap Editor APIです。使用可能なすべてのメソッドとプロパティについては、TipTapドキュメントを参照してください。
::

## テーマ

コンポーネントテーマ

##  Changelog

component—changelog
