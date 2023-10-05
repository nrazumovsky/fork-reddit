import React from 'react';
import { AuthorLink } from '../../../../../../UI/AuthorLink';
import { PostDate } from '../../../../../../UI/PostDate';
import { Tag } from '../../../../../../UI/Tag';
import styles from './commentsauthor.css';

interface ICommentsAuthorProps {
  authorName?: string;
}

export function CommentsAuthor({ authorName }: ICommentsAuthorProps) {
  return (
    <div className={styles.commentsBlockContainer}>
      <AuthorLink className={styles.authorContainer} authorName={authorName} />
      <PostDate publishedLabel={false} className={styles.commentDateOffset} />
      <Tag />
    </div>
  );
}
