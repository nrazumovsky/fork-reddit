import React from 'react';
import { Button } from '../Button';
import { EColors } from '../EColors';
import { Text } from '../Text';
import styles from './authorlink.css';

interface IAuthorLinkProps {
  authorImg?: string;
  authorName?: string;
  className?: string;
}

export function AuthorLink(props: IAuthorLinkProps) {
  const { authorImg, authorName, className } = props;
  const imgSrc = authorImg
    ? authorImg
    : 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=580&q=80';

  return (
    <div className={className}>
      <img className={styles.avatar} src={imgSrc} alt='userpic' />
      <Text As='span' size={14} color={EColors.orange}>
        <Button As='a' className={styles.username} href='#'>
          {authorName ? authorName : 'Михаил Рогов'}
        </Button>
      </Text>
    </div>
  );
}
