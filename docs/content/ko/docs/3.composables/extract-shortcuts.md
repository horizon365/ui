---
title: extractShortcuts(추출 단축키)
description: '메뉴 항목에서 키보드 단축키를 추출하는 유틸리티입니다.'
---

##  사용

자동으로 가져온 `extractShortcuts` 유틸리티를 사용하여 메뉴 항목에서 키보드 바로 가기를 정의합니다. [DropdownMenu](/docs/components/dropdown-menu) 와 같은 구성 요소에서 바로 가기를 추출합니다.[ContextMenu](/docs/components/context-menu) 또는 [CommandPalette](/docs/components/command-palette) 여기서 항목은 `kbds` 정의되어 있습니다.

```vue
<script setup lang="ts">
const items = [{
  label: 'Save',
  icon: 'i-lucide-file-down',
  kbds: ['meta', 'S'],
  onSelect() {
    save()
  }
}, {
  label: 'Copy',
  icon: 'i-lucide-copy',
  kbds: ['meta', 'C'],
  onSelect() {
    copy()
  }
}]

defineShortcuts(extractShortcuts(items))
</script>
```

::tip{to="/docs/composables/define-shortcuts"}
키보드 바로 가기에 대한 자세한 내용은 **defineShortcuts**composable 설명서를 참조하십시오.
::

##  API

`extractShortcuts(items: any[] | any[][], separator?: '_' | '-'): ShortcutsConfig`{lang="ts-type"}

메뉴 항목의 배열에서 키보드 바로 가기를 추출하고 `defineShortcuts`와 호환되는 구성 객체를 반환합니다.

####  매개변수

::field-group

  ::field{name="items" type="any[] | any[][]" required}
  바로 가기 정의를 포함하는 메뉴 항목 또는 중첩된 배열입니다. 각 항목에는 다음 등록 정보가 있을 수 있습니다.

    ::collapsible

      ::field-group

        ::field{name="kbds" type="string[]"}
        바로 가기를 형성하는 키보드 키의 배열(예: `['meta', 'S']`).
        ::

        ::field{name="onSelect" type="() => void"}
        바로 가기가 트리거될 때 실행되는 콜백 함수입니다.
        ::

        ::field{name="onClick" type="() => void"}
        대체 콜백 함수(`onSelect`가 정의되지 않은 경우에 사용됨).
        ::

        ::field{name="children" type="any[]"}
        에서 바로 가기를 재귀적으로 추출하는 중첩된 메뉴 항목입니다.
        ::

        ::field{name="items" type="any[]"}
        중첩된 메뉴 항목에 대한 대체 속성.
        ::
      ::
    ::
  ::

  ::field{name="separator" type="'_' | '-'"}
  키보드 키를 조인하는 데 사용되는 구분 기호입니다. 키 조합에는 `'_'`를 사용하고(예: `meta_k`) 키 시퀀스에는 `'-'`를 사용합니다(예: `g-d`). 기본값은 `'_'`입니다.
  ::
::

** 반환: **A`ShortcutsConfig` 개체 `defineShortcuts` 로 직접 전달할 수 있습니다.

##  예제

###  중첩된 항목 포함

이 유틸리티는 `children` 및 `items` 속성을 재귀적으로 트래버스하여 중첩된 메뉴 구조에서 바로 가기를 추출합니다.

```vue
<script setup lang="ts">
import type { DropdownMenuItem } from '@nuxt/ui'

const items: DropdownMenuItem[][] = [[{
  label: 'Edit',
  icon: 'i-lucide-pencil',
  kbds: ['E'],
  onSelect() {
    edit()
  }
}, {
  label: 'Duplicate',
  icon: 'i-lucide-copy',
  kbds: ['D'],
  onSelect() {
    duplicate()
  }
}], [{
  label: 'Invite users',
  icon: 'i-lucide-user-plus',
  children: [[{
    label: 'Invite by email',
    icon: 'i-lucide-send-horizontal',
    kbds: ['meta', 'E'],
    onSelect() {
      inviteByEmail()
    }
  }, {
    label: 'Invite by link',
    icon: 'i-lucide-link',
    kbds: ['meta', 'I'],
    onSelect() {
      inviteByLink()
    }
  }]]
}], [{
  label: 'Delete',
  icon: 'i-lucide-trash',
  kbds: ['meta', 'backspace'],
  onSelect() {
    remove()
  }
}]]

defineShortcuts(extractShortcuts(items))
</script>

<template>
  <UDropdownMenu :items="items">
    <UButton label="Actions" />
  </UDropdownMenu>
</template>
```

###  키 시퀀스 포함

`separator` 매개 변수를 사용하여 키 조합 대신 키 시퀀스를 만듭니다.

```vue
<script setup lang="ts">
const items = [{
  label: 'Go to Dashboard',
  kbds: ['G', 'D'],
  onSelect() {
    navigateTo('/dashboard')
  }
}, {
  label: 'Go to Settings',
  kbds: ['G', 'S'],
  onSelect() {
    navigateTo('/settings')
  }
}]

// Using '-' creates key sequences: 'g-d', 'g-s'
defineShortcuts(extractShortcuts(items, '-'))
</script>
```
