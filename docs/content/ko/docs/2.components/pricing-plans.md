---
title: PricingPlans 가격 계획
description: '응답형 그리드 레이아웃에 가격책정 계획 목록을 표시합니다.'
category: page
links:
  - label: Github (GitHub)
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/PricingPlans.vue
---

##  사용

PricingPlans 구성 요소는 유연한 레이아웃을 제공하여 [PricingPlan](PH04) 구성 요소의 목록을 표시합니다. 기본 슬롯 또는 `plans`prop.

```vue {2,8}
<template>
  <UPricingPlans>
    <UPricingPlan
      v-for="(plan, index) in plans"
      :key="index"
      v-bind="plan"
    />
  </UPricingPlans>
</template>
```

::tip
그리드 열은 계획의 수에 따라 자동으로 계산되며, `plans`prop과 함께 작동하지만 기본 슬롯에서도 작동합니다.
::

###  프로그램

`plans`prop을 [PricingPlan](/docs/components/pricing-plan#props) 구성요소의 속성을 가진 객체 배열로 사용합니다.

::component-code
---
축소: true
무시하기:
  -  계획
외부:
  -  계획
externalTypes:
  - PricingPlanProps []
소품 :
  계획 :
    - title: 솔로
      설명: '인디 해커를 위해 맞춤형'
      가격 : $249
      특징:
        -  '개발자 한 명'
        -  '평생 액세스'
      단추:
        사진: "Buy Now"
    - title: 시작
      사진: "Best suited for small teams"
      가격 : $499
      특징:
        -  '최대 5명의 개발자'
        -  'All in Solo'에 해당되는 글 1건
      단추:
        사진: "Buy Now"
    - title: 조직
      설명: '대규모 팀 및 조직에 이상적입니다.'
      가격 : $999
      특징:
        -  '최대 20명의 개발자'
        -  '모든 것을 시작하십시오'
      버튼:
        사진: "Buy Now"
---
::

###  방향

`orientation`prop을 사용하여 PricingPlans.기본값의 방향을 `horizontal`로 변경합니다.

::component-code
---
축소: true
숨기기 (Hide):
  -  클래스
무시하기:
  -  계획
외부:
  -  계획
externalTypes:
  - PricingPlanProps []
소품 :
  방향: 수직
  계획 :
    - title: 솔로
      설명: '인디 해커를 위해 맞춤형'
      가격 : $249
      특징:
        -  '개발자 한 명'
        -  '평생 액세스'
      단추:
        사진: "Buy Now"
    - title: 시작
      사진: "Best suited for small teams"
      가격: $499
      특징:
        -  '최대 5명의 개발자'
        -  'All in Solo'에 해당되는 글 1건
      단추:
        사진: "Buy Now"
    - title: 조직
      설명: '대규모 팀 및 조직에 이상적입니다.'
      가격 : $999
      특징:
        -  '최대 20명의 개발자'
        -  '모든 것을 시작'
      버튼:
        사진: "Buy Now"
  클래스: 'w-full'
---
::

::tip
기본 슬롯 대신 `plans`prop을 사용하면 계획의 `orientation`가 자동으로 반전되고 `horizontal`에서 `vertical`로 전환되며 그 반대도 마찬가지입니다.
::

### Compact 이미지

`compact`prop을 사용하여 계획 중 하나가 더 나은 시각적 균형을 위해 크기를 조정할 때 계획 사이의 패딩을 줄입니다.

::component-code
---
축소: true
무시하기:
  -  계획
  -  compact
외부:
  -  계획
externalTypes:
  - PricingPlanProps []
클래스: P-8
소품 :
  콤팩트: true
  계획 :
    - title: 솔로
      설명: '인디 해커를 위해 맞춤형'
      가격 : $249
      특징:
        -  '개발자 한 명'
        -  '평생 액세스'
      버튼:
        사진: "Buy Now"
    - title: 시작
      사진: "Best suited for small teams"
      가격: $499
      축척: True
      특징:
        -  '최대 5명의 개발자'
        -  'All in Solo'에 해당되는 글 1건
      단추:
        사진: "Buy Now"
    - title: 조직
      설명: '대규모 팀 및 조직에 이상적입니다.'
      가격 : $999
      특징:
        -  '최대 20명의 개발자'
        -  '모든 것을 시작'
      단추:
        사진: "Buy Now"
---
::

###  스케일

`scale`prop을 사용하여 계획 중 하나가 더 나은 시각적 균형을 위해 크기를 조정할 수 있습니다.

::component-code
---
축소: true
무시하기:
  -  계획
  -  규모
외부:
  -  계획
externalTypes:
  - PricingPlanProps []
분류: P-8
소품 :
  축척: True
  계획 :
    - title: 솔로
      설명: '인디 해커를 위해 맞춤형'
      가격 : $249
      특징:
        -  '개발자 한 명'
        -  '평생 액세스'
      버튼:
        사진: "Buy Now"
    - title: 시작
      사진: "Best suited for small teams"
      가격 : $499
      축척: True
      특징:
        -  '최대 5명의 개발자'
        -  'All in Solo'에 해당되는 글 1건
      버튼:
        사진: "Buy Now"
    - title: 조직
      설명: '대규모 팀 및 조직에 이상적입니다.'
      가격: $999
      특징:
        -  '최대 20명의 개발자'
        -  '모든 것을 시작'
      단추:
        사진: "Buy Now"
---
::

##  예

::note
이러한 예에서는 [Nuxt Content](https://content.nuxt.com)를 사용하지만 모든 컨텐츠 관리 시스템과 통합할 수 있습니다.
::

###  페이지 내에서

페이지의 PricingPlans 구성요소를 사용하여 가격책정 페이지를 생성합니다.

```vue [pages/pricing/index.vue]{11}
<script setup lang="ts">
const { data: plans } = await useAsyncData('plans', () => queryCollection('plans').all())
</script>

<template>
  <UPage>
    <UPageHero title="Pricing" />

    <UPageBody>
      <UContainer>
        <UPricingPlans :plans="plans" />
      </UContainer>
    </UPageBody>
  </UPage>
</template>
```

::note
이 예제에서는 `plans` 모듈에서 `queryCollection` 을 사용하여 가져오기됩니다.
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
