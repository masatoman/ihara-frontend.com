'use client';

import { useState } from 'react';

// 言語設定の型定義
type Language = 'ja' | 'en' | 'zh' | 'ko' | 'es';

interface LanguageConfig {
  code: Language;
  name: string;
  flag: string;
}

// サポート言語一覧
const supportedLanguages: LanguageConfig[] = [
  { code: 'ja', name: '日本語', flag: '🇯🇵' },
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'zh', name: '中文', flag: '🇨🇳' },
  { code: 'ko', name: '한국어', flag: '🇰🇷' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
];

// 翻訳テキスト
const translations = {
  ja: {
    selectLanguage: '言語を選択',
    languageChanged: '言語が変更されました',
  },
  en: {
    selectLanguage: 'Select Language',
    languageChanged: 'Language changed',
  },
  zh: {
    selectLanguage: '选择语言',
    languageChanged: '语言已更改',
  },
  ko: {
    selectLanguage: '언어 선택',
    languageChanged: '언어가 변경되었습니다',
  },
  es: {
    selectLanguage: 'Seleccionar idioma',
    languageChanged: 'Idioma cambiado',
  },
};

interface LanguageSwitcherProps {
  onLanguageChange?: (language: Language) => void;
  className?: string;
}

export default function LanguageSwitcher({ 
  onLanguageChange, 
  className = '' 
}: LanguageSwitcherProps) {
  const [currentLanguage, setCurrentLanguage] = useState<Language>('ja');
  const [isOpen, setIsOpen] = useState(false);
  const [notification, setNotification] = useState<string | null>(null);

  const currentLang = supportedLanguages.find(lang => lang.code === currentLanguage)!;
  const t = translations[currentLanguage];

  const handleLanguageChange = (newLanguage: Language) => {
    setCurrentLanguage(newLanguage);
    setIsOpen(false);
    
    // 通知表示
    setNotification(translations[newLanguage].languageChanged);
    setTimeout(() => setNotification(null), 2000);
    
    // 親コンポーネントに通知
    onLanguageChange?.(newLanguage);
  };

  return (
    <div className={`relative ${className}`}>
      {/* 通知メッセージ */}
      {notification && (
        <div className="fixed top-4 right-4 bg-green-500 text-white px-4 py-2 rounded-md shadow-lg z-50 transition-all">
          {notification}
        </div>
      )}

      {/* 言語切り替えボタン */}
      <div className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center space-x-2 px-3 py-2 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
          aria-label={t.selectLanguage}
        >
          <span className="text-lg">{currentLang.flag}</span>
          <span className="text-sm font-medium text-gray-700">
            {currentLang.name}
          </span>
          <svg 
            className={`w-4 h-4 text-gray-500 transition-transform ${isOpen ? 'rotate-180' : ''}`}
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m19 9-7 7-7-7" />
          </svg>
        </button>

        {/* ドロップダウンメニュー */}
        {isOpen && (
          <>
            {/* オーバーレイ */}
            <div 
              className="fixed inset-0 z-10" 
              onClick={() => setIsOpen(false)}
            />
            
            {/* メニュー */}
            <div className="absolute top-full right-0 mt-1 w-48 bg-white border border-gray-300 rounded-md shadow-lg z-20">
              <div className="py-1">
                <div className="px-3 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wide border-b border-gray-100">
                  {t.selectLanguage}
                </div>
                {supportedLanguages.map((language) => (
                  <button
                    key={language.code}
                    onClick={() => handleLanguageChange(language.code)}
                    className={`w-full flex items-center space-x-3 px-3 py-2 text-left hover:bg-gray-50 transition-colors ${
                      currentLanguage === language.code 
                        ? 'bg-primary/5 text-primary' 
                        : 'text-gray-700'
                    }`}
                  >
                    <span className="text-lg">{language.flag}</span>
                    <span className="text-sm font-medium">{language.name}</span>
                    {currentLanguage === language.code && (
                      <svg className="w-4 h-4 ml-auto text-primary" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    )}
                  </button>
                ))}
              </div>
            </div>
          </>
        )}
      </div>

      {/* 言語情報の説明 */}
      <div className="mt-2 text-xs text-gray-500">
        <p>現在の言語: {currentLang.name}</p>
        <p>対応言語: {supportedLanguages.length}言語</p>
      </div>
    </div>
  );
}

// 翻訳フック（使用例）
export function useTranslations(language: Language) {
  return translations[language];
}

// 言語コードのエクスポート
export type { Language };
export { supportedLanguages, translations }; 