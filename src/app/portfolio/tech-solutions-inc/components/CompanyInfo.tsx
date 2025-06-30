'use client';

import { useState } from 'react';
import { Language } from './LanguageSwitcher';

// チームメンバーの型定義
interface TeamMember {
  id: string;
  name: string;
  position: { [key in Language]: string };
  bio: { [key in Language]: string };
  avatar: string;
  expertise: string[];
  socialLinks: {
    linkedin?: string;
    twitter?: string;
    github?: string;
  };
}

// 会社情報の型定義
interface CompanyData {
  mission: { [key in Language]: string };
  vision: { [key in Language]: string };
  values: {
    title: { [key in Language]: string };
    items: { [key in Language]: string[] };
  };
  stats: {
    label: { [key in Language]: string };
    value: string;
  }[];
  timeline: {
    year: string;
    event: { [key in Language]: string };
  }[];
}

// チームデータ
const teamMembers: TeamMember[] = [
  {
    id: 'john-doe',
    name: 'John Doe',
    position: {
      ja: 'CEO・創設者',
      en: 'CEO & Founder',
      zh: '首席执行官兼创始人',
      ko: 'CEO 겸 창립자',
      es: 'CEO y Fundador'
    },
    bio: {
      ja: '15年以上のテクノロジー業界での経験を持つ。シリコンバレーの大手企業で技術革新をリードしてきました。',
      en: 'Over 15 years of experience in the tech industry. Led innovation at major Silicon Valley companies.',
      zh: '在科技行业拥有超过15年的经验，曾在硅谷主要公司领导技术创新。',
      ko: '기술 업계에서 15년 이상의 경험을 보유하고 있으며, 실리콘밸리 주요 기업에서 혁신을 주도했습니다.',
      es: 'Más de 15 años de experiencia en la industria tecnológica. Lideró la innovación en las principales empresas de Silicon Valley.'
    },
    avatar: '👨‍💼',
    expertise: ['Strategic Planning', 'Business Development', 'Technology Innovation'],
    socialLinks: {
      linkedin: '#',
      twitter: '#'
    }
  },
  {
    id: 'jane-smith',
    name: 'Jane Smith',
    position: {
      ja: 'CTO・技術責任者',
      en: 'CTO & Head of Technology',
      zh: '首席技术官',
      ko: 'CTO 겸 기술 책임자',
      es: 'CTO y Jefe de Tecnología'
    },
    bio: {
      ja: 'MITで博士号を取得し、AI・機械学習分野の第一人者。多数の特許を保有しています。',
      en: 'PhD from MIT, leading expert in AI and machine learning. Holds multiple patents.',
      zh: '麻省理工学院博士，AI和机器学习领域的顶尖专家，拥有多项专利。',
      ko: 'MIT에서 박사학위를 취득했으며, AI와 머신러닝 분야의 선도적 전문가입니다. 다수의 특허를 보유하고 있습니다.',
      es: 'Doctora del MIT, experta líder en IA y aprendizaje automático. Posee múltiples patentes.'
    },
    avatar: '👩‍💻',
    expertise: ['AI/ML', 'Cloud Architecture', 'Data Science'],
    socialLinks: {
      linkedin: '#',
      github: '#'
    }
  },
  {
    id: 'mike-johnson',
    name: 'Mike Johnson',
    position: {
      ja: 'セキュリティ責任者',
      en: 'Head of Security',
      zh: '安全主管',
      ko: '보안 책임자',
      es: 'Jefe de Seguridad'
    },
    bio: {
      ja: 'サイバーセキュリティ分野で12年の経験。Fortune 500企業のセキュリティコンサルタントとして活躍。',
      en: '12 years in cybersecurity. Security consultant for Fortune 500 companies.',
      zh: '在网络安全领域拥有12年经验，为财富500强企业提供安全咨询服务。',
      ko: '사이버 보안 분야에서 12년의 경험을 보유하고 있으며, Fortune 500 기업의 보안 컨설턴트로 활동했습니다.',
      es: '12 años en ciberseguridad. Consultor de seguridad para empresas Fortune 500.'
    },
    avatar: '👨‍🔬',
    expertise: ['Cybersecurity', 'Risk Management', 'Compliance'],
    socialLinks: {
      linkedin: '#'
    }
  },
  {
    id: 'sarah-lee',
    name: 'Sarah Lee',
    position: {
      ja: '製品責任者',
      en: 'Head of Product',
      zh: '产品负责人',
      ko: '제품 책임자',
      es: 'Jefe de Producto'
    },
    bio: {
      ja: 'デザイン思考とユーザー体験の専門家。数々の受賞歴のある製品を開発してきました。',
      en: 'Expert in design thinking and user experience. Developed multiple award-winning products.',
      zh: '设计思维和用户体验专家，开发了多个获奖产品。',
      ko: '디자인 씽킹과 사용자 경험 전문가입니다. 다수의 수상 경력이 있는 제품을 개발했습니다.',
      es: 'Experta en design thinking y experiencia de usuario. Desarrolló múltiples productos galardonados.'
    },
    avatar: '👩‍🎨',
    expertise: ['Product Design', 'UX/UI', 'Market Research'],
    socialLinks: {
      linkedin: '#',
      twitter: '#'
    }
  }
];

