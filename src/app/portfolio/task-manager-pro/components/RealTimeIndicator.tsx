'use client';

import { useState, useEffect } from 'react';

interface ActiveUser {
  id: string;
  name: string;
  avatar: string;
  color: string;
  lastSeen: Date;
  currentPage?: string;
}

interface RealTimeIndicatorProps {
  connectionStatus?: 'connected' | 'connecting' | 'disconnected';
  lastUpdateTime?: Date;
}

export default function RealTimeIndicator({ 
  connectionStatus = 'connected', 
  lastUpdateTime 
}: RealTimeIndicatorProps) {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [activeUsers] = useState<ActiveUser[]>([
    {
      id: 'tanaka',
      name: '田中',
      avatar: '田',
      color: 'green-500',
      lastSeen: new Date(Date.now() - 30000), // 30秒前
      currentPage: 'ダッシュボード'
    },
    {
      id: 'sato',
      name: '佐藤',
      avatar: '佐',
      color: 'blue-500',
      lastSeen: new Date(Date.now() - 120000), // 2分前
      currentPage: 'タスクボード'
    },
    {
      id: 'suzuki',
      name: '鈴木',
      avatar: '鈴',
      color: 'purple-500',
      lastSeen: new Date(Date.now() - 60000), // 1分前
      currentPage: 'タスクボード'
    }
  ]);

  // 時刻更新
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const getStatusColor = () => {
    switch (connectionStatus) {
      case 'connected': return 'bg-green-400';
      case 'connecting': return 'bg-yellow-400';
      case 'disconnected': return 'bg-red-400';
      default: return 'bg-gray-400';
    }
  };

  const getStatusText = () => {
    switch (connectionStatus) {
      case 'connected': return 'リアルタイム同期中';
      case 'connecting': return '接続中...';
      case 'disconnected': return '切断されました';
      default: return '不明';
    }
  };

  const getTimeDifference = (date: Date) => {
    const diffMs = currentTime.getTime() - date.getTime();
    const diffSeconds = Math.floor(diffMs / 1000);
    const diffMinutes = Math.floor(diffSeconds / 60);
    const diffHours = Math.floor(diffMinutes / 60);

    if (diffSeconds < 60) return `${diffSeconds}秒前`;
    if (diffMinutes < 60) return `${diffMinutes}分前`;
    if (diffHours < 24) return `${diffHours}時間前`;
    return date.toLocaleDateString('ja-JP');
  };

  const onlineUsers = activeUsers.filter(user => 
    currentTime.getTime() - user.lastSeen.getTime() < 300000 // 5分以内
  );

  return (
    <div className="bg-white border-t border-gray-200 p-4">
      <div className="flex items-center justify-between">
        {/* 接続状態 */}
        <div className="flex items-center space-x-3">
          <div className="flex items-center space-x-2">
            <div className={`w-2 h-2 ${getStatusColor()} rounded-full ${
              connectionStatus === 'connected' ? 'animate-pulse' : ''
            }`}></div>
            <span className="text-sm text-gray-600">{getStatusText()}</span>
          </div>
          
          {lastUpdateTime && (
            <>
              <span className="text-gray-300">•</span>
              <span className="text-sm text-gray-500">
                最終更新: {getTimeDifference(lastUpdateTime)}
              </span>
            </>
          )}
        </div>

        {/* アクティブユーザー */}
        <div className="flex items-center space-x-3">
          <span className="text-sm text-gray-500">オンライン:</span>
          <div className="flex items-center space-x-1">
            {onlineUsers.slice(0, 4).map((user) => (
              <div
                key={user.id}
                className="relative group"
                title={`${user.name} - ${user.currentPage || '閲覧中'}`}
              >
                <div className={`w-6 h-6 bg-${user.color} rounded-full flex items-center justify-center border-2 border-white`}>
                  <span className="text-white text-xs font-medium">
                    {user.avatar}
                  </span>
                </div>
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-green-400 rounded-full border border-white"></div>
                
                {/* ツールチップ */}
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="bg-gray-800 text-white text-xs rounded py-1 px-2 whitespace-nowrap">
                    {user.name}
                    {user.currentPage && (
                      <div className="text-gray-300">{user.currentPage}</div>
                    )}
                  </div>
                </div>
              </div>
            ))}
            
            {onlineUsers.length > 4 && (
              <div className="w-6 h-6 bg-gray-400 rounded-full flex items-center justify-center border-2 border-white">
                <span className="text-white text-xs font-medium">
                  +{onlineUsers.length - 4}
                </span>
              </div>
            )}
          </div>
          
          <span className="text-sm text-gray-500">
            ({onlineUsers.length}人)
          </span>
        </div>
      </div>

      {/* 詳細情報（展開時） */}
      <div className="mt-3 pt-3 border-t border-gray-100">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-600">
          <div className="flex items-center space-x-2">
            <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <span>自動同期: 有効</span>
          </div>
          
          <div className="flex items-center space-x-2">
            <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>データ保存済み</span>
          </div>
          
          <div className="flex items-center space-x-2">
            <svg className="w-4 h-4 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            <span>暗号化通信</span>
          </div>
        </div>
      </div>

      {/* 最近の変更通知 */}
      {connectionStatus === 'connected' && (
        <div className="mt-3 p-2 bg-blue-50 border border-blue-200 rounded-md">
          <div className="flex items-center space-x-2 text-sm text-blue-800">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>田中さんがタスクを更新しました</span>
            <span className="text-blue-600">2秒前</span>
          </div>
        </div>
      )}
    </div>
  );
} 