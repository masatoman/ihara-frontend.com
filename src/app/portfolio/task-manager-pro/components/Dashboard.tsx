'use client';

import { useState } from 'react';

interface DashboardStats {
  totalTasks: number;
  completedTasks: number;
  inProgressTasks: number;
  overdueTask: number;
  teamMembers: number;
  activeProjects: number;
}

interface TeamActivity {
  id: string;
  member: {
    name: string;
    avatar: string;
    color: string;
  };
  action: string;
  task: string;
  timestamp: string;
}

export default function Dashboard() {
  const [selectedTimeframe, setSelectedTimeframe] = useState<'today' | 'week' | 'month'>('week');

  const stats: DashboardStats = {
    totalTasks: 24,
    completedTasks: 8,
    inProgressTasks: 6,
    overdueTask: 2,
    teamMembers: 5,
    activeProjects: 3
  };

  const completionRate = Math.round((stats.completedTasks / stats.totalTasks) * 100);
  const productivityTrend = +5.2; // パーセンテージ

  const recentActivities: TeamActivity[] = [
    {
      id: '1',
      member: { name: '田中', avatar: '田', color: 'green-500' },
      action: 'タスクを完了',
      task: 'ホームページデザイン',
      timestamp: '2分前'
    },
    {
      id: '2',
      member: { name: '佐藤', avatar: '佐', color: 'blue-500' },
      action: 'コメントを追加',
      task: 'API設計',
      timestamp: '15分前'
    },
    {
      id: '3',
      member: { name: '鈴木', avatar: '鈴', color: 'purple-500' },
      action: 'タスクを作成',
      task: 'セキュリティテスト',
      timestamp: '1時間前'
    },
    {
      id: '4',
      member: { name: '山田', avatar: '山', color: 'indigo-500' },
      action: 'ファイルを添付',
      task: 'ユーザーテスト',
      timestamp: '2時間前'
    }
  ];

  const upcomingDeadlines = [
    { task: 'データベース設計', dueDate: '7/10', daysLeft: 0, priority: 'high' },
    { task: 'セキュリティ監査', dueDate: '7/12', daysLeft: 2, priority: 'high' },
    { task: 'ホームページデザイン', dueDate: '7/15', daysLeft: 5, priority: 'medium' },
    { task: 'API設計', dueDate: '7/18', daysLeft: 8, priority: 'medium' }
  ];

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* ヘッダー */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">ダッシュボード</h1>
          <p className="text-gray-600">プロジェクトの進捗状況と統計を確認</p>
        </div>
        <div className="flex items-center space-x-3">
          <select
            value={selectedTimeframe}
            onChange={(e) => setSelectedTimeframe(e.target.value as 'today' | 'week' | 'month')}
            className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="today">今日</option>
            <option value="week">今週</option>
            <option value="month">今月</option>
          </select>
        </div>
      </div>

      {/* 統計カード */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-1">総タスク数</p>
              <p className="text-3xl font-bold text-gray-900">{stats.totalTasks}</p>
            </div>
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-1">完了率</p>
              <p className="text-3xl font-bold text-green-600">{completionRate}%</p>
            </div>
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-1">進行中</p>
              <p className="text-3xl font-bold text-yellow-600">{stats.inProgressTasks}</p>
            </div>
            <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-1">遅延中</p>
              <p className="text-3xl font-bold text-red-600">{stats.overdueTask}</p>
            </div>
            <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.996-.833-2.464 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* 進捗グラフ */}
        <div className="lg:col-span-2 bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-semibold text-gray-900">タスク進捗</h3>
            <div className="flex items-center space-x-2 text-sm">
              <span className={`text-${productivityTrend >= 0 ? 'green' : 'red'}-600`}>
                {productivityTrend >= 0 ? '↗' : '↘'} {Math.abs(productivityTrend)}%
              </span>
              <span className="text-gray-500">前週比</span>
            </div>
          </div>
          
          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-gray-600">完了</span>
                <span className="text-green-600">{stats.completedTasks}件</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-green-500 h-2 rounded-full" 
                  style={{ width: `${(stats.completedTasks / stats.totalTasks) * 100}%` }}
                ></div>
              </div>
            </div>
            
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-gray-600">進行中</span>
                <span className="text-yellow-600">{stats.inProgressTasks}件</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-yellow-500 h-2 rounded-full" 
                  style={{ width: `${(stats.inProgressTasks / stats.totalTasks) * 100}%` }}
                ></div>
              </div>
            </div>
            
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-gray-600">未着手</span>
                <span className="text-gray-600">{stats.totalTasks - stats.completedTasks - stats.inProgressTasks}件</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-gray-400 h-2 rounded-full" 
                  style={{ width: `${((stats.totalTasks - stats.completedTasks - stats.inProgressTasks) / stats.totalTasks) * 100}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>

        {/* 期限間近のタスク */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">期限間近</h3>
          <div className="space-y-4">
            {upcomingDeadlines.map((item, index) => (
              <div key={index} className="flex items-center justify-between p-3 border border-gray-100 rounded-lg">
                <div>
                  <p className="font-medium text-gray-900 text-sm">{item.task}</p>
                  <p className="text-xs text-gray-500">期限: {item.dueDate}</p>
                </div>
                <div className="text-right">
                  <p className={`text-xs font-medium ${
                    item.daysLeft === 0 ? 'text-red-600' : 
                    item.daysLeft <= 2 ? 'text-yellow-600' : 'text-gray-600'
                  }`}>
                    {item.daysLeft === 0 ? '今日' : `${item.daysLeft}日後`}
                  </p>
                  <span className={`text-xs px-2 py-1 rounded ${
                    item.priority === 'high' ? 'bg-red-100 text-red-600' : 'bg-blue-100 text-blue-600'
                  }`}>
                    {item.priority === 'high' ? '高' : '中'}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* チーム活動 */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">最近の活動</h3>
        <div className="space-y-4">
          {recentActivities.map((activity) => (
            <div key={activity.id} className="flex items-center space-x-4 p-3 hover:bg-gray-50 rounded-lg">
              <div className={`w-8 h-8 bg-${activity.member.color} rounded-full flex items-center justify-center flex-shrink-0`}>
                <span className="text-white text-sm font-medium">
                  {activity.member.avatar}
                </span>
              </div>
              <div className="flex-1">
                <p className="text-sm text-gray-900">
                  <span className="font-medium">{activity.member.name}</span>が
                  <span className="font-medium text-blue-600 mx-1">{activity.action}</span>
                  しました：{activity.task}
                </p>
                <p className="text-xs text-gray-500">{activity.timestamp}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 