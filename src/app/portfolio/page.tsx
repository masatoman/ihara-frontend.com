import Link from 'next/link';

export default function Portfolio() {
  const projects = [
    {
      id: 'hair-salon-elegance',
      title: 'Hair Salon Elegance',
      category: '美容院サイト',
      description: 'レスポンシブ対応の美容院サイト。予約フォーム、ビフォーアフター写真、スマホ最適化を実装。',
      tech: ['WordPress風デザイン', 'レスポンシブ', 'SEO最適化'],
      image: '/projects/hair-salon-hero.jpg',
      link: '/portfolio/hair-salon-elegance',
      status: '完成'
    },
    {
      id: 'tech-solutions-inc',
      title: 'Tech Solutions Inc.',
      category: '企業サイト',
      description: 'グローバル企業向けコーポレートサイト。多言語対応、高速パフォーマンスを重視。',
      tech: ['Next.js', '多言語対応(i18n)', 'パフォーマンス最適化'],
      image: '/projects/tech-solutions-hero.jpg',
      link: '/portfolio/tech-solutions-inc',
      status: '完成'
    },
    {
      id: 'task-manager-pro',
      title: 'Task Manager Pro',
      category: 'Webアプリ',
      description: 'リアルタイム更新対応のタスク管理アプリ。チーム協働、データ永続化を実装。',
      tech: ['React', 'Firebase', 'リアルタイム同期'],
      image: '/projects/task-manager-hero.jpg',
      link: '/portfolio/task-manager-pro',
      status: '完成'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* ヘーダー */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold text-primary">
              井原誠斗
            </Link>
            <nav className="flex space-x-6">
              <Link href="/" className="text-gray-600 hover:text-primary">
                Home
              </Link>
              <Link href="/portfolio" className="text-primary font-medium">
                Portfolio
              </Link>
              <Link href="/services" className="text-gray-600 hover:text-primary">
                Services
              </Link>
              <Link href="/contact" className="text-gray-600 hover:text-primary">
                Contact
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* メインコンテンツ */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* ページタイトル */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            制作実績
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            企画から運用まで一貫してサポートした制作事例をご紹介します。
            お客様のビジネス成長に貢献するWebサイト・アプリケーションを制作しています。
          </p>
        </div>

        {/* プロジェクト一覧 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              {/* プロジェクト画像 */}
              <div className="h-48 bg-gray-200 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-2">
                      <span className="text-white text-2xl font-bold">
                        {project.title.split(' ')[0].charAt(0)}
                      </span>
                    </div>
                    <p className="text-gray-500 text-sm">モックアップ制作中</p>
                  </div>
                </div>
                {/* ステータスバッジ */}
                <div className="absolute top-4 right-4">
                  <span className={`px-2 py-1 text-xs rounded-full ${
                    project.status === '制作中' 
                      ? 'bg-yellow-100 text-yellow-800'
                      : project.status === '完成'
                      ? 'bg-green-100 text-green-800'
                      : 'bg-gray-100 text-gray-800'
                  }`}>
                    {project.status}
                  </span>
                </div>
              </div>

              {/* プロジェクト情報 */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">
                    {project.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 mb-4">
                  {project.description}
                </p>

                {/* 使用技術 */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, index) => (
                      <span key={index} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* 詳細ボタン */}
                <Link 
                  href={project.link}
                  className="w-full bg-primary text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors text-center block"
                >
                  詳細を見る
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* CTA セクション */}
        <div className="mt-16 text-center bg-white rounded-lg p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            あなたのプロジェクトも実現してみませんか？
          </h2>
          <p className="text-gray-600 mb-6">
            企画から運用まで、一貫してサポートいたします。まずはお気軽にご相談ください。
          </p>
          <Link 
            href="/contact"
            className="inline-block bg-secondary text-white py-3 px-8 rounded-md hover:bg-green-600 transition-colors font-medium"
          >
            無料相談を申し込む
          </Link>
        </div>
      </main>
    </div>
  );
} 