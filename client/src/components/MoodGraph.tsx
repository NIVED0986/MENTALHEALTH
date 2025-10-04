import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, AreaChart } from 'recharts';
import GlassCard from './GlassCard';

//todo: remove mock functionality
const mockData = [
  { day: 'Mon', mood: 7 },
  { day: 'Tue', mood: 8 },
  { day: 'Wed', mood: 6 },
  { day: 'Thu', mood: 9 },
  { day: 'Fri', mood: 7 },
  { day: 'Sat', mood: 8 },
  { day: 'Sun', mood: 9 },
];

export default function MoodGraph() {
  return (
    <GlassCard gradient data-testid="card-mood-graph">
      <h3 className="text-2xl font-bold text-white mb-4">Your Mood This Week</h3>
      <ResponsiveContainer width="100%" height={250}>
        <AreaChart data={mockData}>
          <defs>
            <linearGradient id="moodGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
          <XAxis dataKey="day" stroke="rgba(255,255,255,0.6)" />
          <YAxis stroke="rgba(255,255,255,0.6)" domain={[0, 10]} />
          <Tooltip
            contentStyle={{
              backgroundColor: 'rgba(0,0,0,0.8)',
              border: '1px solid rgba(255,255,255,0.2)',
              borderRadius: '8px',
              color: 'white',
            }}
          />
          <Area
            type="monotone"
            dataKey="mood"
            stroke="#8b5cf6"
            strokeWidth={3}
            fillOpacity={1}
            fill="url(#moodGradient)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </GlassCard>
  );
}
