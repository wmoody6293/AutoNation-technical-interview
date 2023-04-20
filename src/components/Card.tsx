//@ts-ignore
import React, { FC } from 'react';

export interface CardProps {
  imgURL: string;
  title: string;
}

const Card: FC<CardProps> = ({ imgURL, title }) => {
  return (
    <div>
      {imgURL}
      {title}
    </div>
  );
};

export default Card;
