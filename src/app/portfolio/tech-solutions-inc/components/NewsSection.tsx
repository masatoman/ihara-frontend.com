'use client';

import { useState } from 'react';
import { Language } from './LanguageSwitcher';

// ニュース記事の型定義
interface NewsArticle {
  id: string;
  category: string;
  title: { [key in Language]: string };
  excerpt: { [key in Language]: string };
  content: { [key in Language]: string };
  author: string;
  publishDate: string;
  readTime: number;
  tags: string[];
  featured: boolean;
}

// ニュースデータ
const newsData: NewsArticle[] = [
  {
    id: 'ai-transformation-2024',
    category: 'AI & Technology',
    title: {
      ja: '2024年のAI変革：企業が知るべき5つのトレンド',
      en: 'AI Transformation 2024: 5 Trends Enterprises Must Know',
      zh: '2024年AI转型：企业必须了解的5个趋势',
      ko: '2024 AI 혁신: 기업이 알아야 할 5가지 트렌드',
      es: 'Transformación de IA 2024: 5 Tendencias que las Empresas Deben Conocer'
    },
    excerpt: {
      ja: 'AI技術の急速な発展により、企業のビジネスモデルが根本的に変わりつつあります。最新のトレンドを分析します。',
      en: 'The rapid development of AI technology is fundamentally changing enterprise business models. We analyze the latest trends.',
      zh: 'AI技术的快速发展正在根本改变企业商业模式。我们分析最新趋势。',
      ko: 'AI 기술의 급속한 발전으로 기업의 비즈니스 모델이 근본적으로 변화하고 있습니다. 최신 트렌드를 분석합니다.',
      es: 'El rápido desarrollo de la tecnología de IA está cambiando fundamentalmente los modelos de negocio empresariales. Analizamos las últimas tendencias.'
    },
    content: {
      ja: 'AIの発展は加速度的に進んでおり、企業は新しい機会と課題に直面しています...',
      en: 'AI development is accelerating exponentially, and enterprises are facing new opportunities and challenges...',
      zh: 'AI的发展正在加速推进，企业面临着新的机遇和挑战...',
      ko: 'AI 발전이 기하급수적으로 가속화되고 있으며, 기업들은 새로운 기회와 도전에 직면하고 있습니다...',
      es: 'El desarrollo de la IA se está acelerando exponencialmente, y las empresas se enfrentan a nuevas oportunidades y desafíos...'
    },
    author: 'Dr. Jane Smith',
    publishDate: '2024-01-15',
    readTime: 8,
    tags: ['AI', 'Digital Transformation', 'Technology Trends'],
    featured: true
  },
  {
    id: 'cloud-security-best-practices',
    category: 'Security',
    title: {
      ja: 'クラウドセキュリティのベストプラクティス：2024年版',
      en: 'Cloud Security Best Practices: 2024 Edition',
      zh: '云安全最佳实践：2024版',
      ko: '클라우드 보안 모범 사례: 2024 에디션',
      es: 'Mejores Prácticas de Seguridad en la Nube: Edición 2024'
    },
    excerpt: {
      ja: 'クラウド環境での新しい脅威に対応するため、最新のセキュリティ対策をご紹介します。',
      en: 'We introduce the latest security measures to address new threats in cloud environments.',
      zh: '我们介绍最新的安全措施来应对云环境中的新威胁。',
      ko: '클라우드 환경의 새로운 위협에 대응하기 위한 최신 보안 대책을 소개합니다.',
      es: 'Presentamos las últimas medidas de seguridad para abordar nuevas amenazas en entornos de nube.'
    },
    content: {
      ja: 'クラウドセキュリティは日々進化する脅威に対応する必要があります...',
      en: 'Cloud security needs to respond to constantly evolving threats...',
      zh: '云安全需要应对不断发展的威胁...',
      ko: '클라우드 보안은 끊임없이 진화하는 위협에 대응해야 합니다...',
      es: 'La seguridad en la nube necesita responder a amenazas en constante evolución...'
    },
    author: 'Mike Johnson',
    publishDate: '2024-01-10',
    readTime: 6,
    tags: ['Security', 'Cloud Computing', 'Best Practices'],
    featured: false
  },
  {
    id: 'digital-transformation-success',
    category: 'Case Study',
    title: {
      ja: 'デジタル変革成功事例：製造業A社の取り組み',
      en: 'Digital Transformation Success: Manufacturing Company A\'s Initiative',
      zh: '数字化转型成功案例：制造企业A的举措',
      ko: '디지털 혁신 성공 사례: 제조업 A사의 노력',
      es: 'Éxito en Transformación Digital: Iniciativa de la Empresa Manufacturera A'
    },
    excerpt: {
      ja: '製造業における従来の業務プロセスを完全にデジタル化し、生産性を40%向上させた事例をご紹介します。',
      en: 'We showcase a case where traditional manufacturing processes were fully digitized, improving productivity by 40%.',
      zh: '我们展示了传统制造流程完全数字化，生产力提高40%的案例。',
      ko: '전통적인 제조 프로세스를 완전히 디지털화하여 생산성을 40% 향상시킨 사례를 소개합니다.',
      es: 'Mostramos un caso donde los procesos manufactureros tradicionales fueron completamente digitalizados, mejorando la productividad en un 40%.'
    },
    content: {
      ja: 'A社は創業100年を超える老舗製造業でしたが、デジタル化の波に乗り遅れていました...',
      en: 'Company A was a century-old manufacturing company that had fallen behind the digitalization wave...',
      zh: 'A公司是一家有百年历史的制造企业，但在数字化浪潮中落后了...',
      ko: 'A사는 창업 100년을 넘는 노포 제조업체였지만 디지털화 물결에 뒤처져 있었습니다...',
      es: 'La empresa A era una empresa manufacturera centenaria que se había quedado atrás en la ola de digitalización...'
    },
    author: 'Sarah Lee',
    publishDate: '2024-01-08',
    readTime: 12,
    tags: ['Digital Transformation', 'Manufacturing', 'Case Study'],
    featured: true
  },
  {
    id: 'future-of-work-automation',
    category: 'Future Tech',
    title: {
      ja: '働き方の未来：自動化が変える職場環境',
      en: 'The Future of Work: How Automation is Changing the Workplace',
      zh: '工作的未来：自动化如何改变工作场所',
      ko: '일하는 방식의 미래: 자동화가 바꾸는 직장 환경',
      es: 'El Futuro del Trabajo: Cómo la Automatización Está Cambiando el Lugar de Trabajo'
    },
    excerpt: {
      ja: '自動化技術の進歩により、これからの働き方が大きく変わろうとしています。未来の職場環境を予測します。',
      en: 'Advances in automation technology are set to dramatically change how we work. We predict future workplace environments.',
      zh: '自动化技术的进步将极大改变我们的工作方式。我们预测未来的工作场所环境。',
      ko: '자동화 기술의 발전으로 앞으로의 일하는 방식이 크게 변화할 것입니다. 미래의 직장 환경을 예측합니다.',
      es: 'Los avances en tecnología de automatización van a cambiar dramáticamente cómo trabajamos. Predecimos futuros entornos de trabajo.'
    },
    content: {
      ja: '自動化技術の急速な発展により、多くの職種が変化を迫られています...',
      en: 'The rapid development of automation technology is forcing many professions to change...',
      zh: '自动化技术的快速发展迫使许多职业发生变化...',
      ko: '자동화 기술의 급속한 발전으로 많은 직종이 변화를 요구받고 있습니다...',
      es: 'El rápido desarrollo de la tecnología de automatización está obligando a muchas profesiones a cambiar...'
    },
    author: 'John Doe',
    publishDate: '2024-01-05',
    readTime: 10,
    tags: ['Automation', 'Future of Work', 'Technology'],
    featured: false
  },
  {
    id: 'cybersecurity-trends-2024',
    category: 'Security',
    title: {
      ja: '2024年サイバーセキュリティ脅威動向レポート',
      en: '2024 Cybersecurity Threat Trends Report',
      zh: '2024年网络安全威胁趋势报告',
      ko: '2024년 사이버 보안 위협 동향 보고서',
      es: 'Informe de Tendencias de Amenazas de Ciberseguridad 2024'
    },
    excerpt: {
      ja: '2024年に企業が直面する主要なサイバーセキュリティ脅威と対策について詳しく解説します。',
      en: 'We provide detailed explanations of major cybersecurity threats facing enterprises in 2024 and countermeasures.',
      zh: '我们详细解释2024年企业面临的主要网络安全威胁和对策。',
      ko: '2024년 기업이 직면한 주요 사이버 보안 위협과 대책에 대해 자세히 설명합니다.',
      es: 'Proporcionamos explicaciones detalladas de las principales amenazas de ciberseguridad que enfrentan las empresas en 2024 y las contramedidas.'
    },
    content: {
      ja: '2024年のサイバーセキュリティ環境は、これまで以上に複雑で危険なものとなっています...',
      en: 'The cybersecurity landscape in 2024 is more complex and dangerous than ever before...',
      zh: '2024年的网络安全环境比以往任何时候都更加复杂和危险...',
      ko: '2024년의 사이버 보안 환경은 그 어느 때보다 복잡하고 위험합니다...',
      es: 'El panorama de ciberseguridad en 2024 es más complejo y peligroso que nunca...'
    },
    author: 'Mike Johnson',
    publishDate: '2024-01-03',
    readTime: 15,
    tags: ['Cybersecurity', 'Threat Intelligence', 'Risk Management'],
    featured: false
  }
];

