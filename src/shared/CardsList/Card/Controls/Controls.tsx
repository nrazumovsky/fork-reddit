import React from 'react';
import { CardActions } from './CardActions';
import { CommentButton } from './CommentButton';
import { UpVote } from './UpVote';
import styles from './controls.css';

interface IControlsProps {
  rating?: string;
}

export function Controls({ rating }: IControlsProps) {
  return (
    <div className={styles.controls}>
      <UpVote rating={rating} />
      <CommentButton />
      <CardActions />
    </div>
  );
}
