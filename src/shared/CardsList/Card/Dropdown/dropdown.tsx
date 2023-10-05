import React from 'react';
import { DropdownList } from '../../../Dropdown/DropdownList';
import { Button } from '../../../UI/Button';
import { EColors } from '../../../UI/EColors';
import { Icon } from '../../../UI/Icon';
import { EIcons } from '../../../UI/Icon/EIcons';
import styles from './dropdown.css';

export function Dropdown() {
  const [isToggle, setToggle] = React.useState(false);

  return (
    <div id='dropdown' className={styles.container}>
      <Button
        As='button'
        onClick={() => setToggle(true)}
        className={styles.menuButton}
      >
        <Icon name={EIcons.menu} size={20} color={EColors.grayD9} />
      </Button>

      {isToggle && (
        <DropdownList
          onClose={() => {
            setToggle(false);
          }}
        />
      )}
    </div>
  );
}
