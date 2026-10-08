---
title: 편집(Edit)제안 메뉴
description: 편집기에 / 문자를 입력할 때 서식 지정 및 동작 제안을 표시하는 명령 메뉴입니다.
category: editor
links:
  - label: Github (GitHub)
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/EditorSuggestionMenu.vue
---

##  사용

EditorSugestionMenu 구성 요소는 편집기에 트리거 문자를 입력할 때 서식 지정 및 작업 제안 메뉴를 표시하고 항목을 선택하면 해당 [handler](/docs/components/editor#handlers)를 실행합니다.

::note
TipTap의 [Suggggestion](PH08)유틸리티 위에 구축된 `useEditorMenu`컴포지블을 사용하여 입력하고 키보드 탐색을 지원하는 항목을 필터링합니다(화살표 키, 선택하려면 입력, 닫으려면 이스케이프).
::

::caution
편집기 인스턴스에 액세스하려면 [Editor](/docs/components/editor) 구성 요소의 기본 슬롯 내에서 사용해야 합니다.
::

::component-example
---
상승: True
축소: true
이름: 'editor-suggestion-menu-example'
클래스: P-8
---
::

###  프로젝트

`items`prop을 다음 속성을 가진 객체의 배열로 사용합니다.

-  @ [ @ `kind?: "textAlign" | "heading" | "link" | "image" | "blockquote" | "bulletList" | "orderedList" | "taskList" | "codeBlock" | "horizontalRule" | "paragraph" | "clearFormatting" | "duplicate" | "delete" | "moveUp" | "moveDown" | "suggestion" | "mention" | "emoji"` @ {lang="ts-type"} @ @ ]( @ /docs/components/editor#handlers @ )
-  @ `label?: string` @ {lang="ts-type"} @
-  @ `description?: string` @ @ {lang="ts-type"} @
- `icon?: string`{lang="ts-type"}
- `type?: "label" | "separator"`{lang="ts-type"}
- `disabled?: boolean`{lang="ts-type"}

::component-example
---
상승: True
축소: true
name: 'editor-suggestion-menu-items-example' (에디터-제안-메뉴-항목-예)
클래스: P-8
---
::

::note
배열 배열을 `items`prop에 전달하여 개별 항목 그룹을 만들 수도 있습니다.
::

::tip
섹션 헤더에는 `type: 'label'`를 사용하고 시각적 구분자에는 `type: 'separator'`를 사용하여 명령을 논리적 그룹으로 구성하여 검색 가능성을 향상시킵니다.
::

###  Char

`char`prop을 사용하여 트리거 문자를 변경합니다. 기본값은 `/`{lang="ts-type"}입니다.

```vue
<template>
  <UEditor v-slot="{ editor }">
    <UEditorSuggestionMenu :editor="editor" :items="items" char=">" />
  </UEditor>
</template>
```

### 제안: badge{label="4.7+" class="align-text-top"}

`suggestion`prop을 사용하여 TipTap의 [제안 일치 행동 ](https://tiptap.dev/docs/editor/api/utilities/suggestion#settings)를 사용자 정의합니다.

이 기능은 트리거 문자가 기본 공백 접두사를 필요로 하지 않고 다른 문자 바로 뒤에 열어야 할 때 유용합니다.This is useful when the trigger character should open directly after other characters instead of requiring the default whitespace prefix.

```vue
<template>
  <UEditor v-slot="{ editor }">
    <UEditorSuggestionMenu
      :editor="editor"
      :items="items"
      char=":"
      :suggestion="{
        allowedPrefixes: null
      }"
    />
  </UEditor>
</template>
```

###  선택

`options`prop을 사용하여 [Floating UI options](https://floating-ui.com/docs/computeposition#options)를 사용하여 위치 동작을 사용자 지정합니다.

```vue
<template>
  <UEditor v-slot="{ editor }">
    <UEditorSuggestionMenu
      :editor="editor"
      :items="items"
      :options="{
        placement: 'bottom-start',
        offset: 4
      }"
    />
  </UEditor>
</template>
```

##  API

### Props 이미지

:컴포넌트 - 소품

##  테마

:구성요소 - 주제

##  Changelog

:component-changelog 구성요소 변경 로그
