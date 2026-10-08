---
title: PricingPlan 가격계획
description: '가격책정 페이지에 표시할 사용자 정의된 가격책정 계획.'
category: page
links:
  - label: Github (GitHub)
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/PricingPlan.vue
---

##  사용

PricingPlan 구성요소는 제목, 설명, 가격, 기능 등을 포함하여 사용자 정의 가능한 컨텐츠가 포함된 가격책정 계획을 유연하게 표시할 수 있는 방법을 제공합니다.

::code-preview

::u-pricing-plan
---
제목 : Solo
설명: "For bootstrappers and indie hackers."
가격 : $249
할인: $199
청구 주기: '/month'
사진: "most popular"
특징:
  -  '개발자 한 명'
  -  '무제한 프로젝트'
  -  'GitHub 리포지토리에 액세스'
  -  '무제한 패치 & 사소한 업데이트'
  -  '평생 액세스'
단추:
  사진: "buy now"
클래스: 'W-96'
---
::

::

::tip{to="/docs/components/pricing-plans"}
`PricingPlans` 구성 요소를 사용하여 응답형 그리드 레이아웃에 여러 가격책정 계획을 표시합니다.
::

###  제목

`title`prop을 사용하여 PricingPlan의 제목을 설정합니다.

::component-code
---
무시하기:
  -  클래스
소품 :
  제목 : Solo
  클래스: 'W-96'
---
::

###  설명

`description`prop을 사용하여 PricingPlan에 대한 설명을 설정합니다.

::component-code
---
숨기기 (Hide):
  -  클래스
무시하기:
  -  title
소품 :
  제목 : Solo
  설명: "For bootstrappers and indie hackers."
  클래스: 'W-96'
---
::

###  배지

`badge`prop을 사용하여 PricingPlan 제목 옆에 [Badge](/docs/components/badge)를 표시합니다.

::component-code
---
상품명 : True
숨기기 (Hide):
  -  클래스
무시하기:
  -  title
  -  설명
소품 :
  제목 : Solo
  설명: "For bootstrappers and indie hackers."
  사진: "most popular"
  클래스: 'W-96'
---
::

