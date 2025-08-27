import { useEffect, useRef } from 'react';

interface LordIconProps {
  src: string;
  trigger?: string;
  stroke?: string;
  colors?: string;
  style?: React.CSSProperties;
  className?: string;
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lord-icon': {
        src: string;
        trigger?: string;
        stroke?: string;
        colors?: string;
        style?: React.CSSProperties;
        className?: string;
        ref?: React.RefObject<HTMLElement>;
      };
    }
  }
}

const LordIcon = ({ src, trigger = "hover", stroke = "light", colors, style, className }: LordIconProps) => {
  const iconRef = useRef<HTMLElement>(null);

  return (
    <lord-icon
      ref={iconRef}
      src={src}
      trigger={trigger}
      stroke={stroke}
      colors={colors}
      style={style}
      className={className}
    />
  );
};

export default LordIcon;