---
title: useToast 사용
description: '앱에 토스트 알림을 표시하는 구성 가능한 구성 요소입니다.'
---

##  사용

자동으로 가져온 `useToast`컴포지블을 사용하여 [Toast](/docs/components/toast)notifications를 표시합니다.

::component-example
---
이름: "use-toast-example"
---
::

- The`useToast`composable은 Nuxt의 `useState`를 사용하여 토스트 상태를 관리하여 애플리케이션 전반의 반응성을 보장합니다.
-  기본적으로 한 번에 최대 5개의 토스트가 표시됩니다. 이 제한을 초과하는 새 토스트를 추가하면 가장 오래된 토스트가 자동으로 제거됩니다. [`App`](/docs/components/app#props 구성 요소에서 `toaster.max` prop을 사용하여 변경하십시오.
-  토스트를 제거할 때 실제로 상태에서 제거되기 전에 200ms의 지연이 발생하여 애니메이션을 종료할 수 있습니다.

::warning
앱을 [`App`](/docs/components/app) 구성 요소로 포장해야 합니다. [`Toaster`](https://github.com/nuxt/ui/blob/v4/src/runtime/components/Toaster.vue) 구성 요소는 https://github.com/nuxt/ui/blob/v4/src/runtime/components/Toaster.vue) 구성 요소로 포장해야 합니다. Reka UI 의 구성요소.
::

::tip{to="/docs/components/toast"}
**Toast** 구성 요소 설명서에서 토스트의 모양과 동작을 사용자 정의하는 방법에 대해 알아봅니다.
::

##  API

`useToast()`{lang="ts-type"}

`useToast`composable은 토스트 알림을 전 세계적으로 관리하는 방법을 제공합니다.

###  add ()

`add(toast: Partial<Toast>): Toast`{lang="ts-type"}

새 토스트 알림을 추가합니다.

####  파라미터

::field-group

  ::field{name="toast" type="Partial<Toast>" required}
  다음 속성을 가진 부분 `Toast` 객체:

    ::collapsible

      ::field-group
        ::field{name="id" type="string | number"}
        토스트의 고유 식별자입니다. 제공되지 않으면 고유 ID가 생성됩니다. 기존 ID를 다시 사용하면 새 ID를 추가하지 않고 토스트에 병합됩니다.
        ::

        ::field{name="open" type="boolean"}
        토스트가 열려 있는지 여부입니다. 기본값은 `true`입니다.
        ::

        ::field{name="title" type="string | VNode | (() => VNode)"}
        토스트에 표시되는 제목입니다.
        ::

        ::field{name="description" type="string | VNode | (() => VNode)"}
        토스트에 표시되는 설명입니다.
        ::

        ::field{name="icon" type="string"}
        토스트에 표시되는 아이콘입니다.
        ::

        ::field{name="avatar" type="AvatarProps"}
        토스트에 표시된 아바타입니다. [Avatar](/docs/components/avatar#props)를 참조하십시오.
        ::

        ::field{name="color" type="string"}
        토스트의 색상입니다. 기본값은 `primary`입니다.
        ::

        ::field{name="orientation" type="'horizontal' | 'vertical'"}
        내용과 작업 간의 방향입니다. 기본값은 `vertical`입니다.
        ::

        ::field{name="close" type="boolean | Omit<ButtonProps, LinkPropsKeys>"}
        닫기 단추를 사용자 정의하거나 숨깁니다(`false` 값). 기본값은 `true`입니다.
        ::

        ::field{name="closeIcon" type="string"}
        닫기 버튼에 표시되는 아이콘입니다.
        ::

        ::field{name="actions" type="ButtonProps[]"}
        토스트에 표시된 동작입니다. 참조: [Button](/docs/components/button#props)
        ::

        ::field{name="progress" type="boolean | Pick<ProgressProps, 'color' | 'ui'>"}
        진행률 표시줄을 사용자 정의하거나 숨깁니다(`false` 값). 기본값은 `true`입니다.
        ::

        ::field{name="duration" type="number"}
        토스트가 자동으로 닫히기 전까지의 시간(밀리초)입니다. 기본값은 `5000`입니다. 수동으로 닫을 때까지 토스트를 열어 두려면 `0`로 설정합니다. 또한 [`App`](/docs/components/app) 구성 요소에서 전역적으로 설정할 수 있습니다.
        ::

        ::field{name="onClick" type="(toast: Toast) => void"}
        토스트를 클릭하면 호출되는 콜백 함수입니다.
        ::

        ::field{name="onUpdateOpen" type="(open: boolean) => void"}
        토스트가 열려 있는 상태가 변경될 때 호출되는 콜백 함수입니다. 토스트가 만료되었거나 취소되었을 때 작업을 수행하는 데 유용합니다.
        ::

        ::field{name="type" type="'foreground' | 'background'"}
        보조 기술이 토스트를 발표하는 방법. 직접 사용자 작업의 결과가 아닌 토스트에는 `background`를 사용하십시오.
        ::

        ::field{name="as" type="any"}
        토스트가 렌더링하는 요소 또는 구성요소입니다. 기본값은 `li`입니다.
        ::
      ::
    ::
  ::
::

**반환: ** 전체 `Toast` 개체가 추가되었습니다.

```vue
<script setup lang="ts">
const toast = useToast()

function showToast() {
  toast.add({
    title: 'Success',
    description: 'Your action was completed successfully.',
    color: 'success'
  })
}
</script>
```

###  update ()

`update(id: string | number, toast: Omit<Partial<Toast>, 'id'>): void`{lang="ts-type"}

기존 토스트 알림을 업데이트합니다.

####  파라미터

::field-group
  ::field{name="id" type="string | number" required}
  업데이트할 토스트의 고유한 식별자입니다.
  ::

  ::field{name="toast" type="Omit<Partial<Toast>, 'id'>" required}
  갱신할 등록 정보가 있는 `Toast` 객체의 일부입니다. `id`는 변경할 수 없으며, 토스트가 다시 열리며, 다시 전달하지 않으면 `duration`가 재설정됩니다.
  ::
::

```vue
<script setup lang="ts">
const toast = useToast()

function updateToast(id: string | number) {
  toast.update(id, {
    title: 'Updated Toast',
    description: 'This toast has been updated.'
  })
}
</script>
```

###  remove ()

`remove(id: string | number): void`{lang="ts-type"}

토스트 알림을 제거합니다.

####  매개변수

::field-group
  ::field{name="id" type="string | number" required}
  제거할 토스트의 고유 식별자입니다.
  ::
::

```vue
<script setup lang="ts">
const toast = useToast()

function removeToast(id: string | number) {
  toast.remove(id)
}
</script>
```

###  clear ()

`clear(): void`{lang="ts-type"}

토스트 알림을 모두 삭제합니다.

```vue
<script setup lang="ts">
const toast = useToast()

function clearAllToasts() {
  toast.clear()
}
</script>
```

###  toast

`toasts: Ref<Toast[]>`{lang="ts-type"}

모든 현재 토스트 알림을 포함하는 반응형 배열입니다.

```vue
<script setup lang="ts">
const { toasts } = useToast()
</script>

<template>
  <div>
    <pre>{{ toasts }}</pre>
  </div>
</template>
```
