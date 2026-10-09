---
description: 웹 사이트를 탐색하는 링크의 계층입니다.
category: navigation
keywords:
  - breadcrumbs
links:
  - label: Github (GitHub)
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Breadcrumb.vue
---

## Usage

Breadcrumb 구성 요소를 사용하여 사이트 계층 구조에서 현재 페이지의 위치를 표시합니다.

::component-code
---
collapse: true
ignore:
  - items
external:
  - items
externalTypes:
  - BreadcrumbItem[]
props:
  items:
    - label: 'Docs'
      icon: 'i-lucide-book-open'
      to: '/docs'
    - label: 'Components'
      icon: 'i-lucide-box'
      to: '/docs/components'
    - label: 'Breadcrumb'
      icon: 'i-lucide-link'
      to: '/docs/components/breadcrumb'
---
::

### Items 이미지

`items` Prop을 다음 속성을 가진 오브젝트 배열로 사용합니다.

- `label?: string`{lang="ts-type"} - `label?: string`{lang="ts-type"}
- `icon?: string`{lang="ts-type"}
- `avatar?: AvatarProps`{lang="ts-type"} (- `avatar?: AvatarProps`{lang="ts-type"})
- [`slot?: string`{lang="ts-type"}](#with-custom-slot)
- `class?: any`{lang="ts-type"}
- `ui?: { item?: ClassNameValue, link?: ClassNameValue, linkLeadingIcon?: ClassNameValue, linkLeadingAvatar?: ClassNameValue, linkLabel?: ClassNameValue, separator?: ClassNameValue, separatorIcon?: ClassNameValue }`{lang="ts-type"} (- `ui?: { item?: ClassNameValue, link?: ClassNameValue, linkLeadingIcon?: ClassNameValue, linkLeadingAvatar?: ClassNameValue, linkLabel?: ClassNameValue, separator?: ClassNameValue, separatorIcon?: ClassNameValue }`{lang="ts-type"})

[Link](/docs/components/link#props) 구성 요소(예: `to`, `target` 등)에서 모든 속성을 전달할 수 있습니다.

::component-code
---
ignore:
  - items
external:
  - items
externalTypes:
  - BreadcrumbItem[]
props:
  items:
    - label: 'Docs'
      icon: 'i-lucide-book-open'
      to: '/docs'
    - label: 'Components'
      icon: 'i-lucide-box'
      to: '/docs/components'
    - label: 'Breadcrumb'
      icon: 'i-lucide-link'
      to: '/docs/components/breadcrumb'
---
::

::note
`to` 속성이 정의되지 않은 경우 링크 대신 `span`가 렌더링됩니다.
::

### Separator 아이콘

`separator-icon` 소품을 사용하여 각 항목 사이에 [Icon](/docs/components/icon)를 사용자 정의합니다. 기본값은 `i-lucide-chevron-right`입니다.

::component-code
---
ignore:
  - items
external:
  - items
externalTypes:
  - BreadcrumbItem[]
props:
  separatorIcon: 'i-lucide-arrow-right'
  items:
    - label: 'Docs'
      icon: 'i-lucide-book-open'
      to: '/docs'
    - label: 'Components'
      icon: 'i-lucide-box'
      to: '/docs/components'
    - label: 'Breadcrumb'
      icon: 'i-lucide-link'
      to: '/docs/components/breadcrumb'
---
::

::framework-only
#nuxt
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
`ui.icons.chevronRight` 키 아래의 `app.config.ts`에서 이 아이콘을 전역적으로 사용자 지정할 수 있습니다.
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
`ui.icons.chevronRight` 키 아래의 `vite.config.ts`에서 이 아이콘을 전역적으로 사용자 정의할 수 있습니다.
:::
::

### Color : badge{label="4.8+" class="align-text-top"}

`color` Prop을 사용하여 활성 Breadcrumb의 색상을 변경합니다.

::component-code
---
ignore:
  - items
external:
  - items
externalTypes:
  - BreadcrumbItem[]
props:
  color: 'secondary'
  items:
    - label: 'Docs'
      icon: 'i-lucide-book-open'
      to: '/docs'
    - label: 'Components'
      icon: 'i-lucide-box'
      to: '/docs/components'
    - label: 'Breadcrumb'
      icon: 'i-lucide-link'
      to: '/docs/components/breadcrumb'
---
::

## 예제

### Separator 슬롯 포함

`#separator` 슬롯을 사용하여 각 항목 사이의 구분 기호를 사용자 정의합니다.

:component-example{name="breadcrumb-separator-slot-example"}

### 사용자 정의 슬롯 포함

`slot` 속성을 사용하여 특정 항목을 사용자 정의합니다.

다음과 같은 슬롯에 액세스할 수 있습니다.

- `#{{ item.slot }}`{lang="ts-type"}
- `#{{ item.slot }}-leading`{lang="ts-type"} - {lang="ts-type"} (- `#{{ item.slot }}-leading`{lang="ts-type"}) / `#{{ item.slot }}-leading`{lang="ts-type"} / - `#{{ item.slot }}-leading`{lang="ts-type"}
- `#{{ item.slot }}-label`{lang="ts-type"} Xph137x{lang="ts-type"}
- `#{{ item.slot }}-trailing`{lang="ts-type"} (- `#{{ item.slot }}-trailing`{lang="ts-type"})

:component-example{name="breadcrumb-custom-slot-example"}

::tip{to="#slots"}
또한 `#item`, `#item-leading`, `#item-label` 및 `#item-trailing` 슬롯을 사용하여 모든 항목을 사용자 정의 할 수 있습니다.
::

## API 파일

### Props (### Props)

:component-props

### 슬롯

:component-slots

## Theme 테마

:component-theme

## Changelog 파일

:component-changelog
