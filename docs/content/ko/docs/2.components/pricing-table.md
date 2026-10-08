---
title: PricingTable (가격 테이블)
description: '기능 비교와 함께 계층형 가격책정 계획을 표시하는 응답형 가격책정 테이블 구성요소.'
category: page
links:
  - label: Github (GitHub)
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/PricingTable.vue
---

##  사용

PricingTable 구성 요소는 가격책정 계획을 테이블 형식으로 표시하는 응답적이고 사용자 정의 가능한 방법을 제공하며, 데스크탑의 수평 테이블 레이아웃과 모바일의 수직 카드 레이아웃 간에 자동으로 전환하여 쉽게 비교할 수 있습니다.The PricingTable component provides a responsive and customizable way to display pricing plans in a table format, automatically switching between a horizontal table layout on desktop for easy comparison and a vertical card layout on mobile for better readability.

::code-preview

::u-pricing-table
---
계층 :
  - id: '솔로'
    제목 : Solo
    설명: 인디 해커들을 위해.
    가격 : $249
    billingCycle: '/month'
    billingPeriod: '매년 청구됨'
    사진: "Most popular"
    단추:
      사진: "Buy Now"
      variant: '미묘한'
  - id: '팀'
    제목 : Team
    사진: "For growing team"
    가격 : $499
    billingCycle: '/month'
    billingPeriod: '연간 청구'
    단추:
      사진: "Buy Now"
    강조 표시:true
  - id: '기업'
    제목 : Enterprise
    사진: "For large organizations"
    가격: "Custom"
    단추:
      사진: "Contact Sales"
      색상: Neutral
단면:
  - title: '기능'
    특징:
      - title: '개발자 수'
        계층 :
          솔로 : '1'
          팀 : '5'
          제조사 : Unlimited
      - title: '프로젝트'
        계층 :
          솔로 : True
          팀 : True
          엔터프라이즈: True
      - title: 'GitHub 리포지토리 액세스'
        계층 :
          솔로 : True
          팀: True
          엔터프라이즈: True
      - title: '업데이트'
        계층 :
          곡 | 영어 Patch & Minor
          사진: "All Updates"
          엔터프라이즈: '모든 업데이트'
      - title: '지원'
        계층 :
          사진: "Community"
          사진: "Priority"
          엔터프라이즈: '24/7'
  - title: '보안'
    특징:
      - title: 'SSO'
        계층 :
          솔로: 거짓
          팀: True
          엔터프라이즈: True
      - title: '감사 로그'
        계층 :
          솔로: 거짓
          팀 : True
          엔터프라이즈: True
      - title: '사용자 정의 보안 검토'
        계층 :
          솔로: 가짜
          팀 : false
          엔터프라이즈: True
---
::

::

###  티어스

`tiers`prop을 객체 배열로 사용하여 가격책정 계획을 정의합니다. 각 계층 객체는 다음 속성을 지원합니다.

- `id: string`{lang="ts-type"} - 계층의 고유 식별자(필수)
- `title?: string`{lang="ts-type"} - 가격 계획 이름
- `description?: string`{lang="ts-type"} - 계획에 대한 간략한 설명
- `price?: string`{lang="ts-type"} - 현재 계획 가격(예: "$99", "99유로", "무료")
- `discount?: string`{lang="ts-type"} - 취소선이 포함된 `price`를 표시하는 할인된 가격(예: "$79", "€79")
- `billingCycle?: string`{lang="ts-type"} - 가격 옆에 표시되는 단가 기간(예: "/month", "/seat/month")
- `billingPeriod?: string`{lang="ts-type"} - 청구 주기 이상에 나타나는 추가 청구 컨텍스트(예: "월별 청구")
- `badge?: string | BadgeProps`{lang="ts-type"} - 제목 옆에 배지 표시 `{ color: 'primary', variant: 'subtle' }`
- `button?: ButtonProps`{lang="ts-type"} - CTA 버튼 구성`{ size: 'lg', block: true }` {lang="ts-type"}
- `highlight?: boolean`{lang="ts-type"} - 이 계층을 권장 옵션으로 시각적으로 강조할지 여부

::component-code
---
상품명 : True
축소: true
외부:
  -  tiers
externalTypes:
  -  PricingTableTier []
숨기기 (Hide):
  - class 클래스
무시하기:
  -  tiers
