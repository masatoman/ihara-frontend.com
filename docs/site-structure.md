# サイト構成設計書

## 🏗️ 全体構造

```
ihara-frontend.com/
├── / (トップページ)
├── /portfolio (実績一覧)
├── /portfolio/hair-salon-elegance ✅ 実装完了
├── /portfolio/tech-solutions-inc 🚧 準備中
├── /portfolio/task-manager-pro 🚧 準備中
├── /services (サービス・料金)
└── /contact (お問い合わせ)
```

## 📄 各ページ詳細

### 1. トップページ (/)
**ステータス**: ✅ 実装完了

**構成要素**:
- ヒーローセクション（自己紹介・キャッチコピー）
- サービス紹介（制作・開発・コンサルティング）
- 実績ハイライト（厳選3件）
- 料金目安・プロセス紹介
- お問い合わせCTA

### 2. ポートフォリオ一覧 (/portfolio)
**ステータス**: ✅ 実装完了

**構成要素**:
- プロジェクト一覧（カード形式）
- カテゴリフィルター（Webサイト・Webアプリ・コンサル）
- 技術スタック表示
- ステータス表示（制作中・完成）

### 3. Hair Salon Elegance (/portfolio/hair-salon-elegance)
**ステータス**: ✅ **実装完了 - 実際に動作するサイト**

**実装された機能**:
- **ホーム**: ヒーローセクション、特徴、人気サービス、お客様の声
- **サービス・料金**: 全12種類のサービス、人気サービス、詳細モーダル、カテゴリフィルター
- **ビフォーアフター**: 6件のギャラリー、カテゴリフィルター、詳細モーダル、Before/After切り替え
- **ご予約**: 完全なフォーム（お客様情報、希望日時、サービス選択、確認画面）
- **お問い合わせ**: バリデーション付きフォーム、サロン情報、FAQ

**技術詳細**:
- **フレームワーク**: Next.js 15 + TypeScript
- **スタイリング**: Tailwind CSS
- **状態管理**: React Hooks (useState)
- **コンポーネント**: BookingForm, BeforeAfterGallery, ServicesList, ContactForm
- **機能**: フォームバリデーション、モーダル、タブナビゲーション
- **レスポンシブ**: モバイル・タブレット・PC対応

### 4. Tech Solutions Inc. (/portfolio/tech-solutions-inc)
**ステータス**: 🚧 準備中

**計画中の機能**:
- 企業サイトデザイン
- 多言語対応（日本語・英語）
- パフォーマンス最適化
- CMS機能

**予定技術スタック**:
- Next.js 15 + TypeScript
- Next.js i18n
- Headless CMS
- パフォーマンス最適化

### 5. Task Manager Pro (/portfolio/task-manager-pro)
**ステータス**: 🚧 準備中

**計画中の機能**:
- タスク管理機能
- リアルタイム更新
- カンバンボード
- チーム機能

**予定技術スタック**:
- React + TypeScript
- Firebase (Realtime Database)
- Material-UI
- PWA対応

### 6. サービス・料金 (/services)
**ステータス**: ⏳ 未実装

**構成要素**:
- サービス詳細（制作・開発・保守）
- 料金表・プラン比較
- 制作フロー説明
- よくある質問
- 無料相談CTA

### 7. お問い合わせ (/contact)
**ステータス**: ⏳ 未実装

**構成要素**:
- お問い合わせフォーム
- 無料相談予約
- 連絡先情報
- 対応時間・プロセス

## 🎨 デザインシステム

### カラーパレット
- **Primary**: #3B82F6 (青) - メイン、リンク、ボタン
- **Secondary**: #10B981 (緑) - アクセント、成功状態
- **Gray**: グラデーション - テキスト、背景
- **White**: #FFFFFF - 背景、カード

### タイポグラフィ
- **見出し**: Inter, bold
- **本文**: Inter, regular
- **日本語**: Noto Sans JP

### コンポーネント
- ボタン（Primary/Secondary/Ghost）
- カード（プロジェクト、サービス）
- フォーム（入力、バリデーション）
- モーダル（詳細表示）

## 🎯 架空プロジェクト詳細

