import { useState } from 'react';
import { useLocation } from 'wouter';
import AnimatedBackground from '@/components/AnimatedBackground';
import DashboardSidebar from '@/components/DashboardSidebar';
import DashboardHeader from '@/components/DashboardHeader';
import GlassCard from '@/components/GlassCard';
import { Button } from '@/components/ui/button';
import { Mic, Square, Play, Trash2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Badge } from '@/components/ui/badge';

//todo: remove mock functionality
interface Recording {
  id: number;
  date: string;
  duration: string;
}

export default function VoiceJournalPage() {
  const [, setLocation] = useLocation();
  const [isRecording, setIsRecording] = useState(false);
  const { toast } = useToast();
  const [recordings, setRecordings] = useState<Recording[]>([
    { id: 1, date: '2025-10-04', duration: '2:34' },
    { id: 2, date: '2025-10-03', duration: '1:15' },
    { id: 3, date: '2025-10-02', duration: '3:42' },
  ]);

  const handleRecord = () => {
    setIsRecording(!isRecording);
    if (!isRecording) {
      toast({ title: 'Recording started', description: 'Speak your thoughts...' });
    } else {
      toast({ title: 'Recording saved', description: 'Your voice journal has been saved.' });
      setRecordings([
        { id: Date.now(), date: new Date().toISOString().split('T')[0], duration: '0:45' },
        ...recordings
      ]);
    }
  };

  const handleDelete = (id: number) => {
    setRecordings(recordings.filter(r => r.id !== id));
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
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-white mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Voice Journal
          </h1>

          <div className="grid grid-cols-1 gap-6">
            <GlassCard gradient className="text-center">
              <h3 className="text-2xl font-bold text-white mb-6">Record Your Thoughts</h3>
              <div className="flex flex-col items-center gap-6">
                <Button
                  onClick={handleRecord}
                  size="lg"
                  data-testid="button-record"
                  className={`w-32 h-32 rounded-full ${
                    isRecording
                      ? 'bg-red-500 hover:bg-red-600 animate-pulse'
                      : 'bg-gradient-to-r from-purple-500 to-pink-500'
                  }`}
                >
                  {isRecording ? <Square className="w-12 h-12" /> : <Mic className="w-12 h-12" />}
                </Button>
                <p className="text-white/80 font-body">
                  {isRecording ? 'Recording... Click to stop' : 'Click to start recording'}
                </p>
              </div>
            </GlassCard>

            <GlassCard gradient>
              <h3 className="text-2xl font-bold text-white mb-4">Your Recordings</h3>
              <div className="space-y-3">
                {recordings.map((recording) => (
                  <div
                    key={recording.id}
                    className="flex items-center gap-3 p-4 rounded-lg bg-white/5 hover-elevate"
                    data-testid={`recording-${recording.id}`}
                  >
                    <Button size="icon" variant="ghost" className="text-purple-400">
                      <Play className="w-4 h-4" />
                    </Button>
                    <div className="flex-1">
                      <p className="text-white font-medium">{recording.date}</p>
                      <p className="text-white/60 text-sm font-body">Duration: {recording.duration}</p>
                    </div>
                    <Badge variant="secondary" className="bg-purple-500/20 text-purple-300 border-purple-500/30">
                      {recording.duration}
                    </Badge>
                    <Button
                      size="icon"
                      variant="ghost"
                      onClick={() => handleDelete(recording.id)}
                      className="text-red-400 hover:text-red-300"
                      data-testid={`button-delete-recording-${recording.id}`}
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
