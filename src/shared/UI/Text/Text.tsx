import classNames from 'classnames';
import React from 'react';
import { EColors } from '../EColors';
import styles from './text.css';

export type TSizes = 28 | 20 | 16 | 14 | 12 | 10;

interface ITextProps {
  id?: string;
  As: 'li' | 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'div' | 'time';
  size: TSizes;
  color: EColors;
  className?: string;
  children?: React.ReactNode;
}

export function Text(props: ITextProps) {
  const { As = 'span', children, size, color, className } = props;

  const classes = classNames(styles[`s${size}`], styles[`${color}`], [
    `${className}`,
  ]);

  return <As className={classes}>{children}</As>;
}
