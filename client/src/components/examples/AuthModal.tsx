import { useState } from 'react';
import AuthModal from '../AuthModal';
import { Button } from '@/components/ui/button';

export default function AuthModalExample() {
  const [open, setOpen] = useState(false);

  return (
    <div className="p-8 bg-gradient-to-br from-purple-900 to-blue-900 min-h-[400px] flex items-center justify-center">
      <Button onClick={() => setOpen(true)} data-testid="button-open-modal">
        Open Auth Modal
      </Button>
      <AuthModal
        open={open}
        onClose={() => setOpen(false)}
        onAuthSuccess={() => console.log('Auth successful')}
      />
    </div>
  );
}
