import { useState } from 'react';
import { useLocation } from 'wouter';
import AnimatedBackground from '@/components/AnimatedBackground';
import DashboardSidebar from '@/components/DashboardSidebar';
import DashboardHeader from '@/components/DashboardHeader';
import GlassCard from '@/components/GlassCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { Plus, Trash2 } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

//todo: remove mock functionality
interface Todo {
  id: number;
  text: string;
  completed: boolean;
  priority: 'low' | 'medium' | 'high';
}

export default function TodoListPage() {
  const [, setLocation] = useLocation();
  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, text: 'Morning meditation', completed: false, priority: 'high' },
    { id: 2, text: 'Journal about gratitude', completed: false, priority: 'medium' },
    { id: 3, text: 'Evening walk', completed: true, priority: 'low' },
  ]);
  const [newTodo, setNewTodo] = useState('');

  const handleToggle = (id: number) => {
    setTodos(todos.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  const handleAdd = () => {
    if (newTodo.trim()) {
      setTodos([...todos, { id: Date.now(), text: newTodo, completed: false, priority: 'medium' }]);
      setNewTodo('');
    }
  };

  const handleDelete = (id: number) => {
    setTodos(todos.filter(t => t.id !== id));
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-500/20 text-red-300 border-red-500/30';
      case 'medium': return 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30';
      case 'low': return 'bg-green-500/20 text-green-300 border-green-500/30';
      default: return 'bg-gray-500/20 text-gray-300 border-gray-500/30';
    }
  };

  const pendingTodos = todos.filter(t => !t.completed);
  const completedTodos = todos.filter(t => t.completed);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-black via-purple-900/30 to-blue-900/30">
      <AnimatedBackground />
      <DashboardSidebar />
      <DashboardHeader
        onSettingsClick={() => setLocation('/dashboard/settings')}
        onProfileClick={() => setLocation('/dashboard/profile')}
        onLogout={() => setLocation('/')}
      />

      <main className="ml-20 lg:ml-64 pt-20 p-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-white mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Todo List
          </h1>

          <GlassCard gradient className="mb-6">
            <h3 className="text-2xl font-bold text-white mb-4">Add New Task</h3>
            <div className="flex gap-2">
              <Input
                data-testid="input-new-todo"
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleAdd()}
                placeholder="What needs to be done?"
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

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <GlassCard gradient>
              <h3 className="text-2xl font-bold text-white mb-4">Pending ({pendingTodos.length})</h3>
              <div className="space-y-3">
                {pendingTodos.map((todo) => (
                  <div
                    key={todo.id}
                    className="flex items-center gap-3 p-3 rounded-lg bg-white/5 hover-elevate"
                    data-testid={`todo-pending-${todo.id}`}
                  >
                    <Checkbox
                      checked={todo.completed}
                      onCheckedChange={() => handleToggle(todo.id)}
                      className="border-white/40"
                    />
                    <span className="flex-1 text-white font-body">{todo.text}</span>
                    <Badge variant="secondary" className={getPriorityColor(todo.priority)}>
                      {todo.priority}
                    </Badge>
                    <Button
                      size="icon"
                      variant="ghost"
                      onClick={() => handleDelete(todo.id)}
                      className="text-red-400 hover:text-red-300"
                      data-testid={`button-delete-${todo.id}`}
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                ))}
              </div>
            </GlassCard>

            <GlassCard gradient>
              <h3 className="text-2xl font-bold text-white mb-4">Completed ({completedTodos.length})</h3>
              <div className="space-y-3">
                {completedTodos.map((todo) => (
                  <div
                    key={todo.id}
                    className="flex items-center gap-3 p-3 rounded-lg bg-white/5"
                    data-testid={`todo-completed-${todo.id}`}
                  >
                    <Checkbox
                      checked={todo.completed}
                      onCheckedChange={() => handleToggle(todo.id)}
                      className="border-white/40"
                    />
                    <span className="flex-1 text-white/50 line-through font-body">{todo.text}</span>
                    <Button
                      size="icon"
                      variant="ghost"
                      onClick={() => handleDelete(todo.id)}
                      className="text-red-400 hover:text-red-300"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                ))}
              </div>
            </GlassCard>
          </div>
        </div>
      </main>
    </div>
  );
}
