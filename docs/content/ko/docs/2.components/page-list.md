---
title: PageList 페이지목록
description: '컨텐츠를 스택 형식으로 표시하는 수직 리스트 레이아웃입니다.'
category: page
links:
  - label: Github (GitHub)
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/PageList.vue
---

## Usage

PageList 구성 요소는 세로 목록 레이아웃에 내용을 표시하는 유연한 방법을 제공합니다. [PageCard](/docs/components/page-card) 구성 요소 또는 항목 간에 선택적으로 나누기가 있는 다른 요소의 스택 목록을 만드는 데 적합합니다.

::component-example
---
collapse: true
name: 'page-list-example'
props:
  class: 'w-full'
---
::

### Divide 분할

`divide` prop을 사용하여 각 자식 요소 사이에 구분선을 추가합니다.

::component-example
---
collapse: true
name: 'page-list-divide-example'
props:
  class: 'w-full'
---
::

## API

### Props (### Props)

:component-props

### Slots

:component-slots

## Theme 테마

:component-theme

## 변경 로그

:component-changelog
