import React from 'react';
import styles from './media.css';

interface IMediaProps {
  image?: string;
}

export function Media({ image }: IMediaProps) {
  return (
    <div className={styles.preview}>
      <a href='#'>
        <img className={styles.previewImg} src={image} alt='Картинка новости' />
      </a>
    </div>
  );
}
