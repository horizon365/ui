---
description: 페이지를 탐색할 단추 또는 링크 목록입니다.
category: navigation
keywords:
  - pager
  - page navigation
links:
  - label: 페이지 매김
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/pagination
  - label: Github (GitHub)
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Pagination.vue
---

##  사용

`default-page`prop 또는 `v-model:page` 지시문을 사용하여 현재 페이지를 제어합니다.

::component-code
---
외부:
  -  페이지
모델 :
  -  페이지
무시하기:
  -  페이지
  -  전체
소품 :
  페이지 : 5
  전체 : 100
---
::

::note
페이징 구성 요소는 일부 [`Button`](/docs/components/button)를 사용하여 페이지를 표시합니다. [`color`](#color)[`variant`](#variant) 및 [`size`](#size)props 스타일을 지정하여 스타일을 지정합니다.
::

###  전체

`total`prop을 사용하여 목록에 있는 항목의 총 수를 설정합니다.

::component-code
---
외부:
  -  페이지
모델 :
  -  페이지
소품 :
  페이지 : 5
  전체 : 100
---
::

###  페이지당 항목

`items-per-page`prop 을 사용하여 페이지당 항목 수를 설정합니다. 기본값은 `10`입니다.

::component-code
---
무시하기:
  -  페이지
외부:
  -  페이지
모델:
  -  페이지
소품 :
  페이지 : 5
  itemsPerPage: 20 개의 항목
  전체 : 100
---
::

###  형제 수

`sibling-count`prop 을 사용하여 표시할 형제 수를 설정합니다. 기본값은 `2`입니다.

::component-code
---
무시하기:
  -  페이지
  -  전체
외부:
  -  페이지
모델 :
  -  페이지
소품 :
  페이지 : 5
  siblingCount : 1 개의 항목
  전체 : 100
---
::

###  가장자리 표시

`show-edges`prop을 사용하여 항상 줄임표, 첫 페이지와 마지막 페이지를 표시합니다. 기본값은 `false`입니다.

::component-code
---
무시하기:
  -  페이지
  -  전체
외부:
  -  페이지
모델 :
  -  페이지
소품 :
  페이지 : 5
  showEdges : true
  siblingCount : 1 개의 항목
  전체 : 100
---
::

### 컨트롤 표시

`show-controls`prop을 사용하여 첫 번째, prev, 다음 및 마지막 단추를 표시합니다. 기본값은 `true`입니다.

::component-code
---
무시하기:
  -  페이지
  -  전체
외부:
  -  페이지
모델 :
  -  페이지
소품 :
  페이지 : 5
  showControls : false
  showEdges : true
  전체 : 100
---
::

###  색상

`color`prop 을 사용하여 비활성 컨트롤의 색상을 설정합니다. 기본값은 `neutral`입니다.

::component-code
---
무시하기:
  -  페이지
  -  전체
외부:
  -  페이지
모델:
  -  페이지
프로젝트:
  색상 :
    -  기본
    -  secondary
    -  성공
    -  info
    -  경고
    -  오류
    -  neutral
소품 :
  페이지 : 5
  색상: 기본
  전체 : 100
---
::

###  Variant

`variant`prop 을 사용하여 비활성 컨트롤의 변형을 설정합니다. 기본값은 `outline`입니다.

::component-code
---
무시하기:
  -  페이지
  -  전체
외부:
  -  페이지
모델 :
  -  페이지
프로젝트:
  색상 :
    -  기본
    -  secondary
    -  성공
    -  info
    -  경고
    -  오류
    -  neutral
  변형:
    -  solid
    -  개요
    -  soft
    - subtle @ 미묘한
    -  ghost
    -  link
소품 :
  페이지 : 5
  색상: 중립
  변형: 미묘한
  전체 : 100
---
::

### 활성 색상

`active-color`prop을 사용하여 활성 컨트롤의 색상을 설정합니다. 기본값은 `primary`입니다.

::component-code
---
무시하기:
  -  페이지
  -  전체
외부:
  -  페이지
모델:
  -  페이지
프로젝트:
  activeColor :
    -  기본
    -  secondary
    -  성공
    -  info
    -  경고
    -  오류
    -  neutral
소품 :
  페이지 : 5
  activeColor : 중립
  전체 : 100
---
::

### 활성 변형

`active-variant`prop 을 사용하여 활성 컨트롤의 변형을 설정합니다. 기본값은 `solid`입니다.

::component-code
---
무시하기:
  -  페이지
  -  전체
외부:
  -  page
모델:
  -  페이지
프로젝트:
  activeColor :
    -  primary
    -  secondary
    -  성공
    -  info
    -  경고
    -  오류
    -  neutral
  activeVariant:
    -  solid
    -  outline
    -  soft
    - subtle @ 미묘한
    -  ghost
    -  link
소품 :
  페이지 : 5
  activeColor: 기본
  activeVariant: 미묘한
  전체 : 100
---
::

###  사이즈

`size`prop을 사용하여 컨트롤 크기를 설정합니다. 기본값은 `md`입니다.

::component-code
---
무시하기:
  -  페이지
  -  전체
외부:
  -  페이지
모델 :
  -  페이지
프로젝트:
  크기 (Size):
    -  xs
    -  sm
    -  md
    -  lg
    -  xl
소품 :
  페이지 : 5
  크기: xl
  전체 : 100
---
::

###  비활성 화

`disabled`prop 을 사용하여 페이지 매김 컨트롤을 비활성화합니다.

::component-code
---
무시하기:
  -  페이지
  -  전체
외부:
  -  페이지
모델 :
  -  페이지
소품 :
  페이지 : 5
  전체 : 100
  사용 안 함:true
---
::

##  예

###  링크

`to`prop을 사용하여 단추를 링크로 변환합니다. 페이지 번호를 받고 경로 목적지를 반환하는 함수를 전달합니다.

::component-example
---
이름: 'pagination-links-example'
---
::

::note
이 예제에서는 `#with-links`해시를 추가하여 페이지의 맨 위로 이동하지 않도록 합니다.
::

##  API

###  Props

:컴포넌트 - 소품

###  슬롯

:컴포넌트 - 슬롯

###  에미츠

:구성요소 - 방사

##  테마

:구성요소 주제

##  Changelog

:component-changelog 구성요소 변경 로그
