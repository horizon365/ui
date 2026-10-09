---
title: PageGrid (페이지그리드)
description: '유연한 레이아웃으로 콘텐츠를 표시하기 위한 반응형 그리드 시스템'
category: page
links:
  - label: Github (GitHub)
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/PageGrid.vue
---

## Usage

PageGrid 구성 요소는 [PageCard](/docs/components/page-card) 구성 요소 또는 다른 요소를 표시하는 응답형 격자 레이아웃을 제공하며 화면 크기에 따라 1-3열을 자동으로 조정합니다.

::component-example
---
name: 'page-grid-example'
class: 'p-8'
---
::

또한 `col-span-*` 및 `row-span-*` 유틸리티 클래스를 사용하여 bento 스타일 레이아웃에 카드 리스트를 표시할 수도 있습니다.

::component-example
---
collapse: true
name: 'page-grid-bento-example'
class: 'p-8'
---
::

## API

### Props 코드 코드

:component-props

### Slots

:component-slots

## Theme 테마

:component-theme

## 변경 로그

:component-changelog
