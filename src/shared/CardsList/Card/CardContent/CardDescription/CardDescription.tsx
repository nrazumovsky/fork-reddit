import React, { useState } from 'react';
import { Button } from '../../../../UI/Button';
import { EColors } from '../../../../UI/EColors';
import { Text } from '../../../../UI/Text';
import { Post } from '../Post';
import styles from './carddescription.css';

interface ICardDescriptionProps {
  textContent?: string;
}

export function CardDescription({ textContent }: ICardDescriptionProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <Text As={'h2'} size={20} color={EColors.black} className={styles.title}>
      <Button
        As='a'
        href='#'
        onClick={() => {
          setIsModalOpen(true);
        }}
      >
        {textContent}
      </Button>
      {isModalOpen && (
        <Post
          onClose={() => {
            setIsModalOpen(false);
          }}
        />
      )}
    </Text>
  );
}
