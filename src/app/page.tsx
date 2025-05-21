import Image from "next/image";
import TodoList from './components/TodoList';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#FFF8E7] to-[#FFE4E1] py-8">
      <div className="max-w-xs mx-auto mb-8 text-center">
        <h1 className="text-4xl font-bold text-[#FF69B4] tracking-wider">
          ちいかわ
        </h1>
        <p className="text-[#FF69B4] mt-2 font-medium">
          ToDo List
        </p>
      </div>
      <TodoList />
    </main>
  );
}
