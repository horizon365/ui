---
title: AvatarGroup
description: 将多个化身堆叠在一个组中。
category: element
keywords:
  - stacked avatars
  - faces
  - members
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/AvatarGroup.vue
---

## 用法

将多个[Avatar](/docs/components/avatar)包装在一个AvatarGroup中以堆叠它们。

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

### Size

使用`size`道具更改所有头像的大小。

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

使用`max`道具来限制头像的显示数量。剩余的头像将显示为`+X`头像。

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

### 颜色：badge{label="4.8+" class="align-text-top"}

使用`color`道具改变所有头像的颜色。

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

## 示例

### 带工具提示

用[Tooltip](/docs/components/tooltip)包裹每个化身，以在悬停时显示工具提示。

:component-example{name="avatar-group-tooltip-example"}

### 带芯片

用[Chip](/docs/components/chip)包裹每个头像，以在头像周围显示一个芯片。

:component-example{name="avatar-group-chip-example"}

### 带链接

用[Link](/docs/components/link)包装每个头像，使其可点击。

:component-example{name="avatar-group-link-example"}

### 带面罩

使用CSS蒙版包装头像，以自定义形状显示头像。

:component-example{name="avatar-group-mask-example"}

::warning
当使用面具时，`chip`道具不能正常工作。根据面具的形状，芯片可能会被切割。
::

## API

### Props

:component-props

### Slots

:component-slots

## Theme

:component-theme

## Changelog

:component-changelog
