---
title: DropdownMenu (드롭 다운 메뉴)
description: 요소를 클릭할 때 동작을 표시하는 메뉴입니다.
category: overlay
keywords:
  - menu
  - context menu
  - actions
links:
  - label: DropdownMenu (드롭 다운 메뉴)
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/dropdown-menu
  - label: Github (GitHub)
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/DropdownMenu.vue
---

##  사용

[Button](/docs/components/button) 또는 DropdownMenu의 기본 슬롯에 있는 다른 구성 요소를 사용합니다.

::component-code
---
상품명 : True
축소: true
무시하기:
  -  items
  -  ui. content
외부:
  - items 항목
externalTypes:
  - DropdownMenuItem[] []
소품 :
  항목:
    -  - 레이블: 벤자민
        아바타 (Avatar):
          src: 'https://github.com/benjamincanac.png'
          로드: Lazy
        문자: 레이블
    -  - label: 프로필
        아이콘: i-lucide-user
      - label: 청구
        아이콘 : i-lucide-credit-card
      - label: 설정
        아이콘: i-lucide-cog
        kbds:
          - ','
      - label: 키보드 단축키
        아이콘: i-lucide-monitor
    -  - label: 팀
        아이콘 : i-lucide-users
        필터 :
          자리 표시자: "구성원 검색..."
        1차 하위 항목:
          -  - label: benjamincanac
              아바타 (Avatar):
                src: 'https://github.com/benjamincanac.png'
                로드: Lazy
            -  label: HugoRCD
              아바타 (Avatar):
                src: 'https://github.com/HugoRCD.png'
                로드: Lazy
            - label: atinux
              아바타 (Avatar):
                src: 'https://github.com/atinux.png'
                로드: Lazy
            -  label: romhml
              아바타 (Avatar):
                src: 'https://github.com/romhml.png'
                로드: Lazy
            - label: sandros94
              아바타 (Avatar) :
                src :   ' https ://github . com/sandros 94 . png '
                로드 : Lazy
            - label :   J - Michalek
              아바타 (Avatar) :
                src :   ' https ://github . com/J - Michalek . png '
                로드 : Lazy
            - label :   hywax
              아바타 (Avatar) :
                src :   ' https ://github . com/hywax . png '
                로드 : Lazy
      - label :   사용자   초대
        아이콘   :   i - lucide - user - plus
        1 차   하위   항목 :
          -   -   label :   이메일
              아이콘   :   i - lucide - mail
            - label :   메시지
              아이콘 :   i - lucide - message - square
          - label :   더   보 기
              아이콘 :   i - lucide - circle - plus
              1 차   하위   항목 :
                - label :   슬랙 에서   가져오 기
                  아이콘   :   i - simple - icons - slack
                  https ://  https ://slack.com'
                  target :   _ blank   대상
                - label: Trello에서 가져오기
                  아이콘: i-simple-icons-trello
                - label: Asana에서 가져오기
                  아이콘 : i-simple-icons-asana
      - label: 새로운 팀
        아이콘 : i-lucide-plus
        kbds:
          -  meta
          -  n
    -  - 레이블: GitHub
        아이콘 : i-simple-icons-github
        다음 주소: 'https://github.com/nuxt/ui'
        target: _blank 대상
      - label: 지원
        아이콘 : i-lucide-life-buyet
        to: '/docs/components/drop-down-menu'에 해당되는 글 1건
      -  label: API
        아이콘 : i-lucide-cloud
        사용 안 함:true
    -  - label: 로그아웃
        아이콘: i-lucide-로그아웃
        색상: 오류
        kbds:
          -  shift
          -  meta
          -  q
슬롯 :
  기본 값:|

    <UButton icon="i-lucide-menu" color="neutral" variant="outline" />
---

: u-button {icon="i-lucide-menu" color="neutral" variant="outline"}
::

###  프로젝트

`items`prop을 다음과 같은 속성을 가진 객체의 배열로 사용합니다.

