---
title: ProseFieldGroup (프로시드필드그룹)
description: '관련 필드를 그룹화하여 포괄적인 API 문서화합니다.'
category: components
navigation.title: FieldGroup
links:
  - label: Github (GitHub)
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/prose/FieldGroup.vue
---

## Usage

필드를 리스트로 그룹화합니다.

:::code-preview

::field-group{class="my-0"}

  ::field{name="analytics" type="boolean"}
  기본값은 `false`입니다. 프로젝트에 대한 분석을 활성화합니다(곧 제공될 예정).
  ::

  ::field{name="blob" type="boolean"}
  기본값은 `false`입니다. Blob 저장소에서 이미지, 비디오 등과 같은 정적 자산을 저장할 수 있도록 합니다.
  ::

  ::field{name="cache" type="boolean"}
  기본값은 `false`입니다. Nitro의 `cachedEventHandler` 및 xph05x를 사용하여 서버 라우팅 응답 또는 함수를 캐시할 수 있도록 캐시 저장소를 활성화합니다.
  ::

  ::field{name="database" type="boolean"}
  기본값은 `false`입니다. SQL 데이터베이스에서 응용 프로그램의 데이터를 저장할 수 있습니다.
  ::

::

#code

```mdc
::field-group
  ::field{name="analytics" type="boolean"}
    Defaults to `false`. Enables analytics for your project (coming soon).
  ::

  ::field{name="blob" type="boolean"}
    Defaults to `false`. Enables blob storage to store static assets, such as images, videos and more.
  ::

  ::field{name="cache" type="boolean"}
    Defaults to `false`. Enables cache storage to cache your server route responses or functions using Nitro's `cachedEventHandler` and `cachedFunction`.
  ::

  ::field{name="database" type="boolean"}
    Defaults to `false`. Enables SQL database to store your application's data.
  ::
::
```

:::

## API

### Props (### Props)

:component-props{prose}

### 슬롯

:component-slots{prose}

## 테마

:component-theme{prose}

## Changelog 파일

:component-changelog{prefix="prose"}
