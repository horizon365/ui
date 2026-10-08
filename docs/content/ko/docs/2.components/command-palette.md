---
title: Command팔레트
description: 효율적인 퍼지 매칭을 위해 Fuse.js로 구동되는 전체 텍스트 검색이 포함된 명령 팔레트입니다.
category: navigation
keywords:
  - command menu
  - cmdk
  - spotlight
  - global search
links:
  - label: Fuse.js
    icon: i-custom-fuse-js
    to: https://fusejs.io/
    target: _blank
  - label: 목록 상자
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/listbox
  - label: Github (GitHub)
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/CommandPalette.vue
---

##  사용

`v-model` 지시문을 사용하여 CommandPalette의 값을 제어하거나 `default-value`prop을 사용하여 상태를 제어할 필요가 없을 때 초기 값을 설정합니다.

::component-code
---
축소: true
숨기기 (Hide):
  - autofocus @ 자동 초점
무시하기:
  -  그룹
  - modelValue - modelValue 이미지
  -  클래스
외부:
  -  그룹
  - modelValue - modelValue 이미지
externalTypes:
  - CommandPaletteGroup []
클래스 : "!p-0"
소품 :
  모델값: {}
  자동 초점:false
  그룹 :
    - id: '사용자'
      레이블: "Users"
      프로젝트:
        - label: '벤자민 카낙'
          이름: Benjamincanac
          아바타 (Avatar):
            src: 'https://github.com/benjamincanac.png'
            로드: Lazy
        - label: 'Hugo Richard'
          접미사: 'HugoRCD'
          아바타 (Avatar):
            src: 'https://github.com/HugoRCD.png'
            로드: Lazy
        - label: 'Sébastien Chopin'
          사진: "atinux"
          아바타 (Avatar):
            src: 'https://github.com/atinux.png'
            로드: Lazy
        - label: 'Romain Hamel'
          접미사: "romhml"
          아바타 (Avatar):
            src: 'https://github.com/romhml.png'
            로드: Lazy
        - label: '산드로 서커스'
          접미어: 'sandros94'
          아바타 (Avatar):
            src: 'https://github.com/sandros94.png'
            로드: Lazy
        - label: 'Jakub Michalek'
          이름: J-Michalek
          아바타 (Avatar):
            src: 'https://github.com/J-Michalek.png'
            로드: Lazy
        - label: '알렉스'
          사진: "hywax"
          아바타 (Avatar):
            src: 'https://github.com/hywax.png'
            로드: Lazy
        - label: 'Maxime Pauvert'
          접미사: 'maximepvrt'
          아바타 (Avatar):
            src: 'https://github.com/maximepvrt.png'
            로드: Lazy
  클래스 : 'flex-1 h-80'
---
::

::tip{to="#control-selected-items"}
또한 `@update:model-value` 이벤트를 사용하여 선택한 항목을 들을 수 있습니다.
::

###  그룹

CommandPalette 구성 요소는 사용자 입력에 따라 일치하는 명령을 그룹화하고 순위를 지정합니다. 효율적인 명령 검색을 위해 동적인 즉각적인 검색 결과를 제공합니다. `groups`prop을 다음 등록 정보를 가진 객체 배열로 사용합니다.

