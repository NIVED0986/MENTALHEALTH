import { Button } from "@/components/ui/button";
import heroImage from '@assets/generated_images/Cosmic_meditation_hero_background_add128fc.png';
import logoImage from '@assets/generated_images/Echo_app_logo_6de773db.png';

interface HeroProps {
  onLoginClick: () => void;
  onSignupClick: () => void;
}

export default function Hero({ onLoginClick, onSignupClick }: HeroProps) {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />
      </div>

      <div className="absolute top-6 right-6 z-20 flex gap-3">
        <Button
          data-testid="button-login"
          variant="outline"
          onClick={onLoginClick}
          className="backdrop-blur-xl bg-white/10 border-white/30 text-white hover:bg-white/20"
        >
          Log In
        </Button>
        <Button
          data-testid="button-signup"
          onClick={onSignupClick}
          className="bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/50"
        >
          Sign Up
        </Button>
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4">
        <img
          src={logoImage}
          alt="Echo Logo"
          className="w-32 h-32 mb-8 drop-shadow-2xl animate-pulse"
          data-testid="img-logo"
        />
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-center mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent drop-shadow-2xl">
          ECHO
        </h1>
        <p className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white text-center drop-shadow-lg">
          MEET YOUR INNER SELF
        </p>
        <p className="mt-6 text-lg md:text-xl text-white/90 text-center max-w-2xl font-body">
          Your journey to mindfulness, wellness, and self-discovery starts here
        </p>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          className="w-8 h-8 text-white/60"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </div>
  );
}
