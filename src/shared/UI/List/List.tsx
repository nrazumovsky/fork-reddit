import React from 'react';

interface IItem {
  As?: 'a' | 'button' | 'li' | 'div';
  id?: string;
  textContent?: string;
  className?: string;
  href?: string;
}

interface IListProps {
  list: IItem[];
}

export function List({ list }: IListProps) {
  return (
    <>
      {list.map(({ As = 'li', id, textContent, className, href }) => (
        <As className={className} key={id} href={href}>
          {textContent ? textContent : 'Title'}
        </As>
      ))}
    </>
  );
}