// 会社データ
const companyData: CompanyData = {
  mission: {
    ja: '最先端のテクノロジーを通じて、企業のデジタル変革を支援し、より良い未来を創造します。',
    en: 'To support digital transformation of enterprises through cutting-edge technology and create a better future.',
    zh: '通过前沿技术支持企业数字化转型，创造更美好的未来。',
    ko: '최첨단 기술을 통해 기업의 디지털 혁신을 지원하고 더 나은 미래를 창조합니다.',
    es: 'Apoyar la transformación digital de las empresas a través de tecnología de vanguardia y crear un futuro mejor.'
  },
  vision: {
    ja: '2030年までに、世界中の企業がAIとクラウド技術を活用し、持続可能な成長を実現する世界を目指します。',
    en: 'By 2030, we envision a world where enterprises globally leverage AI and cloud technologies for sustainable growth.',
    zh: '到2030年，我们设想一个全球企业都能利用AI和云技术实现可持续增长的世界。',
    ko: '2030년까지 전 세계 기업이 AI와 클라우드 기술을 활용하여 지속 가능한 성장을 실현하는 세상을 목표로 합니다.',
    es: 'Para 2030, visualizamos un mundo donde las empresas globalmente aprovechen la IA y las tecnologías en la nube para un crecimiento sostenible.'
  },
  values: {
    title: {
      ja: '私たちの価値観',
      en: 'Our Values',
      zh: '我们的价值观',
      ko: '우리의 가치관',
      es: 'Nuestros Valores'
    },
    items: {
      ja: [
        'イノベーション：常に新しい技術と解決策を追求します',
        '品質：妥協のない高品質なサービスを提供します',
        '信頼：透明性と誠実さを基盤とした関係を築きます',
        '持続可能性：環境と社会に配慮した事業を行います'
      ],
      en: [
        'Innovation: We constantly pursue new technologies and solutions',
        'Quality: We deliver uncompromising high-quality services',
        'Trust: We build relationships based on transparency and integrity',
        'Sustainability: We conduct business with environmental and social responsibility'
      ],
      zh: [
        '创新：我们不断追求新技术和解决方案',
        '质量：我们提供不妥协的高质量服务',
        '信任：我们建立基于透明度和诚信的关系',
        '可持续性：我们开展具有环境和社会责任感的业务'
      ],
      ko: [
        '혁신: 우리는 끊임없이 새로운 기술과 해결책을 추구합니다',
        '품질: 우리는 타협 없는 고품질 서비스를 제공합니다',
        '신뢰: 우리는 투명성과 성실함을 기반으로 한 관계를 구축합니다',
        '지속가능성: 우리는 환경과 사회를 고려한 사업을 운영합니다'
      ],
      es: [
        'Innovación: Perseguimos constantemente nuevas tecnologías y soluciones',
        'Calidad: Entregamos servicios de alta calidad sin compromisos',
        'Confianza: Construimos relaciones basadas en transparencia e integridad',
        'Sostenibilidad: Realizamos negocios con responsabilidad ambiental y social'
      ]
    }
  },
  stats: [
    {
      label: { ja: '設立年', en: 'Founded', zh: '成立年份', ko: '설립연도', es: 'Fundada' },
      value: '2018'
    },
    {
      label: { ja: '従業員数', en: 'Employees', zh: '员工数', ko: '직원 수', es: 'Empleados' },
      value: '150+'
    },
    {
      label: { ja: 'プロジェクト数', en: 'Projects', zh: '项目数', ko: '프로젝트 수', es: 'Proyectos' },
      value: '300+'
    },
    {
      label: { ja: '顧客満足度', en: 'Client Satisfaction', zh: '客户满意度', ko: '고객 만족도', es: 'Satisfacción del Cliente' },
      value: '98%'
    }
  ],
  timeline: [
    {
      year: '2018',
      event: {
        ja: 'Tech Solutions Inc. 設立',
        en: 'Tech Solutions Inc. founded',
        zh: 'Tech Solutions Inc. 成立',
        ko: 'Tech Solutions Inc. 설립',
        es: 'Tech Solutions Inc. fundada'
      }
    },
    {
      year: '2019',
      event: {
        ja: '初の大型プロジェクト受注',
        en: 'First major project acquired',
        zh: '获得首个大型项目',
        ko: '첫 번째 대형 프로젝트 수주',
        es: 'Primer proyecto importante adquirido'
      }
    },
    {
      year: '2020',
      event: {
        ja: 'AIソリューション部門設立',
        en: 'AI Solutions division established',
        zh: '成立AI解决方案部门',
        ko: 'AI 솔루션 부문 설립',
        es: 'División de Soluciones de IA establecida'
      }
    },
    {
      year: '2021',
      event: {
        ja: '100名体制達成',
        en: 'Reached 100 employees',
        zh: '达到100名员工',
        ko: '100명 체제 달성',
        es: 'Alcanzó 100 empleados'
      }
    },
    {
      year: '2022',
      event: {
        ja: 'グローバル展開開始',
        en: 'Global expansion launched',
        zh: '开始全球扩张',
        ko: '글로벌 확장 시작',
        es: 'Lanzamiento de expansión global'
      }
    },
    {
      year: '2023',
      event: {
        ja: 'ISO 27001認証取得',
        en: 'ISO 27001 certification acquired',
        zh: '获得ISO 27001认证',
        ko: 'ISO 27001 인증 취득',
        es: 'Certificación ISO 27001 adquirida'
      }
    }
  ]
};

