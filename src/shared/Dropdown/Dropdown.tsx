import React from 'react';
import { Button } from '../UI/Button';
import { EColors } from '../UI/EColors';
import { Icon } from '../UI/Icon';
import { EIcons } from '../UI/Icon/EIcons';
import styles from './cardactionmenu.css';

export function Dropdown() {
  return (
    <Button As='button' className={styles.menuButton}>
      <Icon name={EIcons.menu} size={20} color={EColors.grayD9} />
    </Button>
  );
}
