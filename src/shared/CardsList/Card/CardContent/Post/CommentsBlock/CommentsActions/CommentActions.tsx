import React, { useRef, useState } from 'react';
import { CommentFormContainer } from '../../../CommentFormContainer';
import { Reply } from './CommentsAction/Reply';
import { Report } from './CommentsAction/Report';
import { Share } from './CommentsAction/Share';
import styles from './commentactions.css';

interface ICommentActionProps {
  id?: string;
  authorName?: string;
}

export function CommentActions({ id, authorName }: ICommentActionProps) {
  const [showCommentForm, setShowCommentForm] = useState(false);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const handleReplyClick = () => {
    setShowCommentForm(true);
    inputRef.current?.focus();
  };

  return (
    <div>
      <div className={styles.commentActionContainer}>
        <Reply onClick={handleReplyClick} key={id} />
        <Share />
        <Report />
      </div>
      {showCommentForm && (
        <div className={styles.commentReplyContainer}>
          <CommentFormContainer inputRef={inputRef} authorName={authorName} />
        </div>
      )}
    </div>
  );
}
