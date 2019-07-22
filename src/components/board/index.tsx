import React, { FunctionComponent } from 'react';
import MemoryCard from 'components/card';
import { ICard } from 'services/card';
import './index.scss';

interface BoardProps {
  cards: ICard[];
  flipped: string[];
  solved: string[];
  disabled: boolean;
  onClick: (id: string) => void;
};

const Board: FunctionComponent<BoardProps> = ({ cards, flipped, solved, disabled, onClick }) => {
  const renderCard = (card: ICard) => {
    const isFlipped: boolean = flipped.includes(card.id);
    const isSolved: boolean = solved.includes(card.id);

    const handleClick = () => !disabled && onClick(card.id);

    return (
      <MemoryCard
        key={card.id}
        type={card.type}
        isFlipped={isFlipped}
        isSolved={isSolved}
        onClick={handleClick}
      />
    );
  };

  return (
    <div className="board">
      {cards.map(renderCard)}
    </div>
  );
};

export default Board;