import { Trophy, Star, Award, Zap } from 'lucide-react';
import GlassCard from './GlassCard';
import { Badge } from '@/components/ui/badge';

//todo: remove mock functionality
const rewards = [
  { id: 1, name: '7 Day Streak', icon: Trophy, color: 'from-yellow-400 to-orange-500' },
  { id: 2, name: 'Mood Master', icon: Star, color: 'from-purple-400 to-pink-500' },
  { id: 3, name: 'Early Bird', icon: Award, color: 'from-blue-400 to-cyan-500' },
  { id: 4, name: 'Meditation Pro', icon: Zap, color: 'from-green-400 to-emerald-500' },
];

export default function RewardsWidget() {
  return (
    <GlassCard gradient data-testid="card-rewards">
      <h3 className="text-2xl font-bold text-white mb-4">Your Rewards</h3>
      <div className="flex items-center justify-between mb-6 p-4 rounded-lg bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-500/30">
        <div>
          <p className="text-white/70 text-sm font-body">Total Points</p>
          <p className="text-3xl font-bold text-white">1,247</p>
        </div>
        <Trophy className="w-12 h-12 text-yellow-400" />
      </div>
      <div className="space-y-3">
        {rewards.map((reward) => (
          <div
            key={reward.id}
            className="flex items-center gap-3 p-3 rounded-lg hover-elevate bg-white/5"
            data-testid={`reward-${reward.id}`}
          >
            <div className={`p-2 rounded-lg bg-gradient-to-br ${reward.color}`}>
              <reward.icon className="w-5 h-5 text-white" />
            </div>
            <span className="text-white font-body flex-1">{reward.name}</span>
            <Badge variant="secondary" className="bg-white/10 text-white border-white/20">
              New
            </Badge>
          </div>
        ))}
      </div>
    </GlassCard>
  );
}
