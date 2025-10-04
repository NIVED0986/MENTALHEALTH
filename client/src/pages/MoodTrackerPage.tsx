import { useState } from 'react';
import { useLocation } from 'wouter';
import AnimatedBackground from '@/components/AnimatedBackground';
import DashboardSidebar from '@/components/DashboardSidebar';
import DashboardHeader from '@/components/DashboardHeader';
import GlassCard from '@/components/GlassCard';
import MoodGraph from '@/components/MoodGraph';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const moodEmojis = ['😢', '😟', '😐', '🙂', '😊', '😄', '😁', '🤗', '😍', '🤩'];

export default function MoodTrackerPage() {
  const [, setLocation] = useLocation();
  const [mood, setMood] = useState([7]);
  const [note, setNote] = useState('');
  const { toast } = useToast();

  const handleSave = () => {
    toast({
      title: 'Mood Logged!',
      description: 'Your mood has been saved successfully.',
    });
    setNote('');
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
            Mood Tracker
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <GlassCard gradient>
              <h3 className="text-2xl font-bold text-white mb-6">How are you feeling?</h3>
              <div className="text-center mb-6">
                <div className="text-8xl mb-4" data-testid="text-mood-emoji">
                  {moodEmojis[mood[0] - 1]}
                </div>
                <p className="text-white text-2xl font-bold">{mood[0]}/10</p>
              </div>
              <Slider
                value={mood}
                onValueChange={setMood}
                max={10}
                min={1}
                step={1}
                className="mb-6"
                data-testid="slider-mood"
              />
              <Textarea
                data-testid="input-note"
                value={note}
                onChange={(e) => setNote(e.target.value)}
                placeholder="Add a note about your mood..."
                className="bg-white/10 border-white/30 text-white placeholder:text-white/50 mb-4"
              />
              <Button
                onClick={handleSave}
                data-testid="button-save-mood"
                className="w-full bg-gradient-to-r from-purple-500 to-pink-500"
              >
                Save Mood
              </Button>
            </GlassCard>

            <MoodGraph />
          </div>
        </div>
      </main>
    </div>
  );
}
