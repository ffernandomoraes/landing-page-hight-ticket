import { useCountAnimation } from '@/hooks/useCountAnimation';
import { LucideIcon } from 'lucide-react';

interface AnimatedStatsCardProps {
  number: number;
  unit: string;
  description: string;
  icon: LucideIcon;
  suffix?: string;
  colorClass?: string;
}

const AnimatedStatsCard = ({ number, unit, description, icon: Icon, suffix = "", colorClass = "text-blue-900" }: AnimatedStatsCardProps) => {
  const { count, ref } = useCountAnimation(number, 2500);

  const formatNumber = (num: number) => {
    if (suffix === "Mil") {
      return Math.floor(num / 1000);
    }
    return num;
  };

  return (
    <div 
      ref={ref}
      className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl p-3 md:p-6 transition-all duration-300 shadow-gradient-hover hover:bg-white/25 hover:scale-105 cursor-pointer group relative overflow-hidden"
    >
      <div className="flex items-start justify-between mb-2 md:mb-4">
        <Icon 
          className={`w-6 h-6 md:w-8 md:h-8 ${colorClass} group-hover:opacity-80 transition-colors`}
          strokeWidth={1.5}
        />
      </div>
      
      <div className="space-y-2">
        <div className={`text-lg md:text-2xl lg:text-3xl font-bold ${colorClass}`}>
          {formatNumber(count)} {unit}
        </div>
        
        <div className="text-gray-800 text-xs md:text-sm leading-relaxed">
          {description}
        </div>
      </div>
    </div>
  );
};

export default AnimatedStatsCard;