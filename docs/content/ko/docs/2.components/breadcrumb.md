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

##  사용

Breadcrumb 구성 요소를 사용하여 사이트의 계층 구조에서 현재 페이지의 위치를 표시합니다.

::component-code
---
축소: true
무시하기:
  -  items
외부:
  -  items
externalTypes:
  -  BreadcrumbItem []
소품 :
  프로젝트:
    - label: 'Docs'
      아이콘 : i-lucide-book-open
      to: `/docs' 에 해당되는 글 1건
    - label: '구성 요소'
      아이콘 : i-lucide-box
      to: '/docs/components' 로
    - label: 'Breadcrumb'
      아이콘: 'i-lucide-link'
      대상: '/docs/components/breadcrumb'
---
::

###  프로젝트

`items`prop을 다음과 같은 속성을 가진 객체의 배열로 사용합니다.

- `label?: string` {lang="ts-type"}
- `icon?: string`{lang="ts-type"}
-  @ `avatar?: AvatarProps` @ @ {lang="ts-type"}
- [`slot?: string`{lang="ts-type"} ]( @ #with-custom-slot @ )
-  @ `class?: any` @ @ {lang="ts-type"} @
-  @ `ui?: { item?: ClassNameValue, link?: ClassNameValue, linkLeadingIcon?: ClassNameValue, linkLeadingAvatar?: ClassNameValue, linkLabel?: ClassNameValue, separator?: ClassNameValue, separatorIcon?: ClassNameValue }` @ {lang="ts-type"} @

당신은 [Link](/docs/components/link#props) 구성 요소에서 모든 속성을 전달 할 수 있습니다 `to`, `target` 등.

::component-code
---
무시하기:
  -  items
외부:
  -  items
externalTypes:
  -  BreadcrumbItem []
소품 :
  프로젝트:
    - label: 'Docs'
      아이콘 : i-lucide-book-open
      to: `/docs' 에 해당되는 글 1건
    - label: '구성 요소'
      아이콘 : i-lucide-box
      to: '/docs/components' 로
    - label: 'Breadcrumb'
      아이콘: 'i-lucide-link'
      대상: `/docs/components/breadcrumb'
---
::

::note
`to` 속성이 정의되어 있지 않으면 링크 대신 `span`이 렌더링됩니다.
::

###  구분자 아이콘

`separator-icon`prop을 사용하여 각 항목 사이의 [Icon](/docs/components/icon)를 사용자 정의합니다. 기본값은 `i-lucide-chevron-right`입니다.

::component-code
---
무시하기:
  -  items
외부:
  -  items
externalTypes:
  -  BreadcrumbItem []
소품 :
  separatorIcon: 'i-lucide-arrow-right'
  프로젝트:
    - label: 'Docs'
      아이콘 : i-lucide-book-open
      to: `/docs' 에 해당되는 글 1건
    - label: '구성 요소'
      아이콘 : i-lucide-box
      to: '/docs/components' 로
    - label: 'Breadcrumb'
      아이콘: 'i-lucide-link'
      대상: '/docs/components/breadcrumb'
---
::

::framework-only
#nuxt #nuxt
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
이 아이콘은 `app.config.ts` 아래 `ui.icons.chevronRight` 키에서 전역적으로 사용자 지정할 수 있습니다.
:::

#vue #vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
이 아이콘은 `vite.config.ts` 아래 `ui.icons.chevronRight` 키에서 전역적으로 사용자 지정할 수 있습니다.
:::
::

### 색상: badge{label="4.8+" class="align-text-top"}

`color`prop 을 사용하여 활성 Breadcrumb의 색상을 변경합니다.

::component-code
---
무시하기:
  -  items
외부:
  -  items
externalTypes:
  -  BreadcrumbItem []
소품 :
  색상 : secondary
  항목:
    - label: 'Docs'
      아이콘 : i-lucide-book-open
      to: `/docs' 에 해당되는 글 1건
    - label: '구성 요소'
      아이콘 : i-lucide-box
      to: '/docs/components' 로
    - label: 'Breadcrumb'
      아이콘: 'i-lucide-link'
      대상: `/docs/components/breadcrumb'
---
::

##  예제

###  분리 슬롯이 있습니다.

`#separator` 슬롯을 사용하여 각 항목 사이의 구분 기호를 사용자 정의합니다.

: component-example {name="breadcrumb-separator-slot-example"}

### 사용자 지정 슬롯 포함

`slot` 속성을 사용하여 특정 항목을 사용자 정의합니다.

다음과 같은 슬롯에 액세스할 수 있습니다.

-  @ `#{{ item.slot }}` @ {lang="ts-type"} @
- `#{{ item.slot }}-leading`{lang="ts-type"}
- `#{{ item.slot }}-label`{lang="ts-type"}
- `#{{ item.slot }}-trailing`{lang="ts-type"}

: component-example {name="breadcrumb-custom-slot-example"}

::tip{to="#slots"}
또한 `#item``#item-leading``#item-label` 및 `#item-trailing` 슬롯을 사용하여 모든 항목을 사용자 정의할 수 있습니다.
::

##  API

###  Props

:컴포넌트 - 소품

###  슬롯

:컴포넌트 - 슬롯

##  테마

:구성요소 - 주제

##  Changelog

:component-changelog 구성요소 변경 로그
