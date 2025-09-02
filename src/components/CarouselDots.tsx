import React, { useEffect, useState } from 'react';
import { type CarouselApi } from '@/components/ui/carousel';

interface CarouselDotsProps {
  api: CarouselApi;
  className?: string;
}

const CarouselDots: React.FC<CarouselDotsProps> = ({ api, className = "" }) => {
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    const onSelect = () => {
      setCurrent(api.selectedScrollSnap() + 1);
    };

    api.on("select", onSelect);
    
    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  if (!api || count <= 1) return null;

  return (
    <div className={`flex items-center justify-center gap-2 mt-4 ${className}`}>
      {Array.from({ length: count }).map((_, index) => (
        <button
          key={index}
          className={`w-2 h-2 rounded-full transition-all duration-200 ${
            index + 1 === current 
              ? 'bg-brand-blue scale-110' 
              : 'bg-gray-300 hover:bg-gray-400'
          }`}
          onClick={() => api.scrollTo(index)}
          aria-label={`Go to slide ${index + 1}`}
        />
      ))}
    </div>
  );
};

export default CarouselDots;