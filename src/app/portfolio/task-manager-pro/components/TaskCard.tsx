'use client';

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

interface TaskCardProps {
  task: Task;
  onClick: () => void;
  onDragStart: () => void;
  isDragging: boolean;
}

export default function TaskCard({ task, onClick, onDragStart, isDragging }: TaskCardProps) {
  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'text-red-600 bg-red-100';
      case 'medium': return 'text-blue-600 bg-blue-100';
      case 'low': return 'text-green-600 bg-green-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getPriorityText = (priority: string) => {
    switch (priority) {
      case 'high': return '高';
      case 'medium': return '中';
      case 'low': return '低';
      default: return '';
    }
  };

  const isOverdue = new Date(task.dueDate) < new Date();
  const isDueSoon = new Date(task.dueDate) <= new Date(Date.now() + 3 * 24 * 60 * 60 * 1000);

  return (
    <div
      className={`bg-white rounded-lg shadow-sm border border-gray-200 p-4 cursor-pointer hover:shadow-md transition-all duration-200 ${
        isDragging ? 'opacity-50 transform rotate-1' : ''
      }`}
      onClick={onClick}
      draggable
      onDragStart={onDragStart}
    >
      {/* ヘッダー */}
      <div className="flex justify-between items-start mb-3">
        <h4 className="font-medium text-gray-900 text-sm line-clamp-2 flex-1 mr-2">
          {task.title}
        </h4>
        <span className={`text-xs px-2 py-1 rounded ${getPriorityColor(task.priority)}`}>
          {getPriorityText(task.priority)}
        </span>
      </div>

      {/* 説明 */}
      {task.description && (
        <p className="text-xs text-gray-600 mb-3 line-clamp-2">
          {task.description}
        </p>
      )}

      {/* タグ */}
      {task.tags.length > 0 && (
        <div className="flex flex-wrap gap-1 mb-3">
          {task.tags.slice(0, 2).map((tag) => (
            <span
              key={tag}
              className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded"
            >
              {tag}
            </span>
          ))}
          {task.tags.length > 2 && (
            <span className="text-xs text-gray-500">
              +{task.tags.length - 2}
            </span>
          )}
        </div>
      )}

      {/* 期限 */}
      <div className="mb-3">
        <p className={`text-xs ${
          isOverdue ? 'text-red-600 font-medium' : 
          isDueSoon ? 'text-yellow-600' : 'text-gray-600'
        }`}>
          期限: {new Date(task.dueDate).toLocaleDateString('ja-JP', {
            month: 'short',
            day: 'numeric'
          })}
          {isOverdue && ' (遅延)'}
        </p>
      </div>

      {/* フッター */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className={`w-6 h-6 bg-${task.assignee.color} rounded-full flex items-center justify-center`}>
            <span className="text-white text-xs font-medium">
              {task.assignee.avatar}
            </span>
          </div>
          <span className="text-xs text-gray-600">
            {task.assignee.name}
          </span>
        </div>

        <div className="flex items-center space-x-3 text-xs text-gray-500">
          {task.comments > 0 && (
            <div className="flex items-center space-x-1">
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              <span>{task.comments}</span>
            </div>
          )}
          
          {task.attachments > 0 && (
            <div className="flex items-center space-x-1">
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
              </svg>
              <span>{task.attachments}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 