'use client';

import { useState } from 'react';

interface BeforeAfterItem {
  id: number;
  title: string;
  category: string;
  stylist: string;
  beforeImage: string;
  afterImage: string;
  description: string;
  service: string[];
  date: string;
}

const galleryData: BeforeAfterItem[] = [
  {
    id: 1,
    title: 'ロングからショートボブへ',
    category: 'カット',
    stylist: '田中 美穂',
    beforeImage: 'https://images.unsplash.com/photo-1594736797933-d0c6a6ef2283?w=400&h=400&fit=crop&crop=face',
    afterImage: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=400&h=400&fit=crop&crop=face',
    description: 'お客様のライフスタイルに合わせて、お手入れしやすいショートボブにカット。毛先をふんわりと内巻きにして、フェミニンな印象に。',
    service: ['カット', 'スタイリング'],
    date: '2024-06-15'
  },
  {
    id: 2,
    title: 'ナチュラルブラウンカラー',
    category: 'カラー',
    stylist: '佐藤 優子',
    beforeImage: 'https://images.unsplash.com/photo-1616683693494-52ad2da9c5e1?w=400&h=400&fit=crop&crop=face',
    afterImage: 'https://images.unsplash.com/photo-1595475038665-8de2b7d1ac3f?w=400&h=400&fit=crop&crop=face',
    description: '黒髪から自然なブラウンカラーにチェンジ。お肌の色に合わせたカラー選択で、より明るく若々しい印象に。',
    service: ['カラーリング', 'トリートメント'],
    date: '2024-06-12'
  },
  {
    id: 3,
    title: 'デジタルパーマでふんわりスタイル',
    category: 'パーマ',
    stylist: '田中 美穂',
    beforeImage: 'https://images.unsplash.com/photo-1665686308827-eb62e4f6604d?w=400&h=400&fit=crop&crop=face',
    afterImage: 'https://images.unsplash.com/photo-1616683693505-9db6bf018a6f?w=400&h=400&fit=crop&crop=face',
    description: 'ストレートヘアにデジタルパーマでふんわりとした動きをプラス。朝のスタイリングが楽になるよう、毛流れを計算してパーマを。',
    service: ['デジタルパーマ', 'カット', 'トリートメント'],
    date: '2024-06-08'
  },
  {
    id: 4,
    title: 'ハイライトで立体感アップ',
    category: 'カラー',
    stylist: '佐藤 優子',
    beforeImage: 'https://images.unsplash.com/photo-1664575602276-acd073f104c1?w=400&h=400&fit=crop&crop=face',
    afterImage: 'https://images.unsplash.com/photo-1616683693172-8bc45e1558a6?w=400&h=400&fit=crop&crop=face',
    description: '全体的にハイライトを入れて立体感をアップ。顔周りを明るくすることで、より華やかな印象に仕上げました。',
    service: ['ハイライト', 'カラーリング', 'トリートメント'],
    date: '2024-06-05'
  },
  {
    id: 5,
    title: 'メンズショートスタイル',
    category: 'メンズカット',
    stylist: '鈴木 大輔',
    beforeImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
    afterImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
    description: 'ビジネスシーンにも対応できるすっきりとしたショートスタイル。サイドを短めにカットして、清潔感のある仕上がりに。',
    service: ['メンズカット', 'スタイリング'],
    date: '2024-06-03'
  },
  {
    id: 6,
    title: 'グラデーションカラー',
    category: 'カラー',
    stylist: '田中 美穂',
    beforeImage: 'https://images.unsplash.com/photo-1604004555806-6e4f1a5b5a0c?w=400&h=400&fit=crop&crop=face',
    afterImage: 'https://images.unsplash.com/photo-1595475038665-8de2b7d1ac3f?w=400&h=400&fit=crop&crop=face',
    description: '毛先に向かって徐々に明るくなるグラデーションカラー。派手すぎず、でもおしゃれな印象を演出。',
    service: ['グラデーションカラー', 'トリートメント'],
    date: '2024-05-28'
  }
];

const categories = ['すべて', 'カット', 'カラー', 'パーマ', 'メンズカット'];

