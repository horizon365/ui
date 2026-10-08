---
description: 내용의 가시성을 전환하는 축소 가능한 요소입니다.
category: element
keywords:
  - disclosure
  - expand
links:
  - label: 축소 가능
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/collapsible
  - label: Github (GitHub)
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Collapsible.vue
---

##  사용

[Button](/docs/components/button) 또는 Collapsible의 기본 슬롯에 있는 다른 구성 요소를 사용합니다.

그런 다음 `#content`슬롯을 사용하여 Collapsible이 열려 있을 때 표시되는 내용을 추가합니다.

::component-code
---
상품명 : True
무시하기:
  -  클래스
소품 :
  클래스: 'flex-col gap - 2 w-48'
슬롯 :
  기본값 :|

    <UButton label="Open" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-down" block />

  컨텐츠 :|

    <Placeholder class="h-48" />
---

: u-button {label="Open" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-down" block}

#content 내용
: placeholder{class="h-48"}
::

### 마운트 해제

Collapsible이 축소될 때 컨텐츠가 마운트 해제되지 않도록 하려면 `unmount-on-hide`prop을 사용합니다. 기본값은 `true`입니다.

::component-code
---
상품명 : True
무시하기:
  -  클래스
소품 :
  unmountOnHide : false
  클래스: 'flex-col gap - 2 w-48'
슬롯 :
  기본 값:|

    <UButton label="Open" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-down" block />

  컨텐츠 :|

    <Placeholder class="h-48" />
---

: u-button {label="Open" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-down" block}

#content 내용
: placeholder{class="h-48"}
::

::note
DOM을 검사하여 렌더링되는 콘텐츠를 볼 수 있습니다.
::

###  비활성 화

`disabled`prop 을 사용하여 Collapsible 을 비활성화합니다.

::component-code
---
상품명 : True
무시하기:
  -  class
소품 :
  클래스: 'flex-col gap - 2 w-48'
  사용 안 함:true
슬롯 :
  기본 값:|

    <UButton label="Open" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-down" block />

  컨텐츠 :|

    <Placeholder class="h-48" />
---

: u-button {label="Open" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-down" block}

#content 내용
: placeholder{class="h-48"}
::

##  예제

###  열린 상태 제어

`default-open`prop 또는 `v-model:open` 지시문을 사용하여 열린 상태를 제어할 수 있습니다.

::component-example
---
'collapsible-open-example' 이라는 표현이 있습니다.
---
::

::note
이 예에서는 [`defineShortcuts`](/docs/composables/define-shortcuts)를 사용하여 Collapsible을 전환할 수 있습니다. kbd{value="O"} 키를 눌러 Collapsible을 전환할 수 있습니다.
::

::tip
이렇게 하면 트리거를 축소 가능 밖으로 이동하거나 완전히 제거할 수 있습니다.
::

### 회전 아이콘

다음은 축소 가능의 열린 상태를 나타내는 단추에 회전 아이콘이 있는 예입니다.

::component-example
---
이름: "collapsible-icon-example"
---
::

##  API

### Props 이미지

:컴포넌트 - 소품

###  슬롯

:구성요소 - 슬롯

###  Emits

:구성요소 - 방출

##  테마

:구성요소 - 주제

##  Changelog

:component-changelog 구성요소 변경 로그
