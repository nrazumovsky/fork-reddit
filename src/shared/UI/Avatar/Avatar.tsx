import classNames from 'classnames';
import React from 'react';
import { Button } from '../Button';
import { EColors } from '../EColors';
import { Text } from '../Text';
import { AvatarDefaultImage } from './AvatarDefaultImage';
import styles from './avatar.css';

type TSizes = 20 | 30 | 50;

interface IAvatarProps {
  size: TSizes;
  name?: string;
  src?: string;
}

export function Avatar(props: IAvatarProps) {
  const { size, name, src } = props;
  const classes = classNames(styles[`size-${size}`]);
  const avatarImage = src ? (
    <img src={src} alt={name} className={classes} />
  ) : (
    <AvatarDefaultImage />
  );

  return (
    <Button
      As='a'
      href='https://www.reddit.com/api/v1/authorize?client_id=l3OLhQFV4JZqKnWSjGDgfw&response_type=code&state=random_string&redirect_uri=http://localhost:3000/auth&duration=permanent&scope=read submit identity'
      className={styles.userBox}
    >
      <div className={styles.avatarBox}>{avatarImage}</div>
      <Text
        As={'span'}
        size={20}
        className={styles.avatarName}
        color={name ? EColors.black : EColors.gray99}
      >
        {name || 'Аноним'}
      </Text>
    </Button>
  );
}
