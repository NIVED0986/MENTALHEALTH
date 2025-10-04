import { useLocation } from 'wouter';
import AnimatedBackground from '@/components/AnimatedBackground';
import DashboardSidebar from '@/components/DashboardSidebar';
import DashboardHeader from '@/components/DashboardHeader';
import GlassCard from '@/components/GlassCard';
import { Button } from '@/components/ui/button';
import { Play } from 'lucide-react';

//todo: remove mock functionality
const exercises = [
  {
    id: 1,
    title: 'Breathing Meditation',
    duration: '10 min',
    description: 'Calm your mind with guided breathing exercises',
    image: '🧘‍♀️',
  },
  {
    id: 2,
    title: 'Body Scan',
    duration: '15 min',
    description: 'Release tension through mindful body awareness',
    image: '✨',
  },
  {
    id: 3,
    title: 'Gratitude Practice',
    duration: '5 min',
    description: 'Cultivate positivity with gratitude meditation',
    image: '🙏',
  },
  {
    id: 4,
    title: 'Sleep Meditation',
    duration: '20 min',
    description: 'Peaceful journey into restful sleep',
    image: '🌙',
  },
];

export default function ExercisePage() {
  const [, setLocation] = useLocation();

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
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-white mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Mindfulness Exercises
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {exercises.map((exercise) => (
              <GlassCard key={exercise.id} gradient data-testid={`exercise-${exercise.id}`}>
                <div className="text-6xl mb-4 text-center">{exercise.image}</div>
                <h3 className="text-2xl font-bold text-white mb-2">{exercise.title}</h3>
                <p className="text-white/70 mb-4 font-body">{exercise.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-white/60 font-body">{exercise.duration}</span>
                  <Button
                    data-testid={`button-start-${exercise.id}`}
                    className="bg-gradient-to-r from-purple-500 to-pink-500"
                  >
                    <Play className="w-4 h-4 mr-2" />
                    Start
                  </Button>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
