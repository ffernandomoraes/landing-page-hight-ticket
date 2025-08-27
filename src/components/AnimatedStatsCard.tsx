import { useCountAnimation } from '@/hooks/useCountAnimation';
import { LucideIcon } from 'lucide-react';

interface AnimatedStatsCardProps {
  number: number;
  unit: string;
  description: string;
  icon: LucideIcon;
  suffix?: string;
}

const AnimatedStatsCard = ({ number, unit, description, icon: Icon, suffix = "" }: AnimatedStatsCardProps) => {
  const { count, ref } = useCountAnimation(number, 2500);

  const formatNumber = (num: number) => {
    if (suffix === "Bilhões") {
      return num;
    }
    if (suffix === "Milhões") {
      return num;
    }
    if (suffix === "Mil") {
      return Math.floor(num / 1000);
    }
    return num;
  };

  return (
    <div 
      ref={ref}
      className="bg-white/20 backdrop-blur-sm border border-white/30 p-6 transition-all duration-300 hover:shadow-xl hover:shadow-black/10 hover:bg-white/25 hover:scale-105 cursor-pointer group"
    >
      <div className="flex items-start justify-between mb-4">
        <Icon 
          className="w-8 h-8 text-brand-blue group-hover:text-brand-blue/80 transition-colors" 
          strokeWidth={1.5}
        />
      </div>
      
      <div className="space-y-2">
        <div className="text-2xl md:text-3xl font-bold text-brand-blue">
          {suffix === "Mil" ? (
            <>
              <div>{formatNumber(count)}</div>
              <div className="text-xl">{unit}</div>
            </>
          ) : (
            <>
              {formatNumber(count)} {unit}
            </>
          )}
        </div>
        
        <div className="text-gray-800 text-sm leading-relaxed">
          {description}
        </div>
      </div>
    </div>
  );
};

export default AnimatedStatsCard;