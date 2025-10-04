import { Settings, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

interface DashboardHeaderProps {
  onSettingsClick: () => void;
  onProfileClick: () => void;
  onLogout: () => void;
}

export default function DashboardHeader({ onSettingsClick, onProfileClick, onLogout }: DashboardHeaderProps) {
  return (
    <header className="fixed top-0 right-0 left-20 lg:left-64 h-16 backdrop-blur-xl bg-gradient-to-r from-purple-900/40 to-blue-900/40 border-b border-white/10 z-40">
      <div className="flex items-center justify-end h-full px-6 gap-3">
        <Button
          size="icon"
          variant="ghost"
          onClick={onSettingsClick}
          data-testid="button-settings"
          className="text-white/70 hover:text-white hover-elevate"
        >
          <Settings className="w-5 h-5" />
        </Button>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              className="flex items-center gap-2 hover-elevate"
              data-testid="button-profile"
            >
              <Avatar className="w-8 h-8">
                <AvatarFallback className="bg-gradient-to-r from-purple-500 to-pink-500 text-white">
                  JD
                </AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="end"
            className="w-56 bg-gradient-to-br from-purple-900/95 to-blue-900/95 backdrop-blur-xl border-white/20 text-white"
          >
            <DropdownMenuItem onClick={onProfileClick} data-testid="menu-profile">
              <User className="w-4 h-4 mr-2" />
              Profile
            </DropdownMenuItem>
            <DropdownMenuItem onClick={onSettingsClick} data-testid="menu-settings">
              <Settings className="w-4 h-4 mr-2" />
              Settings
            </DropdownMenuItem>
            <DropdownMenuSeparator className="bg-white/10" />
            <DropdownMenuItem onClick={onLogout} data-testid="menu-logout">
              Logout
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
