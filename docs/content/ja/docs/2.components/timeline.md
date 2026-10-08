---
description: '日付、タイトル、アイコン、またはアバターを含む一連のイベントを表示するコンポーネント。'
category: data
keywords:
  - activity feed
  - history
links:
  - label: サイトマップ
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Timeline.vue
---

## 使用法

タイムラインコンポーネントを使用して、タイムラインに項目のリストを表示します。

::component-code
---
崩壊真
隠す
  - クラス
  -  defaultValue
無視
  - アイテム
  - クラス
  -  defaultValue
外部
  - アイテム
externalTypes
  -  TimelineItem []
小道具
  defaultValue 2
  アイテム
    -  date '2025年3月15日'
      title「プロジェクト·キックオフ」
      説明'チーム調整でプロジェクトを開始しました。プロジェクトのマイルストーンと割り当てられたリソースを設定します。'
      アイコン'i—lucide—rocket'
    -  date 'Mar 22 2025'
      title「デザインフェーズ」
      説明：'ユーザーリサーチとデザインワークショップ。ユーザーテストのためのワイヤーフレームとプロトタイプを作成。'
      アイコン'i—lucide—palette'
    -  date '2025年3月29日'
      title「開発スプリント」
      description 'フロントエンドとバックエンドの開発。コア機能を実装し、APIと統合しました。'
      アイコン'i—lucide—code'
    -  date 'Apr 5 2025'
      title 'テスト&デプロイメント'
      説明：'QAテストとパフォーマンス最適化。アプリケーションを本番環境にデプロイしました。
      アイコン'i—lucide—check—circle'
  クラス'w—96'
---
::

### アイテム

`items` propを、次のプロパティを持つオブジェクトの配列として使用します。

