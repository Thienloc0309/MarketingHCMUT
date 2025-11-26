import { ReactNode } from 'react';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
}

export function GlassCard({ children, className = '' }: GlassCardProps) {
  return (
    <div className={`relative group ${className}`}>
      {/* Glow effect */}
      <div className="absolute -inset-1 bg-gradient-to-r from-[#00A8E8] to-[#0056b3] rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500"></div>
      
      {/* Glass card */}
      <div className="relative bg-white/60 backdrop-blur-xl border border-white/40 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
        {children}
      </div>
    </div>
  );
}
