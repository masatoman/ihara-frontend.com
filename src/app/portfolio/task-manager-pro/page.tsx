'use client';

import { useState } from 'react';
import Link from 'next/link';
import Dashboard from './components/Dashboard';
import TaskBoard from './components/TaskBoard';
import ProjectSelector from './components/ProjectSelector';
import RealTimeIndicator from './components/RealTimeIndicator';

type View = 'demo' | 'dashboard' | 'tasks' | 'projects';

export default function TaskManagerPro() {
  const [currentView, setCurrentView] = useState<View>('demo');
  const [selectedProject, setSelectedProject] = useState('web-redesign');
  const [lastUpdateTime] = useState(new Date());

  return (
    <div className="min-h-screen bg-gray-50">
      {/* ヘッダー */}
      <header className="bg-white shadow-sm">
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
              <li className="text-primary font-medium">Task Manager Pro</li>
            </ol>
          </nav>
        </div>
      </div>

      {currentView === 'demo' ? (
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* プロジェクト概要 */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-secondary/10 text-secondary text-sm rounded-full">
                Webアプリ
              </span>
              <span className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">
                完成
              </span>
            </div>
            
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Task Manager Pro
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-3xl">
              チーム協働に特化したタスク管理Webアプリケーション。
              React・TypeScriptによるリアルタイム同期機能で、効率的なプロジェクト管理を実現します。
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <button
                onClick={() => setCurrentView('dashboard')}
                className="bg-secondary text-white px-6 py-3 rounded-md hover:bg-secondary/90 transition-colors"
              >
                アプリを起動
              </button>
              <button className="border border-secondary text-secondary px-6 py-3 rounded-md hover:bg-secondary/10 transition-colors">
                GitHub で見る
              </button>
            </div>
          </div>

          {/* 技術スタック */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">技術スタック</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { name: 'React', color: 'blue' },
                { name: 'TypeScript', color: 'blue' },
                { name: 'Next.js', color: 'gray' },
                { name: 'Tailwind CSS', color: 'teal' },
                { name: 'Firebase', color: 'yellow' },
                { name: 'Firestore', color: 'orange' },
                { name: 'Authentication', color: 'green' },
                { name: 'PWA', color: 'purple' }
              ].map((tech) => (
                <div key={tech.name} className={`bg-${tech.color}-50 border border-${tech.color}-200 rounded-lg p-4 text-center`}>
                  <span className={`text-${tech.color}-800 font-medium`}>{tech.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 主要機能 */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">主要機能</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: 'カンバン形式タスク管理',
                  description: 'ドラッグ&ドロップによる直感的なタスク管理',
                  icon: '📋'
                },
                {
                  title: 'リアルタイム同期',
                  description: 'チームメンバーとの即座な情報共有',
                  icon: '🔄'
                },
                {
                  title: 'プロジェクト管理',
                  description: '複数プロジェクトの進捗を一元管理',
                  icon: '📊'
                },
                {
                  title: 'チーム協働',
                  description: 'コメント・ファイル添付機能',
                  icon: '👥'
                },
                {
                  title: 'ダッシュボード',
                  description: '包括的な統計とインサイト',
                  icon: '📈'
                },
                {
                  title: 'レスポンシブデザイン',
                  description: 'すべてのデバイスで最適な体験',
                  icon: '📱'
                }
              ].map((feature) => (
                <div key={feature.title} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                  <div className="text-2xl mb-3">{feature.icon}</div>
                  <h3 className="font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 実装のハイライト */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">実装のハイライト</h2>
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-4">フロントエンド技術</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• React Hooksによる状態管理</li>
                    <li>• TypeScriptによる型安全性</li>
                    <li>• Tailwind CSSによるレスポンシブデザイン</li>
                    <li>• コンポーネントベースアーキテクチャ</li>
                    <li>• パフォーマンス最適化</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-4">機能実装</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• ドラッグ&ドロップAPI</li>
                    <li>• リアルタイム更新システム</li>
                    <li>• モーダル・フォーム管理</li>
                    <li>• データ永続化</li>
                    <li>• ユーザー認証・認可</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 text-center bg-gradient-to-r from-secondary to-teal-600 rounded-lg p-8 text-white">
            <h2 className="text-2xl font-bold mb-4">
              Webアプリ開発をお考えですか？
            </h2>
            <p className="mb-6 opacity-90">
              React・TypeScriptを活用したモダンなWebアプリケーションを開発いたします。
            </p>
            <Link 
              href="/contact"
              className="inline-block bg-white text-secondary py-3 px-8 rounded-md hover:bg-gray-100 transition-colors font-medium"
            >
              無料相談を申し込む
            </Link>
          </div>
        </main>
      ) : (
        <>
          {/* アプリヘッダー */}
          <div className="bg-white border-b border-gray-200">
            <div className="px-6 py-4">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-secondary rounded-lg flex items-center justify-center">
                      <span className="text-white text-sm font-bold">T</span>
                    </div>
                    <h1 className="text-xl font-bold text-gray-900">Task Manager Pro</h1>
                  </div>
                  <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">
                    デモ版
                  </span>
                </div>
                <div className="flex items-center space-x-4">
                  <button
                    onClick={() => setCurrentView('demo')}
                    className="text-gray-600 hover:text-gray-900 text-sm"
                  >
                    ← プロジェクト詳細に戻る
                  </button>
                </div>
              </div>

              {/* ナビゲーション */}
              <nav className="flex space-x-1">
                <button
                  onClick={() => setCurrentView('dashboard')}
                  className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                    currentView === 'dashboard'
                      ? 'bg-blue-100 text-blue-700'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                  }`}
                >
                  ダッシュボード
                </button>
                <button
                  onClick={() => setCurrentView('tasks')}
                  className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                    currentView === 'tasks'
                      ? 'bg-blue-100 text-blue-700'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                  }`}
                >
                  タスクボード
                </button>
                <button
                  onClick={() => setCurrentView('projects')}
                  className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                    currentView === 'projects'
                      ? 'bg-blue-100 text-blue-700'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                  }`}
                >
                  プロジェクト
                </button>
              </nav>
            </div>
          </div>

          {/* メインコンテンツ */}
          <div className="flex-1 flex flex-col overflow-hidden">
            {currentView === 'dashboard' && <Dashboard />}
            {currentView === 'tasks' && <TaskBoard />}
            {currentView === 'projects' && (
              <div className="flex-1 overflow-auto">
                <ProjectSelector
                  selectedProject={selectedProject}
                  onProjectChange={setSelectedProject}
                />
              </div>
            )}
          </div>

          {/* フッター */}
          <RealTimeIndicator 
            connectionStatus="connected"
            lastUpdateTime={lastUpdateTime}
          />
        </>
      )}
    </div>
  );
} 