'use client';

import { useState } from 'react';
import { Language } from './LanguageSwitcher';

// サービス情報の型定義
interface Service {
  id: string;
  icon: string;
  category: string;
  title: { [key in Language]: string };
  description: { [key in Language]: string };
  features: { [key in Language]: string[] };
  priceRange: string;
  duration: string;
  caseStudies: number;
}

// サービスデータ
const services: Service[] = [
  {
    id: 'ai-solutions',
    icon: '🤖',
    category: 'AI & Machine Learning',
    title: {
      ja: 'AI ソリューション',
      en: 'AI Solutions',
      zh: 'AI解决方案',
      ko: 'AI 솔루션',
      es: 'Soluciones de IA'
    },
    description: {
      ja: '機械学習とAIを活用した次世代ビジネスソリューションをご提供します。',
      en: 'Next-generation business solutions powered by machine learning and AI.',
      zh: '提供由机器学习和AI驱动的下一代商业解决方案。',
      ko: '머신러닝과 AI를 활용한 차세대 비즈니스 솔루션을 제공합니다.',
      es: 'Soluciones comerciales de próxima generación impulsadas por aprendizaje automático e IA.'
    },
    features: {
      ja: ['自然言語処理', '画像認識', '予測分析', 'チャットボット開発'],
      en: ['Natural Language Processing', 'Image Recognition', 'Predictive Analytics', 'Chatbot Development'],
      zh: ['自然语言处理', '图像识别', '预测分析', '聊天机器人开发'],
      ko: ['자연어 처리', '이미지 인식', '예측 분석', '챗봇 개발'],
      es: ['Procesamiento de Lenguaje Natural', 'Reconocimiento de Imágenes', 'Análisis Predictivo', 'Desarrollo de Chatbots']
    },
    priceRange: '$50K - $200K',
    duration: '3-6 months',
    caseStudies: 15
  },
  {
    id: 'cloud-infrastructure',
    icon: '☁️',
    category: 'Cloud & Infrastructure',
    title: {
      ja: 'クラウドインフラ',
      en: 'Cloud Infrastructure',
      zh: '云基础设施',
      ko: '클라우드 인프라',
      es: 'Infraestructura en la Nube'
    },
    description: {
      ja: 'スケーラブルで安全なクラウドインフラストラクチャを構築します。',
      en: 'Build scalable and secure cloud infrastructure solutions.',
      zh: '构建可扩展且安全的云基础设施解决方案。',
      ko: '확장 가능하고 안전한 클라우드 인프라 솔루션을 구축합니다.',
      es: 'Construye soluciones de infraestructura en la nube escalables y seguras.'
    },
    features: {
      ja: ['AWS/Azure/GCP', 'DevOps自動化', 'マイクロサービス', '監視・運用'],
      en: ['AWS/Azure/GCP', 'DevOps Automation', 'Microservices', 'Monitoring & Operations'],
      zh: ['AWS/Azure/GCP', 'DevOps自动化', '微服务', '监控与运维'],
      ko: ['AWS/Azure/GCP', 'DevOps 자동화', '마이크로서비스', '모니터링 및 운영'],
      es: ['AWS/Azure/GCP', 'Automatización DevOps', 'Microservicios', 'Monitoreo y Operaciones']
    },
    priceRange: '$30K - $150K',
    duration: '2-4 months',
    caseStudies: 25
  },
  {
    id: 'cybersecurity',
    icon: '🔒',
    category: 'Security & Compliance',
    title: {
      ja: 'サイバーセキュリティ',
      en: 'Cybersecurity',
      zh: '网络安全',
      ko: '사이버 보안',
      es: 'Ciberseguridad'
    },
    description: {
      ja: 'エンタープライズレベルのセキュリティソリューションで企業を保護します。',
      en: 'Protect your enterprise with industry-leading security solutions.',
      zh: '通过行业领先的安全解决方案保护您的企业。',
      ko: '업계 최고의 보안 솔루션으로 기업을 보호합니다.',
      es: 'Protege tu empresa con soluciones de seguridad líderes en la industria.'
    },
    features: {
      ja: ['脅威検知', 'データ暗号化', 'アクセス制御', 'コンプライアンス'],
      en: ['Threat Detection', 'Data Encryption', 'Access Control', 'Compliance'],
      zh: ['威胁检测', '数据加密', '访问控制', '合规性'],
      ko: ['위협 탐지', '데이터 암호화', '액세스 제어', '컴플라이언스'],
      es: ['Detección de Amenazas', 'Cifrado de Datos', 'Control de Acceso', 'Cumplimiento']
    },
    priceRange: '$40K - $180K',
    duration: '2-5 months',
    caseStudies: 20
  },
  {
    id: 'digital-transformation',
    icon: '🚀',
    category: 'Digital Transformation',
    title: {
      ja: 'デジタル変革',
      en: 'Digital Transformation',
      zh: '数字化转型',
      ko: '디지털 트랜스포메이션',
      es: 'Transformación Digital'
    },
    description: {
      ja: 'ビジネスプロセスのデジタル化により企業の競争力を向上させます。',
      en: 'Enhance business competitiveness through digital process transformation.',
      zh: '通过数字化流程转型提升企业竞争力。',
      ko: '디지털 프로세스 혁신을 통해 비즈니스 경쟁력을 향상시킵니다.',
      es: 'Mejora la competitividad empresarial a través de la transformación digital de procesos.'
    },
    features: {
      ja: ['プロセス自動化', 'データ分析', 'モバイルアプリ', 'IoT統合'],
      en: ['Process Automation', 'Data Analytics', 'Mobile Apps', 'IoT Integration'],
      zh: ['流程自动化', '数据分析', '移动应用', '物联网集成'],
      ko: ['프로세스 자동화', '데이터 분석', '모바일 앱', 'IoT 통합'],
      es: ['Automatización de Procesos', 'Análisis de Datos', 'Aplicaciones Móviles', 'Integración IoT']
    },
    priceRange: '$60K - $250K',
    duration: '4-8 months',
    caseStudies: 18
  }
];

