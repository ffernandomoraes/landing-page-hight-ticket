import { useCountAnimation } from '@/hooks/useCountAnimation';
import { LucideIcon } from 'lucide-react';
import LordIcon from './LordIcon';

interface AnimatedStatsCardProps {
  number: number;
  unit: string;
  description: string;
  icon?: LucideIcon;
  lordIcon?: {
    src: string;
    size?: number;
  };
  suffix?: string;
  colorClass?: string;
}

const AnimatedStatsCard = ({ number, unit, description, icon: Icon, lordIcon, suffix = "", colorClass = "text-blue-900" }: AnimatedStatsCardProps) => {
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
      className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl p-3 md:p-6 transition-all duration-300 shadow-gradient-hover hover:bg-white/25 hover:scale-105 cursor-pointer group relative overflow-hidden w-full h-[260px] flex flex-col"
    >
      <div className="flex items-start justify-between mb-2 md:mb-4 flex-shrink-0">
        {lordIcon ? (
          <LordIcon
            src={lordIcon.src}
            trigger="manual"
            stroke="regular"
            colors="primary:#2878e0,secondary:#012445"
            style={{
              width: `${lordIcon.size || 50}px`,
              height: `${lordIcon.size || 50}px`
            }}
          />
        ) : Icon ? (
          <Icon 
            className={`w-6 h-6 md:w-8 md:h-8 ${colorClass} group-hover:opacity-80 transition-colors`}
            strokeWidth={1.5}
          />
        ) : null}
      </div>
      
      <div className="space-y-2 flex-1 flex flex-col justify-center">
        <div className={`text-lg md:text-2xl lg:text-3xl font-bold ${colorClass} h-8 md:h-10 flex items-center justify-start whitespace-nowrap`}>
          {formatNumber(count)} {unit}
        </div>
        
        <div className="text-gray-800 text-xs md:text-sm leading-relaxed h-8 md:h-10 flex items-start">
          {description}
        </div>
      </div>
    </div>
  );
};

export default AnimatedStatsCard;