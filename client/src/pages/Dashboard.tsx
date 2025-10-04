import { useState } from 'react';
import { useLocation } from 'wouter';
import AnimatedBackground from '@/components/AnimatedBackground';
import DashboardSidebar from '@/components/DashboardSidebar';
import DashboardHeader from '@/components/DashboardHeader';
import MoodGraph from '@/components/MoodGraph';
import HabitCalendar from '@/components/HabitCalendar';
import TodoWidget from '@/components/TodoWidget';
import RewardsWidget from '@/components/RewardsWidget';

export default function Dashboard() {
  const [, setLocation] = useLocation();

  const handleLogout = () => {
    setLocation('/');
  };

  const handleSettings = () => {
    setLocation('/dashboard/settings');
  };

  const handleProfile = () => {
    setLocation('/dashboard/profile');
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-black via-purple-900/30 to-blue-900/30">
      <AnimatedBackground />
      <DashboardSidebar />
      <DashboardHeader
        onSettingsClick={handleSettings}
        onProfileClick={handleProfile}
        onLogout={handleLogout}
      />

      <main className="ml-20 lg:ml-64 pt-20 p-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-white mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Welcome Back!
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-6">
              <MoodGraph />
              <HabitCalendar />
            </div>

            <div className="space-y-6">
              <TodoWidget />
              <RewardsWidget />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
