type CardProps = {
  index: number;
};

type SymbolProps = {
  color: string;
  fill: 'empty' | 'solid' | 'striped';
};

type Shape = 'oval' | 'diamond' | 'squiggle';
type Color = 'red' | 'green' | 'blue';
type Fill = 'empty' | 'solid' | 'striped';
type Count = 1 | 2 | 3;

export type { CardProps, SymbolProps, Shape, Color, Fill, Count };
