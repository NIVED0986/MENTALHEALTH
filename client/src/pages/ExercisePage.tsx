import { useState } from 'react';
import { useLocation } from 'wouter';
import AnimatedBackground from '@/components/AnimatedBackground';
import DashboardSidebar from '@/components/DashboardSidebar';
import DashboardHeader from '@/components/DashboardHeader';
import GlassCard from '@/components/GlassCard';
import { Button } from '@/components/ui/button';
import { Play, ChevronLeft, Pause } from 'lucide-react';

//todo: remove mock functionality
const exercises = [
  {
    id: 1,
    title: 'Breathing Meditation',
    duration: '10 min',
    description: 'Calm your mind with guided breathing exercises',
    image: '🧘‍♀️',
    sessions: [
      { id: 1, name: '4-7-8 Breathing', duration: '5 min', description: 'Inhale for 4, hold for 7, exhale for 8' },
      { id: 2, name: 'Box Breathing', duration: '7 min', description: 'Equal breathing pattern for relaxation' },
      { id: 3, name: 'Deep Belly Breathing', duration: '10 min', description: 'Focus on diaphragmatic breathing' },
    ],
  },
  {
    id: 2,
    title: 'Body Scan',
    duration: '15 min',
    description: 'Release tension through mindful body awareness',
    image: '✨',
    sessions: [
      { id: 1, name: 'Progressive Relaxation', duration: '12 min', description: 'Systematically relax each muscle group' },
      { id: 2, name: 'Quick Body Check', duration: '5 min', description: 'Brief scan of major tension areas' },
      { id: 3, name: 'Full Body Journey', duration: '20 min', description: 'Complete head-to-toe awareness practice' },
    ],
  },
  {
    id: 3,
    title: 'Gratitude Practice',
    duration: '5 min',
    description: 'Cultivate positivity with gratitude meditation',
    image: '🙏',
    sessions: [
      { id: 1, name: 'Three Good Things', duration: '3 min', description: 'Reflect on three positive moments' },
      { id: 2, name: 'Gratitude Letter', duration: '8 min', description: 'Write a letter of appreciation' },
      { id: 3, name: 'Daily Blessings', duration: '5 min', description: 'Acknowledge life\'s simple gifts' },
    ],
  },
  {
    id: 4,
    title: 'Sleep Meditation',
    duration: '20 min',
    description: 'Peaceful journey into restful sleep',
    image: '🌙',
    sessions: [
      { id: 1, name: 'Evening Wind Down', duration: '15 min', description: 'Gentle transition to sleep' },
      { id: 2, name: 'Deep Sleep Visualization', duration: '25 min', description: 'Imagery for profound rest' },
      { id: 3, name: 'Calming Nature Sounds', duration: '30 min', description: 'Peaceful ambient meditation' },
    ],
  },
];

export default function ExercisePage() {
  const [, setLocation] = useLocation();
  const [selectedExercise, setSelectedExercise] = useState<number | null>(null);
  const [playingSession, setPlayingSession] = useState<number | null>(null);

  const handleExerciseClick = (exerciseId: number) => {
    setSelectedExercise(exerciseId);
    setPlayingSession(null);
  };

  const handleBack = () => {
    setSelectedExercise(null);
    setPlayingSession(null);
  };

  const handlePlaySession = (sessionId: number) => {
    if (playingSession === sessionId) {
      setPlayingSession(null);
    } else {
      setPlayingSession(sessionId);
    }
  };

  const currentExercise = exercises.find(e => e.id === selectedExercise);

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
          {!selectedExercise ? (
            <>
              <h1 className="text-4xl font-bold text-white mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Mindfulness Exercises
              </h1>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {exercises.map((exercise) => (
                  <GlassCard 
                    key={exercise.id} 
                    gradient 
                    data-testid={`exercise-${exercise.id}`}
                    className="cursor-pointer transition-transform hover:scale-105"
                    onClick={() => handleExerciseClick(exercise.id)}
                  >
                    <div className="text-6xl mb-4 text-center">{exercise.image}</div>
                    <h3 className="text-2xl font-bold text-white mb-2">{exercise.title}</h3>
                    <p className="text-white/70 mb-4 font-body">{exercise.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-white/60 font-body">{exercise.sessions.length} sessions</span>
                      <Button
                        data-testid={`button-start-${exercise.id}`}
                        className="bg-gradient-to-r from-purple-500 to-pink-500"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleExerciseClick(exercise.id);
                        }}
                      >
                        <Play className="w-4 h-4 mr-2" />
                        Explore
                      </Button>
                    </div>
                  </GlassCard>
                ))}
              </div>
            </>
          ) : (
            <>
              <div className="mb-6">
                <Button
                  variant="ghost"
                  onClick={handleBack}
                  data-testid="button-back"
                  className="text-white/70 hover:text-white mb-4"
                >
                  <ChevronLeft className="w-4 h-4 mr-2" />
                  Back to Exercises
                </Button>
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-6xl">{currentExercise?.image}</div>
                  <div>
                    <h1 className="text-4xl font-bold text-white bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                      {currentExercise?.title}
                    </h1>
                    <p className="text-white/70 text-lg font-body mt-2">{currentExercise?.description}</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                {currentExercise?.sessions.map((session) => (
                  <GlassCard 
                    key={session.id} 
                    gradient 
                    data-testid={`session-${session.id}`}
                    className={playingSession === session.id ? 'ring-2 ring-purple-500' : ''}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-white mb-1">{session.name}</h3>
                        <p className="text-white/70 text-sm font-body mb-2">{session.description}</p>
                        <span className="text-white/60 text-sm font-body">{session.duration}</span>
                      </div>
                      <Button
                        onClick={() => handlePlaySession(session.id)}
                        data-testid={`button-play-session-${session.id}`}
                        className={playingSession === session.id 
                          ? 'bg-gradient-to-r from-orange-500 to-red-500' 
                          : 'bg-gradient-to-r from-purple-500 to-pink-500'
                        }
                      >
                        {playingSession === session.id ? (
                          <>
                            <Pause className="w-4 h-4 mr-2" />
                            Pause
                          </>
                        ) : (
                          <>
                            <Play className="w-4 h-4 mr-2" />
                            Start
                          </>
                        )}
                      </Button>
                    </div>
                    {playingSession === session.id && (
                      <div className="mt-4 p-4 rounded-lg bg-white/5 border border-purple-500/30">
                        <p className="text-white/80 font-body text-center">
                          🎧 Playing: {session.name}... Find a comfortable position and breathe deeply.
                        </p>
                        <div className="w-full bg-white/10 rounded-full h-2 mt-3">
                          <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full animate-pulse" style={{ width: '40%' }}></div>
                        </div>
                      </div>
                    )}
                  </GlassCard>
                ))}
              </div>
            </>
          )}
        </div>
      </main>
    </div>
  );
}
