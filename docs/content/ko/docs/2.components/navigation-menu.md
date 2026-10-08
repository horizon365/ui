---
title: NavigationMenu 탐색 메뉴
description: 가로 또는 세로로 표시할 수 있는 링크 리스트입니다.
category: navigation
keywords:
  - navbar
  - menubar
  - sidebar navigation
links:
  - label: NavigationMenu 탐색 메뉴
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/navigation-menu
  - label: Github (GitHub)
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/NavigationMenu.vue
---

##  사용

NavigationMenu 구성 요소를 사용하여 링크 목록을 가로 또는 세로로 표시합니다.

::component-code
---
축소: true
숨기기 (Hide):
  -  클래스
무시하기:
  -  items
외부:
  -  items
externalTypes:
  -  NavigationMenuItem []
소품 :
  프로젝트:
    - label: 가이드
      아이콘: i-lucide-book-open
      to: /docs/getting-started 시작
      1차 하위 항목:
        - label: 소개
          설명: Nuxt에 대한 완전히 스타일이 지정되고 사용자 정의 가능한 구성 요소입니다.Fully styled and customizable components for Nuxt.
          상품명 : i-lucide-house
        - label: 설치
          응용 프로그램에서 Nuxt UI를 설치하고 구성하는 방법에 대해 알아봅니다.Learn how to install and configure Nuxt UI in your application.
          아이콘 : i-lucide-cloud-download
        - label: 'Icons'
          사진: "i-lucide-smile"
          설명: '할 일이 없습니다. @nuxt/icon이 자동으로 처리합니다.'
        - label: '색상'
          아이콘 : i-lucide-swatch-book
          설명: 'Tailwind CSS 테마에서 기본 색상과 중립 색상을 선택하십시오.'
        - label: '테마'
          아이콘: i-lucide-cog
          설명: '당신은 `class`/`ui`props 또는 app.config.ts에서 구성 요소를 사용자 정의 할 수 있습니다.'
    - label: 합성가능
      아이콘: i-lucide-데이터베이스
      대상: /docs/composables
      1차 하위 항목:
        -  label: defineShortcuts
          아이콘: i-lucide-file-text
          설명: 응용 프로그램에 대한 바로 가기를 정의합니다.
          to:/docs/composables/define-shortcuts 로
        -  label: useOverlay
          아이콘: i-lucide-file-text
          Description: 응용 프로그램 내에 모달/슬라이드오버를 표시합니다.
          to: /docs/composables/use-overlay 로
        -  label: useToast
          아이콘: i-lucide-file-text
          설명: 프로그램 내에 토스트를 표시합니다.
          to: /docs/composables/use-toast / 사용자가 토스트를 만들어 보세요.
    - label: 부품
      아이콘: i-lucide-box
      대상: /docs/components
      활성: true
      1차 하위 항목:
        - label: 링크
          아이콘: i-lucide-file-text
          Description: NuxtLink를 초능력과 함께 사용하십시오.
          to:/docs/components/link 로
        - label: 모드
          아이콘: i-lucide-file-text
          Description: 응용 프로그램 내에 모달을 표시합니다.Display a modal within your application.
          대상:/docs/components/modal
        -  label: NavigationMenu
          아이콘: i-lucide-file-text
          설명: 링크 목록을 표시합니다.
          to:/docs/components/navigation-menu 로 이동
        - label: 페이지 매김
          아이콘: i-lucide-file-text
          설명: 페이지 목록을 표시합니다.
          대상: /docs/components/pagination
        - label: 포포버
          아이콘: i-lucide-file-text
          설명: 트리거 요소 주위에 부동하는 모달이 아닌 대화상자를 표시합니다.
          대상:/docs/components/popover
        - label: 진행률
          아이콘: i-lucide-file-text
          설명 :   작업   진행 을   나타내 는   가로   막대 를   표시 합니다 .
          대상 :/docs/components/progress
    - label :   GitHub
      아이콘   :   i - simple - icons - github
      배지   :   6 K
      대상 :https://github.com/nuxt/ui
      target :   _ blank   대상
    - label :   도움 말
      아이콘 :   i - lucide - circle - help
      사용   안   함 : true
  클래스   :   w - full   justify - center
---
::

### 프로젝트

`items`prop 을   다음 과   같 은   속성 을   가진   객체 의   배열 로   사용 합니다 .

