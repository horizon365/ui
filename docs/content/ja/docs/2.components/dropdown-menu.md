---
title: ドロップダウンメニュー
description: 要素をクリックしたときのアクションを表示するメニュー。
category: overlay
keywords:
  - menu
  - context menu
  - actions
links:
  - label: ドロップダウンメニュー
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/dropdown-menu
  - label: サイトマップ
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/DropdownMenu.vue
---

## 使用法

DropdownMenuのデフォルトスロットにある[Button](/docs/components/button)またはその他のコンポーネントを使用します。

::component-code
---
prettier: true
collapse: true
ignore:
  - items
  - ui.content
external:
  - items
externalTypes:
  - DropdownMenuItem[][]
props:
  items:
    - - label: Benjamin
        avatar:
          src: 'https://github.com/benjamincanac.png'
          loading: lazy
        type: label
    - - label: Profile
        icon: i-lucide-user
      - label: Billing
        icon: i-lucide-credit-card
      - label: Settings
        icon: i-lucide-cog
        kbds:
          - ','
      - label: Keyboard shortcuts
        icon: i-lucide-monitor
    - - label: Team
        icon: i-lucide-users
        filter:
          placeholder: 'Search members...'
        children:
          - - label: benjamincanac
              avatar:
                src: 'https://github.com/benjamincanac.png'
                loading: lazy
            - label: HugoRCD
              avatar:
                src: 'https://github.com/HugoRCD.png'
                loading: lazy
            - label: atinux
              avatar:
                src: 'https://github.com/atinux.png'
                loading: lazy
            - label: romhml
              avatar:
                src: 'https://github.com/romhml.png'
                loading: lazy
            - label: sandros94
              avatar:
                src: 'https://github.com/sandros94.png'
                loading: lazy
            - label: J-Michalek
              avatar:
                src: 'https://github.com/J-Michalek.png'
                loading: lazy
            - label: hywax
              avatar:
                src: 'https://github.com/hywax.png'
                loading: lazy
      - label: Invite users
        icon: i-lucide-user-plus
        children:
          - - label: Email
              icon: i-lucide-mail
            - label: Message
              icon: i-lucide-message-square
          - - label: More
              icon: i-lucide-circle-plus
              children:
                - label: Import from Slack
                  icon: i-simple-icons-slack
                  to: 'https://slack.com'
                  target: _blank
                - label: Import from Trello
                  icon: i-simple-icons-trello
                - label: Import from Asana
                  icon: i-simple-icons-asana
      - label: New team
        icon: i-lucide-plus
        kbds:
          - meta
          - n
    - - label: GitHub
        icon: i-simple-icons-github
        to: 'https://github.com/nuxt/ui'
        target: _blank
      - label: Support
        icon: i-lucide-life-buoy
        to: '/docs/components/dropdown-menu'
      - label: API
        icon: i-lucide-cloud
        disabled: true
    - - label: Logout
        icon: i-lucide-log-out
        color: error
        kbds:
          - shift
          - meta
          - q
slots:
  default: |

    <UButton icon="i-lucide-menu" color="neutral" variant="outline" />
---

:u-button{icon="i-lucide-menu" color="neutral" variant="outline"}
::

### アイテム

`items`プロパティを次のプロパティを持つオブジェクトの配列として使用します。

