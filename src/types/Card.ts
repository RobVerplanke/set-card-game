type Shape = 'oval' | 'diamond' | 'squiggle';
type Color = 'red' | 'green' | 'blue';
type Fill = 'empty' | 'solid' | 'striped';
type Count = 1 | 2 | 3;

type Card = {
  key: number;
  id: number;
  shape: Shape;
  color: Color;
  fill: Fill;
  count: Count;
};

type SymbolProps = Pick<Card, 'color' | 'fill' | 'count'>;

export type { SymbolProps, Card };
