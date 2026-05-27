import type { SymbolProps } from '../../types/Card';

export default function Diamond({ color, fill }: SymbolProps) {
  return (
    <svg viewBox="5 5 190 90" xmlns="http://www.w3.org/2000/svg">
      <polygon
        points="10,50 100,90 190,50 100,10"
        strokeWidth="5"
        fill={fill}
        stroke={color}
      />
    </svg>
  );
}
