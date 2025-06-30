'use client';

import { useState } from 'react';

interface Task {
  id: string;
  title: string;
  description: string;
  status: 'todo' | 'in-progress' | 'review' | 'done';
  priority: 'low' | 'medium' | 'high';
  assignee: {
    id: string;
    name: string;
    avatar: string;
    color: string;
  };
  dueDate: string;
  createdAt: string;
  tags: string[];
  comments: number;
  attachments: number;
}

interface TaskModalProps {
  task: Task;
  isOpen: boolean;
  onClose: () => void;
  onUpdate: (task: Task) => void;
}

export default function TaskModal({ task, isOpen, onClose, onUpdate }: TaskModalProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTask, setEditedTask] = useState<Task>(task);
  const [newComment, setNewComment] = useState('');

  const handleSave = () => {
    onUpdate(editedTask);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditedTask(task);
    setIsEditing(false);
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'text-red-600 bg-red-100';
      case 'medium': return 'text-blue-600 bg-blue-100';
      case 'low': return 'text-green-600 bg-green-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'todo': return 'text-gray-800 bg-gray-100';
      case 'in-progress': return 'text-yellow-800 bg-yellow-100';
      case 'review': return 'text-blue-800 bg-blue-100';
      case 'done': return 'text-green-800 bg-green-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'todo': return 'To Do';
      case 'in-progress': return '進行中';
      case 'review': return 'レビュー中';
      case 'done': return '完了';
      default: return '';
    }
  };

  const mockComments = [
    {
      id: '1',
      author: '田中',
      avatar: '田',
      color: 'green-500',
      content: 'デザインの初期案を作成しました。レビューをお願いします。',
      timestamp: '2024-07-08 14:30',
      attachments: ['design-v1.figma']
    },
    {
      id: '2',
      author: '佐藤',
      avatar: '佐',
      color: 'blue-500',
      content: 'レスポンシブ対応について確認があります。',
      timestamp: '2024-07-09 09:15',
      attachments: []
    },
    {
      id: '3',
      author: '鈴木',
      avatar: '鈴',
      color: 'purple-500',
      content: 'デザインを確認しました。モバイル版の調整を提案します。',
      timestamp: '2024-07-09 16:45',
      attachments: ['feedback.pdf']
    }
  ];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
        {/* ヘッダー */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div className="flex items-center space-x-3">
            {isEditing ? (
              <input
                type="text"
                value={editedTask.title}
                onChange={(e) => setEditedTask({...editedTask, title: e.target.value})}
                className="text-xl font-semibold bg-transparent border-b-2 border-blue-500 focus:outline-none"
              />
            ) : (
              <h2 className="text-xl font-semibold text-gray-900">{task.title}</h2>
            )}
            <span className={`px-2 py-1 rounded text-sm ${getStatusColor(task.status)}`}>
              {getStatusText(task.status)}
            </span>
          </div>
          <div className="flex items-center space-x-3">
            {isEditing ? (
              <>
                <button
                  onClick={handleSave}
                  className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                >
                  保存
                </button>
                <button
                  onClick={handleCancel}
                  className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-400"
                >
                  キャンセル
                </button>
              </>
            ) : (
              <button
                onClick={() => setIsEditing(true)}
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
              >
                編集
              </button>
            )}
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        <div className="flex flex-1 overflow-hidden">
          {/* メインコンテンツ */}
          <div className="flex-1 p-6 overflow-y-auto">
            <div className="space-y-6">
              {/* 基本情報 */}
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">担当者</label>
                  <div className="flex items-center space-x-2">
                    <div className={`w-8 h-8 bg-${task.assignee.color} rounded-full flex items-center justify-center`}>
                      <span className="text-white text-sm font-medium">
                        {task.assignee.avatar}
                      </span>
                    </div>
                    <span className="text-gray-900">{task.assignee.name}</span>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">優先度</label>
                  {isEditing ? (
                    <select
                      value={editedTask.priority}
                      onChange={(e) => setEditedTask({...editedTask, priority: e.target.value as Task['priority']})}
                      className="border border-gray-300 rounded-md px-3 py-2"
                    >
                      <option value="low">低</option>
                      <option value="medium">中</option>
                      <option value="high">高</option>
                    </select>
                  ) : (
                    <span className={`px-2 py-1 rounded text-sm ${getPriorityColor(task.priority)}`}>
                      {task.priority === 'high' ? '高' : task.priority === 'medium' ? '中' : '低'}
                    </span>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">期限</label>
                  {isEditing ? (
                    <input
                      type="date"
                      value={editedTask.dueDate}
                      onChange={(e) => setEditedTask({...editedTask, dueDate: e.target.value})}
                      className="border border-gray-300 rounded-md px-3 py-2"
                    />
                  ) : (
                    <span className="text-gray-900">
                      {new Date(task.dueDate).toLocaleDateString('ja-JP')}
                    </span>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">ステータス</label>
                  {isEditing ? (
                    <select
                      value={editedTask.status}
                      onChange={(e) => setEditedTask({...editedTask, status: e.target.value as Task['status']})}
                      className="border border-gray-300 rounded-md px-3 py-2"
                    >
                      <option value="todo">To Do</option>
                      <option value="in-progress">進行中</option>
                      <option value="review">レビュー中</option>
                      <option value="done">完了</option>
                    </select>
                  ) : (
                    <span className={`px-2 py-1 rounded text-sm ${getStatusColor(task.status)}`}>
                      {getStatusText(task.status)}
                    </span>
                  )}
                </div>
              </div>

              {/* 説明 */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">説明</label>
                {isEditing ? (
                  <textarea
                    value={editedTask.description}
                    onChange={(e) => setEditedTask({...editedTask, description: e.target.value})}
                    rows={4}
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                ) : (
                  <p className="text-gray-700">{task.description || 'なし'}</p>
                )}
              </div>

              {/* タグ */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">タグ</label>
                <div className="flex flex-wrap gap-2">
                  {task.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* サイドバー - コメント */}
          <div className="w-80 border-l border-gray-200 flex flex-col">
            <div className="p-4 border-b border-gray-200">
              <h3 className="font-medium text-gray-900">コメント</h3>
            </div>
            
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {mockComments.map((comment) => (
                <div key={comment.id} className="border-b border-gray-100 pb-4 last:border-b-0">
                  <div className="flex items-start space-x-3">
                    <div className={`w-6 h-6 bg-${comment.color} rounded-full flex items-center justify-center flex-shrink-0`}>
                      <span className="text-white text-xs font-medium">
                        {comment.avatar}
                      </span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-1">
                        <span className="text-sm font-medium text-gray-900">{comment.author}</span>
                        <span className="text-xs text-gray-500">{comment.timestamp}</span>
                      </div>
                      <p className="text-sm text-gray-700 mb-2">{comment.content}</p>
                      {comment.attachments.length > 0 && (
                        <div className="space-y-1">
                          {comment.attachments.map((attachment, index) => (
                            <div key={index} className="flex items-center space-x-1 text-xs text-blue-600">
                              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                              </svg>
                              <span>{attachment}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* コメント入力 */}
            <div className="p-4 border-t border-gray-200">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  placeholder="コメントを追加..."
                  className="flex-1 border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  onClick={() => setNewComment('')}
                  className="bg-blue-500 text-white px-3 py-2 rounded-md hover:bg-blue-600 text-sm"
                >
                  送信
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 