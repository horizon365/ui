---
title: ContextMenu (컨텍스트메뉴)
description: 요소를 마우스 오른쪽 버튼으로 클릭할 때 동작을 표시하는 메뉴입니다.
category: overlay
keywords:
  - right click menu
links:
  - label: ContextMenu (컨텍스트메뉴)
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/context-menu
  - label: Github (GitHub)
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/ContextMenu.vue
---

##  사용

ContextMenu의 기본 슬롯에서 원하는 것을 사용하고 마우스 오른쪽 버튼을 클릭하여 메뉴를 표시합니다.

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
  - ContextMenuItem[] []
소품 :
  항목:
    -  - label: 모양
        1차 하위 항목:
          - label: 시스템
            아이콘: i-lucide-monitor
          - label: 빛
            아이콘 : i-lucide-sun
          - label: 어두운
            아이콘 : i-lucide-moon
    -  - label: 사이드바 표시
        kbds :
          -  meta
          -  s
      - label: 도구 모음 표시
        kbds :
          -  shift
          -  meta
          -  d
      - label: 핀 탭 축소
        사용 안 함:true
    - label: 페이지 새로 고침
      - label: 쿠키 삭제 및 새로 고침
      - label: 캐시 지우기 및 새로 고침
      - type: 구분 기호
      - label: 개발자
        1차 하위 항목:
          -  - label: 출처 보기
              kbds:
                -  meta
                -  shift
                -  u
            - label: 개발자 도구
              kbds:
                -  옵션
                -  meta
                -  i
            - label: 요소 검사
              kbds:
                -  옵션
                -  meta
                -  c
          -  - label: JavaScript 콘솔
              kbds:
                -  옵션
                -  meta
                -  j
슬롯 :
  기본값 :|

    <div class="flex items-center justify-center rounded-md border border-dashed border-accented text-sm aspect-video w-72">
      여기를 마우스 오른쪽 단추로 클릭합니다.
    </div>
---

: div{class="flex items-center justify-center rounded-md border border-dashed border-accented text-sm aspect-video w-72"} [여기를 오른쪽 클릭]
::

###  프로젝트

`items`prop을 다음과 같은 속성을 가진 객체의 배열로 사용합니다.

