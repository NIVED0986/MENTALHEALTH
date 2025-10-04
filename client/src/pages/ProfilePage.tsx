import { useState } from 'react';
import { useLocation } from 'wouter';
import AnimatedBackground from '@/components/AnimatedBackground';
import DashboardSidebar from '@/components/DashboardSidebar';
import DashboardHeader from '@/components/DashboardHeader';
import GlassCard from '@/components/GlassCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { useToast } from '@/hooks/use-toast';

export default function ProfilePage() {
  const [, setLocation] = useLocation();
  const { toast } = useToast();
  const [name, setName] = useState('John Doe');
  const [email, setEmail] = useState('john.doe@example.com');

  const handleSave = () => {
    toast({
      title: 'Profile Updated',
      description: 'Your profile has been saved successfully.',
    });
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
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-white mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Profile
          </h1>

          <GlassCard gradient>
            <div className="flex flex-col items-center mb-6">
              <Avatar className="w-24 h-24 mb-4">
                <AvatarFallback className="bg-gradient-to-r from-purple-500 to-pink-500 text-white text-3xl">
                  JD
                </AvatarFallback>
              </Avatar>
              <Button variant="outline" className="backdrop-blur-xl bg-white/10 border-white/30 text-white">
                Change Avatar
              </Button>
            </div>

            <div className="space-y-4">
              <div>
                <Label htmlFor="name" className="text-white">
                  Name
                </Label>
                <Input
                  id="name"
                  data-testid="input-name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="bg-white/10 border-white/30 text-white placeholder:text-white/50"
                />
              </div>

              <div>
                <Label htmlFor="email" className="text-white">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  data-testid="input-email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-white/10 border-white/30 text-white placeholder:text-white/50"
                />
              </div>

              <div className="pt-4 border-t border-white/10">
                <h3 className="text-xl font-bold text-white mb-4">Stats</h3>
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center p-4 rounded-lg bg-white/5">
                    <p className="text-3xl font-bold text-white">7</p>
                    <p className="text-white/60 text-sm font-body">Day Streak</p>
                  </div>
                  <div className="text-center p-4 rounded-lg bg-white/5">
                    <p className="text-3xl font-bold text-white">1,247</p>
                    <p className="text-white/60 text-sm font-body">Points</p>
                  </div>
                  <div className="text-center p-4 rounded-lg bg-white/5">
                    <p className="text-3xl font-bold text-white">12</p>
                    <p className="text-white/60 text-sm font-body">Badges</p>
                  </div>
                </div>
              </div>
            </div>

            <Button
              onClick={handleSave}
              data-testid="button-save-profile"
              className="w-full mt-6 bg-gradient-to-r from-purple-500 to-pink-500"
            >
              Save Profile
            </Button>
          </GlassCard>
        </div>
      </main>
    </div>
  );
}
