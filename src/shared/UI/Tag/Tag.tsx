import React from 'react';
import { EColors } from '../EColors';
import { Text } from '../Text';
import styles from './tag.css';

export function Tag() {
  return (
    <Text As='span' size={14} color={EColors.black} className={styles.tag}>
      Лига юристов
    </Text>
  );
}
