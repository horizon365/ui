---
description: 한 번에 하나씩 표시되는 탭 패널 세트입니다.
category: navigation
keywords:
  - tabbed
  - panels
  - sections
links:
  - label: 탭 탭
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/tabs
  - label: Github (GitHub)
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Tabs.vue
---

##  사용

탭 구성 요소를 사용하여 탭에 항목 목록을 표시합니다.

::component-example
---
축소: true
상품명 : True
이름: 'tabs-example'
소품 :
  클래스 : 'w-full'
---
::

###  프로젝트

`items`prop을 다음과 같은 속성을 가진 객체의 배열로 사용합니다.

- `label?: string`{lang="ts-type"}
- `icon?: string`{lang="ts-type"}
- `avatar?: AvatarProps` {lang="ts-type"}
- `badge?: string | number | BadgeProps`{lang="ts-type"}
-  @ `content?: string` @ @ {lang="ts-type"}
- `value?: string | number`{lang="ts-type"} @
-  @ `disabled?: boolean` @ @ {lang="ts-type"} @
-  @ [ @ @ `slot?: string` @ {lang="ts-type"} @ ]( @ #with-custom-slot @ ) @
- `class?: any`{lang="ts-type"}
- `ui?: { trigger?: ClassNameValue, leadingIcon?: ClassNameValue, leadingAvatar?: ClassNameValue, leadingAvatarSize?: ClassNameValue, label?: ClassNameValue, trailingBadge?: ClassNameValue, trailingBadgeSize?: ClassNameValue, content?: ClassNameValue }`{lang="ts-type"}

::component-code
---
무시하기:
  -  items
  -  클래스
외부:
  -  items
externalTypes:
  -  TabsItem []
소품 :
  프로젝트:
    - label: 계정
      아이콘: i-lucide-user
      내용: "이것은 계정 내용입니다."
    - label: 비밀번호
      아이콘: i-lucide-lock
      내용: "이것은 암호 내용입니다."
  클래스 : 'w-full'
---
::

###  컨텐츠

`content`prop을 `false`로 설정하면 패널 없이 트리거를 렌더링할 수 있습니다. 기본값은 `true`입니다.

::component-code
---
무시하기:
  -  content
  -  items
  -  클래스
외부:
  - items 프로젝트
externalTypes:
  -  TabsItem []
소품 :
  내용: false
  프로젝트:
    - label: 계정
      아이콘: i-lucide-user
      내용: "이것은 계정 내용입니다."
    - label: 비밀번호
      아이콘: i-lucide-lock
      내용: "이것은 암호 내용입니다."
  클래스: 'w-full'
---
::

### 마운트 해제

탭이 축소될 때 컨텐츠가 마운트 해제되지 않도록 하려면 `unmount-on-hide`prop을 사용합니다. 기본값은 `true`입니다.

::component-code
---
무시하기:
  -  content
  -  items
  -  클래스
외부:
  -  items
externalTypes:
  -  TabsItem []
소품 :
  unmountOnHide : false
  항목:
    - label: 계정
      아이콘: i-lucide-user
      내용: "이것은 계정 내용입니다."
    - label: 비밀번호
      아이콘: i-lucide-lock
      내용: "이것은 암호 내용입니다."
  클래스: 'w-full'
---
::

::note
DOM을 검사하여 각 항목의 콘텐츠가 렌더링되고 있는지 확인할 수 있습니다.
::

###  색상

`color`prop을 사용하여 탭의 색상을 변경합니다.

::component-code
---
무시하기:
  -  content
  -  items
  -  클래스
외부:
  -  items
externalTypes:
  -  TabsItem []
소품 :
  색상: 중립
  내용: false
  프로젝트:
    - label: 계정
    - label: 비밀번호
  클래스: 'w-full'
---
::

###  변형

`variant`prop 을 사용하여 탭의 변형을 변경합니다.

::component-code
---
무시하기:
  -  content
  -  items
  -  클래스
외부:
  -  items
externalTypes:
  -  TabsItem []
소품 :
  색상: 중립
  변형: 링크
  내용: false
  프로젝트:
    - label: 계정
    - label: 비밀번호
  클래스 : 'w-full'
---
::

###  크기

`size`prop을 사용하여 탭의 크기를 변경합니다.

::component-code
---
무시하기:
  -  content
  -  items
  -  클래스
외부:
  -  items
externalTypes:
  -  TabsItem []
소품 :
  크기: MD
  변형: 알약
  내용: false
  항목:
    - label: 계정
    - label: 비밀번호
  클래스 : 'w-full'
---
::

###  방향

`orientation`prop을 사용하여 탭의 방향을 변경합니다. 기본값은 `horizontal`로 설정됩니다.

::component-code
---
무시하기:
  -  content
  -  items
  -  클래스
외부:
  -  items
externalTypes:
  -  TabsItem []
소품 :
  방향: 세로
  변형: 알약
  내용: 거짓
  프로젝트:
    - label: 계정
    - label: 비밀번호
  클래스: 'w-full'
---
::

##  예제

###  활성 항목 제어

활성 항목은 `default-value`prop 또는 `value`와 함께 `v-model` 지시문을 사용하여 제어할 수 있습니다. `value`가 제공되지 않은 경우 기본적으로 인덱스 **가 문자열 **로 지정됩니다.

:component-example {name="tabs-model-value-example"}

::tip
`value-key`prop을 사용하여 `v-model` 또는 `default-value` 가 제공될 때 항목을 일치시키는 키를 변경합니다.
::

###  경로 조회

URL 쿼리 매개 변수로 활성 항목을 제어할 수 있습니다. `route.query.tab`를 항목의 `value`로 사용합니다.

:component-example {name="tabs-route-query-example"}

###  콘텐츠 슬롯 포함

`#content`슬롯을 사용하여 각 항목의 콘텐츠를 사용자 정의합니다.

:component-example {name="tabs-content-slot-example"}

###  하단 탭 표시줄 포함

`ui`prop을 사용하여 탭을 YouTube 또는 Instagram과 유사한 아이콘과 작은 레이블이있는 모바일 스타일의 하단 탭 표시줄로 변환합니다.

::component-example
---
축소: true
이름: 'tabs-bottom-tab-bar-example'
---
::

### 사용자 지정 슬롯 포함

`slot` 속성을 사용하여 특정 항목을 사용자 정의합니다.

다음과 같은 슬롯에 액세스할 수 있습니다.

-  @ `#{{ item.slot }}` @ @ {lang="ts-type"} @

::component-example
---
축소: true
이름: 'tabs-custom-slot-example'
---
::

##  API

###  Props

:컴포넌트 - 소품

###  슬롯

:구성요소 - 슬롯

###  에미츠

:구성요소 - 방사

###  노출

템플릿 참조를 통해 컴포넌트에 액세스하는 경우 다음을 사용할 수 있습니다.

| 이름 (Name)| 유형 (Type)|
| ---- | ---- |
| `triggersRef`{lang="ts-type"}| `Ref<ComponentPublicInstance[]>`{lang="ts-type"}|

##  테마

:구성요소 - 주제

##  Changelog

:component-changelog 구성요소 변경 로그
