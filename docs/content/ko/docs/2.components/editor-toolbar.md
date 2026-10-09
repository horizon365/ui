---
title: 편집(Edit)도구 모음(Toolbar)
description: 편집기 작업을 위한 사용자 정의 가능한 도구 모음으로, 고정, 버블 또는 부동 메뉴로 표시할 수 있습니다.
category: editor
links:
  - label: Github (GitHub)
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/EditorToolbar.vue
---

## Usage

EditorToolbar 구성 요소는 활성 상태와 편집기 컨텐츠를 자동으로 동기화하는 서식 단추 도구 모음을 표시합니다. `@tiptap/vue-3/menus` 패키지를 사용하여 다음과 같은 세 가지 레이아웃 모드를 지원합니다.
- `fixed`{lang="ts-type"}(항상 표시)
- `bubble`{lang="ts-type"} (텍스트 선택에 나타남)
- `floating`{lang="ts-type"} (빈 행에 나타남)

::caution
편집기 인스턴스에 액세스하려면 [Editor](/docs/components/editor) 구성 요소의 기본 슬롯 내에서 이 옵션을 사용해야 합니다.
::

::component-example
---
elevated: true
collapse: true
name: 'editor-toolbar-example'
class: 'p-8'
---
::

::callout{icon="i-custom-tiptap"}
버블 및 부동 레이아웃은 TipTap의 [BubbleMenu](https://tiptap.dev/docs/editor/extensions/functionality/bubble-menu) 및 [FloatingMenu](https://tiptap.dev/docs/editor/extensions/functionality/floatingmenu) 확장자를 사용합니다.
::

### Items 이미지

`items` prop을 다음 속성을 가진 오브젝트 배열로 사용합니다.

- `label?: string`{lang="ts-type"} - `label?: string`{lang="ts-type"}
- `icon?: string`{lang="ts-type"}
- `color?: "error" | "primary" | "secondary" | "success" | "info" | "warning" | "neutral"`{lang="ts-type"} Xph037x{lang="ts-type"}
- `activeColor?: "error" | "primary" | "secondary" | "success" | "info" | "warning" | "neutral"`{lang="ts-type"}
- `variant?: "solid" | "outline" | "soft" | "ghost" | "link" | "subtle"`{lang="ts-type"}
- `activeVariant?: "solid" | "outline" | "soft" | "ghost" | "link" | "subtle"`{lang="ts-type"}
- `size?: "xs" | "sm" | "md" | "lg" | "xl"`{lang="ts-type"}
- [`kind?: "mark" | "textAlign" | "heading" | "link" | "image" | "blockquote" | "bulletList" | "orderedList" | "taskList" | "codeBlock" | "horizontalRule" | "paragraph" | "undo" | "redo" | "clearFormatting" | "duplicate" | "delete" | "moveUp" | "moveDown" | "suggestion" | "mention" | "emoji"`{lang="ts-type"}](/docs/components/editor#handlers)
- `disabled?: boolean`{lang="ts-type"} / - {lang="ts-type"} / `disabled?: boolean`{lang="ts-type"}
- `loading?: boolean`{lang="ts-type"}
- `active?: boolean`{lang="ts-type"}
- `tooltip?: TooltipProps`{lang="ts-type"}의 발음을 - `tooltip?: TooltipProps`{lang="ts-type"}
- [`slot?: string`{lang="ts-type"}](#with-link-popover)
- `onClick?: (e: MouseEvent) => void`{lang="ts-type"}의 발음을 - `onClick?: (e: MouseEvent) => void`{lang="ts-type"}
- `items?: EditorToolbarItem[] | EditorToolbarItem[][]`{lang="ts-type"} - {lang="ts-type"}
- `class?: any`{lang="ts-type"}

[Button](/docs/components/button#props) 구성 요소에서 `color`, `variant`, `size` 등의 속성을 전달할 수 있습니다.

::component-example
---
elevated: true
collapse: true
name: 'editor-toolbar-items-example'
class: 'p-8'
---
::

::note
배열의 배열을 `items` prop에 전달하여 개별 항목 그룹을 만들 수도 있습니다.
::

::tip
각 항목은 `items` prop와 동일한 속성을 가진 `items` 객체 배열을 사용하여 [DropdownMenu](/docs/components/dropdown-menu)를 만들 수 있습니다.
::

### layout

`layout` 소품을 사용하여 도구 모음 표시 방법을 변경합니다. 기본값은 `fixed`{lang="ts-type"}입니다.

::component-example
---
elevated: true
collapse: true
name: 'editor-toolbar-layout-example'
class: 'p-8'
options:
  - name: layout
    label: Layout
    default: bubble
    items:
      - fixed
      - bubble
      - floating
---
::

### Options 선택

`bubble`{lang="ts-type"} 또는 `floating`{lang="ts-type"} 레이아웃을 사용할 때 `options` Prop을 사용하여 [Floating UI 옵션](https://floating-ui.com/docs/computeposition#options)를 사용하여 위치 동작을 사용자 정의합니다.

```vue
<template>
  <UEditor v-slot="{ editor }">
    <UEditorToolbar
      :editor="editor"
      :items="items"
      layout="bubble"
      :options="{
        placement: 'top',
        offset: 8,
        flip: { padding: 8 },
        shift: { padding: 8 }
      }"
    />
  </UEditor>
</template>
```

### Should 소개

`bubble`{lang="ts-type"} 또는 `floating`{lang="ts-type"} 레이아웃을 사용하는 경우 `should-show` Prop을 사용하여 도구 모음이 표시되는 시기를 제어합니다. 이 함수는 편집기 상태에 대한 컨텍스트를 수신하고 부울을 반환합니다.

```vue
<template>
  <UEditor v-slot="{ editor }">
    <UEditorToolbar
      :editor="editor"
      :items="items"
      layout="bubble"
      :should-show="({ view, state }) => {
        const { selection } = state
        const { from, to } = selection
        const text = state.doc.textBetween(from, to)
        return view.hasFocus() && !selection.empty && text.length > 10
      }"
    />
  </UEditor>
</template>
```

## examples 예제

### With 이미지 도구막대

`should-show` 소품을 사용하여 특정 노드 유형에 대해서만 나타나는 컨텍스트별 도구 모음을 생성합니다. 이 예에서는 이미지를 선택할 때만 나타나는 다운로드 및 삭제 작업이 포함된 `bubble` 도구 모음을 보여 줍니다.

::component-example
---
elevated: true
collapse: true
name: 'editor-toolbar-image-example'
class: 'p-8'
---
::

### With 링크 포포오버

이 예에서는 도구 모음 항목 및 [Popover](/docs/components/popover) 구성 요소의 `slot` 속성을 사용하여 사용자 정의 링크 포포오버를 작성하는 방법을 보여 줍니다.

1. x[Popover](/docs/components/popover)를 링크 편집 기능으로 래핑하는 Vue 구성 요소를 만듭니다.

::component-example
---
preview: false
collapse: true
name: 'editor-link-popover'
---
::

2. 도구 모음의 사용자 정의 구성요소를 명명된 슬롯과 함께 사용합니다.

::component-example
---
elevated: true
collapse: true
name: 'editor-toolbar-custom-slot-example'
class: 'p-8'
---
::

## API

### Props (### Props)

:component-props

### Slots

:component-slots

## Theme 테마

:component-theme

## 변경 로그

:component-changelog
