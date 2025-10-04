import { Brain, Heart, Calendar, MessageCircle, Mic, ListTodo } from 'lucide-react';
import GlassCard from './GlassCard';

const features = [
  {
    icon: MessageCircle,
    title: 'AI Chatbot',
    description: 'Talk to our empathetic AI companion anytime you need support',
  },
  {
    icon: Heart,
    title: 'Mood Tracker',
    description: 'Monitor your emotional well-being with intuitive mood tracking',
  },
  {
    icon: Calendar,
    title: 'Habit Tracker',
    description: 'Build positive habits and track your progress visually',
  },
  {
    icon: Mic,
    title: 'Voice Journaling',
    description: 'Express yourself through voice notes and reflections',
  },
  {
    icon: ListTodo,
    title: 'Smart Todo Lists',
    description: 'Organize your life with intelligent task management',
  },
  {
    icon: Brain,
    title: 'Mindfulness Exercises',
    description: 'Guided meditations and wellness exercises',
  },
];

export default function AboutSection() {
  return (
    <section className="relative py-24 px-4 bg-gradient-to-b from-black/80 to-purple-900/40">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Your Wellness Journey, Gamified
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto font-body">
            Echo combines mental wellness tools with gamification to make self-care engaging and rewarding
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <GlassCard key={feature.title} gradient data-testid={`card-feature-${feature.title.toLowerCase().replace(/\s+/g, '-')}`}>
              <feature.icon className="w-12 h-12 text-purple-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
              <p className="text-white/70 font-body">{feature.description}</p>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
