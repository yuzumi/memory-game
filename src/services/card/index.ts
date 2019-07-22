import { v1 } from 'uuid';

const types: string[] = [ 
  'angular', 
  'aurelia', 
  'backbone', 
  'ember', 
  'react', 
  'vue' 
];

export interface ICard {
  id: string;
  type: string;
};

export function shuffle(cards: ICard[]): ICard[] {
  return cards
    .slice()
    .sort(() => Math.random() - 0.5);
};

export default function initialize(): ICard[] {
  const cards = types.reduce((accumulator: ICard[], type: string) => {
    return [
      ...accumulator,
      { id: v1(), type },
      { id: v1(), type },
    ];
  }, []);

  return shuffle(cards);
};