import type { SymbolProps } from '../../types/Card';

export default function Oval({ color, fill }: SymbolProps) {
  return (
    <svg
      viewBox="0 0 200 100"
      width="75"
      height="40"
      xmlns="http://www.w3.org/2000/svg"
    >
      <ellipse
        cx="100"
        cy="50"
        rx="90"
        ry="40"
        fill={fill}
        stroke={color}
        strokeWidth="5"
      />
    </svg>
  );
}
