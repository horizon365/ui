---
title: defineShortcuts 정의 바로 가기
description: '앱에서 키보드 바로 가기를 정의하는 컴포지블입니다.A composable to define keyboard shortcut in your app.'
---

##  사용

자동으로 가져온 `defineShortcuts`컴포지블을 사용하여 키보드 단축키를 정의합니다.

```vue
<script setup lang="ts">
const open = ref(false)

defineShortcuts({
  meta_k: () => {
    open.value = !open.value
  }
})
</script>
```

- 바로 가기는 macOS가 아닌 플랫폼에서 자동으로 조정되어 `meta`를 `ctrl`로 변환합니다.
-  컴포지블은 VueUse의 [`useEventListener`](https://vueuse.org/core/useEventListener/)를 사용하여 키다운 이벤트를 처리합니다.
-  사용 가능한 바로 가기 키의 전체 목록은 [`KeyboardEvent.key`](https://developer.mozilla.org/en-US/docs/Web/API/UI_Events/Keyboard_event_key_values)API 문서를 참조하십시오. 구성의 키는 대소문자를 구분하지 않으므로 `meta_k` 및 `meta_K` 모두 동일합니다.

::tip{to="/docs/components/kbd"}
**Kbd**component 설명서에서 구성 요소에 바로 가기를 표시하는 방법을 알아봅니다.
::

##  API

`defineShortcuts(config: MaybeRef<ShortcutsConfig>, options?: ShortcutsOptions): () => void`{lang="ts-type"} @ {lang="ts-type"} @

응용 프로그램에 대한 키보드 바로 가기를 정의합니다. 구성 요소를 마운트 해제하기 전에 바로 가기를 중지해야 하는 경우를 대비하여 리스너를 제거하는 함수를 반환합니다.

###  파라미터

::field-group

  ::field{name="config" type="MaybeRef<ShortcutsConfig>" required}
  키가 바로 가기 정의이고 값이 처리기 함수 또는 바로 가기 구성 객체인 객체입니다. 단축키를 반대로 갱신하려면 `ref`를 전달합니다. `false`, `null` 또는 `undefined` 값은 바로 가기를 건너뜁니다. 이 값은 조건부로 활성화하는 방법입니다.
  ::

  ::field{name="options" type="ShortcutsOptions"}
  바로 가기 동작의 선택적 구성입니다.

    ::collapsible

      ::field-group
        ::field{name="chainDelay" type="number"}
        단축키가 체인된 것으로 간주되기 위해 키를 누르는 사이의 지연입니다. 기본값은 `800`입니다.
        ::

        ::field{name="layoutIndependent" type="boolean"}
        이 옵션을 사용하면 문자 값이 아닌 실제 키 위치를 일치시키여 키보드 레이아웃(아랍어, 히브리어)에서 바로 가기가 일관되게 작동합니다.
        - `false` (기본값): 문자 기반 일치에 `e.key` 사용(레이아웃별)
        - `true`: 물리적 키 일치를 위해 `e.code`를 사용합니다(레이아웃 불가지론자).
        ::
      ::
    ::
  ::
::

### 바로가기 정의

바로 가기는 다음 형식으로 정의됩니다.

- 단일 키: `'a'``'b'``'1'` 등
- 키 조합: `_`를 사용하여 키를 분리합니다. 예를 들어 `'meta_k'`, `'ctrl_shift_f'`
- 키 시퀀스: `-`를 사용하여 시퀀스를 정의합니다(예: `'g-d'`).

###  수정자

- `meta``command` : macOS에서는 `⌘ Command` 및 다른 플랫폼에서는 `Ctrl`를 나타냅니다.
- `ctrl`모든 플랫폼에서 `Ctrl`를 나타냅니다.
- `shift`Shift가 필요한 경우 알파벳 키에 사용
- `alt``option` macOS에서는 `⌥ Option` 및 다른 플랫폼에서는 `Alt`를 나타냅니다. Option이 macOS에서 문자를 다시 쓰기 때문에 물리적 키 위치와 일치합니다

###  특수 키

특수 키를 일치시키려면 이러한 이름을 사용합니다.

- `escape`Esc 키에서 트리거
- `enter` : 키 입력 시 트리거
- `arrowleft``arrowright``arrowup``arrowdown` : 각 화살표 키에서 트리거
- `tab``tab`: 탭 키 트리거
- `backspace`Backspace 키에서 트리거됨
- `delete``delete`키 삭제 시 트리거
- `space`스페이스바에서 트리거됩니다. `alt`와 결합하지 않는 한 `layoutIndependent`가 필요합니다.

### 바로가기 설정

각 바로 가기는 함수 또는 객체로 정의할 수 있으며 다음 속성을 사용합니다.

`interface ShortcutConfig { handler: (e?: KeyboardEvent) => void; usingInput?: boolean | string }`{lang="ts-type"}

####  매개변수

::field-group
  ::field{name="handler" type="(e?: KeyboardEvent) => void" required}
  바로 가기가 트리거될 때 실행할 함수입니다. 시작 `KeyboardEvent`를 수신합니다.
  ::

  ::field{name="usingInput" type="boolean | string"}
  입력 포커스에 따라 바로 가기가 트리거되는 시기를 조정합니다.
  - `false` (기본값): 입력이 집중되지 않은 경우에만 바로 가기가 트리거됩니다.
  - `true` : 입력이 집중되어 있을 때도 바로 가기가 트리거됩니다.
  - `string` : 지정된 입력(이름별)이 포커스를 설정할 때만 바로 가기가 트리거됩니다.
  ::
::

##  예

### 기본적인 사용법

```vue
<script setup lang="ts">
defineShortcuts({
  '?': () => openHelpModal(),
  'meta_k': () => openCommandPalette(),
  'g-d': () => navigateToDashboard()
})
</script>
```

### 입력 포커스 처리

`usingInput`를 사용하여 특정 입력에 초점을 맞출 때만 바로 가기를 트리거합니다.

```vue
<template>
  <UInput v-model="query" name="queryInput" />
</template>

<script setup lang="ts">
const query = ref('')

defineShortcuts({
  enter: {
    usingInput: 'queryInput',
    handler: () => performSearch()
  },
  escape: {
    usingInput: true,
    handler: () => clearSearch()
  }
})
</script>
```

###  메뉴 항목에서 바로 가기 추출

`extractShortcuts` 유틸리티를 사용하여 메뉴 항목에서 바로 가기를 자동으로 정의합니다.

::tip{to="/docs/composables/extract-shortcuts"}
**extractShortcuts**유틸리티에 대해 자세히 알아보십시오.
::
