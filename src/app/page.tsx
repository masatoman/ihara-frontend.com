export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* ヒーローセクション */}
      <section className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
          井原 誠斗
        </h1>
        <h2 className="text-xl md:text-2xl text-gray-600 mb-8">
          Frontend Engineer
        </h2>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-12">
          あなたのビジネスを成長させるWebサイト・アプリを制作します
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="/portfolio" 
            className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-blue-600 transition-colors"
          >
            実績を見る
          </a>
          <a 
            href="/contact" 
            className="border border-primary text-primary px-8 py-3 rounded-lg hover:bg-primary hover:text-white transition-colors"
          >
            お問い合わせ
          </a>
        </div>
      </section>

      {/* サービス紹介 */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            サービス
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-secondary mb-4">
                WordPress制作
              </h3>
              <p className="text-gray-600">
                レスポンシブ対応、SEO最適化されたWordPressサイトを制作します
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-secondary mb-4">
                React Webアプリ開発
              </h3>
              <p className="text-gray-600">
                モダンなReact・Next.jsを使用したWebアプリケーションを開発します
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-secondary mb-4">
                企画から運用まで
              </h3>
              <p className="text-gray-600">
                企画・設計・開発・運用まで一貫してサポートします
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* お問い合わせCTA */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            無料相談実施中
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            お気軽にお問い合わせください
          </p>
          <a 
            href="mailto:hello@ihara-frontend.com"
            className="inline-block bg-secondary text-white px-8 py-3 rounded-lg hover:bg-green-600 transition-colors"
          >
            hello@ihara-frontend.com
          </a>
        </div>
      </section>
    </main>
  )
}
