import React from 'react';

interface IButton {
  As?: 'button' | 'a';
  type?: 'button' | 'submit' | 'reset';
  children?: React.ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
}

export function Button(props: IButton) {
  const { As = 'button', type, children, className, href, onClick } = props;

  return (
    <As className={className} type={type} href={href} onClick={onClick}>
      {children}
    </As>
  );
}
