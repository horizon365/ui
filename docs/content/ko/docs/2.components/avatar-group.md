---
title: AvatarGroup 이미지
description: 그룹에 여러 아바타를 쌓습니다.
category: element
keywords:
  - stacked avatars
  - faces
  - members
links:
  - label: Github (GitHub)
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/AvatarGroup.vue
---

## Usage

AvatarGroup 내에서 여러 [Avatar](xph03x)를 감싸서 스택합니다.

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

`size` Prop을 사용하여 모든 아바타의 크기를 변경합니다.

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

### Max 의 경우

`max` 소품을 사용하여 표시되는 아바타 수를 제한합니다. 나머지는 `+X` 아바타로 표시됩니다.

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

### Color: badge{label="4.8+" class="align-text-top"} 색상

`color` Prop을 사용하여 모든 아바타의 색상을 변경합니다.

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

## 예

### 툴팁 사용

각 아바타를 [Tooltip](/docs/components/tooltip)로 감싸면 커서를 놓으면 툴팁이 표시됩니다.

:component-example{name="avatar-group-tooltip-example"}

### with 칩

각 아바타를 [Chip](/docs/components/chip)로 감싸서 아바타 주위에 칩을 표시합니다.

:component-example{name="avatar-group-chip-example"}

### With 연결

각 아바타를 [Link](/docs/components/link)로 감싸서 클릭할 수 있도록 합니다.

:component-example{name="avatar-group-link-example"}

### With 마스크

CSS 마스크로 아바타를 감싸면 사용자 정의 모양으로 표시됩니다.

:component-example{name="avatar-group-mask-example"}

::warning
마스크를 사용할 때 `chip` 소품이 제대로 작동하지 않습니다. 마스크 모양에 따라 칩이 잘릴 수 있습니다.
::

## API 사용

### Props (### Props)

:component-props

### 슬롯

:component-slots

## Theme 주제

:component-theme

## 변경 로그

:component-changelog
