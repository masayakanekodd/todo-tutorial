'use client';

import { Todo } from '../types/todo';

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

export default function TodoItem({ todo, onToggle, onDelete }: TodoItemProps) {
  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('ja-JP', {
      month: 'numeric',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    }).format(date);
  };

  return (
    <div className="flex items-center justify-between p-4 bg-white/50 rounded-2xl 
                    shadow-sm hover:shadow-md transition-all duration-200 
                    border-2 border-[#FFB6C1] group">
      <div className="flex items-center flex-1 min-w-0">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
          className="w-5 h-5 text-[#FF69B4] border-2 border-[#FFB6C1] rounded-lg
                   focus:ring-2 focus:ring-pink-200 focus:ring-offset-2 cursor-pointer
                   transition-all duration-200"
        />
        <div className="ml-4 flex-1 min-w-0">
          <span className={`block text-lg font-medium truncate ${
            todo.completed 
              ? 'line-through text-gray-400' 
              : 'text-gray-800'
          }`}>
            {todo.text}
          </span>
          <span className="text-xs text-gray-500 mt-0.5">
            {todo.createdAt && `♪ ${formatDate(todo.createdAt)}`}
          </span>
        </div>
      </div>
      <button
        onClick={() => onDelete(todo.id)}
        className="ml-4 w-8 h-8 flex items-center justify-center text-[#FF69B4] 
                 hover:text-[#FF1493] hover:bg-pink-50 rounded-full
                 transition-all duration-200 focus:outline-none 
                 focus:ring-2 focus:ring-pink-200 opacity-0 group-hover:opacity-100"
      >
        ×
      </button>
    </div>
  );
} 