-  @ `label?: string` @ {lang="ts-type"} @
-  @ `icon?: string` @ {lang="ts-type"}
- `avatar?: AvatarProps`{lang="ts-type"}
-  @ `kbds?: string[] | KbdProps[]` @ @ {lang="ts-type"}
-  @ [ @ @ `type?: "link" | "label" | "separator" | "checkbox"` @ {lang="ts-type"} @ ]( @ #with-checkbox-items @ ) @
- [`color?: "error" | "primary" | "secondary" | "success" | "info" | "warning" | "neutral"``color?: "error" | "primary" | "secondary" | "success" | "info" | "warning" | "neutral"`{lang="ts-type"}](#with-color-items )
-  [ @ `checked?: boolean` @ {lang="ts-type"} @ ]( @ #with-checkbox-items )
-  @ `disabled?: boolean` @ {lang="ts-type"} @
-  [ @ `slot?: string` @ {lang="ts-type"} @ ]( @ #with-custom-slot )
- `onSelect?: (e: Event) => void`{lang="ts-type"}
-  [ @ `onUpdateChecked?: (checked: boolean) => void` @ {lang="ts-type"} @ ]( @ #with-checkbox-items )
- `children?: DropdownMenuItem[] | DropdownMenuItem[][]`{lang="ts-type"}
- [`filter?: boolean | InputProps`{lang="ts-type"}](#with-filter-items)
- `filterFields?: string[]`{lang="ts-type"}
- `ignoreFilter?: boolean`{lang="ts-type"}
- `class?: any` {lang="ts-type"}
- `ui?: { item?: ClassNameValue, label?: ClassNameValue, separator?: ClassNameValue, itemLeadingIcon?: ClassNameValue, itemLeadingAvatarSize?: ClassNameValue, itemLeadingAvatar?: ClassNameValue, itemLabel?: ClassNameValue, itemLabelExternalIcon?: ClassNameValue, itemTrailing?: ClassNameValue, itemTrailingIcon?: ClassNameValue, itemTrailingKbds?: ClassNameValue, itemTrailingKbdsSize?: ClassNameValue }` {lang="ts-type"}

당신은 [Link](/docs/components/link#props) 구성 요소에서 모든 속성을 전달 할 수 있습니다 `to`, `target` 등.

::component-code
---
상품명 : True
축소: true
무시하기:
  - items 프로젝트
  -  ui. content
외부:
  -  items
externalTypes:
  - DropdownMenuItem[] [ ]
소품 :
  항목:
    -  - label: 벤자민
        아바타 (Avatar):
          src: 'https://github.com/benjamincanac.png'
          로드: Lazy
        문자: 레이블
    -  - label: 프로필
        아이콘: i-lucide-user
      - label: 청구
        아이콘 : i-lucide-credit-card
      - label: 설정
        아이콘 : i-lucide-cog
        kbds:
          - ', '
      - label: 키보드 단축키
        아이콘 :   i - lucide - monitor
    -   -   label :   팀
        아이콘   :   i - lucide - users
      - label :   사용자   초대
        아이콘   :   i - lucide - user - plus
        1 차   하위   항목 :
          -   -   label :   이메일
              아이콘   :   i - lucide - mail
            - label :   메시지
              아이콘 :   i - lucide - message - square
          -   -   label :   더   보 기
              아이콘 :   i - lucide - circle - plus
              1 차   하위   항목 :
                - label :   슬랙 에서   가져오 기
                  아이콘   :   i - simple - icons - slack
                  https ://  https ://slack.com'
                  target :   _ blank   대상
                - label :   Trello 에서   가져오 기
                  아이콘 :   i - simple - icons - trello
                - label :   Asana 에서   가져오 기
                  아이콘   :   i - simple - icons - asana
      - label :   새로운   팀
        아이콘   :   i - lucide - plus
        kbds :
          - meta
          -  n
    -  - 태그: GitHub
        아이콘 : i-simple-icons-github
        다음 주소: 'https://github.com/nuxt/ui'
        target: _blank 대상
      - label: 지원
        아이콘 : i-lucide-life-buyet
        to: '/docs/components/drop-down-menu'에 해당되는 글 1건
      - label: API
        아이콘 : i-lucide-cloud
        사용 안 함:true
    -  - label: 로그아웃
        아이콘: i-lucide-로그아웃
        kbds:
          -  shift
          -  meta
          -  q
  ui:
    모델 번호:w-48
슬롯 :
  기본 값:|

    <UButton icon="i-lucide-menu" color="neutral" variant="outline" />
---

: u 버튼 {icon="i-lucide-menu" color="neutral" variant="outline"}
::

::note
배열 배열을 `items`prop에 전달하여 개별 항목 그룹을 만들 수도 있습니다.
::

::tip
각 항목은 `items`prop과 같은 속성을 가진 `children` 배열을 사용하여 `open`, `defaultOpen` 및 `content` 속성을 사용하여 제어할 수 있는 중첩 메뉴를 만들 수 있습니다.
::

###  컨텐츠

`content`prop을 사용하여 DropdownMenu 콘텐츠가 렌더링되는 방식을 제어합니다(예: `align` 또는 `side` ).

::component-code
---
상품명 : True
축소: true
무시하기:
  -  items
  -  ui. content
외부:
  -  items
externalTypes:
  -  DropdownMenuItem []
프로젝트:
  content.align:
    -  start
    -  센터
    -  끝
  content.side:
    -  오른쪽
    -  왼쪽
    -  top
    -  아래
소품 :
  프로젝트:
    - label: 프로필
      아이콘: i-lucide-user
    - label: 청구
      아이콘 : i-lucide-credit-card
    - label: 설정
      아이콘 : i-lucide-cog
  컨텐츠:
    정렬: 시작
    면: 맨 아래
    사이드 오프셋: 8
  ui:
    모델 번호:w-48
슬롯 :
  기본값 :|

    <UButton label="Open" icon="i-lucide-menu" color="neutral" variant="outline" /> @
---

: u-button {label="Open" icon="i-lucide-menu" color="neutral" variant="outline"}
::

###  필터: badge {label="4.6+" class="align-text-top"}

`filter`prop을 사용하여 DropdownMenu 내부에 필터 입력을 표시합니다. 기본값은 `false`입니다.

::note{to="#with-ignore-filter"}
`ignore-filter`prop을 사용하여 내부 검색을 비활성화하고 자신의 검색 논리를 사용합니다.
::

::note{to="#with-filter-fields"}
`filter-fields`prop을 사용하여 필터링할 필드를 지정합니다. 기본적으로 `labelKey`prop을 사용합니다.
::

[Input](/docs/components/input) 구성 요소에서 임의의 속성을 전달하여 사용자 지정할 수 있습니다.

::component-code
---
상품명 : True
축소: true
무시하기:
  -  items
  -  filter. icon
  - content.align - content.align
  -  ui. content
외부:
  -  items
externalTypes:
  -  DropdownMenuItem []
소품 :
  필터 :
    아이콘 : i-lucide-search
  프로젝트:
    - label: 프로필
      아이콘: i-lucide-user
    - label: 청구
      아이콘 : i-lucide-credit-card
    - label: 설정
      아이콘 : i-lucide-cog
    - label: 팀
      아이콘: i-lucide-users
    - label: 사용자 초대
      아이콘: i-lucide-user-plus
    - label: 새로운 팀
      아이콘: i-lucide-plus
  컨텐츠:
    정렬: 시작
  ui:
    모델 번호:w-48
슬롯 :
  기본 값:|

    <UButton label="Open" icon="i-lucide-menu" color="neutral" variant="outline" />
---

: u-button {label="Open" icon="i-lucide-menu" color="neutral" variant="outline"}
::

::tip{to="#with-filter-items"}
또한 `children`가 있는 항목의 `filter` 필드를 사용하여 특정 하위 메뉴에서 필터를 활성화할 수도 있습니다.
::

### Arrow 이미지

`arrow`prop 을 사용하여 DropdownMenu 에 화살표를 표시합니다.

::component-code
---
상품명 : True
축소: true
무시하기:
  -  arrow
  -  items
  -  ui. content
외부:
  -  items
externalTypes:
  -  DropdownMenuItem []
소품 :
  화살표: True
  항목:
    - label: 프로필
      아이콘: i-lucide-user
    - label: 청구
      아이콘 : i-lucide-credit-card
    - label: 설정
      아이콘 : i-lucide-cog
  ui:
    모델 번호:w-48
슬롯 :
  기본값 :|

    <UButton label="Open" icon="i-lucide-menu" color="neutral" variant="outline" />
---

: u-button{label="Open" icon="i-lucide-menu" color="neutral" variant="outline"}
::

###  크기

`size`prop을 사용하여 DropdownMenu의 크기를 제어합니다.

::component-code
---
상품명 : True
축소: true
무시하기:
  -  items
  -  content. align
  -  ui. content
외부:
  -  items
externalTypes:
  -  DropdownMenuItem []
소품 :
  크기: xl
  항목:
    - label: 프로필
      아이콘: i-lucide-user
    - label: 청구
      아이콘 : i-lucide-credit-card
    - label: 설정
      아이콘 : i-lucide-cog
  컨텐츠 :
    정렬: 시작
  ui:
    모델 번호:w-48
슬롯 :
  기본값 :|

    <UButton size="xl" label="Open" icon="i-lucide-menu" color="neutral" variant="outline" />
---

: u 버튼 {size="xl" label="Open" icon="i-lucide-menu" color="neutral" variant="outline"}
::

::warning
`size`prop은 버튼에 프록시되지 않으므로 직접 설정해야 합니다.
::

::note
같은 크기를 사용하는 경우 DropdownMenu 항목이 Button과 완벽하게 정렬됩니다.
::

### Modal @ 모달

DropdownMenu가 외부 콘텐츠와의 상호 작용을 차단할지 여부를 제어하려면 `modal`prop을 사용합니다. 기본값은 `true`입니다.

::component-code
---
상품명 : True
축소: true
무시하기:
  -  items
  -  ui. content
외부:
  -  items
externalTypes:
  -  DropdownMenuItem []
소품 :
  모달: false
  프로젝트:
    - label: 프로필
      아이콘: i-lucide-user
    - label: 청구
      아이콘 : i-lucide-credit-card
    - label: 설정
      아이콘 : i-lucide-cog
  ui:
    모델 번호:w-48
슬롯 :
  기본값 :|

    <UButton label="Open" icon="i-lucide-menu" color="neutral" variant="outline" /> @
---

: u-button {label="Open" icon="i-lucide-menu" color="neutral" variant="outline"}
::

###  비활성 화

`disabled`prop을 사용하여 DropdownMenu를 비활성화합니다.

::component-code
---
상품명 : True
축소: true
무시하기:
  -  items
  -  ui. content
외부:
  -  items
externalTypes:
  -  DropdownMenuItem []
소품 :
  사용 안 함:true
  프로젝트:
    - label: 프로필
      아이콘: i-lucide-user
    - label: 청구
      아이콘 : i-lucide-credit-card
    - label: 설정
      아이콘 : i-lucide-cog
  ui:
    모델 번호:w-48
슬롯 :
  기본 값:|

    <UButton label="Open" icon="i-lucide-menu" color="neutral" variant="outline" /> @
---

: u-button {label="Open" icon="i-lucide-menu" color="neutral" variant="outline"}
::

##  예

### 체크박스 항목 포함

`type` 등록 정보를 `checkbox`와 함께 사용하고 `checked`/`onUpdateChecked` 등록 정보를 사용하여 항목의 체크 상태를 제어할 수 있습니다.

::component-example
---
축소: true
이름: 'drop-down-menu-checkbox-items-example'
---
::

::note
항목의 `checked` 상태에 대한 반응성을 보장하려면 `items` 배열을 `computed` 내에 래핑하는 것이 좋습니다.
::

###  컬러 아이템 포함

`color` 속성을 사용하여 특정 항목을 색상으로 강조 표시할 수 있습니다.

::component-example
---
축소: true
이름: 'dropdown-menu-color-items-example'
---
::

###  필터 항목 포함: badge{label="4.6+" class="align-text-top"}

`children`가 있는 항목에 `filter` 속성을 사용하여 하위 메뉴 내에 필터 입력을 표시할 수 있습니다.

::component-example
---
축소: true
이름: 'drop-down-menu-filter-items-example'
---
::

###  열린 상태 제어

`default-open`prop 또는 `v-model:open` 지시문을 사용하여 열린 상태를 제어할 수 있습니다.

::component-example
---
축소: true
이름: 'drop-down-menu-open-example'
---
::

::note
이 예에서는 [`defineShortcuts`](/docs/composables/define-shortcuts)를 사용하여 kbd{value="O"}를 눌러 DropdownMenu를 전환할 수 있습니다.
::

### 사용자 지정 슬롯 포함

`slot` 등록 정보를 사용하여 특정 항목을 사용자 정의합니다.

다음과 같은 슬롯에 액세스할 수 있습니다.

- `#{{ item.slot }}`{lang="ts-type"}
- `#{{ item.slot }}-leading`{lang="ts-type"}
- `#{{ item.slot }}-label`{lang="ts-type"}
- `#{{ item.slot }}-trailing`{lang="ts-type"}

::component-example
---
축소: true
이름: 'drop-down-menu-custom-slot-example'
---
::

::tip{to="#slots"}
또한 `#item``#item-leading``#item-label` 및 `#item-trailing` 슬롯을 사용하여 모든 항목을 사용자 지정할 수 있습니다.
::

###  항목에 스위치가 있음

`slot` 속성을 `#{{ slot }}-trailing` 슬롯과 함께 사용하여 [Switch](/docs/components/switch)를 항목 내부에 렌더링할 수 있습니다.

::component-example
---
축소: true
이름: 'drop-down-menu-switch-items-example'
---
::

###  무시 필터와 함께: badge{label="4.6+" class="align-text-top"}

`children`가 있는 항목에 `filter`prop 또는 `filter` 필드를 사용할 때 `ignore-filter`prop을 `true`로 설정하여 내부 검색을 비활성화하고 자체 검색 논리를 사용할 수 있습니다.

::component-example
---
축소: true
이름: 'drop-down-menu-ignore-filter-example'
---
::

::note
이 예에서는 [`refDebounced`](https://vueuse.org/shared/refDebounced/#refdebounced)를 사용하여 API 호출을 토론합니다. 검색은 `immediate: false`로 연기되므로 메뉴가 열릴 때까지 요청이 없습니다.
::

### 필터 필드 포함: badge{label="4.6+" class="align-text-top"}

`children`가 있는 항목에 `filter`prop 또는 `filter` 필드를 사용할 때, 필터링할 필드 배열을 사용하여 `filter-fields`prop을 설정할 수 있습니다. 기본값은 `[labelKey]`입니다.

::component-example
---
축소: true
이름: 'drop-down-menu-filter-fields-example'
---
::

### 트리거 콘텐츠 너비 포함

`ui.content` 슬롯에 `w-(--reka-dropdown-menu-trigger-width)` 클래스를 추가하여 콘텐츠를 단추의 전체 너비로 확장할 수 있습니다.

::component-example
---
축소: true
이름: 'dropdown-menu-content-width-example'
---
::

::tip
또한 `app.config.ts`에서 전체적으로 콘텐츠 너비를 변경할 수 있습니다.

```
export default defineAppConfig({
  ui: {
    dropdownMenu: {
      slots: {
        content: 'w-(--reka-dropdown-menu-trigger-width)'
      }
    }
  }
})
```
::

###  바로 가기 추출

[extractShortcuts](/docs/composables/extract-shortcuts) 유틸리티를 사용하여 `kbds` 등록 정보가 있는 메뉴 항목에서 바로 가기를 자동으로 정의합니다. 바로 가기를 재귀적으로 추출하여 @@defineShortcuts](/docs/composables/define-shortcuts ) 호환 객체를 반환합니다.

```vue
<script setup lang="ts">
import type { DropdownMenuItem } from '@nuxt/ui'

const items: DropdownMenuItem[] = [{
  label: 'Invite users',
  icon: 'i-lucide-user-plus',
  children: [{
    label: 'Invite by email',
    icon: 'i-lucide-send-horizontal',
    kbds: ['meta', 'e'],
    onSelect() {
      console.log('Invite by email clicked')
    }
  }, {
    label: 'Invite by link',
    icon: 'i-lucide-link',
    kbds: ['meta', 'i'],
    onSelect() {
      console.log('Invite by link clicked')
    }
  }]
}, {
  label: 'New team',
  icon: 'i-lucide-plus',
  kbds: ['meta', 'n'],
  onSelect() {
    console.log('New team clicked')
  }
}]

defineShortcuts(extractShortcuts(items))
</script>
```

::note
이 예에서는 :kbd{value="meta"}:kbd{value="E" class="ms-px"}, :kbd{value="meta"} 및 :kbd{value="meta"}:kbd{value="N" class="ms-px"} 은 해당 항목의 `select` 함수를 트리거합니다.
::

##  API

###  Props

:컴포넌트 - 소품

###  슬롯

:컴포넌트 - 슬롯

###  에미츠

:구성요소 - 방출

##  테마

:구성요소 주제

##  Changelog

:component-changelog 구성요소 변경 로그
