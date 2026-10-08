---
title: useオーバーレイ
description: 'オーバーレイをプログラムで制御するコンポーザー。'
---

## 使用法

自動インポートされた`useOverlay`コンポジットを使用して、[ Modal ](/docs/components/modal)[ Slideover ](/docs/components/slideover)コンポーネントをプログラムで制御します。

::component-example
---
名前'use—overlay—example'
---
::

- `useOverlay`コンポーザブルは`createSharedComposable`を使用して作成され、アプリケーション全体で同じオーバーレイ状態が共有されるようにします。

::note
`overlay.open()`を待ち、オーバーレイから値を取得します。これは** overlayコンポーネントが`close` event **を出力した場合にのみ機能します。詳細は以下の例を参照してください。
::

##  API

`useOverlay()`{lang="ts-type"}

`useOverlay`コンポーザブルはオーバーレイをグローバルに管理するメソッドを提供します。作成されたオーバーレイはそれぞれ独自のメソッドを持つインスタンスを返します。

###  create

`create(component: T, options?: OverlayOptions<ComponentProps<T>>): OverlayInstance<T>`{lang="ts-type"}

オーバーレイを作成し、ファクトリーインスタンスを返します。

#### パラメータ

::field-group

  ::field{name="component" type="T" required}
  レンダリングするオーバーレイコンポーネント。
  ::

  ::field{name="options" type="OverlayOptions"}
  オーバーレイの設定オプション。

    ::collapsible

      ::field-group
        ::field{name="defaultOpen" type="boolean"}
        作成後すぐにオーバーレイを開きます。デフォルトは`false`です。
        ::

        ::field{name="props" type="ComponentProps"}
        レンダリングされたコンポーネントに渡すpropsのオプションオブジェクト。
        ::

        ::field{name="destroyOnClose" type="boolean"}
        クローズ時にオーバーレイをメモリから削除します。デフォルトは`false`です。
        ::
      ::
    ::
  ::
::

###  open

`open(id: symbol, props?: ComponentProps<T>): OpenedOverlay<T>`{lang="ts-type"}

オーバーレイを`id`で開きます。

#### パラメータ

::field-group
  ::field{name="id" type="symbol" required}
  オーバーレイの識別子。
  ::

  ::field{name="props" type="ComponentProps<T>"}
  レンダリングされたコンポーネントに渡すpropsのオプションオブジェクト。
  ::
::

###  close

`close(id: symbol, value?: any): void`{lang="ts-type"}

オーバーレイを`id`で閉じます。

#### パラメータ

::field-group
  ::field{name="id" type="symbol" required}
  オーバーレイの識別子。
  ::

  ::field{name="value" type="any"}
  オーバーレイPromiseを解決する値です。
  ::
::

###  closeAll

`closeAll(): void`{lang="ts-type"}

すべてのオーバーレイを閉じる。

###  patch

`patch(id: symbol, props: Partial<ComponentProps<T>>): void`{lang="ts-type"}

オーバーレイを`id`で更新します。

#### パラメータ

::field-group
  ::field{name="id" type="symbol" required}
  オーバーレイの識別子。
  ::

  ::field{name="props" type="Partial<ComponentProps<T>>" required}
  レンダリングされたコンポーネントを更新するpropsのオブジェクト。
  ::
::

###  unmount

`unmount(id: symbol): void`{lang="ts-type"}

DOMから`id`でオーバーレイを削除します。

#### パラメータ

::field-group
  ::field{name="id" type="symbol" required}
  オーバーレイの識別子。
  ::
::

###  isOpen

`isOpen(id: symbol): boolean`{lang="ts-type"}

オーバーレイが開いているかどうかを`id`で確認します。

#### パラメータ

::field-group
  ::field{name="id" type="symbol" required}
  オーバーレイの識別子。
  ::
::

### オーバーレイ

`overlays: Overlay[]`{lang="ts-type"}

作成されたすべてのオーバーレイのインメモリリスト。

## インスタンスAPI

これらは、`create()`が返すインスタンスで使用できるメソッドです。

###  open

`open(props?: ComponentProps<T>): OpenedOverlay<T>`{lang="ts-type"}

オーバーレイを開きます。`OpenedOverlay`を返します。これは、`close`イベントによって生成された値で解決されるPromiseです。同じPromiseが`result`としても公開されるので、`const { result } = modal.open()`も動作します。

#### パラメータ

::field-group
  ::field{name="props" type="ComponentProps<T>"}
  レンダリングされたコンポーネントに渡すpropsのオプションオブジェクト。
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

###  close

`close(value?: any): void`{lang="ts-type"}

オーバーレイを閉じます。

#### パラメータ

::field-group
  ::field{name="value" type="any"}
  オーバーレイPromiseを解決する値です。
  ::
::

###  patch

`patch(props: Partial<ComponentProps<T>>): void`{lang="ts-type"}

オーバーレイの小道具を更新します。

#### パラメータ

::field-group
  ::field{name="props" type="Partial<ComponentProps<T>>" required}
  レンダリングされたコンポーネントを更新するpropsのオブジェクト。
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

## 例

### 複数オーバーレイ付き

この例では、複数のオーバーレイを管理し、データを渡す方法を示します。

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

### 確認ダイアログ

この例では、`useOverlay`をラップするカスタム`useConfirmDialog`構成可能を使用して再利用可能な確認ダイアログパターンを作成する方法を示します。このアプローチにより、特定のビジネス要件やデザインの好みに合わせた意見のあるダイアログが可能になります。

1. 閉じるとブール値を出力する`ConfirmDialog`コンポーネントを作成します。

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

2.  Promiseを返す`useConfirmDialog`コンポーザブルを作成します。

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

3. コンポーネントでコンポーザブルを使用します。

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

## 注意事項

### 提供/注入

オーバーレイをプログラムで開く場合モーダル、スライドオーバーなど、オーバーレイコンポーネントは`UApp`を含むコンポーネント通常は`app.vue`またはレイアウトコンポーネントから注入された値にのみアクセスできます。これは、オーバーレイが`UApp`コンポーネントによってページコンテキストの外側にマウントされるためです。

そのため、ページまたは親コンポーネントで`provide()`を使用することは直接サポートされていません。オーバーレイに与えられた値を渡すには、代わりにpropsを使用することを推奨します。

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
