import React, { FunctionComponent } from 'react';
import MemoryCard from 'components/card';
import { ICard } from 'services/card';
import './index.scss';

interface BoardProps {
  cards: ICard[];
  flipped: string[];
  onClick: (id: string) => void;
};

const Board: FunctionComponent<BoardProps> = ({ cards, flipped, onClick }) => {
  const renderCard = (card: any) => {
    const handleClick = () => onClick(card.id);
    const isFlipped = flipped.includes(card.id);

    return (
      <MemoryCard
        key={card.id}
        type={card.type}
        isFlipped={isFlipped}
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