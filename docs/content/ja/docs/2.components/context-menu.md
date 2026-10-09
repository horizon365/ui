---
title: コンテキストメニュー
description: 要素を右クリックしたときのアクションを表示するメニュー。
category: overlay
keywords:
  - right click menu
links:
  - label: コンテキストメニュー
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/context-menu
  - label: サイトマップ
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/ContextMenu.vue
---

## 使用法

ContextMenuのデフォルトスロットで好きなものを使用し、右クリックしてメニューを表示します。

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
  - ContextMenuItem[][]
props:
  items:
    - - label: Appearance
        children:
          - label: System
            icon: i-lucide-monitor
          - label: Light
            icon: i-lucide-sun
          - label: Dark
            icon: i-lucide-moon
    - - label: Show Sidebar
        kbds:
          - meta
          - s
      - label: Show Toolbar
        kbds:
          - shift
          - meta
          - d
      - label: Collapse Pinned Tabs
        disabled: true
    - - label: Refresh the Page
      - label: Clear Cookies and Refresh
      - label: Clear Cache and Refresh
      - type: separator
      - label: Developer
        children:
          - - label: View Source
              kbds:
                - meta
                - shift
                - u
            - label: Developer Tools
              kbds:
                - option
                - meta
                - i
            - label: Inspect Elements
              kbds:
                - option
                - meta
                - c
          - - label: JavaScript Console
              kbds:
                - option
                - meta
                - j
slots:
  default: |

    <div class="flex items-center justify-center rounded-md border border-dashed border-accented text-sm aspect-video w-72">
      Right click here
    </div>
---

