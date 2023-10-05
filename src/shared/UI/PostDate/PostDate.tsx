import React from 'react';
import { EColors } from '../EColors';
import { Text } from '../Text';
import styles from './postdate.css';

interface IPostDateProps {
  date?: string;
  publishedLabel?: boolean;
  className?: string;
}

export function PostDate({ date, className, publishedLabel }: IPostDateProps) {
  return (
    <div className={className}>
      <Text
        As='time'
        size={14}
        color={EColors.gray99}
        className={styles.createdAt}
      >
        {publishedLabel && (
          <Text
            As='span'
            size={14}
            color={EColors.gray99}
            className={styles.publishedLabel}
          >
            опубликовано
          </Text>
        )}
        {date ? date : '1 августа'}
      </Text>
    </div>
  );
}
