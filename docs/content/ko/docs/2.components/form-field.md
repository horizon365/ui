---
title: FormField 형식필드
description: 유효성 검사 및 오류 처리를 제공하는 양식 요소에 대한 래퍼입니다.
category: form
keywords:
  - field wrapper
  - form label
links:
  - label: Github (GitHub)
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/FormField.vue
---

## Usage

양식 구성 요소를 FormField로 래핑합니다. [Form](xph03x)에서 사용되며 유효성 검사 및 오류 처리를 제공합니다.

### Label 태그

`label` Prop을 사용하여 양식 컨트롤의 레이블을 설정합니다.

::component-code
---
prettier: true
props:
  label: Email
slots:
  default: |

    <UInput placeholder="Enter your email" />
---

:u-input{placeholder="Enter your email"}
::

::note
레이블 `for` 특성 및 양식 컨트롤은 제공되지 않은 경우 고유 `id`와 연결됩니다.
::

`required` 소품을 사용할 때 레이블 옆에 별표가 추가됩니다.

::component-code
---
prettier: true
ignore:
  - label
props:
  label: Email
  required: true
slots:
  default: |

    <UInput placeholder="Enter your email" />
---

:u-input{placeholder="Enter your email"}
::

### Description

`description` prop을 사용하여 레이블 아래에 추가 정보를 제공합니다.

::component-code
---
prettier: true
ignore:
  - label
props:
  label: Email
  description: We'll never share your email with anyone else.
slots:
  default: |

    <UInput placeholder="Enter your email" class="w-full" />
---

:u-input{placeholder="Enter your email" class="w-full"}
::

### 힌트

`hint` Prop을 사용하여 레이블 옆에 힌트 메시지를 표시합니다.

::component-code
---
prettier: true
ignore:
  - label
props:
  label: Email
  hint: Optional
slots:
  default: |

    <UInput placeholder="Enter your email" />
---

:u-input{placeholder="Enter your email"}
::

### Help 지원

`help` prop을 사용하여 양식 컨트롤 아래에 도움말 메시지를 표시합니다. `error` prop과 함께 사용할 때 `error` prop이 우선적으로 사용됩니다.

::component-code
---
prettier: true
ignore:
  - label
props:
  label: Email
  help: Please enter a valid email address.
slots:
  default: |

    <UInput placeholder="Enter your email" class="w-full" />
---

:u-input{placeholder="Enter your email" class="w-full"}
::

### Error 오류

`error` Prop을 사용하여 양식 컨트롤 아래에 오류 메시지를 표시합니다. `help` Prop과 함께 사용할 때 `error` Prop이 우선합니다.

[Form](/docs/components/form) 내부에서 사용할 경우 유효성 검사 오류가 발생할 때 자동으로 설정됩니다.

::component-code
---
prettier: true
ignore:
  - label
props:
  label: Email
  error: Please enter a valid email address.
slots:
  default: |

    <UInput placeholder="Enter your email" class="w-full" />
---

:u-input{placeholder="Enter your email" class="w-full"}
::

::tip{to="/docs/getting-started/theme/design-system#color-system"}
이렇게 하면 양식 컨트롤에서 `color`가 `error`로 설정됩니다. `app.config.ts`에서 전역적으로 변경할 수 있습니다.
::

### error 패턴

`error-pattern` prop을 사용하여 양식 오류를 정규 표현식과 일치시킵니다. 이는 특히 [InputTags](/docs/components/input-tags)와 같은 배열 값을 가진 구성 요소에 관련이 있으며, 여기서 오류는 `tags.0`와 같은 이름에 배열 인덱스를 포함합니다.

::tip{to="/docs/components/form#error-reporting"}
양식에서 `error-pattern`를 사용하는 예제를 참조하십시오.
::

### Size 크기

`size` prop을 사용하여 FormField의 크기를 변경하면 `size`가 폼 컨트롤에 프록시됩니다.

::component-code
---
prettier: true
ignore:
  - label
  - description
  - hint
  - help
props:
  label: Email
  description: We'll never share your email with anyone else.
  hint: Optional
  help: Please enter a valid email address.
  size: xl
slots:
  default: |

    <UInput placeholder="Enter your email" class="w-full" />
---

:u-input{placeholder="Enter your email" class="w-full"}
::

### 방향 : badge{label="4.3+" class="align-text-top"}

`orientation` prop을 사용하여 FormField.Defaults의 레이아웃을 `vertical`로 변경합니다.

::component-code
---
prettier: true
ignore:
  - label
  - class
props:
  orientation: horizontal
  label: Email
  help: Please enter a valid email address.
  class: w-72
slots:
  default: |

    <UInput placeholder="Enter your email" class="w-full" />
---

:u-input{placeholder="Enter your email" class="w-full"}
::

## API 파일

### Props 코드

:component-props

### 슬롯

:component-slots

## Theme (## 테마)

:component-theme

## 변경 로그

:component-changelog