:div{class="flex items-center justify-center rounded-md border border-dashed border-accented text-sm aspect-video w-72"}[Right click here]
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
- `onSelect?: (e: Event) => void`{lang="ts-type"}
- [`onUpdateChecked?: (checked: boolean) => void`{lang="ts-type"}](#with-checkbox-items)
- `children?: ContextMenuItem[] | ContextMenuItem[][]`{lang="ts-type"}
- `class?: any`{lang="ts-type"}
- `ui?: { item?: ClassNameValue, label?: ClassNameValue, separator?: ClassNameValue, itemLeadingIcon?: ClassNameValue, itemLeadingAvatarSize?: ClassNameValue, itemLeadingAvatar?: ClassNameValue, itemLabel?: ClassNameValue, itemLabelExternalIcon?: ClassNameValue, itemTrailing?: ClassNameValue, itemTrailingIcon?: ClassNameValue, itemTrailingKbds?: ClassNameValue, itemTrailingKbdsSize?: ClassNameValue }`{lang="ts-type"}

`to`、`target`など、[Link](/docs/components/link#props)コンポーネントから任意のプロパティを渡すことができます。

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
  - ContextMenuItem[][]
props:
  items:
    - - label: Appearance
        children:
          - label: System
            icon: i-lucide-monitor
          - label: Light
            icon: i-lucide-sun
          - label: Dark
            icon: i-lucide-moon
    - - label: Show Sidebar
        kbds:
          - meta
          - s
      - label: Show Toolbar
        kbds:
          - shift
          - meta
          - d
      - label: Collapse Pinned Tabs
        disabled: true
    - - label: Refresh the Page
      - label: Clear Cookies and Refresh
      - label: Clear Cache and Refresh
      - type: separator
      - label: Developer
        children:
          - - label: View Source
              kbds:
                - meta
                - shift
                - u
            - label: Developer Tools
              kbds:
                - option
                - meta
                - i
            - label: Inspect Elements
              kbds:
                - option
                - meta
                - c
          - - label: JavaScript Console
              kbds:
                - option
                - meta
                - j
  ui:
    content: 'w-48'
slots:
  default: |

    <div class="flex items-center justify-center rounded-md border border-dashed border-accented text-sm aspect-video w-72">
      Right click here
    </div>
---

:div{class="flex items-center justify-center rounded-md border border-dashed border-accented text-sm aspect-video w-72"}[Right click here]
::

::note
`items`プロパティに配列の配列を渡して、項目の分離グループを作成することもできます。
::

::tip
各アイテムは、`items`プロパティと同じプロパティを持つオブジェクトの`children`配列を取り、`open`、`defaultOpen`、`content`プロパティを使用して制御できるネストされたメニューを作成できます。
::

### サイズ

`size`プロパティを使用してContextMenuのサイズを変更します。

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
  - ContextMenuItem[]
props:
  size: xl
  items:
    - label: System
      icon: i-lucide-monitor
    - label: Light
      icon: i-lucide-sun
    - label: Dark
      icon: i-lucide-moon
  ui:
    content: 'w-48'
slots:
  default: |

    <div class="flex items-center justify-center rounded-md border border-dashed border-accented text-sm aspect-video w-72">
      Right click here
    </div>
---

:div{class="flex items-center justify-center rounded-md border border-dashed border-accented text-sm aspect-video w-72"}[Right click here]
::

### Modal

`modal`プロパティを使用して、ContextMenuが外部コンテンツとのインタラクションをブロックするかどうかを制御します。デフォルトは`true`です。

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
  - ContextMenuItem[]
props:
  modal: false
  items:
    - label: System
      icon: i-lucide-monitor
    - label: Light
      icon: i-lucide-sun
    - label: Dark
      icon: i-lucide-moon
  ui:
    content: 'w-48'
slots:
  default: |

    <div class="flex items-center justify-center rounded-md border border-dashed border-accented text-sm aspect-video w-72">
      Right click here
    </div>
---

:div{class="flex items-center justify-center rounded-md border border-dashed border-accented text-sm aspect-video w-72"}[Right click here]
::


### 無効

`disabled`プロパティを使用してContextMenuを無効にします。

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
  - ContextMenuItem[]
props:
  disabled: true
  items:
    - label: System
      icon: i-lucide-monitor
    - label: Light
      icon: i-lucide-sun
    - label: Dark
      icon: i-lucide-moon
  ui:
    content: 'w-48'
slots:
  default: |

    <div class="flex items-center justify-center rounded-md border border-dashed border-accented text-sm aspect-video w-72">
      Right click here
    </div>
---

:div{class="flex items-center justify-center rounded-md border border-dashed border-accented text-sm aspect-video w-72"}[Right click here]
::

## 例

### チェックボックス項目付き

`checkbox`で`type`プロパティを使用し、`checked`/`onUpdateChecked`プロパティを使用して項目のチェック状態を制御できます。

::component-example
---
collapse: true
name: 'context-menu-checkbox-items-example'
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
name: 'context-menu-color-items-example'
---
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
name: 'context-menu-custom-slot-example'
---
::

::tip{to="#slots"}
`#item`、`#item-leading`、`#item-label`、`#item-trailing`スロットを使用して、すべてのアイテムをカスタマイズすることもできます。
::

### ショートカットを抽出

[extractShortcuts](/docs/composables/extract-shortcuts)ユーティリティを使用して、メニュー項目から自動的にショートカットを`kbds`プロパティで定義します。ショートカットを再帰的に抽出し、[defineShortcuts](/docs/composables/define-shortcuts)と互換性のあるオブジェクトを返します。

```vue
<script setup lang="ts">
const items = [
  [{
    label: 'Show Sidebar',
    kbds: ['meta', 'S'],
    onSelect() {
      console.log('Show Sidebar clicked')
    }
  }, {
    label: 'Show Toolbar',
    kbds: ['shift', 'meta', 'D'],
    onSelect() {
      console.log('Show Toolbar clicked')
    }
  }, {
    label: 'Collapse Pinned Tabs',
    disabled: true
  }], [{
    label: 'Refresh the Page'
  }, {
    label: 'Clear Cookies and Refresh'
  }, {
    label: 'Clear Cache and Refresh'
  }, {
    type: 'separator' as const
  }, {
    label: 'Developer',
    children: [[{
      label: 'View Source',
      kbds: ['option', 'meta', 'U'],
      onSelect() {
        console.log('View Source clicked')
      }
    }, {
      label: 'Developer Tools',
      kbds: ['option', 'meta', 'I'],
      onSelect() {
        console.log('Developer Tools clicked')
      }
    }], [{
      label: 'Inspect Elements',
      kbds: ['option', 'meta', 'C'],
      onSelect() {
        console.log('Inspect Elements clicked')
      }
    }], [{
      label: 'JavaScript Console',
      kbds: ['option', 'meta', 'J'],
      onSelect() {
        console.log('JavaScript Console clicked')
      }
    }]]
  }]
]

defineShortcuts(extractShortcuts(items))
</script>
```

::note
この例では、kbd{value="meta"} kbd{value="S" class="ms-px"} kbd{value="shift"} kbd{value="meta" class="ms-px"} kbd{value="D" class="ms-px"} kbd{value="option"} kbd{value="meta" class="ms-px"} kbd{value="U" class="ms-px"} kbd{value="option"} kbd{value="meta" class="ms-px"} kbd{value="I" class="ms-px"} kbd{value="option"} kbd{value="meta" class="ms-px"} kbd{value="C" class="ms-px"}およびkbd{value="option"} kbd{value="meta" class="ms-px"}は対応するアイテムの`select`関数をトリガーします。
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
