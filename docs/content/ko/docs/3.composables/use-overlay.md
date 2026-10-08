---
title: useOverlay 사용법
description: '프로그래밍 방식으로 오버레이를 제어할 수 있는 컴포블입니다.A composable to programmatically control overrides.'
---

##  사용

자동으로 가져온 `useOverlay`컴포지블을 사용하여 프로그래밍 방식으로 [Modal](/docs/components/modal) 및 [Slideover](PH08@@@PH09@@ 구성 요소를 제어합니다.

::component-example
---
이름: 'use-overlay-example'
---
::

-  `useOverlay`컴포지블은 `createSharedComposable`를 사용하여 생성되므로 전체 애플리케이션에서 동일한 오버레이 상태를 공유할 수 있습니다.

::note
오버레이에서 값을 반환하려면 `overlay.open()` 대기하십시오. **오버레이 구성 요소가 `close`event**를 생성하는 경우에만 작동합니다. 자세한 내용은 아래 예제를 참조하십시오.
::

##  API

`useOverlay()`{lang="ts-type"}

`useOverlay`컴포지블은 오버레이를 전역적으로 관리하는 메소드를 제공합니다. 생성된 각 오버레이는 고유한 메소드를 가진 인스턴스를 반환합니다.

###  create ()

`create(component: T, options?: OverlayOptions<ComponentProps<T>>): OverlayInstance<T>`{lang="ts-type"}

오버레이를 만들고 팩토리 인스턴스를 반환합니다.

####  매개변수

::field-group

  ::field{name="component" type="T" required}
  렌더링할 중첩 구성요소입니다.
  ::

  ::field{name="options" type="OverlayOptions"}
  오버레이의 구성 옵션입니다.

    ::collapsible

      ::field-group
        ::field{name="defaultOpen" type="boolean"}
        작성 후 바로 오버레이를 엽니다. 기본값은 `false`입니다.
        ::

        ::field{name="props" type="ComponentProps"}
        렌더링된 구성요소에 전달할 props의 선택적 객체입니다.
        ::

        ::field{name="destroyOnClose" type="boolean"}
        닫을 때 메모리에서 오버레이를 제거합니다. 기본값은 `false`입니다.
        ::
      ::
    ::
  ::
::

###  open ()

`open(id: symbol, props?: ComponentProps<T>): OpenedOverlay<T>`{lang="ts-type"}

`id` 로 오버레이를 엽니다.

####  매개변수

::field-group
  ::field{name="id" type="symbol" required}
  중첩의 식별자입니다.
  ::

  ::field{name="props" type="ComponentProps<T>"}
  렌더링된 구성요소에 전달할 소품의 선택적 객체입니다.
  ::
::

### close ()

`close(id: symbol, value?: any): void`{lang="ts-type"} @ {lang="ts-type"} @

`id` 로 오버레이를 닫습니다.

####  매개변수

::field-group
  ::field{name="id" type="symbol" required}
  중첩의 식별자입니다.
  ::

  ::field{name="value" type="any"}
  오버레이 약속을 해결하기 위한 값입니다.
  ::
::

###  closeAll ()

`closeAll(): void`{lang="ts-type"}

열려 있는 중첩을 모두 닫습니다.

###  patch ()

`patch(id: symbol, props: Partial<ComponentProps<T>>): void`{lang="ts-type"}

`id` 로 오버레이를 업데이트합니다.

####  매개변수

::field-group
  ::field{name="id" type="symbol" required}
  중첩의 식별자입니다.
  ::

  ::field{name="props" type="Partial<ComponentProps<T>>" required}
  렌더링된 구성요소에서 업데이트할 소품의 오브젝트입니다.
  ::
::

###  unmount ()

`unmount(id: symbol): void`{lang="ts-type"}

DOM에서 `id` 로 오버레이를 제거합니다.

####  매개변수

::field-group
  ::field{name="id" type="symbol" required}
  중첩의 식별자입니다.
  ::
::

###  isOpen ()

`isOpen(id: symbol): boolean`{lang="ts-type"}

오버레이가 `id`를 사용하여 열려 있는지 확인합니다.

####  매개변수

::field-group
  ::field{name="id" type="symbol" required}
  중첩의 식별자입니다.
  ::
::

###  오버레이

`overlays: Overlay[]`{lang="ts-type"}

작성된 모든 중첩의 메모리 내 목록입니다.

## 인스턴스 API

다음은 `create()`가 반환한 인스턴스에서 사용할 수 있는 메서드입니다.These are the methods available on the instance returned by `create()`

###  open ()

`open(props?: ComponentProps<T>): OpenedOverlay<T>`{lang="ts-type"}

오버레이를 엽니다. `OpenedOverlay` 을 반환합니다. `close` 이벤트에서 방출된 값으로 해결되는 Promise를 반환합니다. 동일한 promise는 `result` 로도 노출되므로 `const { result } = modal.open()` 도 작동합니다.

####  매개변수

::field-group
  ::field{name="props" type="ComponentProps<T>"}
  렌더링된 구성요소에 전달할 소품의 선택적 객체입니다.
  ::
::

```vue
<script setup lang="ts">
import { LazyModalExample } from '#components'

const overlay = useOverlay()

const modal = overlay.create(LazyModalExample)

function openModal() {
  modal.open({
    title: 'Welcome'
  })
}
</script>
```

### close ()

`close(value?: any): void`{lang="ts-type"}

중첩을 닫습니다.

####  매개변수

::field-group
  ::field{name="value" type="any"}
  오버레이 약속을 해결하기 위한 값입니다.
  ::
::

###  patch ()

`patch(props: Partial<ComponentProps<T>>): void`{lang="ts-type"}

오버레이의 소품을 업데이트합니다.

####  매개변수

::field-group
  ::field{name="props" type="Partial<ComponentProps<T>>" required}
  렌더링된 구성요소에서 업데이트할 소품의 오브젝트입니다.
  ::
::

```vue
<script setup lang="ts">
import { LazyModalExample } from '#components'

const overlay = useOverlay()

const modal = overlay.create(LazyModalExample, {
  props: { title: 'Welcome' }
})

function openModal() {
  modal.open()
}

function updateModalTitle() {
  modal.patch({ title: 'Updated Title' })
}
</script>
```

##  예제

###  여러 중첩 포함

다음 예에서는 여러 오버레이를 관리하고 오버레이 간에 데이터를 전달하는 방법을 보여 줍니다.

```vue
<script setup lang="ts">
import { ModalA, ModalB, SlideoverA } from '#components'

const overlay = useOverlay()

// Create with default props
const modalA = overlay.create(ModalA, { props: { title: 'Welcome' } })
const modalB = overlay.create(ModalB)
const slideoverA = overlay.create(SlideoverA)

const openModalA = () => {
  // Open modalA, but override the title prop
  modalA.open({ title: 'Hello' })
}

const openModalB = async () => {
  // Open modalB, and wait for its result
  const input = await modalB.open()

  // Pass the result from modalB to the slideover, and open it
  slideoverA.open({ input })
}
</script>

<template>
  <UButton label="Open Modal" @click="openModalA" />
</template>
```

###  대화 상자 확인

이 예에서는 `useOverlay`을 래핑하는 사용자 정의 `useConfirmDialog`컴포지블을 사용하여 재사용 가능한 확인 대화 상자 패턴을 생성하는 방법을 보여 줍니다. 이 방법을 사용하면 특정 비즈니스 요구 사항 및 디자인 환경설정에 맞게 맞춤화된 의견 대화 상자를 사용할 수 있습니다.

1.  닫을 때 부울 값을 방출하는 `ConfirmDialog` 구성 요소를 만듭니다.

```vue [components/ConfirmDialog.vue]
<script lang="ts" setup>
interface ConfirmDialogProps {
  title?: string
  description?: string
}

defineProps<ConfirmDialogProps>()

const emits = defineEmits<{
  close: [value: boolean]
}>()
</script>

<template>
  <UModal
    :title="title"
    :description="description"
    :dismissible="false"
    :ui="{ footer: 'justify-end' }"
  >
    <template #footer>
      <UButton label="Cancel" color="neutral" variant="outline" @click="emits('close', false)" />
      <UButton label="Confirm" color="neutral" @click="emits('close', true)" />
    </template>
  </UModal>
</template>
```

2. Promise를 반환하는 `useConfirmDialog`composable을 만듭니다.

```ts [composables/useConfirmDialog.ts]
import { ConfirmDialog } from '#components'

export interface ConfirmDialogOptions {
  title: string
  description?: string
}

export const useConfirmDialog = () => {
  const overlay = useOverlay()

  return (options: ConfirmDialogOptions): Promise<boolean> => {
    const modal = overlay.create(ConfirmDialog, {
      destroyOnClose: true,
      props: options
    })

    return modal.open()
  }
}
```

3.  당신의 구성 요소에서 구성 요소를 사용:

```vue
<script setup lang="ts">
const confirm = useConfirmDialog()

const handleDelete = async () => {
  const confirmed = await confirm({
    title: 'Delete item',
    description: 'Are you sure you want to delete this item?'
  })

  if (confirmed) {
    console.log('Item deleted')
  }
}
</script>

<template>
  <UButton label="Delete item" @click="handleDelete" />
</template>
```

##  Caveats

###  제공/주입

프로그래밍 방식으로 오버레이를 열 때(모드, 슬라이드오버 등) 오버레이 구성 요소는 `UApp`를 포함하는 구성 요소의 주입된 값에만 액세스할 수 있습니다(일반적으로 `app.vue` 또는 레이아웃 구성 요소). 오버레이가 페이지 컨텍스트 외부에서 `UApp` 구성 요소에 의해 마운트되기 때문입니다.

따라서 페이지나 상위 구성 요소에서 `provide()`를 사용하는 것은 직접적으로 지원되지 않습니다. 제공된 값을 오버레이로 전달하려면 props를 대신 사용하는 것이 좋습니다.

```vue
<script setup lang="ts">
import { LazyModalExample } from '#components'

const overlay = useOverlay()

const providedValue = inject('valueProvidedInPage')

const modal = overlay.create(LazyModalExample, {
  props: {
    providedValue
  }
})
</script>
```
