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

type CardProps = Card & {
  onClick: () => void;
  isHighlighted: boolean;
  isSelected: boolean;
};

type SymbolProps = Pick<Card, 'id' | 'shape' | 'color' | 'fill' | 'count'>;

export type { SymbolProps, Card, CardProps };
