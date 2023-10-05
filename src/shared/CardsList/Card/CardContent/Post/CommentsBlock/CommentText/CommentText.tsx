import React from 'react';
import { EColors } from '../../../../../../UI/EColors';
import { Text } from '../../../../../../UI/Text';
import styles from './commenttext.css';

interface ICommentTextProps {
  text?: string;
}

export function CommentText({ text }: ICommentTextProps) {
  return (
    <Text
      As='p'
      size={14}
      color={EColors.black}
      className={styles.commentTextContainer}
    >
      {text}
    </Text>
  );
}
