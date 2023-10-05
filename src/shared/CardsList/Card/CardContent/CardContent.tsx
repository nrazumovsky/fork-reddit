import React from 'react';
import { AuthorLink } from '../../../UI/AuthorLink';
import { PostDate } from '../../../UI/PostDate';
import { CardDescription } from './CardDescription';
import styles from './cardcontent.css';

interface ICardContentProps {
  textContent?: string;
  authorImg?: string;
  authorName?: string;
  date?: string;
}

export function CardContent(props: ICardContentProps) {
  const { textContent, authorImg, authorName, date } = props;

  return (
    <div className={styles.textContent}>
      <CardDescription textContent={textContent} />
      <div className={styles.itemsAlign}>
        <div className={styles.itemsOrder}>
          <AuthorLink
            authorName={authorName}
            authorImg={authorImg}
            className={styles.authorAlign}
          />
          <PostDate
            date={date}
            className={styles.postDateOffset}
            publishedLabel={true}
          />
        </div>
      </div>
    </div>
  );
}
