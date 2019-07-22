import React, { FunctionComponent } from 'react';
import classnames from 'classnames';
import Image from 'components/shared/image';
import './index.scss';

interface CardProps {
  type: string;
  isFlipped: boolean;
  onClick: () => void;
};

const MemoryCard: FunctionComponent<CardProps> = ({ type, isFlipped, onClick }) => (
  <div
    className={classnames(
      'flip-container', {
        'is-flipped': isFlipped
      })}
    onClick={onClick}
  >
    <div className="flipper">
      <Image
        className={classnames({
          'front': isFlipped,
          'back': !isFlipped
        })}
        src={isFlipped
          ? `/images/${type}.svg`
          : `/images/badge.svg`}
        alt={type}
      />
    </div>
  </div>
);

export default MemoryCard;