-  @ `label?: string` @ {lang="ts-type"}
-  @ `icon?: string` @ {lang="ts-type"}
- `avatar?: AvatarProps` {lang="ts-type"}
- `kbds?: string[] | KbdProps[]`{lang="ts-type"}
-  @ [ @ @ `type?: "link" | "label" | "separator" | "checkbox"` @ {lang="ts-type"} @ ]( @ #with-checkbox-items @ )
-  @ [ @ @ `color?: "error" | "primary" | "secondary" | "success" | "info" | "warning" | "neutral"` @ ]( @ #with-color-items @ ) @
-  [ @ `checked?: boolean` @ {lang="ts-type"} @ ]( @ #with-checkbox-items ) @
-  @ `disabled?: boolean` @ {lang="ts-type"} @
-  [ @ `slot?: string` @ {lang="ts-type"} @ ]( @ #with-custom-slot @ )
- `onSelect?: (e: Event) => void`{lang="ts-type"}
-  [ @ `onUpdateChecked?: (checked: boolean) => void` @ {lang="ts-type"} @ ]( @ #with-checkbox-items ) @
- `children?: ContextMenuItem[] | ContextMenuItem[][]`{lang="ts-type"}
- `class?: any` {lang="ts-type"}
- `ui?: { item?: ClassNameValue, label?: ClassNameValue, separator?: ClassNameValue, itemLeadingIcon?: ClassNameValue, itemLeadingAvatarSize?: ClassNameValue, itemLeadingAvatar?: ClassNameValue, itemLabel?: ClassNameValue, itemLabelExternalIcon?: ClassNameValue, itemTrailing?: ClassNameValue, itemTrailingIcon?: ClassNameValue, itemTrailingKbds?: ClassNameValue, itemTrailingKbdsSize?: ClassNameValue }`{lang="ts-type"}

당신은 [Link](/docs/components/link#props) 구성 요소에서 모든 속성을 전달 할 수 있습니다 `to`, `target` 등.

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
  - ContextMenuItem[] []
소품 :
  항목:
    -  - label: 모양
        1차 하위 항목:
          - label: 시스템
            아이콘: i-lucide-monitor
          - label: 빛
            아이콘 : i-lucide-sun
          - label: 어두운
            아이콘 : i-lucide-moon
    -  - label: 사이드바 표시
        kbds:
          -  meta
          -  s
      - label: 도구 모음 표시
        kbds:
          -  shift
          -  meta
          -  d
      - label: 핀 탭 축소
        사용 안 함:true
    - label: 페이지 새로 고침
      - label: 쿠키 삭제 및 새로 고침
      - label: 캐시 지우기 및 새로 고침
      - type: 구분 기호
      - label: 개발자
        1차 하위 항목:
          -  - label: 출처 보기
              kbds:
                -  meta
                -  shift
                -  u
            - label: 개발자 도구
              kbds:
                -  옵션
                -  meta
                -  i
            - label: 요소 검사
              kbds:
                -  옵션
                -  meta
                -  c
          -  - label: JavaScript 콘솔
              kbds:
                -  옵션
                -  meta
                -  j
  ui:
    모델 번호:w-48
슬롯 :
  기본값 :|

    <div class="flex items-center justify-center rounded-md border border-dashed border-accented text-sm aspect-video w-72">
      여기를 마우스 오른쪽 단추로 클릭합니다.
    </div>
---

: div{class="flex items-center justify-center rounded-md border border-dashed border-accented text-sm aspect-video w-72"} [여기를 오른쪽 클릭]
::

::note
배열 배열을 `items`prop에 전달하여 개별 항목 그룹을 만들 수도 있습니다.
::

::tip
각 항목은 `items`prop과 같은 속성을 가진 `children` 배열을 사용하여 `open`, `defaultOpen` 및 `content` 속성을 사용하여 제어할 수 있는 중첩 메뉴를 만들 수 있습니다.
::

###  사이즈

`size`prop을 사용하여 ContextMenu의 크기를 변경합니다.

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
  -  ContextMenuItem []
소품 :
  크기: xl
  프로젝트:
    - label: 시스템
      아이콘: i-lucide-monitor
    - label: 빛
      아이콘 : i-lucide-sun
    - label: 어두운
      아이콘 : i-lucide-moon
  ui:
    모델 번호:w-48
슬롯 :
  기본 값:|

    <div class="flex items-center justify-center rounded-md border border-dashed border-accented text-sm aspect-video w-72">
      여기를 마우스 오른쪽 단추로 클릭합니다.
    </div>
---

: div{class="flex items-center justify-center rounded-md border border-dashed border-accented text-sm aspect-video w-72"} [여기를 오른쪽 클릭]
::

### Modal @ 모달

`modal`prop을 사용하여 ContextMenu가 외부 콘텐츠와의 상호 작용을 차단할지 여부를 제어합니다. 기본값은 `true`입니다.

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
  -  ContextMenuItem []
소품 :
  모달: false
  프로젝트:
    - label: 시스템
      아이콘: i-lucide-monitor
    - label: 빛
      아이콘 : i-lucide-sun
    - label: 어두운
      아이콘 : i-lucide-moon
  ui:
    모델 번호:w-48
슬롯 :
  기본값 :|

    <div class="flex items-center justify-center rounded-md border border-dashed border-accented text-sm aspect-video w-72">
      여기를 마우스 오른쪽 단추로 클릭합니다.
    </div>
---

: div{class="flex items-center justify-center rounded-md border border-dashed border-accented text-sm aspect-video w-72"} [여기를 오른쪽 클릭]
::


###  비활성 화

`disabled`prop 을 사용하여 ContextMenu 를 비활성화합니다.

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
  -  ContextMenuItem []
소품 :
  사용 안 함:true
  프로젝트:
    - label: 시스템
      아이콘: i-lucide-monitor
    - label: 빛
      아이콘 : i-lucide-sun
    - label: 어두운
      아이콘 : i-lucide-moon
  ui:
    모델 번호:w-48
슬롯 :
  기본값 :|

    <div class="flex items-center justify-center rounded-md border border-dashed border-accented text-sm aspect-video w-72">
      여기를 마우스 오른쪽 단추로 클릭합니다.
    </div> @
---

: div{class="flex items-center justify-center rounded-md border border-dashed border-accented text-sm aspect-video w-72"} [여기를 오른쪽 클릭]
::

##  예

### 체크박스 항목 포함

`type` 속성을 `checkbox`와 함께 사용하고 `checked`/`onUpdateChecked` 속성을 사용하여 항목의 체크 상태를 제어할 수 있습니다.

::component-example
---
축소: true
name: 'context-menu-checkbox-items-example' 컨텍스트 메뉴-체크박스-항목-예
---
::

::note
항목의 `checked` 상태에 대한 반응성을 보장하기 위해 `items` 배열을 `computed` 내에 래핑하는 것이 좋습니다.
::

###  컬러 아이템 포함

`color` 속성을 사용하여 특정 항목을 색상으로 강조 표시할 수 있습니다.

::component-example
---
축소: true
이름: 'context-menu-color-items-example'
---
::

### 사용자 지정 슬롯 포함

`slot` 등록 정보를 사용하여 특정 항목을 사용자 정의합니다.

다음과 같은 슬롯에 액세스할 수 있습니다.

- `#{{ item.slot }}` {lang="ts-type"}
- `#{{ item.slot }}-leading` {lang="ts-type"}
- `#{{ item.slot }}-label` {lang="ts-type"}
- `#{{ item.slot }}-trailing` {lang="ts-type"}

::component-example
---
축소: true
이름: 'context-menu-custom-slot-example'
---
::

::tip{to="#slots"}
또한 `#item`, `#item-leading``#item-label` 및 `#item-trailing` 슬롯을 사용하여 모든 항목을 사용자 정의 할 수 있습니다.
::

###  바로 가기 추출

[extractShortcuts](/docs/composables/extract-shortcuts) 유틸리티를 사용하여 `kbds` 등록 정보가 있는 메뉴 항목에서 바로 가기를 자동으로 정의합니다. 바로 가기를 재귀적으로 추출하여 @@defineShortcuts](/docs/composables/define-shortcutsPH22@와 호환되는 객체를 반환합니다.

```vue
<script setup lang="ts">
const items = [
  [{
    label: 'Show Sidebar',
    kbds: ['meta', 'S'],
    onSelect() {
      console.log('Show Sidebar clicked')
    }
  }, {
    label: 'Show Toolbar',
    kbds: ['shift', 'meta', 'D'],
    onSelect() {
      console.log('Show Toolbar clicked')
    }
  }, {
    label: 'Collapse Pinned Tabs',
    disabled: true
  }], [{
    label: 'Refresh the Page'
  }, {
    label: 'Clear Cookies and Refresh'
  }, {
    label: 'Clear Cache and Refresh'
  }, {
    type: 'separator' as const
  }, {
    label: 'Developer',
    children: [[{
      label: 'View Source',
      kbds: ['option', 'meta', 'U'],
      onSelect() {
        console.log('View Source clicked')
      }
    }, {
      label: 'Developer Tools',
      kbds: ['option', 'meta', 'I'],
      onSelect() {
        console.log('Developer Tools clicked')
      }
    }], [{
      label: 'Inspect Elements',
      kbds: ['option', 'meta', 'C'],
      onSelect() {
        console.log('Inspect Elements clicked')
      }
    }], [{
      label: 'JavaScript Console',
      kbds: ['option', 'meta', 'J'],
      onSelect() {
        console.log('JavaScript Console clicked')
      }
    }]]
  }]
]

defineShortcuts(extractShortcuts(items))
</script>
```

::note
이예에서 는: kbd {value="meta"}: kbd {value="S" class="ms-px"},: kbd {value="shift"}: kbd {value="meta" class="ms-px"}: kbd {value="D" class="ms-px"},:kbd {value="option"}{value="meta" class="ms-px"}: kbd {value="meta" class="ms-px"}{value="U" class="ms-px"},: kbd {value="option"}: kbd {value="meta" class="ms-px"}: kbd {value="meta" class="ms-px"}:kbd {value="I" class="ms-px"},: kbd {value="option"}: kbd {value="meta" class="ms-px"}: kbd {value="C" class="ms-px"} 및: kbd {value="option"}:kbd {value="meta" class="ms-px"}: kbd {value="J" class="ms-px"} 는 해당항목 의 `select` 함수 를 트리거합니다.
::

##  API

### Props ###  프로프스

:컴포넌트 - 소품

###  슬롯

:구성요소 - 슬롯

###  에미츠

:구성요소 - 방출

##  테마

:구성요소 주제

##  Changelog

:component-changelog 구성요소 변경 로그
