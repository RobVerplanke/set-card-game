import type { SymbolProps } from '../../../types/Card';

// CSS
import styles from './Diamond.module.css'; // CSS module

export default function Diamond({ id, color, fill, count }: SymbolProps) {
  const patternId = `stripes-diamond-${id}`;
  const fillColor =
    fill === 'solid' ? color : fill === 'empty' ? 'none' : `url(#${patternId})`;
  return (
    <div className={styles.symbols}>
      {Array.from({ length: count }, (_, index) => (
        <svg
          key={index}
          className={styles.diamond}
          viewBox="-15 5 230 190"
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
            points="20,10 180,10 210,50 100,190 -10,50"
            fill={fillColor}
            stroke={color}
            strokeWidth="5"
          />
        </svg>
      ))}
    </div>
  );
}
