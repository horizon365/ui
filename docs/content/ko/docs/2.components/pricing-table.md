---
title: PricingTable (가격 테이블)
description: '기능 비교와 함께 계층형 가격책정 계획을 표시하는 응답형 가격책정 테이블 구성요소.'
category: page
links:
  - label: Github (GitHub)
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/PricingTable.vue
---

## Usage

PricingTable 구성 요소는 가격책정 계획을 테이블 형식으로 표시하는 응답적이고 사용자 정의 가능한 방법을 제공하며, 데스크탑의 수평 테이블 레이아웃과 모바일의 수직 카드 레이아웃 간에 자동으로 전환하여 쉽게 비교할 수 있습니다.The PricingTable component provides a responsive and customizable way to display pricing plans in a table format, automatically switching between a horizontal table layout on desktop for easy comparison and a vertical card layout on mobile for better readability.

::code-preview

::u-pricing-table
---
tiers:
  - id: 'solo'
    title: 'Solo'
    description: 'For indie hackers.'
    price: '$249'
    billingCycle: '/month'
    billingPeriod: 'billed annually'
    badge: 'Most popular'
    button:
      label: 'Buy now'
      variant: 'subtle'
  - id: 'team'
    title: 'Team'
    description: 'For growing teams.'
    price: '$499'
    billingCycle: '/month'
    billingPeriod: 'billed annually'
    button:
      label: 'Buy now'
    highlight: true
  - id: 'enterprise'
    title: 'Enterprise'
    description: 'For large organizations.'
    price: 'Custom'
    button:
      label: 'Contact sales'
      color: 'neutral'
sections:
  - title: 'Features'
    features:
      - title: 'Number of developers'
        tiers:
          solo: '1'
          team: '5'
          enterprise: 'Unlimited'
      - title: 'Projects'
        tiers:
          solo: true
          team: true
          enterprise: true
      - title: 'GitHub repository access'
        tiers:
          solo: true
          team: true
          enterprise: true
      - title: 'Updates'
        tiers:
          solo: 'Patch & minor'
          team: 'All updates'
          enterprise: 'All updates'
      - title: 'Support'
        tiers:
          solo: 'Community'
          team: 'Priority'
          enterprise: '24/7'
  - title: 'Security'
    features:
      - title: 'SSO'
        tiers:
          solo: false
          team: true
          enterprise: true
      - title: 'Audit logs'
        tiers:
          solo: false
          team: true
          enterprise: true
      - title: 'Custom security review'
        tiers:
          solo: false
          team: false
          enterprise: true
---
::

::

### Tiers

`tiers` 소품을 객체 배열로 사용하여 가격책정 계획을 정의합니다. 각 계층 객체는 다음 속성을 지원합니다.

- `id: string`{lang="ts-type"} - 계층의 고유 식별자(필수)
- `title?: string`{lang="ts-type"} - 가격책정 계획 이름
- `description?: string`{lang="ts-type"} - 계획에 대한 간단한 설명
- `price?: string`{lang="ts-type"} - 계획의 현재 가격(예: "$99", "€99", "무료")
- `discount?: string`{lang="ts-type"} - 취소선이 포함된 `price`를 표시하는 할인된 가격(예: "$79", "€79")
- `billingCycle?: string`{lang="ts-type"} - 가격 옆에 표시되는 단가 기간(예: "/month", "/seat/month")
- `billingPeriod?: string`{lang="ts-type"} - 청구 주기 위에 나타나는 추가 청구 컨텍스트(예: "월별 청구")
- `badge?: string | BadgeProps`{lang="ts-type"} - `{ color: 'primary', variant: 'subtle' }`{lang="ts-type"} 제목 옆에 배지 표시
- `button?: ButtonProps`{lang="ts-type"} - CTA 버튼 `{ size: 'lg', block: true }`{lang="ts-type"} 구성
- `highlight?: boolean`{lang="ts-type"} - 이 계층을 권장 옵션으로 시각적으로 강조할지 여부

::component-code
---
prettier: true
collapse: true
external:
  - tiers
externalTypes:
  - PricingTableTier[]
hide:
  - class
ignore:
  - tiers