export default function BeforeAfterGallery() {
  const [selectedCategory, setSelectedCategory] = useState('すべて');
  const [selectedItem, setSelectedItem] = useState<BeforeAfterItem | null>(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const filteredData = selectedCategory === 'すべて' 
    ? galleryData 
    : galleryData.filter(item => item.category === selectedCategory);

  const openModal = (item: BeforeAfterItem) => {
    setSelectedItem(item);
    setActiveImageIndex(0);
  };

  const closeModal = () => {
    setSelectedItem(null);
    setActiveImageIndex(0);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Before & After Gallery
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          お客様の変身の瞬間をご覧ください。熟練のスタイリストが、一人ひとりの魅力を最大限に引き出します。
        </p>
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

      {/* ギャラリーグリッド */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredData.map(item => (
          <div
            key={item.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer"
            onClick={() => openModal(item)}
          >
            <div className="relative">
              {/* Before/After比較表示 */}
              <div className="grid grid-cols-2 gap-0">
                <div className="relative">
                  <img
                    src={item.beforeImage}
                    alt={`Before - ${item.title}`}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-2 left-2 bg-black bg-opacity-70 text-white px-2 py-1 rounded text-xs">
                    Before
                  </div>
                </div>
                <div className="relative">
                  <img
                    src={item.afterImage}
                    alt={`After - ${item.title}`}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-2 right-2 bg-pink-500 text-white px-2 py-1 rounded text-xs">
                    After
                  </div>
                </div>
              </div>
              
              {/* オーバーレイ */}
              <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-20 transition-opacity flex items-center justify-center">
                <div className="bg-white rounded-full p-3 opacity-0 hover:opacity-100 transform scale-0 hover:scale-100 transition-all">
                  <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="p-6">
              <div className="flex items-center justify-between mb-2">
                <span className="px-2 py-1 bg-pink-100 text-pink-800 text-xs rounded-full">
                  {item.category}
                </span>
                <span className="text-xs text-gray-500">{item.date}</span>
              </div>
              
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {item.title}
              </h3>
              
              <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                {item.description}
              </p>
              
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">
                  担当: {item.stylist}
                </span>
                <button className="text-pink-500 hover:text-pink-600 text-sm font-medium">
                  詳細を見る →
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* モーダル */}
      {selectedItem && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            {/* モーダルヘッダー */}
            <div className="flex justify-between items-center p-6 border-b">
              <h3 className="text-2xl font-bold text-gray-900">
                {selectedItem.title}
              </h3>
              <button
                onClick={closeModal}
                className="text-gray-400 hover:text-gray-600 text-2xl"
              >
                ×
              </button>
            </div>

            {/* モーダル本体 */}
            <div className="p-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* 画像表示 */}
                <div>
                  <div className="mb-4">
                    <img
                      src={activeImageIndex === 0 ? selectedItem.beforeImage : selectedItem.afterImage}
                      alt={`${activeImageIndex === 0 ? 'Before' : 'After'} - ${selectedItem.title}`}
                      className="w-full rounded-lg"
                    />
                  </div>
                  
                  {/* 画像切り替えボタン */}
                  <div className="flex gap-2">
                    <button
                      onClick={() => setActiveImageIndex(0)}
                      className={`flex-1 py-2 px-4 text-sm font-medium rounded-md transition-colors ${
                        activeImageIndex === 0
                          ? 'bg-gray-800 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      Before
                    </button>
                    <button
                      onClick={() => setActiveImageIndex(1)}
                      className={`flex-1 py-2 px-4 text-sm font-medium rounded-md transition-colors ${
                        activeImageIndex === 1
                          ? 'bg-pink-500 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      After
                    </button>
                  </div>
                </div>

                {/* 詳細情報 */}
                <div>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">施術内容</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedItem.service.map(service => (
                          <span
                            key={service}
                            className="px-3 py-1 bg-pink-100 text-pink-800 text-sm rounded-full"
                          >
                            {service}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">担当スタイリスト</h4>
                      <p className="text-gray-600">{selectedItem.stylist}</p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">施術日</h4>
                      <p className="text-gray-600">{selectedItem.date}</p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">詳細</h4>
                      <p className="text-gray-600 leading-relaxed">
                        {selectedItem.description}
                      </p>
                    </div>

                    <div className="pt-4 border-t">
                      <button className="w-full bg-pink-500 text-white py-3 px-6 rounded-md hover:bg-pink-600 transition-colors font-medium">
                        同じスタイリストに予約する
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 