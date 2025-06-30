'use client';

import { useState } from 'react';

interface BookingData {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  service: string;
  stylist: string;
  notes: string;
}

const services = [
  { id: 'cut', name: 'カット', price: 5000, duration: 60 },
  { id: 'color', name: 'カラー', price: 8000, duration: 120 },
  { id: 'perm', name: 'パーマ', price: 12000, duration: 180 },
  { id: 'treatment', name: 'トリートメント', price: 6000, duration: 90 },
  { id: 'cut-color', name: 'カット + カラー', price: 12000, duration: 150 },
  { id: 'cut-perm', name: 'カット + パーマ', price: 16000, duration: 210 },
];

const stylists = [
  { id: 'tanaka', name: '田中 美穂', specialty: 'カット・カラー' },
  { id: 'sato', name: '佐藤 優子', specialty: 'パーマ・トリートメント' },
  { id: 'suzuki', name: '鈴木 大輔', specialty: 'メンズカット' },
];

const timeSlots = [
  '9:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00'
];

export default function BookingForm() {
  const [formData, setFormData] = useState<BookingData>({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    service: '',
    stylist: '',
    notes: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // 実際の予約処理をシミュレート
    await new Promise(resolve => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setShowConfirmation(true);
  };

  const selectedService = services.find(s => s.id === formData.service);
  const selectedStylist = stylists.find(s => s.id === formData.stylist);

  if (showConfirmation) {
    return (
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md mx-auto">
        <div className="text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">予約が完了しました！</h3>
          <p className="text-gray-600 mb-6">
            確認メールを送信いたします。<br />
            お時間に遅れないようお越しください。
          </p>
          <button
            onClick={() => {
              setShowConfirmation(false);
              setFormData({
                name: '',
                email: '',
                phone: '',
                date: '',
                time: '',
                service: '',
                stylist: '',
                notes: ''
              });
            }}
            className="bg-pink-500 text-white px-6 py-2 rounded-md hover:bg-pink-600 transition-colors"
          >
            新しい予約を作成
          </button>
        </div>
      </div>
    );
  }

  // 今日以降の日付のみ選択可能
  const today = new Date().toISOString().split('T')[0];

  return (
    <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
        ご予約フォーム
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* お客様情報 */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-900">お客様情報</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                placeholder="山田 花子"
              />
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
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                placeholder="03-1234-5678"
              />
            </div>
          </div>

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
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
              placeholder="example@email.com"
            />
          </div>
        </div>

        {/* 予約詳細 */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-900">予約詳細</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">
                希望日 <span className="text-red-500">*</span>
              </label>
              <input
                type="date"
                id="date"
                name="date"
                value={formData.date}
                onChange={handleInputChange}
                min={today}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
            </div>

            <div>
              <label htmlFor="time" className="block text-sm font-medium text-gray-700 mb-1">
                希望時間 <span className="text-red-500">*</span>
              </label>
              <select
                id="time"
                name="time"
                value={formData.time}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
              >
                <option value="">時間を選択</option>
                {timeSlots.map(time => (
                  <option key={time} value={time}>{time}</option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
              ご希望メニュー <span className="text-red-500">*</span>
            </label>
            <select
              id="service"
              name="service"
              value={formData.service}
              onChange={handleInputChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
            >
              <option value="">メニューを選択</option>
              {services.map(service => (
                <option key={service.id} value={service.id}>
                  {service.name} - ¥{service.price.toLocaleString()} ({service.duration}分)
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="stylist" className="block text-sm font-medium text-gray-700 mb-1">
              担当スタイリスト
            </label>
            <select
              id="stylist"
              name="stylist"
              value={formData.stylist}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
            >
              <option value="">どなたでも</option>
              {stylists.map(stylist => (
                <option key={stylist.id} value={stylist.id}>
                  {stylist.name} ({stylist.specialty})
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="notes" className="block text-sm font-medium text-gray-700 mb-1">
              ご要望・ご質問
            </label>
            <textarea
              id="notes"
              name="notes"
              value={formData.notes}
              onChange={handleInputChange}
              rows={3}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
              placeholder="髪の悩みやご希望のスタイルなど、お気軽にお書きください"
            />
          </div>
        </div>

        {/* 予約確認 */}
        {selectedService && (
          <div className="bg-pink-50 p-4 rounded-lg">
            <h4 className="font-semibold text-gray-900 mb-2">予約内容確認</h4>
            <div className="space-y-1 text-sm text-gray-700">
              <p><span className="font-medium">メニュー:</span> {selectedService.name}</p>
              <p><span className="font-medium">料金:</span> ¥{selectedService.price.toLocaleString()}</p>
              <p><span className="font-medium">所要時間:</span> 約{selectedService.duration}分</p>
              {selectedStylist && (
                <p><span className="font-medium">担当:</span> {selectedStylist.name}</p>
              )}
              {formData.date && formData.time && (
                <p><span className="font-medium">日時:</span> {formData.date} {formData.time}〜</p>
              )}
            </div>
          </div>
        )}

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
              予約処理中...
            </span>
          ) : (
            '予約を確定する'
          )}
        </button>
      </form>
    </div>
  );
} 