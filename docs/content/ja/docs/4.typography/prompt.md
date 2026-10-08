---
title: ProsePrompt
description: 'ワンクリックコピーとIDE統合で、ビルド済みのAIプロンプトを表示します。'
category: components
navigation.title: Prompt
links:
  - label: サイトマップ
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/prose/Prompt.vue
---

## 使用法

`prompt`コンポーネントを使用して、ユーザーがクリップボードにコピーしたり、IDEで直接開くことができる、あらかじめ構築されたAIプロンプトを表示します。`description` propは表示ラベルとして表示され、デフォルトスロットにはコピーされるプロンプトテキストが含まれます。

::component-code{slug="prompt" prose}
---
小道具
  説明Nuxt UIでダッシュボードのレイアウトを作成します。
  クラス'w—full my—0'
隠す
  - クラス
スロット
  デフォルト|
    あなたはNuxt UIのエキスパートです。折りたたみ式サイドバーと粘着性のあるトップナビバーを備えたダッシュボードレイアウトの作成を手伝ってください。

    要件：
    - `UDashboardPanel`、`UDashboardSidebar`、および`UDashboardNavbar`を使用します。
    - `bg-elevated`や`text-muted`のようなセマンティックカラートークンを使用します。
    - サイドバーには、`UNavigationMenu`を使用したアイコン付きのナビゲーションリンクを含める必要があります。
    -  navbarにはパンくず、検索ボタン、ユーザードロップダウンメニューが表示されます。
    - レイアウトは完全に応答し、モバイルでサイドバーを折りたたむ必要があります
---
::

### アイコン

`icon`プロパティを使用して、説明の横にアイコンを表示します。

::component-code{slug="prompt" prose}
---
無視
  - 説明
隠す
  - クラス
小道具
  description：バリデーション付きのフォームを作成します。
  アイコンi—lucide—file—pen—line
  クラス'w—full my—0'
スロット
  デフォルト|
    Nuxt UIを使用してZodスキーマ検証を行います。

    要件：
    -  Zodスキーマで`UForm`を使用します。
    - 追加@@@@各入力をラッピングする：名前（`UInput`）、メール（`UInput`タイプメール）、ロール（`USelect`オプション管理者、編集者、閲覧者）
    - 読み込み状態で送信`UButton`を含める
    - 各フィールドの下にインラインエラーメッセージを表示
    - 送信に成功すると、`UToast`通知を表示します。
---
::

### アクション

`actions` propを使用して追加のボタンを表示します。`copy`ボタンは常に表示されます。使用可能なアクションは`cursor`、`windsurf`、`claude`です。

::component-code{slug="prompt" prose}
---
無視
  - 説明
  - アイコン
隠す
  - クラス
小道具
  説明カラーモードのトグルを追加します。
  アイコンi—lucide—sun moon
  アクション
    - カーソル
    -  Claude
  クラス'w—full my—0'
スロット
  デフォルト|
    私のNuxtアプリにカラーモードの切り替えを追加します。

    要件：
    - `@nuxtjs/color-mode`から`useColorMode`を使用して現在のモードを管理します。
    - `light``dark``system`の間でサイクルする`variant="ghost"`を`UButton`でレンダリングする
    - ボタンアイコンを動的に更新します：`i-lucide-sun`光、`i-lucide-moon`暗い、`i-lucide-monitor`システム
    - 現在のアクティブモードを表示する`UTooltip`を使用したツールチップを追加します。
---
::

##  API

###  Props

component—props {prose}

### スロット

component—slots {prose}

## テーマ

component—theme {prose}

##  Changelog

component—changelog {prefix="prose"}
