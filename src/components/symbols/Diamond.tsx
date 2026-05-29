import type { SymbolProps } from '../../types/Card';

export default function Diamond({ id, color, fill, count }: SymbolProps) {
  const patternId = `stripes-diamond-${id}`;
  const fillColor =
    fill === 'solid' ? color : fill === 'empty' ? 'none' : `url(#${patternId})`;
  return (
    <>
      {Array.from({ length: count }, (_, index) => (
        <svg
          key={index}
          viewBox="5 5 190 90"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id={patternId}
              width="12"
              height="8"
              patternUnits="userSpaceOnUse"
              patternTransform="rotate(45)"
            >
              <line
                x1="0"
                y1="0"
                x2="0"
                y2="8"
                stroke={color}
                strokeWidth="7"
              />
            </pattern>
          </defs>

          <polygon
            points="10,50 100,90 190,50 100,10"
            strokeWidth="5"
            fill={fillColor}
            stroke={color}
          />
        </svg>
      ))}
    </>
  );
}