- `date?: string`{lang="ts-type"}
- `title?: string`{lang="ts-type"}
- `description?: AvatarProps`{lang="ts-type"}
- `icon?: string`{lang="ts-type"}
- `avatar?: AvatarProps`{lang="ts-type"}
- `value?: string | number`{lang="ts-type"}
- [`slot?: string`{lang="ts-type"}](#with-custom-slot)
- `class?: any`{lang="ts-type"}
- `ui?: { item?: ClassNameValue, container?: ClassNameValue, indicator?: ClassNameValue, separator?: ClassNameValue, wrapper?: ClassNameValue, date?: ClassNameValue, title?: ClassNameValue, description?: ClassNameValue }`{lang="ts-type"}

::component-code
---
無視
  - アイテム
  - クラス
  -  defaultValue
外部
  - アイテム
externalTypes
  -  TimelineItem []
小道具
  defaultValue 2
  アイテム
    -  date '2025年3月15日'
      title「プロジェクト·キックオフ」
      説明'チーム調整でプロジェクトを開始しました。プロジェクトのマイルストーンと割り当てられたリソースを設定します。'
      アイコン'i—lucide—rocket'
    -  date 'Mar 22 2025'
      title「デザインフェーズ」
      説明：'ユーザーリサーチとデザインワークショップ。ユーザーテストのためのワイヤーフレームとプロトタイプを作成。'
      アイコン'i—lucide—palette'
    -  date 'Mar 29 2025'
      title「開発スプリント」
      description 'フロントエンドとバックエンドの開発。コア機能を実装し、APIと統合しました。'
      アイコン'i—lucide—code'
    -  date 'Apr 5 2025'
      title 'テスト&デプロイメント'
      説明：'QAテストとパフォーマンス最適化。アプリケーションを本番環境にデプロイしました。
      アイコン'i—lucide—check—circle'
  クラス'w—96'
---
::

### カラー

`color`プロパティを使用して、タイムライン内のアクティブなアイテムの色を変更します。

::component-code
---
無視
  - アイテム
  - クラス
  -  defaultValue
外部
  - アイテム
externalTypes
  -  TimelineItem []
小道具
  色ニュートラル
  defaultValue 2
  アイテム
    -  date '2025年3月15日'
      title「プロジェクト·キックオフ」
      説明'チーム調整でプロジェクトを開始しました。プロジェクトのマイルストーンと割り当てられたリソースを設定します。'
      アイコン'i—lucide—rocket'
    -  date 'Mar 22 2025'
      title「デザインフェーズ」
      説明：'ユーザーリサーチとデザインワークショップ。ユーザーテストのためのワイヤーフレームとプロトタイプを作成。'
      アイコン'i—lucide—palette'
    -  date '2025年3月29日'
      title「開発スプリント」
      description 'フロントエンドとバックエンドの開発。コア機能を実装し、APIと統合しました。'
      アイコン'i—lucide—code'
    -  date 'Apr 5 2025'
      title 'テスト&デプロイメント'
      説明：'QAテストとパフォーマンス最適化。アプリケーションを本番環境にデプロイしました。
      アイコン'i—lucide—check—circle'
  クラス'w—96'
---
::

### サイズ

タイムラインのサイズを変更するには、`size`プロパティを使用します。

::component-code
---
無視
  - アイテム
  - クラス
  -  defaultValue
外部
  - アイテム
externalTypes
  -  TimelineItem []
小道具
  サイズXS
  defaultValue 2
  アイテム
    -  date '2025年3月15日'
      title「プロジェクト·キックオフ」
      説明'チーム調整でプロジェクトを開始しました。プロジェクトのマイルストーンと割り当てられたリソースを設定します。'
      アイコン'i—lucide—rocket'
    -  date 'Mar 22 2025'
      title「デザインフェーズ」
      説明：'ユーザーリサーチとデザインワークショップ。ユーザーテストのためのワイヤーフレームとプロトタイプを作成。'
      アイコン'i—lucide—palette'
    -  date 'Mar 29 2025'
      title「開発スプリント」
      description 'フロントエンドとバックエンドの開発。コア機能を実装し、APIと統合しました。'
      アイコン'i—lucide—code'
    -  date 'Apr 5 2025'
      title 'テスト&デプロイメント'
      説明：'QAテストとパフォーマンス最適化。アプリケーションを本番環境にデプロイしました。
      アイコン'i—lucide—check—circle'
  クラス'w—96'
---
::

### オリエンテーション

タイムラインの向きを変更するには、`orientation`プロパティを使用します。デフォルトは`vertical`です。

::component-code
---
無視
  - アイテム
  - クラス
  -  defaultValue
外部
  - アイテム
externalTypes
  -  TimelineItem []
小道具
  オリエンテーション'水平'
  defaultValue 2
  アイテム
    -  date '2025年3月15日'
      title「プロジェクト·キックオフ」
      説明：'チームアライメントでプロジェクトを開始しました。
      アイコン'i—lucide—rocket'
    -  date 'Mar 22 2025'
      title「デザインフェーズ」
      説明：「ユーザーリサーチとデザインワークショップ」
      アイコン'i—lucide—palette'
    -  date '2025年3月29日'
      title「開発スプリント」
      説明：'フロントエンドとバックエンドの開発'
      アイコン'i—lucide—code'
    -  date 'Apr 5 2025'
      title 'テスト&デプロイメント'
      説明：QAテストとパフォーマンス最適化
      アイコン'i—lucide—check—circle'
  クラス'w—full'
クラス'overflow—x—auto'
---
::

### リバース

逆プロパティを使用して、タイムラインの方向を逆にします。

::component-code
---
無視
  - アイテム
  - クラス
  -  defaultValue
外部
  - アイテム
externalTypes
  -  TimelineItem []
小道具
  逆真
  modelValue 2
  オリエンテーション'垂直'
  アイテム
    -  date '2025年3月15日'
      title「プロジェクト·キックオフ」
      説明：'チームアライメントでプロジェクトを開始しました。
      アイコン'i—lucide—rocket'
    -  date 'Mar 22 2025'
      title「デザインフェーズ」
      説明：「ユーザーリサーチとデザインワークショップ」
      アイコン'i—lucide—palette'
    -  date '2025年3月29日'
      title「開発スプリント」
      説明：'フロントエンドとバックエンドの開発'
      アイコン'i—lucide—code'
    -  date 'Apr 5 2025'
      title 'テスト&デプロイメント'
      説明：QAテストとパフォーマンス最適化
      アイコン'i—lucide—check—circle'
  クラス'w—full'
クラス'overflow—x—auto'
---
::

## 例

###  Controlアクティブ項目

`default-value` propを使用するか、`v-model`ディレクティブを使用して、アクティブなアイテムを制御できます。`value`が指定されていない場合、デフォルトでインデックスになります。

component—example {name="timeline-model-value-example" prettier}

::tip
`v-model`または`default-value`が指定された場合に、アイテムにマッチするために使用されるキーを変更するには、`value-key` propを使用します。
::

### 特定イベント付き

`@select`リスナーを追加して、アイテムをクリック可能にすることができます。

::note
ハンドラ関数は、それぞれ第1引数として`Event`と`TimelineItem`を受け取ります。
::

::component-example
---
きれい真
name 'timeline—select—example'
---
::

### 交互レイアウト付き

`ui`プロパティを使用して、レイアウトを交互にするタイムラインを作成します。

component—example {name="timeline-alternating-layout-example" prettier}

### カスタムスロット付き

特定の項目をカスタマイズするには、`slot`プロパティを使用します。

以下のスロットにアクセスできます：

- `#{{ item.slot }}-indicator`{lang="ts-type"}
- `#{{ item.slot }}-date`{lang="ts-type"}
- `#{{ item.slot }}-title`{lang="ts-type"}
- `#{{ item.slot }}-description`{lang="ts-type"}

component—example {name="timeline-custom-slot-example" prettier}

### スロット付き

利用可能なスロットを使用して、より複雑なタイムラインを作成。

component—example {name="timeline-slots-example" prettier}

##  API

###  Props

component—props

### スロット

コンポーネントスロット

### エミッツ

component—emits

## テーマ

コンポーネントテーマ

##  Changelog

component—changelog
