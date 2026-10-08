---
title: 使用トースト
description: 'トースト通知をアプリに表示するためのコンポーザブルです。'
---

## 使用法

自動インポートされた`useToast`を使用して、[ Toast ](/docs/components/toast)通知を表示します。

::component-example
---
名前'use—toast—example'
---
::

- `useToast` composableはNuxtの`useState`を使用してトースト状態を管理し、アプリケーション全体の反応性を確保します。
- デフォルトでは、一度に最大5個のトーストが表示されます。この制限を超える新しいトーストを追加すると、最も古いトーストが自動的に削除されます。[`App`](/docs/components/app#props)コンポーネントの`toaster.max` propで変更します。
- トーストを削除すると、実際に状態から削除されるまでに200msの遅延があり、終了アニメーションを可能にします。

::warning
[`App`](/docs/components/app)コンポーネントでアプリをラップしてください。このコンポーネントは[`Toaster`](https://github.com/nuxt/ui/blob/v4/src/runtime/components/Toaster.vue)コンポーネントで、[`ToastProvider`](https://reka-ui.com/docs/components/toast#provider)))コンポーネントを使用します。Reka UIのコンポーネントです。
::

::tip{to="/docs/components/toast"}
トーストの外観と動作をカスタマイズする方法については、** Toast **コンポーネントのドキュメントを参照してください。
::

##  API

`useToast()`{lang="ts-type"}

`useToast`コンポーザブルは、トースト通知をグローバルに管理するメソッドを提供します。

###  add

`add(toast: Partial<Toast>): Toast`{lang="ts-type"}

新しいトースト通知を追加します。

#### パラメータ

::field-group

  ::field{name="toast" type="Partial<Toast>" required}
  以下のプロパティを持つ部分的な`Toast`オブジェクト

    ::collapsible

      ::field-group
        ::field{name="id" type="string | number"}
        トーストの一意の識別子。指定されていない場合、一意のIDが生成されます。既存のIDを再利用すると、新しいものを追加する代わりにトーストにマージされます。
        ::

        ::field{name="open" type="boolean"}
        トーストが開いているかどうか。デフォルトは`true`です。
        ::

        ::field{name="title" type="string | VNode | (() => VNode)"}
        タイトルは乾杯の際に。
        ::

        ::field{name="description" type="string | VNode | (() => VNode)"}
        トーストに表示される説明。
        ::

        ::field{name="icon" type="string"}
        トーストに表示されるアイコン。
        ::

        ::field{name="avatar" type="AvatarProps"}
        トーストに表示されるアバター。[ Avatar ](/docs/components/avatar#props)を参照。
        ::

        ::field{name="color" type="string"}
        トーストの色。デフォルトは`primary`です。
        ::

        ::field{name="orientation" type="'horizontal' | 'vertical'"}
        コンテンツとアクションの向き。デフォルトは`vertical`です。
        ::

        ::field{name="close" type="boolean | Omit<ButtonProps, LinkPropsKeys>"}
        閉じるボタンをカスタマイズまたは非表示にします（`false`値）。デフォルトは`true`です。
        ::

        ::field{name="closeIcon" type="string"}
        閉じるボタンに表示されたアイコン。
        ::

        ::field{name="actions" type="ButtonProps[]"}
        トーストに表示されるアクション。[ Button ](/docs/components/button#props)を参照してください。
        ::

        ::field{name="progress" type="boolean | Pick<ProgressProps, 'color' | 'ui'>"}
        プログレスバーをカスタマイズまたは非表示にします（`false`値）。デフォルトは`true`です。
        ::

        ::field{name="duration" type="number"}
        トーストが自動的に閉じるまでの時間をミリ秒単位で指定します。デフォルトは`5000`です。トーストが手動で閉じるまで開いたままにするには`0`に設定します。[`App`](/docs/components/app)コンポーネントにグローバルに設定することもできます。
        ::

        ::field{name="onClick" type="(toast: Toast) => void"}
        トーストがクリックされたときに呼び出されるコールバック関数。
        ::

        ::field{name="onUpdateOpen" type="(open: boolean) => void"}
        トーストのオープン状態が変化したときに呼び出されるコールバック関数です。トーストがクローズ（期限切れまたは却下）したときにアクションを実行するのに便利です。
        ::

        ::field{name="type" type="'foreground' | 'background'"}
        支援技術がトーストをどのようにアナウンスするか。ユーザーが直接操作した結果ではないトーストには`background`を使用してください。
        ::

        ::field{name="as" type="any"}
        トーストがレンダリングする要素またはコンポーネント。デフォルトは`li`です。
        ::
      ::
    ::
  ::
::

**戻り値**追加された完全な`Toast`オブジェクト。

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

###  update

`update(id: string | number, toast: Omit<Partial<Toast>, 'id'>): void`{lang="ts-type"}

既存のトースト通知を更新します。

#### パラメータ

::field-group
  ::field{name="id" type="string | number" required}
  更新するトーストの一意の識別子。
  ::

  ::field{name="toast" type="Omit<Partial<Toast>, 'id'>" required}
  更新するプロパティを持つ部分的な`Toast`オブジェクト。`id`は変更できず、トーストは再開され、再度渡さない限り`duration`はリセットされます。
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

###  remove

`remove(id: string | number): void`{lang="ts-type"}

トースト通知を削除します。

#### パラメータ

::field-group
  ::field{name="id" type="string | number" required}
  削除するトーストの一意の識別子。
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

###  clear

`clear(): void`{lang="ts-type"}

トースト通知をすべて削除する。

```vue
<script setup lang="ts">
const toast = useToast()

function clearAllToasts() {
  toast.clear()
}
</script>
```

### トースト

`toasts: Ref<Toast[]>`{lang="ts-type"}

現在のすべてのトースト通知を含むリアクティブ配列。

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
