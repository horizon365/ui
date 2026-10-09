---
title: 使用ツアー
description: 'ステップを横断して単一のポップオーバーを再固定することで、ガイド付きツアーを構築するための構成。'
---

## 使用法

自動インポートされた`useTour`コンポーザーを使用して、ステップ間でアンカーが移動する単一の[Popover](/docs/components/popover)を使用してガイド付きツアーを実行します。コンポーザーはステップ状態を所有し、各ステップの`target`を`<UPopover>`にバインドする`reference`に解決しますが、コンテンツとナビゲーションは完全に制御できます。

::component-example
---
collapse: true
name: 'use-tour-example'
---
::

各ステップには、ポップオーバーがアンカーする`target`が必要です。CSSセレクタ、要素、仮想要素（`getBoundingClientRect`を持つもの）、またはそれらのいずれかを返すref/ゲッターを受け入れます。`null`を渡してステップをビューポートの中心に固定します。ステップ上の他のフィールド（`title`、`body`、`side`、...）はそのまま渡され、`current`経由で利用できます。

```vue
<script setup lang="ts">
const card = useTemplateRef('card')

const tour = useTour([
  { target: '#cta', title: 'Get started' },
  { target: () => card.value, title: 'Profile', side: 'right' },
  { target: null, title: 'All set' }
])
</script>

<template>
  <UButton @click="tour.start()">Start tour</UButton>

  <UPopover :open="tour.open.value" :reference="tour.reference.value" :dismissible="false">
    <template #content>
      <!-- your content + buttons -->
      <UButton :disabled="!tour.hasPrev.value" @click="tour.prev()">Back</UButton>
      <UButton @click="tour.next()">{{ tour.hasNext.value ? 'Next' : 'Finish' }}</UButton>
    </template>
  </UPopover>
</template>
```

- ポップオーバーのリアクティブ`reference`プロパティ上に構築されているため、アクティブなステップが変更されたときにポップオーバーがスムーズに再配置されます。
- ステップがアクティブになると、アクティブなターゲットが自動的にビューにスクロールされます。
- コンテンツを自分でレンダリングするので、メンテナンスする追加のテーマやロケールはありません。

## API

`useTour(steps, options?)`{lang="ts-type"}

### パラメータ

::field-group

  ::field{name="steps" type="MaybeRefOrGetter<TourStep[]>" required}
  ツアーステップのリスト。静的配列、`ref`、またはリアクティブステップのゲッターです。

    ::collapsible

      ::field-group
        ::field{name="target" type="MaybeRefOrGetter<string | ReferenceElement | null | undefined>"}
        ステップがアンカーされる要素。CSSセレクター `'#id'` `'.class'`、または`#id`として解決された裸のID、要素、仮想要素、またはそれを返すref/getterを受け付けます。ビューポートでステップを中心にするには`null`を使用します。
        ::

        ::field{name="[key: string]" type="any"}
        追加のフィールド`title` `body` `side`は`current`経由で渡されます。
        ::
      ::
    ::
  ::

  ::field{name="options" type="UseTourOptions"}
  ツアーの設定オプション。

    ::collapsible

      ::field-group
        ::field{name="initialStep" type="number" default="0"}
        ツアーが始まるステップインデックス。
        ::

        ::field{name="loop" type="boolean" default="false"}
        最後のステップの後に最初のステップにループします。
        ::

        ::field{name="scrollIntoView" type="boolean | ScrollIntoViewOptions" default="true"}
        ステップがアクティブになるとターゲットをスクロールします。
        ::
      ::
    ::
  ::
::

### 戻る

::field-group

  ::field{name="open" type="Ref<boolean>"}
  ツアーは現在開いているかどうか。
  ::

  ::field{name="index" type="Ref<number>"}
  ステップ範囲にクランプされた現在のステップインデックス。
  ::

  ::field{name="current" type="ComputedRef<TourStep | undefined>"}
  現在のステップオブジェクト、またはステップがない場合は`undefined`。
  ::

  ::field{name="reference" type="ComputedRef<ReferenceElement | undefined>"}
  `<UPopover :reference>`に渡す現在のステップの解決済みアンカー。
  ::

  ::field{name="total" type="ComputedRef<number>"}
  ステップの合計数。
  ::

  ::field{name="hasNext" type="ComputedRef<boolean>"}
  次のステップが存在するかどうか。
  ::

  ::field{name="hasPrev" type="ComputedRef<boolean>"}
  前のステップが存在するかどうか。
  ::

  ::field{name="start" type="(index?: number) => void"}
  オプションで指定したインデックスでツアーを開きます。
  ::

  ::field{name="next" type="() => void"}
  次のステップに進みます。`loop`オプションに応じてループまたは終了します。
  ::

  ::field{name="prev" type="() => void"}
  前のステップに進みます。
  ::

  ::field{name="goTo" type="(index: number) => void"}
  特定のステップにジャンプしてツアーを開きます。
  ::

  ::field{name="finish" type="() => void"}
  ツアー終了。
  ::
::
