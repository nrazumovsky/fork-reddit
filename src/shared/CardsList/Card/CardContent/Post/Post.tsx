import React from 'react';
import { createPortal } from 'react-dom';
import { useClickOutside } from '../../../../../hooks/useClickOutside';
import { EColors } from '../../../../UI/EColors';
import { ReplyField } from '../../../../UI/ReplyField';
import { Text } from '../../../../UI/Text';
import { CommentsBlock } from './CommentsBlock';
import styles from './post.css';

export interface IPostProps {
  onClose?: () => void;
}

export function Post({ onClose }: IPostProps) {
  const ref = useClickOutside({ onClose: onClose });

  const node = document.getElementById('modal_root');
  if (!node) return null;

  return createPortal(
    <div className={styles.modal} ref={ref}>
      <Text As='h2' size={20} color={EColors.black}>
        Post title
      </Text>
      <Text As='p' size={14} color={EColors.gray66}>
        Post content
      </Text>
      <ReplyField />
      <CommentsBlock />
    </div>,
    node,
  );
}
