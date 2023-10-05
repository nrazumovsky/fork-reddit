import React from 'react';
import { useComments } from '../../hooks/useComments';
import { SearchBlock } from './SearchBlock';
import { SortBlock } from './SortBlock';
import { ThreadTitle } from './ThreadTitle';
import styles from './header.css';

export function Header() {
  const data = useComments;

  return (
    <header className={styles.header}>
      <ThreadTitle />
      <SortBlock />
      <SearchBlock />
    </header>
  );
}
