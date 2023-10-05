import React from 'react';
import { CardContent } from './CardContent';
import { Media } from './CardContent/Media';
import { Controls } from './Controls';
import { Dropdown } from './Dropdown';
import styles from './card.css';

interface ICardProps {
  id?: string;
  textContent?: string;
  image?: string;
  authorImg?: string;
  authorName?: string;
  rating?: string;
  date?: string;
}

export function Card(props: ICardProps) {
  const { id, textContent, image, authorImg, authorName, rating, date } = props;

  return (
    <li id={id} className={styles.card}>
      <CardContent
        textContent={textContent}
        authorImg={authorImg}
        authorName={authorName}
        date={date}
      />
      <Media image={image} />
      <Dropdown />
      <Controls rating={rating} />
    </li>
  );
}
