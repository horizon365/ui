---
title: AvatarGroup
description: 複数のアバターをグループに積み重ねる。
category: element
keywords:
  - stacked avatars
  - faces
  - members
links:
  - label: サイトマップ
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/AvatarGroup.vue
---

## 使用法

複数の[Avatar](/docs/components/avatar)をAvatarGroup内でラップしてスタックします。

::component-code
---
prettier: true
slots:
  default: |

    <UAvatar src="https://github.com/benjamincanac.png" alt="Benjamin Canac" />
    <UAvatar src="https://github.com/HugoRCD.png" alt="Hugo Richard" />
    <UAvatar src="https://github.com/atinux.png" alt="Sébastien Chopin" />
---
:u-avatar{src="https://github.com/benjamincanac.png" alt="Benjamin Canac"}
:u-avatar{src="https://github.com/HugoRCD.png" alt="Hugo Richard"}
:u-avatar{src="https://github.com/atinux.png" alt="Sébastien Chopin"}
::

### サイズ

`size`プロパティを使用して、すべてのアバターのサイズを変更します。

::component-code
---
prettier: true
props:
  size: xl
slots:
  default: |

    <UAvatar src="https://github.com/benjamincanac.png" alt="Benjamin Canac" loading="lazy" />
    <UAvatar src="https://github.com/HugoRCD.png" alt="Hugo Richard" loading="lazy" />
    <UAvatar src="https://github.com/atinux.png" alt="Sébastien Chopin" loading="lazy" />
---
:u-avatar{src="https://github.com/benjamincanac.png" alt="Benjamin Canac" loading="lazy"}
:u-avatar{src="https://github.com/HugoRCD.png" alt="Hugo Richard" loading="lazy"}
:u-avatar{src="https://github.com/atinux.png" alt="Sébastien Chopin" loading="lazy"}
::

### Max

`max`プロパティを使用して、表示するアバターの数を制限します。残りは`+X`アバターとして表示されます。

::component-code
---
prettier: true
props:
  max: 2
slots:
  default: |

    <UAvatar src="https://github.com/benjamincanac.png" alt="Benjamin Canac" loading="lazy" />
    <UAvatar src="https://github.com/HugoRCD.png" alt="Hugo Richard" loading="lazy" />
    <UAvatar src="https://github.com/atinux.png" alt="Sébastien Chopin" loading="lazy" />
---
:u-avatar{src="https://github.com/benjamincanac.png" alt="Benjamin Canac" loading="lazy"}
:u-avatar{src="https://github.com/HugoRCD.png" alt="Hugo Richard" loading="lazy"}
:u-avatar{src="https://github.com/atinux.png" alt="Sébastien Chopin" loading="lazy"}
::

### Color badge{label="4.8+" class="align-text-top"}

`color`プロパティを使用して、すべてのアバターの色を変更します。

::component-code
---
prettier: true
props:
  color: primary
slots:
  default: |

    <UAvatar alt="Benjamin Canac" />
    <UAvatar alt="Hugo Richard" />
    <UAvatar alt="Sébastien Chopin" />
---
:u-avatar{alt="Benjamin Canac"}
:u-avatar{alt="Hugo Richard"}
:u-avatar{alt="Sébastien Chopin"}
::

## サンプル

### ツールチップ付き

各アバターを[Tooltip](/docs/components/tooltip)でラップし、ホバー時にツールチップを表示します。

:component-example{name="avatar-group-tooltip-example"}

### Withチップ

各アバターを[ Chip](/docs/components/chip)でラップし、アバターの周りにチップを表示します。

:component-example{name="avatar-group-chip-example"}

### リンク付き

各アバターを[Link](/docs/components/link)でラップしてクリック可能にします。

:component-example{name="avatar-group-link-example"}

### マスク付き

アバターをCSSマスクでラップして、カスタム形状で表示します。

:component-example{name="avatar-group-mask-example"}

::warning
`chip`プロパティがマスクを使用すると正しく動作しません。マスクの形状によってはチップがカットされる場合があります。
::

## API

### Props

:component-props

### スロット

:component-slots

## Theme

:component-theme

## Changelog

:component-changelog