interface NewsSectionProps {
  language: Language;
  className?: string;
}

export default function NewsSection({ language, className = '' }: NewsSectionProps) {
  const [selectedArticle, setSelectedArticle] = useState<NewsArticle | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const labels = {
    ja: {
      newsAndInsights: 'ニュース・インサイト',
      latestNews: '最新ニュース',
      subtitle: '技術トレンドや業界の最新情報をお届けします',
      readMore: '続きを読む',
      readTime: '分で読める',
      publishedOn: '公開日',
      by: '著者',
      backToNews: 'ニュース一覧に戻る',
      allCategories: 'すべて',
      featured: '注目記事',
      tags: 'タグ'
    },
    en: {
      newsAndInsights: 'News & Insights',
      latestNews: 'Latest News',
      subtitle: 'Stay updated with the latest technology trends and industry insights',
      readMore: 'Read More',
      readTime: 'min read',
      publishedOn: 'Published on',
      by: 'By',
      backToNews: 'Back to News',
      allCategories: 'All Categories',
      featured: 'Featured',
      tags: 'Tags'
    },
    zh: {
      newsAndInsights: '新闻与见解',
      latestNews: '最新新闻',
      subtitle: '了解最新的技术趋势和行业见解',
      readMore: '阅读更多',
      readTime: '分钟阅读',
      publishedOn: '发布于',
      by: '作者',
      backToNews: '返回新闻',
      allCategories: '所有类别',
      featured: '精选',
      tags: '标签'
    },
    ko: {
      newsAndInsights: '뉴스 & 인사이트',
      latestNews: '최신 뉴스',
      subtitle: '최신 기술 트렌드와 업계 인사이트를 확인하세요',
      readMore: '더 읽기',
      readTime: '분 읽기',
      publishedOn: '게시일',
      by: '작성자',
      backToNews: '뉴스 목록으로',
      allCategories: '모든 카테고리',
      featured: '주요 기사',
      tags: '태그'
    },
    es: {
      newsAndInsights: 'Noticias e Insights',
      latestNews: 'Últimas Noticias',
      subtitle: 'Mantente actualizado con las últimas tendencias tecnológicas e insights de la industria',
      readMore: 'Leer Más',
      readTime: 'min de lectura',
      publishedOn: 'Publicado el',
      by: 'Por',
      backToNews: 'Volver a Noticias',
      allCategories: 'Todas las Categorías',
      featured: 'Destacado',
      tags: 'Etiquetas'
    }
  };

  const t = labels[language];

  // カテゴリ一覧を取得
  const categories = ['all', ...Array.from(new Set(newsData.map(article => article.category)))];

  // フィルタリングされた記事
  const filteredArticles = selectedCategory === 'all' 
    ? newsData 
    : newsData.filter(article => article.category === selectedCategory);

  // 日付をフォーマット
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString(language === 'ja' ? 'ja-JP' : 
                                   language === 'en' ? 'en-US' :
                                   language === 'zh' ? 'zh-CN' :
                                   language === 'ko' ? 'ko-KR' : 'es-ES');
  };

  // 記事詳細表示
  if (selectedArticle) {
    return (
      <div className={`py-16 ${className}`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* 戻るボタン */}
          <button
            onClick={() => setSelectedArticle(null)}
            className="mb-8 flex items-center text-primary hover:text-primary/80 transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            {t.backToNews}
          </button>

          {/* 記事ヘッダー */}
          <div className="mb-8">
            <div className="flex items-center space-x-4 mb-4">
              <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">
                {selectedArticle.category}
              </span>
              {selectedArticle.featured && (
                <span className="px-3 py-1 bg-yellow-100 text-yellow-800 text-sm rounded-full">
                  {t.featured}
                </span>
              )}
            </div>
            
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              {selectedArticle.title[language]}
            </h1>
            
            <div className="flex items-center space-x-6 text-gray-600 mb-6">
              <div className="flex items-center">
                <span className="text-sm">{t.by} {selectedArticle.author}</span>
              </div>
              <div className="flex items-center">
                <span className="text-sm">{t.publishedOn} {formatDate(selectedArticle.publishDate)}</span>
              </div>
              <div className="flex items-center">
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-sm">{selectedArticle.readTime} {t.readTime}</span>
              </div>
            </div>
            
            <p className="text-xl text-gray-700 leading-relaxed">
              {selectedArticle.excerpt[language]}
            </p>
          </div>

          {/* 記事本文 */}
          <div className="prose prose-lg max-w-none mb-8">
            <p className="text-gray-700 leading-relaxed">
              {selectedArticle.content[language]}
            </p>
          </div>

          {/* タグ */}
          <div className="border-t pt-6">
            <h3 className="text-sm font-medium text-gray-900 mb-3">{t.tags}</h3>
            <div className="flex flex-wrap gap-2">
              {selectedArticle.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ニュース一覧表示
  return (
    <div className={`py-16 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ヘッダー */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            {t.newsAndInsights}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        {/* カテゴリフィルタ */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === category
                  ? 'bg-primary text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category === 'all' ? t.allCategories : category}
            </button>
          ))}
        </div>

        {/* 記事一覧 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map((article) => (
            <article
              key={article.id}
              className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
              onClick={() => setSelectedArticle(article)}
            >
              {/* 記事ヘッダー */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">
                    {article.category}
                  </span>
                  {article.featured && (
                    <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded-full">
                      {t.featured}
                    </span>
                  )}
                </div>
                
                <h3 className="text-lg font-semibold text-gray-900 mb-3 line-clamp-2">
                  {article.title[language]}
                </h3>
                
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {article.excerpt[language]}
                </p>
                
                {/* メタ情報 */}
                <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                  <span>{formatDate(article.publishDate)}</span>
                  <div className="flex items-center">
                    <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>{article.readTime} {t.readTime}</span>
                  </div>
                </div>
                
                <button className="text-primary font-medium text-sm hover:text-primary/80 transition-colors">
                  {t.readMore} →
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* 記事がない場合 */}
        {filteredArticles.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">
              {language === 'ja' ? 'この カテゴリの記事はありません。' :
               language === 'en' ? 'No articles found in this category.' :
               language === 'zh' ? '在此类别中找不到文章。' :
               language === 'ko' ? '이 카테고리에 기사가 없습니다.' :
               'No se encontraron artículos en esta categoría.'}
            </p>
          </div>
        )}
      </div>
    </div>
  );
} 