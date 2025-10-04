import GlassCard from '../GlassCard';

export default function GlassCardExample() {
  return (
    <div className="p-8 bg-gradient-to-br from-purple-900 to-blue-900 min-h-[300px] flex items-center justify-center">
      <GlassCard gradient>
        <h3 className="text-xl font-bold text-white mb-2">Glassmorphic Card</h3>
        <p className="text-white/80">This is a beautiful glass card with blur effect</p>
      </GlassCard>
    </div>
  );
}