### 1. Hair Salon Elegance ✅ 実装完了
**テーマ**: 高級美容院サイト  
**実装レベル**: 完全動作サイト  
**主要機能**: 予約システム、ギャラリー、サービス案内  
**差別化ポイント**: 実際に動作するフォーム、リアルなUI/UX

### 2. Tech Solutions Inc. 🚧 次期実装
**テーマ**: グローバル企業サイト  
**予定レベル**: 多言語対応サイト  
**主要機能**: 多言語、CMS、パフォーマンス最適化  
**差別化ポイント**: 国際展開対応、SEO最適化

### 3. Task Manager Pro 🚧 次期実装
**テーマ**: タスク管理Webアプリ  
**予定レベル**: リアルタイム動作アプリ  
**主要機能**: カンバンボード、リアルタイム同期  
**差別化ポイント**: 実際のWebアプリ開発スキル証明

## 📱 レスポンシブ対応

### ブレークポイント
- **Mobile**: 〜768px
- **Tablet**: 768px〜1024px  
- **Desktop**: 1024px〜

### 各デバイス最適化
- **Mobile**: ハンバーガーメニュー、タッチ操作最適化
- **Tablet**: 2カラムレイアウト、スワイプ対応
- **Desktop**: 3カラムレイアウト、ホバー効果

## 🔍 SEO戦略

### メタデータ
- 各ページ個別のtitle・description
- OGP画像設定
- 構造化データ実装

### コンテンツSEO
- キーワード「フロントエンド開発 東京」
- 「Next.js 開発者」
- 「Webサイト制作 フリーランス」

---

**更新**: 2025年6月30日  
**実装進捗**: Hair Salon Elegance 完全実装により、ポートフォリオの技術力証明レベルが格段に向上

## 🗺️ サイトマップ

```
https://ihara-frontend.com/
├── / (トップページ)
│   ├── ヒーローセクション
│   ├── サービス紹介
│   ├── 実績ハイライト（3件）
│   ├── 料金目安
│   └── お問い合わせCTA
├── /portfolio (実績一覧)
│   ├── 美容院サイト制作例
│   ├── 企業サイト制作例
│   └── Webアプリ開発例
├── /services (サービス・料金)
│   ├── 制作フロー
│   ├── 料金表
│   └── よくある質問
└── /contact (お問い合わせ)
    ├── 問い合わせフォーム
    └── 無料相談CTA
```

## 📄 ページ詳細仕様

### 1. トップページ（/）

#### 目的
- 第一印象でプロフェッショナルさをアピール
- サービス概要の理解促進
- 問い合わせへの導線確保

#### セクション構成

##### ヒーローセクション
- **見出し**: 井原 誠斗
- **サブタイトル**: Frontend Engineer
- **キャッチコピー**: あなたのビジネスを成長させるWebサイト・アプリを制作します
- **CTA**: 実績を見る / お問い合わせ

##### サービス紹介セクション
1. **WordPress制作**
   - レスポンシブ対応、SEO最適化されたWordPressサイトを制作
2. **React Webアプリ開発**
   - モダンなReact・Next.jsを使用したWebアプリケーションを開発
3. **企画から運用まで**
   - 企画・設計・開発・運用まで一貫してサポート

##### お問い合わせCTA
- **見出し**: 無料相談実施中
- **メールリンク**: hello@ihara-frontend.com

### 2. ポートフォリオページ（/portfolio）

#### 目的
- 実績の詳細な紹介
- 技術力・デザイン力のアピール
- 案件獲得への信頼構築

#### 掲載予定プロジェクト

##### 美容院サイト「Hair Salon Elegance」
- **概要**: 美容院向けレスポンシブサイト
- **技術**: WordPress風デザイン、予約フォーム
- **特徴**: ビフォーアフター、スマホ最適化、SEO対策
- **画像**: モックアップ、レスポンシブ表示

##### 企業サイト「Tech Solutions Inc.」
- **概要**: コーポレートサイト
- **技術**: Next.js、多言語対応（i18n）
- **特徴**: 国際対応、パフォーマンス最適化
- **画像**: デスクトップ/モバイル表示

##### Webアプリ「Task Manager Pro」
- **概要**: タスク管理アプリケーション
- **技術**: React、Firebase、リアルタイム更新
- **特徴**: SPA、データベース連携
- **画像**: アプリ画面、機能デモ

