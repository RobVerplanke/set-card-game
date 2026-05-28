import type { SymbolProps } from '../../types/Card';

export default function Squiggle({ color, fill }: SymbolProps) {
  const fillColor =
    fill === 'solid'
      ? color
      : fill === 'empty'
        ? 'none'
        : 'url(#stripesSquiggle)';

  return (
    <svg viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern
          id="stripesSquiggle"
          width="12"
          height="8"
          patternUnits="userSpaceOnUse"
          patternTransform="rotate(45)"
        >
          <line x1="0" y1="0" x2="0" y2="8" stroke={color} strokeWidth="7" />
        </pattern>
      </defs>
      <path
        d="M 20,30
        C 50,0 80,0 100,25
        C 120,50 150,60 180,20
        C 195,10 195,60 180,75
        C 150,105 120,95 100,70
        C 80,45 50,60 20,80
        C 5,73 5,40 20,30
        Z"
        fill={fillColor}
        stroke={color}
        strokeWidth="4"
      />
    </svg>
  );
}