interface CompanyInfoProps {
  language: Language;
  className?: string;
}

export default function CompanyInfo({ language, className = '' }: CompanyInfoProps) {
  const [activeTab, setActiveTab] = useState<string>('about');
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  const labels = {
    ja: {
      aboutUs: '私たちについて',
      ourTeam: 'チーム',
      mission: 'ミッション',
      vision: 'ビジョン',
      companyHistory: '会社の歴史',
      meetTeam: 'チームメンバー',
      viewProfile: 'プロフィールを見る',
      closeProfile: '閉じる',
      expertise: '専門分野',
      socialLinks: 'ソーシャルリンク',
      companyStats: '会社概要'
    },
    en: {
      aboutUs: 'About Us',
      ourTeam: 'Our Team',
      mission: 'Mission',
      vision: 'Vision',
      companyHistory: 'Company History',
      meetTeam: 'Meet Our Team',
      viewProfile: 'View Profile',
      closeProfile: 'Close',
      expertise: 'Expertise',
      socialLinks: 'Social Links',
      companyStats: 'Company Overview'
    },
    zh: {
      aboutUs: '关于我们',
      ourTeam: '我们的团队',
      mission: '使命',
      vision: '愿景',
      companyHistory: '公司历史',
      meetTeam: '认识我们的团队',
      viewProfile: '查看简介',
      closeProfile: '关闭',
      expertise: '专业领域',
      socialLinks: '社交链接',
      companyStats: '公司概况'
    },
    ko: {
      aboutUs: '회사 소개',
      ourTeam: '우리 팀',
      mission: '미션',
      vision: '비전',
      companyHistory: '회사 역사',
      meetTeam: '팀 소개',
      viewProfile: '프로필 보기',
      closeProfile: '닫기',
      expertise: '전문 분야',
      socialLinks: '소셜 링크',
      companyStats: '회사 개요'
    },
    es: {
      aboutUs: 'Acerca de Nosotros',
      ourTeam: 'Nuestro Equipo',
      mission: 'Misión',
      vision: 'Visión',
      companyHistory: 'Historia de la Empresa',
      meetTeam: 'Conoce a Nuestro Equipo',
      viewProfile: 'Ver Perfil',
      closeProfile: 'Cerrar',
      expertise: 'Experiencia',
      socialLinks: 'Enlaces Sociales',
      companyStats: 'Resumen de la Empresa'
    }
  };

  const t = labels[language];

  return (
    <div className={`py-16 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ヘッダー */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            {t.aboutUs}
          </h2>
        </div>

        {/* タブナビゲーション */}
        <div className="border-b border-gray-200 mb-8">
          <div className="flex justify-center">
            {['about', 'team'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 font-medium text-sm transition-colors ${
                  activeTab === tab
                    ? 'text-primary border-b-2 border-primary'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {tab === 'about' ? t.aboutUs : t.ourTeam}
              </button>
            ))}
          </div>
        </div>

        {/* タブコンテンツ */}
        {activeTab === 'about' && (
          <div className="space-y-16">
            {/* 会社統計 */}
            <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                {t.companyStats}
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {companyData.stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">
                      {stat.value}
                    </div>
                    <div className="text-gray-600">
                      {stat.label[language]}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* ミッション・ビジョン */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="bg-white rounded-lg shadow-sm p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {t.mission}
                </h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                  {companyData.mission[language]}
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {t.vision}
                </h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                  {companyData.vision[language]}
                </p>
              </div>
            </div>

            {/* 価値観 */}
            <div className="bg-white rounded-lg shadow-sm p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                {companyData.values.title[language]}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {companyData.values.items[language].map((value, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-gray-700">{value}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* 会社の歴史 */}
            <div className="bg-white rounded-lg shadow-sm p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">
                {t.companyHistory}
              </h3>
              <div className="space-y-6">
                {companyData.timeline.map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold">{item.year}</span>
                    </div>
                    <div className="pt-3">
                      <p className="text-gray-700 text-lg">{item.event[language]}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'team' && (
          <div className="space-y-12">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {t.meetTeam}
              </h3>
            </div>

            {/* チームメンバー一覧 */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {teamMembers.map((member) => (
                <div
                  key={member.id}
                  className="bg-white rounded-lg shadow-sm p-6 text-center hover:shadow-lg transition-shadow cursor-pointer"
                  onClick={() => setSelectedMember(member)}
                >
                  <div className="text-6xl mb-4">{member.avatar}</div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    {member.name}
                  </h4>
                  <p className="text-primary font-medium mb-3">
                    {member.position[language]}
                  </p>
                  <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                    {member.bio[language]}
                  </p>
                  <button className="text-primary font-medium text-sm hover:text-primary/80 transition-colors">
                    {t.viewProfile} →
                  </button>
                </div>
              ))}
            </div>

            {/* チームメンバー詳細モーダル */}
            {selectedMember && (
              <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
                <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
                  {/* モーダルヘッダー */}
                  <div className="flex justify-between items-center p-6 border-b">
                    <div className="flex items-center space-x-4">
                      <span className="text-4xl">{selectedMember.avatar}</span>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">
                          {selectedMember.name}
                        </h3>
                        <p className="text-primary font-medium">
                          {selectedMember.position[language]}
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={() => setSelectedMember(null)}
                      className="text-gray-400 hover:text-gray-600 transition-colors"
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>

                  {/* モーダルコンテンツ */}
                  <div className="p-6 space-y-6">
                    <div>
                      <p className="text-gray-700 text-lg leading-relaxed">
                        {selectedMember.bio[language]}
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">{t.expertise}</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedMember.expertise.map((skill, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">{t.socialLinks}</h4>
                      <div className="flex space-x-4">
                        {selectedMember.socialLinks.linkedin && (
                          <a href={selectedMember.socialLinks.linkedin} className="text-primary hover:text-primary/80">
                            LinkedIn
                          </a>
                        )}
                        {selectedMember.socialLinks.twitter && (
                          <a href={selectedMember.socialLinks.twitter} className="text-primary hover:text-primary/80">
                            Twitter
                          </a>
                        )}
                        {selectedMember.socialLinks.github && (
                          <a href={selectedMember.socialLinks.github} className="text-primary hover:text-primary/80">
                            GitHub
                          </a>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* モーダルフッター */}
                  <div className="border-t p-6 flex justify-end">
                    <button
                      onClick={() => setSelectedMember(null)}
                      className="px-6 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition-colors"
                    >
                      {t.closeProfile}
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
} 