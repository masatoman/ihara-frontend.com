# 技術仕様書

## 🏗️ システム構成

### フロントエンド

#### フレームワーク・ライブラリ
```json
{
  "next": "15.3.4",
  "react": "19.1.0",
  "react-dom": "19.1.0",
  "typescript": "5.8.3"
}
```

#### スタイリング
```json
{
  "tailwindcss": "3.4.0",
  "postcss": "8.5.6",
  "autoprefixer": "10.4.21"
}
```

#### 開発ツール
```json
{
  "eslint": "latest",
  "eslint-config-next": "15.3.4",
  "@types/node": "24.0.7",
  "@types/react": "19.1.8"
}
```

### インフラストラクチャ

#### ホスティング
- **プラットフォーム**: Vercel
- **プラン**: 無料（Hobby）
- **デプロイ**: 自動（GitHubプッシュ時）
- **SSL**: 自動（Let's Encrypt）

#### ドメイン・DNS
- **ドメイン**: ihara-frontend.com
- **レジストラ**: お名前.com
- **DNS**: Cloudflare
- **CDN**: Cloudflare（無料プラン）

#### メール
- **サービス**: Cloudflare Email Routing
- **転送先**: 既存のメールアドレス
- **送信**: hello@ihara-frontend.com

## 📁 プロジェクト構造

```
ihara-frontend.com/
├── docs/                    # プロジェクトドキュメント
│   ├── overview.md
│   ├── progress.md
│   ├── tech-specs.md
│   ├── site-structure.md
│   └── timeline.md
├── src/
│   └── app/                 # Next.js App Router
│       ├── globals.css      # グローバルスタイル
│       ├── layout.tsx       # ルートレイアウト
│       ├── page.tsx         # トップページ
│       ├── portfolio/       # ポートフォリオページ
│       ├── services/        # サービスページ
│       └── contact/         # お問い合わせページ
├── public/                  # 静的ファイル
├── components/              # 再利用可能コンポーネント
├── next.config.js           # Next.js設定
├── tailwind.config.js       # Tailwind CSS設定
├── postcss.config.js        # PostCSS設定
├── tsconfig.json           # TypeScript設定
├── package.json            # 依存関係
└── .gitignore              # Git除外設定
```

## 🎨 デザインシステム

### カラーパレット
```css
:root {
  --primary: #3B82F6;      /* Blue-500 */
  --secondary: #10B981;    /* Emerald-500 */
  --gray-50: #F9FAFB;
  --gray-100: #F3F4F6;
  --gray-600: #4B5563;
  --gray-900: #111827;
}
```

### タイポグラフィ
- **フォント**: Inter（Google Fonts）
- **見出し**: 24px〜64px
- **本文**: 16px〜20px
- **小文字**: 14px

### レスポンシブブレークポイント
```css
/* Tailwind CSS デフォルト */
sm: 640px   /* スマートフォン横 */
md: 768px   /* タブレット */
lg: 1024px  /* デスクトップ小 */
xl: 1280px  /* デスクトップ大 */
2xl: 1536px /* 大型ディスプレイ */
```

## 🔧 設定ファイル詳細

### Next.js設定（next.config.js）
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig
```

### Tailwind CSS設定（tailwind.config.js）
```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#3B82F6',
        'secondary': '#10B981',
      },
    },
  },
  plugins: [],
}
```

### TypeScript設定（tsconfig.json）
```json
{
  "compilerOptions": {
    "target": "es5",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [{"name": "next"}],
    "paths": {"@/*": ["./src/*"]}
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
```

## 🚀 デプロイメント

### 本番環境
- **URL**: https://ihara-frontend.com
- **プラットフォーム**: Vercel
- **自動デプロイ**: GitHubプッシュ時
- **ビルドコマンド**: `npm run build`
- **出力ディレクトリ**: `.next`

### 開発環境
- **URL**: http://localhost:3001
- **起動コマンド**: `npm run dev`
- **ホットリロード**: 有効

## 📊 パフォーマンス目標

### Core Web Vitals
- **LCP (Largest Contentful Paint)**: < 2.5秒
- **FID (First Input Delay)**: < 100ms
- **CLS (Cumulative Layout Shift)**: < 0.1

### その他指標
- **First Contentful Paint**: < 1.5秒
- **Time to Interactive**: < 3.5秒
- **Total Blocking Time**: < 300ms

## 🔒 セキュリティ

### HTTPS
- **証明書**: Let's Encrypt（Vercel自動）
- **強制リダイレクト**: HTTP → HTTPS

### ヘッダー設定
```javascript
// next.config.js セキュリティヘッダー（将来実装）
const securityHeaders = [
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on'
  },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload'
  },
  {
    key: 'X-Frame-Options',
    value: 'DENY'
  }
]
```

## 📈 分析・モニタリング

### 予定ツール
- **Google Analytics**: サイト分析
- **Google Search Console**: SEO監視
- **Vercel Analytics**: パフォーマンス監視

## 🔄 更新履歴

| バージョン | 日付 | 更新内容 |
|-----------|------|----------|
| v1.0 | 2025-06-29 | 初版作成、基本仕様定義 | 