---
title: ProseCode그룹
description: '쉽게 비교할 수 있도록 탭 인터페이스에 여러 코드 예제를 그룹화합니다.'
category: components
navigation.title: CodeGroup
links:
  - label: Github (GitHub)
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/prose/CodeGroup.vue
---

## Usage

`code-group` 구성 요소 주위에 코드 블록을 래핑하여 탭으로 그룹화합니다.

::code-preview{class="[&>div]:*:my-0 [&>div]:*:w-full"}

:::code-group

```bash [pnpm]
pnpm add @nuxt/ui
```

```bash [yarn]
yarn add @nuxt/ui
```

```bash [npm]
npm install @nuxt/ui
```

```bash [bun]
bun add @nuxt/ui
```

:::

#code

````mdc
::code-group

```bash [pnpm]
pnpm add@nuxt/ui 추가
```

```bash [yarn]
yarn add@nuxt/ui (yarn add@nuxt/ui) / (으)
```

```bash [npm]
npm install@nuxt/ui / 설치
```

```bash [bun]
bun add@nuxt/ui / bun add @nuxt/ui ( bun add @nuxt/ui ) 를 클릭하십시오 .
```

::
````

::

::note{to="/docs/typography/code#code-blocks"}
`ProsePre` 구성 요소와 마찬가지로 `CodeGroup`는 파일 이름, 아이콘 및 복사 버튼을 처리합니다.
::

## API 파일

### Props (### Props)

:component-props{prose}

### Slots

:component-slots{prose}

## Theme 테마

:component-theme{prose}

## 변경 로그

:component-changelog{prefix="prose"}