props:
  tiers:
    - id: 'solo'
      title: 'Solo'
      description: 'For indie hackers.'
      price: '$249'
      billingCycle: '/month'
      billingPeriod: 'billed annually'
      badge: 'Most popular'
      button:
        label: 'Buy now'
        variant: 'subtle'
    - id: 'team'
      title: 'Team'
      description: 'For growing teams.'
      price: '$499'
      billingCycle: '/month'
      billingPeriod: 'billed annually'
      button:
        label: 'Buy now'
      highlight: true
    - id: 'enterprise'
      title: 'Enterprise'
      description: 'For large organizations.'
      price: 'Custom'
      button:
        label: 'Contact sales'
        color: 'neutral'
  class: 'border-b border-default'
---
::

### 섹션

`sections` 소품을 사용하여 기능을 논리적 그룹으로 구성합니다. 각 섹션은 가격책정 계층 간에 비교할 기능 범주를 나타냅니다.

- `title: string`{lang="ts-type"} - 기능 섹션의 제목
- `features: PricingTableSectionFeature[]`{lang="ts-type"} - 각 계층에서 가용성을 제공하는 기능 배열:
  - 각 기능에는 `title` 및 `tiers` 객체 매핑 계층 ID가 필요합니다.
  - Boolean 값(`true`/`false`)은 체크 마크(✓) 또는 빼기 아이콘(-)으로 표시됩니다.
  - String 값은 텍스트로 표시됩니다 (예: "무제한", "최대 5 명의 사용자").
  - Numeric 값은 그대로 표시됩니다(예: 10, 100).

::component-code
---
prettier: true
collapse: true
external:
  - tiers
  - sections
externalTypes:
  - PricingTableTier[]
  - PricingTableSection[]
hide:
  - class
ignore:
  - tiers
  - sections
props:
  tiers:
    - id: 'solo'
      title: 'Solo'
      price: '$249'
      description: 'For indie hackers.'
      billingCycle: '/month'
      button:
        label: 'Buy now'
        variant: 'subtle'
    - id: 'team'
      title: 'Team'
      price: '$499'
      description: 'For growing teams.'
      billingCycle: '/month'
      button:
        label: 'Buy now'
    - id: 'enterprise'
      title: 'Enterprise'
      price: 'Custom'
      description: 'For large organizations.'
      button:
        label: 'Contact sales'
        color: 'neutral'
  sections:
    - title: 'Features'
      features:
        - title: 'Number of developers'
          tiers:
            solo: '1'
            team: '5'
            enterprise: 'Unlimited'
        - title: 'Projects'
          tiers:
            solo: true
            team: true
            enterprise: true
    - title: 'Security'
      features:
        - title: 'SSO'
          tiers:
            solo: false
            team: true
            enterprise: true
---
::

## examples 예제

### With 슬롯 사용

PricingTable 구성 요소는 콘텐츠 표시를 조정하는 강력한 슬롯 사용자 정의 옵션을 제공합니다. 일반 슬롯을 사용하여 개별 요소를 사용자 정의하거나 해당 ID를 사용하여 특정 항목을 대상으로 지정할 수 있습니다.

::component-example
---
prettier: true
name: 'pricing-table-slots-example'
collapse: true
---
::

구성요소는 다양한 슬롯 유형을 지원하여 최대의 사용자화 유연성을 제공합니다.

| 슬롯 종류|패턴 (Pattern)| 설명 (Description)| 예제|
|-----------|---------|-------------|---------|
| **Tier 슬롯**| `#{tier-id}-{element}`| 특정 계층 대상| `#team-title`, `#solo-price`|
| **섹션 슬롯**| `#section-{id\|formatted-title}-title`| 특정 섹션을 대상으로| `#section-features-title` 공식|
| **기능 slots**| `#feature-{id\|formatted-title}-{title\|value}`| 특정 기능을 대상으로 지정| `#feature-developers-title`|
| **일반 slots**| `#tier-title`, `#section-title` 등| 모든 품목에 적용| `#feature-value` 파일|

::note
`id`가 제공되지 않으면 슬롯 이름이 제목에서 자동으로 생성됩니다(예: "Premium Features!"는 `#section-premium-features-title`가 됨).
::

## API 사용

### Props 코드

:component-props

### 슬롯

:component-slots

## 테마

:component-theme

## 변경 로그

:component-changelog