-  @ `id: string` @ @ {lang="ts-type"} @
-  @ `label?: string` @ @ {lang="ts-type"} @
- `slot?: string`{lang="ts-type"}
- `items?: CommandPaletteItem[]`{lang="ts-type"}
- [`ignoreFilter?: boolean`{lang="ts-type"}](#with-ignore-filter)
-  @ [ @ @ `postFilter?: (searchTerm: string, items: T[]) => T[]` @ {lang="ts-type"} @ ]( @ #with-post-filtered-items @ ) @
- `highlightedIcon?: string` {lang="ts-type"}

::caution
각 그룹에 대해 `id`를 입력해야 합니다. 그렇지 않으면 그룹이 무시됩니다.
::

각 그룹에는 명령을 정의하는 `items` 객체 배열이 포함되어 있습니다. 각 항목에는 다음 등록 정보가 있을 수 있습니다.

-  @ `prefix?: string` @ @ {lang="ts-type"} @
-  @ `label?: string` @ @ {lang="ts-type"} @
- `suffix?: string`{lang="ts-type"}
-  @ `icon?: string` @ {lang="ts-type"} @
-  @ `avatar?: AvatarProps` @ @ {lang="ts-type"} @
- `chip?: ChipProps` {lang="ts-type"}
-  @ `kbds?: string[] | KbdProps[]` @ @ {lang="ts-type"} @
-  @ `active?: boolean` @ {lang="ts-type"}
-  @ `loading?: boolean` @ {lang="ts-type"}
- `disabled?: boolean`{lang="ts-type"}
- [`slot?: string`{lang="ts-type"}](#with-custom-slot)
- `placeholder?: string`{lang="ts-type"}
- `children?: CommandPaletteItem[]`{lang="ts-type"}
- `onSelect?: (e: Event) => void`{lang="ts-type"}
- `class?: any`{lang="ts-type"}
- `ui?: { item?: ClassNameValue, itemLeadingIcon?: ClassNameValue, itemLeadingAvatarSize?: ClassNameValue, itemLeadingAvatar?: ClassNameValue, itemLeadingChipSize?: ClassNameValue, itemLeadingChip?: ClassNameValue, itemLabel?: ClassNameValue, itemLabelPrefix?: ClassNameValue, itemLabelBase?: ClassNameValue, itemLabelSuffix?: ClassNameValue, itemTrailing?: ClassNameValue, itemTrailingKbds?: ClassNameValue, itemTrailingKbdsSize?: ClassNameValue, itemTrailingHighlightedIcon?: ClassNameValue, itemTrailingIcon?: ClassNameValue }`{lang="ts-type"}

당신은 [Link](/docs/components/link#props) 구성 요소에서 모든 속성을 전달 할 수 있습니다 `to`, `target` 등.

::component-code
---
축소: true
숨기기 (Hide):
  - autofocus @ 자동 초점
무시하기:
  -  그룹
  - modelValue - modelValue 이미지
  -  클래스
외부:
  -  그룹
  - modelValue - modelValue 이미지
externalTypes:
  -  CommandPaletteGroup []
클래스: "!p-0"
소품 :
  모델값: {}
  자동 초점:false
  그룹 :
    - id: '사용자'
      레이블: "Users"
      프로젝트:
        - label: '벤자민 카낙'
          이름: Benjamincanac
          아바타 (Avatar):
            src: 'https://github.com/benjamincanac.png'
            로드: Lazy
        - label: 'Hugo Richard'
          접미사: 'HugoRCD'
          아바타 (Avatar):
            src: 'https://github.com/HugoRCD.png'
            로드: Lazy
        - label: '세바스티앙 쇼팽'
          사진: "atinux"
          아바타 (Avatar):
            src: 'https://github.com/atinux.png'
            로드: Lazy
        - label: 'Romain Hamel'
          접미사: "romhml"
          아바타 (Avatar):
            src: 'https://github.com/romhml.png'
            로드: Lazy
        - label: '산드로 서커스'
          접미사: 'sandros94'
          아바타 (Avatar):
            src: 'https://github.com/sandros94.png'
            로드: Lazy
        - label: 'Jakub Michalek'
          이름: J-Michalek
          아바타 (Avatar):
            src: 'https://github.com/J-Michalek.png'
            로드: Lazy
        - label: '알렉스'
          사진: "hywax"
          아바타 (Avatar):
            src: 'https://github.com/hywax.png'
            로드: Lazy
        - label: 'Maxime Pauvert'
          접미사: 'maximepvrt'
          아바타 (Avatar):
            src: 'https://github. com/maximepvrt. png'
            로드: Lazy
  클래스: flex-1
---
::

::tip{to="#with-children-in-items"}
각 항목은 다음 속성을 가진 `children` 객체의 배열을 사용하여 하위 메뉴를 작성할 수 있습니다.
::

###  다중

`multiple`prop을 사용하여 여러 개의 선택을 허용합니다.

::component-code
---
축소: true
숨기기 (Hide):
  - autofocus @ 자동 초점
무시하기:
  -  그룹
  - modelValue - modelValue 이미지
  - multiple @ 다중
  -  클래스
외부:
  -  그룹
  - modelValue - modelValue 이미지
externalTypes:
  -  CommandPaletteGroup []
클래스: "!p-0"
소품 :
  다중: True
  자동 초점:false
  modelValue: []
  그룹:
    - id: '사용자'
      레이블: "Users"
      프로젝트:
        - label: '벤자민 카낙'
          이름: Benjamincanac
          아바타 (Avatar):
            src: 'https://github.com/benjamincanac.png'
            로드: Lazy
        - label: 'Hugo Richard'
          접미사: 'HugoRCD'
          아바타 (Avatar):
            src: 'https://github.com/HugoRCD.png'
            로드: Lazy
        - label: 'Sébastien Chopin'
          사진: "atinux"
          아바타 (Avatar):
            src: 'https://github.com/atinux.png'
            로드: Lazy
        - label: 'Romain Hamel'
          접미사: "romhml"
          아바타 (Avatar):
            src: 'https://github.com/romhml.png'
            로드: Lazy
        - label: '산드로 서커스'
          접미사: 'sandros94'
          아바타 (Avatar):
            src: 'https://github.com/sandros94.png'
            로드: Lazy
        - label: 'Jakub Michalek'
          이름: J-Michalek
          아바타 (Avatar):
            src: 'https://github.com/J-Michalek.png'
            로드: Lazy
        - label: '알렉스'
          사진: "hywax"
          아바타 (Avatar):
            src: 'https://github.com/hywax.png'
            로드: Lazy
        - label: 'Maxime Pauvert'
          접미사: 'maximepvrt'
          아바타 (Avatar):
            src: 'https://github.com/maximepvrt.png'
            로드: Lazy
  클래스: flex-1
---
::

::caution
배열을 `default-value`prop 또는 `v-model` 지시문에 전달해야 합니다.
::

### 자리 표시자

`placeholder`prop을 사용하여 자리 표시자 텍스트를 변경합니다.

::component-code
---
축소: true
숨기기 (Hide):
  - autofocus @ 자동 초점
무시하기:
  -  클래스
  -  그룹
외부:
  -  그룹
externalTypes:
  -  CommandPaletteGroup []
클래스: "!p-0"
소품 :
  자동 초점:false
  자리 표시자: '앱 검색...'
  그룹 :
    - id: 'apps'
      프로젝트:
        - label: '달력'
          아이콘: 'i-lucide-calendar'
        - label: '음악'
          아이콘 : i-lucide-music
        - label: '지도'
          아이콘 : i-lucide-map
  클래스: flex-1
---
::

### 크기: badge{label="4.4+" class="align-text-top"}

`size`prop 을 사용하여 CommandPalette 의 크기를 변경합니다.

::component-code
---
축소: true
숨기기 (Hide):
  - autofocus @ 자동 초점
무시하기:
  -  클래스
  -  그룹
외부:
  -  그룹
externalTypes:
  -  CommandPaletteGroup []
클래스: "!p-0"
소품 :
  자동 초점:false
  크기: "xl"
  그룹:
    - id: 'apps' 입니다.
      항목:
        - label: '달력'
          아이콘: 'i-lucide-calendar'
        - label: '음악'
          아이콘 : i-lucide-music
        - label: '지도'
          아이콘 : i-lucide-map
  클래스: flex-1
---
::

###  아이콘

`icon`prop을 사용하여 [Icon](/docs/components/icon) 입력을 사용자 지정합니다. 기본값은 `i-lucide-search`입니다.

::component-code
---
축소: true
숨기기 (Hide):
  - autofocus @ 자동 초점
무시하기:
  -  클래스
  -  그룹
외부:
  -  그룹
externalTypes:
  -  CommandPaletteGroup []
클래스 : "!p-0"
소품 :
  자동 초점:false
  아이콘 : i-lucide-box
  그룹 :
    - id: 'apps' 입니다.
      프로젝트:
        - label: '달력'
          아이콘: 'i-lucide-calendar'
        - label: '음악'
          아이콘 : i-lucide-music
        - label: '지도'
          아이콘 : i-lucide-map
  클래스: flex-1
---
::

::framework-only
#nuxt #nuxt
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
이 아이콘은 `app.config.ts` 아래 `ui.icons.search` 키에서 전역적으로 사용자 지정할 수 있습니다.
:::

#vue #vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
이 아이콘은 `vite.config.ts` 아래 `ui.icons.search` 키에서 전역적으로 사용자 정의할 수 있습니다.
:::
::

### 선택한 아이콘

`selected-icon`prop을 사용하여 선택한 항목을 사용자 지정합니다.[Icon](/docs/components/icon). 기본값은 `i-lucide-check`입니다.

::component-code
---
축소: true
숨기기 (Hide):
  - autofocus @ 자동 초점
무시하기:
  -  그룹
  - modelValue - modelValue 이미지
  - multiple @ 다중
  -  클래스
외부:
  -  그룹
  - modelValue - modelValue 이미지
externalTypes:
  -  CommandPaletteGroup []
클래스 : "!p-0"
소품 :
  다중: true
  자동 초점:false
  ModelValue:
    - label: '벤자민 카낙'
      이름: Benjamincanac
      아바타 (Avatar):
        src: 'https://github.com/benjamincanac.png'
        로드: Lazy
  selectedIcon : 'i-lucide-circle-check'
  그룹:
    - id: '사용자'
      레이블: "Users"
      항목:
        - label: '벤자민 카낙'
          이름: Benjamincanac
          아바타 (Avatar):
            src: 'https://github.com/benjamincanac.png'
            로드: Lazy
        - label: 'Hugo Richard'
          접미사: 'HugoRCD'
          아바타 (Avatar):
            src: 'https://github.com/HugoRCD.png'
            로드: Lazy
        - label: '세바스티앙 쇼팽'
          사진: "atinux"
          아바타 (Avatar):
            src: 'https://github.com/atinux.png'
            로드: Lazy
        - label: 'Romain Hamel'
          접미사: "romhml"
          아바타 (Avatar):
            src: 'https://github.com/romhml.png'
            로드: Lazy
        - label: '산드로 서커스'
          접미어: 'sandros94'
          아바타 (Avatar):
            src: 'https://github.com/sandros94.png'
            로드: Lazy
        - label: 'Jakub Michalek'
          이름: J-Michalek
          아바타 (Avatar):
            src: 'https://github.com/J-Michalek.png'
            로드: Lazy
        - label: '알렉스'
          사진: "hywax"
          아바타 (Avatar):
            src: 'https://github.com/hywax.png'
            로드: Lazy
        - label: 'Maxime Pauvert'
          접미사: 'maximepvrt'
          아바타 (Avatar):
            src: 'https://github.com/maximepvrt.png'
            로드: Lazy
  클래스: flex-1
---
::

::framework-only
#nuxt #nuxt
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
이 아이콘은 `app.config.ts` 아래 `ui.icons.check` 키에서 전역적으로 사용자 지정할 수 있습니다.
:::

#vue #vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
이 아이콘은 `vite.config.ts` 아래 `ui.icons.check` 키에서 전역적으로 사용자 지정할 수 있습니다.
:::
::

### 트레일링 아이콘

`trailing-icon`prop을 사용하여 항목에 하위 항목이 있을 때 후행 [Icon](/docs/components/icon) 을 사용자 정의합니다. 기본값은 `i-lucide-chevron-right`입니다.

::component-code
---
축소: true
상품명 : True
숨기기 (Hide):
  - autofocus @ 자동 초점
무시하기:
  -  그룹
  -  클래스
외부:
  -  그룹
externalTypes:
  - CommandPaletteGroup []
클래스 : "!p-0"
소품 :
  자동 초점:false
  trailingIcon: 'i-lucide-arrow-right'
  그룹:
    - id: '액션'
      프로젝트:
        - label: '공유'
          아이콘: 'i-lucide-share'
          1차 하위 항목:
            - label: '이메일'
              아이콘 : i-lucide-mail
            - label: '복사'
              아이콘: 'i-lucide-copy'
            - label: '링크'
              아이콘: 'i-lucide-link'
  클래스: flex-1
---
::

::framework-only
#nuxt #nuxt
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
이 아이콘은 `app.config.ts` 아래 `ui.icons.chevronRight` 키에서 전역적으로 사용자 지정할 수 있습니다.
:::

#vue #vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
이 아이콘은 `vite.config.ts` 아래 `ui.icons.chevronRight` 키에서 전역적으로 사용자 지정할 수 있습니다.
:::
::

###  로딩 중

`loading`prop을 사용하여 CommandPalette에 로드 아이콘을 표시합니다.

::component-code
---
축소: true
숨기기 (Hide):
  - autofocus @ 자동 초점
무시하기:
  -  class
  -  그룹
외부:
  -  그룹
externalTypes:
  -  CommandPaletteGroup []
클래스: "!p-0"
소품 :
  자동 초점:false
  로드: true
  그룹:
    - id: 'apps'
      프로젝트:
        - label: '달력'
          아이콘: 'i-lucide-calendar'
        - label: '음악'
          아이콘 : i-lucide-music
        - label: '지도'
          아이콘 : i-lucide-map
  클래스: flex-1
---
::

### Loading Icon (아이콘 로드)

`loading-icon`prop을 사용하여 로드 아이콘을 사용자 정의합니다. 기본값은 `i-lucide-loader-circle`입니다.

::component-code
---
축소: true
숨기기 (Hide):
  - autofocus @ 자동 초점
무시하기:
  -  class
  -  그룹
외부:
  -  그룹
externalTypes:
  -  CommandPaletteGroup []
클래스: "!p-0"
소품 :
  자동 초점:false
  로드: true
  loadingIcon: 'i-lucide-loader'
  그룹:
    - id: '앱'
      프로젝트:
        - label: '달력'
          아이콘: 'i-lucide-calendar'
        - label: '음악'
          아이콘 : i-lucide-music
        - label: '지도'
          아이콘 : i-lucide-map
  클래스: flex-1
---
::

::framework-only
#nuxt 코드
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
이 아이콘은 `app.config.ts` 아래 `ui.icons.loading` 키에서 전역적으로 사용자 지정할 수 있습니다.
:::

#vue #vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
이 아이콘은 `vite.config.ts` 아래 `ui.icons.loading` 키에서 전역적으로 사용자 지정할 수 있습니다.
:::
::

###  닫기

`close`prop을 사용하여 [Button](/docs/components/button)를 표시하여 CommandPalette를 해제합니다.

::tip
닫기 단추를 클릭하면 `update:open` 이벤트가 발생합니다.
::

::component-code
---
축소: true
숨기기 (Hide):
  -  autofocus
무시하기:
  -  class
  -  그룹
  -  닫기
외부:
  -  그룹
externalTypes:
  -  CommandPaletteGroup []
클래스 : "!p-0"
소품 :
  자동 초점:false
  닫기: true
  그룹 :
    - id: 'apps'
      항목:
        - label: '달력'
          아이콘: 'i-lucide-calendar'
        - label: '음악'
          아이콘 : i-lucide-music
        - label: '지도'
          아이콘 : i-lucide-map
  클래스: flex-1
---
::

[Button](/docs/components/button) 구성 요소에서 속성을 전달하여 사용자 지정할 수 있습니다.

::component-code
---
축소: true
상품명 : True
숨기기 (Hide):
  - autofocus @ 자동 초점
무시하기:
  -  close. color
  - close.variant - close.variant
  -  그룹
  -  class
외부:
  -  그룹
externalTypes:
  -  CommandPaletteGroup []
클래스 : "!p-0"
소품 :
  자동 초점:false
  닫기:
    색상: 기본
    변형: 윤곽선
    클래스: rounded-full
  그룹:
    - id: 'apps'
      항목:
        - label: '달력'
          아이콘: 'i-lucide-calendar'
        - label: '음악'
          아이콘 : i-lucide-music
        - label: '지도'
          아이콘 : i-lucide-map
  클래스: flex-1
---
::

### 아이콘 닫기

`close-icon`prop을 사용하여 닫기 버튼을 사용자 정의합니다.[Icon](/docs/components/icon). 기본값은`i-lucide-x`입니다.

::component-code
---
축소: true
숨기기 (Hide):
  - autofocus @ 자동 초점
무시하기:
  -  class
  -  그룹
  -  닫기
외부:
  -  그룹
externalTypes:
  -  CommandPaletteGroup []
클래스 : "!p-0"
소품 :
  자동 초점:false
  닫기: True
  closeIcon: 'i-lucide-arrow-right'
  그룹 :
    - id: 'apps' 입니다.
      프로젝트:
        - label: '달력'
          아이콘: 'i-lucide-calendar'
        - label: '음악'
          아이콘 : i-lucide-music
        - label: '지도'
          아이콘 : i-lucide-map
  클래스: flex-1
---
::

::framework-only
#nuxt #nuxt
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
이 아이콘은 `app.config.ts` 아래 `ui.icons.close` 키에서 전역적으로 사용자 지정할 수 있습니다.
:::

#vue #vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
이 아이콘은 `vite.config.ts` 아래 `ui.icons.close` 키에서 전역적으로 사용자 지정할 수 있습니다.
:::
::

###  뒤로

`back`prop을 사용하여 하위 메뉴로 이동할 때 표시된 뒤로 버튼(`false` 값)을 사용자 정의하거나 숨깁니다.

[Button](/docs/components/button) 구성 요소에서 모든 속성을 전달하여 사용자 지정할 수 있습니다.

::component-code
---
축소: true
상품명 : True
숨기기 (Hide):
  - autofocus @ 자동 초점
무시하기:
  -  back. color
  -  그룹
  -  클래스
외부:
  -  그룹
externalTypes:
  - CommandPaletteGroup []
클래스 : "!p-0"
소품 :
  자동 초점:false
  뒤로:
    색상: 기본
  그룹 :
    - id: '액션'
      항목:
        - label: '공유'
          아이콘: 'i-lucide-share'
          1차 하위 항목:
            - label: '이메일'
              아이콘 : i-lucide-mail
            - label: '복사'
              아이콘: 'i-lucide-copy'
            - label: '링크'
              아이콘: 'i-lucide-link'
  클래스: flex-1
---
::

### 뒤로 아이콘

`back-icon`prop을 사용하여 뒤로 버튼을 사용자 지정합니다.[Icon](/docs/components/icon). 기본값은`i-lucide-arrow-left`입니다.

::component-code
---
축소: true
숨기기 (Hide):
  - autofocus @ 자동 초점
무시하기:
  -  클래스
  -  그룹
  -  뒤로
외부:
  -  그룹
externalTypes:
  - CommandPaletteGroup []
클래스: "!p-0"
소품 :
  자동 초점:false
  뒤로: true
  backIcon: 'i-lucide-house'에 해당되는 글 1건
  그룹 :
    - id: '액션'
      항목:
        - label: '공유'
          아이콘: 'i-lucide-share'
          1차 하위 항목:
            - label: '이메일'
              아이콘: i-lucide-mail
            - label: '복사'
              아이콘: 'i-lucide-copy'
            - label: '링크'
              아이콘: 'i-lucide-link'
  클래스: flex-1
---
::

::framework-only
#nuxt 코드
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
이 아이콘은 `app.config.ts` 아래 `ui.icons.arrowLeft` 키에서 전역적으로 사용자 지정할 수 있습니다.
:::

#vue #vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
이 아이콘은 `vite.config.ts` 아래 `ui.icons.arrowLeft` 키에서 전역적으로 사용자 지정할 수 있습니다.
:::
::

###  비활성 화

`disabled`prop 을 사용하여 CommandPalette 를 비활성화합니다.

::component-code
---
축소: true
숨기기 (Hide):
  - autofocus @ 자동 초점
무시하기:
  -  그룹
  -  클래스
외부:
  -  그룹
externalTypes:
  -  CommandPaletteGroup []
클래스 : "!p-0"
소품 :
  자동 초점:false
  사용 안 함:true
  그룹 :
    - id: 'apps' 입니다.
      프로젝트:
        - label: '달력'
          아이콘: 'i-lucide-calendar'
        - label: '음악'
          아이콘 : i-lucide-music
        - label: '지도'
          아이콘 : i-lucide-map
  클래스: flex-1
---
::

##  예

### 선택한 항목 제어

선택된 항목은 `default-value`prop 또는 `v-model` 지시문을 사용하거나 각 항목에 `onSelect` 필드를 사용하거나 `@update:model-value` 이벤트를 사용하여 제어할 수 있습니다.

::component-example
---
축소: true
이름: 'command-palette-select-example'
클래스: "!p-0"
소품 :
  자동 초점:false
---
::

::tip
`value-key`prop을 사용하여 객체 자체가 아닌 값으로 사용할 항목의 필드를 선택합니다. `by`prop을 사용하여 참조 대신 필드로 객체를 비교합니다.
::

###  검색 용어 제어

`v-model:search-term` 지시문을 사용하여 검색 용어를 제어합니다.

::component-example
---
축소: true
이름: 'command-palette-search-term-example'
클래스: "!p-0"
소품 :
  자동 초점:false
---
::

::note
이 예제에서는 `@update:model-value` 이벤트를 사용하여 항목을 선택할 때 검색 용어를 재설정합니다.
::

###  어린이 프로젝트

항목에 `children` 등록 정보를 사용하여 계층 메뉴를 생성할 수 있습니다. 항목에 1차 하위 구성요소가 있으면 자동으로 갈매기 모양 아이콘이 표시되고 하위 메뉴로 이동할 수 있습니다.

::component-example
---
축소: true
상품명 : True
이름: 'command-palette-items-children-example'
클래스: "!p-0"
소품 :
  자동 초점:false
---
::

::note
하위 메뉴로 이동하는 경우:
-  검색 용어가 재설정되었습니다.
- A 뒤로 버튼이 입력에 나타납니다.
-  이전 그룹으로 돌아갈 수 있습니다. kbd{value="backspace"}key
::

###  가져온 항목과 함께

API에서 항목을 가져오고 CommandPalette에서 사용할 수 있습니다.

::component-example
---
축소: true
이름: 'command-palette-fetch-example'
클래스: "!p-0"
소품 :
  자동 초점:false
---
::

::note
이 예에서는 `useLazyFetch`와 `server: false`를 사용하여 초기 렌더링을 차단하지 않고 클라이언트에서 데이터를 검색합니다. 로드 상태에서는 `pending` 및 `idle`status를 모두 확인하여 가져오기 전과 프로세스 중에 로드 표시기를 표시합니다.
::

###  무시 필터

그룹에서 `ignoreFilter` 필드를 `true`로 설정하여 내부 검색을 비활성화하고 자체 검색 논리를 사용할 수 있습니다.

::component-example
---
축소: true
이름: 'command-palette-ignore-filter-example'
클래스 : "!p-0"
소품 :
  자동 초점:false
---
::

::note
이 예에서는 [`refDebounced`](https://vueuse.org/shared/refDebounced/#refdebounced)을 사용하여 API 호출을 선언합니다. 로드 상태는 `pending` 및 `idle`status 모두를 확인하여 가져오기 전과 진행 중에 로드 표시기를 표시합니다.
::

###  후 필터링된 항목 포함

그룹의 `postFilter` 필드를 사용하여 검색이 수행된 후 항목을 필터링할 수 있습니다.

::component-example
---
축소: true
이름: 'command-palette-post-filter-example'
클래스 : "!p-0"
소품 :
  자동 초점:false
---
::

::note
입력을 시작하여 상위 레벨의 항목이 표시되는지 확인합니다.
::

### 사용자 정의 퓨즈 검색

`fuse`prop을 사용하여 [useFuse](https://vueuse.org/integrations/useFuse)의 옵션을 재정의할 수 있습니다. 기본값은 다음과 같습니다.

```ts
{
  fuseOptions: {
    ignoreLocation: true,
    threshold: 0.1,
    keys: ['label', 'description', 'suffix']
  },
  resultLimit: 12,
  matchAllWhenSearchEmpty: true
}
```

::tip
`fuseOptions`는 [Fuse.js](https://www.fusejs.io/)의 옵션이며, `resultLimit`는 검색 용어가 비어 있을 때 모든 항목과 일치하는 부울입니다.
::

예를 들어 `{ fuseOptions: { includeMatches: true } }`{lang="ts-type"}를 설정하여 항목에서 검색 용어를 강조 표시할 수 있습니다.

::component-example
---
축소: true
name: 'command-palette-fuse-example' 명령어 팔레트-fuse-example
클래스: "!p-0"
소품 :
  자동 초점:false
---
::

###  가상화 사용: badge{label="4.1+" class="align-text-top"}

`virtualize`prop을 사용하여 큰 목록에 대해 부울 또는 `{ estimateSize: 32, overscan: 12 }`와 같은 옵션이 있는 개체로 가상화를 활성화합니다.

::warning{to="https://github.com/unovue/reka-ui/issues/1885" target="_blank"}
설정하면 Reka UI의 제한으로 인해 모든 그룹이 단일 리스트로 병합됩니다.
::

::component-example
---
축소: true
이름: 'command-palette-virtualize-example'
클래스: "!p-0"
소품 :
  자동 초점:false
---
::

###  포포포버 안에서

CommandPalette 구성 요소는 [Popher](/docs/components/popover)의 콘텐츠 내에서 사용할 수 있습니다.

::component-example
---
축소: true
이름 : popher-command-palette-example
소품 :
  자동 초점:false
---
::

###  Within a Modal (내부 어 모드)

CommandPalette 구성 요소는 [Modal](/docs/components/modal)의 콘텐츠 내에서 사용할 수 있습니다.

::component-example
---
축소: true
이름: 'modal-command-palette-example'
소품 :
  자동 초점:false
---
::

::note
이 예제에서는 `useLazyFetch`와 `immediate: false`를 사용하여 Modal이 열릴 때만 데이터를 가져옵니다.
::

###  서랍 안에

CommandPalette 구성 요소는 [Drawer](/docs/components/drawer)의 콘텐츠 내에서 사용할 수 있습니다.

::component-example
---
축소: true
이름: 'drawer-command-palette-example'
소품 :
  자동 초점:false
---
::

::note
이 예제에서는 `useLazyFetch`와 `immediate: false`를 사용하여 Drawer가 열릴 때만 데이터를 가져옵니다.
::

###  Listen open state 열기 상태

`close`prop을 사용할 때 버튼을 클릭하면 `update:open` 이벤트를 들을 수 있습니다.

::component-example
---
축소: true
이름: 'command-palette-open-example'
소품 :
  자동 초점:false
---
::

::note
이 기능은 [`Modal`](/docs/components/modal)와 같은 CommandPalette 내부에서 사용할 때 유용합니다.
::

###  바닥글 슬롯 포함

`#footer` 슬롯을 사용하여 CommandPalette 맨 아래에 키보드 바로 가기 도움말 또는 추가 작업과 같은 사용자 정의 컨텐츠를 추가합니다.

::component-example
---
축소: true
이름: 'command-palette-footer-slot-example'
클래스: "!p-0"
소품 :
  자동 초점:false
---
::

### 사용자 지정 슬롯 사용

`slot` 등록 정보를 사용하여 특정 항목이나 그룹을 사용자 정의합니다.

다음과 같은 슬롯에 액세스할 수 있습니다.

- `#{{ item.slot }}` {lang="ts-type"} @
-  @ `#{{ item.slot }}-leading` @ {lang="ts-type"} @
-  @ `#{{ item.slot }}-label` @ @ {lang="ts-type"} @
- `#{{ item.slot }}-trailing`{lang="ts-type"}

- `#{{ group.slot }}`{lang="ts-type"}
- `#{{ group.slot }}-leading`{lang="ts-type"}
- `#{{ group.slot }}-label`{lang="ts-type"}
- `#{{ group.slot }}-trailing` {lang="ts-type"}

::component-example
---
축소: true
이름: 'command-palette-custom-slot-example'
클래스 : "!p-0"
소품 :
  자동 초점:false
---
::

::tip{to="#slots"}
또한 `#item``#item-leading``#item-label` 및 `#item-trailing` 슬롯을 사용하여 모든 항목을 사용자 정의 할 수 있습니다.
::

##  API

###  Props

:컴포넌트 - 소품

###  슬롯

:컴포넌트 - 슬롯

### Emits @ 에미츠

:구성요소 - 방출

##  테마

:구성요소 - 주제

##  Changelog

:component-changelog 구성요소 변경 로그
