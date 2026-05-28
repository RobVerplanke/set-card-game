import type { SymbolProps } from '../../types/Card';

export default function Diamond({ color, fill }: SymbolProps) {
  const fillColor =
    fill === 'solid'
      ? color
      : fill === 'empty'
        ? 'none'
        : 'url(#stripesDiamonds)';
  return (
    <svg viewBox="5 5 190 90" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern
          id="stripesDiamonds"
          width="12"
          height="8"
          patternUnits="userSpaceOnUse"
          patternTransform="rotate(45)"
        >
          <line x1="0" y1="0" x2="0" y2="8" stroke={color} strokeWidth="5" />
        </pattern>
      </defs>

      <polygon
        points="10,50 100,90 190,50 100,10"
        strokeWidth="5"
        // fill="url(#stripesDiamonds)" // Striped
        // fill="white" // Empty
        fill={fillColor} // Color filled
        stroke={color}
      />
    </svg>
  );
}
