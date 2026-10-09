---
description: 링크 역할을 하거나 동작을 트리거할 수 있는 단추 요소입니다.
category: element
keywords:
  - cta
  - action
  - btn
links:
  - label: Github (GitHub)
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Button.vue
---

## Usage

기본 슬롯을 사용하여 버튼의 레이블을 설정합니다.

::component-code
---
slots:
  default: Button
---
::

### Label 태그

`label` prop 을 사용하여 Button 의 레이블을 설정합니다.

::component-code
---
props:
  label: Button
---
::

### Color 이미지

`color` Prop을 사용하여 Button의 색상을 변경합니다.

::component-code
---
props:
  color: neutral
slots:
  default: Button
---
::

### 변형

`variant` prop을 사용하여 Button의 변형을 변경합니다.

::component-code
---
props:
  color: neutral
  variant: outline
slots:
  default: Button
---
::

### Size 크기

`size` prop을 사용하여 Button 크기를 변경합니다.

::component-code
---
props:
  size: xl
slots:
  default: Button
---
::

### Icon 이미지

`icon` prop을 사용하여 Button 내부에 [Icon](/docs/components/icon)를 표시합니다.

::component-code
---
props:
  icon: i-lucide-rocket
  size: md
  color: primary
  variant: solid
slots:
  default: Button
---
::

`leading` 및 `trailing` 소품을 사용하여 아이콘 위치를 설정하거나 `leading-icon` 및 `trailing-icon` 소품을 사용하여 각 위치에 대해 다른 아이콘을 설정합니다.

::component-code
---
props:
  trailingIcon: i-lucide-arrow-right
  size: md
slots:
  default: Button
---
::

prop 또는 슬롯으로 `label`는 선택 사항이므로 Button을 아이콘 전용 버튼으로 사용할 수 있습니다.

::component-code
---
props:
  icon: i-lucide-search
  size: md
  color: primary
  variant: solid
---
::

### avatar 이미지

`avatar` prop을 사용하여 Button 내부에 [Avatar](/docs/components/avatar)를 표시합니다.

::component-code
---
prettier: true
ignore:
  - avatar.loading
props:
  avatar:
    src: 'https://github.com/nuxt.png'
    loading: lazy
  size: md
  color: neutral
  variant: outline
slots:
  default: |

    Button
---
::

prop 또는 slot으로서의 `label`는 선택 사항이므로 Button을 아바타 전용 버튼으로 사용할 수 있습니다.

::component-code
---
prettier: true
ignore:
  - avatar.loading
props:
  avatar:
    src: 'https://github.com/nuxt.png'
    loading: lazy
  size: md
  color: neutral
  variant: outline
---
::

### Link의 지도

[Link](/docs/components/link#props) 구성 요소에서 `to`, `target` 등의 속성을 전달할 수 있습니다.

::component-code
---
ignore:
  - target
props:
  to: https://github.com/nuxt/ui
  target: _blank
slots:
  default: Button
---
::

버튼이 링크이거나 `active` 소품을 사용할 때 `active-color` 및 `active-variant` 소품을 사용하여 활성 상태를 사용자 정의할 수 있습니다.

::component-code
---
prettier: true
ignore:
  - color
  - variant
items:
  activeColor:
    - primary
    - secondary
    - success
    - info
    - warning
    - error
    - neutral
  activeVariant:
    - solid
    - outline
    - soft
    - subtle
    - ghost
    - link
props:
  active: true
  color: neutral
  variant: outline
  activeColor: primary
  activeVariant: solid
slots:
  default: |

    Button
---

단추
::

또한 `active-class` 및 `inactive-class` props를 사용하여 활성 상태를 사용자 정의할 수 있습니다.

::component-code
---
props:
  active: true
  activeClass: 'font-bold'
  inactiveClass: 'font-light'
slots:
  default: Button
---

버튼 (Button)
::

::tip
`ui.button.variants.active` 키 아래의 `app.config.ts` 파일에서 이러한 스타일을 전역적으로 구성할 수 있습니다.

```ts
export default defineAppConfig({
  ui: {
    button: {
      variants: {
        active: {
          true: {
            base: 'font-bold'
          }
        }
      }
    }
  }
})
```
::

### loading 파일

`loading` prop를 사용하여 로딩 아이콘을 표시하고 Button을 비활성화합니다.

::component-code
---
props:
  loading: true
  trailing: false
slots:
  default: Button
---
단추
::

`loading-auto` prop을 사용하여 `@click` promise가 보류 중일 때 로드 아이콘을 자동으로 표시합니다.

:component-example{name="button-loading-auto-example"}

이 기능은 [Form](/docs/components/form) 구성 요소에서도 작동합니다.

:component-example{name="button-loading-auto-form-example"}

### loading 아이콘

`loading-icon` 소품을 사용하여 로드 아이콘을 사용자 정의합니다. 기본값은 `i-lucide-loader-circle`입니다.

::component-code
---
props:
  loading: true
  loadingIcon: 'i-lucide-loader'
slots:
  default: Button
---
단추
::

::framework-only
#nuxt
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
`ui.icons.loading` 키 아래의 `app.config.ts`에서 이 아이콘을 전역적으로 사용자 정의할 수 있습니다.
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
`ui.icons.loading` 키 아래의 `vite.config.ts`에서 이 아이콘을 전역적으로 사용자 정의할 수 있습니다.
:::
::

### 비활성 화

`disabled` prop 을 사용하여 Button 을 비활성화합니다.

::component-code
---
props:
  disabled: true
slots:
  default: Button
---

단추
::

## examples 예제

### `class` 소품

`class` prop을 사용하여 Button의 기본 스타일을 재정의합니다.

::component-code
---
props:
  class: 'font-bold rounded-full'
slots:
  default: Button
---
::

### `ui` prop

`ui` prop을 사용하여 Button의 슬롯 스타일을 재정의합니다.

::component-code
---
prettier: true
ignore:
  - ui
  - color
  - variant
  - icon
props:
  icon: i-lucide-rocket
  color: neutral
  variant: outline
  ui:
    leadingIcon: 'text-primary'
slots:
  default: |

    Button
---
::

## API

### Props (### Props)

:component-props

::callout{icon="i-simple-icons-mdnwebdocs" to="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attributes" target="_blank"}
이 구성 요소는 모든 기본 `<button>` HTML 속성을 지원합니다.
::

::callout{icon="i-simple-icons-github" to="https://github.com/nuxt/ui/blob/v4/src/runtime/components/Link.vue#L13"}
`Button` 구성 요소는 `Link` 구성 요소를 확장합니다. GitHub에서 소스 코드를 확인하십시오.
::

### 슬롯

:component-slots

## Theme 테마

:component-theme

## Changelog 파일

:component-changelog