소품 :
  계층 :
    - id: '솔로'
      제목 : Solo
      설명: 인디 해커들을 위해.
      가격 : $249
      billingCycle: '/month'
      billingPeriod: '연간 청구'
      사진: "Most popular"
      버튼:
        사진: "Buy Now"
        variant: '미묘한'
    - id: '팀'
      제목 : Team
      사진: "For growing team"
      가격: $499
      billingCycle: '/month'
      billingPeriod: '매년 청구됨'
      단추:
        사진: "Buy Now"
      강조 표시:true
    - id: '기업'
      제목 : Enterprise
      사진: "For large organizations"
      가격: "Custom"
      버튼:
        사진: "Contact Sales"
        색상 : Neutral
  class : 'border-b border-default' (border-b border-default) - class : 'border-b border-default' - border-b border-default' - class : 'border-b border-default' - 'border-default' (class : border-b border-default' - border-b - border-default' - border- 기본값) - ( - 클래스 -
---
::

###  세션

`sections`prop을 사용하여 기능을 논리적 그룹으로 구성합니다. 각 섹션은 서로 다른 가격책정 계층 간에 비교할 기능 범주를 나타냅니다.

- `title: string`{lang="ts-type"} - 기능 섹션의 제목
- `features: PricingTableSectionFeature[]`{lang="ts-type"} - 각 계층에서 가용성을 갖춘 다양한 기능 제공:
  - 각 기능에는 `title` 및 `tiers` 객체 계층 ID를 값에 매핑해야 합니다.
  - 부울 값(`true`/`false`)은 체크 마크(✓) 또는 빼기 아이콘(-)으로 표시됩니다.
  - 문자열 값은 텍스트로 표시됩니다(예: "무제한", "최대 5명의 사용자").
  - 숫자 값은 그대로 표시됩니다(예: 10, 100).

::component-code
---
상품명 : True
축소: true
외부:
  -  tiers
  -  섹션
externalTypes:
  -  PricingTableTier []
  - PricingTableSection []
숨기기 (Hide):
  -  클래스
무시하기:
  -  tiers
  -  섹션
소품 :
  계층 :
    - id: '솔로'
      제목 : Solo
      가격 : $249
      설명: 인디 해커들을 위해.
      billingCycle: '/month'
      버튼:
        사진: "Buy Now"
        variant: '미묘한'
    - id: '팀'
      제목 : Team
      가격 : $499
      사진: "For growing team"
      billingCycle: '/month'
      단추:
        사진: "Buy Now"
    - id: '기업'
      제목 : Enterprise
      가격: "Custom"
      사진: "For large organizations"
      버튼:
        사진: "Contact Sales"
        색상: Neutral
  섹션:
    - title: '기능'
      특징:
        - title: '개발자 수'
          계층 :
            솔로 : '1'
            팀 : '5'
            제조사 : Unlimited
        - title: '프로젝트'
          계층 :
            솔로 : True
            팀 : True
            엔터프라이즈: True
    - title: '보안'
      특징:
        - title: 'SSO'
          계층 :
            솔로: 가짜
            팀: True
            엔터프라이즈: True
---
::

##  예

###  슬롯 포함

PricingTable 구성 요소는 콘텐츠 표시를 조정하는 강력한 슬롯 사용자 정의 옵션을 제공합니다. 일반 슬롯을 사용하여 개별 요소를 사용자 정의하거나 해당 ID를 사용하여 특정 항목을 대상으로 지정할 수 있습니다.

::component-example
---
상품명 : True
이름: 'pricing-table-slots-example'
축소: true
---
::

구성요소는 다양한 슬롯 유형을 지원하여 최대의 사용자화 유연성을 제공합니다.

| 슬롯 종류|패턴 (Pattern)| 설명 (Description)| 예제|
|-----------|---------|-------------|---------|
| **Tier slots**| `#{tier-id}-{element}`| 특정 계층 대상| `#team-title``#solo-price`|
| **섹션 slots**| `#section-{id\|formatted-title}-title`| 특정 섹션을 대상으로| `#section-features-title`|
| **기능 슬롯**| `#feature-{id\|formatted-title}-{title\|value}`| 특정 기능을 대상으로 지정| `#feature-developers-title`|
| **일반 슬롯**| `#tier-title` `#section-title` 등| 모든 품목에 적용| `#feature-value`|

::note
`id`를 제공하지 않으면 슬롯 이름은 제목에서 자동으로 생성됩니다(예: "Premium Features!"는 `#section-premium-features-title`가 됩니다).
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