[Badge](/docs/components/badge#props) 구성 요소에서 모든 속성을 전달하여 사용자 지정할 수 있습니다.

::component-code
---
상품명 : True
숨기기 (Hide):
  -  클래스
무시하기:
  -  title
  -  설명
  -  badge. label
  -  badge. color
  - badge.variant - badge. variant -  badge. variant @ badge. variant ( -  badge . variant ) -  2032@@ badge. @ badge. variant @ 20032 @ badge. variant ( @ 2032 ) @ 2000000 @ 2000 @ 20
소품 :
  제목 : Solo
  설명: "For bootstrappers and indie hackers."
  뱃지:
    사진: "Most popular"
    색상: Neutral
    variant: 'solid'에 해당되는 글 1건
  클래스: 'W-96'
---
::

###  가격

`price`prop을 사용하여 PricingPlan의 가격을 설정합니다.

::component-code
---
상품명 : True
숨기기 (Hide):
  -  클래스
무시하기:
  -  title
  -  설명
소품 :
  제목 : Solo
  설명: "For bootstrappers and indie hackers."
  가격 : $249
  클래스: 'w-96'
---
::

###  할인

`discount`prop을 사용하여 원래 가격과 함께 표시될 할인된 가격을 설정합니다(취소선으로 표시됨).

::component-code
---
상품명 : True
숨기기 (Hide):
  -  클래스
무시하기:
  -  title
  -  설명
소품 :
  제목 : Solo
  설명: "For bootstrappers and indie hackers."
  가격 : $249
  할인: $199
  클래스: 'w-96'
---
::

### Billing 정보

`billing-cycle` 및/또는 `billing-period`props를 사용하여 PricingPlan에 대한 청구 정보를 표시합니다.

::component-code
---
상품명 : True
숨기기 (Hide):
  -  클래스
무시하기:
  -  title
  -  설명
소품 :
  제목 : Solo
  설명: "For bootstrappers and indie hackers."
  가격 : $9
  billingCycle: '/month'
  billingPeriod: '매년 청구됨'
  클래스: 'W-96'
---
::

###  기능

`features`prop을 문자열 배열로 사용하여 PricingPlan에 기능 목록을 표시합니다.

::component-code
---
상품명 : True
숨기기 (Hide):
  -  class
무시하기:
  -  title
  -  설명
  -  가격
  -  기능
소품 :
  제목 : Solo
  설명: "For bootstrappers and indie hackers."
  가격 : $249
  특징:
    -  '개발자 한 명'
    -  '무제한 프로젝트'
    -  'GitHub 리포지토리에 액세스'
    -  '무제한 패치 & 사소한 업데이트'
    -  '평생 액세스'
  클래스: 'w-96'
---
::

::framework-only
#nuxt 코드
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
이 아이콘은 `app.config.ts` 아래 `ui.icons.success` 키에서 전역적으로 사용자 지정할 수 있습니다.
:::

#vue #vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
이 아이콘은 `vite.config.ts` 아래 `ui.icons.success` 키에서 전역적으로 사용자 지정할 수 있습니다.
:::
::

또한 다음 속성을 사용하여 객체 배열을 전달할 수 있습니다.

-  @ `title: string` @ @ {lang="ts-type"} @
-  @ `icon?: string` @ {lang="ts-type"}

::component-code
---
상품명 : True
숨기기 (Hide):
  -  class
외부:
  -  기능
externalTypes:
  - PricingPlanFeature []
무시하기:
  -  title
  -  설명
  -  가격
  -  기능
소품 :
  제목 : Solo
  설명: "For bootstrappers and indie hackers."
  가격 : $249
  특징:
    - title: '개발자 한 명'
      아이콘: i-lucide-user
    - title: '무제한 프로젝트'
      아이콘 : i-lucide-infinity
    - title: 'GitHub 리포지토리에 액세스'
      아이콘: i-lucide-github
    - title: '무제한 패치 & 사소한 업데이트'
      아이콘: i-lucide-refresh-cw
    - title: '평생 액세스'
      아이콘 : i-lucide-clock
  클래스: 'w-96'
---
::

###  버튼

`button`prop을 [Button](/docs/components/button) 구성 요소의 속성과 함께 사용하여 PricingPlan의 하단에 버튼을 표시합니다.

::component-code
---
상품명 : True
숨기기 (Hide):
  -  클래스
무시하기:
  -  title
  -  설명
  -  가격
  -  기능
소품 :
  제목 : Solo
  설명: "For bootstrappers and indie hackers."
  가격 : $249
  특징:
    -  '개발자 한 명'
    - 무제한 프로젝트
    -  'GitHub 리포지토리에 액세스'
    -  '무제한 패치 & 사소한 업데이트'
    -  '평생 액세스'
  단추:
    사진: "Buy Now"
  클래스: 'W-96'
---
::

::tip
`onClick` 필드를 사용하여 계획 구매를 트리거하는 클릭 핸들러를 추가합니다.
::

###  변형

`variant`prop을 사용하여 PricingPlan의 변형을 변경합니다.

::component-code
---
상품명 : True
숨기기 (Hide):
  -  클래스
무시하기:
  -  title
  -  설명
  -  price
  -  기능
  -  button. label
소품 :
  제목 : Solo
  설명: "For bootstrappers and indie hackers."
  가격: $249
  특징:
    -  '개발자 한 명'
    - 무제한 프로젝트
    -  'GitHub 리포지토리에 액세스'
    - 무제한 패치 & 사소한 업데이트'
    -  '평생 액세스'
  단추:
    사진: "Buy Now"
  variant: '미묘한'
  클래스: 'W-96'
---
::

###  방향

`orientation`prop을 사용하여 PricingPlan.기본값의 방향을 `vertical`로 변경합니다.

::component-code
---
상품명 : True
숨기기 (Hide):
  -  클래스
무시하기:
  -  title
  -  설명
  -  가격
  -  기능
  -  button. label
소품 :
  제목 : Solo
  설명: "For bootstrappers and indie hackers."
  가격 : $249
  특징:
    -  '개발자 한 명'
    -  '무제한 프로젝트'
    -  'GitHub 리포지토리에 액세스'
    -  '평생 액세스'
  단추:
    사진: "Buy Now"
  방향: 수평
  variant: 'outline'의 발음을 outline [en]
  클래스: 'w-full'
---
::

###  Tagline

`tagline`prop을 사용하여 가격 위의 태그 라인 텍스트를 표시합니다.

::component-code
---
상품명 : True
숨기기 (Hide):
  -  클래스
무시하기:
  -  title
  -  설명
  -  가격
  -  기능
  -  button. label
  -  orientation
소품 :
  제목 : Solo
  설명: "For bootstrappers and indie hackers."
  가격 : $249
  특징:
    -  '개발자 한 명'
    -  '무제한 프로젝트'
    -  'GitHub 리포지토리에 액세스'
    -  '평생 액세스'
  단추:
    사진: "Buy Now"
  방향: 수평
  한번 지불하면 영원히 소유하라 (Pay Once, Own It Forever)
  클래스: 'w-full'
---
::

###  Terms

`terms`prop을 사용하여 가격보다 낮은 용어를 표시합니다.

::component-code
---
상품명 : True
숨기기 (Hide):
  -  class
무시하기:
  -  title
  -  설명
  -  가격
  -  기능
  -  button. label
  -  orientation
  -  tagline
소품 :
  제목 : Solo
  설명: "For bootstrappers and indie hackers."
  가격 : $249
  특징:
    -  '개발자 한 명'
    -  '무제한 프로젝트'
    -  'GitHub 리포지토리에 액세스'
    -  '평생 액세스'
  단추:
    사진: "Buy Now"
  방향: 수평
  한번 지불하면 영원히 소유하라 (Pay Once, Own It Forever)
  조건: "송장 및 영수증 사용 가능"
  클래스 : 'w-full'
---
::

###  하이라이트

`highlight`prop을 사용하여 PricingPlan 주위에 강조 표시된 테두리를 표시합니다.

::component-code
---
상품명 : True
숨기기 (Hide):
  -  클래스
무시하기:
  -  title
  -  설명
  -  가격
  -  기능
  -  button. label
소품 :
  제목 : Solo
  설명: "For bootstrappers and indie hackers."
  가격 : $249
  특징:
    -  '개발자 한 명'
    -  '무제한 프로젝트'
    -  'GitHub 리포지토리에 액세스'
    -  '무제한 패치 & 사소한 업데이트'
    -  '평생 액세스'
  단추:
    사진: "Buy Now"
  강조 표시: True
  클래스: 'W-96'
---
::

###  스케일

`scale`prop을 사용하여 PricingPlan을 다른 것보다 더 크게 만듭니다.

::note{to="/docs/components/pricing-plans#scale"}
PricingPlans의 `scale` 예제를 확인하여 자체적으로 입증하기가 어렵기 때문에 어떻게 작동하는지 확인하십시오.
::

##  API

###  Props

:컴포넌트 - 소품

###  슬롯

:컴포넌트 - 슬롯

##  테마

:구성요소 주제

##  Changelog

:component-changelog 구성요소 변경 로그
