'use client';

import { useState } from 'react';
import Link from 'next/link';

// コンポーネントのインポート
import LanguageSwitcher, { Language } from './components/LanguageSwitcher';
import ServiceShowcase from './components/ServiceShowcase';
import CompanyInfo from './components/CompanyInfo';
import ContactForm from './components/ContactForm';
import NewsSection from './components/NewsSection';

export default function TechSolutionsIncPage() {
  const [currentLanguage, setCurrentLanguage] = useState<Language>('ja');
  const [currentSection, setCurrentSection] = useState<string>('home');

  const labels = {
    ja: {
      companyName: 'Tech Solutions Inc.',
      tagline: '技術で未来を創造する',
      description: '私たちは最先端のAI、クラウド、セキュリティ技術を駆使して、企業のデジタル変革を支援します。',
      getStarted: '始める',
      learnMore: '詳しく見る',
      // ナビゲーション
      home: 'ホーム',
      services: 'サービス',
      aboutUs: '会社概要',
      news: 'ニュース',
      contact: 'お問い合わせ',
      // ヒーローセクション
      heroTitle: '企業のデジタル変革を\n次のレベルへ',
      heroSubtitle: 'AI、クラウド、セキュリティの最先端技術で、あなたのビジネスの可能性を最大化します。',
      // 統計情報
      yearsExperience: '年の実績',
      successfulProjects: '成功プロジェクト',
      clientSatisfaction: '顧客満足度',
      globalClients: 'グローバル企業',
      // CTA セクション
      ctaTitle: 'プロジェクトを始めませんか？',
      ctaSubtitle: '無料相談で、あなたのビジネス課題に最適なソリューションをご提案します。',
      freeConsultation: '無料相談を予約',
      // フッター
      quickLinks: 'クイックリンク',
      followUs: 'フォローする',
      privacy: 'プライバシーポリシー',
      terms: '利用規約',
      allRightsReserved: 'All rights reserved.'
    },
    en: {
      companyName: 'Tech Solutions Inc.',
      tagline: 'Creating the Future with Technology',
      description: 'We leverage cutting-edge AI, cloud, and security technologies to support digital transformation for enterprises.',
      getStarted: 'Get Started',
      learnMore: 'Learn More',
      // Navigation
      home: 'Home',
      services: 'Services',
      aboutUs: 'About Us',
      news: 'News',
      contact: 'Contact',
      // Hero Section
      heroTitle: 'Take Enterprise Digital\nTransformation to the Next Level',
      heroSubtitle: 'Maximize your business potential with cutting-edge AI, cloud, and security technologies.',
      // Statistics
      yearsExperience: 'Years of Experience',
      successfulProjects: 'Successful Projects',
      clientSatisfaction: 'Client Satisfaction',
      globalClients: 'Global Clients',
      // CTA Section
      ctaTitle: 'Ready to Start Your Project?',
      ctaSubtitle: 'Get a free consultation and discover the optimal solution for your business challenges.',
      freeConsultation: 'Book Free Consultation',
      // Footer
      quickLinks: 'Quick Links',
      followUs: 'Follow Us',
      privacy: 'Privacy Policy',
      terms: 'Terms of Service',
      allRightsReserved: 'All rights reserved.'
    },
    zh: {
      companyName: 'Tech Solutions Inc.',
      tagline: '用技术创造未来',
      description: '我们利用尖端的AI、云计算和安全技术，支持企业的数字化转型。',
      getStarted: '开始',
      learnMore: '了解更多',
      home: '首页',
      services: '服务',
      aboutUs: '关于我们',
      news: '新闻',
      contact: '联系我们',
      heroTitle: '将企业数字化转型\n提升到新水平',
      heroSubtitle: '利用尖端的AI、云计算和安全技术，最大化您的商业潜力。',
      yearsExperience: '年经验',
      successfulProjects: '成功项目',
      clientSatisfaction: '客户满意度',
      globalClients: '全球客户',
      ctaTitle: '准备开始您的项目了吗？',
      ctaSubtitle: '获得免费咨询，发现适合您业务挑战的最佳解决方案。',
      freeConsultation: '预约免费咨询',
      quickLinks: '快速链接',
      followUs: '关注我们',
      privacy: '隐私政策',
      terms: '服务条款',
      allRightsReserved: '版权所有。'
    },
    ko: {
      companyName: 'Tech Solutions Inc.',
      tagline: '기술로 미래를 창조하다',
      description: '우리는 최첨단 AI, 클라우드, 보안 기술을 활용하여 기업의 디지털 혁신을 지원합니다.',
      getStarted: '시작하기',
      learnMore: '자세히 보기',
      home: '홈',
      services: '서비스',
      aboutUs: '회사 소개',
      news: '뉴스',
      contact: '문의',
      heroTitle: '기업 디지털 혁신을\n다음 단계로',
      heroSubtitle: '최첨단 AI, 클라우드, 보안 기술로 비즈니스 잠재력을 극대화하세요.',
      yearsExperience: '년 경험',
      successfulProjects: '성공 프로젝트',
      clientSatisfaction: '고객 만족도',
      globalClients: '글로벌 고객',
      ctaTitle: '프로젝트를 시작할 준비가 되셨나요?',
      ctaSubtitle: '무료 상담을 받고 비즈니스 과제에 최적인 솔루션을 발견하세요.',
      freeConsultation: '무료 상담 예약',
      quickLinks: '빠른 링크',
      followUs: '팔로우',
      privacy: '개인정보처리방침',
      terms: '이용약관',
      allRightsReserved: '모든 권리 보유.'
    },
    es: {
      companyName: 'Tech Solutions Inc.',
      tagline: 'Creando el Futuro con Tecnología',
      description: 'Aprovechamos tecnologías de vanguardia de IA, nube y seguridad para apoyar la transformación digital empresarial.',
      getStarted: 'Comenzar',
      learnMore: 'Saber Más',
      home: 'Inicio',
      services: 'Servicios',
      aboutUs: 'Acerca de',
      news: 'Noticias',
      contact: 'Contacto',
      heroTitle: 'Lleva la Transformación Digital\nEmpresarial al Siguiente Nivel',
      heroSubtitle: 'Maximiza el potencial de tu negocio con tecnologías de vanguardia de IA, nube y seguridad.',
      yearsExperience: 'Años de Experiencia',
      successfulProjects: 'Proyectos Exitosos',
      clientSatisfaction: 'Satisfacción del Cliente',
      globalClients: 'Clientes Globales',
      ctaTitle: '¿Listo para Comenzar tu Proyecto?',
      ctaSubtitle: 'Obtén una consulta gratuita y descubre la solución óptima para tus desafíos empresariales.',
      freeConsultation: 'Reservar Consulta Gratuita',
      quickLinks: 'Enlaces Rápidos',
      followUs: 'Síguenos',
      privacy: 'Política de Privacidad',
      terms: 'Términos de Servicio',
      allRightsReserved: 'Todos los derechos reservados.'
    }
  };

  const t = labels[currentLanguage];

  // 統計データ
  const stats = [
    { value: '6', label: t.yearsExperience },
    { value: '300+', label: t.successfulProjects },
    { value: '98%', label: t.clientSatisfaction },
    { value: '50+', label: t.globalClients }
  ];

  // ナビゲーション項目
  const navItems = [
    { id: 'home', label: t.home },
    { id: 'services', label: t.services },
    { id: 'about', label: t.aboutUs },
    { id: 'news', label: t.news },
    { id: 'contact', label: t.contact }
  ];

  // コンテンツレンダリング
  const renderContent = () => {
    switch (currentSection) {
      case 'services':
        return <ServiceShowcase language={currentLanguage} />;
      case 'about':
        return <CompanyInfo language={currentLanguage} />;
      case 'news':
        return <NewsSection language={currentLanguage} />;
      case 'contact':
        return <ContactForm language={currentLanguage} />;
      default:
        return (
          <>
            {/* ヒーローセクション */}
            <section className="relative min-h-screen flex items-center bg-gradient-to-br from-primary via-primary/90 to-secondary overflow-hidden">
              {/* 背景パターン */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-20 left-20 w-72 h-72 bg-white rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-20 w-96 h-96 bg-white rounded-full blur-3xl"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white rounded-full blur-3xl opacity-50"></div>
              </div>

              <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
                <div className="mb-8">
                  <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                    {t.heroTitle.split('\n').map((line, index) => (
                      <span key={index}>
                        {line}
                        {index === 0 && <br />}
                      </span>
                    ))}
                  </h1>
                  <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto opacity-90">
                    {t.heroSubtitle}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button
                      onClick={() => setCurrentSection('contact')}
                      className="bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                    >
                      {t.getStarted}
                    </button>
                    <button
                      onClick={() => setCurrentSection('services')}
                      className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors"
                    >
                      {t.learnMore}
                    </button>
                  </div>
                </div>

                {/* 統計情報 */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="text-4xl md:text-5xl font-bold mb-2">
                        {stat.value}
                      </div>
                      <div className="text-lg opacity-80">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* スクロールインジケーター */}
              <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>
            </section>

            {/* サービス概要 */}
            <ServiceShowcase language={currentLanguage} />

            {/* 会社概要 */}
            <CompanyInfo language={currentLanguage} />

            {/* ニュース */}
            <NewsSection language={currentLanguage} />

            {/* CTA セクション */}
            <section className="py-16 bg-gradient-to-r from-primary to-secondary">
              <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  {t.ctaTitle}
                </h2>
                <p className="text-xl mb-8 opacity-90">
                  {t.ctaSubtitle}
                </p>
                <button
                  onClick={() => setCurrentSection('contact')}
                  className="bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg"
                >
                  {t.freeConsultation}
                </button>
              </div>
            </section>
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* ヘッダー */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* ロゴ */}
            <div className="flex items-center">
              <button
                onClick={() => setCurrentSection('home')}
                className="text-2xl font-bold text-primary hover:text-primary/80 transition-colors"
              >
                {t.companyName}
              </button>
            </div>

            {/* ナビゲーション */}
            <nav className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setCurrentSection(item.id)}
                  className={`font-medium transition-colors ${
                    currentSection === item.id
                      ? 'text-primary border-b-2 border-primary'
                      : 'text-gray-700 hover:text-primary'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>

            {/* 言語切り替え */}
            <div className="flex items-center space-x-4">
              <LanguageSwitcher
                currentLanguage={currentLanguage}
                onLanguageChange={setCurrentLanguage}
              />
              <button
                onClick={() => setCurrentSection('contact')}
                className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary/90 transition-colors"
              >
                {t.contact}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* メインコンテンツ */}
      <main>
        {renderContent()}
      </main>

      {/* フッター */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* 会社情報 */}
            <div className="col-span-2">
              <h3 className="text-2xl font-bold mb-4">{t.companyName}</h3>
              <p className="text-gray-300 mb-4">{t.description}</p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.347-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24c6.624 0 11.99-5.367 11.99-11.987C24.007 5.367 18.641.001 12.017.001z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* クイックリンク */}
            <div>
              <h4 className="text-lg font-semibold mb-4">{t.quickLinks}</h4>
              <ul className="space-y-2">
                {navItems.map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => setCurrentSection(item.id)}
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* お問い合わせ情報 */}
            <div>
              <h4 className="text-lg font-semibold mb-4">{t.contact}</h4>
              <div className="space-y-2 text-gray-300">
                <p>📧 contact@techsolutions.com</p>
                <p>📞 +81 3-1234-5678</p>
                <p>📍 Tokyo, Japan</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300">
              © 2024 {t.companyName} {t.allRightsReserved}
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link href="/portfolio" className="text-gray-300 hover:text-white transition-colors">
                ← ポートフォリオに戻る
              </Link>
              <button className="text-gray-300 hover:text-white transition-colors">
                {t.privacy}
              </button>
              <button className="text-gray-300 hover:text-white transition-colors">
                {t.terms}
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
} 