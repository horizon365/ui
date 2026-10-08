---
title: ChatPalette 대화상자
description: '오버레이 내부에 챗봇 인터페이스를 만드는 채팅 팔레트입니다.'
category: chat
links:
  - label: Github (GitHub)
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/ChatPalette.vue
---

##  사용

ChatPalette 구성 요소는 스크롤 가능한 콘텐츠 영역에 [ChatMessages@@PH02/docs/components/chat-messages)를 구성하고 [ChatPrompt](/docs/components/chat-promptPH08@@를 고정된 하단 섹션에 구성하는 구조화된 레이아웃 드로어입니다.

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

##  예

::tip{to="/docs/components/chat"}
**Chat**개요 페이지에서 설치 지침, 서버 설정 및 사용 예를 확인하십시오.
::

### Within a Modal (한 모드에서)

ChatPalette 구성 요소는 [Modal](/docs/components/modal)의 콘텐츠 내에서 사용할 수 있습니다.

::component-example
---
축소: true
iframe :
  높이 : 500px;
iframeMobile : true (iframeMobile)
overflowHidden: true
이름 : 'chat-palette-modal-example'
---
::

### Within ContentSearch 검색

ChatPalette 구성 요소를 조건부로 [ContentSearch](/docs/components/content-search)의 콘텐츠 내에서 사용하여 사용자가 항목을 선택할 때 챗봇 인터페이스를 표시할 수 있습니다.

::component-example
---
축소: true
iframe :
  높이 : 500px;
iframeMobile : true
overflowHidden: true
이름 : 'chat-palette-content-search-example'
---
::


##  API

### Props 이미지

:컴포넌트 - 소품

###  슬롯

:컴포넌트 - 슬롯

##  테마

:구성요소 - 주제

##  Changelog

:component-changelog 구성요소 변경 로그
