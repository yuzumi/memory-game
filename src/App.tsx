import React, { FunctionComponent, useState, useEffect } from 'react';
import Board from 'components/board';
import initialize, { ICard } from 'services/card';

const App: FunctionComponent = () => {
  const [ cards, setCards ] = useState<ICard[]>([]);
  const [ flipped, setFlipped ] = useState<string[]>([]);
  const [ solved, setSolved ] = useState<string[]>([]);
  const [ disabled, setDisabled ] = useState<boolean>(false);

  const handleClick = (id: string) => {
    setDisabled(true);

    if (flipped.length === 0) {
      setFlipped([ id ]);
      setDisabled(false);
    } else {
      if (isSameCardClicked(id)) {
        return;
      }

      setFlipped([ flipped[0], id ]);

      if (isMatch(id)) {
        setSolved([ ...solved, flipped[0], id ]);
        resetCards();
      } else {
        setTimeout(resetCards, 2000);
      }
    }
  };

  useEffect(() => {
    setCards(initialize());
  }, []);

  const resetCards = (): void => {
    setFlipped([]);
    setDisabled(false);
  };

  const isMatch = (id: string): boolean => {
    const clickedCard: ICard | undefined = cards.find((card: ICard) => card.id === id);
    const flippedCard: ICard | undefined = cards.find((card: ICard) => card.id === flipped[0]);

    if (
      flippedCard && 
      clickedCard && 
      flippedCard.type === clickedCard.type
    ) {
      return true;
    }

    return false;
  };

  const isSameCardClicked = (id: string): boolean => {
    return flipped.includes(id);
  };

  return (
    <div className="app">
      <Board 
        cards={cards}
        flipped={flipped}
        solved={solved}
        disabled={disabled}
        onClick={handleClick}
      />
    </div>
  );
};

export default App;
