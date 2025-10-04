import { useState } from 'react';
import { Checkbox } from '@/components/ui/checkbox';
import GlassCard from './GlassCard';
import { Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

//todo: remove mock functionality
interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

export default function TodoWidget() {
  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, text: 'Morning meditation', completed: false },
    { id: 2, text: 'Journal about gratitude', completed: false },
    { id: 3, text: 'Evening walk', completed: false },
  ]);
  const [newTodo, setNewTodo] = useState('');

  const handleToggle = (id: number) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const handleAdd = () => {
    if (newTodo.trim()) {
      setTodos([...todos, { id: Date.now(), text: newTodo, completed: false }]);
      setNewTodo('');
    }
  };

  const pendingTodos = todos.filter(t => !t.completed);

  return (
    <GlassCard gradient data-testid="card-todos">
      <h3 className="text-2xl font-bold text-white mb-4">Pending Tasks</h3>
      <div className="space-y-3 mb-4">
        {pendingTodos.length === 0 ? (
          <p className="text-white/60 text-center py-4 font-body">No pending tasks!</p>
        ) : (
          pendingTodos.map((todo) => (
            <div
              key={todo.id}
              className="flex items-center gap-3 p-3 rounded-lg bg-white/5 hover-elevate"
              data-testid={`todo-item-${todo.id}`}
            >
              <Checkbox
                id={`todo-${todo.id}`}
                checked={todo.completed}
                onCheckedChange={() => handleToggle(todo.id)}
                className="border-white/40"
              />
              <label
                htmlFor={`todo-${todo.id}`}
                className="text-white font-body flex-1 cursor-pointer"
              >
                {todo.text}
              </label>
            </div>
          ))
        )}
      </div>
      <div className="flex gap-2">
        <Input
          data-testid="input-new-todo"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleAdd()}
          placeholder="Add new task..."
          className="bg-white/10 border-white/30 text-white placeholder:text-white/50"
        />
        <Button
          onClick={handleAdd}
          size="icon"
          data-testid="button-add-todo"
          className="bg-gradient-to-r from-purple-500 to-pink-500"
        >
          <Plus className="w-4 h-4" />
        </Button>
      </div>
    </GlassCard>
  );
}
