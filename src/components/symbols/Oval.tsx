import type { SymbolProps } from '../../types/Card';

export default function Oval({ color, fill }: SymbolProps) {
  const fillColor =
    fill === 'solid' ? color : fill === 'empty' ? 'none' : 'url(#stripesOval)';

  return (
    <svg
      viewBox="0 0 200 100"
      width="75"
      height="40"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern
          id="stripesOval"
          width="12"
          height="8"
          patternUnits="userSpaceOnUse"
          patternTransform="rotate(45)"
        >
          <line x1="0" y1="0" x2="0" y2="8" stroke={color} strokeWidth="5" />
        </pattern>
      </defs>

      <ellipse
        cx="100"
        cy="50"
        rx="90"
        ry="40"
        fill={fillColor}
        stroke={color}
        strokeWidth="5"
      />
    </svg>
  );
}
