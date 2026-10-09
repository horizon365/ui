---
description: 数値または状態の指標。
category: element
keywords:
  - notification dot
  - status dot
links:
  - label: サイトマップ
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Chip.vue
---

## 使用法

任意のコンポーネントをチップでラップしてインジケータを表示します。

::component-code
---
prettier: true
slots:
  default: |

    <UButton icon="i-lucide-mail" color="neutral" variant="subtle" />
---
:u-button{icon="i-lucide-mail" color="neutral" variant="subtle"}
::

### Color

`color`プロップを使用してチップの色を変更します。

::component-code
---
prettier: true
props:
  color: neutral
slots:
  default: |

    <UButton icon="i-lucide-mail" color="neutral" variant="subtle" />
---
:u-button{icon="i-lucide-mail" color="neutral" variant="subtle"}
::

### サイズ

`size`プロパティを使用してチップのサイズを変更します。

::component-code
---
prettier: true
props:
  size: 3xl
slots:
  default: |

    <UButton icon="i-lucide-mail" color="neutral" variant="subtle" />
---
:u-button{icon="i-lucide-mail" color="neutral" variant="subtle"}
::

### Text

`text`プロパティを使用してチップのテキストを設定します。

::component-code
---
prettier: true
props:
  text: 5
  size: 3xl
slots:
  default: |

    <UButton icon="i-lucide-mail" color="neutral" variant="subtle" />
---
:u-button{icon="i-lucide-mail" color="neutral" variant="subtle"}
::

### Position

`position`プロップを使用してチップの位置を変更します。

::component-code
---
prettier: true
props:
  position: 'bottom-left'
slots:
  default: |

    <UButton icon="i-lucide-mail" color="neutral" variant="subtle" />
---
:u-button{icon="i-lucide-mail" color="neutral" variant="subtle"}
::

### Inset

`inset`プロパティを使用して、コンポーネント内のChipを表示します。これは丸みを帯びたコンポーネントを扱う場合に便利です。

::component-code
---
prettier: true
props:
  inset: true
slots:
  default: |

    <UAvatar src="https://github.com/benjamincanac.png" loading="lazy" />
---
:u-avatar{src="https://github.com/benjamincanac.png" loading="lazy"}
::

### スタンドアロン

Chipをインラインで表示するには、`inset`プロパティと一緒に`standalone`プロパティを使用します。

::component-code
---
props:
  standalone: true
  inset: true
---
::

::note
例えば、[`CommandPalette`](/docs/components/command-palette)、[`InputMenu`](/docs/components/input-menu)、[`Select`](/docs/components/select)、[`SelectMenu`](/docs/components/select-menu)コンポーネントではこのように使用されます。
::

## 例

### 制御可視性

`show` propを使用してチップの可視性を制御できます。

:component-example{name="chip-show-example"}

::note
この例では、チップはステータスごとに色を持ち、ステータスが`offline`でない場合に表示されます。
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
