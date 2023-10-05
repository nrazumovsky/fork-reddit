import React from 'react';
import { useComments } from '../../../../../../hooks/useComments';
import { CommentText } from './CommentText';
import { CommentActions } from './CommentsActions';
import { CommentsAuthor } from './CommentsAuthor';
import styles from './commentsblock.css';

export function CommentsBlock() {
  const comments = useComments();

  return (
    <>
      {comments.map((comment) => {
        <div key={comment.id} className={styles.commentsBlockContainer}>
          <CommentsAuthor authorName={comment.author} />
          <CommentText text={comment.body} />
          <CommentActions authorName={comment.author} />
        </div>;
      })}
    </>
  );
}
