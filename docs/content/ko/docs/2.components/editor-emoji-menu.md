---
title: EditorEmojMenu 편집
description: "편집기에서 : 문자를 입력할 때 이모티콘 제안을 표시하는 이모티콘 선택기 메뉴입니다."
category: editor
links:
  - label: Github (GitHub)
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/EditorEmojiMenu.vue
---

##  사용

EditorEmojiMenu 구성 요소는 편집기에 `:` 문자를 입력할 때 이모티콘 제안 메뉴를 표시하고 선택한 이모티콘을 삽입합니다. `@tiptap/extension-emoji` 패키지와 함께 작동하여 이모티콘 지원을 제공합니다.

::note
그것은 TipTap의 [Sugggggestion](https://tiptap.dev/docs/editor/api/utilities/suggestion) 유틸리티 위에 구축 된 `useEditorMenu` 컴포저블을 사용하여 입력 시 항목을 필터링하고 키보드 탐색 (화살표 키, 선택하려면 입력, 닫으려면 이스케이프)을 지원합니다.
::

::caution
편집기 인스턴스에 액세스하려면 [Editor](/docs/components/editor) 구성 요소의 기본 슬롯 내에서 사용해야 합니다.
::

::component-example
---
상승: True
축소: true
제목: 'editor-emoji-menu-example'
분류: P-8
---
::

::warning
`@tiptap/extension-emoji` 패키지는 기본적으로 설치되지 않으므로 별도로 설치해야 합니다.
::

::callout{icon="i-custom-tiptap" to="https://tiptap.dev/docs/editor/extensions/nodes/emoji" target="_blank"}
TipTap 설명서에서 Emoji 확장에 대해 자세히 알아보십시오.
::

###  프로젝트

`items`prop을 다음과 같은 속성을 가진 객체의 배열로 사용합니다.

-  @ `name: string` @ @ {lang="ts-type"} @
- `emoji: string`{lang="ts-type"}
-  @ `shortcodes?: string[]` @ @ {lang="ts-type"}
-  @ `tags?: string[]` @ @ {lang="ts-type"} @
-  @ `group?: string` @ {lang="ts-type"} @
- `fallbackImage?: string`{lang="ts-type"}

::component-example
---
상승: True
축소: true
이름: 'editor-emoji-menu-items-example'
분류: P-8
---
::

::note
배열 배열을 `items`prop에 전달하여 개별 항목 그룹을 만들 수도 있습니다.
::

###  Char

`char`prop을 사용하여 트리거 문자를 변경합니다. 기본값은 `:`{lang="ts-type"}입니다.

```vue
<template>
  <UEditor v-slot="{ editor }">
    <UEditorEmojiMenu :editor="editor" :items="items" char=";" />
  </UEditor>
</template>
```

### 제안: badge{label="4.7+" class="align-text-top"}

`suggestion`prop을 사용하여 TipTap의 [제안 일치 행동 ](https://tiptap.dev/docs/editor/api/utilities/suggestion#settings)를 사용자 정의합니다.

이 기능은 트리거 문자가 기본 공백 접두사를 필요로 하지 않고 다른 문자 바로 뒤에 열어야 할 때 유용합니다.This is useful when the trigger character should open directly after other characters instead of requiring the default whitespace prefix.

```vue
<template>
  <UEditor v-slot="{ editor }">
    <UEditorEmojiMenu
      :editor="editor"
      :items="items"
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
    <UEditorEmojiMenu
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

###  Props

:컴포넌트 - 소품

##  테마

:구성요소 주제

##  Changelog

:component-changelog 구성요소 변경 로그
