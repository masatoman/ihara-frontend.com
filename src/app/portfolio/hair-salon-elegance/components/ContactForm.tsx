'use client';

import { useState } from 'react';

interface ContactData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  preferredContact: 'email' | 'phone';
  inquiryType: string;
}

const inquiryTypes = [
  { id: 'booking', name: '予約について' },
  { id: 'service', name: 'サービスについて' },
  { id: 'price', name: '料金について' },
  { id: 'hair-concern', name: '髪の悩み相談' },
  { id: 'wedding', name: 'ブライダル' },
  { id: 'other', name: 'その他' }
];

export default function ContactForm() {
  const [formData, setFormData] = useState<ContactData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    preferredContact: 'email',
    inquiryType: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);
  const [errors, setErrors] = useState<Partial<ContactData>>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // エラーをクリア
    if (errors[name as keyof ContactData]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<ContactData> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'お名前を入力してください';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'メールアドレスを入力してください';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = '有効なメールアドレスを入力してください';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = '電話番号を入力してください';
    }

    if (!formData.inquiryType) {
      newErrors.inquiryType = 'お問い合わせ種類を選択してください';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'お問い合わせ内容を入力してください';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'お問い合わせ内容は10文字以上で入力してください';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // 実際の送信処理をシミュレート
    await new Promise(resolve => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setShowThankYou(true);
  };

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
      preferredContact: 'email',
      inquiryType: ''
    });
    setErrors({});
    setShowThankYou(false);
  };

  if (showThankYou) {
    return (
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-lg p-8 text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            お問い合わせありがとうございます
          </h2>
          
          <p className="text-gray-600 mb-6 leading-relaxed">
            お問い合わせを受付いたしました。<br />
            内容を確認の上、{formData.preferredContact === 'email' ? 'メール' : 'お電話'}にて
            24時間以内にご連絡いたします。<br />
            しばらくお待ちください。
          </p>
          
          <div className="bg-gray-50 p-4 rounded-lg mb-6 text-left">
            <h3 className="font-semibold text-gray-900 mb-2">受付内容</h3>
            <div className="space-y-2 text-sm text-gray-600">
              <p><span className="font-medium">お名前:</span> {formData.name}</p>
              <p><span className="font-medium">種類:</span> {inquiryTypes.find(t => t.id === formData.inquiryType)?.name}</p>
              <p><span className="font-medium">希望連絡方法:</span> {formData.preferredContact === 'email' ? 'メール' : '電話'}</p>
            </div>
          </div>
          
          <button
            onClick={resetForm}
            className="bg-pink-500 text-white px-6 py-2 rounded-md hover:bg-pink-600 transition-colors"
          >
            新しいお問い合わせを送信
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* ヘッダー */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          お問い合わせ
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          髪に関するお悩み、サービスについてのご質問など、お気軽にお問い合わせください。
          経験豊富なスタッフが丁寧にお答えいたします。
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* 左側：お問い合わせフォーム */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* お客様情報 */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900">お客様情報</h3>
                
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    お名前 <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 ${
                      errors.name ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="山田 花子"
                  />
                  {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      メールアドレス <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 ${
                        errors.email ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="example@email.com"
                    />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      電話番号 <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 ${
                        errors.phone ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="03-1234-5678"
                    />
                    {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                  </div>
                </div>
              </div>

              {/* お問い合わせ内容 */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900">お問い合わせ内容</h3>
                
                <div>
                  <label htmlFor="inquiryType" className="block text-sm font-medium text-gray-700 mb-1">
                    お問い合わせ種類 <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="inquiryType"
                    name="inquiryType"
                    value={formData.inquiryType}
                    onChange={handleInputChange}
                    className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 ${
                      errors.inquiryType ? 'border-red-500' : 'border-gray-300'
                    }`}
                  >
                    <option value="">選択してください</option>
                    {inquiryTypes.map(type => (
                      <option key={type.id} value={type.id}>{type.name}</option>
                    ))}
                  </select>
                  {errors.inquiryType && <p className="text-red-500 text-sm mt-1">{errors.inquiryType}</p>}
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    件名
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                    placeholder="具体的な件名があればご記入ください"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    お問い合わせ詳細 <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={5}
                    className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 ${
                      errors.message ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="髪の悩み、ご希望のスタイル、サービスについてのご質問など、詳しくお聞かせください"
                  />
                  {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                  <p className="text-sm text-gray-500 mt-1">
                    {formData.message.length}/500文字
                  </p>
                </div>
              </div>

              {/* 連絡方法 */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900">ご希望の連絡方法</h3>
                <div className="flex gap-6">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="preferredContact"
                      value="email"
                      checked={formData.preferredContact === 'email'}
                      onChange={handleRadioChange}
                      className="mr-2 text-pink-500 focus:ring-pink-500"
                    />
                    メール
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="preferredContact"
                      value="phone"
                      checked={formData.preferredContact === 'phone'}
                      onChange={handleRadioChange}
                      className="mr-2 text-pink-500 focus:ring-pink-500"
                    />
                    電話
                  </label>
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-pink-500 text-white py-3 px-6 rounded-md hover:bg-pink-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors font-medium"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    送信中...
                  </span>
                ) : (
                  'お問い合わせを送信'
                )}
              </button>
            </form>
          </div>
        </div>

        {/* 右側：サロン情報 */}
        <div className="space-y-6">
          {/* 営業時間・連絡先 */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Hair Salon Elegance
            </h3>
            
            <div className="space-y-4 text-sm">
              <div className="flex items-start">
                <svg className="w-5 h-5 text-pink-500 mt-0.5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div>
                  <p className="text-gray-900">〒150-0001</p>
                  <p className="text-gray-600">東京都渋谷区神宮前1-2-3</p>
                  <p className="text-gray-600">エレガンスビル2F</p>
                </div>
              </div>

              <div className="flex items-start">
                <svg className="w-5 h-5 text-pink-500 mt-0.5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <div>
                  <p className="text-gray-900">03-1234-5678</p>
                  <p className="text-gray-600 text-xs">受付時間: 9:00〜20:00</p>
                </div>
              </div>

              <div className="flex items-start">
                <svg className="w-5 h-5 text-pink-500 mt-0.5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <p className="text-gray-900 mb-1">営業時間</p>
                  <p className="text-gray-600">平日: 10:00〜20:00</p>
                  <p className="text-gray-600">土日祝: 9:00〜19:00</p>
                  <p className="text-gray-600">定休日: 毎週月曜日</p>
                </div>
              </div>
            </div>
          </div>

          {/* よくある質問 */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              よくあるご質問
            </h3>
            
            <div className="space-y-4 text-sm">
              <div>
                <p className="font-medium text-gray-900 mb-1">Q. 初回カウンセリングは無料ですか？</p>
                <p className="text-gray-600">A. はい、初回のカウンセリングは無料で行っております。</p>
              </div>
              
              <div>
                <p className="font-medium text-gray-900 mb-1">Q. 当日予約は可能ですか？</p>
                <p className="text-gray-600">A. 空きがあれば当日予約も承ります。お電話でご確認ください。</p>
              </div>
              
              <div>
                <p className="font-medium text-gray-900 mb-1">Q. 支払い方法は？</p>
                <p className="text-gray-600">A. 現金、クレジットカード、交通系ICカードがご利用いただけます。</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 