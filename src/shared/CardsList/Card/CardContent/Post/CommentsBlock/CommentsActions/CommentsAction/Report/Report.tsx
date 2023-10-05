import React from 'react';
import { Button } from '../../../../../../../../UI/Button';
import { EColors } from '../../../../../../../../UI/EColors';
import { Icon } from '../../../../../../../../UI/Icon';
import { EIcons } from '../../../../../../../../UI/Icon/EIcons';
import { Text } from '../../../../../../../../UI/Text';
import styles from '../commentsaction.css';

export function Report() {
  return (
    <Button className={styles.commentAction}>
      <Icon size={14} name={EIcons.report} color={EColors.grayD9} offset={6} />
      <Text As='span' size={14} color={EColors.black}>
        Пожаловаться
      </Text>
    </Button>
  );
}