- `label?: string`{lang="ts-type"}
- `icon?: string`{lang="ts-type"}
- `avatar?: AvatarProps`{lang="ts-type"}
- `kbds?: string[] | KbdProps[]`{lang="ts-type"}
- [`type?: "link" | "label" | "separator" | "checkbox"`{lang="ts-type"}](#with-checkbox-items)
- [`color?: "error" | "primary" | "secondary" | "success" | "info" | "warning" | "neutral"`{lang="ts-type"}](#with-color-items)
- [`checked?: boolean`{lang="ts-type"}](#with-checkbox-items)
- `disabled?: boolean`{lang="ts-type"}
- [`slot?: string`{lang="ts-type"}](#with-custom-slot)
- ph156{lang="ts-type"}
- [`onUpdateChecked?: (checked: boolean) => void`{lang="ts-type"}](#with-checkbox-items)
- `children?: DropdownMenuItem[] | DropdownMenuItem[][]`{lang="ts-type"}
- [`filter?: boolean | InputProps`{lang="ts-type"}](#with-filter-items)
- `filterFields?: string[]`{lang="ts-type"}
- `ignoreFilter?: boolean`{lang="ts-type"}
- `class?: any`{lang="ts-type"}
- `ui?: { item?: ClassNameValue, label?: ClassNameValue, separator?: ClassNameValue, itemLeadingIcon?: ClassNameValue, itemLeadingAvatarSize?: ClassNameValue, itemLeadingAvatar?: ClassNameValue, itemLabel?: ClassNameValue, itemLabelExternalIcon?: ClassNameValue, itemTrailing?: ClassNameValue, itemTrailingIcon?: ClassNameValue, itemTrailingKbds?: ClassNameValue, itemTrailingKbdsSize?: ClassNameValue }`{lang="ts-type"}

[Link](/docs/components/link#props)コンポーネントから、`to`、`target`などの任意のプロパティを渡すことができます。

::component-code
---
prettier: true
collapse: true
ignore:
  - items
  - ui.content
external:
  - items
externalTypes:
  - DropdownMenuItem[][]
props:
  items:
    - - label: Benjamin
        avatar:
          src: 'https://github.com/benjamincanac.png'
          loading: lazy
        type: label
    - - label: Profile
        icon: i-lucide-user
      - label: Billing
        icon: i-lucide-credit-card
      - label: Settings
        icon: i-lucide-cog
        kbds:
          - ','
      - label: Keyboard shortcuts
        icon: i-lucide-monitor
    - - label: Team
        icon: i-lucide-users
      - label: Invite users
        icon: i-lucide-user-plus
        children:
          - - label: Email
              icon: i-lucide-mail
            - label: Message
              icon: i-lucide-message-square
          - - label: More
              icon: i-lucide-circle-plus
              children:
                - label: Import from Slack
                  icon: i-simple-icons-slack
                  to: 'https://slack.com'
                  target: _blank
                - label: Import from Trello
                  icon: i-simple-icons-trello
                - label: Import from Asana
                  icon: i-simple-icons-asana
      - label: New team
        icon: i-lucide-plus
        kbds:
          - meta
          - n
    - - label: GitHub
        icon: i-simple-icons-github
        to: 'https://github.com/nuxt/ui'
        target: _blank
      - label: Support
        icon: i-lucide-life-buoy
        to: '/docs/components/dropdown-menu'
      - label: API
        icon: i-lucide-cloud
        disabled: true
    - - label: Logout
        icon: i-lucide-log-out
        kbds:
          - shift
          - meta
          - q
  ui:
    content: 'w-48'
slots:
  default: |

    <UButton icon="i-lucide-menu" color="neutral" variant="outline" />
---

:u-button{icon="i-lucide-menu" color="neutral" variant="outline"}
::

::note
`items`プロパティに配列の配列を渡して、項目の分離グループを作成することもできます。
::

::tip
各アイテムは、`items`プロパティと同じプロパティを持つオブジェクトの`children`配列を取り、`open`、`defaultOpen`、`content`プロパティを使用して制御できるネストされたメニューを作成できます。
::

### コンテンツ

`content`プロパティを使用して、DropdownMenuコンテンツのレンダリング方法を制御します。例えば、`align`や`side`です。

::component-code
---
prettier: true
collapse: true
ignore:
  - items
  - ui.content
external:
  - items
externalTypes:
  - DropdownMenuItem[]
items:
  content.align:
    - start
    - center
    - end
  content.side:
    - right
    - left
    - top
    - bottom
props:
  items:
    - label: Profile
      icon: i-lucide-user
    - label: Billing
      icon: i-lucide-credit-card
    - label: Settings
      icon: i-lucide-cog
  content:
    align: start
    side: bottom
    sideOffset: 8
  ui:
    content: 'w-48'
slots:
  default: |

    <UButton label="Open" icon="i-lucide-menu" color="neutral" variant="outline" />
---

:u-button{label="オープン" icon="i-lucide-menu" color="neutral" variant="outline"}
::

### フィルター badge{label="4.6+" class="align-text-top"}

`filter`プロパティを使用して、DropdownMenu内にフィルター入力を表示します。デフォルトは`false`です。

::note{to="#with-ignore-filter"}
`ignore-filter`プロパティを使用して内部検索を無効にし、独自の検索ロジックを使用します。
::

::note{to="#with-filter-fields"}
`filter-fields`プロパティを使用して、フィルターするフィールドを指定します。デフォルトでは`labelKey`プロパティを使用します。
::

[Input](/docs/components/input)コンポーネントの任意のプロパティを渡してカスタマイズできます。

::component-code
---
prettier: true
collapse: true
ignore:
  - items
  - filter.icon
  - content.align
  - ui.content
external:
  - items
externalTypes:
  - DropdownMenuItem[]
props:
  filter:
    icon: i-lucide-search
  items:
    - label: Profile
      icon: i-lucide-user
    - label: Billing
      icon: i-lucide-credit-card
    - label: Settings
      icon: i-lucide-cog
    - label: Team
      icon: i-lucide-users
    - label: Invite users
      icon: i-lucide-user-plus
    - label: New team
      icon: i-lucide-plus
  content:
    align: start
  ui:
    content: 'w-48'
slots:
  default: |

    <UButton label="Open" icon="i-lucide-menu" color="neutral" variant="outline" />
---

:u-button{label="オープン" icon="i-lucide-menu" color="neutral" variant="outline"}
::

::tip{to="#with-filter-items"}
`children`を含む項目の`filter`フィールドを使用して、特定のサブメニューでフィルターを有効にすることもできます。
::

### Arrow

`arrow`プロパティを使用して、DropdownMenuに矢印を表示します。

::component-code
---
prettier: true
collapse: true
ignore:
  - arrow
  - items
  - ui.content
external:
  - items
externalTypes:
  - DropdownMenuItem[]
props:
  arrow: true
  items:
    - label: Profile
      icon: i-lucide-user
    - label: Billing
      icon: i-lucide-credit-card
    - label: Settings
      icon: i-lucide-cog
  ui:
    content: 'w-48'
slots:
  default: |

    <UButton label="Open" icon="i-lucide-menu" color="neutral" variant="outline" />
---

:u-button{label="オープン" icon="i-lucide-menu" color="neutral" variant="outline"}
::

### サイズ

DropdownMenuのサイズを制御するには、`size`プロパティを使用します。

::component-code
---
prettier: true
collapse: true
ignore:
  - items
  - content.align
  - ui.content
external:
  - items
externalTypes:
  - DropdownMenuItem[]
props:
  size: xl
  items:
    - label: Profile
      icon: i-lucide-user
    - label: Billing
      icon: i-lucide-credit-card
    - label: Settings
      icon: i-lucide-cog
  content:
    align: start
  ui:
    content: 'w-48'
slots:
  default: |

    <UButton size="xl" label="Open" icon="i-lucide-menu" color="neutral" variant="outline" />
---

:u-button{size="xl" label="オープン" icon="i-lucide-menu" color="neutral" variant="outline"}
::

::warning
`size`プロパティはButtonにプロキシされません。自分で設定する必要があります。
::

::note
同じサイズを使用すると、DropdownMenuアイテムはボタンと完全に整列します。
::

### Modal

`modal`プロパティを使用して、DropdownMenuが外部コンテンツとのインタラクションをブロックするかどうかを制御します。デフォルトは`true`です。

::component-code
---
prettier: true
collapse: true
ignore:
  - items
  - ui.content
external:
  - items
externalTypes:
  - DropdownMenuItem[]
props:
  modal: false
  items:
    - label: Profile
      icon: i-lucide-user
    - label: Billing
      icon: i-lucide-credit-card
    - label: Settings
      icon: i-lucide-cog
  ui:
    content: 'w-48'
slots:
  default: |

    <UButton label="Open" icon="i-lucide-menu" color="neutral" variant="outline" />
---

:u-button{label="オープン" icon="i-lucide-menu" color="neutral" variant="outline"}
::

### 無効

`disabled`プロパティを使用してDropdownMenuを無効にします。

::component-code
---
prettier: true
collapse: true
ignore:
  - items
  - ui.content
external:
  - items
externalTypes:
  - DropdownMenuItem[]
props:
  disabled: true
  items:
    - label: Profile
      icon: i-lucide-user
    - label: Billing
      icon: i-lucide-credit-card
    - label: Settings
      icon: i-lucide-cog
  ui:
    content: 'w-48'
slots:
  default: |

    <UButton label="Open" icon="i-lucide-menu" color="neutral" variant="outline" />
---

:u-button{label="オープン" icon="i-lucide-menu" color="neutral" variant="outline"}
::

## 例

### チェックボックス項目付き

`checkbox`で`type`プロパティを使用し、`checked`/`onUpdateChecked`プロパティを使用して項目のチェック状態を制御できます。

::component-example
---
collapse: true
name: 'dropdown-menu-checkbox-items-example'
---
::

::note
アイテムの`checked`状態に対する反応性を確保するには、`items`配列を`computed`内でラップすることをお勧めします。
::

### カラーアイテム付き

`color`プロパティを使用して、特定のアイテムを色でハイライトできます。

::component-example
---
collapse: true
name: 'dropdown-menu-color-items-example'
---
::

### フィルター項目付き：badge{label="4.6+" class="align-text-top"}

`children`を持つアイテムの`filter`プロパティを使用して、サブメニュー内にフィルター入力を表示できます。

::component-example
---
collapse: true
name: 'dropdown-menu-filter-items-example'
---
::

### Controlオープンステート

オープン状態は`default-open`プロパティまたは`v-model:open`ディレクティブを使用して制御できます。

::component-example
---
collapse: true
name: 'dropdown-menu-open-example'
---
::

::note
この例では、[`defineShortcuts`](/docs/composables/define-shortcuts)を活用して、kbd{value="O"}を押してDropdownMenuを切り替えることができます。
::

### カスタムスロット付き

`slot`プロパティを使用して、特定の項目をカスタマイズします。

以下のスロットにアクセスできます：

- `#{{ item.slot }}`{lang="ts-type"}
- `#{{ item.slot }}-leading`{lang="ts-type"}
- `#{{ item.slot }}-label`{lang="ts-type"}
- `#{{ item.slot }}-trailing`{lang="ts-type"}

::component-example
---
collapse: true
name: 'dropdown-menu-custom-slot-example'
---
::

::tip{to="#slots"}
`#item`、`#item-leading`、`#item-label`、`#item-trailing`スロットを使用して、すべてのアイテムをカスタマイズすることもできます。
::

### アイテムのスイッチ付き

`slot`プロパティを`#{{ slot }}-trailing`スロットとともに使用して、アイテム内の[Switch](/docs/components/switch)をレンダリングできます。

::component-example
---
collapse: true
name: 'dropdown-menu-switch-items-example'
---
::

### 無視フィルタ付きbadge{label="4.6+" class="align-text-top"}

`children`を持つアイテムで`filter`プロパティまたは`filter`フィールドを使用する場合、`ignore-filter`プロパティを`true`に設定して内部検索を無効にし、独自の検索ロジックを使用できます。

::component-example
---
collapse: true
name: 'dropdown-menu-ignore-filter-example'
---
::

::note
この例では、[`refDebounced`](https://vueuse.org/shared/refDebounced/#refdebounced)を使用してAPI呼び出しをデバウンスします。フェッチは`immediate: false`で延期されるため、メニューが開くまでリクエストは行われません。
::

### フィルタフィールド付きbadge{label="4.6+" class="align-text-top"}

`filter`プロパティまたは`filter`フィールドを`children`でアイテムに使用する場合、`filter-fields`プロパティにフィルターをかけるフィールドの配列を設定できます。デフォルトは`[labelKey]`です。

::component-example
---
collapse: true
name: 'dropdown-menu-filter-fields-example'
---
::

### トリガーコンテンツ幅付き

`ui.content`スロットに`w-(--reka-dropdown-menu-trigger-width)`クラスを追加することで、コンテンツをボタンの幅いっぱいに展開できます。

::component-example
---
collapse: true
name: 'dropdown-menu-content-width-example'
---
::

::tip
`app.config.ts`でコンテンツ幅をグローバルに変更することもできます：

```
export default defineAppConfig({
  ui: {
    dropdownMenu: {
      slots: {
        content: 'w-(--reka-dropdown-menu-trigger-width)'
      }
    }
  }
})
```
::

### ショートカットを抽出

[extractShortcuts](/docs/composables/extract-shortcuts)ユーティリティを使用して、メニュー項目から自動的にショートカットを`kbds`プロパティで定義します。ショートカットを再帰的に抽出し、[defineShortcuts](/docs/composables/define-shortcuts)と互換性のあるオブジェクトを返します。

```vue
<script setup lang="ts">
import type { DropdownMenuItem } from '@nuxt/ui'

const items: DropdownMenuItem[] = [{
  label: 'Invite users',
  icon: 'i-lucide-user-plus',
  children: [{
    label: 'Invite by email',
    icon: 'i-lucide-send-horizontal',
    kbds: ['meta', 'e'],
    onSelect() {
      console.log('Invite by email clicked')
    }
  }, {
    label: 'Invite by link',
    icon: 'i-lucide-link',
    kbds: ['meta', 'i'],
    onSelect() {
      console.log('Invite by link clicked')
    }
  }]
}, {
  label: 'New team',
  icon: 'i-lucide-plus',
  kbds: ['meta', 'n'],
  onSelect() {
    console.log('New team clicked')
  }
}]

defineShortcuts(extractShortcuts(items))
</script>
```

::note
この例では、kbd{value="meta"} kbd{value="E" class="ms-px"} kbd{value="meta"} kbd{value="I" class="ms-px"}およびkbd{value="meta"} kbd{value="N" class="ms-px"}は、対応するアイテムの`select`関数をトリガーします。
::

## API

### Props

:component-props

### スロット

:component-slots

### Emits

:component-emits

## Theme

:component-theme

## Changelog

:component-changelog
