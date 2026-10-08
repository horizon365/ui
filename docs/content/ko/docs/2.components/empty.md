---
description: '빈 상태를 표시하는 구성요소입니다.'
category: data
keywords:
  - no data
  - placeholder
  - zero state
links:
  - label: Github (GitHub)
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Empty.vue
---

##  사용

표시할 내용이 없을 때 빈 구성 요소를 사용하여 자리 표시자 상태를 표시합니다.

::code-preview

:::u-empty
---
아이콘: i-lucide-file
제목: No projects found
설명: 프로젝트를 추가하지 않은 것처럼 보입니다. 시작하려면 하나를 만듭니다.
동작:
  - icon: i-lucide-plus
    레이블: 새로 만들기
  - 아이콘: i-lucide-refresh-cw
    레이블:새로 고침
    색상: 중립
    변형: 미묘함
---
:::

::

###  제목

`title`prop 을 사용하여 빈 상태의 제목을 설정합니다.

::component-code
---
소품 :
  제목: No projects found
---
::

###  설명

`description`prop 을 사용하여 빈 상태에 대한 설명을 설정합니다.

::component-code
---
상품명 : True
무시하기:
  -  title
소품 :
  제목: No projects found
  설명: 프로젝트를 추가하지 않은 것처럼 보입니다. 시작하려면 하나를 만듭니다.
---
::

###  아이콘

`icon`prop 을 사용하여 빈 상태의 아이콘을 설정합니다.

::component-code
---
상품명 : True
무시하기:
  -  title
  -  설명
소품 :
  아이콘: i-lucide-file
  제목: No projects found
  설명: 프로젝트를 추가하지 않은 것처럼 보입니다. 시작하려면 하나를 만듭니다.
---
::

### Avatar 이미지

`avatar`prop 을 사용하여 빈 상태의 아바타를 설정합니다.

::component-code
---
상품명 : True
무시하기:
  -  icon
  -  title
  -  설명
소품 :
  avatar.src: 'https://github.com/nuxt.png'
  제목: No projects found
  설명: 프로젝트를 추가하지 않은 것처럼 보입니다. 시작하려면 하나를 만듭니다.
---
::

### 로드 중: badge{label="4.10+" class="align-text-top"}

`loading`prop을 사용하여 아이콘 대신 로드 아이콘을 표시합니다. 레이아웃은 동일하게 유지되므로 레이아웃을 이동하지 않고 로드 상태와 빈 상태 사이를 전환할 수 있습니다.

::component-code
---
상품명 : True
무시하기:
  -  icon
  -  title
  -  설명
소품 :
  아이콘: i-lucide-file
  로드: true
  제목: Loading Projects
  설명: 프로젝트를 가져오는 동안 잠시 기다려 주십시오.
---
::

### Loading Icon:badge{label="4.10+" class="align-text-top"}

`loading-icon`prop을 사용하여 로드 아이콘을 사용자 정의합니다. 기본값은 `i-lucide-loader-circle`입니다.

::component-code
---
상품명 : True
무시하기:
  -  icon
  -  title
  -  설명
  -  loading
소품 :
  아이콘: i-lucide-file
  로드: true
  loadingIcon: 'i-lucide-loader'
  제목: Loading Projects
  설명: 프로젝트를 가져오는 동안 잠시 기다려 주십시오.
---
::

::framework-only
#nuxt 코드
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
이 아이콘은 `app.config.ts` 아래 `ui.icons.loading` 키에서 전역적으로 사용자 지정할 수 있습니다.
:::

#vue #vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
이 아이콘은 `vite.config.ts` 아래 `ui.icons.loading` 키에서 전역적으로 사용자 지정할 수 있습니다.
:::
::

###  작업

`actions`prop을 사용하여 일부 [Button](/docs/components/button)액션을 빈 상태에 추가합니다.

::component-code
---
상품명 : True
무시하기:
  -  icon
  -  title
  -  설명
  -  actions
소품 :
  아이콘: i-lucide-file
  제목: No projects found
  설명: 프로젝트를 추가하지 않은 것처럼 보입니다. 시작하려면 하나를 만듭니다.
  작업:
    - icon: i-lucide-plus
      레이블: 새로 만들기
    - icon: i-lucide-refresh-cw
      레이블: 새로 고침
      색상: 중립
      변형: 미묘함
---
::

###  변형

`variant`prop 을 사용하여 빈 상태의 변형을 변경합니다.

::component-code
---
상품명 : True
무시하기:
  -  icon
  -  title
  -  설명
  -  actions
소품 :
  변형: 벌거벗은
  아이콘 : i-lucide-bell
  제목: 알림 없음
  설명: 모두 잡혔습니다. 새 알림이 여기에 나타납니다.
  작업:
    - icon: i-lucide-refresh-cw
      레이블: 새로 고침
      색상: 중립
      변형: 미묘한
---
::

###  크기

`size`prop 을 사용하여 빈 상태의 크기를 변경합니다.

::component-code
---
상품명 : True
무시하기:
  -  icon
  -  title
  -  설명
  -  actions
소품 :
  크기: xl
  아이콘 : i-lucide-bell
  제목: 알림 없음
  설명: 모두 잡혔습니다. 새 알림이 여기에 나타납니다.
  동작:
    - icon: i-lucide-refresh-cw
      레이블: 새로 고침
      색상: 중립
      변형: 미묘함
---
::

##  예제

###  슬롯 포함

사용 가능한 슬롯을 사용하여 보다 복잡한 빈 상태를 만듭니다.

::component-example
---
축소: true
이름: empty-slots-example
---
::

##  API

###  Props

:컴포넌트 - 소품

###  슬롯

:구성요소 - 슬롯

##  테마

:구성요소 - 주제

##  Changelog

:component-changelog 구성요소 변경 로그
