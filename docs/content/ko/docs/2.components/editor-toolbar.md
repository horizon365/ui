---
title: 편집(Edit)도구 모음(Toolbar)
description: 편집기 작업을 위한 사용자 정의 가능한 도구 모음으로, 고정, 버블 또는 부동 메뉴로 표시할 수 있습니다.
category: editor
links:
  - label: Github (GitHub)
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/EditorToolbar.vue
---

##  사용

EditorToolbar 구성 요소에는 서식 지정 단추 도구 모음이 표시되어 활성 상태를 편집기 컨텐츠와 자동으로 동기화합니다. `@tiptap/vue-3/menus` 패키지를 사용하여 다음과 같은 세 가지 레이아웃 모드를 지원합니다.
- `fixed`{lang="ts-type"} (항상 표시)
- `bubble`{lang="ts-type"} (텍스트 선택에 나타납니다)
- `floating`{lang="ts-type"} (빈 줄에 나타남)

::caution
편집기 인스턴스에 액세스하려면 [Editor](/docs/components/editor) 구성 요소의 기본 슬롯 내에서 사용해야 합니다.
::

::component-example
---
상승: True
축소: true
이름: 'editor-toolbar-example'
분류: P-8
---
::

::callout{icon="i-custom-tiptap"}
버블 및 부동 레이아웃은 TipTap의 [BubbleMenu](https://tiptap.dev/docs/editor/extensions/functionality/bubble-menu) 및 [FloatingMenu](https://tiptap.dev/docs/editor/extensions/functionality/floatingmenu) 확장을 사용합니다.
::

###  프로젝트

`items`prop을 다음과 같은 속성을 가진 객체의 배열로 사용합니다.

-  @ `label?: string` @ @ {lang="ts-type"} @
-  @ `icon?: string` @ {lang="ts-type"}
- `color?: "error" | "primary" | "secondary" | "success" | "info" | "warning" | "neutral"`{lang="ts-type"}
- `activeColor?: "error" | "primary" | "secondary" | "success" | "info" | "warning" | "neutral"`{lang="ts-type"}
-  @ `variant?: "solid" | "outline" | "soft" | "ghost" | "link" | "subtle"` @ @ {lang="ts-type"} @
- `activeVariant?: "solid" | "outline" | "soft" | "ghost" | "link" | "subtle"`{lang="ts-type"}
-  @ `size?: "xs" | "sm" | "md" | "lg" | "xl"` @ {lang="ts-type"}
-  @ [ @ @ `kind?: "mark" | "textAlign" | "heading" | "link" | "image" | "blockquote" | "bulletList" | "orderedList" | "taskList" | "codeBlock" | "horizontalRule" | "paragraph" | "undo" | "redo" | "clearFormatting" | "duplicate" | "delete" | "moveUp" | "moveDown" | "suggestion" | "mention" | "emoji"` @ {lang="ts-type"} @ ]( @ /docs/components/editor#handlers @ )
-  @ `disabled?: boolean` @ @ {lang="ts-type"}
-  @ `loading?: boolean` @ @ {lang="ts-type"} @
- `active?: boolean` {lang="ts-type"}
-  @ `tooltip?: TooltipProps` @ @ {lang="ts-type"} @
-  @ [ @ @ `slot?: string` @ {lang="ts-type"} @ ]( @ #with-link-popover )
-  @ `onClick?: (e: MouseEvent) => void` @ @ {lang="ts-type"} @
-  @ `items?: EditorToolbarItem[] | EditorToolbarItem[][]` @ {lang="ts-type"}
-  @ `class?: any` @ {lang="ts-type"}

당신은 [Button](/docs/components/button#props) 구성 요소에서 모든 속성을 전달 할 수 있습니다 `color`, `variant`, `size` 등.

::component-example
---
상승: True
축소: true
이름: 'editor-toolbar-items-example'
클래스: P-8
---
::

::note
또한 배열 배열을 `items`prop에 전달하여 개별 항목 그룹을 만들 수 있습니다.
::

::tip
각 항목은 `items`prop과 같은 속성을 가진 [DropdownMenu](/docs/components/dropdown-menu)를 생성할 수 있습니다.
::

###  Layout

`layout`prop을 사용하여 도구 모음 표시 방법을 변경합니다. 기본값은 `fixed`{lang="ts-type"}입니다.

::component-example
---
상승: True
축소: true
이름: 'editor-toolbar-layout-example'
분류: P-8
선택 사항:
  - 이름: 레이아웃
    레이블: 배치
    기본값: 버블
    항목:
      -  고정 됨
      - bubble @@ @ 버블
      -  floating
---
::

###  선택

`bubble`{lang="ts-type"}또는 `floating`{lang="ts-type"}레이아웃을 사용할 때 `options`Prop을 사용하여 [Floating UI options](https://floating-ui.com/docs/computeposition#options)를 사용하여 위치 지정 동작을 사용자 지정합니다.

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

###  보여주세요.

`bubble`{lang="ts-type"} 또는 `floating`{lang="ts-type"} layouts를 사용하는 경우 `should-show`prop을 사용하여 도구 모음이 표시되는 시기를 제어합니다. 이 함수는 편집기 상태에 대한 컨텍스트를 수신하고 부울을 반환합니다.

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

##  예

### 이미지 도구 모음 사용

`should-show`prop을 사용하여 특정 노드 유형에 대해서만 나타나는 컨텍스트별 도구 모음을 생성합니다. 이 예에서는 이미지를 선택할 때만 나타나는 다운로드 및 삭제 작업이 있는 `bubble` 도구 모음을 보여 줍니다.

::component-example
---
상승: True
축소: true
이름: 'editor-toolbar-image-example'
분류: P-8
---
::

###  링크 popover

이 예에서는 도구 모음 항목의 `slot` 특성과 ](poveror/docs/components/popover) 구성 요소를 사용하여 사용자 링크 포포포오버를 작성하는 방법을 보여 줍니다.

1.  @ [Popher](/docs/components/popover) 링크 편집 기능을 포함한 Vue 구성 요소를 만듭니다.

::component-example
---
미리 보기:false
축소: true
제목: 'editor-link-popover'
---
::

2.  도구 모음에서 이름이 지정된 슬롯이 있는 사용자 정의 구성 요소 사용:

::component-example
---
상승: True
축소: true
이름: 'editor-toolbar-custom-slot-example'
클래스: P-8
---
::

##  API

###  Props

:컴포넌트 - 소품

###  슬롯

:컴포넌트 - 슬롯

##  테마

:구성요소 주제

##  Changelog

:component-changelog 구성요소 변경 로그
