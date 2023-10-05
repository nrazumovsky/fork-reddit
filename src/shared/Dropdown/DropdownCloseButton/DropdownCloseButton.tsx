import React from 'react';
import { Button } from '../../UI/Button';
import { EColors } from '../../UI/EColors';
import { Text } from '../../UI/Text';
import styles from './dropdownclosebutton.css';

export function DropdownCloseButton() {
  return (
    <Text As='li' size={14} color={EColors.gray99}>
      <Button As='button' className={styles.button}>
        Закрыть
      </Button>
    </Text>
  );
}
