import React from 'react';
import { Button } from '../../../../UI/Button';
import { EColors } from '../../../../UI/EColors';
import { Icon } from '../../../../UI/Icon';
import { EIcons } from '../../../../UI/Icon/EIcons';
import { Text } from '../../../../UI/Text';
import styles from './upvote.css';

interface IUpVoteProps {
  rating?: string;
}

export function UpVote({ rating }: IUpVoteProps) {
  return (
    <div className={styles.karmaCounter}>
      <Button>
        <Icon
          size={20}
          name={EIcons.upscore}
          color={EColors.grayD9}
          className={styles.up}
        />
      </Button>
      <Text As='span' size={14} color={EColors.black}>
        {rating}
      </Text>
      <Button>
        <Icon
          size={20}
          name={EIcons.downscore}
          color={EColors.grayD9}
          className={styles.down}
        />
      </Button>
    </div>
  );
}
