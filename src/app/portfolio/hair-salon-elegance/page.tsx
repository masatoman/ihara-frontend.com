'use client';

import Link from 'next/link';
import { useState } from 'react';
import BookingForm from './components/BookingForm';
import BeforeAfterGallery from './components/BeforeAfterGallery';
import ServicesList from './components/ServicesList';
import ContactForm from './components/ContactForm';

type TabType = 'home' | 'services' | 'gallery' | 'booking' | 'contact';

export default function HairSalonElegance() {
  const [activeTab, setActiveTab] = useState<TabType>('home');

  const renderContent = () => {
    switch (activeTab) {
      case 'services':
        return <ServicesList />;
      case 'gallery':
        return <BeforeAfterGallery />;
      case 'booking':
        return <BookingForm />;
      case 'contact':
        return <ContactForm />;
      default:
        return <HomeContent setActiveTab={setActiveTab} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* ポートフォリオサイトヘッダー */}
      <header className="bg-white shadow-sm border-b-2 border-primary">
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

      {/* パンくずリスト */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex justify-between items-center">
            <nav className="flex" aria-label="パンくず">
              <ol className="flex items-center space-x-2">
                <li>
                  <Link href="/" className="text-gray-500 hover:text-primary">
                    Home
                  </Link>
                </li>
                <li className="text-gray-400">/</li>
                <li>
                  <Link href="/portfolio" className="text-gray-500 hover:text-primary">
                    Portfolio
                  </Link>
                </li>
                <li className="text-gray-400">/</li>
                <li className="text-primary font-medium">Hair Salon Elegance</li>
              </ol>
            </nav>
            
            {/* 実装ステータス */}
            <span className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">
              ✅ 実装完了
            </span>
          </div>
        </div>
      </div>

      {/* 美容院サイトヘッダー */}
      <div className="bg-gradient-to-r from-pink-500 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mr-4">
                <span className="text-2xl">💇‍♀️</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold">Hair Salon Elegance</h1>
                <p className="text-pink-100">Beauty & Elegance - Your Hair, Our Passion</p>
              </div>
            </div>
            
            {/* 営業情報 */}
            <div className="hidden md:block text-right">
              <p className="text-pink-100">営業時間: 10:00-20:00 (月休)</p>
              <p className="text-white font-bold">📞 03-1234-5678</p>
            </div>
          </div>
        </div>
      </div>

      {/* ナビゲーションタブ */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8 overflow-x-auto">
            {[
              { id: 'home', name: 'ホーム', icon: '🏠' },
              { id: 'services', name: 'サービス・料金', icon: '💅' },
              { id: 'gallery', name: 'ビフォーアフター', icon: '📸' },
              { id: 'booking', name: 'ご予約', icon: '📅' },
              { id: 'contact', name: 'お問い合わせ', icon: '📧' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as TabType)}
                className={`flex items-center space-x-2 py-4 px-2 border-b-2 font-medium text-sm whitespace-nowrap transition-colors ${
                  activeTab === tab.id
                    ? 'border-pink-500 text-pink-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <span>{tab.icon}</span>
                <span>{tab.name}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* メインコンテンツ */}
      <main>
        {renderContent()}
      </main>

      {/* フッター */}
      <footer className="bg-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-4">Hair Salon Elegance</h3>
              <p className="text-gray-300 mb-2">〒150-0001</p>
              <p className="text-gray-300 mb-2">東京都渋谷区神宮前1-2-3</p>
              <p className="text-gray-300">エレガンスビル2F</p>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-4">営業時間</h3>
              <p className="text-gray-300 mb-1">平日: 10:00〜20:00</p>
              <p className="text-gray-300 mb-1">土日祝: 9:00〜19:00</p>
              <p className="text-gray-300">定休日: 毎週月曜日</p>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-4">お問い合わせ</h3>
              <p className="text-gray-300 mb-2">📞 03-1234-5678</p>
              <p className="text-gray-300 mb-2">✉️ info@hair-elegance.com</p>
              <div className="flex space-x-4 mt-4">
                <span className="w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center text-sm">📘</span>
                <span className="w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center text-sm">📷</span>
                <span className="w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center text-sm">🐦</span>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              ※ これは井原誠斗のポートフォリオサイトの架空プロジェクトです
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

// ホームページコンテンツコンポーネント
function HomeContent({ setActiveTab }: { setActiveTab: (tab: TabType) => void }) {
  return (
    <div>
      {/* ヒーローセクション */}
      <section className="bg-gradient-to-br from-pink-50 to-purple-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            あなたの魅力を
            <span className="text-pink-600">最大限に</span>
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            一人ひとりの個性を大切に、最新のトレンドと確かな技術で
            あなたの理想のスタイルを実現します
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setActiveTab('booking')}
              className="bg-pink-500 text-white px-8 py-3 rounded-md hover:bg-pink-600 transition-colors font-medium text-lg"
            >
              今すぐ予約する
            </button>
            <button
              onClick={() => setActiveTab('gallery')}
              className="border border-pink-500 text-pink-500 px-8 py-3 rounded-md hover:bg-pink-50 transition-colors font-medium text-lg"
            >
              施術例を見る
            </button>
          </div>
        </div>
      </section>

      {/* 特徴セクション */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Hair Salon Eleganceの特徴
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">✨</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                経験豊富なスタイリスト
              </h3>
              <p className="text-gray-600">
                10年以上の経験を持つプロフェッショナルが、あなたの髪質と顔立ちに合わせた最適なスタイルをご提案します。
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌿</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                髪に優しい薬剤
              </h3>
              <p className="text-gray-600">
                オーガニック成分を使用した髪に優しい薬剤で、美しい仕上がりと健康な髪を両立します。
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💖</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                心地よい空間
              </h3>
              <p className="text-gray-600">
                リラックスできる上質な空間で、至福のサロンタイムをお過ごしください。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 人気サービス */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            人気のサービス
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { name: 'カット', price: '¥5,000', description: '骨格に合わせたカット', icon: '✂️' },
              { name: 'カラー', price: '¥8,000〜', description: '自然な美しい発色', icon: '🎨' },
              { name: 'パーマ', price: '¥12,000〜', description: 'ふんわり自然なウェーブ', icon: '💇‍♀️' },
              { name: 'トリートメント', price: '¥6,000〜', description: '髪の内部から補修', icon: '✨' }
            ].map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow">
                <div className="text-3xl mb-4">{service.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{service.name}</h3>
                <div className="text-2xl font-bold text-pink-600 mb-2">{service.price}</div>
                <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                <button
                  onClick={() => setActiveTab('services')}
                  className="text-pink-500 hover:text-pink-600 text-sm font-medium"
                >
                  詳細を見る →
                </button>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <button
              onClick={() => setActiveTab('services')}
              className="bg-pink-500 text-white px-8 py-3 rounded-md hover:bg-pink-600 transition-colors font-medium"
            >
              全サービスを見る
            </button>
          </div>
        </div>
      </section>

      {/* お客様の声 */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            お客様の声
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: '田中 美香様',
                age: '(30代)',
                comment: '初めて伺いましたが、カウンセリングがとても丁寧で安心できました。仕上がりも大満足です！',
                rating: 5
              },
              {
                name: '佐藤 健太様',
                age: '(20代)',
                comment: 'メンズカットも上手で、毎回お任せでお願いしています。スタイリングも教えてもらえて助かります。',
                rating: 5
              },
              {
                name: '山田 里美様',
                age: '(40代)',
                comment: 'カラーの色持ちが良く、髪も傷まないので本当におすすめです。また伺います！',
                rating: 5
              }
            ].map((review, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-pink-600 font-bold">
                      {review.name.split(' ')[0][0]}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{review.name}</h4>
                    <p className="text-gray-500 text-sm">{review.age}</p>
                  </div>
                </div>
                
                <div className="flex mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400">⭐</span>
                  ))}
                </div>
                
                <p className="text-gray-600 italic">"{review.comment}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA セクション */}
      <section className="py-20 bg-gradient-to-r from-pink-500 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            理想のヘアスタイルを手に入れませんか？
          </h2>
          <p className="text-xl mb-8 text-pink-100">
            経験豊富なスタイリストがあなたの魅力を最大限に引き出します
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setActiveTab('booking')}
              className="bg-white text-pink-600 px-8 py-3 rounded-md hover:bg-gray-100 transition-colors font-medium text-lg"
            >
              📅 ご予約はこちら
            </button>
            <button
              onClick={() => setActiveTab('contact')}
              className="border border-white text-white px-8 py-3 rounded-md hover:bg-white hover:text-pink-600 transition-colors font-medium text-lg"
            >
              💬 ご相談・お問い合わせ
            </button>
          </div>
        </div>
      </section>
    </div>
  );
} 