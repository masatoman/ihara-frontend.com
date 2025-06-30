'use client';

import { useState } from 'react';

interface Project {
  id: string;
  name: string;
  description: string;
  color: string;
  status: 'active' | 'on-hold' | 'completed';
  progress: number;
  tasksTotal: number;
  tasksCompleted: number;
  teamMembers: string[];
  deadline: string;
  lastActivity: string;
}

interface ProjectSelectorProps {
  selectedProject: string;
  onProjectChange: (projectId: string) => void;
}

export default function ProjectSelector({ selectedProject, onProjectChange }: ProjectSelectorProps) {
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [newProject, setNewProject] = useState({
    name: '',
    description: '',
    color: 'blue-500',
    deadline: ''
  });

  const projects: Project[] = [
    {
      id: 'web-redesign',
      name: 'Webサイトリニューアル',
      description: 'コーポレートサイトの全面リニューアルプロジェクト',
      color: 'blue-500',
      status: 'active',
      progress: 65,
      tasksTotal: 15,
      tasksCompleted: 10,
      teamMembers: ['田中', '佐藤', '鈴木'],
      deadline: '2024-08-15',
      lastActivity: '2時間前'
    },
    {
      id: 'mobile-app',
      name: 'モバイルアプリ開発',
      description: 'iOS/Android対応のタスク管理アプリ開発',
      color: 'green-500',
      status: 'active',
      progress: 30,
      tasksTotal: 20,
      tasksCompleted: 6,
      teamMembers: ['山田', '鈴木'],
      deadline: '2024-09-30',
      lastActivity: '1日前'
    },
    {
      id: 'data-migration',
      name: 'データベース移行',
      description: '既存データベースのクラウド移行プロジェクト',
      color: 'purple-500',
      status: 'on-hold',
      progress: 15,
      tasksTotal: 8,
      tasksCompleted: 1,
      teamMembers: ['佐藤'],
      deadline: '2024-10-15',
      lastActivity: '1週間前'
    }
  ];

  const colorOptions = [
    'blue-500', 'green-500', 'purple-500', 'red-500', 
    'yellow-500', 'indigo-500', 'pink-500', 'teal-500'
  ];

  const getStatusText = (status: string) => {
    switch (status) {
      case 'active': return '進行中';
      case 'on-hold': return '保留中';
      case 'completed': return '完了';
      default: return '';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800';
      case 'on-hold': return 'bg-yellow-100 text-yellow-800';
      case 'completed': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const handleCreateProject = () => {
    // 実際のアプリでは、ここでAPIを呼び出してプロジェクトを作成
    console.log('プロジェクトを作成:', newProject);
    setIsCreateModalOpen(false);
    setNewProject({ name: '', description: '', color: 'blue-500', deadline: '' });
  };

  const currentProject = projects.find(p => p.id === selectedProject);

  return (
    <div className="bg-white border-b border-gray-200">
      <div className="p-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-gray-900">プロジェクト</h2>
          <button
            onClick={() => setIsCreateModalOpen(true)}
            className="bg-blue-500 text-white px-3 py-1 rounded-md text-sm hover:bg-blue-600 transition-colors"
          >
            + 新規作成
          </button>
        </div>

        {/* プロジェクト選択 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {projects.map((project) => (
            <div
              key={project.id}
              onClick={() => onProjectChange(project.id)}
              className={`p-4 border rounded-lg cursor-pointer transition-all ${
                selectedProject === project.id
                  ? 'border-blue-500 bg-blue-50'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-2">
                  <div className={`w-3 h-3 bg-${project.color} rounded-full`}></div>
                  <h3 className="font-medium text-gray-900 text-sm">{project.name}</h3>
                </div>
                <span className={`px-2 py-1 text-xs rounded ${getStatusColor(project.status)}`}>
                  {getStatusText(project.status)}
                </span>
              </div>
              
              <p className="text-xs text-gray-600 mb-3 line-clamp-2">
                {project.description}
              </p>
              
              <div className="space-y-2">
                <div className="flex justify-between text-xs text-gray-600">
                  <span>進捗</span>
                  <span>{project.progress}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-1.5">
                  <div
                    className={`bg-${project.color} h-1.5 rounded-full`}
                    style={{ width: `${project.progress}%` }}
                  ></div>
                </div>
                
                <div className="flex justify-between text-xs text-gray-600">
                  <span>タスク</span>
                  <span>{project.tasksCompleted}/{project.tasksTotal}</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1">
                    {project.teamMembers.slice(0, 3).map((member, index) => (
                      <div
                        key={index}
                        className="w-5 h-5 bg-gray-400 rounded-full flex items-center justify-center text-white text-xs"
                      >
                        {member.charAt(0)}
                      </div>
                    ))}
                    {project.teamMembers.length > 3 && (
                      <span className="text-xs text-gray-500">
                        +{project.teamMembers.length - 3}
                      </span>
                    )}
                  </div>
                  <span className="text-xs text-gray-500">{project.lastActivity}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 選択中プロジェクトの詳細 */}
        {currentProject && (
          <div className="mt-6 p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-medium text-gray-900">{currentProject.name}</h3>
              <span className="text-sm text-gray-600">
                期限: {new Date(currentProject.deadline).toLocaleDateString('ja-JP')}
              </span>
            </div>
            
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <p className="text-2xl font-bold text-green-600">{currentProject.tasksCompleted}</p>
                <p className="text-xs text-gray-600">完了</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-yellow-600">
                  {currentProject.tasksTotal - currentProject.tasksCompleted}
                </p>
                <p className="text-xs text-gray-600">残り</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-blue-600">{currentProject.teamMembers.length}</p>
                <p className="text-xs text-gray-600">メンバー</p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* プロジェクト作成モーダル */}
      {isCreateModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-gray-900">新しいプロジェクト</h3>
              <button
                onClick={() => setIsCreateModalOpen(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  プロジェクト名
                </label>
                <input
                  type="text"
                  value={newProject.name}
                  onChange={(e) => setNewProject({...newProject, name: e.target.value})}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="プロジェクト名を入力"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  説明
                </label>
                <textarea
                  value={newProject.description}
                  onChange={(e) => setNewProject({...newProject, description: e.target.value})}
                  rows={3}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="プロジェクトの説明を入力"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  カラー
                </label>
                <div className="flex space-x-2">
                  {colorOptions.map((color) => (
                    <button
                      key={color}
                      onClick={() => setNewProject({...newProject, color})}
                      className={`w-6 h-6 bg-${color} rounded-full border-2 ${
                        newProject.color === color ? 'border-gray-800' : 'border-gray-300'
                      }`}
                    />
                  ))}
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  期限
                </label>
                <input
                  type="date"
                  value={newProject.deadline}
                  onChange={(e) => setNewProject({...newProject, deadline: e.target.value})}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
            
            <div className="flex space-x-3 mt-6">
              <button
                onClick={handleCreateProject}
                className="flex-1 bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-colors"
              >
                作成
              </button>
              <button
                onClick={() => setIsCreateModalOpen(false)}
                className="flex-1 bg-gray-300 text-gray-700 py-2 rounded-md hover:bg-gray-400 transition-colors"
              >
                キャンセル
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 