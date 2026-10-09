---
title: ChatPalette 대화
description: '오버레이 내부에 챗봇 인터페이스를 만드는 채팅 팔레트입니다.'
category: chat
links:
  - label: Github (GitHub)
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/ChatPalette.vue
---

## Usage

ChatPalette 구성 요소는 스크롤 가능한 콘텐츠 영역에 [ChatMessages](xph03x)를 구성하고 [ChatPrompt](/docs/components/chat-promptph08x를 고정된 하단 섹션에 구성하여 Modals, Slideover 또는 서랍에 대한 응집력있는 챗봇 인터페이스를 만듭니다.

```vue{2,8}
<template>
  <UChatPalette>
    <UChatMessages />

    <template #prompt>
      <UChatPrompt />
    </template>
  </UChatPalette>
</template>
```

## 예

::tip{to="/docs/components/chat"}
**Chat** 개요 페이지에서 설치 지침, 서버 설정 및 사용 예를 확인하십시오.
::

### within a modal 모드 안에서

[Modal](/docs/components/modal)의 콘텐츠 내에서 ChatPalette 구성 요소를 사용할 수 있습니다.

::component-example
---
collapse: true
iframe:
  height: 500px;
iframeMobile: true
overflowHidden: true
name: 'chat-palette-modal-example'
---
::

### Within ContentSearch 검색

[ContentSearch](/docs/components/content-search) 콘텐츠 내에서 ChatPalette 구성 요소를 조건부로 사용하여 사용자가 항목을 선택할 때 챗봇 인터페이스를 표시할 수 있습니다.

::component-example
---
collapse: true
iframe:
  height: 500px;
iframeMobile: true
overflowHidden: true
name: 'chat-palette-content-search-example'
---
::


## API

### Props (### Props)

:component-props

### Slots

:component-slots

## Theme (## 테마)

:component-theme

## 변경 로그

:component-changelog
