---
title: ProsePrompt
description: '한 번의 클릭 복사 및 IDE 통합을 통해 미리 구축된 AI 프롬프트를 표시합니다.'
category: components
navigation.title: Prompt
links:
  - label: Github (GitHub)
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/prose/Prompt.vue
---

##  사용

`prompt` 구성 요소를 사용하여 사용자가 클립보드에 복사하거나 IDE에서 직접 열 수 있는 미리 빌드된 AI 프롬프트를 표시합니다. `description`prop은 표시 레이블로 표시되고 기본 슬롯에는 복사되는 프롬프트 텍스트가 포함됩니다.

::component-code{slug="prompt" prose}
---
소품 :
  Nuxt UI를 사용하여 대시보드 레이아웃을 빌드합니다.Build a dashboard layout with Nuxt UI.
  클래스: 'w-full my-0'
숨기기 (Hide):
  -  클래스
슬롯 :
  기본값 :|
    Nuxt UI 전문가입니다. 축소 가능한 사이드바와 고정 가능한 위쪽 navbar로 대시보드 레이아웃을 구축하는 데 도움이 됩니다.

    요구 사항:
    - 사용`UDashboardPanel``UDashboardSidebar` 및 `UDashboardNavbar`
    -  테마 지정을 위해 `bg-elevated` 및 `text-muted`와 같은 의미 색상 토큰을 사용합니다.
    - 사이드바에는 `UNavigationMenu`를 사용하는 아이콘이 있는 내비게이션 링크가 포함되어야 합니다.
    - navbar는 breadcrumb, 검색 버튼, 사용자 드롭다운 메뉴를 표시해야 합니다.
    -  레이아웃은 완전히 응답하고 모바일에서 사이드바를 축소해야합니다.
---
::

###  아이콘

`icon`prop 을 사용하여 설명 옆에 아이콘을 표시합니다.

::component-code{slug="prompt" prose}
---
무시하기:
  -  설명
숨기기 (Hide):
  -  클래스
소품 :
  설명: 유효성 검사를 사용하여 양식을 만듭니다.
  아이콘: i-lucide-file-pen-line
  클래스: 'w-full my-0'
슬롯 :
  기본값 :|
    Zod 스키마 유효성 검사가 포함된 Nuxt UI를 사용하여 등록 양식을 만듭니다.

    요구 사항:
    -  @ `UForm` 사용 Zod 스키마 유효성 검사
    - Add`UFormField`Add`UFormField`각 입력 줄바꿈: 이름(`UInput`), 이메일(`UInput`type email), 역할(`USelect` 옵션 관리자, 편집자, 뷰어)
    -  제출 `UButton` 로드 상태와 함께 포함
    -  각 필드 아래에 인라인 오류 메시지 표시
    -  성공적으로 제출하면 `UToast` 알림을 표시합니다
---
::

###  작업

추가 단추를 표시하려면 `actions`prop을 사용하십시오. `copy` 단추는 항상 표시됩니다. 사용 가능한 동작은 `cursor`, `windsurf` 및 `claude`입니다.

::component-code{slug="prompt" prose}
---
무시하기:
  -  설명
  -  icon
숨기기 (Hide):
  -  클래스
소품 :
  설명: 색상 모드 토글을 추가합니다.
  아이콘 : i-lucide-sun-moon
  작업:
    -  커서
    -  claude
  클래스: 'w-full my-0'
슬롯 :
  기본값 :|
    색상 모드 토글을 Nuxt 앱에 추가합니다.Add a color mode toggle to my Nuxt app.

    요구 사항:
    -  @ `useColorMode` from`@nuxtjs/color-mode` 현재 모드 관리
    -  @ `UButton` @ with `variant="ghost"` that cycles between `light`, `dark` and `system` on click 클릭 시 반복되는 `UButton` 와 함께 `variant="ghost"`
    -  버튼 아이콘을 동적으로 업데이트: `i-lucide-sun` 빛, `i-lucide-moon` 어둠, `i-lucide-monitor` 시스템
    - 현재 활성 모드를 보여주는 `UTooltip`를 사용하여 툴팁 추가
---
::

##  API

### Props 이미지

: component-props {prose}

###  슬롯

: component-slots {prose}

##  테마

: component-theme {prose}

##  Changelog

: component-changelog{prefix="prose"}
