import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import GlassCard from './GlassCard';
import { useToast } from '@/hooks/use-toast';

export default function ContactSection() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: 'Message Sent!',
      description: "We'll get back to you soon.",
    });
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <section className="relative py-24 px-4 bg-gradient-to-b from-purple-900/40 to-black">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Get In Touch</h2>
          <p className="text-xl text-white/80 font-body">
            Have questions? We'd love to hear from you
          </p>
        </div>

        <GlassCard gradient>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-white mb-2 font-semibold">
                Name
              </label>
              <Input
                id="name"
                data-testid="input-name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="bg-white/10 border-white/30 text-white placeholder:text-white/50 focus:border-purple-400 focus:ring-purple-400"
                placeholder="Your name"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-white mb-2 font-semibold">
                Email
              </label>
              <Input
                id="email"
                type="email"
                data-testid="input-email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-white/10 border-white/30 text-white placeholder:text-white/50 focus:border-purple-400 focus:ring-purple-400"
                placeholder="your.email@example.com"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-white mb-2 font-semibold">
                Message
              </label>
              <Textarea
                id="message"
                data-testid="input-message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="bg-white/10 border-white/30 text-white placeholder:text-white/50 focus:border-purple-400 focus:ring-purple-400 min-h-[150px]"
                placeholder="Tell us what's on your mind..."
                required
              />
            </div>
            <Button
              type="submit"
              data-testid="button-send"
              className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/50 hover:shadow-purple-500/70"
            >
              Send Message
            </Button>
          </form>
        </GlassCard>
      </div>
    </section>
  );
}
