'use client';

import { useState } from 'react';

interface Service {
  id: string;
  name: string;
  price: number;
  priceRange?: string;
  duration: number;
  description: string;
  category: string;
  popular?: boolean;
  image?: string;
}

const services: Service[] = [
  {
    id: 'cut',
    name: 'カット',
    price: 5000,
    duration: 60,
    description: 'お客様の骨格や髪質に合わせたカット。トレンドを取り入れながら、長く愛されるスタイルをご提案します。',
    category: 'カット',
    popular: true
  },
  {
    id: 'mens-cut',
    name: 'メンズカット',
    price: 4000,
    duration: 45,
    description: 'ビジネスからカジュアルまで対応。清潔感のあるスタイルから個性的なデザインまで幅広く対応。',
    category: 'カット'
  },
  {
    id: 'color',
    name: 'カラー',
    price: 8000,
    priceRange: '8,000円〜',
    duration: 120,
    description: 'お肌の色に合わせたカラーリング。ダメージレスな薬剤を使用し、美しい発色と色持ちを実現。',
    category: 'カラー',
    popular: true
  },
  {
    id: 'highlight',
    name: 'ハイライト',
    price: 12000,
    priceRange: '12,000円〜',
    duration: 150,
    description: '立体感と動きのあるスタイルに。全体ハイライトから部分ハイライトまで、お好みに合わせて調整。',
    category: 'カラー'
  },
  {
    id: 'gradation-color',
    name: 'グラデーションカラー',
    price: 15000,
    priceRange: '15,000円〜',
    duration: 180,
    description: '根元から毛先にかけて徐々に明るくなるグラデーション。自然な仕上がりで伸びても気になりません。',
    category: 'カラー'
  },
  {
    id: 'perm',
    name: 'パーマ',
    price: 12000,
    priceRange: '12,000円〜',
    duration: 180,
    description: 'ふんわりとしたボリュームとカールを。ダメージを抑えた薬剤で、自然な仕上がりをお約束。',
    category: 'パーマ'
  },
  {
    id: 'digital-perm',
    name: 'デジタルパーマ',
    price: 16000,
    priceRange: '16,000円〜',
    duration: 210,
    description: '熱を使って形状記憶するデジタルパーマ。再現性が高く、スタイリングが楽になります。',
    category: 'パーマ'
  },
  {
    id: 'treatment',
    name: 'トリートメント',
    price: 6000,
    priceRange: '6,000円〜',
    duration: 90,
    description: '髪の内部から補修するプロ仕様トリートメント。ダメージヘアを健康な状態へ導きます。',
    category: 'ケア',
    popular: true
  },
  {
    id: 'head-spa',
    name: 'ヘッドスパ',
    price: 4000,
    duration: 60,
    description: 'リラックス効果抜群のヘッドマッサージ。血行促進により、健康な髪と頭皮へ。',
    category: 'ケア'
  },
  {
    id: 'set',
    name: 'セット',
    price: 3000,
    duration: 45,
    description: '特別な日のためのヘアセット。アップスタイルからダウンスタイルまで、ご希望に合わせて。',
    category: 'セット'
  },
  {
    id: 'cut-color',
    name: 'カット + カラー',
    price: 12000,
    duration: 150,
    description: 'カットとカラーのセットメニュー。統一感のあるスタイルを効率よく仕上げます。',
    category: 'セット',
    popular: true
  },
  {
    id: 'cut-perm',
    name: 'カット + パーマ',
    price: 16000,
    duration: 210,
    description: 'カットとパーマのセットメニュー。バランスの取れたスタイルを一度で完成。',
    category: 'セット'
  }
];

const categories = ['すべて', 'カット', 'カラー', 'パーマ', 'ケア', 'セット'];

