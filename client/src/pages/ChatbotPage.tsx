import { useState } from 'react';
import { useLocation } from 'wouter';
import AnimatedBackground from '@/components/AnimatedBackground';
import DashboardSidebar from '@/components/DashboardSidebar';
import DashboardHeader from '@/components/DashboardHeader';
import GlassCard from '@/components/GlassCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Send } from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';

//todo: remove mock functionality
interface Message {
  id: number;
  text: string;
  sender: 'user' | 'bot';
}

export default function ChatbotPage() {
  const [, setLocation] = useLocation();
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, text: "Hello! I'm here to support you. How are you feeling today?", sender: 'bot' }
  ]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage: Message = { id: Date.now(), text: input, sender: 'user' };
    setMessages([...messages, userMessage]);

    setTimeout(() => {
      const botMessage: Message = {
        id: Date.now() + 1,
        text: "I hear you. It's great that you're taking time to reflect on your feelings. Would you like to talk more about it?",
        sender: 'bot'
      };
      setMessages(prev => [...prev, botMessage]);
    }, 1000);

    setInput('');
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
            AI Wellness Companion
          </h1>

          <GlassCard gradient className="h-[calc(100vh-16rem)]">
            <ScrollArea className="h-[calc(100vh-24rem)] pr-4">
              <div className="space-y-4">
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                    data-testid={`message-${msg.id}`}
                  >
                    <div
                      className={`max-w-[80%] p-4 rounded-2xl ${
                        msg.sender === 'user'
                          ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
                          : 'bg-white/10 text-white'
                      }`}
                    >
                      <p className="font-body">{msg.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>

            <div className="flex gap-2 mt-4">
              <Input
                data-testid="input-message"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Share your thoughts..."
                className="bg-white/10 border-white/30 text-white placeholder:text-white/50"
              />
              <Button
                onClick={handleSend}
                size="icon"
                data-testid="button-send"
                className="bg-gradient-to-r from-purple-500 to-pink-500"
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </GlassCard>
        </div>
      </main>
    </div>
  );
}
