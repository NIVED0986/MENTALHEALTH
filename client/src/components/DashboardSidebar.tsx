import { MessageCircle, Heart, Calendar, Mic, ListTodo, Dumbbell } from 'lucide-react';
import { Link, useLocation } from 'wouter';
import { cn } from '@/lib/utils';

const menuItems = [
  { icon: MessageCircle, label: 'AI Chatbot', path: '/dashboard/chatbot' },
  { icon: Heart, label: 'Mood Tracker', path: '/dashboard/mood' },
  { icon: Calendar, label: 'Habit Tracker', path: '/dashboard/habits' },
  { icon: Mic, label: 'Voice Journal', path: '/dashboard/journal' },
  { icon: ListTodo, label: 'Todo List', path: '/dashboard/todos' },
  { icon: Dumbbell, label: 'Exercise', path: '/dashboard/exercise' },
];

export default function DashboardSidebar() {
  const [location] = useLocation();

  return (
    <aside className="fixed left-0 top-0 h-screen w-20 lg:w-64 backdrop-blur-xl bg-gradient-to-b from-purple-900/40 to-blue-900/40 border-r border-white/10 z-50">
      <div className="flex flex-col h-full p-4">
        <div className="mb-8 text-center lg:text-left">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            ECHO
          </h1>
        </div>

        <nav className="flex-1 space-y-4">
          {menuItems.map((item) => {
            const isActive = location === item.path;
            return (
              <Link key={item.path} href={item.path}>
                <div
                  data-testid={`link-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
                  className={cn(
                    'flex items-center gap-4 p-4 rounded-lg transition-all duration-200 cursor-pointer',
                    'hover-elevate active-elevate-2',
                    isActive
                      ? 'bg-gradient-to-r from-purple-500/30 to-pink-500/30 border border-purple-500/50'
                      : 'bg-white/5 border border-transparent'
                  )}
                >
                  <item.icon className={cn(
                    'w-6 h-6',
                    isActive ? 'text-purple-400' : 'text-white/70'
                  )} />
                  <span className={cn(
                    'hidden lg:block font-medium',
                    isActive ? 'text-white' : 'text-white/70'
                  )}>
                    {item.label}
                  </span>
                </div>
              </Link>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}
