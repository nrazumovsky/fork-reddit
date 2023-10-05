import classNames from 'classnames';
import React, { ReactNode } from 'react';
import { EColors } from '../EColors';
import { EIcons } from './EIcons';
import styles from './icon.css';
import svg from './icons.svg';

type TSizes = 20 | 16 | 14;
type TOffsets = 12 | 8 | 6 | 4;

interface IIconsProps {
  name?: EIcons | string;
  color?: EColors;
  size: TSizes;
  offset?: TOffsets;
  className?: string;
  children?: ReactNode;
  hover?: string;
}

export function Icon(props: IIconsProps) {
  const { name, color, size, offset } = props;
  const classes = classNames(
    styles[`size-${size}`],
    styles[`${color}`],
    styles[`offset-${offset}`],
  );

  return (
    <svg className={`icon icon-${name} ${classes}`}>
      <use xlinkHref={`${svg}#${name}`} />
    </svg>
  );
}