interface ServiceShowcaseProps {
  language: Language;
  className?: string;
}

export default function ServiceShowcase({ language, className = '' }: ServiceShowcaseProps) {
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [activeTab, setActiveTab] = useState<string>('overview');

  const labels = {
    ja: {
      ourServices: '私たちのサービス',
      exploreServices: 'サービスを探索',
      features: '主な機能',
      priceRange: '価格帯',
      duration: '期間',
      caseStudies: '実績',
      viewDetails: '詳細を見る',
      closeDetails: '閉じる',
      overview: '概要',
      specifications: '仕様',
      pricing: '料金',
      contactUs: 'お問い合わせ'
    },
    en: {
      ourServices: 'Our Services',
      exploreServices: 'Explore Our Services',
      features: 'Key Features',
      priceRange: 'Price Range',
      duration: 'Duration',
      caseStudies: 'Case Studies',
      viewDetails: 'View Details',
      closeDetails: 'Close',
      overview: 'Overview',
      specifications: 'Specifications',
      pricing: 'Pricing',
      contactUs: 'Contact Us'
    },
    zh: {
      ourServices: '我们的服务',
      exploreServices: '探索我们的服务',
      features: '主要功能',
      priceRange: '价格区间',
      duration: '持续时间',
      caseStudies: '案例研究',
      viewDetails: '查看详情',
      closeDetails: '关闭',
      overview: '概述',
      specifications: '规格',
      pricing: '定价',
      contactUs: '联系我们'
    },
    ko: {
      ourServices: '우리의 서비스',
      exploreServices: '서비스 탐색',
      features: '주요 기능',
      priceRange: '가격대',
      duration: '기간',
      caseStudies: '사례 연구',
      viewDetails: '자세히 보기',
      closeDetails: '닫기',
      overview: '개요',
      specifications: '사양',
      pricing: '가격',
      contactUs: '문의하기'
    },
    es: {
      ourServices: 'Nuestros Servicios',
      exploreServices: 'Explora Nuestros Servicios',
      features: 'Características Clave',
      priceRange: 'Rango de Precios',
      duration: 'Duración',
      caseStudies: 'Casos de Estudio',
      viewDetails: 'Ver Detalles',
      closeDetails: 'Cerrar',
      overview: 'Resumen',
      specifications: 'Especificaciones',
      pricing: 'Precios',
      contactUs: 'Contáctanos'
    }
  };

  const t = labels[language];

  return (
    <div className={`py-16 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ヘッダー */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            {t.ourServices}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t.exploreServices}
          </p>
        </div>

        {/* サービス一覧 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-lg transition-shadow cursor-pointer"
              onClick={() => setSelectedService(service)}
            >
              <div className="text-center">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {service.title[language]}
                </h3>
                <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                  {service.description[language]}
                </p>
                
                <div className="space-y-2 text-xs text-gray-500 mb-4">
                  <div className="flex justify-between">
                    <span>{t.caseStudies}:</span>
                    <span className="font-medium">{service.caseStudies}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>{t.duration}:</span>
                    <span className="font-medium">{service.duration}</span>
                  </div>
                </div>

                <button className="text-primary font-medium text-sm hover:text-primary/80 transition-colors">
                  {t.viewDetails} →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* 詳細モーダル */}
        {selectedService && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              {/* モーダルヘッダー */}
              <div className="flex justify-between items-center p-6 border-b">
                <div className="flex items-center space-x-3">
                  <span className="text-3xl">{selectedService.icon}</span>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      {selectedService.title[language]}
                    </h3>
                    <p className="text-gray-600">{selectedService.category}</p>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedService(null)}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* タブナビゲーション */}
              <div className="border-b">
                <div className="flex">
                  {['overview', 'specifications', 'pricing'].map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`px-6 py-3 font-medium text-sm transition-colors ${
                        activeTab === tab
                          ? 'text-primary border-b-2 border-primary'
                          : 'text-gray-600 hover:text-gray-900'
                      }`}
                    >
                      {t[tab as keyof typeof t]}
                    </button>
                  ))}
                </div>
              </div>

              {/* タブコンテンツ */}
              <div className="p-6">
                {activeTab === 'overview' && (
                  <div className="space-y-6">
                    <p className="text-gray-700 text-lg">
                      {selectedService.description[language]}
                    </p>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">{t.features}</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {selectedService.features[language].map((feature, index) => (
                          <div key={index} className="flex items-center space-x-2">
                            <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            <span className="text-gray-700">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'specifications' && (
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">{t.duration}</h4>
                        <p className="text-gray-600">{selectedService.duration}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">{t.caseStudies}</h4>
                        <p className="text-gray-600">{selectedService.caseStudies} projects completed</p>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'pricing' && (
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">{t.priceRange}</h4>
                      <p className="text-2xl font-bold text-primary">{selectedService.priceRange}</p>
                      <p className="text-gray-600 mt-2">
                        {language === 'ja' ? 'プロジェクトの規模と要件により価格は変動します' :
                         language === 'en' ? 'Pricing varies based on project scope and requirements' :
                         language === 'zh' ? '价格根据项目规模和需求而变化' :
                         language === 'ko' ? '프로젝트 규모와 요구사항에 따라 가격이 달라집니다' :
                         'El precio varía según el alcance y los requisitos del proyecto'}
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* モーダルフッター */}
              <div className="border-t p-6 flex justify-end space-x-3">
                <button
                  onClick={() => setSelectedService(null)}
                  className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors"
                >
                  {t.closeDetails}
                </button>
                <button className="px-6 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors">
                  {t.contactUs}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
} 