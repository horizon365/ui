---
description: 카드의 내용을 머리글, 본문 및 바닥글과 함께 표시합니다.
category: element
keywords:
  - panel
  - box
  - container
links:
  - label: Github (GitHub)
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Card.vue
---

## Usage

`header`, `default` 및 `footer` 슬롯을 사용하여 카드에 콘텐츠를 추가합니다.

::component-code
---
prettier: true
hide:
  - class
props:
  class: 'w-full'
slots:
  header: |

    <Placeholder class="h-8" />

  default: |

    <Placeholder class="h-32" />

  footer: |

    <Placeholder class="h-8" />
---

#header
:placeholder{class="h-8"}

#default
:placeholder{class="h-32"}

#footer
:placeholder{class="h-8"}
::

### Title : badge{label="4.7+" class="align-text-top"}

`title` prop을 사용하여 카드 헤더의 제목을 설정합니다.

::component-code
---
prettier: true
ignore:
  - class
props:
  title: 'Card with title'
  class: 'w-full'
slots:
  default: |

    <Placeholder class="h-32" />
---

#default
:placeholder{class="h-32"}
::

### 설명: badge{label="4.7+" class="align-text-top"}

`description` prop을 사용하여 카드의 헤더에 대한 설명을 설정합니다.

::component-code
---
prettier: true
ignore:
  - title
  - class
props:
  title: 'Card with description'
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  class: 'w-full'
slots:
  default: |

    <Placeholder class="h-32" />
---

#default
:placeholder{class="h-32"}
::

### Variant

`variant` prop을 사용하여 카드의 변형을 변경합니다.

::component-code
---
prettier: true
hide:
  - class
props:
  variant: subtle
  class: 'w-full'
slots:
  header: |

    <Placeholder class="h-8" />

  default: |

    <Placeholder class="h-32" />

  footer: |

    <Placeholder class="h-8" />
---

#header
:placeholder{class="h-8"}

#default
:placeholder{class="h-32"}

#footer
:placeholder{class="h-8"}
::

## API

### Props (### Props)

:component-props

### Slots

:component-slots

## Theme (## 테마)

:component-theme

## 변경 로그

:component-changelog
