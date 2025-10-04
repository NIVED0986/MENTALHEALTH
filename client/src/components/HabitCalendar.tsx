import { Calendar } from '@/components/ui/calendar';
import { useState } from 'react';
import GlassCard from './GlassCard';

//todo: remove mock functionality
const mockCompletedDates = [
  new Date(2025, 9, 1),
  new Date(2025, 9, 3),
  new Date(2025, 9, 4),
  new Date(2025, 9, 7),
  new Date(2025, 9, 10),
];

export default function HabitCalendar() {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <GlassCard gradient data-testid="card-habit-calendar">
      <h3 className="text-2xl font-bold text-white mb-4">Habit Tracker</h3>
      <div className="flex justify-center">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="rounded-lg border-0"
          modifiers={{
            completed: mockCompletedDates,
          }}
          modifiersStyles={{
            completed: {
              backgroundColor: '#8b5cf6',
              color: 'white',
              fontWeight: 'bold',
              borderRadius: '50%',
            },
          }}
        />
      </div>
    </GlassCard>
  );
}