export default function ServicesList() {
  const [selectedCategory, setSelectedCategory] = useState('すべて');
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const filteredServices = selectedCategory === 'すべて' 
    ? services 
    : services.filter(service => service.category === selectedCategory);

  const popularServices = services.filter(service => service.popular);

  const openServiceModal = (service: Service) => {
    setSelectedService(service);
  };

  const closeServiceModal = () => {
    setSelectedService(null);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* ヘッダー */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          サービス・料金
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          お客様一人ひとりの魅力を引き出すプロフェッショナルなサービスをご提供いたします。
        </p>
      </div>

      {/* 人気サービス */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
          <span className="bg-pink-100 text-pink-800 px-3 py-1 rounded-full text-lg">
            人気のサービス
          </span>
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {popularServices.map(service => (
            <div
              key={service.id}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow cursor-pointer border-2 border-pink-200"
              onClick={() => openServiceModal(service)}
            >
              <div className="text-center">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  {service.name}
                </h4>
                <div className="text-2xl font-bold text-pink-600 mb-2">
                  ¥{service.price.toLocaleString()}
                  {service.priceRange && <span className="text-sm text-gray-500">〜</span>}
                </div>
                <div className="text-sm text-gray-500 mb-3">
                  {service.duration}分
                </div>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {service.description}
                </p>
                <button className="w-full bg-pink-500 text-white py-2 px-4 rounded-md hover:bg-pink-600 transition-colors text-sm">
                  予約する
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* カテゴリフィルター */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              selectedCategory === category
                ? 'bg-pink-500 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* 全サービス一覧 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredServices.map(service => (
          <div
            key={service.id}
            className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow cursor-pointer"
            onClick={() => openServiceModal(service)}
          >
            <div className="flex justify-between items-start mb-3">
              <h3 className="text-lg font-semibold text-gray-900">
                {service.name}
              </h3>
              {service.popular && (
                <span className="bg-pink-100 text-pink-800 text-xs px-2 py-1 rounded-full">
                  人気
                </span>
              )}
            </div>
            
            <div className="flex justify-between items-center mb-3">
              <div className="text-xl font-bold text-pink-600">
                ¥{service.price.toLocaleString()}
                {service.priceRange && <span className="text-sm text-gray-500">〜</span>}
              </div>
              <div className="text-sm text-gray-500">
                {service.duration}分
              </div>
            </div>
            
            <p className="text-gray-600 text-sm mb-4 line-clamp-3">
              {service.description}
            </p>
            
            <div className="flex justify-between items-center">
              <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                {service.category}
              </span>
              <button className="text-pink-500 hover:text-pink-600 text-sm font-medium">
                詳細を見る →
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* サービス詳細モーダル */}
      {selectedService && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            {/* モーダルヘッダー */}
            <div className="flex justify-between items-center p-6 border-b">
              <div>
                <h3 className="text-2xl font-bold text-gray-900">
                  {selectedService.name}
                </h3>
                <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded mt-2 inline-block">
                  {selectedService.category}
                </span>
              </div>
              <button
                onClick={closeServiceModal}
                className="text-gray-400 hover:text-gray-600 text-2xl"
              >
                ×
              </button>
            </div>

            {/* モーダル本体 */}
            <div className="p-6">
              <div className="space-y-6">
                {/* 料金・時間情報 */}
                <div className="bg-pink-50 p-4 rounded-lg">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">料金</h4>
                      <div className="text-2xl font-bold text-pink-600">
                        ¥{selectedService.price.toLocaleString()}
                        {selectedService.priceRange && (
                          <span className="text-sm text-gray-500">〜</span>
                        )}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">所要時間</h4>
                      <div className="text-xl text-gray-700">
                        {selectedService.duration}分
                      </div>
                    </div>
                  </div>
                </div>

                {/* サービス詳細 */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">サービス詳細</h4>
                  <p className="text-gray-600 leading-relaxed">
                    {selectedService.description}
                  </p>
                </div>

                {/* 注意事項 */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">ご注意事項</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• 髪の長さや状態により、料金が変動する場合があります</li>
                    <li>• アレルギーをお持ちの方は事前にお知らせください</li>
                    <li>• キャンセルは前日までにお願いいたします</li>
                    <li>• 遅刻の場合、メニューを短縮させていただく場合があります</li>
                  </ul>
                </div>

                {/* アクションボタン */}
                <div className="flex gap-3 pt-4 border-t">
                  <button
                    onClick={closeServiceModal}
                    className="flex-1 bg-gray-100 text-gray-700 py-3 px-6 rounded-md hover:bg-gray-200 transition-colors font-medium"
                  >
                    閉じる
                  </button>
                  <button className="flex-1 bg-pink-500 text-white py-3 px-6 rounded-md hover:bg-pink-600 transition-colors font-medium">
                    このサービスを予約する
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 