### 3. サービスページ（/services）

#### 目的
- サービス内容の詳細説明
- 料金体系の明確化
- 制作フローの説明

#### セクション構成

##### 制作フロー
1. **ヒアリング** - 要件定義、目標設定
2. **企画・設計** - ワイヤーフレーム、デザイン
3. **開発** - コーディング、機能実装
4. **テスト** - 品質確認、動作検証
5. **公開** - デプロイ、運用開始
6. **保守** - 継続的なサポート

##### 料金表
```
■ コーポレートサイト制作
  - ベーシック（5ページ）: 40万円〜
  - スタンダード（10ページ）: 65万円〜
  - プレミアム（15ページ+機能）: 90万円〜

■ WordPress サイト制作
  - シンプル: 30万円〜
  - カスタムテーマ: 50万円〜
  - 高機能サイト: 75万円〜

■ Webアプリ開発
  - シンプルアプリ: 60万円〜
  - 中規模アプリ: 120万円〜
  - 大規模アプリ: 200万円〜

■ 保守・運用
  - ベーシック: 月2万円
  - スタンダード: 月3万円
  - プレミアム: 月5万円
```

##### よくある質問
- 制作期間はどのくらいですか？
- 修正回数に制限はありますか？
- 保守・運用は必須ですか？
- 支払い方法は？

### 4. お問い合わせページ（/contact）

#### 目的
- 問い合わせの簡易化
- 無料相談の促進
- 連絡先情報の提供

#### フォーム項目
- **お名前** (必須)
- **メールアドレス** (必須)
- **会社名** (任意)
- **サービス種別** (選択)
- **予算** (選択)
- **お問い合わせ内容** (必須)

#### 連絡先情報
- **メール**: hello@ihara-frontend.com
- **対応時間**: 平日 9:00-18:00
- **返信目安**: 24時間以内

## 🧭 ナビゲーション設計

### ヘッダーナビゲーション
```
[Logo] Home | Portfolio | Services | Contact
```

### フッター
```
© 2025 井原誠斗 Frontend Engineer
Email: hello@ihara-frontend.com
```

### モバイルナビゲーション
- ハンバーガーメニュー
- スライドアウト方式
- タップしやすいサイズ

## 🎨 UI/UXガイドライン

### デザイン原則
1. **シンプル**: 情報を整理し、分かりやすく
2. **プロフェッショナル**: 信頼感のあるデザイン
3. **レスポンシブ**: 全デバイス対応
4. **高速**: パフォーマンス重視

### カラーリング
- **メインカラー**: #3B82F6 (Blue-500)
- **アクセントカラー**: #10B981 (Emerald-500)
- **テキスト**: #111827 (Gray-900)
- **背景**: #FFFFFF, #F9FAFB (Gray-50)

### タイポグラフィ
- **フォント**: Inter
- **見出し**: 太字、大きめサイズ
- **本文**: 読みやすいサイズ・行間

## 📱 レスポンシブ設計

### ブレークポイント
- **モバイル**: 〜640px
- **タブレット**: 641px〜1024px
- **デスクトップ**: 1025px〜

### 各デバイス対応
- **モバイル**: 縦レイアウト、タップ操作重視
- **タブレット**: 2カラム、タッチ操作対応
- **デスクトップ**: 3カラム、マウス操作最適化

## 🔍 SEO設計

### メタデータ
- **タイトル**: 井原誠斗 - フロントエンドエンジニア
- **ディスクリプション**: プロフェッショナルなWebサイト制作とアプリ開発
- **キーワード**: フロントエンド, Web制作, React, Next.js, WordPress

### 構造化データ
- Person Schema（個人情報）
- Organization Schema（事業情報）
- Service Schema（サービス情報）

## 📊 アクセス解析設計

### 計測目標
- **PV**: ページビュー数
- **UU**: ユニークユーザー数
- **CV**: お問い合わせ数
- **滞在時間**: ページ滞在時間

### コンバージョン設定
- お問い合わせフォーム送信
- メールリンククリック
- 電話番号タップ（モバイル）

## 🔄 更新履歴

| バージョン | 日付 | 更新内容 |
|-----------|------|----------|
| v1.0 | 2025-06-29 | 初版作成、サイト構成定義 | 