import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface AuthModalProps {
  open: boolean;
  onClose: () => void;
  defaultTab?: 'login' | 'signup';
  onAuthSuccess: () => void;
}

export default function AuthModal({ open, onClose, defaultTab = 'login', onAuthSuccess }: AuthModalProps) {
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [signupEmail, setSignupEmail] = useState('');
  const [signupPassword, setSignupPassword] = useState('');
  const [signupName, setSignupName] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Login:', { email: loginEmail, password: loginPassword });
    onAuthSuccess();
    onClose();
  };

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Signup:', { name: signupName, email: signupEmail, password: signupPassword });
    onAuthSuccess();
    onClose();
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[450px] bg-gradient-to-br from-purple-900/95 to-blue-900/95 backdrop-blur-xl border-white/20 text-white">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Welcome to Echo
          </DialogTitle>
        </DialogHeader>

        <Tabs defaultValue={defaultTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2 bg-white/10">
            <TabsTrigger value="login" data-testid="tab-login" className="data-[state=active]:bg-white/20">
              Log In
            </TabsTrigger>
            <TabsTrigger value="signup" data-testid="tab-signup" className="data-[state=active]:bg-white/20">
              Sign Up
            </TabsTrigger>
          </TabsList>

          <TabsContent value="login">
            <form onSubmit={handleLogin} className="space-y-4 mt-4">
              <div>
                <Label htmlFor="login-email" className="text-white">Email</Label>
                <Input
                  id="login-email"
                  type="email"
                  data-testid="input-login-email"
                  value={loginEmail}
                  onChange={(e) => setLoginEmail(e.target.value)}
                  className="bg-white/10 border-white/30 text-white placeholder:text-white/50"
                  placeholder="your.email@example.com"
                  required
                />
              </div>
              <div>
                <Label htmlFor="login-password" className="text-white">Password</Label>
                <Input
                  id="login-password"
                  type="password"
                  data-testid="input-login-password"
                  value={loginPassword}
                  onChange={(e) => setLoginPassword(e.target.value)}
                  className="bg-white/10 border-white/30 text-white placeholder:text-white/50"
                  placeholder="••••••••"
                  required
                />
              </div>
              <Button
                type="submit"
                data-testid="button-login-submit"
                className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg"
              >
                Log In
              </Button>
            </form>
          </TabsContent>

          <TabsContent value="signup">
            <form onSubmit={handleSignup} className="space-y-4 mt-4">
              <div>
                <Label htmlFor="signup-name" className="text-white">Name</Label>
                <Input
                  id="signup-name"
                  data-testid="input-signup-name"
                  value={signupName}
                  onChange={(e) => setSignupName(e.target.value)}
                  className="bg-white/10 border-white/30 text-white placeholder:text-white/50"
                  placeholder="Your name"
                  required
                />
              </div>
              <div>
                <Label htmlFor="signup-email" className="text-white">Email</Label>
                <Input
                  id="signup-email"
                  type="email"
                  data-testid="input-signup-email"
                  value={signupEmail}
                  onChange={(e) => setSignupEmail(e.target.value)}
                  className="bg-white/10 border-white/30 text-white placeholder:text-white/50"
                  placeholder="your.email@example.com"
                  required
                />
              </div>
              <div>
                <Label htmlFor="signup-password" className="text-white">Password</Label>
                <Input
                  id="signup-password"
                  type="password"
                  data-testid="input-signup-password"
                  value={signupPassword}
                  onChange={(e) => setSignupPassword(e.target.value)}
                  className="bg-white/10 border-white/30 text-white placeholder:text-white/50"
                  placeholder="••••••••"
                  required
                />
              </div>
              <Button
                type="submit"
                data-testid="button-signup-submit"
                className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg"
              >
                Sign Up
              </Button>
            </form>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
}
