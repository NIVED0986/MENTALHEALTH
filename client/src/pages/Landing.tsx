import { useState } from 'react';
import AnimatedBackground from '@/components/AnimatedBackground';
import Hero from '@/components/Hero';
import AboutSection from '@/components/AboutSection';
import ContactSection from '@/components/ContactSection';
import AuthModal from '@/components/AuthModal';
import { useLocation } from 'wouter';

export default function Landing() {
  const [, setLocation] = useLocation();
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authTab, setAuthTab] = useState<'login' | 'signup'>('login');

  const handleLoginClick = () => {
    setAuthTab('login');
    setAuthModalOpen(true);
  };

  const handleSignupClick = () => {
    setAuthTab('signup');
    setAuthModalOpen(true);
  };

  const handleAuthSuccess = () => {
    setLocation('/dashboard');
  };

  return (
    <div className="relative min-h-screen bg-black">
      <AnimatedBackground />
      <Hero onLoginClick={handleLoginClick} onSignupClick={handleSignupClick} />
      <AboutSection />
      <ContactSection />
      <AuthModal
        open={authModalOpen}
        onClose={() => setAuthModalOpen(false)}
        defaultTab={authTab}
        onAuthSuccess={handleAuthSuccess}
      />
    </div>
  );
}
