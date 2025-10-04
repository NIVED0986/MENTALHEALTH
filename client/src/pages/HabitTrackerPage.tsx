import { useState } from 'react';
import { useLocation } from 'wouter';
import AnimatedBackground from '@/components/AnimatedBackground';
import DashboardSidebar from '@/components/DashboardSidebar';
import DashboardHeader from '@/components/DashboardHeader';
import GlassCard from '@/components/GlassCard';
import HabitCalendar from '@/components/HabitCalendar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { Plus, Trash2 } from 'lucide-react';

//todo: remove mock functionality
interface Habit {
  id: number;
  name: string;
  completed: boolean;
}

export default function HabitTrackerPage() {
  const [, setLocation] = useLocation();
  const [habits, setHabits] = useState<Habit[]>([
    { id: 1, name: 'Morning meditation', completed: false },
    { id: 2, name: 'Drink 8 glasses of water', completed: true },
    { id: 3, name: 'Exercise 30 minutes', completed: false },
  ]);
  const [newHabit, setNewHabit] = useState('');

  const handleToggle = (id: number) => {
    setHabits(habits.map(h => h.id === id ? { ...h, completed: !h.completed } : h));
  };

  const handleAdd = () => {
    if (newHabit.trim()) {
      setHabits([...habits, { id: Date.now(), name: newHabit, completed: false }]);
      setNewHabit('');
    }
  };

  const handleDelete = (id: number) => {
    setHabits(habits.filter(h => h.id !== id));
  };

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
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-bold text-white mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Habit Tracker
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <GlassCard gradient>
              <h3 className="text-2xl font-bold text-white mb-4">Today's Habits</h3>
              <div className="space-y-3 mb-4">
                {habits.map((habit) => (
                  <div
                    key={habit.id}
                    className="flex items-center gap-3 p-3 rounded-lg bg-white/5 hover-elevate"
                    data-testid={`habit-${habit.id}`}
                  >
                    <Checkbox
                      checked={habit.completed}
                      onCheckedChange={() => handleToggle(habit.id)}
                      className="border-white/40"
                    />
                    <span className={`flex-1 font-body ${habit.completed ? 'line-through text-white/50' : 'text-white'}`}>
                      {habit.name}
                    </span>
                    <Button
                      size="icon"
                      variant="ghost"
                      onClick={() => handleDelete(habit.id)}
                      className="text-red-400 hover:text-red-300"
                      data-testid={`button-delete-${habit.id}`}
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                ))}
              </div>
              <div className="flex gap-2">
                <Input
                  data-testid="input-new-habit"
                  value={newHabit}
                  onChange={(e) => setNewHabit(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleAdd()}
                  placeholder="Add new habit..."
                  className="bg-white/10 border-white/30 text-white placeholder:text-white/50"
                />
                <Button
                  onClick={handleAdd}
                  size="icon"
                  data-testid="button-add-habit"
                  className="bg-gradient-to-r from-purple-500 to-pink-500"
                >
                  <Plus className="w-4 h-4" />
                </Button>
              </div>
            </GlassCard>

            <HabitCalendar />
          </div>
        </div>
      </main>
    </div>
  );
}
