import { useState } from 'react';
import { useLocation } from 'wouter';
import AnimatedBackground from '@/components/AnimatedBackground';
import DashboardSidebar from '@/components/DashboardSidebar';
import DashboardHeader from '@/components/DashboardHeader';
import GlassCard from '@/components/GlassCard';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { useToast } from '@/hooks/use-toast';

export default function SettingsPage() {
  const [, setLocation] = useLocation();
  const { toast } = useToast();
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(true);
  const [soundEffects, setSoundEffects] = useState(false);

  const handleSave = () => {
    toast({
      title: 'Settings Saved',
      description: 'Your preferences have been updated.',
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
            Settings
          </h1>

          <GlassCard gradient>
            <h3 className="text-2xl font-bold text-white mb-6">Preferences</h3>
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="notifications" className="text-white text-lg">
                    Notifications
                  </Label>
                  <p className="text-white/60 text-sm font-body">
                    Receive reminders and updates
                  </p>
                </div>
                <Switch
                  id="notifications"
                  checked={notifications}
                  onCheckedChange={setNotifications}
                  data-testid="switch-notifications"
                />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="darkMode" className="text-white text-lg">
                    Dark Mode
                  </Label>
                  <p className="text-white/60 text-sm font-body">
                    Use dark theme (always on for Echo)
                  </p>
                </div>
                <Switch
                  id="darkMode"
                  checked={darkMode}
                  onCheckedChange={setDarkMode}
                  data-testid="switch-dark-mode"
                />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="soundEffects" className="text-white text-lg">
                    Sound Effects
                  </Label>
                  <p className="text-white/60 text-sm font-body">
                    Play sounds for actions
                  </p>
                </div>
                <Switch
                  id="soundEffects"
                  checked={soundEffects}
                  onCheckedChange={setSoundEffects}
                  data-testid="switch-sound-effects"
                />
              </div>
            </div>

            <Button
              onClick={handleSave}
              data-testid="button-save-settings"
              className="w-full mt-6 bg-gradient-to-r from-purple-500 to-pink-500"
            >
              Save Settings
            </Button>
          </GlassCard>
        </div>
      </main>
    </div>
  );
}
