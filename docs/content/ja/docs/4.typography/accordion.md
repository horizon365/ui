---
title: プロセアコーディオン
description: '拡張可能なコンテンツセクションを作成します。'
category: components
navigation.title: Accordion
links:
  - label: サイトマップ
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/prose/Accordion.vue
---

## 使用法

`accordion`および`accordion-item`コンポーネントを使用して、[ Accordion ](/docs/components/accordion)をコンテンツに表示します。

::code-preview{class="[&>div]:*:my-0"}

:::accordion
---
defaultValue
  - '1'
---

::accordion-item{label="Nuxt UIは無料で使えますか？" icon="i-lucide-circle-help"}
はい！Nuxt UIはMITライセンスのもと、完全にフリーでオープンソースです。125以上のコンポーネントはすべて誰でも利用できます。
::

::accordion-item{label="NuxtなしでVueでNuxt UIを使用できますか？" icon="i-lucide-circle-help"}
はい！Nuxt用に最適化されていますが、Nuxt UIはViteプラグインを介してスタンドアロンのVueプロジェクトと完全に連携します。[インストールガイド](/docs/getting-started/installation/vue)に従って開始してください。
::

::accordion-item{label="Nuxt UIはプロダクション対応ですか？" icon="i-lucide-circle-help"}
はい！Nuxt UIは、広範なテスト、定期的なアップデート、アクティブなメンテナンスを経て、何千ものアプリケーションで運用されています。
::

:::

#コード

```mdc
::accordion
---
defaultValue:
  - '1'
---

::accordion-item{label="Is Nuxt UI free to use?" icon="i-lucide-circle-help"}
Yes! Nuxt UI is completely free and open source under the MIT license. All 125+ components are available to everyone.
::

::accordion-item{label="Can I use Nuxt UI with Vue without Nuxt?" icon="i-lucide-circle-help"}
Yes! While optimized for Nuxt, Nuxt UI works perfectly with standalone Vue projects via our Vite plugin. You can follow the [installation guide](/docs/getting-started/installation/vue) to get started.
::

::accordion-item{label="Is Nuxt UI production-ready?" icon="i-lucide-circle-help"}
Yes! Nuxt UI is used in production by thousands of applications with extensive tests, regular updates, and active maintenance.
::

::
```

::

##  API

###  Props

component—props {prose}

### スロット

component—slots {prose}

## テーマ

::component-theme{prose}
---
追加
  -  accordionItem
---
::

##  Changelog

component—changelog {prefix="prose"}
