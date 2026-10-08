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

## 使用情况

将多个[Avatar](/docs/components/avatar)包含在一个虚拟化身组中以进行堆叠。

::component-code
---
更漂亮：真的
插槽：
  默认值：|

<UAvatar src="https://github.com/benjamincanac.png" alt="Benjamin Canac" />的
<UAvatar src="https://github.com/HugoRCD.png" alt="Hugo Richard" />的
<UAvatar src="https://github.com/atinux.png" alt="Sébastien Chopin" />的
---
：u-头像{src="https://github.com/benjamincanac.png" alt="Benjamin Canac"}
：u-头像{src="https://github.com/HugoRCD.png" alt="Hugo Richard"}
：u-头像{src="https://github.com/atinux.png" alt="Sébastien Chopin"}
::

尺寸：

使用`size`道具更改所有头像的大小。

::component-code
---
更漂亮：真的
道具：
  尺寸：xl
插槽：
  默认值：|

<UAvatar src="https://github.com/benjamincanac.png" alt="Benjamin Canac" loading="lazy" />的
<UAvatar src="https://github.com/HugoRCD.png" alt="Hugo Richard" loading="lazy" />的
<UAvatar src="https://github.com/atinux.png" alt="Sébastien Chopin" loading="lazy" />的
---
：u-头像{src="https://github.com/benjamincanac.png" alt="Benjamin Canac" loading="lazy"}
：u-头像{src="https://github.com/HugoRCD.png" alt="Hugo Richard" loading="lazy"}
：u-头像{src="https://github.com/atinux.png" alt="Sébastien Chopin" loading="lazy"}
::

最大值

使用`max`道具来限制显示的虚拟形象数目。其他的虚拟形象会显示为`+X`虚拟形象。

::component-code
---
更漂亮：真的
道具：
  最大值：2
插槽：
  默认值：|

    022号
    023号
    024号
---
：u-头像{src="https://github.com/benjamincanac.png" alt="Benjamin Canac" loading="lazy"}
：u-头像{src="https://github.com/HugoRCD.png" alt="Hugo Richard" loading="lazy"}
：u-头像{src="https://github.com/atinux.png" alt="Sébastien Chopin" loading="lazy"}
::

颜色：徽章

使用`color`道具更改所有头像的颜色。

::component-code
---
更漂亮：真的
道具：
  颜色：原色
插槽：
  默认值：|

    <UAvatar alt="Benjamin Canac" />
    <UAvatar alt="Hugo Richard" />
    <UAvatar alt="Sébastien Chopin" />
---
：u-avatar{alt="Benjamin Canac"}
：u-avatar{alt="Hugo Richard"}
：u-avatar{alt="Sébastien Chopin"}
::

## Examples

### With tooltip

用[Tooltip](/docs/components/tooltip)包裹每个化身，以在悬停时显示工具提示。

：组件示例{name="avatar-group-tooltip-example"}

### With chip

用[Chip](/docs/components/chip)包裹每个头像，以在头像周围显示一个芯片。

：组件示例{name="avatar-group-chip-example"}

### With link

用[Link](/docs/components/link)将每个头像包裹起来，使其可点击。

：component-example{name="avatar-group-link-example"}

### With mask

使用CSS蒙版包装头像，以自定义形状显示头像。

：组件示例{name="avatar-group-mask-example"}

::warning
使用面具时，`chip`道具无法正常工作。根据面具形状，可能会切割碎片。
::

## API

### Props

：组件-支柱

### Slots

：组件插槽

## Theme

：组件主题

## Changelog

：组件更改日志
