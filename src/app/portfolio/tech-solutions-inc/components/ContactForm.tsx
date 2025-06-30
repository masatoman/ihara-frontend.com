'use client';

import { useState } from 'react';
import { Language } from './LanguageSwitcher';

// フォームデータの型定義
interface FormData {
  companyName: string;
  contactPerson: string;
  email: string;
  phone: string;
  projectType: string;
  budget: string;
  description: string;
}

// 初期フォームデータ
const initialFormData: FormData = {
  companyName: '',
  contactPerson: '',
  email: '',
  phone: '',
  projectType: '',
  budget: '',
  description: ''
};

interface ContactFormProps {
  language: Language;
  className?: string;
}

export default function ContactForm({ language, className = '' }: ContactFormProps) {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const labels = {
    ja: {
      contactUs: 'お問い合わせ',
      getInTouch: 'お気軽にお問い合わせください',
      subtitle: 'プロジェクトのご相談、お見積り依頼、技術的なご質問など、何でもお聞かせください。',
      companyName: '会社名',
      contactPerson: 'ご担当者名',
      email: 'メールアドレス',
      phone: '電話番号',
      projectType: 'プロジェクトタイプ',
      budget: '予算規模',
      description: 'プロジェクト詳細',
      submitForm: '送信する',
      submitting: '送信中...',
      thankYou: 'ありがとうございました！',
      submitSuccess: 'お問い合わせを受け付けました。2営業日以内にご連絡いたします。',
      newInquiry: '新しいお問い合わせ'
    },
    en: {
      contactUs: 'Contact Us',
      getInTouch: 'Get in Touch with Us',
      subtitle: 'Project consultation, quote requests, technical questions - we\'re here to help.',
      companyName: 'Company Name',
      contactPerson: 'Contact Person',
      email: 'Email Address',
      phone: 'Phone Number',
      projectType: 'Project Type',
      budget: 'Budget Range',
      description: 'Project Description',
      submitForm: 'Submit',
      submitting: 'Submitting...',
      thankYou: 'Thank You!',
      submitSuccess: 'Your inquiry has been received. We\'ll contact you within 2 business days.',
      newInquiry: 'New Inquiry'
    },
    zh: {
      contactUs: '联系我们',
      getInTouch: '请与我们联系',
      subtitle: '项目咨询、报价请求、技术问题 - 我们随时为您服务。',
      companyName: '公司名称',
      contactPerson: '联系人',
      email: '电子邮箱',
      phone: '电话号码',
      projectType: '项目类型',
      budget: '预算范围',
      description: '项目描述',
      submitForm: '提交',
      submitting: '提交中...',
      thankYou: '谢谢您！',
      submitSuccess: '您的询问已收到。我们将在2个工作日内与您联系。',
      newInquiry: '新询问'
    },
    ko: {
      contactUs: '문의하기',
      getInTouch: '문의해 주세요',
      subtitle: '프로젝트 상담, 견적 요청, 기술적 질문 등 언제든지 문의해 주세요.',
      companyName: '회사명',
      contactPerson: '담당자',
      email: '이메일 주소',
      phone: '전화번호',
      projectType: '프로젝트 유형',
      budget: '예산 범위',
      description: '프로젝트 설명',
      submitForm: '제출',
      submitting: '제출 중...',
      thankYou: '감사합니다!',
      submitSuccess: '문의가 접수되었습니다. 2영업일 내에 연락드리겠습니다.',
      newInquiry: '새 문의'
    },
    es: {
      contactUs: 'Contáctanos',
      getInTouch: 'Ponte en Contacto con Nosotros',
      subtitle: 'Consulta de proyectos, solicitudes de cotización, preguntas técnicas: estamos aquí para ayudar.',
      companyName: 'Nombre de la Empresa',
      contactPerson: 'Persona de Contacto',
      email: 'Dirección de Email',
      phone: 'Número de Teléfono',
      projectType: 'Tipo de Proyecto',
      budget: 'Rango de Presupuesto',
      description: 'Descripción del Proyecto',
      submitForm: 'Enviar',
      submitting: 'Enviando...',
      thankYou: '¡Gracias!',
      submitSuccess: 'Tu consulta ha sido recibida. Te contactaremos dentro de 2 días hábiles.',
      newInquiry: 'Nueva Consulta'
    }
  };

  const t = labels[language];

  // フォーム送信処理
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // 実際の送信処理をシミュレート
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setIsSubmitted(true);
    } catch (error) {
      console.error('Submit error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  // 新しい問い合わせを開始
  const handleNewInquiry = () => {
    setFormData(initialFormData);
    setIsSubmitted(false);
  };

  // 成功画面
  if (isSubmitted) {
    return (
      <div className={`py-16 ${className}`}>
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-sm p-8 text-center">
            <div className="text-6xl mb-6">✅</div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {t.thankYou}
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              {t.submitSuccess}
            </p>
            <button
              onClick={handleNewInquiry}
              className="bg-primary text-white px-6 py-3 rounded-md hover:bg-primary/90 transition-colors"
            >
              {t.newInquiry}
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`py-16 ${className}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ヘッダー */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            {t.getInTouch}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        {/* フォーム */}
        <div className="bg-white rounded-lg shadow-sm p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t.companyName} *
                </label>
                <input
                  type="text"
                  required
                  value={formData.companyName}
                  onChange={(e) => setFormData({...formData, companyName: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t.contactPerson} *
                </label>
                <input
                  type="text"
                  required
                  value={formData.contactPerson}
                  onChange={(e) => setFormData({...formData, contactPerson: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t.email} *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t.phone}
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t.projectType} *
                </label>
                <select
                  required
                  value={formData.projectType}
                  onChange={(e) => setFormData({...formData, projectType: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                >
                  <option value="">選択してください</option>
                  <option value="ai">AIソリューション</option>
                  <option value="cloud">クラウドインフラ</option>
                  <option value="security">サイバーセキュリティ</option>
                  <option value="digital">デジタル変革</option>
                  <option value="consulting">コンサルティング</option>
                  <option value="other">その他</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t.budget}
                </label>
                <select
                  value={formData.budget}
                  onChange={(e) => setFormData({...formData, budget: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                >
                  <option value="">選択してください</option>
                  <option value="small">〜500万円</option>
                  <option value="medium">500万円〜1,000万円</option>
                  <option value="large">1,000万円〜5,000万円</option>
                  <option value="enterprise">5,000万円以上</option>
                  <option value="consult">相談したい</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {t.description} *
              </label>
              <textarea
                required
                value={formData.description}
                onChange={(e) => setFormData({...formData, description: e.target.value})}
                rows={6}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                placeholder="プロジェクトの詳細、要件、ご質問などをお聞かせください..."
              />
            </div>

            <div className="text-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-primary text-white px-8 py-3 rounded-md hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? t.submitting : t.submitForm}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
} 