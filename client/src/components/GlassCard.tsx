import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  gradient?: boolean;
  onClick?: () => void;
}

export default function GlassCard({ children, className, gradient = false, onClick }: GlassCardProps) {
  return (
    <div
      onClick={onClick}
      className={cn(
        "backdrop-blur-xl rounded-3xl p-6 border",
        gradient
          ? "bg-gradient-to-br from-white/10 to-white/5 border-white/20"
          : "bg-white/10 border-white/20",
        "shadow-2xl hover-elevate active-elevate-2 transition-all duration-300",
        className
      )}
    >
      {children}
    </div>
  );
}
