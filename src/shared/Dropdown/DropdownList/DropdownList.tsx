import React from 'react';
import { createPortal } from 'react-dom';
import { useDropdownOpen } from '../../../hooks/useDropdownOpen';
import { Button } from '../../UI/Button';
import { EColors } from '../../UI/EColors';
import { Icon } from '../../UI/Icon';
import { EIcons } from '../../UI/Icon/EIcons';
import { Text } from '../../UI/Text';
import { DropdownCloseButton } from '../DropdownCloseButton';
import styles from './dropdownlist.css';

interface IDropdownListProps {
  onClose?: () => void;
}

export function DropdownList({ onClose }: IDropdownListProps) {
  const ref = useDropdownOpen({ onClose: onClose });

  const node = document.getElementById('modal_root');
  if (!node) return null;

  return createPortal(
    <div className={styles.modal} ref={ref}>
      <Text As='li' size={14} color={EColors.gray99} className={styles.item}>
        <Button className={`${styles.listItem} ${styles.listItemSeparator}`}>
          <Icon
            name={EIcons.reply}
            size={14}
            offset={6}
            color={EColors.grayD9}
          />
          Комментарии
        </Button>
      </Text>
      <Text As='li' size={14} color={EColors.gray99} className={styles.item}>
        <Button className={`${styles.listItem} ${styles.listItemSeparator}`}>
          <Icon
            name={EIcons.share}
            size={14}
            offset={6}
            color={EColors.grayD9}
          />
          Поделиться
        </Button>
      </Text>
      <Text As='li' size={14} color={EColors.gray99} className={styles.item}>
        <Button className={`${styles.listItem} ${styles.listItemSeparator}`}>
          <Icon
            name={EIcons.hide}
            size={14}
            offset={6}
            color={EColors.grayD9}
          />
          Скрыть
        </Button>
      </Text>
      <Text As='li' size={14} color={EColors.gray99} className={styles.item}>
        <Button className={`${styles.listItem} ${styles.listItemSeparator}`}>
          <Icon
            name={EIcons.save}
            size={14}
            offset={6}
            color={EColors.grayD9}
          />
          Сохранить
        </Button>
      </Text>
      <Text As='li' size={14} color={EColors.gray99} className={styles.item}>
        <Button className={`${styles.listItem} ${styles.listItemSeparator}`}>
          <Icon
            name={EIcons.report}
            size={14}
            offset={6}
            color={EColors.grayD9}
          />
          Пожаловаться
        </Button>
      </Text>
      <DropdownCloseButton />
    </div>,
    node,
  );
}
