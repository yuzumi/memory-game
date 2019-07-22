import React, { FunctionComponent, useState, useEffect } from 'react';
import Board from 'components/board';
import initialize, { ICard } from 'services/card';

const App: FunctionComponent = () => {
  const [ cards, setCards ] = useState<ICard[]>([]);
  const [ flipped, setFlipped ] = useState<string[]>([]);

  const handleClick = (id: string) => {
    setFlipped([ ...flipped, id ]);
  };

  useEffect(() => {
    setCards(initialize());
  }, []);

  return (
    <div className="app">
      <Board 
        cards={cards}
        flipped={flipped}
        onClick={handleClick}
      />
    </div>
  );
};

export default App;
