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

type Card = {
  id: number;
  shape: Shape;
  color: Color;
  fill: Fill;
  count: Count;
};

export type { CardProps, SymbolProps, Shape, Color, Fill, Count, Card };
