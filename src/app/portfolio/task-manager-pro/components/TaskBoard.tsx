'use client';

import { useState, useEffect } from 'react';
import TaskCard from './TaskCard';
import TaskModal from './TaskModal';

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

interface Column {
  id: string;
  title: string;
  status: 'todo' | 'in-progress' | 'review' | 'done';
  color: string;
  bgColor: string;
  tasks: Task[];
}

const initialTasks: Task[] = [
  {
    id: '1',
    title: 'ホームページデザイン',
    description: 'レスポンシブ対応のホームページデザインを作成する',
    status: 'in-progress',
    priority: 'high',
    assignee: {
      id: 'tanaka',
      name: '田中',
      avatar: '田',
      color: 'green-500'
    },
    dueDate: '2024-07-15',
    createdAt: '2024-07-01',
    tags: ['デザイン', 'UI'],
    comments: 3,
    attachments: 2
  },
  {
    id: '2',
    title: 'API設計',
    description: 'RESTful APIの設計書を作成する',
    status: 'in-progress',
    priority: 'medium',
    assignee: {
      id: 'sato',
      name: '佐藤',
      avatar: '佐',
      color: 'blue-500'
    },
    dueDate: '2024-07-18',
    createdAt: '2024-07-03',
    tags: ['開発', 'API'],
    comments: 1,
    attachments: 0
  },
  {
    id: '3',
    title: 'データベース設計',
    description: 'データベーススキーマの設計と実装',
    status: 'review',
    priority: 'high',
    assignee: {
      id: 'suzuki',
      name: '鈴木',
      avatar: '鈴',
      color: 'purple-500'
    },
    dueDate: '2024-07-10',
    createdAt: '2024-06-28',
    tags: ['DB', '設計'],
    comments: 5,
    attachments: 1
  },
  {
    id: '4',
    title: '要件定義書',
    description: 'プロジェクトの要件定義書を作成・レビュー',
    status: 'done',
    priority: 'high',
    assignee: {
      id: 'tanaka',
      name: '田中',
      avatar: '田',
      color: 'green-500'
    },
    dueDate: '2024-07-05',
    createdAt: '2024-06-25',
    tags: ['企画', '資料'],
    comments: 8,
    attachments: 3
  },
  {
    id: '5',
    title: 'ユーザーテスト',
    description: 'プロトタイプのユーザビリティテストを実施',
    status: 'todo',
    priority: 'medium',
    assignee: {
      id: 'yamada',
      name: '山田',
      avatar: '山',
      color: 'indigo-500'
    },
    dueDate: '2024-07-20',
    createdAt: '2024-07-05',
    tags: ['テスト', 'UX'],
    comments: 0,
    attachments: 0
  },
  {
    id: '6',
    title: 'セキュリティ監査',
    description: 'システムのセキュリティ監査を実施',
    status: 'review',
    priority: 'high',
    assignee: {
      id: 'suzuki',
      name: '鈴木',
      avatar: '鈴',
      color: 'purple-500'
    },
    dueDate: '2024-07-12',
    createdAt: '2024-07-02',
    tags: ['セキュリティ', '監査'],
    comments: 2,
    attachments: 1
  }
];

export default function TaskBoard() {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [draggedTask, setDraggedTask] = useState<string | null>(null);

  const columns: Column[] = [
    {
      id: 'todo',
      title: 'To Do',
      status: 'todo',
      color: 'gray-800',
      bgColor: 'gray-50',
      tasks: tasks.filter(task => task.status === 'todo')
    },
    {
      id: 'in-progress',
      title: '進行中',
      status: 'in-progress',
      color: 'yellow-800',
      bgColor: 'yellow-50',
      tasks: tasks.filter(task => task.status === 'in-progress')
    },
    {
      id: 'review',
      title: 'レビュー中',
      status: 'review',
      color: 'blue-800',
      bgColor: 'blue-50',
      tasks: tasks.filter(task => task.status === 'review')
    },
    {
      id: 'done',
      title: '完了',
      status: 'done',
      color: 'green-800',
      bgColor: 'green-50',
      tasks: tasks.filter(task => task.status === 'done')
    }
  ];

  const handleTaskClick = (task: Task) => {
    setSelectedTask(task);
    setIsModalOpen(true);
  };

  const handleTaskUpdate = (updatedTask: Task) => {
    setTasks(tasks.map(task => 
      task.id === updatedTask.id ? updatedTask : task
    ));
  };

  const handleTaskCreate = (newTask: Omit<Task, 'id' | 'createdAt'>) => {
    const task: Task = {
      ...newTask,
      id: Date.now().toString(),
      createdAt: new Date().toISOString().split('T')[0]
    };
    setTasks([...tasks, task]);
  };

  const handleDragStart = (taskId: string) => {
    setDraggedTask(taskId);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent, newStatus: Task['status']) => {
    e.preventDefault();
    if (draggedTask) {
      setTasks(tasks.map(task => 
        task.id === draggedTask ? { ...task, status: newStatus } : task
      ));
      setDraggedTask(null);
    }
  };

  const handleNewTask = (status: Task['status']) => {
    const newTask: Omit<Task, 'id' | 'createdAt'> = {
      title: '新しいタスク',
      description: '',
      status,
      priority: 'medium',
      assignee: {
        id: 'tanaka',
        name: '田中',
        avatar: '田',
        color: 'green-500'
      },
      dueDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
      tags: [],
      comments: 0,
      attachments: 0
    };
    handleTaskCreate(newTask);
  };

  return (
    <div className="flex-1 overflow-x-auto">
      <div className="flex space-x-6 p-6 min-w-max">
        {columns.map((column) => (
          <div
            key={column.id}
            className="w-80 flex-shrink-0"
            onDragOver={handleDragOver}
            onDrop={(e) => handleDrop(e, column.status)}
          >
            <div className={`bg-${column.bgColor} border border-${column.color.replace('800', '200')} rounded-lg`}>
              <div className="p-4 border-b border-gray-200">
                <div className="flex items-center justify-between mb-2">
                  <h3 className={`font-semibold text-${column.color} flex items-center`}>
                    <span className={`w-2 h-2 bg-${column.color.replace('800', '400')} rounded-full mr-2`}></span>
                    {column.title} ({column.tasks.length})
                  </h3>
                  <button
                    onClick={() => handleNewTask(column.status)}
                    className={`text-${column.color} hover:bg-${column.color.replace('800', '100')} p-1 rounded-md text-sm`}
                    title="新しいタスクを追加"
                  >
                    +
                  </button>
                </div>
              </div>
              
              <div className="p-4 space-y-3 min-h-[400px]">
                {column.tasks.map((task) => (
                  <div key={task.id}>
                    <TaskCard
                      task={task}
                      onClick={() => handleTaskClick(task)}
                      onDragStart={() => handleDragStart(task.id)}
                      isDragging={draggedTask === task.id}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {isModalOpen && selectedTask && (
        <TaskModal
          task={selectedTask}
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onUpdate={handleTaskUpdate}
        />
      )}
    </div>
  );
} 