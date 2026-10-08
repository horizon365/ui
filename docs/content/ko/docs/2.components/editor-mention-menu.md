---
title: 편집 (Edit) 멘션 (Mention) 메뉴
description: 편집기에 트리거 문자를 입력할 때 사용자 제안을 표시하는 언급 메뉴입니다.
category: editor
links:
  - label: Github (GitHub)
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/EditorMentionMenu.vue
---

##  사용

EditorMentionMenu 구성 요소는 편집기에 트리거 문자(기본값은 `@`)를 입력할 때 사용자 제안 메뉴를 표시하고 `@tiptap/extension-mention` 패키지를 사용하여 선택한 언급을 삽입합니다. 트리거 문자는 삽입된 언급을 렌더링할 때 접두어로 사용됩니다.

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
이름: 'editor-mention-menu-example'
분류: P-8
---
::

::callout{icon="i-custom-tiptap" to="https://tiptap.dev/docs/editor/extensions/nodes/mention" target="_blank"}
TipTap 문서에서 언급 확장에 대해 자세히 알아보십시오.
::

###  프로젝트

`items`prop을 다음과 같은 속성을 가진 객체의 배열로 사용합니다.

-  @ `label: string` @ @ {lang="ts-type"} @
-  @ `avatar?: AvatarProps` @ @ {lang="ts-type"} @
- `icon?: string`{lang="ts-type"}
-  @ `description?: string` @ {lang="ts-type"} @
-  @ `disabled?: boolean` @ @ {lang="ts-type"} @

::component-example
---
상승: True
축소: true
name: 'editor-mention-menu-items-example' (에디터-언급-메뉴-항목-예)
클래스: P-8
---
::

::note
또한 배열 배열을 `items`prop에 전달하여 개별 항목 그룹을 만들 수 있습니다.
::

###  Char

`char`prop을 사용하여 트리거 문자를 변경합니다. 기본값은 `@`{lang="ts-type"}입니다. 트리거 문자는 삽입된 언급을 렌더링할 때도 접두어로 사용됩니다(예: `@channel` 대신 `#channel` ).

```vue
<template>
  <UEditor v-slot="{ editor }">
    <UEditorMentionMenu :editor="editor" :items="channels" char="#" />
  </UEditor>
</template>
```

::note
동일한 편집기에서 여러 `EditorMentionMenu` 컴포넌트를 사용하여 다른 언급 유형을 지원할 수 있습니다.

```vue
<template>
  <UEditor v-slot="{ editor }">
    <UEditorMentionMenu :editor="editor" :items="users" plugin-key="mentionMenu" />
    <UEditorMentionMenu :editor="editor" :items="tags" char="#" plugin-key="tagMenu" />
  </UEditor>
</template>
```
::

### 제안: badge{label="4.7+" class="align-text-top"}

`suggestion`prop을 사용하여 TipTap의 [제안 일치 행동 ](https://tiptap.dev/docs/editor/api/utilities/suggestion#settings)를 사용자 정의합니다.

이 기능은 트리거 문자가 기본 공백 접두사를 필요로 하지 않고 다른 문자 바로 뒤에 열어야 할 때 유용합니다.This is useful when the trigger character should open directly after other characters instead of requiring the default whitespace prefix.

```vue
<template>
  <UEditor v-slot="{ editor }">
    <UEditorMentionMenu
      :editor="editor"
      :items="items"
      char="#"
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
    <UEditorMentionMenu
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

##  예

###  무시 필터와 함께: badge{label="4.4+" class="align-text-top"}

`ignore-filter`prop을 `true`로 설정하여 내부 검색을 비활성화하고 자체 검색 논리를 사용할 수 있습니다. `v-model:search-term`를 사용하여 현재 검색어에 액세스하고 API에서 항목을 가져올 수 있습니다.

::component-example
---
상승: True
축소: true
name: 'editor-mention-menu-ignore-filter-example' (편집자-언급-메뉴-무시-필터-예제)
분류: P-8
---
::

::note
이 예제에서는 [`refDebounced`](https://vueuse.org/shared/refDebounced/)를 사용하여 API 호출을 선언합니다.
::

##  API

###  Props

:컴포넌트 - 소품

##  테마

:구성요소 주제

##  Changelog

:component-changelog 구성요소 변경 로그
