---
title: EditorDragHandle
description: 편집기에서 블록의 순서를 변경하고 선택하기 위한 끌 수 있는 핸들입니다.
category: editor
links:
  - label: Github (GitHub)
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/EditorDragHandle.vue
---

##  사용

EditorDragHandle 구성 요소는 `@tiptap/extension-drag-handle-vue-3` 패키지를 사용하여 편집기 블록의 순서를 다시 지정하는 드래그 앤 드롭 기능을 제공합니다.

::caution
편집기 인스턴스에 액세스하려면 [Editor](/docs/components/editor) 구성 요소의 기본 슬롯 내에서 사용해야 합니다.
::

그것은 [Button](/docs/components/button) 구성 요소를 확장, 그래서 당신은 `color`, `variant`, `size` 등과 같은 속성을 전달 할 수 있습니다.

::component-example
---
축소: true
상승: True
이름: 'editor-drag-handle-example'
클래스: P-8
---
::

::callout{icon="i-custom-tiptap" to="https://tiptap.dev/docs/editor/extensions/functionality/drag-handle-vue" target="_blank"}
TipTap 설명서에서 Drag Handle 확장에 대해 자세히 알아보십시오.
::

###  Icon

`icon`prop 을 사용하여 드래그 핸들 아이콘을 사용자 정의합니다.

```vue
<template>
  <UEditor v-slot="{ editor }">
    <UEditorDragHandle :editor="editor" icon="i-lucide-move" />
  </UEditor>
</template>
```

::framework-only
#nuxt 코드
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
이 아이콘은 `app.config.ts` 아래 `ui.icons.drag` 키에서 전역적으로 사용자 지정할 수 있습니다.
:::

#vue #vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
이 아이콘은 `vite.config.ts` 아래 `ui.icons.drag` 키에서 전역적으로 사용자 지정할 수 있습니다.
:::
::

###  선택

`options`prop을 사용하여 [Floating UI options](https://floating-ui.com/docs/computeposition#options)를 사용하여 위치 동작을 사용자 지정합니다.

::note
간격띄우기는 자동으로 계산되어 작은 블록의 중심에 핸들을 배치하고 키가 큰 블록의 위쪽에 정렬됩니다.
::

```vue
<template>
  <UEditor v-slot="{ editor }">
    <UEditorDragHandle
      :editor="editor"
      :options="{
        placement: 'left'
      }"
    />
  </UEditor>
</template>
```

##  예

###  드롭다운 메뉴 포함

기본 슬롯을 사용하여 중복, 삭제, 위/아래로 이동 또는 블록을 다른 유형으로 변환하는 것과 같은 블록 수준 작업을 수행하는 [DropdownMenu](/docs/components/dropdown-menu)를 추가합니다.

`@node-change` 이벤트를 듣고 현재 호드된 노드와 위치를 추적한 다음 메뉴가 열려 있는 동안 핸들 위치를 잠급니다.

::component-example
---
상승: True
축소: true
이름: 'editor-drag-handle-dropdown-menu-example'
분류: P-8
---
::

::note
이 예제에서는 `@nuxt/ui/utils/editor`의 `mapEditorItems` 유틸리티를 사용하여 처리기 종류(`duplicate`, `delete`, `moveUp`, 등)를 적절한 상태 관리를 통해 해당 편집기 명령에 자동으로 매핑합니다.
::

###  추천 메뉴

기본 슬롯을 사용하여 드래그 핸들 옆에 [Button](/docs/components/button)를 추가하여 @@EditorSugestionMenu](/docs/components/editor-suggestion-menu)를 엽니다.

`onClick`slot 함수를 호출하여 현재 노드 위치를 얻은 다음 `handlers.suggestion?.execute(editor, { pos: node?.pos }).run()`{lang="ts-type"}를 사용하여 해당 위치에 새 블록을 삽입합니다.

::component-example
---
상승: True
축소: true
이름 : 'editor-drag-handle-suggestion-menu-example'
클래스 : "!p-0"
---
::

##  API

###  Props

:컴포넌트 - 소품

###  슬롯

:구성요소 - 슬롯

###  Emits

:구성요소 - 방출

##  테마

:구성요소 - 주제

##  Changelog

:component-changelog 구성요소 변경 로그
