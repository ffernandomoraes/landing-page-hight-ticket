import { useCallback, useEffect, useState } from "react";

interface CarouselIndicatorsProps {
  api: any; // Embla API
  className?: string;
}

const CarouselIndicators = ({ api, className = "" }: CarouselIndicatorsProps) => {
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  const onSelect = useCallback((api: any) => {
    if (!api) return;
    setCurrent(api.selectedScrollSnap());
    setCount(api.scrollSnapList().length);
  }, []);

  useEffect(() => {
    if (!api) return;
    
    onSelect(api);
    api.on("reInit", onSelect);
    api.on("select", onSelect);
  }, [api, onSelect]);

  if (count <= 1) return null;

  return (
    <div className={`flex justify-center gap-2 mt-4 md:hidden ${className}`}>
      {Array.from({ length: count }).map((_, index) => (
        <button
          key={index}
          className={`w-2 h-2 rounded-full transition-colors duration-200 ${
            index === current ? "bg-brand-blue" : "bg-stone-300"
          }`}
          onClick={() => api?.scrollTo(index)}
        />
      ))}
    </div>
  );
};

export default CarouselIndicators;