-  @ `label?: string` @ {lang="ts-type"}
- `icon?: string`{lang="ts-type"}
- `avatar?: AvatarProps`{lang="ts-type"}
-  @ `badge?: string | number | BadgeProps` @ @ {lang="ts-type"}
-  [ @ @ `chip?: boolean | ChipProps` @ {lang="ts-type"} @ ]( @ #with-chip-in-items )
-  @ [ @ `tooltip?: TooltipProps` @ {lang="ts-type"} @ ]( @ #with-tooltip-in-items @ ) @
-  @ [ @ @ `popover?: PopoverProps` @ {lang="ts-type"} @ ]( @ #with-popover-in-items @ ) @
- `trailingIcon?: string`{lang="ts-type"}
-  @ `type?: 'label' | 'trigger' | 'link'` @ {lang="ts-type"} @
-  @ `defaultOpen?: boolean` @ @ {lang="ts-type"} @
- `open?: boolean`{lang="ts-type"}
-  @ `value?: string` @ {lang="ts-type"}
-  @ `disabled?: boolean` @ {lang="ts-type"} @
-  [ @ `slot?: string` @ {lang="ts-type"} @ ]( @ #with-custom-slot @ )
- `onSelect?: (e: Event) => void`{lang="ts-type"}
- `children?: NavigationMenuChildItem[]`{lang="ts-type"}
- `class?: any`{lang="ts-type"}
- `ui?: { linkLeadingAvatarSize?: ClassNameValue, linkLeadingAvatar?: ClassNameValue, linkLeadingIcon?: ClassNameValue, linkLeadingChipSize?: ClassNameValue, linkLabel?: ClassNameValue, linkLabelExternalIcon?: ClassNameValue, linkTrailing?: ClassNameValue, linkTrailingBadgeSize?: ClassNameValue, linkTrailingBadge?: ClassNameValue, linkTrailingIcon?: ClassNameValue, label?: ClassNameValue, link?: ClassNameValue, content?: ClassNameValue, childList?: ClassNameValue, childLabel?: ClassNameValue, childItem?: ClassNameValue, childLink?: ClassNameValue, childLinkIcon?: ClassNameValue, childLinkWrapper?: ClassNameValue, childLinkLabel?: ClassNameValue, childLinkLabelExternalIcon?: ClassNameValue, childLinkDescription?: ClassNameValue }`{lang="ts-type"}

당신은 [Link](/docs/components/link#props) 구성 요소에서 모든 속성을 전달 할 수 있습니다 `to`, `target` 등.

::component-code
---
축소: true
무시하기:
  -  items
  -  클래스
외부:
  -  items
externalTypes:
  -  NavigationMenuItem []
소품 :
  프로젝트:
    - label: 가이드
      아이콘: i-lucide-book-open
      to: /docs/getting-started 시작
      1차 하위 항목:
        - label: 소개
          설명: Nuxt에 대한 완전히 스타일이 지정되고 사용자 정의 가능한 구성 요소입니다.Fully styled and customizable components for Nuxt.
          상품명 : i-lucide-house
        - label: 설치
          응용 프로그램에서 Nuxt UI를 설치하고 구성하는 방법에 대해 알아봅니다.Learn how to install and configure Nuxt UI in your application.
          아이콘 : i-lucide-cloud-download
        - label: '아이콘'
          사진: "i-lucide-smile"
          설명: '할 일이 없습니다. @nuxt/icon이 자동으로 처리합니다.'
        - label: '색상'
          아이콘 : i-lucide-swatch-book
          설명: 'Tailwind CSS 테마에서 기본 색상과 중립 색상을 선택하십시오.'
        - label: '테마'
          아이콘: i-lucide-cog
          설명: '당신은 `class`/`ui`props 또는 app.config.ts에서 구성 요소를 사용자 정의 할 수 있습니다.'
    - label:합성 가능
      아이콘: i-lucide-데이터베이스
      대상: /docs/composables
      1차 하위 항목:
        -  label: defineShortcuts
          아이콘: i-lucide-file-text
          설명: 응용 프로그램에 대한 바로 가기를 정의합니다.
          to:/docs/composables/define-shortcuts 로
        -  label: useOverlay
          아이콘: i-lucide-file-text
          설명: 응용 프로그램 내에 모달/슬라이드오버를 표시합니다.
          to: /docs/composables/use-overlay 로
        -  label: useToast
          아이콘: i-lucide-file-text
          설명: 프로그램 내에 토스트를 표시합니다.
          to: /docs/composables/use-toast / 사용자가 토스트를 만들어 보세요.
    - label: 부품
      아이콘: i-lucide-box
      대상: /docs/components
      활성: true
      1차 하위 항목:
        - label: 링크
          아이콘: i-lucide-file-text
          설명: NuxtLink를 초능력과 함께 사용하십시오.
          위치:/docs/components/link
        - label: 모드
          아이콘: i-lucide-file-text
          응용 프로그램 내에 모달을 표시합니다.Display a modal within your application.
          대상:/docs/components/modal
        -  label: NavigationMenu
          아이콘: i-lucide-file-text
          설명: 링크 목록을 표시합니다.
          to:/docs/components/navigation-menu 로 이동
        - label: 페이지 매김
          아이콘: i-lucide-file-text
          설명: 페이지 목록을 표시합니다.
          대상: /docs/components/pagination
        - label: Popover
          아이콘: i-lucide-file-text
          설명 :   트리거   요소   주위 에   부동 하 는   모달 이   아닌   대화 상자 를   표시 합니다 .
          대상 :  /docs/components/popover
        - label :   진행   상황
          아이콘 :   i - lucide - file - text
          설명 :   작업   진행 을   나타내 는   가로   막대 를   표시 합니다 .
          대상 :/docs/components/progress
    - label :   GitHub
      아이콘 :   i - simple - icons - github
      배지   :   6 K
      대상 :https://github.com/nuxt/ui
      target :   _ blank   대상
    - label :   도움 말
      아이콘 :   i - lucide - circle - help
      사용   안   함 : true
  클래스   :   w - full   justify - center
---
::

::note
또한   배열   배열 을  `items`prop 에   전달 하 여   항목   그룹 을   표시 할   수   있 습니다 .
::

::tip
각   항목 은   다음   속성 을   가진  `children`  객체 의   배열 을   사용 하 여   하위   메뉴 를   작성 할   수   있 습니다 .

- `label: string`
- `description?: string`
- `icon?: string`
- `onSelect?: (e: Event) => void`
- `class?: any`

::

### 방향

`orientation`prop   을   사용 하 여   NavigationMenu   의   방향 을   변경 합니다 .

::note
방향 이  `vertical`일   때 ,[Accordion](/docs/components/accordion)  구성   요소 는   각   그룹 을   표시 하 는   데   사용 됩니다 .  `open`  및  `defaultOpen`  속성 을   사용 하 여   각   항목 의   열린   상태 를   제어 하 고  [`collapsible` `description?: string`  속성 을   사용 하 여   동작 을   변경 할   수   있 습니다 .)  및  [ @ `type` @ ]( @ @ /docs/components/accordion#multiple  props .
::

::note
방향이 `vertical`이고 메뉴가 `collapsed`이 아닌 경우, 아이들은 항목으로 재귀적으로 렌더링되므로 `ui.link`스타일을 지정합니다. `ui.childLink`는 `content`에만 적용됩니다. `horizontal`orientation에 표시되고 [po](`collapsed` @ @ @ poverage.
::

::component-code
---
축소: true
무시하기:
  -  items
  -  클래스
외부:
  -  items
externalTypes:
  -  NavigationMenuItem [][]
소품 :
  방향: 수직
  항목:
    -  - label: 링크
        타입: 'label'
      - label: 가이드
        아이콘: i-lucide-book-open
        1차 하위 항목:
          - label: 소개
            설명: Nuxt에 대한 완전히 스타일이 지정되고 사용자 정의 가능한 구성 요소입니다.Fully styled and customizable components for Nuxt.
            상품명 : i-lucide-house
          - label: 설치
            응용 프로그램에서 Nuxt UI를 설치하고 구성하는 방법에 대해 알아봅니다.Learn how to install and configure Nuxt UI in your application.
            아이콘 : i-lucide-cloud-download
          - label: '아이콘'
            사진: "i-lucide-smile"
            설명: '할 일이 없습니다. @nuxt/icon이 자동으로 처리합니다.'
          - label: '색상'
            아이콘 : i-lucide-swatch-book
            설명: 'Tailwind CSS 테마에서 기본 색상과 중립 색상을 선택하십시오.'
          - label: '테마'
            아이콘: i-lucide-cog
            설명: '당신은 `class`/`ui`props를 사용하거나 app.config.ts에서 구성 요소를 사용자 정의 할 수 있습니다.'
      - label: 합성 가능
        아이콘: i-lucide-데이터베이스
        1차 하위 항목:
          -  label: defineShortcuts
            아이콘: i-lucide-file-text
            설명: 응용 프로그램에 대한 바로 가기를 정의합니다.
            to:/docs/composables/define-shortcuts 로
          -  label: useOverlay
            아이콘: i-lucide-file-text
            Description: 응용 프로그램 내에 모달/슬라이드오버를 표시합니다.
            to: /docs/composables/use-overlay 로
          -  label: useToast
            아이콘: i-lucide-file-text
            설명: 프로그램 내에 토스트를 표시합니다.
            to: /docs/composables/use-toast / 사용자가 토스트를 만들어 보세요.
      - label: 부품
        아이콘: i-lucide-box
        대상: /docs/components
        타입: 'trigger'
        활성: true
        defaultOpen : true
        1차 하위 항목:
          - label: 링크
            아이콘: i-lucide-file-text
            설명: NuxtLink를 초능력과 함께 사용하십시오.
            위치:/docs/components/link
          - label: 모드
            아이콘: i-lucide-file-text
            응용 프로그램 내에 모달을 표시합니다.Display a modal within your application.
            대상:/docs/components/modal
          -  label: NavigationMenu
            아이콘: i-lucide-file-text
            설명: 링크 목록을 표시합니다.
            to:/docs/components/navigation-menu 로 이동
          - label: 페이지 지정
            아이콘: i-lucide-file-text
            Description: 페이지 목록을 표시합니다.
            대상: /docs/components/pagination
          - label: 포포버
            아이콘: i-lucide-file-text
            설명: 트리거 요소 주위에 부동하는 모달이 아닌 대화상자를 표시합니다.
            대상:/docs/components/popover
          - label: 진행 상황
            아이콘 :   i - lucide - file - text
            설명 :   작업   진행 을   나타내 는   가로   막대 를   표시 합니다 .
            대상 :/docs/components/progress
    -   -   태그 :   GitHub
        아이콘   :   i - simple - icons - github
        배지   :   6 K
        대상   :https://github.com/nuxt/ui
        target :   _ blank   대상
      - label :   도움 말
        아이콘 :   i - lucide - circle - help
        사용   안   함 : true
  class : ' data -[ 방향 = 수직 ] : w - 48 '
---
::

::note
방향 이  `horizontal`일   때 는   그룹   간격 이   지정 되 고   방향 이  `vertical`일   때 는   그룹 이   분리 됩니다 .
::

###   삭제

`vertical`orientation 에서  `collapsed`prop 을   사용 하 여   NavigationMenu 를   축소 하 면   사이드바 에서   유용 할   수   있 습니다 .

::note
[`tooltip`](#with-tooltip-in-items)  및  [`popover`](#with-popover-in-items )props 를   사용 하 여   축소 된   항목 에   대한   자세 한   정보 를   표시 할   수   있 습니다 .
::

::component-code
---
축소 :   true
무시 하 기 :
  - items
  - orientation
  - class
외부 :
  - items
externalTypes :
  - NavigationMenuItem [ ]
항목:
  도구 설명:
    -  true
    -  false
  Popover :
    -  true
    -  false
소품 :
  축소됨: true
  툴 팁: false
  Popover: 거짓
  방향: 수직
  항목:
    -  - label: 링크
        타입: 'label'
      - label: 가이드
        아이콘: i-lucide-book-open
        1차 하위 항목:
          - label: 소개
            설명: Nuxt에 대한 완전히 스타일이 지정되고 사용자 정의 가능한 구성 요소입니다.Fully styled and customizable components for Nuxt.
            상품명 : i-lucide-house
          - label: 설치
            응용 프로그램에서 Nuxt UI를 설치하고 구성하는 방법에 대해 알아봅니다.Learn how to install and configure Nuxt UI in your application.
            아이콘 : i-lucide-cloud-download
          - label: '아이콘'
            사진: "i-lucide-smile"
            설명: '할 일이 없습니다. @nuxt/icon이 자동으로 처리합니다.'
          - label: '색상'
            아이콘 : i-lucide-swatch-book
            설명: 'Tailwind CSS 테마에서 기본 색상과 중립 색상을 선택하십시오.'
          - label: '테마'
            아이콘: i-lucide-cog
            설명: '당신은 `class`/`ui`props 또는 app.config.ts에서 구성 요소를 사용자 정의 할 수 있습니다.'
      - label: 합성 가능 재료
        아이콘: i-lucide-데이터베이스
        1차 하위 항목:
          -  label: defineShortcuts
            아이콘: i-lucide-file-text
            설명: 응용 프로그램의 바로 가기를 정의합니다.
            to:/docs/composables/define-shortcuts 로
          -  label: useOverlay
            아이콘: i-lucide-file-text
            설명: 응용 프로그램 내에 모달/슬라이드오버를 표시합니다.
            to: /docs/composables/use-overlay 로
          -  label: useToast
            아이콘: i-lucide-file-text
            Description: 프로그램 내에 토스트를 표시합니다.
            to: /docs/composables/use-toast / 사용자가 토스트를 만들어 보세요.
      - label: 부품
        아이콘: i-lucide-box
        대상: /docs/components
        활성: true
        1차 하위 항목:
          - label: 링크
            아이콘: i-lucide-file-text
            설명: NuxtLink를 초능력과 함께 사용하십시오.
            위치:/docs/components/link
          - label: 모드
            아이콘: i-lucide-file-text
            응용 프로그램 내에 모달을 표시합니다.Display a modal within your application.
            대상:/docs/components/modal
          -  label: NavigationMenu
            아이콘: i-lucide-file-text
            설명: 링크 목록을 표시합니다.
            to:/docs/components/navigation-menu 로 이동
          - label: 페이지
            아이콘: i-lucide-file-text
            Description: 페이지 목록을 표시합니다.
            대상: /docs/components/pagination
          - label: 포포버
            아이콘: i-lucide-file-text
            설명: 트리거 요소 주위에 부동하는 모달이 아닌 대화상자를 표시합니다.
            대상:/docs/components/popover
          - label: 진행 상황
            아이콘: i-lucide-file-text
            설명 :   작업   진행 을   나타내 는   가로   막대 를   표시 합니다 .
            대상 :/docs/components/progress
    -   -   태그 :   GitHub
        아이콘   :   i - simple - icons - github
        배지   :   6 K
        대상 :https://github.com/nuxt/ui
        target :   _ blank   대상
      - label :   도움 말
        아이콘 :   i - lucide - circle - help
        사용   안   함 : true
---
::

### 하이라이트

`highlight`prop   을   사용 하 여   활성   항목 의   강조   표시 된   테두리 를   표시 합니다 .

`highlight-color`prop 을   사용 하 여   테두리   색상 을   변경 합니다 .   기본 값 은  `color`prop 입니다 .

::component-code
---
축소 :   true
상품명   :   True
무시 하 기 :
  - items
  - class
외부 :
  - items
externalTypes :
  - NavigationMenuItem [ ]
소품   :
  강조   표시 : true
  highlightColor :   ' 기본 '
  방향: 수평
  프로젝트:
    -  - label: 가이드
        아이콘: i-lucide-book-open
        1차 하위 항목:
          - label: 소개
            설명: Nuxt에 대한 완전히 스타일이 지정되고 사용자 정의 가능한 구성 요소입니다.Fully styled and customizable components for Nuxt.
            상품명 : i-lucide-house
          - label: 설치
            응용 프로그램에서 Nuxt UI를 설치하고 구성하는 방법에 대해 알아봅니다.Learn how to install and configure Nuxt UI in your application.
            아이콘 : i-lucide-cloud-download
          - label: '아이콘'
            사진: "i-lucide-smile"
            설명: '할 일이 없습니다. @nuxt/icon이 자동으로 처리합니다.'
          - label: '색상'
            아이콘 : i-lucide-swatch-book
            설명: 'Tailwind CSS 테마에서 기본 색상과 중립 색상을 선택하십시오.'
          - label: '테마'
            아이콘: i-lucide-cog
            설명: '당신은 `class`/`ui`props 또는 app.config.ts에서 구성 요소를 사용자 정의 할 수 있습니다.'
      - label: 합성 가능
        아이콘: i-lucide-데이터베이스
        1차 하위 항목:
          -  label: defineShortcuts
            아이콘: i-lucide-file-text
            설명: 응용 프로그램에 대한 바로 가기를 정의합니다.
            to:/docs/composables/define-shortcuts 로
          -  label: useOverlay
            아이콘: i-lucide-file-text
            Description: 응용 프로그램 내에 모달/슬라이드오버를 표시합니다.
            to: /docs/composables/use-overlay 로
          -  label: useToast
            아이콘: i-lucide-file-text
            설명: 프로그램 내에 토스트를 표시합니다.
            to: /docs/composables/use-toast / 사용자가 토스트를 만들어 보세요.
      - label: 부품
        아이콘: i-lucide-box
        대상: /docs/components
        활성: true
        defaultOpen : true
        1차 하위 항목:
          - label: 링크
            아이콘: i-lucide-file-text
            설명: NuxtLink를 초능력과 함께 사용하십시오.
            위치:/docs/components/link
          - label: 모드
            아이콘: i-lucide-file-text
            응용 프로그램 내에 모달을 표시합니다.Display a modal within your application.
            대상:/docs/components/modal
          -  label: NavigationMenu
            아이콘 :   i - lucide - file - text
            설명 :   링크   목록 을   표시 합니다 .
            to :/docs/components/navigation - menu   로   이동
          - label :   페이지   매김
            아이콘 :   i - lucide - file - text
            Description :   페이지   목록 을   표시 합니다 .
            대상 :  /docs/components/pagination
          - label :   Popover
            아이콘 :   i - lucide - file - text
            설명 :   트리거   요소   주위 에   부동 하 는   모달 이   아닌   대화 상자 를   표시 합니다 .
            대상 :  /docs/components/popover
          - label :   진행   상황
            아이콘 :   i - lucide - file - text
            설명 :   작업   진행 을   나타내 는   가로   막대 를   표시 합니다 .
            대상 :/docs/components/progress
    -   -   태그 :   GitHub
        아이콘   :   i - simple - icons - github
        배지   :   6 K
        대상 :https://github.com/nuxt/ui
        target :   _ blank   대상
      - label :   도움 말
        아이콘 :   i - lucide - circle - help
        사용   안   함 : true
  class : ' data -[ orientation = horizontal ] : border - b   border - default   data -[ orientation = horizontal ] : w - full   data -[ orientation = vertical ] : w - 48 '
---
::

::note
이   예제 에서 는  `border-b`클래스 가  `horizontal`orientation 에   테두리 를   표시 하 기   위해   적용 되 었 으며 ,   이 는   기본 적 으로   깨끗 한   슬레이트 를   사용 할   수   있 도록   하 기   위해   수행 되 지   않 습니다 .
::

::caution
`vertical`orientation에서 `highlight`prop은 활동적인 자식의 경계만 강조 표시합니다.
::

###  컬러

`color`prop 을 사용하여 NavigationMenu 의 색상을 변경합니다.

::component-code
---
축소: true
무시하기:
  -  items
  -  class
외부:
  -  items
externalTypes:
  - NavigationMenuItem[] []
소품 :
  색상: 중립
  항목:
    -  - label: 가이드
        아이콘: i-lucide-book-open
        to: /docs/getting-started 시작
      - label: 합성 가능
        아이콘: i-lucide-데이터베이스
        to:/docs/composables 에 대하여
      - label: 부품
        아이콘: i-lucide-box
        대상: /docs/components
        활성: true
    -  - 태그: GitHub
        아이콘 :   i - simple - icons - github
        배지   :   6 K
        대상   :https://github.com/nuxt/ui
        target :   _ blank   대상
  클래스 :   ' w - full '
---
::

### 변형

`variant`prop   을   사용 하 여   NavigationMenu   의   변형 을   변경 합니다 .

::component-code
---
축소 :   true
무시 하 기 :
  - items
  - class
외부 :
  - items
externalTypes :
  - NavigationMenuItem [ ]   [ ]
소품   :
  색상 : 중립
  변형 : 링크
  강조   표시 : 거짓
  프로젝트 :
    -   -   label :   가이드
        아이콘 :   i - lucide - book - open
        to :  /docs/getting - started   시작
      - label :   합성   가능
        아이콘 :   i - lucide - 데이터베이스
        대상 :  /docs/composables
      - label :   부품
        아이콘 :   i - lucide - box
        대상 :  /docs/components
        활성 :   true
    -   -   태그 :   GitHub
        아이콘   :   i - simple - icons - github
        배지   :   6 K
        대상 :https://github.com/nuxt/ui
        target :   _ blank   대상
  클래스 :   ' w - full '
---
::

::note
`highlight`prop 은  `pill`variant   활성   항목   스타일 을   변경 합니다 .   차이점 을   확인 해   보 십시오 .
::

### 트레일 링   아이콘

`trailing-icon`prop 을   사용 하 여   각   항목 의   후행  [Icon](/docs/components/icon)를   사용자   정의 합니다 .   기본 값 은  `i-lucide-chevron-down`입니다 .   이   아이콘 은   항목 에   하위   항목 이   있 을   때 만   표시 됩니다 .

::tip
항목   객체 에서  `trailingIcon`  등록   정보 를   사용 하 여   특정   항목 에   대한   아이콘 을   설정 할   수도   있 습니다 .
::

::component-code
---
축소 :   true
무시 하 기 :
  - items
  - 클래스
외부 :
  - items
externalTypes :
  - NavigationMenuItem [ ]
소품   :
  trailingIcon :   ' i - lucide - arrow - down '
  항목:
    - label: 가이드
      아이콘: i-lucide-book-open
      to: /docs/getting-started 시작
      1차 하위 항목:
        - label: 소개
          설명: Nuxt에 대한 완전히 스타일이 지정되고 사용자 정의 가능한 구성 요소입니다.Fully styled and customizable components for Nuxt.
          상품명 : i-lucide-house
        - label: 설치
          응용 프로그램에서 Nuxt UI를 설치하고 구성하는 방법에 대해 알아봅니다.Learn how to install and configure Nuxt UI in your application.
          아이콘 : i-lucide-cloud-download
        - label: '아이콘'
          사진: "i-lucide-smile"
          설명: '할 일이 없습니다. @nuxt/icon이 자동으로 처리합니다.'
        - label: '색상'
          아이콘 : i-lucide-swatch-book
          설명: 'Tailwind CSS 테마에서 기본 색상과 중립 색상을 선택하십시오.'
        - label: '테마'
          아이콘: i-lucide-cog
          설명: '당신은 `class`/`ui`props를 사용하거나 app.config.ts에서 구성 요소를 사용자 정의 할 수 있습니다.'
    - label:합성 가능
      아이콘: i-lucide-데이터베이스
      to:/docs/composables 에 대하여
      1차 하위 항목:
        -  label: defineShortcuts
          아이콘: i-lucide-file-text
          설명: 응용 프로그램의 바로 가기를 정의합니다.
          to:/docs/composables/define-shortcuts 로
        -  label: useOverlay
          아이콘: i-lucide-file-text
          Description: 응용 프로그램 내에 모달/슬라이드오버를 표시합니다.
          to: /docs/composables/use-overlay 로
        -  label: useToast
          아이콘: i-lucide-file-text
          설명: 프로그램 내에 토스트를 표시합니다.
          to: /docs/composables/use-toast / 사용자가 토스트를 만들어 보세요.
    - label: 부품
      아이콘: i-lucide-box
      대상: /docs/components
      활성: true
      1차 하위 항목:
        - label: 링크
          아이콘: i-lucide-file-text
          Description: NuxtLink를 초능력과 함께 사용하십시오.
          위치:/docs/components/link
        - label: 모드
          아이콘: i-lucide-file-text
          응용 프로그램 내에 모달을 표시합니다.Display a modal within your application.
          대상:/docs/components/modal
        -  label: NavigationMenu
          아이콘: i-lucide-file-text
          설명: 링크 목록을 표시합니다.
          to:/docs/components/navigation-menu 로 이동
        - label: 페이지 매김
          아이콘: i-lucide-file-text
          Description: 페이지 목록을 표시합니다.
          대상: /docs/components/pagination
        - label: Popover
          아이콘: i-lucide-file-text
          설명: 트리거 요소 주위에 부동하는 모달이 아닌 대화상자를 표시합니다.
          대상:/docs/components/popover
        - label: 진행 상황
          아이콘: i-lucide-file-text
          설명: 작업 진행을 나타내는 가로 막대를 표시합니다.
          대상:/docs/components/progress
  클래스 : w-full justify-center
---
::

::framework-only
#nuxt #nuxt
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
이 아이콘은 `app.config.ts` 아래 `ui.icons.chevronDown` 키에서 전역적으로 사용자 지정할 수 있습니다.
:::

#vue #vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
이 아이콘은 `vite.config.ts` 아래 `ui.icons.chevronDown` 키에서 전역적으로 사용자 지정할 수 있습니다.
:::
::

###  화살표

`arrow`prop을 사용하여 항목에 자식이 있을 때 NavigationMenu 내용에 화살표를 표시합니다.

::component-code
---
축소: true
무시하기:
  -  프로젝트
  -  arrow
  -  클래스
외부:
  -  items
externalTypes:
  -  NavigationMenuItem []
소품 :
  화살표: true
  항목:
    - label: 가이드
      아이콘: i-lucide-book-open
      to: /docs/getting-started 시작
      1차 하위 항목:
        - label: 소개
          설명: Nuxt에 대한 완전히 스타일이 지정되고 사용자 정의 가능한 구성 요소입니다.Fully styled and customizable components for Nuxt.
          상품명 : i-lucide-house
        - label: 설치
          응용 프로그램에서 Nuxt UI를 설치하고 구성하는 방법에 대해 알아봅니다.Learn how to install and configure Nuxt UI in your application.
          아이콘 : i-lucide-cloud-download
        - label: '아이콘'
          사진: "i-lucide-smile"
          설명: '할 일이 없습니다. @nuxt/icon이 자동으로 처리합니다.'
        - label: '색상'
          아이콘 : i-lucide-swatch-book
          설명: 'Tailwind CSS 테마에서 기본 색상과 중립 색상을 선택하십시오.'
        - label: '테마'
          아이콘: i-lucide-cog
          설명: '당신은 `class`/`ui`props를 사용하거나 app.config.ts에서 구성 요소를 사용자 정의 할 수 있습니다.'
    - label: 합성 가능
      아이콘: i-lucide-데이터베이스
      to:/docs/composables 에 대하여
      1차 하위 항목:
        -  label: defineShortcuts
          아이콘: i-lucide-file-text
          설명: 응용 프로그램에 대한 바로 가기를 정의합니다.
          to:/docs/composables/define-shortcuts 로
        -  label: useOverlay
          아이콘: i-lucide-file-text
          Description: 응용 프로그램 내에 모달/슬라이드오버를 표시합니다.
          to: /docs/composables/use-overlay 로
        -  label: useToast
          아이콘: i-lucide-file-text
          설명: 프로그램 내에 토스트를 표시합니다.
          to: /docs/composables/use-toast / 사용자가 토스트를 만들어 보세요.
    - label: 부품
      아이콘: i-lucide-box
      대상: /docs/components
      활성: true
      1차 하위 항목:
        - label: 링크
          아이콘: i-lucide-file-text
          Description: NuxtLink를 초능력과 함께 사용하십시오.
          위치:/docs/components/link
        - label: 모드
          아이콘: i-lucide-file-text
          응용 프로그램 내에 모달을 표시합니다.Display a modal within your application.
          대상:/docs/components/modal
        -  label: NavigationMenu
          아이콘: i-lucide-file-text
          설명: 링크 목록을 표시합니다.
          to:/docs/components/navigation-menu 로 이동
        - label: 페이지 매김
          아이콘: i-lucide-file-text
          설명: 페이지 목록을 표시합니다.
          대상: /docs/components/pagination
        - label: Popover
          아이콘: i-lucide-file-text
          설명: 트리거 요소 주위에 부동하는 모달이 아닌 대화상자를 표시합니다.
          대상: /docs/components/popover
        - label: 진행 상황
          아이콘: i-lucide-file-text
          설명: 작업 진행을 나타내는 가로 막대를 표시합니다.
          대상:/docs/components/progress
  클래스 : w-full justify-center
---
::

::note
화살표가 활성 항목을 따르도록 애니메이션됩니다.
::

### 콘텐츠 방향

`content-orientation`prop을 사용하여 콘텐츠의 방향을 변경합니다.

::warning
이 prop은 `orientation`이 `horizontal`일 때만 작동합니다.
::

::component-code
---
축소: true
무시하기:
  -  items
  -  arrow
  -  클래스
외부:
  -  items
externalTypes:
  -  NavigationMenuItem []
소품 :
  화살표: True
  contentOrientation: '수직'
  항목:
    - label: 가이드
      아이콘: i-lucide-book-open
      to: /docs/getting-started 시작
      1차 하위 항목:
        - label: 소개
          설명: Nuxt에 대한 완전히 스타일이 지정되고 사용자 정의 가능한 구성 요소입니다.Fully styled and customizable components for Nuxt.
          상품명 : i-lucide-house
        - label: 설치
          응용 프로그램에서 Nuxt UI를 설치하고 구성하는 방법에 대해 알아봅니다.Learn how to install and configure Nuxt UI in your application.
          아이콘 : i-lucide-cloud-download
        - label: '아이콘'
          사진: "i-lucide-smile"
          설명: '할 일이 없습니다. @nuxt/icon이 자동으로 처리합니다.'
    - label: 합성 가능
      아이콘: i-lucide-데이터베이스
      to:/docs/composables 에 대하여
      1차 하위 항목:
        -  label: defineShortcuts
          아이콘: i-lucide-file-text
          설명: 응용 프로그램의 바로 가기를 정의합니다.
          to:/docs/composables/define-shortcuts 로
        -  label: useOverlay
          아이콘: i-lucide-file-text
          설명: 응용 프로그램 내에 모달/슬라이드오버를 표시합니다.
          to: /docs/composables/use-overlay 로
        -  label: useToast
          아이콘: i-lucide-file-text
          설명: 프로그램 내에 토스트를 표시합니다.
          to: /docs/composables/use-toast / 사용자가 토스트를 만들어 보세요.
    - label: 부품
      아이콘: i-lucide-box
      대상: /docs/components
      활성: true
      1차 하위 항목:
        - label: 링크
          아이콘: i-lucide-file-text
          설명: NuxtLink를 초능력과 함께 사용하십시오.
          위치:/docs/components/link
        - label: 모드
          아이콘: i-lucide-file-text
          응용 프로그램 내에 모달을 표시합니다.Display a modal within your application.
          대상:/docs/components/modal
        -  label: NavigationMenu
          아이콘: i-lucide-file-text
          설명: 링크 목록을 표시합니다.
          to:/docs/components/navigation-menu 로 이동
        - label: 페이지 매김
          아이콘: i-lucide-file-text
          설명: 페이지 목록을 표시합니다.
          대상: /docs/components/pagination
  클래스 : w-full justify-center
---
::

### 마운트 해제

`unmount-on-hide`prop을 사용하여 콘텐츠 마운트 해제 동작을 제어합니다. 기본값은 `true`입니다.

::component-code
---
축소: true
무시하기:
  -  items
  -  arrow
  -  클래스
외부:
  -  items
externalTypes:
  -  NavigationMenuItem []
소품 :
  unmountOnHide : false
  프로젝트:
    - label: 가이드
      아이콘: i-lucide-book-open
      to: /docs/getting-started 시작
      1차 하위 항목:
        - label: 소개
          설명: Nuxt에 대한 완전히 스타일이 지정되고 사용자 정의 가능한 구성 요소입니다.Fully styled and customizable components for Nuxt.
          상품명 : i-lucide-house
        - label: 설치
          응용 프로그램에서 Nuxt UI를 설치하고 구성하는 방법에 대해 알아봅니다.Learn how to install and configure Nuxt UI in your application.
          아이콘 : i-lucide-cloud-download
        - label: '아이콘'
          사진: "i-lucide-smile"
          설명: '할 일이 없습니다. @nuxt/icon이 자동으로 처리합니다.'
        - label: '색상'
          아이콘 : i-lucide-swatch-book
          설명: 'Tailwind CSS 테마에서 기본 색상과 중립 색상을 선택하십시오.'
        - label: '테마'
          아이콘: i-lucide-cog
          설명: '당신은 `class`/`ui`props를 사용하거나 app.config.ts에서 구성 요소를 사용자 정의 할 수 있습니다.'
    - label: 합성 가능
      아이콘: i-lucide-데이터베이스
      대상: /docs/composables
      1차 하위 항목:
        -  label: defineShortcuts
          아이콘: i-lucide-file-text
          설명: 응용 프로그램의 바로 가기를 정의합니다.
          to:/docs/composables/define-shortcuts 로
        -  label: useOverlay
          아이콘: i-lucide-file-text
          Description: 응용 프로그램 내에 모달/슬라이드오버를 표시합니다.
          to: /docs/composables/use-overlay 로
        -  label: useToast
          아이콘: i-lucide-file-text
          Description: 프로그램 내에 토스트를 표시합니다.
          to: /docs/composables/use-toast / 사용자가 토스트를 만들어 보세요.
    - label: 부품
      아이콘: i-lucide-box
      대상: /docs/components
      활성: true
      1차 하위 항목:
        - label: 링크
          아이콘: i-lucide-file-text
          Description: NuxtLink를 초능력과 함께 사용하십시오.
          위치:/docs/components/link
        - label: 모드
          아이콘: i-lucide-file-text
          응용 프로그램 내에 모달을 표시합니다.Display a modal within your application.
          대상:/docs/components/modal
        -  label: NavigationMenu
          아이콘: i-lucide-file-text
          설명: 링크 목록을 표시합니다.
          to:/docs/components/navigation-menu 로 이동
        - label: 페이지
          아이콘: i-lucide-file-text
          설명: 페이지 목록을 표시합니다.
          대상: /docs/components/pagination
        - label: Popover
          아이콘: i-lucide-file-text
          설명: 트리거 요소 주위에 부동하는 모달이 아닌 대화상자를 표시합니다.
          대상:/docs/components/popover
        - label: 진행 상황
          아이콘: i-lucide-file-text
          설명: 작업 진행을 나타내는 가로 막대를 표시합니다.
          대상:/docs/components/progress
  클래스 : w-full justify-center
---
::

::note
DOM을 검사하여 각 항목의 콘텐츠가 렌더링되고 있는지 확인할 수 있습니다.
::

##  예제

### 활성 항목 제어

`default-value`prop 또는 `v-model` 지시문을 항목의 `value`와 함께 사용하여 활성 항목을 제어할 수 있습니다. `value`가 제공되지 않은 경우 최상위 항목의 경우 `item-${index}` 또는 중첩된 항목의 경우 `item-${level}-${index}` 가 기본값으로 설정됩니다.

::component-example
---
축소: true
name: 'navigation-menu-model-value-example' 탐색메뉴-모델-값-예제
---
::

::tip
`value-key`prop을 사용하여 `v-model` 또는 `default-value` 가 제공될 때 항목을 일치시키는 키를 변경합니다.
::

::note
이 예에서는 [`defineShortcuts`](/docs/composables/define-shortcuts)를 사용하여 kbd@@@, :kbd{value="2"} 또는 :kbd{value="3"}를 눌러 활성 항목을 전환할 수 있습니다.
::

###  항목에 툴팁이 있습니다.

방향이 `vertical`이고 메뉴가 `collapsed`일 때,`tooltip`prop을 `true`로 설정하여 [Tooltip](/docs/components/tooltip) 태그가 있는 항목 주위에 ) 속성을 사용하여 기본 툴팁을 덮어쓸 수도 있습니다. `horizontal`각 항목에 `tooltip` 속성을 사용하여 [Tooltip](/docs/components/tooltip)를 표시할 수 있습니다.

::note
항목의 `tooltip` 등록 정보는 전역 `tooltip`prop에 관계없이 항상 툴팁을 표시합니다.
::

당신은 [Tooltip](/docs/components/tooltip) 구성 요소에서 모든 속성을 전 세계 또는 각 항목에 전달할 수 있습니다.

::component-code
---
축소: true
무시하기:
  -  items
  -  클래스
외부:
  -  items
externalTypes:
  -  NavigationMenuItem []
프로젝트:
  도구 설명:
    -  true
    -  false
소품 :
  툴 팁: true
  축소됨: true
  방향: 수직
  프로젝트:
    -  - label: 링크
        타입: 'label'
      - label: 가이드
        아이콘: i-lucide-book-open
        1차 하위 항목:
          - label: 소개
            설명: Nuxt에 대한 완전히 스타일이 지정되고 사용자 정의 가능한 구성 요소입니다.Fully styled and customizable components for Nuxt.
            상품명 : i-lucide-house
          - label: 설치
            응용 프로그램에서 Nuxt UI를 설치하고 구성하는 방법에 대해 알아봅니다.Learn how to install and configure Nuxt UI in your application.
            아이콘 : i-lucide-cloud-download
          - label: '아이콘'
            사진: "i-lucide-smile"
            설명: '할 일이 없습니다. @nuxt/icon이 자동으로 처리합니다.'
          - label: '색상'
            아이콘 : i-lucide-swatch-book
            설명: 'Tailwind CSS 테마에서 기본 색상과 중립 색상을 선택하십시오.'
          - label: '테마'
            아이콘: i-lucide-cog
            설명: '당신은 `class`/`ui`props를 사용하거나 app.config.ts에서 구성 요소를 사용자 정의 할 수 있습니다.'
      - label:합성 가능
        아이콘: i-lucide-데이터베이스
        1차 하위 항목:
          -  label: defineShortcuts
            아이콘: i-lucide-file-text
            설명: 응용 프로그램에 대한 바로 가기를 정의합니다.
            to:/docs/composables/define-shortcuts 로
          -  label: useOverlay
            아이콘: i-lucide-file-text
            Description: 응용 프로그램 내에 모달/슬라이드오버를 표시합니다.
            to: /docs/composables/use-overlay 로
          -  label: useToast
            아이콘: i-lucide-file-text
            Description: 프로그램 내에 토스트를 표시합니다.
            to: /docs/composables/use-toast / 사용자가 토스트를 만들어 보세요.
      - label: 부품
        아이콘: i-lucide-box
        대상: /docs/components
        활성: true
        1차 하위 항목:
          - label: 링크
            아이콘: i-lucide-file-text
            Description: NuxtLink를 초능력과 함께 사용하십시오.
            위치:/docs/components/link
          - label: 모드
            아이콘: i-lucide-file-text
            응용 프로그램 내에 모달을 표시합니다.Display a modal within your application.
            대상:/docs/components/modal
          -  label: NavigationMenu
            아이콘: i-lucide-file-text
            설명 :   링크   목록 을   표시 합니다 .
            to :/docs/components/navigation - menu   로   이동
          - label :   페이지   매김
            아이콘 :   i - lucide - file - text
            설명 :   페이지   목록 을   표시 합니다 .
            대상 :  /docs/components/pagination
          - label :   Popover
            아이콘 :   i - lucide - file - text
            설명 :   트리거   요소   주위 에   부동 하 는   모달 이   아닌   대화 상자 를   표시 합니다 .
            대상 :/docs/components/popover
          - label :   진행   상황
            아이콘 :   i - lucide - file - text
            설명 :   작업   진행 을   나타내 는   수평   막대 를   표시 합니다 .
            대상 :/docs/components/progress
    -   -   태그 :   GitHub
        아이콘   :   i - simple - icons - github
        배지   :   6 K
        대상   :https://github.com/nuxt/ui
        target :   _ blank   대상
        툴 팁 :
          제목 :   ' Open   on   GitHub '
          kbds :
            - @6 k
      - label :   도움 말
        아이콘 :   i - lucide - circle - help
        사용 안 함:true
---
::

###  항목에 popover 포함

방향이 `vertical`이고 메뉴가 `collapsed`인 경우, `popover`prop을 `true`로 설정하여 자녀와 함께 /docs/components/popover)around 항목을 표시할 수 있지만 각 항목의 `popover`pover 속성을 사용하여 기본값을 덮어쓸 수도 있습니다.

::note
항목의 `popover` 속성은 전역 `popover`prop에 관계없이 항상 포포오버를 표시합니다.
::

당신은 [Poveror](/docs/components/popover)구성 요소에서 모든 속성을 전 세계 또는 각 항목에 전달 할 수 있습니다.

::component-code
---
축소: true
무시하기:
  -  items
  -  orientation
  -  class
외부:
  -  items
externalTypes:
  -  NavigationMenuItem []
프로젝트:
  Popover :
    -  true
    -  false
소품 :
  Popover: true ( 사실 )
  축소: true
  방향: 수직
  항목:
    -  - label: 링크
        타입: 'label'
      - label: 가이드
        아이콘: i-lucide-book-open
        1차 하위 항목:
          - label: 소개
            설명: Nuxt에 대한 완전히 스타일이 지정되고 사용자 정의 가능한 구성 요소입니다.Fully styled and customizable components for Nuxt.
            상품명 : i-lucide-house
          - label: 설치
            응용 프로그램에서 Nuxt UI를 설치하고 구성하는 방법에 대해 알아봅니다.Learn how to install and configure Nuxt UI in your application.
            아이콘 : i-lucide-cloud-download
          - label: '아이콘'
            사진: "i-lucide-smile"
            설명: '할 일이 없습니다. @nuxt/icon이 자동으로 처리합니다.'
          - label: '색상'
            아이콘 : i-lucide-swatch-book
            설명: 'Tailwind CSS 테마에서 기본 색상과 중립 색상을 선택하십시오.'
          - label: 'Theme' 테마
            아이콘: i-lucide-cog
            설명: '당신은 `class`/`ui`props를 사용하거나 app.config.ts에서 구성 요소를 사용자 정의 할 수 있습니다.'
      - label: 합성 가능
        아이콘: i-lucide-데이터베이스
        Popover :
          모델 번호:click
        1차 하위 항목:
          -  label: defineShortcuts
            아이콘: i-lucide-file-text
            설명: 응용 프로그램에 대한 바로 가기를 정의합니다.
            to:/docs/composables/define-shortcuts 로
          -  label: useOverlay
            아이콘: i-lucide-file-text
            Description: 응용 프로그램 내에 모달/슬라이드오버를 표시합니다.
            to: /docs/composables/use-overlay 로
          -  label: useToast
            아이콘: i-lucide-file-text
            Description: 프로그램 내에 토스트를 표시합니다.
            to: /docs/composables/use-toast / 사용자가 토스트를 만들어 보세요.
      - label: 부품
        아이콘: i-lucide-box
        대상: /docs/components
        활성: true
        1차 하위 항목:
          - label: 링크
            아이콘: i-lucide-file-text
            Description: NuxtLink를 초능력과 함께 사용하십시오.
            위치:/docs/components/link
          - label: 모드
            아이콘: i-lucide-file-text
            응용 프로그램 내에 모달을 표시합니다.Display a modal within your application.
            대상:/docs/components/modal
          -  label: NavigationMenu
            아이콘: i-lucide-file-text
            설명 :   링크   목록 을   표시 합니다 .
            to :/docs/components/navigation - menu   로   이동
          - label :   페이지   매김
            아이콘 :   i - lucide - file - text
            설명 :   페이지   목록 을   표시 합니다 .
            대상 :  /docs/components/pagination
          - label :   Popover
            아이콘 :   i - lucide - file - text
            설명 :   트리거   요소   주위 에   부동 하 는   모달 이   아닌   대화 상자 를   표시 합니다 .
            대상 :  /docs/components/popover
          - label :   진행   상황
            아이콘 :   i - lucide - file - text
            설명 :   작업   진행 을   나타내 는   수평   막대 를   표시 합니다 .
            대상 :/docs/components/progress
    -   -   태그 :   GitHub
        아이콘 :   i - simple - icons - github
        배지   :   6 K
        대상 :https://github.com/nuxt/ui
        target :   _ blank   대상
        툴 팁 :
          제목 :   ' Open   on   GitHub '
          kbds :
            - @6 k
      - label :   도움 말
        아이콘 :   i - lucide - circle - help
        사용 안 함:true
---
::

::tip{to="#with-content-slot"}
`#content`slot을 사용하여 `vertical`orientation에서 포포포버의 콘텐츠를 사용자 정의할 수 있습니다.
::

###  항목에 칩 : badge{label="4.5+" class="align-text-top"}

`chip` 속성을 사용하여 [Chip](/docs/components/chip) 아이콘을 표시하면 해당 소품 중 하나를 전달할 수 있습니다.

::component-code
---
축소: true
무시하기:
  -  items
  -  클래스
외부:
  -  프로젝트
externalTypes:
  -  NavigationMenuItem []
소품 :
  축소: true
  방향: 수직
  항목:
    -  - label: 가이드
        아이콘: i-lucide-book-open
        칩 :
          색상: 오류
      - label: 합성 가능
        아이콘: i-lucide-데이터베이스
        칩 :
          색상: 정보
          문자: 3
      - label :   부품
        아이콘 :   i - lucide - box
        대상 :  /docs/components
        활성 :   true
        칩   :   True
    -   -   태그 :   GitHub
        아이콘 :   i - simple - icons - github
        대상 :https://github.com/nuxt/ui
        target :   _ blank   대상
      - label :   도움 말
        아이콘 :   i - lucide - circle - help
        사용   안   함 : true
---
::

###   하단   탭   표시 줄   포함

`ui`prop 을   사용 하 여   NavigationMenu 를   YouTube   또는   Instagram 과   유사 한   아이콘 과   작 은   레이블 이 있 는   모바일   스타일 의   하단   탭   표시줄 로   변환 합니다 .

::component-example
---
축소 :   true
name :   ' navigation - menu - bottom - tab - bar - example '   탐색 메뉴 - bottom - tab - bar - example
---
::

###   축소 된   라벨   포함

`ui`prop 을   사용 하 여   축소   시   각   아이콘   아래 에   레이블 을   표시 합니다 .

::component-example
---
축소 :   true
navigation - menu - collapsed - label - example   (navigation - menu - collapsed - label - example) 의   발음 을   navigation - menu - collapsed - label - example
---
::

::tip
또한   전   세계 적 으로  `app.config.ts`를   사용 하 여  [`compoundVariants`](/docs/getting-started/theme/components#compound-variants)을   통해   이   작업 을   수행 할   수   있 습니다 .

```ts [app/app.config.ts]
export default defineAppConfig({
  ui: {
    navigationMenu: {
      compoundVariants: [{
        orientation: 'vertical',
        collapsed: true,
        class: {
          link: 'flex-col',
          linkLabel: 'block text-[10px]/3 text-center'
        }
      }]
    }
  }
})
```

::

### 사용자   지정   슬롯   사용

`slot`  속성 을   사용 하 여   특정   항목 을   사용자   정의 합니다 .

다음 과   같 은   슬롯 에   액세스 할   수   있 습니다 .

- `#{{ item.slot }}` {lang="ts-type"} @
-  @ `#{{ item.slot }}-leading` @ @ {lang="ts-type"} @
-  @ `#{{ item.slot }}-label` @ @ {lang="ts-type"} @
- `#{{ item.slot }}-trailing`{lang="ts-type"}
- `#{{ item.slot }}-content`{lang="ts-type"}

::component-example
---
축소: true
name: 'navigation-menu-custom-slot-example' 탐색 메뉴-사용자 지정 슬롯-예제
---
::

::tip{to="#slots"}
또한 `#item`, `#item-leading`, `#item-label` 및 `#item-content` 슬롯을 사용하여 모든 항목을 사용자 정의할 수 있습니다.
::

###  트레일링 슬롯 포함

`#item-trailing`slot 또는 `slot` 속성(`#{{ item.slot }}-trailing`)을 사용하여 호버에 나타나는 [DropdownMenu](/docs/components/dropdown-menu)를 추가합니다.

::component-example
---
축소: true
이름: 'navigation-menu-trailing-slot-example'
---
::

###  콘텐츠 슬롯 포함

`#item-content`slot 또는 `slot` 속성(`#{{ item.slot }}-content`)을 사용하여 특정 항목의 콘텐츠를 사용자 지정합니다.

::component-example
---
축소: true
name: 'navigation-menu-content-slot-example' 탐색 메뉴-내용-슬롯-예제
---
::

::note
이 예제에서는 `viewport`에 `sm:w-(--reka-navigation-menu-viewport-width)` 클래스를 추가하여 동적 너비를 갖습니다. 이 경우 컨텐츠의 첫 번째 하위 구성요소에 너비를 설정해야 합니다.
::

##  API

### Props 이미지

:컴포넌트 - 소품

###  슬롯

:구성요소 - 슬롯

### Emits @ 에미츠

:구성요소 - 방사

##  테마

:구성요소 주제

##  Changelog

:component-changelog 구성요소 변경 로그
