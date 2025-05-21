'use client';

import { useState } from 'react';
import { Todo } from '../types/todo';
import TodoItem from './TodoItem';

const kawaiiFaces = [
  '(｡･ω･｡)',
  '(◕‿◕✿)',
  '(●´ω｀●)',
  '(◍•ᴗ•◍)',
  '(♡˙︶˙♡)',
  '(◠‿◠)',
  '(＾▽＾)',
  '(◕ᴗ◕✿)',
  '(｡♥‿♥｡)',
  '(◕‿◕)',
];

export default function TodoList() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState('');

  const getRandomKawaiiEmoticon = () => {
    const randomIndex = Math.floor(Math.random() * kawaiiFaces.length);
    return kawaiiFaces[randomIndex];
  };

  const addTodo = (e: React.FormEvent) => {
    e.preventDefault();
    if (newTodo.trim()) {
      setTodos([
        ...todos,
        {
          id: Date.now(),
          text: `${newTodo.trim()} ${getRandomKawaiiEmoticon()}`,
          completed: false,
          createdAt: new Date(),
        },
      ]);
      setNewTodo('');
    }
  };

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="max-w-2xl mx-auto px-4">
      <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg p-6 border-4 border-[#FFB6C1]">
        <form onSubmit={addTodo} className="mb-8">
          <div className="flex gap-3">
            <input
              type="text"
              value={newTodo}
              onChange={(e) => setNewTodo(e.target.value)}
              placeholder="やることを入力..."
              className="flex-1 p-3 text-lg text-gray-800 bg-white/50 border-2 
                       border-[#FFB6C1] rounded-2xl focus:outline-none focus:border-[#FF69B4] 
                       focus:ring-2 focus:ring-pink-200 focus:bg-white transition-all 
                       duration-200 placeholder:text-gray-400 placeholder:font-normal 
                       font-medium"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-[#FF69B4] text-white text-lg font-semibold 
                       rounded-2xl hover:bg-[#FF1493] focus:outline-none focus:ring-2 
                       focus:ring-pink-300 transition-all duration-200 shadow-md 
                       hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={!newTodo.trim()}
            >
              ＋
            </button>
          </div>
        </form>
        <div className="space-y-3">
          {todos.length === 0 ? (
            <div className="text-center py-8">
              <p className="text-gray-500 mb-4">
                ♪ やることを追加してね ♪
              </p>
              <div className="text-6xl mb-4">
                (｡･ω･｡)
              </div>
            </div>
          ) : (
            todos.map((todo) => (
              <TodoItem
                key={todo.id}
                todo={todo}
                onToggle={toggleTodo}
                onDelete={deleteTodo}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
} 